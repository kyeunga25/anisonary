# v1.42.0 source — 2019 春季 THE ORIGIN 電視版

核對日期：2026-09-07。本文件記錄 source 範圍與本機驗收；正式部署須另以固定版本核對。

## 範圍與來源

- 新增《機動戦士ガンダム THE ORIGIN 前夜 赤い彗星》2019 年 13 話電視重編版、3 首 OP、4 首 ED 及 8 筆官方影片 metadata。官方首集頁記錄 2019-04-29，NHK 播出時段為每週一 00:35；不使用早期 OVA 或其電影上映日。
- OP3 保留 LUNA SEA 翻唱、ED2 保留コムアイ、最終 ED 保留アイナ・ジ・エンド演唱；原曲作者與此次編曲者分開。ED1 保留兩位作詞者，前兩首 OP 未核對的製作署名維持空值。
- 發行日對應原始 CD 或完整版配信，ED 另註 TV Size。第 12 話的 ED3 畫面版本是同一首歌的第二筆影片；不增加一首重複 ED，也不把插曲、OVA 歌曲或 40 週年紀念曲收為本版 OP／ED。
- 繁中顯示名依 YourAnimes 公開條目交叉核對，保留其原有混合日文寫法，不宣稱為地區官方譯名。歌曲次序由 UZUREA 交叉核對；其 OP3 藝人混列問題由動畫官方與 SUNRISE Music 的 LUNA SEA 署名釐清。
- 全目錄共 29 季、1,946 個唯一作品、4,305 筆 OP／ED 與 1,802 筆官方／正式授權影片 metadata；春季共 29 套作品、76 筆歌曲。春、夏季仍在補充，2025 秋季尚未收錄。

主要證據：

- [動畫官方 TV 版介紹及 OP／ED](https://www.gundam-the-origin.net/tv/) · [官方首集](https://www.gundam-the-origin.net/tv/episodes01.html) · [YourAnimes](https://youranimes.tw/animes/4690) · [UZUREA](https://uzurea.net/vc/187936/)
- [前兩首 OP 的 CD](https://www.sunrise-music.co.jp/list/detail.php?id=447) · [OP3](https://www.sunrise-music.co.jp/list/detail.php?id=448) · [ED1](https://www.sunrise-music.co.jp/list/detail.php?id=4) · [ED2](https://www.sunrise-music.co.jp/list/detail.php?id=8) · [ED3](https://www.sunrise-music.co.jp/list/detail.php?id=445) · [ED4](https://www.sunrise-music.co.jp/list/detail.php?id=446)
- [第 12 話片尾版本公告](https://www.gundam-the-origin.net/news/index.php?offset=45)

只保存必要事實、來源連結與官方影片 metadata；沒有新增圖片來源，也沒有下載或重新託管媒體、歌詞及頁面原文。所有新增歌曲保留第一方、交叉核對來源、語言與核對日期。

## 驗收

- `npm run catalog:check`：207 項通過；`npm run check`：公開邊界、Lint、305 項單元測試、建置、Cloudflare dry-run 及 35 項 Playwright 測試通過，最終瀏覽器測試沒有重試。
- 完整依賴與正式依賴稽核均為 0 項漏洞；既有 fast-uri 修補與回歸測試繼續通過。dry-run 沒有 runtime bindings。
- 產生 1,990 份 HTML，公開邊界檢查涵蓋 3,979 份產物。與前一 source 版本相比，1,974 份 API 逐位元相同；只更新春季清單並新增本作 API，沒有移除 API。
- 新增測試涵蓋 TV 重編版身份、七首歌曲及原始發行日、翻唱演唱者、共同作詞、創作者搜尋，以及 ED3 的兩個畫面版本。瀏覽器測試以鍵盤載入第 12 話的受控影片 fixture，確認另一版本仍可獨立操作，操作前沒有 YouTube iframe 或連線。
- 1280、960、390 及 320px 共 20 個作品、歌曲及季度畫面檢查通過，沒有水平溢出、頁面錯誤或提前建立的 iframe。人工檢視長標題、翻唱署名、製作名單與影片標題的排列。
- 既有導覽、年份／季度篩選、分頁搜尋、無 JavaScript 瀏覽、離線閱讀、404 與錯誤狀態回歸通過。初次執行發現的舊總數斷言已更新，再以完整流程驗證。

## 發布界線

本機結果及分支建置不代表正式網站已更新。正式版本須另外核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 和產物內容；Lighthouse、實機裝置與實際 YouTube 播放不在本機測試的完成宣稱內。
