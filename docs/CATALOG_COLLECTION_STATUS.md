# 歌曲收集進度 / Collection Checkpoint

此文件保存可公開的執行位置與已完成成果。計畫及步驟見 [`SONG_COLLECTION_WORKFLOW.md`](./SONG_COLLECTION_WORKFLOW.md)；每批更新同一文件。未審核候選、原始 response、token、私人路徑、內部評分與對話內容不寫入此處。

## 長期目標與本次任務

目標啟動日期：2026-10-14。下方基線保留 2026-10-09 的歷史本機記錄；本次差異另記，不代表 production 狀態。

| 項目 | 目前狀態 |
| --- | --- |
| 長期目標 | 收集近二十年的動畫歌曲、創作團隊、音源版本、來源、官方影片、收錄發行品與正版平台資訊 |
| 固定範圍 | 2007–2026；非成人 TV／WEB 的 OP／ED；公開資料截止日 2026-10-14。長期目標未完成 |
| 本次資料任務 | 2020–2026 創作名單與官方 YouTube 深化；由最新已收錄季度往舊季度，沿用已接通格式及有效來源 |
| 完成條件 | 本範圍的既有 OP／ED 用途逐批補有第一方證據的作詞、作曲、編曲、演唱／團隊及官方影片；經公開 JSON、動畫頁與必要檢查驗證；兩輪查找仍未明的欄位保留缺口與續查條件 |
| 執行狀態 | 整體執行中；第 08–12 批已分類提交、合併及正式部署驗收；第十三批執行中。每批沿用資料、驗證及發布流程，收到暫停或停止要求立即保存位置。2020–2026 深化及 2007–2026 長期目標均未完成 |
| 接續位置 | 第十三批由春季 `curated-199588` 至 `curated-185211`，9 部／27 筆既有 OP／ED；起點 `otaku-ni-yasashii-gal-wa-inai-op-1`。途中 Re:ゼロ 第四季的 3 筆用途已在第八批處理，直接沿用。優先補創作、官方影片、版本與收錄，核對同名與 MV 標示的實際關係。固定截止日仍為 2026-10-14，已完成批次實際核對日期為 2026-10-15 |
| 發布提交 | 前次 [PR #99](https://github.com/kyeunga25/anisonary/pull/99) 已正常 rebase 合併，保留 9 個階段提交；前次部署來源 `f2fb293`。第 08–12 批已由 [PR #101](https://github.com/kyeunga25/anisonary/pull/101) 正常 rebase 合併，正式部署來源 `81a0d53`，已完成下方正式驗收 |
| 開始／停止 | 明確要求執行或繼續才開始；暫停／停止保存位置後等待指令；取消保留成果並記錄取消狀態 |

執行狀態使用「未開始／執行中／已暫停／已完成／已取消」；無法繼續時另記具體阻礙及仍未完成部分，不自動標記完成。長期目標與本次工作量分開，未指定本次工作量時先完成下一批。

## 基線

記錄日期：2026-10-09。以下來自本機 repository 建置產物，不是 production 或 live 平台驗收。

- 目前 28 個季度快照、1,917 個唯一動畫頁、4,229 筆 OP／ED 用途；用途筆數不等於去重後的歌曲／錄音數。
- 已收錄最新季度：2026 夏季。2026 秋季、2025 秋季尚未在 registry；2019 夏季仍屬部分收錄。
- 共用歌單與動畫全部主題曲頁已可用；每歌可有多個官方影片、credits、平台連結及來源。
- 本機產物中 282 筆用途有非演唱角色 credits、239 筆有單一發行日期、61 筆有版本標籤；這些是欄位存在數，不代表完整度。
- 目前 1,756 筆影片 metadata、164 筆用途有多個影片；沒有結構化音源版本／發行品關係。
- 新格式、獨立來源日期 authoring 及新欄位展示尚未實作；此輪僅建立計畫、workflow 與交接入口，沒有新增歌曲資料。

## 下一輪位置

目前優先順序已調整為 **2020–2026 創作名單及官方 YouTube**。本輪以已收錄用途深化為主，同作品的新公告用途經核心核對後一併補入；不重做季度全集盤點。2026 秋、2025 秋的核心漏季仍保留，待此項優先工作之後接續。固定截止日仍為 2026-10-14。啟動盤點的本機唯一用途為 3,965 筆；跨年作品在各年統計可能重複，不能相加。此數量是範圍基線，不代表欄位完成。第二批補入 3 筆、第六批補入 4 筆新用途後，當時範圍為 3,972 筆；第八批再補 5 筆後為 3,977 筆。第十批再補 2 筆後期用途後為 3,979 筆；第十一批補 3 筆後為 3,982 筆。最新全目錄為 28 季、1,917 動畫頁、4,246 筆用途；用途類型沿用第十一批；第十二批只深化既有用途，最新差異見第十二批。

| 優先 | 工作 | 狀態與接點 |
| --- | --- | --- |
| 1 | 一次性最小格式與真實試行 | 2026-10-14 已完成，見下方 2026-summer-schema-pilot；後續直接沿用格式，不重新設計或搬移全量資料 |
| 2 | 當前深化接點 | 第十二批已完成春季 `curated-206914` 至 `curated-206951` 的有界深化；下批由 `curated-199588` 起接續，見頂部與第十二批記錄。2020–2026 credits／YouTube 優先工作持續，沿用有效名單與影片 |
| 3 | 較新季度未公布後續及核心漏季 | 深化按 2026 夏 → 春 → 冬接續；2026 秋 registry 仍未收錄，保留有界核心盤點接點。只處理新證據、到期項目與未補欄位 |
| 4 | 中間漏季及歷史深化 | 2025 秋，再按秋／夏／春／冬倒序處理其餘年份；2019 夏的已有缺口於到達該季時接續 |
| 5 | 延伸更早歷史 | 2019 春／冬與更舊季度，沿用同一有界流程 |

若當前有新的已公布歌曲或明確資料錯誤，先做其最小修正，不因前置格式工作暫停現行可支援的核心資料更新。

## 2026-10-14 批次：2026-summer-schema-pilot

完成層次：一次性格式接通及 4 首既有歌曲深化。新欄位經季度 seed、builder、`ApiProvider`、static JSON、本機搜尋及動畫頁展示；舊資料省略新欄位仍可解析。下列結果均為本機證據。

| 公開 theme ID | 歌曲與用途 | 已補齊 |
| --- | --- | --- |
| `tenkousaki-no-seiso-karen-na-bishoujo-ga-mukashi-danshi-to-omotte-issho-ni-asonda-osananaj-op-1` | 夏に重ねて／DIALOGUE＋／OP1 | 作詞、作曲、編曲；演唱版、TV Size、Instrumental；2 個 Single 發行版及曲序；官方配信入口 |
| `tenkousaki-no-seiso-karen-na-bishoujo-ga-mukashi-danshi-to-omotte-issho-ni-asonda-osananaj-ed-1` | Tilt／harmoe／ED1 | 作詞、作曲、編曲；2 位團隊成員；演唱版與 Instrumental；3 個 CD Album 發行版與配信版；Apple Music／mora 確切專輯入口 |
| `mahou-shoujo-lyrical-nanoha-exceeds-gun-blaze-vengeance-op-1` | CRIMSON BULLET／水樹奈々／OP1 | 作詞、作曲、編曲；Single 收錄；官方 MV 及 creditless OP；官方配信入口 |
| `mahou-shoujo-lyrical-nanoha-exceeds-gun-blaze-vengeance-ed-1` | Ephemeral／青木陽菜／ED1 | 作詞、作曲、編曲；3 個 Mini Album CD 發行版與 Qobuz 配信版；官方 MV 及 creditless ED；確切 Qobuz Album 入口 |

- 已處理 anime ID：`curated-169583`、`curated-185875`。既有 theme ID、動畫 slug、用途序號、歌曲核心欄位及舊 URL 保留。
- 實際差異：新增動畫 0、新增主題曲用途 0；深化既有用途 4，登記歌曲 ID 4。新增 12 筆作詞／作曲／編曲角色、2 筆團隊成員身分、7 個音源項目（4 演唱版、1 TV Size、2 Instrumental）、4 種發行標題的 11 個發行版（9 CD、2 配信）、4 支影片（2 MV、1 creditless OP、1 creditless ED）、10 個平台／官方入口及 44 組欄位證據。上述類別各自計數，不能加總為歌曲數。
- 本機總量仍為 28 季、1,917 動畫頁、4,229 OP／ED 用途；只有 4 首具備新歌曲／音源／發行品關係，不表示其餘資料已搬移或齊備。
- 歌曲來源沿用的 2026-07-25 日期保留；實際本次查閱的 MUSIC、商品、公告及補充平台來源保存 2026-10-14。兩部作品的 metadata 與圖像／識別／播出來源日期維持 2026-07-25，未因歌曲深化而更新。
- 動畫頁顯示創作／團隊名單、音源、收錄版、曲序、平台與可展開欄位證據；來源旁顯示各自日期。歌單維持每用途一列；版本、發行品標題及品番可在本機搜尋，不將 URL 或來源 ledger 放入搜尋索引。

### 未解可選缺口與續查條件

| 範圍 | 未解欄位 | 續查條件 |
| --- | --- | --- |
| 4 首歌曲 | 僅「夏に重ねて(TV Size Ver.)」有明確 TV 分類；其餘音源長度分類保持 `unknown`，沒有從 MV 或 creditless 推定 full／TV；未核對 ISRC、重錄與重新編曲 | 官方版本名、曲目表或具體錄音識別資料公布 |
| 夏に重ねて／Tilt | 官方 MV 的確切 ID／渠道關係及 Art Track 等形式未完整核對；保留舊影片外連，不猜造新 metadata | 官網提供明確影片外連或來源恢復後定向核對；本批已作兩輪定向查找，無觸發不重搜 |
| Tilt | きゃにめ盤 Instrumental 的 disc／track 位置未證實，留空；配信版與 CD 的錄音同一性及配信公司未證實 | きゃにめ完整曲目表或可核對的識別資料出現 |
| 2 個配信版 | 只確認發行品與收錄關係，沒有證明與 CD 使用同一音源，因此曲目不填 `recordingId` | 唱片／平台明示版本或提供可比對識別資料 |
| 官方／正版平台 | Apple Music、mora 目的頁未成功讀取，入口依藝人官方配信公告保存；所有新增入口的地區播放／購買可用性均為 `unknown`，未聲稱 HK／TW 可用 | 目的頁恢復或有地區可用性核對任務時再查 |
| 4 支新影片 | 官方身分及形式有證據，嵌入可用性未實測；`embeddable: false`、`embedAvailability: unknown`，提供正確外連；不與音源自動合併 | 影片嵌入核對或平台狀態改變；沒有採用 YouTube API metadata，未建立 API 原始資料庫 |
| 4 首歌曲 | 其他藝人 Album、OST、合輯或角色／live／remix 收錄未證實，沒有補造關係 | 官方曲目表／新發行公告出現 |

### 本機檢查與展示證據

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個核心測試通過；包含全目錄 JSON round-trip、關係／來源引用、日期精度及保留 metadata 日期 |
| `npm run build` | 通過；Astro 0 errors／warnings／hints，1,961 HTML 頁，CSP、Service Worker 及 3,918 公開產物檢查通過 |
| `npm run test:e2e` | 6 條通過；靜態 API、歌單／詳情、搜尋／分頁、鍵盤／無 JS／404、離線及 API 錯誤流程；已擴充專輯搜尋、版本／發行品、欄位證據及新影片外連 |
| 手機／桌面實際預覽 | Chromium，390×844 與 1536×1024；專輯搜尋 → Tilt → 音源／發行品錨點 → 欄位證據展開；無橫向溢出、空白頁、框架錯誤覆蓋層或 app console errors；未主動連線 YouTube |
| 文件連結、`git diff --check`、`npm run public:check` | 通過；來源及 checkpoint 使用現有文件連結 |

Browser plugin 不在本次可用清單，使用現有 Playwright。首次 Chromium 啟動受本機沙箱 Mach port 權限阻擋，獲准後同一組流程通過；未修改正常程式或降低 gate。圖片請求在瀏覽器測試攔截，第三方平台播放／區域可用性不計入本機 UI 通過結果。建置中新增影片 DOM 錨點曾與 secret 字串模式碰撞，已改為影片專用錨點，公開 gate 保留。

預覽入口：`/seasons/2026-summer/`、`/songs/`、`/search/`，以及上述兩個既有動畫 slug 的 `/anime/{slug}/` 與 `#theme-{themeId}`。Search 可使用 `twice upon a time`、`BLAZE`、`TV Size`、`Instrumental` 或品番；主題曲、版本與發行品不增加歌單列數。

補季接點：固定 2007–2026 及 2026-10-14 截止日；2026 秋季仍需以中文季度清單作有界盤點，再按第一方音樂公告核對未收錄的非成人 TV／WEB OP／ED。此季度目前沒有公開 seed，不能把未審核候選寫入 checkpoint。此補季工作保留，現在先接續下方 2020–2026 創作名單與官方 YouTube 深化。

本批未提交、推送或部署；CI／preview deployment／production 未驗收。既有依賴稽核限制仍沿用下方歷史記錄，本批未改依賴或執行完整 `npm run check`。

## 2026-10-14 批次：2026-summer-credits-youtube-01

完成層次：2020–2026 深化的第一批，由最新已收錄的 2026 夏季開始。處理 11 部既有作品、21 筆 OP／ED 用途；21 筆均補入第一方證據支持的作詞、作曲及編曲。官方 YouTube 按已證實的形式與入口保存，其餘缺口保留；本批完成不代表 2020–2026 範圍已完成。

| 公開 theme ID | 曲名／用途 |
| --- | --- |
| `heroine-seijo-iie-all-works-maid-desu-ko-op-1` | マデュアル↔ハート／OP1 |
| `heroine-seijo-iie-all-works-maid-desu-ko-ed-1` | ハンドメイド／ED1 |
| `rakudai-kenja-no-gakuin-musou-nidome-no-tensei-s-rank-cheat-majutsushi-bouken-roku-op-1` | ＋ENCOUNT／OP1 |
| `rakudai-kenja-no-gakuin-musou-nidome-no-tensei-s-rank-cheat-majutsushi-bouken-roku-ed-1` | 憧憬／ED1 |
| `lv999-no-murabito-op-1` | Not a Hero／OP1 |
| `lv999-no-murabito-ed-1` | HP／ED1 |
| `hanazakari-no-kimitachi-e-2nd-season-op-1` | FLASHBULB／OP1 |
| `hanazakari-no-kimitachi-e-2nd-season-ed-1` | 花束／ED1 |
| `reiwa-no-dara-san-op-1` | ダラダラ♡ダンシング／OP1 |
| `reiwa-no-dara-san-ed-1` | ひなたぼっこ／ED1 |
| `bungou-stray-dogs-wan-2-ed-1` | 僕ら～芥川龍之介Ver.～／ED1 |
| `world-is-dancing-op-1` | 終宵／OP1 |
| `world-is-dancing-ed-1` | 名もない花／ED1 |
| `bang-dream-yume-mita-op-1` | これはぼくたちの生存のあらすじ／OP1 |
| `bang-dream-yume-mita-ed-1` | うちゅうのふしぎ／ED1 |
| `tsuihou-sareta-tensei-juukishi-wa-game-chishiki-de-musou-suru-op-1` | Awake／OP1 |
| `tsuihou-sareta-tensei-juukishi-wa-game-chishiki-de-musou-suru-ed-1` | Lv.1職業：人間／ED1 |
| `yani-neko-op-1` | なんもねえ／OP1 |
| `yani-neko-ed-1` | 煙とブルー／ED1 |
| `otome-kaijuu-caramelise-op-1` | 乙女怪獣／OP1 |
| `otome-kaijuu-caramelise-ed-1` | オトメノホンキ／ED1 |

已處理 anime ID：`curated-192800`、`curated-208044`、`curated-197715`、`curated-209669`、`curated-203880`、`curated-201667`、`curated-206521`、`curated-198376`、`curated-180136`、`curated-207141`、`curated-204466`。

### 實際差異

- 新增動畫 0、主題曲用途 0；深化既有用途 21，為其登記 21 個穩定歌曲 ID。沒有把影片或角色演唱版計為新增歌曲；本批未新增音源或發行品關係。
- 新增 72 筆作詞／作曲／編曲角色、25 筆團隊成員關係；3 筆合併演唱列拆為 8 筆個別演唱資料，另補 YOSUKE 的本曲演唱角色。credits 條目淨增 103，條目數不等於人數。團隊成員不自動標示為本曲演唱者。
- 核對 20 個官方影片入口的形式或用途：新增 10 個確切 YouTube URL（8 MV、1 Lyric Video、1 Live），更新 10 個既有入口的名稱與獨立核對日期。另新增 4 組影片 metadata（2 MV、1 creditless OP、1 ED 映像）；這 4 組屬上述影片，不另加算成 4 首歌或 4 個新影片。
- 新增 34 筆用途來源條目及 47 組欄位證據；同一官方頁可支持多首歌、多人與多欄位，來源條目數不等於查閱頁數。僅實際查閱的歌曲來源保存 2026-10-14；未重核的舊來源與 11 部作品 metadata 日期保留。
- `bang-dream-yume-mita-ed-1` 的原名依動畫官網修正為「うちゅうのふしぎ」，原有羅馬字保存於 `titleRomaji`；演唱名義保存官方原文「夢限大みゅーたいぷ」。既有 theme ID、slug、序號與舊 YouTube URL 均維持。
- 動畫頁的正版平台按鈕現在顯示各入口名稱與形式，讀者可分辨 MV、無字幕映像、Lyric Video 與 Live。首頁、全部歌曲及季度的歌單列數維持不變；創作者可在本機搜尋。

### 未解缺口與續查條件

| 範圍 | 保留缺口 | 續查條件 |
| --- | --- | --- |
| 21 筆用途 | credits 的基礎三角色已補齊；未證實的別名等同關係、個別演奏／背景演唱、角色與其他演唱團隊仍留空 | 唱片公司曲目 credits 或藝人明確本曲名單公布；不由團隊成員推定演唱 |
| 官方影片 | 許多目的頁目前無法讀取，只有 4 組取得足夠渠道資訊可保存 metadata；其他已確認入口以有形式名稱的外連提供，頻道名稱不猜造 | YouTube 頁面恢復，或官方公告直接提供頻道與影片關係；本批無新證據的缺口不在下一批整批重搜 |
| 落第賢者、LV999 OP、文豪わん！2、乙女怪獣等 | 保留既有官方外連；部分 creditless、MV、Art Track、lyric／live 的確切入口或渠道關係未齊 | 動畫／唱片／藝人新影片公告或明確外連出現；已查看的 MUSIC／MOVIE 頁不作全集重核 |
| 4 組新 metadata | `embeddable: false`、`embedAvailability: unknown`；沒有實測嵌入。其餘 YouTube 外連的地區播放可用性也保持 `unknown` | 有明確嵌入或地區核對任務，或平台狀態改變；本輪未使用 YouTube API、未建立 API 原始資料庫 |
| 全批影片 | MV 不推定 full，OP／ED 映像不推定 TV 或新錄音；Art Track 的發行品與音源對應未確認 | 官方版本名、曲目識別或可比較的錄音證據公布 |
| 新查閱的商品頁 | 本輪優先補 credits／YouTube，尚未把所有 Single／Album 曲目、收錄及錄音等同關係接入全部歌曲 | 後續發行品深化批次，重用本次已確認的官方頁與證據，僅查剩餘欄位 |

### 本機檢查與預覽

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個測試通過；包含全目錄公開契約 round-trip。首次檢查指出新增 evidence 缺少歌曲 ID，已補資料及引用，沒有修改 parser 或降低 gate |
| `npm run build` | 通過；Astro 0 errors／warnings／hints，1,961 HTML 頁、CSP、Service Worker 與 3,918 公開產物通過 |
| `npm run test:e2e` | 6 條通過；沿用核心流程，加入多個官方影片按鈕能顯示各自名稱的契約斷言 |
| 實際頁面核對 | 11 部作品、21 筆用途的新增 credits／命名外連均顯示；全部既有主題曲仍在同一動畫頁。創作者搜尋「草野華余子」→「Not a Hero」→展開欄位證據通過 |
| 手機／桌面預覽 | Chromium，390×844、1536×1024；角色演唱／創作名單與 MV／Live 入口可讀，無橫向溢出、空白頁、錯誤覆蓋層或 app console errors；沒有主動連線 YouTube。圖片請求攔截，第三方播放不計入本機通過結果 |
| 文件／公開邊界 | 文件連結及 `git diff --check` 通過；`npm run public:check` 通過（239 個 repository 檔案） |

Browser plugin 不在本次可用清單，沿用 Playwright；E2E 及截圖所需 Chromium 啟動權限已獲准。實際預覽腳本依桌面版可見的篩選控制操作，未修改正常產品行為。沒有重新稽核舊連結、依賴或 Cloudflare 發布環境。

預覽入口：`/seasons/2026-summer/`、`/search/`、`/anime/reiwa-no-dara-san/`、`/anime/tsuihou-sareta-tensei-juukishi-wa-game-chishiki-de-musou-suru/`。歌曲原名、作詞／作曲／編曲及團隊名字可搜尋；點選進入原動畫頁。

首批收尾時的接點為 **2026-summer-credits-youtube-02**，現已執行，成果見下方。當時最前接點是 `chikyuu-daisuki-kikkun-ed-1`（`curated-213426`）；其後依 seed 次序接 `curated-188525`、`curated-203490`、`curated-209983`、`curated-207674`、`curated-178789`、`curated-185542`、`curated-186863`、`curated-187538`、`curated-206249`，約 10 部作品／20 筆既有用途。已具有效 credits 與官方影片且沒有新證據的項目直接沿用；本批及格式試行的可選缺口只按續查條件插入。2026 夏完成首輪後續春、冬，再按 2025→2020 倒序；2026 秋與 2025 秋的核心漏季保持登記，未宣稱已收錄。

本批只完成本機資料、必要展示修正及驗證；未提交、推送或部署。2020–2026 的其他批次尚未完成，2007–2026 長期目標亦未完成。

## 2026-10-14 批次：2026-summer-credits-youtube-02

完成層次：10 部既有作品、20 筆既有用途深化，另補入同批 3 筆已公布用途，共 23 筆用途／22 個已登記歌曲 ID。15 筆已有作詞、作曲及編曲：14 筆有第一方創作證據，「一縷」的三角色依正版 Qobuz 製作者名單作交叉補充；其動畫用途與演唱者另有動畫官網及官方配信入口。其他欄位留明確缺口，本批完成不代表 2020–2026 已齊備。

| 公開 theme ID | 曲名／用途 | 處理 |
| --- | --- | --- |
| `chikyuu-daisuki-kikkun-ed-1` | 防衛ライン（だいたい平和です）／ED1 | 既有用途 |
| `kore-kaite-shine-op-1` | 遺書／OP1 | 既有用途 |
| `kore-kaite-shine-ed-1` | コニファー／ED1 | 既有用途 |
| `uchi-no-otouto-domo-ga-sumimasen-op-1` | アイコトバ／OP1 | 既有用途 |
| `uchi-no-otouto-domo-ga-sumimasen-ed-1` | Clover／ED1 | 既有用途 |
| `hell-mode-yarikomi-zuki-no-gamer-wa-haisettei-no-isekai-de-musou-suru-2nd-season-op-1` | ○✕△□／OP1 | 既有用途 |
| `hell-mode-yarikomi-zuki-no-gamer-wa-haisettei-no-isekai-de-musou-suru-2nd-season-ed-1` | Firetail／ED1 | 既有用途 |
| `ushiro-no-shoumen-kamui-san-op-1` | 成仏Come true／OP1 | 既有用途 |
| `ushiro-no-shoumen-kamui-san-ed-1` | SAY-BYE!!／ED1 | 既有用途 |
| `mushoku-tensei-3-op-1` | 決意の唄／OP1 | 既有用途 |
| `mushoku-tensei-3-op-2` | 芽吹の唄／OP2 | 既有用途 |
| `mushoku-tensei-3-ed-1` | 祈り、終われば／ED1 | 既有用途 |
| `gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-ii-op-1` | 浪漫街道、お散歩中／OP1 | 既有用途 |
| `gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-ii-ed-1` | 奇跡は起きない／ED1 | 既有用途 |
| `neko-to-ryuu-op-1` | 猫日／OP1 | 既有用途 |
| `neko-to-ryuu-ed-1` | ただいまの場所／ED1 | 既有用途 |
| `black-torch-op-1` | FREEZE ME UP／OP1 | 既有用途 |
| `black-torch-ed-1` | Groooovy／ED1 | 既有用途 |
| `iwamoto-senpai-no-suisen-op-1` | BUDDING／OP1 | 既有用途 |
| `iwamoto-senpai-no-suisen-ed-1` | ココニイル／ED1 | 既有用途 |
| `mushoku-tensei-3-op-3` | 光の唄／OP3 | 新增用途 |
| `mushoku-tensei-3-ed-2` | 一縷／ED2 | 新增用途 |
| `gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-ii-ed-2` | 奇跡は起きない／ED2 | 新增用途 |

已處理 anime ID：`curated-213426`、`curated-188525`、`curated-203490`、`curated-209983`、`curated-207674`、`curated-178789`、`curated-185542`、`curated-186863`、`curated-187538`、`curated-206249`。

### 實際差異

- 新增動畫 0、新增季度 0；深化既有用途 20，新增用途 3。「光の唄」為 OP3、「一縷」為第 13 話 ED2；骸骨騎士 ED2 為第 11 話 PelleK 歌唱的「奇跡は起きない」。後者與 DIALOGUE＋原演唱共用歌曲 ID，各有獨立錄音 ID，不另算新歌曲。本批登記 22 個歌曲 ID，其中 20 個對應既有歌曲，2 個為新補歌曲。
- 新增 55 筆作詞／作曲／編曲角色（52 筆第一方、3 筆正版平台補充）、17 筆團隊成員關係、4 筆既有歌的個別演唱／民族コーラス資料及 3 筆新用途的演唱資料；credits 條目淨增 79，不等於人數。SiM、DISH//、リーガルリリー、浪漫派マシュマロ與 WOLF HOWL HARMONY 的成員不由此推定全部演唱本曲。
- 新增 12 個確切 YouTube URL：7 MV、2 Art Track、1 無字幕 OP、1 特別 ED 音源使用映像、1 使用歌曲的 PV；另重用並命名 6 個已存在的無字幕 OP／ED 入口。新增 2 組 Art Track metadata，屬上述入口，不另加算影片。頻道資訊不足的影片以命名外連提供。
- 新增 3 個音源項目：官方明示的「芽吹の唄」full 配信，以及 DIALOGUE＋／PelleK 各自的「奇跡は起きない」演唱版；兩個演唱版的長度分類均為 `unknown`。沒有從 MV、PV、Art Track 或無字幕映像推定 full／TV。「猫日」使用 PV 僅標 PV，不計入上方 7 個 MV。
- 新增 1 個 Qobuz JP 確切正版商品入口；本批沒有新增結構化發行品。Album／Single／OST 的完整收錄關係與錄音同一性仍待後續深化。
- 用途來源條目淨增 40，新增 54 組欄位證據。只更新實際查閱的歌曲來源日期；10 部作品 metadata 及未重核來源保持原日期。原 theme ID、動畫 slug、用途序號與既有 YouTube URL 均保留；非本批 seed 物件經差異核對無變更。
- 骸骨騎士 OP1 原名由羅馬字改為官方「浪漫街道、お散歩中」，原值移至 `titleRomaji`；「猫日」羅馬字按官方讀音「ねこじつ」修正為 `Nekojitsu`。沒有生成港台譯名或未證實別名。
- 3 筆新用途試行相容 authoring 選項 `sourceMode: "explicit"`，只輸出其已查閱來源，避免繼承舊歌來源及日期。省略選項的舊資料合併方式與公開 JSON 格式保持不變；既有核心測試新增這個 provenance 邊界斷言。

### 未解缺口與續查條件

| 已公開範圍 | 缺口 | 續查條件 |
| --- | --- | --- |
| 遺書、ただいまの場所、芽吹の唄、光の唄、FREEZE ME UP | 作詞／作曲／編曲尚未保存完整可用的第一方名單；補充索引或歌詞站內容未直接搬入。「FREEZE ME UP」的編曲署名在補充資料間有差異，不猜定 Jon Lundin 的角色 | 藝人／唱片正式曲目 credits、官方影片描述或可用正版製作者名單出現；定向查找已收尾，無新證據不輪流重搜資料庫 |
| 防衛ライン（だいたい平和です）、Clover、ココニイル | 作詞與作曲已入檔，編曲留空；mastering／producer 不改標為 arrangement | 發行方明確列出編曲角色或商品完整 credits 公布 |
| 一縷 | 三角色依 Qobuz 製作者名單保存，尚未取得相應第一方創作公告；原文編曲名保留 `Manyo`，不擅自建立別名等同關係 | TOHO／藝人官方曲目 credits 或本曲明確作者公告公布 |
| これ描いて死ね、うちの弟ども、ヘルモード、無職轉生等 | 部分舊官方影片仍只有既有外連，NC／MV／Art Track／lyric／live 各形式未齊；ヘルモード官網 MOVIE 只提供第 1 季 NC，不套到第 2 季 | 新官方 MUSIC／MOVIE 公告、確切影片連結或來源恢復；只補實際缺口 |
| 官方 YouTube | 只有 2 組取得足夠頻道／供應方關係的新 metadata；其他命名入口不猜頻道；新增嵌入及地區可用性保持 `unknown` | 目的頁恢復或官方渠道提供清楚關係；有嵌入／地區核對任務時再驗證。本批未使用 YouTube API 或保存 API 原始資料 |
| 版本及收錄 | 除明示的 full 配信與不同歌唱外，TV 剪輯、重錄、Art Track 發行品關係、藝人 Album／OST／合輯及個別演奏人員仍未齊 | 官方版本名、商品曲目表、錄音識別與創作名單出現，重用本批有效來源 |

歌ネット條款限制已記入 [`SOURCE_TERMS.md`](./SOURCE_TERMS.md)；本批不以該站名單新增 facts，也沒有保存歌詞、頁面副本或 raw response。未檢查或無法取得的欄位不記為已完成。

### 本機檢查與預覽

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個核心測試通過；全目錄公開契約 round-trip、關係與日期，以及新用途明確來源模式通過 |
| `npm run build` | 通過；Astro 160 檔案檢查，0 errors／warnings／hints；1,961 HTML 頁、CSP、Service Worker 與 3,918 公開產物通過 |
| `npm run test:e2e` | 6 條通過；來源 authoring 邊界改動後沿用完整核心流程，沒有為單歌新增快照或修改正常程式遷就測試 |
| JSON／差異核對 | 23 筆用途及 3 個新 ID 可讀；全部舊 ID／序號／URL、動畫 metadata 來源與日期、非本批 seed 物件保持；沒有新增歌ネット內容 |
| 實際展示 | 10 部作品／23 筆用途的已確認名單、命名平台入口及欄位證據可見；創作者「大塚祥輝」搜尋 → 成仏Come true → 展開證據通過；骸骨騎士同頁展示 3 筆用途及兩個 ED 演唱版 |
| 桌面／手機 | Chromium，1536×1024／390×844；已檢視截圖，無橫向溢出、空白頁、框架錯誤覆蓋層或 app console errors；未主動連線 YouTube。圖片請求攔截，外部播放／地區可用性未驗收 |
| 文件與公開邊界 | 文件連結、`git diff --check` 及 `npm run public:check` 通過；檢查範圍為本機 repository，未代替部署驗收 |

Browser plugin 不在本次可用清單，沿用 Playwright；Chromium 本機驗證權限已獲准。首輪預覽腳本將頁首演唱名義誤當作詳細名單欄位，修正核對腳本後通過，產品顯示行為無需修改。沒有重新稽核全部舊連結、依賴或發布環境。

預覽入口：`/seasons/2026-summer/`、`/search/`、`/anime/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-ii/#theme-gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-ii-ed-2`、`/anime/uchi-no-otouto-domo-ga-sumimasen/`、`/anime/mushoku-tensei-3/`。全部歌曲與季度歌單每用途一列，MV／Art Track 與音源不另增歌單列。

第二批收尾時的接點為 **2026-summer-credits-youtube-03**，10 部作品／19 筆既有用途，現已執行，成果見下方。`pan-no-akachan-tv-ed-1` 已有三創作角色及官方影片，沿用有效證據；收集由 `tenmaku-no-jaadugar-op-1` 到 `tetsunabe-no-jan-ed-1`。當時本季仍有 46 部未在格式試行及前兩批中登記的作品，這是歷史接點，不能將欄位已存在與整季完成混同。

本批僅完成本機修改與驗證，未提交、推送或部署；CI、preview deployment 與 production 未驗收。2020–2026 深化及 2007–2026 長期目標均保持未完成。固定年份／截止日與可選缺口的續查條件不因本批收尾而改變。

## 2026-10-14 批次：2026-summer-credits-youtube-03

完成層次：處理 10 部既有作品／19 筆 OP／ED 用途。其中 9 部作品／18 筆用途新增已證實欄位，パンの赤ちゃん ED 的三創作角色、影片及原核對日期直接沿用。13 筆本批深化用途已補齊作詞、作曲及編曲，加上沿用的 1 筆，共 14／19 筆具備三角色；其餘缺口如下。本批完成不代表 2020–2026 範圍已完成。

| 公開 theme ID | 曲名／用途 | 處理 |
| --- | --- | --- |
| `pan-no-akachan-tv-ed-1` | we are エケチャン！／ED1 | 沿用，無資料修改 |
| `tenmaku-no-jaadugar-op-1` | Stella／OP1 | 深化 |
| `tenmaku-no-jaadugar-ed-1` | 星／ED1 | 深化 |
| `grow-up-show-himawari-no-circus-dan-op-1` | ユラリユレル／OP1 | 深化 |
| `grow-up-show-himawari-no-circus-dan-ed-1` | DAYS!／ED1 | 深化 |
| `oni-no-hanayome-op-1` | ヒトコト／OP1 | 深化 |
| `oni-no-hanayome-ed-1` | 心星／ED1 | 深化 |
| `kabushiki-gaisha-magi-lumiere-2nd-season-op-1` | ラテマジック／OP1 | 深化 |
| `kabushiki-gaisha-magi-lumiere-2nd-season-ed-1` | BooooM!!!／ED1 | 深化 |
| `kimi-wo-aisuru-ki-wa-nai-to-itta-jiki-koushaku-sama-ga-naze-ka-dekiai-shitekimasu-op-1` | 「いつかちゃんと。」／OP1 | 深化及原名修正 |
| `kimi-wo-aisuru-ki-wa-nai-to-itta-jiki-koushaku-sama-ga-naze-ka-dekiai-shitekimasu-ed-1` | 最終回／ED1 | 深化 |
| `saijo-no-osewa-takane-no-hanadarake-na-meimonkou-de-gakuin-ichi-no-ojou-sama-seikatsu-nour-op-1` | 最最最高級のお世話して／OP1 | 深化 |
| `saijo-no-osewa-takane-no-hanadarake-na-meimonkou-de-gakuin-ichi-no-ojou-sama-seikatsu-nour-ed-1` | 完璧じゃないわたし／ED1 | 深化 |
| `let-s-go-kaikigumi-op-1` | 気味が悪いんだからねっ／OP1 | 深化 |
| `let-s-go-kaikigumi-ed-1` | 呪わしてね？／ED1 | 深化 |
| `seihantai-na-kimi-to-boku-2nd-season-op-1` | 猫じゃらし／OP1 | 深化 |
| `seihantai-na-kimi-to-boku-2nd-season-ed-1` | 運命の君／ED1 | 深化 |
| `tetsunabe-no-jan-op-1` | 火宴／OP1 | 深化 |
| `tetsunabe-no-jan-ed-1` | 泣いた悪魔／ED1 | 深化 |

已處理 anime ID：`curated-212308`、`curated-190569`、`curated-196017`、`curated-194219`、`curated-185692`、`curated-208225`、`curated-201514`、`curated-200230`、`curated-210031`、`curated-204060`。

### 實際差異

- 新增動畫 0、新增季度 0、新增用途 0；深化既有用途 18，登記 18 個歌曲 ID。本機全目錄仍為 28 季、1,917 動畫頁、4,232 筆用途，2020–2026 範圍仍為 3,968 筆唯一用途。影片、音源與發行版不增加歌單列數。
- 新增 57 筆作詞／作曲／編曲署名（54 筆第一方、3 筆正版平台補充）、22 筆團隊成員關係、1 筆未拆分的 songwriting 及 2 筆個別製作／演奏資料。「ラテマジック」合併演唱列拆為 syudou 與八木勇征；「星」另保存 Qobuz 明確的 Avu-chan 演唱角色。credits 條目淨增 84，條目數不等於人數；團隊成員與演唱者分開。
- 新增 9 個確切官方 YouTube URL：7 MV、2 番宣 CM；另命名並重用 6 個既有無字幕 OP／ED 入口。新增 1 組 Stella 合作 MV metadata，已取得頻道與唱片公司關係，屬上述影片，不重複計數。頻道名不明的其餘影片以命名外連保存；沒有把 CM 當 MV 或完整歌曲。
- 新增 3 個音源項目：「ユラリユレル (Aooo ver.)」官方明示的重新編曲演唱版，以及「気味が悪いんだからねっ」的 TV Anime size／Instrumental。只有明示 TV 的版本標為 `tv`，另外兩項長度分類保留 `unknown`；沒有以無字幕映像推定新錄音。
- 保存 2 個發行標題的 4 個 CD 發行版：「空とツキ」Album 第 8 曲收錄「最終回」；「New World Carnival 〜いざ魅惑の大海原へ♡〜」EP 的初回 A、初回 B、通常盤第 1 曲收錄 BooooM!!!，各自保存日期、品番及版別。未證實音源等同關係，曲目不填 `recordingId`。
- 新增 1 個「星」Qobuz JP 確切正版商品入口。用途來源條目淨增 27，新增 46 組欄位證據；同頁取得多項事實，不把來源條目數當查閱頁數。只將實際查閱的歌曲來源保存為 2026-10-14，作品 metadata、未重核來源及沿用的パンの赤ちゃん保持原日期。
- 「いつかちゃんと。」的括號依 TOY’S FACTORY 明確標示納入正式原名，既有 ID／slug／用途序號與 URL 保持。所有非本批 seed 物件及全部舊歌曲 URL 經差異核對無變更。季度資料只加入既有可選格式，沒有修改 runtime、UI、搜尋或播放器行為。

### 未解缺口與續查條件

| 已公開歌曲／範圍 | 保留缺口 | 續查條件 |
| --- | --- | --- |
| Stella | 作詞與作曲已入檔，編曲未明 | 唱片完整 credits 或官方影片描述明列 arrangement；兩輪定向查找已收尾 |
| 星 | 作曲、編曲與個別演唱依 Qobuz 補充；作詞未保存。平台製作者英文署名與日文作曲名之別名等同關係未證實，未自動合併 | Sony／藝人正式名單或可核對的別名關係出現；不套用其他歌曲的署名 |
| 「いつかちゃんと。」 | 已確認エルスウェア紀行編曲及りりあ。本曲書き下ろし聲明；只保存 `songwriting`，未拆作詞／作曲 | 唱片商品或官方曲目 credits 明列各角色；不由演唱者或作者聲明推定拆分 |
| 最終回、最最最高級のお世話して | 作詞／作曲／編曲仍無清楚可用名單 | 官方商品完整名單、影片描述或正版平台明確製作者名單出現；兩輪定向查找後不輪流重搜索引 |
| 最最最高級のお世話して、完璧じゃないわたし、猫じゃらし | 尚未取得候選影片與官方渠道的充分關係證據，未加入新的候選 URL；原有官方外連保留 | 動畫／唱片／藝人頁直接提供確切影片，或可核對的官方頻道及目的頁恢復 |
| ラテマジック、最終回 | 官方公告確認 MV 存在，但本批未取得可用的確切 MV ID；最終回的參演者頁只連官方頻道，製作機構影片外連目前不可讀 | 官方公告提供直接曲目影片 URL，或已識別外連恢復；頻道與宣傳短片不冒充本曲 MV |
| グロウアップショウ、怪奇組等 | MV、Art Track、NC、lyric／live 未齊；本批的番宣 CM 不能代替其他形式 | 新官方 MOVIE／MUSIC 或藝人公告提供 exact link；沿用有效證據，只處理真正缺口 |
| 1 組新影片 metadata 及新外連 | 嵌入與 JP／HK／TW 播放可用性未核對，保留 `embeddable: false`、`embedAvailability: unknown` 及 `availability: unknown` | 嵌入／地區核對任務或平台狀態變更；本批沒有使用 YouTube API 或保存原始 API 資料 |
| 全批的音源與收錄 | 除上述 3 個音源及 4 個 CD 版外，其他 full／TV、角色版、Art Track 發行品、藝人 Album／OST／合輯與錄音同一性未齊；angela 官方 discography 與 KING 商品曲序有差異，未填有衝突的收錄位置 | 發行方一致曲目表、官方版本名或錄音識別資料出現；既有有效頁面可重用，不因下一批開始重查 |

### 本機檢查與預覽

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個核心測試通過；全目錄公開契約及關係 round-trip 通過。首輪指出影片 evidence 使用未支援欄位，已修正資料；另修正舊關係測試的 fixture 選取，明確要求同時具有多音源與發行品，原有所有拒絕案例保留，未改正常程式或降低 gate |
| `npm run build` | 通過；Astro 160 檔案，0 errors／warnings／hints；1,961 HTML 頁、CSP、Service Worker 與 3,918 公開產物通過 |
| JSON／差異核對 | 19 筆用途及 18 筆深化欄位可讀；所有舊 ID／序號／URL、作品 metadata 來源及日期、非本批 seed 物件保持 |
| 實際展示 | 10 部作品同頁展示全部 19 筆用途，新增 credits、命名外連、3 音源及 4 發行版可見；創作者「鈴木裕明」搜尋 → ヒトコト → 展開 SUPALOVE 欄位證據通過 |
| 桌面／手機 | Chromium，1536×1024／390×844；已檢視創作名單、影片、TV／Instrumental 及 3 個 EP 版截圖，無橫向溢出、空白頁、錯誤覆蓋層或 app console errors；未主動連線 YouTube。圖片請求攔截，外部播放未驗收 |
| 文件與公開邊界 | checkpoint 文件連結、`git diff --check` 與 `npm run public:check` 通過；公開邊界檢查 239 個 repository 檔案，沒有將本機成果當作部署驗收 |

Browser plugin 不在可用清單，沿用 Playwright；Chromium 本機驗證權限已獲准。本批沒有新增季度或 contract／UI／搜尋／播放器改動，依 workflow 未重跑 E2E；fixture 修正由單元測試驗證。沒有重查全目錄舊連結、依賴或 Cloudflare 發布環境。

預覽入口：`/seasons/2026-summer/`、`/search/`、`/anime/oni-no-hanayome/`、`/anime/tenmaku-no-jaadugar/`、`/anime/kabushiki-gaisha-magi-lumiere-2nd-season/`、`/anime/let-s-go-kaikigumi/`。點選歌曲仍進入原動畫頁，來源與核對日期可直接展開。

第三批收尾時的下一批為 **2026-summer-credits-youtube-04**，現已執行，成果見下方；範圍由 `sekai-saikyou-no-kouei-meikyuukoku-no-shinjin-tansakusha-op-1`（`curated-198409`）至 `curated-199408`，10 部作品／20 筆既有用途。當時格式試行及前三批共登記 33 部作品，2026 夏季仍有 36 部未登記；沒有將既有欄位數或本批完成當成整季完成。

本批僅完成本機資料及必要測試修正與展示驗證，未提交、推送或部署；CI、preview deployment 與 production 未驗收。2020–2026 深化及 2007–2026 長期目標均未完成，固定年份、截止日及續查條件保持。

## 2026-10-14 批次：2026-summer-credits-youtube-04

完成層次：10 部既有作品、20 筆既有 OP／ED 用途深化，沒有新增動畫或用途。17 筆已有作詞、作曲及編曲：16 筆有第一方名單，「license」依正版 VideoMarket 曲目 credits 作交叉補充；動畫用途與演唱名義另由動畫官網證實。另 3 筆創作三角色仍有缺口，不將未知欄位計為完成。

| 公開 theme ID | 曲名／用途 |
| --- | --- |
| `sekai-saikyou-no-kouei-meikyuukoku-no-shinjin-tansakusha-op-1` | license／OP1 |
| `sekai-saikyou-no-kouei-meikyuukoku-no-shinjin-tansakusha-ed-1` | 終わらない夜の守り方／ED1 |
| `kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-3rd-season-op-1` | 大好き♡ずっと永遠に♡／OP1 |
| `kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-3rd-season-ed-1` | 来れ恋・至れ愛／ED1 |
| `nijusseiki-denki-mokuroku-eureka-evrika-op-1` | ユーレカ・エヴリカ／OP1 |
| `nijusseiki-denki-mokuroku-eureka-evrika-ed-1` | Soarin'／ED1 |
| `sayonara-lara-op-1` | さよならララ／OP1 |
| `sayonara-lara-ed-1` | Hearts Glow／ED1 |
| `azur-lane-bisoku-zenshin-ni-ed-1` | しゃいすまっ！／ED1 |
| `azur-lane-bisoku-zenshin-ni-ed-2` | Lu lu lun♪〜ウラハラ気分はオートマティック〜／ED2 |
| `hokuto-no-ken-kenou-gun-zako-tachi-no-banka-part-2-op-1` | I'm a Loser／OP1 |
| `hokuto-no-ken-kenou-gun-zako-tachi-no-banka-part-2-ed-1` | 白い蝶が飛んだら／ED1 |
| `saikyou-degarashi-ouji-op-1` | Script／OP1 |
| `saikyou-degarashi-ouji-ed-1` | 素敵なかんちがい／ED1 |
| `toumei-na-yoru-ni-kakeru-kimi-to-me-ni-mienai-koi-wo-shita-op-1` | ひとひら／OP1 |
| `toumei-na-yoru-ni-kakeru-kimi-to-me-ni-mienai-koi-wo-shita-ed-1` | 光／ED1 |
| `koko-wa-ore-ni-makasete-saki-ni-ike-to-ittekara-10-nen-ga-tattara-densetsu-ni-natteita-op-1` | それでも曇天を越えてゆく／OP1 |
| `koko-wa-ore-ni-makasete-saki-ni-ike-to-ittekara-10-nen-ga-tattara-densetsu-ni-natteita-ed-1` | 在り来たりな日常と幸運な日々へ／ED1 |
| `buchigire-reijou-wa-houfuku-wo-chikaimashita-madousho-no-chikara-de-sokoku-wo-tataki-tsubu-op-1` | Q.E.D.／OP1 |
| `buchigire-reijou-wa-houfuku-wo-chikaimashita-madousho-no-chikara-de-sokoku-wo-tataki-tsubu-ed-1` | グッバイ・ララバイ／ED1 |

已處理 anime ID：`curated-198409`、`curated-200637`、`curated-103303`、`curated-177637`、`curated-169080`、`curated-213506`、`curated-169582`、`curated-202269`、`curated-199748`、`curated-199408`。`curated-169582` 既有公開 slug 為 `saikyou-degarashi-ouji`，保留此 URL 與 theme ID，沒有由較長 seed slug 重建 ID。

### 實際差異

- 深化既有用途 20，登記 20 個歌曲 ID；新增動畫及用途均為 0。全目錄仍為 28 季、1,917 動畫頁、4,232 筆用途；2020–2026 範圍仍為 3,968 筆唯一用途。
- 新增 69 筆作詞／作曲／編曲署名（61 筆第一方、8 筆 VideoMarket 交叉補充）、28 筆團隊成員關係及 1 筆秦基博未拆分的 `songwriting`。更正 5 筆錯名或合併演唱列，另補 3 筆本曲演唱署名及 Tsuyoshi Ujiki 的 Guitar 角色；credits 條目淨增 102。團隊成員不推定為本曲演唱者，客席吉他不當作演唱。
- 修正 3 筆正式原名及 4 筆演唱顯示名：「来れ恋・至れ愛」及 2 首びそく ED 依官方原文保存；「恋太郎ファミリー」消除重複字串並取代羅馬字，榊原ゆい／橋本みゆき亦保存原文。既有 `titleRomaji`、ID、用途序號及舊 URL 保留。
- 新增 9 個確切官方 YouTube URL：3 MV、3 Art Track、2 Lyric Video、1 錄音幕後短片；另命名並更新 4 個既有無字幕 OP／ED 入口。取得 7 組新影片 metadata，屬上述 9 支影片，不重複計數；Hana Hope MV 與櫻井優衣幕後短片以官方公告／渠道證據支持的命名外連提供。
- 新增 9 個音源項目：100 カノ OP／ED 各 1 Instrumental 及 1 TV size、電氣目錄 OP／ED 各 1 off vocal、「ひとひら」空野かける（CV.入野自由）角色演唱版、Q.E.D. Instrumental、グッバイ・ララバイ off vocal。只有明示 TV 的 2 項標為 `tv`，其餘長度保持 `unknown`；角色演唱不增加動畫用途，MV 或角色映像不推定音源分類。
- 保存 7 種發行標題的 15 個唯一發行版，建立 16 筆本曲收錄關係：Redhair Rosy Single 第 2 曲、100 カノ第 3 期 OST vol.3 配信版第 1／42 曲、Hearts Glow 的 2 個 CD 版、BUDDiiS Single 的 3 個 CD 版第 4 曲、夏いぞん的 3 個 CD 版第 2 曲、Q.E.D. 的 3 個 CD 版及グッバイ・ララバイ的 2 個 CD 版。共用 OST 的兩首曲目沿用同一 release ID；未證實錄音等同的收錄不填 `recordingId`。
- 新增 6 筆用途層官方配信／商品入口，對應 3 個唯一 URL；100 カノ OP／ED 各連歌曲配信及 OST，電氣目錄 OP／ED 共用通常盤商品入口。沒有把 smart link 當成已驗證的各平台曲目或區域可用性。
- 用途來源條目淨增 29，新增 82 組欄位證據。同一官網頁一次支持多項事實；部分官方普通頁只能取得公開索引摘錄，來源名稱明示「公開索引」，不稱全文已讀。只更新實際查閱的歌曲來源日期，10 部作品 metadata 與未重核的來源保留 2026-07-25。

### 未解缺口與續查條件

| 已公開歌曲／範圍 | 保留缺口 | 續查條件 |
| --- | --- | --- |
| I'm a Loser、白い蝶が飛んだら | 作詞／作曲／編曲仍無清楚可用證據；後者只補官方明列的演唱名義及客席吉他 | 唱片商品完整 credits、官方影片描述或正版平台本曲製作者名單出現；兩輪定向查找已收尾，不套用配樂 credits |
| ひとひら | 秦基博官方「書き下ろし」只保存 `songwriting`；三角色未拆分。角色演唱版已有官方錄音紀錄，確切 making 影片 URL 未取得 | 官方曲目表明列作詞／作曲／編曲，或官網 making 外連恢復；不由作者聲明猜造分工 |
| license | 創作三角色由正版 VideoMarket 補充，第一方演唱／用途已確認；仍欠第一方逐曲創作名單 | Redhair Rosy／發行方正式逐曲 credits 公布，沿用既有證據定向補強 |
| 100 カノ、びそく、ザコばんか、license、Script、ひとひら、在り来たりな日常と幸運な日々へ | 部分官方 MV／無字幕／Art Track 等形式的確切 ID 或渠道關係尚未取得；100 カノ製作方已連 NC，但目的頁未回傳可讀 URL | 動畫／藝人／唱片公告提供確切外連，或已識別外連恢復；各缺口兩輪查找後保留舊有效入口，不以新批開始重搜 |
| 部分普通官方頁 | 完整正文未可讀，只保存可追溯的公開索引事實；未繞過限制，未保存頁面副本 | 來源恢復普通公開存取，或有同一發行方的清楚替代名單；只補真正缺口 |
| 100 カノ與電氣目錄的歌曲 CD | 已確認曲名、credits、instrumental／off vocal、官方商品／配信入口；未取得充分發行類型證據，未把歌曲 CD 擅自分類為 Single／Album | 正式商品頁明示類型及曲目表；沿用本次已核對資料，未知分類不阻擋其餘欄位 |
| 7 組新影片 metadata、9 個新 YouTube 外連與平台入口 | 嵌入、播放／購買及 JP／HK／TW 地區可用性未驗收；metadata 維持 `embeddable: false`、`embedAvailability: unknown`，連結 `availability: unknown` | 明確嵌入／區域核對任務或平台狀態改變；本批未使用 YouTube API，也未保存原始 API 資料 |
| 全批版本／發行品／成員 | 其他 full／TV、live／remix、藝人 Album／合輯、個別 CV 演唱、ISRC 與錄音同一性未齊 | 官方版本名、逐曲名單、新收錄曲目表或可比較錄音識別資料公布；不從團隊名單或多個影片推定 |

### 本機檢查與預覽

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個核心測試通過；全目錄公開 JSON 及關係 round-trip 通過，未修改測試或正常程式 |
| `npm run build` | 通過；Astro 160 檔案，0 errors／warnings／hints；1,961 HTML 頁、CSP、Service Worker 與 3,918 公開產物通過 |
| JSON／差異核對 | 20 筆用途及新增關係可讀；所有舊 ID／序號／URL、10 部作品 metadata 來源及日期、非本批 seed 物件保持 |
| 實際展示 | 10 部作品同頁展示全部 20 筆用途，新增 credits、命名外連、9 音源及發行版／曲序可見；創作者「湖東ひとみ」搜尋 → ユーレカ・エヴリカ → 展開動畫官網欄位證據通過 |
| 桌面／手機 | Chromium，1536×1024／390×844；已檢視創作名單、夏いぞん 3 個 CD 版、MV／Art Track、TV／Instrumental 與 OST 第 42 曲截圖；無溢出、空白頁、錯誤覆蓋層或 app console errors，未主動連線 YouTube。圖片請求攔截，外部播放未驗收 |
| 文件與公開邊界 | checkpoint 本機文件連結、`git diff --check` 與 `npm run public:check` 通過；公開邊界檢查 239 個 repository 檔案 |

Browser plugin 不在可用清單，沿用 Playwright；Chromium 本機驗證權限已獲准。本批只有現行格式內的資料更新，依 workflow 未重跑 E2E，沒有改 contract／UI／搜尋／播放器或依賴／Cloudflare 設定。檢查使用現有工作區；未另建乾淨 commit checkout，不能據此宣稱 CI 或 production 通過。

預覽入口：`/seasons/2026-summer/`、`/search/`、`/anime/nijusseiki-denki-mokuroku-eureka-evrika/`、`/anime/saikyou-degarashi-ouji/`、`/anime/toumei-na-yoru-ni-kakeru-kimi-to-me-ni-mienai-koi-wo-shita/`、`/anime/kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-3rd-season/`。歌單保持緊湊，版本及發行品不增加歌曲列數。

第四批收尾時的下一批為 **2026-summer-credits-youtube-05**，現已執行，成果見下方；範圍由 `honoo-no-toukyuujyo-dodge-danko-op-1`（`curated-195833`）至 `curated-198709`，10 部作品／19 筆既有用途；完整 anime ID 見頂部接點，`curated-169583` 的 2 筆試行資料直接沿用。格式試行及前四批共登記 43 部不同作品，2026 夏季仍有 26 部未登記；登記代表已作本批處理，不代表可選欄位全部齊備。

本機階段提交識別：`(add): 2026 summer credits and official videos batch 04`；範圍限本批 2 個季度資料檔與同一 checkpoint。前三批與格式由 `c71f032` 保存；歷史各批「未提交」記錄指當時收尾狀態。推送、部署、CI、preview deployment 與 production 均未執行或驗收。2020–2026 深化及固定 2007–2026 長期目標仍未完成。

## 2026-10-14 批次：2026-summer-credits-youtube-05

完成層次：檢視 10 部作品、19 筆既有 OP／ED 用途；實際深化 9 部作品的 17 筆用途，另 2 筆沿用格式試行。新增深化中 11 筆已具第一方作詞／作曲／編曲名單；含沿用試行後，本批 13 筆具三角色，其餘 6 筆保留創作缺口。沒有新增動畫、用途或把影片／發行版計作歌曲。

| 公開 theme ID | 曲名／用途 | 處理 |
| --- | --- | --- |
| `honoo-no-toukyuujyo-dodge-danko-op-1` | 会心の一劇／OP1 | 三角色已補齊 |
| `honoo-no-toukyuujyo-dodge-danko-ed-1` | Welcome to あざとさワールド／ED1 | 三角色已補齊 |
| `suterare-seijo-no-isekai-gohantabi-kakure-skill-de-camping-car-wo-shoukan-shimashita-op-1` | Butterfly／OP1 | 已證實欄位入檔；創作仍有缺口 |
| `suterare-seijo-no-isekai-gohantabi-kakure-skill-de-camping-car-wo-shoukan-shimashita-ed-1` | Holy Sweet Home／ED1 | 三角色已補齊 |
| `tenkousaki-no-seiso-karen-na-bishoujo-ga-mukashi-danshi-to-omotte-issho-ni-asonda-osananaj-op-1` | 夏に重ねて／OP1 | 沿用格式試行 |
| `tenkousaki-no-seiso-karen-na-bishoujo-ga-mukashi-danshi-to-omotte-issho-ni-asonda-osananaj-ed-1` | Tilt／ED1 | 沿用格式試行 |
| `grand-blue-season-3-op-1` | 夏子／OP1 | 已證實欄位入檔；創作仍有缺口 |
| `grand-blue-season-3-ed-1` | 裸のマーメード／ED1 | 已證實欄位入檔；創作仍有缺口 |
| `tai-ari-deshita-ojou-sama-wa-kakutou-game-nante-shinai-op-1` | 命短し対する乙女よ／OP1 | 三角色已補齊 |
| `tai-ari-deshita-ojou-sama-wa-kakutou-game-nante-shinai-ed-1` | NEW GAME／ED1 | 三角色已補齊 |
| `kimi-ga-shinu-made-koi-wo-shitai-op-1` | Amore／OP1 | 三角色已補齊 |
| `kimi-ga-shinu-made-koi-wo-shitai-ed-1` | エテルネル／ED1 | 三角色已補齊 |
| `migawari-reijou-wo-sukutta-no-wa-reikoku-mujihi-na-koori-no-ouji-no-ai-deshita-ed-1` | とけて煌る／ED1 | 已證實欄位入檔；創作仍有缺口 |
| `ghost-in-the-shell-2026-op-1` | GO GHOST／OP1 | 三角色已補齊 |
| `ghost-in-the-shell-2026-ed-1` | Blue／ED1 | 已證實欄位入檔；創作仍有缺口 |
| `yoroi-shinden-samurai-troopers-part-2-op-1` | BAD遺伝子／OP1 | 三角色已補齊 |
| `yoroi-shinden-samurai-troopers-part-2-ed-1` | ばけもん／ED1 | 三角色已補齊 |
| `tefuda-ga-oome-no-victoria-op-1` | 一進／OP1 | 已證實欄位入檔；創作仍有缺口 |
| `tefuda-ga-oome-no-victoria-ed-1` | 縁のつき／ED1 | 三角色已補齊 |

已處理 anime ID：`curated-195833`、`curated-209504`、`curated-169583`、`curated-199111`、`curated-128757`、`curated-187260`、`curated-213665`、`curated-177699`、`curated-209800`、`curated-198709`。`curated-169583` 的夏に重ねて／Tilt 及相關 sources、版本／發行品完全沿用，沒有重新取得或更新日期。

### 實際差異

- 新增動畫 0、主題曲用途 0；深化 17 筆用途並登記 17 個歌曲 ID，沿用 2 筆已有歌曲身分。全目錄維持 28 季、1,917 動畫頁、4,232 筆用途；2020–2026 範圍維持 3,968 筆唯一用途。
- 新增 52 筆第一方作詞／作曲／編曲署名、32 筆團隊成員關係。i☆Ris 演唱顯示名由 `iRis☆` 修正為官方原文 `i☆Ris`，相應演唱列一併更正；Blue 合併演唱列依 Qobuz 正版製作者資料拆為 Saya Gray／Daniel Caesar，另存 6 筆演奏／混音資料。Amore 保存動畫官網明列的田坂健太主題歌協力；credits 條目淨增 92，不等於新增人數，團隊成員不推定演唱本曲。
- 新增 13 個確切官方 YouTube URL：8 MV、3 無字幕 OP／ED、1 Acoustic Piano Version、1 使用 Amore 部分音源的動畫第 2 彈 PV。另命名並核對 4 個既有無字幕入口。新增 6 組影片 metadata（5 MV、1 Acoustic Piano 呈現），屬上述影片，不重複計數；其餘入口保留命名外連，頻道名稱不猜造。
- 保存紫音版與龍成 Ver. 的サムライトルーパー OP／ED 映像，同一首歌與用途可有多個影片；沒有把角色映像差異當作角色演唱或新錄音。PV 不當成 MV 或 full，Acoustic Piano 影片未標成 Live。
- 新增 5 個音源項目：Welcome to あざとさワールド Instrumental、NEW GAME Instrumental、Amore Instrumental／TV ver.、エテルネル Acoustic Piano Version。只有官方明示的 Amore TV ver. 標為 `tv`，其餘長度為 `unknown`；Acoustic Piano 版未套用原版編曲署名。
- 保存 8 種發行標題的 16 個唯一發行版／本曲收錄關係：i☆Ris Single 的 3 個 CD 版、INUWASI SIRAHA EP 的 2 個 CD 版第 5 曲、夏子 Single 的 2 個 CD 版、花冷え。Single 期間生産限定盤第 1 曲、halca NEW GAME 的 2 個 CD 版、ReoNa Amore 的 3 個 CD 版、ハク。世界が変わる時 Album 的 2 個 CD 版第 4 曲，以及 KI_EN 縁のつき配信 Single。共 15 個 CD 版、1 個配信版；夏子及縁のつき未證實曲序，位置留空。
- i☆Ris 的 Off Main Vocal 第 5 曲收錄已保存於 3 個 CD 版，未擅自分類為 Instrumental 或獨立 vocal 錄音。Amore 的 Instrumental 在初回／通常版為第 4 曲、期間版為第 5 曲，TV ver. 僅期間版第 4 曲；版本與曲序各有對應，未知錄音等同關係不填 `recordingId`。
- 新增 13 個非 YouTube 的官方商品／配信／正版平台入口，其中 Blue 有 Qobuz JP 確切商品連結與個別製作者，其他以已確認的官方 smart link 或商品頁提供；未核對其餘目的平台與 JP／HK／TW 可用性。用途來源條目淨增 43，新增 113 組欄位證據；同頁支持多欄位，不把來源條目數當查閱頁數。
- 部分官方普通頁未可讀全文，僅保存公開索引支持的必要事實，來源名稱明示「公開索引」。只更新實際查閱的歌曲來源日期，10 部作品 metadata 來源／日期及所有未重核舊來源保持。既有 ID、slug、用途序號、所有舊 URL、非本批 seed 物件均經差異核對保留。

### 未解缺口與續查條件

| 已公開歌曲／範圍 | 保留缺口 | 續查條件 |
| --- | --- | --- |
| Butterfly、夏子、一進 | 作詞／作曲／編曲仍缺充分可用名單；本批先保存各自已證實 EP／Single／Album 收錄及團隊資料 | 發行方逐曲 credits、CD 名單或官方 MV／正式供應 Art Track 的明確創作描述出現；兩輪定向查找已收尾，不搬入只在歌詞索引出現的名單 |
| 裸のマーメード | クロちゃん作詞及官方 MV 的 Hi-yunk（BACK-ON）Song 署名已保存，編曲未明；藝人公開目錄索引標 ALBUM，官方 MV 公告則稱 Single，商品頁曲目欄未可讀，未加入有疑義的結構化發行類型／曲序 | 第一方商品分類與完整曲目表一致，或正版逐曲名單出現；不以三個 CD 包裝自動推定三個音源 |
| とけて煌る | ササノマリイ作詞／作曲已確認，編曲未明；官方 MV／Art Track／ED 影片入口未取得充分證據 | neNna／Victor 正式本曲名單、具體官方影片或正版製作者頁公布；創作與影片缺口已完成兩輪查找 |
| Blue | 作詞／作曲與 Qobuz 明列的個別演唱／演奏已入檔，編曲未明；日文／英文署名之等同關係未自動合併。MV 的官方渠道及確切關係尚未充分核對 | Sony／藝人逐曲 arrangement 名單、明確別名證據或直接 MV 公告出現；不把 Producer／演奏角色當編曲 |
| 一進、ばけもん、会心の一劇等 | MV 存在的部分公告或藝人 VIDEO 頁已找到，但目的頁／官方渠道或確切 ID 未齊；未公開未審閱候選 URL。其他 Art Track、lyric、live 或無字幕形式仍有缺口 | 已識別官網外連恢復，或新的官方直接影片公告出現；不因下一批開始重搜全部舊連結 |
| i☆Ris Off Main Vocal | 發行品及第 5 曲已確認，音源種類未有充分描述，未加入獨立 recording；同歌不同 CD 的錄音識別未核對 | 官方聲部／版本描述或可比較的錄音識別資料出現；保留已有曲名與收錄，不猜造分類 |
| 夏子 FC 版及其他可選發行／版本 | 既有官方公告的 FC 版年份與一般版日期有差異，未保存有衝突的 FC 日期；其他 OST／合輯、full／TV、ISRC 與藝人 Album 收錄尚未齊 | 發行方更正或一致商品資料、完整收錄表／版本識別公布；有效證據只作真正缺口的續查 |
| 6 組新 metadata 及新平台入口 | `embeddable: false`、`embedAvailability: unknown`；所有新增連結可用性為 `unknown`。沒有實測外部播放、購買、嵌入或地區可用性 | 明確嵌入／區域核對任務或平台狀態改變；本批未使用 YouTube API，未保存 API 原始資料或媒體 |

### 本機檢查與預覽

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個核心測試通過；全目錄公開 JSON、關係與來源 round-trip 通過，未改正常程式或測試 |
| `npm run build` | 通過；Astro 160 檔案，0 errors／warnings／hints；1,961 HTML 頁、CSP、Service Worker 與 3,918 公開產物通過 |
| JSON／差異核對 | 19 筆用途完整保留，17 筆深化及 2 筆試行沿用可讀；所有舊 ID／序號／URL、作品 metadata、非本批 seed 物件與試行用途保持 |
| 實際展示 | 10 部作品同頁顯示全部 19 筆用途；新增名單、命名外連、5 音源及 16 發行版可見；「神谷礼」創作者搜尋 → Welcome to あざとさワールド → 展開動畫官網欄位證據通過 |
| 桌面／手機 | Chromium，1536×1024／390×844；已檢視 i☆Ris 創作／成員與 3 個 CD 版、ハク。Album 收錄、兩個不同角色無字幕映像入口及 Amore TV／Instrumental 曲序截圖。無溢出、空白頁、錯誤覆蓋層或 app console errors，未主動連線 YouTube；圖片請求攔截，外部播放未驗收 |
| 文件與公開邊界 | checkpoint 本機文件連結、`git diff --check` 與 `npm run public:check` 通過；公開邊界檢查 239 個 repository 檔案 |

Browser plugin 不在可用清單，沿用現有 Playwright；Chromium 本機驗證權限已獲准。批次只有現行格式內的資料更新，依 workflow 未重跑 E2E，沒有新增季度或修改 contract／UI／搜尋／播放器、依賴及 Cloudflare 設定。必要檢查使用現有工作區，未另建乾淨 commit checkout；不能據此宣稱 CI 或部署通過。

預覽入口：`/seasons/2026-summer/`、`/search/`、`/anime/honoo-no-toukyuujyo-dodge-danko/`、`/anime/kimi-ga-shinu-made-koi-wo-shitai/`、`/anime/yoroi-shinden-samurai-troopers-part-2/`、`/anime/tefuda-ga-oome-no-victoria/`。歌單保持原用途列數，版本、影片與發行品不增加歌曲列。

下一批：**2026-summer-credits-youtube-06**，由 `sora-wa-akai-kawa-no-hotori-op-1`（`curated-207809`）至 `curated-196187`，10 部作品／19 筆既有用途；完整 anime ID 見頂部。格式試行與前五批共登記 52 部不同作品，2026 夏季仍有 17 部未登記；登記不代表所有可選欄位齊備。開始時依當前公開 ID 核對接點，沿用有效證據。

本機階段提交識別：`(add): 2026 summer credits and official videos batch 05`；此紀錄與本批 2 個季度資料檔保存於同一階段 commit。推送、部署、CI、preview deployment 與 production 未執行或驗收。2020–2026 深化及固定 2007–2026 長期目標仍未完成，截止日與續查條件保持。

## 2026-10-14 批次：2026-summer-credits-youtube-06

完成層次：10 部既有作品、19 筆既有用途深化，補入 4 筆已證實的新用途，合計 23 筆。13 筆新增完整作詞／作曲／編曲名單，幼女戦記Ⅱ的 2 筆三角色沿用並核對原文，合計 15 筆具三角色；其餘 8 筆保留相應創作缺口。固定範圍及資料截止日不變，2020–2026 深化與 2007–2026 長期目標仍未完成。

| 公開 theme ID | 曲名／用途 | 實際處理 |
| --- | --- | --- |
| `sora-wa-akai-kawa-no-hotori-op-1` | 暁の空／OP1 | 三角色、AKATSUKI 兩個 CD 版及官方音源外連 |
| `sora-wa-akai-kawa-no-hotori-ed-1` | Reunion／ED1 | 三角色、Digital Single、MV／製作影片 |
| `sora-wa-akai-kawa-no-hotori-op-2` | 暁の星／OP2 | 新核心用途、三角色、已公告 10/21 CD 及預約入口 |
| `sora-wa-akai-kawa-no-hotori-ed-2` | flow feat. 安藤裕子／ED2 | 新核心用途、三角色、兩位歌唱名義／團隊與 Live MV |
| `clevatess-ii-majuu-no-ou-to-itsuwari-no-yuusha-denshou-op-1` | Foreshadow／OP1 | 三角色、Digital Single、無字幕 OP 與配信入口 |
| `clevatess-ii-majuu-no-ou-to-itsuwari-no-yuusha-denshou-ed-1` | Awake Anew／ED1 | 三角色、MYTH & ROID 團隊、無字幕 ED／PV／共同發行資料 |
| `youjo-senki-2-op-1` | Why? RED induction／OP1 | 沿用三角色；補團隊及共同數位發行入口 |
| `youjo-senki-2-ed-1` | Weiter! Weiter!／ED1 | 沿用並核對三角色及角色演唱名義 |
| `perfect-addiction-ed-1` | ADDICTED／ED1 | 三角色、個別角色／CV、配信與第 2 彈 PV |
| `otomege-sekai-wa-mob-ni-kibishii-sekai-desu-2-op-1` | 人生エンドロール／OP1 | 三角色、Ando 個別 Vocal／團隊及配信 |
| `otomege-sekai-wa-mob-ni-kibishii-sekai-desu-2-ed-1` | あしたはあしたのけせらせら！／ED1 | 三角色、官方 Art Track 及配信 |
| `ibitte-konai-gibo-to-gishi-op-1` | 雨宿りの憧憬／OP1 | 明確 full／TV-SIZE、CD／數位收錄、Art Track；創作仍缺 |
| `ibitte-konai-gibo-to-gishi-ed-1` | クレール／ED1 | AVAM 七位團隊成員、Digital Single 及配信；創作仍缺 |
| `katainaka-no-ossan-kensei-ni-naru-ii-op-1` | クレナイノハ／OP1 | 作詞／作曲、アニメば～じょん、已公告 Album 兩版；編曲仍缺 |
| `katainaka-no-ossan-kensei-ni-naru-ii-ed-1` | 未完成／ED1 | 三角色與 BLUE ENCOUNT／THE CHARM PARK 共同編曲、配信 |
| `thunder-3-op-1` | サンダーボルト／OP1 | 動畫盤 CD、曲序及官方商品入口；創作仍缺 |
| `thunder-3-ed-1` | しゅるれりら／ED1 | 更正正式演唱名義、三角色／演奏名單、2CD／MV／配信 |
| `mebius-dust-op-1` | メビウス／OP1 | 三角色／演奏／製作名單與 Official Audio |
| `mebius-dust-ed-1` | ジレンマ／ED1 | ESME MORI 作曲／編曲及官方歌曲影片；作詞／共同作曲仍有缺口 |
| `super-no-ura-de-yani-suu-futari-op-1` | イチジク煙／OP1 | TV 放送版用途標籤、無字幕 OP／MV／配信；創作仍缺 |
| `super-no-ura-de-yani-suu-futari-op-2` | クズリ念／OP2 | 新 ABEMA 限定版核心用途、ACAね詞曲／歌唱、MV／無字幕 OP；編曲仍缺 |
| `super-no-ura-de-yani-suu-futari-ed-1` | Fiction／ED1 | TV 版標籤、正版 JOOX 詞曲／製作及確切曲目、配信／無字幕 ED；編曲仍缺 |
| `super-no-ura-de-yani-suu-futari-ed-2` | NIGHT DANCER／ED2 | 新 ABEMA 限定版核心用途、三角色、原 Single、MV／Official Audio／無字幕 ED |

已處理 anime ID：`curated-207809`、`curated-198946`、`curated-135865`、`curated-213666`、`curated-159309`、`curated-196356`、`curated-194829`、`curated-207254`、`curated-108992`、`curated-196187`。新增用途的第一方及交叉來源獨立核對，使用 `sourceMode: explicit`，沒有繼承舊歌曲的核對日期。

### 實際差異

- 新增動畫 0、核心 OP／ED 用途 4；天は赤い河のほとり第 2 クール兩首及ヤニ吸うふたり ABEMA 限定先行版兩首入檔。19 筆舊用途 ID、序號、slug 與所有舊 URL 保持；全目錄為 4,236 筆用途，2020–2026 為 3,972 筆。
- `usageLabel` 以ヤニ吸うふたり的 4 首真實歌曲接通 seed、builder、`PublicTheme`、parser、公開 JSON、動畫頁與本機搜尋。TV 與 ABEMA 的不同歌曲各有原用途 ID；音源與 `versionLabel` 的用途保持。沒有搬移全量歷史資料或新增季度 registry。
- 新增作詞／作曲／編曲署名 51 筆，其中 49 筆有第一方、2 筆由 JOOX 香港本曲製作者資料交叉支持；另外 18 筆團隊關係、12 筆演奏／混音／製作署名及 10 筆新增／替換演唱列。Ando 保存兩位 Vocal，ADDICTED 拆出兩個角色／CV；しゅるれりら由 `おとは` 更正為正式名義 `音羽-otoha-`。credits 淨增 88，並非新增 88 人；團隊成員關係依官方名單保存。
- 新增 17 個確切官方 YouTube URL：5 MV、2 Art Track、2 Official Audio、2 無字幕 OP／ED、2 PV、1 Live MV、1 MV 製作影片、1 官方音源公開影片及 1 形式未進一步分類的官方歌曲影片。核對並命名 4 個既有無字幕入口；新增 8 組影片 metadata，屬上述入口，頻道名稱不猜造。保留幼女戦記Ⅱ既有 PV 與嵌入設定；新 metadata 的嵌入狀態皆為未知。
- 新增 4 個 recording：雨宿りの憧憬 full／TV-SIZE、クレナイノハアニメば～じょん（長度未知）與 flow Live。Lia 版本以官方原文支持，Art Track 未因日期相同自動對應 full；creditless 與 MV 未生成新錄音。
- 新增 13 個發行版關係：10 個已發行版及 3 個已公告 10/21 發售版；暁の星及あたえてこ兩個 Album 版在頁面明示發售予定。只存本曲相關曲目，未知品番／曲序留空；Why? RED induction／Awake Anew 保存官方共同發行入口，類型／曲目細節仍缺時沒有猜造 release。
- 新增 26 筆非 YouTube 平台項目，涉及 23 個不同 URL，包括 JOOX 香港確切 Fiction 曲目、官方配信、CD 商品／預約及藝人發行資料。來源條目淨增 61、欄位證據新增 148 組；同頁支持多欄位，來源條目數不當作查閱頁數。
- 未能讀取普通全文而有明確公開索引證據的欄位，來源名稱明示公開索引。只更新實際查閱的歌曲來源日期；10 部作品 metadata、未重核來源、所有非本批 seed 與既有無關改動保持。沒有下載媒體、完整歌詞、頁面副本或引入私人收集程式。

### 未解缺口與續查條件

| 已公開歌曲／範圍 | 保留缺口 | 續查條件 |
| --- | --- | --- |
| 雨宿りの憧憬、クレール、サンダーボルト、イチジク煙 | 三角色尚無足夠可用名單；演唱者、用途及已證實發行／影片已保存 | 第一方逐曲 credits、CD 製作者表或官方影片明確角色描述可讀；兩輪定向查找已收尾，不從歌詞站或鏡像搬入名單 |
| クレナイノハ、クズリ念、Fiction | 編曲仍未明；Fiction 的 Shin Sakiura 資料是製作人，不當作編曲 | 官方 arrangement 名單或正版本曲製作者明列該角色；只續查缺欄，保留已核對詞曲、團隊與外連 |
| ジレンマ | ESME MORI 作曲／編曲已入檔，歌ネット等發現的作詞／共同作曲尚未有可用第一方確認；官方 VIDEO 沒有明列影片類型 | 冨岡愛／Victor 逐曲名單或本曲官方影片描述可讀；保留公開索引／官方影片外連，不使用完整歌詞或推論 MV／full |
| 幼女戦記Ⅱ、人生エンドロール、AVAM 等影片形式 | 已有核心官方影片入口，部分 MV／Art Track／無字幕入口的頻道或確切公告未齊；公開索引與影片頁可讀性有限 | 已識別官網的直接影片公告恢復、可核對頻道描述或新官方影片出現；不重搜所有舊 URL，不公開未審閱候選 |
| KiT ALBUM、共同 Digital、OST／合輯及可選版本 | Perfect Addiction 的 KiT ALBUM 是動畫媒體商品，沒有充分本曲收錄表；共同 Digital 的逐曲資料在圖片／動態欄，未知類型／曲序留空。其餘 OST、instrumental、角色版、lyric／其他 live、ISRC 與錄音對應未齊 | 第一方本曲收錄表、具體音源識別或明確類型公開；不同 CD、MV 或角色動畫呈現維持各自關係 |
| ABEMA 與 TV 版時間／地區資料 | 已確認同作品存在兩種歌曲用途；本批保留作品既有季度／日期，沒有從平台差異生成新錄音或移動作品季度。ABEMA 發布文的一處年份有歧異，未搬入該日期 | 第一方一致的用途日期／季別證據及所需逐用途時間 contract 到位時續補；地區可用性按明確核對任務處理 |
| 新影片與平台狀態 | 所有新增連結 availability 為 unknown，8 組新 metadata 為 `embeddable: false`／`embedAvailability: unknown`；未實測外部播放、購買及區域可用性 | 明確嵌入／平台核對任務或狀態改變；本批未使用 YouTube API，未保存原始回應或媒體 |

### 本機檢查與預覽

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 最終 4 檔案／5 測試通過；用途標籤 round-trip 及不合法型別拒絕有核心契約檢查。初次檢查抓到新增 Sony URL 與 evidence target 的主機大小寫差異，修正資料後重跑通過，沒有放寬 gate |
| `npm run build` | 最終通過；160 檔案，0 errors／warnings／hints；1,961 HTML 頁、CSP 6 script／10 style hashes、Service Worker 與 3,918 公開產物檢查通過 |
| E2E | 6／6 通過；格式／搜尋／展示變更依矩陣執行一次，涵蓋 static API、歌單導覽、媒體同意、搜尋、無 JavaScript、404 與離線界線。未修改既有 E2E 檔案 |
| JSON／差異 | 19 筆舊用途及 4 筆新用途可解析；舊 ID／序號／URL、作品 metadata 與非本批 seed 保持，新用途來源均為獨立 10/14 核對日期 |
| 實際展示 | 10 部作品同頁展示 23 筆用途；名單、4 音源及 13 發行版可見。ANCHOR 搜尋能開啟人生エンドロール與兩位 Vocal；ABEMA 搜尋精確找到兩筆標示用途並開啟同頁四首歌曲 |
| 桌面／手機 | Chromium 1536×1024／390×844；10 部作品兩種尺寸均無溢出，已檢視用途區別、Lia full／TV、發售予定版及官方影片外連截圖；無 app console errors、空白頁或錯誤覆蓋層，未主動連線 YouTube。海報請求攔截，播放／購買未驗收 |
| 文件／公開邊界 | checkpoint／workflow 的 7 個本機文件連結及 `npm run public:check` 通過，公開邊界檢查 239 個 repository 檔案；`git diff --check` 與 staged patch whitespace 檢查通過 |

Browser plugin 不在可用清單，沿用 Playwright；Chromium 本機驗證權限已獲准。預覽伺服器安全標頭與最新建置逐項相符。檢查使用現有工作區；沒有把既有介面重整、其他文件／設定或測試清理混入本階段提交，73 個不相關路徑與 3 個混合修改檔的原內容經 hash／差異核對保留。此證據不等於乾淨 checkout、CI、Cloudflare preview deployment 或 production 驗收。

預覽入口：`/seasons/2026-summer/`、`/search/`、`/anime/super-no-ura-de-yani-suu-futari/`、`/anime/ibitte-konai-gibo-to-gishi/`、`/anime/sora-wa-akai-kawa-no-hotori/`、`/anime/otomege-sekai-wa-mob-ni-kibishii-sekai-desu-2/`。緊湊歌單新增 4 筆已確認用途列；錄音、影片與發行版不另加歌曲列。

下一批：**2026-summer-credits-youtube-07**，完整 anime ID 見頂部；7 部作品／12 筆既有用途，由 `ryoumin-0-nin-start-no-henkyou-ryoushu-sama-op-1` 開始，依序至 `bleach-sennen-kessen-hen-kashin-tan-ed-1`。格式試行及前六批共登記 62 部不同作品，2026 夏季剩 7 部未登記；登記只表示已覆核範圍，仍保留各批可選欄位缺口。第七批收尾後轉 2026 春季的未深化用途，沿用已核對資料與既有來源，不重做整季核心盤點。

本機階段提交識別：`(add): 2026 summer credits and official videos batch 06`；資料、可選用途標籤支援及同一 checkpoint 於本階段 commit 保存。推送、部署、CI、preview deployment 與 production 未執行或驗收；2020–2026 深化及固定 2007–2026 長期目標持續未完成。

## 每批接續欄位

下列是後續批次的欄位說明，已執行成果見上方批次記錄。

| 欄位 | 填寫內容 |
| --- | --- |
| 本次目標 | 可公開的範圍、資料欄位、優先順序、工作量／時限與完成條件；不抄錄私人指令 |
| 固定範圍 | 起迄年份／季度、媒體及用途類型、公開資料截止日；延續時不自行改動 |
| 執行狀態 | 本批是否啟動、資料／程式／展示是否驗證、整體範圍是否仍未完成；實際狀態只更新頂部 |
| 批次 | 日期、季度、簡短批次 ID；不靠 package 版本當游標 |
| 已處理 ID | 本批已公開的 theme ID／anime ID；跨季作品與原 ID 保持一致 |
| 完成層次 | 核心身分／credits／版本／發行品／平台，分別說明 |
| 實際差異 | 新增用途與修正用途數；版本、發行品與平台項目另計 |
| 殘留缺口 | 已公開作品缺哪些欄位及何時再查；未審核細節留非公開工作區 |
| 檢查 | 命令、結果、適用本輪差異；本機／CI／live 分開 |
| 下一批 | 季度與確切公開 ID 或可重現的範圍；游標只作提示，先檢查新差異 |

每季度首輪收尾保留一段範圍摘要。近期批次可合併成季度摘要，避免新增一份份 QA 文件；合併後仍須能定位下一批及到期缺口。

## 已知檢查限制

2026-10-09 本機網站改版的 4 項核心測試與 6 條 E2E、build、公開資料 gate、Cloudflare dry-run 已通過。當時 `npm run check` 被依賴稽核的 30 項問題阻擋（1 moderate、28 high、1 critical）；未調整依賴。後續未改依賴的資料批次沿用此已知限制，依賴改動或發布時再核對，不能將完整 `check` 記為通過。

## English checkpoint

The schema pilot and summer 2026 batches 01–03 are saved in local commit c71f032; batch 04 is saved in c1174a0. Batch 05 reviews nineteen existing uses in ten works, enriches seventeen uses and reuses two unchanged schema-pilot uses. Eleven newly enriched uses have first-party lyricist, composer and arranger credits. The actual additions are fifty-two creative roles, thirty-two group-member relations, thirteen official YouTube destinations, five recording variants and sixteen release editions across eight titles. Existing IDs, sequences, URLs, work metadata dates and all unrelated seed objects remain stable. Unit tests, build, semantic checks, desktop/mobile previews, documentation links and public-boundary checks passed. This checkpoint and the two data files share the commit subject `(add): 2026 summer credits and official videos batch 05`. The next batch starts at sora-wa-akai-kawa-no-hotori-op-1 and covers ten works and nineteen existing uses. Fifty-two of the sixty-nine summer works are registered, with explicit optional gaps; the 2020–2026 enrichment scope and fixed 2007–2026 long-term target remain incomplete at the 2026-10-14 cutoff. No push or deployment was performed. Checks use the working tree, not an isolated commit checkout or CI.


## 2026-10-14 批次：2026-summer-credits-youtube-07

本機完成層次：7 部作品／12 筆既有用途深化，沒有新增動畫、用途或猜定的 full 音源。歌曲、錄音及發行品保持獨立；以下為本機驗證，發布狀態另記收尾段。

| 公開 theme ID | 歌曲 | 實際補齊／更正 |
| --- | --- | --- |
| `ryoumin-0-nin-start-no-henkyou-ryoushu-sama-op-1` | Wonder | 完整創作；個別歌唱者、合聲、演奏及四位樂團成員；官方 MV |
| `ryoumin-0-nin-start-no-henkyou-ryoushu-sama-ed-1` | 星降る夜の約束 | 作詞第一方、作曲／編曲正版商品交叉核對；CD 日期、官方 MV |
| `hanaori-san-wa-tensei-shite-mo-kenka-ga-shitai-op-1` | ハイメンテナンスガール | 完整創作；MV、Teaser；已公告 CD／TV edit.／Instrumental |
| `hanaori-san-wa-tensei-shite-mo-kenka-ga-shitai-ed-1` | ベリーグッド・エンカウント | 完整創作；Digital Single、官方配信、MV |
| `plannosaurus-gachi-koseibutsu-bu-op-1` | ガチde古生 | 更正原名；完整創作；八位成員、Digital Single、官方配信；舊官網 404 |
| `futsutsuka-na-akujo-de-wa-gozaimasu-ga-suuguu-chouso-torikae-den-op-1` | Sunny | 正版商品創作交叉核對；台灣索尼官方 MV、Apple Music 確切 Single |
| `futsutsuka-na-akujo-de-wa-gozaimasu-ga-suuguu-chouso-torikae-den-ed-1` | ホウキボシ | 第一方作詞／作曲；官方 MV；原版編曲未確認 |
| `yami-shibai-17-ed-1` | 闇芝居のブルース | 完整創作；兩位成員、Official Audio、Digital Single／藝人 Single 收錄及卡拉 OK |
| `nige-jouzu-no-wakagimi-2nd-season-op-1` | 鬼事 | 完整創作；TV size、Instrumental、東京公演 Live、Single 兩版及 Teaser |
| `nige-jouzu-no-wakagimi-2nd-season-ed-1` | ロマンティックがほしいなら feat. 小坂菜緒,正源司陽子,藤嶌果歩（日向坂46） | 第一方作詞／作曲與三位個別歌唱者；編曲交叉核對；TV／Instrumental、CD、配信及官方歌曲影片 |
| `bleach-sennen-kessen-hen-kashin-tan-op-1` | I-BULL | 動畫 OP 與演唱、CD 收錄、Anime size／TV Instrumental、官方配信；創作名單與影片仍缺 |
| `bleach-sennen-kessen-hen-kashin-tan-ed-1` | 螺旋 | 第一方作詞／作曲；Acoustic 獨立編曲／Piano、MV 兩種、Anime Size／Instrumental、CD／Digital 收錄 |

- 已處理 anime ID：`curated-196218`、`curated-199066`、`curated-208824`、`curated-188139`、`curated-213359`、`curated-182616`、`curated-185874`。既有 ID、slug、用途序號及 URL 保留；12 個歌曲 ID 接通，未搬移其他歷史資料。動畫 metadata／來源日期不變。
- 實際差異：曲名更正 1（`Gachi de Furuu` → `ガチde古生`，不保留未證實羅馬字）；新增 72 筆 theme credits、移除 1 個被個別歌唱者取代的重複團體演唱 credit，淨增 71。新增作詞／作曲／編曲 46 筆（38 第一方、8 正版商品／媒體交叉核對）、團隊成員 14 筆、個別歌唱者 5 筆及其他演奏／製作 7 筆。9 首具備三類創作角色，3 首仍有缺口；欄位存在不等於第一方全部補證。
- 音源新增 13：5 TV 演唱版、6 Instrumental／卡拉 OK（其中 1 TV 長度）、1 現場版、1 Acoustic 重新編曲版。`ハイメンテナンスガール` 的 TV／Instrumental 來自已公告、尚待發售的 CD；沒有把 MV、creditless 或長度未知的影片當作 full。風輪兩種合唱卡拉 OK 只列入發行曲目，未猜定個別留下的聲部或音源身分。
- 發行品新增 12：8 CD 版（7 已發售、1 已公告 2026-12-02 發售予定）、4 Digital Single。只保存與本曲相關的曲目及可證實曲序，不搬入完整專輯曲目表；未確定的品番、日期或同音源關係留空。
- 新增 13 個不同官方 YouTube URL：8 MV、2 Teaser、1 Official Audio、1 Live、1 官方歌曲影片（形式待確認）；其中 5 項有經核對的頻道／形式 metadata，其餘以官網影片外連保存，不猜造頻道或嵌入可用性。既有無字幕 ED 另更正標籤 1。新平台項目 25（13 YouTube、12 官方／正版其他入口）。
- 歌曲來源新增 32 個項目，欄位證據新增 99 組。實際查閱的來源保存 2026-10-14；其他來源日期及動畫 metadata 保留。舊プラノサウルス官網普通讀取回應 404，保留 URL、標示連結不可用並增加有效藝人／發行來源，不以 404 日期宣稱舊用途重新確認。
- 全目錄仍為 28 季、1,917 個唯一動畫頁、4,236 筆用途；2020–2026 仍為 1,808 個唯一作品、3,972 筆用途。2026 夏的 seed registry 69 部已在既有 pilot／批次 01–07 登記；季度另外包含跨季 `curated-189046`，不能將 seed 批次完成當作全部夏季完成。

### 未解缺口與續查條件

| 公開 ID／欄位 | 保留狀態及續查觸發條件 |
| --- | --- |
| `bleach-sennen-kessen-hen-kashin-tan-op-1` 創作及官方 YouTube | 兩輪定向核對仍無明列本曲創作的可用第一方證據；一般藝人簡介不能推定本曲名單。待官方 MV／Art Track credits、唱片商品或可讀創作公告再補；已知歌詞索引不能作搬入依據 |
| `futsutsuka-na-akujo-de-wa-gozaimasu-ga-suuguu-chouso-torikae-den-ed-1` 原版編曲 | 第一方僅明列 Eve 作詞／作曲；交叉候選互相不一致，未採用。待官方 MV 描述或唱片／創作者正式 credits 明列再補 |
| `bleach-sennen-kessen-hen-kashin-tan-ed-1` 原版編曲 | Acoustic 的高慶"CO-K"卓史不能套回原版。待原版官方完整 credits；已確認 Acoustic 編曲與 Piano 另外保存在該音源 |
| `plannosaurus-gachi-koseibutsu-bu-op-1` 官方 YouTube、動畫官網 | 曲名／創作／配信已回到藝人官方來源；兩輪查找未取得可清楚配對的官方本曲影片。待藝人／動畫直接影片連結或正式 Dance／MV 公布；舊動畫官網 404 不改動作品來源共同日期 |
| `ryoumin-0-nin-start-no-henkyou-ryoushu-sama-ed-1`、`futsutsuka-na-akujo-de-wa-gozaimasu-ga-suuguu-chouso-torikae-den-op-1` 部分創作 | 以正版商品曲目明列作交叉核對，第一方用途及官方 MV 已保留。待唱片或藝人完整 credits 補證；Sunny 的 album 收錄先保留曲目來源，未把缺少第一方曲目證據的 Album 建成發行實體 |
| `nige-jouzu-no-wakagimi-2nd-season-ed-1` 編曲及影片形式 | 編曲目前用 Real Sound 原文商品資訊交叉核對；官方頻道歌曲影片未推定 Art Track／full。待官方 MV 描述與完整創作資料再細分 |
| 已公告發行品及各曲其他平台／full | 2026-12-02 CD 發售後再核對實際曲目及 TV／Instrumental 內容；其他 full、音源同一性、OST／合輯及確切平台缺項，遇新官方商品、明確 track credits 或配信連結再補，不重查全部舊來源 |

### 本機檢查與下一批

- `npm test`：4 檔／5 項通過；`npm run build`：Astro 0 errors／warnings／hints、1,961 HTML、3,918 公開產物，CSP 6 script／10 style hashes。
- `npm run public:check`：239 個 repository 檔案通過；`git diff --check` 通過。7 部作品的全部 12 筆用途經公開 JSON、動畫頁桌面 1536×1024／手機 390×844 核對，原名修正可搜尋，Acoustic 編曲／收錄關係可見，沒有 app console error 或自動 YouTube request。
- 既有介面修改納入發布範圍，6 條必要 E2E 全數通過；Cloudflare dry-run 通過、無 bindings。依賴稽核回報 30 項（1 critical／28 high／1 moderate），修復與登入／發布狀態另記收尾，不能將稽核記為通過。
- 本批資料及 checkpoint 以 `(add): 2026 summer credits and official videos batch 07` 保存；Git subject 可唯一對應本批，發布收尾另記實際 commit。
- 本輪後停止，不執行新批次。恢復後下一批為夏季額外作品 `curated-189046` 加春季首 9 部：`curated-180745`、`curated-210375`、`curated-198939`、`curated-194317`、`curated-201817`、`curated-180228`、`curated-199221`、`curated-186497`、`curated-181284`，共 10 部／26 筆用途。起點 `re-zero-season-4-op-1`；完成後由春季 `curated-179950` 接續。未在本輪開始這些歌曲查找。


## 2026-10-14 發布收尾 / Release closure

發布範圍：pilot／夏季批次 01–07 的已提交資料與格式，以及已審閱的既有共用歌單介面、測試／建置整理及公開文件。不包含憑證、帳戶資料、原始來源、logs、trace、測試產物或私人偏好。此段只保存可公開的交付狀態，部署識別碼與私人營運記錄留在本機暫存。

| 分類 | 提交與結果 |
| --- | --- |
| 資料與格式 | `c71f032`（pilot／01–03）、`c1174a0`（04）、`dbec875`（05）、`0f90d11`（06）、`c686b1e`（07）；批次證據及實際數量見各段 |
| 測試與建置 | `0f589b4`：既有重複／逐歌快照改為全目錄契約、來源、API 失敗及公開產物／CSP 檢查；舊刪除在本輪前已存在且可由 Git 恢復，本輪沒有發起檔案刪除 |
| 歌單介面 | `ac1dd2a`：首頁、所有歌曲、季度、搜尋共用緊湊歌單；動畫頁展示全部主題曲；必要流程測試同步更新。官方 YouTube 外連有第一方欄位證據時可通過影片篩選，不推定頻道／嵌入 metadata |
| 依賴修補 | `(fix): update vulnerable build dependencies`：Astro 7.3.8、sitemap 3.7.4、Vitest 4.1.11、Wrangler 4.151.0、fast-uri 3.1.8、http-cache-semantics 4.3.0；稽核由 30 項問題降至 0，不調低 gate |
| 公開文件 | `(docs): align collection workflow and catalogue guidance`：一般交接契約、現行格式／範圍、資料來源與測試說明；移除第一人稱任務文字，沒有保存對話內容 |

- 最終程式檢查：4 個單元檔案／5 項通過；Astro 160 檔案 0 errors／warnings／hints；1,961 HTML 與 3,918 公開產物通過 CSP／public gate；6 條 E2E 通過；Cloudflare dry-run 通過且沒有 bindings；依賴稽核 0 vulnerabilities。官方外連篩選修正後只重跑受影響的必要檢查。
- 展示：最新本機預覽埠 4337。原 4335 服務讀取舊 CSP，保留原服務並使用新埠；新埠 CSP 與本次建置一致。7 部／12 用途在桌面與手機展示均通過，沒有 app console error 或自動 YouTube request；Wonder 的官方外連可由影片篩選找到。
- 私隱：239 個 repository 檔案及 3,918 個建置檔案通過掃描，補充檢查未發現 credential literal、私人路徑、私人 email、raw Authorization 或應排除產物。`.gitignore` 排除 env、private／catalog 工作目錄、logs、trace、coverage 與 browser test results；公開測試只保留通用邏輯與小型失敗輸入。
- 正式發布已完成：[PR #99](https://github.com/kyeunga25/anisonary/pull/99) 的 quality 與 Workers check 通過並以 rebase 合併。main quality [run 38592893398](https://github.com/kyeunga25/anisonary/actions/runs/38592893398) 通過；手動部署 `f2fb293` 的同一已驗證靜態產物，source tag／message 與 100% serving 狀態經 Cloudflare 讀回確認。正式入口：[歌曲列表](https://anisonary.k-y.cc/songs/)、[螺旋版本與收錄示例](https://anisonary.k-y.cc/anime/bleach-sennen-kessen-hen-kashin-tan/)。


### 2026-10-15 正式驗收與停止位置

資料證據截止日仍固定 **2026-10-14**，沒有因收尾跨日延長來源範圍或更新舊核對日期。資料收集已暫停；下面只記本輪發布及交接。

| 階段 | main 提交 | 原始 PR 分支提交 |
| --- | --- | --- |
| (add): song relations and 2026 summer credits batches 01-03 | `461f69b` | `c71f032` |
| (add): 2026 summer credits and official videos batch 04 | `bb08746` | `c1174a0` |
| (add): 2026 summer credits and official videos batch 05 | `b0e1e67` | `dbec875` |
| (add): 2026 summer credits and official videos batch 06 | `17a49d5` | `0f90d11` |
| (add): 2026 summer credits and official videos batch 07 | `66e8ca3` | `c686b1e` |
| (refactor): streamline catalogue tests and build checks | `99ca0d2` | `0f589b4` |
| (update): use shared compact song playlists | `8db6776` | `ac1dd2a` |
| (fix): update vulnerable build dependencies | `ac8f034` | `b73f0cb` |
| (docs): align collection workflow and catalogue guidance | `f2fb293` | `3594262` |

- 發布範圍共 9 個實作／資料／文件階段，main 因線性歷史規則正常 rebase，沒有 squash；原始分支保存原 SHA 以便追溯。部署源為 `f2fb293de4b4ddfb25ca3ab1599ab443200fe34c`。本段為純 checkpoint 收尾，沒有更動網站程式或建置產物。
- 正式 API：既有 live gate 1 項通過，讀取全部 28 季、1,917 個唯一作品及跨 endpoint 契約；沒有憑證或私有來源 fallback。
- 正式 HTTP／產物：標準 Node fetch 核對 15 個頁面／公開資產及本批 7 個 anime JSON，22 項與本機已審閱產物 byte digest 一致；2 個不存在的頁面／API 回應真實 404。HTML 的 CSP／frame／content-type／referrer／permissions 標頭、API noindex／revalidation／無 permissive CORS 符合設定。
- 正式展示：7 部／12 用途在桌面 1536×1024 與手機 390×844 通過；曲名修正可搜尋，完整作品主題曲、創作、音源、收錄及來源可見；Wonder 官方外連可被影片篩選找到。沒有 app console error 或自動 YouTube request；第三方海報在測試攔截，不宣稱外部媒體或地區播放可用性。
- HTTP 診斷限制：預設 Python client 曾被 Cloudflare 回應 403／1010；沒有更改或停用網站保護。既有 Node API gate、普通 Node fetch 與匿名標準瀏覽器驗收均通過，該次診斷失敗不記為通過，也不推定所有 client signature 均可訪問。
- 最後可靠接點：本輪第七批及發布驗收完成，整體目標未完成。恢復必須明確指定；先由 `re-zero-season-4-op-1` 處理夏季跨季額外作品，再接春季 `curated-180745` 等首 9 部，共 10 部／26 用途。未解創作、影片及發行缺口保留在本批表中；沒有自動背景／排程收集。


## 2026-10-15 批次：2026-summer-spring-credits-youtube-08

完成層次：2026 夏季跨季額外作品加 2026 春季首 9 部，共 10 部／31 筆用途；26 筆既有用途全部深化，新增《ガンバレ！中村くん！！》5 筆輪替 ED。沿用已接通格式與有效來源，優先保存歌曲／動畫用途、官方影片、已證實音源及創作。來源本次核對日期為 2026-10-15，只採固定截止日 2026-10-14 以前已公告的資料。以下成果僅在本機，沒有提交、推送或部署。

| 公開 theme ID | 歌曲 | 實際補齊／更正 |
| --- | --- | --- |
| `re-zero-season-4-op-1` | Recollect | 完整創作；官方 MV、Digital Single 與配信 |
| `re-zero-season-4-ed-1` | Ender Ember | 作詞／作曲；官方 MV、Digital Single 與配信 |
| `re-zero-season-4-ed-2` | Stay Alive ～Regain～ | 更正為 IN 劇中歌；原文曲名、角色／CV、完整創作、重新編曲／studio live、Digital Single；舊 ID／序號保留 |
| `youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-4th-season-2-nensei-hen-ichi-gakki-op-1` | MONSTER | 完整創作；Instrumental、藝人版 Single、官網影片補證 |
| `youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-4th-season-2-nensei-hen-ichi-gakki-ed-1` | ライアーヴェール | 完整創作；官網影片補證 |
| `daikenja-riddle-no-jikan-gyakko-ed-1` | Savage | 演唱原文亜咲花；完整創作、Instrumental、Digital Single、官方音訊及確切平台 |
| `jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-3rd-season-op-1` | ジハンキズム | 完整創作、4 位成員、Digital Single |
| `jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-3rd-season-ed-1` | めくるめくランデヴー | 完整創作、Digital Single 品番與官方配信 |
| `saikyou-no-ousama-nidome-no-jinsei-wa-nani-wo-suru-2nd-season-op-1` | さよならじゃない方がいい | 詞曲與演唱正版交叉核對；官方 MV、CD Single、確切 Qobuz |
| `saikyou-no-ousama-nidome-no-jinsei-wa-nani-wo-suru-2nd-season-ed-1` | 二つの道 | 第一方作曲／編曲、作詞交叉核對；MV、off vocal、CD 兩版、確切 Qobuz |
| `nigashita-sakana-wa-ookikatta-ga-tsuriageta-sakana-ga-ookisugita-ken-op-1` | 誓いはキュンと。 | 完整創作、鈴木愛理個別演唱、Digital Single 與官方配信 |
| `nigashita-sakana-wa-ookikatta-ga-tsuriageta-sakana-ga-ookisugita-ken-ed-1` | DEAD OR LOVE | 完整創作、MV／無字幕 ED、Digital Single 及官方配信 |
| `ganbare-nakamura-kun-op-1` | 瞬発的に恋しよう | 完整創作、2 位個別演唱與 Producer；MV／無字幕 OP、Backing Track、CD 兩版 |
| `ganbare-nakamura-kun-ed-1` | 初恋 | 官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證；Album Version 音源 |
| `ganbare-nakamura-kun-ed-2` | WON'T BE LONG | 官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證 |
| `ganbare-nakamura-kun-ed-3` | 今夜はブギー・バック smooth rap | 官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證；編曲留空 |
| `ganbare-nakamura-kun-ed-4` | 負けるもんか | 官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證 |
| `ganbare-nakamura-kun-ed-5` | フライディ・チャイナタウン | 官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證 |
| `ganbare-nakamura-kun-ed-6` | 世界でいちばん熱い夏（平成レコーディング） | 官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證；平成レコーディング 2012mix 音源，編曲留空 |
| `ganbare-nakamura-kun-ed-7` | 蠟人形の館 | 官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證 |
| `ganbare-nakamura-kun-ed-8` | Runner | 新增用途；官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證 |
| `ganbare-nakamura-kun-ed-9` | フレンズ | 新增用途；官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證 |
| `ganbare-nakamura-kun-ed-10` | GLORY DAYS | 新增用途；官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證 |
| `ganbare-nakamura-kun-ed-11` | 浪漫飛行 | 新增用途；官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證 |
| `ganbare-nakamura-kun-ed-12` | だいすき | 新增用途；官方各話 ED／MV 與配信、ED 曲集 CD／Spotify 收錄、創作補證；用途為第13話，序號為第12首不同 ED |
| `dr-stone-science-future-part-3-op-1` | スキンズ | 4 位成員；詞曲／編曲正版交叉核對、MV、CD Single、確切 Qobuz |
| `dr-stone-science-future-part-3-ed-1` | ROCKET | 3 位成員；詞曲／編曲正版交叉核對、MV、CD 兩版、確切 Qobuz |
| `koori-no-jouheki-op-1` | 透明 | 完整創作；MV／Official Audio／明示 full-size 的動畫 MV 與音源 |
| `koori-no-jouheki-ed-1` | 逆様 | 完整創作；官方 MV、Digital Single 與配信 |
| `kirio-fanclub-op-1` | FANCLUB | 3 位官方合署詞曲、編曲及 3 位團隊成員；MV、Digital Single |
| `kirio-fanclub-ed-1` | ハーモニー | 完整創作；MV、藝人 Album lovely moments 收錄及曲序 |

- 已處理 anime ID：`curated-189046`、`curated-180745`、`curated-210375`、`curated-198939`、`curated-194317`、`curated-201817`、`curated-180228`、`curated-199221`、`curated-186497`、`curated-181284`。10 部作品的其他 metadata、圖像、來源及原 2026-07-25 日期保持不變；其他春季 seed 完全未改。
- 實際創作差異：新增 107 筆創作角色（104 筆作詞／作曲／編曲、3 筆官方合署詞曲），其中 60 筆分列角色及 3 筆合署詞曲由第一方明列，44 筆由正版商品交叉核對。另新增 14 筆團隊成員、10 筆演唱 credit、1 筆 Producer；移除 4 筆被正確原文／個別歌唱者取代的演唱 credit，全部 credits 淨增 128。26 筆用途分列完整詞曲編曲、1 筆使用官方合署詞曲，4 筆仍缺編曲；欄位齊備不等於全部已有第一方逐項補證。
- 新增音源 9：4 Instrumental／Backing Track／off vocal、1 Album Version 演唱、1 明示 full-size 演唱、1 2012mix、1 Regain 重新編曲、1 studio live。只有「透明」官方動畫 MV 明示 full-size；其餘長度留 unknown，沒有由 MV／ED 影片長度猜定 full／TV，也未將不同 MV 自動當作新音源。
- 發行品新增 21 個不同 ID（19 Single、1 藝人 Album、1 動畫 ED／OST 曲集；11 個 CD 版、10 個 Digital Single）。跨歌曲共有 32 組收錄關係；《中村くん》12 首共用同一曲集 ID，各歌僅保存自己的 disc／track。曲集明列「初恋（アルバム・ヴァージョン）」及「平成レコーディング 2012mix」，不與其他 MV 猜定同一錄音。
- 新增 29 個不同官方 YouTube 外連：21 MV（含 1 個官方明示 full-size 的動畫 MV）、2 官方音訊、1 studio live、5 ED 影片；另 11 個已有影片外連補上本次實讀官網的形式／用途證據。新增影片只保存外連與欄位證據，沒有猜造頻道或嵌入可用性；原有播放器維持明確連線同意。平台實際新增 74 個項目（29 YouTube、45 其他平台／官方入口；同一曲集在不同歌曲分別建立收錄入口，不當作不同專輯）。
- 公開來源新增 94 個項目，4 個實際再讀來源更新其歌曲證據日期；新增 240 組欄位證據。其餘舊來源日期保留。Apple Music／YouTube Music 等目的頁讀取不完整時，以藝人／唱片官方配信頁保存確切目的 URL，所有新入口的地區可用性均為 unknown，沒有宣稱 HK／TW 可播放或購買。
- `Stay Alive ～Regain～` 的動畫官方公告及既有 UZUREA 均明列劇中歌，原 ED 分類改為 `IN`；authoring、公開 parser／JSON、緊湊歌單、用途篩選及動畫頁已接通。公開 ID `re-zero-season-4-ed-2`、序號 2、原頁內連結保持有效；消費端以 type 判定，不從 ID 字尾猜用途。沒有將原版、Regain、studio live 當作三首新歌。這是既有用途的更正，不代表全面擴充歷史插曲收集範圍。
- 全目錄為 28 季、1,917 個動畫頁、4,241 筆用途（4,240 OP／ED＋1 劇中歌）；2020–2026 為 1,808 個唯一作品、3,977 筆用途（3,976 OP／ED＋1 劇中歌）。與上一批相比新增 5 筆用途，並將 1 筆 ED 更正為 IN，不能把重分類算作新歌曲。

### 待補資訊與續查條件

| 公開 ID／欄位 | 保留缺口與續查條件 |
| --- | --- |
| `re-zero-season-4-ed-1`、`saikyou-no-ousama-nidome-no-jinsei-wa-nani-wo-suru-2nd-season-op-1` 編曲 | 官網／藝人商品與第二輪歌曲定向查找仍無可明確採用的完整第一方名單；不從團體作者或泛用簡介推定。待官方影片描述、商品完整 credits 或創作者可讀實績明列本曲再補。部分作品頁讀取受限，未繞過限制 |
| `ganbare-nakamura-kun-ed-3`、`ganbare-nakamura-kun-ed-6` 編曲 | 動畫 ED 分頁、唱片曲集與正版商品均未明列該使用音源的完整編曲。smooth rap 不套用 nice vocal 名單；平成錄音／2012mix 不套用 1987 年版編曲。待相關版本曲目 credits 或正式 liner 資訊 |
| `kirio-fanclub-op-1` 詞曲細分 | 官網合署「作詞/作曲」三人，保存 songwriting，不擅自將每人拆作 lyrics＋composition。只有出現逐角色名單才細分；既有合署及編曲可直接展示 |
| 正版商品交叉核對的創作 | 《中村くん》多首 ED、SIX LOUNGE 詞曲、22/7 作詞及 Dr.STONE 詞曲／編曲已有具體正版來源，保留交叉核對身分。待唱片／藝人／創作者的同曲完整 credits 再補第一方；羅馬字姓名不猜造未核對漢字 |
| 《中村くん》的音源同一性及各歌其他收錄 | 官方 ED、歷史 MV、曲集版是不同平台／發行關係；只有曲目明示的 Album Version／2012mix 建立音源，未推定其他 MV 與使用版相同。待官方版本識別、原專輯曲目表或可核對錄音資料，再補原 single／artist album；不搬入整張 OST 的非本曲曲目 |
| `daikenja-riddle-no-jikan-gyakko-ed-1` MV／full；其他已保留舊影片的作品 | Savage 已補官方音訊與唱片直接外連；尚未完成 MV 的第一方直接渠道核對。部分歌曲本輪新增以外的 MV、Art Track、lyric、live、creditless、full／TV 與個別成員名單仍缺；定向官網／商品及第二輪歌曲查找後暫留，遇新官網直接影片或版本公告再查，不重搜全部舊影片 |
| 其他發行品／平台 | ライアーヴェール、透明 的詳細 CD／Album editions、SIX LOUNGE 的 TV／Instrumental、各曲 OST／合輯與平台曲目深連結仍可補。既有已核對發行與配信先展示；待同曲官方完整曲目表或確切目的頁。ハーモニー 的官方公告對數位上架日有差異，本輪僅保存可確定的藝人 Album 日期，不猜定單曲日期 |

### 驗證與接續

- `npm test`：4 檔／5 項通過；全目錄透過公開 ApiProvider 契約檢查，新增 IN 篩選及更正後公開 ID 保留的斷言。初次驗證找出兩筆本批資料的 ID／URL 正規化問題，已修正資料，沒有放寬 validator。
- `npm run build`：160 檔 0 errors／warnings／hints；1,961 HTML、3,918 公開產物通過 CSP／artifact gate。`npm run public:check`：239 個 repository 檔案通過。
- 6 條 E2E 全部通過，涵蓋全目錄 API、緊湊歌單／搜尋、媒體同意、手機鍵盤、No JavaScript、離線及真實 404。第一次 Chromium 啟動受 macOS 沙盒 MachPort 權限限制，未進入網站測試；在允許的本機環境重試通過，沒有更改網站安全設定。
- 本批 10 部／31 用途經本機公開 JSON 與桌面 1536×1024 核對；另以手機 390×844 檢查 Re:Zero、中村くん、氷の城壁。劇中歌可由 IN 篩選找到，ED 篩選排除；原 ID／頁內連結、第13話 ED、完整創作與收錄可見，無 app console error 或自動 YouTube request。外部海報被攔截，未宣稱外站媒體可用性。預覽發現的總數用詞改為「首歌曲」，不再將劇中歌總數稱為 OP／ED。
- 本機預覽使用埠 4338；[輪替 ED／收錄示例](http://127.0.0.1:4338/anime/ganbare-nakamura-kun/)、[劇中歌更正](http://127.0.0.1:4338/anime/re-zero-season-4/)、[歌曲用途篩選](http://127.0.0.1:4338/songs/)。此輪沒有 Git commit、GitHub push／CI 或 Cloudflare 部署；前批正式網站保持原發布狀態。
- 下一批為 2026 春首個未深化接點：`curated-179950`、`curated-210234`、`curated-195333`、`curated-209940`、`curated-202381`、`curated-170019`、`curated-182205`、`curated-196144`、`curated-183231`、`curated-198411`，共 10 部／25 筆用途，從 `reincarnation-no-kaben-op-1` 開始；之後由 `curated-171110` 接續。這批尚未開始來源查找；2020–2026 及固定 2007–2026 整體目標未完成。

The eighth batch is verified locally: twenty-six existing uses enriched, five rotating endings added, and one existing ending correctly reclassified as an insert song without changing its public ID. Twenty-nine official YouTube destinations, nine recording variants and twenty-one release entities are added. Optional gaps and triggers remain listed above. No commit, push or deployment was performed. Continue at reincarnation-no-kaben-op-1; the wider enrichment target remains incomplete.


## 2026-10-15 批次：2026-spring-credits-youtube-09

完成層次：10 部既有作品、26 筆既有用途；25 筆更新，1 筆已有有效資料直接沿用。前批接點預估為 25 筆，這裡按公開 JSON 實數更正為 26。沒有新增動畫、季度或用途；修正錯配的歌曲身分，沿用既有格式。資料截止日維持 2026-10-14；實際查閱來源記 2026-10-15。本輪仍僅在本機。

| 公開 theme ID | 歌曲 | 本批處理 |
| --- | --- | --- |
| `reincarnation-no-kaben-op-1` | Glitch* | 創作交叉補充、Animation Lyric Video、Digital Single |
| `reincarnation-no-kaben-ed-1` | 零 | 完整第一方創作、AYAME、TV size／Instrumental／角色版、MV、Single／iller Album |
| `mamonogurai-no-boukensha-ore-dake-mamono-wo-kuratte-tsuyoku-naru-op-1` | 正気の沙汰 | 完整第一方創作、夕日團隊身分、MV、Digital Single |
| `mamonogurai-no-boukensha-ore-dake-mamono-wo-kuratte-tsuyoku-naru-ed-1` | STORY | 第一方作詞／作曲、4 位團隊成員；編曲待補 |
| `haibara-kun-no-tsuyokute-seishun-new-game-op-1` | Fly Again!! | 完整第一方創作、MV、Digital Single／POLYPHONY Album |
| `haibara-kun-no-tsuyokute-seishun-new-game-ed-1` | ドラマチック逃避行 | 完整第一方創作、Lyric Video、Digital Single／AIM STAR EP 兩版 |
| `haibara-kun-no-tsuyokute-seishun-new-game-ed-2` | 大切なもの | 原名、灰原夏希／CV 與第10話特殊 ED；創作／Chorus 待補 |
| `komekami-girls-op-1` | Get Set Go! | 沿用原 OP 影片、補核心交叉來源；創作有衝突，留空 |
| `komekami-girls-ed-1` | 夢のレシピ | 拆出 4 位角色／CV 演唱；創作待補 |
| `komekami-girls-ed-2` | チェックしよ！ | 原名、演唱、miniこめっ！用途；作詞／作曲交叉補充 |
| `mata-korosarete-shimatta-no-desu-ne-tantei-sama-op-1` | スターダスト・エウレカ | 三角色創作交叉補充、MV、Digital Single／LAPLACEL Album 兩版 |
| `mata-korosarete-shimatta-no-desu-ne-tantei-sama-ed-1` | リリテアの歌 | 角色／CV、三角色創作與 OTOTOY 確切入口交叉補充；日期衝突留空 |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-2nd-season-op-1` | 君は恋人 | 完整第一方創作、無字幕 OP、Digital／天使盤 Single、真昼角色翻唱及伴奏、OST 收錄 |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-2nd-season-ed-1` | うれしい！たのしい！大好き！ | 還原 ED1 原名／真昼演唱，修正錯配影片；創作、Instrumental、OST 及確切平台 |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-2nd-season-ed-2` | 夏祭り | 原名／角色、創作、官方歌曲影片、Instrumental、OST 及確切平台 |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-2nd-season-ed-3` | ヘビーローテーション | 原名、5 位角色／CV、創作、移回正確歌曲影片、Instrumental、OST 及平台 |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-2nd-season-ed-4` | 明日への扉 | 原名／角色、創作、官方歌曲影片、Instrumental、OST 及確切平台 |
| `tensei-shitara-slime-datta-ken-4th-season-op-1` | 絵空事 | 完整第一方創作、Instrumental，重用 MONSTER／絵空事 同一 Single ID |
| `tensei-shitara-slime-datta-ken-4th-season-op-2` | TACTIC | 完整第一方創作、Digital Single 與官方配信 |
| `tensei-shitara-slime-datta-ken-4th-season-ed-1` | 渇望 | 創作交叉補充、5 位成員、MV、Instrumental／CD Single，Anime size 確切平台 |
| `tensei-shitara-slime-datta-ken-4th-season-ed-3` | ヒムナル | 還原原名／藝人、作曲／編曲第一方、作詞交叉補充、第二弾 ED 映像、Digital Single |
| `tensei-shitara-slime-datta-ken-4th-season-ed-2` | Walk on your way | 還原 Walk on your way／藍井エイル，改為 IN 劇中歌；完整創作、Digital Single 與配信 |
| `snowball-earth-op-1` | 零-zero- | 作詞／作曲正版交叉補充、MV、Digital Single 與確切平台；編曲待補 |
| `snowball-earth-ed-1` | 今この胸に滾るのは | 完整第一方創作、14 筆演奏角色、無字幕 ED、Digital Single、官方明示動畫 MV Edit 音源 |
| `rilakkuma-ed-1` | stay with me | 原文藝人幾田りら、完整第一方創作、官方配信與 Digital Single；沿用既有 ED 用途 |
| `nezumi-kun-no-chokki-tv-ed-1` | グッドラック！マイフレンド feat.ムロツヨシ & さかなクン | 沿用既有完整創作／個別演唱、無字幕 ED／MV／Dance Video 及配信；沒有改日期 |

已處理 anime ID：`curated-179950`、`curated-210234`、`curated-195333`、`curated-209940`、`curated-202381`、`curated-170019`、`curated-182205`、`curated-196144`、`curated-183231`、`curated-198411`。所有既有 theme ID、用途序號、動畫 slug 及頁內連結保留；其他春季 seed 沒有改動，第八批成果保留。

### 實際差異

- 為 25 筆既有用途登記歌曲 ID；不同影片、演唱版與專輯沒有新增歌單列。新增 72 筆創作角色（22 作詞、27 作曲、23 編曲）：39 筆第一方、33 筆明示交叉核對。19 筆更新用途已有三個創作角色，其中 10 筆三角色均有第一方、9 筆含交叉補充；另 6 筆仍未齊。《鼠小弟》的既有三角色及影片直接沿用，不當作新補成果。
- 新增 19 筆原文／個別角色演唱 credit，取代 12 筆合併或非原文演唱項目；另補 10 筆團隊成員及 14 筆有明確樂器的演奏角色。全部 credits 淨增 103，角色條目數不等於人數；NEE、niina、CiON 成員沒有自動推定為本曲演唱者。
- 新增 13 個音源項目：8 Instrumental、2 角色演唱、1 AYAME 演唱、1 TV size、1 官方明示動畫 MV Edit。只有「零 TV size ver.」分類為 TV；其餘 12 項長度 unknown，沒有由 MV／無字幕映像推定 full。真昼的「君は恋人」角色翻唱另記自己的編曲，未套用大石昌良原唱編曲。
- 建立 28 組歌曲／發行品收錄關係，涉及 24 個不同發行 ID：23 個新發行品（14 Digital、9 CD 版），加上第八批已存在的 LACM-24832 藝人版 Single。相關發行類型為 17 Single、4 Album、2 EP、1 OST；《天使》5 首共用 THCA-60302，MONSTER／絵空事 共用原 Single ID，各歌僅存自己的曲目。
- 新增 12 個不同官方 YouTube 入口（6 MV、2 Lyric Video、1 無字幕 ED、1 ED 映像、2 官方歌曲影片）；另為 2 個既有入口補形式證據，將錯配在《天使》ED1 的「ヘビーローテーション」影片移回 ED3。新入口以命名外連及欄位證據提供；頻道／嵌入 metadata 不足時不補造。原有《鼠小弟》3 支影片保持原狀。
- 平台項目新增 49、移除 1 個錯配連結；新增中包含上述影片的 13 個用途連結（其中 1 個為移回正確歌曲）、19 官方配信、8 Qobuz、4 Apple Music、4 Spotify、1 OTOTOY。相同專輯在不同歌曲出現不算不同專輯，地區可用性保持 unknown。
- 公開來源新增 64 個項目，7 個實際重讀的既有來源更新獨立核對日期，移除 1 個錯配的 ED1 影片來源；新增 178 組欄位證據。作品其他 metadata、圖像及來源日期保持原狀；只有歌曲衍生的史萊姆 ED 數由 3 更正為 2。部分受限頁面採已可讀公開索引核對，來源標籤明示，不聲稱影片播放／嵌入或地區可用性已驗收。
- 《天使》ED1 原有羅馬字已指向「うれしい！たのしい！大好き！」，本批依官網還原曲名、真昼演唱與正確無字幕 ED；ED3 才是 5 人的「ヘビーローテーション」。史萊姆原 ED2 依唱片官方還原為「Walk on your way／藍井エイル」並改 IN，仍使用 `tensei-shitara-slime-datta-ken-4th-season-ed-2`；ED3 保留給「ヒムナル／田所あずさ」。沒有合併或刪除舊 ID。
- 全目錄仍為 28 季、1,917 動畫頁、4,241 筆用途（4,239 OP／ED＋2 劇中歌）；2020–2026 仍為 1,808 個唯一作品、3,977 筆用途（3,975 OP／ED＋2 劇中歌）。本批重分類不是新增歌曲。

### 待補資訊與續查條件

| 範圍／公開 ID | 待補與觸發條件 |
| --- | --- |
| `mamonogurai-no-boukensha-ore-dake-mamono-wo-kuratte-tsuyoku-naru-ed-1` | 編曲、個別本曲演唱／演奏及其他官方影片。已有官網詞曲與團隊 4 人；待官方歌曲 credits／商品／MV 明列，不由團隊位置推定本曲演唱 |
| `haibara-kun-no-tsuyokute-seishun-new-game-ed-2` | 目前由原作者證實第10話特殊 ED 及夏希演唱；新版創作、芹香 Chorus 名單、正式發行／影片仍缺。待動畫／唱片完整本曲名單；不把原曲編曲或未證實合唱者套入此角色演出 |
| `komekami-girls-op-1`、`komekami-girls-ed-1`、`komekami-girls-ed-2` | OP 詞曲在社群資料與製作者聲明轉載不一致，ED1 另有「夢／愛のレシピ」名稱衝突；沒有採用衝突創作。ED2 詞曲僅交叉補充、編曲空白。官網／出演者及兩輪定向查找後仍無清楚第一方完整 credits；待官方音樂公告、可讀影片描述或商品曲目表。ED2 標清 miniこめっ！用途，沒有新增一部動畫 |
| `snowball-earth-op-1` | 編曲及作詞／作曲第一方補證；目前詞曲來自正版 Qobuz。待藝人／唱片本曲完整 credits；一般簡介與影片長度不能證明編曲／full |
| 9 筆三角色含交叉補充的用途 | Glitch*、またころ OP／ED、天使 4 首 ED、渇望、ヒムナル 的部分創作來自 MusicBrainz、歌曲資料庫或正版平台，保留 cross_check；待藝人／唱片／創作者逐角色本曲名單。天使各 Cover 的編曲以本次配信版為準，沒有套用歷史原唱編曲 |
| 官方 YouTube | STORY、灰原特殊 ED、こめかみ ED、stay with me、TACTIC、Walk on your way，以及零角色版的其他確切 MV／Art Track／lyric／live 入口仍可補。部分已有舊外連，尚未齊備各形式與渠道；待官網直接外連或可讀官方公告，不把 PV／MV／creditless 當作 full 或新錄音；缺口不在下一批整批重搜 |
| ヒムナル／渇望 Anime size | Qobuz 已明列ヒムナル Instrumental、渇望 Anime size ver.，保留精確平台與事實來源；尚缺第一方完整曲目證據，未將兩者加入已核對音源數。待唱片曲目表／官方平台說明再接錄音關係 |
| 渇望 CD 及後續版本 | 只按 avex 現行商品頁登記 AVCD-61717/B 第1／5軌；藝人初報曲序不同，其他版不推定同一曲序。Wind Orchestra Ver. 尚屬後續發行公告，待正式發行與最終曲目證據，未算已發行錄音 |
| `rilakkuma-ed-1` | 官網本次只明示「主題歌」及創作；ED 用途沿用既有核對，沒有宣稱本次官方重新證實 ED，也未新增 OP。待官方 OP／ED 用途或實際片尾證據再處理分類；官方影片確切形式仍缺 |
| 發行日期、其他版／平台 | リリテアの歌 的正版頁日期與動畫年份衝突，未採用 2025 日期；待唱片／平台更正。其 TV Size、各歌其他 CD／Album／OST、音源同一性與 ISRC 留待官方商品／識別資料，不猜造。不同版單曲、MV 音源及合輯曲目未自動合併；所有地區可用性未驗收 |

### 本機驗證與接續

- `npm test`：4 檔／5 項通過，涵蓋全目錄公開 parser、來源及錄音／發行引用。`npm run build`：160 檔 0 errors／warnings／hints、1,961 HTML、CSP／Service Worker／3,918 公開產物通過。本批未改 contract／UI／搜尋／播放器，沒有重跑第八批已通過的完整 6 條 E2E。
- 實際本機預覽：10 部／26 用途桌面 1536×1024、3 部手機 390×844 通過；核對創作、角色／TV／Instrumental、收錄、來源展開、THCA-60302 搜尋 5 首、IN／ED 篩選及舊歌曲錨點。無橫向溢出、空白頁、錯誤覆蓋層、app console error 或自動 YouTube request；外部海報攔截，未驗收外站播放。第一次自動權限審查逾時，未執行瀏覽器；工具允許的一次重試後通過。
- `npm run public:check`：239 個 repository 檔案通過；本文件 2 個本機 Markdown 連結及 `git diff --check` 通過。資料前後比對確認全部公開 ID 保留、作品 metadata／來源日期未重設，只有指定 9 個 seed 更新；第八批與其他 seed 保留。
- 預覽入口：[零的 TV／角色版與收錄](http://127.0.0.1:4338/anime/reincarnation-no-kaben/)、[天使更正歌曲與合輯](http://127.0.0.1:4338/anime/otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-2nd-season/)、[史萊姆劇中歌更正](http://127.0.0.1:4338/anime/tensei-shitara-slime-datta-ken-4th-season/)、[春季緊湊歌單](http://127.0.0.1:4338/seasons/2026-spring/)。本機 4338 的 CSP 與本次建置相同。
- 本輪沒有提交、推送、GitHub CI 或 Cloudflare 部署；既有未提交變更保留，production 仍是前次發布。下一批從春季 `curated-171110` 接續，僅按新證據及上列觸發條件回補缺口；2020–2026 深化與 2007–2026 整體目標均未完成。

The ninth batch covers 26 existing uses across 10 anime: 25 updated and one reused unchanged. It adds 72 creator-role credits, 13 recording variants, 12 distinct official YouTube links and 23 new release entities, reusing one existing single. Two overwritten song identities are corrected without changing public IDs. Local tests, build and representative browser flows pass; optional gaps remain listed above. No commit, push or deployment was performed.


## 2026-10-15 批次：2026-spring-credits-youtube-10

完成層次：10 部既有春季作品、30 筆既有用途深化，另新增《おねがいアイプリ》已公布的後期 OP／ED，共 32 筆用途。固定公開資料截止日為 2026-10-14，本次來源實際核對日期為 2026-10-15。26 筆分列作詞、作曲及編曲：23 筆有第一方逐角色證據，3 筆仍有交叉來源角色待第一方補證；另外 6 筆保留明確缺口。本批完成不表示 2020–2026 或 2007–2026 整體目標完成。

| 公開 theme ID | 歌曲 | 實際新增／更正 |
| --- | --- | --- |
| `honzuki-no-gekokujou-ryoushu-no-youjo-op-1` | Pages | TV Size、最終曲目表的三個 CD 版及 Digital Single；官方 MV；創作仍缺 |
| `honzuki-no-gekokujou-ryoushu-no-youjo-op-2` | Power of Love | 西野カナ原文；完整創作、官方 Art Track、Digital Single 及官方配信 |
| `honzuki-no-gekokujou-ryoushu-no-youjo-ed-1` | 今も、ありがとう | 完整創作；MV、Lyric Video、動畫版 Single 及配信 |
| `honzuki-no-gekokujou-ryoushu-no-youjo-ed-2` | Wanna me | 作詞／作曲第一方、編曲交叉核對；full、TV edit、Instrumental、兩個 CD 版及兩個 Digital Single |
| `mairimashita-iruma-kun-4-op-1` | 一二三 | 合署 songwriting／編曲及個別演唱交叉核對；6 位成員、Digital Single；未擅拆詞曲 |
| `mairimashita-iruma-kun-4-ed-1` | すーぱー優勝ちゅーーん！ | 原名、7 位成員、詞曲交叉核對；MV、三個 CD 收錄版；編曲仍缺 |
| `mairimashita-iruma-kun-4-ed-2` | リリス・カーペット | 原文曲名及問題児クラス名義；第7話演目補證，既有 ED 分類尚未重核 |
| `saikyou-no-shokugyou-wa-yuusha-demo-kenja-demo-naku-kanteishi-kari-rashii-desu-yo-op-1` | コンパスは透明 | F.M.F 第一方完整創作；既有官方影片沿用 |
| `saikyou-no-shokugyou-wa-yuusha-demo-kenja-demo-naku-kanteishi-kari-rashii-desu-yo-ed-1` | もーいーかい？ | 完整創作交叉核對、4 位成員；官方 MV、Digital Single |
| `yomi-no-tsugai-op-1` | 飛ぶ時 | 原名及完整創作；原演唱／yama 互唱、共用 Single、MV／Art Track |
| `yomi-no-tsugai-op-2` | back shot | 音田雅則原文及完整創作；原版 MV／Art Track、菅原圭翻唱及其各版本、Single 收錄 |
| `yomi-no-tsugai-ed-1` | 飛ぼうよ | 原名及完整創作；原演唱／Vaundy 互唱、共用 Single、官方 MV |
| `yomi-no-tsugai-ed-2` | 孔雀 | 原名及完整創作；full 官方音訊、Anime ver.／Instrumental／A cappella、無字幕 ED、CD／數位 Single |
| `akane-banashi-op-1` | 人誑し / ひとたらし | 完整創作、弦編曲；兩個 CD 版與 ED 共用收錄 |
| `akane-banashi-ed-1` | AKANE On My Mind～饅頭こわい | 完整創作、管編曲；兩個 CD 版與 OP 共用收錄 |
| `mao-op-1` | HEARTLOUD | 完整創作；既有無字幕 OP 補證、Digital Single 及配信 |
| `mao-op-2` | 僕らが上書きする世界 | 完整創作；既有無字幕 OP 補證、Digital Single 及配信 |
| `mao-ed-1` | 呪愛 | 完整創作；既有無字幕 ED 補證、Digital Single 及配信 |
| `mao-ed-2` | 揺蕩う | 完整創作及弦編曲；Instrumental、兩個 CD 版、既有無字幕 ED 補證 |
| `needy-girl-overdose-op-1` | INTERNET ANGEL | Aiobahn +81 發行名義與超てんちゃん（天城サリー）實際歌唱分開；完整創作及官方配信 |
| `needy-girl-overdose-ed-1` | れびてーしょん | 第一方作詞／作曲；編曲仍缺，既有官方影片沿用 |
| `needy-girl-overdose-ed-2` | INTERNET OVERDOSE (Anime version) | 還原 ED2 被覆蓋的曲名／發行名義與第3話用途；角色歌唱／創作交叉核對、Anime version 音源、正確 MV／配信 |
| `needy-girl-overdose-ed-3` | 罪と罰 | ED3 原名、角色／CV、完整創作及第5話用途；既有 MV 從錯置 ED2 移入正確用途 |
| `needy-girl-overdose-ed-4` | Galge | Aiobahn +81 發行名義、KOTOKO 實際歌唱、完整創作；第13話用途及官方 MV |
| `kanan-sama-wa-akumade-choroi-op-1` | 初恋モーメント | Faulieu. 原文名義、完整創作；Digital Single、藝人 Album MiX 的兩個 CD 版收錄 |
| `kanan-sama-wa-akumade-choroi-ed-1` | ポップ・スナック・ジャンクなHUNNY | 完整創作；官方 MV、既有無字幕 ED 補證、Digital Single 及配信 |
| `kami-no-niwatsuki-kusunoki-tei-op-1` | 驚きの子 | 完整創作；Instrumental、兩個 CD 版、官方 MV 及配信 |
| `kami-no-niwatsuki-kusunoki-tei-ed-1` | うたまひ | Utamai 原文羅馬字標示及官方 Lyric Video；創作與發行品仍待補 |
| `onegai-aipri-op-1` | おねがいアイプリ！ | 第一方完整創作；既有原文名義與影片沿用 |
| `onegai-aipri-op-2` | かなえてキセキのエール！ | 新增後期 OP2；曲名、演唱、完整創作及第一方／交叉來源 |
| `onegai-aipri-ed-1` | 放課後のおねがい！ | 第一方完整創作；既有原文名義與影片沿用 |
| `onegai-aipri-ed-2` | おねがいテレパシー | 新增後期 ED2；曲名、演唱、完整創作及第一方／交叉來源 |

已處理 anime ID：`curated-171110`、`curated-184492`、`curated-200769`、`curated-195600`、`curated-196935`、`curated-196012`、`curated-202102`、`curated-190704`、`curated-196029`、`curated-206523`。

### 實際差異與關係

- 新增動畫 0、用途 2，深化既有用途 30，登記歌曲 ID 32；沒有把 MV、互唱、TV 剪輯或其他發行版計為新歌曲。所有既有 theme ID、動畫 slug、用途序號及頁內錨點保留。
- 新增 100 筆創作角色：33 作詞、31 作曲、34 編曲、2 合署 songwriting；88 筆由第一方支持，12 筆為明確標示的交叉核對。另新增 17 筆團隊成員、3 筆弦／管編曲補充角色；新增 13 筆演唱 credit、移除 10 筆被正確原文或實際演唱者取代的 credit，全部 credits 淨增 123。團隊成員不自動視為本曲演唱者。
- 新增 19 個音源版本：14 演唱版、5 Instrumental。其中長度明示 full 2、TV 2、short 1，其餘 14 保留 unknown。互唱、翻唱與 A cappella 按實際演唱或官方版本名保存，不推定重新編曲；「孔雀 (Anime ver.)」沒有擅自分類 TV。Pages 的 Lead Off 僅保存確切曲目名稱，尚未猜定錄音類型。
- 新增 34 個不同發行 ID：32 Single、2 藝人 Album 版；19 CD 版、15 數位版。共 41 組歌曲收錄關係，《飛ぶ時/飛ぼうよ》、《孔雀》及《人誑し / ひとたらし》的跨歌收錄共用發行 ID。只保存相關歌曲曲目；CD 與數位版未確認同一錄音時不填 `recordingId`。不同影片及發行版沒有自動合併成相同錄音。
- 新增 18 個不同官方 YouTube URL：11 MV、3 Art Track、2 Lyric Video、1 Official Audio、1 無字幕 ED。另將「罪と罰」原有 MV 移到正確 ED3，合計新增 19 組用途／影片外連關係、移除 1 組錯置關係；5 個原有入口補上確切形式（MAO 4、カナン ED 1）。沒有生成新頻道或嵌入可用性 metadata；既有影片 metadata 沿用。
- 平台外連新增 46 筆：19 YouTube、25 官方配信／CD 入口、2 隨新增用途生成的既有作品官網入口；移除錯置 YouTube 1 筆、更新命名外連 5 筆。這是平台出現及用途關係數，不是歌曲或專輯數。所有新增入口的地區播放／購買可用性均為 unknown。
- 新增公開來源 75 筆、移除錯置於 ED2 的 YouTube 來源 1 筆，新增欄位證據 211 組。所有未重新查閱的既有歌曲來源日期保留，沒有整批重設日期。10 部作品的 metadata、圖像、識別、播出來源及 2026-07-25 日期不變；只有派生的主題曲數與官方影片存在旗標隨資料更新。
- NEEDY ED2 原本被 ED3 的「罪と罰」覆蓋；依動畫官方第3／5話公告分別還原為「INTERNET OVERDOSE (Anime version)」及「罪と罰」，不刪除或合併 ID。ED4 的發行藝人名義為 Aiobahn +81，實際歌唱另記 KOTOKO；OP 也沒有把製作人 Aiobahn +81 當成演唱者。
- 全目錄為 28 季、1,917 個動畫頁、4,243 筆用途（4,241 OP／ED＋2 IN）；2020–2026 為 1,808 個唯一作品、3,979 筆用途（3,977 OP／ED＋2 IN）。本批兩個後期用途放在既有動畫頁，沒有新增季度快照或宣稱秋季核心漏季已補齊。

### 待補資訊與續查條件

| 公開 ID／欄位 | 保留缺口與續查條件 |
| --- | --- |
| `honzuki-no-gekokujou-ryoushu-no-youjo-op-1` 創作／團隊 | 有界查找尚未取得可採用的逐項製作名單；待 Sony Music 曲目 credits、CoWRITE 明列本曲的作品表或正版平台製作者名單。最終 CD 曲目表已核對，不必重查曲序 |
| `mairimashita-iruma-kun-4-op-1` 詞曲細分／第一方創作 | Shazam 只明列兩人 songwriting，保存合署而不拆作詞／作曲；編曲及兩位實際歌唱亦為交叉資料。待 Victor／藝人逐角色名單；6 位成員已有動畫官網證據 |
| `mairimashita-iruma-kun-4-ed-1` 編曲／第一方詞曲 | 目前僅採 JOYSOUND 的 NOBE 作詞、michitomo 作曲；不從其他歌曲或未核實轉貼推定編曲。待官方 CD credits 或創作者本曲實績 |
| `mairimashita-iruma-kun-4-ed-2` 分類／創作／個別演唱 | 第7話官方頁只證實問題児クラス的演目與原文；既有 ED 分類尚未取得明確再確認，不新增本次 anime_use 證據，也不自行改成 IN。待官方播出片尾標示、主題曲公告或商品用途註記，再判斷保留 ED 或按原 ID 更正分類；逐角色創作及個別演唱仍待補 |
| `needy-girl-overdose-ed-1` 編曲 | 動畫 MUSIC 明列作詞／作曲，沒有明列編曲；待 Echoes／藝人或本曲正式製作名單 |
| `kami-no-niwatsuki-kusunoki-tei-ed-1` 創作／發行品 | 官方動畫、影片與唱片公司項目及交叉報導已支持 Lyric Video；本批沒有採用僅歌詞轉載頁的創作資料。待 JYOCHO／唱片公司的本曲 credits、專輯曲序及品番，不從團隊簡介推定 |
| `honzuki-no-gekokujou-ryoushu-no-youjo-ed-2`、`saikyou-no-shokugyou-wa-yuusha-demo-kenja-demo-naku-kanteishi-kari-rashii-desu-yo-ed-1`、`needy-girl-overdose-ed-2` 第一方補證 | 分別有 Yaffle 編曲、ひとしずく×やま△ 三角色、Anime version 三角色及歌唱的交叉名單；待官方逐項 credits，現有欄位及來源角色清楚保留，不把交叉證據說成第一方 |
| 後期 `onegai-aipri-op-2`／`onegai-aipri-ed-2` 等官方影片 | 新用途的確切官方影片入口仍缺；其餘歌曲的 MV、Art Track、creditless、lyric／live 亦未全面齊備。待動畫／唱片／藝人提供可核對的 exact URL 或新公告，不輪流重搜全部舊來源 |
| 音源同一性／長度 | 14 個版本長度 unknown；Anime ver. 不自動代表 TV，MV 不自動代表 full。Pages Lead Off 的實際音源類型、各 CD／數位／MV 的相同錄音及 ISRC 待官方版本說明或可比對識別資料 |
| NEEDY 商品與其他收錄 | 官網已明列 CD 品番 SVWC-70781／SVWC-70790、標題及日期，但商品類型與部分發行藝人名義尚未充分確認，因此未猜造結構化 release。待 Aniplex 商品頁明示 Single／EP／Album 等品類及正式名義；其他藝人 Album／OST／合輯只在具體曲目證據出現後接入 |
| 正版平台／影片 metadata | 本批以官方 smart link 與外連為主，尚未深化所有 Apple Music／Spotify 等實際目的曲目。頻道、嵌入及地區可用性未核對的欄位保持未知；後續只查目的頁恢復、官方新外連或明確平台核對任務 |

來源讀取不完整時只採用可檢查的公開索引事實並在來源名稱標明；沒有繞過來源限制、下載歌曲／影片、保存頁面副本或將未審閱候選加入公開資料。上表為下一次的具體觸發條件，無新證據不重查整批。

### 本機檢查與展示

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個核心測試通過；包括全目錄公開契約與關係。未修改測試或正常程式遷就資料 |
| `npm run build` | 通過；160 個檔案 0 errors／warnings／hints，1,961 HTML、CSP（6 script／10 style hashes）、Service Worker 及 3,918 公開產物檢查通過 |
| 桌面實際預覽 | 1536×1024；10 部／32 筆用途的曲名、credits、公開 JSON 與實際頁面一致，無空白頁、錯誤覆蓋層或 app errors |
| 閱讀流程 | 新 OP2 搜尋 → 原動畫頁全部 4 首 → 後期 ED2 創作；VVCV-18 搜尋 → 兩首相應歌曲 → 互唱／版本／收錄／欄位證據；NEEDY ED2／ED3 更正與原錨點；Honzuki full／TV／Instrumental 及最終 CD 品番，均通過 |
| 手機實際預覽 | 390×844；Honzuki、NEEDY、黄泉のツガイ、アイプリ 4 部無橫向溢出，代表截圖可讀；app errors 0、自動 YouTube 請求 0。外部圖片與平台請求攔截，不將第三方播放算作通過 |
| 文件／公開邊界 | 文件相對連結 2 個、`git diff --check` 通過；`npm run public:check` 通過（239 個 repository 檔案）；先前未提交變更保留，其他春季 seed 未改 |

Browser plugin／browser skill 未提供，沿用 Playwright。首次暫存預覽腳本把歌單導覽誤設為自動帶歌曲錨點；核對既有契約後只修正腳本，動畫頁仍顯示全部歌曲。資料修訂後的最後一版重新通過相同流程；沒有修改產品程式或降低 gate。本批只改資料及 checkpoint，未變更季度 registry、contract、搜尋／UI／播放器，依矩陣未重跑全套 E2E；第八批結果僅為歷史證據。

預覽入口：`/anime/honzuki-no-gekokujou-ryoushu-no-youjo/`、`/anime/yomi-no-tsugai/`、`/anime/needy-girl-overdose/`、`/anime/onegai-aipri/`、`/songs/`。歌單保持每用途一列，錄音與發行版不額外增加列數。

本批收尾時的接點為 **2026-spring-credits-youtube-11**，由 `curated-177634`／`diamond-no-ace-act-ii-second-season-op-1` 接續；依 seed 順序接 `curated-197868`、`curated-178749`、`curated-179813`、`curated-201090`、`curated-202523`、`curated-192808`、`curated-197824`、`curated-147105`、`curated-189987`，10 部／21 筆既有用途。後續成果見下方第十一批；前批的有效證據直接沿用。

本批只完成本機資料、公開 JSON 與展示驗證；未提交、推送或部署，CI／Cloudflare preview／production 均未重新驗收。後續從此 checkpoint 接續。

## 2026-10-15 批次：2026-spring-credits-youtube-11

完成層次：10 部既有春季作品、21 筆既有用途深化，另新增 GLAY 的第2季度 OP 及《魔法の姉妹ルルットリリィ》的第2季度 OP／ED，共 24 筆用途。固定資料截止日維持 2026-10-14，實際來源核對日期為 2026-10-15。22 筆分列作詞、作曲及編曲，其中 14 筆三角色均有第一方證據，8 筆含交叉補證；另 2 筆保留合署 songwriting 與未明編曲。這是本批深化完成，2020–2026 及 2007–2026 目標仍未完成。

| 公開 theme ID | 歌曲 | 實際新增／更正 |
| --- | --- | --- |
| `diamond-no-ace-act-ii-second-season-op-1` | Let’s Go Crazy | 第一方完整創作；官方 MV、Anime MV 及配信入口 |
| `diamond-no-ace-act-ii-second-season-ed-1` | NUMBER | 完整創作交叉補證；Digital Single、11 個 CD 發行版及共同 Track 2 |
| `diamond-no-ace-act-ii-second-season-op-2` | NEVER SAY NEVER AGAIN | 新增後期 OP2；TERU 詞曲、編曲交叉補證；汚れた英雄 的三個 CD 版 Track 2 |
| `maid-san-wa-taberu-dake-op-1` | リボン | 完整創作；full／TV size 音源、各自數位發行與官方入口、MV |
| `maid-san-wa-taberu-dake-ed-1` | しあわせフレーバー | 完整創作、MV、Digital Single、三個 CD 發行版 |
| `mahou-no-shimai-luluttolilly-op-1` | Bubee | 合署 songwriting、noa 明列作詞、5 位成員及製作／背景演唱；韓語版／TV size、兩個 Art Track、Anime MV、Single／OST 收錄 |
| `mahou-no-shimai-luluttolilly-ed-1` | Calling | 完整創作及兩位角色／CV 演唱；Off Vocal、Digital Single、共用 OST 曲序與品番 |
| `mahou-no-shimai-luluttolilly-op-2` | Swingin' Magic | 新增後期 OP2；合署 songwriting 交叉補證、岡嶋かな多詞曲、兩位 Producer；韓語版 Single 曲目、無字幕 OP |
| `mahou-no-shimai-luluttolilly-ed-2` | どりぃむアラモード | 新增後期 ED2；兩位角色／CV、詞曲編及弦編曲；姓名分隔交叉補證、無字幕 ED |
| `niwatori-fighter-op-1` | What's a Hero? | 作詞／作曲／編曲交叉補證；保留第一方核心與既有官方影片，姓名衝突列入續查 |
| `niwatori-fighter-ed-1` | We're Loose Stars | 完整創作交叉補證；既有演唱原文及官方影片沿用 |
| `ghost-concert-missing-songs-op-1` | 業魂REQUIEMER | 演唱者誤植「藤寺美穂」更正為「藤寺美徳」；完整創作、TV Size、兩個數位 Single 與各自配信 |
| `ghost-concert-missing-songs-ed-1` | 茨の道 | 正確角色／CV、完整創作、Digital Single 及配信 |
| `marika-chan-no-koukando-wa-bukkowareteiru-ed-1` | はかりたい好感度 | 原名、千歳茉莉花／内田真礼演唱、完整創作及監修；官網僅稱主題歌，既有 ED 分類未新增用途證據 |
| `jishou-akuyaku-reijou-na-konyakusha-no-kansatsu-kiroku-op-1` | ラフレア | 完整創作、演奏／和聲、MV／Art Track、Digital Single 及兩個 Mini Album CD 版 |
| `jishou-akuyaku-reijou-na-konyakusha-no-kansatsu-kiroku-ed-1` | Magic | 第一方完整創作；既有官方影片沿用 |
| `isekai-nonbiri-nouka-2-op-1` | It’s a beautiful story | 正確角色／CV 分列、金崎真士完整創作、CD Single |
| `isekai-nonbiri-nouka-2-ed-1` | Sunny Steps | 錦織孝宏完整創作、CD Single；既有官方影片沿用 |
| `tongari-boushi-no-atelier-op-1` | 風のアンセム feat. suis from ヨルシカ | Eve／suis 演唱分列；詞曲、兩位編曲第一方及 Ryo Konishi 拼寫交叉補證；Digital Single／配信 |
| `tongari-boushi-no-atelier-ed-1` | ただ美しい呪い | 完整創作／Art Track；原版及 Anime ver.、CD／Digital Single 收錄 |
| `tongari-boushi-no-atelier-ed-2` | 夜に浮かぶ | 原文、完整創作／Art Track；原版及 Anime ver.、共用 CD／Digital Single 收錄 |
| `tongari-boushi-no-atelier-ed-3` | 光り | 依官方更正原名及舊 override；創作交叉補證、原版／Anime ver.、共用 CD 收錄 |
| `ponkotsu-fuuki-iin-to-skirt-take-ga-futekisetsu-na-jk-no-hanashi-op-1` | ヒトリゴト | 作詞／編曲、4 位成員；作曲及個別演唱交叉補證、Digital Single、既有無字幕 OP 補證 |
| `ponkotsu-fuuki-iin-to-skirt-take-ga-futekisetsu-na-jk-no-hanashi-ed-1` | 部屋とガラクタと私 | 完整創作、2 位已核對成員、Digital Single／1st EP 收錄及既有無字幕 ED 補證 |

已處理 anime ID：`curated-177634`、`curated-197868`、`curated-178749`、`curated-179813`、`curated-201090`、`curated-202523`、`curated-192808`、`curated-197824`、`curated-147105`、`curated-189987`。

### 實際差異與關係

- 新增動畫 0、用途 3，深化既有用途 21，登記穩定歌曲 ID 24。3 筆新用途各有第一方與交叉來源，使用 explicit 來源模式；沒有繼承舊歌曲的影片或日期。既有 theme ID、slug、序號、舊影片 URL 與錨點全部保留。
- 新增 94 筆創作角色：29 作詞、27 作曲、30 編曲、8 合署 songwriting。另新增 11 筆團隊成員、14 筆製作／演奏／和聲／監修等補充角色；新增 13 筆演唱 credit、移除 6 筆被正確原文或分列演唱者取代的 credit，全部 credits 淨增 126。成員不自動代表本曲歌唱。
- 新增 13 個音源項目：12 演唱版、1 Off Vocal；其中 full 1、TV size 3、長度 unknown 9。包括 Bubee／Swingin' Magic 的兩個韓語版及三首 ED 的 Anime ver.；語言版與影片不計為新歌曲。Anime ver. 的長度保持未知，沒有把無字幕映像視為新錄音。
- 新增 41 個不同發行 ID：37 Single、2 Album、1 EP、1 OST；24 CD 版、17 數位版，共 44 組用途收錄關係。三首《とんがり帽子のアトリエ》ED 共用 `CTCM-65137`，Bubee／Calling 共用 `LACA-19172〜3`。SUPER★DRAGON 的 9 個成員封面版及兩個通常版共用已明示的 NUMBER Track 2，不另造錄音。Mini Album 的曲序未定時不填 position；未知 CD／數位音源同一性時不填 recordingId。
- 新增 13 個不同官方 YouTube URL：4 藝人 MV、2 Anime MV、5 Art Track、1 無字幕 OP、1 無字幕 ED；另為ポンスカ的 2 個既有影片補正形式標籤。沒有新增未知頻道或嵌入 metadata。新增平台外連共 33 筆：13 YouTube、17 官方配信／購買入口、3 隨新用途生成的既有動畫官網入口；更新既有影片入口 2 筆，未移除外連。
- 新增公開來源 66 筆、欄位證據 174 組；沿用來源 0 筆整批改日期，未移除來源。10 部動畫的 metadata、圖像、識別、播出來源及原 2026-07-25 日期保留，只有新增用途派生的 OP／ED 數量改變。
- 全目錄為 28 季、1,917 動畫頁、4,246 筆用途（4,244 OP／ED＋2 IN）；2020–2026 為 1,808 個唯一作品、3,982 筆用途（3,980 OP／ED＋2 IN）。新後期用途放在既有動畫頁，沒有新增秋季 registry 或宣稱漏季已補齊。

### 待補資訊與續查條件

| 公開 ID／欄位 | 保留缺口與續查條件 |
| --- | --- |
| `mahou-no-shimai-luluttolilly-op-1`／`op-2` 詞曲細分、編曲 | Bubee 保存 5 位合署 songwriting 及第一方單列 noa 作詞；Swingin' Magic 保存 3 位合署 songwriting 交叉資料及第一方岡嶋かな多詞曲。Producer／Programmer 不推定編曲，也不自行合併英日姓名別名。待 BELIFT／藝人或唱片正式逐角色製作名單 |
| `diamond-no-ace-act-ii-second-season-ed-1`／`op-2`、`niwatori-fighter-op-1`／`ed-1` 第一方創作 | NUMBER 三角色、GLAY 編曲、ニワトリ兩首三角色目前含明確交叉名單。待藝人／唱片本曲 credits；動畫官網 403／robots 限制未繞過，既有核心及官方影片沿用 |
| `niwatori-fighter-op-1` 姓名、音源及 OST | JOYSOUND／Shazam 為「0C」，社群索引為「OC」；本次按前兩者保存，不猜定等同。作曲「高橋浩一郎」與編曲「Takahashi Koichiro」也未建立別名關係。OST 的 full／instrumental 曲目及原始 2025 Single 尚待具體第一方版本／曲目表，再結構化錄音與收錄；不把 2026 動畫首播當歌曲首發 |
| `tongari-boushi-no-atelier-op-1`／`ed-3` 第一方補證 | 官網寫 Ryo Konish，交叉 staff list 為 Ryo Konishi，本次保存後者並保留來源差異；光り 的三角色為交叉資料。待官方更正或本曲正式製作名單。官方 CD 曲目已支持原名「光り」，舊 override 同步修正，不再輸出「光」 |
| `ponkotsu-fuuki-iin-to-skirt-take-ga-futekisetsu-na-jk-no-hanashi-op-1` 作曲／演唱 | 官網有「作詞・編曲：山口ケンタ」且另列 osage／花井諒編曲；作曲及本曲山口演唱另用 Shazam 交叉補證。待藝人／Sony 本曲正式 credits；不從 4 位成員推定所有人演唱 |
| `mahou-no-shimai-luluttolilly-ed-2` 姓名分隔／編曲 | 官網把兩位作曲者連寫為「今村左悶今村淳平」，JOYSOUND 分列姓名，作曲保存交叉補證；兩位編曲使用官方角色與交叉姓名共同支持。待正式曲目 credits 或官網標點更正，不把連寫字串造為一個新人物 |
| `marika-chan-no-koukando-wa-bukkowareteiru-ed-1` 分類、影片及平台 | 官網只稱「主題歌」，本次不新增 ED 用途證據；原名與角色歌唱已補。官網 YouTube Music 等部分按鈕僅到平台首頁，未冒充確切曲目；未確認供應方關係的 Topic 也未採用。待片尾用途標示、官方 exact URL／商品與供應方證據 |
| Diamond 後期 ED、新用途及其他官方影片形式 | OxT 有第2季度 ED 擔當公告，兩輪未取得可採用曲名，未新增未命名用途。GLAY OP2 的確切官方影片、Magic／ポンスカ等更多 MV、各曲 lyric／live／Art Track 仍未齊。待官方標題／新影片公告、目的頁恢復或確切外連，不重搜全部舊影片 |
| 發行品及版本 | ラフレア Mini Album 曲序、異世界のんびり農家2 的角色 solo／ED TV size 對應 OST、ルルットリリィ 後期數位發行與 Song Collection&Soundtrack2 最終曲目，以及其餘藝人 Album／OST 收錄尚待明確第一方曲目／正式發行。不要從一般 OST 商品名、錄音技法或同名曲推定音源關係 |
| 平台、metadata 及可用性 | 本批以已核對官方 smart link 為主，沒有普遍補到 Apple Music／Spotify 等目的曲目；各 CD／數位／影片的 ISRC、同一錄音及嵌入／HK／TW 可用性仍未知。待具體識別資料或平台核對任務；本機畫面通過不代表外部平台可播放 |

缺口採有界查找；讀取限制或兩輪無結果後保留上述觸發條件，繼續下一首。只採用公開必要事實，沒有保存歌曲、影片、完整歌詞、原始頁面或未審閱候選；有交叉補證的角色沒有宣稱為全部第一方。

### 本機檢查與展示

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個核心測試通過，涵蓋全目錄公開契約及關係；未修改測試 |
| `npm run build` | 160 個檔案 0 errors／warnings／hints；1,961 HTML、CSP（6 script／10 style hashes）、Service Worker 與 3,918 公開產物檢查通過 |
| 桌面實際預覽 | 1536×1024；10 部／24 筆用途的曲名、全部 credits 及公開 JSON 與動畫頁一致，沒有空白頁、框架錯誤覆蓋層或 app errors |
| 搜尋／閱讀流程 | 新 GLAY OP2 搜尋 → 原動畫頁全部 3 首／CD 版；新どりぃむアラモード搜尋 → 同頁 4 首／兩位角色／韓語版／TV size／共用 OST／欄位證據；リボン full／TV 配信及 Ghost 正確 CV、光り／Anime ver.，均通過 |
| 手機實際預覽 | 390×844；ルルットリリィ、メイ食べ、とんがり、ダイヤのA 4 部沒有橫向溢出，代表桌面／手機截圖可讀；app errors 0、自動 YouTube 請求 0，外部請求攔截，未實測第三方播放 |
| 文件／公開邊界 | checkpoint 相對連結 2 個與 `git diff --check` 通過；`npm run public:check` 通過（239 個 repository 檔案）。來源、欄位證據與實際新增數量已對照公開 JSON |

Browser plugin／browser skill 未提供，沿用 Playwright；本批只改資料及 checkpoint，未改 registry、contract、搜尋、UI 或播放器行為，依矩陣未另跑全套 E2E、依賴稽核或 Cloudflare dry-run。既有未提交變更保留；本批只更新 10 部 spring seed 及光り 的原名 override，其餘 spring seed 逐行一致。

預覽入口：`/anime/mahou-no-shimai-luluttolilly/`、`/anime/maid-san-wa-taberu-dake/`、`/anime/tongari-boushi-no-atelier/`、`/anime/diamond-no-ace-act-ii-second-season/`、`/songs/`。錄音及發行版不增加歌單列數。

本批收尾時的接點為 **2026-spring-credits-youtube-12**，從 `curated-206914`／`nippon-sangoku-op-1` 接續，依 seed 順序為 `curated-197754`、`curated-207675`、`curated-195268`、`curated-199547`、`curated-169580`、`curated-186744`、`curated-158036`、`curated-202985`、`curated-206951`，共 10 部／21 筆既有用途。後續成果見下方第十二批。

本批完成本機資料、公開 JSON 與展示驗證；未提交、推送或部署，CI／Cloudflare preview／production 未重新驗收。從上述已處理 ID 與下一批接點接續，不將一批完成當整體目標完成。

The eleventh batch deepens 21 existing uses and adds three second-cour uses across ten anime. It adds 94 creator-role credits, 13 recording items, 41 release entities and 13 distinct official YouTube URLs. Local tests, build and desktop/mobile reading flows pass. Cross-check credits and unresolved fields remain explicitly listed; the broader goal is active and no commit, push or deployment was performed.

## 2026-10-15 批次：2026-spring-credits-youtube-12

完成層次：春季 10 部、21 筆既有 OP／ED 用途深化，沒有新增動畫或用途。19 筆分列作詞、作曲及編曲：16 筆三角色均有第一方證據，3 筆含交叉補證；其餘 2 筆仍缺編曲。固定資料截止日為 2026-10-14，本次實際查閱日期為 2026-10-15。這是本批有界深化完成，2020–2026 與 2007–2026 整體目標仍未完成。

| 公開 theme ID | 歌曲 | 實際新增／更正 |
| --- | --- | --- |
| `nippon-sangoku-op-1` | 火種 | Tatsuya Kitani 完整創作；Apple Music 確切曲目及 HIDANE 原名對應交叉補證 |
| `nippon-sangoku-ed-1` | 誓い | Leina 詞曲、oni 編曲；既有官方影片沿用 |
| `liar-game-op-1` | あぶく | n-buna 完整創作、suis 實際演唱與 2 位成員；官方 MV、Digital Single／配信 |
| `liar-game-op-2` | All in | 內田怜央／Kroi 詞曲交叉補證；官方 MV、官方 OP 映像／配信；編曲仍缺 |
| `liar-game-ed-1` | 朝日 | 熊木幸丸／Lucky Kilimanjaro 詞曲交叉補證及官方配信；編曲仍缺 |
| `liar-game-ed-2` | たりない | 原文曲名取代 Tarinai，保留羅馬字；完整創作、3 位成員、官方 MV／ED 映像、Digital Single／配信 |
| `hyakki-yakou-shou-ed-1` | 何にもなれない | かやゆー詞曲、ヤングスキニー編曲；Speedstar 確切數位商品入口；沒有採用尚缺渠道補證的影片 |
| `higeki-no-genkyou-to-naru-saikyou-gedou-last-boss-joou-wa-tami-no-tame-ni-tsukushimasu-sea-op-1` | エゴ | 涼音詞曲、レトロリロン編曲及官方 MV |
| `higeki-no-genkyou-to-naru-saikyou-gedou-last-boss-joou-wa-tami-no-tame-ni-tsukushimasu-sea-ed-1` | たられば | はる詞曲、ガラクタ編曲及官方 MV |
| `marriagetoxin-op-1` | Kill or Kiss | 完整創作、官方 MV；藝人 Album 無表情な表情 三個 CD 版及官方入口 |
| `marriagetoxin-ed-1` | シャケナベイベー | AKASAKI／DAIKI 創作、Digital Single／配信、Collab MV；既有無字幕 ED 形式補證 |
| `class-de-2-banme-ni-kawaii-onnanoko-to-tomodachi-ni-natta-op-1` | サブマリンユース | 第一方詞曲原文 Masahiro Hirabe、兩位編曲交叉補證；MV／Art Track、Digital Single 品番 |
| `class-de-2-banme-ni-kawaii-onnanoko-to-tomodachi-ni-natta-ed-1` | ずっと１番にしてね | 完整創作及製作／演奏；MV、Official Audio、Digital Single，發行日期未推定 |
| `replica-datte-koi-wo-suru-op-1` | リフレイン | 完整創作、3 位成員；原版／Instrumental、兩個 CD 版及曲序、Digital Single／配信／CD 購買 |
| `replica-datte-koi-wo-suru-ed-1` | あわ | ⌘ハイノミ完整創作；官方 MV、期間生產限定 CD Single Track 1 及購買入口 |
| `hidarikiki-no-eren-op-1` | FUNKIN’ BEAUTIFUL feat. ZORN | LEO／ZORN 作詞、LEO 作曲、ALI／村田陽一編曲；既有官方影片沿用 |
| `hidarikiki-no-eren-ed-1` | New Walk | 完整創作及 3 位演奏者交叉補證；官方 MV、Digital Single 與 Qobuz 確切發行品 |
| `tadaima-ojamasaremasu-op-1` | C'est la vie | 藤原優樹／平田祥一郎完整創作及 Guitar；本曲與ガチ夢中！兩個數位 Single 收錄、各自 Art Track |
| `tadaima-ojamasaremasu-ed-1` | さんかくゲーム | 原文演唱名義『ユイカ』取代『Yuika』；完整創作、Digital Single 及配信 |
| `megami-isekai-tensei-nani-ni-naritai-desu-ka-ore-yuusha-no-rokkotsu-de-op-1` | 転生願望 | 集體詞曲、編曲交叉補證、4 位成員與休止成員說明；MV、數位 Single／CD EP、TV size 平台曲目與曲序 |
| `megami-isekai-tensei-nani-ni-naritai-desu-ka-ore-yuusha-no-rokkotsu-de-ed-1` | 何なんですか？ | lia 詞曲與實際歌唱、江口亮編曲；官方 MV、Digital Single 及配信 |

已處理 anime ID：`curated-206914`、`curated-197754`、`curated-207675`、`curated-195268`、`curated-199547`、`curated-169580`、`curated-186744`、`curated-158036`、`curated-202985`、`curated-206951`。所有既有 ID、slug、用途序號、影片 URL 與錨點保留。

### 實際差異與關係

- 深化 21 筆既有用途，登記 21 個穩定歌曲 ID；動畫、用途、季度數均未增加。原名更正 1 筆（たりない），原文演唱名義更正 1 筆（『ユイカ』）。沒有把同曲的兩個 Art Track 算為不同歌曲或錄音。
- 新增 70 筆創作角色：22 作詞、23 作曲、25 編曲，其中第一方支持 60 筆、交叉補證 10 筆。另新增 12 筆團隊成員、8 筆演奏／製作及休止狀態補充角色；3 筆舊合稱演唱列換為 suis、lia 及『ユイカ』，新增 3／移除 3，全部 credits 淨增 90。團隊成員不自動視為本曲歌唱者。
- 新增「リフレイン」原版及 Instrumental 共 2 個錄音項目，兩者長度分類均為 unknown；沒有由片長或 MV 推定 full／TV。數位先行版與 CD 錄音同一性未確認，只有已明示的 CD 曲目連到 recordingId。
- 新增 19 個發行 ID／收錄關係：15 Single、3 Album 發行版、1 EP；7 CD 版、12 數位版。無表情な表情 三版共用已確認本曲收錄，沒有推定未明曲序。リフレイン 兩個 CD 版明示共通 Track 1／3；轉生願望 的數位版與 CD EP 分開，TV size 僅保存正版平台已明示的曲目，未造第一方錄音證據。コレサワ Single 的日期留空，未拿影片上架日代替發行日。
- 新增 19 個不同官方 YouTube URL：12 藝人 MV、1 Collab MV、3 Art Track、1 Official Audio、1 官方 OP 映像、1 官方 ED 映像。另為原有 AKASAKI 影片補上「無字幕 ED」標籤。Kroi、New Walk、転生願望 的官方影片項目與確切 URL 分別保留第一方及交叉證據，沒有猜造頻道或嵌入 metadata。
- 平台新增 35 筆外連：19 YouTube、12 官方入口、Apple Music／Qobuz／OTOTOY／Amazon Music 各 1 個確切曲目或發行品入口；更新既有外連 1 筆，未移除外連。未核對的 HK／TW／嵌入及區域播放／購買可用性保持 unknown。
- 新增公開來源 56 筆，實際查閱後更新既有歌曲來源 5 筆：百鬼夜行抄 1、ラス為 2、エレン 2；新增欄位證據 132 組。全部 10 部動畫的非歌曲欄位與 metadata／圖像／播出／識別來源逐項相同；百鬼夜行抄 的 metadata 日期仍為 2026-08-02，其餘 9 部維持 2026-07-25。
- 全目錄仍為 28 季、1,917 動畫頁、4,246 筆用途（4,244 OP／ED＋2 IN）；2020–2026 仍為 1,808 個唯一作品、3,982 筆用途（3,980 OP／ED＋2 IN）。沒有新增秋季 registry 或宣稱核心漏季已補齊。

### 待補資訊與續查條件

| 公開 ID／欄位 | 保留缺口與續查條件 |
| --- | --- |
| `liar-game-op-2`／`liar-game-ed-1` 編曲及第一方詞曲 | 分別保存内田怜央／Kroi、熊木幸丸／Lucky Kilimanjaro 的交叉詞曲，沒有從集體創作或樂團演奏推定編曲。待 IRORI／Dreamusic、藝人本曲製作名單或正式商品 credits |
| `class-de-2-banme-ni-kawaii-onnanoko-to-tomodachi-ni-natta-op-1`、`hidarikiki-no-eren-ed-1`、`megami-isekai-tensei-nani-ni-naritai-desu-ka-ore-yuusha-no-rokkotsu-de-op-1` 第一方補證 | 分別為 reGretGirl／重永亮介編曲、New Walk 三角色／演奏、終活クラブ編曲的交叉欄位。待藝人／唱片或創作者明列本曲的逐角色資料；一般「自行詞曲編」簡介不當作特定歌曲證據 |
| `megami-isekai-tensei-nani-ni-naritai-desu-ka-ore-yuusha-no-rokkotsu-de-op-1` TV size 錄音 | OTOTOY／Qobuz 明列 TV size 及數位曲序，Amazon Music 確切曲目已接入；動畫官網只支持本曲與發行日期。待 VAP／藝人明示版本或識別資料後建立錄音，不把跨來源支持說成第一方已證實全部版本 |
| 音源同一性／不同形式 | リフレイン 原版與 Instrumental 長度均未分類；CD、數位版、MV 及各 Art Track 同一錄音／ISRC 待具體證據。C'est la vie 兩個 Art Track 來自本曲 Single 與ガチ夢中！數位版，不新增歌曲或自動建立兩個錄音 |
| 火種／誓い／何にもなれない 等更多官方影片 | 已查的 MV／官方商品線索仍缺可完整核對的渠道與 exact URL 關係；保留既有官方影片或商品入口，未加入未審閱候選。更多 lyric／live／MV／Art Track 未全面齊備；待官方新外連、目的頁恢復或可核對的渠道證據，不重搜全部舊連結 |
| `tadaima-ojamasaremasu-ed-1` 原名與影片 | 『ユイカ』原文、創作及配信已補，完整 MV／其他形式的 exact URL 尚缺；本次未把 MV teaser 當完整 MV。待藝人／Universal 可核對的直接影片入口 |
| 發行品日期／曲序／媒體 | コレサワ Digital Single 日期未採影片日期推定；平手友梨奈 Album 曲序、超特急 ガチ夢中！實體版品番／曲序及其他藝人 Album／OST／合輯仍待官方最終清單。百鬼夜行抄、Leina 等商品資訊未充分讀取，沒有僅靠頁名猜造 release 類型；數位與實體日期不混用 |
| 個別演唱／成員 | suis、lia 已有本曲或正式名義支持；其他團隊成員仍只表示成員身分。終活クラブ 的イシダヒロキ依來源另記休止狀態，未列為本曲演唱。待逐曲演唱／演奏名單才補個別參與 |
| 平台／來源讀取 | 少數官方頁 403、timeout 或僅有動態模板，未繞過限制；可採用的公開索引事實標在來源名稱。19 個新增影片以外連提供，沒有生成未知頻道或嵌入資料；新增正版平台仍未核對地區可用性 |

已查缺口按兩輪定向查找上限保存具體觸發條件；其他未全面查找的形式與收錄也明列續查方向。保留有效證據，不把下一批開始當作重查本批的理由。沒有公開 raw response、私人工具、歌曲／影片副本或完整歌詞。

### 本機檢查與展示

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案、5 個核心測試通過；包括全目錄契約／關係。未改測試或正常程式 |
| `npm run build` | 160 個檔案 0 errors／warnings／hints；1,961 HTML、CSP（6 script／10 style hashes）、Service Worker 與 3,918 公開產物檢查通過 |
| 桌面實際預覽 | 1536×1024；10 部／21 筆曲名、全部 credits、公開 JSON 與動畫頁一致；沒有空白頁、框架錯誤覆蓋層或 app errors |
| 閱讀流程 | たりない原名搜尋 → LIAR GAME 全部 4 首／MV／ED；さんかくゲーム →『ユイカ』原名／兩個 C'est la vie Art Track 發行關係；ESCL-6238 搜尋 → リフレイン 原版／Instrumental／兩版 CD；転生願望 TV size／EP／平台／欄位證據，均通過 |
| 手機實際預覽 | 390×844；LIAR GAME、ただいま、レプリカ及勇者の肋骨 4 部沒有橫向溢出，代表桌面／手機截圖可讀；app errors 0、自動 YouTube 請求 0。外部請求攔截，未把第三方播放算為本機通過 |
| 文件／公開邊界 | checkpoint 相對連結 2 個、`git diff --check` 通過；`npm run public:check` 通過（239 個 repository 檔案）。既有未提交變更保留，未增加公開收集工具或原始資料 |

本批只改 10 部春季 seed 與 checkpoint，其餘 spring seed 逐行一致；未更動 registry、contract、搜尋、UI、播放器、依賴或 Cloudflare 設定。Browser plugin／browser skill 未提供，沿用 Playwright；依矩陣沒有重跑全套 E2E、依賴稽核或 Cloudflare dry-run。

預覽入口：`/anime/liar-game/`、`/anime/replica-datte-koi-wo-suru/`、`/anime/tadaima-ojamasaremasu/`、`/anime/megami-isekai-tensei-nani-ni-naritai-desu-ka-ore-yuusha-no-rokkotsu-de/`、`/songs/`。歌單仍按每用途一列，發行版與影片不增加歌曲列數。

下一批為 **2026-spring-credits-youtube-13**，從 `curated-199588`／`otaku-ni-yasashii-gal-wa-inai-op-1` 接續，依序處理 `curated-182483`、`curated-177508`、`curated-177501`、`curated-202508`、`curated-187869`、`curated-169228`、`curated-199029`、`curated-185211`，9 部／27 筆既有 OP／ED。途中 `curated-189046` 的 3 筆用途已於第八批深化及更正分類，直接沿用有效證據，不重新收集。新一批優先核對同名曲、角色版本及 MV 標示的實際歌曲／用途／平台關係；第十三批尚未啟動。

本批完成本機資料、公開 JSON 與展示驗證；未提交、推送或部署，CI／Cloudflare preview／production 未重新驗收。整體目標執行中，從上述接點繼續。

The twelfth batch deepens 21 existing uses across ten anime, adding 70 creator-role credits, two recording entities, 19 releases and 19 distinct official YouTube links. Two creator arrangements remain unknown and three completed credit sets use explicit cross-check evidence. Local tests, build and desktop/mobile flows pass. The next batch skips the three Re:Zero uses already handled in batch eight; the full goal remains active with no commit, push or deployment.


## 2026-10-15 第 08–12 批發布 / Batches 08–12 release

完成層次：第 08–12 批的資料、本機驗證、六個階段提交、GitHub 合併與正式部署驗收已完成。後續仍按既定範圍逐批推進，停止時保留最後可靠位置。

- 本次查核 50 部作品／134 筆用途；實際修改 49 部／133 筆用途，其中 123 筆既有用途深化、10 筆新公告用途。沒有新增動畫頁或季度。原公開 ID、slug 與錨點保留；已證實的 2 筆劇中歌修正為 IN，不再計作 ED。
- 相對前次發布新增 430 筆分列創作角色（141 作詞、143 作曲、146 編曲），另有 13 筆不擅自拆分的 songwriting；新增 91 個不同官方 YouTube 外連、56 個錄音 ID、138 個發行 ID。錄音、發行、影片及用途分開計數，未證實的長度、跨發行錄音同一性與地區可用性仍保留未知。
- 未解缺口及續查條件沿用各批表格，不重查已有效證據。第 13 批尚未開始，接點為春季 `curated-199588` 至 `curated-185211`，9 部／27 筆用途；已完成的 Re:ゼロ 第四季直接沿用。
- 本機發布檢查通過：4 個 unit 檔案／5 個測試、6 條 Playwright 核心流程、Astro 型別及 1,961 HTML 建置、CSP、Service Worker、3,918 個公開產物、repository 公開邊界、Cloudflare dry-run；依賴稽核 0 vulnerabilities。各批新增內容已在桌面與手機實際預覽，查核方法及限制見各批。
- 公開邊界確認：密鑰、私人路徑、帳戶資料、原始取回資料、測試截圖、執行 log 及暫存腳本未加入發布內容；只保留維護公開資料契約所需的測試原始碼。既有忽略規則繼續排除本機產物。
- GitHub：[PR #101](https://github.com/kyeunga25/anisonary/pull/101) 的 quality 與 Workers 預覽檢查通過，按線性歷史規則正常 rebase 合併；main `81a0d5346d2e2fa7ccc71318df72cdcd276dfd2a` 的 quality 亦通過。部署源與審閱 head 的 Git tree 相同，沒有 squash 或強制推送。
- Production：正式 API 全目錄契約通過，涵蓋 28 季、1,917 個唯一作品；16 個頁面／公開資產與本批 50 個 anime JSON 共 66 項 byte digest 符合本機產物，兩個不存在的頁面／API 回應真實 404。HTML 安全標頭及 API noindex／revalidation／無 permissive CORS 符合設定。
- 正式展示：桌面 1536×1024 查核 50 部／134 筆用途、手機 390×844 查核 4 部；六條資料閱讀流程包含劇中歌篩選、舊 ID 錨點、原名搜尋、品番搜尋、錄音／發行品與來源。0 app／CSP errors、0 自動 YouTube request；第三方海報攔截，不代表影片嵌入或 HK／TW 播放可用性已確認。
- 依賴狀態：遠端 main 與本機 lockfile 相同，npm audit 為 0。GitHub 仍顯示 23 項舊依賴範圍警示；目前列出的套件已高於該範圍或不在依賴樹，沒有把尚未同步的 GitHub 警示記成已關閉。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| 插曲分類與第 08 批 | `e02ab0f` | `43e3be4` |
| 第 09 批 | `4e8d1ca` | `0495544` |
| 第 10 批 | `0823cae` | `a28733a` |
| 第 11 批 | `6afc01d` | `2f5868b` |
| 第 12 批 | `03ddfbb` | `4978e13` |
| checkpoint 與公開文件 | `81a0d53` | `172ba6e` |

## 2026-10-15 批次：2026-spring-credits-youtube-13（執行中）

本次目標：接續春季 9 部作品、27 筆既有 OP／ED 用途，優先補原名、實際創作者／歌唱名義、官方 YouTube 形式、已證實版本及收錄。固定範圍與 2026-10-14 截止日不變；來源實際核對日期為 2026-10-15。完成條件沿用頂部與 workflow，經本機檢查後逐批提交、發布及正式驗收；缺口保存續查條件。

已開始查閱第一方 MUSIC 與公告；尚未寫入或驗證本批歌曲資料，不能計作完成。範圍為 `curated-199588`、`curated-182483`、`curated-177508`、`curated-177501`、`curated-202508`、`curated-187869`、`curated-169228`、`curated-199029`、`curated-185211`。先處理明確名單，角色版本、既有 MV 誤列用途與後期 ED 缺口另按證據核對。
