# v1.9.0｜2024 冬季目錄、動畫歌曲與導覽 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2024 冬季 75 套非成人 TV／WEB 連載動畫與 130 筆已審閱 OP／ED；
- 49 套作品已有可核對歌曲，26 套在沒有足夠公開證據時維持明確「尚未公布」狀態；
- 本季 130 筆歌曲分為 52 筆 OP 與 78 筆 ED，作品內 OP／ED 序號連續；
- 新增 125 筆已審閱官方影片 metadata，對應 124 個唯一 YouTube ID；同一段《勇氣爆發 Bang Bravern》正式片段同時對應 OP 及特別 ED，不重複計作不同影片；
- 全站現為 10 個季度、728 個唯一作品頁、1,533 筆 OP／ED 與 1,085 筆官方或正式授權影片 metadata；
- 125／125 個本季影片選擇在 2026-08-30 核對為公開、可嵌入、非直播及無年齡限制，沒有下載或重新託管影片。

季度作品先由繁中年度動畫列表、Annict、Bangumi 與 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes 及公開歌曲索引核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測。

## 動畫歌曲重點核對

- 《迷宮飯》保留前後半各一組 OP／ED，共四首歌曲及四段官方動畫片段；
- 《月光下的異世界之旅 第二幕》保留兩首 OP 與四首 ED／特別 ED，共六首歌曲並全部配對官方片段；
- 《Snack Basue》依公開歌曲索引保留一首 OP 與十三首 ED；其中十三首有可核對官方影片，未找到充分證據的一首維持無影片狀態；
- 《美妙寵物 光之美少女》保留一首 OP 與五首 ED／版本歌曲，修正重複序號後其中五首有官方影片；
- 《忍者神威》保留一首 OP 與四首 ED／劇中歌曲，其中三首有官方影片；
- 《婚戒物語》〈Lover's Eye〉演出者依官方影片說明記為 Sizuk，不把主唱標示誤當藝人名稱；
- 《我獨自升級》重複 OP 記錄已合併；跨 cour、版本歌曲、特別 OP／ED 與同曲不同用途均保留明確 identity；
- 共五筆已發布歌曲因缺乏足夠官方影片證據而不填影片，不以相近標題、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查 | 驗收條件與結果 |
|---|---|
| Grain | 75 個 AniList ID、作品 slug 與 130 個歌曲 identity 均唯一；124 個影片 ID 對應 125 個用途明確的 metadata record |
| Coverage | 75 個作品都有作品來源與季度交叉核對；130 首歌都有第一方及交叉核對來源；26 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及可嵌入狀態有效 |
| Consistency | 2024 冬季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot |
| Conflict handling | 跨 cour、特別 OP／ED、歌曲版本、重複歌曲及官方繁中名稱逐項處理；不以低可信度結果覆寫第一方證據 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response、候選清單或內部 confidence 規則 |

## 導覽、影片與法律邊界

- 桌面使用按年份分組的固定左側 sidebar；2024 年依序列出秋季、夏季、春季與冬季，避免季度增加後形成過長水平 menu；
- 390×844 小螢幕使用可捲動的收合選單，年份與季度順序和桌面一致，關閉後焦點返回選單按鈕；
- 目錄統計由 reviewed snapshot 自動計算，不再以元件內的固定數字維護；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔、AI 生成目錄內容或 AI 生成作品媒體。

## 本機發佈 gate

- `npm run catalog:check`：5 個檔案、130 項目錄／來源／影片 registry 檢查通過；
- `npm run lint`：117 個 Astro／TypeScript 檔案，0 error、0 warning、0 hint；
- `npm test`：21 個檔案、211 項測試通過；
- `npm run public:check`：165 個 repository 檔案通過公開邊界檢查；
- `npm audit --audit-level=low`：0 個已知 dependency vulnerability；
- `npm run build`：744 個 HTML 頁面完成，generated CSP 與 Service Worker 成功；1,495 個 build artifact 通過公開邊界檢查；
- `npm run cf:check`：2,244 個 Workers Static Assets 通過 Wrangler dry-run，0 application binding；
- `npm run test:e2e`：12 項 browser tests 通過，包括 static API、CSP、離線、2024 冬季歌曲、搜尋、年份 sidebar、390 px menu、未知 route 與 fail-closed 狀態；
- 額外 browser QA 核對 1280×844 與 390×844 的頁面 identity、75 套作品、10 個季度連結、menu 展開、目錄統計與無水平 overflow。

Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。
