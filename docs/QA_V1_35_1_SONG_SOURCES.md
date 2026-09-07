# v1.35.1｜歌曲來源排版 QA

本記錄描述 repository source 與本機驗證；正式部署須在固定版本合併後獨立驗收。

## 變更範圍

- 超過三個來源的歌曲卡片，將來源清單移至歌曲與署名下方，按可用寬度分欄，減少窄欄造成的空白。
- 少量來源保留緊湊的桌面排列；平板與手機完整換行。來源順序、外部連結、語言、第一方／交叉核對標記及驗證日期保持可見。
- 不新增互動腳本、折疊操作或外部連線；無 JavaScript 時仍可閱讀並以鍵盤操作來源連結。
- 歌曲、署名、影片 metadata、來源日期及同源 API 資料不變。

## 本機驗收

- `npm run catalog:check`：7 個檔案、180 項通過。
- `CI=true npm run check`：公開邊界、依賴稽核、Astro check、278 項單元測試、build、Cloudflare dry-run 及 26 項 Playwright 測試通過；`npm audit --audit-level=low` 為 0 項漏洞。
- 建置產生 1,975 個 HTML 頁面，3,949 個公開產物通過邊界檢查；Wrangler 讀取 5,929 個 Static Assets，0 application bindings。
- 對照 v1.35.0，1,961 份 API JSON 逐位元相同，沒有新增、修改或移除。
- Chromium 比較 7 套作品在 1280、768、390 及 320px 的 28 個畫面，涵蓋 2 至 14 個來源、長來源名稱及多人署名；來源完整可見，沒有水平溢出、頁面程式或 CSP 錯誤，也沒有提前建立 iframe 或連線 YouTube。
- 1280px 的《金牌得主 第二季》ED 摘要由約 774px 降至 389px；《Fairy gone》OP 由約 385px 降至 289px。390px 同批卡片高度沒有增加，少量來源的桌面樣本由約 147px 至 144px。
- 補驗 940、941、959、960 及 1024px 的 10 個斷點畫面，沒有裁切來源或水平溢出；目視核對深色模式及 960px 側欄排版。
- 新增回歸測試保護來源多的桌面卡片高度、手機高度、完整連結與來源順序、少量來源卡片及無 JavaScript 鍵盤導覽；既有搜尋、季度、影片同意、離線、404 與 fallback 測試通過。
- 未驗證實際 YouTube 播放、實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals。

## 發布界線

本機與 GitHub CI 通過不等於正式部署完成。發布時須核對固定 SHA、Workers Builds 正式部署與流量、live routes、headers、API 及產物內容；對應 GitHub Release 保留正式驗收摘要。
