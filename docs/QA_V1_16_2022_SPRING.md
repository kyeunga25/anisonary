# v1.16.0｜2022 春季目錄、動畫歌曲與發佈 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2022 春季 79 套非成人 TV／短篇 TV／WEB 連載動畫與 150 筆已審閱 OP／ED；
- 56 套作品已有可核對歌曲，23 套在沒有足夠公開證據時維持明確「尚未公布」狀態；
- 作品日期介乎 2022-03-01 至 2022-06-28，作品 identity、slug 與作品內 OP／ED 序號均通過唯一性及連續性檢查；
- 排除不屬於本季度連載範圍的單次電影、OVA、活動／企業／觀光宣傳短片，以及無法由兩個季度來源確認歸屬的網路短篇；
- 新增 26 筆官方且可嵌入的影片 metadata，覆蓋 12 套作品；影片只保留公開識別、標題、頻道及來源，不下載或重新託管；
- 全站現為 17 個季度、1,282 個唯一作品頁、2,679 筆 OP／ED、538 個唯一歌曲層 YouTube 直連與 1,186 筆官方或正式授權影片 metadata。

季度作品先由繁中動畫季度列表、Annict、Bangumi、中文年度動畫列表與 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes、日本歌曲索引及香港季度資料核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測，也不發布研究期間的原始 response 或候選清單。

## 動畫歌曲重點核對

- 《SPY×FAMILY 間諜家家酒》保留 Official髭男dism〈ミックスナッツ〉與星野源〈喜劇〉，兩首均連結 TOHO animation 官方無字幕影片；
- 《派對咖孔明》保留〈チキチキバンバン〉、四個明確演唱陣容的輪替 ED identity，並連結 avex pictures 官方 OP／ED 影片；
- 《輝夜姬想讓人告白－超級浪漫－》保留〈GIRI GIRI〉、〈ハートはお手上げ〉與特別 ED〈My Nonfiction〉的獨立來源及影片；
- 《女忍者椿的心事》依官方唱片 tracklist 保留一首 OP、十二個班別 ED 與全員版 ED，並修正「戌班」「未班」原文及日文角色名；
- 《夏日時光》及《青之蘆葦》保留前後半 OP／ED；日文演唱者名稱、歌曲次序與官方影片逐項對應作品音樂頁；
- 《魔法紀錄 Final SEASON》以官方唱片頁保留〈ケアレス〉、〈Lapis〉與〈オルゴール〉原文，不沿用次級索引的羅馬字替代；
- 《なならき～Seven Lucky Gods～》第一方只稱〈Lucky Boy, Lucky Girl〉為動畫「主題歌」，因此在既有 OP／ED 契約下保留 OP1 導覽記錄，同時明示「主題歌（官方分類）」而不聲稱它是官方列名 OP；
- 找不到足以證實的歌曲或官方影片時留空，不以相近標題、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查 | 驗收條件與結果 |
|---|---|
| Grain | 79 個 AniList ID、79 個作品 slug 與 150 個公開歌曲 identity 均唯一；26 個官方影片 metadata record 的用途及公開識別有效 |
| Coverage | 79 個作品都有作品來源與季度交叉核對；150 首歌都有第一方及交叉核對來源；23 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及影片載入狀態有效 |
| Consistency | 2022 春季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot |
| Conflict handling | 一般「主題歌」、特別結尾、輪替歌曲、單次電影、宣傳內容及季度歸屬逐項處理；不以低可信度結果覆寫第一方證據 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response、候選清單、個人資料或內部 confidence 規則 |

## 導覽、影片與法律邊界

- 桌面導覽由 reviewed quarter registry 產生，按年份分組為固定左側 sidebar；新增季度不需要維護重複清單；
- 小螢幕使用可捲動的收合選單，17 個季度及資訊連結保持可到達，並保留鍵盤關閉及焦點返回行為；
- 目錄統計由 reviewed snapshot 自動計算，桌面及手機不得有水平 overflow；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔、AI 生成目錄內容或 AI 生成作品媒體。

## 發佈驗收原則

本機 gate、瀏覽器結果與實際產物數量只在相應命令成功後記錄。Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。本版本以精準範圍的公開邊界、依賴、差異與產物檢查作為發佈安全 gate，不啟動 repository-wide Codex Security Scan。

## 本機驗收結果

- `catalog:check`：5 個檔案、137 項資料契約檢查通過；
- `public:check`：198 個 repository 檔案通過公開邊界檢查；`npm audit --audit-level=low` 為 0 個已知漏洞；
- `lint`：138 個檔案通過，0 error、0 warning、0 hint；
- unit test：21 個檔案、218 項測試通過；
- production build：1,305 個頁面、2,617 個建置產物；Cloudflare dry run 包含 3,927 個 Static Assets、0 個 runtime binding；
- source reachability：核對 31 個唯一來源 URL；其中一個第一方網站拒絕自動化請求，保留可由一般瀏覽器到達的原始官方 URL，其他來源均成功回應；
- YouTube metadata：26／26 個影片識別均能由目前的 oEmbed 回應核對官方標題與頻道；
- 完整 Playwright：12／12 項通過；額外桌面及 390px 手機視覺驗收 1／1 項通過；
- 桌面 sidebar、手機可捲動選單、79 套季度清單、12 套「有正版影片」篩選、作品詳情及 consent 前後的影片邊界均已核對；沒有水平 overflow、第一方 console error 或 warning。
