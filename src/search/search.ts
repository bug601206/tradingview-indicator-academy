import type { IndicatorKnowledgeEntry } from '../knowledge/types';

const normalize = (value: string): string => value.normalize('NFKC').toLocaleLowerCase().replace(/[\s_\-/()]+/g, '');

const termsFor = (entry: IndicatorKnowledgeEntry): string[] => [entry.id, entry.names.en, entry.names.zhHant, entry.names.zhHans ?? '', entry.names.abbreviation, ...(entry.names.relatedAbbreviations ?? []), ...entry.aliases].filter(Boolean);

export interface IndicatorSearchIndex { search(query: string, limit?: number): IndicatorKnowledgeEntry[] }

export function createSearchIndex(entries: IndicatorKnowledgeEntry[]): IndicatorSearchIndex {
  const rows = entries.map((entry) => ({ entry, terms: termsFor(entry).map(normalize) }));
  return {
    search(query, limit = 20) {
      const needle = normalize(query);
      if (!needle) return entries.slice(0, limit);
      return rows
        .map(({ entry, terms }) => ({ entry, score: Math.min(...terms.map((term) => term === needle ? 0 : term.startsWith(needle) ? 1 : term.includes(needle) ? 2 : 99)) }))
        .filter(({ score }) => score < 99)
        .sort((a, b) => a.score - b.score || a.entry.names.en.localeCompare(b.entry.names.en))
        .slice(0, limit)
        .map(({ entry }) => entry);
    },
  };
}
