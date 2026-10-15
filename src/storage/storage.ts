export type LearningState = 'NOT_STARTED' | 'LEARNING' | 'LEARNED';
export interface AcademySettings { language: 'zh-Hant'; theme: 'dark' | 'system' }
export interface AcademyStorageModel {
  favorites: string[];
  recentIndicators: string[];
  learningStatus: Record<string, LearningState>;
  personalNotes: Record<string, string>;
  settings: AcademySettings;
}

export const DEFAULT_STORAGE: AcademyStorageModel = { favorites: [], recentIndicators: [], learningStatus: {}, personalNotes: {}, settings: { language: 'zh-Hant', theme: 'dark' } };

export interface KeyValueStorage { get(): Promise<Partial<AcademyStorageModel>>; set(value: Partial<AcademyStorageModel>): Promise<void> }

export class AcademyStorage {
  constructor(private readonly storage: KeyValueStorage) {}
  async load(): Promise<AcademyStorageModel> { const stored = await this.storage.get(); return { ...DEFAULT_STORAGE, ...stored, settings: { ...DEFAULT_STORAGE.settings, ...stored.settings } }; }
  async toggleFavorite(indicatorId: string): Promise<boolean> {
    const model = await this.load();
    const exists = model.favorites.includes(indicatorId);
    const favorites = exists ? model.favorites.filter((id) => id !== indicatorId) : [...model.favorites, indicatorId];
    await this.storage.set({ favorites });
    return !exists;
  }
  async recordView(indicatorId: string): Promise<void> { const model = await this.load(); await this.storage.set({ recentIndicators: [indicatorId, ...model.recentIndicators.filter((id) => id !== indicatorId)].slice(0, 50) }); }
}

export const chromeStorageAdapter: KeyValueStorage = {
  async get() { return await chrome.storage.local.get() as Partial<AcademyStorageModel>; },
  async set(value) { await chrome.storage.local.set(value); },
};
