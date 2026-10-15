import { describe,expect,it } from 'vitest';
import { atr,dmi,ema,rma,rsi,sma,toOhlc,trueRange } from './math';
describe('shared indicator mathematics',()=>{
  it('matches hand-calculated EMA and SMA reference values',()=>{expect(ema([10,12,14],3)).toEqual([10,11,12.5]);expect(sma([10,12,14],2)).toEqual([10,11,13])});
  it('matches Wilder RMA seed and recurrence',()=>{const values=rma([1,2,3,4],3);expect(values.slice(0,3)).toEqual([1,1.5,2]);expect(values[3]).toBeCloseTo(8/3,10)});
  it('handles RSI boundary references independently',()=>{expect(rsi([10,10,10,10],3)).toEqual([50,50,50,50]);expect(rsi([1,2,3,4,5],3).at(-1)).toBe(100);expect(rsi([5,4,3,2,1],3).at(-1)).toBe(0)});
  it('uses previous close for gap-aware True Range',()=>{const bars=[{open:10,high:11,low:9,close:10},{open:14,high:15,low:13,close:14}];expect(trueRange(bars)).toEqual([2,5]);expect(atr(bars,2)).toEqual([2,3.5])});
  it('keeps ADX direction separate from strength',()=>{const points=dmi(toOhlc([10,11,12,13,14,15,16]),3,3);expect(points.at(-1)!.plusDi).toBeGreaterThan(points.at(-1)!.minusDi);expect(points.at(-1)!.adx).toBeGreaterThanOrEqual(0)});
  it('rejects invalid lengths',()=>expect(()=>ema([1,2],0)).toThrow());
});
