# v1.48.0｜2019 春季《爆丸 決戰星球》QA

核對日期：2026-09-07。本文件記錄 source 範圍與本機驗證；正式部署須於固定版本合併後獨立驗收。

## 資料與來源

- 新增《爆丸バトルプラネット／爆丸 決戰星球》日本播出版、1 首 OP 與 2 首 ED；春季共 32 套 TV 作品、94 筆歌曲，仍保留季度未完成說明。
- [東京電視台播出表](https://www.tv-tokyo.co.jp/anime/bakugan-bp/onair/)與 [SEGA 2019 年公告](https://www.sega.jp/topics/detail/190306_goods_1/)核對日本首播為 2019-04-01、星期一 17:55。使用具來源的本站識別碼，不生成外部索引 ID、Romaji 或圖片。
- [YOYOTV 台灣播出方](https://www.youtube.com/watch?v=9yiBbt820uo)及 [YourAnimes 繁中季表](https://youranimes.tw/bangumi/201904)核對繁中名稱。YOYOTV 的中文主題影片只作作品名稱來源，未關聯為日語 OP／ED 影片，也不自動載入媒體。
- OP〈情熱ジャンボリー〉由 HiHi Jets 演唱；SEGA 與[東京電視台製作頁](https://www.tv-tokyo.co.jp/anime/bakugan-bp/staff/)核對作詞 MiNE、共同作曲川口進／MiNE／Atsushi Shimada，以及共同編曲 Atsushi Shimada／Peach。
- 前期 ED〈Be my story〉由 HiHi Jets 演唱；SEGA 及 [onetrap 創作者官方](https://onetrap.ageha.net/archives/onetrap_news/0067)核對中村崇人的詞曲署名，SEGA 另列編曲 Dr.Dalmatian。
- 後期 ED〈サヨナラの方程式〉由 HiHi Jets 演唱；東京電視台製作頁核對作詞 miyakei、共同作曲大智／児山啓介。[作品首頁](https://www.tv-tokyo.co.jp/anime/bakugan-bp/)保留 2020-01-20 主題曲更新公告，因此明示後期歌曲於 2020 年更新，作品仍按日本首次播出的 2019 春季分類。
- [アニソンライブラリー](https://japan-anime-song.com/bakumarubatorupuranetto-anison/)交叉核對 OP／ED 次序與署名。其影片公開日期不作歌曲發行日期；三筆歌曲的發行日期、日語官方影片與後期 ED 編曲均保留空缺，不額外推定單集使用範圍。

## 本機驗收

- `npm run catalog:check`：232 項通過。
- `npm run check` 中公開邊界、Lint、335 項單元測試、建置及 Cloudflare dry-run 通過；瀏覽器啟動受到本機沙箱限制，另在允許環境執行 `npm run test:e2e`，43 項全部通過且沒有重試。
- 完整依賴與正式依賴稽核均為 0 項漏洞；`fast-uri` 保持 3.1.6，既有安全回歸通過。
- 與 v1.47.0 source 比較：1,977 份 API 逐位元相同，只更新春季清單並新增作品詳情，沒有移除。建置產生 1,993 份 HTML、3,985 份公開產物，dry-run 沒有 runtime bindings。
- 四項新增資料測試先確認缺少記錄時失敗，再驗證日本版身份、台灣名稱來源、共同製作署名、未知欄位、API 讀回與繁中／創作者搜尋。首輪瀏覽器回歸發現既有 2020 秋季的影片篩選預期數誤改，恢復原值後通過；該季資料沒有變動。
- 新增 E2E 涵蓋 1280、960、390、320px 的繁中搜尋、創作者連結、年份／季度／ED 篩選及後期片尾深連結，以及 390px 無 JavaScript 年度、季度、作品與來源導覽。原有離線、鍵盤、影片同意、404 與錯誤狀態回歸通過。
- Chromium 檢查作品、OP、前期 ED、後期 ED 與春季頁共 25 個畫面，包含 390px 無 JavaScript 閱讀；沒有水平溢出、頁面錯誤或使用者操作前的 iframe／YouTube 請求。人工檢視桌面及手機作品與後期片尾截圖。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
