# v1.28.0｜2019 夏季首批 TV 目錄 QA

本記錄描述 repository source 與本機驗證。GitHub CI、正式部署和線上驗收須另以固定 commit 及對應 Release 核對，不能由本機結果推定正式網站已更新。

## 資料範圍

- 新增 32 套 2019 年 7 月首播的 TV 作品、90 筆 OP／ED，以及 4 筆官方試聽或 MV 預告 metadata。
- 全站為 28 個季度快照、1,907 個唯一作品、4,214 筆 OP／ED 及 1,749 筆官方或正式授權影片 metadata。
- 2019 夏季仍在補充。季度頁及 API 的可選 `coverageNote` 說明目前範圍；2025 秋季尚未收錄。
- 已核對歌曲保留第一方和交叉來源、語言及 2026-09-07 核對日期。歌曲發行日期、演唱版本及 credits 由所屬季度模組維護。
- 作品識別來源與圖片來源分開。這批作品沒有已核對圖片，省略圖片與歸屬欄位，使用既有無圖介面；不下載或重新託管第三方媒體。

## 具體驗證

- 《偶像夢幻祭》保留 12 首輪替片尾與「キセキ」的 Trickstar、Eden 兩個演唱版本。
- 《艾梅洛閣下 II 世事件簿》的純音樂 OP 只列作曲、編曲，不把梶浦由記標為演唱者。
- 《GIVEN》的「まるつけ」保留ギヴン演唱版與矢野奨吾 vocal credit，並保留 ED2 序號。
- 《Re:Stage！Dream Days♪》保留「憧れFuture Sign」的 Piano Strings Arrange；《只要長得可愛，即使是變態你也喜歡嗎？》保留第 7 話特殊 ED「ステラ」。
- 跨年度發行日期不改變作品的首播季度；跨季延續歌曲不另建立重複作品。
- 深夜 25:25 保留在日本編輯播出日，已核對時間能在卡片顯示。
- 既有 1,902 個季度／作品 API 檔案維持 byte-for-byte 相同；原有季度總索引只增加 2019 夏季。

## 本機驗收

- `npm run catalog:check`：6 個檔案、154 項通過。
- `npm run check`：公開邊界、依賴稽核、Astro check、252 項單元測試、build、Cloudflare dry-run 及 15 項 Playwright 測試。
- 建置產生 1,950 個 HTML 頁面；3,899 個公開產物通過邊界檢查。Wrangler 讀取 5,854 個 Static Assets，0 application bindings。
- 搜尋索引為 2,715,715 UTF-8 bytes，低於 8 MiB 上限；每頁最多 12 套作品。
- Chromium 1280px、390×844 目錄及長版歌曲卡可讀、無水平溢出；320px 與停用 JavaScript 的基本導覽由 Playwright 覆蓋。
- 新季度可由年份頁抵達；作者搜尋可到達正確歌曲；官方播放器於明確操作後建立 iframe。
- 新增作品可離線閱讀；既有搜尋私隱、離線、404、CSP 及 API 失敗狀態檢查通過。
- 實體裝置、Safari、Firefox 與 Lighthouse／Core Web Vitals 未在本切片重跑，不推定為已驗證。

## 發布界線

本機檢查通過後，仍須固定 PR head SHA、確認 GitHub checks、合併、確認 Workers Builds 正式流量版本，再檢查 live routes、headers、API 與產物 hash。正式發布結果記錄於對應 GitHub Release；repository 不保存原始來源回應、研究候選、私人操作記錄或平台資源識別。
