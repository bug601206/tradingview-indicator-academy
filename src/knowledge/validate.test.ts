import { describe, expect, it } from 'vitest';
import { comparisons } from './comparisons';
import { indicatorEntries } from './entries';
import { validateComparisons, validateEntry, validateKnowledgeBase } from './validate';
describe('Phase 2 knowledge validation',()=>{
  it('has exactly fifteen researched entries',()=>{expect(indicatorEntries).toHaveLength(15);expect(indicatorEntries.every(entry=>entry.editorial.status==='RESEARCHED')).toBe(true)});
  it('passes complete schema and relationship validation',()=>expect(validateKnowledgeBase(indicatorEntries)).toEqual([]));
  it('has unique IDs',()=>expect(new Set(indicatorEntries.map(entry=>entry.id)).size).toBe(15));
  it('requires sources with provenance scope',()=>indicatorEntries.forEach(entry=>{expect(entry.sources.length).toBeGreaterThan(0);entry.sources.forEach(source=>{expect(source.supports.length).toBeGreaterThan(0);expect(source.publisher).not.toBe('')})}));
  it('has required Quick and Deep Learn content',()=>indicatorEntries.forEach(entry=>{expect(entry.quickLearn.summary).not.toBe('');expect(entry.quickLearn.doesNotTellYou).not.toBe('');expect(entry.formula.length).toBeGreaterThan(0);expect(entry.parameters.length).toBeGreaterThan(0);expect(entry.failureModes.length).toBeGreaterThan(0);expect(entry.commonMistakes.length).toBeGreaterThan(0);expect(entry.strategyApplications.length).toBeGreaterThanOrEqual(2);expect(entry.visualExamples.length).toBeGreaterThanOrEqual(2)}));
  it('rejects malformed facts and duplicate IDs',()=>{const invalid=structuredClone(indicatorEntries[0]!);invalid.origin[0]!.sourceIds=['missing'];expect(validateEntry(invalid).some(issue=>issue.message.includes('FACT'))).toBe(true);expect(validateKnowledgeBase([indicatorEntries[0]!,indicatorEntries[0]!]).some(issue=>issue.message.includes('重複'))).toBe(true)});
  it('validates comparison references and fields',()=>expect(validateComparisons(comparisons,new Set(indicatorEntries.map(entry=>entry.id)))).toEqual([]));
});
