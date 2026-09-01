# v1.13.0｜2023 冬季目錄、動畫歌曲與發佈 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2023 冬季 72 套非成人 TV／短篇 TV／WEB 連載動畫與 159 筆已審閱 OP／ED；
- 60 套作品已有可核對歌曲，12 套在沒有足夠公開證據時維持明確「尚未公布」狀態；
- 作品日期介乎 2023-01-01 至 2023-03-28，作品 identity、slug 與作品內 OP／ED 序號均通過唯一性及連續性檢查；
- 排除 15 筆不屬於本季度連載範圍的單次電影、試播、宣傳／音樂短片、跨季重複或宣傳 mini 內容；
- 新增 7 筆官方且可嵌入的影片 metadata；影片只保留公開識別、標題、頻道及來源，不下載或重新託管；
- 全站現為 14 個季度、1,054 個唯一作品頁、2,186 筆 OP／ED 與 1,104 筆官方或正式授權影片 metadata。

季度作品先由繁中動畫季度列表、Annict、Bangumi 與 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes 及公開歌曲索引核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測，也不發布研究期間的原始 response 或候選清單。

## 動畫歌曲重點核對

- 《極道主夫 第二季》保留 OP〈シュフノミチ〉與 ED〈極・夫婦街道〉，演唱者均為打首獄門同好会，並加入兩筆官方影片；
- 《伊藤潤二狂熱：日本恐怖故事》保留 MADKID〈Paranoid〉與 JYOCHO〈云う透り〉，並加入唱片公司官方影片；
- 《Fate/Grand Order 搞不懂的藤丸立香》、《宇宙偶像》與《Kuromi's Pretty Journey》補入用途明確的 ED 及官方影片；
- 《寶可夢 旅途 目標是寶可夢大師》按公開歌曲記錄保留 1 首 OP 與 5 首 ED，包括〈ラプラスにのって〉、〈前向きロケット団！〉與〈タイプ：ワイルド〉；
- 《開闊天空！光之美少女》按作品及歌曲官方記錄保留 1 首 OP 與 5 首 ED，包括〈うれしくて〉、〈All for one Forever〉及五人合唱的 ED5；
- 只標示為 generic main theme、沒有足夠 OP／ED 用途證據的歌曲維持未公布，不自行重新分類；
- 找不到足以證實的歌曲或官方影片時留空，不以相近標題、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查 | 驗收條件與結果 |
|---|---|
| Grain | 72 個 AniList ID、72 個作品 slug 與 159 個歌曲 identity 均唯一；7 個官方影片 ID 對應用途明確的 metadata record |
| Coverage | 72 個作品都有作品來源與季度交叉核對；159 首歌都有第一方及交叉核對來源；12 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及影片載入狀態有效 |
| Consistency | 2023 冬季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot |
| Conflict handling | 單次電影／試播／宣傳內容、跨季重複、多首 OP／ED 及 generic main theme 逐項處理；不以低可信度結果覆寫第一方證據 |
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

- `npm run catalog:check`：5 個檔案、134 項目錄／來源／影片 registry 檢查通過；
- `npm run lint`：129 個 Astro／TypeScript 檔案，0 error、0 warning、0 hint；
- `npm test`：21 個檔案、215 項測試通過；
- `npm run public:check`：186 個 repository 檔案通過公開邊界檢查；
- `npm audit --audit-level=low`：0 個已知 dependency vulnerability；
- `npm run build`：1,074 個 HTML 頁面完成，generated CSP 與 Service Worker 成功；2,155 個 build artifact 通過公開邊界檢查；
- `npm run cf:check`：3,234 個 Workers Static Assets 通過 Wrangler dry-run，0 application binding；
- `npm run test:e2e`：12 項 browser tests 通過，包括 static API、CSP、離線、2023 冬季歌曲、搜尋、年份 sidebar、390 px menu、未知 route 與 fail-closed 狀態；
- 額外 browser QA 核對 1280×844 與 390×844 的頁面 identity、72 套作品、14 個季度連結、可捲動 menu、正版影片篩選後 5 套作品、歌曲與來源、本機搜尋結果、YouTube 同意流程及無水平 overflow；同意前沒有 iframe，同意後只使用 `youtube-nocookie.com`，已核對互動沒有 console error／warning。

Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。Codex Security Scan 不屬於本輪流程；本輪使用精準範圍的公開邊界、依賴、差異與產物檢查。
