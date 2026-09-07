# v1.32.1｜季度星期分組 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 修正範圍

- 季度頁原本固定顯示八個星期分組，即使沒有收錄作品也保留標題、提示及空白。現在初始 HTML 只輸出有作品的分組與跳轉連結，無 JavaScript 時亦可原生瀏覽。
- OP／ED／官方影片篩選同步更新卡片、分組、星期連結及當前錨點標示；零結果顯示一個清楚提示，清除篩選後還原並保留鍵盤焦點。
- 分組間距不再由隱藏的相鄰分組產生；首個有作品的分組沿用既有首批海報載入方式。
- 所有作品、歌曲、來源、核對日期、媒體 metadata 與公開 API 資料保持不變。

## 本機驗收

- 新增的實際瀏覽器測試先在舊版重現八個連結與空白分組問題，修正後通過；涵蓋 1280px、390×844、篩選連結目標、零結果、清除篩選及無 JavaScript 跳轉。
- `npm run catalog:check`：7 個檔案、168 項通過。
- `CI=true npm run check`：完整流程通過，包括公開邊界、`npm audit --audit-level=low`、Astro check、266 項單元測試、build、Cloudflare dry-run 及 21 項 Playwright 測試；依賴稽核為 0 項漏洞。
- 建置保留 1,965 個 HTML 頁面，3,929 個公開產物通過邊界檢查；Wrangler 讀取 5,899 個 Static Assets，0 application bindings。
- 對照 v1.32.0 建置，全部 1,951 份 API 檔案逐位元相同，沒有新增、移除或改動。
- Chromium 以相同尺寸量度 2019 春季頁，空白分組由四個降至零，四個有作品的星期與全部卡片仍保留；未發現水平溢出、頁面程式錯誤或自動建立的 iframe。

| 量測 | 1280×844 修正前 → 後 | 390×844 修正前 → 後 |
| --- | --- | --- |
| 第一張作品卡片距頁首 | 881 → 698px | 997 → 823px |
| 整頁高度 | 3,780 → 3,049px | 4,197 → 3,502px |

以上為此季度、此尺寸的本機畫面量測，不代表所有頁面或裝置。既有搜尋、分頁、影片同意、320px 版面、手機鍵盤、離線、404 及圖片 fallback 測試全部保留。本切片未驗證實體裝置、Safari、Firefox、實際 YouTube 播放或 Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。
