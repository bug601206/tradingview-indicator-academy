# Architecture

## Required boundary

```text
TradingView Context Adapter
        ↓ optional context
Normalized Indicator Query
        ↓
Local Knowledge Engine
        ↓
Side Panel Presentation
```

The knowledge engine and UI never require TradingView context. A missing tab, denied tab metadata or unknown URL yields an empty context and leaves manual search fully operational.

## Modules

- `src/context`: safe URL-only context adapter. No content script exists.
- `src/search`: immutable in-memory index built once from normalized names and aliases. This design remains practical for 1,000+ entries; it can later be replaced behind the same interface.
- `src/knowledge`: versioned data contracts, fixtures and validation.
- `src/storage`: platform-neutral persistence service plus Chrome adapter.
- `src/learning/LearningExperience.tsx`: shared, optional-section learning-page shell and renderers for navigation, charts, controls, strategies, relationships, failures and provenance.
- `src/learning/configs.ts`: declarative, indicator-specific teaching sequences, scenarios and prose. Registration is data-driven; `App.tsx` contains no indicator switch.
- `src/learning/math.ts`: modular EMA, SMA, Wilder RMA, RSI, True Range, ATR and DMI/ADX calculations plus deterministic synthetic inputs.
- `src/learning/phase27Math.ts`: pure TRIX, CHOP, Aroon, Vortex and explicitly versioned Academy STC calculations.
- `src/knowledge/phase27Entries.ts` and `src/learning/phase27Configs.ts`: Batch 1 unfamiliar-indicator knowledge and teaching modules, kept outside the original five-indicator files.
- `src/learning/registry.ts`: validates unique registrations and minimum flagship modules. The core UI accepts any valid `LearningConfig`.
- `src/App.tsx`: side-panel presentation.
- `src/background.ts`: Side Panel action behavior only.

## Security and permissions

- `sidePanel`: presents the product beside the chart.
- `storage`: stores local preferences and learning state.
- `activeTab`: reads the user-invoked active tab URL for safe chart-page detection without persistent browsing-history access.

There is no host permission in Phase 1 because the extension neither injects code nor requests TradingView resources. The adapter merely classifies the active tab URL after the user invokes the extension.

No remote code, backend, analytics, external search, broad URL permission or TradingView private API is used.

## Learning engine boundary

Shared presentation owns layout, navigation, chart coordinate rendering, parameter widgets and repeated educational cards. Each indicator owns its teaching order, formula narrative, parameters, calculations, synthetic scenarios and domain-specific interpretation. Sections are declarative and may be reordered or omitted by future non-flagship configurations; the engine does not require every indicator to pretend it measures the same dimension.

The current bundle eagerly includes ten configurations. Phase 2.7A measures roughly 363 kB uncompressed JavaScript. If later batches materially increase startup time, registry entries can become dynamic imports without changing the page contract. No premature plugin system or backend was added.

## Stable user access

User-facing builds deploy to `Documents\TradingView Indicator Academy\Extension`. Chrome is loaded from this stable path once; future builds replace its contents in place. The desktop launcher opens the normal TradingView chart URL. Chrome requires a user gesture on the pinned extension action to open the side panel, so external launchers do not attempt to bypass that boundary.
