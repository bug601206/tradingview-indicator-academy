# TradingView Indicator Academy

這是一套在 TradingView 圖表旁使用的開放式技術指標學習工具。它不只展示讀值，也解釋指標量測什麼、公式如何轉換資料、何時失效，以及與其他指標有何重疊。

創辦人希望即使自己未來沒有時間繼續開發，這個教育專案仍能由社群維護與擴充。適合程式設計師、交易者、量化研究者、教育工作者、金融專業人士及所有想理解技術指標的人。

> 本專案為獨立第三方教育工具，與 TradingView 無關，亦未獲其贊助或背書。

[English README](README.md)

## 教育理念

技術指標是教育與分析工具。更多指標不必然改善交易績效。本專案不提供保證獲利的交易訊號、投資建議或經驗證的獲利聲明。標示為 **RESEARCHED** 的內容代表已有來源與公式檢查，不等同獨立專業人士完成驗證。

## 目前內容

版本 **0.2.8** 經 registry 驗證共有 **15 個完整學習體驗**：

- EMA、RSI、MACD、ADX/DMI、ATR
- TRIX、Choppiness Index、Aroon、Vortex Indicator、Schaff Trend Cycle（Academy v1）
- Klinger Oscillator、Chande Momentum Oscillator、Know Sure Thing、Mass Index、Elder Ray Index

每個完整頁面包含快速學習、深入學習、公式說明、本地確定性合成圖表、互動參數實驗室、行情環境、失效模式、策略框架、指標關係及可稽核來源。

## 架構與隱私

- TypeScript、React、Vite 建立的 Manifest V3 Chrome side-panel extension。
- 宣告式指標 registry、共用 renderer、模組化純計算函式。
- 教學圖表全部以本地合成資料計算。
- 權限只有 `sidePanel`、`storage`、`activeTab`；active tab 僅用於辨識 TradingView URL。
- 不爬取網頁、不擷取市場資料、不自動化 Pine、不使用 AI／後端／分析追蹤／廣告／帳戶整合。

詳見 [ARCHITECTURE.md](ARCHITECTURE.md) 與 [PROJECT_BOUNDARIES.md](PROJECT_BOUNDARIES.md)。

## 安裝

1. 下載並解壓經驗證的 release ZIP，或執行 `npm ci && npm run build`。
2. 在 Chrome 開啟 `chrome://extensions`。
3. 開啟「開發人員模式」。
4. 選擇「載入未封裝項目」，指定解壓後的 extension 資料夾（或本機 `dist/`）。
5. 釘選 **TradingView Indicator Academy**；開啟 TradingView chart 後點一下擴充功能圖示。

Chrome 要求使用者手勢才能開啟 extension side panel，本專案不繞過瀏覽器安全限制。

## 開發

需要 Node.js 22 LTS 與 npm。

```powershell
npm ci
npm run check
```

`npm run check` 會執行嚴格型別檢查、lint、全部單元測試及 production build。

## 參與貢獻

請先閱讀 [CONTRIBUTING.md](CONTRIBUTING.md)、[ADDING_INDICATORS.md](ADDING_INDICATORS.md) 與 [CONTENT_GUIDE.md](CONTENT_GUIDE.md)。公式修正應提供明確慣例、主要或權威來源及獨立測試案例。

貢獻者權利政策仍須創辦人核准；在正式記錄決策前，不應合併外部程式碼。詳見 [CONTRIBUTOR_RIGHTS_DECISION.md](CONTRIBUTOR_RIGHTS_DECISION.md)。

## 治理與授權

創辦人控制官方 repository、品牌、maintainer 任免及 release。這不限制 GPL 所允許的合法 fork；也不代表創辦人擁有其他貢獻者的著作權。詳見 [GOVERNANCE.md](GOVERNANCE.md)。

本專案準備採 **GNU General Public License v3.0 only**（`GPL-3.0-only`），但仍須通過創辦人最終核准及 [OPEN_SOURCE_RELEASE_CHECKLIST.md](OPEN_SOURCE_RELEASE_CHECKLIST.md) 的阻擋項目。GPL 允許商業使用。

## 風險聲明

僅供教育用途，不構成投資、法律、稅務或財務建議。合成範例不是回測、績效紀錄或推薦。請自行驗證公式與適用性。
