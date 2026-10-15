import { describe, expect, it } from 'vitest';
import { AcademyStorage, type KeyValueStorage } from './storage';

class MemoryStorage implements KeyValueStorage {
  value: Record<string, unknown> = {};
  async get() { return this.value; }
  async set(value: Record<string, unknown>) { Object.assign(this.value, value); }
}

describe('AcademyStorage', () => {
  it('persists favorites and de-duplicates recent views', async () => {
    const memory = new MemoryStorage(); const storage = new AcademyStorage(memory);
    expect(await storage.toggleFavorite('rsi')).toBe(true);
    await storage.recordView('rsi'); await storage.recordView('ema'); await storage.recordView('rsi');
    const model = await storage.load(); expect(model.favorites).toEqual(['rsi']); expect(model.recentIndicators).toEqual(['rsi', 'ema']);
  });
});
