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
| 執行狀態 | 執行中：2020–2026 深化；2026 夏季第五批已完成本機資料、必要檢查與展示驗證。第六批尚未開始；整體範圍及長期目標均未完成 |
| 接續位置 | 2026-summer-credits-youtube-06：`curated-207809`、`curated-198946`、`curated-135865`、`curated-213666`、`curated-159309`、`curated-196356`、`curated-194829`、`curated-207254`、`curated-108992`、`curated-196187`，10 部作品／19 筆既有用途；由 `sora-wa-akai-kawa-no-hotori-op-1` 接續。固定 2007–2026、當前 2020–2026 深化範圍及 2026-10-14 截止日保留 |
| 本機提交 | `c71f032`：歌曲關係格式、格式試行及夏季批次 01–03；`c1174a0`：第四批資料與 checkpoint。第五批對應此階段 commit，標題為 `(add): 2026 summer credits and official videos batch 05`；範圍限本批 2 個季度資料檔與此 checkpoint，可依批次編號或標題定位。既有無關變更保留，推送與部署另待授權 |
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

目前優先順序已調整為 **2020–2026 創作名單及官方 YouTube**。本輪只深化已收錄用途，不重做季度全集盤點；2026 秋、2025 秋的核心漏季仍保留，待此項優先工作之後接續。固定截止日仍為 2026-10-14。啟動盤點的本機唯一用途為 3,965 筆；跨年作品在各年統計可能重複，不能相加。此數量是範圍基線，不代表欄位完成。第二批補入 3 筆新公告用途後，本機範圍為 3,968 筆；目前全目錄為 28 季、1,917 動畫頁、4,232 筆用途。

| 優先 | 工作 | 狀態與接點 |
| --- | --- | --- |
| 1 | 一次性最小格式與真實試行 | 2026-10-14 已完成，見下方 2026-summer-schema-pilot；後續直接沿用格式，不重新設計或搬移全量資料 |
| 2 | 當前深化接點 | 2026 夏；第六批接點見上方。先完成目前 2020–2026 credits／YouTube 優先工作；既有有效名單與影片直接沿用 |
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

## 每批接續欄位

下列是後續批次的欄位說明，已執行成果見上方批次記錄。

| 欄位 | 填寫內容 |
| --- | --- |
| 本次目標 | 可公開的範圍、資料欄位、優先順序、工作量／時限與完成條件；不抄錄私人指令 |
| 固定範圍 | 起迄年份／季度、媒體及用途類型、公開資料截止日；延續時不自行改動 |
| 執行狀態 | 執行中：2020–2026 深化；2026 夏季第五批的資料、單元測試、建置及展示已驗證，文件／公開邊界檢查待收尾。第六批尚未開始；整體範圍及長期目標均未完成 |
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
