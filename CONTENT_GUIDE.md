# Content Guide

## Language

- Primary UI and content language: Traditional Chinese (`zh-Hant`).
- Retain canonical English names and abbreviations for discovery.
- Add Simplified Chinese and alternative spellings as aliases, not duplicate entries.

## Evidence labels

- `FACT`: attributable historical, mathematical or definitional claim.
- `COMMON_PRACTICE`: widely observed convention that is not universal.
- `HEURISTIC`: practical rule of thumb with explicit limitations.
- `STRATEGY_EXAMPLE`: educational construction, never a signal or promise.
- `WARNING`: material limitation, failure mode or risk.

## Editorial workflow

`DRAFT → RESEARCHED → IN_REVIEW → REVIEWED`; `FIXTURE` is never publishable educational content. `RESEARCHED` means authoritative sources and formulas were checked; it does not mean independent human verification. Every publishable entry requires provenance, review date and source identifiers for every `FACT`. Public visibility is not reuse permission; source license and quotation limits must be recorded.

Relationships use stable indicator IDs and must pass cross-reference validation. Avoid absolute language, performance promises and personalized investment advice.

## Required entry layers

- Quick Learn must answer the question, measure, reading method, non-capability, typical interpretation, best conditions, weakness, beginner mistake and complementary dimensions.
- Deep Learn must include origin, conceptual intuition, formula, parameters, reading, capabilities, non-capabilities, regimes, timeframes, asset classes, mistakes, failure modes and advanced understanding.
- Every parameter records smaller/larger behavior and tradeoffs.
- Every strategy application records purpose, regime, components, logic, entry concept, confirmation, invalidation, exit, risk and failure conditions.
- Generic entries may retain visual specifications. A flagship candidate must render at least eight clearly distinct, synthetic-data visual lessons and explain what changed mathematically, what it commonly means and where the reading can fail.

## Gold Standard experience

Phase 2.6 applies the provisional MACD benchmark to EMA, RSI, ADX/DMI and ATR through a reusable engine. A complete experience includes a fast orientation, chart anatomy, causal chain, formulas, live parameters, a reading checklist, regimes, timeframe and asset-class caveats, five complete strategy frameworks, overlap/complement analysis, a failure lab, myths, advanced concepts and provenance. Interactive examples must be deterministic, local and explicitly labelled synthetic; they must not imply live TradingView data.

Reuse presentation, never paragraphs. Formulae and attribution remain `FACT` backed by the entry source IDs; conventions are `COMMON_PRACTICE`; interpretive rules are `HEURISTIC`; strategy frameworks are `STRATEGY_EXAMPLE`; limitations and failure text are `WARNING`. An indicator may reorder or omit inapplicable modules rather than forcing a false common narrative.

## Implementation conventions added in Phase 2.7A

- TRIX: triple close EMA followed by one-period percentage ROC; Academy includes an EMA signal line and labels it as a convention.
- CHOP: TradingView formula using the rolling sum of one-period True Range, rolling highest-high/lowest-low range and base-10 logarithms. 61.8/38.2 are conventions, not facts about market behavior.
- Aroon: Academy uses an N+1 inclusive window so an extreme N bars ago maps to 0 and a current extreme maps to 100. Tie-breaking chooses the newest equal extreme. Platform indexing may differ.
- Vortex: original rolling-sum VI definition, without extra smoothing.
- STC: Academy v1 is explicitly versioned as EMA-MACD, stochastic normalization, EMA smoothing, a second stochastic normalization and a second EMA smoothing. Community scripts may use different lengths, moving-average types, smoothing factors and seeds; none is described as universally standard.
- Warm-up convention: EMA-based Phase 2.7A calculations seed from the first available value and expose finite educational warm-up estimates rather than hiding bars. CHOP returns 100 for a window with fewer than two observations or zero high-low range. STC maps a zero stochastic denominator to neutral 50. These choices are documented teaching conventions and may differ from charting packages that output `na` during warm-up.
