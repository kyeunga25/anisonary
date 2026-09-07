# v1.51.0 QA：2019 春季《叛逆性百萬亞瑟王 第二季》

來源核對日期：2026-09-08。本切片新增一套 TV 作品、兩筆 OP／ED 及一筆官方影片 metadata。春季共 35 套作品、101 筆歌曲；春、夏季仍在補充，2025 秋季尚未收錄。

## 資料與來源

- [繁中季度清單](https://youranimes.tw/bangumi/201904)及[個別條目](https://youranimes.tw/animes/4282)交叉核對名稱、季度與完結狀態；[Happinet 官方新聞稿](https://prtimes.jp/main/html/rd/p/000000190.000031422.html)確認第二季於 2019-04-04、TOKYO MX 每週四 22:00 首播。與第一季及未放送特別篇分開，不把社群名稱宣稱為正式地區譯名。
- [ORESAMA 官方商品頁](https://www.orsm.jp/discography/open-the-worlds/)確認 OP〈OPEN THE WORLDS〉、詞曲編曲署名與 2019-04-24 CD 日期；[配信公告](https://www.orsm.jp/%E3%80%8Copen-the-worlds%E3%80%8D%E5%85%88%E8%A1%8C%E9%85%8D%E4%BF%A1%E6%B1%BA%E5%AE%9A/)分別保留 mora 2019-04-11 及其他平台 2019-04-18 的先行配信日期，沒有推定 TV Size 或轉用公告刊登日。
- [Bandai Namco Music Live 現行商品頁](https://catalog.bandainamcomusiclive.co.jp/release/68378/)確認 ED〈PEARLY×PARTY〉由パーリィ☆フェアリィ演唱、CD 日期為 2019-05-22。[歌曲索引](https://anison.online/anime/1105)交叉核對兩首用途。ORESAMA 的 Funkapop 改編版、單曲附加曲與插曲不作本季 OP／ED。
- OP 保留ぽん作詞、小島英也作曲及編曲。ED 的個別演唱者與製作署名尚缺足夠第一方證據，維持空白及「待核對」說明；不由角色配音表、組合成員或另一演唱版本推導。
- [Lantis 官方 MV](https://www.youtube.com/watch?v=0UmEg8PDV3Y)為 251 秒，核對公開標題、頻道及可嵌入狀態，只保存必要 metadata。ED 沒有新增影片；不可用連結不進入資料。
- 重新核對 Bandai Namco Music Live 商品目錄及權利頁，只取必要事實與來源連結，不複製頁面、曲目資料集、歌詞或媒體。舊商品連結若只導向目錄首頁，不當作現行個別商品證據。既有作品、歌曲及來源日期不變。

## 本機驗收

- `npm run catalog:check`：244 項通過。
- `npm run check -- -- --workers=1`：lint、347 項單元測試、建置、公開邊界檢查及 Cloudflare dry-run 通過；50 項 Playwright 全數通過，未使用重試。dry-run 沒有 runtime bindings。
- 完整及 production-only npm audit 均為零項已知漏洞；`fast-uri` 維持 3.1.6，八項相關安全回歸測試通過。
- 四項新資料測試先確認缺少作品時失敗，再驗證身份、原演唱版、缺項、日期、來源、影片、API 讀回及繁中／創作者搜尋。
- 作品識別與第一方作品來源各有可追溯的獨立證據；來源去重及既有公開資料契約不變。
- 新 E2E 涵蓋四種寬度的作品／創作者搜尋、歌曲篩選、OP 定位與焦點、三個發行日期、ED「Credits 待確認」及直接可見的來源；以 fixture 驗證影片同意，並核對 390px 無 JavaScript 的年份、季度與作品導覽。
- 與 v1.50.0 source 比較：1,980 份既有 API 逐位元相同，只更新春季清單並新增作品詳情，沒有移除；建置共 1,996 份 HTML、3,991 份公開產物。
- Chromium 檢查作品、OP、ED 與春季頁共 20 個畫面，涵蓋 1280、960、390、320px 及 390px 無 JavaScript；沒有水平溢出、頁面錯誤或操作前的 iframe／YouTube 請求。人工檢視桌面 OP、手機作品與 ED 截圖。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
