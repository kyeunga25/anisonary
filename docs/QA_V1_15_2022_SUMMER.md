# v1.15.0｜2022 夏季目錄、動畫歌曲與發佈 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2022 夏季 69 套非成人 TV／短篇 TV／WEB 連載動畫與 146 筆已審閱 OP／ED；
- 49 套作品已有可核對歌曲，20 套在沒有足夠公開證據時維持明確「尚未公布」狀態；
- 作品日期介乎 2022-06-29 至 2022-09-17，作品 identity、slug 與作品內 OP／ED 序號均通過唯一性及連續性檢查；
- 排除不屬於本季度連載範圍的單次電影、OVA、企業／觀光／品牌宣傳短片，以及無法由兩個季度來源確認歸屬的網路短篇；
- 新增 28 筆官方且可嵌入的影片 metadata，覆蓋 13 套作品；影片只保留公開識別、標題、頻道及來源，不下載或重新託管；
- 全站現為 16 個季度、1,203 個唯一作品頁、2,529 筆 OP／ED 與 1,160 筆官方或正式授權影片 metadata。

季度作品先由繁中動畫季度列表、Annict、Bangumi、YourAnimes 與 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes 及公開歌曲索引核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測，也不發布研究期間的原始 response 或候選清單。

## 動畫歌曲重點核對

- 《Lycoris Recoil 莉可麗絲》保留 ClariS〈ALIVE〉與さユり〈花の塔〉，兩首均連結 Aniplex 官方無字幕影片；
- 《來自深淵 烈日的黃金鄉》只把官方列作 OP 的〈かたち〉與 ED〈Endless Embrace〉發布至 OP／ED 契約；原聲帶插曲〈GRAVITY〉不會誤列為 OP；
- 《徹夜之歌》以作品官方音樂公告核對 Creepy Nuts〈堕天〉及〈よふかしのうた〉，並使用富士電視台動畫官方頻道影片；
- 《ハナビちゃんは遅れがち》保留六首輪替 OP 與一首 ED，日文曲名、角色／聲優及七個影片 identity 逐一對應官方音樂頁；
- 《Prima Doll 天籟人偶》保留一首 OP 與七首角色 ED，並以官方 Full ver. 影片及作品音樂頁核對演唱陣容；
- 《光輝魔女》、《神渣☆偶像》及《Extreme Hearts》的多首輪替歌曲使用作品唱片／音樂頁作第一方證據，避免只依賴第三方索引；
- 找不到足以證實的歌曲或官方影片時留空，不以相近標題、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查 | 驗收條件與結果 |
|---|---|
| Grain | 69 個 AniList ID、69 個作品 slug 與 146 個公開歌曲 identity 均唯一；28 個官方影片 metadata record 的用途及公開識別有效 |
| Coverage | 69 個作品都有作品來源與季度交叉核對；146 首歌都有第一方及交叉核對來源；20 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及影片載入狀態有效 |
| Consistency | 2022 夏季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot |
| Conflict handling | 插曲、單次電影、OVA、宣傳內容及季度歸屬逐項處理；不以低可信度結果覆寫第一方證據 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response、候選清單或內部 confidence 規則 |

## 導覽、影片與法律邊界

- 桌面導覽由 reviewed quarter registry 產生，按年份分組為固定左側 sidebar；新增季度不需要維護重複清單；
- 小螢幕使用可捲動的收合選單，16 個季度及資訊連結保持可到達，並保留鍵盤關閉及焦點返回行為；
- 目錄統計由 reviewed snapshot 自動計算，桌面及手機不得有水平 overflow；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔、AI 生成目錄內容或 AI 生成作品媒體。

## 本機發佈 gate

- `npm run catalog:check`：5 個檔案、136 項目錄／來源／影片 registry 檢查通過；
- `npm run lint`：135 個 Astro／TypeScript 檔案，0 error、0 warning、0 hint；
- `npm test`：21 個檔案、217 項測試通過；
- `npm run public:check`：194 個 repository 檔案通過公開邊界檢查；
- `npm audit --audit-level=low`：0 個已知 dependency vulnerability；
- 2022 夏季人工歌曲來源：17 個唯一公開 URL 均回應成功；28／28 個 YouTube 影片 ID 均通過公開 oEmbed 讀回及唯一性檢查；
- `npm run build`：1,225 個 HTML 頁面完成，generated CSP 與 Service Worker 成功；2,457 個 build artifact 通過公開邊界檢查；
- `npm run cf:check`：3,687 個 Workers Static Assets 通過 Wrangler dry-run，0 application binding；
- `npm run test:e2e`：12 項 browser tests 通過，包括 static API、CSP、離線、2022 夏季歌曲、搜尋、年份 sidebar、390 px menu、未知 route 與 fail-closed 狀態；
- 額外 browser QA 核對 1280×844 與 390×844 的頁面 identity、69 套作品、16 個季度連結、可捲動 menu、正版影片篩選後 13 套作品、《來自深淵》的 OP／ED 分類及無水平 overflow；兩個尺寸均無 console error／warning，同意前沒有 iframe，同意後只使用 `youtube-nocookie.com`。

Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。本版本以精準範圍的公開邊界、依賴、差異與產物檢查作為發佈安全 gate。
