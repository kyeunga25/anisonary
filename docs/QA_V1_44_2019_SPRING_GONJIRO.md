# v1.44.0｜2019 春季《毛球權次郎》QA

核對日期：2026-09-07。本文件記錄 source 範圍與本機驗證；正式部署須於固定版本合併後獨立驗收。

## 資料與來源

- 新增《けだまのゴンじろー／毛球權次郎》2019 年 TV 版、2 筆 OP／ED 與 1 筆正式授權影片 metadata；春季共 30 套作品、78 筆歌曲，仍保留季度未完成說明。
- [東京電視台](https://www.tv-tokyo.co.jp/anime/gonjiro/onair/)與 [Sony Music](https://www.sonymusic.co.jp/artist/DemonKakka/info/507323)確認 2019-04-06、每週六 10:00 的 TV 首播。繁中名稱由 [YourAnimes 季表](https://youranimes.tw/bangumi/201904)與[作品頁](https://youranimes.tw/animes/3711)交叉核對，不宣稱社群名稱為地區官方譯名。
- [官方主題曲頁](https://www.tv-tokyo.co.jp/anime/gonjiro/staff/)與 Sony Music 確認 CHAI 的 OP、デーモン閣下的 ED、詞曲與編曲署名。共同作曲者各自保存，不由團體名單推定個別演唱者。
- CD 完整版日期為 2019-07-24；TV 使用另列的動畫短版，ED 短版[於 2019-04-06 先行配信](https://www.sonymusic.co.jp/artist/DemonKakka/info/505719)。短版日期不取代 CD 日期，也不增加重複 OP／ED。
- 歌曲用途以[アニソンライブラリー](https://japan-anime-song.com/kedamanogonjiroo-anison/)交叉確認，最終 credits 採第一方。
- [片尾製作者的公開影片](https://www.youtube.com/watch?v=GrWK6BJwziI)明示取得製作委員會與製作公司的上傳許可；以[文化廳創作者頁](https://www.bunka.go.jp/j-mediaarts/animation2021/creators_file_2021/misato/index.html)連結核對頻道，分類為正式授權的無字幕 ED。保留原影片標題與頻道 metadata，不下載或代理媒體。
- 使用本站 `catalog-` 識別碼及可追溯來源；未核對的 Romaji、外部索引 ID、圖片及 OP 影片保持空缺。

## 本機驗收

- `npm run catalog:check`：223 項通過。
- `npm run check`：公開邊界、Lint、321 項單元測試、建置、Cloudflare dry-run 與 37 項 Playwright 測試通過；最終瀏覽器測試沒有重試。
- 完整依賴與正式依賴稽核均為 0 項漏洞；`fast-uri` 保持 3.1.6，既有安全回歸通過。
- API 與 v1.43.0 source 比較：1,975 份逐位元相同，只更新春季清單並新增作品詳情，沒有移除。建置產生 1,991 份 HTML、3,981 份公開產物，dry-run 沒有 runtime bindings。
- 四項新增資料測試先確認缺少記錄時失敗，再驗證身份、日期、版本、共同署名、授權影片、API 讀回及中日名稱／創作者搜尋。
- 新增 E2E 涵蓋 1280、960、390、320px 的創作者搜尋、歌曲深連結、無 Romaji／AniList 時的顯示、共同署名、影片同意及 390px 無 JavaScript 季度導覽。原有離線、鍵盤、404 與錯誤狀態回歸通過。
- Chromium 檢查作品、OP、ED 與春季頁共 20 個畫面，包含 390px 無 JavaScript 閱讀；沒有水平溢出、頁面錯誤或使用者操作前的 iframe／YouTube 請求。人工檢視 1280、390px 的作品及 ED 截圖。
- 截圖使用產品既有的減少動態效果設定；首次截圖定位的元素穩定性等待曾逾時，調整截圖設定後通過。一般動態設定下的操作由 E2E 驗證。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
