# v1.45.0｜署名搜尋連結 QA

核對日期：2026-09-07。本文件記錄 source 與本機驗證；正式部署須於固定版本合併後獨立驗收。

## 功能與資料邊界

- 歌曲卡片的演出名義及個別創作署名可開啟既有創作者文字搜尋，保留年份、季度、OP／ED 篩選及 12 套作品分頁。
- 連結使用同源 `/search/#creator=...`；名稱只由瀏覽器讀取，HTTP request 不包含片段。片段可留在一般瀏覽器歷史紀錄，手動輸入、篩選及重設會清除它，不另寫入 application storage。
- 這是名稱文字搜尋，沒有建立人物身份、同名消歧、人物頁或新的資料庫關聯。
- 共用既有 80 UTF-16 單位輸入上限；完整超長合唱署名與既有純音樂版本標記維持文字，不截斷、推測個別人名或產生誤導連結。
- 拒絕不合法編碼、控制字元、空白變形、超長或多組入口條件；其他頁面錨點不會重設搜尋。來源、影片同意及完整 credits 保留。

## 本機驗收

- `npm run catalog:check`：223 項通過；最終 `npm run check`：公開邊界、Lint、326 項單元測試、build、Cloudflare dry-run 及 39 項 Playwright 測試通過，最終 E2E 沒有重試。
- 完整及正式依賴稽核均為 0 項漏洞；`fast-uri` 3.1.6 的既有安全回歸通過。
- 1,977 份 API 與 v1.44.1 source 逐位元相同，沒有新增或移除；1,947 份作品 HTML 的 5,550 個署名連結均能完整還原顯示名稱，且不含 URL query。
- 建置共 1,991 份 HTML、3,981 份公開產物；Cloudflare dry-run 沒有 runtime bindings。
- Chromium 1280、960、390、320px 及 390px 無 JavaScript，共 15 個畫面沒有水平溢出、頁面錯誤、提前建立的 iframe 或 YouTube 媒體請求；人工檢視 1280px 歌曲卡片及 390px 預填搜尋畫面。
- E2E 驗證鍵盤開啟署名、歌曲返回、重設、手動輸入與篩選清除片段、跳到主要內容、不合法入口、超長完整合唱、純音樂標記，以及無 JavaScript 的年份目錄替代入口。
- 離線狀態可從已快取的歌曲卡片進入署名搜尋並重新整理；搜尋字詞不進入 localStorage、sessionStorage 或 Cache Storage URL。
- 初次新 E2E 對無 JavaScript 提示的定位過於寬泛，收窄後仍受測試工具忽略 `noscript` 容器文字影響；直接確認可見內文後改為定位其段落，單項及最終完整回歸通過。

## 發布界線

本機與分支建置不代表正式網站已更新。發布時須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
