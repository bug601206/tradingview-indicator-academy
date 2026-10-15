# Adding Indicators

The core page UI must not change when an indicator is added. A production addition touches registration/data modules, not `LearningExperience.tsx` or `App.tsx`.

## Checklist

1. Add an `IndicatorKnowledgeEntry` in `src/knowledge/entries.ts` with stable kebab-case ID, names, aliases, evidence-labelled claims, relationships, editorial status and authoritative sources.
2. Add modular calculation logic in `src/learning/math.ts` or a focused indicator math file. Export pure functions and test against hand-calculated or authoritative reference values.
3. Define a `LearningConfig` in `src/learning/configs.ts`: metadata, optional/reordered journey, formula narrative, parameter definitions, eight or more synthetic scenarios, five strategies, relationships, regimes, failures, misconceptions and advanced concepts.
4. Register the config in `learningConfigs`. Search is driven by `indicatorEntries`; no UI switch or result-card edit is required.
5. Add aliases to the knowledge entry and relationship IDs to both sides where editorially appropriate.
6. Run validation, calculation, parameter-responsiveness, search and rendered narrow-panel tests.
7. Keep status `RESEARCHED` until independent review is recorded. Deploy to the same permanent Extension folder.

## Temporary dry-run example

Phase 2.6 cloned a valid EMA configuration in a test, changed only its ID to `sample`, and passed it to `createLearningRegistry([...learningConfigs, sample])`. The registry returned the sample without any change to the core renderer. Negative cases proved duplicate IDs and fewer than eight lessons are rejected. The sample was never added to production and was removed automatically with the test process.

For a real indicator, replace the clone with independent knowledge, math and scenarios:

```ts
const sample: LearningConfig = {
  id: 'sample',
  entry: sampleKnowledgeEntry,
  parameters: [{ id: 'length', label: 'Length', min: 2, max: 50, defaultValue: 14, help: '…' }],
  calculate: (scenario, parameters) => sampleChartModel(scenario, parameters.length),
  lessons: eightSampleLessons,
  strategies: fiveSampleStrategies,
  // quick, journey, relationships, regimes, failures, myths, advanced, sources…
};
```

Files normally modified: `src/knowledge/entries.ts`, one math module or `src/learning/math.ts`, `src/learning/configs.ts`, and their tests. `src/App.tsx`, `src/learning/LearningExperience.tsx`, CSS layout and the Chrome manifest should remain unchanged.

Phase 2.7A confirmed this workflow with five real indicators. Their content lives in `phase27Entries.ts`, math in `phase27Math.ts`, and teaching configurations in `phase27Configs.ts`; only the knowledge and learning registration arrays were extended. Neither `App.tsx` nor `LearningExperience.tsx` changed.

## Current scaling limits

- The two registry arrays remain central, while content is now split into batch modules. Before dozens of entries, prefer one module per indicator or small coherent batch.
- Full configurations are eagerly bundled. Consider dynamic imports only after bundle/startup measurements demonstrate a need.
- Shared SVG primitives cover lines, thresholds and histogram bars. Candlestick-specific or multi-axis lessons may require a new reusable primitive, not a one-off page.
- Automated formula tests do not replace independent analyst review of educational interpretation.
