# v0.3.0｜離線靜態目錄 QA

本文件記錄 Anisonary v0.3.0 的公開驗收範圍。主介面及離線說明以繁體中文為主，並提供 English supporting copy。

## 交付範圍

- `/manifest.webmanifest` 與 production build 的 Service Worker 註冊；
- build-time 內容 revision 及同源公開靜態 precache；
- network-first navigation、exact-route offline response 及 `/offline/` fallback；
- 搜尋頁及已發布目錄的離線閱讀；
- 不使用 runtime cache write，不保存 query string、搜尋輸入、私人 API response 或第三方媒體；
- 維持 Workers Static Assets assets-only 拓撲，沒有 application Worker、D1、KV、R2、Queues、Analytics 或 observability binding。

## Automated validation

| Gate | Result |
|---|---|
| `npm run lint` | 63 files；0 errors／warnings／hints |
| `npm test` | 14 files；71 tests passed |
| `npm run build` | 16 static pages generated |
| `npm run cf:check` | 52 static assets；0 bindings |
| `npm run test:e2e` | 8 flows passed |
| `npm audit --audit-level=low` | 0 vulnerabilities |

E2E 覆蓋 Service Worker 註冊、只含同源公開 URL 的 cache、零 query string／test poster、離線搜尋 reload、未知離線 route fallback、`noindex`、既有搜尋、mobile keyboard、404、API error state 及 poster fallback。

## Browser and visual validation

- Desktop 1280 × 720：離線標題、繁中／英文說明、兩個主要動作與私隱提示完整顯示；
- Mobile 390 × 844：document width 與 scroll width 同為 390px，沒有水平 overflow；導覽、圖示、標題、按鈕與 footer 保持可讀；
- 搜尋頁在 390px 沒有水平 overflow、remote image count 為 0、URL 沒有 query string；
- 離線頁及搜尋頁的 browser console 均為 0 error／warning；
- 與已接受設計系統比對後，沿用 header／footer、深藍與珊瑚色 palette、粗體繁中 hierarchy、線框圖示、實心／outline action，以及開放式無卡片版面；本次只新增功能頁，不改動既有首頁內容結構。

## Privacy boundary／私隱邊界

- precache 清單來自本次 build output，不讀取瀏覽歷史、使用者輸入或外部 API response；
- Service Worker 只處理同源 `GET`，第三方 poster 及使用者啟動的 YouTube media 維持正常網絡邊界；
- asset request 只有在已 precache 時命中 cache，miss 直接走 network 而不寫入 cache；
- navigation 成功時直接回傳最新網絡 response，不複製至 Cache Storage；
- `/offline/` 不進入 sitemap，並帶 `noindex` metadata；
- manifest 只包含公開 app metadata、同源 route 與現有公開 icon。

## Delivery record boundary／交付記錄邊界

公開文件只會在 GitHub checks、production deployment 與正式 route smoke 完成後補上通過狀態；不記錄平台帳戶識別碼、資料庫識別碼、非公開資源名稱、部署版本識別碼、憑證或營運資料。
