# v1.31.0｜2019 夏季 TV 短篇 QA

本記錄描述 repository source 與本機驗證。GitHub CI、正式部署及線上驗收須按固定 commit 獨立核對；本機通過不等於正式網站已更新。

## 資料範圍

- 增加《上班族魚先生》、《殘念生物事典(3)》及《おどるモワイくん》，共 3 套 TV 作品、1 筆片尾曲及 1 筆官方影片 metadata。
- 夏季快照累計 42 套作品（38 套 TV、4 套網絡連載）、103 筆歌曲；季度頁與 API 繼續明示其他作品與特殊歌曲仍待核對，2025 秋季仍未收錄。
- 全站累計 28 個季度、1,917 個唯一作品、4,229 筆 OP／ED 及 1,756 筆官方或正式授權影片 metadata；538 個唯一歌曲層 YouTube 直連保持不變。
- 新增來源的人工核對日期為 2026-09-07；沒有新增第三方圖片。

## 來源與版本核對

- 《上班族魚先生》的 [Hulu 首播公告](https://prtimes.jp/main/html/rd/p/000000116.000023394.html) 與 [ACG Secrets](https://acgsecrets.hk/bangumi/201907/) 確認 2019-07-07、週日 24:00 的日本編輯播出日。
- [TOHO DVD 資料](https://tohoentertainmentonline.com/shop/g/gTASD01073/) 明示「Don't Stop Moving」為 ED1；[Apple Music 正式配信](https://music.apple.com/jp/song/1470386076) 與 [オリミュウストア](https://music.orimyu.com/php/music/MusicTop.php?music=6773313) 支持 BUSINESS FISH 的配信名義。個別演唱、作詞與作曲 credits 留空，不把發行名義當作已核對的個人演唱者；官方無字幕片尾影片保留 TOHO 渠道 metadata。
- 《殘念生物事典(3)》由 [高橋書店公告](https://kyodonewsprwire.jp/release/201906197698) 確認 2019-07-29 起的 8 集新作，[YourAnimes](https://youranimes.tw/animes/2896) 交叉核對名稱與範圍；不與 3 月特別篇或 2021 年系列合併。
- 《おどるモワイくん》的 [ShoPro 公告](https://prtimes.jp/main/html/rd/p/000000089.000002610.html) 確認 2019-07-02 起在《おはスタ》星期二節目內播出；頁面明示 07:05 是節目時段，不推定短篇本身的精確開始分鐘。沒有已核對的繁中譯名與來源時保留日文原名，省略譯名來源項目。
- 兩套短篇的歌曲用途仍待補充，不把整體配樂或一般音樂資訊自動列為 OP／ED，也不宣稱它們沒有獨立主題曲。

## 本機驗收

- `npm run catalog:check`：6 個檔案、163 項通過。
- `CI=true npm run check`：完整流程通過，包含公開邊界、`npm audit --audit-level=low`、Astro check、261 項單元測試、build、Cloudflare dry-run 及 18 項 Playwright 測試；依賴安全檢查為 0 項漏洞。
- 建置產生 1,960 個 HTML 頁面，3,919 個公開產物通過邊界檢查；Wrangler 讀取 5,884 個 Static Assets，0 application bindings。
- 對照 v1.30.0 的建置，既有 1,942 個 API 檔案逐位元相同，只有 2019 夏季快照改變，另增加 3 個作品 API。可省略譯名來源的改動未改變任何既有作品或其他季度。
- 搜尋索引為 2,727,808 UTF-8 bytes，低於既有 8 MiB 上限；以繁中名稱配合 2019 夏季篩選可到達正確的《殘念生物事典(3)》。
- Chromium 1280px 與 390×844 核對夏季頁及 3 個新作品，沒有水平溢出、頁面程式錯誤或未經操作建立的 YouTube iframe；《おどるモワイくん》可離線閱讀。
- 最初併行驗收時，既有跨季度瀏覽測試曾在頁面載入時逾時；使用既有 CI 單 worker 設定重跑後，18 項全部通過，未放寬斷言或提高逾時上限。
- 影片同意流程以受控播放器回應測試，不宣稱實際 YouTube 播放可用。實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 未在本切片重新驗證。

## 發布界線

正式發布須核對固定 PR head SHA、GitHub checks、合併結果、Workers Builds 正式部署與流量，再驗證 live routes、headers、API 及產物 hash。結果記錄於對應 GitHub Release；本文件不保存來源原始回應、私人操作記錄或平台資源識別。
