import { describe,expect,it } from 'vitest';
import { calculateCmo,calculateElderRay,calculateKlinger,calculateKst,calculateMassIndex,type Ohlcv } from './phase27bMath';
describe('Phase 2.7B indicator mathematics',()=>{
  it('Klinger returns zero for zero volume and scales linearly with volume',()=>{const make=(scale:number):Ohlcv[]=>[{open:9,high:10,low:8,close:9,volume:0},{open:9,high:12,low:9,close:11,volume:100*scale},{open:11,high:13,low:10,close:12,volume:120*scale}];const zero=calculateKlinger(make(0),2,3,2),one=calculateKlinger(make(1),2,3,2),two=calculateKlinger(make(2),2,3,2);expect(zero.every(x=>x.kvo===0)).toBe(true);expect(two[2]!.kvo).toBeCloseTo(2*one[2]!.kvo,10)});
  it('CMO matches hand references and handles a flat denominator',()=>{expect(calculateCmo([1,2,3],2).at(-1)).toBe(100);expect(calculateCmo([3,2,1],2).at(-1)).toBe(-100);expect(calculateCmo([5,5,5],2)).toEqual([0,0,0])});
  it('KST matches a hand-weighted one-period ROC reference',()=>{const p={roc1:1,roc2:1,roc3:1,roc4:1,sma1:1,sma2:1,sma3:1,sma4:1,signal:1};const point=calculateKst([100,110],p)[1]!;expect(point.kst).toBe(100);expect(point.signal).toBe(100)});
  it('Mass Index sums a constant range ratio of one',()=>{const bars=Array.from({length:5},()=>({open:9,high:10,low:8,close:9}));expect(calculateMassIndex(bars,3,4).map(x=>x.mass)).toEqual([1,2,3,4,4])});
  it('Elder Ray matches direct high/low minus EMA arithmetic',()=>{const result=calculateElderRay([{open:9,high:11,low:8,close:10},{open:10,high:13,low:9,close:12}],3);expect(result[1]).toEqual({ema:11,bull:2,bear:-2,combined:0})});
  it('rejects invalid lengths and Klinger parameter order',()=>{expect(()=>calculateCmo([1],0)).toThrow();expect(()=>calculateKlinger([],55,34,13)).toThrow()});
});
