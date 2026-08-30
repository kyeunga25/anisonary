# v1.5.0｜2025 冬季目錄與導覽 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單或內部評分規則。

## 公開資料切片

- 新增 2025 冬季 59 套非成人 TV／WEB 連載動畫與 136 筆已審閱 OP／ED；
- 新增 49 筆已審閱官方或正式授權影片 metadata；全站合計 544 筆；
- 全站現為 6 個季度、421 個唯一作品頁、904 筆 OP／ED、538 筆 YouTube link record（536 個唯一連結）；
- 904 筆歌曲都必須同時具備至少一個第一方及一個交叉核對來源；
- 6 套未有足夠公開資料確認 OP／ED 的作品保留明確待公布狀態，不以推測補值。

季度作品先由 Annict、Bangumi、繁中年度動畫表及 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes、UZUREA 及公開歌曲索引核對歌曲、演唱者與分類。Repository 只保存人工審閱後的公開 seed、來源 ledger 和影片 metadata，不保存原始回應或 crawler。

## 資料品質 gate

| 檢查 | 驗收條件 |
|---|---|
| Grain | 每個 AniList ID 只由一個季度 seed 擁有；每首歌只由作品、OP／ED、序號唯一識別 |
| Coverage | 59 個作品都有官網、Annict 與作品／季度交叉核對來源 |
| Validity | 必填欄位完整，日期與 URL 格式有效，公開 URL 全為 HTTPS |
| Consistency | 季度、作品、歌曲來源與影片 registry 的 owner 及 key 一致 |
| Conflict handling | 沒有未解決欄位衝突；證據不足的歌曲維持待公布 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response 或內部 confidence 規則 |

## 導覽與介面

- 2025 冬季加入桌面固定左側分組 sidebar；不再擴張單行橫向 menu；
- 小螢幕沿用可鍵盤操作的收合選單，季度入口順序與桌面一致；
- 首頁、搜尋、來源、季度及作品頁共用六季狀態與相同 reviewed snapshot；
- 驗收包含 1440×900 桌面及 390×844 手機 viewport、無水平 overflow、導覽互動、頁面 identity、console 與 framework overlay。

## 發佈 gate

- `npm run catalog:check`：5 個檔案、126 項目錄／來源／影片 registry 檢查通過；
- `npm run public:check`：149 個 repository 檔案通過公開邊界檢查；
- `npm run lint`：105 個檔案，0 error、0 warning、0 hint；
- `npm test`：21 個檔案、207 項測試通過；
- `npm run build`：433 個 HTML 頁面完成，generated CSP 與 Service Worker 成功；873 個 build artifact 通過公開邊界檢查；
- `npm run cf:check`：1,311 個 Static Assets 通過 Wrangler dry-run，0 application binding；
- `npm run test:e2e`：12 項 browser tests 通過，包括 2025 冬季歌曲、static API、CSP、離線、桌面 sidebar、390 px menu、未知 route 與 fail-closed 狀態；
- 內建 Browser 另核對桌面與手機頁面 identity、DOM、console、menu 展開／Escape 關閉、active link、歌曲詳情及無水平 overflow，沒有發現 framework overlay 或應用程式 warning／error。

Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets build，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。
