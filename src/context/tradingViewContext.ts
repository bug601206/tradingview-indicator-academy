export interface TradingViewContext {
  isTradingView: boolean;
  isChartPage: boolean;
  symbol?: string;
  timeframe?: string;
  indicators?: string[];
}

export const EMPTY_CONTEXT: TradingViewContext = { isTradingView: false, isChartPage: false };

export function contextFromUrl(url?: string): TradingViewContext {
  if (!url) return EMPTY_CONTEXT;
  try {
    const parsed = new URL(url);
    const isTradingView = parsed.hostname === 'tradingview.com' || parsed.hostname === 'www.tradingview.com';
    return { isTradingView, isChartPage: isTradingView && parsed.pathname.startsWith('/chart/') };
  } catch { return EMPTY_CONTEXT; }
}

export async function getActiveTradingViewContext(): Promise<TradingViewContext> {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return contextFromUrl(tab?.url);
  } catch { return EMPTY_CONTEXT; }
}
