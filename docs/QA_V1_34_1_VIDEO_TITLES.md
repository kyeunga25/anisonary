# v1.34.1｜官方影片標題與播放提示 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 變更範圍

- 每段影片在載入按鈕前顯示既有的已審閱標題，讓讀者辨認 Short Ver.、2chorus、角色演唱及其他版本名稱。
- 長標題完整換行，播放器載入後仍保留；不能嵌入時也使用相同標題位置。
- 播放圖示依播放器寬度縮放，在窄螢幕及平板雙欄版面中與連線同意提示保持間距。
- 歌曲、影片 metadata、來源日期、API v1 契約與明確操作後才載入 YouTube 的機制不變。

## 本機驗收

- `npm run catalog:check`：176 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、274 項單元測試、build、Cloudflare dry-run 及 24 項 Playwright 測試全部通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,972 個 HTML 頁面，3,943 個公開產物通過邊界檢查；Wrangler 讀取 5,920 個 Static Assets，0 application bindings。
- 對照 v1.34.0，1,958 份 API JSON 逐位元相同，沒有新增、修改或移除 API 檔案。
- Chromium 320、390、768、1280px 核對《Prima Doll 天籟人偶》的長影片標題：完整可見、沒有水平溢出，播放圖示與提示間距均大於 4px。
- 390×844 核對《拾又之國》的 Short Ver. 及《消滅都市》的 2chorus 標題；鍵盤 Enter 載入受控播放器回應後，標題與正確影片 ID 仍保留。
- 畫面沒有頁面程式或 CSP 錯誤，明確操作前沒有 iframe 或 YouTube 媒體連線。
- 保留目錄分層、分頁搜尋、無 JavaScript 導覽、星期篩選、鍵盤、離線閱讀、404、圖片 fallback 及 API 錯誤邊界的既有回歸測試。
- 未驗證實際 YouTube 播放、不能嵌入的真實影片、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。
