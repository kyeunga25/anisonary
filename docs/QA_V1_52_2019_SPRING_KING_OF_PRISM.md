# v1.52.0 QA：2019 春季《星光王子》TV 歌曲

來源核對日期：2026-09-08。本切片新增《KING OF PRISM -Shiny Seven Stars-》TV 正篇與 12 筆 OP／ED。春季共 36 套作品、113 筆歌曲；春、夏季仍在補充，2025 秋季尚未收錄。

## 資料與來源

- [繁中季度清單](https://youranimes.tw/bangumi/201904)、[YourAnimes 個別條目](https://youranimes.tw/animes/488)與 [LINE TV 正式播出頁](https://www.linetv.tw/drama/18245/eps/7)核對春季 TV 版、繁中名稱及 12 話完結狀態。
- [東京電視台第 1 話節目頁](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201904/25383_201904152535.html)確認日本編輯播出日為 2019-04-15、每週一 25:35（翌日 01:35）。[官方初回公告](https://kinpri.com/sss/sp/news/detail.php?artist_cd=KOP3S&id=1071169)說明 4 月 8 日播出的是介紹特別節目；劇場編輯版及介紹節目不另計為本季 TV 正篇。
- [官方 OP 商品頁](https://kinpri.com/sss/sp/discography/detail.php?id=1016430)與播出頁確認〈Shiny Seven Stars!〉的 OP 用途、七人演唱名義及 2019-04-24 CD 日期；保留各位歌唱者。
- 十一首輪替 ED 分別核對角色單曲商品頁，以及官方 CD 廣告第 [1](https://www.youtube.com/watch?v=420RJfS0G7Y)、[2](https://www.youtube.com/watch?v=lmIgYf6WehM)、[3](https://www.youtube.com/watch?v=lp494sLN5Aw)、[4](https://www.youtube.com/watch?v=lCI1f13Vvw4) 批說明中的 TV 輪替 ED 用途；以[歌曲索引](https://anison.online/anime/4114)交叉確認。個別集數未逐集取得第一方證據，歌曲排序不宣稱為集數。
- [〈JOY〉官方單曲](https://kinpri.com/sss/sp/discography/detail.php?id=1016533)記載歌唱名義為高田馬場ジョージGS（CV.小林竜之）；搜尋保留這項歌唱身份。各翻唱版的詞曲編曲尚待第一方核對。
- [〈BOY MEETS GIRL〉商品頁](https://kinpri.com/sss/sp/discography/detail.php?id=1016540)列 CD 日期 2019-08-07，但官方第 4 批 CM 說明對該張 CD 寫作 2019-08-17，未取得官方更正說明，因此此曲 `releaseDate` 留空並顯示待核對。其餘十首 ED 保留各商品頁一致的 CD 日期。
- 〈366LOVEダイアリー〉為劇場版片尾；角色插曲及其他演唱版本不作 TV ED，包括〈survival dAnce～no no cry more～〉、〈ナナイロノチカイ! -Brilliant oath-〉與〈プラトニックソード〉。
- 四支官方 CD 廣告均為 30 秒，只用公開文字說明核對用途。本切片不將 CD 廣告當作歌曲播放 metadata，也不下載媒體、圖片、歌詞或複製來源頁面。

## 本機驗收

- `npm run catalog:check`：248 項通過；`npm test`：351 項通過。
- `npm run check` 的公開邊界、完整依賴稽核、lint、unit、build 及 Cloudflare dry-run 通過；Chromium 首次因本機執行限制無法啟動，改在允許的環境執行。新測試修正來源收合狀態及季度卡片的無障礙名稱後，完整 `npm run test:e2e -- --workers=1`：51 項通過。
- 完整與正式依賴稽核均為 0 項漏洞；`fast-uri` 維持 3.1.6，既有 8 項安全回歸包含在 unit suite。
- 建置 1,997 份 HTML，3,993 份產物通過公開邊界；Cloudflare dry-run 沒有 runtime binding。
- 對比上一個 source 切片，1,981 份既有 API 完全相同，只更新春季清單並新增一份作品詳情 API；沒有移除。
- Browser plugin 未提供，使用既有 Playwright。檢查 1280、960、390、320px 及 390px 無 JavaScript，共 30 個畫面；沒有水平溢出、framework overlay、page error、預先 YouTube 請求或 iframe。已目視桌面與手機的七人演唱者換行、收合歌曲導覽及未核對日期狀態。
- 操作涵蓋繁中名稱／個別歌唱者搜尋、年份與季度／OP／ED 篩選、歌曲錨點焦點、Enter 展開來源，以及無 JavaScript 的年份 → 季度 → 作品 → 第十一首 ED。完整回歸亦涵蓋鍵盤、返回、分頁、離線、404、影片同意與錯誤頁。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
