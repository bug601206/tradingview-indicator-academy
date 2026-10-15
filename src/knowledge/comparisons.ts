import type { IndicatorComparison } from './types';
export const comparisons: IndicatorComparison[] = [
  {id:'ema-vs-macd',leftId:'ema',rightId:'macd',measureDifference:'EMA 是單一平滑價格水準；MACD 是快慢移動平均之差及其訊號平滑。',overlap:'兩者都從價格移動平均衍生，皆反映趨勢與滯後。',differences:'EMA 畫在價格尺度上；MACD 以零軸與 histogram 顯示均線差及動能變化。',complementarity:'EMA 可作直觀背景，MACD 可呈現快慢趨勢差正在擴大或收縮。',redundancyRisk:'若 MACD 與圖上的 EMA 使用相同週期，兩者不是獨立證據；多次確認可能只是重複同一價格平滑資訊。'},
  {id:'rsi-vs-macd',leftId:'rsi',rightId:'macd',measureDifference:'RSI 比較平滑平均漲跌並正規化至 0–100；MACD 比較快慢移動平均且無固定上下界。',overlap:'兩者皆由價格衍生並可描述方向動能與背離。',differences:'RSI 適合觀察有界水準與 range shift；MACD 適合觀察零軸、均線差與 histogram。',complementarity:'在趨勢背景中，MACD 可描述均線差，RSI 可描述近期漲跌平衡。',redundancyRisk:'兩者同時指向同一方向不等於兩份獨立資料；若策略只重複讀 momentum，可能沒有增加新維度。'},
  {id:'adx-vs-atr',leftId:'adx-dmi',rightId:'atr',measureDifference:'ADX 衡量方向移動的分離強度；ATR 衡量不分方向的真實 range 大小。',overlap:'兩者都源自 Wilder 系統且計算會用到 True Range。',differences:'高 ATR 可無趨勢；高 ADX 表示方向性較強，但波動的價格距離仍可能不同。',complementarity:'ADX 判斷是否有方向性，ATR 提供停損與部位所需的價格尺度。',redundancyRisk:'共享 True Range 元件不代表資訊相同；把兩者都解讀成「波動率」會錯失方向性與幅度的區別。'}
];
