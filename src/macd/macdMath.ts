export interface MacdPoint { price: number; macd: number; signal: number; histogram: number }
export interface MacdParameters { fast: number; slow: number; signal: number }
export function ema(values: number[], length: number): number[] {
  if (!Number.isInteger(length) || length < 1) throw new Error('EMA length must be a positive integer');
  if (values.length === 0) return [];
  const alpha = 2 / (length + 1); const output = [values[0]!];
  for (let index=1; index<values.length; index++) output.push(alpha*values[index]!+(1-alpha)*output[index-1]!);
  return output;
}
export function calculateMacd(prices: number[], parameters: MacdParameters): MacdPoint[] {
  if (parameters.fast >= parameters.slow) throw new Error('Fast length must be smaller than slow length');
  const fast=ema(prices,parameters.fast); const slow=ema(prices,parameters.slow);
  const macd=prices.map((_,index)=>fast[index]!-slow[index]!); const signal=ema(macd,parameters.signal);
  return prices.map((price,index)=>({price,macd:macd[index]!,signal:signal[index]!,histogram:macd[index]!-signal[index]!}));
}
const wave=(length:number,trend:number,amplitude:number,frequency:number,phase=0)=>Array.from({length},(_,index)=>100+trend*index+amplitude*Math.sin(index/frequency+phase));
export const macdPresets = {
  bullish: wave(56,-.08,2.6,5).map((value,index)=>value+(index>27?(index-27)*.28:0)),
  bearish: wave(56,.08,2.6,5,2.8).map((value,index)=>value-(index>27?(index-27)*.28:0)),
  zeroUp: wave(58,-.05,1.2,7).map((value,index)=>value+(index>22?(index-22)*.2:0)),
  expansion: wave(54,.02,1.1,8).map((value,index)=>value+(index>28?Math.pow(index-28,1.22)*.12:0)),
  contraction: Array.from({length:56},(_,index)=>100+index*.22+(index>29?-(index-29)*.16:0)+Math.sin(index/6)),
  bullishDivergence: Array.from({length:60},(_,index)=>100-index*.1+Math.sin(index/5)*2-(index>38?(index-38)*.025:0)),
  bearishDivergence: Array.from({length:60},(_,index)=>100+index*.1+Math.sin(index/5)*2+(index>38?(index-38)*.025:0)),
  range: wave(62,0,1.45,2.4),
} as const;
