# v1.53.0 QA：2019 春季《偶像學園Friends！ 第二季》

來源核對日期：2026-09-08。本切片新增 2019 年 TV 第二季、四人演唱 OP 與一般 ED。春季共 37 套作品、115 筆歌曲；春、夏季仍在補充，2025 秋季尚未收錄。

## 資料與來源

- [繁中季度列表](https://youranimes.tw/bangumi/201904)及 [YourAnimes 作品條目](https://youranimes.tw/animes/2181)核對第二季名稱、春季範圍與 26 話完結狀態；繁中名稱作交叉對照，不把遊戲地區名稱宣稱為正式 TV 譯名。
- [BANDAI 官方公告](https://bandai-a.akamaihd.net/corp/press/100000741765491.pdf)確認日文 TV 副題；[東京電視台首集節目頁](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201904/22343_201904041825.html)核對 2019-04-04、每週四 18:25。2018 年第一季、遊戲更新與後續《on Parade！》不合併為本季作品。
- [動畫官方 CD 公告](https://www.aikatsu.net/aikatsufriends_02/aikatsufriendscom/?offset=5#5420)與[第二季播出頁](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201908/22343_201908221825.html)核對 OP〈ひとりじゃない！〉的あいね・みお・舞花・エマ四人名義，以及一般 ED〈Be star〉的ひびき名義。詞曲編曲依官方公告，Maozon 與 YUKI FUNAKOSHI 分別保留共同作曲和編曲角色。
- [OP 交叉來源](https://utaten.com/lyric/mi19041917/)明示第二季 OP 及四人名義；[ED 的 TV-Size 交叉來源](https://utaten.com/lyric/mi19082003/)只核對演唱名義及詞曲，不把 TV-Size 發行日期套到單曲。逐曲交叉來源保持各自的版本邊界，既有作品的來源輸出不變。
- 官方 CD 公告列 2019-04-27，[OP 交叉頁](https://utaten.com/lyric/mi19041917/)與[唱片商品索引](https://www.billboard-japan.com/goods/detail/612838)列 2019-04-24；未取得來源方更正說明，兩曲 `releaseDate` 留空並顯示待核對。
- 首集節目頁的歌曲欄仍列前一季歌曲，僅作作品識別／首播證據。TV 一般 OP／ED 用途以第二季播出頁與官方 CD 公告核對，不推論舊歌曲在首集的實際用途。
- 雙人改編版、其他角色版本、OFF VOCAL、插曲與特殊片尾不由一般主題曲或商品收錄推定。未核對的聲優歌唱署名與媒體保持空白；特殊片尾待取得第一方用途證據後再補充。
- 只保留必要事實、短識別名稱與來源連結；不複製歌詞、介紹、圖片、音訊、影片或整頁資料。詞曲作者所屬公司不作額外共同創作者。

## 本機驗收

- `npm run catalog:check`：252 項通過；完整 `npm run check` 通過，包含公開邊界、依賴稽核、lint、355 項 unit、build、Cloudflare dry-run 與 52 項 Playwright。
- 完整與正式依賴稽核均為 0 項漏洞；`fast-uri` 維持 3.1.6，既有 8 項安全回歸包含在 unit suite。
- 建置 1,998 份 HTML，3,995 份產物通過公開邊界；Cloudflare dry-run 沒有 runtime binding。
- 對比上一個 source 切片，1,982 份既有 API 完全相同，只更新春季清單並新增一份作品詳情 API；沒有移除。既有作品的來源 ledger 保持相同。
- Browser plugin 未提供，使用既有 Playwright。1280、960、390、320px 及 390px 無 JavaScript 共 25 個畫面通過；沒有水平溢出、framework overlay、page error、console error、預先 YouTube 請求或 iframe。已目視桌面 OP 與手機展開的 ED 來源、角色合唱名義及共同創作者換行。
- 操作涵蓋繁中作品搜尋、年份／季度／OP／ED 篩選、Maozon 創作者搜尋、歌曲錨點與焦點、Enter 展開來源，以及無 JavaScript 的年份 → 季度 → 作品。完整回歸亦涵蓋鍵盤、返回、分頁、離線、404、影片同意與錯誤頁。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
