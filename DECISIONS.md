# Architecture Decisions

## ADR-001 — Build a small extension instead of forking an MCP project

**Status:** Accepted. Large automation projects introduce unrelated services, permissions and maintenance risk.

## ADR-002 — Knowledge engine is independent of TradingView

**Status:** Accepted. Context is optional input; manual search must always work.

## ADR-003 — No private APIs, scraping or market-data extraction

**Status:** Accepted. Phase 1 reads only the active tab URL through Chrome APIs.

## ADR-004 — Local, normalized search index

**Status:** Accepted. Names and aliases are normalized once, then searched through a stable interface. This supports thousands of terms without a backend and permits an internal algorithm change later.

## ADR-005 — Typed schema plus explicit validation

**Status:** Accepted. TypeScript protects application code; runtime validation protects externally authored JSON/TS data and cross-entry relationships.

## ADR-006 — Promote schema to v2 after the editorial pilot

**Status:** Accepted. Generic optional claim arrays were insufficient for predictable quality. Schema v2 makes Quick Learn, non-capabilities, parameter tradeoffs, structured strategies, visual specifications and provenance scope mandatory.

## ADR-007 — Model ADX and DMI as one related system, not interchangeable labels

**Status:** Accepted. One `adx-dmi` entry explains DMI as +DI, -DI and ADX while preserving separate abbreviations and roles: DI supplies directional dominance; ADX supplies non-directional trend strength.

## ADR-008 — Editorial state is RESEARCHED

**Status:** Accepted. The five pilot entries have authoritative sourcing and formula review, but no independent human reviewer; therefore they are not labelled VERIFIED or REVIEWED.

## ADR-009 — Stable user-facing launch and installation path

**Status:** Accepted. User-facing builds must preserve a stable launch/access path. The user must never be required to locate Codex output folders or development artifacts for normal use. Windows deployments update `Documents\TradingView Indicator Academy\Extension` in place and preserve the desktop shortcut.

## ADR-010 — MACD is a dedicated gold-standard candidate

**Status:** Accepted for Phase 2.5 evaluation. The generic Phase 2 renderer hid causal reasoning and made visual and strategy material feel shallow. MACD therefore receives a dedicated 13-section learning journey while other indicators remain unchanged. Its nine rendered charts use deterministic local synthetic data, never scraped or live TradingView data. The pattern becomes universal only after explicit user approval.

## ADR-011 — Declarative learning registry with modular math

**Status:** Accepted. Phase 2.6 separates reusable presentation and visualization infrastructure from indicator-specific calculation, scenarios and teaching sequences. `App.tsx` resolves registered configuration data instead of switching on indicator IDs. The registry stays intentionally small; no runtime plugin framework, backend or database is justified.

## ADR-012 — Synthetic, deterministic educational visualization

**Status:** Accepted. All fifteen experiences calculate their charts locally from deterministic synthetic price, OHLC or OHLCV inputs. EMA, RSI, DMI/ADX and ATR math lives in a shared modular calculation layer; MACD keeps its regression-protected calculation module; Phase 2.7A and 2.7B math are isolated in their own modules. Charts demonstrate formula behavior and never represent live, scraped or backtested market performance.

## ADR-013 — Version formula variants rather than hiding disagreement

**Status:** Accepted. Phase 2.7A records explicit conventions where implementations vary. Aroon uses an inclusive N+1 lookback with newest-extreme tie-breaking. STC is labelled `Academy v1` and never presented as a TradingView built-in or universal standard. Community scripts support implementation research but do not establish universal convention.

## ADR-014 — Unfamiliar indicators remain separate modules

**Status:** Accepted. Batch 1 adds knowledge, calculations and configurations in focused Phase 2.7A modules. The core renderer and `App.tsx` remain unchanged, demonstrating that new indicators primarily require structured domain content and math rather than new pages.

## ADR-015 — Preserve information identity in Phase 2.7B

**Status:** Accepted. KVO explicitly distinguishes exchange volume from tick-volume proxies; Mass Index remains directionless and uses high-low rather than True Range; Elder Ray preserves separate Bull and Bear Power even where a platform also shows their sum; KST components are correlated horizons rather than independent votes; CMO and RSI are treated as overlapping gain/loss transforms. The core renderer and `App.tsx` remain unchanged.
