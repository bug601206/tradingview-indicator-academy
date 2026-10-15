import type { IndicatorKnowledgeEntry } from '../knowledge/types';
export interface ParameterDefinition { id:string;label:string;min:number;max:number;step?:number;defaultValue:number;help:string }
export interface ChartSeries { label:string;values:number[];className:string }
export interface ChartThreshold { value:number;label:string }
export interface ChartModel { price?:number[]|undefined;bars?:{high:number;low:number;close:number}[]|undefined;series:ChartSeries[];thresholds?:ChartThreshold[]|undefined;annotations?:string[]|undefined }
export interface VisualLesson { id:string;title:string;focus:string;math:string;meaning:string;warning:string;parameters?:Record<string,number>|undefined }
export interface StrategyFramework { title:string;purpose:string;regime:string;components:string;setup:string;entry:string;confirmation:string;invalidation:string;exit:string;risk:string;why:string;failure:string;contribution:string;redundancy:string }
export interface Relationship { name:string;measure:string;overlap:string;difference:string;use:string;kind:'complement'|'overlap' }
export interface LearningConfig {
  id:string;badge:string;title:string;subtitle:string;accent:string;entry:IndicatorKnowledgeEntry;
  quick:{summary:string;answers:string;cannot:string;components:[string,string][]};
  journey:ReadonlyArray<readonly [string,string]>;conceptTitle:string;concept:string;causal:string[];formulas:string[];
  parameters:ParameterDefinition[];lessons:VisualLesson[];strategies:StrategyFramework[];relationships:Relationship[];
  regimes:ReadonlyArray<readonly [string,string]>;failures:ReadonlyArray<readonly [string,string]>;myths:ReadonlyArray<readonly [string,string]>;advanced:ReadonlyArray<readonly [string,string]>;
  reading:string[];timeframes:string;assets:string;calculate:(scenario:string,parameters:Record<string,number>)=>ChartModel;
}
