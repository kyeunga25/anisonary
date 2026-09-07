# v1.54.0 QA：2019 春季《ULTRAMAN》作品識別

來源核對日期：2026-09-08。本切片收錄 Netflix 第一季的作品識別，歌曲維持待補充狀態。春季共 38 套作品（37 套 TV、1 套網絡連載）與 115 筆歌曲；春、夏季仍在補充，2025 秋季尚未收錄。

## 資料與來源

- [Netflix 繁中公告](https://about.netflix.com/zh_tw/news/anime-production-line-deal)、[動畫官方第一季介紹](https://anime.heros-ultraman.com/story/)與 [YourAnimes 條目](https://youranimes.tw/animes/3065)核對《ULTRAMAN》及 2019-04-01 上線日期；保留原文名稱，不另外推定繁中譯名或 Romaji。
- [円谷製作公告](https://tsuburaya-prod.com/news/4883)的第一季資料確認 13 話範圍。播出欄明示 Netflix 第一季網絡配信，沒有把上線星期推定為每週更新，也不合併 2020 電視版、後續季度、真人影集或電影。
- [日文官方音樂頁](https://anime.heros-ultraman.com/music/)與[唱片公司公告](https://lantis.jp/artist/oldcodex/news_1558177200.html)稱〈Sight Over The Battle〉為主題歌；[英文官方公告](https://tsuburaya-prod.com/news/4883)使用 Opening Song 標示。尚未核實原配信版的確切用途，歌曲保持空白，不由一般主題歌或單一索引推定 OP／ED。
- [Void_Chords 官方公告](https://void-chords.lantis.jp/news/151/)明示〈my ID〉屬 2020 年電視播出版；這個切片不把翌年的電視版或續作歌曲套入 2019 原配信版。
- 空狀態表示歌曲資料尚待核對，不表示作品沒有歌曲。API 保留既有 `not_announced` 相容值，介面顯示「主題曲資料尚待補充」；不新增歌曲、署名、圖片、第三方 ID 或影片。
- 只保留必要事實、短名稱及來源連結；不複製介紹、整頁資料、歌詞或媒體。

## 本機驗收

- `npm run catalog:check`：255 項通過；unit suite：358 項通過。新增測試驗證作品識別、API 往返、來源語言與日期，以及無歌曲作品的搜尋／用途篩選。
- `npm run check` 的公開邊界、依賴稽核、lint、unit、build 與 Cloudflare dry-run 通過。首次瀏覽器測試有一項新測試只比對來源標題，未包含連結的完整可存取名稱；修正定位並核對 URL 後，重新執行 `npm run test:e2e`，53 項全部通過。
- 完整與正式依賴稽核均為 0 項漏洞；`fast-uri` 維持 3.1.6，既有 8 項安全回歸包含在 unit suite。
- 建置 1,999 份 HTML，3,997 份產物通過公開邊界；Cloudflare dry-run 沒有 runtime binding。
- 1,983 份既有 API 完全相同，只更新春季清單並新增一份作品詳情 API；沒有移除。既有歌曲與影片輸出保持相同。
- Browser plugin 未提供，使用既有 Playwright。1280、960、390、320px 及 390px 無 JavaScript 共 15 個畫面通過；沒有水平溢出、framework overlay、page error、console error、預先 YouTube 請求或 iframe。已目視桌面詳情與手機來源換行。
- 操作涵蓋作品搜尋、年份／季度篩選、OP／ED 篩選排除未知歌曲、空狀態與無 JavaScript 的年份 → 季度 → 作品。完整回歸亦涵蓋鍵盤、返回、分頁、離線、404、影片同意與錯誤頁。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
