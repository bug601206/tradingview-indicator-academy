import { describe, expect, it } from 'vitest';
import { failures, journeySections, myths, relationships, strategyFrameworks, visualLessons } from './macdGoldStandard';

describe('MACD gold-standard candidate content', () => {
  it('keeps the complete learning journey in a unique order', () => {
    expect(journeySections).toHaveLength(13);
    expect(new Set(journeySections.map(([id]) => id)).size).toBe(13);
  });

  it('includes all required Phase 2.5 learning sets', () => {
    expect(visualLessons).toHaveLength(8);
    expect(strategyFrameworks).toHaveLength(5);
    expect(relationships).toHaveLength(4);
    expect(failures).toHaveLength(7);
    expect(myths).toHaveLength(6);
  });
});
