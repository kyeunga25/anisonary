# v1.6.0｜2024 秋季目錄、官方影片與年份導覽 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單或內部評分規則。

## 公開資料切片

- 新增 2024 秋季 88 套非成人 TV／WEB 連載動畫與 160 筆已審閱 OP／ED；
- 63 套作品已有可核對歌曲，25 套沒有足夠公開證據時保留明確待公布狀態；
- 新增 128 筆已審閱官方影片 metadata，覆蓋 59 套作品；全站影片 metadata 合計 672 筆；
- 全站現為 7 個季度、509 個唯一作品頁與 1,064 筆 OP／ED；
- 128／128 個本季 YouTube ID 在 2026-08-30 重新核對為公開、可嵌入及非直播，沒有下載或重新託管影片；
- 《膽大黨》OP／ED 分別核對為 Creepy Nuts〈オトノケ〉及ずっと真夜中でいいのに。〈TAIDADA〉。OP 使用可播放的 Creepy Nuts 官方 MV，動畫官方 OP 映像仍保留為歌曲第一方核對來源。

季度作品先由 Annict、繁中年度動畫表、AniList identifier 及公開動畫目錄盤點，再以作品官網、唱片公司、官方影片、AnimeThemes 與公開歌曲索引核對歌曲、演唱者及分類。若次級歌曲索引與動畫官方影片或 AnimeThemes 衝突，以第一方證據及直接主題曲記錄為準；未解決資料不作推測。

## 資料品質 gate

| 檢查 | 驗收條件與結果 |
|---|---|
| Grain | 88 個 AniList ID、作品 slug、歌曲 key 及影片 key 均唯一；OP／ED 序號在作品內連續 |
| Coverage | 88 個作品都有作品來源與季度交叉核對；160 首歌都有來源；25 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL 與 YouTube ID 格式有效 |
| Consistency | 2024 秋季 seed、歌曲來源、影片 registry、靜態 API 與頁面輸出一致 |
| Conflict handling | 已修正一筆次級歌曲索引的 OP／ED 錯置；沒有以低可信度值覆寫第一方證據 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response 或內部 confidence 規則 |

## 導覽、影片與私隱

- 桌面固定左側 sidebar 依 2026、2025、2024 分組季度，避免 menu 隨季度增加而變成過長單行；
- 390×844 小螢幕使用可捲動的收合選單，年份與季度順序和桌面一致；
- YouTube iframe 只在使用者明確按下後建立，預設頁面不向 YouTube 發出請求；
- 全站回應維持 `Referrer-Policy: no-referrer`，只有已同意載入的 YouTube iframe 使用 `strict-origin-when-cross-origin`，只提供播放器要求的網站 origin，不傳送作品頁完整路徑；這也符合 [YouTube 嵌入播放器的最低功能要求](https://developers.google.com/youtube/terms/required-minimum-functionality)；
- 外部 poster 仍使用 `no-referrer`，搜尋頁不載入遠端 poster，所有音樂與影片只連接官方或正式授權渠道。

## 發佈 gate

- `npm run catalog:check`：5 個檔案、127 項目錄／來源／影片 registry 檢查通過；
- `npm run public:check`：153 個 repository 檔案通過公開邊界檢查；
- `npm run lint`／Astro check：108 個檔案，0 error、0 warning、0 hint；
- `npm test`：21 個檔案、208 項測試通過；
- `npm audit --audit-level=low`：0 個已知 dependency vulnerability；
- `npm run build`：522 個 HTML 頁面完成，generated CSP 與 Service Worker 成功；1,051 個 build artifact 通過公開邊界檢查；
- `npm run cf:check`：1,578 個 Workers Static Assets 通過 Wrangler dry-run，0 application binding；
- `npm run test:e2e`：12 項 browser tests 通過，包括 static API、CSP、離線、2024 秋季歌曲、搜尋、年份 sidebar、390 px menu、未知 route 與 fail-closed 狀態；
- 內建 Browser 另核對 1280×844 與 390×844 的頁面 identity、DOM、console、menu 展開、季度篩選、歌曲詳情、YouTube 同意流程及無水平 overflow；沒有 framework overlay 或相關應用程式 warning／error。

Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。
