import { describe,expect,it } from 'vitest';
import { calculateMacd,ema,macdPresets } from './macdMath';
describe('MACD educational simulation',()=>{
  it('keeps a constant series at zero MACD',()=>expect(calculateMacd(Array<number>(40).fill(100),{fast:12,slow:26,signal:9}).every(point=>point.macd===0&&point.histogram===0)).toBe(true));
  it('responds faster with a shorter fast length',()=>{const prices=[...Array<number>(20).fill(100),...Array.from({length:20},(_,index)=>101+index)];const quick=calculateMacd(prices,{fast:5,slow:26,signal:9});const slow=calculateMacd(prices,{fast:12,slow:26,signal:9});expect(quick[25]!.macd).toBeGreaterThan(slow[25]!.macd)});
  it('validates parameter order',()=>expect(()=>calculateMacd([1,2,3],{fast:26,slow:12,signal:9})).toThrow());
  it('creates all eight visual lesson presets',()=>expect(Object.keys(macdPresets)).toHaveLength(8));
  it('computes deterministic EMA',()=>expect(ema([10,12,14],3)).toEqual([10,11,12.5]));
});
