# v1.37.1｜歌曲署名與動畫詳情排版 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 調整範圍

- 歌曲卡片按職務合併共同署名的標籤，完整保留姓名、原有次序與一人多職；沒有署名資料時維持待確認狀態。
- 在版本說明旁顯示已有的發行日期，使用原生 `time` 標記；沒有日期時不增加空白列，也不以來源核對日期代替發行日期。
- 修正桌面側欄寬度下的長動畫名稱溢出；名稱完整換行，沒有截斷或省略。
- 沒有新增依賴、瀏覽器程式、歌曲、來源或推定資料。搜尋與 API 契約不變。

## 本機驗收

- `npm run catalog:check`：7 個檔案、188 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、286 項單元測試、build、Cloudflare dry-run 及 29 項 Playwright 測試全部通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,981 個 HTML 頁面，3,961 個公開產物通過邊界檢查；Wrangler 讀取 5,947 個 Static Assets，0 application bindings。
- 對照 v1.37.0，全部 1,967 份 API JSON 逐位元相同，沒有新增、修改或移除。
- Chromium 1280、960、768、390 及 320px 核對六張歌曲卡片，共 30 個畫面；沒有水平溢出、頁面程式或 CSP 錯誤，明確操作前沒有 YouTube 媒體連線。外部圖片使用受控測試回應。
- 《Telepathy》在 390px 的署名區由約 257px 減至 155px，完整保留 11 筆非演唱署名；其他卡片依名字長度與新增日期自然排版，不以固定高度隱藏內容。
- 《BULLET/BULLET》在 960px 的頁面寬度由 1,085px 回到 960px；長標題及無發行日期的歌曲均有回歸測試。
- 《Speechless》在停用 JavaScript 的 390px 頁面保留共同作曲、編曲、發行日期與可聚焦的來源連結；《Chime》的數位日期與 CD 版本說明分開。
- 既有搜尋、篩選、分頁、星期導覽、影片同意、離線、404、圖片 fallback 與 API 錯誤邊界回歸測試通過。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。
