# v1.19.0｜2021 夏季目錄、動畫歌曲與發佈 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2021 夏季 46 套非成人 TV／短篇 TV／WEB 連載動畫與 104 筆已審閱 OP／ED；
- 38 套作品已有可核對歌曲，8 套在沒有足夠公開證據時維持明確「尚未公布」狀態；
- 作品日期介乎 2021-07-01 至 2021-08-15，作品 identity、slug 與作品內 OP／ED 序號均通過唯一性及連續性檢查；
- 新增 65 筆官方且可嵌入的影片 metadata，覆蓋 32 套作品；影片只保留公開識別、標題、頻道及來源，不下載或重新託管；
- 全站現為 20 個季度、1,451 個唯一作品頁、3,039 筆 OP／ED、538 個唯一歌曲層 YouTube 直連與 1,305 筆官方或正式授權影片 metadata。

季度作品先由繁中動畫季度列表、香港季度資料、Annict、中文年度動畫列表與 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes、日本歌曲索引及 JOYSOUND 季度資料核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測，也不發布研究期間的原始 response 或候選清單。

## 動畫歌曲重點核對

- 《Love Live！Superstar!!》只保留第一方明確列作 OP／ED 的〈START!! True dreams〉與〈未来は風のように〉；〈未来予報ハレルヤ！〉與〈Wish Song〉屬插入歌，不升格為 OP／ED；
- 《IDOLiSH7 Third BEAT!》只保留〈THE POLiCY〉與〈PLACES〉，不把舊歌或插入歌加入本季主題曲；
- 《Obey Me!》只保留動畫主題曲〈It's My Party〉；網絡節目《Otaku FM》片尾〈Eternal〉不混入動畫目錄；
- 《月光下的異世界之旅》保留 OP、主要 ED 與第一集特別 ED〈ああ人生に涙あり〉；
- 《歌劇少女!!》保留一首 OP 與五筆官方 ED 記錄，包括〈薔薇と私〉的兩個演唱版本；
- 《TSUKIPRO THE ANIMATION 2》按官方音樂頁保留四首 OP 與十三首輪替 ED，最終一首為〈Best Wishes,〉；
- 《小林家的龍女僕 S》保留官方特別 ED，不把沿用舊 OP 的演出片段當成本季新 OP；
- 《Assault Lily Fruits》依第一方「主題歌」分類放入 ED 欄位，並以版本標籤清楚保留原本用途名稱；
- 《海賊王女》有兩個獨立夏季播映清單及 8 月 15 日海外首播證據，因此納入本季並保留首播範圍註記；
- 找不到足以證實的歌曲或官方影片時留空，不以相近標題、節目歌曲、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查              | 驗收條件                                                                                                               |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Grain             | 46 個 AniList ID、46 個作品 slug 與 104 個公開歌曲 identity 均唯一；65 個官方影片 metadata record 的用途及公開識別有效 |
| Coverage          | 46 個作品都有作品來源與季度交叉核對；104 首歌都有第一方及交叉核對來源；8 套未公布歌曲明確標示                          |
| Validity          | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及影片載入狀態有效                                  |
| Consistency       | 2021 夏季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot                            |
| Conflict handling | 插曲、節目歌曲、特別片尾、一般「主題歌」、輪替片尾及跨市場首播逐項處理；不以次級索引覆寫第一方用途證據                 |
| Public boundary   | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response、候選清單、個人資料或內部 confidence 規則    |

## 導覽、影片與法律邊界

- 桌面導覽由 reviewed quarter registry 產生，按年份分組為固定左側 sidebar；新增的 2021 夏季自動加入，不維護重複清單；
- 小螢幕使用可捲動的收合選單，20 個季度及資訊連結保持可到達，並保留鍵盤關閉及焦點返回行為；
- 目錄統計由 reviewed snapshot 自動計算，桌面及 390×844 手機不得有水平 overflow；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔、AI 生成目錄內容或 AI 生成作品媒體。

## 發佈驗收原則

本機 gate、瀏覽器結果與實際產物數量只在相應命令成功後記錄。Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。本版本以精準範圍的公開邊界、依賴、差異與產物檢查作為發佈安全 gate，不啟動 repository-wide Codex Security Scan。

## 本機驗收結果

- `npm run catalog:check`：5 個資料測試檔、140 項通過；
- `npm run lint`：147 個檔案，0 error、0 warning、0 hint；
- `npm test`：21 個測試檔、221 項通過；
- `npm run test:e2e`：12 項 Playwright 測試通過，包括 CSP、錯誤隱藏、離線可讀、鍵盤導覽、lazy video 與自訂 404；
- `npm run build`：建立 1,477 個頁面與 2,961 個公開產物，1,477 個 HTML 均產生逐頁 CSP；
- `npm run cf:check`：Wrangler 讀取 4,443 個 Static Assets、0 個 runtime binding，dry-run 通過；
- `npm run public:check` 與 `npm audit --audit-level=low`：210 個 repository 檔案通過公開邊界檢查，依賴弱點為 0；
- 來源可達性抽查涵蓋 268 個唯一公開 URL，其中 267 個可由自動請求直接讀取；Love Live! 官方作品首頁對自動請求回傳 403，另以官方歌曲影片及可見搜尋索引交叉確認，沒有把阻擋誤記成內容失效；
- 65／65 個新增 YouTube 影片 ID 通過公開 oEmbed 核對；
- 真實瀏覽器在 1280×844 與 390×844 驗證 2021 夏季 46 個結果、32 個「有正版影片」結果、20 季桌面左側 sidebar、手機可捲動收合選單、鍵盤焦點返回、歌曲分類及按需載入 iframe，兩個尺寸均沒有 console error 或水平 overflow；
- 《Love Live！Superstar!!》作品頁只顯示兩首已確認歌曲，未加入兩首插入歌；未按下影片按鈕前不建立 iframe。

以上是本機與預覽層證據；正式環境仍須依上一節的固定 SHA 發佈流程另行驗證。
