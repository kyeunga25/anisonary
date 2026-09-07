# v1.50.0｜2019 春季《灰姑娘女孩劇場 CLIMAX SEASON》QA

來源與本機核對：2026-09-08。本文件記錄 source 範圍；正式部署須於固定版本合併後獨立驗收。

## 資料與來源

- 新增《アイドルマスター シンデレラガールズ劇場 CLIMAX SEASON／灰姑娘女孩劇場 第四季：CLIMAX SEASON》2019 年 TV 短篇系列、三首每月輪替 ED 與三筆官方試聽影片 metadata；春季共 34 套作品、99 筆歌曲，仍明示季度未完成。
- [Bandai Namco 官方公告](https://idolmaster.jp/blog/?p=58033)確認日本首播為 2019-04-02、星期二 21:54。[系列官方資料](https://idolmaster.jp/blog/?p=58824)明確分開 13 話 TV 版及 7 話遊戲限定版；[YourAnimes 季表](https://youranimes.tw/bangumi/201904)與[作品頁](https://youranimes.tw/animes/1922)交叉核對繁中名稱、日期、話數及播映完畢狀態。社群名稱不標成官方地區譯名。
- 日本 Columbia 的[四月公告](https://columbia.jp/idolmaster/imasnews/190405.html)、[五月公告](https://columbia.jp/idolmaster/imasnews/190510.html)與[六月公告](https://columbia.jp/idolmaster/imasnews/190607.html)逐曲確認〈きゅん・きゅん・まっくす〉、〈Max Beat〉及〈TAKAMARI☆CLIMAXXX!!!!!〉的 TV ED 用途、五人演唱名義、個別配音演唱者與 CD 日期 2019-04-17、2019-05-22、2019-06-19。
- 四月 ED 保留作詞坂井竜二與作曲 BNSI（kyo）；TV／CD 編曲欄位尚缺直接第一方核對，未由其他使用版本補值。五月 ED 保留渡部紫緒作詞、坂部剛作曲與編曲；六月 ED 三項職務均保留広川恵一（MONACA）。[アニソン・オンライン](https://anison.online/anime/1069)交叉核對季度、ED 用途與合唱名義。
- 唱片公告明確分開五人合唱、個人獨唱混音、伴奏及附加曲；後三者不新增為 TV 歌曲，不猜測單集範圍。遊戲限定短篇與既有 2020 年《Extra Stage》保持獨立。
- [四月](https://www.youtube.com/watch?v=QkO1DC96kIM)、[五月](https://www.youtube.com/watch?v=bqUcdQSW3qA)、[六月](https://www.youtube.com/watch?v=gBvq0uP4Hos)官方試聽分別為 85、77、90 秒，核對公開標題、頻道及可嵌入狀態，只保存必要 metadata。三段均標示試聽短版，不作完整 MV 或無字幕片尾。
- 沿用來源矩陣的必要事實使用範圍；不生成外部 ID、Romaji、圖片、演唱版本或未核對署名，不保存頁面原文、完整歌詞、音訊或影片。既有作品與歌曲的來源日期不變。

## 本機驗收

- `npm run catalog:check`：240 項通過。
- `npm run check -- -- --workers=1`：公開邊界、Lint、343 項單元測試、建置、Cloudflare dry-run 與 49 項 Playwright 通過；最終完整瀏覽器測試沒有重試。
- 完整依賴與正式依賴稽核均為 0 項漏洞；`fast-uri` 保持 3.1.6，既有安全回歸通過。
- 與 v1.49.2 source 比較：1,979 份 API 逐位元相同，只更新春季清單並新增作品詳情，沒有移除。既有《Extra Stage》詳情及歌曲不變。建置產生 1,995 份 HTML、3,989 份公開產物，dry-run 沒有 runtime bindings。
- 四項新資料測試先確認缺少記錄時失敗，再驗證獨立身份、每月 ED 用途、五人合唱、製作署名、CD 日期、來源、影片、API 讀回及繁中／創作者搜尋。
- 新 E2E 涵蓋 1280、960、390、320px 的年份／季度篩選、個別演唱者連結、歌曲深連結、鍵盤來源展開與媒體同意，以及 390px 無 JavaScript 的年度、季度、作品及來源導覽。影片同意使用固定回應檢查 iframe 目標；既有離線、404、對比與導覽回歸通過。
- 初次新 E2E 遺漏展開來源清單的步驟，已依原生操作補上鍵盤展開；專項與最終完整測試通過，未改動頁面行為或降低可見性斷言。
- Chromium 檢查作品、三首 ED 及春季頁共 25 個畫面，包含手機無 JavaScript 閱讀與來源展開；沒有水平溢出、頁面錯誤或操作前的 iframe／YouTube 請求。人工檢視桌面片尾及手機作品、來源展開截圖。

## 發布界線

本機與分支建置結果不代表正式網站已更新。發布時仍須核對合併 SHA、CI、Cloudflare 實際版本與流量，以及 live routes、headers、API 與產物內容。本切片未驗證實體裝置、Safari、Firefox、Lighthouse／Core Web Vitals 或實際 YouTube 播放。
