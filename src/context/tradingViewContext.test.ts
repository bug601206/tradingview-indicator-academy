import { describe, expect, it } from 'vitest';
import { contextFromUrl, EMPTY_CONTEXT } from './tradingViewContext';

describe('TradingView context fallback', () => {
  it('recognizes a chart URL without reading page content', () => expect(contextFromUrl('https://www.tradingview.com/chart/abc/')).toEqual({ isTradingView: true, isChartPage: true }));
  it.each([undefined, '', 'not a url'])('returns empty context for %s', (url) => expect(contextFromUrl(url)).toEqual(EMPTY_CONTEXT));
  it('rejects lookalike domains', () => expect(contextFromUrl('https://eviltradingview.com/chart/x')).toEqual({ isTradingView: false, isChartPage: false }));
});
