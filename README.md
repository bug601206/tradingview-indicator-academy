# TradingView Indicator Academy

An open, research-conscious learning companion for understanding technical indicators beside a TradingView chart. The extension teaches what an indicator measures, how its formula transforms data, where it fails, and how it overlaps with other tools.

The founder created the project so indicator education can remain useful and community-maintained even when one person cannot write every future lesson. It is intended for programmers, traders, quantitative researchers, educators, financial professionals, and curious learners.

> This project is independent and is not affiliated with, sponsored by, or endorsed by TradingView.

[繁體中文說明](README.zh-TW.md)

## Educational philosophy

Technical indicators are educational and analytical tools. More indicators do not necessarily improve trading performance. This project does not provide guaranteed trading signals, investment recommendations, or verified profitability claims. Content marked **RESEARCHED** has cited sources and formula review; it is not the same as independent professional verification.

## Current scope

Version **0.2.8** contains **15 registry-validated learning experiences**:

- EMA, RSI, MACD, ADX/DMI, ATR
- TRIX, Choppiness Index, Aroon, Vortex Indicator, Schaff Trend Cycle (Academy v1)
- Klinger Oscillator, Chande Momentum Oscillator, Know Sure Thing, Mass Index, Elder Ray Index

Each full experience provides Quick Learn and Deep Learn material, formula explanations, deterministic synthetic charts, an interactive parameter laboratory, market-regime behavior, failure modes, strategy frameworks, indicator relationships, and auditable sources.

No screenshot is included in this release candidate because no reviewed, privacy-safe public screenshot asset is currently tracked. A later screenshot must show only synthetic Academy content and no account or chart data.

## Architecture and privacy

- Manifest V3 Chrome side-panel extension built with TypeScript, React and Vite.
- Declarative indicator registry with shared rendering and modular pure calculation functions.
- All teaching charts are calculated locally from deterministic synthetic data.
- The extension requests `sidePanel`, `storage`, and `activeTab`. It only uses the active tab URL to identify TradingView context.
- No scraping, market-data extraction, Pine automation, AI service, analytics, advertising, backend, or account integration.

See [ARCHITECTURE.md](ARCHITECTURE.md) and [PROJECT_BOUNDARIES.md](PROJECT_BOUNDARIES.md).

## Install the extension

1. Download and extract a verified release ZIP, or run `npm ci && npm run build`.
2. Open `chrome://extensions` in Chrome or a compatible Chromium browser.
3. Enable **Developer mode**.
4. Select **Load unpacked** and choose the extracted extension folder (or local `dist/`).
5. Pin **TradingView Indicator Academy**. Open a TradingView chart, then click the extension icon to open the side panel.

Chrome requires a user gesture to open an extension side panel. No security restriction is bypassed.

## Development

Requirements: Node.js 22 LTS and npm.

```powershell
npm ci
npm run check
```

`npm run check` runs strict type checking, lint, all unit tests, and a production build. Windows maintainers may use `npm run deploy` to update the existing stable local installation; contributors should normally use `dist/`.

## Contributing

Start with [CONTRIBUTING.md](CONTRIBUTING.md), [ADDING_INDICATORS.md](ADDING_INDICATORS.md), and [CONTENT_GUIDE.md](CONTENT_GUIDE.md). Use the issue forms for formula corrections, new indicators, educational improvements, translations, bugs, or features.

Formula corrections should include the exact convention, a primary or authoritative source, and an independent test case. Educational improvements should distinguish fact, common practice, heuristic, strategy example, and warning.

The project has adopted a copyright-retaining CLA plus DCO direction. The CLA acceptance workflow is not active yet, so external code pull requests will not be merged until it is activated. See [CLA.md](CLA.md) and [CONTRIBUTOR_RIGHTS_DECISION.md](CONTRIBUTOR_RIGHTS_DECISION.md).

## Roadmap and governance

The roadmap prioritizes correctness, accessibility, maintainability, and deeper learning—not indicator count for its own sake. See [ROADMAP.md](ROADMAP.md) and [GOVERNANCE.md](GOVERNANCE.md).

The founder controls the official repository, brand, maintainer appointments, and releases. GPL rights still permit lawful forks and independent development; official-repository control is not ownership of contributors' copyrights.

## License

The project is released under **GNU General Public License v3.0 only** (`GPL-3.0-only`). GPL permits commercial use subject to its terms. See [LICENSE](LICENSE), [NOTICE.md](NOTICE.md), and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Risk disclaimer

For education only. Nothing in this project is investment, legal, tax, or financial advice. Synthetic examples are not backtests, performance records, or recommendations. Markets can produce losses beyond modeled examples; verify formulas and suitability independently.
