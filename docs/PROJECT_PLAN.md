# Anisonary｜動畫歌典 — 公開範圍與版本狀態

本文件記錄 repository source 的產品範圍與可驗證狀態；正式發布以對應 Release 的驗收證據為準。產品以動畫為入口，按季度與日本編輯播出日整理 OP／ED 資料，並把使用者導向官方或正版渠道；不託管音訊、影片或完整歌詞。

## Current product scope

- 2026 夏季 70 套、2026 春季 70 套、2026 冬季 66 套、2025 夏季 75 套、2025 春季 82 套、2025 冬季 59 套、2024 秋季 88 套、2024 夏季 68 套、2024 春季 76 套、2024 冬季 75 套、2023 秋季 100 套、夏季 75 套、春季 79 套、冬季 72 套、2022 秋季 80 套、夏季 69 套、春季 79 套、冬季 58 套、2021 秋季 65 套、夏季 46 套、春季 73 套、冬季 67 套、2020 秋季 67 套、夏季 31 套、春季 61 套、冬季 58 套、2019 秋季 67 套、2019 夏季 42 套及 2019 春季 29 套非成人 TV／網絡連載作品；
- 跨季作品共用詳情頁，共 1,946 個唯一作品及 4,305 筆已審閱 OP／ED；
- 五個固定導覽入口、年代／年份／季度目錄、星期一至星期日及不定期分組、分頁本機搜尋、動畫詳情與同源 static JSON API；
- 每個季度、作品及歌曲公開來源、語言、review state 及核對日期；每首歌曲同時具備第一方／交叉核對來源；
- 官方／licensed YouTube 導航、明確第三方連線同意、來源歸屬及無圖 fallback；
- Astro + strict TypeScript、generated CSP、privacy-bounded Service Worker；
- Cloudflare Workers Static Assets 靜態部署，0 application binding。

2019 春、夏季仍在分批核對，2025 秋季尚未收錄；不把現有快照視為全季度或全歷史資料已齊備。

## 公開版本狀態

- **v0.1.x**：季度與動畫詳情頁、OP／ED credits、來源、平台連結、深淺色主題、SEO、無障礙狀態及 Workers Static Assets delivery；
- **v0.2.0**：可追溯精選目錄、加固的公開 API contract boundary、跨季度本機搜尋，以及 YouTube 明確同意與 `no-referrer` 媒體私隱設定；
- **v0.3.0**：私隱邊界明確的離線目錄、繁中 Web App Manifest，以及 build-time 同源靜態 precache；不加入 application Worker 或 stateful binding；
- **v0.4.0**：補齊 2026 春夏完整季度範圍，建立 139 個唯一作品頁及 298 首已公布 OP／ED 的可追溯靜態快照；
- **v1.0.0**：把相同 reviewed snapshot 發布為同源靜態 JSON API，完成自包含的公開產品；仍維持 Workers Static Assets、0 application bindings 及本機搜尋／離線私隱邊界；
- **v1.1.0**：加入 2026 冬季及 2025 夏季，擴展至四季、280 個唯一作品、615 筆 OP／ED 及 392 個官方 YouTube 連結；
- **v1.2.0**：加入每首歌曲的結構化來源 ledger，移除公開完整度分數，以 code-native 首頁視覺取代來源未能證實的 raster asset，並補齊架構／資料治理／發佈文件；
- **v1.3.0**：補齊並修正 2025 夏季、2026 冬季／夏季歌曲的發行、credits、重用／變體分類及正版連結，把桌面導覽改為左側分組 sidebar，強化多語歌曲搜尋、公開邊界 gate 與依賴安全，並維持純靜態、0 application binding 的交付方式；
- **v1.4.0**：加入 2025 春季 82 套動畫及其已核對歌曲、來源與官方／正式授權影片，擴展至五季、362 個唯一作品與 768 筆 OP／ED，並把新季度納入既有 sidebar／手機收合導覽；
- **v1.5.0**：加入 2025 冬季 59 套動畫及 136 筆已核對 OP／ED、來源與官方／正式授權影片，擴展至六季、421 個唯一作品與 904 筆 OP／ED，並延續桌面左側 sidebar／手機收合導覽；
- **v1.6.0**：加入 2024 秋季 88 套動畫、160 筆已核對 OP／ED 及 128 筆官方影片 metadata，擴展至七季、509 個唯一作品與 1,064 筆 OP／ED，並把季度 sidebar 按年份分組；
- **v1.7.0**：加入 2024 夏季 68 套動畫、181 筆已核對 OP／ED 及 154 筆官方影片 metadata，擴展至八季、577 個唯一作品與 1,245 筆 OP／ED；
- **v1.8.0**：加入 2024 春季 76 套動畫、158 筆已核對 OP／ED 及 134 筆官方影片 metadata，擴展至九季、653 個唯一作品與 1,403 筆 OP／ED；
- **v1.9.0**：加入 2024 冬季 75 套動畫、130 筆已核對 OP／ED 及 125 筆官方影片 metadata，擴展至十季、728 個唯一作品與 1,533 筆 OP／ED；
- **v1.10.0**：加入 2023 秋季 100 套動畫、200 筆已核對 OP／ED 及 2 筆官方影片 metadata，擴展至十一季、828 個唯一作品與 1,733 筆 OP／ED，並由季度 registry 產生按年份分組的 sidebar／手機選單；
- **v1.11.0**：加入 2023 夏季 75 套動畫、126 筆已核對 OP／ED 及 4 筆官方影片 metadata，擴展至十二季、903 個唯一作品與 1,859 筆 OP／ED，並修正共用 AniList identity 的本篇／第 0 話主題曲選擇；
- **v1.12.0**：加入 2023 春季 79 套動畫、168 筆已核對 OP／ED 及 6 筆官方影片 metadata，擴展至十三季、982 個唯一作品與 2,027 筆 OP／ED，並以第一方用途證據保守處理歌曲索引衝突；
- **v1.13.0**：加入 2023 冬季 72 套動畫、159 筆已核對 OP／ED 及 7 筆官方影片 metadata，擴展至十四季、1,054 個唯一作品與 2,186 筆 OP／ED，並排除單集電影、試播、宣傳短片及跨季重複條目；
- **v1.14.0**：加入 2022 秋季 80 套動畫、197 筆已核對 OP／ED 及 28 筆官方影片 metadata，擴展至十五季、1,134 個唯一作品與 2,383 筆 OP／ED，並保守處理分批公開、輪替片尾及未有可靠歌曲證據的網路短篇；
- **v1.15.0**：加入 2022 夏季 69 套動畫、146 筆已核對 OP／ED 及 28 筆官方影片 metadata，擴展至十六季、1,203 個唯一作品與 2,529 筆 OP／ED，並把官方列作插曲的〈GRAVITY〉排除於 OP／ED 契約；
- **v1.16.0**：加入 2022 春季 79 套動畫、150 筆已核對 OP／ED 及 26 筆官方影片 metadata，擴展至十七季、1,282 個唯一作品與 2,679 筆 OP／ED，並把多首輪替歌曲、官方原文曲名與一般「主題歌」分類保守地納入既有契約；
- **v1.17.0**：加入 2022 冬季 58 套動畫、111 筆已核對 OP／ED 及 26 筆官方影片 metadata，擴展至十八季、1,340 個唯一作品與 2,790 筆 OP／ED，並分離分批發布歌曲、插曲版本、一般「主題歌」與實際 OP／ED 身份；
- **v1.18.0**：加入 2021 秋季 65 套動畫、145 筆已核對 OP／ED 及 28 筆官方影片 metadata，擴展至十九季、1,405 個唯一作品與 2,935 筆 OP／ED，並以第一方用途證據排除插曲、劇中歌與 Victory Dance 的錯誤 OP／ED 映射；
- **v1.19.0**：加入 2021 夏季 46 套動畫、104 筆已核對 OP／ED 及 65 筆官方／正式授權影片 metadata，擴展至二十季、1,451 個唯一作品與 3,039 筆 OP／ED，並按精確官方音樂頁分離一般、輪替及特殊 OP／ED，排除舊季度、插曲與其他節目用途的錯誤映射；
- **v1.20.0**：加入 2021 春季 73 套動畫、131 筆已核對 OP／ED 及 66 筆官方／正式授權影片 metadata，擴展至二十一季、1,524 個唯一作品與 3,170 筆 OP／ED，並以第一方歌曲用途證據排除插曲、劇中歌及配樂的錯誤映射；
- **v1.21.0**：加入 2021 冬季 67 套動畫、166 筆已核對 OP／ED 及 53 筆官方／正式授權影片 metadata，擴展至二十二季、1,591 個唯一作品與 3,336 筆 OP／ED，並保留可證實的地區、輪替及單集版本，同時排除插曲、舊作歌曲重用與季度外首播的錯誤映射；
- **v1.22.0**：加入 2020 秋季 67 套動畫、180 筆已核對 OP／ED 及 62 筆官方／正式授權影片 metadata，擴展至二十三季、1,658 個唯一作品與 3,516 筆 OP／ED，並依第一方用途證據排除插曲、角色歌及非片尾新曲，補回可證實的特殊與季度後半歌曲；
- **v1.23.0**：加入 2020 夏季 31 套動畫、61 筆已核對 OP／ED 及 52 筆官方／正式授權影片 metadata，擴展至二十四季、1,689 個唯一作品與 3,577 筆 OP／ED，並以第一方用途證據排除劇中歌及未證實的 OP／ED 映射，同時明示跨地區先行公開作品的季度依據；
- **v1.24.0**：加入 2020 春季 61 套動畫、208 筆已核對 OP／ED 及 102 筆官方／正式授權影片 metadata，擴展至二十五季、1,750 個唯一作品與 3,785 筆 OP／ED，並以第一方用途證據排除插曲、一般主題歌及非官方影片的錯誤映射；
- **v1.25.0**：加入 2020 冬季 58 套動畫、180 筆已核對 OP／ED 及 43 筆官方／正式授權影片 metadata，擴展至二十六季、1,808 個唯一作品與 3,965 筆 OP／ED，並按第一方用途證據排除插曲、配樂、一般主題歌、Premium-only 及非官方影片；
- **v1.26.0**：加入 2019 秋季 67 套動畫、159 筆已核對 OP／ED 及 62 筆官方／正式授權影片 metadata，擴展至二十七季、1,875 個唯一作品與 4,124 筆 OP／ED，並按第一方用途證據保留季度、輪替及單集版本，排除宣傳內容、舊季度歌曲與非官方影片；
- **v1.26.1**：修補 `fast-uri` 至 3.1.6，加入本機與 CI 依賴安全 gate；
- **v1.27.0 source**：以年代／年份／季度取代全域季度選單，加入歌曲及創作者篩選、12 套作品分頁、跨季度 membership 與有界索引；既有公開 API v1 內容保持相容；
- **v1.28.0 source**：新增 2019 夏季首批 32 套 TV 作品、90 筆 OP／ED 與 4 筆官方試聽影片 metadata；季度頁及 API 明示補充中範圍，歌曲保留演唱版本、純音樂 credits 及已核對序號；發布證據見對應 GitHub Release。
- **v1.29.0 source**：2019 夏季增加 4 套作品、9 筆歌曲及 4 筆官方影片 metadata，並修正《拳願阿修羅 Part 2》的配信／電視播出版區分；補回 2 筆 Netflix 配信版歌曲，既有電視版歌曲與影片改列 OP2／ED2；發布證據見對應 GitHub Release。
- **v1.30.0 source**：2019 夏季增加《CANNON BUSTERS 砲彈剋星》、《聖鬥士星矢：黃道十二宮戰士》及《HERO MASK 英雄面具 PartII》，共 3 套 WEB 作品、3 筆歌曲及 2 筆官方影片 metadata；保留英文演唱版本、英詞 credits 及歌曲待補充狀態；發布證據見對應 GitHub Release。
- **v1.31.0 source**：2019 夏季增加 3 套 TV 作品、1 筆片尾曲及 1 筆官方影片 metadata；分清新作短篇、特別篇與節目內播出時段；沒有可靠繁中來源或歌曲 credits 時不補值；發布證據見對應 GitHub Release。
- **v1.31.1 source**：修正歌曲頁隱藏與藝人欄不同的演唱 credits；個別演唱者、角色與合成歌聲可由既有來源資料顯示，歌曲、來源日期及 API 內容不變；發布證據見對應 GitHub Release。
- **v1.32.0 source**：加入 2019 春季首批 4 套 TV 作品、9 筆 OP／ED 及 3 筆官方影片 metadata；保留單集片尾、角色演唱與共同編曲，按正篇首播區分特番及先行上映；本季與夏季仍在補充，發布證據見對應 GitHub Release。
- **v1.32.1 source**：季度頁省略空白星期分組，篩選時同步更新可見分組、跳轉連結與零結果狀態；支援無 JavaScript 原生導覽，歌曲、來源日期及 API 資料不變；發布證據見對應 GitHub Release。
- **v1.33.0 source**：2019 春季增加 4 套校園題材 TV 作品、9 筆 OP／ED 與 3 筆官方影片 metadata；保留第 6 話片尾、Study 第一季三人演唱、先行配信日期及第二季既有網址；本季共 8 套作品與 18 筆歌曲，發布證據見對應 GitHub Release。
- **v1.34.0 source**：2019 春季增加 3 套 TV 作品、6 筆 OP／ED 與 6 筆官方影片 metadata；保留單集 ED 畫面差異、SPR5 五位演唱者與 TV Size／完整版發行分界，未確認歌曲用途及有衝突的署名不補值；本季共 11 套作品與 24 筆歌曲，發布證據見對應 GitHub Release。
- **v1.34.1 source**：影片載入前顯示已審閱標題，保留短版、角色演唱及剪輯版本名稱；長標題可完整換行，播放器載入後仍可見，既有歌曲、來源日期與 API 內容不變；發布證據見對應 GitHub Release。
- **v1.35.0 source**：2019 春季增加 3 套 TV 作品、6 筆 OP／ED 與 6 筆官方影片 metadata；保留深夜編輯播出日、共同作詞者與 TV edit，區分《Fairy gone》春、秋兩部分，未核對個別署名不由團體成員名單推論；本季共 14 套作品與 30 筆歌曲，發布證據見對應 GitHub Release。
- **v1.35.1 source**：來源較多的歌曲卡片改用下方分欄，保留少量來源的緊湊桌面排列、完整連結及手機原生閱讀；歌曲、來源日期與 API 內容不變，發布證據見對應 GitHub Release。
- **v1.36.0 source**：2019 春季增加《凱洛與塔斯黛》、《RobiHachi》與《戀愛幕末男友外傳 危機》，共 3 套 TV 作品、8 筆 OP／ED 與 1 筆官方試聽影片 metadata；保留前後半歌曲、歌唱者與配音員區別、單曲演唱版本及官方曲名讀音，本季共 17 套作品與 38 筆歌曲；發布證據見對應 GitHub Release。
- **v1.37.0 source**：2019 春季增加《魔法水果籃》、《一弦定音！》與《MIX》，共 3 套 TV 作品、10 筆 OP／ED 與 6 筆官方影片 metadata；保留第一季前後半歌曲、數位與 CD 日期、共同作曲與編曲及 Written by 署名，官方短片與完整 MV 分開，本季共 20 套作品與 48 筆歌曲；發布證據見對應 GitHub Release。
- **v1.37.1 source**：歌曲卡片按職務合併共同署名的標籤，完整保留姓名與一人多職；顯示既有發行日期及版本說明，沒有日期時不增加空白欄位，並修正側欄寬度下的長動畫名稱溢出；目錄、搜尋與 API 資料不變；發布證據見對應 GitHub Release。
- **v1.38.0 source**：2019 春季增加《進擊的巨人》第三季後半、《異世界四重奏》與《南無阿彌陀佛!-蓮台 UTENA-》，共 3 套 TV 作品（含電視短篇）、7 筆 OP／ED 與 3 筆官方影片 metadata；保留角色合唱、獨立單集片尾、完整串流及 TV Size 日期，春季共 23 套作品與 55 筆歌曲；發布證據見對應 GitHub Release。
- **v1.39.0 source**：2019 春季增加《八月的棒球甜心》、《超可動女孩 1/6》與《八十龜醬觀察日記》，共 3 套 TV 作品（含電視短篇）、4 筆 OP／ED 與 2 筆官方影片 metadata；保留四人翻唱署名、數位先行發行日與歌曲待補充狀態，春季共 26 套作品與 59 筆歌曲；發布證據見對應 GitHub Release。
- **v1.39.1 source**：歌曲卡片合併與藝人欄完全一致的完整合唱名單；保留個別演唱者、非演唱職務、來源、搜尋與全部 API 資料，並支援無 JavaScript 閱讀；發布證據見對應 GitHub Release。
- **v1.40.0 source**：2019 春季增加《YU-NO 在這世界盡頭詠唱愛的少女》TV 版，新增 4 筆 OP／ED 與 2 筆官方短版 MV metadata；前後篇演唱者、完整製作署名與不同發行版本分開核對，春季共 27 套作品與 63 筆歌曲；發布證據見對應 GitHub Release。
- **v1.40.1 source**：補上《Fairy gone》春季 OP／ED 的個別演唱者、作曲、編曲及 ED 作詞，保留團體名義、發行日期與影片版本；逐曲署名可由創作者搜尋找到，來源包括創作者官方、播出機構及藝人訪談，既有其他作品與歌曲不變；發布證據見對應 GitHub Release。
- **v1.40.2 source**：較長的歌曲來源清單改為原生展開區，持續顯示來源數量、審閱狀態與日期；較少來源仍直接顯示，支援獨立展開、鍵盤與無 JavaScript 操作，歌曲、來源及 API 資料不變；發布證據見對應 GitHub Release。
- **v1.41.0 source**：2019 春季增加《鑽石王牌 act2》2019 年 TV 版、6 筆 OP／ED 與 6 筆官方影片 metadata；保留原始演唱者、CD 與 TV Size 日期、共同編曲及官方音源版本，春季共 28 套作品與 69 筆歌曲；發布證據見對應 GitHub Release。
- **v1.41.1 source**：作品頁、季度卡片、搜尋結果、連結標籤及結構化資料省略完全相同的名稱；保留所有不同寫法與原始搜尋／API 資料，支援無 JavaScript 閱讀；發布證據見對應 GitHub Release。
- **v1.42.0 source**：2019 春季增加《THE ORIGIN 前夜 赤い彗星》13 話電視重編版、7 筆 OP／ED 與 8 筆官方影片 metadata；保留翻唱名義、共同作詞與新編曲、數位／CD 發行日期及第 12 話片尾畫面版本，春季共 29 套作品與 76 筆歌曲；發布證據見對應 GitHub Release。
- **v1.42.1 source**：無圖作品在平板維持全寬，手機資料標籤不拆行、內容對齊；直向資料列及外部連結省略桌面分隔線，保持來源資料、搜尋與 API 不變；發布證據見對應 GitHub Release。
- **v1.43.0 source**：registry 支援具來源證據的本站識別碼，季度、歌曲來源及影片共用穩定關聯；未核對的外部 ID 與別名保持空缺，既有作品、搜尋與 API 不變；發布證據見對應 GitHub Release。
- **v1.44.0 source**：2019 春季增加《毛球權次郎》TV 版、2 筆 OP／ED 與 1 筆正式授權片尾影片 metadata；使用具來源證據的本站識別碼，保留動畫短版、CD 完整版日期與共同作曲，春季共 30 套作品與 78 筆歌曲；發布證據見對應 GitHub Release。
- **v1.44.1 source**：縮短作品頁資料、來源連結與歌曲分區間距，保留海報尺寸、文字層級及全部連結；目錄、搜尋與 API 不變，發布證據見對應 GitHub Release。
- **v1.45.0 source**：歌曲署名直接開啟本機創作者文字搜尋，保留完整名稱及既有字數上限；入口條件使用不會送出的網址片段，手動編輯時清除，資料、API 與全域導覽數量不變；發布證據見對應 GitHub Release。
- 正式網站使用 custom domain；非正式 Cloudflare hostname 不在公開文檔記錄；
- 私有 backend、資料庫、crawler、帳戶設定、憑證與內部規則不屬於本公開 repository。

未配置的 Lighthouse／Core Web Vitals 稽核不會被標示為已通過，也不會虛構分數。

## Current acceptance summary

- 預設 build 使用 repository-reviewed `CuratedProvider`；`MockProvider` 只供測試與 UI fixture；
- `/api/v1/*.json` 由同一份 reviewed snapshot 在 build-time 產生，不加入 runtime backend、資料庫或 credential；
- `PUBLIC_API_BASE_URL` 存在時切換至經契約限制的唯讀 `ApiProvider`；
- 二十九個季度快照均可瀏覽（2019 春、夏季仍在補充），list／detail／static API identity 保持一致；
- 日文名稱為主、繁中為輔；
- 每筆歌曲通過第一方及交叉核對來源 gate，未審閱候選不發布；
- 公開資料不包含完整度百分比、confidence score 或內部選源規則；
- 深夜 `25:30` 保持在編輯播出日而不移到次日；
- Responsive、鍵盤 Focus、Poster Alt、Reduced Motion；
- `npm run lint`、`npm test`、`npm run build`、`npm run test:e2e` 通過；
- YouTube iframe 只在使用者按下後建立，並使用 privacy-enhanced domain；
- 同頁不同播放器擁有獨立載入狀態；
- 首頁、季度頁與動畫頁提供 canonical；動畫頁提供 `TVSeries` JSON-LD；
- Preview／本機的 API build-time failure 產生公開錯誤狀態，不暴露 upstream detail；
- Production 可用 `ANISONARY_REQUIRE_API_DATA=true` fail closed，避免殘缺靜態網站被發布；
- 首頁主視覺只用 HTML／CSS；舊首頁與 Mock raster assets 不再留在 repository 或 production build；
- 不包含 secret、真實 DB dump 或 private crawler code。
- 離線功能只保存 build 已公開的同源靜態內容，不保存搜尋輸入、query string、私人 API response 或第三方媒體。

架構與信任邊界見 `docs/ARCHITECTURE.md`；資料來源治理見 `docs/DATA_PROVENANCE.md`；GitHub／Cloudflare 接入與驗收見 `docs/DEPLOYMENT_CLOUDFLARE.md`；public static API contract 見 `docs/API_HANDOFF.md`。

Public API 的 live contract 與 fail-closed build 命令見 `docs/API_PRODUCTION_CHECK.md`。任何版本的 production 驗收都必須由已合併 `main` 的實際 assets 通過後才記錄完成。
