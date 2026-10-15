import { describe,expect,it } from 'vitest';
import { indicatorEntries } from '../knowledge/entries';
import { validateKnowledgeBase } from '../knowledge/validate';
import { learningConfigs,learningRegistry } from './configs';
import { createLearningRegistry } from './registry';
describe('reusable learning registry',()=>{
  it('registers all fifteen researched indicators without a UI switch',()=>{expect(learningRegistry.ids()).toEqual(['ema','rsi','macd','adx-dmi','atr','trix','chop','aroon','vortex','stc','klinger','cmo','kst','mass-index','elder-ray']);expect(learningRegistry.size).toBe(15)});
  it.each(learningConfigs.map(config=>[config.id,config] as const))('%s has complete gold-standard modules',(_id,config)=>{expect(config.journey).toHaveLength(13);expect(config.lessons).toHaveLength(8);expect(config.strategies).toHaveLength(5);expect(config.relationships.length).toBeGreaterThanOrEqual(4);expect(config.entry.sources.length).toBeGreaterThan(0)});
  it.each(learningConfigs.map(config=>[config.id,config] as const))('%s parameters visibly change calculated output',(_id,config)=>{const defaults=Object.fromEntries(config.parameters.map(x=>[x.id,x.defaultValue]));const changed={...defaults,[config.parameters[0]!.id]:config.parameters[0]!.min};const before=config.calculate(config.lessons[0]!.id,defaults).series[0]!.values;const after=config.calculate(config.lessons[0]!.id,changed).series[0]!.values;expect(after).not.toEqual(before)});
  it('preserves MACD Phase 2.5 baseline',()=>{const config=learningRegistry.get('macd')!;expect(config.journey.map(x=>x[0])).toEqual(['macd-quick','macd-visual','macd-causal','macd-formula','macd-parameters','macd-reading','macd-regimes','macd-strategies','macd-relationships','macd-failure','macd-myths','macd-advanced','macd-sources']);expect(config.parameters.map(x=>x.id)).toEqual(['fast','slow','signal'])});
  it('retains valid provenance and relationship references',()=>expect(validateKnowledgeBase(indicatorEntries)).toEqual([]));
  it('rejects duplicate and incomplete temporary integrations',()=>{const sample={...learningConfigs[0],id:'sample'};expect(createLearningRegistry([...learningConfigs,sample]).get('sample')).toBe(sample);expect(()=>createLearningRegistry([sample,{...sample,id:'sample'}])).toThrow(/Duplicate/);expect(()=>createLearningRegistry([{...sample,id:'short',lessons:[]}])).toThrow(/eight/)});
});
