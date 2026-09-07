# v1.49.0｜2019 春季《妖怪手錶！》QA

來源核對：2026-09-07；本機驗收：2026-09-08。本文件記錄 source 範圍；正式部署須於固定版本合併後獨立驗收。

## 資料與來源

- 新增《妖怪ウォッチ！／妖怪手錶！》2019 年 TV 系列、1 首 OP、1 首 ED 與 3 筆官方影片 metadata；春季共 33 套作品、96 筆歌曲，仍明示季度未完成。
- [LEVEL5 官方公告](https://www.youkai-watch.jp/topics/190215.html)確認日本首播為 2019-04-05、星期五 18:25；[東京電視台](https://www.tv-tokyo.co.jp/anime/youkai-watch2019/)確認系列身份與放送結束。[YourAnimes 季表](https://youranimes.tw/bangumi/201904)及[作品頁](https://youranimes.tw/animes/710)交叉核對繁中名稱；不宣稱社群名稱為官方地區譯名。
- OP〈ケラケラホーのうた〉由紘毅演唱。[藝人所屬事務所](https://maekawakikaku.co.jp/news/archives/2019/20190604_837.html)明示 CD 於 2019-06-05 發行；[POPHOLIC](https://popholic.jp/archives/12216)確認 OP 用途與菊谷知樹的原曲編曲。[Yamaha 出版頁](https://www.ymm.co.jp/p/detail.php?code=GTK01097308&dm=sl&dso=11&ua=pc)核對原曲作詞高木貴司、作曲紘毅；該頁的鋼琴改編者及書籍日期不作動畫原曲資料。
- ED〈ようかい体操第一 ～つづき～〉由かえで☆演唱。[POPHOLIC](https://popholic.jp/archives/12212)確認 ED 用途與菊谷知樹的作曲、原曲編曲；[Dream Music 出版頁](https://d-music.co.jp/kids_piano/9784865712681/)核對共同作詞ラッキィ池田／高木貴司。[演唱者公開藝人頁](https://www.tunecore.co.jp/artists/SAKURADAKAEDE)記錄該名義的 2019-06-05 發行，[官方振付影片](https://www.youtube.com/watch?v=BOiLAwterTg)說明同年 6 月 5 日 CD 發售。
- [アニソン・オンライン](https://anison.online/anime/1122)交叉核對 2019 春季、OP／ED 用途及演唱者。CD 完整版日期不代替較早的 TV 短版配信日期；伴奏、單曲另一首體操版本及樂譜改編不新增為 TV 歌曲。2014 年原作與 2021 年《妖怪ウォッチ♪》保持獨立。
- 保存[官方短版 MV](https://www.youtube.com/watch?v=qWcfCWkb9gw)、[官方 ED 動畫影片](https://www.youtube.com/watch?v=dYmvbaxuzGo)與上述振付短版的必要 metadata，核對公開標題、頻道與可嵌入狀態。未確認可播放的 OP 動畫上傳不加入，沒有將任何影片標成完整 MV 或無字幕版本。
- 不生成外部 ID、Romaji、圖片、單集用途或未確認的額外演唱版本；不保存頁面原文、樂譜、歌詞、音訊或影片。Yamaha 與交叉索引的條款核對範圍已補入來源矩陣。

## 本機驗收

- `npm run catalog:check`：236 項通過。
- `npm run check`：公開邊界、Lint、339 項單元測試、建置、Cloudflare dry-run 與 44 項 Playwright 通過，瀏覽器測試沒有重試。
- 完整依賴與正式依賴稽核均為 0 項漏洞；`fast-uri` 保持 3.1.6，既有安全回歸通過。
- 與 v1.48.0 source 比較：1,978 份 API 逐位元相同，只更新春季清單並新增作品詳情，沒有移除；2021 年作品詳情不變。建置產生 1,994 份 HTML、3,987 份公開產物，dry-run 沒有 runtime bindings。
- 四項新增資料測試先確認缺少記錄時失敗，再驗證獨立身份、共同作詞、原曲與改編的區分、CD 日期、來源、影片狀態、API 讀回及繁中／創作者搜尋。
- 新增 E2E 涵蓋 1280、960、390、320px 的年份／季度篩選、創作者連結、ED 深連結、影片版本選擇與鍵盤同意，以及 390px 無 JavaScript 的年度、季度、作品及來源導覽。媒體同意使用固定回應測試 iframe 目標；原有離線、404 與錯誤狀態回歸通過。
- Chromium 檢查作品、OP、ED、展開來源與春季頁共 25 個畫面，包含 390px 無 JavaScript 閱讀；沒有水平溢出、頁面錯誤或使用者操作前的 iframe／YouTube 請求。人工檢視桌面及手機作品、片尾與來源展開截圖。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
