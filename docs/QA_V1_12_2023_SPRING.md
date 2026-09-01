# v1.12.0｜2023 春季目錄、動畫歌曲與發佈 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2023 春季 79 套非成人 TV／WEB 連載動畫與 168 筆已審閱 OP／ED；
- 57 套作品已有可核對歌曲，22 套在沒有足夠公開證據時維持明確「尚未公布」狀態；
- 作品日期介乎 2023-03-08 至 2023-06-29，作品 identity、slug 與作品內 OP／ED 序號均通過唯一性及連續性檢查；
- 排除 3 筆跨季誤標或單次宣傳內容，不用季度標籤取代公開資料範圍判斷；
- 新增 6 筆官方且可嵌入的影片 metadata；影片只保留公開識別、標題、頻道及來源，不下載或重新託管；
- 全站現為 13 個季度、982 個唯一作品頁、2,027 筆 OP／ED 與 1,097 筆官方或正式授權影片 metadata。

季度作品先由繁中動畫季度列表、Annict、Bangumi 與 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes 及公開歌曲索引核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測，也不發布研究期間的原始 response 或候選清單。

## 動畫歌曲重點核對

- 《輝夜姬想讓人告白－永不結束的初吻－》電視剪輯版保留 OP〈Love is Show〉與 ED〈heart notes〉，並加入兩筆動畫發行方官方影片；
- 《【我推的孩子】》OP〈アイドル〉與 ED〈メフィスト〉各保留一筆可嵌入官方影片；
- 《寶可夢 地平線》按公開歌曲記錄保留 4 首 OP 與 14 首 ED，並為作品內 OP／ED 維持連續序號；ED13〈Let me battle〉與 ED14〈ピッカーン！〉加入官方影片；
- 《爆丸 Legends》、《決鬥大師 WIN 決鬥學園篇》、《群馬寶寶 第2季》、《でんでんの電脳電車》及《ユーチューニャー》合共補回 17 筆有第一方與交叉核對證據的歌曲；
- 《ぼさにまる》的同名歌曲屬於其後真人劇，不把相近作品名的第三方索引結果誤列為本季動畫 ED；
- 只標示為 generic main theme、沒有足夠 OP／ED 用途證據的歌曲維持未公布，不自行重新分類；
- 找不到足以證實的歌曲或官方影片時留空，不以相近標題、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查 | 驗收條件與結果 |
|---|---|
| Grain | 79 個 AniList ID、79 個作品 slug 與 168 個歌曲 identity 均唯一；6 個官方影片 ID 對應用途明確的 metadata record |
| Coverage | 79 個作品都有作品來源與季度交叉核對；168 首歌都有第一方及交叉核對來源；22 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及影片載入狀態有效 |
| Consistency | 2023 春季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot |
| Conflict handling | 跨季誤標、單次宣傳、電視剪輯版、後來真人版歌曲、多首 OP／ED 及 generic main theme 逐項處理；不以低可信度結果覆寫第一方證據 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response、候選清單或內部 confidence 規則 |

## 導覽、影片與法律邊界

- 桌面導覽由 reviewed quarter registry 產生，按年份分組為固定左側 sidebar；新增季度不需要維護重複清單；
- 小螢幕使用可捲動的收合選單，季度及資訊連結保持可到達，並保留鍵盤關閉及焦點返回行為；
- 目錄統計由 reviewed snapshot 自動計算，桌面及手機不得有水平 overflow；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔、AI 生成目錄內容或 AI 生成作品媒體。

## 本機發佈 gate

- `npm run catalog:check`：5 個檔案、133 項目錄／來源／影片 registry 檢查通過；
- `npm run lint`：126 個 Astro／TypeScript 檔案，0 error、0 warning、0 hint；
- `npm test`：21 個檔案、214 項測試通過；
- `npm run public:check`：182 個 repository 檔案通過公開邊界檢查；
- `npm audit --audit-level=low`：0 個已知 dependency vulnerability；
- `npm run build`：1,001 個 HTML 頁面完成，generated CSP 與 Service Worker 成功；2,009 個 build artifact 通過公開邊界檢查；
- `npm run cf:check`：3,015 個 Workers Static Assets 通過 Wrangler dry-run，0 application binding；
- `npm run test:e2e`：12 項 browser tests 通過，包括 static API、CSP、離線、2023 春季歌曲、搜尋、年份 sidebar、390 px menu、未知 route 與 fail-closed 狀態；
- 額外 browser QA 核對 1280×844 與 390×844 的頁面 identity、79 套作品、13 個季度連結、可捲動 menu、正版影片篩選後 3 套作品、歌曲與來源、本機搜尋結果、YouTube 同意流程及無水平 overflow；兩個尺寸均無 console error／warning，同意前沒有 iframe，同意後只使用 `youtube-nocookie.com`。

Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。Codex Security Scan 不屬於本輪流程；本輪使用精準範圍的公開邊界、依賴、差異與產物檢查。
