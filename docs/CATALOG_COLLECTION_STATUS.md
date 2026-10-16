# 歌曲收集進度 / Collection Checkpoint

此文件保存可公開的執行位置與已完成成果。計畫及步驟見 [`SONG_COLLECTION_WORKFLOW.md`](./SONG_COLLECTION_WORKFLOW.md)；每批更新同一文件。未審核候選、原始 response、token、私人路徑、內部評分與對話內容不寫入此處。

## 長期目標與本次任務

目標啟動日期：2026-10-14。下方基線保留 2026-10-09 的歷史本機記錄；本次差異另記，不代表 production 狀態。

| 項目 | 目前狀態 |
| --- | --- |
| 長期目標 | 收集近二十年的動畫歌曲、創作團隊、音源版本、來源、官方影片、收錄發行品與正版平台資訊 |
| 固定範圍 | 2007–2026；非成人 TV／WEB 的 OP／ED，已確認插曲一併記錄；公開資料截止日 2026-10-14。長期目標未完成 |
| 本次資料任務 | 2025 → 2007 年動畫歌曲盤點與收集；每年按秋 → 夏 → 春 → 冬，先建立完整作品／用途盤點，再補同批創作、官方影片、版本、收錄與正版平台。2026 已完成成果保留，後續更新延後 |
| 完成條件 | 各季先有來源支持的作品及歌曲用途清單，核對新作、續播與已知輪替，將已證實歌曲核心逐批公開，再深化創作、官方影片、音源、收錄與平台；經公開 JSON、頁面及必要檢查驗證。清單未閉合或仍有必需缺口時不稱整季齊備；兩輪未明欄位保留續查條件 |
| 執行狀態 | 整體執行中；第08–31批均已正式發布驗收。第31批新增10部／27筆用途；第32批繼續2025秋尚未收錄新作、WEB、續播與輪替盤點。季度盤點及長期目標均未完成 |
| 接續位置 | 第32批 `2025-fall-inventory-32`：繼續2025秋尚未收錄的新作、跨季續播及特殊用途，每批約10部／20–30筆；固定截止日2026-10-14，實際來源核對日期另記。原夏季待辦於秋季首輪後回接 |
| 發布提交 | 最新 [PR #120](https://github.com/kyeunga25/anisonary/pull/120) 正常rebase合併並保留5個階段提交；正式部署來源 `6015b1f`、標記 `batch31` 已通過下方live驗收。PR #101–#119的提交及驗收保留在各批紀錄 |
| 開始／停止 | 明確要求執行或繼續才開始；暫停／停止保存位置後等待指令；取消保留成果並記錄取消狀態 |

執行狀態使用「未開始／執行中／已暫停／已完成／已取消」；無法繼續時另記具體阻礙及仍未完成部分，不自動標記完成。長期目標與本次工作量分開，未指定本次工作量時先完成下一批。

## 季度進度 / Quarterly progress

統計至第31批正式發布驗收。正式版本以頂部發布提交及各批 live 驗收為準。範圍為2019–2026現有快照中的OP／ED用途，依公開 theme ID 去重並將舊 ID 別名對應目前用途；不是唯一歌曲或音源數。每批驗收後更新此表。

「已逐批核對」依下方各批公開 ID 明細計算，包含兩輪查找後留有續查條件的用途。「核心欄位齊備」只計其中已有作詞、作曲、編曲及已確認 YouTube 歌曲 watch 外連的用途；合併 songwriting 未擅自拆分，只有專輯入口不算歌曲影片。此數量不代表每個音源、團隊名單、商品、第一方逐曲 credits 或全部季度清單均已完成。未開始季度已有的歷史資料保留，不列入本輪完成。已核對用途優先按 `theme.seasonIds` 計入相應季度；省略欄位的舊記錄沿用作品季度。各季可能重複收錄跨季用途，季度數字不可直接相加。

| 季度 | 現有 OP／ED 用途 | 已逐批核對 | 其中核心欄位齊備 | 已核對仍有核心缺口 |
| --- | ---: | ---: | ---: | ---: |
| 2026 秋 | 尚未建立快照 | — | — | — |
| 2026 夏 | 141 | 141 | 96 | 45 |
| 2026 春 | 182 | 182 | 133 | 49 |
| 2026 冬 | 131 | 131 | 104 | 27 |
| 2025 秋 | 101 | 101 | 88 | 13 |
| 2025 夏 | 173 | 143 | 135 | 8 |
| 2025 春 | 153 | 0 | 0 | 待盤點 |
| 2025 冬 | 136 | 0 | 0 | 待盤點 |
| 2024 秋 | 160 | 0 | 0 | 待盤點 |
| 2024 夏 | 181 | 0 | 0 | 待盤點 |
| 2024 春 | 158 | 0 | 0 | 待盤點 |
| 2024 冬 | 130 | 0 | 0 | 待盤點 |
| 2023 秋 | 200 | 0 | 0 | 待盤點 |
| 2023 夏 | 126 | 0 | 0 | 待盤點 |
| 2023 春 | 168 | 0 | 0 | 待盤點 |
| 2023 冬 | 159 | 0 | 0 | 待盤點 |
| 2022 秋 | 197 | 0 | 0 | 待盤點 |
| 2022 夏 | 146 | 0 | 0 | 待盤點 |
| 2022 春 | 150 | 0 | 0 | 待盤點 |
| 2022 冬 | 111 | 0 | 0 | 待盤點 |
| 2021 秋 | 145 | 0 | 0 | 待盤點 |
| 2021 夏 | 104 | 0 | 0 | 待盤點 |
| 2021 春 | 131 | 0 | 0 | 待盤點 |
| 2021 冬 | 166 | 0 | 0 | 待盤點 |
| 2020 秋 | 180 | 0 | 0 | 待盤點 |
| 2020 夏 | 61 | 0 | 0 | 待盤點 |
| 2020 春 | 208 | 0 | 0 | 待盤點 |
| 2020 冬 | 180 | 0 | 0 | 待盤點 |
| 2019 秋 | 161 | 0 | 0 | 待盤點 |
| 2019 夏 | 103 | 0 | 0 | 待盤點 |
| 2019 春 | 尚未建立快照 | — | — | — |
| 2019 冬 | 尚未建立快照 | — | — | — |

2026 夏／春／冬已完成現有清單首輪核對，仍有核心及選填欄位缺口，並非整季資訊收集完成。2025 秋為目前優先盤點季度，其後接續夏／春／冬及更舊年份；2025夏既有待辦保留，2026秋延後。當前範圍共有720個唯一用途已逐批處理，其中693個為OP／ED，另24 IN／3 TS；後兩類不列進上表的OP／ED分母。2007–2018各季及2019春／冬尚未建立快照，完整分母未知；2025秋現有101筆OP／ED也不是整季總數。

## 基線

記錄日期：2026-10-09。以下來自本機 repository 建置產物，不是 production 或 live 平台驗收。

- 目前 28 個季度快照、1,917 個唯一動畫頁、4,229 筆 OP／ED 用途；用途筆數不等於去重後的歌曲／錄音數。
- 已收錄最新季度：2026 夏季。2026 秋季、2025 秋季尚未在 registry；2019 夏季仍屬部分收錄。
- 共用歌單與動畫全部主題曲頁已可用；每歌可有多個官方影片、credits、平台連結及來源。
- 本機產物中 282 筆用途有非演唱角色 credits、239 筆有單一發行日期、61 筆有版本標籤；這些是欄位存在數，不代表完整度。
- 目前 1,756 筆影片 metadata、164 筆用途有多個影片；沒有結構化音源版本／發行品關係。
- 新格式、獨立來源日期 authoring 及新欄位展示尚未實作；此輪僅建立計畫、workflow 與交接入口，沒有新增歌曲資料。

## 下一輪位置

目前優先順序為 **2025秋 → 夏 → 春 → 冬，再逐年往舊至2007年**。先盤點缺漏作品與歌曲用途，再深化同批創作、官方影片、音源、收錄與平台；不能以現有快照筆數代表整季完整分母。新作與續播作品的當季用途均須納入盤點，首播季度、歌曲用途及發行日期分開記錄。2026已完成成果保留，後續更新延後；固定長期範圍2007–2026與截止日2026-10-14維持，當前執行起點改為2025。以下數字保留為歷史基線。啟動盤點的本機唯一用途為 3,965 筆；跨年作品在各年統計可能重複，不能相加。此數量是範圍基線，不代表欄位完成。第二批補入 3 筆、第六批補入 4 筆新用途後，當時範圍為 3,972 筆；第八批再補 5 筆後為 3,977 筆。第十批再補 2 筆後期用途後為 3,979 筆；第十一批補 3 筆後為 3,982 筆。最新全目錄為 28 季、1,917 動畫頁、4,246 筆用途；用途類型沿用第十一批；第十二批只深化既有用途。第十三批將一筆誤列 MV 合併並保留舊 ID 別名後，最新全目錄為 4,245 筆用途（4,243 OP／ED、2 IN），範圍內為 3,981 筆；第十四批補入 3 筆已公告後期用途後，本機最新為 4,248 筆（4,246 OP／ED、2 IN），2020–2026 為 3,984 筆；上述數量保留為歷史變更；目前最新本機差異見第三十一批，正式發布以頂部提交及下方驗收紀錄為準。

| 優先 | 工作 | 狀態與接點 |
| --- | --- | --- |
| 1 | 一次性最小格式與真實試行 | 2026-10-14 已完成，見下方 2026-summer-schema-pilot；後續直接沿用格式，不重新設計或搬移全量資料 |
| 2 | 當前收集接點 | 第08–31批已正式發布驗收；第32批接續2025秋新作、WEB及續播／特殊用途盤點 |
| 3 | 2025其餘季度 | 秋季首輪後依夏 → 春 → 冬盤點；保留已核對資料與未解觸發條件，不重查所有舊連結 |
| 4 | 中間漏季及歷史深化 | 2024 → 2007，每年秋／夏／春／冬倒序；2019夏已有缺口於到達該季時接續 |
| 5 | 2026保留項目 | 已完成資料維持公開，秋季漏季與未解缺口保留，暫不啟動新的2026批次 |

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
| 執行狀態 | 整體執行中；第08–30批均已正式發布驗收。第30批新增10部／21筆用途；第31批繼續2025秋尚未收錄新作、續播與特殊用途盤點。季度盤點及長期目標均未完成 |
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

## 2026-10-15 批次：2026-spring-credits-youtube-13

完成層次：9 部作品、28 個既有公開 ID 的有界查核。本機實際深化 26 筆用途；1 筆特殊 ED 保留原記錄與缺口，1 筆誤列的同曲 MV 合併到正規用途並保留舊 ID 別名，現有 27 筆正規用途。沒有新增動畫、季度或真正的新用途。初始 seed 的 27 筆之外，公開 JSON 原已包含 Toshl ED；本批沿用其 ID，不把 authoring 位置遷移算作新增。固定資料截止日 2026-10-14，實際核對日期 2026-10-15。2020–2026 與 2007–2026 整體目標仍未完成。

| 公開 theme ID | 歌曲 | 實際新增／更正 |
| --- | --- | --- |
| `otaku-ni-yasashii-gal-wa-inai-op-1` | HIDE AND SEEK | 完整創作；沿用既有官方影片 |
| `otaku-ni-yasashii-gal-wa-inai-ed-1` | 一生仲仔 | 詞曲、3 位成員、CD／數位 EP 及官方入口；編曲仍缺 |
| `otaku-ni-yasashii-gal-wa-inai-ed-2` | Plastic Love | 保留原記錄，未新增未證實欄位；缺口見下表 |
| `hime-kishi-wa-barbaroi-no-yome-op-1` | BEAUTIFUL | 深川琴美／OHTORA／New K 完整創作 |
| `hime-kishi-wa-barbaroi-no-yome-ed-1` | シルベキコト | sana／青谷／ナノウ完整創作 |
| `kujima-utaeba-ie-hororo-op-1` | 木漏れ日坂 | 詞曲、5 位成員、CD 原版／Instrumental、曲序與官方影片；CD 編曲獨立保存 |
| `kujima-utaeba-ie-hororo-ed-1` | ほろろ逍遥 | 完整創作、OST Track 40、品番／日期、官方影片與配信 |
| `awajima-hyakkei-op-1` | blue hour | 官方影片、數位 Single／兩個 CD 版；既有影片補為無字幕 OP，創作仍缺 |
| `awajima-hyakkei-ed-1` | 光 | 完整創作、原版／TV Size／Instrumental、數位及 CD Single 與曲序 |
| `kami-no-shizuku-op-1` | hate you? love you? | 完整創作、官方 MV、數位 Single／配信 |
| `kami-no-shizuku-op-2` | Call Me Asap | 完整創作及錄音製作、MV／數位 Single，沿用 NUMBER 的 11 個 CD 發行 ID、Track 1 |
| `kami-no-shizuku-ed-1` | カミノシズク | 完整創作、數位 Single、同曲 MV 移入；舊 ED2 ID 別名保留 |
| `kami-no-shizuku-ed-2`（別名） | 同曲 MV，原誤列用途 | 解析至 `kami-no-shizuku-ed-1`；舊頁內錨點保留，不增加用途或歌曲計數 |
| `kami-no-shizuku-ed-3` | エブリー・サマー | 完整創作交叉補證、第二季度無字幕 ED；原 ID／序號 3 保留，明示第2クール用途 |
| `kamiina-botan-yoeru-sugata-wa-yuri-no-hana-op-1` | 芽吹くとき | 詞曲交叉補證、2 位成員、CD 本錄音編曲、CD／數位 Single |
| `kamiina-botan-yoeru-sugata-wa-yuri-no-hana-ed-1` | 感情グラス | 同一歌曲的角色歌唱版；完整創作、上伊那ぼたん（CV.鈴代紗弓）、獨立 recording 與官方／三平台確切入口 |
| `kamiina-botan-yoeru-sugata-wa-yuri-no-hana-ed-2` | 感情グラス | 同一歌曲的角色歌唱版；完整創作、北杜やえか（CV.富田美憂）、獨立 recording 與官方／三平台確切入口 |
| `kamiina-botan-yoeru-sugata-wa-yuri-no-hana-ed-3` | 感情グラス | 同一歌曲的角色歌唱版；完整創作、郡上かなで（CV.寿 美菜子）、獨立 recording 與官方／三平台確切入口 |
| `kamiina-botan-yoeru-sugata-wa-yuri-no-hana-ed-4` | 感情グラス | 同一歌曲的角色歌唱版；完整創作、遊佐あかね（CV.天海由梨奈）、獨立 recording 與官方／三平台確切入口 |
| `kamiina-botan-yoeru-sugata-wa-yuri-no-hana-ed-5` | 感情グラス | 同一歌曲的角色歌唱版；完整創作、砺波いぶき（CV.青山吉能）、獨立 recording 與官方／三平台確切入口 |
| `kamiina-botan-yoeru-sugata-wa-yuri-no-hana-ed-6` | 感情グラス | 同一歌曲的角色歌唱版；完整創作、張景嵐（CV.河瀬茉希）、獨立 recording 與官方／三平台確切入口 |
| `kamiina-botan-yoeru-sugata-wa-yuri-no-hana-ed-7` | 茜色の夕日 | 原名與原文演唱名義、志村正彦詞曲、第10話劇中／ED 使用；編曲及實際發行錄音仍缺 |
| `hokuto-no-ken-2026-op-1` | Hallelujah | [Alexandros] 原文名義、完整創作、アニメ MV、數位 Single／配信 |
| `hokuto-no-ken-2026-ed-1` | 愛をとりもどせ!! | 沿用既有 ID；詞曲及本次編曲交叉補證、官方無字幕 ED、Toshl 錄音及兩個 Album 版 |
| `kanojo-okarishimasu-5th-season-op-1` | ノンシナリオ・エチュード | 原名／演唱名義、完整創作、MV、數位 Single／兩個 EP CD 版與曲序；保留舊羅馬字搜尋 |
| `kanojo-okarishimasu-5th-season-ed-1` | 204号室 | 原名／演唱名義、完整創作、CD Single 與 Track 1／官方入口 |
| `yowa-yowa-sensei-op-1` | COMIT COMET | 完整創作、Mix／Mastering、官方 MV／Digital Single／配信；發行日期未推定 |
| `yowa-yowa-sensei-ed-1` | よわよわ つよつよ みにみに こわこわ | 完整創作、3 位角色／CV、原版／Off Vocal／Anime Size；Anime Size 長度分類保持 unknown |

已處理 anime ID：`curated-199588`、`curated-182483`、`curated-177508`、`curated-177501`、`curated-202508`、`curated-187869`、`curated-169228`、`curated-199029`、`curated-185211`。其餘動畫與既有 slug 保留，其他季度 seed 未改動。

### 實際差異與關係

- 26 筆用途新增 songId，對應 21 個歌曲 ID；六個「感情グラス」角色歌唱版共用一個歌曲 ID，各有獨立錄音及平台關係。歌曲 ID 登記不表示新增 21 首歌曲。
- 新增 85 筆作品層創作角色：28 作詞、31 作曲、26 編曲；73 筆有第一方支持，12 筆交叉補證。21 筆正規用途三角色均已分列（19 筆第一方、2 筆交叉補證）；6 筆仍有不同程度缺口。另新增 10 筆團隊成員、5 筆錄音製作角色，演唱名義新增 12／移除 10；所有作品層 credits 淨增 102。團隊成員不自動當作本曲演唱者。
- 新增 16 個錄音：7 演唱、3 Instrumental／Off Vocal、6 角色版；只有「光 -TV Size-」有明確 TV 分類，其餘 15 個保持 unknown，沒有由 MV、無字幕片或 Anime Size 推定 full／TV。另在錄音層保存 3 筆編曲與 13 筆演唱角色；CD 本錄音編曲不外推至未知的 TV／數位錄音。
- 新增 33 筆本曲收錄關係，其中 22 個是新發行 ID（15 Single、4 EP、2 Album、1 OST；12 CD、10 數位），11 個沿用前批 NUMBER 所在的同一組 CD 發行 ID。Call Me Asap 保存 Track 1，NUMBER 仍為 Track 2，不複製成另一組商品或錄音。
- 新增 10 個不同官方 YouTube URL：4 藝人 MV、1 アニメ MV、2 無字幕 ED、3 形式未另推定的官方影片。原有「カミノシズク」MV 移入同一用途，沒有算成新影片／新歌曲；既有「blue hour」影片補明無字幕 OP。新增影片以命名外連展示，未捏造頻道、嵌入 metadata 或可用性。
- 新增 49 筆平台外連：20 官方入口、11 YouTube 關係（含 1 筆移入）、Apple Music／Spotify／YouTube Music 各 6；另更新既有影片標籤 1 筆。六個角色版共有 12 個官網指向的確切專輯入口、6 個 YouTube Music 播放清單，均連回各自錄音；播放清單不計作影片或新發行品。目的頁播放／購買及 HK／TW 可用性未核對，保持 unknown。
- 新增 52 個用途層來源項目、187 組欄位證據；6 個實際重讀的既有歌曲來源更新為 2026-10-15。動畫 metadata、圖像／識別與播出來源日期保留；只有修正後的 ED 數量及已新增官方影片狀態等衍生欄位改變。
- 本機全目錄：28 季、1,917 動畫頁、4,245 正規用途＝4,243 OP／ED＋2 IN，另保留上述舊 ID 別名。2020–2026 為 1,808 動畫頁、3,981 正規用途＝3,979 OP／ED＋2 IN。720 個唯一歌曲層 YouTube 直連、1,793 筆既有影片 metadata；這些數量不能當作唯一歌曲／錄音數或欄位完成率。

### 待補資訊與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| 一生仲仔 ED1 | 官網與 EP 公告未明示編曲；不從樂團名推定 | 官方完整 credits、CD booklet 或藝人／製作人實績可公開查閱 |
| Plastic Love ED2 | 原名、角色演唱／用途與本次詞曲／編曲尚缺清楚的第一方對應；原記錄未改，未採用候選影片或由其他版本套入 credits | 官方第6話 ED credits、正式影片／配信公告或製作方實績可核對；只針對此缺口，不再輪搜歌詞站 |
| 木漏れ日坂 OP1 | 官網概述與 CD 曲目表的編曲表記不同；CD 錄音層保存已明示的 Galileo Galilei，作品層不作合併判斷 | JVC／藝人正式商品 credits 或 booklet 釐清；沒有把表記差異當作新錄音／重新編曲 |
| blue hour OP1 | 創作名單未取得可採用的直接證據；CD 曲序及其他明確版本未補；官方影片形式未另推定 | Sony、藝人、創作人實績或官方影片 credits 明示後定向補；不僅憑受限制歌詞站搬入名單 |
| 芽吹くとき OP1 | CD 本錄音編曲有交叉證據，TV／數位版與該錄音的同一性未知；不外推作品層編曲 | 官方音源 credits／識別資料或商品 booklet 明示；詞曲原文 Arisa Ushimaru 與成員原文名分開保存 |
| 茜色の夕日 ED7 | 編曲、動畫實際採用哪個既有發行錄音及確切平台入口仍缺；未推定重錄或角色翻唱 | 官方放送／錄音 credits 或樂團、唱片公司明示使用版本；第10話劇中／ED 用途保留公告與原作者訪談補證 |
| 6 個角色版及 LP | 已確認「感情グラス」六角色音源與各自平台；LP 品番 SVWJ-70748、2026-07-01 與六版收錄已見官網，但發行名義／類型未完整核對，未計入結構化發行成果 | Aniplex／Sony 正式 LP 商品及發行名義可確認，再保存同一 release ID；不把 LP 的不同角色曲當成不同歌曲 |
| よわよわ先生 ED／OST | 已確認原版、Off Vocal、Anime Size；OST 官網列 LACA-19174～5、2026-06-24、Disc2 Track 21／22／23，正式發行名義未完成，尚未登記 release | Lantis／官方商品完整發行名義與版本可確認；不把劇伴作曲者直接填作發行藝人，Anime Size 不自行改為 TV |
| 影片與其他發行／平台 | 姫騎士兩曲的新增 MV、204号室 的新影片等未完成官方渠道核對；其他 Art Track、live、lyric、artist album／OST 收錄仍未窮盡。COMIT COMET 數位發行日期未推定；本批所有新嵌入／地區可用性未知 | 官方直接影片／商品外連或清楚的版本、日期、渠道資料出現；普通公開頁面無法讀取時保留限制，不繞過存取控制或用 MV 上架日補發行日 |

### 本機檢查與展示

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案／5 個核心測試通過；含公開 JSON round-trip、ID 別名保留與衝突拒絕、來源及關係引用 |
| `npm run build` | 通過；Astro 0 errors／warnings／hints，1,961 HTML、CSP 6 script／10 style hashes、Service Worker 與 3,918 公開產物 |
| `npm run test:e2e` | 6 條核心流程通過；既有資料／播放同意／離線 gate 保留，增加舊 ID 錨點解析流程 |
| 實際桌面／手機預覽 | 桌面 1536×1024 查核 9 部／27 筆正規用途及 JSON；手機 390×844 查核 4 部；6 條閱讀流程包含 MV 去重與舊錨點、11 個共用 CD、6 角色版與 18 平台入口、TV／Instrumental、原名搜尋及無 JS 舊連結。0 app／CSP errors、0 自動 YouTube request，無水平溢出 |
| 來源／ID 範圍 | 28 個舊公開 ID 全數保留為正規用途或別名；9 部以外的 seed 逐行保持相同，metadata 日期未更新 |

首次目錄檢查抓到 Toshl 舊 extraThemes 與新 authoring 重複；已遷移為同一既有用途，移除已取代的單筆覆寫後重跑通過。沒有修改正常 parser 或降低有效 gate 遷就重複資料。Browser plugin 不在可用清單，使用現有 Playwright；第三方海報攔截，不把外部媒體、區域播放或購買可用性計入通過。

文件 35 個本機連結、`git diff --check`、repository `public:check`（239 檔）及 Cloudflare dry-run 均通過。程式變更只接通相容的用途 ID 別名與舊錨點；依賴及 Cloudflare 設定未改。第13批 GitHub／production 驗收已完成，見下方收尾。

預覽入口：`/anime/kami-no-shizuku/#theme-kami-no-shizuku-ed-2`（舊 ID）、`/anime/kamiina-botan-yoeru-sugata-wa-yuri-no-hana/`、`/anime/awajima-hyakkei/`、`/anime/kanojo-okarishimasu-5th-season/`。可搜尋 `感情グラス`、`Non Scenario Etude`、`AICL-4898`；同曲 MV 不再多出一列歌曲。

下一批：春季最後 11 部／20 筆既有公開用途，`curated-198113`、`curated-195734`、`curated-204269`、`curated-202386`、`curated-206950`、`curated-182300`、`curated-182578`、`curated-196974`、`curated-194393`、`curated-205772`、`curated-196219`，起點 `kill-ao-op-1`。先由完整公開 JSON 盤點，包括舊 extraThemes；本批發布驗收後接續，未知欄位按本表條件補查，不把首輪查核當作全部資料完成。


### 第13批正式發布與接續

- [PR #102](https://github.com/kyeunga25/anisonary/pull/102) 的 quality／Workers 預覽與 main `51a63c5eaa9d86175991d281e9107a4021e029a8` 的 quality 均通過，正常 rebase 合併，沒有 squash；部署來源與已審閱 head 的 Git tree 一致。所有階段提交已推送。
- 正式 API 全目錄契約通過，涵蓋 28 季、1,917 個唯一作品；16 個頁面／公開資產及 9 個本批 anime JSON 共 25 項 byte digest 與本機產物一致，兩個不存在的頁面／API 回應真實 404。安全標頭、API noindex／revalidation／無 permissive CORS 符合設定。
- 正式桌面查核 9 部／27 筆正規用途、手機 4 部；六條閱讀流程包含舊 ID 別名與無 JS 錨點、共用 CD 的不同曲序、六個角色錄音與平台入口、TV／Instrumental、原名搜尋及 Toshl 舊記錄去重。0 app／CSP errors、0 自動 YouTube request；外部海報攔截，第三方目的頁與地區播放仍未宣稱已驗證。
- 公開進度接續第14批，保留本批待補表；本輪發布完成不等於整個 2020–2026 或二十年目標完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batches 08-12 production verification | `ebb3237` | `ce0e887` |
| (fix): retain song IDs when merging duplicate videos | `9acfc00` | `e5ae70c` |
| (add): 2026 spring credits and recordings batch 13 | `51a63c5` | `eca4375` |

## 2026-10-15 批次：2026-spring-credits-youtube-14

完成層次：春季最後 11 部、20 筆既有公開用途深化；新增 3 筆已在固定截止日前公告的後期用途，共 23 筆。四筆原已有完整創作名單的用途直接沿用；原 extraThemes 遷入同一季度 authoring，沒有重複追加或算作新增。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日不變，實際來源核對日期 2026-10-15。本機、GitHub 與 production 已驗證，正式收尾見下方；整體目標仍未完成。

| 公開 theme ID | 歌曲 | 實際新增／更正 |
| --- | --- | --- |
| `kill-ao-op-1` | ATTITUDE | 詞曲與 Producer 交叉補證、數位 Single、Mini Album Track 4、楽曲解禁 PV；編曲未推定 |
| `kill-ao-ed-1` | KILL SHOT | 完整創作交叉補證、數位 Single 日期與官方配信 |
| `ichijouma-mankitsu-gurashi-op-1` | チャオチャオ（Ciao Ciao） | 北野ダリ／油布 賢一 a.k.a KENNY 完整創作；官網公開索引核對 |
| `ichijouma-mankitsu-gurashi-ed-1` | やわやわNERD 超FreQuency | 星銀乃丈／岡村大輔完整創作；CD Single Track 2／Instrumental Track 4 |
| `odekake-kozame-season-2-ed-1` | おでかけ | 沿用完整創作；數位 Single、日期及既有 NexTone 外連補收錄關係 |
| `odekake-kozame-season-2-ed-2` | 子ザメ行進曲 | 新增已公告 ED；子ザメちゃん／Agasa.K 完整創作、原文演唱、無字幕 ED 及交叉來源 |
| `shou-3-ashibe-qq-goma-chan-ed-1` | CUE CUE CUTE | 沿用完整創作；數位 Single、LCDA-0403、官方 ED／MV／Special Collaboration Video |
| `kumarba-season-3-op-1` | こんにちワールド | 沿用完整創作；唱片公司指向的主題歌フルMV；未據此新增 full 音源 |
| `tsue-to-tsurugi-no-wistoria-season-2-op-1` | BELIEVERS | 完整創作交叉補證；MV、數位／兩個 CD 版、Instrumental／TV size 及不同 Track 4 |
| `tsue-to-tsurugi-no-wistoria-season-2-ed-1` | リーチライト | 完整創作、數位／CD Single、Instrumental／TV Size 曲序；以正確無字幕 ED 取代誤連 OP |
| `yozakura-san-chi-no-daisakusen-2nd-season-op-1` | What's "KAZOKU"? | 補問號、明示第1クール；完整創作交叉補證、兩個 CD 版及 Off Vocal，不同 Track 1／2／5 |
| `yozakura-san-chi-no-daisakusen-2nd-season-op-2` | フォーエバーソング | 新增第2クール OP；原名／演唱／來源、4 位團隊成員及完整創作交叉補證 |
| `yozakura-san-chi-no-daisakusen-2nd-season-ed-1` | Shalala | 明示第1クール；ピラフ星人／GAL D 完整創作交叉補證 |
| `yozakura-san-chi-no-daisakusen-2nd-season-ed-2` | I'm still breathing | 新增第2クール ED；原名／演唱／來源及完整創作交叉補證 |
| `kuroneko-to-majo-no-kyoushitsu-op-1` | Cusp | 完整創作、MV、三個 CD 版、TV Size／Instrumental；不同 edition 的伴奏曲序分開保存 |
| `kuroneko-to-majo-no-kyoushitsu-op-2` | ∞劣等星 | 原名／ナナヲアカリ、tepe 完整創作；MV、數位與兩個 CD 版；保留舊羅馬字搜尋 |
| `kuroneko-to-majo-no-kyoushitsu-ed-1` | ちゅーんあっぷ☆ | 完整創作、兩個 CD 版與官方入口；Instrumental／TV ver. 各有明確收錄 |
| `kuroneko-to-majo-no-kyoushitsu-ed-2` | Twilight Magic | TeddyLoid 完整創作；兩個 CD 版的品番與日期，未推定曲序 |
| `aishiteru-game-wo-owarasetai-op-1` | 君のせいで愛してる | 完整創作交叉補證；CD Single、品番／日期、Instrumental Track 4 |
| `aishiteru-game-wo-owarasetai-ed-1` | リトルワールド | 完整創作交叉補證；CD Single、品番／日期、Instrumental Track 2 |
| `candy-caries-ed-1` | Telepathy | 沿用完整創作；QUARTET 通常盤 Album Track 8、動畫第2弾ティザー PV；明示「主題歌（官方分類）」 |
| `mujikaku-seijo-wa-kyou-mo-muishiki-ni-chikara-wo-tare-nagasu-op-1` | Windmaker | 花耶原文名義與完整創作；確切官方影片及 NexTone 配信入口 |
| `mujikaku-seijo-wa-kyou-mo-muishiki-ni-chikara-wo-tare-nagasu-ed-1` | アンノウンミー | 原名／原文名義與完整創作、8 位實際角色演唱、CD Single／Instrumental；保留 Unknown Me 搜尋 |

已處理 anime ID：`curated-198113`、`curated-195734`、`curated-204269`、`curated-202386`、`curated-206950`、`curated-182300`、`curated-182578`、`curated-196974`、`curated-194393`、`curated-205772`、`curated-196219`。

### 實際差異與關係

- 20 個既有 ID 全數保留，登記 23 個歌曲 ID；只有上述 3 筆是新增用途，不把歌曲 ID 登記、authoring 遷移或新增影片當作新歌曲。後期用途留在同一動畫頁，沒有另建動畫或新季度。
- 新增 70 筆作品層創作角色＝21 作詞、27 作曲、22 編曲；32 筆有第一方支持，38 筆採交叉補證。全批 22／23 筆用途有分列三角色，其中 14 筆具有第一方完整創作（含 4 筆沿用），8 筆仍待第一方名單補證；ATTITUDE 編曲留空。另新增 4 筆團隊成員、2 筆 Producer 及 13 筆演唱角色，取代 3 筆舊演唱名義；八位角色演唱與其他歌曲的較大團隊名單分開，不外推。
- 新增 13 個有明確版本名的音源：9 Instrumental／Off Vocal、4 TV；9 個伴奏長度為 unknown，沒有由 MV、PV 或無字幕片推定 full。MV 出演的 Guitar／Bass／Drum 名單未移入錄音製作名單。
- 新增 27 個發行 ID／本曲收錄關係：25 Single、1 EP、1 Album；19 實體 CD 版、8 數位版。只保存本曲曲目；同一 CD 中原版與伴奏／TV 的曲序分開，未知位置留空，不把數位版與 CD 自動連成同一錄音。
- 新增 12 個不同官方 YouTube URL：5 MV（包括官方標為フルMV者）、2 無字幕 ED、1 官方 ED 映像、1 Special Collaboration Video、1 形式未另推定的官方影片、2 動畫 PV。既有 BELIEVERS OP 只補標籤，沒有再算新影片；リーチライト 移除錯配的 OP 關係，該影片仍留在正確 OP。沒有新增未核對的頻道／嵌入 metadata。
- 新增 37 筆外連（12 YouTube、21 官方／商品／配信、4 builder 既有類型的作品官網入口）；既有配信連結補關係及標籤，沒有把相同 URL 算作新平台。新用途及移除錯配影片後的官網入口屬既有 fallback。平台播放／購買與 HK／TW 可用性均未另核對，保持 unknown。
- 新增 51 個用途層來源項目、169 組欄位證據；10 個實際查閱的既有來源項目更新。11 部作品 metadata 與其圖像／識別／播出來源及日期逐項相同，包含四部原已於 2026-08-10 核對的作品；其他作品與季度資料未改。
- 最新本機目錄：28 季、1,917 動畫頁、4,248 用途＝4,246 OP／ED＋2 IN；2020–2026 為 1,808 動畫頁、3,984 用途＝3,982 OP／ED＋2 IN。732 個唯一歌曲層 YouTube 外連、1,793 筆既有影片 metadata；不是唯一歌曲數或完成率。

### 待補資訊與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| ATTITUDE | 實際讀取的 Qobuz 曲目只明示詞曲及 Producer；公開索引另有 Arranger 表記，未合併為編曲 | Warner／藝人／創作方完整 credits 或可公開 booklet 明示；Producer 不當作 Arranger |
| 8 筆交叉補證用途 | KILL SHOT、BELIEVERS、夜櫻第1／2クール四曲、愛してるゲーム兩曲已有完整角色；部分名單仍只有商品／音樂索引交叉證據 | 唱片公司、創作方實績或官方曲目 credits 可查閱時只補該缺口；不輪搜所有歌詞站 |
| 一畳間官網及影片 | 第一方公告的公開索引足以支持創作；原頁回應 404。兩曲新增 MV／官方渠道及其他發行尚未取得完整對應，保留舊影片 | 官網恢復、藝人／唱片官方直接外連或可辨識渠道關係出現；不因頻道名稱含「公式」就採用候選 |
| 新增夜櫻兩曲、Shalala 與其他影片 | 兩筆新用途的核心與創作先公開；新增官方 YouTube、Art Track、lyric／live 及 exact channel 關係未齊 | 動畫／藝人／唱片官方提供確切影片外連；新 CD 發售或明確曲目表可觸發對應收錄補查 |
| Telepathy | 官方目前只明示一般主題歌；既有 ED 導航 ID 保留並顯示官方分類，PV 不當作完整歌曲影片；QUARTET 品番及其他版未補 | 官方明示 OP／ED 用途、確切 MV／音訊或發行版曲目資料後補；不從 PV 推定 full／錄音 |
| 各 CD／數位版及音源 | 部分原版錄音、full、ISRC、時長、TV 與數位／CD 同一性及藝術家 Album／OST／合輯未證實；∞劣等星、Twilight Magic 的 CD 曲序留空 | 官方最終曲目表、音源識別或 booklet 明示；不由相同歌名、品番存在或 MV 長度推導 |
| Windmaker／アンノウンミー | Windmaker 先保存官網確切影片與配信；CD 正式版本名及曲序未齊。アンノウンミー 的 Lyric Video 形式有官方索引，確切影片 ID 未取得，未補猜測連結 | 官方完整商品／影片頁可查閱後定向補；八位實際本曲歌唱名單不擴成其他曲目的十人名單 |
| 存取及可用性 | 個別 Sony 普通取頁回應 403，クマーバ官網補取影片時回應 429；已停止該取得途徑，沿用已讀事實／其他官方來源。嵌入、第三方目的頁及地區播放未知 | 來源恢復、明確可用性核對任務或官方新入口出現；不繞過限制或由本機展示推定播放正常 |

### 本機檢查與展示

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4 個檔案／5 個核心測試通過；包括全目錄、來源與關係、日期及公開 JSON round-trip |
| `npm run build` | 通過；Astro 0 errors／warnings／hints、1,961 HTML、6 script／10 style CSP hashes、Service Worker 與 3,918 公開產物 |
| `npm run test:e2e` | 6 條核心流程通過；獨立本機測試埠及產物，沒有修改有效資料或安全 gate |
| 實際桌面／手機預覽 | 桌面 1536×1024 查核 11 部／23 筆用途及 JSON，手機 390×844 查核 4 部；6 條閱讀流程含新 ED 搜尋、跨季度四曲、錯配影片修正、CD 曲序、原文／舊名搜尋及 8 角色演唱。0 app／CSP errors、0 自動 YouTube request，無水平溢出 |
| 發布前檢查 | npm audit 0 vulnerabilities；Cloudflare dry-run 通過；30 個本機文件連結、`git diff --check` 與 repository `public:check`（239 檔）均通過 |

展示查核的首次預期把 Unknown Me 當成唯一結果；既有「全部資料」會匹配 unknown 音源分類，歌曲名稱範圍亦有其他合法匹配。已改為按實際曲名與動畫選擇目標，預覽通過；沒有為腳本假設修改正常搜尋程式。Browser plugin 不在可用清單，沿用 Playwright，第三方圖片攔截；外部播放／購買狀態不計入展示驗證。

預覽入口：`/anime/tsue-to-tsurugi-no-wistoria-season-2/`、`/anime/kuroneko-to-majo-no-kyoushitsu/`、`/anime/odekake-kozame-season-2/`、`/anime/yozakura-san-chi-no-daisakusen-2nd-season/`。歌曲名稱範圍可用 `Unknown Me` 或 `∞Rettou Hoshi` 核對舊名，品番 `AICL-4894`、`BRMM-11024` 可找到收錄關係。

階段提交：`5c39a37` 保存第13批正式驗證與第14批啟動位置；本批資料提交及發布 SHA 於正式驗收後保存。

下一批：**2026-winter-credits-youtube-15**，由 `mf-ghost-3rd-season-op-1` 起，`curated-185753`、`curated-187264`、`curated-178005`、`curated-199446`、`curated-167152`、`curated-166617`、`curated-177580`、`curated-186333`、`curated-197731`、`curated-177385`、`curated-195322`；11 部／21 筆既有公開用途。第14批正式驗收後接續，已完整的創作／有效影片直接沿用，仍按固定截止日及缺口觸發條件處理，不重新整季收集。

### 第14批正式發布與接續

- [PR #103](https://github.com/kyeunga25/anisonary/pull/103) 的 quality／Workers 預覽與 main `19b4eadd4a3ea9895e2a176594b9ae40caa348be` 的 quality 均成功；正常 rebase 合併，部署來源與已審閱分支的 Git tree 相同。兩個階段提交均已推送。
- Cloudflare 正式部署完成。API 全目錄契約通過（28 季、1,917 唯一作品）；16 個頁面／公開資產加本批 11 個 anime JSON 共 27 項 byte digest 與本機相同，兩個未知頁面／API 回應真實 404；HTML 安全標頭及 API noindex／revalidation／無 permissive CORS 均符合設定。
- 正式桌面查核 11 部／23 用途、手機 4 部，六條閱讀流程通過；新 ED、四曲跨季用途、影片修正、CD 曲序、原名與 8 角色演唱均可閱讀，0 app／CSP errors、0 自動 YouTube request。第三方圖片攔截，嵌入、播放及購買／地區可用性仍未知。
- 本批待補表繼續有效，沒有把春季首輪深化或這次發布當作 2020–2026、2007–2026 全目標完成。接續冬季第15批。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 13 production verification | `4afa9f9` | `5c39a37` |
| (add): 2026 spring credits and official videos batch 14 | `19b4ead` | `d1ae105` |

## 2026-10-15 批次：2026-winter-credits-youtube-15

完成層次：冬季前 11 部／21 筆既有公開用途有界查核；17 筆已有完整創作、18 筆已有 YouTube 外連，直接沿用有效資料。實際補強 2 部／3 筆用途，新增動畫／用途 0，另有 1 筆編曲缺口在兩輪定向查找後保留。18 筆用途的公開 JSON 逐項相同，不把沿用項目算作新增成果。固定範圍及 2026-10-14 截止日不變，實際核對日期 2026-10-15。本機檢查、GitHub 及 production 已通過，正式收尾見下方。

| 公開 theme ID | 歌曲 | 結果 |
| --- | --- | --- |
| `mf-ghost-3rd-season-op-1` | TIMELESS POWER feat. MOTSU | 沿用既有完整創作及有效影片，資料未改 |
| `mf-ghost-3rd-season-ed-1` | 予感の途中 Prod. ☆Taku Takahashi (m-flo) | 沿用既有完整創作及有效影片，資料未改 |
| `yuusha-party-wo-oidasareta-kiyou-binbou-op-1` | シルベ | 沿用既有完整創作及有效影片，資料未改 |
| `yuusha-party-wo-oidasareta-kiyou-binbou-ed-1` | sukuu | 沿用既有完整創作及有效影片，資料未改 |
| `tamon-kun-ima-docchi-op-1` | Sweet Magic | 沿用既有完整創作及有效影片，資料未改 |
| `tamon-kun-ima-docchi-ed-1` | 花と夢 | 沿用既有完整創作及有效影片，資料未改 |
| `tamon-kun-ima-docchi-ed-2` | RAIN | 沿用既有完整創作及有效影片，資料未改 |
| `saioshi-no-gikei-mederu-tame-nagaikishimasu-ed-1` | Endless You | 完整創作、官方公開影片、數位 Single、LIMITLESS 兩個 CD Album 版與 Track 5、LINE MUSIC 確切專輯 |
| `yuusha-kei-ni-shosu-choubatsu-yuusha-9004-tai-keimu-kiroku-op-1` | Kill the Noise | 沿用既有完整創作及有效影片，資料未改 |
| `fate-strange-fake-op-1` | PROVANT | 沿用既有完整創作及有效影片，資料未改 |
| `fate-strange-fake-ed-1` | 潜在的なアイ | 沿用既有完整創作及有效影片，資料未改 |
| `hanazakari-no-kimitachi-e-op-1` | アドレナ | 沿用既有完整創作及有效影片，資料未改 |
| `hanazakari-no-kimitachi-e-ed-1` | BABY | 沿用既有完整創作及有效影片，資料未改 |
| `majutsushi-kunon-wa-mieteiru-op-1` | ラケナリアの夢 | 完整創作、MV／無字幕 OP、官方配信；CD 限定 Acoustic feat.クノン／Instrumental、幻視録 兩個 EP 版及 Track 1／3／5 |
| `majutsushi-kunon-wa-mieteiru-ed-1` | Story feat. katagiri | 原文發行名義、實際歌唱 katagiri、詞曲／編曲交叉補證及 6 筆演奏／製作；Official Video／無字幕 ED、配信、ten. 預定 Album Track 6 |
| `goumon-baito-kun-no-nichijou-op-1` | GO GO PARADISE!! | 沿用既有完整創作及有效影片，資料未改 |
| `goumon-baito-kun-no-nichijou-ed-1` | 明日天気になぁれ | 沿用既有完整創作及有效影片，資料未改 |
| `ikoku-nikki-op-1` | ソナーレ | 沿用既有完整創作及有效影片，資料未改 |
| `ikoku-nikki-ed-1` | 言伝 | 沿用詞曲及影片；編曲未找到清楚證據，未借用 OP 編曲者 |
| `vigilante-boku-no-hero-academia-illegals-2nd-season-op-1` | CATCH!!! | 沿用既有完整創作及有效影片，資料未改 |
| `vigilante-boku-no-hero-academia-illegals-2nd-season-ed-1` | ミス・ユー | 沿用既有完整創作及有效影片，資料未改 |

已處理 anime ID：`curated-185753`、`curated-187264`、`curated-178005`、`curated-199446`、`curated-167152`、`curated-166617`、`curated-177580`、`curated-186333`、`curated-197731`、`curated-177385`、`curated-195322`。只有 `curated-199446`、`curated-186333` 的歌曲資料改變；Tamon 既有 RAIN 仍由原 extraThemes 輸出，沒有為全批搬移或重新追加。

### 實際差異

- 新增 3 個歌曲 ID 登記，仍為原有歌曲；新增 10 筆創作角色＝4 作詞、3 作曲、3 編曲（9 筆第一方、1 筆編曲交叉補證），6 筆樂器／錄音製作角色；Story 的 1 筆混合演唱名義改為實際歌唱 katagiri，KOHTA YAMAMOTO 保留在發行名義及作曲／編曲／演奏。全批 20／21 筆已有三角色，言伝 編曲仍缺；既有 17 筆名單沒有重搜。
- 新增 5 個不同官方 YouTube URL：ラケナリアの夢 MV／無字幕 OP、Story Official Video／無字幕 ED、Endless You 官方公開影片。後兩種一般 Official Video 不另推定為 MV／Art Track，所有影片均不推定 full／TV 或新錄音；沒有新增頻道／嵌入 metadata。
- 新增 2 個明示音源版本：ラケナリアの夢 Instrumental、feat.クノン（Aco.ver.）重新編曲版，長度均為 unknown。Acoustic 有官方 CD 限定說明，沒有填入配信版；本次編曲者、角色聲優是否實際歌唱等未明部分不由原版 credits 或角色表推定。
- 新增 6 個發行 ID／本曲收錄：1 數位 Single、3 CD Album 版、2 CD EP 版。LIMITLESS 兩版均 Track 5；幻視録 兩版保存本曲 Track 1／3／5，使用可沿用的共用 EP ID。ten. 的 2026-12-23 與 Track 6 來自截止日前的 2026-10-07 公告，明示「発売予定」，沒有當作已發售或已上架。
- 新增 13 筆外連：5 YouTube、1 LINE MUSIC 確切專輯、7 官方商品／配信；LINE MUSIC 保留公開 item ID 與 JP 入口，播放／購買可用性 unknown。新增 12 個用途層來源項目、37 組欄位證據；1 個實際重讀的既有歌曲來源更新。兩部作品 metadata、圖像／識別／播出來源及日期維持 2026-07-28，其他 18 筆用途逐項不變。
- 全目錄仍為 28 季、1,917 動畫頁、4,248 用途＝4,246 OP／ED＋2 IN；2020–2026 為 1,808 動畫頁、3,984 用途。唯一歌曲層 YouTube 外連由 732 增至 737；1,793 筆既有影片 metadata 不變。這些是用途／平台項目數，不能代替唯一歌曲數或整體完成率。

### 缺口與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| 言伝 | 兩輪定向查找未得到清楚的 ED 編曲；相鄰 OP「ソナーレ」的編曲不能套入，歌曲原資料不變 | Bialystocks／唱片公司、本曲演奏製作或 booklet 直接明示；官網及藝人公告目前 403，來源恢復或新正式 credits 時再查 |
| Story | 編曲採アニシル交叉補證；第一方 Gallery 明示詞曲、演唱與錄音團隊，沒有明示編曲；數位發行品類型及原版錄音識別未完整核對 | 官方完整曲目 credits、booklet 或發行品 metadata 明示；不把作曲或演奏自動當成編曲／演唱 |
| Acoustic 角色版 | 已證實不同的 CD 限定 Acoustic feat.クノン；該版本的獨立編曲／歌唱角色及錄音識別未齊，沒有填入未證實 CV credits 或配信收錄 | CD booklet 或官方版本完整 credits 可公開核對；保留 CD-only 邊界，不由另一版套入 |
| 幻視録 共用發行品 | 本批僅保存ラケナリアの夢的三個曲目位置；同張 EP 的另一首動畫 OP 留待該作品批次 | 到達該作品時沿用 `isekaijoucho-genshiroku-pccg-02489`、`isekaijoucho-genshiroku-canime`，補本曲曲序，不另建同一商品 ID |
| 預定 Album 與其他收錄 | ten. 為發售預定，實際發行／平台可用性及音源同一性未知；其他 OST／合輯、TV／full、Art Track／lyric／live 仍未全面查核 | 截止日獲調整至發售日後或有截止日前的明確最終資料，再核對實際發行；其餘只按新公告／識別資料觸發 |
| 存取及平台 | 個別 PONY CANYON 普通頁回應 403、KAMITSUBAKI 商品頁 429；沿用已讀公開索引及其他正式頁，未繞過。YouTube 嵌入、目的頁及 HK／TW 播放／購買未知 | 來源恢復、官方新外連或明確可用性任務後定向查；不把本機展示成功當作外部媒體成功 |

### 本機檢查與展示

- `npm test`：4 檔／5 個核心測試通過。`npm run build`：Astro 0 errors／warnings／hints、1,961 HTML、CSP 6 script／10 style hashes、Service Worker 與 3,918 公開產物通過。
- 發布 gate：6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過；依賴、設定、UI 及 parser 未改。7 個本機文件連結、`git diff --check` 及 repository `public:check`（239 檔）通過。
- 桌面 1536×1024 核對 11 部／21 筆及 JSON；手機 390×844 核對 2 部實際更新作品；六條閱讀流程含 KICS 品番搜尋、LINE MUSIC identity、CD 限定 Acoustic 與共用 EP、實際演唱／錄音團隊、未來發售標籤及 18 筆重用資料。0 app／CSP errors、0 自動 YouTube request、無橫向溢出。
- Browser plugin 不在可用清單，沿用 Playwright；第三方圖片攔截，測試證據及原始來源取回內容未加入公開 repository。

預覽入口：`/anime/saioshi-no-gikei-mederu-tame-nagaikishimasu/`、`/anime/majutsushi-kunon-wa-mieteiru/`。可搜尋 `Endless You`、`KICS-4259`、`ラケナリアの夢`，新增影片與專輯不會變成額外歌單列。

階段提交：`4a7bb14` 已保存第14批正式驗證與第15批啟動；本批資料及正式來源提交於發布驗收後另記。

下一批：**2026-winter-credits-youtube-16**，由 `hokuto-no-ken-kenou-gun-zako-tachi-no-banka-op-1` 接續，10 部／18 筆既有用途：`curated-198720`、`curated-204432`、`curated-194028`、`curated-166521`、`curated-185993`、`curated-183661`、`curated-189565`、`curated-194318`、`curated-187942`、`curated-203472`。沿用已完整的創作及官方影片，只追真正缺口，並在同頁保存已證實版本／收錄。第15批正式驗收後接續；整體目標未完成。

### 第15批正式發布與接續

- [PR #104](https://github.com/kyeunga25/anisonary/pull/104) 的 quality／Workers 預覽及 main `09548c4786d7c61f10a645a1c6c43a1e0b91c1ca` 的 quality 均通過；兩個階段提交正常 rebase 合併及推送，正式來源與已審閱分支 Git tree 一致。
- Cloudflare 正式部署完成，API 全目錄契約通過（28 季、1,917 唯一作品）；16 個頁面／公開資產（含冬季頁）及 11 個本批 anime JSON 共 27 項 byte digest 與本機相同，兩個未知頁面／API 回應真實 404；HTML 安全標頭及 API noindex／revalidation／無 permissive CORS 均符合設定。
- 正式桌面查核 11 部／21 用途、手機 2 部更新作品，六條閱讀流程通過；0 app／CSP errors、0 自動 YouTube request。首次部署後讀取 `/songs/` 曾出現 digest 差異，稍後普通重讀及完整 routes 重驗均相同；初次差異原因未另確證，沒有修改正常程式、清理線上資料或降低 gate。
- 缺口與續查條件保持，進入第16批；本批完成不代表 2020–2026 或二十年目標完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 14 production verification | `7b865a9` | `4a7bb14` |
| (add): winter song credits and official videos batch 15 | `09548c4` | `f649b5a` |

## 2026-10-15 批次：2026-winter-credits-youtube-16

完成層次：接續冬季 10 部／18 筆既有用途，有界查核後實際深化 7 部／13 筆；5 筆既有用途的完整 JSON 不變。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日不變，實際新來源核對日期 2026-10-15。新增動畫、歌曲用途均為 0；分類修正不另建用途。此處先記本機成果，正式發布驗收另記。

| 公開 theme ID | 曲名／處理 |
| --- | --- |
| `hokuto-no-ken-kenou-gun-zako-tachi-no-banka-op-1` | Blacker Co., Ltd.；沿用完整創作及有效影片，資料不變 |
| `hokuto-no-ken-kenou-gun-zako-tachi-no-banka-ed-1` | Elegy of the Enemies；沿用完整創作及有效影片，資料不變 |
| `choppers-op-1` | トニートニートニーチョッパー；官方歌唱／詞曲、用途改為 TS「CHOPPER’s はじめまして。ソング」，保留舊影片及公開 ID |
| `kirei-ni-shitemoraemasu-ka-op-1` | 綺麗。；沿用完整創作及有效影片，資料不變 |
| `kirei-ni-shitemoraemasu-ka-ed-1` | 若葉のころ；沿用完整創作及有效影片，資料不變 |
| `golden-kamuy-saishuushou-op-1` | 黄金の彼方；沿用完整創作及有效影片，資料不變 |
| `golden-kamuy-saishuushou-ed-1` | The Ballad；沿用詞曲及影片，補 CD Single 曲序／日期／品番與官方入口，編曲仍缺 |
| `kizoku-tensei-megumareta-umare-kara-saikyou-no-chikara-wo-eru-op-1` | Break off；完整創作、9 位團隊成員、MV、數位 Single／3 個 CD 版與確切平台 |
| `kizoku-tensei-megumareta-umare-kara-saikyou-no-chikara-wo-eru-ed-1` | You'll Be In My Heart 〜そばに〜；完整創作及角色歌唱、TV Size／Instrumental／Long Intro、Music Collection 跨碟曲序及確切平台 |
| `isekai-no-sata-wa-shachiku-shidai-op-1` | Magic；完整創作、無字幕 OP |
| `isekai-no-sata-wa-shachiku-shidai-ed-1` | Back to Back；完整創作、無字幕 ED、官方及確切配信入口 |
| `osananajimi-to-wa-love-comedy-ni-naranai-op-1` | あいらびゅ♡；原文演唱名義、4 位角色／聲優、詞曲及編曲交叉補證、4 個角色版、CD 曲序與無字幕 OP |
| `osananajimi-to-wa-love-comedy-ni-naranai-ed-1` | あまのじゃく；完整創作、Instrumental、CD 曲序與無字幕 ED |
| `yoroi-shinden-samurai-troopers-op-1` | YOAKE；完整創作、配信日期；影片沿用 |
| `yoroi-shinden-samurai-troopers-ed-1` | POWER；詞曲、編曲交叉補證、8 位團隊成員、配信日期及 GATHER 確切 Qobuz 專輯；影片沿用 |
| `mayonaka-heart-tune-op-1` | 月に向かって撃て；完整創作、混音／母帶、MV／Art Track、TVアニメver.／Instrumental、兩個 CD Single 版 |
| `mayonaka-heart-tune-ed-1` | 声の軌跡；完整創作，確切歌曲影片仍缺 |
| `mayonaka-heart-tune-ed-2` | ask for the moon；官方明示第11話插曲，改 IN 並保留 ID／序號；原文角色／聲優、完整創作、特別映像、屋上ver／inst、Album 曲序 |

已處理 anime ID：`curated-198720`、`curated-204432`、`curated-194028`、`curated-166521`、`curated-185993`、`curated-183661`、`curated-189565`、`curated-194318`、`curated-187942`、`curated-203472`。`curated-203472`（鷹之爪XX）既有用途為 0，兩輪定向查找未取得具名主題曲的清楚證據，沒有套用舊系列歌曲或將 manzo 的劇伴職務當成歌曲創作。

### 實際差異

- 13 個既有歌曲 ID 登記；44 筆新創作角色＝16 作詞、16 作曲、12 編曲，42 筆第一方、2 筆編曲交叉補證。17 筆團隊成員不自動當作本曲演唱者；新增 6 筆演唱、移除 3 筆舊合併名義，另有 2 筆混音／母帶。全批 16／18 筆有三項創作，CHOPPER’s 與 The Ballad 編曲未知。
- 新增 8 支確切歌曲影片：2 MV、1 Art Track、2 無字幕 OP、2 無字幕 ED、1 插曲特別映像；另新增 3 個官方 YouTube 配信專輯入口。沒有把 playlist 計作影片、MV 推定 full，或把藝人寄語當作歌曲影片。未新增頻道／嵌入 metadata。
- 新增 12 個音源版本＝4 角色版、4 Instrumental、4 演唱版（TV Size、Long Intro、TVアニメver.、屋上ver）。只有明示 TV Size 的 1 項採 TV 分類，其餘長度 unknown；Long Intro／屋上版本不推定重新編曲。あいらびゅ♡ 的四個角色版保留各自確證演唱，沒有成為四首新歌。
- 新增 11 個發行 ID＝9 Single 版（8 CD、1 數位）、1 三碟 Soundtrack、1 CD Album。Music Collection 的 ED 保存 Disc 1 Track 1、Disc 3 Track 1／4／9；另一張數位 OST 沒有本曲曲目證據，未附加。月に向かって撃て兩版保存 Track 1／4／5；井ノ華六花 Album 保存 Track 5／8／13。
- 新增 31 個外連＝8 YouTube 歌曲影片、3 YouTube 專輯、3 YouTube Music 專輯、3 Apple Music、3 Spotify、1 Qobuz 及 10 官方商品／配信。專輯入口保留 exact album／playlist ID；目的地播放／購買及地區可用性 unknown。新增 28 個用途層來源、更新 1 個實際重讀來源，100 組欄位證據。7 部作品 metadata 日期及未編輯的所有 seed 行保持原值。
- 最小相容分類支援 `TS`：authoring、公開型別／parser、排序、歌單／搜尋用途篩選及動畫標籤均已接通，未知分類仍 fail closed。CHOPPER’s 保留 `choppers-op-1`，顯示「主題歌」，不再計 OP；ask for the moon 保留 `mayonaka-heart-tune-ed-2` 及序號 2，以 IN 顯示。あいらびゅ(ハート) 舊文字保存在搜尋別名。
- 全目錄仍為 28 季、1,917 動畫頁、4,248 用途＝4,244 OP／ED＋3 IN＋1 TS；2020–2026 仍為 1,808 動畫頁、3,984 用途。唯一 YouTube 歌曲影片直連 737→745，另有 3 個官方 YouTube 配信專輯入口；1,793 筆既有影片 metadata 不變。以上不代表唯一歌曲數或目標完成率。

### 缺口與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| CHOPPER’s／The Ballad | 兩輪定向查找未取得清楚編曲資料；未由其他歌曲、製作人或團隊成員推定 | 官方單曲 credits、booklet、作者作品集或正版平台明示本曲編曲 |
| あいらびゅ♡／POWER | 編曲分別由正版 Gamers／Qobuz 交叉補證。HoneyWorks 第一方詞曲採官方團隊名義，未將第三方個別作者細分與團隊名義重複相加；POWER 官方名單與配信版詞曲署名粒度不同，保留第一方三名作者，不猜造對應 | 唱片或藝人完整本曲製作名單公布，才細分原作者、團隊名義及配信版差異 |
| 声の軌跡／アリーチェ | 未確認確切歌曲 MV／Art Track／creditless 的可追溯入口；前者保留影片缺口，後者只保存官方配信專輯。動畫 MUSIC 上兩支影片為藝人寄語，不當作歌曲影片 | 官方歌曲影片公告或 MUSIC／MOVIE 目的頁恢復後定向核對；不再循環搜尋一般列表 |
| 鷹之爪XX | 未取得具名 OP／ED／主題歌的核心證據，維持 0 筆；未與 NEO、GT、Golden Spell 等舊作混用 | 新系列官網、製作方或正片正式 credits 明示曲名及用途 |
| 音源與收錄 | TVアニメver.、Long Intro、屋上ver 的長度分類、獨立版本完整 credits／錄音識別及配信與 CD 音源等同關係仍未明；Music Collection／Album 的其他非本批插曲未擴充 | 官方曲目／booklet／識別資料明示；未公布的編曲、full、CV 不從原版或角色表套入 |
| 同系列與既有一般主題歌 | 鎧真傳第二季度的 BAD遺伝子／ばけもん已在 `curated-209800`，未重複加入冬季頁；其他舊批一般主題歌保留既有明示標籤，未在本批全量搬移 | 到達相應作品或分類修正批次時重用已核對官方用途，套用 TS 並保留既有公開 ID／媒體 |
| 存取及平台 | 貴族転生官網普通頁 403，採已讀公開索引；若干普通頁／YouTube 回應 cache miss 或未提供本文，未繞過、抓取媒體或使用非公開 API。外部播放、嵌入及地區可用性未實測 | 來源恢復、官方新入口或明確平台可用性任務時再查；本機／線上 UI 通過不代表外部歌曲播放成功 |

### 本機檢查與展示

- `npm test`：4 檔／5 個核心測試通過，含全目錄 JSON round-trip、IN／TS 篩選、穩定公開 ID、資料關係與來源。初次建置發現兩處排序表未包含 TS，已補齊；最終 `npm run build` 為 Astro 0 errors／warnings／hints、1,961 HTML、CSP 6 script／10 style hashes、Service Worker 及 3,918 公開產物通過。未降低任何有效 gate。
- 6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過。本機文件連結及 `git diff --check` 通過，repository `public:check` 通過（239 檔）；依賴、Cloudflare 設定及私隱邊界未改。
- 桌面 1536×1024 核對 10 部／18 筆與公開 JSON；手機 390×844 核對 4 部實際更新作品。六條閱讀流程含 TS 篩選／舊 ID、角色版與影片對應、跨碟曲序／playlist 身分、IN 分類／舊序號／證據、未知音源長度及 5 筆重用用途。0 app／CSP errors、0 自動 YouTube request、無橫向溢出。
- Browser plugin 不在可用清單，沿用 Playwright；第三方請求攔截，來源本文、測試腳本、截圖及 log 均未加入公開 repository。

預覽入口：`/anime/choppers/`、`/anime/osananajimi-to-wa-love-comedy-ni-naranai/`、`/anime/kizoku-tensei-megumareta-umare-kara-saikyou-no-chikara-wo-eru/`、`/anime/mayonaka-heart-tune/`；可搜尋 `あいらびゅ(ハート)`、`PCCG-02485`、`ask for the moon`，或篩選「主題歌」。

階段提交：`085bcf1` 已保存第15批正式驗證與第16批啟動；本批分類支援及歌曲資料分階段提交，正式來源與驗收於發布後另記。

下一批：**2026-winter-credits-youtube-17**，由 `maou-no-musume-wa-yasashi-sugiru-op-1` 接續，10 部／24 筆公開用途（seed 有 25 筆候選，含一筆既有排除項）：`curated-194742`、`curated-195515`、`curated-183984`、`curated-191967`、`curated-177679`、`curated-180746`、`curated-192261`、`curated-191205`、`curated-185039`、`curated-176276`。只補真正缺口、沿用完整創作及有效影片；處理既有重複／用途衝突時保留可解析的公開 ID。第16批正式驗收後接續，整體目標未完成。

### 第16批正式發布與接續

- [PR #105](https://github.com/kyeunga25/anisonary/pull/105) 的 quality／Workers 預覽及 main `12c059f7915dc4286d23d347a17adcb36deaa013` 的 quality 均通過；三個階段提交正常 rebase 合併及推送，正式來源 Git tree 及建置產物與已審閱分支一致。
- Cloudflare 正式部署完成，全目錄 API 契約通過（28 季、1,917 唯一作品）；16 個頁面／公開資產及 10 個本批 anime JSON 共 26 項 byte digest 與本機相同，兩個未知頁面／API 回應真實 404。HTML 安全標頭、API noindex／revalidation／無 permissive CORS 均符合設定。
- 正式桌面核對 10 部／18 筆、手機 4 部更新作品、六條閱讀流程通過；0 app／CSP errors、0 自動 YouTube request。TS 主題歌篩選、IN 舊 ID／序號、角色版、跨碟曲序及不同影片／專輯入口已在正式網站驗證。
- 缺口與續查條件保留，進入第17批；本批完成不代表 2020–2026 或二十年目標完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 15 production verification | `d6e79bc` | `085bcf1` |
| (feat): distinguish general theme songs from OP and ED | `f7d1034` | `12b762e` |
| (add): winter song credits and official videos batch 16 | `12c059f` | `b353028` |

## 2026-10-15 批次：2026-winter-credits-youtube-17

完成層次：冬季 10 部／24 筆公開用途，實際深化 8 部／20 筆；原 seed 有 25 筆候選，既有排除 Inori 不計入。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日不變；新證據實際核對 2026-10-15。下方先記本機成果，正式發布與驗收另記。

| 公開 theme ID | 曲名／處理 |
| --- | --- |
| `maou-no-musume-wa-yasashi-sugiru-op-1` | We Can Do!!；原文角色／創作；插曲分類與共用 EP |
| `maou-no-musume-wa-yasashi-sugiru-ed-1` | いっこにこにこ；原文角色／創作；插曲分類與共用 EP |
| `maou-no-musume-wa-yasashi-sugiru-ed-2` | ドゥならできるよ；原文角色／創作；插曲分類與共用 EP |
| `yuusha-party-ni-kawaii-ko-ga-ita-no-de-kokuhaku-shitemita-op-1` | Lavish!!；完整創作、角色／solo 版本及官方入口 |
| `yuusha-party-ni-kawaii-ko-ga-ita-no-de-kokuhaku-shitemita-ed-1` | キミ攻略ゲーム；完整創作、角色／solo 版本及官方入口 |
| `yuusha-party-ni-kawaii-ko-ga-ita-no-de-kokuhaku-shitemita-ed-2` | YES！サマーラブ♡；完整創作、角色／solo 版本及官方入口 |
| `arne-no-jikenbo-op-1` | Q . E . D .；完整創作、影片及已證實音源 |
| `arne-no-jikenbo-ed-1` | 人形の街；完整創作、影片及已證實音源 |
| `jigoku-sensei-nube-2025-part-2-op-1` | ERASE；完整創作與不同官方影片 |
| `jigoku-sensei-nube-2025-part-2-ed-1` | MAGICAL；完整創作與不同官方影片 |
| `darwin-jihen-op-1` | Make Me Wonder；沿用完整創作及有效影片，資料不變 |
| `darwin-jihen-ed-1` | Turn It Up；沿用完整創作及有效影片，資料不變 |
| `shibou-yuugi-de-meshi-wo-kuu-op-1` | ¬Ersterbend（ノット エルシュテルベント）；沿用完整資料／純器樂證據，重複曲目仍排除 |
| `shibou-yuugi-de-meshi-wo-kuu-ed-1` | 祈り；沿用完整資料／純器樂證據，重複曲目仍排除 |
| `29-sai-dokushin-chuuken-boukensha-no-nichijou-op-1` | 君が灯してくれた光を今；完整創作、實際演唱者及日期 |
| `29-sai-dokushin-chuuken-boukensha-no-nichijou-ed-1` | 君の隣は空気が美味しい；完整創作、實際演唱者及日期 |
| `okiraku-ryoushu-no-tanoshii-ryouchi-bouei-op-1` | おきらくぜ～しょん；完整創作、實際歌唱、共用 Single／OST 與影片 |
| `okiraku-ryoushu-no-tanoshii-ryouchi-bouei-ed-1` | Make it；完整創作、實際歌唱、共用 Single／OST 與影片 |
| `okiraku-ryoushu-no-tanoshii-ryouchi-bouei-ed-2` | Magic Clock；完整創作、實際歌唱、共用 Single／OST 與影片 |
| `toumei-otoko-to-ningen-onna-sonouchi-fuufu-ni-naru-futari-op-1` | Ding-dong；完整創作或交叉補證、影片／共用 EP |
| `toumei-otoko-to-ningen-onna-sonouchi-fuufu-ni-naru-futari-ed-1` | 星眼鏡；完整創作或交叉補證、影片／共用 EP |
| `mato-seihei-no-slave-2-op-1` | 光よ、僕に。；完整創作、三曲 TV／Instrumental 及 CD 商品 |
| `mato-seihei-no-slave-2-ed-1` | Cipher Cipher；完整創作、三曲 TV／Instrumental 及 CD 商品 |
| `mato-seihei-no-slave-2-ed-2` | LOVE LOVE ビーム；完整創作、三曲 TV／Instrumental 及 CD 商品 |

已處理 anime ID：`curated-194742`、`curated-195515`、`curated-183984`、`curated-191967`、`curated-177679`、`curated-180746`、`curated-192261`、`curated-191205`、`curated-185039`、`curated-176276`。

### 實際差異

- 新增動畫 0、歌曲用途 0；實際深化 8 部／20 筆，4 筆完整用途或純器樂片頭的 JSON 不變。新增 67 筆歌曲創作角色＝22 作詞、23 作曲、22 編曲；64 筆第一方、Ding-dong 的 3 筆採公開 credits 索引交叉補證。全批 23 筆有完整三角色；另一筆既有純器樂 OP 不適用作詞／歌唱，不當作缺口重搜。
- 新增 12 筆實際歌唱資料、移除 7 筆舊合併／羅馬字或誤列創作者的歌唱名義。Make it 的歌唱更正為大渕野々花，emon(Tes.) 保留為完整創作者；Hanon／Kotoha 保留在各自演唱，HoneyWorks／MARUMOCHI 為創作團隊。いっこにこにこ、ドゥならできるよ及 YES！サマーラブ♡ 恢復原文角色／聲優；舊羅馬字曲名保存在搜尋別名。
- 官網列作第12話插曲的ドゥならできるよ改 IN，保留 `maou-no-musume-wa-yasashi-sugiru-ed-2` 及序號 2。Magic Clock 保留 ED2，補上官方明示第9話特殊 ED；沒有重排原有 ID、slug 或錨點。祈り的既有重複 Inori 排除項未重新公開。
- 新增 16 支歌曲影片外連：6 MV、1 藝人公開影片、1 Art Track、2 官方音訊（含 TV size）、1 無字幕 OP、2 無字幕 ED、1 OP 映像、1 OP リリックver.、1 特殊 ED／舞蹈公告下的未細分官方影片。LOVE LOVE ビーム 的 Music Video Full 保留影片原標籤，未據此將 CD 錄音推為 full；其餘同樣不由影片形式推定錄音版本。沒有新增頻道／嵌入 metadata。
- 新增 13 個音源項目＝7 個明示 TV size、5 Instrumental、1 セシリア角色版；角色版另有該版本明示的歌唱及三項創作共 4 筆獨立 credits。TV 音源依官方版本名或 Soundtrack 明示說明，其餘長度 unknown；沒有由無字幕影片建立新錄音。
- 新增 20 個唯一發行 ID／27 筆歌曲收錄關係：2 EP 版／4 關係、17 Single 版／20 關係、1 Soundtrack／3 關係。14 個 CD 版、5 數位 Single、1 數位 OST。ASOVIVA!!! 兩版在兩部動畫共用 ID，分別 Track 2／4；Make it 三個 CD 版在兩首 ED 共用 ID，分別 Track 1／2；Soundtrack 的三個 TV 版為 Track 46／47／48。Make it Instrumental 只連到已證實收錄的直筆サイン入り限定盤，未套到另外兩版。
- 新增 37 個外連＝16 YouTube、21 官方商品／配信；新增 45 個用途層來源及 149 組欄位證據。只為實際查閱的新證據保存 2026-10-15，未將舊來源日期整批更新；8 部作品 metadata 日期及未編輯 seed 行維持基線。
- 全目錄仍為 28 季、1,917 動畫頁、4,248 用途＝4,243 OP／ED＋4 IN＋1 TS；2020–2026 為 1,808 動畫頁、3,984 用途。唯一 YouTube 歌曲影片直連 745→761，另有前批 3 個官方 YouTube 配信專輯入口；1,793 筆既有影片 metadata 不變。數量不是唯一歌曲數或整體完成率。

### 缺口與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| 7 筆歌曲影片 | 魔王の娘三首、Lavish!!、キミ攻略ゲーム、星眼鏡及光よ、僕に。尚未取得可確認對應的確切歌曲影片；保留官方音樂／配信頁。Cloud Nine 公告把同一 YouTube URL 放在 OP、ED 兩欄，本批未任選一首套入或複製兩份 | 官方新影片公告或頁面恢復後，直接確認影片與歌曲對應；兩輪定向查找後不輪流重搜所有索引 |
| Ding-dong 創作 | 完整角色採已讀公開 credits 索引交叉補證；藝人普通頁確認歌曲、OP、MV、數位 Single 及日期，未提供完整製作角色；編曲原文採和田建一郎 | 藝人／唱片公司、本曲 MV 可讀完整 description 或正式 booklet 明示後補第一方角色證據 |
| Maou 特殊用途 | 官網 MUSIC 將ドゥならできるよ列為第12話插曲，個別播放記錄索引列 ED；本批依第一方分類顯示 IN 並保留導航 ID，未將同一次使用重複算為兩筆 | 官方更具體的第12話 OP／ED／插曲使用表或正式片尾資料可公開核對時釐清雙重用途 |
| YES！サマーラブ♡ | 原三人 ED、セシリア solo 發行角色版分開；1 個確切官方影片入口的公告同時談及無字幕／舞蹈，尚未明確細分該 URL 的形式。另一首同團隊插曲不自動增加 ED | 可讀影片標題／官方逐項外連明示形式；若正式集數使用另有角色版明示，再以既有 ID／版本記錄接續 |
| 版本與發行品 | TV／Instrumental／角色版的錄音識別、CD 與數位同一性，以及其他專輯／OST 收錄仍未全查。KING 的人形の街數位商品確認三曲及品番，未明確 Single／EP 類別，先保存版本及官方商品入口 | 正式 metadata／booklet／ISRC 或明確產品分類出現，不由三首曲目數推定 EP，不將原版編曲直接套到未知版本 |
| 官方入口與可用性 | 勇者官網普通頁 404，透明男官網及 Nube MOVIE 的部分普通讀取 403，石原頁面 timeout，採仍可核對的官方公開索引／其他藝人頁；しょぼいカレンダー本文 403，交叉來源明示索引核對，沒有繞過 | 來源恢復、官方新外連或明確地區／嵌入任務時再查。所有新增媒體外部播放、嵌入及 HK／TW 可用性 unknown；本機／線上 UI 成功不等於實際播放 |

### 本機檢查與展示

- `npm test`：4 檔／5 個核心測試通過。`npm run build`：Astro 0 errors／warnings／hints、1,961 HTML、CSP 6 script／10 style hashes、Service Worker 與 3,918 公開產物通過。
- 6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過；本批未改程式、依賴或 Cloudflare 設定。30 個本機文件連結及 `git diff --check` 通過，repository `public:check` 通過（239 檔）；不另外重跑已通過的子項。
- 桌面 1536×1024 核對 10 部／24 筆及公開 JSON，手機 390×844 核對 4 部；8 條閱讀流程含舊曲名／ID／IN、共用 EP／Single／OST、不同演唱角色、精確曲序、不同影片形式與 4 筆重用資料。0 app／CSP errors、0 自動 YouTube request、無橫向溢出。
- 首次本機腳本以 Make it 字樣選列，合理命中本曲及共用同名 Single 的另一首歌；腳本改選確切曲名後全部通過，未修改正常搜尋程式或降低 gate。Browser plugin 不在可用清單，沿用 Playwright；第三方請求攔截，原始本文、測試腳本、截圖與 log 未提交。

預覽入口：`/anime/maou-no-musume-wa-yasashi-sugiru/`、`/anime/okiraku-ryoushu-no-tanoshii-ryouchi-bouei/`、`/anime/arne-no-jikenbo/`、`/anime/mato-seihei-no-slave-2/`。可搜尋 `Dou nara Dekiru yo`、`PCCG-02497`、`Make it` 或 `YES! Summer Love`；共用收錄可合理命中多首歌曲，各用途仍只占一列。

階段提交：`6917281` 已保存第16批正式驗證與第17批啟動；本批歌曲提交及正式來源於發布驗收後另記。

下一批：**2026-winter-credits-youtube-18**，由 `odayaka-kizoku-no-kyuuka-no-susume-op-1` 接續，10 部／22 筆公開用途：`curated-182771`、`curated-183270`、`curated-191718`、`curated-200556`、`curated-189137`、`curated-185514`、`curated-172463`、`curated-203296`、`curated-187941`、`curated-181443`。沿用既有完整創作及有效影片，只查真正缺口；完成正式發布驗收後接續，2020–2026 及長期目標仍未完成。

### 第17批正式發布與接續

- [PR #106](https://github.com/kyeunga25/anisonary/pull/106) 的 quality／Workers 預覽及 main `4b6c2696981a09afd73d983706fd0b3819a4520b` 的 quality 均通過；兩個階段提交正常 rebase 合併與推送，正式來源 Git tree 及產物與已審閱分支相同。
- Cloudflare 正式部署完成，全目錄 API 契約通過（28 季、1,917 唯一作品）；16 個頁面／公開資產及 10 個本批 anime JSON 共 26 項 byte digest 相同，兩個未知頁面／API 回應真實 404，HTML 安全標頭與 API noindex／revalidation／無 permissive CORS 符合設定。
- 正式桌面核對 10 部／24 筆、手機 4 部與 8 條閱讀流程通過；0 app／CSP errors、0 自動 YouTube request。原文角色與 IN 舊 ID／序號、共用 EP／Single／OST、TV／Instrumental、角色版及不同媒體入口均已正式驗證。
- 缺口與續查條件保持，進入第18批；本批完成不代表 2020–2026 或長期目標完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 16 production verification | `7931cf9` | `6917281` |
| (add): winter song credits and official videos batch 17 | `4b6c269` | `77b154c` |

## 2026-10-15 批次：2026-winter-credits-youtube-18

完成層次：冬季 10 部／22 筆公開用途，實際深化 8 部／18 筆；4 筆既有資料完全不變。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日不變；新證據實際核對 2026-10-15。下方為本機成果，正式提交、部署及驗收於發布後另記。

| 公開 theme ID | 曲名／處理 |
| --- | --- |
| `odayaka-kizoku-no-kyuuka-no-susume-op-1` | Gypso；完整創作、不同影片形式、Off Vocal／ガッシュver.及 Single／Mini Album |
| `odayaka-kizoku-no-kyuuka-no-susume-ed-1` | うっすら；完整創作、不同影片形式、Off Vocal／ガッシュver.及 Single／Mini Album |
| `eris-no-seihai-op-1` | Happy Ever After feat. 由薫；完整創作、兩位 OP 演唱者、數位／CD Single、ED MV／無字幕 ED |
| `eris-no-seihai-ed-1` | カメリア；完整創作、兩位 OP 演唱者、數位／CD Single、ED MV／無字幕 ED |
| `omae-gotoki-ga-maou-ni-kateru-to-omou-na-to-yuusha-party-wo-tsuihou-sareta-node-outo-de-kimama-ni-kurashitai-op-1` | Liberator；完整創作、I need 兩個 CD Single 版／Instrumental／MV |
| `omae-gotoki-ga-maou-ni-kateru-to-omou-na-to-yuusha-party-wo-tsuihou-sareta-node-outo-de-kimama-ni-kurashitai-ed-1` | I need；完整創作、I need 兩個 CD Single 版／Instrumental／MV |
| `high-school-kimengumi-2026-op-1` | ファンキースパイス feat.TOMOO；原文曲名／演唱、完整創作或交叉補證、AnimeVersion／AnimeEDIT／Inst.及 CD 曲序 |
| `high-school-kimengumi-2026-ed-1` | ステキッ！！；原文曲名／演唱、完整創作或交叉補證、AnimeVersion／AnimeEDIT／Inst.及 CD 曲序 |
| `douse-koishite-shimaunda-season-2-op-1` | LとR；第二期完整創作交叉補證、團隊、數位配信及 OP 兩種官方入口 |
| `douse-koishite-shimaunda-season-2-ed-1` | 初恋；第二期完整創作交叉補證、團隊、數位配信及 OP 兩種官方入口 |
| `champignon-no-majo-op-1` | 魔法使いの日記；沿用既有創作與有效影片；ED 編曲仍缺，資料不變 |
| `champignon-no-majo-ed-1` | 君は；沿用既有創作與有效影片；ED 編曲仍缺，資料不變 |
| `jujutsu-kaisen-shimetsu-kaiyuu-zenpen-op-1` | AIZO；沿用完整創作及有效影片，資料不變 |
| `jujutsu-kaisen-shimetsu-kaiyuu-zenpen-ed-1` | よあけのうた；沿用完整創作及有效影片，資料不變 |
| `cardfight-vanguard-divinez-genma-seisen-hen-op-1` | 幻界；原文曲名／演唱、完整創作或交叉補證、後半 OP 及 BLAZE 共用發行 ID |
| `cardfight-vanguard-divinez-genma-seisen-hen-op-2` | ワールズエンドトリガー；原文曲名／演唱、完整創作或交叉補證、後半 OP 及 BLAZE 共用發行 ID |
| `cardfight-vanguard-divinez-genma-seisen-hen-ed-1` | ギラギラ；原文曲名／演唱、完整創作或交叉補證、後半 OP 及 BLAZE 共用發行 ID |
| `tensei-shitara-dragon-no-tamago-datta-op-1` | Gliding Claw；完整創作、AYAME／兩位 ED 實際演唱、Digital Single、TV／Instrumental |
| `tensei-shitara-dragon-no-tamago-datta-ed-1` | Sky Clipper；完整創作、AYAME／兩位 ED 實際演唱、Digital Single、TV／Instrumental |
| `dark-moon-kuro-no-tsuki-tsuki-no-saidan-op-1` | One In A Billion (Japanese Ver.)；原文詞曲、日文 OP 譯詞／錄音、共用合輯 Track 1–3 與官方入口 |
| `dark-moon-kuro-no-tsuki-tsuki-no-saidan-ed-1` | CRIMINAL LOVE；原文詞曲、日文 OP 譯詞／錄音、共用合輯 Track 1–3 與官方入口 |
| `dark-moon-kuro-no-tsuki-tsuki-no-saidan-ed-2` | Fatal Trouble；原文詞曲、日文 OP 譯詞／錄音、共用合輯 Track 1–3 與官方入口 |

已處理 anime ID：`curated-182771`、`curated-183270`、`curated-191718`、`curated-200556`、`curated-189137`、`curated-185514`、`curated-172463`、`curated-203296`、`curated-187941`、`curated-181443`。

### 實際差異

- 新增動畫 0、歌曲用途 0；深化 8 部／18 筆。新增 99 筆歌曲創作角色＝41 作詞、40 作曲、18 編曲，另有 miwaflower 的 1 筆日文譯詞。83 筆詞曲編曲有第一方資料（含正版 Bugs 的逐項 credits），16 筆採 ORICON／歌ネット／公開播放記錄索引交叉補證。全批 18／22 筆有完整三項；君は及 ENHYPEN 三首的編曲仍空白。
- 新增 8 筆實際歌唱、移除 5 筆舊合併／羅馬字或企劃名義的歌唱資料；新增 12 筆團隊成員，未推定其逐首參與。Sizuk 保留藝人企劃名義、AYAME 為官方明示實際歌唱；導凰與朔雀分列。ME:I 官方說明本次音源與現有成員編制不同，未套用現行名單。
- 恢復ファンキースパイス feat.TOMOO、ステキッ！！、幻界、ワールズエンドトリガー、ギラギラ及原文藝人；羅馬字曲名保存在搜尋別名。所有既有 ID、slug、用途序號與 OP／ED 分類保持；先導者後半 OP 仍在既有冬季作品，沒有新增季度重複用途。蘑菇魔女兩筆既有排除候選未重新公開。
- 新增 14 支歌曲影片外連：Gypso／ステキッ！！的 Collaboration MV、うっすら Lyric Video、カメリア MV／無字幕 ED、I need MV、BREIMEN MV、LとR 無字幕 OP／藝人影片、幻界作者官方影片、青木陽菜 MV、ギラギラ MV、日文 One In A Billion 的官網 OP／作者頁影片。未細分的影片保持一般標籤，沒有由 MV 推定 full、由無字幕影片建立新錄音或猜造嵌入 metadata。
- 新增 12 個音源＝7 Instrumental／Off Vocal、5 演唱版（Gypso ガッシュver.、兩首奇面組 AnimeVersion／AnimeEDIT、Gliding Claw TV size、One In A Billion 日文版）。只有明示 TV size 的 1 項採 TV，其餘長度 unknown；Gypso 的 Album 版另保存本版本明示 ARAKI 三項創作，未把單曲與 Album 版視作同一錄音。
- 新增 23 筆歌曲收錄關係／21 個涉及發行 ID，其中 17 個為全目錄新 ID＝12 Single、4 CD Album 版、1 Digital Soundtrack Compilation；另外 4 個 BLAZE EP 版沿用已存在 ID，未製造重複商品。ワールズエンドトリガー為 Track 2、既有 Ephemeral 為 Track 1；ENHYPEN 三用途共用一合輯 ID，為 Track 1／2／3。Gypso ガッシュver.為兩個 Mini Album CD 版 Track 4；曲目未明示的其他 Album／OST 未擴充。
- 新增 68 個外連＝14 YouTube 歌曲影片、2 官方 YouTube 配信專輯、8 YouTube Music、8 Apple Music、8 Spotify、1 Qobuz、3 Bugs 及 24 官方商品／配信。只從官方實際外連保存 exact album／playlist ID，移除追蹤 query；CD 與配信音源等同性、地區播放／購買可用性 unknown。
- 新增 53 個用途層來源、更新 8 個實際重讀來源及 168 組欄位證據；其餘來源日期未改。8 部作品 metadata 日期及所有未編輯 seed 行保留基線。
- 全目錄仍為 28 季、1,917 動畫頁、4,248 用途＝4,243 OP／ED＋4 IN＋1 TS；2020–2026 為 1,808 動畫頁、3,984 用途。唯一 YouTube 歌曲影片直連 761→775，另有 5 個官方 YouTube 配信專輯入口；1,793 筆既有影片 metadata 不變。數量不是唯一歌曲數或完成率。

### 缺口與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| 君は及 ENHYPEN 三曲 | 君は兩輪定向查找仍無清楚編曲；未把 Just You and I 等別曲資料套入。ENHYPEN 第一方作者／授權曲目只明示詞曲／日文譯詞，沒有可採用的編曲，未把相同詞曲名單或 Producer 自動列作編曲 | 官方 booklet、作者作品集或正版曲目明示本曲 arrangement；保留已確認詞曲，不再重搜一般歌詞頁 |
| 7 筆歌曲影片 | Happy Ever After、Liberator、初恋、Gliding Claw、Sky Clipper、CRIMINAL LOVE、Fatal Trouble 未取得可逐首追溯且明確對應的確切影片；保留官方配信及正版專輯。DARK MOON 官網把兩首 ED 的多支影片並列，未任意分配；普通頁及兩輪定向查找後保留缺口 | 官方逐項影片公告、可讀標題／description 或恢復的作者／唱片外連；只定向核對本曲，不輪流掃全部索引 |
| 16 筆創作交叉補證 | 奇面組部分角色、第二期戀愛兩首及ギラギラ仍以授權曲目／公開索引補證；未使用奇面組藝人介紹中的另一首 MELODY credits，也未把第一期戀愛主題曲作者套入第二期 | 本曲官方完整 credits 可讀後補第一方證據，保留現有逐欄位來源與核對日期 |
| 音源與專輯 | AnimeVersion／AnimeEDIT、Album 版與日文版未明示 full／TV 長度、ISRC／重新編曲／錄音等同性；只有日文 OP 已證實新日文詞及歌唱，兩首 ED 沒有改成日文版。berry meet 產品只明示 DIGITAL，未由曲目數猜 Single／EP | 官方版本說明、booklet 或錄音識別公布；未有確切曲序的其他作品收錄與個別團隊歌唱不擴充 |
| 來源存取與平台 | エリス音樂頁及 BLAZE 普通商品頁 404，使用已讀官方公開索引；ドラたま普通首頁與 Sizuk 頁 403，沒有繞過。若干 YouTube 回應 cache miss，採官方可追溯外連。原始本文、頁面副本及媒體未保存公開 | 來源恢復或官方新入口時再查；UI 成功不等於外部歌曲播放、嵌入或 HK／TW 可用 |

### 本機檢查與展示

- `npm test`：4 檔／5 個核心測試通過。`npm run build`：Astro 0 errors／warnings／hints、1,961 HTML、CSP 6 script／10 style hashes、Service Worker 與 3,918 公開產物通過。
- 6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過；本批未改程式、依賴或 Cloudflare 設定。30 個本機文件連結、repository `public:check`（239 檔）及 `git diff --check` 通過；正式環境未以本機檢查代替。
- 桌面 1536×1024 核對 10 部／22 筆及公開 JSON，手機 390×844 核對 4 部；8 條閱讀流程含羅馬字別名／穩定 ID、原文曲名與歌唱、Gypso Album 版本／曲序、BLAZE 跨作品共用 ID、AYAME 與企劃名義、日文譯詞／三曲共用合輯、第二期創作及影片／playlist 分類。0 app／CSP errors、0 自動 YouTube request、無橫向溢出。
- 已實際檢視桌面 Album／版本及手機日文版／合輯頁面；Browser plugin 不在可用清單，沿用 Playwright，第三方請求攔截。測試腳本、原始本文、截圖與 log 未提交。

預覽入口：`/anime/odayaka-kizoku-no-kyuuka-no-susume/`、`/anime/high-school-kimengumi-2026/`、`/anime/cardfight-vanguard-divinez-genma-seisen-hen/`、`/anime/dark-moon-kuro-no-tsuki-tsuki-no-saidan/`。可搜尋 `Funky Spice feat. TOMOO`、`World's End Trigger`、`ガッシュ`、`BLAZE` 或 `miwaflower`；不同錄音及共用發行不增加歌單列數。

階段提交：`7201694` 已保存第17批正式驗收及第18批啟動；本批歌曲提交與正式來源於發布驗收後另記。

下一批：**2026-winter-credits-youtube-19**，由 `hell-mode-yarikomi-zuki-no-gamer-wa-haisettei-no-isekai-de-musou-suru-op-1` 接續，10 部／20 筆 seed 用途：`curated-185262`、`curated-187901`、`curated-202419`、`curated-203148`、`curated-179062`、`curated-163144`、`curated-166613`、`curated-183660`、`curated-184951`、`curated-187062`。啟動時以公開 JSON 確認候選排除與實際用途數；沿用完整名單及有效影片，只補真正缺口。第18批正式驗收後接續，2020–2026 及長期目標仍未完成。

### 第18批正式發布與接續

- [PR #107](https://github.com/kyeunga25/anisonary/pull/107) 的 quality／Workers 預覽及 main `8feffaf35b7dfb51d92b24371d2f9424f81f9be4` 的 quality 均通過；兩個階段提交正常 rebase 合併及推送，正式來源 Git tree 與產物和已審閱分支相同。
- Cloudflare 正式部署完成。首輪正式檢查曾取得舊動畫詳情／季度頁，造成 card/detail 差異；稍後普通重讀四個受影響入口已與本機相同，原因尚未確定。隨後重新執行失敗的完整正式檢查均通過，未改正常程式、放寬 gate 或將初次失敗記作成功。
- 最終全目錄 API 契約通過（28 季、1,917 唯一作品）；16 個頁面／公開資產及 10 個本批 anime JSON 共 26 項 byte digest 相同，兩個未知頁面／API 為真實 404。HTML 安全標頭、API noindex／revalidation／無 permissive CORS 均符合設定。
- 正式桌面核對 10 部／22 筆、手機 4 部及 8 條閱讀流程通過；0 app／CSP errors、0 自動 YouTube request。原文曲名／歌唱、Gypso Album 版、跨作品共用 BLAZE、日文譯詞／合輯及影片／playlist 分類已正式驗證。
- 本批缺口與續查條件保持，進入第19批；2020–2026 深化及長期目標均未完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 17 production verification | `146d428` | `7201694` |
| (add): winter song credits and official videos batch 18 | `8feffaf` | `3891f61` |

## 2026-10-15 批次：2026-winter-credits-youtube-19

完成層次：原冬季 10 部／20 筆，加上同團隊新官方公告觸發的第18批 Sky Clipper 缺口（1 部／2 筆基線，僅 ED 新增 MV），共核對 11 部／22 個既有公開 ID。合併同一 ED 的重複項後為 21 筆正規用途，實際深化 9 部／16 筆，5 筆完全不變。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日不變；新證據實際核對 2026-10-15。下方為本機成果，正式發布後另記驗收。

| 公開 theme ID | 曲名／處理 |
| --- | --- |
| `hell-mode-yarikomi-zuki-no-gamer-wa-haisettei-no-isekai-de-musou-suru-op-1` | ハク；完整創作／實際歌唱、第一期無字幕影片、TV 音源、Single／兩版 Album |
| `hell-mode-yarikomi-zuki-no-gamer-wa-haisettei-no-isekai-de-musou-suru-ed-1` | Sanctuary；完整創作／實際歌唱、第一期無字幕影片、TV 音源、Single／兩版 Album |
| `dead-account-op-1` | デッドエンド；完整創作、數位 Single 及 ED MV |
| `dead-account-ed-1` | 来世はどうせ；完整創作、數位 Single 及 ED MV |
| `omae-wa-mada-gunma-wo-shiranai-reiwa-ban-ed-1` | 上毛かるた～令和版；作詞／作曲及既有無字幕 ED 形式補證；編曲仍空白 |
| `hoppe-chan-sun-oukoku-to-kuro-hoppe-dan-no-himitsu-op-1` | Hope & Jump (feat. Crystal Kay)；完整創作、featured artist、Digital Single／三版 WONDER YARD Track 9 |
| `enen-no-shouboutai-san-no-shou-part-2-op-1` | Ignis -イグニス-；完整創作、重複 ED 合併與舊 ID、三版 Ignis CD、特殊 ED／合輯 |
| `enen-no-shouboutai-san-no-shou-part-2-ed-1` | Speak of the Devil；完整創作、重複 ED 合併與舊 ID、三版 Ignis CD、特殊 ED／合輯 |
| `enen-no-shouboutai-san-no-shou-part-2-ed-2` | Speak of the Devil feat. Masato from coldrain；合併至既有 ED1；保留舊 ID 別名及可解析錨點，不新增獨唱錄音 |
| `enen-no-shouboutai-san-no-shou-part-2-ed-3` | 爆走夢歌；完整創作、重複 ED 合併與舊 ID、三版 Ignis CD、特殊 ED／合輯 |
| `trigun-stargaze-op-1` | ピカレスクヒーロー；既有完整三項創作及有效影片沿用；無修改 |
| `trigun-stargaze-ed-1` | スターダスト；既有完整三項創作及有效影片沿用；無修改 |
| `jigokuraku-2nd-season-op-1` | かすかなはな；既有完整三項創作及有效影片沿用；無修改 |
| `jigokuraku-2nd-season-ed-1` | PERSONAL；既有完整三項創作及有效影片沿用；無修改 |
| `kaya-chan-wa-kowakunai-op-1` | まぼろしの行方；完整創作、角色／聲優／歌唱、共用 EP、二人／角色音源及 Album |
| `kaya-chan-wa-kowakunai-ed-1` | Playmour feat. カヤちゃん；完整創作、角色／聲優／歌唱、共用 EP、二人／角色音源及 Album |
| `seihantai-na-kimi-to-boku-op-1` | メガネを外して；完整創作、橋本絵莉子實際歌唱、TV／Instrumental／Remix 與兩個 Single |
| `seihantai-na-kimi-to-boku-ed-1` | ピュア feat. 橋本絵莉子；完整創作、橋本絵莉子實際歌唱、TV／Instrumental／Remix 與兩個 Single |
| `hikuidori-op-1` | Hamidashi Gomen；原文曲名／藝人、完整創作、兩種影片、Single／EP／配信日期 |
| `hikuidori-ed-1` | Kagerou；原文曲名／藝人、完整創作、兩種影片、Single／EP／配信日期 |
| `tensei-shitara-dragon-no-tamago-datta-op-1` | Gliding Claw；Gliding Claw 既有資料沿用；無修改 |
| `tensei-shitara-dragon-no-tamago-datta-ed-1` | Sky Clipper；只補 ED Sky Clipper 的官方 MV；其餘資料沿用 |

已處理 anime ID：`curated-185262`、`curated-187901`、`curated-202419`、`curated-203148`、`curated-179062`、`curated-163144`、`curated-166613`、`curated-183660`、`curated-184951`、`curated-187062`、`curated-187941`。

### 實際差異

- 新增動畫 0、新增用途 0；合併 1 個重複 ED，保留 `enen-no-shouboutai-san-no-shou-part-2-ed-2` 別名、舊曲名搜尋及錨點。Speak of the Devil 的短標題與 feat. Masato 發行名義為同一首已發行 ED，沒有已證實的獨唱錄音；未把合作表記再算一首。爆走夢歌依藝人官方明示保留 ED3／最終話特殊 ED，沒有因動畫公告的「劇中」字樣改成 IN。
- 新增 54 筆歌曲創作角色＝18 作詞、18 作曲、18 編曲。53 筆由第一方或正版 Qobuz 逐項 credits 支持，ハク編曲 1 筆採歌ネット授權曲目交叉補證；本批正規用途 20／21 筆有三項創作，群馬 ED 的編曲仍未知。另新增 4 筆 featured artist／混音／母帶角色、9 筆團隊成員，未將團隊名單自動展開成逐首詞曲作者。
- 新增 7 筆實際歌唱、移除 5 筆原合併／企劃或羅馬字歌唱名義。ハク為ひとみ、ピュア為橋本絵莉子；PAS TASTA 保留作品藝人／創作企劃名義，六位成員分列。カヤちゃん為橘杏咲，動畫 ED 三人版與朔雀／導凰二人版分開；Crystal Kay、Masato 只依明示保留 featured artist，沒有猜個別歌唱 credits。恢復はみだし御免／陽炎及原文藝人，羅馬字搜尋別名保留。
- 新增 13 支官方歌曲影片外連：ヘルモード第一期 OP／ED 無字幕與 Sanctuary MV、来世はどうせ MV、Ignis MV、Speak of the Devil MV、爆走夢歌原版 MV、まぼろしの行方 MV、Playmour 二人版 MV、はみだし御免無字幕 OP／MV、陽炎無字幕 ED、Sky Clipper MV。群馬既有影片只更新為官方明示無字幕 ED，不重算新增影片；主 PV 與 YouTube `/source/.../shorts` 未冒充歌曲 MV／Art Track。
- 新增 11 個音源＝4 Instrumental、4 演唱版、1 acoustic 重新編曲、1 角色版、1 tofubeats Remix。只有ハク及ピュア明示 TV size 的 2 項採 TV；Ignis OP ver.與其他長度均 unknown，MV 不推定 full。原版編曲沒有自動套到 acoustic／remix，也未臆測 CD 與數位相同錄音。
- 新增 26 筆歌曲收錄關係，涉及 26 個發行 ID；其中 24 個全目錄新 ID＝14 Single、8 CD Album、1 Compilation、1 EP，另 2 個幻視録 EP 版沿用已有 ID。カヤ OP 為共用 EP Track 2／4／6，Kunon 原曲仍為 1／3／5；三個 REVERSE WAVE CD 僅二人 Playmour Track 9。Ignis 限定盤 Instrumental Track 2、通常盤 Track 3、動畫期間盤 Track 2 為 OP ver.，沒有虛構該盤 Instrumental。ハク兩版 Album 為 Track 6、Hope & Jump 三個一般 CD 版為 Track 9；其他商品版未擴張。
- ピュア原 Single／Remix 實際商品日期為 2026-01-28／2026-03-04，未把較後新聞刊登日期當發行日。はみだし御免 Single 與 EP 種用不同 ID；陽炎官方只明示配信限定，保存日期／商品入口但不猜 Single／Album 類別。Sanctuary 兩版 Single 未明示本曲曲序，保持空白。
- 新增／轉掛 66 筆用途層外連關係＝13 YouTube、25 官方配信／商品、9 Spotify、9 Apple Music、8 YouTube Music、1 Qobuz，另 1 筆由舊 ED2 轉掛的官網；更新 1 筆既有 YouTube 標籤。Apple Music 明示曲目 query 保留，其餘移除追蹤參數；所有外部播放及 HK／TW 可用性保持 unknown。
- 新增 45 個用途層來源、更新 9 個實際重讀來源及 157 組欄位證據；其他來源日期未改。9 個 seed 行以外 bytes 不變，所有作品 metadata 日期保留。
- 全目錄為 28 季、1,917 動畫頁、4,247 正規用途＝4,242 OP／ED＋4 IN＋1 TS，另保留舊 ID 別名。2020–2026 為 1,808 動畫頁、3,983 正規用途。唯一 YouTube 歌曲影片直連 775→788，另 5 個官方 YouTube 配信專輯入口；1,793 筆既有影片 metadata 不變。上述不是唯一歌曲數或整體完成率。

### 缺口與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| 上毛かるた～令和版／ハク | 群馬 ED 兩輪定向查找仍無清楚編曲；ハク編曲只有授權曲目交叉補證，未採用其他曲目的葉山たけし／Soma Genda | 官方 booklet／逐曲 credits 或作者作品集明示本曲 arrangement 時補；不重搜一般索引 |
| デッドエンド／Hope & Jump | 兩輪定向查找未取得清楚逐首對應的確切官方歌曲影片；保留已證實配信，未把動畫 PV 當 MV。Hope & Jump 現行八人名單不能證明本曲原音源參與者 | 唱片／藝人官方逐項 MV／無字幕外連或本錄音名單出現；依原續查條件處理，不掃全部舊平台 |
| 版本與曲序 | Sanctuary 曲序／Instrumental、Ignis OP ver.長度、ハク TV 音源的獨立商品、CD／數位錄音識別與其他 OST／Album 未完整核對。幻視録 acoustic／Instrumental 只明示 CD 收錄 | 正式曲目表、ISRC、booklet 或具體錄音說明；沒有證據不補曲序、不把 CD 限定版本掛到數位商品 |
| 商品範圍 | WONDER YARD 只核對三個一般 CD 版，其他八個店舖／商品組合未逐版收集；ピュア其他 Remix／CD 商品尚未核對完整第一方曲目 | 可讀官方商品頁逐版明示日期／曲目／品番時再深化，維持現有商品 ID |
| 來源與平台 | 部分普通公告回應 403／cache miss，採可讀官方公開索引或已取得普通頁事實，未繞過限制。TuneCore 的 Shorts source 路徑不當成 watch URL；所有新增影片嵌入與地區可用性 unknown | 來源恢復、官方新入口或明確嵌入／地區核對任務時再查；本機／正式 UI 成功不代表外部音樂實際播放 |

### 本機檢查與展示

- `npm test`：4 檔／5 個核心測試通過。`npm run build`：Astro 0 errors／warnings／hints、1,961 HTML、CSP 6 script／10 style hashes、Service Worker 與 3,918 公開產物通過。
- 6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過；無程式、依賴或 Cloudflare 設定修改。16 個本機文件連結、repository `public:check`（239 檔）及 `git diff --check` 通過。
- 桌面 1536×1024 核對 11 部／21 筆及公開 JSON，手機 390×844 核對 4 部；9 條閱讀流程含合併 ID／搜尋、特殊 ED、三版 Ignis、跨作品共用 EP、二人／角色歌唱、Remix／真實日期、不同商品與原文別名、Sky MV／PV 區分。0 app／CSP errors、0 自動 YouTube request、無橫向溢出。
- 已實際檢視桌面 Playmour 音源／收錄及手機ピュア Remix／Single；Browser plugin 不在可用清單，沿用 Playwright，第三方請求攔截。初次腳本對全部歌曲導航及省略的可選空欄位有錯誤預期，按既有契約修正後通過，未修改正常程式或放寬資料 gate。測試腳本、截圖、原始取回資料及 log 均未提交。

預覽入口：`/anime/enen-no-shouboutai-san-no-shou-part-2/`、`/anime/kaya-chan-wa-kowakunai/`、`/anime/seihantai-na-kimi-to-boku/`、`/anime/hikuidori/`。可搜尋 `Speak of the Devil feat. Masato from coldrain`、`Hamidashi Gomen`、`幻視録`、`tofubeats`；不同版本及商品不增加歌單列數。

階段提交：`d3d985d` 已保存第18批正式驗收與第19批啟動；本批歌曲提交及正式來源於發布驗收後另記。

下一批：**2026-winter-credits-youtube-20**，由 `yuusha-no-kuzu-op-1` 接續，依序為 `curated-187989`、`curated-192507`、`curated-195518`、`curated-198374`、`curated-176370`、`curated-203939`、`curated-182587`、`curated-202955`、`curated-182255`、`curated-204698`，10 部／20 筆 seed 候選；啟動時以公開 JSON 核對實際用途／已排除項。沿用有效證據，只補真實缺口；本批正式驗收後接續，2020–2026 及長期目標均未完成。

### 第19批正式發布與接續

- [PR #108](https://github.com/kyeunga25/anisonary/pull/108) 的 quality／Workers 預覽及 main `3607ec06d60812fe83599bb9893ff26b88ccad13` 的 quality 均通過；兩個階段提交正常 rebase 合併與推送，正式來源 Git tree 及產物與已審閱分支相同。
- Cloudflare 正式部署完成；全目錄 API 契約通過（28 季、1,917 唯一作品），16 個頁面／公開資產及 11 個本批 anime JSON 共 27 項 byte digest 相同，兩個未知頁面／API 為真實 404。HTML 安全標頭及 API noindex／revalidation／無 permissive CORS 符合設定。
- 正式桌面 11 部／21 筆、手機 4 部及 9 條閱讀流程通過；0 app／CSP errors、0 自動 YouTube request。重複 ED 舊 ID、特殊 ED3、跨作品共用 EP、二人／角色錄音、精確曲序與 Remix 發行日期均已驗證。
- 推送仍回報 23 個遠端 Dependabot open alerts；逐項與目前 lockfile 比對，現用版本均不在受影響範圍、js-yaml 已無依賴，且依賴檔與 main 相同、當次 npm audit 為 0。遠端警示狀態仍 open，未手動 dismiss，也不將本機檢查描述為遠端已解除。
- 缺口與續查條件保留，進入第20批；2020–2026 深化及長期目標均未完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 18 production verification | `5b3dfe0` | `d3d985d` |
| (add): winter song credits and official videos batch 19 | `3607ec0` | `5847b75` |

## 2026-10-15 批次：2026-winter-credits-youtube-20

完成層次：冬季 10 部／19 筆既有公開用途（20 筆 seed 候選，原排除項維持）；同作品補入 2 個已公告後期用途後為 21 筆。實際更新 8 部／16 筆＝深化 14 筆既有用途＋2 筆新用途；5 筆完整資料不變。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日不變；新證據實際核對 2026-10-15。下方為本機成果，正式發布後另記驗收。

| 公開 theme ID | 曲名／處理 |
| --- | --- |
| `yuusha-no-kuzu-op-1` | GUN POWDER；第一季度完整創作／Single／Album／影片，補入已公告第二季度 OP2／ED2、創作、版本與商品 |
| `yuusha-no-kuzu-op-2` | Revive；第一季度完整創作／Single／Album／影片，補入已公告第二季度 OP2／ED2、創作、版本與商品 |
| `yuusha-no-kuzu-ed-1` | メンタルレンタル；第一季度完整創作／Single／Album／影片，補入已公告第二季度 OP2／ED2、創作、版本與商品 |
| `yuusha-no-kuzu-ed-2` | NON-FICTION；第一季度完整創作／Single／Album／影片，補入已公告第二季度 OP2／ED2、創作、版本與商品 |
| `uruwashi-no-yoi-no-tsuki-op-1` | うるわし；恢復原文曲名、完整創作交叉補證、兩版共用 Single 及 MV／Animation MV |
| `uruwashi-no-yoi-no-tsuki-ed-1` | アザレアの風；恢復原文曲名、完整創作交叉補證、兩版共用 Single 及 MV／Animation MV |
| `akuyaku-reijou-wa-ringoku-no-outaishi-ni-dekiai-sareru-op-1` | 愛のファンファーレ；恢復原文曲名／演唱，兩位歌唱、完整創作、配信日及 OP 無字幕影片 |
| `akuyaku-reijou-wa-ringoku-no-outaishi-ni-dekiai-sareru-ed-1` | 魔法の音；恢復原文曲名／演唱，兩位歌唱、完整創作、配信日及 OP 無字幕影片 |
| `jingai-kyoushitsu-no-ningengirai-kyoushi-op-1` | ニンゲン；完整創作、四位角色歌唱、原文特殊 ED、無字幕影片／MV／三個 CD 商品及 OST 入口 |
| `jingai-kyoushitsu-no-ningengirai-kyoushi-ed-1` | 人間カムトゥルー！；完整創作、四位角色歌唱、原文特殊 ED、無字幕影片／MV／三個 CD 商品及 OST 入口 |
| `jingai-kyoushitsu-no-ningengirai-kyoushi-ed-2` | 空の色；完整創作、四位角色歌唱、原文特殊 ED、無字幕影片／MV／三個 CD 商品及 OST 入口 |
| `hime-sama-goumon-no-jikan-desu-2nd-season-op-1` | Sunday Morning；第二期完整創作、作者／藝人影片與正確配信日期；未套第一期創作 |
| `hime-sama-goumon-no-jikan-desu-2nd-season-ed-1` | お姫様にはなれない；第二期完整創作、作者／藝人影片與正確配信日期；未套第一期創作 |
| `yami-shibai-16-ed-1` | マスカレイドナイト；完整創作、四位團隊成員、官方 MV 及六版 EP |
| `oshi-no-ko-3rd-season-op-1` | TEST ME；既有兩筆完整創作與有效影片沿用；無修改 |
| `oshi-no-ko-3rd-season-ed-1` | セレナーデ；既有兩筆完整創作與有效影片沿用；無修改 |
| `prism-rondo-ed-1` | star flower；完整創作交叉補證、兩種官方影片、Digital Single；依官方主題歌表記採 TS，舊 ED ID 保留 |
| `sousou-no-frieren-2nd-season-op-1` | lulu.；既有三筆完整創作與有效影片沿用；無修改 |
| `sousou-no-frieren-2nd-season-ed-1` | The Story of Us；既有三筆完整創作與有效影片沿用；無修改 |
| `sousou-no-frieren-2nd-season-ed-2` | Trace；既有三筆完整創作與有效影片沿用；無修改 |
| `gelpiyo-ed-1` | delulu；只補 delulu 藝人 MV、來源／歌曲識別；創作及原來源日期保留 |

已處理 anime ID：`curated-187989`、`curated-192507`、`curated-195518`、`curated-198374`、`curated-176370`、`curated-203939`、`curated-182587`、`curated-202955`、`curated-182255`、`curated-204698`。

### 實際差異

- 新增動畫 0；勇者のクズ補入第二季度 OP Revive／ED NON-FICTION 共 2 筆，保存在既有冬季動畫頁，未新增季度重複作品。新用途採獨立第一方／交叉來源，不繼承舊來源日期；四首按原 OP1／ED1 及新增 OP2／ED2 顯示。
- 新增 49 筆歌曲創作角色＝16 作詞、17 作曲、16 編曲；31 筆由第一方明示，18 筆採授權歌ネット／公開播放記錄索引交叉補證。全批 21／21 筆有三項創作，但不表示所有欄位齊全或整體範圍完成。兩輪查找未取得更清楚第一方名單的歌曲保留交叉證據，不把藝人一般自作介紹當逐曲創作證明，也不借用別曲作者。
- 新增 12 筆歌唱名義（含 2 筆新用途的藝人名義），移除 5 筆合併／羅馬字或不同表記；高垣彩陽、城田優分列，人外 ED 四位角色／聲優分列，空の色恢復羽根田トバリ（CV.田辺留依）。另新增 10 筆團隊成員＝ClariS 3、w.o.d. 3、yosugala 4，未推定其逐首個別歌唱或詞曲參與。
- 恢復うるわし、アザレアの風、愛のファンファーレ、魔法の音、空の色的原文，保留羅馬字別名與公開 ID。star flower 的 Netflix 官方影片、藝人公告僅明示主題歌，採 TS／官方表記並保留 `prism-rondo-ed-1` 導航；OP／ED 細分仍待明確第一方證據。空の色保留既有 ED2，官方 OST 曲目表不當成 ED 集數證明，亦未僅因 OST 收錄改成 IN。
- 新增 17 支官方歌曲影片／音源外連：GUN POWDER 第一期無字幕 OP、メンタルレンタル MV／官方歌曲音源、Revive 第二期無字幕 OP、NON-FICTION MV、うるわし MV、アザレアの風 Animation MV、愛のファンファーレ無字幕 OP、ニンゲン MV／無字幕 OP、人間カムトゥルー！無字幕 ED、Sunday Morning MV、お姫様にはなれない官方藝人影片、マスカレイドナイト MV、star flower Netflix 影片／藝人 MV、delulu MV。未明示的媒體形式維持一般標籤；沒有由 MV 推定 full，或由無字幕影片建立新錄音。全批 19／21 筆有官方歌曲影片外連。
- 新增 Revive Instrumental／TV MIX 共 2 個音源，長度分類均 unknown。初回／通常盤 Track 4 是 Instrumental，期間盤 Track 4 是 TV MIX，沒有混用版本。メンタルレンタル CD 的其他曲目 live 音源及 EVER GREEN 的別曲現場影片，均未當成本曲新錄音。
- 新增 22 筆收錄關係，涉及 20 個全目錄新發行 ID＝12 Single、2 Album CD、6 EP CD。うるわし／アザレアの風共用兩個 Single ID，分別 Track 1／2；兩版 EVER GREEN 為 GUN POWDER Track 3；六個 No Border EP 版的マスカレイドナイト均為 Track 2。Sony 官方 GUN POWDER 新聞稿一次支持配信、無字幕 OP、Single／Album／曲序；未重查其餘歌曲或借用不相干 live 曲目。
- ニンゲン三個 CD 商品日期／品番已證實、曲序未明，留空；GUN POWDER CD 本曲曲序同樣留空。空の色可確認 ORIGINAL SOUNDTRACK Track 17，先保存有具體收錄說明的官網／配信及正版專輯入口；商品類別／錄音識別未清楚取得，未猜 Album／Compilation、沒有宣稱結構化 OST 發行品已補齊。愛のファンファーレ／魔法の音、ユイカ及 NON-FICTION 先保存明示配信日，不由曲目數猜商品類別。
- 新增 74 筆用途層外連關係＝17 YouTube 歌曲影片＋1 YouTube 官方配信專輯、19 官方商品／配信、12 Apple Music、12 Spotify、11 YouTube Music、2 新用途官網；共用商品在兩個用途分別可見，並非新增不同歌曲。未知播放／購買地區、嵌入可用性均保持 unknown。
- 新增 52 個用途層來源、更新 4 個實際查閱來源及 156 組欄位證據。8 個 seed 行以外 bytes 不變；另在既有 delulu extra-theme 只增加歌曲識別、MV／來源與欄位證據，保留創作 overrides，沒有搬移歷史資料或改執行邏輯。所有作品 metadata 日期保留。
- 全目錄 28 季、1,917 動畫頁、4,249 用途＝4,243 OP／ED＋4 IN＋2 TS；2020–2026 為 1,808 動畫頁、3,985 用途。唯一 YouTube 歌曲影片直連 788→805，另 6 個官方 YouTube 配信專輯入口；1,793 筆既有影片 metadata 不變。用途／平台數量不等於唯一歌曲數、完整率或二十年目標完成。

### 缺口與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| 18 筆創作角色交叉補證 | GUN POWDER／メンタルレンタル、UNISON 兩首、空の色及 star flower 的完整創作採授權曲目／公開索引；未將一般藝人 profile 的「自作」推到各首。第二期公主 OP 則有作者 profile 明示本曲三項創作 | 第一方逐曲 booklet、作者作品集或清楚影片 description 可讀；保留既有欄位證據，沒有觸發不重搜一般歌詞頁 |
| 官方影片缺口 | 魔法の音、空の色仍未取得明確逐首對應的確切官方影片。GUN POWDER 有第一方 MV 公告，但頁內 iframe 未取得確切可核對 ID，先公開已明示的無字幕 OP；不得把 PV 或另一曲 ID 填入 | 新官方逐項外連、可讀標題／description 或來源恢復時定向核對。兩輪不足以確認者已保留缺口，未以此阻擋本批其他歌曲 |
| 用途分類 | star flower 第一方只明示主題歌；保留舊 ID 並以 TS 顯示。空の色多個交叉來源記第5話特殊 ED，第一方本次只直接確認角色歌／OST 收錄，未將集數寫作第一方已證實 | Netflix／製作／正式片尾提供 OP／ED 明示；人外官方逐集資料或特殊 ED 公告恢復可查時補集數，不從 OST 自動推出動畫用途 |
| 版本與商品 | Revive TV MIX 長度、CD／配信錄音等同性、GUN POWDER／ニンゲン曲序、其他 Instrumental／Album／OST 尚有缺口。空の色的 OST 類別未取得可採用的明確 metadata | 正式曲目表、booklet、ISRC 或正版商品分類可讀；不從名稱、曲目數或 MV 長度猜格式／商品類別。w.o.d. 未公布精確曲序的後續 Album 留待正式商品資料 |
| 品番與平台 | USG 單一 discography 索引的 TFCC-86721 與官網／唱片公告不同；本批採兩個第一方一致的 TFCC-89801～89802／89803。部分 Sony／普通頁 403、w.o.d. tool 回應 429，改用已讀官方公開索引或其他已取得第一方資料，未繞過限制 | 官方正式更正或來源恢復時再核對異常品番；外部播放、嵌入與 HK／TW 可用性仍 unknown。Apple Music 目的頁未成功讀取時只保留官方配信頁提供的精確入口 |

### 本機檢查與展示

- `npm test`：4 檔／5 個核心測試通過；首次 gate 攔下 delulu 新增欄位證據缺少 `songId`，依現行契約補上穩定歌曲識別後通過，未降低 gate 或改舊測試。最終 build 通過，1,961 HTML、CSP 6 script／10 style hashes、Service Worker 及 3,918 公開產物通過。
- 6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過；runtime 邏輯、依賴與 Cloudflare 設定未改。16 個本機文件連結、repository `public:check`（239 檔）及 `git diff --check` 通過。
- 桌面 1536×1024 核對 10 部／21 筆及公開 JSON，手機 390×844 核對 4 部，10 條閱讀流程通過。涵蓋兩個後期用途、精確版本／曲序、共用雙 A 面 Single、二人／四人角色歌唱、官方／交叉證據、TS 舊 ID 及 delulu 原名單保留；0 app／CSP errors、0 自動 YouTube request、無橫向溢出。
- 已實際檢視桌面共用 Single 與手機 Netflix 主題歌／Single；Browser plugin 不在可用清單，沿用 Playwright，攔截第三方請求。測試腳本、原始資料、截圖、provider metadata 及 log 未提交。

預覽入口：`/anime/yuusha-no-kuzu/`、`/anime/uruwashi-no-yoi-no-tsuki/`、`/anime/jingai-kyoushitsu-no-ningengirai-kyoushi/`、`/anime/prism-rondo/`。可搜尋 `Revive ClariS`、`Azalea no Kaze`、`Ai no Fanfare`、`No Border`；兩個後期用途保存在既有動畫頁，版本及商品不另增歌單列數。

階段提交：`2310b59` 已保存第19批正式驗收與第20批啟動；本批資料提交及正式來源於發布後另記。

下一批：**2026-winter-to-2025-summer-credits-youtube-21**，先核對冬季最後 5 部／8 筆：`curated-189275`、`curated-202957`、`curated-187508`、`curated-176509`、`curated-187267`；再接續 2025 夏季前 5 部／11 筆：`curated-185407`、`curated-170113`、`curated-180460`、`curated-179344`、`curated-185505`。合計 10 部／19 筆公開用途；夏季此 11 筆已有完整創作及有效影片，直接沿用，只追其他真正缺口。第20批正式驗收後啟動，固定範圍／截止日不變，2020–2026 與長期目標均未完成。

### 第20批正式發布與接續

- [PR #109](https://github.com/kyeunga25/anisonary/pull/109) 的 quality／Workers 預覽及 main `ef04826a3a8c25bbca2960709b9b29bec47ecb1a` 的 quality 均通過；兩個階段提交正常 rebase 合併及推送。正式來源 Git tree、26 項部署產物 digest 與已審閱分支相同。
- Cloudflare 正式部署完成；全目錄 API 契約通過（28 季、1,917 唯一作品），16 個頁面／公開資產及 10 個本批 anime JSON 共 26 項 byte digest 相同，兩個未知頁面／API 為真實 404。HTML 安全標頭及 API noindex／revalidation／無 permissive CORS 均符合設定。
- 正式桌面 10 部／21 筆、手機 4 部及 10 條閱讀流程通過；0 app／CSP errors、0 自動 YouTube request。新增第二季度用途、共用 Single、六版 EP、CD 版本／曲序、角色歌唱、TS 舊 ID 與 delulu 原名單保留均已驗證。
- 已記錄缺口及續查條件保持，進入第21批；此成果不表示 2020–2026 深化或 2007–2026 長期範圍完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 19 production verification | `41f50a8` | `2310b59` |
| (add): winter song credits and official videos batch 20 | `ef04826` | `ceb7d5b` |

## 2026-10-15 批次：2026-winter-to-2025-summer-credits-youtube-21

完成層次：核對冬季最後 5 部／8 筆與夏季前 5 部／11 筆既有公開用途；新增已證實的後期 ED 與 Part2 OP 後為 10 部／21 筆。實際更新 5 部／9 筆＝7 筆既有用途深化＋2 筆新用途，12 筆完整資料不變。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日；新證據實際核對日期 2026-10-15。以下為本機驗證，正式發布另記。

| 公開 theme ID | 曲名／處理 |
| --- | --- |
| `medalist-2nd-season-op-1` | Cold Night；沿用詞曲與影片；補 HANA 專輯收錄及明示配信日，編曲待核 |
| `medalist-2nd-season-ed-1` | Rookies；既有完整創作與有效官方影片沿用；無修改 |
| `meitantei-precure-op-1` | ハートにヒント！名探偵プリキュア！；完整創作、個別歌唱、官方影片、兩版 Single 及各版伴奏／TV サイズ |
| `meitantei-precure-ed-1` | なぜ？謎？！ANSWER；完整創作、個別歌唱、官方影片、兩版 Single 及各版伴奏／TV サイズ |
| `meitantei-precure-ed-2` | いつかわかる☆きっとあえる；完整創作、個別歌唱、官方影片、兩版 Single 及各版伴奏／TV サイズ |
| `duel-masters-lost-boukyaku-no-taiyou-op-1` | あやかしあやし；完整創作、Digital Single 及藝人逐曲影片 |
| `baki-dou-op-1` | フルボコ；創作、官方影片及 Single；衝突日期／未明編曲留空 |
| `baki-dou-ed-1` | Mountain Top；創作、官方影片及 Single；衝突日期／未明編曲留空 |
| `beastars-final-season-part-2-op-1` | LA FERALIA；Part2 創作及影片／Single；新增 OP 與 OST Track 1 分開保存 |
| `beastars-final-season-part-2-ed-1` | Tiny Light；Part2 創作及影片／Single；新增 OP 與 OST Track 1 分開保存 |
| `takopii-no-genzai-op-1` | ハッピーラッキーチャッピー；既有完整創作與有效官方影片沿用；無修改 |
| `takopii-no-genzai-ed-1` | がらすの線；既有完整創作與有效官方影片沿用；無修改 |
| `koujo-denka-no-kateikyoushi-op-1` | Wish for you；既有完整創作與有效官方影片沿用；無修改 |
| `koujo-denka-no-kateikyoushi-ed-1` | 少女のすゝめ；既有完整創作與有效官方影片沿用；無修改 |
| `mattaku-saikin-no-tantei-to-kitara-op-1` | Suffer；既有完整創作與有效官方影片沿用；無修改 |
| `mattaku-saikin-no-tantei-to-kitara-ed-1` | GORI☆GORI Feez e-Girl!!；既有完整創作與有效官方影片沿用；無修改 |
| `mattaku-saikin-no-tantei-to-kitara-ed-2` | 帰れソレントへ；既有完整創作與有效官方影片沿用；無修改 |
| `kanojo-okarishimasu-4th-season-op-1` | Umitsuki；既有完整創作與有效官方影片沿用；無修改 |
| `kanojo-okarishimasu-4th-season-ed-1` | ぼくのベガ；既有完整創作與有效官方影片沿用；無修改 |
| `necronomico-no-cosmic-horror-show-op-1` | 確証論；既有完整創作與有效官方影片沿用；無修改 |
| `necronomico-no-cosmic-horror-show-ed-1` | PANDORA feat.のあ(from カラフルピーチ)；既有完整創作與有效官方影片沿用；無修改 |

已處理 anime ID：`curated-189275`、`curated-202957`、`curated-187508`、`curated-176509`、`curated-187267`、`curated-185407`、`curated-170113`、`curated-180460`、`curated-179344`、`curated-185505`。

### 實際差異

- 新增動畫 0；新增 `meitantei-precure-ed-2`「いつかわかる☆きっとあえる」及 `beastars-final-season-part-2-op-1`「LA FERALIA」，各有第一方與交叉用途證據，保存在既有動畫頁。修正「なぜ？謎？！ANSWER」末尾缺字，保留 `meitantei-precure-ed-1`，沒有將錯字另造為羅馬字名稱；其餘 ID、序號及 URL 保留。
- 新增 28 筆創作角色＝9 作詞、11 作曲、8 編曲；22 筆第一方明示，6 筆交叉補證（フルボコ詞曲編曲、Mountain Top詞曲）。全批 18／21 筆有完整三項創作；Cold Night、Mountain Top、LA FERALIA 的編曲沒有明確證據，留空。新增 4 筆個別歌唱、移除 1 筆合併名義，另補 Tiny Light 的 Chorus／All Instruments／Bass／Guitar 共 4 筆明示角色，沒有從團隊成員推定逐首歌唱。
- 新增 9 支官方歌曲影片外連：Precure 全員集合無字幕 OP／前期 ED 舞蹈教學／後期無字幕 ED、あやかしあやし藝人歌曲影片、フルボコ MV、Mountain Top lyric／無字幕 ED／製作幕後、Tiny Light MV；另更新 2 個原有 Precure 影片名稱。全批 20／21 筆有官方影片外連，LA FERALIA 的精確官方影片對應留待補證。影片形式不推出 full／TV 或新錄音，未明示的藝人影片不硬標 MV。
- Precure 三首各有 TV サイズ、オリジナル・メロディ・カラオケ、オリジナル・カラオケ，共新增 9 個音源＝3 個演唱 TV Size、6 個 Instrumental。只有明示 TV サイズ採 tv，其餘長度分類 unknown；不同 CD 版的兩種伴奏各自保存。官方未列完整版本曲名時以本曲或原文版本標籤保存，不補造副標題／曲序。
- 新增 12 筆收錄關係，涉及 10 個唯一發行 ID＝8 Single、1 HANA Album、1 BEASTARS OST。Precure 初期 OP／ED 共用 MJSS-09402～3／09404，各為 Track 1／2，後期 ED2 收於 MJSS-09405～6／09407 Track 1；版本曲序未知。LA FERALIA 為 OST Vol.2 Track 1、2026-03-08，Tiny Light 只保存已明示的 Digital Single，未推定同收 OST。HANA 專輯的 Cold Night 曲序／日期留空。
- 新增 36 筆用途層外連＝9 YouTube、15 官方商品／配信、2 新用途官網、3 Apple Music、3 Spotify、3 YouTube Music、1 OTOTOY；精確平台目的地來自逐曲官方配信頁，外部可播、地區與嵌入可用性仍 unknown。無法取得目的地的 CD 入口只保存官方商品連結。
- 新增 34 個用途來源、更新 2 個實際查閱來源、增加 91 組欄位證據。同頁取得 Precure 多首創作／商品、BEASTARS Part2 完整名單及 avex 逐項影片，未重查其餘完整資料。僅 5 個冬季 seed 行變動；其他 seed bytes、整份夏季 seed 及作品 metadata 日期保留，未修改程式、測試、依賴或部署設定。
- 全目錄 28 季、1,917 動畫頁、4,251 用途＝4,245 OP／ED＋4 IN＋2 TS；2020–2026 為 1,808 動畫頁、3,987 用途。唯一 YouTube 歌曲影片直連 805→814，另 6 個官方 YouTube 配信專輯入口；1,793 筆影片 metadata 不變。上述數量不是唯一歌曲數或整體完成率。

### 缺口與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| 3 首編曲 | Cold Night、Mountain Top、LA FERALIA 均缺明示編曲；沒有把製作人 SANGWOO／JUGEM、神前暁其他歌曲編曲或樂譜編配轉為本曲 credits | 第一方逐曲 booklet、作者名單或正式影片 description 可讀。已兩輪定向查找，無新證據不重搜 |
| フルボコ | 詞曲／編曲採交叉資料；Warner 與 WANIMA 作品頁分列 2月18日／2月25日，故配信日期留空。官方 MV 公告可證收於 Excuse Error，但尚未取得其完整類別／曲目 metadata | 第一方創作或日期更正／具體商品表出現，再補日期及發行品；不靠一般藝人介紹推逐曲角色 |
| BEASTARS 影片 | Natalie 已公告 Part2 無字幕 OP／ED，但本次取得的嵌入項缺清楚逐項標題對應，不猜其 ID 分配；Tiny Light 已有明確官方 MV，LA FERALIA 影片留空 | Netflix／動畫官網逐項外連、可讀影片標題及渠道關係公布或恢復；兩輪後已停止泛搜，不以 Part1 影片補 Part2 |
| 版本／商品 | Precure 版本曲序、其他 full／TV／重新編曲、CD／配信錄音等同、HANA 專輯曲序／品番、其他 single／album 仍有缺口；MV／幕後不是版本證據 | 官方完整曲目表、booklet／ISRC 或版本識別資料出現；不同商品不自動新增錄音／歌曲 |
| 範圍區分 | メダリスト官網首頁已轉電影；Duel Masters 目前頁面另有第4章；刃牙第二季度 TV 播出不是新歌曲證明 | 只在本作／期別的新第一方公告出現時更新，不把電影／後章／別曲資料移入既有用途 |

### 本機檢查與展示

- `npm test` 4 檔／5 個核心測試通過。首次資料檢查指出 OST 商品關係只標交叉來源，已將 OTOTOY 自有正版商品 metadata 正確列為商品第一方，保留 Natalie 用途交叉證據；沒有更改契約或降低 gate。
- `npm run build` 通過；1,961 HTML、CSP 6 script／10 style hashes、Service Worker 及 3,918 公開產物通過。6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過。
- 桌面 1536×1024 核對 10 部／21 筆及公開 JSON，手機 390×844 核對 4 部、9 條閱讀流程通過；涵蓋新用途、既有 ID、個別歌唱、不同版伴奏、共用商品、日期衝突留空、OST／Single 區分及新歌／品番搜尋。0 app／CSP errors、0 自動 YouTube request、無橫向溢出。
- 實際檢視桌面 Precure 後期 ED／版本／商品及手機 Tiny Light 來源／Single。Browser plugin 不在可用清單，沿用 Playwright；暫存腳本最初將歌單列誤當有巢狀歌曲連結，改為點選既有列後通過，產品程式未改。原始取回資料、截圖及 log 未提交。
- 16 個文件連結、`git diff --check`、repository `public:check`（239 檔）通過。

預覽入口：`/anime/meitantei-precure/`、`/anime/beastars-final-season-part-2/`、`/anime/baki-dou/`、`/anime/duel-masters-lost-boukyaku-no-taiyou/`。可搜尋 `いつかわかる☆きっとあえる`、`LA FERALIA`、`MJSS-09405`，新用途各一列，歌曲、版本與發行品分開顯示。

階段提交：`2894cc0` 已保存第20批正式驗收及第21批啟動；本批資料提交及正式來源於發布後另記。

下一批：**2025-summer-credits-youtube-22**，由 `jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-2nd-season-op-1` 起，依序 `curated-169440`、`curated-179678`、`curated-193883`、`curated-178869`、`curated-199486`、`curated-155838`、`curated-187387`、`curated-189069`、`curated-173335`、`curated-186052`，10 部／28 筆既有公開用途。先核對真正創作／官方影片缺口及明確錯誤，完整證據沿用，版本與一般歌曲不得冒充新用途。本批正式驗收後啟動，兩個範圍均未完成。

### 第21批正式發布與接續

- [PR #110](https://github.com/kyeunga25/anisonary/pull/110) 的 quality／Workers 預覽及 main `bcaf9ce58ca324a737759455ea225c9b37078386` 的 quality 均通過；兩個階段提交正常 rebase 合併及推送。正式來源 Git tree 與 26 項產物 digest 和已審閱內容一致。
- Cloudflare 正式部署完成；全目錄 API 契約（28 季、1,917 唯一作品）、16 項頁面／公開資產與 10 個本批 anime JSON 共 26 項 byte digest、兩個真實 404、安全標頭及 API noindex／revalidation／無 permissive CORS 均通過。
- 正式桌面 10 部／21 筆、手機 4 部／9 條閱讀流程通過，0 app／CSP errors、0 自動 YouTube request；新 ED2／OP1、既有 ID、不同伴奏、商品／音源區分及新歌／品番搜尋均已驗證。三首編曲、日期衝突及未確認影片對應保持為缺口。
- 接續第22批；本輪深化及二十年整體目標均未完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 20 production verification | `f29a26e` | `2894cc0` |
| (add): winter song credits and official videos batch 21 | `bcaf9ce` | `0762c9b` |

## 2026-10-15 批次：2025-summer-credits-youtube-22

完成層次：核對 2025 夏季 10 部／28 筆既有公開用途，實際更新 5 部／16 筆，12 筆資料不變；沒有新增動畫或用途。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日；新證據實際核對日期 2026-10-15。本機成果與下方正式驗收分開，整體目標未完成。

| 公開 theme ID | 曲名／處理 |
| --- | --- |
| `jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-2nd-season-op-1` | 未来サイダー；既有完整創作／影片沿用，無修改 |
| `jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-2nd-season-ed-1` | 僕だけの地平線；既有完整創作／影片沿用，無修改 |
| `jigoku-sensei-nube-2025-op-1` | P0WER-悪霊退散-；既有完整創作／影片沿用，無修改 |
| `jigoku-sensei-nube-2025-ed-1` | ひまわり；既有完整創作／影片沿用，無修改 |
| `chibi-godzilla-no-gyakushuu-3-op-1` | 怪獣島；既有名單／影片沿用，無修改；怪獣島與 TURN OVER 編曲仍待明示 |
| `clevatess-majuu-no-ou-to-akago-to-kabane-no-yuusha-op-1` | Ruler；既有完整創作／影片沿用，無修改 |
| `clevatess-majuu-no-ou-to-akago-to-kabane-no-yuusha-ed-1` | Destiny；保留合併 songwriter；補原曲／Acoustic 錄音、各自製作／合唱及 Single／Album |
| `neko-konogoro-tenka-toitsu-hen-op-1` | 萌やせ！ネコ魂；採官方一般主題歌表記 TS，舊 OP ID／授權 MV 保留；補精確 YouTube Music |
| `tsuyokute-new-saga-op-1` | 演者；既有完整創作／影片沿用，無修改 |
| `tsuyokute-new-saga-ed-1` | her；既有完整創作／影片沿用，無修改 |
| `onmyo-kaiten-re-verse-op-1` | CRY OUT CRY OVER；既有名單／影片沿用，無修改；怪獣島與 TURN OVER 編曲仍待明示 |
| `onmyo-kaiten-re-verse-ed-1` | TURN OVER；既有名單／影片沿用，無修改；怪獣島與 TURN OVER 編曲仍待明示 |
| `ginga-tokkyuu-milky-subway-op-1` | 銀河系まで飛んで行け！；既有完整創作／影片沿用，無修改 |
| `ginga-tokkyuu-milky-subway-op-2` | Altair and Vega；第1話 OP 曲的配信歌唱版／Off Vocal、Single 曲序及品番；影片明示作品 PV |
| `kamitsubaki-shi-kensetsuchuu-op-1` | 歌姫；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-1` | 追憶；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-2` | BREATHE；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-3` | 閃光だった；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-4` | 距離。；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-5` | シャングリラ；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-6` | ひとえに壊れて；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-7` | 閃光だった（Rearranged ver.）；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-8` | BREATHE（Rearranged ver.）；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-9` | 欲望；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-10` | 電脳 sinka ver.；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `kamitsubaki-shi-kensetsuchuu-ed-11` | 魔女(真) sinka ver.；補 Album 版／曲序，原版與重新編曲共享歌曲 ID；既有用途保留 |
| `mizu-zokusei-no-mahou-tsukai-op-1` | ブルーモーション；補官方明示兩位團隊成員；未推定本曲編曲 |
| `mizu-zokusei-no-mahou-tsukai-ed-1` | たゆたうままに；既有完整創作／影片沿用，無修改 |

已處理 anime ID：`curated-169440`、`curated-179678`、`curated-193883`、`curated-178869`、`curated-199486`、`curated-155838`、`curated-187387`、`curated-189069`、`curated-173335`、`curated-186052`。

### 實際差異

- 5 筆真正創作缺口經兩輪定向查找後仍缺明示角色，本批新增作詞／作曲／編曲為 0；未將一般藝人 profile、製作人或他曲編曲轉為本曲事實。Destiny 的四位 ComposerLyricist 保留 `songwriting`，不拆造詞／曲。全批 23／28 筆具有三項創作；這不是全範圍完成率。
- 新增 27 筆團隊成員關係：V.W.P 的 5 位官方成員在 5 個合唱名義用途各保存一次，共 25 筆；名誉伝説 2 位明示成員 KOTANI／KESSAKU 共 2 筆。沒有由成員身分推定本曲逐人演唱或編曲，既有歌唱與完整創作保留。
- 登記 14 個歌曲 ID 供 16 筆既有用途關聯。閃光だった ED3／ED7、BREATHE ED2／ED8 各以同一歌曲 ID 關聯原版及 Rearranged ver.，沒有將重新編曲另算新歌曲或新增用途；各自演唱與編曲名單保留，既有公開 ID／序號不動。
- 新增 14 筆音源關係，實際為 10 個不同錄音 ID＝5 演唱、3 Instrumental、2 重新編曲；共享歌曲在兩個既有用途各顯示同樣的已確認版本。包括上述兩組原版／重新編曲、歌姫／追憶 instrumental、Altair and Vega 歌唱／Off Vocal、Destiny／Destiny (Acoustic)。長度分類全部 unknown，MV、PV 或 Off Vocal 不當作 TV 錄音證據。
- 10 個不同錄音合計保存 32 筆版本層 credits＝9 歌唱、8 合併 songwriting、15 其他明示角色。Destiny 的一般專輯錄音含 11 位合唱成員與兩位製作人，Acoustic 只列其本曲已確認角色，沒有移入一般版合唱，製作人沒有改作編曲；合唱指揮 Marsha Morrison 與其他成員依正版曲目名單保存。這些關係不是新增人數／歌曲數。
- 新增 28 筆收錄關係，涉及 6 個唯一發行 ID＝3 Single、3 Album。歌姫 CD Single 的 OP／ED 為 Track 1／2、instrumental 為 Track 3／4；仮想都市録通常／SPECIAL BOX 共用已明示曲序，BOX 是 Disc 1，魔女(真)只確認 BOX Track 13，沒有從較早的「？？？」推定通常盤收錄。商品 URL 的 ktr-000-0210 不當品番。
- Altair and Vega 的 LZC-3263 為 2025-08-30 Digital Single、Track 1 歌唱／Track 2 Off Vocal；用途標示第1話 OP 曲的配信歌唱版，未聲稱 Off Vocal 與動畫實際 OP 為同一錄音。Destiny Single 為 2025-11-12、You Know Too Much Album 為 2026-09-11；普通／Acoustic 分列 Album Track 17／22，Single 未與 Album 錄音硬連。
- 萌やせ！ネコ魂 的第一方明示「主題歌」，採 TS／官方表記，保留 `neko-konogoro-tenka-toitsu-hen-op-1`、羅馬字、2025-08-14 日期、原創作及既有授權 MV 的全部屬性；影片索引只調整用途 key。保留未重查來源日期，沒有因無法即時讀取而撤下有效授權影片。
- 新增 30 個用途層外連＝27 官方商品、2 Qobuz、1 YouTube Music 確切曲目；另將 Altair and Vega 的既有影片按第一方明示改名「作品 PV」。本批沒有新增 YouTube watch URL 或影片 metadata；ネコ的 Music 入口由官方 TuneCore 公開目的地核實，沒有把 Shorts 素材頁改造成 watch URL。所有外部播放、嵌入及地區可用性未新增聲稱。
- 新增 15 個用途來源、更新 30 個實際查閱來源、增加 85 組欄位證據。只改 5 個夏季 seed 行、兩個既有 extra-theme 資料區及一個影片用途 key；其他 global data bytes 與作品 metadata 日期保留。為保留一般主題歌的有效影片，影片索引驗證接通已存在的 IN／TS 種類，未更改其他資料、安全或來源 gate。
- 全目錄仍為 28 季、1,917 動畫頁、4,251 用途＝4,244 OP／ED＋4 IN＋3 TS；2020–2026 為 1,808 動畫頁／3,987 用途。唯一 YouTube 歌曲 watch 直連 814、另 6 個官方配信專輯及 1,793 筆既有影片 metadata 不變。版本／商品不增加緊湊歌單列數。

### 缺口與續查條件

| 範圍 | 尚未完成 | 續查條件 |
| --- | --- | --- |
| 怪獣島、萌やせ！ネコ魂、TURN OVER、ブルーモーション | 編曲仍缺可採用的逐曲明示；沒有借用一般製作人介紹、動畫劇伴作者、ED 編曲或未核博客角色 | 第一方 booklet、作者逐曲作品表或清楚影片 description 可讀；兩輪後無新證據不重搜 |
| Destiny | 官方／正版 metadata 只列四位 ComposerLyricist，詞／曲分工與編曲未明；錄音識別及 Single／Album 同一性未證實 | 出版者明示拆分角色或可比較 ISRC／錄音識別；目前合併角色與版本名已保存，不靠一般 producer 推定 |
| ネコ影片／用途 | 保留既有有效授權 Full ver. MV，新增官方分銷的 YouTube Music 曲目；新的第一方 MV／NC OP／ED 外連仍無明確證據，OP／ED 細分未明 | 發行商／電視台明示逐首影片或用途時定向核對；不把平台素材／Shorts 改造為其他網址 |
| 神椿其他曲目 | 本批未從 Album 其他曲目反推新 OP／ED；通常盤最後兩曲的舊 MUSIC／公告仍未補齊，魔女(真) Track 13 先只採較完整 BOX 商品表 | 官方完整通常盤曲目、明確逐集 ED 公告／正式映像出現；保留現有 ID，不以專輯順序改用途序號 |
| 歌唱／音源與平台 | 團隊名單不代表各曲個別演唱；原版／重新編曲的既有創作保留，其他 ISRC、full／TV、版本等同、HK／TW 可用性及現場錄音仍未確認 | 逐曲名單、booklet、版本識別或具體可用性核對資料公布；無觸發不重查整批舊資料 |

### 本機檢查與展示

- `npm test` 4 檔／5 個核心測試通過；首次檢查發現影片索引只接受 OP／ED，已以獨立程式提交接通公開格式原已支援的 IN／TS。額外實際載入 registry 驗證四種用途，未知種類、錯誤作品歸屬、重複影片 ID、未核實嵌入及無效影片 ID 五個負向案例仍被拒絕，沒有修改舊測試或降低其他 gate。
- 最終 `npm run build` 通過；1,961 HTML、CSP 6 script／10 style hashes、Service Worker 與 3,918 公開產物通過。6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過；依賴／部署設定未改。
- 桌面 1536×1024 核對 10 部／28 筆與 JSON、手機 390×844 核對 4 部，9 條閱讀流程通過；涵蓋共享歌曲／版本、不同唱者、共用 CD／Album、精確曲序、合併 songwriter、版本層合唱與製作、TS 舊 ID／授權 MV 及版本／品番搜尋。0 app／CSP errors、0 自動 YouTube request、無橫向溢出。
- 已實際檢視桌面重新編曲／兩個 Album 版及手機ネコ主題歌／創作／來源；Browser plugin 不在清單，沿用 Playwright。測試腳本、原始取回資料、截圖、provider metadata 及 log 均未提交。
- 16 個文件連結、`git diff --check` 及 repository `public:check`（239 檔）通過。

預覽入口：`/anime/kamitsubaki-shi-kensetsuchuu/`、`/anime/clevatess-majuu-no-ou-to-akago-to-kabane-no-yuusha/`、`/anime/neko-konogoro-tenka-toitsu-hen/`、`/anime/ginga-tokkyuu-milky-subway/`。可搜尋 `Destiny Acoustic`、`LZC-3263`、`萌やせ！ネコ魂`。

階段提交：`b496276` 保存第21批正式驗收／第22批啟動；`29f74bd` 獨立保存影片用途相容修正。本批資料與正式來源於發布後另記。

下一批：**2025-summer-credits-youtube-23**，由 `yofukashi-no-uta-season-2-op-1` 起，依序 `curated-175914`、`curated-177175`、`curated-156395`、`curated-185660`、`curated-185544`、`curated-186003`、`curated-179879`、`curated-171046`、`curated-179966`、`curated-188653`，10 部／26 筆公開用途。完整證據沿用，只查真正缺口及同批明確錯誤；本批正式驗收後接續，兩個目標範圍均未完成。

### 第22批正式發布與接續

- [PR #111](https://github.com/kyeunga25/anisonary/pull/111) 的 quality 及 main `28eceb5b95b77f6fa06bf98b723e2d751eb59d02` 的 quality 均通過；三個階段提交正常 rebase 合併及推送。正式來源 Git tree 與 26 項產物 digest 和已審閱內容一致。
- Cloudflare 正式部署完成；全目錄 API 契約（28 季、1,917 唯一作品）、16 項頁面／資產＋10 個本批 anime JSON 共 26 項 byte digest、兩個真實 404、HTML 安全標頭與 API noindex／revalidation／無 permissive CORS 均通過。
- 正式桌面 10 部／28 筆、手機 4 部／9 條閱讀流程通過，0 app／CSP errors、0 自動 YouTube request；共享歌曲、原版／重新編曲／Acoustic、精確商品／曲序、版本層 credits 及 TS 舊 ID／授權 MV 均已驗證。缺少明示的創作、錄音等同與其他影片仍保留缺口。
- 接續第23批；2020–2026 深化及二十年整體目標均未完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 21 production verification | `8e560e7` | `b496276` |
| (fix): support documented song types in video registry | `fedd3b7` | `29f74bd` |
| (add): summer song versions and creator teams batch 22 | `28eceb5` | `5442a92` |

## 2026-10-15 批次：2025-summer-credits-youtube-23

完成層次：本機核對 2025 夏季 10 部／26 筆既有公開用途，實際更新 5 部／15 筆，11 筆完整內容沿用；正式發布另以下方驗收為準。2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日固定；新證據實際查閱日期為 2026-10-15。

| 公開 theme ID | 曲目與實際處理 |
| --- | --- |
| `yofukashi-no-uta-season-2-op-1` | Mirage；補齊／更正創作、版本、收錄或平台關係 |
| `yofukashi-no-uta-season-2-ed-1` | 眠れ；補齊／更正創作、版本、收錄或平台關係 |
| `yofukashi-no-uta-season-2-ed-2` | よふかしのうた；補齊／更正創作、版本、收錄或平台關係 |
| `arknights-enshin-shomei-op-1` | End of Days；補齊／更正創作、版本、收錄或平台關係 |
| `arknights-enshin-shomei-ed-1` | Truth；補齊／更正創作、版本、收錄或平台關係 |
| `arknights-enshin-shomei-ed-2` | 生命換装；補齊／更正創作、版本、收錄或平台關係 |
| `busu-ni-hanataba-wo-op-1` | BLOOM (feat. Ayumu Imazu)；完整創作與有效官方影片沿用；無修改 |
| `busu-ni-hanataba-wo-ed-1` | スーベニア；完整創作與有效官方影片沿用；無修改 |
| `dandadan-2nd-season-op-1` | 革命道中；完整創作與有效官方影片沿用；無修改 |
| `dandadan-2nd-season-ed-1` | どうかしてる；完整創作與有效官方影片沿用；無修改 |
| `tsuihousha-shokudou-e-youkoso-op-1` | ユニーク；完整創作與有效官方影片沿用；無修改 |
| `tsuihousha-shokudou-e-youkoso-ed-1` | まごころ My Heart；完整創作與有效官方影片沿用；無修改 |
| `fermat-no-ryouri-op-1` | メイラード；完整創作與有效官方影片沿用；無修改 |
| `fermat-no-ryouri-ed-1` | Change Over；完整創作與有效官方影片沿用；無修改 |
| `zutaboro-reijou-wa-ane-no-moto-konyakusha-ni-dekiai-sareru-op-1` | 月蝕；完整創作與有效官方影片沿用；無修改 |
| `zutaboro-reijou-wa-ane-no-moto-konyakusha-ni-dekiai-sareru-ed-1` | マリー；完整創作與有效官方影片沿用；無修改 |
| `seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-op-1` | スノウドロップ；完整創作與有效官方影片沿用；無修改 |
| `seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-1` | 水平線は僕の古傷 広川卯月 Short Ver.；補齊／更正創作、版本、收錄或平台關係 |
| `seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-2` | 水平線は僕の古傷 赤城郁実 Short Ver.；補齊／更正創作、版本、收錄或平台關係 |
| `seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-3` | 水平線は僕の古傷 姫路紗良 Short Ver.；補齊／更正創作、版本、收錄或平台關係 |
| `seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-4` | 水平線は僕の古傷 霧島透子 Short Ver.；補齊／更正創作、版本、收錄或平台關係 |
| `seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-5` | 水平線は僕の古傷 岩見沢寧々 Short Ver.；補齊／更正創作、版本、收錄或平台關係 |
| `seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-6` | 水平線は僕の古傷；補齊／更正創作、版本、收錄或平台關係 |
| `silent-witch-chinmoku-no-majo-no-kakushigoto-op-1` | Feel；補齊／更正創作、版本、收錄或平台關係 |
| `silent-witch-chinmoku-no-majo-no-kakushigoto-ed-1` | mild days；補齊／更正創作、版本、收錄或平台關係 |
| `punirunes-puni-3-op-1` | ぷにぷにぷにるんず ぷにックスバージョン；補齊／更正創作、版本、收錄或平台關係 |

已處理 anime ID：`curated-175914`、`curated-177175`、`curated-156395`、`curated-185660`、`curated-185544`、`curated-186003`、`curated-179879`、`curated-171046`、`curated-179966`、`curated-188653`。

### 實際差異

- 新增／撤回動畫及用途均為 0；既有公開 ID、序號、種類、URL 及動畫 metadata／日期完整保留。青春豬頭少年六筆既有角色／合唱 ED 共用一個歌曲 ID，仍保留六筆用途，不由專輯或版本新增 ED。
- Creepy Nuts 三首各補 1 筆 DJ松永編曲，採 UtaTen／ORICON／TOWER 明示交叉資料；另增 6 筆兩名團隊成員關係。End of Days 移除誤列整首編曲的宮野幸子，改為 Strings Arrangement；全曲編曲保留堀江晶太。全批 26／26 用途有詞曲編曲欄位，不代表每個音源都有完整名單，也不代表交叉補證已變成第一方明示。
- 新增 8 個官方歌曲影片外連，重用既有有效影片 metadata／日期；ぷにるんず的既有官方影片依本次已讀 description 更正 Art Track，並對應フルマックス音源，原ぷにックス音源另列。全批 26／26 用途有官方 YouTube 外連；沒有新增影片 metadata 項目或將 MV／creditless 當成新錄音。
- 新增 29 個唯一音源＝12 角色版、9 演唱版、6 Instrumental、1 Live、1 Remix；長度分類為 5 Full、6 Short、1 TV、17 unknown。青春豬頭少年為 5 組個別角色 Short／Full、OST 四人版、不同角色組合的 SP、Instrumental 及 SP Short，共 14 個；SP Short 歌唱未明，沒有借用 SP 完整版名單。其 Full 特典 CD 直接連到確切 BD/DVD 商品，不硬列音樂 Single／Album。
- Creepy Nuts 明示兩個七月 Digital Single、九月共用 AICL-4786 CD；Mirage／眠れ的 Instrumental 分別為 Track 3／4。よふかしのうた另列 2019 原版、2018 Zepp Tokyo Live DVD、2022 Remastered；初回 Mini Album CD Track 1／DVD Disc 2 Track 4、通常ラジオ盤 Track 2、堕天 Single Track 3 分開登記。
- End of Days 原版補明示鼓、弦樂各部、合唱及其他樂器共 19 筆角色，與原有創作合成 26 筆原版音源 credits；TeddyLoid Remix 只留其明示 6 筆名單，未借用原版演奏／弦樂。三個 Single CD 版的 Track 1／3／4 對應各音源；生命換装補最終話 ED、2025-09-06 配信與精確平台，未由單曲名配信推定商品種類。
- 新增 15 筆收錄關係，涉及 13 個唯一發行 ID＝9 Single、3 Album（含 2 個 Mini Album 版）、1 OST。青春豬頭少年 OST Disc 2 Track 21–23 保存四人版／SP 不同角色／Instrumental；羊文學共用 KSCL-3602 Single，Album 先只收錄曲目表確認的 Feel Track 3，不將 mild days 的矛盾文案當作收錄證據。
- 新增 58 個外連＝17 官方入口、8 YouTube、11 Apple Music、11 Spotify、11 YouTube Music，另更新 12 個原入口的標籤／關係。目的地取自本次實際讀取的官方逐曲配信頁，不推測網址、地區可用性或版本等同。新增 14 筆來源、更新 30 筆實際查閱來源、133 組欄位證據。未查來源與全部動畫 metadata 日期保留。
- 全目錄仍為 28 季、1,917 動畫、4,251 用途＝4,244 OP／ED、4 IN、3 TS；2020–2026 仍為 1,808 動畫／3,987 用途。唯一 YouTube 歌曲 watch 外連由 814 增至 822，另 6 個官方專輯入口；影片 metadata 仍為 1,793。用途、歌曲、音源、外連及發行品不可相加作歌曲數。

### 未解缺口與續查條件

| 項目 | 保留缺口 | 再查觸發條件 |
| --- | --- | --- |
| Creepy Nuts 編曲 | 三曲有授權平台／正版商品明示 DJ松永，第一方逐曲編曲仍未明 | 官方 booklet／逐曲 credits 公布才補第一方；不由團隊、producer 或作曲推定 |
| 青春豬頭少年 | 霧島透子 CV、SP Short 歌唱及未標音源長度仍未知；BD/DVD 特典 CD 的音樂發行品分類尚無對應格式 | 官方逐曲名單／音源識別或可證明容器的格式出現；保留確切商品外連，不補造 CV、TV、曲序或發行種類 |
| 羊文學 Album | 台灣官方介紹提及 mild days，但完整 13 曲表未列；兩輪定向查找未解，先僅保存 Feel Track 3 | 明確品番／版別完整曲目或更正出現，再核對 mild days 的收錄；Anime ver. 沒有直接當 TV |
| ぷにるんず | フルマックス Art Track 有歌唱／詞曲，編曲未明；ぷにックス與フルマックス的長度及版本等同未證實 | 官方逐音源 credits、標記／ISRC 等出現；不從曲名的「フル」或另一影片推定 full／新錄音 |
| 其他版本與平台 | 精確 ISRC、同錄音判定、地區可用性及其他官方影片形式仍依逐首證據 | 出現明確逐曲官方資料時查真正缺口；不重查本批全部有效來源 |

### 本機檢查與展示

- `npm test` 4 檔／5 個核心測試通過；首輪檢查拒絕ぷにるんず多餘 authoring ID 與舊 key 種類不一致，已移除多餘 ID、沿用既有公開映射，未修改測試或正常程式。五條選定 seed 以外的 bytes／動畫 metadata 完整保留；global extra-theme 僅一個既有區塊、影片索引僅 Art Track 類型與音源關係改動。
- `npm run build` 通過：1,961 HTML、CSP 6 script／10 style hashes、Service Worker、3,918 公開產物。6 條 E2E、npm audit 0 vulnerabilities、Cloudflare dry-run 通過；依賴／部署設定未改。
- 桌面 1536×1024 核對 10 部／26 筆與公開 JSON、手機 390×844 核對 4 部，10 條閱讀流程通過；包含逐音源創作、共享歌曲、Short／Full／SP／TV、版別曲序、矛盾收錄排除、Art Track 及品番／Remix 搜尋。0 app／CSP errors、0 自動 YouTube request、無橫向溢出。已實際檢視桌面 ReoNa 音源名單／三個 CD 版及手機 OST 角色／SP／Instrumental／曲序；Browser plugin 不在清單，沿用 Playwright。
- 18 個文件連結、`git diff --check` 與 repository `public:check`（239 檔）通過。原始取回資料、provider metadata、測試腳本、log 及截圖只存暫存，未提交。

預覽入口：`/anime/yofukashi-no-uta-season-2/`、`/anime/arknights-enshin-shomei/`、`/anime/seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai/`、`/anime/punirunes-puni-3/`。可搜尋 `AICL-3724`、`TeddyLoid Remix`、`SVWC-70728`。

階段提交：`d302554` 保存第22批正式驗收／第23批啟動；`2054fa2` 保存三筆編曲與官方 Art Track 核心欄位（當時未完成整批驗證）。本批深入音源／發行品的來源提交與正式驗收於發布後另記。

下一批：**2025-summer-credits-youtube-24**，由 `cardfight-vanguard-divinez-deluxe-kesshou-hen-op-1` 起，依序 `curated-191994`、`curated-169420`、`curated-177761`、`curated-193238`、`curated-186561`、`curated-180794`、`curated-178025`、`curated-184034`、`curated-180929`、`curated-181444`，10 部／32 筆既有公開用途。第23批正式驗收後接續；2020–2026 深化及長期目標均未完成。

### 第23批發布前補充核對

GitHub push 仍提示 23 個 Dependabot open alerts，與本機 npm audit 的 0 vulnerabilities 分開記錄。已將各 alert 的 vulnerable version range 對照目前 lockfile：23 個均沒有目前受影響版本（包括 http-cache-semantics 4.3.0 已高於 <=4.2.0 範圍；js-yaml 不在目前依賴樹）；未自行關閉遠端 alert。這不等於 GitHub 已更新其 alert 狀態。

### 第23批正式發布與接續

- [PR #112](https://github.com/kyeunga25/anisonary/pull/112) 的 quality 與 main `dc71ed80dd5a9b6bdf51dca95c5a1ed69423dcdc` 的 quality 均通過；四個階段提交正常 rebase 合併及推送。來源 Git tree 與 26 項產物 digest 與已審閱內容一致。
- Cloudflare 正式部署完成；全目錄 API 契約（28 季、1,917 唯一作品）、16 項頁面／資產＋10 個本批 anime JSON 共 26 項 byte digest、兩個真實 404、HTML 安全標頭與 API noindex／revalidation／無 permissive CORS 均通過。
- 正式桌面 10 部／26 筆、手機 4 部／10 條閱讀流程通過，0 app／CSP errors、0 自動 YouTube request；版本、角色／SP 名單、逐音源創作、商品曲序、Art Track 及緊湊歌單搜尋均已驗證。季度統計與保留缺口見上表及本批；兩個目標範圍均未完成。

| 階段 | main 提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 22 production verification | `2752079` | `d302554` |
| (add): summer creator and official audio gaps batch 23 | `6b94e4c` | `2054fa2` |
| (add): summer recordings and releases batch 23 | `2a8fa34` | `b154d00` |
| (docs): track quarterly collection progress | `dc71ed8` | `dde2d4f` |

## 2026-10-16 批次：2025-summer-credits-youtube-24

目標：由 `cardfight-vanguard-divinez-deluxe-kesshou-hen-op-1` 起，按 seed 順序接續 `curated-191994`、`curated-169420`、`curated-177761`、`curated-193238`、`curated-186561`、`curated-180794`、`curated-178025`、`curated-184034`、`curated-180929`、`curated-181444`，10 部／32 筆既有公開用途。固定 2020–2026 深化、2007–2026 長期範圍及 2026-10-14 截止日；新證據實際查閱日期為 2026-10-16，延續既有已完成資料。

已保存夏季 seed、global extra-theme、影片索引與10部公開 JSON 基線；31筆已有完整詞曲編曲、32筆已有 YouTube 歌曲外連。先定向查 Merry Go Round 的明示編曲，再深化本批已證實商品／版本、團隊及可補官方影片形式；有效證據與舊日期沿用。学校では教えてくれないこと的既有 extra-theme 保留；薫る花的已排除 ED2 不恢復。兩輪仍無清楚證據時保存觸發條件。批次收尾核對公開 ID、更新各季度計數、完成本機驗證及分類提交／發布後接續；第24批未驗證資料不計作已完成。

### 第24批官方影片外連階段

重用既有已核對 metadata，將18筆用途的20支官方／正式授權影片接到可辨別標題的 YouTube watch 外連；包含 MV、無字幕 ED、官方音源及原已確認的其他形式。沒有新增影片 metadata、改造 Shorts 網址、推定 full／TV 或新增錄音；沿用每個原來源及外連的 2026-08-10 核對日期，未以本次加入連結重查影片。

Merry Go Round 的編曲經兩輪定向查找仍無明示；官方 Single／唱片公司頁與授權曲目資料只確定現有詞曲。藝人訪談提及 UTA 製作 track，不推定為正式編曲欄位；留待官方逐曲 credits／booklet 明示再補。其餘31筆核心創作沿用。

本階段只做公開邊界與差異檢查，尚未完成第24批整批測試、build、展示或部署；接續同批已讀取的 TV Size／商品頁及確切平台，收尾再一次完整驗證。季度進度表仍只計第23批正式成果。

### 第24批本機收尾成果

完成層次：核對2025夏季10部／32筆既有公開用途，更新8部／29筆，3筆完整內容沿用。新證據實際查閱日期2026-10-16；正式發布另以下方驗收為準。既有公開曲名、演唱名義、ID、序號、用途種類、影片 metadata、URL 與全部動畫 metadata／日期保留；新商品及外連採既有已核對原名。

| 公開 theme ID | 曲目與實際處理 |
| --- | --- |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-op-1` | Feathered Dreams；團隊／創作名單、音源版本、收錄發行品、官方影片／配信入口 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-1` | Drive Your Heart；團隊／創作名單、音源版本、收錄發行品、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-2` | 紫炎；團隊／創作名單、音源版本、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-3` | 残痕字；團隊／創作名單、音源版本、收錄發行品、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-4` | Color of Us；團隊／創作名單、音源版本、收錄發行品、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-5` | スタ〜リング ☆じぶん☆；團隊／創作名單、音源版本、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-6` | スキ×すき×カラフリィ；團隊／創作名單、音源版本、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-7` | 真夜中遊園地；團隊／創作名單、音源版本、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-8` | 'FIGHT' ADDICT；團隊／創作名單、音源版本、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-9` | Part of the Life；團隊／創作名單、音源版本、官方影片／配信入口、用途集數 |
| `cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-10` | ‘S/’ The Way；團隊／創作名單、音源版本、官方影片／配信入口、用途集數 |
| `watari-kun-no-xx-ga-houkai-sunzen-op-1` | ゆうれいになりたい；官方影片／配信入口 |
| `watari-kun-no-xx-ga-houkai-sunzen-op-2` | ふたりぶん；官方影片／配信入口 |
| `watari-kun-no-xx-ga-houkai-sunzen-ed-1` | 愛愛愛愛愛；官方影片／配信入口 |
| `watari-kun-no-xx-ga-houkai-sunzen-ed-2` | 失敗しないメンヘラの育て方；官方影片／配信入口 |
| `9-nine-shihaisha-no-oukan-op-1` | ResoNAnce；完整創作與有效官方影片沿用；無修改 |
| `9-nine-shihaisha-no-oukan-ed-1` | Pale Blaze；完整創作與有效官方影片沿用；無修改 |
| `gakkou-de-wa-oshiete-kurenai-taisetsu-na-koto-ed-1` | 学校では教えてくれないこと；完整創作與有效官方影片沿用；無修改 |
| `kizetsu-yuusha-to-ansatsu-hime-op-1` | 天伝バラバラ；收錄發行品、官方影片／配信入口 |
| `kizetsu-yuusha-to-ansatsu-hime-ed-1` | スキマジカン；音源版本、收錄發行品、官方影片／配信入口 |
| `gacen-shoujo-to-ibunka-kouryuu-op-1` | ふたりのスタートボタン；音源版本、收錄發行品、官方影片／配信入口 |
| `gacen-shoujo-to-ibunka-kouryuu-ed-1` | Amusing Flavor；音源版本、收錄發行品、官方影片／配信入口 |
| `gachiakuta-op-1` | HUGs；官方影片／配信入口 |
| `gachiakuta-op-2` | LET’S JUST CRASH；官方影片／配信入口 |
| `gachiakuta-ed-1` | 灯火；官方影片／配信入口 |
| `gachiakuta-ed-2` | 番；官方影片／配信入口 |
| `hotel-inhumans-op-1` | ミスター・ムーンライト；官方影片／配信入口 |
| `hotel-inhumans-ed-1` | Merry Go Round；收錄發行品、官方影片／配信入口 |
| `ruri-no-houseki-op-1` | 光のすみか；官方影片／配信入口 |
| `ruri-no-houseki-ed-1` | サファイア；官方影片／配信入口 |
| `kaoru-hana-wa-rin-to-saku-op-1` | まなざしは光；官方影片／配信入口 |
| `kaoru-hana-wa-rin-to-saku-ed-1` | ハレの日に；官方影片／配信入口 |

已處理 anime ID：`curated-191994`、`curated-169420`、`curated-177761`、`curated-193238`、`curated-186561`、`curated-180794`、`curated-178025`、`curated-184034`、`curated-180929`、`curated-181444`。

### 實際差異

- 新增／撤回動畫、歌曲用途及影片 metadata 均為0。補55筆團隊成員關係，涉及50個已列名角色／虛擬成員身分；其中45個角色保留官方 CV 對應，5個夢限大みゅーたいぷ成員保留原名。角色與 CV 是團隊資料，未轉作各首音源的個別歌唱／演奏 credits。另補‘S/’ The Way明示的Diggy-MO’ Producer，沒有由製作 track、作曲或團隊身分推定其他編曲。
- 全批31／32筆有詞曲編曲欄位、32／32筆有已確認 YouTube 歌曲外連；Merry Go Round 的編曲仍缺。新增20個既有官方／正式授權影片的歌曲 watch 外連及2個官方 YouTube 配信專輯入口，未增加影片 metadata 或從呈現形式新增音源。
- 新增21個唯一音源＝15演唱版、6 Instrumental；長度分類為11 TV、10 unknown。Vanguard 11首全部有明示 TV Size，逐個保存本版本創作與確切配信入口；ED1–10補第2–11話用途，原序號保留。CD伴奏、EP原版／伴奏及スキマジカン Anime Ver. 皆依其明示名稱保存；Anime Ver. 的長度分類沒有推定為 TV，主唱／詞曲／編曲缺漏不從另一音源抄入。
- 新增12筆收錄關係，涉及9個唯一發行 ID＝8 Single、1 EP。Morfonica Feathered Dreams 的 BRMM-10944／10945 共用 OP Track1／ED Track2與 Instrumental Track4／5，2025-08-27；Poppin’Party Drive Your Heart 的 BRMM-10994／10995為2025-12-24、Track1／4，未與七月TV配信日期混用。MyGO!!!!! 往欄印先保留官方明示第7張 Single及残痕字收錄，日期／品番／曲序未知。
- ゲーセン少女OP／ED共用2025-07-07的四曲Digital EP；各為Track1／2，伴奏3／4，四個確切Apple Music曲目各自接到本音源。該動畫OST雖已公告，未由同作品推定收錄OP／ED。
- PONY CANYON的PCSP.06631天伝バラバラ為一曲Digital Single；PCSP.06516スキマジカン為原版／Anime Ver.／Instrumental三曲Single，兩者均2025-07-11。原版及Anime Ver.保留已證實三名角色歌唱，沒有替OP增造伴奏或從秒數推定TV。NOA官方明示的Merry Go Round Digital Single為Track1、2025-07-07；八月MV公告日期未當音源發行日。
- 新增108個外連＝21官方入口、27Apple Music、19Spotify、19YouTube Music、22YouTube（20歌曲影片＋2專輯入口）；另更新15個原官方入口的標籤／音源關係。平台目的地取自實際讀取的17個官方逐曲配信頁；未將數位配信專輯硬綁某個實體CD版。新增23筆來源、更新41筆實際查閱來源、194組欄位證據；重用影片來源／外連的2026-08-10日期與未查來源保留。
- 全目錄仍為28季、1,917動畫、4,251用途＝4,244 OP／ED、4 IN、3 TS；2020–2026仍1,808動畫／3,987用途。唯一YouTube歌曲watch外連842、另8個官方配信專輯入口；影片metadata仍1,793。用途、歌曲、版本、外連與發行品各自計數。

### 未解缺口與續查條件

| 項目 | 保留缺口 | 再查觸發條件 |
| --- | --- | --- |
| Merry Go Round | 兩輪定向查找仍無明示編曲；UTA track製作訪談不等於正式編曲欄位 | 官方逐曲credits、booklet或授權平台明確編曲資料出現；不由作曲／producer推定 |
| MyGO!!!!! 往欄印 | 已有官方第7張Single與残痕字收錄；本批未補齊日期／品番／曲序及本曲完整音源形式 | 後續深化該確切商品頁／booklet時逐項補證；未知欄位不阻擋已明示收錄 |
| Vanguard其他商品 | 本批只補確證的TV版本、兩組CD Single版及MyGO收錄；其他藝人Single／Album、ISRC與CD／配信錄音等同尚未確認 | 官方完整商品／逐音源識別出現；不從同一曲名、影片或演唱會收錄推定 |
| 團隊／其他音源 | 官方角色與CV介紹不代表每首個別演唱／樂手；Anime Ver.的TV等同、未標full及地區可用性仍未明 | 明確逐曲角色／樂手／版本資料、ISRC或可用性核對出現，僅查真正缺口 |

### 本機檢查與展示

- 最終`npm test` 4檔／5個核心測試通過。首輪契約檢查拒絕未綁公開用途ID的集數證據，已修正資料；整理時發現並更正商品網址多餘零與新標籤帶入舊raw羅馬字，統一採既有已核對原名。未修改測試、正常parser或有效安全gate。
- `npm run build`通過：1,961 HTML、CSP 6 script／10 style hashes、Service Worker及3,918公開產物。最終6條E2E、npm audit 0 vulnerabilities及Cloudflare dry-run通過；依賴／部署設定未改。標籤修正後只重驗受影響資料及流程；公開JSON再次確認原曲名與演唱名義穩定。
- 桌面1536×1024核對10部／32筆與JSON、手機390×844核對4部，10條閱讀流程通過；包含角色／CV團隊與音源名單、11個TV Size、集數、共用Single／EP、不同曲序、完整／不完整商品欄位、Anime Ver.未知長度、NOA編曲缺口與緊湊搜尋。0 app／CSP errors、0自動YouTube request、無橫向溢出。已實際檢視桌面Vanguard名單／版本／兩個CD版及手機EP音源／曲序；Browser plugin不在清單，沿用Playwright。
- 八條選定seed以外的bytes／全部動畫metadata保留；global extra-theme與影片索引完全未改。18個文件連結、`git diff --check`與repository `public:check`（239檔）通過；原始頁面、嵌入provider資料、測試腳本、log與截圖只存暫存，未提交。

預覽入口：`/anime/cardfight-vanguard-divinez-deluxe-kesshou-hen/`、`/anime/gacen-shoujo-to-ibunka-kouryuu/`、`/anime/kizetsu-yuusha-to-ansatsu-hime/`、`/anime/hotel-inhumans/`。可搜尋`BRMM-10944`、`Amusing Flavor instrumental`、`Anime Ver.`。

階段提交：`131dafc`保存第23批正式驗收／第24批啟動；`6634392`保存20個既有官方影片外連（當時未完成整批驗證）。本批深入版本／團隊／商品的來源提交與正式驗收於發布後另記。

下一批：**2025-summer-credits-youtube-25**，由`tomica-heroes-jobraver-tokusou-gattai-robo-tv-op-1`起，依序`curated-196229`、`curated-180425`、`curated-179885`、`curated-178675`、`curated-178433`、`curated-189326`、`curated-177689`、`curated-175124`、`curated-184574`、`curated-185755`，10部／20筆既有公開用途。第24批正式驗收後接續，2020–2026深化及長期目標均未完成。

### 第24批正式發布與接續

- [PR #113](https://github.com/kyeunga25/anisonary/pull/113)的quality及main `3b1d850`的quality均通過；三個階段提交正常rebase合併及推送。來源Git tree與26項產物digest與已審閱內容一致。
- Cloudflare正式部署完成；全目錄API契約（28季、1,917唯一作品）、16項頁面／資產＋10個本批anime JSON共26項byte digest、兩個真實404、HTML安全標頭與API noindex／revalidation／無permissive CORS均通過。
- 正式桌面10部／32筆、手機4部／10條閱讀流程通過，0 app／CSP errors、0自動YouTube request；角色／CV團隊、11個TV Size、集數、CD／EP曲序及已保留缺口均已驗證。2025夏累計96／178筆已逐批核對，其中91筆核心欄位齊備；其他季度見上表。兩個目標範圍均未完成。

| 階段 | main提交 | 原審閱分支提交 |
| --- | --- | --- |
| (docs): record batch 23 production verification | `07357a5` | `131dafc` |
| (add): official song video links batch 24 | `0bad172` | `6634392` |
| (add): summer TV recordings and release relations batch 24 | `3b1d850` | `a0ef5cf` |

## 2026-10-16 批次：2025-summer-credits-youtube-25

目標：由`tomica-heroes-jobraver-tokusou-gattai-robo-tv-op-1`起，按seed順序接續`curated-196229`、`curated-180425`、`curated-179885`、`curated-178675`、`curated-178433`、`curated-189326`、`curated-177689`、`curated-175124`、`curated-184574`、`curated-185755`，10部／20筆既有公開用途。固定2020–2026深化、2007–2026長期範圍及2026-10-14截止日；新證據實際查閱日期2026-10-16。

已保存夏季seed、global extra-theme、影片索引及10部公開JSON基線。20筆已有完整詞曲編曲與YouTube歌曲外連；先沿用有效創作／來源與19支可接通外連的既有影片，再深化本批官方已證實的角色／團隊、音源版本、商品收錄與精確平台；不從MV、專輯或同作品推定新OP／ED。兩輪仍無明示的欄位保存續查觸發條件。批次收尾更新公開ID及各季度計數，完成本機驗證、分類提交與正式發布後接續；未驗證修改不計完成。

### 第25批官方影片外連階段

重用既有已核對metadata與原來源日期，將19支官方／正式授權影片接到歌曲watch外連，標籤採已核對影片名稱；沒有新增影片metadata、音源或用途，也未從MV或其他呈現形式推定full／TV。有效創作名單與動畫metadata保留。

本階段只完成公開邊界及差異檢查，尚未完成第25批整批測試、build、展示或部署；接續同批版本、商品、團隊及確切平台，收尾一次完整驗證。季度進度表仍只計第24批正式成果。

### 第25批新增插曲核心階段

同一動畫官方MUSIC／公告明示、並有交叉核對的三筆用途已保存：`nyaight-of-the-living-cat-in-1` 猫のしわざ／近石涼（第9話），`nyaight-of-the-living-cat-in-2` Catastrophe／Sarina（第9話），`nyaight-of-the-living-cat-in-3` ねこだいすき／ガンスリンガー（CV.森川智之，第10話）。全部使用IN，原OP／ED的ID與序號保留，不計入季度OP／ED分母。前兩首詞曲編曲由官方明示；第三首詞曲採已讀公開索引交叉補證，編曲未知留空，不將遠藤浩二的全劇音樂身分推定為本曲編曲。

本階段已保存本機核心資料與公開來源，尚待本批完整parser／JSON／build／展示及正式驗收；影片、音源與收錄關係接續同批深化。季度正式完成數仍維持第24批。

### 第25批本機完成與公開 ID

完成層次：核對2025夏季10部／20筆既有OP／ED，全部有有效詞曲編曲與YouTube歌曲外連可沿用；實際10部／23筆均有更新，包括3筆新IN。固定範圍及截止日不變，新證據實際查閱日期2026-10-16。本機完成與正式發布分開，整體目標未完成。

| 公開 theme ID | 曲目與實際處理 |
| --- | --- |
| `tomica-heroes-jobraver-tokusou-gattai-robo-tv-op-1` | 特装合体！ジョブレイバー；既有官方影片外連 |
| `ame-to-kimi-to-op-1` | 雨と；音源版本、收錄發行品、既有官方影片外連 |
| `ame-to-kimi-to-ed-1` | filled；音源版本、收錄發行品、既有官方影片外連、確切正版平台 |
| `yuusha-party-wo-tsuihou-sareta-shiro-madoushi-s-rank-boukensha-ni-hirowareru-kono-shiro-madoushi-ga-kikakugaisugiru-op-1` | 純情であれ。；既有官方影片外連 |
| `yuusha-party-wo-tsuihou-sareta-shiro-madoushi-s-rank-boukensha-ni-hirowareru-kono-shiro-madoushi-ga-kikakugaisugiru-ed-1` | 光射す扉；既有官方影片外連 |
| `bad-girl-op-1` | すーぱーびっぐらぶ！；收錄發行品、既有官方影片外連、確切正版平台 |
| `bad-girl-ed-1` | BAD SURPRISE；收錄發行品、既有官方影片外連、確切正版平台 |
| `bad-girl-ed-2` | はーと掻き回してアゲル♡；收錄發行品、既有官方影片外連、確切正版平台 |
| `isekai-mokushiroku-mynoghra-hametsu-no-bunmei-de-hajimeru-sekai-seifuku-op-1` | Majestic Catastrophe；既有官方影片外連 |
| `isekai-mokushiroku-mynoghra-hametsu-no-bunmei-de-hajimeru-sekai-seifuku-ed-1` | more than W；既有官方影片外連、確切正版平台 |
| `jibaku-shounen-hanako-kun-2-part-2-op-1` | かごめかごめ；音源版本、收錄發行品、既有官方影片外連、確切正版平台 |
| `jibaku-shounen-hanako-kun-2-part-2-ed-1` | mo∞ent；音源版本、收錄發行品、既有官方影片外連、確切正版平台 |
| `hikaru-ga-shinda-natsu-op-1` | 再会；既有官方影片外連 |
| `hikaru-ga-shinda-natsu-ed-1` | あなたはかいぶつ；既有官方影片外連 |
| `nyaight-of-the-living-cat-op-1` | CAT CITY；團隊成員、音源版本、收錄發行品、既有官方影片外連、確切正版平台 |
| `nyaight-of-the-living-cat-ed-1` | Matatabi；團隊成員、既有官方影片外連、確切正版平台 |
| `nyaight-of-the-living-cat-in-1` | 猫のしわざ；新增IN核心／集數與創作、音源版本、收錄發行品、確切正版平台 |
| `nyaight-of-the-living-cat-in-2` | Catastrophe；新增IN核心／集數與創作、音源版本、收錄發行品、確切正版平台 |
| `nyaight-of-the-living-cat-in-3` | ねこだいすき；新增IN核心／集數與創作、音源版本、收錄發行品、確切正版平台 |
| `dekin-no-mogura-op-1` | 神頼み；既有官方影片外連 |
| `dekin-no-mogura-ed-1` | 喧騒 feat. Aile The Shota；既有官方影片外連 |
| `puniru-wa-kawaii-slime-2nd-season-op-1` | Brun-Brun；音源版本、收錄發行品、既有官方影片外連、確切正版平台 |
| `puniru-wa-kawaii-slime-2nd-season-ed-1` | 青と夏；音源版本、收錄發行品、既有官方影片外連、確切正版平台 |

已處理 anime ID：`curated-196229`、`curated-180425`、`curated-179885`、`curated-178675`、`curated-178433`、`curated-189326`、`curated-177689`、`curated-175124`、`curated-184574`、`curated-185755`。

### 實際差異

- 新增動畫0、撤回用途0；新增3筆IN，既有20筆OP／ED的ID、原文歌名、演唱名義、類型與序號全部保留。新IN各自使用explicit來源，未繼承舊OP／ED來源／日期。22／23筆有詞曲編曲欄位；20筆既有用途有已核對YouTube watch外連，3筆插曲沒有憑搜尋候選增造影片metadata。
- 新增7筆團隊成員關係：THE YELLOW MONKEY 4人、WANIMA 3人；不轉作本曲個別歌唱或演奏。新插曲各補演唱／詞／曲；猫のしわざ編曲近石涼、Catastrophe編曲Lenno Linjama有第一方明示；ねこだいすき編曲未知。
- 新增18個音源：9演唱版、4Instrumental、1重新編曲、1Live、3角色版；長度為2full、2TV、14unknown。只有官方明示的ぷにる歌曲Album兩首用full；かごめかごめ TV edit.及mo∞ent TV size Ver.用TV。CAT CITY Anime Size、filled Anime ver.、猫のしわざ サビver不由名稱或秒數推定TV／short／full。
- 新增31筆收錄關係，涉及26個唯一發行ID＝20Single、1EP、4Album、1OST。雨とXSCL-115於2025-07-30收錄正常演唱與versão de bolso，後者保留已證實重構編曲與長笛，普通版吉他分開；2025-07-04先行配信未當CD日。filled AICL-4785是CD Single，7吋大小紙封套不當黑膠；同曲Digital EP獨立，保存本曲Track1／3／4／5，其他歌曲不新增動畫用途。
- B.G.M.完全生產限定Album於2026-04-29發售，CD Track9 filled及Blu-ray LIVE Track6分開保存；現場為2025-09-27 Spotify O-EAST，不把現場日期當Album日，沒有未證實碟號或套用studio編曲到live。
- KING OF EVIL KICA-2640アーティスト盤CD及Digital Album共用本批三首曲目的Track3／8／7，2025-09-24；三首亦有官方各自Single日期。ED2保留單人角色歌唱，其他Album曲目不自動增加OP／ED。
- CAT CITY五個CD版品番WPCL-13660／13659／60086／60087／60088及Digital Single，皆2025-07-09；通常盤Track1／2／3為原版／Anime Size／Instrumental。其他CD版只確認CAT CITY Track1，不從其他曲目的live bonus推定CAT CITY live，也不把同期製作當成收錄Sparkle X。Matatabi有2025-07-06 DIGITAL及精確平台曲目，發行類型未明故不補造Single。
- 猫のしわざ2025-09-03 Digital Single有逐曲Mix／Master／Guitar／Keyboards／Programming，サビver另記已明示本版本credits；Catastrophe2025-08-29 Single的正式編曲、正版曲目均已接通。ねこだいすき為2025-09-13 OST Track32，角色／CV與詞曲分開保存；其他配樂及OST主題曲不從曲目表自動變成新動畫用途。
- ぷにる2期歌曲Album保留數位Album及兩首full，日期／品番／曲序未知，Blu-ray Box②特典CD只保留官方說明，未把影像Box偽作Single。兩個數位Single各自日期及確切曲目已核對，不將其音源自動等同Album full版本。
- かごめかごめ／ふたりキャンプ feat.SPECIAL OTHERS共用三個CD版PCCG.02454／02455／BRCG.00106，2025-08-06；本曲只保存Track1／TV edit.Track3／instrumental Track5；global商品ID可供另一作品後續重用，本批未增加另一作品用途。かごめかごめ獨立Digital Single及mo∞ent三曲Single均2025-07-06，數位／CD日期不混用。
- 新增105個外連＝20YouTube（19個既有影片watch＋1個官方配信專輯入口）、24官方配信、32Apple Music、13Spotify、13YouTube Music、3作品官網入口；更新10個既有官方配信入口的標籤／收錄關係。新增35筆來源、更新25筆實際查閱來源、197組欄位證據。影片metadata仍未新增；19個重用影片外連及未重查的動畫／來源日期保留。
- 全目錄本機為28季、1,917動畫、4,254用途＝4,244 OP／ED、7 IN、3 TS；2020–2026為1,808動畫／3,990用途。唯一YouTube watch外連861，另9個官方配信專輯入口，影片metadata仍1,793。各類分開計數。

### 未解缺口與續查條件

| 項目 | 保留缺口 | 再查觸發條件 |
| --- | --- | --- |
| 雨と作詞 | 官方公告英文Lyrics列Mamiko Suzuki與ryotakahashi；已發行曲目及交叉索引只列鈴木真海子／鈴木麻実子。兩輪定向查找後保留現有歌曲作詞，不增ryo作詞；bolso曲目credits保留商品原列名 | 官方booklet／發行端逐曲credits或更正公告出現再處理；不擅自統一藝名與商品列名 |
| 新IN官方YouTube | 猫のしわざ、Catastrophe及ねこだいすき的候選影片歸屬仍不足，兩輪定向查找後不加metadata；正式YouTube Music配信與普通影片分開 | 動畫／藝人／唱片方官方精確影片連結及channel歸屬出現；不把名稱相似、shorts或一般搜尋結果當官方MV |
| ねこだいすき編曲 | 作詞ホークマン、作曲遠藤浩二及角色演唱有來源；編曲兩輪未明 | 官方逐曲booklet／授權credits明示時補；全劇音樂署名不當本曲編曲 |
| 猫のしわざサビver | 有正式命名與本版本錄音credits，沒有可證實日期／發行品類型／長度分類 | 正式商品資料出現再補，未明仍unknown，不由サビ推定short |
| B.G.M.與ぷにるAlbum | 前者直接配信頁仍是預存入口，限定盤品番未知；後者日期／曲序／CD與配信master關係未明 | 已更新的官方正式曲目／商品及授權精確Album入口出現；不把預存登入當可播放曲目，也不猜碟號或日期 |
| Matatabi與其他版 | Matatabi只證實DIGITAL，Single／Album分類未明；Bad Girl其他實體版及其餘本批作品的進一步Album／版本仍未補齊 | 對應官方商品／逐音源資料出現再深化；有效核心與影片沿用，不為選填缺口重搜全部資料庫 |
| 全批音源 | 未明full、ISRC、數位／CD master等同、地區可用性留空 | 明示版本、錄音識別或實際地區核對後再更新；MV／NC／Album本身不推定新音源 |

### 本機檢查與展示

- 最終`npm test`4檔／5測試及`npm run build`通過：1,961 HTML、CSP 6 script／10 style hashes、Service Worker與3,918公開產物。6條E2E、npm audit 0 vulnerabilities、Cloudflare dry-run通過；依賴／設定／正常程式／測試未改。
- 首次本機Chromium受macOS沙盒啟動權限限制，於允許瀏覽器的本機環境完成展示及E2E。展示檢查發現Matatabi重複MV外連日期被配信入口覆寫，修正為保留原影片日期、另加本次配信佐證；只重驗受影響資料與流程。沒有降低有效安全或資料gate。
- 桌面1536×1024核對10部／23筆及公開JSON；手機390×844核對4部，10條閱讀流程通過。包含原ID／名義、三筆IN與集數、團隊／個別音源credits、重構／live／full／TV／unknown、各CD／數位收錄、精確平台及緊湊搜尋。0 app／CSP errors、0自動YouTube request、無橫向溢出；已實際檢視filled桌面版本／各發行品與ねこだいすき手機OST畫面。Browser plugin未提供，沿用Playwright。
- 僅選定10條seed改動；全部其他seed bytes、動畫metadata與global extra-theme／影片索引保留。原始頁面、provider資料、測試腳本、log與截圖只在暫存，不提交。

- 39個文件相對連結、`git diff --check`與repository `public:check`（239檔）通過；提交範圍的私密路徑、金鑰／token及raw provider欄位檢查未發現命中。

預覽入口：`/anime/ame-to-kimi-to/`、`/anime/nyaight-of-the-living-cat/`、`/anime/jibaku-shounen-hanako-kun-2-part-2/`、`/anime/puniru-wa-kawaii-slime-2nd-season/`。可搜尋`XSCL-115`、`サビver`、`BRCG.00106`。

階段提交：`8b6d84d`保存第24批正式驗收；`4a1fe3e`保存19個既有官方影片外連；`a81335a`保存三筆已確認插曲核心。深入資料提交及正式驗收於發布後另記。頂部季度表仍只計第24批正式成果。

下一批：**2025-summer-credits-youtube-26**，由`city-the-animation-op-1`起，按seed順序接續`curated-181841`、`curated-181867`、`curated-185519`、`curated-188138`、`curated-179828`、`curated-182309`、`curated-184591`、`curated-159483`、`curated-173780`、`curated-177880`，10部／25筆現有公開用途。第25批正式驗收後啟動；仍有必需與選填缺口，2020–2026深化及長期目標未完成。

### 第25批正式發布與接續

[PR #114](https://github.com/kyeunga25/anisonary/pull/114)的quality CI `38778169305`及必要檢查成功，正常rebase合併，保留四個階段提交；main CI `38778560112`亦成功。未使用admin或force方式。

來源`3dc80ad`的Git tree與已審閱分支`0641161`相同，26個本機產物摘要完全一致，工作目錄乾淨。Cloudflare以`batch25`標籤實際部署CLI exit0，完成正式域名驗收；不把CI或本機結果當作部署證據。

Live首輪即通過：全部1,917動畫的公開API smoke；16共同路徑＋10本批JSON與本機摘要相同、2真實404、安全headers、API noindex／重新驗證／無CORS；桌面10部／23筆、手機4部、10條閱讀流程，0 app／CSP errors及0自動YouTube request。沒有用舊快取或重試掩蓋部署差異。

| 階段 | main提交 | 原來源提交 |
| --- | --- | --- |
| (docs): record batch 24 production verification | `8003afd` | `8b6d84d` |
| (add): official song video links batch 25 | `9d7488a` | `4a1fe3e` |
| (add): verified Nyaight insert song uses | `f4e141a` | `a81335a` |
| (add): summer recordings and release credits batch 25 | `3dc80ad` | `0641161` |

頂部季度表更新至本批正式結果：2025夏116／178筆已核對，111筆核心欄位齊備、5筆仍有核心缺口；2026各季及未開始季度數字保留。全範圍578個唯一用途已處理（568 OP／ED、7 IN、3 TS）；仍有缺口，整體目標未完成。

## 2026-10-16 批次：2025-summer-credits-youtube-26

目標：從`city-the-animation-op-1`起按seed順序接續`curated-181841`、`curated-181867`、`curated-185519`、`curated-188138`、`curated-179828`、`curated-182309`、`curated-184591`、`curated-159483`、`curated-173780`、`curated-177880`，10部／25筆現有公開用途。固定2020–2026深化、2007–2026長期範圍及2026-10-14截止日不變；新證據實際查閱日期2026-10-16。

保存本批seed／global extra-theme／影片metadata及公開JSON基線。先沿用有效核心與官方影片，再查真正缺口；同一官方頁面一次補可支持的團隊、版本、收錄與精確平台。兩輪未明保存續查條件；收尾整批驗證、分段提交及正式發布後接續，不將尚未驗證的修改計完成。

### 第26批官方影片外連階段

重用既有已核對metadata、官方歸屬與原來源日期，將21支影片接到21筆用途的歌曲watch外連，涵蓋本批10部；沒有增加影片metadata、音源或用途。尚未完成本批整套資料／build／展示驗證，季度進度仍只計第25批正式成果。續查MAMBO NO.5與クリプトニンジャ咲耶的真正缺口，並深化本批已證實版本／角色／商品關係。

### 第26批新增插曲核心階段

已保存`turkey-in-1`：幾星霜／ZAQ，第5話挿入歌，詞曲編曲ZAQ、2025-08-06配信；第一方各話音樂頁及Animate Times交叉來源齊備，使用explicit來源。藝人官方VIDEO頁直接嵌入OAbz23P09Rs，且公開影片描述可核對channel及創作，新增1筆music_video metadata與歌曲watch外連，未從MV長度推定full。Side Project!03的三鷹希角色版待同批另存音源／收錄，不增另一動畫用途。尚未完成本批parser／JSON／build／展示及正式驗收，季度進度仍只計第25批。

### 第26批本機完成與公開 ID

完成層次：核對並更新2025夏季10部／26筆（25既有OP／ED、1新IN）。原用途ID、類型、序號、歌名、動畫metadata及舊影片metadata均保留；MAMBO原作曲者不再當作已確認演出名義。固定範圍／截止日不變，新證據實際核對日期2026-10-16。本機完成與正式發布分開，整體目標未完成。

| 公開 theme ID | 曲目與實際處理 |
| --- | --- |
| `city-the-animation-op-1` | Hello；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `city-the-animation-ed-1` | LUCKY；收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `city-the-animation-ed-3` | MAMBO NO. 5；作曲／cover音源製作分工，演奏名義未知 |
| `shinobanai-crypto-ninja-sakuya-san-no-maki-op-1` | クリプトニンジャ咲耶；音源版本、有效官方影片沿用／接通、確切正版平台 |
| `food-court-de-mata-ashita-op-1` | 未完成に瞬いて；收錄發行品、團隊／角色／CV、有效官方影片沿用／接通、確切正版平台 |
| `food-court-de-mata-ashita-ed-1` | となりあわせ；有效官方影片沿用／接通、確切正版平台 |
| `binan-koukou-chikyuu-bouei-bu-haikara-op-1` | ハイカラ de GO!!；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `binan-koukou-chikyuu-bouei-bu-haikara-ed-1` | 残光 in your eyes；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `kakkou-no-iinazuke-season-2-op-1` | 君がくれたもの；收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `kakkou-no-iinazuke-season-2-ed-1` | あなたでなくちゃ；收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `grand-blue-season-2-op-1` | 青春永遠（せいしゅんとは）；有效官方影片沿用／接通、確切正版平台 |
| `grand-blue-season-2-ed-1` | 裸でどつきあい feat. May'n；收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `watashi-ga-koibito-ni-nareru-wake-nai-jan-muri-muri-muri-ja-nakatta-op-1` | ムリムリ進化論；有效官方影片沿用／接通 |
| `watashi-ga-koibito-ni-nareru-wake-nai-jan-muri-muri-muri-ja-nakatta-ed-1` | 迷っちゃうわ；收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `turkey-op-1` | ヒャクニチソウ；音源版本、收錄發行品、團隊／角色／CV、有效官方影片沿用／接通、確切正版平台 |
| `turkey-op-2` | ヒャクニチソウ；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `turkey-ed-1` | もしも；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `turkey-ed-2` | フラッシュバック；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `turkey-ed-3` | sincerity flower；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `turkey-ed-4` | Strike freedom!；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `turkey-ed-5` | 夏の住処；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `turkey-in-1` | 幾星霜；新增第5話插曲核心／創作及官方MV、音源版本、收錄發行品、確切正版平台 |
| `tate-no-yuusha-no-nariagari-season-4-op-1` | Resolution；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `tate-no-yuusha-no-nariagari-season-4-ed-1` | 永遠に一回の；收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `osomatsu-san-4th-season-op-1` | おそ松さんのボンバシェー！；音源版本、收錄發行品、有效官方影片沿用／接通、確切正版平台 |
| `osomatsu-san-4th-season-ed-1` | バディ；音源版本、收錄發行品、團隊／角色／CV、有效官方影片沿用／接通、確切正版平台 |

已處理 anime ID：`curated-181841`、`curated-181867`、`curated-185519`、`curated-188138`、`curated-179828`、`curated-182309`、`curated-184591`、`curated-159483`、`curated-173780`、`curated-177880`。

### 實際差異

- 新增動畫0、撤回用途0，新增1筆IN；25筆既有OP／ED的公開ID、原文曲名、類型與序號保留。CITY ED3保留原ID及序號，不還原已排除的其他ED；Food Court亦未還原被排除的重複ED。MAMBO NO.5的Dámaso Pérez Prado只保留作曲，演出名義改明示「演奏名義未確認」，另以交叉來源保存矢野博康原署名カバー音源制作，不推定為正式編曲或演唱。
- 新增14筆group_member關係：おいしくるメロンパン3人、長野県一刻館高校5名角色／CV、松野家6兄弟6名角色／CV。バディ官方明示ひとみ主唱、六兄弟掛け合い，故移除原六兄弟的vocals角色，另存六筆明確掛け合い；沒有從團隊身分推定每人演唱。新IN保存ZAQ歌唱及完整詞曲編曲。
- 新增35個唯一音源＝15演唱版、6Instrumental、14角色版；長度2full、3TV、30unknown。只有Fanworks明示的クリプトニンジャ咲耶 Full size與官方商品明示的バディ full用full；Hello TV ver.、バディ TV size、DA PUMP Tvsize用TV。英文版、角色版及MV本身未推定full。
- 新增35筆收錄關係，涉及26個唯一發行ID＝20Single、4EP、2Album。Hello兩個CD Single（PCCA-06401／06402）及數位EP保留本曲Track1／TV Track3／伴奏Track4、2025-07-30；Blu-ray只說明演唱會收錄，未猜造live Hello。ハイカラ共用PCCG.70551 CD Single、2025-07-23，OP／ED Track1／2、伴奏3／4，數位EP獨立分類。
- Turkey Side Project!03 CD Album為PCCG.02452、2025-09-24；本批8個用途各有已確認角色版及確切曲序：OP1 Track1、OP2 Track8、四個替換ED角色版Track2／4／5／6、もしも角色版Track7、幾星霜三鷹希版Track3。兩個OP演唱用途保留各自ID，首次登記同一歌曲ID及不同角色音源；角色版不是新動畫用途。EP／Single藝人版與角色Album版保留不同演唱名義，CD外的數位Album日期衝突未硬選。
- 幾星霜／ZAQ為第5話插曲、2025-08-06 Single；藝人版另存明示Guitar、Violin／Viola、其他樂器／Programming、錄音／混音及製作／歌唱指導。三鷹希（CV.天麻ゆうき）Album版不套用未證實相同的樂手credits。Turkey替換ED2／3／4／5補第4／6／7／9話用途；もしも2025-09-03六曲EP只保存本曲與Instrumental Track1／4，不將其他EP歌曲新增動畫用途。
- Resolution兩個CD Single（COCA-18296／18297）及數位EP於2025-08-20，保存Track1／English ver.Track3／Instrumental Track4；英文作詞／翻譯未明，不抄日本語版credits。一般一曲Single／其他Album只保存精確已證實收錄，不從曲目表增加動畫用途。
- バディ EYCA-14776 CD Single為2025-09-24，保存已明示full、TV、ひとみver.與演出分工；曲序與六つ子各ver.的逐曲正式名稱／分工未明。TV版另有2025-07-09數位Single。DA PUMP的BACK 2 DA UNITY數位Album保存本曲10個明示音源：原版、六角色かけ声版、m.c.A・Tかけ声版、TV及Instrumental；角色かけ声不當作主唱，未明的碟號／曲序留空，不把10個版本當作10筆OP。
- 新增194個外連＝37YouTube（22歌曲watch含21舊影片＋1新MV，15個專輯入口關係）、25官方配信、73Apple Music、31Spotify、27YouTube Music、1作品官網；更新22個原官方入口的標籤／關係。新增62筆來源、更新39筆實際查閱來源、337組欄位證據；舊影片及未查來源日期保留。
- 全目錄本機為28季、1,917動畫、4,255用途＝4,244 OP／ED、8 IN、3 TS；2020–2026為1,808動畫／3,991用途。唯一YouTube watch外連883、另16個官方配信專輯入口，影片metadata 1,794（只新增ZAQ官方MV一筆）。用途、音源、發行品、外連及影片各自計數。

### 未解缺口與續查條件

| 項目 | 保留缺口 | 再查觸發條件 |
| --- | --- | --- |
| MAMBO NO.5 | 兩輪定向查找仍未取得動畫cover逐曲第一方演出／正式編曲與官方YouTube。原曲作曲者與カバー音源制作分開；缺歌詞不造詞，沒有把原曲音源或Lou Bega版當動畫使用錄音 | 官方播出credits可直接查閱、booklet或音源製作者明確逐曲聲明／官方影片出現再補 |
| クリプトニンジャ咲耶 | 原OP／歌唱／詞曲及2023年Full size有官方明文；編曲兩輪仍無清楚逐曲證據 | 官方booklet／正式逐曲credits出現；不從全劇音樂或近似AI企畫推定編曲，也不將2023音源改成2025新錄音 |
| Side Project!03數位日期 | PONY CANYON PCSP.06775標示2025-09-04、Apple Album標示2025-09-24；CD日期與曲序明確。本批只保存CD發行品、確切數位曲目及來源，未造統一數位日期 | 發行端更正、逐平台公告或booklet明確區分數位版／上架日再補；不重查全目錄 |
| バディ六角色版 | 官方已說明另收六つ子各ver.，本批未取得逐曲正式標題／曲序／每版演出分工，只結構化full／TV／ひとみ三版 | 官方完整曲目表／booklet或正式平台逐曲metadata出現再補，不從角色名合成正式版本名 |
| 平台缺口 | Food Court ED的Apple商品入口連續兩次普通公開查閱404，未新增該dead link；其他精確Spotify／YouTube Music已補。ナナヲアカリ原官方landing沒有服務目的地，保留有效舊資料 | 官方更新配信頁或正式曲目入口可讀後再核；不繞限制或猜造曲目ID |
| 其他音源／商品 | DA PUMP數位Album精確音源已明示，但本批未證實碟號／曲序；部分實體版、ISRC、每版編曲／翻譯、master等同與地區可用性仍未知 | 對應官方逐曲商品／booklet／錄音識別出現，只補真正缺口；選填欄位不阻擋其餘已確認內容 |

### 本機檢查與展示

- 最終`npm test`4檔／5核心測試與`npm run build`通過：1,961 HTML、CSP 6 script／10 style hashes、Service Worker及3,918公開產物；6條E2E、npm audit 0 vulnerabilities、Cloudflare dry-run通過。沒有修改正常程式、測試、依賴或部署設定。
- 初次資料檢查正確擋下新影片unknown嵌入狀態與可嵌入旗標並存；已將資料改成embeddable=false／embedAvailability=unknown，保留官方外連，沒有從藝人網站iframe推定全地區播放器可用性，並重驗資料／公開產物。
- 桌面1536×1024核對10部／26筆與公開JSON，手機390×844核對4部，10條閱讀流程通過；原ID／排除規則、演出名義未知、Full／TV／unknown、角色／藝人版、主唱／掛け合い、英文版、共同商品、精確平台及緊湊搜尋均可讀。0 app／CSP errors、0自動YouTube request、無橫向溢出；已實際檢視Turkey插曲兩種演唱／收錄與バディ手機音源／分工畫面。Browser plugin未提供，使用Playwright。
- 僅本批10條seed、CryptoNinja既有extra項及1條新IN影片metadata改動，其餘global extra／影片bytes、動畫metadata及原有影片metadata保留。原始頁面、provider資料、測試腳本、log與截圖只留暫存，不提交。

- 39個文件相對連結、`git diff --check`、repository `public:check`（239檔）通過；提交差異的私密路徑、金鑰／token與raw provider欄位檢查未發現命中，26個共用發行ID的35筆關係metadata一致。

- 發布前來源審閱將CITY交叉來源改為實際已讀的公開索引完整網址並標示公開索引；簡化網址目前無法直接取回，未把索引署名升格為第一方演奏／編曲證據。修正後重驗資料、公開產物及本批展示。

預覽入口：`/anime/turkey/`、`/anime/osomatsu-san-4th-season/`、`/anime/city-the-animation/`、`/anime/tate-no-yuusha-no-nariagari-season-4/`。可搜尋`COCA-18296`、`かけ声ver.`、`ひとみver.`。

階段提交：`827b4de`保存第25批正式驗收及各季度進度；`dd7aee9`保存21個既有影片watch外連；`bcfad46`保存幾星霜插曲核心及官方MV（當時未完成整批驗證，嵌入旗標已於本次資料修正）。深入資料提交與正式驗收於發布後另記，頂部季度表仍只計第25批正式成果。

下一批：**2025-summer-credits-youtube-27**，從`new-panty-and-stocking-with-garterbelt-op-1`起，依序`curated-151799`、`curated-177887`、`curated-178090`、`curated-178886`、`curated-189117`、`curated-195209`、`curated-196063`、`curated-177474`、`curated-185965`、`curated-198745`，10部／23筆現有公開用途；其中一部現有公開用途為0，需沿用既有排除與來源規則，不能由raw seed自動還原。第26批正式驗收後接續；整體深化及長期目標均未完成。

### 第26批正式發布與接續

[PR #115](https://github.com/kyeunga25/anisonary/pull/115)最新來源的quality CI `38840526750`與必要檢查成功，正常rebase合併，保留五個階段提交；main CI `38840899940`成功。未使用admin或force方式。

來源`e09a2b1`的Git tree與已審閱來源`bb8394e`相同，26個本機產物摘要完全一致，工作目錄乾淨。Cloudflare以`batch26`標籤實際部署CLI exit0，完成正式域名驗收；本機／CI與正式部署證據分開。

Live首輪即通過：全部1,917動畫的公開API smoke；16共同路徑＋10本批JSON與本機摘要相同、2真實404、安全headers、API noindex／重新驗證／無CORS；桌面10部／26筆、手機4部、10條閱讀流程，0 app／CSP errors及0自動YouTube request。未以舊快取或重試掩蓋差異。

| 階段 | main提交 | 原來源提交 |
| --- | --- | --- |
| (docs): record batch 25 production verification | `761153a` | `827b4de` |
| (add): official song video links batch 26 | `76623f0` | `dd7aee9` |
| (add): verified Turkey insert song and official video | `3fcb0bb` | `bcfad46` |
| (add): summer character recordings and creators batch 26 | `66f0eed` | `2fe0f08` |
| (fix): retain indexed CITY credit source URL | `e09a2b1` | `bb8394e` |

頂部季度表更新至本批正式結果：2025夏141／178筆已核對，134筆核心齊備、7筆仍有核心缺口；其他季度數字保留。全範圍604個唯一用途已處理（593 OP／ED、8 IN、3 TS），仍有必需及選填缺口，整體目標未完成。

## 2026-10-16 原第27批夏季規劃（後續順序已調整）

目標：從`new-panty-and-stocking-with-garterbelt-op-1`起，依序`curated-151799`、`curated-177887`、`curated-178090`、`curated-178886`、`curated-189117`、`curated-195209`、`curated-196063`、`curated-177474`、`curated-185965`、`curated-198745`，10部／23筆現有公開用途。curated-196063目前公開用途為0，先核對既有排除及官方來源，不由raw seed自動還原。固定2020–2026深化、2007–2026長期範圍及2026-10-14截止日不變，新證據實際核對日期2026-10-16。

保存本批seed、global extra-theme、影片metadata及公開JSON基線。沿用有效核心及既有官方影片，先確認真正缺口；第25批已讀取的共用Single等可適用證據直接重用。每批完成必要檢查、公開JSON及動畫頁預覽、分類提交、推送及正式部署後接續；尚未驗證修改不計完成，缺口兩輪仍未明即保存續查條件。


## 2026-10-16 批次：2025-fall-inventory-27（執行中）

目標：從2025年開始按秋／夏／春／冬及年份倒序，盤點並收集動畫歌曲。長期固定範圍2007–2026、資料截止日2026-10-14維持；當前執行優先範圍為2025→2007，2026成果保留。本階段固定為非成人TV／WEB的OP／ED，已確認插曲一併記錄；劇場版／OVA保留為後續獨立範圍。新證據實際核對日期2026-10-16。

第27批先處理尚無快照的2025秋季：以中文季度清單發現作品，交叉核對識別及首播／續播，再返回第一方音樂資料確認約10部／20–30筆用途。未審閱候選及原始頁面不公開。先公布有證據的曲名、用途、演唱與來源，再補同批credits、官方影片、音源及收錄；未證實的欄位留空。

完成條件：本批已確認內容經seed、公開JSON、季度／歌曲歌單及動畫頁展示，通過新季度所需檢查與發布驗收；各季度分開報告現有快照數、已核對數、核心齊備數與未解缺口。2025秋完整作品／用途分母在盤點閉合前仍未知，不能將本批或現有快照當作整季已齊全。續播作品及其當季輪替歌曲需明確核對，不能只以新作首播清單計全季。

原夏季27規劃的10部／23筆基線保留，尚未新增或修改歌曲資料；於2025秋首輪後回接。第26批正式成果與季度歷史統計均保留。完成每批後分類提交、推送及正式部署，再接下一批；尚未驗證修改不計完成。


### 第27批秋季核心階段

新增2025秋季部分快照，先收錄9部／20筆OP／ED；季度頁明示盤點未閉合，其他新作、跨季續播與輪替仍待補核。既有1,917部及其ID、URL、來源日期均保留。固定TV／WEB範圍，已確認插曲在同批另行核對與保存。

| 公開 theme ID | 已確認曲目／用途 |
| --- | --- |
| `spy-family-season-3-op-1` | 灯を護る／OP1 |
| `spy-family-season-3-ed-1` | Actor／ED1 |
| `tondemo-skill-de-isekai-hourou-meshi-2-op-1` | yummy goodday／OP1 |
| `tondemo-skill-de-isekai-hourou-meshi-2-ed-1` | SALT AND PEPPER／ED1 |
| `one-punch-man-3-op-1` | Get No Satisfied !／OP1 |
| `one-punch-man-3-ed-1` | そこに有る灯り／ED1 |
| `nageki-no-bourei-wa-intai-shitai-part-2-op-1` | アルゴリズム／OP1 |
| `nageki-no-bourei-wa-intai-shitai-part-2-ed-1` | 夢へのヒトカケラ／ED1 |
| `watashi-wo-tabetai-hitodenashi-op-1` | 贄-nie-／OP1 |
| `watashi-wo-tabetai-hitodenashi-ed-1` | リリィ／ED1 |
| `watashi-wo-tabetai-hitodenashi-ed-2` | 太陽、なってあげよっか？♡／ED2 |
| `watashi-wo-tabetai-hitodenashi-ed-3` | リリィ［Another ver.］／ED3 |
| `chitose-kun-wa-ramune-bin-no-naka-op-1` | ライアー／OP1 |
| `chitose-kun-wa-ramune-bin-no-naka-ed-1` | 陽炎／ED1 |
| `saigo-ni-hitotsu-dake-onegai-shite-mo-yoroshii-deshou-ka-op-1` | 戦場の華／OP1 |
| `saigo-ni-hitotsu-dake-onegai-shite-mo-yoroshii-deshou-ka-ed-1` | インフェリア／ED1 |
| `isekai-quartet-3-op-1` | 異世界こんちぇると／OP1 |
| `isekai-quartet-3-ed-1` | 君色、僕色／ED1 |
| `sanda-op-1` | アダルトチックチルドレン／OP1 |
| `sanda-ed-1` | ダイアリー／ED1 |

歌曲核心採explicit來源，第一方音樂頁與YourAnimes／アニシル交叉核對。未有已核對台港正式譯名的作品暫保留原文；未取回的識別頁不加入圖像或圖像歸屬。新季度快照日期獨立登記2026-10-16，不更新其他季度日期。

此階段尚未完成整批build／E2E／畫面及正式驗收，不計進頂部正式季度進度。接續本批已確認插曲、官方影片與發行收錄，整批完成後再更新實際統計及發布結果。

核心階段檢查：4檔／5項核心測試、repository public boundary（240檔）與git diff --check通過。初次測試指出新季度尚未登記快照日期，已補2025-fall單一日期並重驗；沒有改測試或舊季度日期。整批展示與正式驗收仍待完成。

### 第27批插曲核心階段

新增5筆已確認插曲，與前段20筆OP／ED合計25筆用途、24個歌曲ID；角色版リリィ共用已確認的歌曲身分。這是本批已核對部分，不是全季分母。

| 公開 theme ID | 已確認曲目／用途 |
| --- | --- |
| `watashi-wo-tabetai-hitodenashi-in-1` | 灯る／第5・13話 挿入歌 |
| `watashi-wo-tabetai-hitodenashi-in-2` | 通り雨のように／第7・12話 挿入歌 |
| `watashi-wo-tabetai-hitodenashi-in-3` | 泡／第11・12話 挿入歌 |
| `watashi-wo-tabetai-hitodenashi-in-4` | 愛し子／第12話 挿入歌 |
| `isekai-quartet-3-in-1` | melting days／第7話 挿入歌 |

私を喰べたい、ひとでなし的4首插曲採官方逐集創作名單及アニシル交叉核對；melting days採動畫音樂頁、藝人第7話與發行公告，並以UtaTen交叉核對。僅保存必要歌曲事實與外連，不保存歌詞。波の唄的演唱與獨立交叉證據仍未明，不因官方影片標示插曲而猜填核心。

插曲階段已作結構／差異及公開邊界檢查；完整測試、build、新季度E2E與展示尚待整批收尾，不計入正式季度進度。接續同批已讀取的創作、官方影片及收錄資料。

### 第27批同批深化與本機驗證

核心階段由 `8c70f92`、5筆插曲由 `d5d741f` 分段保存。現有格式直接沿用，沒有更動parser、搜尋、UI、播放器、依賴或Cloudflare設定。

- 本批9部／25筆用途（20 OP／ED、5 IN），對應24個歌曲ID；23筆已具詞、曲、編曲，23筆有已確認YouTube歌曲watch外連。OP／ED核心齊備17／20，另3筆缺口見下表；插曲仍有1筆官方影片缺口。
- 新增33個音源紀錄：3個明示full、2個明示TV Size，其餘28個長度分類保持unknown；包含原版、Instrumental、角色及2026-02-25 CENT公演live，不以MV或creditless形式推定長度。
- 新增24個發行品身分（23個Single／數位Single或不同CD版、1個共用OST）。安野希世乃3版、CHiCO with HoneyWorks2版、シユイ的TV／Instrumental，以及リリィ角色音源與OST關係分開保存；未明曲目位置留空。
- 新增32個不同YouTube歌曲影片外連、11筆已證實渠道及形式的metadata；未核對嵌入者全部false／unknown。其他外連保留官方原文形式，未猜填頻道metadata。60個其他正版平台確切曲目／專輯目的項目及18個官方配信／商品入口獨立計數；不混入builder的通用搜尋入口。
- スピッツ、chelmico、サイダーガール的團隊成員與個別演唱／演奏角色分開；Qobuz、正式供應Art Track等逐曲製作者保留來源使用的原文姓名，不猜別名或自動拆分songwriting。

| 已核對仍有缺口 | 狀態與續查條件 |
| --- | --- |
| `tondemo-skill-de-isekai-hourou-meshi-2-ed-1` | 官網已證實SR23的arrange與TOSHIKI HAYASHI的beat、團隊成員；詞／曲及完整共同編曲仍待可清楚讀取的第一方逐曲名單。兩輪定向查找已收尾；等待官方商品credits、正式供應Art Track或藝人曲目資料，不能使用註明AI生成的名單 |
| `watashi-wo-tabetai-hitodenashi-op-1` | 歌曲、詞曲編曲、用途及配信已確認；精確YouTube影片與官方渠道關係仍待官網／藝人直接連出或正式影片描述可核對。搜尋所得teaser未在本批確立渠道，因此沒有發布該影片 |
| `chitose-kun-wa-ramune-bin-no-naka-ed-1` | 已證實作詞／作曲及官方MV、NCED；編曲未有清楚可用第一方逐曲證據。等待藝人／唱片完整credits或正式平台逐曲製作者名單，兩輪查找後先保留空欄 |
| `watashi-wo-tabetai-hitodenashi-in-3` | 泡的演唱、用途及詞曲編曲已確認；官方歌曲影片仍未核明。等待官方MV／Art Track／OST確切曲目連結，不借用其他插曲影片 |
| 波の唄與OST位置 | 官方影片標示第1話插曲，但演唱與獨立交叉證據未明，不新增用途；OST未讀取到的逐曲位置不推算。等待正式逐集／唱片credits及可用曲目表 |
| 2025秋整季盤點 | 本批9部只是已核對部分。中文季度頁、Annict／Bangumi聯集及續播／輪替盤點尚未閉合，全季作品與用途分母仍未知；後續批次補漏，不把現有20筆OP／ED稱作整季總數 |
| 台港譯名、圖像與其餘版本／收錄 | 沒有明確官方證據者保留原文或空欄；後續只在正式代理、商品曲目或新官方影片等條件出現時補核，不重查全部舊資料 |

本機驗證：4檔／5項核心測試、build（1,971個HTML、3,938個公開產物）、6條E2E、repository／artifact公開邊界、依賴稽核0漏洞與Cloudflare dry-run通過。新資料初次parser驗證指出團名欄位、重複證據URL、網域大小寫及HTTP外連，均修正資料並重驗，沒有改正常程式或降低gate。

9部動畫／25筆用途桌面逐項展示與公開JSON一致；4部手機版、季度24+1分頁、9 OP／11 ED／5 IN篩選、品番／確切版本／插曲搜尋等7組驗證通過，沒有應用錯誤、CSP錯誤或自動YouTube請求。截圖已目視檢查。原有季度seed沒有改動，另保存的10部既存公開JSON基線完全相同。

本機預覽：`/seasons/2025-fall/`、`/anime/watashi-wo-tabetai-hitodenashi/`、`/anime/chitose-kun-wa-ramune-bin-no-naka/`。GitHub與production尚待本批正式發布驗收；頂部正式表目前仍計至第26批。下一批繼續2025秋新作與跨季續播／輪替盤點，原夏季待辦待秋季首輪後回接。

第27批深化與本機驗證已由 `31ac6ed` 保存。本批公開repository目前29季／1,926部／4,280用途；頂部正式發布仍以第26批為準，等待本批PR、main及Cloudflare live驗收。下一接點保持2025秋，第28批不回跳夏季。

### 第27批正式發布驗收

[PR #116](https://github.com/kyeunga25/anisonary/pull/116)已正常rebase合併，保留6個階段提交；PR quality（38846698596）與Workers preview檢查均成功。main CI（38846967183）成功，main的Git tree與已審閱PR完全一致，工作區乾淨；沒有使用force、admin或squash。

正式Cloudflare Workers部署來源為 `35c7328f4919ec7054b1ce1c17a2fc7d648285e2`，版本標記 `batch27`。實際CLI部署成功；未公開帳戶、版本資源識別或完整營運輸出。

Production獨立驗收：29季／1,926部完整公開API契約與跨endpoint一致性通過；34條首頁、歌曲、目錄、季度、動畫HTML／新資料JSON等route與本機artifact雜湊一致，2條不存在route正確404。HTML安全headers、嚴格CSP及JSON noindex／revalidation檢查通過。9部／25筆正式頁面、4部手機版、季度分頁／用途與品番／版本／插曲搜尋等7組展示流程通過，0應用或CSP錯誤、0自動YouTube請求。正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>。

季度進度已更新至本批：2025秋現有20／20筆OP／ED已核對，17筆核心齊備、3筆核心缺口；另5筆已確認插曲。全目錄29季／1,926部／4,280用途，不代表整季或長期範圍齊備。既有2026成果及2025夏以後的待辦保留；2026後續收集延後。

### 第28批接點

下一批為 `2025-fall-inventory-28`，繼續2025秋尚未收錄新作與跨季續播／當季輪替；核心歌曲及用途優先，沿用有效證據後補同批創作、版本、發行與官方平台。批次約10部／20–30筆；候選與原始頁面不公開，完整分母在季度來源聯集及續播盤點閉合前保持未知。原夏季10部／23筆規劃保留，於秋季首輪後回接。

執行狀態：整體進行中，第27批已發布驗收，第28批接續。固定優先範圍2025→2007、長期保留2007–2026、截止日2026-10-14與TV／WEB／已確認插曲範圍不變。第27批缺口只按上表條件重啟，不因換批重搜。

## 2026-10-16 批次：2025-fall-inventory-28（已發布驗收）

接續第27批正式來源35c7328，發布回執由d8cad23保存。固定優先2025→2007、長期保留2007–2026、截止日2026-10-14；本批實際核對日期2026-10-16。範圍為非成人TV／WEB OP／ED與已確認插曲；先盤點2025秋新作及跨季續播／輪替，再深化同批資料，預設約10部／20–30筆用途。

續播盤點確認現有歌單只按作品季度篩選；同一作品加入多季時，其全部舊歌會被一起列入每季。先以已收錄ふたりソロキャンプ的3筆真實用途完成最小相容的用途季度關聯，接通authoring、parser、公開JSON與歌單展示；舊ID／URL及動畫頁全部歌曲保留，未核對歷史資料不全量遷移。季度關聯必須有實際用途證據；不因歌曲或作品發行日期自動推定。

已保存本批程式／2025夏秋seed與影片索引基線、1,926部公開JSON基線。首階段只處理上述3筆格式試行；返回原有第一方音樂與播出資料核對後才合入季度關聯。其後接續同季新作與已發現續播作品，未審閱候選不公開。第27批的3筆OP／ED及插曲影片缺口依既有觸發條件保留，不因換批重搜。

完成條件：已核對資料可在seed、公開JSON、精確季度歌單及動畫全部歌曲頁展示；最小contract與必要核心／E2E檢查通過，再按既有流程分類提交、推送與正式發布。尚未驗證的新修改不計進頂部正式表；全季作品／用途分母仍未閉合。

### 第28批用途季度試行階段

以 `futari-solo-camp-op-1`、`futari-solo-camp-op-2`、`futari-solo-camp-ed-1` 接通可選 `theme.seasonIds`。第一期OP列2025夏、第二期OP列2025秋、全篇ED列夏秋；第二期歌曲配信日2025-09-29與動畫用途季度分開保存。第一方音樂頁及BS朝日第13話播出資料支持季度關聯，沒有以商品日期推算。

Parser檢查季度格式、唯一值與第一方用途證據；公開API跨endpoint檢查作品季度關聯；搜尋及首頁／全歌曲／季度歌單按用途篩選，動畫頁展示已確認季度。舊記錄省略此欄位時保持原行為。3筆用途、歌曲及作品ID／URL不變，作品既有metadata日期不變，其餘1,925部公開動畫JSON與批前完全相同。

試行驗證：4檔／6項核心測試、build（1,971個HTML及3,938個公開產物）通過；實際桌面與手機展示確認夏秋各2筆用途、全歌單3筆不重複、動畫頁保留全部3首及季度標籤，沒有應用錯誤或自動YouTube請求。初次型別檢查指出新測試fixture缺少既有 `isMockData` 欄位，已補fixture並重驗，沒有改正常程式遷就舊測試。整批E2E及正式發布仍待本批資料完成後收尾；本段不計入頂部正式進度。

### 第28批歌曲核心與跨季盤點階段

本段新增5部／14筆用途（13 OP／ED、1 IN），並核對上述試行3筆與另外8筆既有用途季度，共8部／25筆處理。角色合唱ED與原版共用歌曲身分，音源另行保存；不因同曲多影片或商品增加用途。

| 公開 theme ID | 已確認曲目／用途 |
| --- | --- |
| `futari-solo-camp-op-1` | 灯りは遠く／OP1 |
| `futari-solo-camp-op-2` | ふたりでいようか／OP2 |
| `futari-solo-camp-ed-1` | ふたりキャンプ feat. SPECIAL OTHERS／ED1 |
| `gachiakuta-op-1` | HUGs／OP1 |
| `gachiakuta-op-2` | LET’S JUST CRASH／OP2 |
| `gachiakuta-ed-1` | 灯火／ED1 |
| `gachiakuta-ed-2` | 番／ED2 |
| `tougen-anki-op-1` | OVERNIGHT／OP1 |
| `tougen-anki-op-2` | 阿弥陀籤／OP2 |
| `tougen-anki-ed-1` | What is justice?／ED1 |
| `tougen-anki-ed-2` | ACTION／ED2 |
| `towa-no-yuugure-op-1` | プラットフォーム／OP1 |
| `towa-no-yuugure-op-2` | 愛／OP2 |
| `towa-no-yuugure-ed-1` | Two Of Us／ED1 |
| `towa-no-yuugure-ed-2` | 星紡ぎ／ED2 |
| `kikaijikake-no-marie-op-1` | ホントトウソ／OP1 |
| `kikaijikake-no-marie-ed-1` | Cross heart〜偽りのない気持ち／ED1 |
| `kikaijikake-no-marie-ed-2` | Cross heart〜偽りのない気持ち（duet ver.）／ED2 |
| `boku-no-hero-academia-final-season-op-1` | THE REVO／OP1 |
| `boku-no-hero-academia-final-season-ed-1` | I／ED1 |
| `3-nen-z-gumi-ginpachi-sensei-op-1` | 桜風／OP1 |
| `3-nen-z-gumi-ginpachi-sensei-ed-1` | Underclass HERO／ED1 |
| `wandance-op-1` | Stare In Wonder／OP1 |
| `wandance-ed-1` | Wondrous／ED1 |
| `wandance-in-1` | Get Something Out of Your Mind／IN1 |

《ガチアクタ》第1クール含第13話（2025-10-05），因此前半OP／ED同時屬夏秋；第2クール2025-10-12開始。《桃源暗鬼》第二クール練馬編於2025-10-03起，第13話播出資料另交叉核對。新增用途按官方歌曲頁、官方特殊用途公告及YourAnimes／ORICON／アニソン・オンライン等交叉來源保存，作品首播跨午夜日期另行正規化。

《永久のユウグレ》的第11話特殊OP「愛」與雙ED「星紡ぎ」，以及《機械じかけのマリー》第1–3話原版ED／第4話起duet版分別保存。ワンダンス劇中歌僅先增加已明確交叉確認的Get Something Out of Your Mind，其餘OST曲目不自動全部視為插曲。

本段先保存核心身分、用途與已讀到的創作名單；同批影片、音源、發行與正版平台接續補核。整批build／E2E、完整展示及GitHub／Cloudflare驗收尚未完成，頂部正式進度不變。

核心階段4檔／6項測試、repository公開邊界（241檔）及差異檢查通過。新增資料尚未經整批build與畫面驗收，不將本段列為正式發布完成。

### 第28批同批深化與本機驗證

用途季度試行由 `28773aa`、歌曲核心與跨季關聯由 `1e8b2d7` 分段保存。本批8部／25筆用途（24 OP／ED、1 IN），包含5部新作新增14筆、3部續播核對11筆；共24個歌曲ID。其餘1,923部既有公開動畫JSON與批前完全相同，3部續播的作品metadata、識別／圖像／播出來源日期及既有用途ID／URL均保留。

- 新增31個音源身分：8個明示TV／Anime Size及23個長度unknown；包含instrumental與原版／角色solo、duet，沒有從MV、lyric或舞蹈影片推定full。
- 新增27個發行品ID，另重用2個已收錄雙A面CD的既有ID。Uru兩首歌共用3個CD版本，Hana Hope雙ED共用2個CD版本，Marie單曲／OST及Wandance OST按各曲保存收錄關係；未證實的CD／數位音源同一性不加關聯。
- 新增19個不同YouTube歌曲watch外連，涵蓋MV、特殊OP、NC OP／ED、lyric、舞蹈演出與練習等形式；新增3筆可核明渠道的影片metadata，均false／unknown。另新增91個其他正版平台確切曲目／專輯／下載目的頁及20個官方入口；不同影片與發行版不計新歌。
- 已讀取的官方音樂頁同時補歌曲、創作、用途、配信及商品。授權平台／歌詞服務與正式商品逐曲名單另保留cross_check來源及欄位證據，不把平台參與者、group_member、producer或Sound Produce自動改為個別演唱或編曲。

| 本批未解缺口 | 狀態與續查條件 |
| --- | --- |
| `towa-no-yuugure-ed-2` | 星紡ぎ的歌曲、雙ED用途、詞曲編曲及CD收錄已核對；官方歌曲YouTube的精確ID與渠道關係仍未確立。兩輪定向查找後保留空欄，等待官方直接影片／正式Art Track目的項目 |
| `wandance-op-1` | 已核明SKY-HI作詞及Sunny／MONJOE／LOAR／SKY-HI作曲、製作與Vocal Direction角色、lyric／舞蹈影片及Anime Size收錄；未讀到明示編曲，不由producer推定。等待官方逐曲編曲credits或正式供應音源資料 |
| `tougen-anki-ed-1` | What is justice?沿用有效詞／曲及影片；藝人與台灣唱片官方頁仍沒有明確逐曲編曲。兩輪定向查找後保留缺口，等待正式商品／音源完整credits |
| `wandance-in-1` | 歌曲與劇中用途、創作與OST位置2及Apple Music確切曲目已保存；官方YouTube精確項目／渠道未核明。等待官方歌曲watch直連或可核對的Art Track |
| Marie off vocal與OST位置 | 官方ED商品頁兩列off vocal文字重複，沒有猜另一版；僅保存明確solo、duet、TV及instrumental。OST未保存的曲序不推算。等待可核對第一方完整曲目表／訂正 |
| 平台、團隊與其他收錄 | 4個HTTP供應連結已剔除；未證實地區播放／嵌入可用性保留unknown。BE:FIRST與ELSEE不同時點的團隊簡介不當作逐曲演唱名單；BE:ST、COMICAL等未核完的精確商品／曲序留待官方曲目與版本證據，不把宣傳連結當完整收錄證明 |
| 季度完整分母 | 2025秋現有17部／41 OP／ED、6 IN仍為部分快照，完整新作／續播聯集未閉合。第27批既有缺口依其原條件保留，下一批繼續秋季未收錄作品與已確認特殊用途 |

本機驗證：4檔／6項核心測試、build（1,976 HTML及3,948公開產物）、6條E2E、repository／artifact公開邊界、依賴稽核0漏洞與Cloudflare dry-run通過。初次契約檢查攔下4個HTTP目的項目，已剔除並重驗；沒有改正常程式或降低安全gate。

8部／25筆桌面逐項展示與公開JSON一致；4部手機版、夏秋3組跨季篩選、全歌單去重、24／23分頁、19 OP／22 ED／6 IN篩選及品番／版本／角色版搜尋等7組展示驗證通過，0應用／CSP錯誤、0自動YouTube請求。私有預覽腳本起初誤把次標題當h1，已按既有原文h1修正預期並接續未驗證項目，介面未為此改動。

全目錄本機29季／1,931部／4,294用途（4,277 OP／ED、14 IN、3 TS），934個唯一YouTube歌曲watch外連及1,808筆影片metadata。2025夏的當季OP／ED分母由178更正為173，移出5筆秋季輪替用途；歌曲與動畫頁仍保留。按用途季度重算，第28批本機2025秋41／41已核對、36核心齊備／5缺口；夏143／173、135齊備／8缺口。這些是本機結果，頂部正式季度表待本批live驗收後更新。

本機預覽：`/seasons/2025-fall/`、`/anime/kikaijikake-no-marie/`、`/anime/wandance/`、`/anime/gachiakuta/`。GitHub／production尚待本批正式發布驗收；完成後接續第29批2025秋，不回跳夏季，也不把一批完成當成整季或長期目標完成。

同批深化與本機驗收由 `208f5c6` 保存，[PR #117](https://github.com/kyeunga25/anisonary/pull/117)已建立。正式發布接點為必要quality檢查、正常合併、main CI及Cloudflare live驗收；目前仍以第27批作production基準，不能將預覽建置成功當成本批正式發布。

### 第28批正式發布驗收

[PR #117](https://github.com/kyeunga25/anisonary/pull/117)正常rebase合併並保留5個階段提交。固定PR head `4630f7e` 的quality（38851885554）與Workers preview檢查均成功；main CI（38852141175）成功，main Git tree與已審閱版本完全一致，部署前工作區乾淨。

Cloudflare Workers實際CLI部署成功，來源 `b96273f9ab6896910416db227762a08ad8b005be`，版本標記 `batch28`；已另以版本metadata核對標記與來源訊息，未保存帳戶、資源識別或完整營運log至公開repository。

Production驗收：29季／1,931部完整API契約與跨endpoint關聯通過；36條首頁／歌曲／目錄／夏秋季度HTML、季度清單JSON及8部動畫HTML／JSON等route與本機artifact雜湊一致，2條不存在route正確404。嚴格CSP、安全headers及JSON noindex／revalidation檢查通過。8部／25筆正式桌面內容、4部手機與7組跨季篩選／去重／分頁／品番及版本搜尋通過，0應用或CSP錯誤、0自動YouTube請求。

正式2025秋為41／41已核對、36核心齊備／5缺口，另6 IN；2025夏按用途季度更正後為143／173、135齊備／8缺口。全目錄29季／1,931部／4,294用途。上述不是完整季度分母或全部音源／創作者／收錄齊備；第27–28批缺口依原表條件保留。

推送仍提示既有23個遠端Dependabot open alerts；沿用前批逐項與lockfile的核對結果，本批依賴與workflow檔案未變，npm audit為0。未自行dismiss遠端警示，也不將本機結果描述為GitHub告警已解除。

正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>、<https://anisonary.k-y.cc/anime/kikaijikake-no-marie/>、<https://anisonary.k-y.cc/anime/wandance/>。本批完成後接續第29批，整體目標仍在進行。

## 2026-10-16 批次：2025-fall-inventory-29（已發布驗收）

由第28批正式來源 `b96273f` 接續。固定優先2025→2007、長期保留2007–2026、資料截止日2026-10-14；非成人TV／WEB OP／ED及已確認插曲。先盤點2025秋尚未收錄的新作、續播及特殊用途，每批約10部／20–30筆，核心先行後深化；實際來源核對日期另記。

第28批已公開的歌曲、用途季度、來源日期與ID保留。先重用已讀季度來源與有效官方資料，只查本批新作品／用途及真正缺口；第27–28批兩輪未明欄位依原觸發條件保留，不因換批重新全面搜尋。未審閱候選與取回資料只在私有暫存，不寫入公開清單。

完成條件：本批已證實核心、創作、官方影片及可確立的音源／發行／平台關係可在公開JSON與緊湊歌單、動畫全部歌曲頁看到；依變更矩陣整批收尾驗證，分階段提交、推送及正式發布後報告各季進度，再接續下一批。完整作品／用途聯集未閉合前維持分母未知。

### 第29批來源修正階段

先修正第28批3筆既有用途的創作欄位證據：`towa-no-yuugure-ed-2` 改由UtaTen逐曲名單交叉核對，`3-nen-z-gumi-ginpachi-sensei-op-1` 改用リスアニ公開創作／發行資料，`3-nen-z-gumi-ginpachi-sensei-ed-1` 改用Tower Records正式商品逐曲credits。已獨立查閱相應資料並確認原欄位事實，移除本批直接列入的歌ネット來源及其欄位引用；不更改歌名、藝人、用途、ID、音源或發行關係，也不回溯修改所有歷史資料。

此修正先保存於第29批，整批資料與展示驗證後發布；目前production仍為第28批來源。AniChart官方季度公開卡片已在一般瀏覽器人工核對本批作品識別，沒有使用受限API或保存整頁／介紹／圖像。只保存人工審閱用途所需的ID與連結，後續回到動畫、藝人與唱片官網核對歌曲及播出資料。

### 第29批歌曲核心階段

新增10部TV動畫／20筆OP／ED用途，每筆保留官方歌曲用途與交叉來源、AniChart官方季度識別及首播證據。作品、歌曲與用途分層保存；未取得台港官方譯名或圖像者維持原文及空欄。已有明確證據的12筆先保存完整詞／曲／編曲，其餘創作欄位接續深化，不阻擋歌曲核心。

| 公開 theme ID | 已確認曲目／用途 |
| --- | --- |
| `uma-musume-cinderella-gray-part-2-op-1` | スパートシンドローマー／OP1 |
| `uma-musume-cinderella-gray-part-2-ed-1` | ふたり／ED1 |
| `chanto-suenai-kyuuketsuki-chan-op-1` | 青春のシルエット／OP1 |
| `chanto-suenai-kyuuketsuki-chan-ed-1` | 線香花火／ED1 |
| `kao-ni-denai-kashiwada-san-to-kao-ni-deru-oota-kun-op-1` | 百面相／OP1 |
| `kao-ni-denai-kashiwada-san-to-kao-ni-deru-oota-kun-ed-1` | あまのじゃくヒーロー／ED1 |
| `egao-no-taenai-shokuba-desu-op-1` | 絶対称賛！／OP1 |
| `egao-no-taenai-shokuba-desu-ed-1` | Thankful／ED1 |
| `kakuriyo-no-yadomeshi-2nd-season-op-1` | とおりゃんせ／OP1 |
| `kakuriyo-no-yadomeshi-2nd-season-ed-1` | 涙のレシピ／ED1 |
| `alma-chan-wa-kazoku-ni-naritai-op-1` | ドラマチック・オーバーレイ／OP1 |
| `alma-chan-wa-kazoku-ni-naritai-ed-1` | ありふれてたい／ED1 |
| `ansatsusha-de-aru-ore-no-status-ga-yuusha-yori-mo-akiraka-ni-tsuyoi-no-da-ga-op-1` | 一閃／OP1 |
| `ansatsusha-de-aru-ore-no-status-ga-yuusha-yori-mo-akiraka-ni-tsuyoi-no-da-ga-ed-1` | Like Gravity／ED1 |
| `shuumatsu-touring-op-1` | Touring／OP1 |
| `shuumatsu-touring-ed-1` | グライド／ED1 |
| `tomodachi-no-imouto-ga-ore-ni-dake-uzai-op-1` | ウザ可愛くて何が悪い！／OP1 |
| `tomodachi-no-imouto-ga-ore-ni-dake-uzai-ed-1` | 星の鼓動／ED1 |
| `kimi-to-koete-koi-ni-naru-op-1` | くすぐったい。／OP1 |
| `kimi-to-koete-koi-ni-naru-ed-1` | きみになれたら／ED1 |

《ウマ娘 シンデレラグレイ》第2クール以獨立已確認作品識別收錄，原春季作品及用途ID保留。《笑顔のたえない職場です。》ED保留Sizuk發行名義，實際演唱者另列やなぎなぎ；角色合唱逐人保留CV名義，不將團隊簡介自動當作逐曲演唱名單。跨午夜首播已換算曆日，AT-X較早首播者以其實際時間記錄。

本段為核心資料保存，影片、音源、發行與正版平台接續同批深化；整批parser／build及實際展示尚未驗證，尚未計入頂部正式季度表或production成果。

### 第29批同批深化與本機驗證

核心階段已由 `dd5b89c` 保存。本批新增10部／22筆用途（20 OP／ED、2 IN），對應22個歌曲ID；21筆具詞／曲／編曲，20 OP／ED中18筆同時具有完整詞曲編曲與已確認YouTube歌曲watch外連。第28批3筆來源修正由 `7e8f3cc` 保存，沒有改動原歌曲事實或ID。

| 公開 theme ID | 已確認新增用途 |
| --- | --- |
| `alma-chan-wa-kazoku-ni-naritai-in-1` | A・I／A-Ma-Ne／第10話插曲；作詞者公開工作表及動畫OST、交叉索引共同核對 |
| `shuumatsu-touring-in-1` | オフロード・コンパス／末廣健一郎發行名義、五阿弥ルナ演唱／第5話插曲；動畫官方、配信入口與交叉索引核對 |

- 新增36個音源身分：6個明示TV size、30個長度unknown；包括instrumental、雙見奈々角色版、彩羽／真白特別演唱及2025-08-06 Premium Studio Live。MV、NC、lyric與正式供應音源形式未被自動推為full；角色影片沒有增加OP／ED用途。
- 新增41個發行品ID，涵蓋動畫Single、藝人EP／Album及共用OST。H△G雙A面、東山奈央3個CD版本、はしメロ限定EP的TV version、CHiCO雙版CD與live EP、花譜「深愛」、神山羊「Chemical X」等逐一保存；只列本曲相關曲目，未讀到位置或CD／數位音源同一性者留空。
- 新增25個不同YouTube歌曲watch外連及8筆可核明渠道／形式的metadata，新增metadata均false／unknown。另有132個其他正版平台確切曲目／專輯／數位購買項目、16個YouTube Music專輯目的項目及27個官方入口，與builder通用搜尋分開計數。10個HTTP供應連結已剔除，沒有猜改HTTPS。
- 舊1,931部中1,929部公開JSON完全相同；另外2部只包含上述3筆已審核來源修正。既有歌曲、用途、作品ID及URL保留，未全量更新舊來源日期。

| 本批未解缺口 | 狀態與續查條件 |
| --- | --- |
| `shuumatsu-touring-op-1` | Touring的詞曲編曲、用途、數位Single與CD／Instrumental已核明；本批尚未確立可發布的精確官方歌曲YouTube項目。兩輪定向查找後保留空欄，等待藝人／唱片直接影片或可核明渠道的正式Art Track |
| `tomodachi-no-imouto-ga-ore-ni-dake-uzai-ed-1` | 星の鼓動的MIMI作詞／作曲、Art Track、NCED及角色版已確認；未有明示編曲，不把Music／Composer自動當作arrangement。兩輪定向查找後等待藝人／唱片或正式逐曲完整credits |
| 兩首新增插曲影片 | A・I與オフロード・コンパス已保存官方及交叉用途、演唱、詞曲編曲／OST；尚未核明各自官方歌曲watch與渠道，官方OST專輯入口不能代替歌曲影片。等待可追溯MV／Art Track直連 |
| 其他特殊用途 | 交叉索引列出的ハルジオン第9話ED及グライド第12話插曲尚缺逐項第一方用途證據，本批未新增；かくりよOST的角色／混合曲也不僅憑收錄推成動畫用途。等待官方逐集音樂名單、專門公告或明示特殊OP／ED影片 |
| 版本／商品及名稱 | ふたりCD未核明品番及其他cover逐曲演唱，H△G未確立完整CD曲序；不猜填。藝人網頁曾有429或動態內容無法完整讀取時，使用可核明的公開索引／製作方資料，沒有繞過限制。台港譯名及圖像仍依正式證據補核 |
| 全季完整分母 | 現有2025秋27部／61 OP／ED、8 IN仍是部分快照；中文季度來源、AniChart識別與其餘季度聯集、續播及輪替尚未閉合，完整作品／用途分母未知。第27–28批缺口保持原續查條件 |

本機驗證：4檔／6項核心測試、build（1,986 HTML及3,968公開產物）、repository／artifact公開邊界、npm audit 0漏洞與Cloudflare dry-run均通過。預覽發現一個帶曲目參數的Apple Music連結被標為專輯，已更正為direct_track並重驗；也把已確認共用OST及live EP的確切平台連結接至對應發行品。沒有修改正常程式或降低gate；本批未改contract、UI、依賴或季度種類，依矩陣不額外重跑E2E。

10部／22筆桌面頁面的曲名、音源與發行品數量逐項與公開JSON核對；4部393像素手機頁及秋季歌單、24／24／21分頁、29 OP／32 ED／8 IN篩選、品番搜尋→歌曲頁→欄位證據展開通過，沒有橫向溢出。首頁及全部歌曲保持24列緊湊列表。瀏覽器未見應用／CSP錯誤，檢查時沒有影片iframe；未將此DOM觀察描述成網路攔截或地區嵌入可用性測試。手機截圖已目視檢查。

全目錄本機29季／1,941部／4,316用途（4,297 OP／ED、16 IN、3 TS），959個不同YouTube歌曲watch外連及1,816筆影片metadata。2025秋本機61／61筆已核對、54筆核心齊備／7缺口；頂部正式表仍以第28批為準，等待本批GitHub、main CI與Cloudflare live驗收。

本機預覽：`/seasons/2025-fall/`、`/anime/alma-chan-wa-kazoku-ni-naritai/`、`/anime/kimi-to-koete-koi-ni-naru/`。正式發布後接續第30批2025秋尚未收錄新作／續播，原夏季待辦保留。

同批深化與本機驗收已由 `a7e17ee` 保存，[PR #118](https://github.com/kyeunga25/anisonary/pull/118)已建立。正式發布接點為必要quality／Workers preview檢查、正常合併、main CI、Git tree及Cloudflare live驗收；目前production仍以第28批為準。

### 第29批正式發布驗收

[PR #118](https://github.com/kyeunga25/anisonary/pull/118)已正常rebase合併，保留5個階段提交。固定PR head `1d3b4c2` 的quality（38856780886）與Workers preview均成功；main CI（38856976659）成功，main Git tree與已審閱PR完全一致，部署前工作區乾淨。main提交依序為 `1168428`（前批回執）、`54e4abe`（3筆來源引用修正）、`2b4b8eb`（20筆歌曲核心）、`f2638e1`（同批深化／本機驗收）及 `376a908`（發布交接）。

Cloudflare Workers實際CLI部署成功，來源 `376a9086e1ced7a68b88f819a7f1154ce7399cce`、版本標記 `batch29`；另以版本metadata確認標記與來源訊息。帳戶、資源識別及完整營運log未存入公開repository。

Production獨立驗收：29季／1,941部完整API契約及跨endpoint關聯通過；44條首頁／全歌曲／目錄／夏秋季度及12部新增或來源更正動畫HTML／JSON等route與本機artifact雜湊一致，2條不存在route正確404。嚴格CSP、安全headers與API noindex／revalidation均通過。

10部／22筆正式桌面的曲名、音源／發行品數量與明確名單／收錄細節逐項通過；4部393像素手機頁、秋季24／24／21分頁、29 OP／32 ED／8 IN篩選、品番搜尋→歌曲頁→欄位證據展開，以及首頁／全歌曲24列緊湊歌單通過。截圖已目視檢查；0應用／CSP錯誤，檢查時0影片iframe。沒有以DOM觀察冒充網路攔截、實際播放或地區嵌入可用性驗證。

正式季度表更新至本批：2025秋61／61筆已逐批核對、54筆核心齊備／7缺口，另8 IN；其餘季度數字不變。全目錄29季／1,941部／4,316用途（4,297 OP／ED、16 IN、3 TS），959個不同YouTube歌曲watch外連及1,816筆metadata。季度聯集仍未閉合，當前清單不是全季分母；第27–29批未解欄位按各表觸發條件保留。

推送仍提示既有23個Dependabot open alerts；依賴及workflow未變，本機npm audit為0，沿用先前逐項對照lockfile的核對結果，未自行dismiss遠端警示。正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>、<https://anisonary.k-y.cc/anime/alma-chan-wa-kazoku-ni-naritai/>、<https://anisonary.k-y.cc/anime/kimi-to-koete-koi-ni-naru/>。

## 2026-10-16 批次：2025-fall-inventory-30（已發布驗收）

由第29批正式來源 `376a908` 接續。固定優先2025→2007、長期保留2007–2026、公開資料截止日2026-10-14；非成人TV／WEB OP／ED與已確認插曲。繼續2025秋尚未收錄新作、續播及特殊用途，約10部／20–30筆；先保存已證實核心，再深化同批創作、官方影片、音源、發行與正版平台。實際來源核對日期另記。

既有資料、用途季度、來源日期與公開ID保留。重用有效官方及已讀季度證據，未審閱候選不公開；第27–29批兩輪未明欄位只按既有觸發條件恢復，原夏季待辦於秋季首輪後回接。完成條件為本批已確認內容經公開JSON、動畫全部歌曲及緊湊歌單展示和必要檢查，再分階段提交、推送、正式發布並報告各季進度；不把一批完成當成季度或長期目標完成。

### 第30批核心資料保存

實際核對日期2026-10-16。已核對10個新增AniList作品識別與20筆OP／ED用途；先保存曲名、演唱名義、動畫用途及第一方／中文交叉來源，並沿用同頁已明示的創作名單。不滅Season3的ED只公布作曲／編曲者、未有可核明曲名，本階段不以「EDテーマ」捏造歌曲。

| 公開 theme ID | 已確認曲目／用途 |
| --- | --- |
| `yano-kun-no-futsuu-no-hibi-op-1` | POP LIFE／OP1 |
| `yano-kun-no-futsuu-no-hibi-ed-1` | Better Off／ED1 |
| `bukiyou-na-senpai-op-1` | 不器用なI love you／OP1 |
| `bukiyou-na-senpai-ed-1` | 不器用に 君のとなり／ED1 |
| `ranma-1-2-2024-2nd-season-op-1` | ウォーアイニー／OP1 |
| `ranma-1-2-2024-2nd-season-ed-1` | パンダガール／ED1 |
| `fumetsu-no-anata-e-season-3-op-1` | ふめつのあなた／OP1 |
| `mugen-gacha-op-1` | 閃より雷や、更りや高き／OP1 |
| `mugen-gacha-ed-1` | シロガラス／ED1 |
| `mikata-ga-yowasugite-hojo-mahou-ni-tesshiteita-kyuutei-mahoushi-tsuihou-sarete-saikyou-wo-mezasu-op-1` | Quest／OP1 |
| `mikata-ga-yowasugite-hojo-mahou-ni-tesshiteita-kyuutei-mahoushi-tsuihou-sarete-saikyou-wo-mezasu-ed-1` | 欠片／ED1 |
| `chichi-wa-eiyuu-haha-wa-seirei-musume-no-watashi-wa-tenseisha-op-1` | 魔法／OP1 |
| `chichi-wa-eiyuu-haha-wa-seirei-musume-no-watashi-wa-tenseisha-ed-1` | Family／ED1 |
| `akujiki-reijou-to-kyouketsu-koushaku-op-1` | シュガリー・ストーリー／OP1 |
| `akujiki-reijou-to-kyouketsu-koushaku-ed-1` | 希望光度／ED1 |
| `gnosia-op-1` | 化けの皮／OP1 |
| `gnosia-ed-1` | Loo% Who%／ED1 |
| `gnosia-ed-2` | FLOOR KILLER／ED2 |
| `toujima-tanzaburou-wa-kamen-rider-ni-naritai-op-1` | Wanna be／OP1 |
| `toujima-tanzaburou-wa-kamen-rider-ni-naritai-ed-1` | ワンモアタイム／ED1 |

Gnosia的FLOOR KILLER依官方公告確認第8話起使用，與原ED分別保存；らんま第2期及東島丹三郎以目前官方演唱名義保存，舊季及舊ID不改動。跨午夜首播換算曆日；角色／團隊簡介不自動當作逐曲歌唱名單。影片、音源、發行與平台接續同批深化；本階段尚未通過整批parser／build與實際展示，不計入頂部正式季度表或production成果。

### 第30批同批深化與本機驗證

20筆OP／ED核心由 `6a7e029` 保存並推送。整批新增10部／21筆用途（20 OP／ED、1 IN），對應21個歌曲ID；18筆具有作詞、作曲、編曲，20 OP／ED中16筆同時具有完整詞曲編曲與已確認YouTube歌曲watch外連。

| 公開 theme ID | 已確認新增用途 |
| --- | --- |
| `yano-kun-no-futsuu-no-hibi-in-1` | 全力⭐きらめけ初恋／第5話メイ、田中的卡拉OK歌唱；官方劇中歌／新聞及交叉索引核對 |

插曲用途保留メイ（CV.種﨑敦美）、田中（CV.岩崎諒太）；アミカ（CV.田村ゆかり）的原唱完整版另存角色音源與配信Single，MV連至該音源。沒有把原唱MV當成第5話卡拉OK錄音，未另造未證實公開的TV音源。

- 新增28個音源身分：2個明示full（ふめつのあなた、アミカ原唱）、2個OST明示TV size（Wanna be、ワンモアタイム）、24個長度unknown；種類為22演唱版、4 instrumental、1角色原唱、1水槽Remix。不同NC畫面未增加歌曲或錄音。
- 新增32個發行品ID，涵蓋動畫／藝人Single、angela「Answer」、水曜日のカンパネラ「可愛女子」、凛として時雨「Lost God of SASORI」、土岐隼一「JUMBLE!!」各CD版與Gnosia／東島OST。只列本曲相關曲目；未有數位與CD同一錄音證據者不填對應，未有曲序者留空。
- 新增28個不同YouTube歌曲watch外連與2筆明示渠道／形式metadata（false／unknown）；涵蓋NC OP／ED、lyric、MV、Concept Movie及同曲不同NC畫面。另119個其他正版平台確切曲目／專輯／購買項目、14個YouTube Music目的項目與18個人工官方入口，與10個builder通用作品入口分開計數。5個HTTP平台供應目的項目未採用；presave、登入及搜尋入口未當成曲目。
- 創作資料以官方同頁與製作方工作表為主；必要的Oricon／UtaTen名單明示cross_check。Better Off的製作方確認部分共同詞曲作者，補充來源確認完整名單；沒有以歌ネット搬入credits。Gnosia的Giga／TeddyLoid製作與兩位歌唱分工、FLOOR KILLER的Featured Artist／Production分別保存，不從製作職務推定編曲或演唱。
- 舊1,941部的公開JSON逐項完全相同。既有ID、網址、用途季度與來源日期保留；沒有程式、contract、依賴或UI改動。

| 本批未解缺口 | 狀態與續查條件 |
| --- | --- |
| `fumetsu-no-anata-e-season-3-op-1` | 詞／曲已核明、原唱full及Concept Movie已確認；尚缺明示編曲。兩輪定向查找後留空，待官方／授權逐曲完整credits |
| 不滅Season3 ED | 官方僅列作曲／編曲：浜渦正志，未核明曲名／獨立音源身分；未新增無名ED或把composer當歌手。待官方或正式發行品給出可識別曲目 |
| `mugen-gacha-ed-1` | シロガラス的完整詞曲編曲、用途、Single及平台已確認，官方歌曲watch／渠道尚未核明。兩輪定向查找後等待唱片／藝人直接影片或可核明Art Track；YouTube Music專輯入口不代替歌曲影片 |
| `gnosia-ed-1`、`gnosia-ed-2` | 兩曲詞／曲、官方影片、EP／Single／OST已確認；編曲尚缺明示。FLOOR KILLER的peko & Cosaqu僅標Production，沒有推成arrangement；待正式逐曲完整credits |
| 各版收錄／發行細節 | Gnosia OST已公告主題歌及Instrumental，但逐曲版本名、曲序與獨立音源識別未核明，未造新錄音；東島Single的Instrumental逐曲名／位置同樣保留。東島數位發行日期未證實，未拿2026-01-28 CD日期代填；JUMBLE!!相關曲序、果歩的其他確切平台與新影片形式亦待直接官方資料 |
| 跨季與特殊用途 | Gnosia／東島／不滅後續跨季逐集用途仍待核對，本批只保存已核明2025秋用途，不由2026發行日反推2026冬用途；Gnosia的Love Me☆Liar!等獨立角色影片未僅憑MV升格插曲。既有第27–29批缺口保持原觸發條件 |
| 全季完整分母 | 2025秋現有37部／81 OP／ED、9 IN仍是部分快照；新作、續播與輪替聯集尚未閉合，完整分母未知 |

本機檢查：4檔／6項測試、build（1,996 HTML、3,988公開產物）、公開邊界、npm audit 0與Cloudflare dry-run通過。首輪契約檢查指出2筆新link evidence缺少對應target ID，已修正資料並重驗；沒有修改正常程式或降低gate。本批資料修改沿用既有季度、contract與UI，依矩陣不額外重跑本機E2E。

實際預覽10部／21筆桌面頁，曲名與音源／發行品數逐項比對公開JSON；4部393像素手機頁無溢出，目視截圖確認長標題與credits換行。秋季90筆用途為24／24／24／18分頁、39 OP／42 ED／9 IN；ESCL-6135搜尋→Quest→水槽Remix與欄位證據展開、首頁／全歌曲各24列緊湊列表通過。0應用／CSP錯誤，觀察時0影片iframe；未將DOM結果當作網路攔截、播放或地區可用性實測。

全目錄本機29季／1,951部／4,337用途（4,317 OP／ED、17 IN、3 TS），987個不同YouTube歌曲watch外連及1,818筆metadata。2025秋本機81／81筆已核對、70筆核心齊備／11缺口；頂部正式季度表仍以第29批為準，等待GitHub、main CI及Cloudflare live驗收。

本機入口：`/seasons/2025-fall/`、`/anime/yano-kun-no-futsuu-no-hibi/`、`/anime/gnosia/`、`/anime/toujima-tanzaburou-wa-kamen-rider-ni-naritai/`。本批正式驗收後接續第31批2025秋尚未收錄新作、續播與特殊用途；原夏季待辦保留。

同批深化與本機驗收由 `c17ddf1` 保存，[PR #119](https://github.com/kyeunga25/anisonary/pull/119)已建立。接續必要quality與Workers preview檢查、正常合併、main CI、Git tree與Cloudflare live驗收；目前production仍以第29批為準。

### 第30批正式發布驗收

[PR #119](https://github.com/kyeunga25/anisonary/pull/119)已正常rebase合併，保留4個階段提交。固定PR head `9a22864` 的quality（38861653268）與Workers preview均成功，main CI（38861920090）成功；main Git tree與已審閱PR完全一致，部署前工作區乾淨。main提交依序為 `62832c7`（前批回執）、`b39231c`（20筆核心）、`ba43f01`（同批深化／本機驗收）及 `35496fe`（發布交接）。

Cloudflare Workers實際CLI部署成功，來源 `35496fef7150b9d8a274296567a9c41ee6c4fc25`、版本標記 `batch30`，另以版本metadata確認標記及來源訊息。帳戶、資源識別與完整營運log未加入公開repository。

Production獨立驗收：29季／1,951部完整API契約及跨endpoint關聯通過；40條HTML／JSON／目錄／季度／核心資產route與本機artifact雜湊一致，2條不存在route正確404。嚴格CSP、安全headers與API noindex／revalidation通過。

正式10部／21筆桌面頁與4部393像素手機頁的曲名、音源／發行品數量逐項通過；アミカ原唱、Gnosia ED［RED］、Quest水槽Remix與名單展示通過。秋季24／24／24／18分頁、39 OP／42 ED／9 IN篩選、ESCL-6135搜尋→歌曲→欄位證據展開，以及首頁／全歌曲各24列緊湊列表通過。手機截圖已目視檢查；0應用／CSP錯誤、觀察時0影片iframe，沒有冒充網路攔截、播放或地區嵌入可用性驗證。

正式季度表更新至本批：2025秋81／81筆已逐批核對、70筆核心齊備／11缺口，另9 IN；其餘季度不變。全目錄29季／1,951部／4,337用途（4,317 OP／ED、17 IN、3 TS），987個不同YouTube歌曲watch外連及1,818筆metadata。693個唯一用途已處理（673 OP／ED、17 IN、3 TS），跨季不可相加；清單未閉合，整季與長期目標未完成。

正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>、<https://anisonary.k-y.cc/anime/yano-kun-no-futsuu-no-hibi/>、<https://anisonary.k-y.cc/anime/gnosia/>。第27–30批未解欄位保持既有觸發條件；依賴及workflow未變，npm audit 0，既有遠端Dependabot警示未自行dismiss。

## 2026-10-16 批次：2025-fall-inventory-31

由第30批正式來源 `35496fe` 接續。優先2025→2007，每年秋→夏→春→冬；固定長期範圍2007–2026、公開資料截止日2026-10-14。非成人TV／WEB OP／ED及已確認插曲，劇場版／OVA延後；2026既有成果保留，後續新作更新延後。

繼續2025秋尚未收錄的新作、跨季續播、輪替及特殊用途，約10部／20–30筆。沿用來源與識別證據，先核心、再深化同批創作／影片／音源／發行品／平台。既有ID、網址、用途季度及日期保持穩定；第27–30批兩輪未明欄位只按已記錄觸發條件恢復，未審閱候選不公開。完成條件為已確認內容通過公開JSON、動畫全部歌曲頁與緊湊歌單展示、必要檢查，再分階段提交、推送、正式部署與live驗收；本批及全季均未完成。

### 第31批核心資料保存

實際核對日期2026-10-16。新增10個已核明作品識別與20筆2025秋OP／ED用途；以官方音樂頁及中文季度來源核對，沿用同頁明示的創作名單。《忍者と極道》另使用藝人官方繁中公告核對兩曲；首集02:05與通常01:59分開標示。

| 公開 theme ID | 已確認曲目／用途 |
| --- | --- |
| `lets-play-quest-darake-no-my-life-op-1` | 1, 2, Play／OP1 |
| `lets-play-quest-darake-no-my-life-ed-1` | Left & Right／ED1 |
| `digimon-beatbreak-op-1` | Mad Pulse／OP1 |
| `digimon-beatbreak-ed-1` | beat up／ED1 |
| `kingdom-6th-season-op-1` | 生きて、燦々／OP1 |
| `kingdom-6th-season-ed-1` | 咆哮／ED1 |
| `ninja-to-gokudou-op-1` | Sweet Disaster／OP1 |
| `ninja-to-gokudou-ed-1` | Until You Die Out／ED1 |
| `ao-no-orchestra-season-2-op-1` | アマデウス／OP1 |
| `ao-no-orchestra-season-2-ed-1` | 青の魔法／ED1 |
| `debu-to-love-to-ayamachi-to-op-1` | Happy Yummy Lucky Yummy／OP1 |
| `debu-to-love-to-ayamachi-to-ed-1` | 私でよかった！！！／ED1 |
| `shabake-op-1` | いのちのパレヱド／OP1 |
| `shabake-ed-1` | 脈脈／ED1 |
| `si-vis-the-sound-of-heroes-op-1` | So Far Away／OP1 |
| `si-vis-the-sound-of-heroes-ed-1` | FRIENDS & SMILE／ED1 |
| `monster-strike-deadverse-reloaded-op-1` | Monster／OP1 |
| `monster-strike-deadverse-reloaded-ed-1` | THE GAME／ED1 |
| `nohara-hiroshi-hiru-meshi-no-ryuugi-op-1` | ごはん食べヨ／OP1 |
| `nohara-hiroshi-hiru-meshi-no-ryuugi-ed-1` | 今日のごはんはなんだろな／ED1 |

DIGIMON BEATBREAK本階段只登記已核明2025秋的Mad Pulse／beat up，後續2026 ED不混入秋季；作品結束狀態未另證實，保留unknown。SI-VIS第1クール歌曲與後續季別分開，producer簡介不代替逐曲credits；角色、歌唱者與不同STAGE音源接續核對。

本階段為歌曲核心保存，影片、音源、發行品、平台與已確認插曲接續同批深化；尚未完成整批parser／build或實際展示，不計入頂部正式季度表或production成果。既有ID、URL與來源日期保留。

### 第31批插曲核心階段

已保存7筆有官方及交叉來源的插曲：`ninja-to-gokudou-in-1`（孤独の唄），以及`si-vis-the-sound-of-heroes-in-1`至`si-vis-the-sound-of-heroes-in-6`（MELODEA／幻想曲（アラベスク）を君に／Braver Dreamer／エレジー／ロマンティスト・キラー／プロトスター）。《SI-VIS》6首已保存逐曲作詞、作曲及編曲；角色歌唱與配音分開核對，Bonus Track不當作額外插曲用途。第31批目前10部／27筆核心用途，深化及完整批次檢查仍進行中，尚未發布驗收。


### 第31批同批深化與本機驗收

20筆OP／ED核心由 `35c2f95`、7筆插曲核心由 `01c436b` 分段保存並推送。整批新增10部／27筆用途（20 OP／ED、7 IN），對應27個歌曲ID；24筆具有作詞、作曲、編曲，其中20 OP／ED有18筆同時具備完整詞曲編曲及已確認YouTube歌曲watch外連。

| 公開 theme ID | 已確認新增插曲用途 |
| --- | --- |
| `ninja-to-gokudou-in-1` | 孤独の唄／第3話挿入歌／佐々木詩織 |
| `si-vis-the-sound-of-heroes-in-1` | MELODEA／第1話劇中歌／SI-VIS |
| `si-vis-the-sound-of-heroes-in-2` | 幻想曲（アラベスク）を君に／第3話劇中歌／SI-VIS |
| `si-vis-the-sound-of-heroes-in-3` | Braver Dreamer／第6話劇中歌／SI-VIS |
| `si-vis-the-sound-of-heroes-in-4` | エレジー／第8話劇中歌／SI-VIS |
| `si-vis-the-sound-of-heroes-in-5` | ロマンティスト・キラー／第9話劇中歌／SI-VIS |
| `si-vis-the-sound-of-heroes-in-6` | プロトスター／第12話劇中歌／SI-VIS |

- 新增41個音源ID：1個明示Anime Edit（TV）、40個長度unknown；種類為30演唱版、6 instrumental、5角色版本。《SI-VIS》同曲SECOND／THIRD STAGE與YOSUKE MAIN VOCAL bonus分開記音源，不增加歌曲／用途；只把官方已列明的SECOND STAGE四人歌唱、エレジー的JUNE／ふるーり及プロトスター雙人歌唱對應到相關錄音，未用CV代替歌唱者。Sped Up及六万の声版本保留原版本名，未僅憑名稱推定重新編曲或獨立live錄音。
- 新增49個發行品ID（64個逐用途收錄關係），涵蓋動畫及藝人Single、SI-VIS「PARA-BELLUM」、友成空「East West」、サバシスター「たかがパンクロック！」等7個Album發行版。只保存本曲相關曲目；未有曲序、日期或CD／數位同一錄音證據者留空。いきものがかりCD的曲順未定未補造；不同CD版不增加歌曲。
- 新增35個不同YouTube歌曲watch外連及8筆明示渠道／形式metadata（false／unknown），涵蓋MV、Art Track、NC OP／ED、Lyric Video、現場與Special Edit。另220個其他正版平台確切項目（含28個YouTube Music目的項目）、29個人工官方入口，與10個builder作品入口分開計數；19個HTTP供應目的項目排除，未改寫成猜測的HTTPS。登入、presave、追蹤參數及搜尋入口不作確切曲目。
- 久保田兩曲同Single、Left & Right的HIKKA Guest Vocal、個別共同創作名單與弦編曲分工均保留來源；官方同頁可支持的多項事實一併保存。Qobuz／紀伊國屋／Tower／UtaTen等補充credits明示cross_check，未搬入歌ネット資料或歌詞。官方繁中公告、中文季度清單及第一方原文並用；未生成港台正式譯名。
- 原有1,951部公開JSON逐項完全相同；既有ID、網址、用途季度及來源日期維持。沒有程式、資料契約、依賴或UI變更。

| 本批未解缺口 | 狀態與續查條件 |
| --- | --- |
| `ninja-to-gokudou-ed-1` | 詞／曲及官方影片、配信Single已核明，編曲未明示；兩輪定向查找後等待唱片／藝人逐曲完整credits，不以樂團自作或producer推定arrangement |
| `ninja-to-gokudou-in-1` | 曲名、佐々木詩織歌唱、第3話用途及官方歌詞付き映像已確認；創作名單與OST版本／收錄關係尚待第一方逐曲資料。正版平台TV ver.確切外連保留，未由角色CV或漫畫虛構作者代填，也未只憑第三方OST表建立新錄音／發行品 |
| `monster-strike-deadverse-reloaded-ed-1` | 作詞YZERR、作曲YZERR／JIGG、2026-06-10配信發行及動畫ED用途已核對；尚缺明示編曲及官方歌曲watch／渠道。兩輪後待藝人／唱片完整credits或直接影片；沒有把Shorts source URL改成watch，也不由發行日反推新用途季度 |
| アマデウス收錄版日期 | 官網同頁header為2025-10-06、11th Single內文另列2025-11-23；數位日期保留已交叉確認的10-06，另列Instrumental收錄版日期留空。待官方商品／更正資料明確區分發行版 |
| SI-VIS不同演唱與日期 | SECOND STAGE四人歌唱有第一方明示；未核明的原版／THIRD STAGE逐曲個人歌唱留空，不沿用有出入的第三方逐曲人名。OP THIRD STAGE日期公告與discography不一致，留空待第一方更正；ED THIRD STAGE依官方明示保存2025-12-22。其他數位／CD錄音同一性、完整製作團隊待逐曲資料 |
| 其他發行／影片 | Sweet Disaster確切首發與其餘Single／Album／OST收錄、若干數位版日期及其他官方影片形式未明；待直接唱片／藝人商品頁。壞掉的官方配信入口未當作有效平台項目，未泛化到全部舊連結重查 |
| 跨季及完整分母 | DIGIMON後續2026 ED、SI-VIS第2クール及其餘跨季輪替／插曲仍待到相應範圍核對；本批不混入2025秋。現有47部／101 OP／ED、16 IN仍是部分快照，季度新作、WEB、續播及輪替聯集未閉合。第27–30批缺口沿用原續查條件 |

本機檢查：4檔／6項測試、build（2,006 HTML／4,008公開產物）及Cloudflare dry-run通過。批次資料沿用既有季度、contract與UI，依矩陣不額外重跑本機E2E；沒有為測試修改正常程式或降低gate。文件連結、diff及公開邊界於提交前另作同輪收尾；依賴與workflow未變。

實際桌面預覽10部／27筆、4部393像素手機頁，曲名、版本／收錄數量與JSON一致；無橫向溢出或框架錯誤。秋季117筆用途為24／24／24／24／21分頁，49 OP／52 ED／16 IN篩選通過；VVCL-2837搜尋得到6首插曲→Braver Dreamer→YOSUKE bonus及欄位證據展開通過，首頁／全部歌曲各24列緊湊列表。目視手機截圖確認長名與版本換行；0應用／CSP錯誤、觀察時0影片iframe，不視為網路攔截、播放或區域嵌入可用性驗證。

全目錄本機29季／1,961部／4,364用途（4,337 OP／ED、24 IN、3 TS），1,022個不同YouTube歌曲watch外連、1,826筆影片metadata。2025秋本機101／101筆已核對、88核心齊備／13缺口，另16 IN；頂部正式季度表仍以第30批為準，待GitHub、main CI、Cloudflare部署與live驗收。

本機入口：`/seasons/2025-fall/`、`/anime/si-vis-the-sound-of-heroes/`、`/anime/ninja-to-gokudou/`、`/anime/nohara-hiroshi-hiru-meshi-no-ryuugi/`。正式驗收後接續第32批2025秋尚未收錄新作、WEB、續播與輪替，原夏季待辦保留；整季及長期目標均未完成。

同批深化與本機驗收由 `56a4505` 保存，[PR #120](https://github.com/kyeunga25/anisonary/pull/120)已建立；文件相對連結、`git diff --check`、repository公開邊界241檔與最終Cloudflare dry-run通過。接續固定PR head的quality／Workers preview、正常合併、main CI、Git tree及正式部署／live驗收；production目前仍以第30批為準。


### 第31批正式發布驗收

[PR #120](https://github.com/kyeunga25/anisonary/pull/120)已正常rebase合併，保留5個階段提交。固定PR head `63e6181` 的quality（38867625800）與Workers preview均成功，main CI（38867979236）成功；main Git tree與已審閱PR完全一致，部署前工作區乾淨。main提交依序為 `27da4c2`（前批回執）、`361b0ef`（20筆核心）、`05a1ddf`（7筆插曲）、`8a204be`（同批深化／本機驗收）及 `6015b1f`（發布交接）。

Cloudflare Workers實際CLI部署成功，來源 `6015b1fe1d7649578b4e34a9b603dc94884a54d1`、標記 `batch31`；另以版本metadata確認標記及來源訊息。完整營運log、帳戶與資源識別未加入公開repository。

正式站獨立驗收：29季／1,961部完整API契約及跨endpoint關聯通過；40條HTML／JSON／季度／目錄／核心資產route與本機artifact雜湊一致，2條不存在route正確404。嚴格CSP、安全headers與API noindex／revalidation通過。10部／27筆桌面頁、4部393像素手機頁、117筆用途24／24／24／24／21分頁、49 OP／52 ED／16 IN篩選，以及VVCL-2837搜尋6首→Braver Dreamer→YOSUKE bonus與欄位證據展開通過；首頁及全部歌曲各24列。手機截圖已目視檢查；0應用／CSP錯誤、觀察時0影片iframe，未聲稱已完成網路攔截、影片播放或地區嵌入可用性驗證。

正式季度表更新至本批：2025秋101／101筆已逐批核對、88核心齊備／13缺口，另16 IN；其餘季度不變。全目錄29季／1,961部／4,364用途（4,337 OP／ED、24 IN、3 TS），1,022個不同YouTube歌曲watch外連及1,826筆metadata。720個唯一用途已處理（693 OP／ED、24 IN、3 TS），跨季不可相加；季度完整清單及長期目標仍未完成。第27–31批缺口按既有觸發條件保留，未將發布成功等同欄位全部齊備。

正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>、<https://anisonary.k-y.cc/anime/si-vis-the-sound-of-heroes/>、<https://anisonary.k-y.cc/anime/ninja-to-gokudou/>。

## 2026-10-16 批次：2025-fall-inventory-32（執行中）

由第31批正式來源 `6015b1f` 接續。固定範圍2007–2026、資料截止日2026-10-14；目前優先2025→2007，每年秋→夏→春→冬，非成人TV／WEB OP／ED及已確認插曲。2026既有成果保留，後續新作與劇場版／OVA延後。

第32批繼續2025秋尚未收錄的新作、WEB、續播、輪替及特殊用途，約10部／20–30筆。沿用已讀取季度與作品識別來源，按目前公開ID排重，再核對第一方歌曲核心及同批深化；既有ID／URL／來源日期保持穩定。兩輪未明欄位不重搜，僅按第27–31批觸發條件恢復。完成條件為已確認內容通過公開JSON、動畫頁全部歌曲／名單／版本／收錄／來源及緊湊歌單展示、必要檢查，再分段提交、推送、正式部署與live驗收。本批尚未完成；整季及長期目標均未完成。


### 第32批核心保存階段

10部新增作品的18筆OP／ED核心已由 `54cd5f8` 保存；《転生悪女の黒歴史》另新增8筆官方確認插曲，均保存角色／CV名義與逐曲作詞、作曲、編曲。共26筆用途，不把8首插曲計入OP／ED分母；尚未完成本批建置及展示驗證，不計入正式發布成果。

| 公開 theme ID | 已確認歌曲／用途 |
| --- | --- |
| `kekkon-yubiwa-monogatari-ii-op-1` | Daybreak／OP1／Sizuk |
| `kekkon-yubiwa-monogatari-ii-ed-1` | any if／ED1／鬼頭明里 |
| `tensei-akujo-no-kuro-rekishi-op-1` | Black Flame／OP1／KID PHENOMENON from EXILE TRIBE |
| `tensei-akujo-no-kuro-rekishi-ed-1` | リジェネ／ED1／Zerofrom |
| `tensei-akujo-no-kuro-rekishi-in-1` | バタフライ・エチュード／IN1／イアナ・マグノリア（CV.青山吉能） |
| `tensei-akujo-no-kuro-rekishi-in-2` | ファムファタル／IN2／ヨミ・ブラックサレナ（CV.土岐隼一） |
| `tensei-akujo-no-kuro-rekishi-in-3` | beliefs／IN3／ソル・ネモフィラ（CV.小松昌平）、ヨミ・ブラックサレナ（CV.土岐隼一） |
| `tensei-akujo-no-kuro-rekishi-in-4` | Préludeを奏でて／IN4／ギノフォード・ダンデライオン（CV.古川慎） |
| `tensei-akujo-no-kuro-rekishi-in-5` | LOVING＊KINDNESS／IN5／コノハ・マグノリア（CV.M・A・O） |
| `tensei-akujo-no-kuro-rekishi-in-6` | ライトネス／IN6／シャノウ・クレマチス（CV.ランズベリー・アーサー） |
| `tensei-akujo-no-kuro-rekishi-in-7` | how I feel／IN7／ソル・ネモフィラ（CV.小松昌平） |
| `tensei-akujo-no-kuro-rekishi-in-8` | Merry!!!／IN8／イアナ・マグノリア（CV.青山吉能）、ソル・ネモフィラ（CV.小松昌平）、ヨミ・ブラックサレナ（CV.土岐隼一） |
| `taiyou-yori-mo-mabushii-hoshi-op-1` | Stellar Days／OP1／秦 基博 |
| `taiyou-yori-mo-mabushii-hoshi-ed-1` | 最新話／ED1／和ぬか |
| `potion-wagami-wo-tasukeru-op-1` | 恋のマジックポーション／OP1／TRiDENT |
| `potion-wagami-wo-tasukeru-ed-1` | MIRACRAID／ED1／TRiDENT |
| `ganglion-ed-1` | ミラクル／ED1／NIKO NIKO TAN TAN |
| `hyakushou-kizoku-3rd-season-ed-1` | 陰になり日向になり／ED1／pachae |
| `kagaku-bouken-survival-2nd-season-op-1` | ネバネバ／OP1／MORISAKI WIN |
| `kagaku-bouken-survival-2nd-season-ed-1` | survival dAnce／ED1／ジオ（松田颯水）×ダイヤ（小松未可子） |
| `disney-twisted-wonderland-the-animation-episode-of-heartslabyul-op-1` | Piece of my world／OP1／Night Ravens |
| `disney-twisted-wonderland-the-animation-episode-of-heartslabyul-ed-1` | Obedience／ED1／ハーツラビュル寮 |
| `cats-eye-2025-op-1` | MAGIC／OP1／Ado |
| `cats-eye-2025-ed-1` | CAT’S EYE／ED1／Ado |
| `shuumatsu-no-valkyrie-iii-op-1` | Dead Or Alive／OP1／GLAY |
| `shuumatsu-no-valkyrie-iii-ed-1` | Last breath, Last record／ED1／早見沙織 |

已處理anime ID：`curated-176298`、`curated-174914`、`curated-186621`、`curated-198561`、`curated-198117`、`curated-185694`、`curated-186736`、`curated-140291`、`curated-184718`、`curated-187921`。未知配信時刻省略；2025 WEB首播與之後TV放送分開，沒有新增2026用途。核心第一方與交叉來源已保存，來源核對日期2026-10-16。


### 第32批同批深化與本機驗收

18筆OP／ED核心由 `54cd5f8`、8筆插曲核心由 `847849c` 分段保存並推送。整批新增10部／26筆用途（8 OP、10 ED、8 IN），對應26個歌曲ID；24筆具備作詞、作曲、編曲，18 OP／ED中有13筆同時具有完整詞曲編曲及已確認YouTube歌曲watch外連。

- 新增39個音源ID：1 full、4 TV、34 unknown；種類為21演唱版、10角色版、4 instrumental、3 remix、1重新編曲。只有「ネバネバ」有第一方明示full；Daybreak TV size、Black Flame官方明示TV音源、ネバネバ-TVサイズ、Last breath, Last record TV EDIT分開記錄。「リジェネ (アニメ ver.)」及《ツイステ》The Animation ver長度維持unknown，未由版本名或影片時長推定TV。how I feel的劇中インスト有第一方使用場景證據，未補造發行品。
- 新增38個發行品ID、44個逐用途收錄關係：動畫／藝人Single、Journey的3個CD版、BLUE DAWN的2個CD版與配信EP、《ツイステ》Vol.1配信OST、2CD及2LP、GLAY Dead Or Alive的3個CD版與明示remix等。只保存本曲相關曲目；未證實的日期、曲序或CD／數位音源同一性留空。數位與CD日期分開；8首插曲使用配信頁日期，沒有把新聞刊登日當作發行日。
- 新增29個不同YouTube歌曲watch外連及5筆渠道／形式metadata（false／unknown），涵蓋官方歌曲影片、NC OP／ED、カラオケ風PV、Art Track、Visualizer及Music Video；另104個其他正版平台確切項目、45個人工官方入口（含24個尚未解析目的地的TuneCore逐曲平台入口），與10個builder作品入口分開計數。5個HTTP平台目的項目排除，沒有猜改HTTPS；presave、登入／授權、追蹤參數及搜尋入口不進公開資料。TuneCore入口未冒充已核對的最終平台曲目URL。
- 《転生悪女》8首插曲角色／CV分開保存；Zerofrom只將官方明示3人記為團隊成員，不推定個人逐曲演唱。《ツイステ》ED的5名角色歌唱、詞／曲依JOYSOUND逐曲資料作cross_check；Pachae逐曲LCA依UtaTen作cross_check，沒有搬入歌ネット名單或歌詞。
- 核心與深化共86個不同來源URL、376組欄位證據；只更新實際查閱的新用途來源日期2026-10-16。原有1,961部公開JSON逐項完全相同，既有ID、URL及來源日期保留；沒有程式、契約、UI或依賴變更。

| 本批未解缺口 | 狀態與續查條件 |
| --- | --- |
| `potion-wagami-wo-tasukeru-op-1`、`potion-wagami-wo-tasukeru-ed-1` | LCA、發行Single、藝人EP與確切Spotify／YouTube Music已核明；歌曲watch的官方渠道關係未齊，兩輪後等待製作／藝人直接影片公告或可核對渠道。第三方NC影片候選未當成已確認官方影片 |
| `hyakushou-kizoku-3rd-season-ed-1` | 歌曲／ED、配信Single及cross_check LCA已保存；缺第一方逐曲完整credits、歌曲watch及渠道。兩輪後待播出／製作／藝人直接影片或唱片逐曲名單，不從一般藝人簡介推定本曲工作 |
| `disney-twisted-wonderland-the-animation-episode-of-heartslabyul-op-1` | 動畫OP、歌唱、命名版本、OST與官方影片已確認；作詞／作曲／編曲仍空，未從OST總音樂職位套用逐曲credits。兩輪後待唱片／創作者逐曲表或授權項目製作名單 |
| `disney-twisted-wonderland-the-animation-episode-of-heartslabyul-ed-1` | 角色歌唱及詞／曲由正版JOYSOUND補充，編曲未明；等待第一方或正版逐曲arrangement資料，未套用總配樂職位 |
| 転生悪女部分影片／來源文字 | ファムファタル的新聞顯示文字與實際href不一致，已由作詞方同曲嵌入對上正確影片；how I feel的新聞沿用另一曲名稱，由創作者同曲頁對上。ライトネス創作者嵌入標題的CV與動畫逐曲資料不一致，只保存曲名／官方入口，角色歌唱依動畫及配信頁，不由該CV標題製造新演唱版 |
| 音源／發行與平台 | Black Flame配信版日期、部分EP數位日期、其他藝人Album／OST收錄、完整個別演奏及CD／數位音源同一性仍待明示。24個TuneCore逐曲平台入口未取得最終目的地，只列官方入口；不從HTTP、presave、專輯標題或影片形式推定關係 |
| 跨季及完整分母 | GANGLION後續2026 ED、Ragnarok III後續TV播出及其餘2026輪替延後。Cat’s Eye 9月26日WEB首播，依YourAnimes與AniChart秋季清單一致歸秋；首播與配信日期沒有改成10月。現有57部／119 OP／ED、24 IN仍是秋季部分快照，剩餘TV／WEB、短篇及續播聯集未閉合 |

本機檢查：4檔／6項測試、build（2,016 HTML／4,028公開產物）通過；本批資料沿用既有季度、contract與UI，依矩陣不額外重跑本機E2E。原有1,961部JSON逐項不變。10部／26筆桌面頁與4部393像素手機頁的歌曲、音源／收錄數量與JSON一致；無橫向溢出或錯誤覆蓋層。秋季143筆用途24／24／24／24／24／23分頁、57 OP／62 ED／24 IN篩選，以及UWCD-1143搜尋2首→Piece of my world→Battle Arrange與欄位證據展開通過；首頁及全部歌曲各24列。已目視手機長名、版本及平台換行；觀察時0影片iframe，不代表網路攔截、播放或地區可用性驗證。

全目錄本機29季／1,971部／4,390用途（4,355 OP／ED、32 IN、3 TS），1,051個不同YouTube歌曲watch外連及1,831筆metadata。2025秋本機119／119筆已核對、101核心齊備／18缺口，另24 IN；746個唯一用途已處理（711 OP／ED、32 IN、3 TS），跨季不可相加。頂部正式季度表仍以第31批為準，待本批GitHub、main CI、Cloudflare部署及live驗收。

本機入口：`/seasons/2025-fall/`、`/anime/tensei-akujo-no-kuro-rekishi/`、`/anime/disney-twisted-wonderland-the-animation-episode-of-heartslabyul/`、`/anime/shuumatsu-no-valkyrie-iii/`。正式驗收後接續第33批2025秋未收錄TV／WEB、短篇、續播與輪替；只按觸發條件回查本批缺口。2025夏及更舊年份待辦保留，整季與長期目標均未完成。

文件相對連結、`git diff --check`、repository公開邊界241檔及Cloudflare dry-run通過；實際Merry!!!頁內跳轉、版本證據展開與本機應用錯誤0通過。尚待固定PR head的CI／Workers preview、正常合併、main CI及正式部署／live驗收，production仍以第31批為準。

同批深化及本機驗收由 `256d4a7` 保存；[PR #121](https://github.com/kyeunga25/anisonary/pull/121)已建立。下一步固定PR head檢查、正常合併、main CI、Git tree一致與乾淨工作區核對，再正式部署及live驗收；本段不是production完成宣告。
