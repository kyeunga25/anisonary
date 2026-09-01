# v1.17.0｜2022 冬季目錄、動畫歌曲與發佈 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2022 冬季 58 套非成人 TV／短篇 TV／WEB 連載動畫與 111 筆已審閱 OP／ED；
- 47 套作品已有可核對歌曲，11 套在沒有足夠公開證據時維持明確「尚未公布」狀態；
- 作品日期介乎 2021-12-01 至 2022-03-19，作品 identity、slug 與作品內 OP／ED 序號均通過唯一性及連續性檢查；
- 排除不屬於這個季度發佈批次的後續歌曲、單次電影、OVA、宣傳內容及不能由季度來源交叉確認的項目；
- 新增 26 筆官方且可嵌入的影片 metadata，覆蓋 13 套作品；影片只保留公開識別、標題、頻道及來源，不下載或重新託管；
- 全站現為 18 個季度、1,340 個唯一作品頁、2,790 筆 OP／ED、538 個唯一歌曲層 YouTube 直連與 1,212 筆官方或正式授權影片 metadata。

季度作品先由繁中動畫季度列表、香港季度資料、Annict、Bangumi、中文年度動畫列表與 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes 及日本歌曲索引核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測，也不發布研究期間的原始 response 或候選清單。

## 動畫歌曲重點核對

- 《JOJO 的奇妙冒險 石之海》只收錄 2021 年 12 月首批集數使用的〈STONE OCEAN〉及〈Distant Dreamer〉，不把後續批次歌曲提前歸入本季度；
- 《擅長捉弄人的高木同學 第三季》保留〈まっすぐ〉及八首已核對輪替 ED，並將每首歌與官方影片逐一對應；劇中插曲版本沒有混入 OP／ED 契約；
- 《怪人開發部的黑井津小姐》依官方音樂頁保留一首 OP 與兩首 ED，不把相近標題或非官方上載當作新增歌曲；
- 《女學。II～Lucky Stars～》及《寶寶本部長 第二季》補上可由第一方頁面支持的歌曲，無法通過目前嵌入核對的影片不發布；
- 《這個不能播！》及《小太郎一個人生活》只保留可由第一方與交叉來源共同支持的 OP／ED，未充分支持的候選歌曲不納入；
- 第一方只稱為一般「主題歌」而沒有明確 OP／ED 分類的四筆記錄，使用公開備註保留原始分類語意，不把資料庫映射誤述為官方名稱；
- 找不到足以證實的歌曲或官方影片時留空，不以相近標題、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查 | 驗收條件與結果 |
|---|---|
| Grain | 58 個 AniList ID、58 個作品 slug 與 111 個公開歌曲 identity 均唯一；26 個官方影片 metadata record 的用途及公開識別有效 |
| Coverage | 58 個作品都有作品來源與季度交叉核對；111 首歌都有第一方及交叉核對來源；11 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及影片載入狀態有效 |
| Consistency | 2022 冬季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot |
| Conflict handling | 後續批次歌曲、一般「主題歌」、輪替 ED、插曲、未能嵌入的官方影片及季度歸屬逐項處理；不以低可信度結果覆寫第一方證據 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response、候選清單、個人資料或內部 confidence 規則 |

## 導覽、影片與法律邊界

- 桌面導覽由 reviewed quarter registry 產生，按年份分組為固定左側 sidebar；新增季度不需要維護重複清單；
- 小螢幕使用可捲動的收合選單，18 個季度及資訊連結保持可到達，並保留鍵盤關閉及焦點返回行為；
- 目錄統計由 reviewed snapshot 自動計算，桌面及手機不得有水平 overflow；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔、AI 生成目錄內容或 AI 生成作品媒體。

## 發佈驗收原則

本機 gate、瀏覽器結果與實際產物數量只在相應命令成功後記錄。Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。本版本以精準範圍的公開邊界、依賴、差異與產物檢查作為發佈安全 gate，不啟動 repository-wide Codex Security Scan。

## 本機驗收結果

- `catalog:check`：5 個檔案、138 項資料契約檢查通過；
- `public:check`：202 個 repository 檔案通過公開邊界檢查；`npm audit --audit-level=low` 為 0 個已知漏洞；
- `lint`：141 個檔案通過，0 error、0 warning、0 hint；
- unit test：21 個檔案、219 項測試通過；
- production build：1,364 個頁面、2,735 個建置產物；Cloudflare dry run 包含 4,104 個 Static Assets、0 個 runtime binding；
- source reachability：核對新模組 285 個非海報 HTTPS URL，均能取得有效回應；
- YouTube metadata：26／26 個已發布影片識別均能由目前的 oEmbed 回應核對官方標題與頻道；兩個拒絕嵌入核對的候選影片沒有發布；
- 完整 Playwright：12／12 項通過；額外 1 組 1280px 桌面與 390×844 手機瀏覽器視覺驗收通過；
- 桌面 sidebar、手機可捲動選單、58 套季度清單、13 套「有正版影片」篩選、作品詳情及 consent 前後的影片邊界均已核對；沒有水平 overflow、第一方 console error 或 warning。
