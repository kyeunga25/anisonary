# v1.21.0｜2021 冬季目錄、動畫歌曲與發佈 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2021 冬季 67 套非成人 TV／短篇 TV／WEB 連載動畫與 166 筆已審閱 OP／ED；
- 62 套作品已有可核對歌曲，5 套在沒有足夠公開證據時維持明確「尚未公布」狀態；
- 作品日期介乎 2020-12-27 至 2021-03-24；季度邊界保留提早數日首播且有冬季依據的《Skate-Leading☆Stars》，排除早於邊界開播的季度延續作、單集電影、OVA、宣傳短片及日本首播不在本季的作品；
- 67 個作品 identity、slug 與作品內 OP／ED 序號均通過唯一性及連續性檢查；
- 新增 53 筆官方或正式授權且可嵌入的影片 metadata，覆蓋 34 套作品；影片只保留公開識別、標題、頻道及來源，不下載或重新託管；
- 全站現為 22 個季度、1,591 個唯一作品頁、3,336 筆 OP／ED、538 個唯一歌曲層 YouTube 直連與 1,424 筆官方或正式授權影片 metadata。

季度作品先由繁中動畫季度列表、香港季度資料、中文年度動畫列表與 AniList identifier 盤點，再以作品官網、唱片公司、官方影片、AnimeThemes、日本歌曲索引及季度歌曲資料核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測，也不發布研究期間的原始 response 或候選清單。

## 動畫歌曲重點核對

- 《Re：從零開始的異世界生活 第二季 後半部》保留〈Long shot〉、〈Memento〉與〈Believe in you〉；只作劇中用途的〈Door〉及〈あなたの知らないこと〉不升格為 OP／ED；
- 《裏世界郊遊》的〈街を抜けて〉及《SHOW BY ROCK!! STARS!!》的〈Yell and Response〉依第一方用途排除，不把插曲或舊作歌曲重用誤標成新片尾；
- 《碧藍航線 微速前進！》依官方音樂資料核正為 OP〈Longing for!〉及 ED〈まひるいろシエスタ〉；
- 《吸血鬼之愛》保留兩首片頭及兩個地區片尾，並以版本標籤交代適用範圍；
- 《世界魔女出動！》保留十二個輪替片尾版本及官方角色／組合名稱；
- 《賽馬娘 Pretty Derby 第二季》的單集片尾及最終話合唱版本分開記錄；公開演唱者欄以不超出 API 安全上限的官方集體描述呈現，精確名單仍可由第一方來源核對；
- 《教教我吧 北齋！》的官方片尾影片識別、標題及公開頻道資料均以現行 oEmbed 回應重新核對；
- 找不到足以證實的歌曲或官方影片時留空，不以相近標題、插入歌、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查              | 驗收條件                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| Grain             | 67 個 AniList ID、67 個作品 slug 與 166 個公開歌曲 identity 均唯一；53 個影片 metadata record 的用途及公開識別有效  |
| Coverage          | 67 個作品都有作品來源與季度交叉核對；166 首歌都有第一方及交叉核對來源；5 套未公布歌曲明確標示                       |
| Validity          | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及影片載入狀態有效                               |
| Consistency       | 2021 冬季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot                         |
| Conflict handling | 插曲、劇中歌、舊作歌曲重用、地區片尾、輪替片尾、單集片尾與季度邊界逐項處理；不以次級索引覆寫第一方用途證據          |
| Public boundary   | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response、候選清單、個人資料或內部 confidence 規則 |

## 導覽、影片與法律邊界

- 桌面導覽由 reviewed quarter registry 產生，按年份分組為固定左側 sidebar；新增的 2021 冬季自動加入，不維護重複清單；
- 小螢幕使用可捲動的收合選單，22 個季度及資訊連結保持可到達，並保留鍵盤關閉及焦點返回行為；
- 目錄統計由 reviewed snapshot 自動計算，桌面及 390×844 手機不得有水平 overflow；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔、AI 生成目錄內容或 AI 生成作品媒體。

## 發佈驗收原則

本機 gate、瀏覽器結果與實際產物數量只在相應命令成功後記錄。Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。本版本以精準範圍的公開邊界、依賴、差異與產物檢查作為發佈安全 gate，不啟動 repository-wide Codex Security Scan。

## 本機驗收結果

- `npm run catalog:check`：5 個資料測試檔、142 項通過；
- `npm run lint`：153 個檔案，0 error、0 warning、0 hint；
- `npm test`：21 個測試檔、223 項通過；
- `npm run test:e2e`：12 項 Playwright 測試通過，包括 CSP、錯誤隱藏、離線可讀、鍵盤導覽、lazy video 與自訂 404；
- `npm run build`：建立 1,619 個頁面與 3,245 個公開產物，1,619 個 HTML 均產生逐頁 CSP；
- `npm run cf:check`：Wrangler 4.120.1 讀取 4,869 個 Static Assets、0 個 runtime binding，dry-run 通過；
- `npm run public:check` 與 `npm audit --audit-level=low`：218 個 repository 檔案通過公開邊界檢查，依賴弱點為 0；
- 166 筆新增歌曲來源記錄均通過結構與第一方／交叉核對完整度檢查；歷史官方站的反自動化回應、逾時或已退役網域會保留為可追溯的歷史 canonical link，不會誤報為內容仍可直接讀取；
- 53／53 個新增 YouTube 影片 ID 通過公開 oEmbed 核對；
- 真實瀏覽器在 1280×844 與 390×844 驗證 2021 冬季 67 個結果、34 個「有正版影片」結果、22 季桌面左側 sidebar、手機可捲動收合選單、Escape 關閉及焦點返回，兩個尺寸均沒有 console error 或水平 overflow；
- 《教教我吧 北齋！》作品頁顯示已核對片尾及官方影片；未按下影片按鈕前不建立 iframe，按下後只建立一個 `youtube-nocookie.com` iframe。

以上是本機與預覽層證據；正式環境仍須依上一節的固定 SHA 發佈流程另行驗證。
