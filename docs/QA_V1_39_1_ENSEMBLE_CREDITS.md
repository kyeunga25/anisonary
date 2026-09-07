# v1.39.1｜合唱署名顯示 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 改動範圍

- 完整演唱者名單與既有藝人欄逐字相同時，只保留藝人欄的完整名單，減少 8 張歌曲卡片的重複文字。
- 沒有作姓名正規化、模糊比對或別名合併；Study 的個別角色演唱者、RobiHachi 的不同演唱署名及同一人兼任作詞等資料保持完整。
- 合唱名單已有顯示但尚無其他製作資料時，標示「製作：待確認」，避免讓讀者誤以為演唱者仍未核對。
- 歌曲、credits、發行日期、來源、影片、搜尋與 API 資料不變；無 JavaScript 時也有相同顯示。

## 本機驗收

- `npm run catalog:check`：7 個檔案、196 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、294 項單元測試、build、Cloudflare dry-run 及 32 項 Playwright 測試通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,987 個 HTML 頁面，3,973 個公開產物通過邊界檢查；Wrangler 讀取 5,965 個 Static Assets，0 application bindings。
- 對照 v1.39.0，1,973 份公開 API JSON 全部逐位元相同，沒有新增或移除。
- Chromium 1280、960、390 及 320px 寬度核對 5 套作品，共 20 個畫面；沒有水平溢出、頁面程式或 CSP 錯誤、錯誤覆蓋層、iframe 或未經操作的 YouTube 媒體連線。
- 《八月的棒球甜心》ED 卡片摘要於 390px 寬度由約 594px 減至 533px，320px 寬度由約 688px 減至 606px；獨立演唱者及一人多職對照卡片的署名、順序與高度不變。
- 瀏覽器測試涵蓋全部 8 張受影響卡片、完整藝人及製作資料、來源清單與無 JavaScript 閱讀，既有搜尋、導覽、影片同意、離線及錯誤狀態回歸通過。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。
