# v1.40.2｜歌曲來源展開區 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 改動範圍

- 超過 3 個來源的歌曲卡片改用原生 `details`／`summary`，預設收合，持續顯示來源數量、審閱狀態及最後核對日期；3 個以內的來源保持直接顯示。
- 展開與收合均有文字及方向指示，各首歌曲可獨立操作；摘要提供至少 44px 操作高度、鍵盤焦點及 Enter／Space 操作。
- 不依賴新增 JavaScript 或保存使用者偏好；無 JavaScript 時仍可展開、循序聚焦及開啟完整來源。
- 展開後保留全部來源標題、語言、角色、URL 及安全外連屬性。沒有移除來源、改動核對日期或修改歌曲及 API 資料。

## 本機驗收

- `npm run catalog:check`：7 個檔案、200 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、298 項單元測試、build、Cloudflare dry-run 及 33 項 Playwright 測試通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,988 個 HTML 頁面，3,975 個公開產物通過邊界檢查；Wrangler 讀取 5,968 個 Static Assets，0 application bindings。
- 對照 v1.40.1，1,974 份公開 API JSON 全部逐位元相同，沒有新增或移除。
- Chromium 1280、960、390 及 320px 寬度比較 3 張具有 2、9、14 個來源的歌曲卡片，共 12 組前後畫面與展開操作；沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層、iframe 或未經操作的 YouTube 媒體連線。
- 390px 寬度下，《Fairy gone》OP 摘要區由約 636px 減至 336px，《金牌得主》第二季 ED 由約 750px 減至 313px；2 個來源的對照卡片於四種寬度的高度均不變。
- 瀏覽器回歸核對完整 14 個來源、日期持續可見、各卡片獨立展開、收合後焦點、少量來源直接顯示，以及無 JavaScript 下的來源展開與 Tab 導覽；既有搜尋、影片同意、離線、404 與錯誤狀態通過。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。
