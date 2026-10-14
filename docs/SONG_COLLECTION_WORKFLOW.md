# 歌曲資料收集計畫與工作流程 / Song Collection Plan and Workflow

這是歌曲收集、整理與展示的主要執行文件。每輪以一批可在網站看到的資料更新為交付單位；進度寫入 [`CATALOG_COLLECTION_STATUS.md`](./CATALOG_COLLECTION_STATUS.md)，新工作階段使用 [`CONTINUOUS_DEVELOPMENT_PROMPT.md`](./CONTINUOUS_DEVELOPMENT_PROMPT.md)。

## 產品目標

Anisonary 是可追溯的動畫歌曲目錄：讀者可以由一列歌曲找到動畫、演唱與創作團隊、不同音源版本、官方影片、串流入口，以及收錄這首歌的 single／album／合輯。收藏在這裡指整理歌曲身分與正版來源；網站提供必要事實與外連，不保存音訊、影片、完整歌詞或第三方頁面副本。

首頁、全部歌曲、季度與搜尋保持緊湊歌單。點選歌曲進入動畫頁，該頁直接列出全部已確認主題曲、創作名單、版本與發行資訊。資料整理服務於這條閱讀流程。

## 二十年收集目標與任務控制

長期目標是由新到舊收集近二十年的動畫歌曲及上述相關資訊。新設目標未指定年份時，以當年與之前十九個曆年作預設：2026 年啟動為 **2007–2026**。開始時固定範圍與公開資料截止日；恢復同一目標不自動加入新年份或移除舊年份。之後的新公告另作差異更新。

每次可設定下列目標。明確指令優先於預設，未指定部分沿用已有目標；新任務沒有本次工作量時，預設完成進度表的下一批。

| 設定 | 可指定內容 |
| --- | --- |
| 範圍 | 年份、季度、作品、歌曲；例如只補 2020–2022 年，或一個指定季度 |
| 收錄種類 | 現階段沿用既有非成人 TV／WEB 的 OP／ED；可另指定劇場版、OVA、插曲或其他用途，先補其實際 contract／展示支援，不冒充 OP／ED |
| 資料深度 | 核心身分、創作名單、full／TV、YouTube、發行品、其他平台；列清必需欄位及可保留未知的欄位 |
| 工作量與停止點 | 指定歌曲／作品數、批數、工作時限，或明確範圍完成；20–30 筆只是批次單位 |
| 完成條件 | 指定資料已核對、關係已保存、網站與 JSON 可看到、相應檢查通過，並如實列出缺口 |

使用者可以直接說「開始」、「繼續上一個目標」、「暫停／停止」、「改為某個範圍」或「取消目標」。按最新指令更新同一 checkpoint；較大的已授權目標可在當前工作階段連續處理批次，無需每批重新問是否繼續。停止時不啟動新查詢、修改或整套檢查，只保存已完成與未完成部分、最後可靠位置及下一步；無法安全保存時先在回覆交代。恢復需要明確指令，不把長期目標當成自動背景或排程授權。

「二十年首輪收集完成」須逐季度核對已登記收錄範圍，截至固定日期已公布的歌曲用途均有對應記錄或明確未解缺口，已確認的相關資訊可展示。仍有必需資料缺口時整體目標保持未完成；無法證實的可選資訊保留未知。不能把目前 TV／WEB OP／ED 階段、資料筆數或一輪搜尋結束宣稱為全部動畫、全部歌曲及全部版本已齊備。

## 現有能力與缺口

以下是目前程式的能力，不代表所有歌曲都已補齊欄位。

| 資料 | 目前可用 | 下一步 |
| --- | --- | --- |
| 歌名、藝人、動畫、季度、OP／ED | `PublicTheme`、作品與季度 registry、共用歌單 | 按季度由新到舊增加與修正 |
| 作詞、作曲、編曲、演唱等角色 | `credits[]`，角色包含 `songwriting`、`translation` 等 | 補有證據的角色；保留角色、團隊、CV、合成歌聲的區別 |
| 官方 YouTube | `videos[]` 可保存多個影片；另有 `links[]` | 找齊有不同用途的官方版本，避免只留第一個搜尋結果 |
| 平台與購買連結 | `links[]` 區分曲目、專輯、搜尋、官方入口及購買；可選 `recordingId`／`releaseId`、核對日期與可用性 | 連到確切曲目／發行品；地區可用性未核對時保持 `unknown` |
| 音源版本與發行日期 | 可選 `songId`、`recordings[]`；發行品日期有 year／month／day 精度 | 新批次逐首填已證實版本；MV 形式不能推定音源長度 |
| 專輯／single／版本收錄 | 可選 `releases[]` 保存 edition、品番與本曲的 disc／track／recording 關係 | 只填本曲收錄；數位版與 CD 音源同一性未知時不填 `recordingId` |
| 證據 | `sources[]` 可獨立核對日期；可選 `evidence[]` 對應欄位及實體 | 沿用來源保留日期，僅更新實際查閱來源；`lastVerifiedAt` 取最新來源日期 |

現行 API 與 authoring 型別見 [`public-api.ts`](../src/types/public-api.ts)、[`curated-seeds/types.ts`](../src/data/curated-seeds/types.ts)。2026 夏季的小批次使用上述可選欄位；舊資料省略欄位仍有效。`ApiProvider` 深層驗證實體 ID、日期精度、關係及來源引用，剝除未知欄位。`group_member` 記錄有來源的團隊成員，不自動推定每人演唱本曲。

新公告的用途若只有本次明確查閱的來源，可在 seed 使用 `sourceMode: "explicit"`。此時只輸出該用途的 `sources`，不自動繼承動畫中舊歌曲的影片、索引或核對日期；第一方及交叉來源仍須齊備。省略此欄位的既有資料維持原有來源合併行為，公開 JSON 格式不變。

## 更新順序與交付

| 階段 | 範圍 | 完成條件 |
| --- | --- | --- |
| A：一次性接通新欄位 | 已收錄最新季度選 3–5 首有清楚官方證據的歌曲 | 版本、發行品與欄位證據經 authoring → public parser → static JSON → 動畫頁完整呈現；原有歌單仍正常 |
| B：新季度核心資料 | 當前季度及較新的漏季；先做歌曲身分、動畫用途、演唱名義與來源 | 每批已核對歌曲出現在季度、全部歌曲與搜尋；季度範圍如實說明 |
| C：同批深化 | 創作名單、full／TV、YouTube 官方形式、首發 single／album、其他平台 | 已找到的可證實資料公開；剩餘缺口有明確續查條件 |
| D：往舊季度推進 | 新季度首輪結束後，按年與季倒序補漏季、既有缺口，再延伸較舊年份 | 每批完成資料更新並留下可接續位置 |

日期已進入新季度時，先處理新季度；已知新公告、更正、下架及發行日到期的資料可插隊。一般整理順序是秋 → 夏 → 春 → 冬，再進入上一年；以執行當日與實際 registry 決定，不永久固定於某一季。作品首播季度、歌曲發行日期與影片上架日期分開處理。

預設每批 20–30 筆主題曲用途，或約 10 套動畫；輪替歌很多時減少作品數。先完成一批，再接下一批。創作名單或 album 資訊缺失不阻擋身分與用途已證實的歌曲；核心身分有衝突則只暫停該筆。沒有官方影片也可發布歌曲。

## 要保存的五種關係

| 對象 | 必要含義 | 最小資料 |
| --- | --- | --- |
| 歌曲 / Song | 音樂作品本身 | 穩定 ID、原文曲名、已證實別名、作詞／作曲等作品層 credits |
| 動畫用途 / Anime use | 這首歌如何用於某作品 | 現有 theme ID、動畫、OP／ED、序號、季度；集數或特殊用途有證據才補 |
| 音源版本 / Recording variant | 實際演唱、編曲或剪輯版本 | 穩定 ID、full／TV／short／unknown、演唱／編曲、官方版本名；ISRC、時長可選 |
| 發行品 / Release | 哪個商品或數位發行收錄哪個音源 | ID、標題、single／album／EP／compilation／soundtrack、發行藝人、日期與精度、唱片公司、地區、edition、曲目位置及版本關係 |
| 平台出現 / Platform appearance | 哪裡能找到哪個音源或發行品 | 平台、確切 ID／HTTPS URL、內容形式、官方／授權依據、對應版本／發行品、地區與可用性核對日期 |

這是本產品的建模選擇。發行品與版本的區別亦可參照 [MusicBrainz Release 定義](https://musicbrainz.org/doc/Release)：普通版與豪華版可為不同 release，不能單靠相同專輯名稱合併。

### 去重與判定

- 現有 theme ID 與 URL 保持穩定；同歌出現在不同動畫、季度或 OP／ED 用途時保留各用途關係，不因新增影片重排序號。
- full、TV 剪輯、重新編曲、不同演唱者、角色版、instrumental、live、remix 分開記錄有證據的音源差異。MV、Art Track、lyric video、creditless OP／ED、PV 是呈現形式，與音源長度是兩個維度；MV 不自動等於 full，creditless 也不自動等於新的錄音。
- 同一音源可有多個官方影片及多張收錄發行品。相同 YouTube video ID 只存一次，再建立關係；新影片 ID 不等於新歌曲。
- 只有曲名相同、歌手相似、影片約 90 秒或約 4 分鐘都不足以自動合併或判為 TV／full。官方版本名、曲目表、已證實識別碼與具體 credits 優先；證據不足保留 `unknown`。
- anime edition、初回限定版、通常版先視為發行品 edition。封面、DVD 或特典不同，不自動視為音源不同。
- 發行品類型與動畫關係分開：藝人 single 也可以收錄動畫主題曲；藝人 album、動畫歌曲 single、OST、角色歌、合輯不能用一個互斥標籤概括。
- 合作團隊與個別角色依官方原文保存。`songwriting` 不擅自拆成作詞及作曲；發行藝人名義不自動推導個別演唱者；重新編曲不套用舊編曲 credits。
- 歌曲首發、某版 CD 發售、數位上架與 YouTube 發布各有日期。只知年份／月份就保存精度，不補成假日期；單一 v1 `releaseDate` 無法表達時使用新格式。
- 插曲、角色歌、一般主題歌及純配樂不冒充 OP／ED。可先保留其已證實發行關係；新增用途類型是獨立 contract 工作，不能為了多收歌曲改錯分類。

### 一次性最小格式工作

採可選、可相容的新欄位，先讓一小批真實資料通過；不先搬移全部歷史資料，也不引入 runtime 資料庫。

此格式已由 2026 夏季試行接通。接續資料批次沿用 `songId`、`recordings`、`releases`、`evidence` 與季度 seed 的 `sources`／`links`；以下步驟是格式維護契約，不是每輪重做的工作。`videos.type` 另支援 MV、Art Track、lyric、live 與 PV；嵌入未核對時保存 `embeddable: false`、`embedAvailability: unknown`，只提供外連。

1. 為 theme 增加可選的歌曲識別、音源版本、發行品關係及欄位證據；名稱與精確型別在實作時集中定義。證據引用既有來源 URL／ID，另記對應欄位與核對日期，不複製長篇來源內容。
2. 同步修改 `PublicTheme`、`CuratedThemeSeed`、`toTheme()`、`ApiProvider` nested parser 與公開 JSON 輸出；舊資料省略新欄位仍須有效。現有每歌第一方及交叉來源 gate 繼續保護歌曲身分與動畫用途。
3. 未來平台連結可直接在季度 authoring 層保存；保留舊 `linkOverrides` 相容，不讓每輪新資料繼續膨脹全域 override。`videos[]` 沿用既有季度模組。
4. Authoring 支援各來源獨立日期；沿用已核對的舊證據時保留舊日期，只有新來源或實際重新查閱的來源才保存新日期。只深化既有動畫的歌曲時，以既有 metadata 日期填 `metadataVerifiedAt`，保留作品、圖像、識別與播出來源日期；不讓新歌曲證據日期推高未重核的作品資料。Parser 檢查 `lastVerifiedAt` 等於最新歌曲來源日期。
5. 動畫頁用緊湊的「版本 → 官方影片／平台 → 收錄發行品」列展示，來源可直接點開。歌單主列保持歌曲、藝人、動畫、用途與季度；有實際資料時才加小型版本／發行摘要。詳細 credits 放動畫頁，避免列表變成寬表。
6. 搜尋可匹配新增的版本／發行品文字，仍在本機運作；索引不塞完整 ledger 或媒體 URL。新增欄位以現有核心測試保護，避免為每首歌新增測試或快照。

## 收集來源與搜尋方式

先使用記錄已有的官方 URL，同一頁一次讀出可支持的歌名、用途、credits、發行與平台資料；不為每個欄位重新搜尋。一般資料發現先找繁中／中文來源，再英文；歌曲精確事實返回相應動畫、藝人及唱片公司第一方原文。港台正式譯名優先採官方中文頁，不能把簡中轉換當成正式譯名。

| 需要的事實 | 優先頁面 | 核對重點 |
| --- | --- | --- |
| 動畫用途、曲名、演唱名義 | 動畫官網 MUSIC、製作／播出方公告 | 精確作品、OP／ED、輪替或集數，勿把 PV 用歌當 OP |
| 創作團隊 | 唱片公司商品／藝人 discography／官方曲目 credits | 角色逐項，不從歌手名推導作曲或編曲 |
| 音源與收錄發行品 | 官方 single／album 曲目表、配信發行頁 | 曲目位置、full／TV、重新錄音、發行版與日期 |
| YouTube 形式 | 官網／唱片／藝人頁直接連出的影片、官方藝人／動畫渠道 | exact video ID、頻道身分、影片形式、音源版本、發行品 |
| 其他平台 | 官方 smart link → YouTube Music、Apple Music、Spotify、KKBOX、LINE MUSIC、mora／音樂商店等實際目的頁 | 確切曲目／專輯；存在於 JP 不等於 HK／TW 可用 |
| 身分與缺口 | 現有 Annict／Bangumi 季度資料與歌曲索引 | 每季度有界盤點一次、每歌曲重用已有 cross-check，依現行來源規則 |

Apple Music 可提供公開製作者名單，但並非每首歌都有；它是補充核對途徑，不是必須完成的依賴。[Apple 香港說明](https://support.apple.com/zh-hk/guide/music-web/apdm3b93fb16/web)

定向查找例子：`"原文曲名" "藝人" 作詞 作曲 編曲`、`"原文曲名" "藝人" single album`、`"原文曲名" "藝人" TV size`。官網已有 discography 入口時直接沿該入口查找。每個缺口預設最多兩輪定向查找；仍無清楚證據即留下續查條件，繼續下一首，不輪流重搜所有資料庫。

### YouTube 專項

1. 同歌分別尋找動畫官方 creditless OP／ED、藝人／唱片官方 MV、官方音訊／Art Track、官方 lyric／live／其他明確版本；PV 僅標 PV，不能代替完整歌曲。
2. 官網連結、唱片／藝人官方關係與曲目資訊共同證實渠道；名稱含「Official」或「Topic」本身不是充分證據。OAC、Vevo、Topic 的整併關係可以協助查找，不自動證實每個影片的音源版本。[官方藝人頻道說明](https://support.google.com/youtube/answer/7336634?hl=zh-Hant)
3. Art Track 與 MV 分開保存。YouTube 依錄音、發行品與供應方組合建立 Art Track，所以同歌在 single 與 album 有不同 Art Track 時，應保留發行品關係，先核對是否同一音源。[Art Track 說明](https://support.google.com/youtube/answer/6007071?hl=zh-Hant)
4. 不收翻唱、fan upload、侵權重上傳，不以觀看數排序決定官方版本。不可嵌入時保留可用外連；下架或區域不可用只改該平台狀態，不刪歌曲歷史身分。

### 有界取得資料

沿用 [`SOURCE_TERMS.md`](./SOURCE_TERMS.md)：公開 repository 不加入 crawler、私人 adapter、原始 API dump、token 或未審核候選。先查來源現有使用方式；可自動化時只用其允許的文件化 API、最少欄位、有限分頁與配額。缺少 token 時繼續普通公開頁面的定向核對，不把登入、購買或繞過限制列為批次依賴。

YouTube 自動收集使用其文件化 API，不能改用網頁爬取；若採 API 資料，有限儲存資料須按政策在 30 日內刷新或刪除。把這項到期工作列入獨立維護清單，不將舊 API 資料當永久離線事實庫。[YouTube 開發者政策 III.E.4、III.E.6](https://developers.google.com/youtube/terms/developer-policies?hl=zh-cn)

一次工作階段對相同 URL 只取得一次並共用核對結果；跨工作階段只沿用允許保存的已審閱事實與來源，沒有必要保存頁面或 response 副本。來源限制、429／Retry-After、內容刪除或地區限制只影響該來源，改用其他已有合法證據，或暫停該筆。新來源、用法或規模改變才重新核對相應條款，無需每批重讀所有來源政策。

## 每輪 workflow

```mermaid
flowchart LR
  A[讀進度與本輪差異] --> B[選最新季度的一批]
  B --> C[收集歌曲身分與來源]
  C --> D[補 credits、音源、發行與平台]
  D --> E[只合入已核對事實]
  E --> F[一次檢查與預覽]
  F --> G[記下結果與下一批]
```

1. **啟動一次**：讀 `AGENTS.md`、本文件、進度表及 `git status --short`。保留既有未提交變更；只讀本批涉及的型別、季度 seed、來源／影片模組及 builder。不要每輪重讀全部 QA、架構、部署或 Git 歷史。
2. **定位批次**：先判定新公告與最新漏季，再按進度選未處理的公開 ID。新季度先盤點範圍並明示不足；已有季度不重做全集盤點。游標只是定位提示，實際 ID／差異判定避免排序變動或新公告被漏掉。
3. **核心先行**：逐歌核對曲名、演唱名義、動畫用途、第一方及 cross-check；關聯到穩定 theme ID。跨季作品保持一個動畫頁。可以使用既有有效 cross-check，不需要每次再找兩個全新網站。
4. **同次補齊**：從已開啟官方音樂／發行頁取得 credits、音源版本、發行品及 smart link。只為真正缺失的欄位進行定向查找；記錄可證實的官方不同影片及平台項目。
5. **差異合入**：更新確切 seed／來源／影片／已支援的新欄位。先比對既有 override，避免 seed 修改被舊 override 蓋掉。沿用證據保留日期，只有實際重新查閱的來源更新日期；批次時間不代表全部欄位重新驗證。
6. **收尾一次**：按下表跑必要檢查，預覽本批有代表性的歌曲、版本和發行品，確認新增資料確實出現在網頁與 JSON。失敗只處理本批相關原因；不修改正常程式或降低資料 gate 遷就舊測試。
7. **留接點**：更新同一進度表的批次 ID、已展示的 theme ID、完成層次、未解缺口類別、續查觸發條件、檢查結果與下一批。未審核候選或原始取回資料只留在獲授權的非公開工作區；沒有這種工作區時，不把它們寫進公開文件。

已授權本機提交時，每個通過必要檢查的階段建立一個範圍明確的 commit，簡短記錄資料差異、驗證範圍及仍有的缺口。只提交該階段相關內容；既有無關修改及未驗證資料保留在工作區。checkpoint 記錄已建立的 commit 與批次對應，推送及部署另按明確授權處理。

遇到一筆難題就保留其原有 reviewed 資料／略過未知欄位，繼續其餘歌曲。沒有新證據且沒有到期觸發的記錄不重查。對已公開作品的缺口，續查條件可寫「single 發售」、「官方曲目表出現」、「新官方影片」、「來源恢復」；不以另一輪開始為理由重查。

## 檢查按變更種類安排

| 本輪變更 | 收尾一次執行 | 何時擴大 |
| --- | --- | --- |
| 只有文件／進度 | 文件連結檢查、`git diff --check`、`npm run public:check` | 不跑歌曲、瀏覽器、Wrangler 或依賴稽核 |
| 現有格式內的資料 | `npm test`、`npm run build`、`npm run public:check`、差異審閱 | 預覽新增／更正資料；新季度、路由或播放器行為才跑 6 條 E2E |
| 新格式、parser、搜尋／UI／媒體行為 | `npm test`、`npm run build`、`npm run public:check`、`npm run test:e2e` | 為真正新邊界補少量既有核心測試斷言；同步檢查來源與展示 |
| 依賴、CI 或 Cloudflare 設定 | 上述相應項目，加一次 `npm audit`／`npm run cf:check` | 只檢查實際改動涉及的環節 |
| 正式發布 | 依既有發布文件做一次 release gate 與實際 live 驗收 | 只有該任務已有提交／部署授權才執行外部寫入 |

`npm test` 已包含 `catalog:check`；`npm run build` 已包含 Astro 型別檢查、CSP、Service Worker 與 artifact gate，無需再逐項重跑。E2E 另有自己的測試 build，正常完成後不額外再建置一次。`api:smoke` 是指定 HTTP 環境的另一次驗證，不是每批必要步驟。

不要每新增一首歌曲就跑全套、每批升版本、建立新的長 QA 文件、重新檢查全部舊連結或替未公布資料反覆查找。已知非本批的依賴稽核問題記一次並沿用，依賴或稽核狀態改變時再查；它不能被稱為通過，也不應把資料整理轉成依賴重構。

## 交付摘要與完成標準

每輪只需報告：目標季度／批次、新增與更正的作品／歌曲用途、補齊的 credits／版本／發行品／官方平台項目、仍缺哪些類別、檢查結果、預覽入口、下一批 ID 或範圍。數量取實際差異，不把影片、用途與唯一歌曲混為同一個總數。

「核心首輪完成」表示已核對本輪盤點範圍內已公布歌曲的身分與用途；「深化一輪完成」表示本批可找到的版本、credits 和發行關係已補入，剩餘項目有續查條件。兩者都不等於完整歷史資料已齊備。核心不明的歌曲不發布；可選欄位未知不妨礙已證實部分公開。

## English handoff

The long-term target is the latest twenty calendar years, with the range and evidence cutoff fixed when a goal starts. Work newest to oldest in bounded batches. Publish verified song identities and anime uses first, then enrich credits, recording variants, releases and official platform appearances. Keep media presentation separate from recording identity. Preserve stable IDs, field evidence and actual source dates. Implement the minimal optional schema once with a small real-data slice; do not migrate the entire catalogue first. Reuse valid evidence, revisit only changes or due items, and run checks once per applicable batch. Save the current goal, acceptance criteria and checkpoint. Start or resume on explicit instruction; stop new work promptly on pause or stop, preserve progress, and wait for a resume instruction. A batch size is not the completion criterion for a larger goal. Keep unreviewed inputs and collection tooling outside the public repository; commit, push and deployment require the current task's authorization.
