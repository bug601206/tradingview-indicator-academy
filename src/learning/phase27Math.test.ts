import { describe,expect,it } from 'vitest';
import { calculateAroon,calculateChop,calculateStc,calculateTrix,calculateVortex } from './phase27Math';
describe('Phase 2.7A indicator mathematics',()=>{
  it('TRIX equals the hand-calculated one-period percent change of triple EMA',()=>{const result=calculateTrix([100,101,102,104],2,2);expect(result[0]!.trix).toBe(0);expect(result[3]!.trix).toBeCloseTo(1.076847773,8)});
  it('TRIX uses first-value EMA seeding and returns finite warm-up estimates',()=>{const result=calculateTrix([100,100,100],18,9);expect(result.map(x=>x.trix)).toEqual([0,0,0]);expect(result.every(x=>Number.isFinite(x.signal))).toBe(true)});
  it('CHOP matches an independently hand-computed two-bar reference',()=>{const bars=[{open:9,high:10,low:8,close:9},{open:9,high:11,low:9,close:10}];expect(calculateChop(bars,2)[1]).toBeCloseTo(100*Math.log10(4/3)/Math.log10(2),10)});
  it('CHOP treats insufficient and zero-range windows as maximally non-directional',()=>{const bars=[{open:10,high:10,low:10,close:10},{open:10,high:10,low:10,close:10}];expect(calculateChop(bars,14)).toEqual([100,100])});
  it('Aroon uses the newest extreme and TradingView-style N+1 window',()=>{const bars=[{open:1,high:1,low:0,close:1},{open:2,high:3,low:2,close:2},{open:2,high:2,low:1,close:2},{open:0,high:1,low:-1,close:0}];const point=calculateAroon(bars,3).at(-1)!;expect(point.up).toBeCloseTo(100/3,10);expect(point.down).toBe(100)});
  it('Aroon maps a current extreme to 100 and an N-bars-old extreme to 0',()=>{const bars=[{open:0,high:9,low:0,close:1},{open:1,high:3,low:1,close:2},{open:2,high:4,low:2,close:3},{open:3,high:5,low:-1,close:4}];const point=calculateAroon(bars,3).at(-1)!;expect(point.up).toBe(0);expect(point.down).toBe(100)});
  it('Vortex matches rolling movement divided by rolling true range',()=>{const bars=[{open:9,high:10,low:8,close:9},{open:10,high:12,low:9,close:11}];const value=calculateVortex(bars,2)[1]!;expect(value.plus).toBeCloseTo(4/5,10);expect(value.minus).toBeCloseTo(1/5,10)});
  it('Vortex remains finite when a gap enlarges movement and True Range',()=>{const bars=[{open:10,high:11,low:9,close:10},{open:15,high:16,low:14,close:15}];const value=calculateVortex(bars,2)[1]!;expect(value.plus).toBeCloseTo(7/8,10);expect(value.minus).toBeCloseTo(3/8,10)});
  it('STC remains bounded and changes when cycle parameters change',()=>{const input=Array.from({length:80},(_,i)=>100+i*.1+Math.sin(i/4));const a=calculateStc(input,5,12,10,3),b=calculateStc(input,5,12,20,3);expect(a.every(x=>x.stc>=0&&x.stc<=100)).toBe(true);expect(a.map(x=>x.stc)).not.toEqual(b.map(x=>x.stc))});
  it('STC defines flat zero-denominator stages as neutral 50 with finite warm-up',()=>{const result=calculateStc([100,100,100,100],2,3,3,2);expect(result.map(x=>x.stc)).toEqual([50,50,50,50]);expect(result.every(x=>Number.isFinite(x.macd))).toBe(true)});
  it('rejects invalid parameter order',()=>expect(()=>calculateStc([1,2],10,5,10,3)).toThrow());
});
