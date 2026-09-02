# v1.25.0｜2020 冬季目錄、動畫歌曲與發佈 QA

本記錄只描述可公開、可重現的產品驗證；不包含原始 API 回應、帳戶或平台資源識別、憑證、私人路徑、資料庫內容、研究候選清單、crawler 或內部評分規則。

## 公開資料切片

- 新增 2020 冬季 58 套非成人 TV／短篇 TV／WEB 連載動畫與 180 筆已審閱 OP／ED；
- 51 套作品已有可核對歌曲，7 套在沒有足夠公開 OP／ED 用途證據時維持明確「尚未公布」狀態；
- 作品日期介乎 2019-12-27 至 2020-03-30；季度邊界容許多個季度目錄一致歸入冬季的年末先行作品，並排除成人作品、電影、OVA、單次特別篇、宣傳內容及季度外連載；
- 58 個作品 identity、slug 與作品內 OP／ED 序號均通過唯一性及連續性檢查；
- 新增 43 筆官方或正式授權且可嵌入的影片 metadata，覆蓋 14 套作品；其中 40 筆來自官方頻道、3 筆為正式授權音源，影片只保留公開識別、標題、頻道及來源，不下載或重新託管；
- 全站現為 26 個季度、1,808 個唯一作品頁、3,965 筆 OP／ED、538 個唯一歌曲層 YouTube 直連與 1,683 筆官方或正式授權影片 metadata。

季度作品先由繁中動畫季度列表、香港季度資料、中文年度動畫列表與 AniList identifier 盤點，再以作品官網、播出／製作／發行單位、官方影片、AnimeThemes、日本歌曲索引及季度歌曲資料核對歌曲、演唱者與分類。第一方證據與次級索引衝突時，以動畫、發行方、藝人官方頁或直接主題曲記錄為準；未解決資料不作推測，也不發布研究期間的原始 response 或候選清單。

## 動畫歌曲重點核對

- 《妖怪學園Y ～第N類接觸～》保留 3 首片頭與 11 首片尾，並採用第一方公開的日文歌手及角色標記；
- 《22/7》保留 1 首片頭與 9 首輪替片尾，10 首歌均連到對應官方影片；《灰姑娘女孩劇場 Extra Stage》保留 16 首可核對片尾；
- 《異獸魔都》保留 1 首片頭與 6 首片尾，7 首歌均有對應官方或正式授權影片 metadata；
- 《魔法紀錄 魔法少女小圓外傳》只收錄可證實的〈ごまかし〉、〈アリシア〉及〈ニグレド〉，不把配樂或聲音 cue 升格為 OP／ED；
- 《緣結熊本》只保留第一方證實為片尾的〈Camellia〉，其他正式發行歌曲按作品用途維持在插曲範圍外；
- 《ZENONZARD THE ANIMATION》把第一方列作插曲的〈WakeUp〉排除，並把 8 首可證實片尾保持為連續序號；
- 《齊木楠雄的災難 Ψ始動篇》、《Breakers》、《LALALACOCO》、《破曉之翼》、《大家先生與我》、《恐龍女孩高子 第二季》及《偶像活動 on Parade！WEB 動畫》沒有足夠公開 OP／ED 位置證據，維持空狀態；
- 找不到足以證實的歌曲或可嵌入影片時留空，不以相近標題、配樂、劇中歌、角色歌、Premium-only 內容、非官方上載或生成內容替代。

## 資料品質 gate

| 檢查 | 驗收條件 |
|---|---|
| Grain | 58 個 AniList ID、58 個作品 slug 與 180 個公開歌曲 identity 均唯一；43 個影片 metadata record 的用途及公開識別有效 |
| Coverage | 58 個作品都有作品來源與季度交叉核對；180 首歌都有第一方及交叉核對來源；7 套未公布歌曲明確標示 |
| Validity | 必填標題、ISO 日期、季度範圍、星期、HTTPS URL、YouTube ID、官方狀態及影片載入狀態有效 |
| Consistency | 2020 冬季 seed、歌曲來源、影片 registry、靜態 API、搜尋與頁面輸出使用同一 reviewed snapshot |
| Conflict handling | 插曲、配樂、一般主題歌、輪替片尾、地區發行、不可嵌入影片及季度邊界逐項處理；不以次級索引覆寫第一方用途證據 |
| Public boundary | 不發布 secret、私人路徑／資源識別、真實資料庫內容、crawler、原始 response、候選清單、個人資料或內部 confidence 規則 |

## 導覽、影片與法律邊界

- 桌面導覽由 reviewed quarter registry 產生，按年份分組為固定左側 sidebar；新增的 2020 冬季自動加入，不維護重複清單；
- 小螢幕使用可捲動的收合選單，26 個季度及資訊連結保持可到達，並保留鍵盤關閉及焦點返回行為；
- 目錄統計由 reviewed snapshot 自動計算，桌面及 390×844 手機不得有水平 overflow；
- YouTube iframe 只在使用者明確按下後建立，並使用 privacy-enhanced domain；
- 作品圖像仍由可追溯的公開媒體頁直接載入，不下載或重新託管動畫圖片；
- 來源連結只提供事實核對，不代表 repository 取得第三方動畫、商標、圖片、音樂或影片的重用授權；
- 專案沒有加入完整歌詞、音訊、影片檔或生成式作品媒體；公開目錄值必須有來源，不以模型推測補值。

## 發佈驗收原則

本機 gate、瀏覽器結果與實際產物數量只在相應命令成功後記錄。Production 只有在固定 Git SHA 經 GitHub checks、合併、Workers Static Assets 部署，以及 live route／header／API contract／代表性檔案 parity 驗證後才算完成。本版本以精準範圍的公開邊界、依賴、差異與產物檢查作為發佈安全 gate，不啟動 repository-wide Codex Security Scan。

## 本機驗收結果

- `npm run catalog:check`：5 個資料測試檔、146 項通過；
- `npm run lint`：165 個檔案，0 error、0 warning、0 hint；
- `npm test`：21 個測試檔、227 項通過；
- `npm run test:e2e`：12 項 Playwright 測試通過，包括 2020 冬季歌曲身份、14 套正版影片篩選結果、26 季導覽、CSP、錯誤隱藏、離線可讀、鍵盤導覽、lazy video 與自訂 404；
- `npm run build`：建立 1,840 個頁面與 3,687 個公開產物，1,840 個 HTML 均產生逐頁 CSP；
- `npm run cf:check`：Wrangler 4.120.1 讀取 5,532 個 Static Assets、0 個 runtime binding，dry-run 通過；
- `npm run public:check`：234 個 repository 檔案通過公開邊界檢查；3,687 個 build artifact 亦通過相同 gate；`npm audit --audit-level=low` 回報 0 個已知依賴弱點；
- 180 筆新增歌曲來源記錄均通過結構、第一方／交叉核對完整度、HTTPS URL 及公開欄位檢查；用途不足的候選不會進入公開資料；
- 43／43 個新增 YouTube 影片 ID 均為公開且允許嵌入，標題與頻道 metadata 與公開頁一致；Premium-only 及非官方候選沒有進入 registry；
- 真實瀏覽器在本機驗證 2020 冬季 58 個結果、14 個「有正版影片」結果、26 季桌面左側 sidebar、手機可捲動收合選單、Escape 關閉及焦點返回，且沒有水平 overflow；
- 《異獸魔都》作品頁顯示 7 筆已核對歌曲與 7 條對應影片；未按下影片按鈕前不建立 iframe，按下後只建立 `youtube-nocookie.com` iframe。

以上是本機與 dry-run 層證據；正式環境仍須依上一節的固定 SHA 發佈流程另行驗證。
