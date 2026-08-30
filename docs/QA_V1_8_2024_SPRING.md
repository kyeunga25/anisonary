# v1.8.0｜2024 春季目錄、官方影片與季度導覽 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單或內部評分規則。

## 公開資料切片

- 新增 2024 春季 76 套非成人 TV／WEB 連載動畫與 158 筆已審閱 OP／ED；
- 60 套作品已有可核對歌曲，16 套沒有足夠公開證據時維持明確「尚未公布」狀態；
- 新增 134 筆已審閱官方影片 metadata；全站影片 metadata 合計 960 筆；
- 全站現為 9 個季度、653 個唯一作品頁與 1,403 筆 OP／ED；
- 134／134 個本季 YouTube ID 在 2026-08-30 核對為公開、可嵌入、非直播及無年齡限制，沒有下載或重新託管影片。

季度作品先由繁中年度動畫列表、Annict、AniList identifier 及公開中文動畫目錄盤點，再以作品官網、唱片公司、官方影片、AnimeThemes、Bangumi 與公開歌曲索引核對歌曲、演唱者及分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測。

## 音樂資料重點核對

- 《狼與辛香料 MERCHANT MEETS THE WISE WOLF》保留前後半各一組 OP／ED，共四首歌曲及四段官方動畫片段；
- 《吹響吧！上低音號3》保留第一集特別 OP、正式 OP、ED 及兩首演奏曲；三首演奏曲的演出者統一核對為北宇治高校吹奏樂部；
- 《Girls Band Cry》依出現順序保留一首 OP 與六首 ED／劇中歌曲，逐首對應動畫官方頻道影片；
- 《夜晚的水母不會游泳》保留一首 OP 與四首不同 ED，JELEE 三首歌曲分別連到各自官方 Music Video；
- 《關於我轉生變成史萊姆這檔事 第3季》《我的英雄學院 第7季》及《魔法科高中的劣等生 第3季》的前後半歌曲分開記錄；
- 找不到足以證實的歌曲或官方影片時留空，不以相近標題、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查 | 驗收條件與結果 |
|---|---|
| Grain | 76 個 AniList ID、作品 slug、158 個歌曲 identity 及 134 個影片 key 均唯一；OP／ED 序號在作品內連續 |
| Coverage | 76 個作品都有作品來源與季度交叉核對；158 首歌都有第一方及交叉核對來源；16 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID 及影片可嵌入狀態有效 |
| Consistency | 2024 春季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot |
| Conflict handling | 跨 cour、特別 OP／ED、劇中歌曲及官方繁中名稱逐項處理；不以低可信度結果覆寫第一方證據 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response 或內部 confidence 規則 |

## 導覽、影片與法律邊界

- 桌面使用按年份分組的固定左側 sidebar；2024 年下列出秋季、夏季及春季，避免季度增加後形成過長水平 menu；
- 390×844 小螢幕使用可捲動的收合選單，年份與季度順序和桌面一致；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔、AI 生成目錄內容或 AI 生成作品媒體。

## 本機發佈 gate

- `npm run catalog:check`：5 個檔案、129 項目錄／來源／影片 registry 檢查通過；
- `npm run lint`：Astro／TypeScript 0 error、0 warning、0 hint；
- `npm test`：21 個檔案、210 項測試通過；
- `npm run public:check`：161 個 repository 檔案通過公開邊界檢查；
- `npm audit --audit-level=low`：0 個已知 dependency vulnerability；
- `npm run build`：668 個 HTML 頁面完成，generated CSP 與 Service Worker 成功；1,343 個 build artifact 通過公開邊界檢查；
- `npm run cf:check`：2,016 個 Workers Static Assets 通過 Wrangler dry-run，0 application binding；
- `npm run test:e2e`：12 項 browser tests 通過，包括 static API、CSP、離線、2024 春季歌曲、搜尋、年份 sidebar、390 px menu、未知 route 與 fail-closed 狀態；
- 額外 browser QA 核對 1280×844 與 390×844 的頁面 identity、76 套作品、9 個季度連結、menu 展開、歌曲次序、YouTube 同意流程與無水平 overflow；同意前沒有 iframe，同意後只使用 `youtube-nocookie.com`。

Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。
