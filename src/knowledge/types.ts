export const CURRENT_SCHEMA_VERSION = '2.0.0' as const;
export type ClaimKind = 'FACT' | 'COMMON_PRACTICE' | 'HEURISTIC' | 'STRATEGY_EXAMPLE' | 'WARNING';
export type EditorialStatus = 'FIXTURE' | 'DRAFT' | 'RESEARCHED' | 'IN_REVIEW' | 'REVIEWED' | 'DEPRECATED';
export type SourceType = 'PRIMARY_BOOK' | 'PLATFORM_DOCUMENTATION' | 'REFERENCE' | 'LIBRARY_DOCUMENTATION';
export interface SourcedClaim { kind: ClaimKind; text: string; sourceIds?: string[] }
export interface KnowledgeSource { id: string; title: string; author?: string; publisher: string; url?: string; stableIdentifier?: string; type: SourceType; supports: string[]; accessedAt: string; license?: string; notes?: string }
export interface QuickLearn { summary: string; questionAnswered: string; measures: string; howToRead: string; doesNotTellYou: string; commonInterpretation: string; bestConditions: string; mainWeakness: string; beginnerMistake: string; complementary: string[] }
export interface IndicatorParameter { id: string; name: string; description: SourcedClaim[]; defaultValue?: string | number | boolean; validRange?: string; smaller: SourcedClaim[]; larger: SourcedClaim[]; tradeoffs: SourcedClaim[] }
export interface IndicatorRelationship { indicatorId: string; rationale: SourcedClaim[] }
export interface StrategyApplication { id: string; title: string; purpose: string; marketRegime: string; components: string[]; logic: SourcedClaim[]; entryConcept: SourcedClaim[]; confirmation: SourcedClaim[]; invalidation: SourcedClaim[]; exitConcept: SourcedClaim[]; riskConsideration: SourcedClaim[]; failureCondition: SourcedClaim[] }
export interface VisualExampleSpec { id: string; title: string; type: string; pricePattern: string; indicatorPattern: string; teachingPoint: SourcedClaim[]; warning: SourcedClaim[] }
export interface IndicatorKnowledgeEntry {
  id: string; schemaVersion: typeof CURRENT_SCHEMA_VERSION;
  names: { zhHant: string; zhHans?: string; en: string; abbreviation: string; relatedAbbreviations?: string[] };
  aliases: string[]; category: string; categoryEn: string; informationDimensions: string[]; quickLearn: QuickLearn;
  origin: SourcedClaim[]; purpose: SourcedClaim[]; conceptualExplanation: SourcedClaim[]; formula: SourcedClaim[]; parameters: IndicatorParameter[]; dataInputs: SourcedClaim[]; leadingLagging: SourcedClaim[];
  howToRead: SourcedClaim[]; canTellYou: SourcedClaim[]; cannotTellYou: SourcedClaim[];
  interpretations: { bullish: SourcedClaim[]; bearish: SourcedClaim[]; neutral: SourcedClaim[]; extremes: SourcedClaim[]; divergence: SourcedClaim[] };
  suitability: { marketRegimes: SourcedClaim[]; tradingStyles: SourcedClaim[]; timeframes: SourcedClaim[]; assetClasses: SourcedClaim[] };
  strengths: SourcedClaim[]; weaknesses: SourcedClaim[]; failureModes: SourcedClaim[]; falseSignals: SourcedClaim[]; commonMistakes: SourcedClaim[]; commonUsage: SourcedClaim[]; advancedUnderstanding: SourcedClaim[];
  complementaryIndicators: IndicatorRelationship[]; redundantIndicators: IndicatorRelationship[]; strategyApplications: StrategyApplication[]; riskManagementApplications: SourcedClaim[]; visualExamples: VisualExampleSpec[]; sources: KnowledgeSource[];
  editorial: { status: EditorialStatus; lastReviewedAt: string; reviewers: string[]; notes?: string };
}
export interface IndicatorComparison { id: string; leftId: string; rightId: string; measureDifference: string; overlap: string; differences: string; complementarity: string; redundancyRisk: string }
