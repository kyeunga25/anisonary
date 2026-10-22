# 歌曲收集進度 / Collection Checkpoint

此文件保存可公開的執行位置與已完成成果。計畫及步驟見 [`SONG_COLLECTION_WORKFLOW.md`](./SONG_COLLECTION_WORKFLOW.md)；每批更新同一文件。未審核候選、原始 response、token、私人路徑、內部評分與對話內容不寫入此處。

## 長期目標與本次任務

目標啟動日期：2026-10-14。下方基線保留 2026-10-09 的歷史本機記錄；本次差異另記，不代表 production 狀態。

| 項目 | 目前狀態 |
| --- | --- |
| 長期目標 | 收集近二十年的動畫歌曲、創作團隊、音源版本、來源、官方影片、收錄發行品與正版平台資訊 |
| 固定範圍 | 2007–2026；非成人 TV／WEB 的 OP／ED，已確認插曲一併記錄；公開資料截止日 2026-10-14。長期目標未完成 |
| 本次資料任務 | 2020–2026標準季度TV的動畫及歌曲基本資料優先，按2026 → 2020、各年秋 → 夏 → 春 → 冬補漏。先處理可快速核實的原名、季度／首播、演唱名義、OP／ED用途及來源；創作、影片、音源、發行品及平台集中深化留待下一階段。約24分鐘、常見12／24集，13／26集及同類續播納入；長篇以2020–2026的TV用曲季度盤點，不以作品首播年自動排除；短WEB、泡麵番、短篇TV及特殊番延後，既有成果保留 |
| 完成條件 | 各季有來源支持的作品及歌曲用途清單，核對新作、續播與已知輪替；基本資料經公開JSON、頁面及必要檢查驗證，歌單與詳情保持易瀏覽；每筆用途保存現有欄位狀態、未記錄項目及已知續查條件，與完整收齊及來源日期分開。詳細欄位缺少不阻擋基本資料。作品聯集未閉合或仍有必需缺口時不稱整季齊備；兩輪未明欄位保留續查條件 |
| 執行狀態 | 執行中；第128批9部31筆本機資料與展示驗證完成，發布檢查待完成：28筆基本逐欄證據、3筆特殊用途待核、5筆部分季度條件。分類提交後接續第129批；第125–128批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。；基本、詳細及長期範圍未完成，沒有背景排程 |
| 接續位置 | 第129批2021秋、2021夏既有作品10部25筆既有用途已登記：`curated-132806`、`curated-131264`、`curated-122292`、`curated-126790`、`curated-87502`、`curated-128705`、`curated-122052`、`curated-132456`、`curated-117002`、`curated-122434`。第128批僅本機資料與展示驗證；第125–128批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。全目錄240筆完全季度待核、165筆非空季度條件、141筆具體跨季缺口及ATRI日期保存，詳細與短篇／WEB延後 |
| 發布提交 | 第124批[PR #199](https://github.com/kyeunga25/anisonary/pull/199)來源`92a28d4`／`batch124-basics`已正式驗收；第128批僅本機資料與展示驗證，分類提交以私有本機receipt為準，正式發布檢查待完成；第125–128批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。 |
| 開始／停止 | 明確要求執行或繼續才開始；暫停／停止保存位置後等待指令；取消保留成果並記錄取消狀態 |

執行狀態使用「未開始／執行中／已暫停／已完成／已取消」；無法繼續時另記具體阻礙及仍未完成部分，不自動標記完成。長期目標與本次工作量分開，未指定本次工作量時先完成下一批。

## 季度進度 / Quarterly progress

統計至第128批本機資料與展示驗證；最後正式資料來源第124批`92a28d4`／`batch124-basics`，第128批發布檢查待完成。第125–128批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。

「基本欄位具備」表示現有歌曲原名、演唱名義、用途及第一方／交叉來源有值，動畫可識別且有季度與作品來源；這是現有資料的欄位盤點，不表示本批重查全部來源、作品清單已閉合或整季收齊。「已逐批核對」依下方各批公開ID明細，包含查找後保留續查條件的用途。

歷史「核心欄位齊備」改稱「詳細核心齊備」，定義仍為其中已有作詞、作曲、編曲及已確認YouTube歌曲watch外連的用途；合併songwriting不拆分，專輯入口不算歌曲影片。此指標不作本階段基本資料門檻，也不代表所有版本／發行品已完整。未逐批核對的歷史資料不計入詳細完成數。

| 季度 | 現有OP／ED用途 | 基本欄位具備 | 已逐批核對 | 其中詳細核心齊備 | 已核對詳細核心缺口 |
| --- | ---: | ---: | ---: | ---: | ---: |
| 2026 秋 | 138 | 138 | 138 | 3 | 135 |
| 2026 夏 | 184 | 184 | 184 | 113 | 71 |
| 2026 春 | 185 | 185 | 185 | 127 | 58 |
| 2026 冬 | 162 | 162 | 162 | 109 | 53 |
| 2025 秋 | 160 | 160 | 160 | 123 | 37 |
| 2025 夏 | 215 | 215 | 200 | 163 | 37 |
| 2025 春 | 153 | 153 | 132 | 46 | 86 |
| 2025 冬 | 175 | 175 | 168 | 5 | 163 |
| 2024 秋 | 184 | 184 | 172 | 1 | 171 |
| 2024 夏 | 198 | 198 | 167 | 0 | 167 |
| 2024 春 | 160 | 160 | 149 | 0 | 149 |
| 2024 冬 | 149 | 149 | 147 | 0 | 147 |
| 2023 秋 | 183 | 183 | 175 | 0 | 175 |
| 2023 夏 | 153 | 153 | 128 | 0 | 128 |
| 2023 春 | 145 | 145 | 132 | 0 | 132 |
| 2023 冬 | 166 | 166 | 145 | 0 | 145 |
| 2022 秋 | 174 | 174 | 144 | 0 | 144 |
| 2022 夏 | 155 | 155 | 135 | 0 | 135 |
| 2022 春 | 144 | 144 | 119 | 0 | 119 |
| 2022 冬 | 119 | 119 | 103 | 0 | 103 |
| 2021 秋 | 113 | 113 | 85 | 0 | 85 |
| 2021 夏 | 114 | 114 | 10 | 0 | 10 |
| 2021 春 | 142 | 142 | 11 | 0 | 11 |
| 2021 冬 | 176 | 176 | 10 | 0 | 10 |
| 2020 秋 | 188 | 188 | 8 | 0 | 8 |
| 2020 夏 | 72 | 72 | 11 | 0 | 11 |
| 2020 春 | 217 | 217 | 9 | 0 | 9 |
| 2020 冬 | 189 | 189 | 9 | 0 | 9 |
| 2019 秋 | 153 | 153 | 0 | 0 | 0 |
| 2019 夏 | 103 | 103 | 0 | 0 | 0 |
| 2019 春 | 尚未建立快照 | — | — | — | — |
| 2019 冬 | 尚未建立快照 | — | — | — | — |

2020–2026的28個季度均有快照，但各季尚未完成標準TV作品聯集，現有筆數不是閉合的全季分母。2026夏／春／冬既有清單首輪與第08–37批成果保留，沒有重查全量舊來源。2025夏尚有15筆、春21筆、冬7筆現有OP／ED未逐批核對，冬季7筆屬延後短篇；另240筆既有用途季度待核，保留全目錄及動畫頁並暫不計入季度；第69批新增待核3筆為ヤナト田植唄舊ED、Wistoria Vocal ver.及Honey Citron弦樂版，原ID及動畫頁保留。第70批另4筆為Live Start ALL STAR、負けヒロイン原OP作特殊ED及ATRI兩曲PV的TV用途，均保留原入口待核。第71批Rick and Morty兩曲第一方逐曲證據仍未明，保留既有名義與來源、原動畫頁及具體續查，未以總配樂或非官方歌詞補創作。ATRI兩首已確認夏季主題曲的後段TV日期另存續查，沒有以最終回記念PV公告日推出秋季。第73批另3筆為轉生史萊姆原ED3、シャイニーカラーズ原ED5／6的第一方特殊片尾證據，保留原ID及具體續查；Off Vocal未補推定歌唱。第65批すれちがい、arma及第2期Let's Swing，以及第67批ブラウス特殊ED及Weight of the World原ED2，保留第一方曲目／逐話用途缺口。シンカリオン兩筆歌曲已有2024確認季度、2025冬仍待逐曲證據；鑑定貴族第2期兩筆已有2024秋、首話9月29日的逐曲夏季用途待核，上述4筆及第66批【我推的孩子】第2期兩筆最終話秋季用途，共6筆近期具體跨季缺口；第74批夜櫻前半2筆的7月交界、後半2筆的10月終回另有逐曲待核，共10筆近期具體跨季缺口；第75批無職II後半兩首常規OP／ED的7月1日最終話是否使用另待逐曲確認，第75批時共12筆具體跨季缺口；第80批另有メタリックルージュ兩首與魔女と野獣OP末話，第80批合計15筆；第81批另有ぶっちぎりOP四月及NINJA KAMUI兩首日本TV七月，第81批合計18筆；第82批另有勇者初回TV、大吾首話OP及翼後兩cour的ED，合計21筆，與完全未分季的68筆分開。全目錄另有165筆已有確認季度的use_quarters續查／媒體界線備註，本次沒有把它們一律當作已解除或只有上述6筆。第74批另5筆為響け3原ED2／3及夜クラ原ED2／3／4，曲目／劇中歌資料保存，第一方特殊ED證據仍待原話數片尾；不以原聲帶曲表或MV推出ED，亦未刪歌曲。第75批另2筆為死神坊ちゃん第3期夜想曲與デートV Paradoxes特殊ED，保留已知歌曲與原ID，等第一方原話數片尾。無職II最終話特別EDかげくらべの唄按6月30日24:00的實際曆日7月1日補夏季；死神第36話婚禮曲為已確認插曲及原OP改編版，原ED3 ID保留、歌曲與版本分開。第76批另2筆ささ恋原ED3／4保留歌曲及原ID，交叉列劇中歌但第一方逐曲用途仍待原credit；OP由原Music、延後公告及第11話交叉表確認秋季延用。声優ラジオ同頁明標三插曲另行收錄，角色曲／Bonus版未自動新增。第77批另2筆為よう実3rd原ED2 Fixer與ED3カーストルーム，歌曲身分可核但第一方本期特殊ED仍缺；原ID保留、季度空值。迷宮飯後半2首由逐話表確認第14話4月4日起移春季，もふなで原TV日期更正1月7日；5人Ver.與原版共用歌曲身分，影片及用途分開。第78批真の仲間2nd原ED2息を吸う ここで吸う 生きてく已證實第一期歌曲身分並共用原歌曲ID，本期特殊ED第一方仍待原話數字幕；季度暫空且原用途ID保留。第79批第二幕巴／澪版ああ人生に涙あり舊ED4對應影片實為第一幕第4話，第二幕第20話第一方用途及錄音待核；原入口保留、季度空值。悪役令嬢99 Ray of Light依原Music及中文交叉表由原OP1更正IN1，非新增用途。月導後半兩曲由原第二court與第13話4月1日交叉表歸春。第80批勇気爆発原ED2與OP同曲同影片，第一話特殊ED第一方仍待原字幕，保留原入口及季度空值；原影片實為OP，呈現形式改正。FLOWERS兩首及魔女ED保留冬並補春，うる星後半兩首改春；メタリック動畫有四月TV，兩曲春季用途未明，動畫與歌曲季度分開。戦国妖狐正常曲未用四月末話，不補春。第81批スナック第13話為Blu-ray／配信限定、演唱及日期待核；NINJA KAMUI原特殊ED三筆的第一方用曲／演唱或綴字對應未明，原ID及名義保留、季度空值。正常兩曲依原美國TV補春，日本TV七月條件保留；Divinez原Season1兩曲補春。明治撃剣只補原TV，沒有由劇伴作者推OP／ED。第82批補8部跨期作品及7筆漏錄用途，37筆基本欄位證據保存；首播季度、初回TV與配信版、正常後半及特殊用途分開，另3筆具體跨季條件未解。第83批補8部27筆，23筆基本欄位證據、4筆第一方用途／版本缺口；川越第12話ED改冬，正常OP不隨動畫延播補冬，DOG SIGNAL OP冬季延用待原字幕。第84批補9部22筆，20筆基本欄位證據、2筆特殊用途缺口；魔法使的新娘兩首插曲按官方逐話曲表新增，未從OST收錄推用途。豚のレバー冬季終回與S級娘九月AT-X僅補動畫季度，3筆歌曲跨季條件保留。第85批補10部34筆，26筆基本逐欄證據、8筆特殊用途待核，新增FLY HIGH!!!第1話插曲；お嬢與MF GHOST補動畫夏季、四筆歌曲夏季用途待核。第86批補6部24筆，22筆基本逐欄證據、2筆特殊用途待核；Everything is Changing由ED更正第7話IN、原入口保留，新增光の後ろ姿第12話IN。第87批補10部34筆，31筆基本逐欄證據、3筆特殊用途待核；絆第二期新增10筆官方明示插曲，mirAI wave!指向第一期已核原曲、未因此確認本期ED。第88批補8部38筆，33筆基本逐欄證據、5筆特殊用途待核；新增12筆逐話劇中RAP，Next Stage六版共用歌曲而各保作者與版別。第89批補10部32筆，32筆基本逐欄證據、2筆MyGO春季用途條件；新增9筆IN及Clover第0話ED，原用途序號保留。第90批補10部22筆基本逐欄證據，咒術第二季後半兩曲補夏秋跨季，聖者TV首播與先行串流分開。第91批補10部24筆，22筆基本證據、2筆用途待核及3筆部分季度；並修復77筆既有基本／季度／作者待核索引。第92批補10部25筆基本逐欄證據，Helck/Dark後半與Zom延播用途分季，3筆部分季度條件保留。第93批10部30筆基本證據，新增Endless roll插曲；春夏逐曲界線及特別編曲共歌關係已核，2筆秋季條件保留。第94批9部29筆，23筆基本逐欄證據、6筆特殊用途／名義待核；原TV與先行串流分開，2筆夏季條件及同曲三ED版本保留。第95批8部44筆，43筆基本逐欄證據、1筆特殊用途待核；同頁補16首逐話插曲，U149兩演唱版本共歌曲而保獨立用途，2筆夏季條件保留。第96批10部22筆，21筆基本證據、1筆Acoustic用途／身分待核及2筆夏季條件；新增第8話IN，Birdie兩期OP共同歌曲身分與職位已分開。第97批12部30筆，28筆基本證據、2筆特殊用途待核及5筆部分季度；新增2首明示IN，動畫續播與逐曲季度分開。第98批2部29stored，僅核23筆、6筆原已核整筆保留；新增16筆基本證據，7筆特殊身分／用途held，另6筆用途已證但季度空、2筆非空季度條件分開保存。第99批11部29筆基本證據，含2首TECHNOROID逐話插曲；先行WEB與TV首播修正，特殊ED依本曲官方公告確證。第100批9部29筆，28筆基本證據、1筆特殊用途held、1筆跨春條件；三部精確TV資訊待核另記，已退役失效官網對外入口及相關來源。第101批10部28筆既有用途加6筆新IN，共34筆；27筆基本證據、7筆用途held、6筆非空季度partial。原TV日期與先行WEB、延播、重播分開，詳細欄位續查條件保留。第102批10部25筆既有用途，23筆基本證據、2筆特殊版本身分／用途待核，5筆跨季條件保留；先補原TV與原名／名義／用途，不擴詳細搜尋。第102批10部25筆既有用途，23筆基本證據、2筆特殊版本身分／用途待核，5筆跨季條件保留；先補原TV與原名／名義／用途，不擴詳細搜尋。第103批10部29筆既有用途加2筆新IN，共31筆；22筆基本證據、9筆特殊身分／用途待核，9筆跨季條件保存。原TV與重啟／先行WEB、正篇與商品錄音分開。第104批10部29筆既有用途加3筆新IN，共32筆；31筆基本證據、1筆特殊用途待核，2筆夏季條件保留。首TV、WEB先行、原cour及歌曲／音源分開。第105批保留6部27筆既有用途的已查事實：其中5部標準TV、1部四集迷你番列延後；13筆基本證據、14筆特殊身分／用途待核，4筆跨季條件，無新增用途。第106批來源查核稿：3部25筆既有用途，18筆基本證據、7筆solo身分／本期用途held空季度；0筆非空季度partial、0新用途／IN、0新歌曲。公開資料與展示驗證仍待集中執行，不在此稿宣稱完成。第107批來源查核待驗證稿：10部29筆既有用途，19筆基本證據、10筆held空季度；0筆非空季度partial、0新用途／歌曲。集中資料、展示與發布檢查尚未執行，不據此稿宣稱通過。第108批待驗證稿：6部標準TV、23筆既有用途及4筆新插曲，共27筆；24筆基本證據、3筆用途held與3筆非空季度partial。公開整合、測試、預覽及發布均待集中執行。第109批待驗證稿：3部標準TV、25筆既有用途與1筆共用歌曲的新增IN，共26筆；21筆基本證據、5筆held空季度、0筆非空季度partial。公開整合、資料檢查、介面預覽與發布均待集中執行。第110批待驗證稿：9部標準TV、26筆既有用途加6筆新IN，共32筆；31筆基本證據、1筆held空季度、4筆非空季度partial。另1個既有ED用途有官方明證更正為IN，原ID／序號／歌曲ID保留。公開資料、展示及發布檢查待集中執行。第111批待驗證稿：9部標準TV、30筆既有用途加1筆新IN，共31筆；19筆基本證據、12筆held空季度、2筆非空季度partial。新歌曲1筆為Overlord IV fallen；不合併held演唱版本、不更正用途type。公開資料、展示及發布驗證待集中執行。第112批待驗證稿：10部標準TV、22筆公開既有用途及3筆東京喵喵IN，共25筆；24筆基本證據、1筆held空季度與2筆非空季度partial。raw候選23筆含1筆既有排除項，與公開用途分開計。公開整合、資料檢查、預覽及發布待集中執行。第113批待驗證稿：8部標準TV、30筆既有用途加8筆新IN，共38筆；33筆基本證據、5筆held空季度、0筆partial。預期新增8個歌曲ID，沒有用途type或canonical合併。公開資料、介面與發布驗證待集中執行；本批不是完整詳細資料完成。第114批待驗證稿：7部標準TV、23筆既有用途加12筆新用途，共35筆；27筆基本證據、8筆held空季度、8筆partial。新用途為8筆IN與4筆OPED，預期12個新歌曲ID須由實際前後song集合驗證。僅Love Live! Superstar!! 2期原ED1更正為IN，保留既有ID／序號1／songID；沒有共同歌曲合併。公開資料、介面與發布驗證待集中執行，基本核對不代表詳細資料完成。第115批待驗證稿：ONE PIECE與寶可夢旅途兩部長篇標準TV。10筆既有用途保原ID／類型／序號，其中ONE PIECE兩筆2026用途整筆保留；另新增11筆2020–2025正常TV OP／ED，共21公開用途。本輪核對19筆為18 basic／1 held／0 partial，另外2筆既有basic未重核。寶可夢三筆OP依Sony明示同曲接棒建立共同歌曲關係，四版演唱與編曲各保；不建立新錄音。數量待實際114基線與build proof核實。第116批待驗證稿：名探偵コナン單一標準長篇TV，整筆保留五筆已核2026用途，新增23筆2020–2025正常TV歷代OPED，共28用途。16筆新用途有精確第一方OP／ED文字；七筆僅一方OP・ED聯集，曲名／演唱已證而精確用途待核，held空季度。預期合計21筆field_evidence_recorded、7筆sources_recorded、0筆partial；23個新歌曲ID仍須實際前後song集合驗證。沒有type correction或canonical合併。第117批完成本機資料及展示驗證：2022夏／春9部，保留26筆原用途並新增風都探偵2筆插曲，共28用途；27筆基本逐欄證據、1筆特殊ED用途待核、4筆已確認季度但跨季條件未解。新增2個歌曲ID，acoustic版依官方原曲關係共用既有song，唯一歌曲淨增1。第118批完成本機資料及展示驗證：2022春7部標準TV，保留29筆原用途，新增SPY×FAMILY第5話插曲TBD，共30用途；29筆基本逐欄證據、1筆特殊ED演唱／用途待核、3筆部分季度條件。新增1個歌曲ID，無既有歌曲關係或type更正；全目錄4,793用途、2,088筆基本逐欄證據。第119批完成本機資料及展示驗證：2022春10部標準TV，保留27筆原用途，新增相合之物第2話插曲八重に咲く，共28用途；22筆基本逐欄證據、6筆特殊用途／版本待核、2筆部分季度條件。新增1個歌曲ID，沒有type或既有歌曲關係更正；全目錄4,794用途、2,110筆基本逐欄證據。第120批完成本機資料及展示驗證：2022春10部標準TV，保留20筆原用途，新增佐羅利第三系列與King MAX各2筆OP／ED、BIRDIE WING 2筆插曲，共26用途；23筆基本逐欄證據、3筆特殊ED用途待核、2筆部分季度條件。新增6個歌曲ID，無type或既有歌曲關係更正；全目錄4,800用途、2,133筆基本逐欄證據。第121批完成2022春8部標準TV、27筆用途的本機資料與展示驗證：23筆基本身分／用途證據齊備，4筆特殊ED用途待核，4筆另有跨季證據待補。新增3筆已證插曲；更正2筆同歌關係並保留所有用途ID，唯一歌曲淨增1。第122批完成2022冬10部標準TV、29筆用途的本機資料與展示驗證：26筆基本身分／用途證據齊備，3筆特殊用途待核，7筆另有跨季證據待補。新增4筆已證插曲，更正1筆同曲版本關係且保留用途ID，唯一歌曲淨增3。第123批完成2022冬10部標準TV、30筆用途的本機資料與展示驗證：30筆基本身分／用途證據齊備，沒有新增基本用途待核；進擊巨人2首另有春季末話證據待補。新增5筆已證插曲，更正1筆同歌關係並保留所有用途ID，唯一歌曲淨增4。第124批完成2022冬12部標準TV、42筆用途的本機資料與展示驗證：37筆基本身分／用途證據齊備，5筆特殊用途待核，4筆另有跨季證據待補。新增4筆已證插曲，更正1筆鋼琴版同歌關係並保留所有用途ID，唯一歌曲淨增3。第125批完成12部標準TV、39筆既有用途的本機資料與展示驗證：26筆基本身分／用途證據齊備，13筆輪替片尾用途待核，另5筆後續季度條件待補。沒有新增歌曲、用途或歌曲關係更正。第126批完成2021秋10部標準TV、30筆用途的本機資料與展示驗證：27筆基本身分／用途證據齊備，3筆特殊用途待核，另5筆跨季條件待補。新增4筆插曲；1筆原ED更正為IN並保留用途ID與序號，唯一歌曲淨增4。第127批完成2021秋10部標準TV、28筆用途的本機資料與展示驗證：23筆基本身分／用途證據齊備，5筆特殊用途待核，沒有新增跨季條件。新增サクガン插曲Because of you；暗殺者角色版共用原曲歌曲身分並保留用途ID，唯一歌曲淨增0。第128批完成2021秋9部標準TV、31筆用途的本機資料與展示驗證：28筆基本身分／用途證據齊備，3筆特殊用途待核，另5筆跨季條件待補。新增デジモンゴーストゲーム兩筆插曲First Riders與MAKUAKE；原用途ID、版本及未重讀日期保留，唯一歌曲淨增2。全目錄240筆完全季度待核、165筆非空季度條件及141筆具體跨季缺口保存；連續基本盤點執行中，短篇／WEB及詳細仍延後。

目前3,252個唯一用途已逐批處理，其中2,984 OP／ED、258 IN、10 TS；包含240筆用途季度待核狀態盤點，未把它們計入任一已確認季度，跨季不可相加。第38–82批新增242筆用途的基本欄位及身分／用途證據齊備；秋季詳細核心3／138主要來自既有用途季度補正，不表示其餘基本資料失敗。春季共7筆已證實第二季度／後期用途改掛秋季，另16筆第二季度改掛夏季；無自覺聖女兩筆補夏季並保留春末TV首播，轉生史萊姆第3期後半兩曲保留6月春末並補夏季，沒有把所有第二部分一律改成7月起；唯一歌曲與未重查來源日期保留。2007–2018及2019春／冬仍無快照，長期範圍未完成。羽のゆりかご的季度fallback限制沿第37批記錄，未把未證實春季使用當作確證。

## 基線

記錄日期：2026-10-09。以下來自本機 repository 建置產物，不是 production 或 live 平台驗收。

- 目前 28 個季度快照、1,917 個唯一動畫頁、4,229 筆 OP／ED 用途；用途筆數不等於去重後的歌曲／錄音數。
- 已收錄最新季度：2026 夏季。2026 秋季、2025 秋季尚未在 registry；2019 夏季仍屬部分收錄。
- 共用歌單與動畫全部主題曲頁已可用；每歌可有多個官方影片、credits、平台連結及來源。
- 本機產物中 282 筆用途有非演唱角色 credits、239 筆有單一發行日期、61 筆有版本標籤；這些是欄位存在數，不代表完整度。
- 目前 1,756 筆影片 metadata、164 筆用途有多個影片；沒有結構化音源版本／發行品關係。
- 新格式、獨立來源日期 authoring 及新欄位展示尚未實作；此輪僅建立計畫、workflow 與交接入口，沒有新增歌曲資料。

## 下一輪位置

目前階段為 **2020–2026標準TV動畫與歌曲基本資料優先，由新到舊**；詳細資料待下一階段指令。不能以現有快照筆數代表整季完整分母。新作與續播的當季用途均須盤點，首播季度、歌曲用途與發行日期分開記錄；固定長期範圍2007–2026與截止日2026-10-14維持。以下數字保留為歷史基線。啟動盤點的本機唯一用途為 3,965 筆；跨年作品在各年統計可能重複，不能相加。此數量是範圍基線，不代表欄位完成。第二批補入 3 筆、第六批補入 4 筆新用途後，當時範圍為 3,972 筆；第八批再補 5 筆後為 3,977 筆。第十批再補 2 筆後期用途後為 3,979 筆；第十一批補 3 筆後為 3,982 筆。最新全目錄為 28 季、1,917 動畫頁、4,246 筆用途；用途類型沿用第十一批；第十二批只深化既有用途。第十三批將一筆誤列 MV 合併並保留舊 ID 別名後，最新全目錄為 4,245 筆用途（4,243 OP／ED、2 IN），範圍內為 3,981 筆；第十四批補入 3 筆已公告後期用途後，本機最新為 4,248 筆（4,246 OP／ED、2 IN），2020–2026 為 3,984 筆；上述數量保留為歷史變更；最新差異及正式發布以頂部提交與最新批次驗收紀錄為準。

| 優先 | 工作 | 狀態與接點 |
| --- | --- | --- |
| 1 | 一次性最小格式與真實試行 | 2026-10-14 已完成，見下方 2026-summer-schema-pilot；後續直接沿用格式，不重新設計或搬移全量資料 |
| 2 | 當前收集接點 | 第128批本機資料與展示驗證完成、發布檢查待完成；第129批10部25筆已登記，未驗證內容不計完成 |
| 3 | 2025–2020基本資料 | 標準TV按年份／季度倒序補作品聯集與歌曲輪替；短篇／WEB延後，詳細深化待後續指令 |
| 4 | 較早年度 | 2019 → 2007保留長期待辦；2020–2026基本階段未完成前不擴張 |
| 5 | 詳細資料 | 已完成的創作、影片、音源、發行品及平台資料保留；未解觸發條件沿用，集中深化延後 |

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
| 執行狀態 | 基本資料階段執行中；第38批10部動畫、20筆OP／ED及1筆IN與展示已正式發布驗收，本輪交付完成。第39批未啟動，詳細深化延後；本階段及長期目標未完成，沒有背景排程 |
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

## 2026-10-16 批次：2025-fall-inventory-32

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


### 第32批正式發布驗收

[PR #121](https://github.com/kyeunga25/anisonary/pull/121)已正常rebase合併，保留5個階段提交。固定PR head `c9c055d` 的quality（38873244033）與Workers preview均成功，main CI（38873726142）成功；main Git tree與已審閱PR完全一致，部署前工作區乾淨。main提交依序為 `dfa8332`（前批回執）、`2f381df`（18筆OP／ED核心）、`3e2b207`（8筆插曲核心）、`4facec0`（同批深化／本機驗收）及 `88e89a5`（發布交接）。

Cloudflare Workers實際CLI部署成功，來源 `88e89a5f366a8f1f7b78a3516c6dacf64b8f997b`、標記 `batch32`；另以版本metadata確認標記及來源訊息。完整營運log、帳戶與資源識別未加入公開repository。

正式站獨立驗收：29季／1,971部完整API契約及跨endpoint關聯通過；40條HTML／JSON／季度／目錄／核心資產route與本機artifact雜湊一致，2條不存在route正確404。嚴格CSP、安全headers與API noindex／revalidation通過。10部／26筆桌面頁、4部393像素手機頁、143筆用途24／24／24／24／24／23分頁、57 OP／62 ED／24 IN篩選，以及UWCD-1143搜尋2首→Piece of my world→Battle Arrange與欄位證據展開通過；首頁及全部歌曲各24列。已目視手機長名與版本／發行品換行；0應用錯誤、觀察時0影片iframe，未聲稱完成網路攔截、影片播放或地區嵌入可用性驗證。

正式季度表更新至本批：2025秋119／119筆已逐批核對、101核心齊備／18缺口，另24 IN；其餘季度不變。全目錄29季／1,971部／4,390用途（4,355 OP／ED、32 IN、3 TS），1,051個不同YouTube歌曲watch外連及1,831筆metadata。746個唯一用途已處理（711 OP／ED、32 IN、3 TS），跨季不可相加；季度完整清單及長期目標仍未完成。第27–32批缺口按既有觸發條件保留。

正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>、<https://anisonary.k-y.cc/anime/tensei-akujo-no-kuro-rekishi/>、<https://anisonary.k-y.cc/anime/disney-twisted-wonderland-the-animation-episode-of-heartslabyul/>。

## 2026-10-16 批次：2025-fall-inventory-33（已發布驗收）

由第32批正式來源 `88e89a5` 接續。固定範圍2007–2026、截止日2026-10-14；目前優先2025→2007，每年秋→夏→春→冬，非成人TV／WEB OP／ED及已確認插曲。2026已完成成果保留，後續新作與劇場版／OVA延後。

第33批繼續2025秋未收錄TV／WEB、短篇、跨季續播及輪替，每批約10部／20–30筆。沿用已讀取季度、作品識別及第一方證據，排除已完成公開ID，再保存已證實核心及同批深化；兩輪未明欄位只按第27–32批觸發條件恢復。完成條件為已確認內容通過公開JSON、動畫頁歌曲／名單／版本／收錄／來源、緊湊歌單、必要檢查，分段提交／推送、正式部署及live驗收。本批、整季及長期目標均未完成。

### 第33批核心資料與季度關係

實際核對日期2026-10-16。本階段新增5部／7筆用途（3 OP／ED、1 IN、3 TS），補入5部既有作品的秋季續播關係，合計處理10部／15個既有或新增用途ID。以下只是核心合入階段，尚待同批深化、完整檢查、展示與正式發布驗收。

| 公開動畫ID | 本階段已確認內容 |
| --- | --- |
| `curated-187331` | 新增U.K.U／OP與上々↑ハイテンション／ED，兩曲詞曲編曲及演唱名義；首播25:05換算至翌日01:05 |
| `curated-194832` | 新增2025秋新作段落與既有主題曲ププッとフムッとかいけつダンス／OP，詞曲編曲及伊勢大貴演唱；2026新影像未冒充2025影片 |
| `curated-198926` | 新增Rebirth*ible／一般主題歌與アン・ドゥ・トロワ／插曲，逐曲詞曲編曲、角色及演唱名義 |
| `curated-198413` | 新增スーパー☆ハピハピ／一般主題歌，JOCHUM演唱、宝生 久弥之詞曲；未推定為JO1演唱 |
| `curated-199794` | 新增グッドらっこ／一般主題歌、角色演唱與詞曲；27:15換算至翌日03:15 |
| `curated-169420` | 第2クール OP2／ED2歸秋，OP1／ED1留夏；4個既有ID與來源日期保留 |
| `curated-188653` | 補秋季續播與ぷにぷにぷにるんず ぷにックスバージョン／OP的季度關係，保留既有更正與音源 |
| `curated-193238` | 補秋季續播與学校では教えてくれないこと／ED的季度關係，沿用已核對歌唱及創作 |
| `curated-193883` | 補秋季續播與怪獣島／OP的季度關係，保留既有創作缺口 |
| `curated-196229` | 補秋季續播與特装合体！ジョブレイバー／OP的季度關係，保留既有歌曲及影片 |

已處理公開用途ID（以同批深化後用途分類為準）：

| 公開用途ID | 歌曲與用途 |
| --- | --- |
| `sawaranaide-kotesashi-kun-op-1` | U.K.U／OP／UtaGe! |
| `sawaranaide-kotesashi-kun-ed-1` | 上々↑ハイテンション／ED／Palette Parade |
| `oshiri-tantei-9-part-2-op-1` | ププッとフムッとかいけつダンス／OP／伊勢大貴 |
| `chou-futsuu-mahou-shoujo-asumi-toruverse-ts-1` | Rebirth*ible／TS／浜城実都（CV：能登有沙）＆千城あすみ（CV：石原夏織） |
| `chou-futsuu-mahou-shoujo-asumi-toruverse-in-1` | アン・ドゥ・トロワ／IN／イツカ▶ |
| `jochum-season-2-ts-1` | スーパー☆ハピハピ／ED／JOCHUM |
| `anila-to-cocora-ts-1` | グッドらっこ／TS／アニラ（CV：森嶋秀太）＆ココラ（CV：仲村宗悟） |
| `watari-kun-no-xx-ga-houkai-sunzen-op-1` | ゆうれいになりたい／OP／『ユイカ』 |
| `watari-kun-no-xx-ga-houkai-sunzen-op-2` | ふたりぶん／OP／shallm |
| `watari-kun-no-xx-ga-houkai-sunzen-ed-1` | 愛愛愛愛愛／ED／PEDRO |
| `watari-kun-no-xx-ga-houkai-sunzen-ed-2` | 失敗しないメンヘラの育て方／ED／平手友梨奈 |
| `punirunes-puni-3-op-1` | ぷにぷにぷにるんず ぷにックスバージョン／OP／ななひら |
| `gakkou-de-wa-oshiete-kurenai-taisetsu-na-koto-ed-1` | 学校では教えてくれないこと／ED／OCHA NORMA |
| `chibi-godzilla-no-gyakushuu-3-op-1` | 怪獣島／OP／水曜日のカンパネラ |
| `tomica-heroes-jobraver-tokusou-gattai-robo-tv-op-1` | 特装合体！ジョブレイバー／OP／悠佑（fromいれいす） |

新增歌曲的核心第一方及交叉來源已保存。一般「主題歌」保留TS，不由staff中的OP／ED影像職位推定歌曲用途；插曲另以IN計。既有作品僅補季度證據，未重查或更新全部舊來源日期；作品metadata日期保持原有已核對值。既有ID、URL、用途序號、創作、影片、版本及收錄關係保持穩定。


### 第33批同批深化與本機驗收

核心階段由 `03e8d16` 保存並推送。本批實際新增5部／7筆用途；同批深化後分類為2 OP、2 ED、1 IN、2 TS，另外補5部續播作品的8筆既有用途季度關係，合計處理10部／15筆用途。新增7個歌曲ID，並為2筆加入欄位證據的既有歌曲補上穩定歌曲ID；這些是識別補齊，並非新增9首創作。7筆新用途中6筆具完整詞曲編曲，4筆新增OP／ED均具詞曲編曲及已確認YouTube歌曲watch外連。

- 新增13個音源ID：1 full、1 short、11 unknown；種類為5演唱、6角色、2伴奏。Rebirth*ible的雙人、実都、あすみ及inst版，依官方配信入口與Apple Music授權逐曲表保存；アン・ドゥ・トロワ另有創作者明示的inst版。おしりたんてい原曲與こどもコーラス演唱分開，8名明示成員保留團隊關係。JOCHUM創作者明示full／short不同，不由MV長度推定；short影片與特定short錄音的同一性仍未綁定。
- 新增12個發行品ID／逐用途關係：7 Single、1 EP、1 Album、3合輯。包括兩首小手指配信Single、Palette Parade的atelier三個CD版、2018おしりたんていmini album與3個Columbia Kids合輯、アスミ兩個配信發行及JOCHUM配信Single。只記本曲；合輯音源同一性及未證實曲序留空，沒有從相同演唱者推定使用同一master。
- 新增5個不同YouTube歌曲watch外連及1筆MV渠道／形式metadata（false／unknown）：小手指NC OP／ED、Palette Parade MV、おしりたんてい2026更新NC OP、JOCHUM short MV。おしりたんてい影片明標2026影像更新，沒有反推為2025視覺或新增錄音／2026用途；其他候選影片未僅憑標題或第三方嵌入升格官方。
- 新增58個其他正版平台確切項目，另5個人工官方配信入口；7個builder作品入口另計。包括角色版的Apple逐曲連結、Spotify／YouTube Music確切專輯或曲目，以及動畫音樂頁直接列出的商店與卡拉OK曲目。地區播放／購買與嵌入狀態均未推定。
- JOCHUM依製作方明示的YouTube archive ending，分類更正為ED並加「YouTube配信版 エンディング（シーズン2主題歌）」；原公開用途ID `jochum-season-2-ts-1`、歌曲ID與網址保留，不聲稱電視放送同樣有片尾。編曲由創作者本人逐曲公告補齊，11角色不推定為JO1本人逐曲演唱。
- 新增歌曲共33個不同來源URL、118組欄位證據；續播另保留季度證據。原有1,966部公開JSON逐項不變；5部既有作品只變更用途季度、來源／證據及2筆歌曲ID，metadata、歌曲ID／網址／序號及既有創作、影片、音源／發行資料保持。只有本批實際重讀的渡くん3個既有官方URL更新核對日期，其餘舊來源日期不變。

| 本批未解缺口 | 狀態與續查條件 |
| --- | --- |
| `anila-to-cocora-ts-1` | 曲名、一般主題歌、角色演唱與詞曲已核明；編曲、官方歌曲watch、full／TV及發行品未明。兩輪後待製作／藝人直接音樂公告、官方影片或正版逐曲商品表，不以劇伴職位代替編曲 |
| `chou-futsuu-mahou-shoujo-asumi-toruverse-ts-1`、`chou-futsuu-mahou-shoujo-asumi-toruverse-in-1` | 逐曲詞曲編曲、角色／歌唱、已命名版本與配信收錄已保存；尚無可核對渠道的歌曲watch，未以本編／PV或舊作嵌入替代。兩輪後待動畫／唱片／藝人直接MV、Art Track、NC或live公告；主題歌仍為TS，沒有從OP／ED影像staff推定用途 |
| `jochum-season-2-ts-1` | WEB片尾、創作者LCA、full／short及日本配信Single已核明；個別實際演唱者、full MV渠道證據、short錄音與影片對應仍待官方逐曲／影片直接公告。保留已證實short MV與官方配信YouTube Music項目，不公開未確認候選 |
| `sawaranaide-kotesashi-kun-op-1` | NC OP、詞曲編曲及Single已確認；藝人MV／live渠道的直接第一方對應尚待清楚公告，兩輪後保留缺口。兩曲full／TV及CD／數位master同一性不由MV或NC推定 |
| `chibi-godzilla-no-gyakushuu-3-op-1` | 補入已核對秋季續播，既有創作缺口按原批次觸發條件保留；沒有因跨季重新搜尋全部credits／影片 |
| 範圍與季度閉合 | 秋季67部／129 OP／ED、25 IN、2 TS仍是部分快照；未收錄短篇／WEB及跨季聯集尚未閉合。用途衝突且第一方證據不足的候選保留於非公開工作區，等待正式逐集credits或官方歌曲公告；不以候選建立已確認歌曲。2026新用途與劇場版／OVA延後，第27–32批舊缺口沿用原條件 |

本機檢查：初輪資料契約失敗後，補齊2筆既有歌曲ID及可追溯第一方用途證據；未改parser或測試。修正後4檔／6項測試、build（2,021 HTML／4,038公開產物）、Cloudflare dry-run通過。資料沿用現有季度、contract及UI，依矩陣不額外重跑本機E2E。1,966部未涉舊JSON、5部舊metadata／來源日期及既有創作／影片／版本／收錄差異檢查通過（僅3個實際重讀官方URL更新來源日期）。

展示驗證：10部／15筆桌面及5部393像素手機頁的歌曲、版本／收錄數量與JSON一致，無橫向溢出或錯誤覆蓋層。秋季156筆用途分頁24／24／24／24／24／24／12、63 OP／66 ED／25 IN／2 TS篩選通過；実都ver.搜尋只得1首→動畫2首全部歌曲→角色版本及欄位證據展開通過。渡くん夏季僅OP1／ED1，秋季僅OP2／ED2；首頁及全部歌曲各24列。已目視角色／CV與長版本換行，0應用錯誤、觀察時0影片iframe；沒有聲稱網路攔截、影片播放或地區嵌入可用性驗證。

全目錄本機29季／1,976部／4,397用途（4,359 OP／ED、33 IN、5 TS），1,056個不同YouTube歌曲watch外連、1,832筆metadata。2025秋129／129已核對、110核心齊備／19缺口，另25 IN／2 TS；2025夏因移出2筆秋季輪替，更正為141／171已核對、133核心齊備／8缺口。753個唯一用途已處理（715 OP／ED、33 IN、5 TS），跨季不可相加。頂部正式季度表仍以第32批為準，待本批正式部署與live驗收。

本機入口：`/seasons/2025-fall/`、`/anime/chou-futsuu-mahou-shoujo-asumi-toruverse/`、`/anime/jochum-season-2/`、`/anime/watari-kun-no-xx-ga-houkai-sunzen/`。正式發布驗收後接續第34批2025秋未收錄TV／WEB、短篇及跨季續播聯集；原夏季待辦保留，整季及長期目標均未完成。

文件相對連結、`git diff --check`、repository公開邊界241檔與新增行私隱／credential模式檢查通過；本批未加入收集腳本、原始頁面、log或帳戶資料。深化及本機驗收由 `2bc84d8` 保存；[PR #122](https://github.com/kyeunga25/anisonary/pull/122)已建立。下一步固定PR head的CI／Workers preview、正常合併、main CI、Git tree一致及乾淨工作區核對，再正式部署與live驗收；production仍以第32批為準。


### 第33批正式發布驗收

[PR #122](https://github.com/kyeunga25/anisonary/pull/122)已正常rebase合併，保留4個階段提交。固定PR head `42c1845` 的quality（38879823928）及Workers preview成功，main CI（38880198866）與main Workers建置成功；main Git tree與已審閱PR一致，部署前工作區乾淨。main提交依序為 `40b4d70`（第32批回執）、`154fd73`（歌曲核心與續播季度）、`17ae157`（深化及本機驗收）及 `51c17b9`（發布交接）。

Cloudflare實際CLI部署exit 0，來源 `51c17b95ea99cbe0c355aba12f1bbe79b610594d`、標記 `batch33`；另以版本metadata核對標記及來源訊息。完整log、帳戶與資源識別未公開。

正式站獨立驗收：29季／1,976部完整API契約及跨endpoint關聯通過；40條HTML／JSON／季度／目錄／核心資產route與本機artifact雜湊一致，2條不存在route正確404。嚴格CSP、安全headers與API noindex／revalidation通過。10部／15筆桌面及5部393像素手機頁歌曲、音源／收錄數量一致；156筆用途24／24／24／24／24／24／12分頁、63 OP／66 ED／25 IN／2 TS篩選、実都ver.搜尋1首→動畫2首→角色版欄位證據展開，以及渡くん夏OP1／ED1、秋OP2／ED2均通過。首頁與全部歌曲各24列；JOCHUM保留ts-1錨點及WEB片尾限定顯示，已目視手機full／short與發行品換行。無橫向溢出、0應用錯誤、觀察時0影片iframe；未聲稱網路攔截、播放或地區嵌入可用性驗證。

正式季度表更新至本批：2025秋129／129已逐批核對、110核心齊備／19缺口，另25 IN／2 TS；夏因移出2筆秋季輪替，更正為141／171、133核心齊備／8缺口。其他季度不變。全目錄29季／1,976部／4,397用途（4,359 OP／ED、33 IN、5 TS），1,056個不同YouTube歌曲watch外連、1,832筆metadata。753個唯一用途已處理（715 OP／ED、33 IN、5 TS），跨季不可相加；整季與長期範圍未完成，第27–33批缺口按各表觸發條件保留。

正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>、<https://anisonary.k-y.cc/anime/chou-futsuu-mahou-shoujo-asumi-toruverse/>、<https://anisonary.k-y.cc/anime/jochum-season-2/>。

## 2026-10-16 批次：2025-fall-inventory-34（已發布驗收）

由第33批正式來源 `51c17b9` 接續。固定範圍2007–2026、公開資料截止日2026-10-14；目前優先2025→2007，每年秋→夏→春→冬，非成人TV／WEB OP／ED及已確認插曲。2026已完成成果保留，後續新作及劇場版／OVA延後。

繼續2025秋尚未收錄TV／WEB、短篇、跨季續播與輪替聯集，每批約10部／20–30筆；先保存已證實身分、演唱、用途及來源，再深化同批credits、官方影片、命名版本、收錄與平台。沿用有效證據，兩輪未明只按第27–33批觸發條件續查，未審閱候選不公開。完成條件為公開JSON、動畫全部歌曲頁、緊湊歌單、必要檢查、分段提交／推送與正式部署及live驗收。本批尚未新增／修改歌曲資料；整季與長期目標均未完成。


### 暫停接點

第33批已完成分段提交、GitHub正常合併、Cloudflare正式部署及live驗收；正式來源維持 `51c17b9`／`batch33`。收集執行狀態已暫停，第34批尚無新來源收集或歌曲資料修改。下一接點仍為 `2025-fall-inventory-34`，明確恢復後才繼續2025秋未收錄TV／WEB、短篇、跨季續播與輪替聯集；原夏季及更舊年份待辦、固定範圍／截止日與第27–33批續查條件均保留。

暫停時只更新本接點，不啟動新收集、資料修改、檢查或部署。第33批檢查與正式站證據沿用上方已完成結果；本次停止狀態文件更新未另重跑檢查，不影響已驗收的歌曲產物。未安排背景或排程恢復。


### 第34批恢復與本輪範圍

2026-10-16由第33批可靠產物恢復，本輪優先2025秋並依夏／春／冬接續；固定長期範圍與截止日維持，其他年份本輪不新增收集。沿用既有新格式、已核對來源及兩輪續查條件，以約10部／20–30用途為整理單位，先完成已確認資料及同批深化、本機檢查與展示，再分類提交、推送與正式部署及live驗收。開始時工作區乾淨，第34批歌曲尚未修改；本段僅登記執行位置。


### 第34批已確認資料（本機建置通過，展示與發布待驗收）

本批實際核對日期2026-10-16；優先2025秋並補同曲既有用途及全年續播。新增9部作品，其中6部已建立6筆歌曲用途，另3部僅公開已確認的作品／播出資料，歌曲仍待補充；為2部既有春季作品新增2筆同曲用途，深化1部既有作品的3筆OP／ED，共12部／11筆已確認用途。新增用途共8筆（2 OP、2 ED、4 TS），涉及6首不同歌曲；另3筆既有用途補穩定歌曲ID，不是新增3首創作。沿用既有格式，未修改parser、UI、測試、依賴或部署設定。

| 公開用途ID | 已確認歌曲與本批差異 |
| --- | --- |
| `ganso-bandori-chan-ts-1` | 元祖！バンドリちゃんのテーマ／TS；完整詞曲編曲、10名角色演唱、9個可追溯CV、配信Single與平台；一般主題歌未推定OP／ED |
| `shibuya-hachi-part-4-op-1` | Brand New Episode／OP；詞曲編曲、HACHI、官方MV、Single及Revealia兩個CD版 |
| `2200-nen-neko-no-kuni-nippon-ed-1` | 琥珀色のロンリネス／ED；配信方明示ED、藝人詞曲及PARKGOLF編曲、MV與配信Single |
| `koala-enikki-ed-1` | 虹と／2025秋ED；詞曲編曲、原始Single及3個已命名重新編曲版；後來的Piano Art Track明標2026，未新增2026動畫用途 |
| `ugoku-neko-mukashi-banashi-ts-1` | 夢中猫／TS；作詞作曲、官方lyric／MV外連、Single、世界EP、世界が変わる時兩個CD版及另記2026 live |
| `petitcure-precure-fairies-season-2-ts-1` | ♥DANZEN！kawaii！ ぷちきゅあ♥／TS；詞曲編曲、Single、主題歌Album、アイキャッチ與伴奏版 |
| `shibuya-hachi-part-3-op-1` | 補第3クール既有空白歌曲；與第4クール共用歌曲／音源／發行品識別，保留各自用途 |
| `petitcure-precure-fairies-ts-1` | 補2025春既有空白歌曲；與シーズン2共用歌曲／版本／發行品識別 |
| `kimi-to-idol-precure-op-1` | キミとアイドルプリキュア♪ Light Up！／OP；詞曲編曲、TV／兩種伴奏、兩個Single版與ボーカルベスト；補2025全年用途季度 |
| `kimi-to-idol-precure-ed-1` | Trio Dreams／前期ED；詞曲編曲、TV／兩種伴奏、歌手ReMix及商品；保留2025冬／春用途 |
| `kimi-to-idol-precure-ed-2` | キミとルララ／後期ED；詞曲編曲、TV／兩種伴奏、歌手ReMix及商品；由誤歸首播冬季改為2025夏／秋 |

作品身分／播出盤點另包括 `curated-204621`（湖池屋SDGs劇場 サスとテナ シーズン6）、`curated-198921`（シルバニアファミリー フレアのワンダーデイズ）、`curated-199008`（うそ探偵トマント ベジフル“プチっ”と情報編）。這3部未建立未確認歌曲，頁面顯示資料尚待補充，不宣稱不設歌曲或歌曲齊備。トマント明標TRAIN TV先行及官方WEB見逃し，未冒充2025地面TV新番；2026 ZIP!更新版另計。

實際深化：26個不同音源ID（3 TV、23長度unknown；8 vocal、5 character、7 instrumental、3 rearrangement、2 remix、1 live），21個發行品ID（13 Single、6 Album、2 EP）及30組逐用途收錄關係。新核明5個不同YouTube歌曲watch，加3個沿用舊官方證據的watch外連，新增5筆影片metadata；另33個不同數位正版項目、8個實體商品頁及8個人工官方入口。已核對10／11筆具完整詞曲編曲；7筆本批處理OP／ED均有詞曲編曲及已確認歌曲watch，這個指標包含虹と已命名Piano版，原始2025音源的watch仍保留缺口。

1,973部未涉舊公開JSON逐項不變。3部既有作品的metadata、圖像、動畫來源日期、舊用途ID／網址／序號及原有影片metadata保持；只補歌曲／創作／版本／收錄／來源與用途季度。3條舊プリキュア官方影片證據沿用原核對日期，沒有重抓YouTube HTML或更新全部舊來源。MV／NC／lyric不自動推定full或新錄音；同名CD、配信與合輯音源沒有擅自綁為同一master。

| 未解缺口 | 本批處理與續查條件 |
| --- | --- |
| 元祖！バンドリちゃん、ぷちきゅあ兩季 | 詞曲編曲及已確認演唱／收錄已公開；兩輪後仍無可追溯渠道的獨立歌曲watch，不以本篇、PV或非官方轉載替代。待官方直接歌曲影片／Art Track公告；仲町あられ逐曲CV也待商品或藝人明示，未由一般cast推定 |
| 虹と | 已命名Swing／Piano／優しい夏版及日期有官方音樂頁證據；原始2025音源watch尚待官方直接項目，Piano版不冒充原版。夏版官方與平台表記不同，未綁定未核明的影片／master；其他平台、full／TV仍待確切項目 |
| 夢中猫 | 作詞作曲已確認；編曲兩輪仍缺可保存的第一方／允許交叉證據，不從其他歌曲或劇伴推定。待藝人、唱片或授權逐曲credits；live有官方Blu-ray曲目支持，未把MV或studio／live候選當成新歌曲 |
| 3部僅作品盤點 | 個別歌曲名稱、演唱、用途或分季沿用關係未達公開條件，兩輪後待官方音樂公告、逐集credits或授權逐曲商品表。一般配樂／テーマ曲人員不填進未具名歌曲欄位；シルバニア未沿用劇場版歌曲 |
| 前後期季度證據 | プリキュア官方歌曲／商品／2025秋播出資料已確認；7月更換ED的製作者訪談目前只保留公開索引，原站期滿撤文，來源標籤如實說明。待官方季別／逐集資料補強，不宣稱所有當年插曲均已盤點 |
| 範圍與舊缺口 | 秋季TV／WEB與續播聯集仍未閉合；未處理WEB、常年作品及輪替留待第35批。第27–33批兩輪缺口僅按原條件續查，劇場版／OVA及新2026用途延後；整季及長期目標未完成 |

本機檢查：初輪契約檢查找出共用歌曲ID未同步到欄位證據，以及1條HTTP商店連結；修正資料並撤下未驗證HTTPS的外連後，4檔／6項測試通過。最後修正來源語言標籤並拆開已明示的プリキュア個別演唱者，再次通過4檔／6項測試及build（2,030 HTML／4,056公開產物）；repository公開邊界241檔通過。沿用既有季度、contract及UI，依矩陣不額外重跑本機E2E。資料與展示更新完成後才分類提交、推送及部署，正式發布驗收前production仍為第33批。


第34批展示驗證：12部／11筆歌曲桌面頁與公開JSON的歌曲、音源、發行品數量一致；3部空白音樂頁正確提示資料尚待補充。5部393像素手機頁無橫向溢出或錯誤覆蓋層，已目視虹と四個版本與商品換行。秋季164筆用途24／24／24／24／24／24／20分頁、65 OP／69 ED／25 IN／5 TS篩選通過。MJSS-09395搜尋1首→動畫全部3首→ED2欄位證據19項展開通過；プリキュア冬／春只列OP1+ED1，夏／秋只列OP1+ED2。首頁及全部歌曲各24列；0應用錯誤、觀察時0影片iframe，沒有聲稱網路攔截、播放或地區嵌入可用性驗證。

本機全目錄29季／1,985部／4,405用途（4,363 OP／ED、33 IN、9 TS），1,064個不同YouTube歌曲watch及1,837筆metadata。2025秋134／134已核對、115核心齊備／19缺口；夏143／173、135／8；春3／156、3／0；冬2／135、2／0。未核對數分別0、30、153、133；秋季仍是部分快照，不能把134筆當整季完整分母。764個唯一用途已處理（722 OP／ED、33 IN、9 TS），跨季不可相加。頂部正式表仍以第33批為準，待正式部署與live驗收更新。

接續第35批：繼續2025秋未收錄WEB、短篇及常年續播／輪替聯集，優先可由官方一次補多項事實的作品；秋季首輪清單閉合後回接夏季未處理30筆，再春／冬。已處理公開ID依本表排除，已查兩輪缺口按觸發條件保留；不為重新開批重查全部舊來源。當前資料及展示完成，發布檢查與正式驗收仍待執行。

Cloudflare dry-run實際exit 0及成功marker已核對。文件相對連結、`git diff --check`、241檔repository公開邊界及新增行私隱／credential模式檢查通過；本批只改6個資料檔及本checkpoint，未加入原始頁面、收集腳本、測試輸出、log、帳戶或秘密資料。本機資料及展示驗收完成，下一步分類提交及單次推送、固定PR head CI／Workers preview，再正常合併／正式部署與live驗收。

資料提交 `710fc1e` 已保存第34批全部已驗證歌曲／作品／用途／版本／收錄及影片資料；收集與展示更新完成後才建立此提交。以下發布階段不啟動第35批收集，先驗收本批正式版本。


### 第34批正式發布驗收（2026-10-17）

[PR #123](https://github.com/kyeunga25/anisonary/pull/123)已正常rebase合併，保留4個分類提交：`eab9de4`（第33批回執）、`6473683`（歷史暫停接點）、`fba395e`（第34批全部資料）及 `ca7d847`（本機驗收與缺口）。本批資料與展示完成後才建立資料／驗收提交，沒有在收集中途推送半成品。固定PR head `f32d43a` 的quality（38908370332）及Workers preview成功；main quality（38908905360）及Workers建置成功，main Git tree與已驗收PR相同，部署前工作區乾淨。

Cloudflare實際CLI部署exit 0，來源 `ca7d84780a8eabfc02f819d97947f3e24eaf92aa`、標記 `batch34`；另由版本metadata確認標記及來源訊息。完整log、憑證、帳戶及資源識別未加入repository。

正式站獨立驗收：29季／1,985部完整API契約及跨endpoint關聯通過；48條HTML／JSON／2025四季／核心資產route與本機artifact雜湊相同，2條不存在route正確404。嚴格CSP、安全headers與API noindex／revalidation通過。12部／11筆用途桌面與5部393像素手機頁的歌曲、版本、發行品數量一致；3部空白音樂頁正確顯示資料尚待補充。164筆用途24／24／24／24／24／24／20分頁、65 OP／69 ED／25 IN／5 TS篩選，以及MJSS-09395搜尋1首→動畫全部3首→19項欄位證據展開通過。プリキュア冬／春只列OP1+ED1，夏／秋只列OP1+ED2；首頁及全部歌曲各24列。已目視手機TV／兩種伴奏／歌手ReMix及商品換行，無橫向溢出、0應用錯誤、觀察時0影片iframe；未宣稱網路攔截、播放或地區嵌入可用性驗證。

正式季度表更新至本批：2025秋134／134已核對、115核心齊備／19缺口，另25 IN／5 TS；夏143／173、135／8；春3／156、3／0；冬2／135、2／0。其餘季度不變。前後期更正使冬移出1筆、春補3筆、夏補2筆、秋補5筆OP／ED季度關係，季度不可相加。全目錄29季／1,985部／4,405用途（4,363 OP／ED、33 IN、9 TS），1,064個不同YouTube歌曲watch、1,837筆metadata。764個唯一用途已處理（722 OP／ED、33 IN、9 TS）。秋季作品聯集及全年仍未閉合，第27–34批缺口按各表條件保留，不稱整季或長期目標完成。

正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>、<https://anisonary.k-y.cc/anime/koala-enikki/>、<https://anisonary.k-y.cc/anime/kimi-to-idol-precure/>、<https://anisonary.k-y.cc/anime/ganso-bandori-chan/>。

## 2026-10-17 批次：2025-tv-inventory-35（執行中）

可靠接點為第34批正式來源 `ca7d847`／`batch34`；開始時工作區乾淨。固定長期範圍2007–2026及公開資料截止日2026-10-14維持，本批實際查閱日期另記2026-10-17。

本階段優先2025秋→夏→春→冬的標準季度TV，約24分鐘、通常12／24集或分割季度；13／26集及同類長篇續播仍納入。特殊番、短WEB、泡麵番與短篇TV延後，已發布成果、穩定ID與網址保留。未完成短篇／WEB聯集不阻擋較舊季度標準TV；2026新批次與劇場版／OVA仍延後。全類別整季齊備與優先TV階段完成分開判定。

先核對秋季標準TV續播／輪替的真正缺口，再接夏季未逐批核對用途中的標準TV，之後春／冬。每批約10部或20–30用途，輪替較多可減少作品數；核心身分、演唱及用途先行，同頁補創作、官方影片、命名音源、收錄與正版平台。排除已處理ID，兩輪未明僅按觸發條件續查。

完成條件：資料經公開JSON、動畫全部歌曲頁與緊湊歌單呈現，必要檢查及實際展示驗證完成，再分類提交、推送、正常合併、Cloudflare正式部署及live驗收；驗收後接下一批。季度表維持全部公開OP／ED用途口徑，未經格式來源與作品聯集核對，不虛構標準TV完整分母。下一批、本年度及長期目標均未完成，沒有背景或排程收集。


### 第35批已確認資料（本機建置通過，展示與發布待驗收）

本批為兩部標準長度的跨季TV作品，共處理20筆用途（5 OP、12 ED、3 IN）：既有15筆深化與季度更正，新增5筆（《アイプリ》後期OP／ED及《プリオケ》3首戰鬥插曲），沒有新增作品。輪替及角色版較多，本批按用途數整理，沒有為湊作品數加入短篇。既有公開用途ID、序號、網址及兩部metadata／動畫來源日期保留，其他1,983部公開JSON逐項不變。

《プリオケ》音樂頁的「劇中曲／戦闘曲」與特定集數ED並存，未僅按分類把ED改成IN。前期OP／ED確認春、夏並延續至秋季第25話；三人後期版及五人Ver. Constellation移到實際秋季，後者另延續2026冬。既有第39／40／42／44話特殊ED移至2026冬，不再誤列2025春；這是既有資料更正，沒有啟動新2026作品批次。第5／13／23話特殊ED保留實際用途及交叉核對說明。3首戰鬥插曲的原角色歌唱確認春、夏及2026冬；2025秋第27話另歌唱版本未併入原角色音源。

《アイプリ》前期OP／ED補春、夏續播；後期「どきどき きらめき バズリウム」及「シンデレラのラララ♡」新增為秋季OP2／ED2，保留真正演唱名義及詞曲編曲。

| 公開用途ID | 已確認歌曲與本批差異 |
| --- | --- |
| `himitsu-no-aipri-ring-hen-op-1` | Ring Ring Ring feat. ひまり；前期 OP；2025-spring、2025-summer；創作／角色演唱、已確認音源及收錄／平台補充 |
| `himitsu-no-aipri-ring-hen-op-2` | どきどき きらめき バズリウム；後期 OP；2025-fall；創作／角色演唱、已確認音源及收錄／平台補充 |
| `himitsu-no-aipri-ring-hen-ed-1` | ひみつのふふふ；前期 ED；2025-spring、2025-summer；創作／角色演唱、已確認音源及收錄／平台補充 |
| `himitsu-no-aipri-ring-hen-ed-2` | シンデレラのラララ♡；2025年10月からの後期 ED；2025-fall；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-op-1` | ゼッタイ歌姫宣言ッ！；前期 OP（第1話 ED 使用も交叉核對）；2025-spring、2025-summer、2025-fall；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-op-2` | FUTURE SESSION；後期 OP（三人歌唱）；2025-fall；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-op-3` | FUTURE SESSION -Ver. Constellation-；第36話以降 OP（五人歌唱）；2025-fall、2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-1` | 君とつなぐオーケストラ；前期 ED；2025-spring、2025-summer、2025-fall；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-2` | 人生は流星だ☆彡；第5話 特殊 ED（使用集數交叉核對）；2025-spring；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-3` | 使命は赤きセレナーデ；第13話 特殊 ED；2025-summer；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-4` | 真紅の荊；第23話 特殊 ED（使用集數交叉核對）；2025-summer；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-5` | ONENESS HARMONY；後期 ED（三人歌唱）；2025-fall；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-6` | ONENESS HARMONY -Ver. Constellation-；後期 ED（五人歌唱）；2025-fall、2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-7` | QUINTET PULSE；第39話 特殊 ED（使用集數交叉核對）；2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-8` | Future Never Ends；第40話 特殊 ED（使用集數交叉核對）；2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-9` | LEGENDARY REVIVAL；第42話 特殊 ED（使用集數交叉核對）；2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-ed-10` | Luminous Bloom；第44話 特殊 ED（使用集數交叉核對）；2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-in-1` | イノセントコール；戦闘曲（2025秋の別歌唱は別途確認待ち）；2025-spring、2025-summer、2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-in-2` | OVER THE BLAZE；戦闘曲（2025秋の別歌唱は別途確認待ち）；2025-spring、2025-summer、2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |
| `princess-session-orchestra-in-3` | 激光 It's ME!；戦闘曲（2025秋の別歌唱は別途確認待ち）；2025-spring、2025-summer、2026-winter；創作／角色演唱、已確認音源及收錄／平台補充 |

新增18個歌曲ID、30個不同音源ID（20演唱／角色及10伴奏，全部長度unknown），40個不同發行品ID（34 Single、4 EP、2 Album）及56組逐用途收錄關係。FUTURE SESSION及ONENESS HARMONY的三人／五人演唱共用各自歌曲ID，音源分開；沒有因MV／動畫映像或商品edition增加新歌曲。Album與Single或數位master同一性未知時不綁音源，未由影片長度推定full／TV。

補15個不同官方YouTube歌曲watch外連，包括OP／ED動畫映像、5人版無字幕、特殊ED、3個Lyric及1個avex Art Track；其中1筆新增Art Track渠道／形式metadata，嵌入false／unknown。其餘官方頁直接外連仍可公開，沒有推造個別渠道metadata。41個其他正版確切項目由官方配信入口取得，保留Apple Music、Spotify及YouTube Music的確切曲目／專輯；人工商品入口與builder作品官網另計。OP2配信入口中無確切Spotify ID及空白YouTube Music清單已排除，沒有把服務首頁當曲目。

同頁完成的收錄包括5個プリオケCD Single、PRINCESS RESONANCE及SAVE THE WORLD、配信Single、超ときめき♡宣伝部前期Single的11個CD edition及後期Single真正含本曲的9個edition。後期辻野かなみ／坂井仁香盤收錄其他B-side，未誤加本曲；不同edition的伴奏曲序6／7及前期TYPE-B的曲序差異各自保存。既有15筆不增加新用途，只補關係；61個來源URL及311組欄位證據可追溯。

| 未解缺口 | 本批處理與續查條件 |
| --- | --- |
| `princess-session-orchestra-ed-3` | 曲名、四名角色演唱、第13話ED、官方無字幕影片及收錄已確認。MUSIC頁將作曲／編曲列菊田大介，唱片公司2025公告及Album逐曲表列笠井雄太；兩欄暫留空，不以多數來源投票。待官方更正、實體booklet或創作者逐曲說明釐清 |
| `princess-session-orchestra-ed-2`、`princess-session-orchestra-ed-4` | 詞曲編曲／角色／Single或Album已公開，官方歌曲watch渠道仍未核明；特殊ED集數沿用已重核索引並標明交叉核對。兩輪後待製作／唱片方直接歌曲影片或逐集credits，不把第三方轉載、一般cast或PV替代為證據 |
| `princess-session-orchestra-ed-7`、`princess-session-orchestra-ed-8`、`princess-session-orchestra-ed-9`、`princess-session-orchestra-ed-10` | 已更正2026冬用途並保存創作、角色與確切配信／Album；歌曲watch缺口保留，未繼續追查較低優先的2026影片。待官方音樂頁直接影片或新渠道證據；使用集數仍有交叉核對層次的限制 |
| プリオケ版本及其餘插曲 | 本批補已確認3首戰鬥曲；官方目錄其餘劇中曲、First Blood、第27話陽ノ下なつ演唱及角色歌仍未完成逐首用途／季度與音源盤點。已確認名稱保留為續查方向；須以官方逐曲演唱／使用證據接通，不由發行日推播出季度，也不把角色版新錄音當新創作 |
| アイプリ版本及其他平台 | 前後期OP／ED創作與官方watch均齊備，full／TV、配信第2軌、插曲與完整團隊仍待明示曲目／用途。Ring編Music Collection未證實收錄4首OP／ED，本批未硬綁；OP2確切Spotify／YouTube Music等待官方修復入口 |
| 季度聯集與延後種類 | 標準TV續播與漏曲清單仍未閉合，下一批回接夏季尚未處理的標準TV，之後春／冬；不以短篇／WEB缺口阻擋。舊第27–34批兩輪缺口按原觸發條件保留，未重新輪搜。完整年度及長期目標仍未完成 |

本機檢查：4檔／6項測試通過，build產出2,030 HTML／4,056公開產物，repository公開邊界241檔通過。兩部資料經實際ApiProvider解析通過；15筆舊用途ID及作品metadata／來源日期保持，其他1,983部JSON逐項不變。沿用既有季度、contract與播放器；移除的legacy覆寫已完整移入本批seed，未改runtime合併邏輯或測試。展示中將動畫頁及歌單的計數由「首歌曲」更正為「筆歌曲用途」，避免把不同用途／角色版列數當成唯一歌曲數；此文案修改後另建置並執行既有E2E。展示、發布dry-run及正式驗收尚待完成，production仍以第34批為準。


第35批收尾更正：4個數位發行依授權商品頁明示為EP，與同名實體Single分開；「激光 It's ME!」數位EP在兩個用途下統一實際發行藝人名義。其餘已驗證來源不重查；這次因跨用途發行品一致性檢查才定向補核5個授權商品頁。歌曲用途及來源維持可追溯，沒有把人物同CV視為相同演唱角色。


### 第35批本機展示及發布檢查

桌面兩部共20筆用途、30個音源及56組收錄的頁面數量與JSON一致；393像素兩部手機頁無橫向溢出或錯誤覆蓋層，已目視五人版長標題、角色／CV換行。秋季172筆用途以24／24／24／24／24／24／24／4分頁，69 OP／73 ED／25 IN／5 TS篩選通過。プリオケ在春／夏／秋／2026冬分別只顯示6／7／6／9筆該季用途，不將所有後期ED混入春季。AVCD-61570搜尋1筆→アイプリ全部4筆→後期ED的9個含本曲edition及31項欄位證據展開通過；首頁及全部歌曲各24列。計數文案已顯示「筆歌曲用途」。0應用錯誤、觀察時0影片iframe；沒有宣稱播放、地區嵌入或網路攔截驗證。

既有E2E初次受macOS沙箱阻止Chromium啟動，尚未進入測試本體；在允許的執行環境重跑後6項全部通過（含完整API、主要閱讀／搜尋、離線、同意邊界及API失敗流程）。未修改測試或降低gate。收尾發行品一致性檢查修正4個數位EP分類及共用發行藝人後，4檔／6項單元測試與最終build再次通過（2,030 HTML／4,056公開產物）；40個共用發行品核心欄位一致性核對通過。只重跑因修改或環境失敗而必要的檢查。

本機季度進度：2025秋142／142已核對、123核心齊備／19缺口；夏149／179、139／10；春8／146、7／1；冬2／135、2／0。2026冬因更正既有跨年用途，為137／137、106／31；夏／春不變。784個唯一用途已處理（739 OP／ED、36 IN、9 TS），季度不能相加。全目錄29季／1,985部／4,410用途（4,365 OP／ED、36 IN、9 TS），1,079個不同YouTube歌曲watch、1,838筆metadata。完整季度分母及標準TV作品聯集仍未知，表格不代表全年齊備；頂部正式季度表待發布驗收後更新。

資料與展示完成後才進入分類提交／推送及發布。下一批優先夏季尚未核對的標準季度TV，再春／冬；短篇／短WEB待辦與第27–35批兩輪缺口保留續查條件，不因開新批重新輪搜。正式部署前維持第34批 production來源。


第35批最終Cloudflare dry-run實際exit 0並包含成功marker；文件相對連結、`git diff --check`、241檔repository公開邊界及新增行私隱／credential模式檢查通過。所有收集腳本、事實工作筆記、測試／部署log及帳戶資料留在非公開工作區，沒有加入repository。正式發布仍待固定PR head、CI、正常合併及live驗收。


### 第35批正式發布驗收（2026-10-17）

[PR #124](https://github.com/kyeunga25/anisonary/pull/124)已正常rebase合併，保留5個分類提交：`b3db4e4`（第34批回執）、`0a9af83`（標準季度TV優先策略）、`55e01e7`（第35批資料與季度）、`30b621e`（用途計數文案）、`467b5f9`（本機驗收與缺口）。固定PR head `cafc70b` 的quality（39044818440）與Workers preview成功；main CI（39045055755）及Workers建置成功，main Git tree與已驗收PR完全相同，部署前工作區乾淨。

Cloudflare實際CLI部署exit 0，來源 `467b5f90434e636bca61f16ebbcff54a9bada0ee`、標記 `batch35`；另由版本metadata核對來源及標記，未公開完整log、憑證、帳戶或資源識別。

正式站獨立驗收：29季／1,985部完整API契約及跨endpoint關聯通過；29條HTML／JSON／季度／核心資產route與本機artifact雜湊相同，2條不存在route正確404。嚴格CSP、安全headers及API noindex／revalidation通過。兩部20筆用途、30個音源與56組收錄桌面展示一致；393像素兩部手機頁沒有橫向溢出或錯誤覆蓋層。秋季172筆總數及69 OP／73 ED／25 IN／5 TS篩選、AVCD-61570搜尋1筆→アイプリ全部4筆→31項欄位證據展開均通過。用途計數文案與數位EP／CD區分已在正式站確認；0應用錯誤、觀察時0影片iframe，未聲稱播放或地區嵌入可用性驗證。本機已完成的完整分頁、四季用途歸類及E2E證據保留在上節，未冒充額外live測試。

正式季度表更新至本批：2025秋142／142、123核心齊備／19缺口；夏149／179、139／10；春8／146、7／1；冬2／135、2／0。2026冬137／137、106／31；其餘季度不變。784個唯一用途已處理（739 OP／ED、36 IN、9 TS），跨季不可相加；全目錄29季／1,985部／4,410用途（4,365 OP／ED、36 IN、9 TS）、1,079個不同YouTube歌曲watch與1,838筆metadata。現有快照、優先TV階段與全類別完整季度分母分開，2025及長期目標未完成。

正式入口：<https://anisonary.k-y.cc/seasons/2025-fall/>、<https://anisonary.k-y.cc/anime/himitsu-no-aipri-ring-hen/>、<https://anisonary.k-y.cc/anime/princess-session-orchestra/>。

## 2026-10-17 批次：2025-tv-inventory-36（資料與正式發布驗收完成；年度及長期目標未完成）

可靠接點為第35批正式來源 `467b5f9`／`batch35`。下一批優先2025夏尚未逐批核對的標準季度TV，再春／冬；秋季有新第一方證據或明確錯誤才定向插隊，短篇／短WEB／泡麵番及特殊番保留待辦。固定2007–2026、資料截止日2026-10-14、來源實際查閱日期及已完成成果均維持。資料與展示、必要檢查完成後再分類提交、推送、正常合併、部署及live驗收，然後接續後批；不把單批完成當年度或長期目標完成，未安排背景或排程收集。


第36批開始時工作區只有已推送的第35批正式回執，沒有既有未提交資料修改。先從夏季已公開、尚未逐批核對的標準TV歌曲接續；確認核心身分、用途及演唱後深化同批，不因可選欄位缺失阻擋其他歌曲。


### 第36批資料與未解欄位（本機驗收中）

本批選取2025夏季尚未逐批核對的7部標準長度TV、15筆既有用途（7 OP、8 ED），沒有新增動畫或用途。包括New PANTY & STOCKING、第七王子第2期、帝乃三姉妹、Dr.STONE第2クール、SAKAMOTO DAYS第2クール、うたごえはミルフィーユ、怪獣8号第2期；うたミル為每集正常長度的10集TV，沒有因集數接近但不是12集而視為泡麵番。現有夏季快照的其他WEB／短篇／特殊範圍待辦延後，下一批轉春季標準TV；未完成整季作品聯集，不宣稱夏季所有TV歌曲已齊備。

| 公開用途ID | 本批實際更新 |
| --- | --- |
| `new-panty-and-stocking-with-garterbelt-op-1` | Theme of New PANTY ＆ STOCKING／TeddyLoid & ☆Taku Takahashi with Ashley & E.V.P；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `new-panty-and-stocking-with-garterbelt-ed-1` | Reckless／m-flo loves Adee A.；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `utagoe-wa-mille-feuille-op-1` | 思い出話／手鞠沢高校アカペラ部；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `tensei-shitara-dai-nana-ouji-datta-node-kimamani-majutsu-wo-kiwamemasu-2nd-season-op-1` | CALLING†／樋口楓；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `tensei-shitara-dai-nana-ouji-datta-node-kimamani-majutsu-wo-kiwamemasu-2nd-season-ed-1` | Meteor／岬なこ；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `kaijuu-8-gou-2nd-season-op-1` | You Can’t Run From Yourself／AURORA；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `kaijuu-8-gou-2nd-season-ed-1` | Beautiful Colors／OneRepublic；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `mikadono-sanshimai-wa-angai-choroi-op-1` | 君にふさわしい奇跡／日曜日のメゾンデ；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `mikadono-sanshimai-wa-angai-choroi-ed-1` | 曖昧グラフィティ／帝乃一輝（CV.天海由梨奈）；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `mikadono-sanshimai-wa-angai-choroi-ed-2` | One Road／帝乃二琥（CV.古賀葵）；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `mikadono-sanshimai-wa-angai-choroi-ed-3` | Sunrise Prism／帝乃三和（CV.青山吉能）；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `sakamoto-days-part-2-op-1` | Method／Kroi；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `sakamoto-days-part-2-ed-1` | ダンデライオン／go!go!vanillas；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `dr-stone-science-future-part-2-op-1` | SUPERNOVA／KANA-BOON；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |
| `dr-stone-science-future-part-2-ed-1` | no man's world／音羽-otoha-；沿用已核對核心，補歌曲ID、音源、發行／平台與欄位證據 |

15個既有歌曲用途接入15個歌曲ID，沒有把影片、edition或版本當成新創作。新增26個不同音源ID（15演唱、3角色演唱、7伴奏、1Piano重新編曲），其中只有SUPERNOVA (Anime Size)明示TV分類；其餘25個長度unknown。Long Version保留名稱，未自動當full；「思い出話（No Lead Vocal）」仍有人聲分類，沒有當作Instrumental。

新增31個不同發行品ID（22 Single、6 EP／Mini Album、3 OST）及38組逐用途收錄。包括New PSG的CD Single／Digital EP及兩版2CD OST／數位OST，第七王子OP兩版／ED三版Single，帝乃三姉妹角色Mini Album，SUPERNOVA限定Single與獨立數位Single，platinum anthem CD EP及先行數位Single，Method三版Single，SCARY MONSTERS EP三版及ダンデライオン數位Single，思い出話兩版Single及數位發行，怪獣8号兩首數位Single。不同媒介的錄音同一性未知時曲目不綁recordingId；CD、數位與歌曲首發日期分開。New PSG OP首發日未證實，不以8月6日CD／EP日期代替。

Reckless依FlyingDog及唱片曲目表，將原先未獲對應來源支持的個人詞曲細分更正為m-flo；實際演唱Adee A.、VERBAL及已確認編曲保留。うたミル補6位成員與角色／CV對應，只以明示歌曲團隊名單登記。其餘既有詞曲、歌曲名義及有效交叉證據重用；沒有重查全部舊來源。

補3個不同官方歌曲watch外連（均已有對應影片metadata，本批未增加metadata數），另47個Apple Music、Spotify、YouTube Music、mora及レコチョク確切曲目／專輯項目；官方商品／配信入口及builder作品官網不混入47項。官方頁直接提供的ID才保存，沒有由PV、播放時長或專輯名稱推定新錄音。40個來源URL本批實際查閱或補證、205組欄位證據；沿用未重查來源及其欄位證據日期維持舊值。

| 未解缺口 | 本批處理及續查條件 |
| --- | --- |
| 怪獣8号 OP／ED（2筆核心缺口） | 官方分別只有合併Written by名單，保留songwriting，未拆作詞／作曲；未找到明示arrangement。官方無字幕影片、演唱與數位Single已證實。等待唱片逐曲credits或創作者明示角色後定向補查；現階段不以producer代替編曲 |
| うたミル插曲 | 交叉索引列ガーネット、Risky Business及夢見る15歳等劇中使用；官方Single曲目與MV可確認發行，仍不足以確認各話用途、演唱差異及劇中虛構詞曲與真實創作的對應。保留續查方向，待官方逐話／插曲公告或授權片尾credits；未把Single所有收錄或角色曲直接新增為IN／ED |
| 其餘音源／平台 | 25個錄音長度未知；TV／full、重新錄音、ISRC、其他藝人Album或合輯與特定地區可用性仍待第一方逐曲證據。No Lead Vocal的個別聲部分工、Piano版完整演奏／編曲名單及其他團隊未推造；未把一般band成員等同每首實際歌唱 |
| 來源取得限制 | Dr.STONE根頁回應403，本批改用已存在且可讀的藝人、Sony官方商品、授權配信及有效舊證據，未繞過限制。FMF直接頁有TLS憑證問題，未停用驗證、未把未讀取完整頁算作已成功取回；Piano版新編曲名單未加入 |
| 延後及季度聯集 | 夏季剩餘WEB／短篇TV／泡麵及特殊內容保留，不阻擋春季標準TV。Leviathan、BULLET/BULLET等WEB不能僅按WEB分類當作短片；先延後到TV優先階段之後。各季標準TV完整作品聯集仍待核對，舊第27–35批兩輪缺口沿用原觸發條件 |

本批13／15筆有詞、曲、編曲及官方歌曲watch，2筆缺口如上；此口徑不代表個別團隊、全部音源、每張收錄或整季資料齊備。7部既有metadata、動畫來源日期及所有15筆用途ID／網址保持，其他1,978部公開JSON逐項不變。季度seed接手既有Mikadono ED2／ED3及被移入的legacy修正；runtime、UI、contract、播放器、設定、依賴及測試均未更改，沒有為舊測試改正常程式。

必要檢查與展示結果待下節驗收；目前production仍為第35批467b5f9／batch35，不將本機修改當正式更新。


### 第36批本機驗收及發布準備

`npm test`：4檔／6項通過；`npm run build`：型別與Astro檢查、2,030 HTML、CSP／Service Worker及4,056公開產物通過；`npm run public:check`：241檔通過。7部經實際ApiProvider解析及建置JSON隔離核對通過，1,978部非本批JSON保持，15筆既有用途ID、作品metadata及動畫來源日期穩定；31個共用發行品的核心metadata一致，跨媒介master未知不硬綁。本批只有資料與checkpoint修改，未改UI／contract／搜尋或播放器，按變更矩陣不額外重跑本機E2E；發布CI仍須通過完整既有品質檢查。

桌面7部15筆用途、26音源與38組收錄數量和公開JSON一致。393像素7部均無橫向溢出／錯誤覆蓋層，已目視怪獣8号長英文歌名與合併詞曲名單。夏季187筆用途首屏24列，KSCL-3601搜尋1筆→Dr.STONE全部2筆→OP的16項欄位證據展開及Anime Size標示通過；首頁及全部歌曲各24列。應用console無error／warn，觀察時0影片iframe；未測歌曲播放、地區可用性或額外網路攔截。

本機季度統計：2025秋142／142、123核心齊備／19缺口；夏164／179、152／12；春8／146、7／1；冬2／135、2／0。全範圍799個唯一用途已逐批處理（754 OP／ED、36 IN、9 TS），未匹配舊ID為0；跨季度不可相加。全目錄仍29季／1,985部／4,410用途（4,365 OP／ED、36 IN、9 TS），不同YouTube歌曲watch增至1,082，metadata仍1,838。頂部正式季度表待正式部署驗收後更新。

Cloudflare dry-run實際exit 0且包含成功marker；沒有變更Wrangler設定或依賴。新增行私隱／credential模式及相對文件連結檢查通過；收集程式、來源工作筆記、原始回應、log、測試產物及帳戶資料未加入公開變更。正式發布仍待固定PR head、CI、正常合併、實際部署及獨立live驗收；production仍為第35批。完成後第37批優先春季尚未逐批核對的標準季度TV，短WEB／短篇與已查未明欄位不阻擋往舊季度。


### 第36批正式發布驗收（2026-10-18）

[PR #125](https://github.com/kyeunga25/anisonary/pull/125)正常rebase合併並保留3個分類提交：`7c65307`（第35批回執）、`ea9ccf0`（第36批資料與關係）、`990e65a`（本機驗收與缺口）。固定PR head `d0b3d54` 的quality（39047405547）及Workers preview成功；main quality（39047687756）及Workers建置成功，main Git tree與已驗收PR相同，部署前工作區乾淨。

Cloudflare實際CLI部署exit 0，來源 `990e65ad37463e510622f993102a6731908c3ec6`、標記 `batch36`；另以版本metadata核對來源與標記。未公開憑證、帳戶／資源識別及完整log。資料查閱日期仍為2026-10-17，正式發布驗收跨至10月18日，沒有重置全部來源日期或移動固定截止日。

正式站獨立驗收：29季registry及本批7部15筆用途經實際ApiProvider契約解析，內容與本機公開JSON一致；沒有把此選定細節驗收稱為重新取得全部1,985部。39條HTML／JSON／季度／核心資產route與本機artifact雜湊一致，2條不存在route正確404；嚴格CSP、安全headers及API noindex／revalidation通過。7部桌面共15筆用途、26音源、38組收錄，393像素7部均無橫向溢出／錯誤覆蓋層。夏季187筆首屏24列、KSCL-3601搜尋1筆→Dr.STONE全部2筆→OP的16項欄位證據展開與Anime Size標示通過；0應用error／warn、觀察時0 iframe，未聲稱播放或地區嵌入驗證。本機完整目錄隔離與首頁／全部歌曲24列證據保留上節，未冒充額外live測試。

正式季度進度更新為2025秋142／142、123核心齊備／19缺口；夏164／179、152／12；春8／146、7／1；冬2／135、2／0。799個唯一用途已處理（754 OP／ED、36 IN、9 TS），跨季不可相加；全目錄29季／1,985部／4,410用途，1,082個不同YouTube歌曲watch及1,838筆metadata。其餘年度季度表不變；現有快照與完整TV聯集分開，年度及長期目標未完成。

正式入口：<https://anisonary.k-y.cc/seasons/2025-summer/>、<https://anisonary.k-y.cc/anime/new-panty-and-stocking-with-garterbelt/>、<https://anisonary.k-y.cc/anime/dr-stone-science-future-part-2/>。

下一接點第37批：春季快照中鬼人幻燈抄、宇宙人ムームー、ウィッチウォッチ與Summer Pockets的後期歌曲目前省略用途季度，4部亦未列入現有夏季registry；先核對是否有夏季續播與真正用途錯列，再深化同批及春季其他標準TV。這是已發現的盤點疑點，尚未把推測改入公開資料。短篇／WEB延後與第27–36批缺口觸發條件保留，不將夏季尾段7部處理誤稱為所有TV歌曲齊備。


## 2026-10-18 批次：2025-tv-inventory-37（已發布，階段已暫停）

可靠接點為第36批正式來源 `990e65a`／`batch36`。固定範圍2007–2026、公開資料截止日2026-10-14不變；本批來源實際查閱日期自2026-10-18起另記。優先2025正常長度季度TV，短WEB、短篇TV、泡麵及特殊番延後，已完成資料及穩定ID保留。

先核對春季延續夏季的鬼人幻燈抄、宇宙人ムームー、ウィッチウォッチ與Summer Pockets：既有歌曲的用途／季度及後期輪替可能錯列；再同批處理男女の友情、ロックは淑女の嗜みでして及阿波連さん第2季。開始時選定7部現有公開作品、25筆既有待核對用途，不等於25首新歌曲；用途及季度以第一方與交叉證據核對結果為準。

完成條件：歌曲核心先行，同頁補已明示創作／角色、音源、發行品及正版平台，僅查新缺口；兩輪未明保存觸發條件，不阻擋其他已確認內容。依資料變更矩陣批次收尾檢查及實際展示，再分類提交、推送、正常合併、Cloudflare部署及live驗收後暫停。當前尚未完成本批、2025及長期範圍；第37批為本階段最後一批，完成後保存可靠接點、未解欄位與下一步，不啟動第38批或排程，明確恢復後才接續。

### 第37批資料成果與未解欄位

完成本批7部既有標準TV的25筆OP／ED用途核心核對與同批深化，新增動畫0、用途0；登記25個歌曲ID，原有用途ID、序號、slug與影片URL維持。鬼人幻燈抄、宇宙人ムームー、ウィッチウォッチ及Summer Pockets補入夏季續播索引，逐曲季度與首播／發行日期分開。

| 公開 theme ID | 已核對歌曲／用途 |
| --- | --- |
| `kijin-gentoushou-op-1` | コンティニュー／NEE／OP1 |
| `kijin-gentoushou-op-2` | Ash／[Alexandros]／OP2 |
| `kijin-gentoushou-ed-1` | 千夜一夜 feat. 仲宗根泉 (HY)／Hilcrhyme／ED1 |
| `kijin-gentoushou-ed-2` | 円鈴／FAKE TYPE.／ED2 |
| `rock-wa-lady-no-tashinami-deshite-op-1` | Ready to Rock／BAND-MAID／OP1 |
| `rock-wa-lady-no-tashinami-deshite-ed-1` | 夢じゃないならなんなのさ／Little Glee Monster／ED1 |
| `danjo-no-yuujou-wa-seiritsu-suru-iya-shinai-op-1` | 質問、恋って何でしょうか?／HoneyWorks feat.ハコニワリリィ／OP1 |
| `danjo-no-yuujou-wa-seiritsu-suru-iya-shinai-ed-1` | Dear my Soleil／立花日菜／ED1 |
| `witch-watch-op-1` | Watch me!／YOASOBI／OP1 |
| `witch-watch-op-2` | ときはなて！／はしメロ／OP2 |
| `witch-watch-op-3` | Bitter end／Who-ya Extended／OP3 |
| `witch-watch-ed-1` | 魔法はスパイス／Aooo／ED1 |
| `witch-watch-ed-2` | 月と私のかくれんぼ／yutori／ED2 |
| `witch-watch-ed-3` | FLASHBACK SYNDROME／ALI／ED3 |
| `summer-pockets-op-1` | アルカテイル／鈴木このみ／OP1 |
| `summer-pockets-op-2` | フィニステラー／鈴木このみ／OP2 |
| `summer-pockets-ed-1` | Lasting Moment／鈴木このみ／ED1 |
| `summer-pockets-ed-2` | 魔法の絵日記／鳴瀬しろは（CV.小原好美）、加藤うみ（CV.田中あいみ）／ED2 |
| `summer-pockets-ed-3` | 羽のゆりかご／水谷瑠奈（NanosizeMir）／ED3 |
| `aharen-san-wa-hakarenai-season-2-op-1` | 微熱魔／ずっと真夜中でいいのに。／OP1 |
| `aharen-san-wa-hakarenai-season-2-ed-1` | トワイライト／shallm／ED1 |
| `uchuujin-muumuu-op-1` | ふしぎなきみ／サバシスター／OP1 |
| `uchuujin-muumuu-op-2` | MOVE MOVE／a子／OP2 |
| `uchuujin-muumuu-ed-1` | さよなら人類／さくらこ＆ムームー／ED1 |
| `uchuujin-muumuu-ed-2` | すばらしい日々／さくらこ＆ムームー／ED2 |

宇宙人ムームー更正a子、ED「すばらしい日々」原題與さくらこ＆ムームー名義，將錯列演唱者改為梅屋敷桜子（CV.春海百乃）及ムームー（CV.小桜エツコ）。Summer Pockets「魔法の絵日記」補角色與CV，「羽のゆりかご」補NanosizeMir名義；男女の友情保留動畫官方HoneyWorks feat.ハコニワリリィ名義，補Hanon／Kotoha及可用授權來源的詞曲編曲，沒有用平台不同發行名義覆寫動畫名義。

ウィッチウォッチ第13話6月29日已使用第二組OP／ED，因此兩首列春／夏；劇中作うろんミラージュ的Bitter end／FLASHBACK SYNDROME仍為第14話特殊OP／ED，不因劇中作品身分改成IN。鬼人前組歌曲止於6月23日第13話，收尾更正為僅春季；宇宙人ムームー第1–12話／第13話起分開。Summer Pockets兩首新主題曲列夏季，舊OP及Lasting Moment跨春夏；特殊ED的第一方逐話缺口見下表。

新增38個音源ID（28演唱、4角色演唱、5伴奏、1live），其中4 TV、4 full、30 unknown。full只來自Dear my Soleil官方明示Full size MV及3首原作遊戲OST full；Game Size保留原名而不當TV。BAND-MAID的MV、Anime MV、Live Video及Instrumental Video分開；Lead Off仍列有人聲可能的演唱版，不推成純伴奏。

新增24個不同發行品ID（16 Single、5 EP、1 Album、2 OST）與30組逐用途收錄；包含SCOOOOOP三版EP、Dear my Soleil兩版CD與數位EP、夢じゃないならなんなのさ三版Single、原作遊戲OST兩流通版與アルカテイル兩版Single、KSLA-0228及數位雙主打、宇宙人ムームー的EP／Single及其他已證實數位Single。曲序與disc以對應曲目表保存；CD、先行配信、數位EP及其他媒介master不自動合併。Dear my Soleil的4月12日先行歌曲日期與5月28日數位EP／CD日期分開，さよなら人類數位Single以正版商品頁4月30日為準，未把配信入口追蹤參數的日期當發行日。

新增12個不同官方歌曲watch外連；另外39個確切正版項目（Apple Music 8、Spotify 8、YouTube Music 8、mora 7、レコチョク8）。新watch形式在外連標籤明示，未查明渠道metadata的項目不造channelName／可嵌入性，影片metadata數不因這12條外連增加。55個來源URL本次實際頁面或可讀官方索引補證、263組欄位證據；未讀舊來源日期保留，混用新舊來源的欄位日期不晚於其中最舊核對日。

| 未解缺口 | 處理與續查條件 |
| --- | --- |
| Bitter end（1筆核心缺口） | 官方動畫頁可確認特殊OP及演唱，詞／曲／編曲未在可用第一方或授權資料找到清楚角色。歌ネット只作發現，沒有搬入其名單；等待藝人／唱片逐曲credits或可用授權補證 |
| 魔法はスパイス（1筆核心缺口） | 官方明示すりぃ作詞／作曲，編曲未明。經定向查找仍未清楚，不把樂團名推作arranger；等待官方曲目或製作者逐曲名單 |
| 羽のゆりかご（1筆核心缺口及用途證據限制） | 原作遊戲歌曲詞曲、原版編曲及OST收錄有第一方資料；TV第22話特殊ED只有交叉索引，尚無第一方逐話證據及清楚官方歌曲watch。保留既有ED ID及已收錄用途，不加入無第一方支持的theme.seasonIds；目前沿用作品季度fallback而春夏並列，不能當作已證實春季使用。待官方逐話／授權片尾credits及歌曲影片明確外連再修正；沒有把遊戲用途改成TV IN，亦未將遊戲master等同TV錄音 |
| 音源、收錄與個別團隊 | 30個音源長度unknown；其他full／TV／重錄、ISRC、CD與數位master同一性、個別樂手及完整Artist Album／合輯仍需證據。宇宙人ムームー及ロックレディOST未有本批OP／ED曲目收錄證據，不因OST存在便綁關係；新主題曲數位版未猜測服務項目ID |
| 來源取得限制 | ロックレディ動畫根頁TLS失敗，改用可讀BAND-MAID及Sony第一方，未繞過。Key舊商品頁直接讀取TLS／逾時，僅使用可讀官方索引已核對的必要事實，不稱直接取回成功；原作遊戲資料與TV使用證據分開。其他缺口經兩輪未明保留觸發條件，不輪流重搜 |

本批22／25用途具詞、曲、編曲及已確認YouTube歌曲watch；以上3筆核心缺口與用途證據限制保留，未稱7部、整季或年度完全齊備。實際ApiProvider已解析7部；1,978部非本批公開JSON、7部作品metadata及動畫來源日期保持不變。季度seed接手35行相關legacy修正，runtime、UI、contract、播放器、設定、依賴及測試不變。本批是本階段最後一批，必要本機檢查、實際展示及正式發布驗收完成後保存暫停狀態，不啟動下一批。


### 第37批本機驗收與發布準備

`npm test`4檔／6項通過；`npm run build`型別／Astro、2,030 HTML、CSP／Service Worker及4,056公開產物通過；`npm run public:check`241檔通過。7部由實際ApiProvider解析，1,978部非本批JSON完全不變；25筆ID／序號及作品metadata／來源日期保留，24個共用發行品核心metadata一致，來源／欄位日期關係有效。沒有UI／contract／新季度或播放器修改，按矩陣不額外重跑本機E2E，正式CI仍跑既有完整檢查。

桌面及393×852手機7部均有正確作品標題、全部25筆用途、38音源及30組收錄，無橫向溢出或錯誤覆蓋層。首頁、全部歌曲及春／夏季度均首屏24列；夏季202筆全部用途（其中194 OP／ED），春季142筆全部用途（其中138 OP／ED）。KSLA-0228搜尋2筆→Summer Pockets全部5筆→フィニステラー的11項欄位證據展開、Anime Size、品番及特殊ED待確認提示可見。應用console 0 error／warn、觀察時0影片iframe；沒有測歌曲播放、額外網路攔截或HK／TW地區可用性。

本機季度重算：2025秋142／142，核心123／缺口19；夏179／194，核心165／缺口14；春25／138，核心22／缺口3；冬2／135，核心2／缺口0。Spring分母由146減至138是8筆後期用途移出，Summer增加15筆是4部續播的既有用途補入，沒有新增歌曲用途。羽のゆりかご仍為作品季度fallback的已知限制；跨季不可相加。全範圍824個唯一用途已逐批處理（779 OP／ED、36 IN、9 TS），未匹配舊ID為0。全目錄29季、1,985部、4,410用途，1,094個不同YouTube歌曲watch／1,838筆影片metadata。

Cloudflare dry-run exit 0且有成功marker；未改Wrangler設定或依賴。新增行私隱／credential模式、相對文件連結與git diff格式檢查通過，沒有加入私人工具、原始頁面、取回回應、log、帳戶資料或測試產物。正式版本仍為第36批；接下來只完成本批分類提交、推送、正常PR驗收／合併、實際部署及獨立live核對，之後保存已暫停狀態，不啟動新收集。


### 第37批首版正式資料發布驗收與暫停接點（2026-10-18）

[PR #126](https://github.com/kyeunga25/anisonary/pull/126)正常rebase合併，3個分類提交為`c4d7235`（第36批正式回執）、`cf6f7d0`（第37批資料）、`a231286`（本機驗收及缺口）。固定PR head `c235cac`的quality（39049893330；含6項瀏覽器測試）與Workers preview成功；main quality（39050077907）及Workers建置成功，main Git tree與已驗收PR相同，部署前工作區乾淨。

Cloudflare實際CLI部署exit 0，資料驗收來源`a23128662d1968815db88726910c0161e3006643`、標記`batch37`，另以版本metadata獨立核對來源及標記。完整帳戶metadata、憑證及log只留私有暫存，未加入公開提交。資料截止日仍2026-10-14，實際本批來源查閱及發布日期2026-10-18分開記錄。

正式站獨立驗收：29季registry及本批7部25筆用途通過實際ApiProvider契約解析並與本機JSON一致；39條HTML／JSON／季度／核心資產route雜湊符合本機產物，2條不存在route正確404，嚴格CSP、安全headers與API noindex／revalidation通過。7部桌面25用途、38音源與30組收錄完整，393像素7部無橫向溢出／錯誤覆蓋層，已目視宇宙人ムームー兩位角色／CV修正。夏季202筆全部用途首屏24列；KSLA-0228搜尋2筆→Summer Pockets全部5筆→OP2的11項欄位證據展開、Anime Size及特殊ED待確認提示通過。0應用error／warn，觀察時0 iframe；未聲稱歌曲播放、額外網路攔截或地區可用性。首頁、全部歌曲及春季24列的本機證據保留前節，未稱額外live重測。

正式季度表已更新：2025秋142／142、核心123／缺口19；夏179／194、165／14；春25／138、22／3；冬2／135、2／0。全範圍824個唯一用途已核對，跨季不能相加；本批3筆核心缺口、特殊ED第一方逐話與季度fallback限制、30個長度unknown及其他收錄／master／個人團隊缺口保留上表。全目錄仍29季、1,985部、4,410用途，1,094個不同歌曲watch／1,838筆metadata，沒有以本批完成宣稱2025或長期目標完成。

正式入口：<https://anisonary.k-y.cc/seasons/2025-summer/>、<https://anisonary.k-y.cc/anime/uchuujin-muumuu/>、<https://anisonary.k-y.cc/anime/summer-pockets/>。

狀態：已暫停。本階段完成第35–37批及必要發布收尾；首版回執及其後2筆季度修正一併保存，修正見下節。沒有啟動第38批、擴大收集範圍或建立背景排程。下一次明確繼續時，從2025春季尚未核對的標準TV依既有seed接續，先curated-183133／curated-178701等；標準TV完整作品聯集仍需盤點，短WEB／泡麵／特殊番及兩輪未明欄位依原優先序與觸發條件保留。固定2007–2026範圍、截止日及完成條件維持。


### 第37批收尾季度更正（PR #127）

首版把鬼人幻燈抄OP1／ED1列為跨春夏，是沒有核實第13話實際放送日造成的季度判定錯誤。動畫官方歌曲頁、AnimeThemes的第1組使用至第13話，及[電視節目第13話資料](https://thetv.jp/program/0001043980/13/)的2025年6月23日相互對應後，兩筆`theme.seasonIds`更正為僅2025春季；作品仍在夏季續播，但夏季正篇只列Ash／円鈴。特別節目與原作歌曲收錄不拿來延長正篇OP／ED季度。

因此目前季度表為2025秋142／142、核心123／缺口19；夏177／192、163／14；春25／138、22／3；冬2／135、2／0。前節179／194、165／14與夏季202筆全部用途是首版歷史數字；修正後夏季200筆全部用途，未增加或刪除歌曲用途，唯一用途824及全目錄4,410維持。新增1個日期交叉來源與2組用途證據，本批合計55個實際查閱／索引補證來源及263組證據；其他歌曲、音源、發行品與metadata保持。

只修正本批既有兩筆季度，沒有開始下一批。收尾以[PR #127](https://github.com/kyeunga25/anisonary/pull/127)內容為恢復基準；首版batch37的來源／驗收保留歷史紀錄，最新正式版本來源及標記可由Cloudflare版本metadata與此PR合併提交核對。目標保持已暫停，等待明確繼續。


收尾更正驗證：`npm test`4檔／6項、`npm run build`2,030 HTML／4,056公開產物、`npm run public:check`241檔、7部實際ApiProvider與git diff格式檢查通過。相對首版7部JSON只有鬼人幻燈抄改變；歌曲、音源與發行品數不變。春季查鬼人只見コンティニュー／千夜一夜，夏季只見Ash／円鈴，各2筆；動畫全部4筆用途仍顯示，393像素無橫向溢出或錯誤覆蓋層。按原變更矩陣驗證本次真正改動，沒有重查全部舊來源，沒有修改runtime或測試來遷就資料。


### 第37批更正後正式驗收與最終資料接點（2026-10-18）

[PR #127](https://github.com/kyeunga25/anisonary/pull/127)固定head `27bb36f`的quality及Workers preview成功後正常rebase合併；3個提交為`cf6272b`（發布回執／暫停）、`4166cef`（鬼人兩筆季度更正）、`2824631`（數字及驗證紀錄）。main品質與Workers建置全部成功，Git tree與驗收PR一致，工作區乾淨。

實際Cloudflare部署exit 0，來源`2824631e4ffed523d2a4b6b8e5269eb7de07367f`，標記`batch37-final`；另讀版本metadata核對來源及標記。更正後29季registry及7部25用途通過實際ApiProvider解析並與本機JSON一致，39條正式route符合本機產物，2個不存在route正確404，安全headers、嚴格CSP及API noindex／revalidation通過。

正式站夏季200筆全部用途，查鬼人只見Ash／円鈴；春季142筆全部用途，查鬼人只見コンティニュー／千夜一夜。動畫頁全部4筆用途各有正確春／夏標示，393像素無橫向溢出或錯誤覆蓋層，應用console 0 error／warn、觀察時0 iframe。本批7部桌面／手機、角色CV及品番搜尋展示沿用首版已驗收成果，相關公開JSON再與正式站逐項一致核對；未聲稱額外歌曲播放或地區可用性測試。

最終季度進度：2025秋142／142、核心123／缺口19；夏177／192、163／14；春25／138、22／3；冬2／135、2／0。全範圍824個唯一用途已處理（779 OP／ED、36 IN、9 TS），跨季不可相加；本批7部25筆用途中22筆核心齊備，55個查閱／索引補證來源及263組證據。3筆核心缺口、特殊ED第一方與季度fallback限制及其他版本／master／收錄缺口保留，不稱整季、年度或長期目標完成。

目前已暫停，沒有啟動第38批或背景更新。恢復位置以頂部接點為準，固定2007–2026及2026-10-14截止日維持。這份最後回執只改進度文件，不改已驗收資料／展示產物；文件提交不視為新資料批次，最新部署提交可另由GitHub合併紀錄及Cloudflare版本metadata核對。

## 2026-10-19 批次：2020-2026-tv-basics-38（已發布）

完成層次：基本資料與展示。2020–2026標準TV由新到舊優先；本批補2026秋季10部作品、20筆OP／ED及1筆已確認插曲。固定資料截止日2026-10-14，實際來源查閱日2026-10-19；詳細深化留待下一階段，不重查既有credits及影片。

| 公開 theme ID | 曲名／演唱名義／用途 | 第一方歌曲來源 |
| --- | --- | --- |
| `aoashi-2nd-season-op-1` | Fortress Defense／10-FEET／OP1 | [官方](https://aoashi-pr.com/music/) |
| `aoashi-2nd-season-ed-1` | トライアングル／ヒグチアイ／ED1 | [官方](https://aoashi-pr.com/music/) |
| `ao-no-hako-season-2-op-1` | あなたの花の色／aiko／OP1 | [官方](https://aonohako-anime.com/news/detail_260826_2.html) |
| `ao-no-hako-season-2-ed-1` | blue in／エルスウェア紀行／ED1 | [官方](https://aonohako-anime.com/news/detail_260826_2.html) |
| `hotaru-no-yomeiri-op-1` | Period／iri／OP1 | [官方](https://hotaru-anime.com/music/) |
| `hotaru-no-yomeiri-ed-1` | 夢心地／TOOBOE／ED1 | [官方](https://hotaru-anime.com/music/ending.php) |
| `hotel-inhumans-2nd-season-op-1` | 螺旋／GAN (岩田剛典)／OP1 | [官方](https://hotel-inhumans.com/news/news-86.html) |
| `hotel-inhumans-2nd-season-ed-1` | スイートピー／ファントムシータ／ED1 | [官方](https://hotel-inhumans.com/news/news-86.html) |
| `fx-senshi-kurumi-chan-op-1` | FX戦士くるみちゃん／福賀くるみ（CV：鈴木愛奈）／OP1 | [官方](https://fxkurumi-info.com/music/) |
| `fx-senshi-kurumi-chan-ed-1` | ＄・￥・€／福賀くるみ（CV：鈴木愛奈）／ED1 | [官方](https://fxkurumi-info.com/music/) |
| `tensei-shitara-ken-deshita-2nd-season-op-1` | DREAM OF BUTTERFLY／FZMZ／OP1 | [官方](https://www.tenken-anime.com/news.html) |
| `tensei-shitara-ken-deshita-2nd-season-ed-1` | バリバリBuddy／花冷え。／ED1 | [官方](https://www.tenken-anime.com/news.html) |
| `kikansha-no-mahou-wa-tokubetsu-desu-2nd-season-op-1` | Sorrow／FLOW／OP1 | [官方](https://returners-magic.com/music/op.html) |
| `kikansha-no-mahou-wa-tokubetsu-desu-2nd-season-ed-1` | Everlasting／krage／ED1 | [官方](https://returners-magic.com/music/ed.html) |
| `tensei-kizoku-kantei-skill-de-nariagaru-3rd-season-op-1` | Still Water／佐々木李子／OP1 | [官方](https://kanteiskill.com/product/op3/) |
| `tensei-kizoku-kantei-skill-de-nariagaru-3rd-season-ed-1` | 日々を越えて／明くる夜の羊／ED1 | [官方](https://kanteiskill.com/product/ed3) |
| `tensei-shita-daiseijo-wa-seijo-de-aru-koto-wo-hita-kakusu-op-1` | Flare of Soul／花耶／OP1 | [官方](https://daiseijo-anime.com/music/op.html) |
| `tensei-shita-daiseijo-wa-seijo-de-aru-koto-wo-hita-kakusu-ed-1` | STELLAR／ウタヒメドリーム オールスターズ／ED1 | [官方](https://daiseijo-anime.com/music/ed.html) |
| `black-clover-2nd-season-op-1` | 消えない理由／WANIMA／OP1 | [官方](https://bclover.jp/music/) |
| `black-clover-2nd-season-ed-1` | Yellow Brick Road／ONE OR EIGHT／ED1 | [官方](https://bclover.jp/music/) |
| `black-clover-2nd-season-in-1` | Black Rover／ビッケブランカ／IN1（第2話） | [官方](https://bclover.jp/news/detail.php?id=1136568) |

- 已處理anime ID：`curated-191788`、`curated-189123`、`curated-205909`、`curated-199426`、`curated-206401`、`curated-159042`、`curated-172192`、`curated-185756`、`curated-187402`、`curated-195604`。既有ID、動畫網址、用途序號、來源日期與詳細資料保留。
- 實際新增：1個季度快照、10個動畫頁、20筆OP／ED及1筆IN用途、21個歌曲ID，42組歌曲身分／動畫用途證據；Black Rover僅新增已證實的第2話IN用途，沒有從舊OP曲再用推定新錄音。本批沒有新增音源、影片metadata或發行品。全目錄現為30季、1,995部動畫、4,431筆用途（4,385 OP／ED、37 IN、9 TS）。
- 已補欄位：動畫原名、羅馬字識別、季度、官方TV播出日／時段、放送狀態及識別／來源；歌曲原名、演唱名義、OP／ED序號與季度。福賀くるみ保留角色與CV名義，「＄・￥・€」保留官方字形；未以藝人名覆蓋角色名義；Aoashi採官方Fortress Defense拼法。未核對的正式繁中譯名及圖片留空，authoring改為可省略，沿用公開JSON原有相容欄位。
- 證據重用：同一官方音樂頁同時支持OP／ED；[UtaTen秋季索引](https://utaten.com/specialArticle/index/10195)交叉核對本批20筆，[YourAnimes季度頁](https://youranimes.tw/bangumi/202610)作中文發現／播出對照，作品身分以相應AniList公開頁核對，TV播出回到各作品官網。Annict普通季度頁及Bangumi文件化API僅作有界inventory查閱，未保存raw response、頁面副本或使用者資料，亦未把清單數量當作完整TV分母。
- 日期區別：鑑定技能第3期9月27日開播屬秋季編排；轉生就是劍Ⅱ及帰還者第2期的TV「水曜24時」與實際翌日日期、先行網播分開保存，沒有把網播優先誤當短WEB或新歌曲版本。
- 展示：首頁未固定環境季度時跟隨最新收錄季，並保留最近三季入口；首頁／全部歌曲／季度維持每頁24列；動畫頁先列全部歌名、演唱及用途，各首以原生details展開創作、音源、收錄、平台與來源。7筆以上的作品可在頁內搜尋及按用途篩選，無搜尋傳輸或持久儲存。既有歌曲、別名、錄音、發行品及影片錨點會展開對應內容；無JavaScript仍可閱讀全部歌名並手動展開。季度目錄改按用途季度計數，避免把續播作品所有歌曲重複算進每一季。

### 缺口與接續

| 範圍 | 未解項目／續查條件 |
| --- | --- |
| 2026秋季 | 10部20筆OP／ED及1筆IN只屬已確認子集，標準TV的新作、續播及輪替聯集尚未閉合，完整分母未知；第39批沿相同季度索引，逐作取第一方音樂及TV資料，先補容易確認的基本用途，不啟動詳細挖掘 |
| 本批21筆 | 本階段基本必要欄位無未解衝突；創作、官方影片、音源、收錄與平台集中深化未開始，不列作基本資料阻擋。正式繁中譯名、圖片及逐集使用範圍未核對，僅在具體官方／授權證據或相應任務出現時補充 |
| 已有季度 | 現有欄位存在不代表清單齊全或本批重新查閱；2025春／冬及2024–2020仍需作品聯集與輪替核對，短篇／短WEB維持延後 |
| 歷史詳細缺口 | 第35–37批的credits衝突、未證實演唱版本與影片缺口沿原觸發條件，沒有反覆搜尋或補造欄位 |

### 本機檢查與展示

| 檢查 | 結果 |
| --- | --- |
| `npm test` | 4個檔案、6個測試通過；全目錄公開JSON round-trip、來源／關係、未知譯名省略與按用途季度計數 |
| `npm run build` | 通過；Astro 0 errors／warnings／hints，2,041 HTML頁、CSP／Service Worker及4,080公開產物檢查通過 |
| `npm run test:e2e` | 6條主要流程均通過；首輪5條通過，新頁內篩選測試定位修正後單獨通過，沒有為測試更改正常行為或降低gate |
| 桌面／手機 | in-app Chromium預設桌面及393×852；新季20筆 → FX角色歌曲 → 展開來源，13筆作品 → ED／初恋 → 1筆；無橫向溢出、空白頁、框架錯誤覆蓋層或app console errors，未主動連線YouTube。4首歌既有頁面在相同預覽尺寸由5,015降至1,917像素；仍可展開全部資料 |
| 文件／公開邊界 | 文件連結及`git diff --check`通過；`npm run public:check`通過（243個repository檔案），臨時腳本、log與測試產物留在repository之外 |
| Cloudflare dry-run／依賴稽核 | 最終產物dry-run退出0並出現`--dry-run: exiting now.`，無bindings；`npm audit --audit-level=low`通過，當前依賴樹0漏洞，未改依賴；不表示GitHub既有Dependabot alerts已清除 |

預覽入口：`/seasons/2026-fall/`、`/catalog/2025/`、`/anime/fx-senshi-kurumi-chan/`、`/anime/ganbare-nakamura-kun/`。上述本機證據與下方production證據分開保存。首頁最近三季入口及新季可見性已補作互動驗證。

本輪分段提交在main為`b82a44b`（2026秋季基本資料）、`76da44d`（緊湊詳情、頁內篩選與季度導覽）、`ee330fa`（策略、進度與驗證）；PR原始head為`55d63d3`，rebase前資料／展示提交`ebd3f07`／`180b92b`可由PR追溯。

### 第38批正式發布回執

- [PR #129](https://github.com/kyeunga25/anisonary/pull/129)固定head及合併後main的GitHub `quality`、Workers Builds均通過；CI包含完整6條E2E。正常rebase合併，沒有force push、admin bypass或跳過gate。main `ee330fa20caae4196e7126e67e85d2843ee7246d`的tree與已審閱PR一致，部署前工作區乾淨。
- Cloudflare正式部署退出0；實際version metadata確認tag `batch38-basics`及message中的來源`ee330fa`／PR #129。metadata、部署log與基礎設施識別資料只留在本機私有暫存。annotated Git tag `batch38-basics`於正式驗收後建立並推送，可作回退接點。
- 正式站完整public API contract／跨endpoint一致性gate通過；71個入口與本機產物SHA-256一致，包括全部30季度HTML、10部新動畫HTML／JSON及首頁／歌單／搜尋／目錄／必要靜態資產；2個未知route實測404。JSON content type、noindex／revalidation／無CORS及HTML安全標頭通過，CSP無unsafe-inline／unsafe-eval且禁止inline屬性。
- Production桌面及393×852：新季21筆 → Black Rover → 同頁3首歌 → 展開IN來源；用途保持第2話插曲，無誤列OP／ED或推定新錄音，無水平溢出／框架錯誤／app console errors。平台地區可用性、實際歌曲播放及其他瀏覽器沒有因此宣稱通過。
- 正式入口：[2026秋季](https://anisonary.k-y.cc/seasons/2026-fall/)、[Black Clover全部歌曲](https://anisonary.k-y.cc/anime/black-clover-2nd-season/)、[年度目錄](https://anisonary.k-y.cc/catalog/)。2020–2026與長期範圍仍未收齊；第39批接續位置見頂部，沒有啟動新收集或背景排程。


## 2026-10-19 批次：2020-2026-tv-basics-39（已發布）

完成層次：基本資料；新增10部2026秋標準TV、20筆OP／ED及1筆IN。固定2007–2026長期範圍、2020–2026基本資料階段與2026-10-14截止日；實際查閱日期2026-10-19。詳細深化延後，持續按批次推進基本資料完整範圍。

| 公開 theme ID | 曲名／演唱名義／用途 | 第一方來源 |
| --- | --- | --- |
| `koori-no-jouheki-2nd-season-op-1` | エスコート／THE BEAT GARDEN／OP1 | [官方](https://korinojoheki-pr.com/music/) |
| `koori-no-jouheki-2nd-season-ed-1` | 花蔭／Superfly／ED1 | [官方](https://korinojoheki-pr.com/music/) |
| `sasaki-to-pii-chan-season-2-op-1` | Unbroken／MADKID／OP1 | [官方](https://sasapi-anime.com/music.html) |
| `sasaki-to-pii-chan-season-2-ed-1` | すきぴのおかげ！／のんふぃく！／ED1 | [官方](https://sasapi-anime.com/music.html) |
| `shiotaiou-no-satou-san-ga-ore-ni-dake-amai-op-1` | シュガーソルト／オーイシマサヨシ／OP1 | [官方](https://shioama-anime.com/music.html) |
| `shiotaiou-no-satou-san-ga-ore-ni-dake-amai-ed-1` | 初恋リプライ／HoneyWorks feat.星川サラ／ED1 | [官方](https://shioama-anime.com/music.html) |
| `kyouran-reijou-nia-liston-op-1` | リスポーン!!／角巻わため／OP1 | [官方](https://kyoranreijo-pr.com/) |
| `kyouran-reijou-nia-liston-ed-1` | ときめきアン・ドゥ・トロワ♪／魔法映像（マジックビジョン）ひろめ隊／ED1 | [官方](https://kyoranreijo-pr.com/) |
| `mahou-shoujo-ikusei-keikaku-restart-op-1` | No tears here／茅原実里／OP1 | [官方](https://mahoiku.com/anime/restart) |
| `mahou-shoujo-ikusei-keikaku-restart-ed-1` | ReMind／Daisy×Daisy／ED1 | [官方](https://mahoiku.com/anime/restart) |
| `tantei-wa-mou-shindeiru-season-2-op-1` | この心臓に花束を／心梅／OP1 | [官方](https://tanmoshi-anime.jp/Season2/music/index.html) |
| `tantei-wa-mou-shindeiru-season-2-ed-1` | 白昼夢／カグラナナ／ED1 | [官方](https://tanmoshi-anime.jp/Season2/music/index.html) |
| `romelia-senki-op-1` | 暁に鳴る／超学生／OP1 | [官方](https://romelia-senki.com/product/music/) |
| `romelia-senki-ed-1` | Nightfall feat. Maika Loubté／KOHTA YAMAMOTO／ED1 | [官方](https://romelia-senki.com/product/music/ed) |
| `ranma-2024-3rd-season-op-1` | 素直未満／ふみの／OP1 | [官方](https://ranma-pr.com/music/) |
| `ranma-2024-3rd-season-ed-1` | かわいくない／『ユイカ』／ED1 | [官方](https://ranma-pr.com/music/) |
| `magic-knight-rayearth-2026-op-1` | 乙女の剣／十明／OP1 | [官方](https://rayearth-anime.com/music/) |
| `magic-knight-rayearth-2026-ed-1` | 星灯／Kawaguchi Yurina／ED1 | [官方](https://rayearth-anime.com/music/) |
| `magic-knight-rayearth-2026-in-1` | ゆずれない願い／田村直美／IN1 | [官方](https://rayearth-anime.com/music/) |
| `doumo-suki-na-hito-ni-horegusuri-wo-irai-sareta-majo-desu-op-1` | かなわない、／センチミリメンタル／OP1 | [官方](https://horemajo-anime.com/music/index.html) |
| `doumo-suki-na-hito-ni-horegusuri-wo-irai-sareta-majo-desu-ed-1` | まだ嘘にならない／レイニ／ED1 | [官方](https://horemajo-anime.com/music/index.html) |

- 已處理anime ID：`curated-213805`、`curated-176314`、`curated-209502`、`curated-206949`、`curated-160803`、`curated-152677`、`curated-180894`、`curated-209872`、`curated-178868`、`curated-207191`。
- 實際新增：10個動畫頁、21筆用途／歌曲識別、42組身分與用途證據；全目錄30季、2,005部、4,452用途（4,405 OP／ED、38 IN、9 TS）。沒有新增音源、發行品或影片metadata。原有1,995部公開JSON逐項保持不變，既有ID與網址保留。
- 已補欄位：動畫原名、羅馬字識別、季度、官方TV首播與時段／平台；歌曲原名、演唱名義、用途、第一方及交叉來源。〈かなわない、〉保留官方末尾標點；探偵Season2採官方2026年，不沿用索引誤載的2025年。魔法少女育成計画restart與らんま第3期保留節目表深夜時段及實際翌日首播日；ロメリア的10月3日先行網播與10月5日TV分開。佐々木初回1小時不改判成特殊番。
- 證據重用：同一官方music／onair頁支持多項基本事實；沿用本工作階段已讀UtaTen秋季索引及YourAnimes中文季度頁，個別AniList公開身分／有界API只取ID、標題與格式等必要欄位。雷阿斯第1話〈ゆずれない願い〉以官方music及[GAME Watch 2026-10-08報導](https://game.watch.impress.co.jp/docs/news/2146248.html)確認IN，不改列OP／ED或推定新錄音。

### 缺口及續查條件

- 2026秋標準TV作品、續播及輪替聯集未閉合；40／40只是現有OP／ED已核對，不是全季分母。第40批續補可快速核實的其餘作品。
- 本批21筆基本欄位無未解衝突；詳細創作、影片、音源、發行及平台待下一階段，正式繁中譯名與圖片未知者留空。
- 魔法少女育成計画restart官方另列〈Re：START〉插曲，尚未完成截至固定日期的交叉用途證據；待相應官方公告日期／正片與交叉來源明確後加入，不以曲目宣傳推定已播集數。
- 2025夏15、春113、冬133筆既有OP／ED尚未逐批核對，2024–2020尚待逐批盤點；歷史詳細缺口與季度fallback限制保留。

### 本機檢查與展示

- `npm test`4檔／6項及`npm run build`通過；2,051 HTML、4,100公開產物，Astro無errors／warnings／hints；10部21筆通過實際ApiProvider解析。
- `npm run test:e2e`6條完整通過；初次Chromium啟動遭本機沙箱權限限制，正常權限重試成功，沒有修改正常程式或降低測試gate。
- 實際in-app Chromium：秋季42筆全部用途、20部、每頁24列；查雷阿斯得到3筆→動畫全部3筆→展開插曲第一方／GAME Watch來源。393×852手機頁寬393、內容寬393、0影片iframe；詳細資料預設折疊。沒有聲稱實際歌曲播放或地區可用性。
- Cloudflare dry-run exit0且有成功marker，無bindings；沿用第38批當前依賴樹稽核，未改依賴／設定。公開邊界243個repository檔案、文件相對連結、git diff格式及新增行私隱／credential模式檢查通過。臨時查閱筆記、工具、原始回應、log及帳戶資料不納入公開提交。
- 正式發布待固定PR head、CI／Workers檢查、正常合併、部署及獨立live驗收；目前production仍為第38批`be5a84a`／`batch38-receipt`。

本批資料提交`f6b448d`；進度及驗證另作文件提交，正式來源以合併後main與實際部署驗收為準。

### 第39批正式發布驗收

[PR #131](https://github.com/kyeunga25/anisonary/pull/131)固定head`b15352f`的quality與Workers Builds通過後正常rebase合併；main來源`14a7d32ee4fe15edafc81685ac632bd1d349ab0f`兩項檢查成功，tree與驗收PR一致，部署前乾淨。main保留資料與進度兩個分類提交；實際Wrangler部署exit0，版本metadata核對來源、PR與`batch39-basics`標記，正式驗收後建立並推送annotated Git tag。

71個正式入口與本機產物SHA-256一致，包含全部30季度HTML及10部新增動畫HTML／JSON；2條不存在route正確404，嚴格CSP、安全標頭及API noindex／revalidation／無CORS通過。10部21用途的實際ApiProvider解析、本機1,995部JSON隔離、6條E2E及桌面／手機證據見上節；沒有把此次selected-route驗收稱作重新取回全部2,005部API。正式站秋季42筆／20部、每頁24列；搜尋かなわない得到1筆，動畫頁完整2首且標點保留。393像素手機內容寬393、0影片iframe，無水平溢出；未宣稱歌曲播放或地區可用性驗證。

第40批接續其餘2026秋標準TV基本資料；基本階段與長期目標未完成，詳細深化延後。發布回執與進度在下一批獨立文件提交保存，不改已驗收公開產物。


## 2026-10-19 批次：2020-2026-tv-basics-40（已正式發布）

完成層次：基本資料；新增10部2026秋標準TV、20筆OP／ED。固定截止日2026-10-14，實際查閱日2026-10-19；詳細深化延後，持續補2020–2026已登記基本範圍。

| 公開 theme ID | 曲名／演唱名義／用途 | 第一方來源 |
| --- | --- | --- |
| `seitokai-ni-mo-ana-wa-aru-op-1` | 風の中は走るっきゃないっ！／三月のパンタシア／OP1 | [官方](https://nama-anaru.com/music/) |
| `seitokai-ni-mo-ana-wa-aru-ed-1` | ぴ／ナナヲアカリ／ED1 | [官方](https://nama-anaru.com/music/?music=ed) |
| `kashita-maryoku-wa-revo-barai-de-kyousei-choushuu-op-1` | リスクレート／BUDDiiS／OP1 | [官方](https://revo-anime.com/music/) |
| `kashita-maryoku-wa-revo-barai-de-kyousei-choushuu-ed-1` | いれもの／こたに／ED1 | [官方](https://revo-anime.com/music/) |
| `kanata-kara-op-1` | 逃光行／原因は自分にある。／OP1 | [官方](https://kanatakara-anime.com/music/) |
| `kanata-kara-ed-1` | 光の側で／名無し之太郎／ED1 | [官方](https://kanatakara-anime.com/music/) |
| `gensou-suikoden-op-1` | 悲しみさえ大人びて／amazarashi／OP1 | [官方](https://www.suikoden-anime.com/music/) |
| `gensou-suikoden-ed-1` | closed eye sun (feat. たかはしほのか)／Koji Nakamura／ED1 | [官方](https://www.suikoden-anime.com/music/) |
| `shinja-zero-no-megami-sama-to-hajimeru-isekai-kouryaku-op-1` | 未来の足跡／310／OP1 | [官方](https://zero-believers-anime.com/) |
| `shinja-zero-no-megami-sama-to-hajimeru-isekai-kouryaku-ed-1` | Fall in Dream／Suupeas／ED1 | [官方](https://zero-believers-anime.com/) |
| `toaru-anbu-no-item-op-1` | Ghost Sequence／East Of Eden／OP1 | [官方](https://toaru-project.com/item/news/index00050000.html) |
| `toaru-anbu-no-item-ed-1` | 原子崩し(メルトダウナー)／岸田教団&THE明星ロケッツ／ED1 | [官方](https://toaru-project.com/item/news/index00050000.html) |
| `tokyo-revengers-santen-sensou-hen-op-1` | IGNITE／JO1／OP1 | [官方](https://tokyo-revengers-anime.com/product/) |
| `tokyo-revengers-santen-sensou-hen-ed-1` | トリックスター／go!go!vanillas／ED1 | [官方](https://tokyo-revengers-anime.com/product/) |
| `magical-explorer-op-1` | Remedy／ASCA／OP1 | [官方](https://majieku.com/) |
| `magical-explorer-ed-1` | Double Wings／ASCA／ED1 | [官方](https://majieku.com/) |
| `mezametara-saikyou-soubi-to-uchuusen-mochi-datta-node-op-1` | UNSTOPPABLE／FLOW／OP1 | [官方](https://saikyosoubi.com/) |
| `mezametara-saikyou-soubi-to-uchuusen-mochi-datta-node-ed-1` | MY WAY／ASTERISM／ED1 | [官方](https://saikyosoubi.com/) |
| `yowaki-max-reijou-nano-ni-ratsuwan-konyakusha-sama-no-kake-ni-notte-shimatta-op-1` | 強気MAX宣言／鈴木このみ／OP1 | [官方](https://yowaki-max-anime.com/music/) |
| `yowaki-max-reijou-nano-ni-ratsuwan-konyakusha-sama-no-kake-ni-notte-shimatta-ed-1` | 夜明けまでに／伊藤美来／ED1 | [官方](https://yowaki-max-anime.com/music/) |

- 已處理anime ID：`curated-191656`、`curated-202250`、`curated-209463`、`curated-187316`、`curated-205896`、`curated-186742`、`curated-178083`、`curated-169581`、`curated-186541`、`curated-200455`。
- 實際新增：10個動畫頁、20個用途／歌曲識別、40組身分與用途證據；全目錄30季、2,015部、4,472用途（4,425 OP／ED、38 IN、9 TS）。沒有新增音源、影片metadata或發行品，原有2,005部公開JSON保持不變，ID與網址穩定。
- 已補欄位：動畫原名、羅馬字識別、季度、TV首播／時段及來源；歌曲原名、演唱名義、OP／ED用途及來源。三天戦争編保留原篇章名；深夜TV首播與節目表日期分開，マジカル★エクスプローラー先行網播不取代TV日期，幻想水滸伝初回60分鐘不改判為特殊番。
- 證據重用：官方music、staff、product及onair頁一次核對多項基本事實；同工作階段沿用UtaTen秋季與YourAnimes中文索引。生徒会ED使用官方music的公開ED分頁，不從預設只顯示OP的頁面推定；角色演唱版只見BD收錄宣傳，本階段未增加為TV用途。原子崩し(メルトダウナー)依官方解禁公告保留名稱，不從其他媒體自行拆名。

### 缺口及續查條件

- 秋季目前30部60筆OP／ED及2筆IN仍是子集，標準TV新作、續播與輪替聯集未閉合；第41批續補其餘可快速核實作品與未明歌曲。
- 本批20筆基本必要欄位無未解衝突；創作、官方影片、音源、收錄、平台、正式譯名及圖片依既有觸發條件留待詳細階段。
- 生徒会〈ぴ〉已公告角色演唱BD收錄；後續深化以官方BD曲目表核對角色、CV與版本，不把試聽影片或收錄版直接算成新TV用途。其他歷史詳細缺口及Re：START交叉用途缺口沿上批。

### 本機檢查與展示

- `npm test`4檔／6項、`npm run build`2,061 HTML／4,120公開產物、10部20筆實際ApiProvider解析及`npm run test:e2e`完整6條均通過。
- in-app Chromium預設桌面季度62筆／30部，首屏24列、3頁；搜尋幻想水滸伝得到2筆→動畫頁全部OP／ED。10部393×852手機逐頁核對，20筆用途均存在、無水平溢出、0影片iframe；長標題與深夜日期可讀。沒有聲稱實際播放或地區可用性。
- Cloudflare dry-run exit0且有成功marker、公開邊界243檔、文件連結、diff格式及新增行私隱／credential模式全部通過；未改程式、contract、UI、依賴或設定，臨時筆記、取回資料、log及測試產物留在repository外。
- 待固定PR head與CI／Workers、正常合併、實際部署及live驗收；production仍為第39批`14a7d32`／`batch39-basics`。


### 第40批正式發布驗收

[PR #132](https://github.com/kyeunga25/anisonary/pull/132)固定head`7654a2a`的quality及Workers Builds成功後正常rebase合併；main來源`0b82c2ef570a0ecc5e825228bf6e8941edf00b91`兩項檢查成功，tree與驗收PR一致且部署前乾淨。實際Wrangler部署exit0，版本metadata核對來源、PR及`batch40-basics`標記；正式驗收後建立並推送同名annotated Git tag。

71個正式入口與本機產物SHA-256一致，包含全部30季度HTML、10部新增動畫HTML／JSON；2條不存在route正確404，CSP、安全標頭及API noindex／revalidation／無CORS通過。這是所列入口驗收，並非重新取得全目錄2,015部JSON。正式季度62筆用途／30部、每頁24列；搜尋「ぴ」得到2筆，點選生徒会ED後同頁顯示全部2首，ED來源正確指向官方music公開分頁。393像素手機內容寬393、0影片iframe，無水平溢出；沒有聲稱實際播放或地區可用性。

第41批持續2026秋標準TV基本資料；新增逐用途的欄位盤點及待補狀態，先以現有證據計算，不因此重查全部歌曲。基本階段與長期目標仍未完成，詳細資料保持分階段補充。


## 2026-10-19 批次：2020-2026-tv-basics-41（已正式發布）

完成層次：基本資料與逐用途狀態；新增10部2026秋標準TV、20筆OP／ED，固定截止日2026-10-14，查閱日2026-10-19。詳細資料集中深化延後；同一已讀官方頁可支持的必要角色資料一併保存。

| 公開 theme ID | 曲名／演唱或官方音樂名義／用途 | 第一方來源 |
| --- | --- | --- |
| `oji-san-wa-kawaii-mono-ga-osuki-op-1` | LIKE³／八木勇征／OP1 | [官方](https://ojikawa.com/music/) |
| `oji-san-wa-kawaii-mono-ga-osuki-ed-1` | 尊い♡界隈／前田佳織里／ED1 | [官方](https://ojikawa.com/music/) |
| `sekai-saikyou-no-majo-hajimemashita-op-1` | 影響力∞アイドル／HoneyWorks feat.ハコニワリリィ／OP1 | [官方](https://sekamajo-anime.com/) |
| `sekai-saikyou-no-majo-hajimemashita-ed-1` | 星を巡る／ロクデナシ／ED1 | [官方](https://sekamajo-anime.com/) |
| `tank-chair-sensha-isu-op-1` | DALALA／SiM／OP1 | [官方](https://www.tankchair-anime.com/musicbluray.php) |
| `tank-chair-sensha-isu-ed-1` | SYNC／Daoko／ED1 | [官方](https://www.tankchair-anime.com/musicbluray.php) |
| `yasei-no-last-boss-ga-arawareta-2nd-season-op-1` | Melodic Impact／Suspended 4th／OP1 | [官方](https://www.lastboss-anime.com/music/index.html) |
| `yasei-no-last-boss-ga-arawareta-2nd-season-ed-1` | 揺れてスカート／ちゃくら／ED1 | [官方](https://www.lastboss-anime.com/music/index.html) |
| `shuiro-no-kamen-op-1` | Firestarter／MAN WITH A MISSION／OP1 | [官方](https://the-vermilion-mask.com/news/contents/article_740pyw72brqp2drx.html) |
| `shuiro-no-kamen-ed-1` | 声／yutori／ED1 | [官方](https://the-vermilion-mask.com/news/contents/article_740pyw72brqp2drx.html) |
| `keroro-gunsou-2026-op-1` | キライのちスキ！／ano／OP1 | [官方](https://www.bn-pictures.co.jp/keroro-anime/tv/music/) |
| `keroro-gunsou-2026-ed-1` | 秘密のパノラマ／PURPLE BUBBLE／ED1 | [官方](https://www.bn-pictures.co.jp/keroro-anime/tv/music/) |
| `tempal-item-no-chikara-op-1` | SATISFY／Re:name／OP1 | [官方](https://tempal-anime.net/music/index.html) |
| `tempal-item-no-chikara-ed-1` | Ray of Emotion／導凰／ED1 | [官方](https://tempal-anime.net/music/index.html) |
| `psyren-op-1` | WARNING!!／CLAN QUEEN／OP1 | [官方](https://psyren-anime.com/music) |
| `psyren-ed-1` | ICARUS／Who-ya Extended／ED1 | [官方](https://psyren-anime.com/music) |
| `marronnier-oukoku-no-shichinin-no-kishi-op-1` | さよならは言わない／yama／OP1 | [官方](https://www.nhk-character.com/chara/marronnier/news/2610021/) |
| `marronnier-oukoku-no-shichinin-no-kishi-ed-1` | マロニエの花が咲く頃に／藤澤慶昌／ED1 | [官方](https://www.nhk-character.com/chara/marronnier/news/2610051/) |
| `kusuriya-no-hitorigoto-3rd-season-op-1` | 雲を抜け風下へ私だけ／ヨルシカ／OP1 | [官方](https://kusuriyanohitorigoto.jp/season3/music/) |
| `kusuriya-no-hitorigoto-3rd-season-ed-1` | AIYOU／Eve／ED1 | [官方](https://kusuriyanohitorigoto.jp/season3/music/) |

- 已處理anime ID：`curated-202079`、`curated-211778`、`curated-209499`、`curated-204389`、`curated-195571`、`curated-216557`、`curated-212888`、`curated-204011`、`curated-212799`、`curated-195516`。
- 實際新增10個動畫頁、20筆用途／歌曲識別、43組身分／用途及必要credits證據。全目錄30季、2,025部、4,492用途（4,445 OP／ED、38 IN、9 TS）；沒有新增音源、影片metadata或發行品。マロニエED只保存官方列示的作曲、編曲；未推定藤澤慶昌演唱。薬屋OP／ED同頁已明列的詞／曲／編共7項角色一併保存；本批合計9項創作角色，不算完成詳細深化。
- 基本欄位包含動畫原名、識別、季度、TV日期／時段、歌曲原名、官方音樂名義、OP／ED與第一方／交叉來源。野生ラスボス及テムパル的先行網播日期不取代TV首播；Marronnier時段採ciatr交叉播出資料，官方角色站確認作品及歌曲，未繞過NHK頁面限制。ケロロ使用新TV作品與新歌，不混入舊系列。
- 證據重用：同一music／onair頁支持兩首與多項事實；沿用同工作階段UtaTen與YourAnimes索引。PSYREN ED改用已實際查閱的Wikipedia動畫歌曲交叉資料，沒有用仍標未公布的索引作證；Marronnier使用ciatr，薬屋使用TVガイド與9月25日官方解禁，均未以10月14日後的新公告推入固定範圍。

### 逐用途資料狀態

- `dataStatus` 經型別、季度authoring、builder、ApiProvider、公開JSON及動畫頁接通。先以生徒会OP／ED與幻想水滸伝OP／ED共4筆真實歌曲細分已查閱交叉來源的欄位引用，並保留〈ぴ〉角色演唱BD的具體續查條件；沒有重新查詢全部歌曲或搬移全部歷史seed。
- 全部4,492筆用途均有依現有欄位產生的狀態；243筆具有三項基本欄位各自第一方／交叉證據引用，4,249筆保留第一方／交叉來源、待細分欄位證據。此分類不撤銷既有審閱，也不把來源已登記誤稱未有基本歌曲資料。
- `details` 分列詞／曲／編、音源、官方影片、收錄與確切平台；`pendingFields` 可供後續按缺口取用，`followUp` 保存公開缺口及續查條件。未記錄不表示不存在或必然適用；已有資料不代表全部版本已齊備，不輸出完整度百分比。合併songwriting不拆詞曲，官方入口不冒充曲目，YouTube形式不推定full／TV。
- 所有既有2,015部資料在排除新狀態及上述4筆證據引用細分後逐項一致，metadata、來源日期、ID、URL及既有詳細資料保留。動畫頁狀態放在原有歌曲詳情內，關閉時仍只顯示緊湊歌名／名義；搜尋索引不增加狀態ledger或私人備註。

### 未解缺口與續查條件

- 秋季標準TV作品、續播與輪替聯集尚未閉合；40部80筆OP／ED及2筆IN仍是子集。第42批續補其餘快速可證實作品及續播，不能以80／80當作整季完成。2025夏15、春113、冬133筆尚未逐批核對；2024–2020本階段逐批盤點仍未開始。
- 恐怖コレクター已見官方主題歌担当公告，但曲名缺少清楚第一方證據，ED資訊亦未齊；兩輪定向查找後停留缺口。待可讀官方音樂／藝人解禁或具體用曲資料出現再補，不使用社群鏡像或繞過robots。
- おじカワ官方另列插曲〈パグっといっちゃって〜〉，獨立用途／演唱名義交叉證據未齊，兩輪後保留續查條件；有可核對報導／正片用曲資料時再新增IN，不把它掛成OP／ED版本。Re：START及先前詳細缺口沿原條件。
- 正式繁中譯名、圖片、逐集使用範圍及其他詳細欄位未知者留空。逐筆機械盤點不是逐筆重新搜尋，詳細齊備仍待後續專門核對。

### 本機檢查與展示

- `npm test`4檔／7項通過，包含全目錄round-trip、新狀態與舊payload相容、拒絕膨脹狀態及不拆songwriting；首次建置指出新增測試fixture的optional欄位賦undefined不符嚴格型別，改用delete，沒有修改正常程式遷就舊測試。最終`npm run build`2,071 HTML／4,140公開產物通過，Astro無errors／warnings／hints。
- `npm run test:e2e`完整6條通過，包含實際折疊詳情內的資料狀態及來源、靜態API、搜尋、離線與播放器同意流程。10部20筆通過實際ApiProvider解析；全部舊資料隔離核對及4筆真實試行通過。
- in-app Chromium桌面可讀〈ぴ〉的未記錄欄位及具體BD續查條件；10部393×852手機逐頁展開，20筆用途與20組狀態存在，內容寬393、0影片iframe。季度82筆／40部、每頁24列共4頁，未宣稱歌曲播放或地區可用性。
- 公開邊界245個repository檔案、7個文件相對連結、diff格式、私隱／credential新增行檢查及Cloudflare dry-run全部通過；dry-run exit0並有成功marker，無bindings。依賴／設定未改，沿用既有依賴稽核。臨時工具、筆記、來源取回資料、log及測試產物不納入repository。
- 正式發布待固定PR head、CI／Workers、正常合併、實際部署及live驗收；目前production為第40批`0b82c2e`／`batch40-basics`。

預覽入口：`/seasons/2026-fall/`、`/anime/kusuriya-no-hitorigoto-3rd-season/`、`/anime/marronnier-oukoku-no-shichinin-no-kishi/`、`/anime/seitokai-ni-mo-ana-wa-aru/`；展開歌曲詳情可看狀態，公開JSON的`themes[].dataStatus.pendingFields`可作後續續補索引。


### 第41批正式發布驗收

[PR #133](https://github.com/kyeunga25/anisonary/pull/133)固定head`3eafd79`的quality與Workers Builds成功後正常rebase合併；main來源`ad00e726a39d806191c7966f6a048fdc970fca28`兩項檢查成功，tree與驗收PR一致且部署前乾淨。實際Wrangler部署exit0，版本metadata核對來源、PR及`batch41-basics`標記；正式驗收後建立並推送同名annotated Git tag。

77個正式入口與建置產物SHA-256一致，包含30季度HTML、10部新增動畫及3部既有試行／詳細歌曲作品HTML與JSON；2條不存在route正確404，安全標頭與API noindex／revalidation／無CORS通過。13部26筆用途以實際ApiProvider讀取正式API，逐筆資料狀態與深層契約一致；臨時驗收工具最初使用字串順序比較，改用物件深層比較後通過，沒有更改產品資料或降低parser gate。這是所列入口驗收，不是重新取回全目錄2,025部API。

正式站展開〈ぴ〉可見基本證據、各類未記錄欄位及BD角色版續查條件；393像素手機內容寬393、0影片iframe。全部狀態由本批已驗證建置輸出，舊來源日期保留；未聲稱全部詳細資料已收齊、實際播放或地區可用性。第42批續補其餘2026秋標準TV基本資料及季度聯集，長期與基本階段仍未完成。


## 2026-10-19 批次：2020-2026-tv-basics-42（已正式發布）

完成層次：基本資料；新增10部2026秋標準TV、20筆OP／ED，沿用逐用途狀態。固定截止日2026-10-14，實際查閱日2026-10-19；不延長詳細資料搜尋。

| 公開 theme ID | 曲名／官方音樂名義／用途 | 第一方來源 |
| --- | --- | --- |
| `dark-machine-the-animation-op-1` | 存在理由　改／BUCK∞TICK／OP1 | [官方](https://www.fujitv.co.jp/fujitv/news/20260888.html) |
| `dark-machine-the-animation-ed-1` | Galaxy Mode／三代目 J SOUL BROTHERS／ED1 | [官方](https://sugizo.com/contents/451817) |
| `battle-spirits-re-zekkai-no-kuu-op-1` | Here we are！／JAM Project／OP1 | [官方](https://www.bn-pictures.co.jp/battlespirits/music/) |
| `battle-spirits-re-zekkai-no-kuu-ed-1` | パルス／秘めごと／ED1 | [官方](https://www.bn-pictures.co.jp/battlespirits/music/) |
| `zombie-sagashitemasu-op-1` | ラキラキ／すりぃ／OP1 | [官方](https://zommasu.com/music/) |
| `zombie-sagashitemasu-ed-1` | ソフトアポカリプス／cadode／ED1 | [官方](https://zommasu.com/music/ending.html) |
| `shin-tennis-no-ouji-sama-u17-world-cup-kesshou-member-ketteisen-op-1` | Walls And Bridges／青酢／OP1 | [官方](https://tenipuri.jp/u17/selection-match/) |
| `shin-tennis-no-ouji-sama-u17-world-cup-kesshou-member-ketteisen-ed-1` | 金環蝕 phenomenal／跡部景吾&忍足侑士／ED1 | [官方](https://tenipuri.jp/u17/selection-match/) |
| `tetsuryou-meet-with-tetsudou-musume-op-1` | GO! GO! RAILWAY!!／亜咲花／OP1 | [官方](https://tetsuryo-anime.com/) |
| `tetsuryou-meet-with-tetsudou-musume-ed-1` | わたし未来線／てつりょー会（橘めい・庄子真央・福嶋晴菜・月城日花）／ED1 | [官方](https://tetsuryo-anime.com/) |
| `choujun-choujou-senpai-op-1` | ザッツ！超常／M!LK／OP1 | [官方](https://chojun-anime.com/music/op/) |
| `choujun-choujou-senpai-ed-1` | またあした／至福ぽんちょ／ED1 | [官方](https://chojun-anime.com/music/ed) |
| `tougen-anki-nikko-kegon-no-taki-hen-op-1` | BACKLASH／Hiromitsu Kitayama／OP1 | [官方](https://tougenanki-anime.com/music/op3/) |
| `tougen-anki-nikko-kegon-no-taki-hen-ed-1` | 手と手／TRACK15／ED1 | [官方](https://tougenanki-anime.com/music/ed3/) |
| `tsuihou-sareta-cheat-fuyo-majutsushi-wa-kimama-na-second-life-wo-ouka-suru-op-1` | エンバートーチ／sumika／OP1 | [官方](https://sh-anime.shochiku.co.jp/chiifuyo-anime/music) |
| `tsuihou-sareta-cheat-fuyo-majutsushi-wa-kimama-na-second-life-wo-ouka-suru-ed-1` | ロールプレイングライフ／Luov／ED1 | [官方](https://sh-anime.shochiku.co.jp/chiifuyo-anime/music) |
| `vertex-force-op-1` | シンクロブルー／ClariS／OP1 | [官方](https://vertexforce.jp/music/) |
| `vertex-force-ed-1` | エメラルド／はしメロ／ED1 | [官方](https://vertexforce.jp/music/?page=ed) |
| `hyouken-no-majutsushi-ga-sekai-wo-suberu-ii-op-1` | Diamond Dust／Sizuk／OP1 | [官方](https://hyouken-anime.com/) |
| `hyouken-no-majutsushi-ga-sekai-wo-suberu-ii-ed-1` | COMPRESSION :[／内田真礼／ED1 | [官方](https://hyouken-anime.com/) |

- 已處理anime ID：`curated-179876`、`curated-187990`、`curated-199007`、`curated-199068`、`curated-199594`、`curated-200294`、`curated-204650`、`curated-207329`、`curated-209562`、`curated-212503`；另補`seitokai-ni-mo-ana-wa-aru-ed-1`既有續查備註的官方公告來源。
- 實際新增10個動畫頁、20筆用途／歌曲識別、52組身分／用途及credits證據；同一官方music頁已明列的38項詞／曲／編角色一併保存，不另開詳細搜尋。全目錄30季、2,035部、4,512用途（4,465 OP／ED、38 IN、9 TS），全部用途保留資料狀態。沒有新增音源、影片metadata、發行品或其他平台項目。
- 基本欄位涵蓋動畫原名、識別、季度、TV首播及時段、歌曲原名、音樂名義、OP／ED、第一方及交叉來源。DARK MACHINE、テニプリ、てつりょー、チー付与及冰剣保留深夜節目表與翌日首播；超巡每週23:00與首回23:15分開說明。ゾンビ日期／放送枠依官方，23:30時段另由Mikiki交叉播出資料支持。
- Dark Machine官網music入口未呈現完整內容，改用已讀的富士官方解禁／播出公告及SUGIZO 10月14日官方公告，沒有猜測隱藏API；保留BUCK∞TICK、〈存在理由　改〉的字形與空白。〈COMPRESSION :[〉保留原標點；Sizuk保存音樂專案名義與已列創作角色，沒有把俊龍或未知個別歌唱者補作演唱。
- 交叉證據重用10月6日Mikiki季度表；チー付与ED使用10月14日アニしま頁，不使用仍標未公布的索引作曲名證據。單頁同時支持OP／ED及多項事實；公開版本只保留必要事實與來源外連。
- 既有2,024部JSON逐項SHA-256不變；生徒会ED僅補入已查閱的[官方BD角色版公告](https://nama-anaru.com/news/?article_id=71467)，讓原有續查備註可追溯，原欄位、來源日期、ID及URL均保留。沒有把該BD角色版算成新的TV用途。

### 未解缺口與續查條件

- 50部100筆OP／ED及2筆IN仍是秋季子集。一次有界AniList TV身分盤點取得56條，含短篇、特別編排及另立的分割季度；這不是完整優先TV分母，仍需與中文季度索引及續播聯集對照。沒有將原始API回應或未審核候選加入repository。
- 夜桜第2期、ルルットリリィ、ダイヤactII已有第二季度歌曲，但尚未登記秋季用途關聯；第43批沿用原公開ID與來源補正季度，避免為第2クール另建重複歌曲／作品。千歳第2クール基本歌曲接續核對；原期別與已完成詳細資料保留。
- ガルパンもっとらぶらぶ已確認TV編排，主題曲獨立索引可讀，但尚缺清楚可讀的第一方曲名／角色演唱證據；兩輪定向查找後保留，待官方音樂／商品／藝人頁或可讀公開staff資料出現時續補。恐怖コレクター及兩首插曲交叉缺口沿上批條件，不重搜所有資料庫。
- 本批20筆基本必要欄位無未解衝突；正式譯名、圖片、個別演唱、音源版本、官方影片、完整收錄及地區可用性仍未齊備，按各筆狀態及後續深化條件接續。詞曲等已記錄不代表所有創作角色及版本完整。
- 2025夏15、春113、冬133筆既有OP／ED尚未逐批核對，2024–2020本階段逐批盤點尚未開始；其他季度的標準TV作品聯集仍未閉合。

### 本機檢查與展示

- `npm test`4檔／7項、`npm run build`2,081 HTML／4,160公開產物通過，Astro無errors／warnings／hints。10部20筆通過實際ApiProvider解析，逐筆基本欄位證據狀態正確；舊JSON差異僅限上述1筆來源補充。
- 本批只修改既有季度資料與進度，沒有改UI、contract、搜尋、播放器、依賴或設定；依變更矩陣沿用第41批6條本機E2E，不額外重跑。正式發布仍等待固定head的完整CI。補入既有續查公告來源後重建並更新必要資料檢查。
- in-app Chromium：10部393×852手機逐頁展開，20筆用途及20組狀態存在，內容寬393、0影片iframe；包含最長標題。桌面秋季102筆／50部，每頁24列共5頁，狀態保持在折疊詳情內；搜尋Galaxy Mode得到1筆，點選後同頁顯示全部2首。未宣稱實際播放或地區可用性。
- Cloudflare dry-run exit0且有成功marker、無bindings；公開邊界245個repository檔案、文件連結、diff格式與新增行私隱／credential檢查全部通過。臨時來源筆記、API身分盤點、工具、log及測試產物留在repository之外。
- 正式發布待固定PR head、CI／Workers、正常合併、實際部署及獨立live驗收；目前production為第41批`ad00e72`／`batch41-basics`。

預覽入口：`/seasons/2026-fall/`、`/anime/vertex-force/`、`/anime/hyouken-no-majutsushi-ga-sekai-wo-suberu-ii/`、`/anime/tetsuryou-meet-with-tetsudou-musume/`。下一批接續2026秋其餘標準TV、分割季度及續播關聯；基本階段及長期目標未完成。


### 第42批正式發布驗收

[PR #134](https://github.com/kyeunga25/anisonary/pull/134)固定head`df62106`的quality與Workers Builds成功後正常rebase合併；main來源`34838d7cf2330fe083003a1a2d4e679963956f5d`兩項檢查成功，tree與驗收PR一致且部署前乾淨。實際Wrangler部署exit0，版本metadata核對來源、PR及`batch42-basics`標記；正式驗收後建立並推送同名annotated Git tag。

73個正式入口與建置產物SHA-256一致，包含30季度HTML、10部新增動畫及生徒会的HTML與JSON；2條不存在route正確404，安全標頭與API noindex／revalidation／無CORS通過。11部22筆用途以實際ApiProvider讀取正式API，資料狀態與深層契約一致。這是所列入口驗收，不是重新取回全目錄2,035部API。

正式季度102筆用途／50部、每頁24列；搜尋Galaxy Mode得到1筆，點選後同頁顯示全部2首，詳情包含逐欄位狀態與來源。393像素手機內容寬393、0影片iframe；臨時來源研究分頁關閉後核對正確目標視窗，沒有修改產品排版。未聲稱實際播放或地區可用性。

第43批執行中：先修正既有分割季度／續播關聯，沿用原ID、歌曲與已核對詳細資料；只更新本次實際查閱的動畫來源日期，逐用途缺口繼續保留。基本階段與長期目標均未完成。


## 2026-10-19 批次：2020-2026-tv-basics-43（已正式發布）

完成層次：2026秋分割季度／續播基本資料與動畫來源日期；處理8部28筆OP／ED，新增2部、11筆用途，沿用17筆既有用途與詳細成果。固定截止日2026-10-14，實際查閱日2026-10-19。

| 公開 theme ID | 歌曲／官方音樂名義／用途 | 第一方來源 |
| --- | --- | --- |
| `diamond-no-ace-act-ii-second-season-op-1` | Let’s Go Crazy／Baby Canta／OP1 | [官方](https://news.ponycanyon.co.jp/2026/07/123565) |
| `diamond-no-ace-act-ii-second-season-ed-1` | NUMBER／SUPER★DRAGON／ED1 | [官方](https://super-dragon.jp/discography/call-me-asap-number/) |
| `diamond-no-ace-act-ii-second-season-op-2` | NEVER SAY NEVER AGAIN／GLAY／OP2 | [官方](https://www.glay.co.jp/news/detail/10279) |
| `diamond-no-ace-act-ii-second-season-ed-2` | ROAD TO BE BLUE／OxT／ED2 | [官方](https://diaace.com/music/) |
| `mahou-no-shimai-luluttolilly-op-1` | Bubee／ILLIT／OP1 | [官方](https://www.luluttolilly.com/staff-cast/) |
| `mahou-no-shimai-luluttolilly-ed-1` | Calling／ルルットリリィ［こんぺとリリィ（CV.橘 めい）、ましゅールル（CV.小鹿なお）］／ED1 | [官方](https://www.luluttolilly.com/staff-cast/) |
| `mahou-no-shimai-luluttolilly-op-2` | Swingin' Magic／ILLIT／OP2 | [官方](https://www.luluttolilly.com/news/detail.php?id=24340) |
| `mahou-no-shimai-luluttolilly-ed-2` | どりぃむアラモード／ルルットリリィ［こんぺとリリィ（CV：橘めい）、ましゅールル（CV：小鹿なお）］／ED2 | [官方](https://www.luluttolilly.com/news/detail.php?id=24340) |
| `yozakura-san-chi-no-daisakusen-2nd-season-op-1` | What's "KAZOKU"?／櫻坂46／OP1 | [官方](https://mission-yozakura-family.com/) |
| `yozakura-san-chi-no-daisakusen-2nd-season-ed-1` | Shalala／ピラフ星人／ED1 | [官方](https://mission-yozakura-family.com/) |
| `yozakura-san-chi-no-daisakusen-2nd-season-op-2` | フォーエバーソング／ハンブレッダーズ／OP2 | [官方](https://mission-yozakura-family.com/music/index04.html) |
| `yozakura-san-chi-no-daisakusen-2nd-season-ed-2` | I'm still breathing／KID PHENOMENON／ED2 | [官方](https://mission-yozakura-family.com/music/index04.html) |
| `chitose-kun-wa-ramune-bin-no-naka-op-1` | ライアー／Kucci／OP1 | [官方](https://chiramune.com/news/index00180000.html) |
| `chitose-kun-wa-ramune-bin-no-naka-ed-1` | 陽炎／サイダーガール／ED1 | [官方](https://chiramune.com/news/index00180000.html) |
| `chitose-kun-wa-ramune-bin-no-naka-op-2` | 咲く／サイダーガール／OP2 | [官方](https://chiramune.com/music/index.html) |
| `chitose-kun-wa-ramune-bin-no-naka-ed-2` | どこにもいけないまま／Aruma／ED2 | [官方](https://chiramune.com/music/index.html) |
| `tsuihou-sareta-tensei-juukishi-wa-game-chishiki-de-musou-suru-op-1` | Awake／SPYAIR／OP1 | [官方](https://www.qobuz.com/jp-ja/album/awake-spyair/drp5mf9lvi6y4) |
| `tsuihou-sareta-tensei-juukishi-wa-game-chishiki-de-musou-suru-ed-1` | Lv.1職業：人間／ReoNa／ED1 | [官方](https://www.sonymusic.co.jp/artist/ReoNa/info/584735) |
| `tsuihou-sareta-tensei-juukishi-wa-game-chishiki-de-musou-suru-op-2` | Rewrite the Answer／常闇トワ／OP2 | [官方](https://sh-anime.shochiku.co.jp/jukishi-anime/music/) |
| `tsuihou-sareta-tensei-juukishi-wa-game-chishiki-de-musou-suru-ed-2` | コンテンポラリーダンス／PompadollS／ED2 | [官方](https://sh-anime.shochiku.co.jp/jukishi-anime/music/) |
| `uchi-no-otouto-domo-ga-sumimasen-op-1` | アイコトバ／DISH//／OP1 | [官方](https://www.youtube.com/watch?v=X_knFby9AJc) |
| `uchi-no-otouto-domo-ga-sumimasen-ed-1` | Clover／汐れいら／ED1 | [官方](https://www.youtube.com/watch?v=4KZnNNPfkss) |
| `uchi-no-otouto-domo-ga-sumimasen-op-2` | LOVE ＆ LIKE／ねぐせ。／OP2 | [官方](https://uchioto-anime.com/music/) |
| `uchi-no-otouto-domo-ga-sumimasen-ed-2` | まばたき／ミーマイナー／ED2 | [官方](https://uchioto-anime.com/music/) |
| `juuou-mujin-dandivine-op-1` | 残響≠ブラスター／西川貴教／OP1 | [官方](https://gattaishin.com/dandivine/music/) |
| `juuou-mujin-dandivine-ed-1` | ミカンセイオーディナリー／DayRe:／ED1 | [官方](https://gattaishin.com/dandivine/music/) |
| `dragon-ball-super-beerus-op-1` | オノガミ／メガテラ・ゼロ／OP1 | [官方](https://dragonball-super.com/music/index.html) |
| `dragon-ball-super-beerus-ed-1` | 完璧のペキ／ビッケブランカ／ED1 | [官方](https://dragonball-super.com/music/index.html) |

- 已處理anime ID：`curated-177634`、`curated-178749`、`curated-182578`、`curated-180082`、`curated-180136`、`curated-203490`、`curated-213068`、`curated-206814`。新增Dandivine及Dragon Ball Super: Beerus兩部；千歳、重騎士、うちの弟ども各補第二季度OP／ED，ダイヤ補ED2，另5筆既有第二季度歌改掛秋季，未建立重複動畫或歌曲ID。
- 全目錄30季、2,037部、4,523用途（4,476 OP／ED、38 IN、9 TS）；28筆處理用途包含11筆新增及17筆既有。全部用途保留`dataStatus`，278筆有基本三欄各自第一方／交叉證據、4,245筆保留來源待細分引用；狀態不等同所有詳細資訊已齊備。沒有新增音源、影片metadata或發行品。已讀官方頁明列的16項詞／曲／編角色一併保存，未推導演唱團隊或full／TV。
- 春季原有5筆第二季度用途改掛2026秋，春季現有177筆、詳細核心132；秋季116筆、詳細核心1。歌曲、用途序號、URL及既有credits、影片、收錄均保留。夏季第一季度4筆及千歳2025秋2筆使用明確用途季度，避免將舊歌隨作品續播自動帶進秋季。原有來源可重用，沒有重新核查全目錄。
- 6部既有作品補播出標籤及秋季關聯，已完結標記按官方第二季度更正為放送中。重騎士及うちの弟ども深夜首回的實際日期分別為7月3日、7月4日，保留原節目表星期及24時記法，沒有將先行配信當TV首播。千歳官方演唱名義保留`Aruma`；Dandivine羅馬字未加入疑似混字形，未補造正式繁中名稱或圖片。

### 動畫來源日期與資料保留

- authoring新增可選`metadataSources`，按canonical URL逐項更新實際查閱的動畫來源；`metadataVerifiedAt`仍作未重查項目的基準。Builder取動畫來源最新日期作公開`verifiedAt`，沿用既有公開API與parser，不新增runtime資料服務。只對6部真實續播試行，沒有搬移全量歷史資料。
- 2,029部非本批動畫JSON逐項SHA-256不變；17筆既有用途的核心、credits、影片、音源及發行關係一致，舊歌曲來源逐項不變；28條未重查動畫來源的資料與日期保留。新增日期只屬本次實際查閱來源，千歳原識別來源仍為10月16日，其餘舊識別／圖像仍沿用原日期。
- 首次完整目錄測試正確攔下重騎士／うちの弟ども第一季度只填季度而缺少用途欄位引用；補入已讀music證據及沿用夏季索引原日期後通過，未削弱parser或更改正常程式遷就測試。

### 未解缺口與續查條件

- 秋季58部仍是子集；天は赤い河のほとり與アイプリ後期歌已存在，當季關聯待第一方播出／輪替期別支持。BEYBLADE X多年歌曲尚無逐季度範圍，不能把全部9首自動掛秋季，亦不能把未知季度回填為已確認首季；後續先做可快速證實的當期用曲，其餘保留範圍缺口。
- ガルパンもっとらぶらぶ、恐怖コレクター及兩首插曲缺口沿第41–42批；缺少清楚第一方或交叉資料時保留，待具體官方音樂／商品／藝人公告或可讀正片用曲資料出現，不延長同一首搜尋。
- 本批新增11筆基本必要欄位無未解衝突；個別演唱、詳細名單、音源、官方影片、完整收錄、確切平台及地區可用性按逐筆狀態留待深化。已有部分名單不代表角色、成員或所有版本已完整。
- 2025夏15、春113、冬133筆現有OP／ED仍未逐批核對；2024–2020本階段逐批盤點未開始，各季度作品聯集未閉合。

### 本機檢查與展示

- 最終`npm test`4檔／7項、`npm run build`2,083 HTML／4,164公開產物通過，Astro無errors／warnings／hints；完整6條E2E通過（17.6秒）。8部28筆通過實際ApiProvider解析，包含個別日期、季度及資料狀態。沒有修改公開API parser、UI、依賴、CI或Cloudflare設定。
- in-app Chromium：8部393×852手機逐頁展開，28筆用途及28組狀態，內容寬393、0影片iframe；桌面季度118筆用途／58部、每頁24列。秋季搜尋千歳只列2首第二季度歌，動畫頁仍可看全部4首及2025秋／2026秋標示；新曲詳情與舊曲深度資料並存。未宣稱實際播放或地區可用性。
- Cloudflare dry-run exit0且有成功marker、無bindings。公開邊界245個repository檔案、7個文件相對連結、diff格式及新增行私隱／credential檢查全部通過；臨時工具、來源查閱筆記、log與測試產物留在repository外。
- 正式發布待固定PR head、CI／Workers、正常合併、實際部署及獨立live驗收；目前production為第42批`34838d7`／`batch42-basics`。

預覽入口：`/seasons/2026-fall/`、`/anime/chitose-kun-wa-ramune-bin-no-naka/`、`/anime/diamond-no-ace-act-ii-second-season/`、`/anime/juuou-mujin-dandivine/`。下一批2026秋其餘標準TV及續播；原季度作品聯集與基本階段未完成。


### 第43批正式發布驗收

[PR #135](https://github.com/kyeunga25/anisonary/pull/135)固定head`019c5a4`的quality與Workers Builds成功後正常rebase合併；main來源`10f1185bed1d079cbc1f3a1a6bc3a8bb317143eb`兩項檢查成功，tree與驗收PR一致且部署前乾淨。實際Wrangler部署exit0，版本metadata核對來源、PR及`batch43-basics`標記；正式驗收後建立並推送同名annotated Git tag。

67個正式入口與建置產物SHA-256一致，包含30季度HTML與8部本批動畫HTML／JSON；2條不存在route正確404，安全標頭與API noindex／revalidation／無CORS通過。8部28筆用途以實際ApiProvider讀取正式API，資料狀態、個別來源日期與深層契約一致。這是所列入口驗收，非重新取回全目錄2,037部API。正式季度118筆用途／58部；搜尋千歳只列2首秋季歌，點選後仍顯示全部4首及兩個季度。393像素手機內容寬393、4組狀態、0影片iframe。未聲稱歌曲實際播放或地區可用性。

GitHub open Dependabot警示增至24項，新增[source-map-js advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)範圍為`>=1.0.0, <1.2.2`，目前lockfile為1.2.2。24項逐一對照均無目前受影響版本，當次`npm audit --audit-level=low`為0 vulnerabilities；未修改依賴、降低gate或自行dismiss遠端警示，兩種狀態分開保留。

第44批執行中：沿一次中文季度清單與現有身分清單補餘下可快速證實的標準TV。已確認首發網路配信而未有TV證據、短篇及特殊編排另留待辦，不當成一般TV歌曲新增。來源不可讀或兩輪後未明的欄位按觸發條件續補；基本階段及長期目標未完成。


## 2026-10-19 批次：2020-2026-tv-basics-44（已正式發布）

完成層次：2026秋剩餘標準長度TV及逐筆缺口。處理8部16筆已確認用途，新增6部動畫與8筆用途；其中2部先保存已核對動畫／TV資料，歌曲用途待核對。固定截止日2026-10-14，實際查閱日2026-10-19。

| 公開 theme ID | 歌曲／官方音樂名義／用途 | 第一方來源 |
| --- | --- | --- |
| `onegai-aipri-op-1` | おねがいアイプリ！／おねがいかなえ隊／OP1 | [官方](https://aipri.jp/anime/staff-cast/) |
| `onegai-aipri-ed-1` | 放課後のおねがい！／いぎなり東北産／ED1 | [官方](https://aipri.jp/anime/staff-cast/) |
| `onegai-aipri-op-2` | かなえてキセキのエール！／おねがいかなえ隊／OP2 | [官方](https://aipri.jp/anime/staff-cast/) |
| `onegai-aipri-ed-2` | おねがいテレパシー／いぎなり東北産／ED2 | [官方](https://aipri.jp/anime/staff-cast/) |
| `sora-wa-akai-kawa-no-hotori-op-1` | 暁の空／七海ひろき／OP1 | [官方](https://www.youtube.com/watch?v=cpytH8hQ5BE) |
| `sora-wa-akai-kawa-no-hotori-ed-1` | Reunion／清水美依紗／ED1 | [官方](https://www.youtube.com/watch?v=z0cYxw8Eifg) |
| `sora-wa-akai-kawa-no-hotori-op-2` | 暁の星／水樹奈々／OP2 | [官方](https://www.vap.co.jp/sorahaakaikawanohotori/music/) |
| `sora-wa-akai-kawa-no-hotori-ed-2` | flow feat. 安藤裕子／Ryu Matsuyama／ED2 | [官方](https://www.vap.co.jp/sorahaakaikawanohotori/music/) |
| `tensei-goblin-dakedo-shitsumon-aru-op-1` | ハロー／Sou／OP1 | [官方](https://tengobu-anime.com/music/op.html) |
| `tensei-goblin-dakedo-shitsumon-aru-ed-1` | 小さな僕ら／エイハブ／ED1 | [官方](https://tengobu-anime.com/music/ed.html) |
| `shikin-neko-keibishitsu-op-1` | Truly／安月名莉子／OP1 | [官方](https://nekokeibishitsu-anime.com/music/) |
| `shikin-neko-keibishitsu-ed-1` | Chill Choose!／安月名莉子／ED1 | [官方](https://nekokeibishitsu-anime.com/music/) |
| `aoki-denshou-welsh-and-shedar-ts-1` | 僕らの未来へ／影山ヒロノブ＆奥井雅美／TS1 | [官方](https://welshandshedar-anime.com/) |
| `aoki-denshou-welsh-and-shedar-ed-1` | オムレツ／影山ヒロノブ／ED1 | [官方](https://welshandshedar-anime.com/) |
| `dreamland-op-1` | movin'on／Faulieu.／OP1 | [官方](https://www.dreamland-anime.com/) |
| `dreamland-ed-1` | dream catcher／冨岡 愛／ED1 | [官方](https://www.dreamland-anime.com/) |

- 已處理anime ID：`curated-206523`、`curated-207809`、`curated-209219`、`curated-166443`、`curated-216895`、`curated-bgm-559080`、`curated-188034`、`curated-203473`。新增6部作品、8筆用途（7 OP／ED、1 TS）；アイプリ2筆後期曲改掛秋季，天は赤い河4筆保留原欄位並補明確續查狀態。8筆既有用途的歌曲核心、名單、影片、音源與收錄未變。
- 全目錄30季、2,043部、4,531用途（4,483 OP／ED、38 IN、10 TS）；所有用途保留逐筆資料狀態，286筆具基本三欄第一方／交叉欄位證據、4,245筆保留來源待細分引用。新曲同頁已列的18項詞／曲／編角色一併保存；沒有新增音源、影片metadata、發行品或確切平台項目。sabio/高村風太按官方同一署名字串保存，不推定為兩人。
- 転生ゴブリン與紫禁的外部資料庫分類為ONA，但已核實官方一般長度TV播出，故納入本階段；不以單一format欄位排除TV。紫禁保存日本TV首回10月10日第1–4話連播與10月14日起每週三時段，未混用2025原作網播日期或初回特別編排。Welsh單集23／24分鐘由正版Hulu／U-NEXT支持，未因21:25開播便推定短篇。
- dreamland歌曲與TV預定在9月18日／8月28日已公告，保存截止日當時的待播出狀態及10月17日26:00（實際10月18日）時刻；沒有收錄10月18日新公開NCOP或把截止日後資料當本次成果。官方播出圖僅供讀取核對，不託管或加入repository；正式繁中名稱、圖像、個別演唱與詳細發行未知者留空。

### 可接續狀態與獨立身分

- `pending_verification`明確表示已確認動畫／TV資料、歌曲身分或用途證據仍待補，不等同未公告或不設OP／ED。ガルパンもっとらぶらぶ及恐怖コレクター先各建立動畫頁，themes為空，未生成候選曲名或虛增歌曲分母；季度既有「其他已收錄動畫」分區可進入查看來源與狀態。
- 獨立catalog authoring支援已核對的Bangumi身分，dreamland使用`curated-bgm-559080`與原source URL；本機索引鍵不輸出為外部provider ID，也不生成AniList連結。既有AniList seed型別與歷史生成器保持原契約，只在aggregate／新季度接受相容聯集，沒有搬移或重寫全部歷史seed。公開JSON沿用既有bangumiUrl；狀態enum增加待核對選項，parser仍拒絕狀態與曲目數矛盾。
- 2,035部非本批動畫JSON逐項SHA-256不變。差異檢查攔下アイプリ兩筆第一季度曲的來源繼承日期被推高，改為重用原有明列來源與原日期，只更新本次實際查閱的staff來源。未重查歌曲來源與動畫識別／圖像日期均保留；天は赤い河僅增加followUp，不將未讀到內容的官方頁記作重新核對。

### 未解缺口與續查條件

- ガルパンもっとらぶらぶ：TV身分／季度已確認，主題曲原名與演唱名義仍缺清楚可讀第一方證據；恐怖コレクター：官方已有OP／ED担当公告，曲名與個別用途資料不足。沿已完成兩輪的查找結果，待官方音樂／商品／藝人解禁或可讀正片資料出現時續補，不繞過NHK robots或複製社群鏡像。兩部不計入OP／ED已完成分母。
- Welsh〈僕らの未来へ〉官網標示主題歌；先保存TS與原ID，OP的明確第一方分類續補條件保留在該筆followUp。交叉報導另列插曲〈I’m in you〉，尚未取得對應第一方獨立用曲資料，不新增為OP／ED或音源版本。
- 天は赤い河のほとり：VAP入口及music頁未呈現可核對內容；已沿交叉及藝人公告確認既有第2クール歌曲資料，但不能僅按配信日推定各曲首用季度。4筆followUp記錄待官方播出／音樂頁恢復、或有電視台節目用曲資料時補季度；原夏季回退關聯不作新確認。アイプリ第一季度兩歌的夏季續播範圍留待夏季盤點，不自動按作品續播擴張。
- 中文季度87個可見非成人新作／續播身分及56條TV索引已作有界對照，另立分割季度對回原4個ID。デモンズ・クレスト官方目前只明示Prime Video獨占配信；BEYBLADE X新章主要明示ベイチューブ配信，地方TV所播章節待核對；短WEB／短篇TV與特殊編排延後。尚有其他分類及輪替未閉合，不以65部或125筆聲稱秋季已全收齊。
- 新增8筆用途的曲名、音樂名義及已保存用途均有來源；其他詳細缺口按每筆狀態續補。2025夏15、春113、冬133筆現有OP／ED未逐批核對，2024–2020本階段逐批盤點尚未開始。

### 本機檢查與展示

- 最終`npm test`4檔／8項及`npm run build`2,089 HTML／4,176公開產物通過，Astro無errors／warnings／hints。8部16筆與2個待核對空曲目狀態通過實際ApiProvider；獨立provider身份沒有偽造AniList網址，本機catalogKey未輸出。
- 完整6條E2E中5條先通過；新增provider／待核對展示斷言的無障礙連結名稱比對需要包含輔助文字與空白，依實際快照修正測試選擇器。修正後只重跑該流程，1條通過（11.8秒）；合計6條必要流程已覆蓋通過，正式發布仍待固定head完整CI。一次定向命令未匹配完整測試標題而未執行，改用正確篩選後完成；未修改正常UI或降低資料gate遷就測試。建置首次指出擴充型別影響歷史生成器，改為保留原legacy型別並在aggregate加入新身分聯集後通過。
- in-app Chromium：8部393×852逐頁展開，共16筆用途及16組狀態，兩部空曲目顯示「歌曲用途待核對」；內容寬393、0影片iframe。桌面季度128筆用途／63部有歌曲作品，另2部位於其他動畫分區，總計65部；每頁24列共6頁。一般主題歌篩選只列Welsh 1筆TS，沒有混入OP。
- Cloudflare最終產物dry-run exit0且有成功marker、無bindings；公開邊界245個repository檔案、7個相對文件連結、diff格式及新增行私隱／credential檢查全部通過。依賴與Cloudflare設定未變。臨時工具、來源筆記、公開播出圖、log及測試產物留在repository外。
- 正式發布待固定PR head、CI／Workers、正常合併、實際部署與獨立live驗收；目前production為第43批`10f1185`／`batch43-basics`。

預覽入口：`/seasons/2026-fall/`、`/anime/dreamland/`、`/anime/shikin-neko-keibishitsu/`、`/anime/girls-und-panzer-motto-love-love-sakusen-desu/`。下一批2026秋分類收尾與2026夏TV聯集；基本階段及長期目標未完成。

### 第44批正式發布驗收

[PR #136](https://github.com/kyeunga25/anisonary/pull/136)固定head`7a6d64e`的quality與Workers Builds成功後正常rebase合併；main來源`992b4d5039f4c10356cda239f0df35551f48fa6f`兩項檢查成功，tree與已驗收PR一致，部署前工作區乾淨。完整CI包含6條E2E；實際Wrangler部署exit0，版本metadata核對來源、PR與`batch44-basics`。正式驗收後建立並推送同名annotated Git tag。

67個正式入口與本機建置產物SHA-256一致，包含30季度HTML、8部處理作品HTML與JSON；2條不存在route正確404，安全標頭與API noindex／revalidation／無CORS通過。8部16筆用途以實際ApiProvider讀取正式API，兩部空曲目與獨立provider身分均通過深層契約；沒有重新取回全目錄API。

正式季度128筆用途／63部有歌作品，另2部待核對作品，每頁24列共6頁。dreamland頁面保留截止日當時的待播出標示與Bangumi連結，沒有偽造AniList；展開歌曲可見逐欄位狀態及待補索引。393像素手機內容寬393、0影片iframe；空曲目作品顯示「歌曲用途待核對」，不產生候選歌曲列。未聲稱實際播放或地區可用性。

第45批執行中：固定2020–2026標準TV基本資料優先、2007–2026長期範圍及2026-10-14截止日不變。先有界收尾秋季剩餘分類，再對照2026夏既有52條TV身分及中文季度清單；已完成兩輪的歌曲缺口只按原續查條件重啟。第44批詳細缺口及各季度未閉合範圍保留，基本階段與長期目標均未完成。


## 2026-10-19 批次：2020-2026-tv-basics-45（已正式發布）

完成層次：秋季TV作品缺口與夏季續播／第二季度基本資料，處理8部25筆用途（24 OP／ED、1筆既有IN）；新增2部動畫、2筆OP／ED，沿用23筆既有用途與詳細成果。固定資料截止日2026-10-14，實際查閱日2026-10-19。

分段提交：資料`fbaae41`、季度日期說明`4bcb1cd`；進度文件另作收尾提交，正式來源以PR合併後及live驗收記錄為準。

| 公開 theme ID | 歌曲／演唱名義 | 用途 |
| --- | --- | --- |
| `tensei-shitara-slime-datta-ken-4th-season-op-1` | 絵空事／藍井エイル | OP1 |
| `tensei-shitara-slime-datta-ken-4th-season-op-2` | TACTIC／Daoko | OP2 |
| `tensei-shitara-slime-datta-ken-4th-season-ed-1` | 渇望／CiON | ED1 |
| `tensei-shitara-slime-datta-ken-4th-season-ed-3` | ヒムナル／田所あずさ | ED3 |
| `tensei-shitara-slime-datta-ken-4th-season-ed-2` | Walk on your way／藍井エイル | IN2 |
| `honzuki-no-gekokujou-ryoushu-no-youjo-op-1` | Pages／Little Glee Monster | OP1 |
| `honzuki-no-gekokujou-ryoushu-no-youjo-op-2` | Power of Love／西野カナ | OP2 |
| `honzuki-no-gekokujou-ryoushu-no-youjo-ed-1` | 今も、ありがとう／生田絵梨花 | ED1 |
| `honzuki-no-gekokujou-ryoushu-no-youjo-ed-2` | Wanna me／adieu | ED2 |
| `yomi-no-tsugai-op-1` | 飛ぶ時／Vaundy | OP1 |
| `yomi-no-tsugai-op-2` | back shot／音田雅則 | OP2 |
| `yomi-no-tsugai-ed-1` | 飛ぼうよ／yama | ED1 |
| `yomi-no-tsugai-ed-2` | 孔雀／菅原圭 | ED2 |
| `liar-game-op-1` | あぶく／ヨルシカ | OP1 |
| `liar-game-op-2` | All in／Kroi | OP2 |
| `liar-game-ed-1` | 朝日／Lucky Kilimanjaro | ED1 |
| `liar-game-ed-2` | たりない／muque | ED2 |
| `kuroneko-to-majo-no-kyoushitsu-op-1` | Cusp／ASCA | OP1 |
| `kuroneko-to-majo-no-kyoushitsu-op-2` | ∞劣等星／ナナヲアカリ | OP2 |
| `kuroneko-to-majo-no-kyoushitsu-ed-1` | ちゅーんあっぷ☆／スピラ・スピカ | ED1 |
| `kuroneko-to-majo-no-kyoushitsu-ed-2` | Twilight Magic／中川翔子 | ED2 |
| `mujikaku-seijo-wa-kyou-mo-muishiki-ni-chikara-wo-tare-nagasu-op-1` | Windmaker／花耶 | OP1 |
| `mujikaku-seijo-wa-kyou-mo-muishiki-ni-chikara-wo-tare-nagasu-ed-1` | アンノウンミー／ウタヒメドリーム オールスターズ | ED1 |
| `tomb-raider-king-op-1` | SHOW DOWN／QWER | OP1 |
| `tomb-raider-king-ed-1` | To Be Continued／QWER | ED1 |

- 已處理anime ID：`curated-182205`、`curated-171110`、`curated-195600`、`curated-197754`、`curated-196974`、`curated-196219`、`curated-184356`、`curated-annict-17136`。新增《盗掘王》兩首QWER主題曲及《百妖譜 第３期京師篇》日本TV版作品資料；後者歌曲仍待核對，沒有直接挪用原版或其他季歌曲。
- 轉生史萊姆、黄泉、本好き、黒猫、LIAR GAME共10筆第二季度用途改掛夏季；第一季度曲與原有插曲歸屬保留。無自覺聖女兩筆補夏季續播關聯，保留6月30日AT-X的春末TV首播與7月7日TOKYO MX地上波開播差別。夏季現有77部156筆用途（155 OP／ED、1 IN），春季165 OP／ED；跨季用途不可加成唯一歌曲數。
- 全目錄30季、2,045部、4,533用途（4,485 OP／ED、38 IN、10 TS），全部用途保留`dataStatus`；288筆具基本三欄第一方／交叉欄位證據，4,245筆保留來源待細分引用。沒有新增音源、影片metadata、收錄發行品、創作角色或確切平台項目；既有23筆歌曲核心與詳細實體完整保留。
- 2,037部非本批動畫JSON逐項SHA-256不變。舊歌曲改用明列來源保留原始核對日期，只更新15組實際查閱的歌曲來源日期；動畫來源僅更新6個已查作品狀態識別及兩個已讀TV官網，其餘原日期保留。7部的來源狀態及已完結日期均早於截止日，沒有將截止日後完結倒填；LIAR GAME保留節目表4月6日24:00與實際4月7日首播。

### 已用證據與可接續缺口

- 第二季度身分及TV資訊重用已存有效證據，並核對[史萊姆官方第二弾](https://www.ten-sura.com/news/anime/tensura/news/post/11535)、[黄泉第二季度music](https://yominotsugai.com/music/cour2.html)、[本好き7月11日第二季度公告](https://booklove-anime.jp/news/contents/article_l7ubdnsug5fqy5l5.html)、[黒猫官網](https://witch-classroom.com/)、[LIAR GAME music](https://www.liargame-anime.com/music/)與[無自覺聖女官網](https://mujikaku-seijo.com/)。同頁可支持的多項基本事實一起保存，沒有為詳細欄位重跑所有來源。
- 《盗掘王》[官方music](https://tombraiderking-pr.com/music/index.html)與[中文歌曲交叉索引](https://youranimes.tw/animes/6416)確認SHOW DOWN／To Be Continued及QWER；[富士電視台公告](https://www.fujitv.co.jp/fujitv/news/20260595.html)明列常態25:15與首回25:20。作品為23分鐘、12話的一般TV；單一資料庫的季度查詢未列出此作，不能以該結果作完整分母。
- 《百妖譜》第三期的[第一方TV頁](https://b8station.tv/hyakuyoufu/)及[Annict作品識別](https://annict.com/works/17136)已確認；使用穩定Annict公開識別與獨立本機鍵，不生成不存在的AniList連結。歌曲經兩輪定向查找，尚缺日本TV版明確第一方OP／ED曲名、演唱及對應證據；維持`pending_verification`，待官方音樂／商品公告或可讀正片credit再補。
- 史萊姆〈絵空事〉新增[官方第一弾OP／ED公告](https://www.ten-sura.com/news/anime/tensura/news/post/11265)，支持原用途及春季關聯。〈Walk on your way〉保留原IN ID及春季歸屬，具體使用集數／跨季範圍仍待確認；`followUp`明列不能只由配信日推定，官方集數用曲或正片credit可核對時再補。沒有把新影片、single或album當作新歌。
- 秋季144個Annict身分與既有中文／TV索引完成有界差異對照，包含劇場、短篇、WEB及特殊編排，不作TV分母。無脳魔女原作短篇及其TV合編、已證實劇場作品與短WEB延後；其他未閉合分類與第44批既有必需缺口保留，不宣稱秋季全收齊。
- 夏季52條TV身分已全部對到季度，另有資料庫季別未列的作品與長篇續播；中文81個新作身分已對照，已讀續播名單的MAO、神の雫、入間等接第46批。百妖譜、ガルパン、恐怖コレクター及天は赤い河各按既有觸發條件續補；本好きTV完結日落在10月3日，最終回實際用曲與秋季用途仍未獨立確認，不自動跨掛。
- 詳細核心夏季103／155、春季126／165，數量變化來自用途季度調整與既有完整資料，沒有把缺少詳細資料當成基本資料失敗。2025夏15、春113、冬133筆既有OP／ED未逐批核對；2024–2020逐批盤點尚未開始。

### 本機檢查與展示

- 最終`npm test`4檔／8項、`npm run build`2,091 HTML／4,180公開產物通過，Astro無errors／warnings／hints；8部25筆與1部待核對空曲目通過實際ApiProvider。首次目錄測試攔下〈絵空事〉缺少明列用途證據；補入實際查閱的官方公告後通過，沒有修改正常parser或降低測試條件。
- 季度頁把日期標籤改為「季度索引快照」，歌曲核對日期見詳情；舊季度來源日期保持不變，不讓局部更新變成整季來源重核。隔離版本的6條E2E完整通過（21.0秒），發布使用同一tree的獨立dist。首次隔離埠環境未同步，設定一致後完整通過；測試斷言與產品程式未為該環境問題修改。
- in-app Chromium：8部393×852逐頁展開，25筆用途及25組狀態存在，內容寬393、0影片iframe；百妖譜空曲目顯示「歌曲用途待核對」。桌面夏季156筆／77部，每頁24列共7頁；搜尋Power of Love篩成1筆，點入同頁看到全部4首與春夏各自用途。未知欄位留空，沒有宣稱實際播放或地區可用性。
- Cloudflare最終產物dry-run exit0且有完成marker、無bindings。公開邊界245個repository檔案、2個相對文件連結、diff格式及新增行私隱／credential檢查全部通過；臨時身分盤點、工具、來源筆記、log及測試產物均在repository之外。發布範圍在隔離worktree驗證，主工作目錄另行修改的建置流程、設定與文件沒有混入。正式發布待固定head完整CI、正常合併、實際部署及獨立live驗收，目前production仍為第44批`992b4d5`／`batch44-basics`。

預覽入口：`/seasons/2026-summer/`、`/anime/tomb-raider-king/`、`/anime/hyakuyoufu-3rd-season-keishi-hen/`、`/anime/honzuki-no-gekokujou-ryoushu-no-youjo/`。下一批2026夏剩餘標準TV續播／輪替與較舊季度聯集；基本階段及長期目標均未完成。


### 第45批正式發布驗收

[PR #137](https://github.com/kyeunga25/anisonary/pull/137)固定head`5a5f138`的quality與Workers Builds成功後正常rebase合併；main來源`05fd069c5546f210fe61ac6029056a12e17dce75`兩項檢查成功，tree與隔離驗收版本一致，部署前工作區乾淨。實際Wrangler部署exit0，版本metadata核對來源、PR及`batch45-basics`；正式驗收後建立並推送同名annotated Git tag。原工作目錄另行修改的流程與設定保留，沒有混入本批。

69個正式入口與建置產物SHA-256一致，包含30季度HTML、夏／春季度API及8部處理作品HTML／JSON；2條不存在route正確404，安全標頭、API noindex／revalidation／無CORS通過。8部25筆用途以實際ApiProvider讀取正式API並通過深層契約，沒有重新取回全目錄API。

正式夏季156筆用途／77部，每頁24列；日期標籤明示季度索引快照，沒有重設未查閱索引的核對日期。盗掘王頁面有兩首歌曲、第一方／交叉證據與逐欄位待補狀態；393像素手機內容寬393、0影片iframe。百妖譜日本TV版維持歌曲待核對，所有既有用途保留來源日期與詳細成果；沒有聲稱實際播放或地區可用性。

第46批執行中：接續2026夏一般長度TV的續播與輪替，重用已讀MAO、神の雫、入間及アイプリ來源；長篇TV依目標年份的用曲季度補漏，作品首播年與歌曲用途季度分開。已兩輪的歌曲缺口按原條件保留，基本階段、季度完整聯集及長期目標均未完成。


## 2026-10-19 批次：2020-2026-tv-basics-46（正式發布驗收完成）

完成層次：2026夏標準TV續播與歌曲輪替，處理7部25筆用途（24 OP／ED、1 IN）；新增2部長篇TV作品、8筆用途（7 OP／ED、1 IN），17筆既有用途保留。固定資料截止日2026-10-14，實際查閱日2026-10-19；重用本工作階段已讀來源，沒有重查全量舊歌曲。

| 公開 theme ID | 歌曲／演唱名義 | 用途 |
| --- | --- | --- |
| `mairimashita-iruma-kun-4-op-1` | 一二三／Penthouse | OP1 |
| `mairimashita-iruma-kun-4-ed-1` | すーぱー優勝ちゅーーん！／CANDY TUNE | ED1 |
| `mairimashita-iruma-kun-4-ed-2` | リリス・カーペット／問題児クラス | ED2 |
| `mao-op-1` | HEARTLOUD／Kis-My-Ft2 | OP1 |
| `mao-op-2` | 僕らが上書きする世界／20th Century | OP2 |
| `mao-ed-1` | 呪愛／TRUE | ED1 |
| `mao-ed-2` | 揺蕩う／上田麗奈 | ED2 |
| `onegai-aipri-op-1` | おねがいアイプリ！／おねがいかなえ隊 | OP1 |
| `onegai-aipri-op-2` | かなえてキセキのエール！／おねがいかなえ隊 | OP2 |
| `onegai-aipri-ed-1` | 放課後のおねがい！／いぎなり東北産 | ED1 |
| `onegai-aipri-ed-2` | おねがいテレパシー／いぎなり東北産 | ED2 |
| `kami-no-shizuku-op-1` | hate you? love you?／HOKUTO | OP1 |
| `kami-no-shizuku-op-2` | Call Me Asap／SUPER★DRAGON | OP2 |
| `kami-no-shizuku-ed-1` | カミノシズク／内田真礼 | ED1 |
| `kami-no-shizuku-ed-3` | エブリー・サマー／eill | ED3 |
| `digimon-beatbreak-op-1` | Mad Pulse／MADKID | OP1 |
| `digimon-beatbreak-ed-1` | beat up／冨岡 愛 | ED1 |
| `digimon-beatbreak-ed-2` | BRAVE GROOVE／iLiFE! | ED2 |
| `digimon-beatbreak-ed-3` | ミラミラ／YENA | ED3 |
| `digimon-beatbreak-ed-4` | BREAK IT／KISS OF LIFE | ED4 |
| `digimon-beatbreak-in-1` | Edge of Limit／やぎたろ。 | IN1 |
| `one-piece-op-29` | ルミナス - Luminous／アイナ・ジ・エンド | OP29 |
| `one-piece-ed-23` | その未来／時速36km | ED23 |
| `meitantei-conan-op-62` | 愛のFIRE／新浜レオン | OP62 |
| `meitantei-conan-ed-76` | 愛で全部抱きしめて愛して／倉木麻衣 | ED76 |

- 已處理anime ID：`curated-196012`、`curated-202508`、`curated-184492`、`curated-206523`、`curated-188388`、`curated-21`、`curated-235`。MAO、神の雫共4筆第二季度歌曲由春改掛夏季；第一季度歌曲保留。入間第4季常態OP／ED補春夏續播，第7話〈リリス・カーペット〉只保留春季特別ED，並以原2026-10-15的官方集數來源補明列引用，沒有把ED2序號誤讀為第二季度。
- おねがいアイプリ的前期兩曲補夏季，後期兩曲保留秋季；依已讀官方onair把誤留的「網絡發布／時間未定」修正為2026-04-05起週日09:30的TV播出。MAO、神の雫、入間及DIGIMON BEATBREAK使用已讀作品資料更新截止日前已完結狀態，原作品來源與圖像日期不整批改寫。
- DIGIMON BEATBREAK補入ED2〈BRAVE GROOVE〉／iLiFE!（冬）、ED3〈ミラミラ〉／YENA（春）、ED4〈BREAK IT〉／KISS OF LIFE（夏），以及第12話插曲〈Edge of Limit〉／やぎたろ。（2025秋）。原OP〈Mad Pulse〉依唱片公司全年OP的明述補2026冬／春／夏續播關聯，原ED及其來源日期保留。
- 新增ONE PIECE及名探偵コナン原TV系列，保留1999-10-20與1996-01-08的作品首播日；2026篇章／用曲季度分開保存，沒有建立假的2026首播或按篇章複製同一動畫。ONE PIECE補エルバフ編OP29〈ルミナス - Luminous〉／アイナ・ジ・エンド、ED23〈その未来〉／時速36km（春／夏）；名探偵コナン補OP62〈愛のFIRE〉／新浜レオン、ED76〈愛で全部抱きしめて愛して〉／倉木麻衣（夏／秋），明列ED自9月26日啟用。序號用交叉索引核對，沒有猜造OP1／ED1或正式中文譯名。
- 全目錄30季、2,047部、4,541用途（4,492 OP／ED、39 IN、10 TS），4,541筆均保存`dataStatus`；296筆有基本欄位證據，4,245筆保留來源待細分引用。新增8筆具有基本歌曲／用途第一方與交叉引用；同頁順帶補〈愛のFIRE〉與〈愛で全部抱きしめて愛して〉共6筆作詞／作曲／編曲角色，其餘詳細深化延後。本批沒有新增音源、影片、發行品或確切平台項目，不把官方OST中的TV size表記變成未審核的新實體。
- 2,033部非本批動畫JSON的SHA-256逐項不變；另7部只把第45批播出說明的截止日文字改為明確2026-10-14，整份JSON除此完全相同。17筆既有歌曲核心與詳細資料保留，入間特別ED僅補穩定song ID、用途說明及既有來源引用。既有ID、slug及影片URL不變。
- 2026夏為84部170用途（169 OP／ED、1 IN），秋為67部130用途（127 OP／ED、2 IN、1 TS）；春165、冬139筆OP／ED。詳細核心夏110、春123、冬107、秋1，變化主要來自原有詳細資料的季度補正，新增歌曲不以詳細空欄判為基本資料失敗。季度覆蓋說明移除會過期的手寫筆數，數量由頁面歌單自動計算，保留尚未閉合全季分母的說明。

### 有效證據、未解缺口與續查條件

- [MAO官方music](https://www.anime-mao.com/music/)與[播出頁](https://www.anime-mao.com/onair/)、[神の雫官方music](https://dropsofgod-anime.com/music/)、[入間官方OP](https://www.nhk-character.com/chara/iruma/music/opening)／[ED](https://www.nhk-character.com/chara/iruma/music/ending)及[onair](https://www.nhk-character.com/chara/iruma/onair)、[アイプリstaff／music](https://aipri.jp/anime/staff-cast/)及[onair](https://aipri.jp/anime/onair/)一次支持各自歌曲、用途與季度編排。入間第7話的舊證據日期保留，未把未重讀來源標為本日。
- DIGIMON使用[日本コロムビア9月20日官方OST公告](https://prtimes.jp/main/html/rd/p/000005104.000019470.html)的全年OP、四首ED及插曲明述，搭配[iLiFE!唱片公司頁](https://columbia.jp/artist-info/ilife/info/92776.html)、[東映7月新ED公告](https://prtimes.jp/main/html/rd/p/000000094.000160365.html)、[第12話插曲官方商品頁](https://columbia.jp/prod-info/COKM-46151/)；[Lisani作品索引](https://www.lisani.jp/keywords/9368/)及各輪替報導作交叉核對。東映動畫官網本次403，沒有繞過或更新該頁核對日期。
- 同一官方OST公告確認另有〈Answer〉插曲及第48話使用的主題旋律英語歌唱版〈Tomorrow〉／Chica；〈Answer〉的TV使用集數／季度、〈Tomorrow〉的歌曲用途分類與獨立交叉證據仍未明。本批不將它們猜掛於首播季度或當作一般OP／ED。待官方集數用曲說明、明確正片credit或可核對交叉索引後續補；主題旋律與歌唱版亦不自動合併錄音身分。
- ONE PIECE核心由[アイナ官方single頁](https://www.ainatheend.jp/discography/detail.php?id=1021448)及[時速36km官方特設頁](https://special.36kmperhour.com/rreec/)確認，交叉歌曲歷史索引核對OP29／ED23及期間；動畫官網本次403，沒有將未讀根頁作新核對來源。ED具體首用日仍不由single或專輯發行日推定。其他2020–2025用曲尚未逐季盤點，原TV動畫頁目前只是已確認歌曲的起點，不能稱歷代歌曲全收齊。
- 名探偵コナン[読売テレビmusic](https://www.ytv.co.jp/conan/music/)與[30周年官方project頁](https://www.ytv.co.jp/conan30/project/)確認新曲與9月26日ED啟用、原TV首播及常態時段；[新浜レオン7月官方公告](https://cdn.niihamaleon.com/info/info_856/)支持夏季OP，[中文動畫索引](https://zh.wikipedia.org/wiki/%E5%90%8D%E5%81%B5%E6%8E%A2%E6%9F%AF%E5%8D%97_(%E5%8B%95%E7%95%AB))及[Anison Online 2026](https://anison.online/anime/5576)交叉核對用途／序號。同頁已讀2026年初OP／ED事實可供下一批重用；2020–2025及其他輪替仍待盤點，沒有匯入劇場版或周年特殊番歌曲。
- 既有秋季三部歌曲待核對、天は赤い河的用途季度、百妖譜日本TV版、史萊姆插曲集數及本好き10月3日最終回用曲等缺口沿用原觸發條件，不為湊齊數字重搜。2025夏15、春113、冬133筆現有OP／ED未逐批核對；2024–2020逐批盤點未開始。短篇／WEB不阻擋標準TV推進。

### 本機檢查與展示

- 最終`npm test`4檔／8項與`npm run build`通過，2,093 HTML、4,184公開產物，Astro無errors／warnings／hints。最初資料測試指出新ONE PIECE seed的owner季度與存放檔不一致，以及入間特別ED明列季度缺少既有證據引用；只修正資料位置／引用，未改正常parser、測試或安全gate。
- 實際ApiProvider讀取本批7部25筆全部通過；各季度用途與詳細核心用公開產物計算，17筆舊用途核心／細節及2,033部非本批JSON保留證明通過。
- in-app Chromium本機預覽：1280桌面夏季170筆／84部，緊湊歌單每頁24列；7部在393×852逐頁展開25組歌曲詳情及25組資料狀態，內容寬393、0影片iframe，沒有橫向溢出。季度說明使用現有動態計數，未知詳細欄位保持待補。本批只有資料及覆蓋說明，未改搜尋／UI／播放器契約，不另重跑本機完整E2E；正式PR與main正常quality gate仍須通過。
- 最終產物Cloudflare dry-run exit0且有完成marker、無bindings；公開邊界245個repository檔案、2個文件相對連結、diff格式及私隱／變更範圍檢查通過。沒有依賴／Wrangler設定變動，不重跑無關依賴或舊網址稽核。臨時研究筆記、腳本、來源摘記、log及測試產物均不在repository內。
- 正式發布已完成，見下方來源、CI、實際Cloudflare與live驗收；本機、CI與production證據分開保存。

預覽入口：`/seasons/2026-summer/`、`/anime/digimon-beatbreak/`、`/anime/one-piece/`、`/anime/meitantei-conan/`。下一批接續2026長篇TV與春／冬輪替，重用已讀官方頁，再按2025–2020倒序補聯集及基本缺口；本階段與長期目標未完成。


### 第46批正式發布驗收

- [PR #138](https://github.com/kyeunga25/anisonary/pull/138)以正常rebase流程合併；審閱head `1613e6df24b198725570bc4f5dbebc37e1de6885`，main來源`e0cfb5db3cab88a84baec091a713b6f013cfab96`的tree與審閱tree相同，部署前工作樹乾淨。PR及main的quality與Workers Builds均成功，沒有繞過gate。
- 實際Wrangler deploy exit0；Cloudflare版本metadata核對`batch46-basics`、來源main SHA與PR138均一致。正式站31條本批／受影響路由的內容逐一比對本機產物相同，安全標頭與API noindex／revalidation通過，另2條真實404；實際ApiProvider核對7部25筆完全一致。
- 正式站in-app Chromium：夏季170筆／84部、每頁24列；搜尋〈愛で全部抱きしめて愛して〉篩為1筆，點入同一動畫頁看到2首歌曲。手機393×852展開2組歌曲詳情與2組資料狀態，內容寬393、0影片iframe；已實際檢視驗收畫面。`batch46-basics` annotated tag已指向該正式來源並推送。
- 下一批第47批從已讀官方資料接續2026年初名探偵コナン歌曲、ポケットモンスター及名探偵プリキュア等長篇續播；先核實用途季度與原名／演唱／來源，再補其他2026季度與2025–2020標準TV聯集。已知短篇、特殊番與兩輪未明欄位按原條件延後，基本階段及長期目標未完成。


## 2026-10-19 批次：2020-2026-tv-basics-47（已正式發布）

完成層次：2025秋至2026冬、2026冬至春的標準TV續播／輪替，處理7部36筆用途（23 OP／ED、13 IN）；新增13筆用途（6 OP／ED、7 IN）、動畫0，23筆既有用途保留。同頁已證實劇中歌一併補入，沒有為湊批次拆開同一來源。固定資料截止日2026-10-14，實際查閱日2026-10-19。

| 公開 theme ID | 歌曲／演唱名義 | 用途 |
| --- | --- | --- |
| `fumetsu-no-anata-e-season-3-op-1` | ふめつのあなた／Perfume | OP1 |
| `gnosia-op-1` | 化けの皮／MAISONdes feat. こぼ・かなえる, 重音テト, Giga & TeddyLoid | OP1 |
| `gnosia-ed-1` | Loo% Who%／凛として時雨 | ED1 |
| `gnosia-ed-2` | FLOOR KILLER／梅田サイファー | ED2 |
| `gnosia-ed-3` | ULULO (Anime Ver.)／深澤秀行 | ED3 |
| `toujima-tanzaburou-wa-kamen-rider-ni-naritai-op-1` | Wanna be／TeddyLoid feat. Shigeru Matsuzaki & TOPHAMHAT-KYO | OP1 |
| `toujima-tanzaburou-wa-kamen-rider-ni-naritai-ed-1` | ワンモアタイム／TeddyLoid feat. 時任良治 | ED1 |
| `si-vis-the-sound-of-heroes-op-1` | So Far Away／SI-VIS | OP1 |
| `si-vis-the-sound-of-heroes-op-2` | スーパーノヴァ／SI-VIS | OP2 |
| `si-vis-the-sound-of-heroes-ed-1` | FRIENDS & SMILE／SI-VIS | ED1 |
| `si-vis-the-sound-of-heroes-ed-2` | Singing Over／SI-VIS | ED2 |
| `si-vis-the-sound-of-heroes-in-1` | MELODEA／SI-VIS | IN1 |
| `si-vis-the-sound-of-heroes-in-2` | 幻想曲（アラベスク）を君に／SI-VIS | IN2 |
| `si-vis-the-sound-of-heroes-in-3` | Braver Dreamer／SI-VIS | IN3 |
| `si-vis-the-sound-of-heroes-in-4` | エレジー／SI-VIS | IN4 |
| `si-vis-the-sound-of-heroes-in-5` | ロマンティスト・キラー／SI-VIS | IN5 |
| `si-vis-the-sound-of-heroes-in-6` | プロトスター／SI-VIS | IN6 |
| `si-vis-the-sound-of-heroes-in-7` | On the Highway／SI-VIS | IN7 |
| `si-vis-the-sound-of-heroes-in-8` | Trust me／SI-VIS | IN8 |
| `si-vis-the-sound-of-heroes-in-9` | Benedictio canticum／SI-VIS | IN9 |
| `si-vis-the-sound-of-heroes-in-10` | Destination of Life／SI-VIS | IN10 |
| `si-vis-the-sound-of-heroes-in-11` | Bless／SI-VIS | IN11 |
| `si-vis-the-sound-of-heroes-in-12` | MISSION／SI-VIS | IN12 |
| `yuusha-no-kuzu-op-1` | GUN POWDER／TOOBOE | OP1 |
| `yuusha-no-kuzu-op-2` | Revive／ClariS | OP2 |
| `yuusha-no-kuzu-ed-1` | メンタルレンタル／紫 今 | ED1 |
| `yuusha-no-kuzu-ed-2` | NON-FICTION／w.o.d. | ED2 |
| `meitantei-precure-op-1` | ハートにヒント！名探偵プリキュア！／石井あみ | OP1 |
| `meitantei-precure-ed-1` | なぜ？謎？！ANSWER／熊田茜音＆増井優花 | ED1 |
| `meitantei-precure-ed-2` | いつかわかる☆きっとあえる／熊田茜音＆増井優花 | ED2 |
| `meitantei-precure-in-1` | リキッド・アイス／キュアアルカナ（CV：東山奈央） | IN1 |
| `meitantei-conan-op-61` | Heaven Knows／B'z | OP61 |
| `meitantei-conan-op-62` | 愛のFIRE／新浜レオン | OP62 |
| `meitantei-conan-ed-74` | TOWA 〜永久に風に乗る〜／倉木麻衣 | ED74 |
| `meitantei-conan-ed-75` | 7 DAYS／Rainy。 | ED75 |
| `meitantei-conan-ed-76` | 愛で全部抱きしめて愛して／倉木麻衣 | ED76 |

- 已處理anime ID：`curated-187989`、`curated-162669`、`curated-187464`、`curated-185116`、`curated-196553`、`curated-202957`、`curated-235`。勇者のクズ第二季度兩曲由冬改掛春，第一季度保留冬；第47批前已核對的歌曲、創作、影片、音源及發行品均保留，沒有重查全部詳細資料。
- 不滅のあなたへ Season3、東島丹三郎、グノーシア補冬季續播關聯；グノーシア兩首ED仍保留秋季，依第二季度及Finale映像確認冬季使用。新增其第12話特殊ED〈ULULO (Anime Ver.)〉，署名依官方配信頁保存為深澤秀行，沒有把發行藝人署名自動填成歌唱角色。用途是第12話特殊ED，沒有將其他OST配樂全部列為歌曲。
- SI-VIS補第二季度OP〈スーパーノヴァ〉、ED〈Singing Over〉與六首已證實劇中歌〈On the Highway〉、〈Trust me〉、〈Benedictio canticum〉、〈Destination of Life〉、〈Bless〉、〈MISSION〉；同一官方第二季度曲目表及交叉索引一次支持八筆。原第一季度OP／ED及六首IN維持秋季。Boys side／Girls side／ALL STARS等表記登記於逐曲`followUp`待詳細深化，不按影片或專輯項目數新增歌曲。
- 名探偵プリキュア的OP補春／夏／秋，前期ED補春／夏，後期ED由冬改掛夏／秋；新錄第31話〈リキッド・アイス〉／キュアアルカナ（CV：東山奈央），只掛已證實夏季。官方7月31日是TV size配信公告，沒有把配信日當作TV首用日；交叉報導確認8月已改用後期ED。
- 名探偵コナン補OP61〈Heaven Knows〉／B'z及ED74〈TOWA 〜永久に風に乗る〜〉／倉木麻衣（冬／春），ED75〈7 DAYS〉／Rainy。（春／夏）。第46批OP62／ED76及原TV系列1996年首播維持。〈Heaven Knows〉是否仍跨入夏季及精確輪替界線未獨立核對，逐歌`followUp`保存需官方啟用集數／正片credit的條件，沒有用新碟發行日推定。
- 本批新增16筆作詞／作曲／編曲角色，全部來自已讀同頁明列名單：三首コナン曲10筆、〈リキッド・アイス〉3筆、〈Destination of Life〉3筆。沒有另外追搜詳細欄位，其他角色、影片、音源與發行品集中深化延後；本批未新增錄音、影片或發行品實體。
- 全目錄30季、2,047部、4,554用途（4,498 OP／ED、46 IN、10 TS），全部4,554筆保存`dataStatus`；309筆有基本欄位證據，4,245筆保留來源待細分引用。23筆舊用途核心及詳細資料逐項相同，2,040部非本批動畫JSON SHA-256不變；只更新實際查閱來源的日期，未重讀的舊來源、圖像及metadata基準保留。
- 季度實際為：2026秋68部132用途（129 OP／ED）、夏85部175用途（173 OP／ED）、春75部174用途（172 OP／ED）、冬73部159用途（146 OP／ED）；2025秋OP／ED143。詳細核心分別秋3、夏113、春127、冬107、2025秋123。數字區分用途及作品，跨季不可加成唯一歌曲／錄音；現有季度清單仍未閉合。

### 有效證據與可接續缺口

- [勇者のクズ官方music](https://yushanokuzu.com/music/)明列第一／第二季度四曲，[TV播出頁](https://yushanokuzu.com/onair/)明列連續2季度、1月10日24:55；保留實際1月11日首播的曆日差別。[不滅官方2月主題歌公告](https://www.nhk-character.com/chara/fumetsu/topics/118)、[東島官方連續2季度資料](https://tojima-rider.com/)、[グノーシア第二季度公告](https://gnosia-anime.com/news/?id=69482)及[Finale／Finale RED映像索引](https://gnosia-anime.com/movie/)補冬季關聯，歌曲身分沿用已核實的原來源。
- SI-VIS的[1月4日官方新OP／ED公告](https://si-vis.live/news/?id=69444)、[第二季度主題歌／劇中歌範圍公告](https://si-vis.live/news/?id=69824)、[PACEM官方曲目表](https://si-vis.live/music/discography/album02.html)及[Anison Online歌曲用途交叉索引](https://anison.online/artist/SI-VIS)支持新增八筆；[Lisani第二季度報導](https://www.lisani.jp/0000302983/)交叉核對兩首OP／ED。〈Destination of Life〉[Aniplex第18話官方公告](https://www.aniplex.co.jp/lineup/si-vis/news/detail/?id=69718)明列塩野海詞曲編；來源工具cache miss後，普通瀏覽器成功讀到同一公開頁，才保存核對日期。
- プリキュア的[1月主題歌官方公告](https://prtimes.jp/main/html/rd/p/000002175.000016719.html)、[後期ED官方公告](https://prtimes.jp/main/html/rd/p/000002297.000016719.html)、[第31話劇中歌官方公告](https://prtimes.jp/main/html/rd/p/000002314.000016719.html)，搭配[Oricon後期ED變更報導](https://www.oricon.co.jp/news/2474163/full/)及[Animate Times第31話報導](https://www.animatetimes.com/news/details.php?id=1788061911)。後期ED首用話數尚未逐一方確認，不猜集數；Album bonus與其他角色歌沒有自動當作TV插曲。
- グノーシア[第12話特殊ED官方公告](https://gnosia-anime.com/news/?id=69483)、[官方配信頁](https://anxmusic.lnk.to/vY5Uqb)及[OTOTOY曲目／署名交叉頁](https://ototoy.jp/_/default/p/3547530)確認〈ULULO (Anime Ver.)〉與深澤秀行。沒有試聽、下載或繞過平台地區限制，未聲稱可在任何指定市場播放。逐曲`followUp`記錄需詳細核對Anime Ver.創作／錄音對應，不強填歌唱角色。
- コナン三曲重用第46批已讀[読売テレビ官方project](https://www.ytv.co.jp/conan30/project/)，並用[Rainy。6月官方公告](https://rainy.bzone.co.jp/info/20260606-1/)、[中文動畫歌曲索引](https://zh.wikipedia.org/wiki/%E5%90%8D%E5%81%B5%E6%8E%A2%E6%9F%AF%E5%8D%97_(%E5%8B%95%E7%95%AB))及[2026歌曲交叉索引](https://anison.online/anime/5576)補入；沒有為相同官方頁重搜全部舊曲。
- [冬季中文季度清單](https://youranimes.tw/bangumi/202601)有界取得73個新列作品及26個續播身分，含劇場、特殊番、WEB及短篇，不作標準TV分母；只保存必要作品名／身分URL／時段，沒有保存使用者或觀看統計。下一批分類其中一般TV及剩餘長篇，特殊番／短篇延後。六部AniList有界資料核對TV長度、話數與播出期，未收集使用者或鏡像整個資料庫。
- 寶可夢已讀2025年4月、2025年10月與2026年5月第一方新篇章公告、中文歌曲索引，六首新OP／ED基本身分可重用；尚未寫入公開目錄。舊18筆的季度fallback需先隔離或逐曲核對，避免一補新季度就把早期歌曲全部錯掛；原始ID與既有成果保留。特殊篇〈尤〉不冒充常態OP／ED。
- 秋季三部歌曲待核對、天は赤い河用途季度、百妖譜日本TV版、史萊姆插曲集數、本好き10月最終回、DIGIMON〈Answer〉及〈Tomorrow〉分類／季度等沿用原觸發條件；已兩輪未明欄位沒有重新輪搜。2025夏15、春113、冬133筆現有OP／ED未逐批核對，2024–2020逐批盤點尚未開始；基本階段與長期目標未完成。

### 本機檢查與展示

- 最終`npm test`4檔／8項、`npm run build`2,093 HTML／4,184公開產物通過，Astro無errors／warnings／hints；實際ApiProvider解析7部36筆及逐曲續查欄位全部通過。新資料沒有修改正常程式、contract或舊測試。
- 本機in-app Chromium 393×852逐頁展開7部36組歌曲詳情與36組狀態，內容寬393、0影片iframe。SI-VIS現有16筆，既有用途篩選可縮為12筆劇中歌，再搜尋Destination縮為1筆；沿用現有緊湊歌單、動畫內篩選與詳情摺疊，沒有重做已完成UI。追加兩首續查條件亦實際可讀、無橫向溢出。
- 本批為資料變更，未改搜尋／播放器／UI契約，不另重跑本機全套E2E；正式PR及main正常quality檢查仍須通過。最終Cloudflare dry-run exit0且有完成marker、無bindings；公開邊界245個repository檔案、2個文件相對連結、diff格式及私隱／變更範圍檢查通過；沒有依賴或部署設定變更，不重跑無關舊網址或依賴掃描。
- 正式發布已完成，來源、CI、實際Cloudflare及live驗收見下方；本機、CI與production證據分開保存。

預覽入口：`/seasons/2026-winter/`、`/anime/si-vis-the-sound-of-heroes/`、`/anime/meitantei-precure/`、`/anime/gnosia/`。下一批第48批冬季剩餘標準TV續播與春季聯集；已讀證據按缺口重用，詳細資料集中深化延後。


### 第47批正式發布驗收

- [PR #139](https://github.com/kyeunga25/anisonary/pull/139)正常rebase合併；審閱head `47c02f496729dd85780dbd999f64b79dc9d8f9ef`，main來源`19f095f708e55e5fccadecef6f9eaf6fd0c462dd`的tree與審閱tree相同，部署前工作樹乾淨。PR及main的quality、Workers Builds均成功，沒有繞過gate。
- 實際Wrangler deploy exit0；版本metadata核對`batch47-basics`、來源main SHA與PR139一致。正式站31條受影響路由與本機產物逐一相同，安全標頭及API noindex／revalidation通過，另2條真實404；實際ApiProvider核對7部36筆完全一致。
- 正式站in-app Chromium：SI-VIS共16筆，按劇中歌篩為12筆，再查Destination縮為1筆。手機393×852展開新增第18話劇中歌的詞／曲／編及資料狀態，16筆均有狀態、內容寬393、0影片iframe；已實際檢視驗收畫面，測試後重設暫時viewport。`batch47-basics` annotated tag指向正式來源並已推送。
- 第48批執行中：先為尚未逐曲證實季度的舊用途接通明確待核對狀態，保留原ID及所有已核實歌曲資料，避免新增長篇續播季度時自動套用早期歌曲。以寶可夢真實歌曲最小試行，再接續冬季剩餘標準TV及春季作品聯集；基本階段及長期目標未完成。


## 2026-10-19 批次：2020-2026-tv-basics-48（已正式發布）

完成層次：標準TV續播基本資料與逐用途季度狀態，處理4部30筆OP／ED用途；新增動畫1部、用途8筆，22筆既有用途保留，其中18筆只做明確的季度待核盤點、2筆保存冬季續查條件。固定資料截止日2026-10-14，實際查閱日2026-10-19；詳細資料集中深化延後。

| 公開 theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `pokemon-2023-op-1` | Dokimeki Diary／asmi、Chinozo | 季度待核；既有歌曲保留 |
| `pokemon-2023-op-2` | Halo／yama、Botchi Boromaru | 季度待核；既有歌曲保留 |
| `pokemon-2023-op-3` | Will／IVE | 季度待核；既有歌曲保留 |
| `pokemon-2023-op-4` | Only One Story／ZEROBASEONE | 季度待核；既有歌曲保留 |
| `pokemon-2023-op-5` | GET BACK／ゆず | 基本用途／季度已核對 |
| `pokemon-2023-op-6` | アイオライト／Eve | 基本用途／季度已核對 |
| `pokemon-2023-op-7` | セカイツナガレ／リコ＆ロイ（CV：鈴木みのり＆寺崎裕香） | 基本用途／季度已核對 |
| `pokemon-2023-ed-1` | RVR ~Rising Volt Tacklers Rap~ [Friede Ver.]／Minori Suzuki、Taku Yashiro、Yuka Terasaki | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-2` | RVR ~Rising Volt Tacklers Rap~ [Orio Ver.]／Ayane Sakura、Minori Suzuki、Yuka Terasaki | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-3` | RVR ~Rising Volt Tacklers Rap~ [Murdock Ver.]／Minori Suzuki、Kenta Miyake、Yuka Terasaki | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-4` | RVR ~Rising Volt Tacklers Rap~ [Molly Ver.]／Minori Suzuki、Yuka Terasaki、Kei Shindou | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-5` | RVR ~Rising Volt Tacklers Rap~ [Landau Ver.]／Minori Suzuki、Yuka Terasaki、Ikkyuu Juku | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-6` | RVR ~Rising Volt Tacklers Rap~ [Dot Ver.]／Minori Suzuki、Yoshino Aoyama、Yuka Terasaki | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-7` | RVR ~Rising Volt Tacklers Rap~ [Friede Ver.PART2]／Minori Suzuki、Taku Yashiro、Yuka Terasaki | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-8` | RVR ~Rising Volt Tacklers Rap~ [Murdock Ver.PART2]／Minori Suzuki、Kenta Miyake、Yuka Terasaki | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-9` | RVR ~Rising Volt Tacklers Rap~ [Molly Ver.PART2]／Minori Suzuki、Yuka Terasaki、Kei Shindou | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-10` | RVR ~Rising Volt Tacklers Rap~ [Orio Ver.PART2]／Ayane Sakura、Minori Suzuki、Yuka Terasaki | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-11` | RVR ~Rising Volt Tacklers Rap~ [Landau Ver.PART2]／Minori Suzuki、Yuka Terasaki、Ikkyuu Juku | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-12` | RVR ~Rising Volt Tacklers Rap~ [Gurumin Ver.]／Minori Suzuki、Yoshino Aoyama、Yuka Terasaki | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-13` | Let me battle／9Lana | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-14` | Pikkaan!／TeddyLoid、Giga、Rina Matsuda、Hikaru Morita | 季度待核；既有歌曲保留 |
| `pokemon-2023-ed-15` | Ready Go／ME:I | 基本用途／季度已核對 |
| `pokemon-2023-ed-16` | ねてもさめても／ポルカドットスティングレイ | 基本用途／季度已核對 |
| `pokemon-2023-ed-17` | キュートなキューたい／CUTIE STREET | 基本用途／季度已核對 |
| `ao-no-orchestra-season-2-op-1` | アマデウス／Galileo Galilei | 基本用途／季度已核對 |
| `ao-no-orchestra-season-2-ed-1` | 青の魔法／チョーキューメイ | 基本用途／季度已核對 |
| `ao-no-miburo-serizawa-ansatsu-hen-op-1` | Blue Noise／Ryosuke Yamada | 基本用途／季度已核對 |
| `ao-no-miburo-serizawa-ansatsu-hen-ed-1` | 泡沫／崎山蒼志 | 基本用途／季度已核對 |
| `kagaku-bouken-survival-2nd-season-op-1` | ネバネバ／MORISAKI WIN | 保存冬季續查條件 |
| `kagaku-bouken-survival-2nd-season-ed-1` | survival dAnce／ジオ（松田颯水）×ダイヤ（小松未可子） | 保存冬季續查條件 |

- 已處理anime ID：`curated-158871`、`curated-170018`、`curated-189258`、`curated-186736`。新增〈GET BACK〉／ゆず、〈Ready Go〉／ME:I（2025春／夏）；〈アイオライト〉／Eve、〈ねてもさめても〉／ポルカドットスティングレイ（2025秋、2026冬／春）；〈セカイツナガレ〉／リコ＆ロイ（CV：鈴木みのり＆寺崎裕香）、〈キュートなキューたい〉／CUTIE STREET（2026春／夏／秋）。保留原系列2023-04-14首播、公開ID及網址，沒有拆成六部動畫。
- メガボルテージ兩曲按已核對的第91／92至111話期間掛2025春／夏；最後第111話為9月19日，沒有僅由新篇章10月31日開始便補掛秋季。ライジングアゲイン兩曲按115–136話及10月31日新篇章、翌年5月1日舊章終回掛季度。ワンダーボヤージュ5月22日起、7月17日及10月9日官方節目表明列兩首歌曲，才補夏／秋；沒有用音樂特番、CD發售或影片發布日期替代TV使用證據。特殊篇〈尤〉留待特殊番範圍，不冒充常態OP／ED。
- 寶可夢舊18筆尚未逐曲確認使用季度，明列`seasonIds: []`與`use_quarters`續查條件；原有曲名／演唱、ID、影片／平台及來源日期保持。動畫頁與全站搜尋保留全部24筆歌曲；年份／季度篩選只列已確認用途，舊18筆不自動掛入新季。2023春原先fallback的18筆移出該季用途分母，168改為150；全站歌曲沒有刪除。其原名／個別演唱名義與集數季度留到原播出期間盤點時一起核實，不把狀態盤點當作全部核心已完成。
- 新增《青のミブロ 芹沢暗殺編》：AniList189258，標準TV24分鐘／14話，2025-12-20週六17:30首播、2026-03-28完結；OP〈Blue Noise〉／Ryosuke Yamada、ED〈泡沫〉／崎山蒼志掛2025秋及2026冬。第一期動畫與四首舊歌完全保留，未混用第一期24話或2024年資料；沒有為無圖資料猜造海報網址或外部ID。
- 《青のオーケストラ Season2》兩首既有OP／ED補2026冬，原秋季、創作名單與官方影片保留；官方12月22日公告明確第13話於2026-01-04續播。已從同頁讀到詞曲編，現有資料已具備，沒有重複新增角色。サバイバル2兩曲保留已確認秋季，冬季歌曲對應在兩輪查找後仍未取得可讀的一方證據，只將缺口、查找日及續查條件寫進各曲`followUp`；不更新未成功讀取來源的日期。
- 最小相容支援：非空`seasonIds`繼續要求第一方用途證據；明列空陣列必須帶有一致的`dataStatus`與`use_quarters`續查條件，parser拒絕缺失或膨脹狀態。全站歌單／搜尋保留未知季度歌曲，清楚標示、時間排序放在已確認季度之後；年份／季度篩選排除，動畫頁直接顯示待核對。舊記錄省略欄位的行為保留，只採用於本批真實作品，沒有搬移全歷史資料。
- 全目錄30季、2,048部、4,562用途（4,506 OP／ED、46 IN、10 TS）；全部4,562筆有資料狀態，317筆有三項基本欄位的兩類證據，4,245筆保留來源待細分引用。18筆明列用途季度待核；詳細資料不作基本階段門檻。本批沒有新增詞曲編角色、錄音、影片、發行品或平台實體，未知細節留待深化。
- 22筆既有歌曲核心及細節逐項相同，20筆狀態盤點用途的來源／日期完全相同；2,044部非本批動畫JSON SHA-256不變。更新來源只涉及實際本次查閱頁面，既有metadata、識別、圖像及未重查歌曲來源日期不自動重設。

### 有效證據與可接續缺口

- 寶可夢重用[2025年4月官方新章公告](https://www.pokemon.co.jp/info/2025/04/250404_a01.html)、[2025年10月電視台歌曲公告](https://www.tv-tokyo.co.jp/plus/anime/entry/202510/17610.html)、[2026年5月新章公告](https://www.pokemon.co.jp/info/2026/05/260508_a01.html)及[中文歌曲／集數交叉索引](https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2%E5%9C%B0%E5%B9%B3%E7%B7%9A%EF%BC%9A%E7%B3%BB%E5%88%97)，不重搜六首已讀基本身分。新增[7月17日](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202607/27491_202607171855.html)、[10月9日](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202610/27491_202610091855.html)第一方節目表，一頁同時支持作品時段與兩首用曲。舊18筆逐曲`followUp`列出官方啟用集數／節目表／正片credit的續查條件；只新增已證實核心，不擴張角色版本／音源。
- 芹沢暗殺編的[官方首播日](https://miburoanime.com/news/contents/article_wfkr2v5d4e5b52vc.html)、[第二期MUSIC](https://miburoanime.com/music/)、[12月20日OP／ED公告](https://miburoanime.com/news/contents/article_80t4nrrfdlleeahn.html)，搭配[Animate Times作品、歌曲及播出交叉報導](https://www.animatetimes.com/news/details.php?id=1765109763)；已讀49筆冬季有界TV身分補外部識別、長度及話數，沒有額外取得圖像或使用者資料。
- 青のオーケストラ的[冬季第13話公告](https://aooke-anime.com/news/3125402.html)、[Season2 OP](https://aooke-anime.com/music/)及[ED](https://aooke-anime.com/music/ending.html)，沿已讀冬季中文續播身分補關聯。再放送不新增歌曲，既有詳細成果不重做。
- 冬季サバイバル2未明對應、秋季三部歌曲待核對、天は赤い河用途季度、百妖譜日本TV版、史萊姆插曲集數、本好き最終回、DIGIMON〈Answer〉與〈Tomorrow〉分類／季度等，按原公開用途及續查條件保存；沒有因新一輪而輪流重搜。2025夏15、春113、冬133筆現有OP／ED未逐批核對，2024–2020尚待完整盤點；長期及基本階段未完成。

### 本機檢查與展示

- 最終`npm test`4檔／8項、`npm run build`2,094 HTML／4,186公開產物通過，Astro無errors／warnings／hints；實際ApiProvider解析4部30筆及季度待核／續查狀態全部通過。初次型別檢查指出新測試對可選欄位直接賦值undefined，改用delete；沒有改正常程式配合測試。
- 既有6條E2E重要流程均已通過：首輪5條成功，新加未知季度流程因桌面隱藏mobile篩選summary而失敗，改為明確手機viewport後單獨重跑該流程成功。臨時config僅隔離測試輸出／port／cwd，repository測試設定未變；沒有降低時間限制或安全gate。最後只追加兩首歌曲續查備註，再跑資料測試、建置與受影響實際解析，不無故重跑無關流程。
- in-app Chromium手機393×852：4部30組歌曲詳情與狀態均實際展開，內容寬393、0影片iframe。全站搜尋可找到舊歌並直達穩定錨點及續查條件；秋季搜尋寶可夢只列2筆已確認當季歌曲。原有動畫內用途／曲名篩選與詳情摺疊保留，大量歌曲不拉長歌單；測試後重設暫時viewport。
- 最終Cloudflare dry-run exit0、有完成marker且無bindings。公開邊界245個repository檔案、7個文件相對連結、diff格式與私隱／變更範圍檢查通過；正式發布已完成，來源、CI、實際Cloudflare與live驗收見下方；本機、CI及production證據分開保存。依賴與部署設定未改，沿用既有依賴稽核狀況，不重跑全部舊連結。

預覽入口：`/anime/pokemon-2023/`、`/anime/ao-no-miburo-serizawa-ansatsu-hen/`、`/anime/ao-no-orchestra-season-2/`、`/seasons/2026-winter/`、`/search/`。下一批第49批接續冬季剩餘標準TV續播、春季作品聯集及2025–2020基本資料；短篇／WEB及詳細深化延後。


### 第48批正式發布驗收

- [PR #140](https://github.com/kyeunga25/anisonary/pull/140)正常rebase合併；審閱head `c0bd5126f6625db2997ae27baa0c1d7f3595e2ed`，main來源`69607470b329e1f3ffb5f9770d09c54736eed212`的tree與審閱tree相同，部署前工作樹乾淨。PR及main的quality、Workers Builds均成功；CI亦以正常設定跑過完整6條E2E，沒有繞過gate。
- 實際Wrangler deploy exit0；Cloudflare版本metadata核對`batch48-basics`、來源main SHA與PR140一致。正式站31條本批／受影響路由與本機產物逐一相同，安全標頭及API noindex／revalidation通過，另2條真實404；實際ApiProvider核對4部30筆完全一致。
- 正式站in-app Chromium手機393×852：寶可夢24筆歌曲均有狀態，18筆季度待核清楚顯示；舊OP1穩定錨點會打開對應詳情及續查條件，新ED17顯示已確認春／夏／秋與基本欄位證據日期。秋季搜尋只列2首當季已確認歌曲，寬393、0影片iframe；已實際檢視驗收畫面，測試後重設暫時viewport。`batch48-basics` annotated tag已指向正式來源並推送。
- 第49批執行中：先核對冬季剩餘NINJALA／BEYBLADE X等標準TV長篇；已讀基本證據按真正缺口重用，兩輪未明欄位按原續查條件保存。其後春季及2025–2020標準TV作品聯集／基本歌曲，短篇、WEB及詳細深化延後；基本階段與長期目標未完成。


## 2026-10-19 批次：2020-2026-tv-basics-49（已正式發布）

完成層次：兩部標準長篇TV的跨年基本歌曲與用途季度，處理2部22筆OP／ED；新增10筆用途、動畫0，12筆既有ID及歌曲保留，其中1筆補正原文曲名。相同官方公告一次支持多個年度的已知輪替，沒有為每首歌另開重複搜尋；固定截止日2026-10-14、實際查閱2026-10-19。

| 公開 theme ID | 歌曲／演唱名義 | 用途 |
| --- | --- | --- |
| `ninjala-op-1` | メイビーベイビー／きゃりーぱみゅぱみゅ | OP1 |
| `ninjala-op-2` | 一心同体／きゃりーぱみゅぱみゅ | OP2 |
| `ninjala-op-3` | OEDOEDO／きゃりーぱみゅぱみゅ | OP3 |
| `ninjala-ed-1` | ニンジャライクニンジャ／ウォルピスカーター | ED1 |
| `ninjala-ed-2` | SHINOBI TOP SECRET／Wienners | ED2 |
| `ninjala-ed-3` | 友情的行進／ファンタスティック☆パイセン | ED3 |
| `ninjala-ed-4` | ニンジャリモーション／Ange☆Reve | ED4 |
| `ninjala-ed-5` | ラディーチェ／ウォルピスカーター | ED5 |
| `ninjala-ed-6` | 天晴れ！エクストリーム忍者／SHARE LOCK HOMES | ED6 |
| `ninjala-ed-7` | 白昼きみとドロン／ポップしなないで | ED7 |
| `ninjala-ed-8` | TKGシンドローム／金子みゆ | ED8 |
| `ninjala-ed-9` | ないとびふぉーあだんす／パンダドラゴン | ED9 |
| `ninjala-ed-10` | ケサラバサラ／鈴華ゆう子 | ED10 |
| `beyblade-x-op-1` | Prove／ONE OK ROCK | OP1 |
| `beyblade-x-op-2` | YOU GOTTA RUN／L'Arc~en~Ciel | OP2 |
| `beyblade-x-op-3` | Rise／TOMORROW X TOGETHER | OP3 |
| `beyblade-x-op-4` | Invincible／i-dle | OP4 |
| `beyblade-x-ed-1` | ZOOM ZOOM／aespa | ED1 |
| `beyblade-x-ed-2` | Cosmic Treat／Perfume | ED2 |
| `beyblade-x-ed-3` | Stay Gold／Ado、Jax Jones | ED3 |
| `beyblade-x-ed-4` | 渦／imase | ED4 |
| `beyblade-x-ed-5` | Youth／aoen | ED5 |

- 已處理anime ID：`curated-142274`、`curated-165159`。ニンジャラ新增OP〈一心同体〉、〈OEDOEDO〉／きゃりーぱみゅぱみゅ，以及ED〈友情的行進〉／ファンタスティック☆パイセン、〈ニンジャリモーション〉／Ange☆Reve、〈ラディーチェ〉／ウォルピスカーター、〈天晴れ！エクストリーム忍者〉／SHARE LOCK HOMES、〈白昼きみとドロン〉／ポップしなないで、〈TKGシンドローム〉／金子みゆ、〈ないとびふぉーあだんす〉／パンダドラゴン、〈ケサラバサラ〉／鈴華ゆう子。原三首及序號保留，動畫頁按OP／ED與序號排列，共13筆。
- ニンジャラ補2022–2026已確認的日本TV季度；2026冬／春／夏／秋節目表均明列〈OEDOEDO〉及〈ケサラバサラ〉，原「finished」修正為「airing」。首播2022-01-08及10:30保留，另保存2022-10-29改10:00、2023-10-07改07:30的時段說明；沒有把現行07:30冒充2022年首播時間。2026年1月10／17日特番不當作新歌曲或一般新集。
- BEYBLADE X九首既有用途補日本TV季度：第一期OP／ED從2023秋跨至2024秋，第二期前半兩曲掛2024秋／2025冬、後半兩曲掛2025春／夏；第三期〈Invincible〉掛2025秋／2026冬與真・未来編2026夏，〈渦〉掛2025秋／2026冬，〈Youth〉掛2026夏。電視台6月19日公告明確真・未来編TV於7月10日開始；2026春的「オンエア争奪バトル」特別節目不當作新一季常態TV歌曲。配信先行及秋季新配信篇章留在逐曲續查條件，不由配信開始日期推定TV季度。
- `beyblade-x-ed-4`由羅馬字〈Uzu〉補原文〈渦〉，保存`titleRomaji: Uzu`及原ID／網址；舊名搜尋仍可找到。沒有把原文更正、不同影片或商品當作新歌。第一期原先把九首全部fallback到2023秋，現只計該季已證實的兩曲；其餘歌曲依實際TV期間分配，所有舊內容保留。
- 只從同頁明列的創作名單新增53筆角色：作詞12、作曲15、編曲10，以及16筆不拆分的詞曲合併署名。保留Prove、Cosmic Treat、Stay Gold及部分合併署名原意；Produced by沒有推為編曲，Konnie Aoki的English Words範圍保存續查條件，不推定錄音版別。未新增錄音、影片、發行品或平台項目，詳細深化不作基本資料門檻。
- ニンジャラ的官方下一首ED公告指定2022-10-01啟用，交叉索引話數有差異；第二ED只掛無衝突的春／夏，第三ED的秋／冬用曲不受影響，精確首用集數及第二ED是否跨秋待官方正片credit核對。兩筆均在`dataStatus.followUp`保存查找日及觸發條件，不為解單點衝突阻擋其他歌曲。
- 全目錄30季、2,048部、4,572用途（4,516 OP／ED、46 IN、10 TS），全部有`dataStatus`；331筆有基本欄位的兩類證據，4,241筆保留來源待細分引用。NINJALA13筆及〈渦〉有完整基本欄位證據；其他八首BEYBLADE X保留既有來源並補用途證據，逐欄引用尚待細分。18筆寶可夢舊曲季度待核狀態保留。
- 12筆舊用途ID、演唱、既有credits／媒體／平台及所有原來源日期保留；僅〈Uzu〉更正原文並留舊名。新增名單不覆蓋原有credit，2,046部非本批動畫JSON SHA-256完全相同。20個季度的registry保留已有跨季引用，再追加本批動畫；metadata、圖像、識別及未重查歌曲來源的原日期維持。

### 有效證據與可接續缺口

- [ニンジャラ官方公告索引](https://www.tv-tokyo.co.jp/anime/ninjala/news/)一次提供首播／改時段及十餘首OP／ED原名、演唱、啟用公告；[官方staff頁](https://www.tv-tokyo.co.jp/anime/ninjala/staff/)提供現行兩曲及創作名單。[英語歌曲／集數交叉索引](https://en.wikipedia.org/wiki/List_of_Ninjala_episodes)支持輪替與日期；精確人員角色優先依第一方，沒有由交叉索引中的創作合作人名推定歌唱。
- テレビ東京的[1月24日](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202601/26625_202601240730.html)、[5月16日](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202605/26625_202605160730.html)、[8月22日](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202608/26625_202608220730.html)、[10月10日](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202610/26625_202610100730.html)節目表，每頁同時支持TV時段及兩首用曲；均為固定截止日前的放送。沒有使用截止日後的下一集預告補造既成放送事實。
- BEYBLADE X沿[官方MUSIC](https://beyblade.takaratomy.co.jp/anime/music/)、[テレビ東京公告索引](https://www.tv-tokyo.co.jp/anime/beyblade/news/index.html)及[中文歌曲／日本TV集數索引](https://zh.wikipedia.org/wiki/%E7%88%86%E6%97%8B%E9%99%80%E8%9E%BAX)核對原名、角色與季度。初期歌在2024年10月4日仍用、第二期10月18日開始，不從新歌商品日期推斷；2026年春特別節目、夏季TV新篇與配信入口分開。
- 未明的ニンジャラ2022秋切換集數、配信用途及English Words版別等已保存逐曲續查條件。サバイバル2冬季、寶可夢18筆舊用途季度、秋季三部歌曲及其他先前已停查缺口，仍按原觸發條件接續；沒有重新輪搜。各季標準TV作品聯集仍未閉合，不能以快照筆數宣稱全部歌曲已齊備。

### 本機檢查與展示

- 最終`npm test`4檔／8項、`npm run build`2,094 HTML／4,186公開產物通過，Astro無errors／warnings／hints；實際ApiProvider解析2部22筆全部通過。首輪資料檢查指出冬季續播索引遺漏，補齊各季索引並保留原引用後通過，未改正常validator、測試或安全gate。
- in-app Chromium手機393×852逐頁展開22組歌曲詳情及狀態，寬393、0影片iframe；動畫內搜尋Uzu可找到唯一〈渦〉，全站查Beyblade Uzu同樣只回一筆並保留原錨點。桌面1280×800：2026夏BEYBLADE X只有〈Invincible〉／〈Youth〉，2022秋ニンジャラ顯示三筆已確認歌曲；沒有把全部歷史歌曲掛在每季。測試後重設暫時viewport。
- 本批只有資料及季度關聯，沒有新增季度、程式、contract、搜尋或播放器行為，不另重跑本機完整E2E；PR／main正常quality已通過。最終Cloudflare dry-run exit0且有完成marker、無bindings；公開邊界245個repository檔案、2個文件相對連結、diff格式及私隱／變更範圍檢查通過。依賴／Wrangler設定未改，不重跑無關舊連結及依賴稽核。
- 正式發布已完成；PR／main gates、實際Cloudflare及live驗收分開記錄如下，本機通過本身不作發布證據。

預覽入口：`/anime/ninjala/`、`/anime/beyblade-x/`、`/seasons/2026-winter/`、`/seasons/2026-summer/`、`/seasons/2022-fall/`。下一批第50批接續2026春標準TV作品聯集及剩餘長篇，其後2025–2020基本缺口；短篇／WEB與詳細集中深化延後，基本階段及長期目標未完成。


### 第49批正式發布驗收

- [PR #141](https://github.com/kyeunga25/anisonary/pull/141)正常rebase合併；審閱head `f34d35668b926bdd48f9cf25f5494341dba190c2`，main來源`8681e386bf66af1d922cdf1b434afb67ec3b8f4f`與審閱tree相同，部署前工作樹乾淨。PR及main的quality、Workers Builds均成功，正常CI包含完整6條E2E；沒有繞過gate或重跑失敗workflow。
- 實際Wrangler deploy exit0；Cloudflare版本metadata核對`batch49-basics`、main來源與PR141一致。正式站56條本批／受影響頁面及JSON與本機產物逐一相同，安全標頭與API noindex／revalidation通過，另2條真實404；實際ApiProvider解析2部22筆完全一致。
- 正式站in-app Chromium手機393×852：ニンジャラ13筆歌曲與13組資料狀態，新增ED10已確認季度、基本欄位證據及詞曲編／媒體待補狀態可讀，寬393、0影片iframe。BEYBLADE X舊名Uzu只回一筆〈渦〉、原ID保持；已實際檢視驗收畫面並重設暫時viewport。`batch49-basics` annotated tag已指向正式來源並推送。
- 第50批執行中：2026春標準TV作品聯集及剩餘長篇，按既有有效來源與真正缺口補基本歌曲；其後2025–2020倒序推進。短篇／WEB、詳細集中深化及兩輪未明欄位沿原續查條件延後，基本階段與長期目標未完成。


## 2026-10-19 批次：2020-2026-tv-basics-50（已正式發布）

完成層次：8部標準TV、20筆OP／ED基本資料與逐曲狀態；新增動畫4部、用途12筆，對應11個已證實歌曲識別，8筆既有用途保留。固定截止日2026-10-14；來源實際查閱2026-10-19，本機驗收於10月20日收尾。詳細資料不作本階段門檻。

| 公開 theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `kanchigai-no-atelier-meister-eiyuu-party-no-moto-zatsuyougakari-ga-jitsu-wa-sentou-igai-ga-sss-rank-datta-to-iu-yoku-aru-hanashi-op-1` | FACSTORY／MeseMoa. | 核對基本用途／補逐欄證據與狀態 |
| `kanchigai-no-atelier-meister-eiyuu-party-no-moto-zatsuyougakari-ga-jitsu-wa-sentou-igai-ga-sss-rank-datta-to-iu-yoku-aru-hanashi-ed-1` | 春に消えて／LOT SPiRiTS | 核對基本用途／補逐欄證據與狀態 |
| `aru-majo-ga-shinu-made-op-1` | Drops／坂本真綾 | 核對基本用途／補逐欄證據與狀態 |
| `aru-majo-ga-shinu-made-ed-1` | 花咲く道で／手嶌葵 | 核對基本用途／補逐欄證據與狀態 |
| `your-forma-op-1` | GRIDOUT／yama | 核對基本用途／補逐欄證據與狀態 |
| `your-forma-ed-1` | ネオラダイト／9Lana | 核對基本用途／補逐欄證據與狀態 |
| `haite-kudasai-takamine-san-op-1` | Baby Baby Baby／奥井雅美 with ボンジュール鈴木 | 核對基本用途／補逐欄證據與狀態 |
| `haite-kudasai-takamine-san-ed-1` | Hightail it／古川 慎 | 核對基本用途／補逐欄證據與狀態 |
| `shunkashuutou-daikousha-haru-no-mai-op-1` | Petals feat. 夏背／Orangestar | 新增基本用途與狀態 |
| `shunkashuutou-daikousha-haru-no-mai-ed-1` | 花筏 feat. 夏背／Orangestar | 新增基本用途與狀態 |
| `doraemon-2005-op-1` | ドラえもん／星野源 | 新增基本用途與狀態 |
| `doraemon-2005-op-2` | 夢をかなえてドラえもん／mao | 新增基本用途與狀態 |
| `doraemon-2005-ed-1` | もしものがたり／Tani Yuuki | 新增基本用途與狀態 |
| `crayon-shin-chan-op-1` | マスカット／ゆず | 新增基本用途與狀態 |
| `crayon-shin-chan-op-2` | スーパースター／ケツメイシ | 新增基本用途與狀態 |
| `crayon-shin-chan-op-3` | はちゃめちゃわちゃライフ！／FRUITS ZIPPER | 新增基本用途與狀態 |
| `chibi-maruko-chan-1995-op-1` | おどるポンポコリン／ももいろクローバーZ | 新增基本用途與狀態 |
| `chibi-maruko-chan-1995-op-2` | おどるポンポコリン／Ado | 新增基本用途與狀態 |
| `chibi-maruko-chan-1995-ed-1` | いつもの風景／斉藤和義 | 新增基本用途與狀態 |
| `chibi-maruko-chan-1995-ed-2` | パッパパラダイス／宇多田ヒカル | 新增基本用途與狀態 |

- 已處理anime ID：`curated-190143`、`curated-8687`、`curated-966`、`curated-6149`、`curated-183133`、`curated-178701`、`curated-167142`、`curated-179965`。春季有界盤點54筆非成人TV身分與中文季度頁91筆可見新列／續播身分，只取必要名稱、識別及播出屬性。新增《春夏秋冬代行者 春の舞》後，54筆中53筆可對應既有或本批作品；另1筆的片長／編排未明，未公開未審閱候選。來源的TV分類含短篇，中文續播亦可能混入延後作品，這些清單均不當作完整標準TV分母。
- 《春夏秋冬代行者 春の舞》：24分鐘／14話，官方3月28日土曜24:00即暦日3月29日TV首播，作品保留冬末與春季關聯。OP〈Petals feat. 夏背〉、ED〈花筏 feat. 夏背〉的發行演唱名義為Orangestar，實際歌唱夏背另記，不把製作人當作歌手；詞曲及三位編曲均依官方逐項保存。歌曲先掛已確認春季；首話是否使用OP／ED未查明，各曲保存冬末季度續查條件，沒有由動畫首播自動推定。已讀OST／影片頁不把角色曲、收錄曲或歌詩映像自動列為劇中插曲，具體使用留待逐集官方證據。
- 新增三部原首播較早的標準長篇TV身分，按2020–2026用曲季度補資料，不拆成每年一部動畫。《ドラえもん》2005年版保留2005-04-15系列首播及土曜17:00，OP〈ドラえもん〉／星野源記2020冬至2024秋，〈夢をかなえてドラえもん〉／mao記2024秋起，ED〈もしものがたり〉／Tani Yuuki記2025秋起。2024秋兩首OP按實際輪替同季並存；11月16日復歸年分採2005年版中文索引及逐集交叉記錄，沒有採其他泛系列頁誤列的2025年。個別電影宣傳期、角色歌唱及特殊ED仍有逐曲續查條件，未稱全歷史齊備。
- 《クレヨンしんちゃん》保留1992-04-13原系列身分、現行土曜16:30；常態OP〈マスカット〉／ゆず記2020冬／春／夏，〈スーパースター〉／ケツメイシ記2020秋至2025夏，〈はちゃめちゃわちゃライフ！〉／FRUITS ZIPPER記2025秋起。後兩首分別有10月3日及10月4日的官方TV啟用證據，沒有用CD日期替代。電影歌曲未因收錄／同作名稱便當作TV ED，各曲保留其他TV用曲續查條件。
- 《ちびまる子ちゃん》1995年TV系列的第1話由官方集數表確認為1995-01-08，沒有套用外部識別服務的8月日期或混用1990年第一期。OP〈おどるポンポコリン〉的ももいろクローバーZ與Ado演唱分別保留用途，依官方同曲翻唱說明共用歌曲ID；Ado版2025-12-28開始，沒有把兩種演唱當作兩首不同作品。ED〈いつもの風景〉／斉藤和義至2026冬，〈パッパパラダイス〉／宇多田ヒカル自2026-03-29起；同季可有前後兩首ED。Producer沒有推為編曲。藝人官網直接提供的無字幕ED保存為1個官方watch外連，不推定full／TV錄音或頻道metadata。
- 2025春四部既有動畫補播出說明與八首基本欄位證據：《勘違いの工房主》原3月30日是先行配信，TV首播改記4月6日22:00、兩日期都保留；《ある魔女が死ぬまで》4月1日23:30 AT-X先播與地上波24:30／配信24:00分開；《ユア・フォルマ》4月2日23:45及《履いてください、鷹峰さん》4月2日22:30 AT-X／地上波23:00補齊。八筆既有ID、網址、演唱與媒體內容保持；〈花咲く道で〉seed對齊既有公開原名，未把原本已正確展示的名稱算成新增更正。
- 同頁明列的創作角色合計新增33筆詞／曲／編；未另查個人履歷、完整歌詞、版本或商品。新增錄音0、發行品0、影片metadata0、官方YouTube watch外連1；已有細節保留，所有未記錄欄位仍由逐曲`dataStatus`提供續補索引。全目錄30季、2,052部、4,584用途（4,528 OP／ED、46 IN、10 TS），全部有狀態；351筆有三項基本欄位兩類證據，4,233筆保留來源待細分引用，18筆舊寶可夢用途季度待核狀態保持。
- 八筆舊用途核心、ID及媒體逐項保持，既有credits不覆蓋；六筆原來源條目與日期完全相同，另兩筆只更新實際讀過的Your Forma官方頁，其他舊來源日期保持。2,044部非本批動畫JSON SHA-256不變；28個既有季度僅補有證據的長篇關聯，沒有刪除、搬移全歷史資料或更改程式／測試／部署設定。未取得官方繁中名稱及圖像的新作品保持原文與無圖，不猜造譯名或海報連結。

### 有效證據與可接續缺口

- 春之舞重用[官方主題歌公告](https://4seasons-anime.com/news/?article_id=69813)、[TV／配信時段](https://4seasons-anime.com/onair/)及[Animate Times歌曲交叉報導](https://www.animatetimes.com/news/details.php?id=1775531219)；第一話冬末OP／ED與插曲的具體TV使用為續查項目。官方商品頁提供的音源／收錄資訊已識別，但集中結構化深化延後，不因這些可選欄位阻擋兩首基本歌曲。
- ドラえもん沿[テレビ朝日原OP說明](https://post.tv-asahi.co.jp/post-118037/)、[現行官方音樂索引](https://www.tv-asahi.co.jp/music-top/)、[日本コロムビア原名／演唱](https://columbia.jp/doraemonthemesong/)、[新ED官方公告](https://post.tv-asahi.co.jp/post-571877/)與[Billboard交叉報導](https://www.billboard-japan.com/d_news/detail/153977/2)，配合中文2005年版及[2024秋逐集索引](https://hanaballoon.com/dorachan/data/anime/mizuta/list/data/202410.html)；只存必要事實，不複製逐集製作名單或頁面。
- 小新沿[ゆず原OP公告](https://yuzu-official.com/contents/information/e26060b2-894f-413d-99c3-f2ba12dbf4d0)、[テレビ朝日新OP](https://www.tv-asahi.co.jp/shinchan/news/0081/)、[avex啟用日](https://avexnet.jp/release/1017828)、[2025年切換公告](https://www.tv-asahi.co.jp/shinchan/news/0333/index.html)及[現行創作名單](https://www.tv-asahi.co.jp/shinchan/caststaff/)；中文TV索引提供對照，未採用被翻譯的日文曲名作原名。
- 小丸子沿[1995年官方首話](https://chibimaru.tv/about/story/1995/)、[Ado切換公告](https://chibimaru.tv/news/entry/2025/008050.html)、[ED切換公告](https://chibimaru.tv/news/entry/2026/008102.html)、[現行官方名單](https://chibimaru.tv/about/)、[藝人官方ED外連](https://www.utadahikaru.jp/news/p3hxxu53k2/)與中文／Animate Times交叉資料。一般公開頁面可在瀏覽器讀取時直接核對，沒有繞過來源限制，失敗的取回本身不當作來源證據。
- 2025春沿四部既有有效cross-check及[工房主MUSIC](https://kanchigai-pr.com/music/)、[ある魔女MUSIC](https://arumajo-anime.com/music/index.html)、[Your Forma官方頁](https://www.yourforma-anime.com/)、[鷹峰MUSIC](https://takaminesan.com/music/index.html)；[ACG Secrets.HK](https://acgsecrets.hk/anime/1752/)一次支持TV／配信分別與兩首基本歌曲。未重查的cross-check引用保存原核對日期，不把本批時間當作所有舊來源的新日期。
- 2026秋三部歌曲、サバイバル2冬季、寶可夢18筆舊用途季度、其他既有兩輪未明欄位沿原逐曲觸發條件接續。2025夏仍15、春105、冬133筆現有OP／ED未逐批核對；2024–2020僅先補本批常態長篇，標準TV作品聯集與其他歌曲仍未完成。短篇／WEB不阻擋較舊季度推進。

### 本機檢查與展示

- 最終`npm test`4檔／8項通過；`npm run build`2,098 HTML／4,194公開產物通過，Astro無errors／warnings／hints；實際ApiProvider解析8部20筆全部成功。初次資料合入遇到陣列分隔、seed所屬季度及credits證據引用形狀，均只修正本批資料，既有validator、正常程式與gate未改。
- 六條重要E2E流程已驗證：首輪5條成功，錯誤API流程遇到原已被其他服務占用的error埠而重用正常頁面；保留該服務，臨時config改為新空閒埠且禁止重用服務後，只重跑該失敗流程成功。repository測試／部署設定未改，沒有放寬斷言、時間或安全邊界。
- in-app Chromium手機393×852：八頁20組詳情及資料狀態逐一展開，所有頁寬393、0影片iframe。春之舞顯示Orangestar名義、夏背歌唱、已確認春季與冬末續查條件。桌面1280×800的2024秋搜尋ドラえもん只回兩筆該季已證實OP；歌單保持緊湊，資料狀態只在詳情顯示。測試後已重設暫時viewport。
- Cloudflare dry-run exit0、完成marker及無bindings；公開邊界245個repository檔案、diff格式、28個資料檔案變更範圍與新增內容的私隱模式檢查通過。依賴與Wrangler設定未改，沿用既有依賴狀況；文件連結及最終公開檢查在checkpoint保存後收尾。PR／main gates、實際Cloudflare與live驗收待完成，尚不把本機通過稱為正式發布。

預覽入口：`/anime/shunkashuutou-daikousha-haru-no-mai/`、`/anime/doraemon-2005/`、`/anime/crayon-shin-chan/`、`/anime/chibi-maruko-chan-1995/`、`/seasons/2025-spring/`、`/seasons/2024-fall/`。第51批位置見頂部接續位置；基本階段及長期目標未完成。


### 第50批正式發布驗收（2026-10-20）

- [PR #142](https://github.com/kyeunga25/anisonary/pull/142)在quality及Workers Builds正常通過後rebase合併至`bec312af4cb5dae26d97e1cab909881354332aa5`，main兩項gate亦通過。GitHub檢查排隊期間沒有略過gate；等待期間第51批由獨立分支處理，第50批來源及4,194個已驗證產物固定保存。
- 實際Wrangler部署使用固定第50批產物，Cloudflare版本metadata確認`batch50-basics`及完整來源提交／PR #142一致；本機第51批產物未混入。
- 正式站86條HTML／JSON／目錄／Service Worker路徑與審閱產物SHA-256一致，2條未知路徑返回真正404；CSP與安全headers、API noindex／revalidation／無跨域開放符合既有邊界。實際ApiProvider解析8部20筆成功。
- 正式站393×852的Chromium驗收8頁20組原名、演唱、已展開逐曲狀態，0溢出、0影片iframe；in-app Chromium亦實際展開春之舞兩組名單與資料狀態，665像素無溢出。暫時viewport已還原。
- annotated tag `batch50-basics`指向上述正式來源並已推送，可追溯與rollback。第51批基本資料及進度已另行保存並推送，正式發布收尾後接續第52批；基本階段及長期目標未完成。

## 2026-10-20 批次：2020-2026-tv-basics-51（已正式發布）

固定範圍2020–2026標準TV與截止日2026-10-14維持；當日實際查閱來源記2026-10-20。本批在第50批檢查排隊期間由獨立分支處理，第50批來源與產物固定。現第50批已完成正式發布驗收，來源`bec312a`／`batch50-basics`；本批現已完成獨立正式發布驗收，不混入前一批產物。

本批先核對2026春有界清單最後一筆身分：`201910`《おしりダンディ ザ・ヤング》由[集英社公告](https://books.shueisha.co.jp/info/comics/3774.html)及[動畫官方新作公告](https://oshiri-tantei.com/news/2026032001.html)確認為《おしりたんてい》節目內的故事；出版社所列母節目時段為20分鐘。按短篇範圍延後，沒有新增獨立標準季度TV作品或猜造歌曲。54筆有界身分已對應53筆既有／已收錄身分及1筆此類分類；有界新作清單不代表全部標準TV續播聯集已閉合。

接續2025春10部25筆既有OP／ED，ID見頂部接點；先核對原名、演唱、用途及來源，整理TV／先行配信分別，保留全部既有公開ID與網址。遇到的已確認插曲一併核對；每首保存基本證據、詳細欄位缺口及可重用續查條件。本批資料、公開JSON與展示已驗證，資料提交`5f4da9c`已保存；正式發布待完成，不把本機檢查稱為production驗收。


### 第51批公開用途與實際差異

10部、26筆用途：25筆既有OP／ED保留，新增1筆已確認IN；其中24筆有曲名／演唱／用途的第一方及交叉欄位證據，另2筆既有ED保存明確缺口。沒有新增動畫，沒有由不同影片或專輯新增歌曲。

| 公開theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `ballpark-de-tsukamaete-op-1` | Hurray!!／GENIC | 補基本欄位證據、現有缺口與續查狀態 |
| `ballpark-de-tsukamaete-ed-1` | ボールパークでShake！Don't Shake！／ルリコ（CV：ファイルーズあい）、アオナ（CV：長谷川育美）、こひなた（CV：内田真礼）、サラ（CV：相良茉優）、こころ（CV：瀬戸桃子） | 對齊官方原名／演唱名義，保留ID並補狀態 |
| `ballpark-de-tsukamaete-ed-2` | コンバート／松室政哉 | 更正已證實原名／保存用途及季度待核狀態 |
| `ballpark-de-tsukamaete-ed-3` | あきらめられないのさ／GENIC | 對齊官方原名／演唱名義，保留ID並補狀態 |
| `isshun-de-chiryou-shiteita-no-ni-yakutatazu-to-tsuihou-sareta-tensai-chiyushi-yami-healer-toshite-tanoshiku-ikiru-op-1` | ライトメイカー／bokula. | 補基本欄位證據、現有缺口與續查狀態 |
| `isshun-de-chiryou-shiteita-no-ni-yakutatazu-to-tsuihou-sareta-tensai-chiyushi-yami-healer-toshite-tanoshiku-ikiru-ed-1` | 月に願う／sorato | 補基本欄位證據、現有缺口與續查狀態 |
| `saikyou-no-ousama-nidome-no-jinsei-wa-nani-wo-suru-op-1` | KINGSBLOOD／KALA | 補基本欄位證據、現有缺口與續查狀態 |
| `saikyou-no-ousama-nidome-no-jinsei-wa-nani-wo-suru-ed-1` | 真昼の月／seiza | 補基本欄位證據、現有缺口與續查狀態 |
| `kanpeki-sugite-kawai-ge-ga-nai-to-konyaku-haki-sareta-seijo-wa-ringoku-ni-urareru-op-1` | 愛とか。／りりあ。 | 補基本欄位證據、現有缺口與續查狀態 |
| `kanpeki-sugite-kawai-ge-ga-nai-to-konyaku-haki-sareta-seijo-wa-ringoku-ni-urareru-ed-1` | Sister／WON | 補基本欄位證據、現有缺口與續查狀態 |
| `wind-breaker-season-2-op-1` | BOYZ／SixTONES | 補基本欄位證據、現有缺口與續查狀態 |
| `wind-breaker-season-2-ed-1` | It’s myself／シャイトープ | 補基本欄位證據、現有缺口與續查狀態 |
| `bye-bye-earth-season-2-op-1` | Aufheben／Who-ya Extended | 補基本欄位證據、現有缺口與續查狀態 |
| `bye-bye-earth-season-2-ed-1` | MOONWORK／ASCA | 補基本欄位證據、現有缺口與續查狀態 |
| `bye-bye-earth-season-2-ed-2` | Sacred Ashes [form the] Butterfly／J'Nique Nicole | 保存OST曲名；ED用途、演唱及季度待官方確認 |
| `nazotoki-wa-dinner-no-ato-de-op-1` | MONTAGE／中島健人 | 補基本欄位證據、現有缺口與續查狀態 |
| `nazotoki-wa-dinner-no-ato-de-ed-1` | ラプソディ／BILLY BOO | 補基本欄位證據、現有缺口與續查狀態 |
| `slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita-sono-ni-op-1` | So☆Lucky／小倉 唯 | 補基本欄位證據、現有缺口與續查狀態 |
| `slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita-sono-ni-ed-1` | イニミニマニモ／大西亜玖璃 | 補基本欄位證據、現有缺口與續查狀態 |
| `slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita-sono-ni-ed-2` | 生まれ変わろうと／アズサ（CV：悠木 碧） | 對齊官方原名／演唱名義，保留ID並補狀態 |
| `slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita-sono-ni-in-1` | MAD ODD WOO／ペコラ（CV：田村ゆかり） | 新增第10話IN、角色演唱與逐曲狀態 |
| `enen-no-shouboutai-san-no-shou-op-1` | 強火／女王蜂 | 補基本欄位證據、現有缺口與續查狀態 |
| `enen-no-shouboutai-san-no-shou-ed-1` | ウルサイレン／梅田サイファー | 補基本欄位證據、現有缺口與續查狀態 |
| `shin-samurai-den-yaiba-op-1` | BLADE／BLUE ENCOUNT | 補基本欄位證據、現有缺口與續查狀態 |
| `shin-samurai-den-yaiba-ed-1` | pineapple tart／音羽-otoha- | 補基本欄位證據、現有缺口與續查狀態 |
| `shin-samurai-den-yaiba-ed-2` | ACTION！／八木海莉⚡電音遊戯 | 對齊官方原名／演唱名義，保留ID並補狀態 |

- 已處理anime ID：`curated-184279`、`curated-175872`、`curated-183161`、`curated-183275`、`curated-178680`、`curated-181078`、`curated-184989`、`curated-143337`、`curated-149118`、`curated-177476`。全目錄30季、2,052部、4,585用途（4,528 OP／ED、47 IN、10 TS），全部保存`dataStatus`；375筆三項基本欄位有兩類證據，其他4,210筆保留來源與待細分狀態。20筆用途季度待核（原寶可夢18筆及本批2筆），保持全目錄／動畫／搜尋可查，不計入任何已確認季度。
- 《完璧すぎて可愛げがないと婚約破棄された聖女は隣国に売られる》舊4月3日為先行配信暦日；TV為4月9日水曜24:00，即暦日4月10日，兩類日期分開保存。《最強の王様》第1期依中文TV索引補4月2日23:30、23分鐘12話，原4月3日不是最早播出；現行官方ONAIR已換第2期，未套用2026年時段，原第一期官方局別／時段公告保存續查條件。其他8部補既有TV首播時段及TV／配信區別，不改原作品身分。
- 《ボールパークでつかまえて！》ED1原名標記與五名角色／CV依官方MUSIC對齊；五名歌唱者逐項保存。最終回ED3原名改為「あきらめられないのさ」。舊ED2的「コントラスト」與英文seed「Convert」不同，沿新名稱線索查到唱片公司商品曲目，正確原名為「コンバート」／松室政哉；移除舊錯誤英字名Contrast，保留全部既有ID與網址。原名與演唱可先保存，TV ED及季度仍待第一方用途證據，沒有把商品收錄當作TV使用。
- 《真･侍伝YAIBA》補春／夏續播；OP〈BLADE〉保留同一用途及歌曲身分。新ED〈ACTION！〉名義補為八木海莉⚡電音遊戯，藝人官方公告確認6月28日啟用，因此同掛春末與夏季，沒有由「第2クール」推定7月才開始。官方已說明BLADE第二段「絆ver」；音源／發行對應保留逐曲續查，沒有因影片或第二段新增歌曲。
- 《スライム倒して300年 ～そのに～》補第12話ED〈生まれ変わろうと〉アズサ（CV：悠木碧）名義；同一已讀官方商品／影片頁確認第10話IN〈MAD ODD WOO〉ペコラ（CV：田村ゆかり），加中文影像索引交叉核對後新增。其他使用集數仍可接續，未由商品／影片推定所有集數。
- 同頁明列創作新增45筆詞／曲／編角色，3個官方YouTube watch外連由動畫官網的明確影片ID及藝人公告直接保存。新增錄音0、發行品0、影片metadata0；未查頻道、未推定full／TV或新錄音。已有媒體、收錄及平台資料保持，所有未記錄欄位仍可按逐曲狀態接續。
- 25筆舊用途的ID、序號、影片metadata、音源、發行品及原有平台外連保持；角色歌唱的舊合併名單拆成五名實際歌唱者，沒有漏掉原有成員。23筆原有來源條目與日期保持；另兩筆只刷新實際查閱的炎炎官方頁，其他舊來源日期未重設。2,042部非本批動畫JSON SHA-256不變。六筆同批舊覆寫資料已移交季度seed，使已核對原名及名義能真正展示；runtime邏輯、parser、contract、UI、播放器、測試、部署設定與依賴保持。

### 有效來源、未解缺口與續查條件

- 重用[球場MUSIC](https://anime-ballpark.com/music/)、[ONAIR](https://anime-ballpark.com/onair/)、[GENIC最終回ED公告](https://avex.jp/genic/news/detail.php?id=1125761)及[Universal官方曲目](https://store.universal-music.co.jp/products/umca10162)。原名不一致是本輪新續查觸發點；舊錯名的兩輪查找沒有重複輪搜全部資料庫。藝人官網TLS驗證失敗未取得內容，未繞過限制；コンバート用途待可正常讀取的官方歌曲公告／逐集片尾credit，官方專輯曲目可在深化時重用。
- [闇ヒーラーMUSIC](https://sh-anime.shochiku.co.jp/yamihealer/music/)、[ONAIR](https://sh-anime.shochiku.co.jp/yamihealer/onair/)、[完美聖女MUSIC](https://kanpekiseijo-anime.com/music)、[ONAIR](https://kanpekiseijo-anime.com/onair)一次核對原名、名義、用途及明列創作；[最強の王様MUSIC第1期](https://saikyo2dome-tbate.com/music)與[中文第1期索引](https://youranimes.tw/animes/5519)分別支持歌曲及首播，第一期原官方時段公告待補。
- [WIND BREAKER OP](https://wb-anime.net/music/op02.html)及[ED](https://wb-anime.net/music/ed02.html)、[ばいばい、アースMUSIC](https://bye2earth.com/music/index.html)、[ONAIR](https://bye2earth.com/onair/index.html)、[謎解きMUSIC](https://nazod-anime.com/music/)、[炎炎官方頁](https://fireforce-anime.jp/)沿用既有交叉來源。Sacred Ashes [form the] Butterfly只由官方頁確認OST曲名；兩輪定向查找仍缺個別演唱及TV ED第一方證據，保存原ID、正面曲名引用及用途／季度待核條件，不新增無來源credits。
- [史萊姆MUSIC](https://slime300-anime.com/music/)、[ONAIR](https://slime300-anime.com/onair/)、[商品](https://slime300-anime.com/bluray/)、[影片](https://slime300-anime.com/movie/)及[中文影像索引](https://youranimes.tw/animes/3256/videos)支持三首既有用途與新插曲。[YAIBA第1クールMUSIC](https://www.yaiba-pr.com/music/season_1.html)、[第2クールMUSIC](https://www.yaiba-pr.com/music/index.html)、[藝人啟用日與MV公告](https://www.sonymusic.co.jp/artist/yagikairi/info/575057)、[中文作品](https://youranimes.tw/animes/5225)及[音樂名義交叉索引](https://zh.wikipedia.org/wiki/%E5%85%AB%E6%9C%A8%E6%B5%B7%E8%8E%89)提供同頁多項事實；未重查其餘舊cross-check。
- 2025春尚80、冬133筆現有OP／ED未逐批核對；夏季剩15筆延後種類。2026秋3部歌曲、サバイバル2冬季、寶可夢18筆季度及此前兩輪缺口按原條件接續。作品聯集、基本階段及2007–2026長期目標均未完成，詳細集中深化延後。

### 本機檢查與展示

- 最終`npm test`4檔8項通過，`npm run build`2,098 HTML／4,194公開產物，Astro 0 errors／warnings／hints；實際ApiProvider解析本批10部26筆成功，並核對26筆原名／演唱與authoring一致。初次錯誤來自兩筆缺口的確定季度及空引用陣列，已改為明確待核並保留有效部分引用；沒有造第一方用途證據、修改正常parser或放寬gate。
- in-app Chromium實際665×924：10頁26組詳情／資料狀態展開，無橫向溢出及影片iframe。尺寸覆寫未套用，另以專案既有Playwright Chromium在確定393×852的context補驗同10頁26組、原名／演唱／狀態及0影片iframe，全部通過；Browser plugin不可用的既有測試方式沿用。新長角色名義仍可換行，歌單及詳情維持緊湊／按需展開。
- 變更只有資料列與既有季度關聯，沒有新季度、contract、搜尋／UI或播放器行為變更；本機不重跑全套E2E，正常PR／main工作流程仍執行全部重要E2E。Cloudflare dry-run exit0及完成marker；repository公開邊界、diff與文件連結收尾檢查後分類提交。實際Cloudflare部署／版本及正式站驗收待完成。

預覽入口：`/seasons/2025-spring/`、`/seasons/2025-summer/`、`/anime/ballpark-de-tsukamaete/`、`/anime/slime-taoshite-300-nen-shiranai-uchi-ni-level-max-ni-nattemashita-sono-ni/`、`/anime/shin-samurai-den-yaiba/`。第52批公開ID見頂部接點，正式發布驗收後接續。


### 第51批正式發布驗收（2026-10-20）

- [PR #143](https://github.com/kyeunga25/anisonary/pull/143)在quality與Workers Builds通過後正常rebase合併，審閱head`310ef287f26a4a2f6a80c0783f512875083f81ba`，main來源`2192eb6168a009d4bed962da17b4129fa0ba1919`與審閱tree一致；main兩項gate亦完成且成功，正常CI涵蓋完整重要E2E。
- 實際Wrangler部署使用固定保存的4,194個第51批已驗證產物，部署前來源乾淨；Cloudflare版本metadata確認`batch51-basics`及完整main來源／PR #143一致。第52批獨立分支修改未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與審閱產物SHA-256一致，另2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放通過，實際ApiProvider解析10部26筆成功。
- 正式站Chromium393×852驗收10頁26組原名、演唱、展開詳情與資料狀態，0溢出、0影片iframe；in-app Chromium665×924另確認コンバート原名、TV用途／季度待核及續查條件顯示。驗收畫面已實際檢視，annotated tag `batch51-basics`指向正式來源並推送。
- 第52批繼續2025春既有標準TV基本資料；逐曲現有欄位、未記錄資訊與續查條件保持，基本階段及2007–2026長期目標未完成。


## 2026-10-20 批次：2020-2026-tv-basics-52（已正式發布）

固定範圍2020–2026標準TV、資料截止日2026-10-14不變。本批接續2025春10部既有作品：`curated-179541`、`curated-179054`、`curated-179955`、`curated-182814`、`curated-184639`、`curated-167336`、`curated-178825`、`curated-180516`、`curated-181182`、`curated-182060`，起始22筆OP／ED。先核對TV與先行配信、原名／演唱／用途及跨季關聯，逐曲保存已確認欄位、待補項目與續查條件；同頁明列資訊可一併保存，詳細集中深化延後。第51批固定來源與已驗證產物分開保存，未混入本批修改；本批資料、公開JSON與展示現已驗證，正式發布待完成；基本階段與長期目標未完成。


### 第52批公開用途與實際差異

10部既有動畫、22筆既有用途，全部補基本欄位證據與逐曲狀態；新增動畫0、歌曲0、用途0。兩筆原ED更正為第一方明稱的IN，全部ID／序號／歌曲識別與網址保持。

| 公開theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `kuroshitsuji-midori-no-majo-hen-op-1` | MAISIE／Cö shu Nie feat. HYDE | 核對本期基本欄位與逐曲缺口 |
| `kuroshitsuji-midori-no-majo-hen-ed-1` | WALTZ／龍宮城 | 核對本期基本欄位與逐曲缺口 |
| `katainaka-no-ossan-kensei-ni-naru-op-1` | HEROES／西川貴教 | 核對本期基本欄位與逐曲缺口 |
| `katainaka-no-ossan-kensei-ni-naru-ed-1` | Alright!!!／FLOW | 核對本期基本欄位與逐曲缺口 |
| `kowloon-generic-romance-op-1` | サマータイムゴースト／水曜日のカンパネラ | 核對本期基本欄位與逐曲缺口 |
| `kowloon-generic-romance-ed-1` | 恋のレトロニム／mekakushe | 核對本期基本欄位與逐曲缺口 |
| `kowloon-generic-romance-ed-2` | わたしだけのポラリス／mekakushe | 正名及改為IN，保留原ED錨點 |
| `kowloon-generic-romance-ed-3` | ユワナメロウ／mekakushe | 正名及改為IN，保留原ED錨點 |
| `anne-shirley-op-1` | 予感／とた | 補春／夏續播與基本欄位證據 |
| `anne-shirley-ed-1` | heart／Laura day romance | 補春／夏續播與基本欄位證據 |
| `lazarus-op-1` | Vortex／Kamasi Washington | 核對本期基本欄位與逐曲缺口 |
| `lazarus-ed-1` | Lazarus／The Boo Radleys | 核對本期基本欄位與逐曲缺口 |
| `classic-stars-op-1` | シンギュラリスト／内田雄馬 | 核對本期基本欄位與逐曲缺口 |
| `classic-stars-ed-1` | BEYOND★CLASSIC／Gran★MyStar （ベートーヴェン・モーツァルト・ショパン・リスト／ CV：内田雄馬・伊東健人・安部 瞬・石毛翔弥） | 核對本期基本欄位與逐曲缺口 |
| `uma-musume-cinderella-gray-op-1` | 超える／[Alexandros] | 核對本期基本欄位與逐曲缺口 |
| `uma-musume-cinderella-gray-ed-1` | ∞／オグリキャップ (CV.高柳知葉) | 核對本期基本欄位與逐曲缺口 |
| `shoushimin-series-2nd-season-op-1` | 火星人／ヨルシカ | 核對本期基本欄位與逐曲缺口 |
| `shoushimin-series-2nd-season-ed-1` | SugaRiddle／やなぎなぎ | 核對本期基本欄位與逐曲缺口 |
| `gorilla-no-kami-kara-kago-sareta-reijou-wa-ouritsu-kishidan-de-kawaigarareru-op-1` | イルミネイト／仲村宗悟 | 核對本期基本欄位與逐曲缺口 |
| `gorilla-no-kami-kara-kago-sareta-reijou-wa-ouritsu-kishidan-de-kawaigarareru-ed-1` | セレンディピティ／緒方恵美 | 核對本期基本欄位與逐曲缺口 |
| `shirobuta-kizoku-desu-ga-zense-no-kioku-ga-haeta-node-hiyoko-na-otouto-sodatemasu-op-1` | 口直し／和ぬか | TV改掛2025夏，與先行配信分開 |
| `shirobuta-kizoku-desu-ga-zense-no-kioku-ga-haeta-node-hiyoko-na-otouto-sodatemasu-ed-1` | まだ知らないストーリー／Ms.OOJA | TV改掛2025夏，與先行配信分開 |

- 已處理anime ID：`curated-179054`、`curated-179955`、`curated-182814`、`curated-184639`、`curated-167336`、`curated-178825`、`curated-180516`、`curated-181182`、`curated-182060`、`curated-179541`。全目錄30季、2,052部、4,585用途（4,526 OP／ED、49 IN、10 TS），全部有`dataStatus`；397筆基本三欄有兩類證據，4,188筆保留來源待細分，20筆原用途季度待核保持。
- 《白豚貴族》4月20日19:30是ABEMA第1／2話先行配信；TV為2025-07-06日曜22:00 TOKYO MX起，兩首TV用途改掛夏季，原配信日期另留說明。只移交這一部的季度seed及兩筆既有影片索引，影片內容與ID完全相同，沒有全量搬移歷史資料。
- 《アン・シャーリー》初回TV為2025-04-05土曜18:25 NHK Eテレ，官方故事索引為全24話，補春／夏連續播出及原OP／ED。現行ONAIR是2026年10月フジテレビ重播，未改寫原首播或自動新增重播用途；重播用曲保存逐曲續查條件。
- 《九龍》「私だけのポラリス」正名為「わたしだけのポラリス」、確認第7話IN；「You Wanna Mellow」日文原名為「ユワナメロウ」、確認TV IN，英文發行名保留可查。藝人發行頁與香港中文報導均稱插曲；具體其他使用話數及是否另有片尾呈現待官方逐集名單，沒有僅憑影片或商品推定。兩筆舊ED型ID與序號保持，不再混入OP／ED總數。
- 七部其餘作品補本期TV時段及TV／配信分別；《片田舎のおっさん》採第1期archive，未套第2期現行頁。クラシック★スターズ4月5日25:00、小市民第2期4月5日25:30的暦日均為4月6日，編排星期六分開保存。ゴリラ的AT-X 23:30先於地上波24:30及WEB24:00。
- 同頁明列創作新增29筆詞／曲／編；Gran★MyStar四名CV逐一保存，原合併名義全員保留。〈超える〉對齊[Alexandros]官方名義；古典作曲者按官方原文記錄。新增YouTube外連0、影片metadata0、錄音0、發行品0。已讀商品／配信曲目仍可由逐曲來源接續，詳細集中深化延後。
- 22筆原ID、序號、影片、音源、發行品與平台連結保持；所有舊來源條目與日期完全相同，新頁面才登記當日日期。シンデレラグレイED沿用已審閱官方影片及原日期，未把空白現行MUSIC頁當作新證據。2,042部非本批動畫JSON SHA-256不變，四筆同批legacy data覆寫移交seed；正常runtime、parser、contract、UI、播放器、測試、部署設定及依賴未改。

### 有效來源與可接續缺口

- [白豚TV時段](https://shirohiyo.com/onair.html)、[先行配信公告](https://shirohiyo.com/news.html)、[MUSIC](https://shirohiyo.com/music.html)及[中文作品索引](https://youranimes.tw/animes/5664)一次支持日期及兩首用途。安妮原TV公告、MUSIC、24話故事索引與夏季中文續播索引已保存逐曲／作品來源；現行重播不當作首次放送。
- [九龍MUSIC](https://www.kowloongr.jp/anime/music/index.html)支持常態OP／ED；[わたしだけのポラリス發行](https://linkco.re/UeehU5YZ?lang=ja)、[ユワナメロウ發行](https://linkco.re/BQGVYe3c?lang=ja)、[藝人作品表](https://www.mekakushe.com/discography)及[香港報導](https://www.taghobby.com/archives/877822)核對兩首IN原名、用途與詞曲編。個別使用話數／片尾呈現與確切音源、Instrumental、發行版及平台關係待詳細階段，不由收錄新增TV用途。
- [黑執事OP](https://www.kuroshitsuji.tv/emeraldwitch/music/opening.html)／[ED](https://www.kuroshitsuji.tv/emeraldwitch/music/ending.html)、[おっさん第1期](https://ossan-kensei.com/s1/music/)、[LAZARUS](https://lazarus.aniplex.co.jp/music/)、[クラシック★スターズ](https://classicstars-anime.com/music/)、[小市民](https://shoshimin-anime.com/music/index.html)、[ゴリラ](https://gorillalady-anime.com/music/index.html)及各自時段頁重用有效交叉來源。[Alexandros公告](https://alexandros.jp/contents/917349)同時支持第1クール用曲、TV時段及詞曲編，沒有另查無關履歷。
- 本批22筆基本證據齊備；未記錄創作／音源／影片／發行／平台由各曲pendingFields接續，已知缺口另有followUp與觸發條件。2025春仍58、冬133筆現有OP／ED未逐批核對，夏季15筆延後種類；2026秋3部、サバイバル冬與20筆季度待核等既有缺口保持。標準TV作品聯集、基本階段及長期目標均未完成。

### 本機檢查與展示

- 最終npm test 4檔8項、npm run build 2,098 HTML／4,194公開產物通過，Astro無errors／warnings／hints；實際ApiProvider解析10部22筆全部成功，原名、演唱、類別、用途季度及播出展示與authoring一致。初次陣列分隔及影片季度owner只修正本批資料，未改正常validator或降低gate。
- Chromium393×852驗收10頁22組原名、演唱、展開詳情及資料狀態，無溢出且0影片iframe。in-app Chromium665像素確認夏季白豚2筆、安妮2筆，春季白豚0筆；舊ED錨點仍開啟九龍正名後的劇中歌。詞曲編與待補欄位可讀，歌單保持緊湊。
- 只有五個資料檔及既有季度關聯，無新季度、contract／UI／播放器改動，本機不重跑完整E2E；PR／main正常CI仍執行完整重要E2E。Cloudflare dry-run exit0及完成marker、無bindings；公開邊界、文件相對連結、diff及新增內容私隱檢查於提交前收尾。實際部署與live驗收待完成，不把本機通過稱為發布完成。

預覽入口：`/anime/kowloon-generic-romance/`、`/anime/anne-shirley/`、`/anime/shirobuta-kizoku-desu-ga-zense-no-kioku-ga-haeta-node-hiyoko-na-otouto-sodatemasu/`、`/seasons/2025-spring/`、`/seasons/2025-summer/`。下一批第53批公開ID見頂部接點。


### 第52批正式發布驗收（2026-10-20）

- [PR #144](https://github.com/kyeunga25/anisonary/pull/144)通過quality及Workers Builds後正常rebase合併；審閱head`47b7b82cb271dce91d7547861df23082a520d400`，main來源`c3da6bed451220c07e937e1519aaa9ec79d63b26`與審閱tree相同，main兩項gate亦成功。正常CI涵蓋完整重要E2E，沒有略過gate。
- 實際Wrangler部署使用固定4,194個第52批已驗證產物，部署來源乾淨；Cloudflare版本metadata確認`batch52-basics`及完整main來源／PR #144一致，第53批修改未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與審閱產物SHA-256一致，2條未知路徑返回真正404；安全headers、API noindex／revalidation／無跨域開放與實際ApiProvider 10部22筆驗收通過。
- 正式站Chromium393×852展開10頁22組原名／演唱／資料狀態，無溢出且0影片iframe；in-app Chromium665像素確認夏季白豚2筆、安妮2筆，春季白豚0筆，搜尋完成後的結果與來源季度一致。舊ED錨點可開啟正名後的九龍劇中歌，已實際檢視驗收畫面。
- annotated tag `batch52-basics`指向上述正式來源並已推送。第53批接續本季標準TV基本資料，詳細深化及基本階段／長期目標未完成。


## 2026-10-20 批次：2020-2026-tv-basics-53（已正式發布）

固定範圍2020–2026標準TV、資料截止日2026-10-14保持。接續10部既有作品：`curated-180825`、`curated-183274`、`curated-165445`、`curated-182419`、`curated-185736`、`curated-158287`、`curated-174802`、`curated-166371`、`curated-180675`、`curated-185213`，起始24筆既有OP／ED。先核對本期TV首播、原名／名義／用途與來源；已證實插曲一併保留，未知類別與集數不猜造，詳細集中深化延後。第52批提交及驗證產物固定，本批修改不混入前批發布；本批資料、公開JSON與展示現已驗證，正式發布待完成；基本階段與長期目標未完成。


### 第53批公開用途與實際差異

10部既有動畫、35筆用途，起始24筆既有OP／ED；新增動畫0、新增歌曲識別9、新增用途11（10 IN、1特殊ED）。兩筆既有ED按官方更正為IN，原ID／序號／歌曲識別／錨點保持；同曲的插曲與特殊ED分開記用途並共用songId。

| 公開theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `maebashi-witches-op-1` | スゴすぎ前橋ウィッチーズ！／前橋ウィッチーズ | 核對本期TV與基本欄位，補逐曲缺口 |
| `maebashi-witches-ed-1` | それぞれのドア／前橋ウィッチーズ | 核對本期TV與基本欄位，補逐曲缺口 |
| `ore-wa-seikan-kokka-no-akutoku-ryoushu-op-1` | 宇宙的MYSTERY／最終未来少女 | 核對本期TV與基本欄位，補逐曲缺口 |
| `ore-wa-seikan-kokka-no-akutoku-ryoushu-ed-1` | なんとなく／藤咲凪 | 核對本期TV與基本欄位，補逐曲缺口 |
| `zatsu-tabi-thats-journey-op-1` | 旅しよ！don't you?／harmoe | 核對本期TV與基本欄位，補逐曲缺口 |
| `zatsu-tabi-thats-journey-ed-1` | bookmarks／Sizuk | 核對本期TV與基本欄位，補逐曲缺口 |
| `chuuzenji-sensei-mononoke-kougiroku-sensei-ga-nazo-wo-toiteshimau-kara-op-1` | 彼女は今、迷宮の中。／HoneyWorks feat. 花譜 | 核對本期TV與基本欄位，補逐曲缺口 |
| `chuuzenji-sensei-mononoke-kougiroku-sensei-ga-nazo-wo-toiteshimau-kara-ed-1` | 君の知らないこと／Sizuk | 核對本期TV與基本欄位，補逐曲缺口 |
| `vigilante-boku-no-hero-academia-illegals-op-1` | けっかおーらい／こっちのけんと | 核對本期TV與基本欄位，補逐曲缺口 |
| `vigilante-boku-no-hero-academia-illegals-ed-1` | スピード／yutori | 核對本期TV與基本欄位，補逐曲缺口 |
| `compass-2-0-sentou-setsuri-kaiseki-system-op-1` | 拍動／水樹 奈々 | 核對本期TV與基本欄位，補逐曲缺口 |
| `compass-2-0-sentou-setsuri-kaiseki-system-ed-1` | ハートエイク／内田雄馬 | 核對本期TV與基本欄位，補逐曲缺口 |
| `compass-2-0-sentou-setsuri-kaiseki-system-ed-2` | パーフェクト・パルフェ・パレード／雨宮天、石上静香 | 兩輪未明，保留ID並暫不計季度 |
| `shiunji-ke-no-kodomotachi-op-1` | ハニーレモン／NACHERRY | 核對本期TV與基本欄位，補逐曲缺口 |
| `shiunji-ke-no-kodomotachi-ed-1` | LIKE YOU o(>< = ><)o LOVE YOU?／紫雲寺家の子供たち | 核對本期TV與基本欄位，補逐曲缺口 |
| `hana-doll-reinterpretation-of-flowering-op-1` | Clockwork Flowers／Anthos | 核對本期TV與基本欄位，補逐曲缺口 |
| `hana-doll-reinterpretation-of-flowering-ed-1` | Fall leaves after leaves fall／Anthos | 核對本期TV與基本欄位，補逐曲缺口 |
| `apocalypse-hotel-op-1` | skirt／aiko | 核對本期TV與基本欄位，補逐曲缺口 |
| `apocalypse-hotel-ed-1` | カプセル／aiko | 核對本期TV與基本欄位，補逐曲缺口 |
| `apocalypse-hotel-ed-2` | アポカリプス／朴璐美 | 核對本期TV與基本欄位，補逐曲缺口 |
| `apocalypse-hotel-ed-3` | ぽんぽこうた／ムジナ（CV：榊原良子） | 新增已證實用途及逐曲狀態 |
| `apocalypse-hotel-in-1` | アポカリプス／朴璐美 | 新增已證實用途及逐曲狀態 |
| `apocalypse-hotel-in-2` | ぽんぽこうた／ムジナ（CV：榊原良子） | 新增已證實用途及逐曲狀態 |
| `kidou-senshi-gundam-gquuuuuux-op-1` | Plazma／米津玄師 | 核對本期TV與基本欄位，補逐曲缺口 |
| `kidou-senshi-gundam-gquuuuuux-ed-1` | もうどうなってもいいや／星街すいせい | 核對本期TV與基本欄位，補逐曲缺口 |
| `kidou-senshi-gundam-gquuuuuux-ed-2` | BEYOND THE TIME ～メビウスの宇宙を越えて～／TM NETWORK | 官方更正為IN，保留原ED錨點 |
| `kidou-senshi-gundam-gquuuuuux-ed-3` | 水槽の街から／みきまりあ（NOMELON NOLEMON） | 官方更正為IN，保留原ED錨點 |
| `kidou-senshi-gundam-gquuuuuux-in-4` | ミッドナイト・リフレクション／NOMELON NOLEMON | 新增已證實用途及逐曲狀態 |
| `kidou-senshi-gundam-gquuuuuux-in-5` | 夜に咲く／星街すいせい | 新增已證實用途及逐曲狀態 |
| `kidou-senshi-gundam-gquuuuuux-in-6` | 欲しいものすべて／岡地織花 | 新增已證實用途及逐曲狀態 |
| `kidou-senshi-gundam-gquuuuuux-in-7` | 夏の現在地／岡地織花 | 新增已證實用途及逐曲狀態 |
| `kidou-senshi-gundam-gquuuuuux-in-8` | きえない／NOMELON NOLEMON | 新增已證實用途及逐曲狀態 |
| `kidou-senshi-gundam-gquuuuuux-in-9` | HALO／NOMELON NOLEMON | 新增已證實用途及逐曲狀態 |
| `kidou-senshi-gundam-gquuuuuux-in-10` | ビギニング／井上大輔 | 新增已證實用途及逐曲狀態 |
| `kidou-senshi-gundam-gquuuuuux-in-11` | Far Beyond the Stars／Shania Yan | 新增已證實用途及逐曲狀態 |

- 已處理anime ID：`curated-180825`、`curated-183274`、`curated-165445`、`curated-182419`、`curated-185736`、`curated-158287`、`curated-174802`、`curated-166371`、`curated-180675`、`curated-185213`。全目錄30季、2,052部、4,596用途（4,525 OP／ED、61 IN、10 TS），全部有`dataStatus`；431筆基本三欄有第一方／交叉欄位證據，其餘4,165筆保留來源待細分。21筆用途季度待核不混入任一季度。這些為用途數，非去重歌曲／錄音數。
- 本批34／35筆基本三欄證據已登記；コンパス舊ED2保留原始資料與待查狀態，沒有猜造官方用途。所有用途各自保留已記錄／未記錄欄位與續查條件，不用詳細資料完成率代替基本欄位查核。
- 10部TV的首播／編排星期與具體可證實時段已補正，區分24時以後的編排日與暦日、地上波／AT-X及WEB配信。《前橋》現行首頁是2026年劇場版，不套用新電影歌曲／重錄；《ヴィジランテ》採第1期MUSIC與2025首播公告，不套用第2期現行用曲。中禪寺採HoneyWorks實際TV公告，AT-X 21:30先於テレ東25:30；失敗的動畫／Sizuk目的頁沒有當成成功取回。
- 《GQuuuuuuX》官方MUSIC明列10首TV IN；其中既有BEYOND THE TIME、水槽の街から由ED更正，新增8首IN含使用話數。官方未明的其他片尾呈現／重用話數與錄音關係留待逐集資料，沒有以劇場先行公開日推定TV季度。〈水槽の街から〉演唱正名みきまりあ；團隊名義與個別演唱分開，未替NOMELON NOLEMON猜造每首個別成員。
- 《末日後酒店》官方第6／9話插曲公告與正式播出平台ABEMA報導共同確認原名與歌唱；第6話〈アポカリプス〉／朴璐美與第9話〈ぽんぽこうた〉／ムジナ（CV：榊原良子）均有IN及特殊ED用途。新增Romi IN與既有ED2共用歌曲識別，Ponkko新增IN2／ED3共用另一歌曲識別，沒有新增兩首重複歌曲。逐集Mau2支持特殊ED曲名／話數，沒有把未載歌手的該表當作演唱證據。
- 〈bookmarks〉發行名義為Sizuk、實際歌唱春茶；〈スピード〉yutori與〈なんとなく〉藤咲凪同步修正演唱欄位及舊名單。紫雲寺ED原名及紫雲寺家の子供たち名義對齊官方，五名CV逐一記錄。新增詞／曲／編角色76、英文詞翻譯角色1，均為本期歌曲頁同頁明列；不是每首詳細完成。花人偶演唱欄位沿用2026-08-30已核官方首頁，商品頁只支持本次實讀的曲名／用途／創作，不虛增演唱查閱日期。
- 新增YouTube歌曲watch外連2（宇宙的MYSTERY官方MV、bookmarks官方試聽），已有無字幕OP外連去重；新增影片metadata0、錄音0、發行品0。MV／試聽不推定full、TV或新錄音；平台地區可用性保持unknown。
- 24筆原ID、序號、影片、音源、發行品與平台連結保留；只有實際重讀的apocalypse-hotel首頁2筆舊來源日期更新，其餘舊來源條目及日期不變。2,042部非本批動畫JSON SHA-256不變；12筆同批legacy data覆寫移交seed，沒有更改正常runtime、parser、contract、UI、播放器、測試、部署設定或依賴。

### 有效來源與未解缺口

- [GQuuuuuuX官方插曲名單](https://gundam-official.com/gquuuuuux/music/insert-song/)、[OP](https://gundam-official.com/gquuuuuux/music/theme-song/)及[ED](https://gundam-official.com/gquuuuuux/music/ending/)一次取得曲名、演唱、用途／話數及創作；[中文作品歌曲條目](https://zh.wikipedia.org/wiki/機動戰士Gundam_GQuuuuuuX)與[中文作品索引](https://youranimes.tw/animes/5608)交叉核對。TV首播時間已有中文來源，原始2025官網時段頁及其他片尾呈現仍可補，取得逐集官方credit時再接續。
- [末日後酒店官方IN公告](https://apocalypse-hotel.jp/news/581/)、[ABEMA第6話報導](https://times.abema.tv/articles/-/10178315)、[第9話報導](https://times.abema.tv/articles/-/10181895?page=1)與[Mau2逐集歌曲](https://www.mau2.com/anime/apocalypsehotel)本文實際查閱。另獨立中文聲優歌曲索引及Anisil歌曲索引有可讀公開索引內容，支持新增IN曲名／歌唱／話數；索引本文尚未成功讀取，3筆新增用途各保留basic_evidence續查條件，不能稱交叉本文已驗收。無繞過403／安全限制，未從商品或完整歌詞推論TV用途。
- [コンパスMUSIC](https://www.compass-anime.com/music/)只明列常態〈拍動〉及〈ハートエイク〉；原ED2〈パーフェクト・パルフェ・パレード〉的曲名、演唱及TV用途兩輪定向查找未獲清楚證據。原ID／曲名／舊來源保留，seasonIds為空，補逐集credit或官方角色歌曲用途後才恢復季度；不把本次失敗查找寫成正面來源日期。
- [前橋MUSIC](https://www.maebashi-witches.com/music/)、[ED商品](https://www.maebashi-witches.com/goods/detail.php?category_id=2&id=954)、[最終未来少女發行](https://www.saishumiraishoujo.com/discography/773155af-1980-41da-b50d-1064a5b5efb9)、[ざつ旅MUSIC](https://zatsutabi.com/music.html)、[中禪寺TV公告](https://honeyworks.jp/news/10724/)、[ヴィジランテ第1期](https://vigilante-anime.com/music/1st.html)、[紫雲寺MUSIC](https://shiunjifamily.com/music/)、[花人偶OP](https://hanadoll-anime.com/release/cd/op/)及[ED](https://hanadoll-anime.com/release/cd/ed/)與原有效交叉來源重用。各自首播頁支持動畫欄位，不把其他CD曲目自動登記IN。
- 全批未記錄詞／曲／編、音源、影片、發行品與正版平台細節由逐曲pendingFields接續；基本資料先行。2025春尚34、冬133筆現有OP／ED未逐批核對，夏15筆延後種類；已知2026秋3部、サバイバル冬與其餘季度未明用途續查條件保持。標準TV作品聯集、2020–2026基本階段與長期目標均未完成。

### 本機檢查與展示

- 最終npm test 4檔8項、npm run build 2,098 HTML／4,194公開產物通過；Astro 0 errors／warnings／hints。實際ApiProvider解析10部35筆全部成功，原名、演唱、類別、用途季度、歌曲識別與authoring一致；兩組同曲不同用途共用識別檢查通過。私人驗收腳本補相容未明寫songId的舊JSON，不更改正常程式遷就腳本。
- Chromium393×852實際預覽10頁35組曲名、演唱、展開詳情及資料狀態，無橫向溢出、app errors與影片iframe。in-app Chromium665像素及手機均驗證GQuuuuuuX的HALO搜尋1／12、IN篩選10／12；原ED3錨點開啟正名後劇中歌及續查狀態。
- 資料僅改現有季度seed及相同用途data覆寫，沒有新季度／contract／UI／播放器改動，本機不逐曲重跑完整E2E；PR／main正常CI仍涵蓋完整重要E2E。Cloudflare dry-run exit0且完成marker、無bindings；公開邊界、文件連結、diff與私隱檢查於提交前收尾。實際部署與live驗收待完成，不以本機通過代替發布。

預覽入口：`/anime/kidou-senshi-gundam-gquuuuuux/`、`/anime/apocalypse-hotel/`、`/anime/shiunji-ke-no-kodomotachi/`、`/anime/compass-2-0-sentou-setsuri-kaiseki-system/`、`/seasons/2025-spring/`。第54批公開接點見頂部；先完成本季其餘標準TV，再接2025冬，延後短篇不阻擋較舊季進度。


### 第53批正式發布驗收（2026-10-20）

- [PR #145](https://github.com/kyeunga25/anisonary/pull/145)通過quality及Workers Builds後正常rebase合併；審閱head`b5ca217681c539fbcf1a67b7ef99948f9a093c39`，main來源`89c007358d86266ecaca30dbb625bf6bf283903f`與審閱tree相同，main兩項gate亦成功。正常CI涵蓋完整重要E2E，沒有略過gate。
- 實際Wrangler部署使用固定4,194個第53批已驗證產物，部署來源乾淨；Cloudflare版本metadata確認`batch53-basics`及完整main來源／PR #145一致，第54批範圍與後續修改未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與審閱產物SHA-256一致，2條未知路徑返回真正404；安全headers、API noindex／revalidation／無跨域開放與實際ApiProvider 10部35筆驗收通過。
- 正式站Chromium393×852展開10頁35組曲名／演唱／資料狀態，無溢出、app errors與影片iframe；手機及in-app Chromium665像素均確認GQuuuuuuX的HALO搜尋1／12、IN篩選10／12，原ED3錨點仍開啟正名後的劇中歌及續查狀態。已實際檢視手機驗收畫面。
- annotated tag `batch53-basics`指向上述正式來源並已推送。第54批接續2025春其餘標準TV與2025冬，詳細深化及基本階段／長期目標未完成。


## 2026-10-20 批次：2020-2026-tv-basics-54（已正式發布）

固定2020–2026標準TV與2026-10-14資料截止日保持。先處理2025春：`curated-178046`、`curated-177120`、`curated-176702`、`curated-176246`、`curated-178781`、`curated-185939`；再接2025冬：`curated-176158`、`curated-177506`、`curated-178100`、`curated-179689`，起始21筆既有用途。優先本期TV資訊、原名／演唱／OP・ED用途及每曲狀態，同頁明列的已證實IN一併記錄；短篇／WEB與特殊編排延後。第53批正常PR／main gate、實際部署及正式站驗收已完成，來源與產物保持固定，本批修改未混入第53批發布。第54批資料、公開JSON及展示現已驗證，正常發布待完成；基本階段與長期目標未完成。


### 第54批公開用途與實際差異

10部既有動畫、21筆既有用途（2025春13、冬8），新增動畫／歌曲／用途均0；20筆基本三欄第一方／交叉欄位證據已登記，1筆舊ED用途未明另留待補狀態。所有ID、序號與歌曲／影片／平台識別保持。

| 公開theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `guilty-gear-strive-dual-rulers-op-1` | AXCLUSION／ulma sound junction | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `guilty-gear-strive-dual-rulers-ed-1` | 在処／Nowlu | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `ninja-to-koroshiya-no-futarigurashi-op-1` | やれんの？エンドレス／花澤香菜 | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `ninja-to-koroshiya-no-futarigurashi-ed-1` | にんころダンス／HoneyWorks feat.ハコニワリリィ | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `teogonia-op-1` | 衝動／野田愛実 | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `teogonia-ed-1` | 月と僕と新しい自分／STU48 | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `mono-op-1` | メニメリ・メモリーズ！／シネフォト部 （雨宮さつき/CV.三川華月、霧山アン/CV.古賀葵、敷島桜子/CV.遠野ひかる） | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `mono-ed-1` | ウィークエンドロール／halca | 補日文原名，英文入口及ID保持 |
| `sentai-daishikkaku-2nd-season-op-1` | マジで世界変えちゃう5秒前／ORANGE RANGE | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `sentai-daishikkaku-2nd-season-ed-1` | 正偽／梟note | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `sentai-daishikkaku-2nd-season-ed-2` | 次回予告／キタニタツヤ | 兩輪未明，保存原ID、原名／演唱，暫不計季度 |
| `hibi-wa-sugiredo-meshi-umashi-op-1` | そんなもんね／asmi | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `hibi-wa-sugiredo-meshi-umashi-ed-1` | 味噌汁とバター／汐れいら | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `s-rank-monster-no-behemoth-dakedo-neko-to-machigawarete-elf-musume-no-pet-to-shite-kurashitemasu-op-1` | 最上級の心／大渕野々花 | 補TV初回並與原配信日期分別 |
| `s-rank-monster-no-behemoth-dakedo-neko-to-machigawarete-elf-musume-no-pet-to-shite-kurashitemasu-ed-1` | リミー／ぽかぽかイオン | 補TV初回並與原配信日期分別 |
| `izure-saikyou-no-renkinjutsushi-op-1` | TREASURE！／DIALOGUE＋ | 補TV初回並與原配信日期分別 |
| `izure-saikyou-no-renkinjutsushi-ed-1` | トゥインクル・デイズ／harmoe | 補TV初回並與原配信日期分別 |
| `hazure-skill-kinomi-master-skill-no-mi-tabetara-shinu-wo-mugen-ni-taberareru-you-ni-natta-ken-nitsuite-op-1` | ブレイブリーダンス／アーリオ・オーリオ・エ・ペペロンチーノ×雪花ラミィ | 補TV初回並與原配信日期分別 |
| `hazure-skill-kinomi-master-skill-no-mi-tabetara-shinu-wo-mugen-ni-taberareru-you-ni-natta-ken-nitsuite-ed-1` | そんな僕らの冒険譚！／TrySail | 補TV初回並與原配信日期分別 |
| `salaryman-ga-isekai-ni-ittara-shitennou-ni-natta-hanashi-op-1` | 異世界協奏曲／清野研太朗 | 補TV初回並與原配信日期分別 |
| `salaryman-ga-isekai-ni-ittara-shitennou-ni-natta-hanashi-ed-1` | ツヨガールフレンド／otonari | 補TV初回並與原配信日期分別 |

- 已處理anime ID：`curated-178046`、`curated-177120`、`curated-176702`、`curated-176246`、`curated-178781`、`curated-185939`、`curated-176158`、`curated-177506`、`curated-178100`、`curated-179689`。全目錄仍30季、2,052部、4,596用途（4,525 OP／ED、61 IN、10 TS），每筆均有dataStatus；451筆基本三欄有兩類欄位證據，其餘4,145筆保留來源待細分。22筆季度未明保留全目錄及動畫頁，不混入季度分母。
- 春季現有優先TV清單最後6部核對完成，短篇／WEB／特殊編排的21筆現有OP／ED延後；這不是完整標準TV作品聯集已閉合。GUILTY GEAR採2025-04-05土曜22:30 TV初回，未套2026年AT-X重播；忍者與殺手AT-X 21:30先於地上波22:30及WEB22:00；神統記4月11日24:30、mono4月12日24:00、日々は過ぎれど飯うまし4月12日24:30均保存編排日及暦日差別。
- 冬季4部TV初回補正：ベヒーモス通常版為2025-01-04土曜22:30；いずれ最強為1月8日22:00，1月1日22:30是先行WEB；木の実マスターTV為1月7日23:30，ABEMA的12月31日24:00先行另記；サラリーマンTV為1月6日23:30，後續配信及2026再放送不當原首播。沒有從動畫剪輯版名稱推定新歌曲錄音。
- mono ED日文原名正名〈ウィークエンドロール〉，原英文Weekend Roll保留作可搜尋名稱，舊ID／網址與halca演唱保持；OP的三名CV按本曲名義逐一保存。DIALOGUE＋名義及舊演唱名單對齊官方。神統記ED明列本曲STU48六名歌唱者逐一記錄；木の実OP合作名義分列兩名實際歌唱，サラリーマンED名義otonari與實際歌唱／作詞RIRIKO分別保存。
- 同頁新增35筆詞／曲／編角色；未由職業、團隊名、評論或「寫歌」概稱推論缺少角色。新增YouTube外連、影片metadata、錄音及發行品均0；已讀MUSIC的TV size／Instrumental、CD版別及平台入口保存來源及續查條件，詳細關係化留待下一階段，不增加歌曲數或推定full。
- 戰隊大失格第2期〈次回予告〉舊ED2：官方MUSIC的本曲是2024年OP，而第2期常態OP／ED為另一組；兩輪定向查找仍無本筆第2期ED第一方證據。只補已確認曲名／演唱證據，原ED型ID與歌曲保留，seasonIds為空並留取得逐集片尾credit後再查的條件，不自動套用第1期用途或猜造第24話特殊ED。
- 21筆原ID、序號、影片、音源、發行品與全部平台連結保持；只有本次實際重讀的GUILTY GEAR首頁2筆舊歌曲來源日期更新，其餘舊來源條目及日期不變。2,042部非本批動畫JSON SHA-256相同；兩筆同批legacy data覆寫移交seed。沒有程式、parser、contract、UI、播放器、測試、依賴或部署設定變更。

### 有效來源與續查條件

- [GUILTY GEAR官方](https://www.guiltygear.com/ggstdr/jp/)同頁支持TV時段及OP／ED；[忍者與殺手MUSIC](https://ninkoro.jp/music/index.html)／[ONAIR](https://ninkoro.jp/onair/index.html)、[神統記MUSIC](https://teogonia-anime.com/music/)／[ONAIR](https://teogonia-anime.com/onair/)、[mono OP](https://mono-weekend.photo/music/)／[ED](https://mono-weekend.photo/music/?page=ending)／[ONAIR](https://mono-weekend.photo/onair/)同時支持本期基本資料與同頁明列創作／歌唱。
- [戰隊MUSIC](https://sh-anime.shochiku.co.jp/anime-sentai-daishikkaku/music.html)含兩期內容，已與本期官網分別；只把第2期明列兩首接到春季。本筆舊ED2已完成兩輪定向查找，取得逐集官方credit再恢復季度；沒有把第1期歌曲公告當作第2期用曲證據。
- [ひびめしOP](https://hibimeshi.com/music/)／[ED](https://hibimeshi.com/music/?id=ed)／[ONAIR](https://hibimeshi.com/onair/)、[ベヒーモスOP](https://behemoth-anime.com/music/opening.html)／[ED](https://behemoth-anime.com/music/ending.html)／[通常版TV](https://behemoth-anime.com/onair/index.html)、[いずれ最強MUSIC](https://izuresaikyo-pr.com/music/)及[原TV／先行配信](https://izuresaikyo-pr.com/)、[木の実MUSIC](https://kinomimaster.com/music/)及[TV／先行配信](https://kinomimaster.com/)、[サラリーマンMUSIC](https://salaryman-big4.com/music/)／[ONAIR](https://salaryman-big4.com/onair/)已實際讀取，兩個MUSIC動態ED分頁亦實際開啟，不只核對預設OP。既有有效AnimeThemes／UZUREA交叉來源沿原日期重用，不重查全量舊頁。
- 各曲詞／曲／編、官方影片、音源、發行品與確切平台的未記錄欄位，均可由dataStatus.pendingFields接續。已有官方曲目表的用途另記followUp，下一階段重用來源；未知平台地區可用性保持unknown。2025冬仍125筆現有OP／ED未逐批核對，春21、夏15筆延後種類；2026秋3部、サバイバル冬與22筆季度未明等既有缺口保持。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194公開產物通過，Astro 0 errors／warnings／hints；實際ApiProvider 10部21筆解析成功，原名／演唱／用途／季度與authoring相同。來源日期、原影片與非本批JSON保持檢查通過。
- Chromium393×852預覽10頁21筆曲名／演唱／展開詳情／資料狀態，無溢出、app errors或影片iframe；原ED2保留待核狀態，mono日文原名／創作／待補欄位可讀，已檢視實際畫面。in-app Chromium665像素驗證春季Weekend Roll仍找出日文原名1筆、戰隊第2期只列已確認OP／ED共2筆，冬季いずれ最強2筆，搜尋完成後結果符合用途季度。
- 只有三個資料檔，沒有新季度或UI／contract／播放器改動，本機不重跑完整E2E；正常PR／main CI仍涵蓋完整重要E2E。Cloudflare dry-run exit0且完成marker、無bindings；公開邊界、文件連結、diff及私隱檢查於提交前收尾。正式部署與live驗收待完成，不以本機通過取代發布證據。

預覽入口：`/anime/mono/`、`/anime/sentai-daishikkaku-2nd-season/`、`/anime/izure-saikyou-no-renkinjutsushi/`、`/anime/salaryman-ga-isekai-ni-ittara-shitennou-ni-natta-hanashi/`、`/seasons/2025-spring/`、`/seasons/2025-winter/`。第55批依頂部31筆既有用途接續2025冬，基本階段及長期目標均未完成。


### 第54批正式發布驗收（2026-10-20）

- [PR #146](https://github.com/kyeunga25/anisonary/pull/146)通過quality及Workers Builds後正常rebase合併；審閱head`a276c3918975f8443206a9ced3888f16fd03bf83`，main來源`b5d8604efb5d53558393ff8271bfd91b9447a1b0`與審閱tree相同，main兩項gate亦成功。正常CI涵蓋完整重要E2E，沒有略過gate。
- 實際Wrangler部署使用固定4,194個第54批已驗證產物，部署來源乾淨；Cloudflare版本metadata確認`batch54-basics`與完整main來源／PR #146一致，第55批範圍及後續資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與審閱產物SHA-256一致，2條未知路徑返回真正404；安全headers、API noindex／revalidation／無跨域開放與實際ApiProvider 10部21筆驗收通過。
- 正式站Chromium393×852展開10頁21組曲名／演唱／資料狀態，無溢出、app errors與影片iframe，待核用途及mono日文原名正確。in-app Chromium665像素確認春季Weekend Roll找出日文原名1筆、戰隊第2期只列已確認OP／ED 2筆，冬季いずれ最強2筆；另實際檢視正式站mono展開的資料狀態、詞曲編與來源畫面。
- annotated tag `batch54-basics`指向上述正式來源並已推送。第55批接續冬季31筆既有用途，詳細深化及基本階段／長期目標未完成。


## 2026-10-20 批次：2020-2026-tv-basics-55（已正式發布）

固定2020–2026標準TV與2026-10-14資料截止日保持，接續2025冬：`curated-145740`、`curated-169295`、`curated-176642`、`curated-177159`、`curated-178462`、`curated-178495`、`curated-174596`、`curated-165171`、`curated-166699`、`curated-170650`，起始31筆既有用途。先核對TV本期、原名／名義／用途及逐曲狀態，明確IN與特殊片尾按實際角色保存；不把較早OVA／劇場版或同名作品歌曲自動套入本期。詳細集中深化及短篇延後。第54批正常PR／main gate、實際部署及正式站驗收已完成，來源與產物固定，本批未混入前批發布。第55批資料、公開JSON及本機展示現已驗證，正常發布待完成；基本階段及長期目標未完成。


### 第55批公開用途與實際差異

10部既有動畫、31筆既有用途（原31 OP／ED修正為30 OP／ED、1 IN）；新增動畫／歌曲／用途均0。25筆基本三欄第一方／交叉欄位證據已登記；6筆舊角色版／ED用途經定向查找仍未明，保存待補狀態。原ID、序號、歌曲及影片識別保持。

| 公開theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `grisaia-phantom-trigger-op-1` | ゼロ・イグニッション／上杉真央 | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `grisaia-phantom-trigger-ed-1` | ダンデライオン／南條愛乃 | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `grisaia-phantom-trigger-ed-2` | クロスバース／THE SIXTH LIE | 補日文原名，Crossverse保留搜尋入口 |
| `bang-dream-ave-mujica-op-1` | KiLLKiSS／Ave Mujica | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `bang-dream-ave-mujica-ed-1` | Georgette Me, Georgette You／Ave Mujica | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `bang-dream-ave-mujica-ed-2` | Crucifix X／Ave Mujica | ED更正為第10話IN，原ED型ID及序號保持 |
| `ameku-takao-no-suiri-karte-op-1` | SCOPE／Aimer | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `ameku-takao-no-suiri-karte-ed-1` | will be fine feat. Anly／ゴスペラーズ | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `momentary-lily-op-1` | おいしいサバイバー／花冷え。 | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `momentary-lily-ed-1` | リアル／miwa | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta-op-1` | 恋人以上、好き未満／＝LOVE | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta-ed-1` | スキキライも追い越して／桜森朱音（CV：矢野妃菜喜）＆石倉陽鞠（CV：鈴代紗弓）＆北条糸青（CV：稗田寧々） | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta-ed-2` | スキキライも追い越して／矢野妃菜喜（朱音ver.） | 兩輪未明，保留原資料，TV用途／季度待核 |
| `class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta-ed-3` | スキキライも追い越して／稗田寧々（糸青ver.） | 兩輪未明，保留原資料，TV用途／季度待核 |
| `class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta-ed-4` | スキキライも追い越して／鈴代紗弓（陽鞠ver.） | 兩輪未明，保留原資料，TV用途／季度待核 |
| `class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta-ed-5` | スキキライも追い越して／前田佳織里（真帆ver.） | 兩輪未明，保留原資料，TV用途／季度待核 |
| `class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta-ed-6` | スキキライも追い越して／矢野妃菜喜、鈴代紗弓、前田佳織里、稗田寧々（4人ver.） | 兩輪未明，保留原資料，TV用途／季度待核 |
| `tasokare-hotel-op-1` | たそかれ／吉澤嘉代子 | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `tasokare-hotel-ed-1` | Twilight／りぶ | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `tasokare-hotel-ed-2` | 誰ソ彼パピヨン回廊／ALI PROJECT | 兩輪未明，保留原資料，TV用途／季度待核 |
| `sora-iro-utility-tv-op-1` | 主人公になろう！ feat.鈴木愛理／オーイシマサヨシ | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `sora-iro-utility-tv-ed-1` | 水平線／矢作萌夏 | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `sora-iro-utility-tv-ed-2` | 群青 Love theory (special ver.)／HAM（高木美佑・天海由梨奈・後藤彩佐） | 確認2025 TV最終話ED，與2021短編分別 |
| `medalist-op-1` | BOW AND ARROW／米津玄師 | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `medalist-ed-1` | アタシのドレス／ねぐせ。 | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `okinawa-de-suki-ni-natta-ko-ga-hougen-sugite-tsura-sugiru-op-1` | 大大大好き／HY | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `okinawa-de-suki-ni-natta-ko-ga-hougen-sugite-tsura-sugiru-ed-1` | 島人ぬ宝／ひーなー（CV：鬼頭明里）＆かーなー（CV：ファイルーズあい） | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `okinawa-de-suki-ni-natta-ko-ga-hougen-sugite-tsura-sugiru-ed-2` | あなたに／ひーなー（CV：鬼頭明里）＆かーなー（CV：ファイルーズあい） | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `okinawa-de-suki-ni-natta-ko-ga-hougen-sugite-tsura-sugiru-ed-3` | Best Friend／ひーなー（CV：鬼頭明里）＆かーなー（CV：ファイルーズあい） | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `kisaki-kyouiku-kara-nigetai-watashi-op-1` | 君としか恋しない／福山潤 | 核對本期TV與基本欄位，補逐曲待查狀態 |
| `kisaki-kyouiku-kara-nigetai-watashi-ed-1` | アリバイなカーテシー／DIALOGUE＋ | 核對本期TV與基本欄位，補逐曲待查狀態 |

- 已處理anime ID：`curated-145740`、`curated-169295`、`curated-176642`、`curated-177159`、`curated-178462`、`curated-178495`、`curated-174596`、`curated-165171`、`curated-166699`、`curated-170650`。全目錄仍30季、2,052部、4,596用途（4,524 OP／ED、62 IN、10 TS），每筆均有dataStatus；476筆基本三欄有兩類欄位證據，其餘4,120筆保留來源待細分。28筆季度未明保留全目錄、搜尋及動畫頁，不混入季度分母。
- グリザイアTV初回為2025年1月1日水曜25:00（暦1月2日），通常24:00；先行WEB與舊OVA／劇場版分別。原Crossverse正名〈クロスバース〉，英文保留搜尋入口；官方列TVグランドED，未猜造使用話數。
- Ave Mujica沿本期TV與權利方公告核對OP／ED1，Georgette Me, Georgette You逗號依原名補正。官方Crucifix X商品明列第10話挿入歌，修正原ED類別並保留原ID／序號；中文交叉公告支持插曲角色。其他專輯曲未因同團體或收錄直接新增TV用途，取得各曲明確官方使用資料再補。
- 天久初回以2024年11月30日公告的2025年1月1日24:00（暦1月2日）、第1・2話一小時為準，不套用現行ONAIR的模糊0:30表記。もめんたりー・リリィ初回1月2日23:30、第二話起24:00分別保存。誰ソ彼ホテルTV為1月8日22:30，原1月3日不當作TV首播。
- そらいろユーティリティTV為1月3日25:00（暦1月4日）；唱片公司訪談明確將群青 Love theory (special ver.)列為2025 TV最終話ED，與2021短編一段式分別。メダリスト使用第1期MUSIC／ONAIR archive，首播1月4日土曜25:30（暦1月5日），不把現行第2期或2027劇場版套用2025。沖ツラ1月4日土曜25:00、妃教育1月5日日曜22:00同頁核實。
- 同頁新增35筆詞／曲／編角色；補Anly、鈴木愛理，以及本曲明列三人／雙人CV歌唱者。DIALOGUE＋與沖ツラED1名義對齊官方；角色／團體演唱名義保留，實際CV以個別credits展示。未從團體一般成員表、藝人職業、寫歌評論、sound production或專輯其他曲目推定歌唱／創作。
- 新增YouTube外連、影片metadata、錄音及發行品均0；既有影片／外連保留。已讀官方頁含特殊版背景、solo／Instrumental及商品曲目，保存續查條件供詳細階段重用；不把MV當full、商品CD或無字幕特典當已播TV用途，也不因同名自動合併不同歌唱版本的歌曲識別。
- 31筆原ID、序號、音源、發行品、影片及平台連結保持；僅誰ソ彼ホテルOP／ED1與沖ツラ4筆實讀首頁的6筆舊來源條目更新核對日，其餘沿原日期。2,042部非本批動畫JSON SHA-256逐項相同，沒有程式、parser、contract、UI、測試、依賴或部署設定修改，沒有legacy覆寫移轉。

### 有效來源與未解缺口

- [グリザイアOP](https://grisaia-pt.com/gptanime/music)、[ED／grand ED](https://grisaia-pt.com/gptanime/music_ed)、[ONAIR](https://grisaia-pt.com/gptanime/onair)支持2025 TV、三首基本欄位及同頁創作；未套舊遊戲／劇場曲。[Ave Mujica權利方公告](https://prtimes.jp/main/html/rd/p/000008333.000014827.html)、[Crucifix X官方商品](https://bang-dream.com/discographies/4052/)、[本期ONAIR](https://anime.bang-dream.com/avemujica/onair/)與[中文插曲交叉](https://www.ptt.cc/bbs/BanG_Dream/M.1741271615.A.65E.html)支持用途更正；只保存必要事實及連結，不收錄留言或個人資料。
- [天久OP](https://atdk-a.com/music/op.html)／[ED](https://atdk-a.com/music/ed.html)及[初回公告](https://atdk-a.com/news/?article_id=66746)、[もめんたりーSTAFF／歌曲](https://sh-anime.shochiku.co.jp/momentary-lily/staff_cast/index.html)／[ONAIR](https://sh-anime.shochiku.co.jp/momentary-lily/onair/index.html)、[くら婚OP](https://kura-kon.com/music/)／[三人ED](https://kura-kon.com/music/?id=ed)／[ONAIR](https://kura-kon.com/onair/)均已實讀。既有有效AnimeThemes／UZUREA交叉沿原日期，不整批重查。
- くら婚舊ED2–6（朱音、糸青、陽鞠、真帆solo及四人版）保留原名、演唱、ID及影片。官方MUSIC／Movie只確認三人ED；[BD1](https://kura-kon.com/bddvd/01.html)證實朱音ver.為特典CD收錄，不能自動推定其TV使用；兩輪定向查找仍缺每筆TV使用證據。5筆角色版與三人TV ED的錄音關係尚未完整核對，不因同名合併song ID；本批5筆seasonIds為空，待官方逐集credit或明確使用公告後恢復相應季度。
- [誰ソ彼ホテル官方](https://anime-tasokarehotel.com/)本期只明列たそかれ／Twilight；[OST公告](https://anime-tasokarehotel.com/news/post-35/)列誰ソ彼パピヨン回廊(Game ver.)，不能證明舊ALI PROJECT版ED2用於本期TV。兩輪定向查找未明，保留既有影片與資料、seasonIds為空；取得官方逐集片尾credit後核對曲名、名義與用途，未把同名OST曲冒充本筆演唱版本。
- [そらいろMUSIC](https://anime-sorairo-utility.com/music/)及[唱片公司訪談](https://news.ponycanyon.co.jp/2025/03/109770)、[メダリスト第1期MUSIC](https://medalist-pr.com/tv/music-s1.html)／[ONAIR](https://medalist-pr.com/tv/onair-s1.html)、[沖ツラMUSIC／ONAIR](https://okitsura.com/)、[妃教育MUSIC](https://kisakikyouiku.com/music.html)／[ONAIR](https://kisakikyouiku.com/onair.html)均已實讀，官方站部分普通瀏覽器本文可用，單一取回工具失敗未當作頁面不存在，未繞過任何存取限制。
- 詞／曲／編、音源版本、官方影片、收錄及精確正版平台的每曲缺少項目均由dataStatus.pendingFields可接續；已見官方版本／商品關係另存followUp，詳細階段按條件重用。2025冬現有OP／ED仍94筆未逐批核對；夏15、春21筆延後種類與原28筆季度未明、2026秋3部等缺口保持，標準TV作品聯集尚未閉合。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194公開產物通過；實際ApiProvider 10部31筆解析成功，資料與authoring相同。原媒體／來源日期及非本批2,042部JSON保持檢查通過。
- Chromium393×852預覽10頁31筆曲名／演唱／詳情／資料狀態，無溢出、app errors或影片iframe；7筆動畫的文字篩選、6筆待核用途、Crucifix X插曲與クロスバース正名皆可讀。in-app Chromium665像素實際檢視原名、創作／來源及待補欄位；季度Crossverse英文仍找出日文原名1筆，くら婚只列已確認OP／ED兩筆，待核5筆保留動畫頁。
- 只有一個季度資料檔、無新季度或UI／contract／播放器改動，不重跑本機完整E2E；正常PR／main仍涵蓋重要E2E。Cloudflare dry-run exit0、完成marker與無bindings；公開邊界245檔、文件連結、diff及私隱檢查在提交前收尾。正式部署及live驗收待完成，本機通過不代表已發布。

預覽入口：`/anime/grisaia-phantom-trigger/`、`/anime/bang-dream-ave-mujica/`、`/anime/class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta/`、`/anime/tasokare-hotel/`、`/seasons/2025-winter/`。第56批依頂部22筆接續，本階段及長期目標均未完成。


### 第55批正式發布驗收（2026-10-20）

- [PR #147](https://github.com/kyeunga25/anisonary/pull/147)通過quality及Workers Builds後正常rebase合併；審閱head`a65fe39dcc64e5cd82fadf4212942450480368d1`，main來源`8a1b0dba9dcf1a97dacfa98b7ec635cb23670cb4`與審閱tree相同，main兩項gate亦成功。正常CI涵蓋重要E2E，未略過gate。
- 實際Wrangler部署固定4,194個已驗證產物，部署來源乾淨；Cloudflare版本metadata確認`batch55-basics`與完整main來源／PR #147一致，第56批未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256一致，2條未知路徑返回真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 10部31筆驗收通過。
- 正式站Chromium393×852展開10頁31組原名／演唱／資料狀態，無溢出、app errors及影片iframe；7筆長歌單篩選、6筆季度待核、插曲角色及原名修正可讀。另在in-app Chromium665像素實際檢視クロスバース的基本證據、詞曲編、來源與待補欄位畫面。
- annotated tag `batch55-basics`指向正式來源並已推送。第56批接續冬季22筆起始用途，基本階段、作品聯集及長期目標未完成。


## 2020-2026-tv-basics-56（已正式發布）

固定2020–2026標準TV與2026-10-14資料截止日保持；實際查閱日另記。接續2025冬：`curated-176273`、`curated-176496`、`curated-185880`、`curated-169441`、`curated-170916`、`curated-179696`、`curated-176063`、`curated-177552`、`curated-178550`、`curated-176234`，起始22筆既有用途。先保存可快速確認的本期TV、歌曲原名／名義／用途與逐曲狀態，已證實插曲一併記錄；短篇、特殊編排與詳細集中深化延後。第55批正常PR／main gate、實際部署及正式站驗收已完成，來源與產物固定，本批未混入前批發布；第56批資料、公開JSON及本機展示已驗證，正常發布待完成；基本階段及長期目標未完成。


### 第56批公開用途與實際差異

10部既有動畫、23筆用途（22 OP／ED、1 IN），保留22筆原用途，新增1筆劇中歌／歌曲識別、動畫0。22筆基本三欄第一方／交叉欄位證據已登記；1筆第2期舊ED用途兩輪未明另存續查。所有原ID、序號、歌曲、影片及URL保持。

| 公開theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `zenshuu-op-1` | Zen／BAND-MAID | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `zenshuu-ed-1` | ただ、君のままで／Sou | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `ore-dake-level-up-na-ken-season-2-arise-from-the-shadow-op-1` | ReawakeR (feat. Felix of Stray Kids)／LiSA | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `ore-dake-level-up-na-ken-season-2-arise-from-the-shadow-ed-1` | UN-APEX／TK from 凛として時雨 | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `ore-dake-level-up-na-ken-season-2-arise-from-the-shadow-ed-2` | LEveL／SawanoHiroyuki[nZk]:TOMORROW X TOGETHER | 兩輪未明，第2期TV用途／季度待核，名義依Sony原文補正 |
| `ao-no-exorcist-yosuga-hen-op-1` | 痛覚／amazarashi | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `ao-no-exorcist-yosuga-hen-ed-1` | オーバーラップ／シユイ | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `watashi-no-shiawase-na-kekkon-2nd-season-op-1` | 幸せな約束。／りりあ。 | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `watashi-no-shiawase-na-kekkon-2nd-season-ed-1` | 月影おくり／伊東歌詞太郎 | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `watashi-no-shiawase-na-kekkon-2nd-season-in-1` | きずなの唄／清（CV：小林由美子） | 新增第24話IN，附官方試聽與精確數位單曲 |
| `mahoutsukai-no-yakusoku-op-1` | Year N／Mili | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `mahoutsukai-no-yakusoku-ed-1` | 僕らは愛に恋して生きる／LIP×LIP（勇次郎・愛蔵／CV：内山昂輝・島﨑信長） | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `kono-kaisha-ni-suki-na-hito-ga-imasu-op-1` | あのね、／ポルカドットスティングレイ | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `kono-kaisha-ni-suki-na-hito-ga-imasu-ed-1` | ふたりじめ／pachae | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `botsuraku-yotei-no-kizoku-dakedo-hima-datta-kara-mahou-wo-kiwamete-mita-op-1` | Wonderlust!!／saji | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `botsuraku-yotei-no-kizoku-dakedo-hima-datta-kara-mahou-wo-kiwamete-mita-ed-1` | JOY!!／岡咲美保 | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `kuroiwa-medaka-ni-watashi-no-kawaii-ga-tsuujinai-op-1` | 雨トキメキ恋模様／いろはにほへっと あやふぶみ | 確認第1期用曲，未套現行第2期官網 |
| `kuroiwa-medaka-ni-watashi-no-kawaii-ga-tsuujinai-ed-1` | キュンアピ／前田佳織里 | 確認第1期用曲，未套現行第2期官網 |
| `kuroiwa-medaka-ni-watashi-no-kawaii-ga-tsuujinai-ed-2` | Is this love?／逢田梨香子 | 確認第1期用曲，未套現行第2期官網 |
| `unnamed-memory-act-2-op-1` | Unsung ballad／TRUE | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `unnamed-memory-act-2-ed-1` | inclusion／Arika | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `ishura-2nd-season-op-1` | True Peak／前島麻由 | 核對本期TV及基本欄位，補逐曲待查狀態 |
| `ishura-2nd-season-ed-1` | THE IOLITE／sajou no hana | 核對本期TV及基本欄位，補逐曲待查狀態 |

- 已處理anime ID：`curated-176273`、`curated-176496`、`curated-185880`、`curated-169441`、`curated-170916`、`curated-179696`、`curated-176063`、`curated-177552`、`curated-178550`、`curated-176234`。全目錄仍30季、2,052部，現4,597用途（4,524 OP／ED、63 IN、10 TS），每筆均有dataStatus；498筆基本三欄有兩類欄位證據，其餘4,099筆保留來源待細分。29筆季度未明保留全目錄、搜尋與動畫頁，不混入季度分母；另有已確認冬用途的兩首わた婚第2期OP／ED，其春季最終話使用另存續查，不混稱全曲季度已閉合。
- 全修。TV為2025年1月5日日曜23:45，Prime Video同時；後日AT-X一挙與地方台不當原首播。俺レベ第2期為1月4日土曜24:00（暦1月5日），青の祓魔師終夜篇為同日24:30；地上波及配信原編排分別保存。
- わた婚第2期1月6日月曜22:30TV，最終第26話官方延期至4月9日21:25；本批先保留已確認冬季用曲，未從整期主題曲概稱推定春季最終話的每首使用，兩首分別存use_quarters續查條件。沒有套用第一期、OVA或2026特別篇歌曲。
- 新增〈きずなの唄〉／清（CV：小林由美子）：官方MUSIC及KADOKAWAanime試聽明列第2期第24話劇中歌、2025年3月公開；Apple Music正版單曲交叉曲名／名義／TV劇中歌。新增一個穩定歌曲識別及一筆IN用途；同頁baker詞／曲／編與實際CV分列保存，官方試聽及精確單曲入口不等於已完成影片metadata、完整音源及發行品關係。美國目錄可見不宣稱HK／TW可播。
- 魔法使いの約束1月6日22:00、会社23:00；没落貴族1月6日月曜25:30（暦1月7日），第一話TV／WEB同時、第二話起WEB先行分別；黒岩メダカ第1期同日24:00。Unnamed Memory Act.2以1月7日AT-X 23:30先於地上波24:30，異修羅第2期1月8日水曜23:00。地方台遲播、重播、劇場或後期官網內容不當新一期原TV歌曲。
- 同頁新增46筆詞／曲／編角色；ReawakeR詞為Benjamin及cAnON.、曲編澤野弘之，UN-APEX只明列TK詞／曲，編曲留待補。LIP×LIP兩名CV、ReawakeR的Felix、Arika的夏吉ゆうこ及メダカOP三名實際歌唱各依本曲明列名義／評論分列；未由團體一般成員表或藝人經歷推定其他角色。
- LEveL舊第2期ED2：本期MUSIC只列ReawakeR／UN-APEX，Sony製作人訪談將本曲列第1期OP；兩輪定向查找仍缺本筆第2期ED第一方證據。保留原ID與歌曲／影片，正規演唱名義補為SawanoHiroyuki[nZk]:TOMORROW X TOGETHER，seasonIds為空，待逐集官方credit或使用公告；未把非官方第12話說法或第1期OP直接套本期。
- 新增YouTube歌曲外連1、精確正版專輯入口1，影片metadata／錄音／發行品實體均0。魔法使いOST的CD首曲包含Year N、數位OST不包含OP，已保存條件留待逐版關係化；UN-APEX的TV edit／English／Leveling及其他EP／album線索同樣延後，沒有從MV或曲長推定full。
- 22筆原ID、序號、影片、錄音、發行品及平台入口完整保留；僅会社2筆與没落貴族2筆實讀首頁的4筆舊來源條目更新日期，其餘來源日期保持。2,042部非本批動畫JSON SHA-256逐項相同，沒有legacy覆寫移轉，無程式、parser、contract、UI、測試、依賴或部署設定修改。

### 有效來源與未解缺口

- [全修MUSIC](https://zenshu-anime.com/music/)／[ONAIR](https://zenshu-anime.com/onair/)、[俺レベ第2期OP](https://sololeveling-anime.net/music/opening.html)／[ED](https://sololeveling-anime.net/music/ending.html)／[ONAIR](https://sololeveling-anime.net/onair/)、[青の祓魔師終夜篇OP](https://ao-ex.com/bluenight/music/opening.html)／[ED](https://ao-ex.com/bluenight/music/ending.html)／[ONAIR](https://ao-ex.com/bluenight/onair/)均已實讀；缺少創作未從藝人評論的「寫歌」概稱補造。
- [わた婚MUSIC](https://watakon-anime.com/music/)、[官方第24話劇中歌試聽](https://www.youtube.com/watch?v=-7t1on1uhro)及[最終話延期公告](https://watakon-anime.com/news/post-79)支持新增IN及原TV／跨季分別。既有兩首冬季OP／ED已核，春季最終話兩首實際用曲待官方逐集credit再補；第一期與2026特別篇資訊不混入。
- [魔法使いMUSIC](https://sh-anime.shochiku.co.jp/mahoyaku-anime/music/index.html)／[ONAIR](https://sh-anime.shochiku.co.jp/mahoyaku-anime/onair/index.html)、[会社MUSIC](https://kaishani-sukinahito.com/)／[ONAIR](https://kaishani-sukinahito.com/onair/)、[没落貴族MUSIC／ONAIR](https://botsurakukizoku-anime.com/)、[メダカ第1期MUSIC](https://monaxmedaka.com/1st/music/)／[ONAIR](https://monaxmedaka.com/1st/onair/)、[Unnamed Act.2 MUSIC](https://unnamedmemory.com/music.html)／[ONAIR](https://unnamedmemory.com/onair.html)、[異修羅第2期MUSIC](https://ishura-anime.com/music.html)／[ONAIR](https://ishura-anime.com/onair.html)已實讀。同頁一次取得多首基本資料與明列創作；普通瀏覽器可讀正文的頁面直接查閱，未繞過限制。
- [Sony官方製作人訪談](https://cocotame.jp/series/109911/)支持LEveL曲名／名義及第1期OP。本筆第2期用途已完成兩輪定向查找，待實際官方使用證據再恢復季度，不輪流重搜全量資料庫。其他原28筆季度未明與2026秋3部等舊缺口維持原觸發條件。
- 23筆詞／曲／編、音源、影片、收錄及平台缺少項目由dataStatus.pendingFields接續；已見商品及跨季線索另記followUp.fields／resumeWhen。2025冬現有OP／ED仍72筆未逐批核對，夏15、春21筆延後種類不阻擋標準TV向較舊季推進；作品聯集尚未閉合，詳細集中深化延後。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194公開產物通過；ApiProvider 10部23筆解析，原名／名義／用途與authoring相同，原資料保留及非本批JSON SHA-256通過。
- Chromium393×852展開10頁23組詳情／狀態，無溢出、app errors或影片iframe；新IN的CV、baker詞曲編、官方試聽／精確單曲入口與待補項目可讀。in-app Chromium665像素實際檢視狀態、創作及來源；冬季新IN可搜尋1筆，俺レベ只列已確認OP／ED兩筆，LEveL保留動畫頁待核。
- 一個季度資料檔改動，無新季度或UI／contract／播放器變更，不逐首或重跑本機完整E2E；正常PR／main仍涵蓋重要E2E。Cloudflare dry-run exit0且完成marker、無bindings；公開邊界、文件連結、diff及敏感內容在提交前收尾。正常發布與正式站驗收待完成，本機通過不作production證明。

預覽入口：`/anime/watashi-no-shiawase-na-kekkon-2nd-season/`、`/anime/ore-dake-level-up-na-ken-season-2-arise-from-the-shadow/`、`/anime/kuroiwa-medaka-ni-watashi-no-kawaii-ga-tsuujinai/`、`/seasons/2025-winter/`。第57批接續頂部21筆用途，本階段及長期目標均未完成。


### 第56批正式發布驗收（2026-10-20）

- [PR #148](https://github.com/kyeunga25/anisonary/pull/148)通過quality及Workers Builds後正常rebase合併；審閱head`616f904fe36cdc016f4edc3e7b27cd7d6ab0fc67`，main來源`6b62c0368501c61b46b359a9b404c4aeb07046b4`與審閱tree相同，main兩項gate亦成功。正常CI涵蓋重要E2E，未略過gate。
- 實際Wrangler部署固定4,194個已驗證產物，部署來源乾淨；Cloudflare版本metadata確認`batch56-basics`與完整main來源／PR #148一致，第57批未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256一致，2條未知路徑返回真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 10部23筆驗收通過。
- 正式站Chromium393×852展開10頁23組原名／演唱／資料狀態，無溢出、app errors及影片iframe；新IN與精確單曲入口可讀，LEveL季度待核保持。另在in-app Chromium665像素實際檢視きずなの唄的基本證據、詞曲編、來源、官方試聽及待補欄位畫面。
- annotated tag `batch56-basics`指向正式來源並已推送。第57批接續冬季21筆起始用途，基本階段、作品聯集及長期目標未完成。


## 2020-2026-tv-basics-57（已正式發布）

固定2020–2026標準TV、公開資料截止日2026-10-14保持。接續2025冬：`curated-178022`、`curated-172019`、`curated-175443`、`curated-178548`、`curated-179297`、`curated-180292`、`curated-162921`、`curated-172439`、`curated-172453`、`curated-175409`，起始21筆既有用途。先核本期TV與先行配信、歌曲原名／名義／OP・ED用途及逐曲狀態，已確認IN一併記錄；短篇、特殊編排與詳細集中深化延後。第56批審閱來源與產物固定，正常PR／main gate及正式發布待完成，本批資料不混入前批發布；第57批資料、公開JSON及本機展示已驗證，正常發布待完成；基本階段及長期目標未完成。


### 第57批公開用途與實際差異

10部既有動畫、21筆既有用途（原21 OP／ED修正為20 OP／ED、1 IN），新增動畫／歌曲／用途均0。21筆基本三欄第一方／交叉欄位證據已登記；另1筆已核對插曲只清理讀者用途文字，不重計批次用途或變動來源日期。所有原ID、序號、歌曲、影片及URL保持。

| 公開theme ID | 歌曲／演唱名義 | 本批處理 |
| --- | --- | --- |
| `hana-wa-saku-shura-no-gotoku-op-1` | 自分革命／SHISHAMO | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `hana-wa-saku-shura-no-gotoku-ed-1` | 朗朗／さとう。 | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `dr-stone-science-future-op-1` | CASANOVA POSSE／ALI | 基本歌曲與本期已核，沿用有效作品／首播來源日期 |
| `dr-stone-science-future-ed-1` | Rolling Stone／BREIMEN | 基本歌曲與本期已核，沿用有效作品／首播來源日期 |
| `honey-lemon-soda-op-1` | Magic Hour／&TEAM | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `honey-lemon-soda-ed-1` | Wonderful World／&TEAM | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `fuguushoku-kanteishi-ga-jitsu-wa-saikyou-datta-naraku-de-kitaeta-saikyou-no-shingan-de-musou-suru-op-1` | Crescendo／ASTERISM | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `fuguushoku-kanteishi-ga-jitsu-wa-saikyou-datta-naraku-de-kitaeta-saikyou-no-shingan-de-musou-suru-ed-1` | ロックは死なない／22/7 | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `magic-maker-isekai-mahou-no-tsukurikata-op-1` | 煌めき／XIIX | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `magic-maker-isekai-mahou-no-tsukurikata-ed-1` | 夜明けの歌／ハンブレッダーズ | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `arafou-otoko-no-isekai-tsuuhan-seikatsu-op-1` | GIVE & TAKE／亜咲花 | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `arafou-otoko-no-isekai-tsuuhan-seikatsu-ed-1` | あいくらふと／キミのね | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `sousei-no-aquarion-myth-of-emotions-op-1` | 創聖のアクエリオン Myth of Emotions Ver.／AKINO from bless4・福山芳樹 | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `sousei-no-aquarion-myth-of-emotions-ed-1` | 告白／AKINO from bless4 | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `nihon-e-youkoso-elf-san-op-1` | Palette Days／佐々木李子 | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `nihon-e-youkoso-elf-san-ed-1` | Yummy Yummy／樋口楓＆叶 | 核對本期TV時段與基本欄位，補逐曲待查狀態 |
| `akuyaku-reijou-tensei-oji-san-op-1` | Choose!!!／サイダーガール | 基本歌曲與本期已核，沿用有效作品／首播來源日期 |
| `akuyaku-reijou-tensei-oji-san-ed-1` | マツケンサンバⅡ／グレイス＝憲三郎（CV：井上和彦、M・A・O） | 基本歌曲與本期已核，沿用有效作品／首播來源日期 |
| `akuyaku-reijou-tensei-oji-san-ed-2` | 銀河鉄道999／グレイス＝憲三郎（CV：井上和彦、M・A・O） | ED更正為第9話IN，保留原ED型ID與序號 |
| `douse-koishite-shimaunda-op-1` | Make It Count／INI | 基本歌曲與本期已核，沿用有效作品／首播來源日期 |
| `douse-koishite-shimaunda-ed-1` | 願いごと／マルシィ | 基本歌曲與本期已核，沿用有效作品／首播來源日期 |

- 已處理anime ID：`curated-178022`、`curated-172019`、`curated-175443`、`curated-178548`、`curated-179297`、`curated-180292`、`curated-162921`、`curated-172439`、`curated-172453`、`curated-175409`。全目錄仍30季、2,052部、4,597用途（4,523 OP／ED、64 IN、10 TS），每筆均有dataStatus；519筆基本三欄有兩類欄位證據，其餘4,078筆保留來源待細分。29筆季度未明及わた婚已確認冬曲的兩筆春季最終話續查保持，未把一批完成當整季聯集閉合。
- 7部補具體TV時段：花修羅1月7日火曜初回25:35（暦1月8日）、常態25:29；ハニーレモン1月8日水曜24:55（暦1月9日）；不遇職1月9日23:30；マジック・メイカー1月8日水曜24:00（暦1月9日）；アラフォー最速AT-X1月9日21:00、地上波22:30及WEB22:00分別；想星1月9日木曜24:30（暦1月10日）；エルフ最速AT-X1月10日22:00、地上波25:53及WEB26:30分別。地方台遲播及重播不當新一期原TV用途。
- Dr.STONE明確只核第4期第1クール兩首，未套第2／3cour；戀しま只採第1期Make It Count／願いごと，未套現行同頁第2期歌曲。Dr.STONE、轉生大叔、戀しま3部沿用既有有效作品識別與首播日期／來源，不因可選時段未補而反覆搜尋或刷新所有核對日期。
- 轉生大叔〈銀河鉄道999〉：官方MUSIC的插曲分頁及第9話公告、Spotify實際曲目均明列IN，修正原ED用途，保留`akuyaku-reijou-tensei-oji-san-ed-2`及其歌曲ID／序號。公告普通瀏覽器實讀日期標示2025年3月7日；未套用搜尋索引的3月6日差異。官方MBS第9話動畫片段與精確Spotify曲目入口一併保存，未從Producer／Programmer／Orchestrator推定編曲。
- 同頁新增31筆詞／曲／編角色：22/7 ED四筆、XIIX OP五筆、想星OP／ED八筆、エルフOP三筆、轉生大叔OP／IN五筆、戀しまOP／ED六筆。未知編曲與其他角色留空；沒有從團體一般成員表、寫歌概稱、OST配樂名單或歌手經歷推定。
- 想星OP名義依官網補為AKINO from bless4・福山芳樹，分列兩名歌唱；エルフED樋口楓／叶、轉生大叔ED及IN兩名CV亦分列，角色／團體名義保留。不同CD、Instrumental、Live、角色版、2005原曲及2025 duet版不自動新增歌曲或TV用途，詳細音源關係留後續。
- 新增官方YouTube片段外連1、精確Spotify曲目1，影片metadata／錄音／發行品均0。原Crescendo商品有Instrumental與Live ver.，不能由一般インスト樂團簡介推定本曲的歌唱；想星single的私立江ノ島学園角色版亦未據商品曲目直接加IN。相關續查條件保存在各曲followUp，詳細階段重用已讀頁。
- 額外文案清理公開ID：`bang-dream-ave-mujica-ed-2`。用途仍第10話IN，移除用途行的內部ID／序號備註；與本批第9話IN相同，讀者頁只顯示實際用途，技術追蹤留此checkpoint。該部JSON除此一個usageLabel完全相同，來源日期、創作、影片、ID、所有連結保持；本批處理數及已核對數不重複累加。
- 21筆原ID、序號、影片、錄音、發行品及平台入口完整保留；只有エルフ2筆及戀しま2筆實讀首頁的4筆舊歌曲來源條目更新日期，其餘原來源日期保持。2,041部非本批動畫JSON SHA-256逐項相同，另1部僅上述文案差異，沒有legacy覆寫移轉，無程式、parser、contract、UI、測試、依賴或部署設定修改。

### 有效來源與未解缺口

- [花修羅MUSIC](https://hanashura-anime.com/music/)／[ONAIR](https://hanashura-anime.com/onair/)、[Dr.STONE第1cour OP](https://dr-stone.jp/music/4th/4-1c-op/)／[ED](https://dr-stone.jp/music/4th/4-1c-ed/)、[ハニーレモンMUSIC](https://honeylemon-anime.com/music/)／[ONAIR](https://honeylemon-anime.com/onair/)、[不遇職MUSIC](https://fugukan.com/music)／[明列OP・ED公告](https://fugukan.com/news/143)／[ONAIR](https://fugukan.com/onair)已實讀；既有有效交叉來源沿原日期，不重查全量舊頁。
- [マジック・メイカーMUSIC](https://magicmaker-anime.com/music/index.html)／[ONAIR](https://magicmaker-anime.com/onair/index.html)、[アラフォーMUSIC](https://arafo-tsuhan.com/music.html)／[ONAIR](https://arafo-tsuhan.com/onair.html)、[想星MUSIC](https://aq-moe.com/music/)及[TV／配信](https://aq-moe.com/)、[エルフMUSIC／ONAIR](https://welcome-elfsan.com/)同頁取得原名、名義、用途及明列創作。商品版別、預約及其他曲目只是後續線索，不自動當新歌曲。
- [轉生大叔MUSIC](https://tensei-ojisan.com/music/)的三個分頁已在普通瀏覽器實際檢視，包含圖片／向量文字，OP與IN詞曲、ED及IN歌唱名義有據；[官方第9話公告](https://tensei-ojisan.com/news/20250307_191/)正文及真實YouTube href亦已讀。[Spotify正版曲目](https://open.spotify.com/intl-ja/track/1V15MqTejCVed3zVovBdEw)在普通瀏覽器完整載入後核曲名、CV與TV插曲，沒有登入、播放、讀取完整歌詞或繞過存取限制。編曲仍缺明列第一方逐角色資料，後續重用本曲發行credit核對，未從Wiki鏡像補值。
- [戀しま官方](https://koishima-pr.com/)第1期MUSIC及Credit已實讀，OP四筆、ED兩筆創作按本期保存。3部原時段可選缺口沿有效首播來源，基本資料不被阻擋；已知兩輪未明的其他29筆季度缺口不重新輪流搜尋，依既存條件恢復。
- 每曲詞／曲／編、音源、影片、收錄及精確平台缺少項目均由dataStatus.pendingFields接續；已見版本／商品關係另存followUp.fields／resumeWhen。2025冬現有OP／ED仍51筆未逐批核對，夏15、春21筆延後種類維持，標準TV作品聯集仍未閉合，詳細集中深化延後。

### 本機檢查與展示

- 最終資料npm test 4檔8項、build 2,098 HTML／4,194公開產物通過；ApiProvider 10部21筆解析，原名／名義／用途／創作與authoring相同，既有資料保留及非本批JSON差異限於上述明確文案更正。
- Chromium393×852展開10頁21組詳情／狀態，無溢出、app errors及影片iframe；第9話IN的CV、詞曲、官方片段與精確Spotify入口可讀。in-app Chromium665像素核對冬季轉生大叔仍3筆，正確呈現OP／ED／IN；兩筆用途已移除內部ID備註，原ID及連結保持。
- 一個季度資料檔改動，無新季度或UI／contract／播放器變更，不逐首或重跑本機完整E2E；正常PR／main仍涵蓋重要E2E。Cloudflare dry-run exit0且完成marker、無bindings；公開邊界、文件連結、diff及敏感內容在提交前收尾。正式發布及live驗收待完成，本機通過不作production證明。

預覽入口：`/anime/akuyaku-reijou-tensei-oji-san/`、`/anime/sousei-no-aquarion-myth-of-emotions/`、`/anime/nihon-e-youkoso-elf-san/`、`/seasons/2025-winter/`。第58批接續頂部30筆用途，本階段及長期目標均未完成。


### 第57批正式發布驗收（2026-10-20）

- [PR #149](https://github.com/kyeunga25/anisonary/pull/149)通過quality及Workers Builds後正常rebase合併；審閱head`3107ff94324647003d7d77b59b24f2734c8645cc`，main來源`dfb44b067f4f487e5c7fcb348fa923d1a12c8e25`與審閱tree相同，main兩項gate亦成功。正常CI涵蓋重要E2E，未略過gate。
- 實際Wrangler部署固定4,194個已驗證產物，部署來源乾淨；Cloudflare版本metadata確認`batch57-basics`與完整main來源／PR #149一致，第58批未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256一致，2條未知路徑返回真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 10部21筆驗收通過。
- 正式站Chromium393×852展開10頁21組原名／演唱／資料狀態，無溢出、app errors及影片iframe；更正的第9話IN、官方片段、精確Spotify曲目與二人演唱名義可讀。另在in-app Chromium665像素實際檢視銀河鉄道999的基本證據、已明列詞曲、來源、官方動畫片段及待補欄位畫面。
- annotated tag `batch57-basics`指向正式來源並已推送。第58批接續冬季30筆起始用途，基本階段、作品聯集及長期目標未完成。


## 2020-2026-tv-basics-58（已正式發布）

- 範圍：2025冬10部既有標準TV，起始30筆用途；固定2020–2026基本階段與2026-10-14資料截止日不變。按本期TV、曲名／名義／OP／ED與已證實IN及逐曲狀態保存，詳細資料延後。
- 公開anime ID：`curated-176301`、`curated-178312`、`curated-167143`、`curated-167742`、`curated-175198`、`curated-175422`、`curated-177709`、`curated-182920`、`curated-162722`、`curated-170892`。
- 第57批正常PR／main gate、實際部署及正式站驗收已完成，來源與4,194產物固定；本批未混入前批發布，先核對來源，尚未修改歌曲資料或記作齊備。優先區分藥師第2期兩cour、UniteUp!各曲實際TV用途、SAKAMOTO DAYS第三筆用途；專輯或PV不自動新增歌曲。
- 起始30筆及同頁7筆新IN的資料、公開JSON與本機展示已驗證，正式發布待完成；本階段及長期目標未完成。


### 第58批公開用途與實際差異

10部既有動畫、30筆既有用途及7筆新IN，共37筆；36筆有第一方與交叉的基本欄位證據，Unite up!原ED6的用途與季度仍待第一方確認。新增動畫0、歌曲ID7，原ID、序號、影片與既有連結保持。

| 公開theme ID | 原名／演唱名義 | 確認季度及本批狀況 |
| --- | --- | --- |
| `kusuriya-no-hitorigoto-2nd-season-op-1` | 百花繚乱／幾田りら | 2025-winter；基本三欄證據已登記 |
| `kusuriya-no-hitorigoto-2nd-season-op-2` | クスシキ／Mrs. GREEN APPLE | 2025-spring；基本三欄證據已登記 |
| `kusuriya-no-hitorigoto-2nd-season-ed-1` | 幸せのレシピ／平井 大 | 2025-winter；基本三欄證據已登記 |
| `kusuriya-no-hitorigoto-2nd-season-ed-2` | ひとりごと／Omoinotake | 2025-spring；基本三欄證據已登記 |
| `farmagia-op-1` | ライフ イズ ビューティフル／ASIAN KUNG-FU GENERATION | 2025-winter；基本三欄證據已登記 |
| `farmagia-ed-1` | miss-dystopia／そこに鳴る | 2025-winter；基本三欄證據已登記 |
| `guild-no-uketsukejou-desu-ga-zangyou-wa-iya-nanode-boss-wo-solo-toubatsu-shiyou-to-omoimasu-op-1` | パーフェクトデイ／310 | 2025-winter；基本三欄證據已登記 |
| `guild-no-uketsukejou-desu-ga-zangyou-wa-iya-nanode-boss-wo-solo-toubatsu-shiyou-to-omoimasu-ed-1` | 明日の私に幸あれ／ナナヲアカリ | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-op-1` | Uni:Birth／UniteUp! | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-ed-1` | DOPE／LEGIT | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-ed-2` | ほんねのうた／PROTOSTAR | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-ed-3` | IN&OUT (JAXX/JAXX ver.)／JAXX/JAXX | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-ed-4` | Wish You Happiness／Anela | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-ed-5` | Keep it high／PROTOSTAR | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-ed-6` | Unite up!／UniteUp! | 季度待核；原ED分類與交叉IN清單衝突，第一方待核 |
| `uniteup-uni-birth-ed-7` | こんな世界なら／Five Bitter from UniteUp! | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-ed-8` | ハーモニーブライト／Sweet Six from UniteUp! | 2025-spring；基本三欄證據已登記 |
| `uniteup-uni-birth-in-1` | Star Parade／PROTOSTAR | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-in-2` | What I Say／LEGIT | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-in-3` | Sailing Story／JAXX/JAXX | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-in-4` | Astro Dreamers／PROTOSTAR | 2025-winter；基本三欄證據已登記 |
| `uniteup-uni-birth-in-5` | Galaxy Rose／PROTOSTAR | 2025-spring；基本三欄證據已登記 |
| `uniteup-uni-birth-in-6` | Feel Like A Child／LEGIT | 2025-spring；基本三欄證據已登記 |
| `uniteup-uni-birth-in-7` | RAYS／JAXX/JAXX | 2025-spring；基本三欄證據已登記 |
| `u-bel-blatt-op-1` | 罪人／GARNiDELiA | 2025-winter；基本三欄證據已登記 |
| `u-bel-blatt-ed-1` | Stella／立花日菜 | 2025-winter；基本三欄證據已登記 |
| `baban-baban-ban-vampire-op-1` | Bloody Liar／BLUE ENCOUNT | 2025-winter；基本三欄證據已登記 |
| `baban-baban-ban-vampire-ed-1` | NE-CHU-SHOW／ぼっちぼろまる | 2025-winter；基本三欄證據已登記 |
| `sakamoto-days-op-1` | 走れSAKAMOTO／Vaundy | 2025-winter；基本三欄證據已登記 |
| `sakamoto-days-ed-1` | 普通／Conton Candy | 2025-winter；基本三欄證據已登記 |
| `sakamoto-days-ed-2` | Somebody help us／Vaundy | 2025-winter；基本三欄證據已登記 |
| `cardfight-vanguard-divinez-deluxe-hen-op-1` | Meramera／Kis-My-Ft2 | 2025-winter；基本三欄證據已登記 |
| `cardfight-vanguard-divinez-deluxe-hen-ed-1` | 天色／青木陽菜 | 2025-winter；基本三欄證據已登記 |
| `mahoutsukai-precure-mirai-days-op-1` | Dokkin◇魔法つかいプリキュア！！Part３～MIRAI DAYS～／北川理恵 | 2025-winter；基本三欄證據已登記 |
| `mahoutsukai-precure-mirai-days-ed-1` | キセキラリンク／キュアミラクル（CV：高橋李依）、キュアマジカル（CV：堀江由衣）、キュアフェリーチェ（CV：早見沙織） | 2025-winter；基本三欄證據已登記 |
| `jibaku-shounen-hanako-kun-2-op-1` | L'oN／オーイシマサヨシ | 2025-winter；基本三欄證據已登記 |
| `jibaku-shounen-hanako-kun-2-ed-1` | With a Wish／鬼頭明里 | 2025-winter；基本三欄證據已登記 |

- 已處理anime ID：`curated-176301`、`curated-178312`、`curated-167143`、`curated-167742`、`curated-175198`、`curated-175422`、`curated-177709`、`curated-182920`、`curated-162722`、`curated-170892`。全目錄30季、2,052部、4,604用途（4,523 OP／ED、71 IN、10 TS），均有dataStatus；555筆基本三欄有兩類欄位證據，其餘4,049筆保留來源待細分。30筆季度待核與わた婚／本批Uni:Birth的部分跨季續查分開，沒有把待查內容當已齊備。
- 藥屋第2期原四曲完整保留，官方第2cour音樂頁與4月4日TV編排確認クスシキ、ひとりごと改掛2025春；第一cour百花繚乱、幸せのレシピ留冬。兩首後期曲新增8筆詞曲編；數位4月5日發行不當原TV首播。
- UniteUp!官方逐曲頁同時確認DOPE第2話、ほんねのうた第4話、IN&OUT第5話、Wish You Happiness第7話、Keep it high第8話、こんな世界なら第10話、ハーモニーブライト第11話ED。最後一曲依官方第11・12話4月5日24:00～25:00公告移春季，特番不當新歌曲。新增Star Parade第1話、What I Say第3話、Sailing Story第6話、Astro Dreamers第9話四筆冬季IN，以及Galaxy Rose、Feel Like A Child、RAYS第12話三筆春季IN；官方逐曲頁、Anisil與Star Parade的LisAni交叉支持，未因同名RAYS而合併其他作品不同演唱者。
- Unite up!原ED6：交叉逐話清單標第7／9話IN，兩輪定向查找仍無本期第一方逐曲確認；保留原ED型ID、序號及歌曲，seasonIds=[]，不再列入冬季已確認ED。pendingFields及followUp明記basic_evidence／use_quarters，取得官方逐話credit或明確用曲公告才恢復。沒有把第一期OP或同名商品直接套成本期ED。
- 本期OP Uni:Birth已由官方12月公告確認；交叉清單另有第11話OP及第12話IN、ゆめゆくの與PROTOSTAR版第8話線索，尚缺逐話第一方使用證據，留各曲／本批續查，不由全期OP概稱、商品收錄或一般單曲自行新增春季用途或版本。七首新IN的細節留集中深化，沒有從群組成員表自動列全員本曲歌唱。
- SAKAMOTO DAYS第7話Somebody help us由Vaundy官方2月15日公告確認是特別ED，保留原分類，明記話數；不採另一交叉清單IN分類。官方root現為2027第2期，原第1期音樂預設亦轉Part2，本批明確讀Part1的走れSAKAMOTO與普通；Vaundy一般全包創作經歷不當逐曲credit。
- 新增44筆明列詞曲編角色：藥屋後期8、FARMAGIA 5、Übel Blatt ED 4、ババンババンバンバンパイア7、Vanguardデラックス編7、MIRAI DAYS 6、花子くん前編7。FARMAGIA OP編曲未知、劇伴名單不套主題曲。MIRAI DAYS ED分列官方明列3名角色／CV，替代原合併演唱列；OP原名依官方全形Part３保留，舊ID及Romanized搜尋資料保持。新IN各保留已確認團體演唱名義，逐人資訊後補。
- 七部補TV編排：藥屋金曜23:00；FARMAGIA金曜22:30（ABEMA無料23:30另列）；ギルます1月10日金曜24:00（暦11日）；UniteUp!1月11日土曜23:30及跨季最終兩話；Übel Blatt1月10日金曜24:30（暦11日）、配信土曜01:30另列；ババン1月11日23:30、Netflix翌日表記不當TV初回；MIRAI DAYS1月11日土曜26:00（暦12日）、AT-X4月放送不當首播。後3部SAKAMOTO DAYS、Vanguard、花子くん既有有效動畫識別／首播及來源日期保留，可選時段未追不阻擋基本資料。
- 新增YouTube外連／影片metadata／錄音／發行品／精確平台均0，既有資料不刪；同頁已明列MIRAI DAYS OP TVサイズ、Stella TV size與Instrumental及商品，相關錄音及收錄留followUp。Stella頁的1月11日weekday文字有矛盾，未據此新填發行日期；MV不自動等於full。
- 30筆舊用途全部ID、序號、歌曲、影片、錄音、發行品、平台保留；實讀既有首頁來源更新僅ババン兩筆，其餘未重查來源日期不變。非本批2,042部動畫JSON逐項SHA-256相同。Winter資料檔及Spring既有索引補2部跨季作品，無新季度，無程式、parser、contract、UI、測試、依賴或部署設定改動。

### 有效來源與續查條件

- [藥屋第1cour MUSIC](https://kusuriyanohitorigoto.jp/season2/music/)／[第2cour MUSIC](https://kusuriyanohitorigoto.jp/season2/music/index_2nd.php)與[ONAIR](https://kusuriyanohitorigoto.jp/season2/onair/)、[FARMAGIA MUSIC](https://anime-farmagia.marv.jp/music/)／[ONAIR](https://anime-farmagia.marv.jp/onair/)、[ギルますMUSIC](https://girumasu.com/music/)／[ONAIR](https://girumasu.com/onair/)重用既有官方入口，同頁保存多項事實。未明列個別創作不從藝人評論推定。
- [UniteUp!本期OP公告](https://uniteup.info/music/news/?article_id=66835)、[官方逐曲入口](https://uniteup.info/music/)、[最終兩話TV編排](https://uniteup.info/anime/2nd/news/?article_id=66993)已核；每首保存自身精確逐曲頁。新增IN用[Anisil逐話清單](https://www.anisil.com/animes/6203-UniteUp%21%20-Uni%3ABirth-)與[LisAni第1／3話曲目報導](https://www.lisani.jp/0000275193/)交叉。中文作品頁只有第一期曲單，不用來冒證第二期；兩輪缺口按上列觸發條件續查。
- [Übel Blatt OP](https://ubel-blatt-anime.com/product/music/op/)／[ED](https://ubel-blatt-anime.com/product/music/ed/)、[ババン官方MUSIC／TV](https://bababa-anime.com/)、[SAKAMOTO DAYS第1期Part1 MUSIC](https://sakamotodays.jp/1st/music/season1-part1/)及[Vaundy第7話ED公告](https://member.vaundy.jp/news/detail/10795)分清本期與後期。商品其他曲目、泛稱全包創作及配信日不擴成未證實TV用途。
- [Vanguardデラックス編MUSIC](https://anime.cf-vanguard.com/vgd/music/deluxe/)、[MIRAI DAYS MUSIC](https://www.toei-anim.co.jp/tv/mahotsukai_precure2/music/)及[最初TV banner](https://www.toei-anim.co.jp/tv/mahotsukai_precure2/)、[花子くん第二期MUSIC](https://hanakokun.com/2nd/music/)已在普通瀏覽器實讀；一般取回未返回本文不視為無資料。花子後編かごめかごめ／mo∞ent不套冬季；未登入、播放、讀取完整歌詞或繞過存取限制。
- 每曲未記錄的詞／曲／編、音源、影片、發行品、精確平台及可用性由dataStatus.pendingFields接續，已見版本與部分跨季缺口另存followUp.fields／resumeWhen。新增已證實IN不代表所有插曲已齊備；冬季現有21筆未逐批核對，其中7筆短篇延後不阻擋TV進度；另須續播作品聯集盤點，不能把現有130 OP／ED作整季閉合分母。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物通過；ApiProvider 10部37筆解析、基本36／待核1與authoring相同；非本批JSON及原媒體／來源日期保留檢查通過。所有4,604筆均有欄位狀態。
- Chromium393×852展開10頁37組原名／名義／狀態，無橫向溢出、app errors或影片iframe。UniteUp!16筆可按歌名篩1筆或IN篩7筆；用途待核可讀。季度搜尋：UniteUp!冬11／春4、藥屋冬2／春2，均與確認用途一致。in-app Chromium665像素實讀Galaxy Rose第12話春季及來源／狀態，歌名篩選顯示1／16筆。
- Browser plugin未提供，沿用專案Playwright核明確手機尺寸；in-app實際桌面寬度另驗。無新季度、UI／contract／播放器修改，不逐首或重跑本機完整E2E；正常PR／main仍含重要E2E。Cloudflare dry-run exit0、完成marker及無bindings；公開邊界、文件連結、敏感內容及diff於提交前收尾。正式發布與live驗收待完成，本機通過不作production證明。

預覽入口：`/anime/uniteup-uni-birth/`、`/anime/kusuriya-no-hitorigoto-2nd-season/`、`/seasons/2025-winter/`、`/seasons/2025-spring/`。第59批接續頂部32筆用途及續播核對，本階段及長期目標均未完成。


### 第58批正式發布驗收（2026-10-20）

- [PR #150](https://github.com/kyeunga25/anisonary/pull/150)通過quality與Workers Builds後正常rebase合併；審閱head`6d3484398567f34ab7b75665f79028dbe4ad92ce`，main來源`8cb274d798154e6206a9172fada77c5e14f9d849`與審閱tree相同，main兩項gate亦成功，含正常重要E2E，未略過gate。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch58-basics`與完整main來源／PR #150一致，第59批未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑是真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 10部37筆通過。
- 正式站Chromium393×852展開10頁37組名義／狀態，無溢出、app errors或影片iframe；UniteUp!16筆歌名／IN篩選、待核用途及冬11／春4，藥屋冬2／春2均通過。另在in-app Chromium665像素實際檢視Galaxy Rose第12話春季插曲、第一方／交叉基本證據、待補欄位與來源，歌名篩選顯示1／16筆。
- annotated tag `batch58-basics`指向正式來源並已推送。第59批接續冬季及相鄰季度10部32筆起始用途，標準TV作品聯集、基本階段與長期目標未完成。


## 2020-2026-tv-basics-59（已正式發布）

- 範圍：2025冬剩餘5部既有標準TV及5部相鄰季度TV的續播／輪替盤點，起始32筆既有用途（冬季作品14筆、秋季作品18筆）；固定2020–2026基本階段及2026-10-14截止日不變。先核基本原名、名義、TV用途與季度，詳細集中深化延後。
- 公開anime ID：`curated-172258`、`curated-173333`、`curated-180052`、`curated-180812`、`curated-181886`、`curated-170083`、`curated-176508`、`curated-171637`、`curated-169315`、`curated-170942`。後5部按實際官方續播與輪替證據決定季度，不因原首播年直接排除或把全曲套所有季度。
- 第58批正常PR／main gate、實際部署及正式站驗收已完成，來源與4,194產物固定；本批未混入前批發布，先核對來源，尚未修改歌曲資料或記作齊備。7筆冬季短篇延後，仍需標準TV作品聯集及已知續播盤點，不能把現有分母作整季已齊備。
- 起始32筆及同頁2筆新IN已完成資料、公開JSON、本機與正式站展示驗證，正常發布已完成；先前成果、短篇延後及未解條件保留。


### 第59批公開用途與實際差異

10部既有動畫、32筆既有用途及2筆新IN，共34筆，基本三欄的第一方／交叉欄位證據均已登記。新增動畫0、歌曲ID2；原32筆用途ID、序號、歌曲、影片及連結保持。

| 公開theme ID | 原名／演唱名義 | 已確認季度 |
| --- | --- | --- |
| `kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-2nd-season-op-1` | ありがと、大好きになってくれて／恋太郎ファミリー | 2025-winter |
| `kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-2nd-season-ed-1` | Unmei? -胡桃・育・美々美・愛々ver.-／原賀胡桃(CV.進藤あまね)、須藤育(CV.高橋李依)、美杉美々美(CV.Lynn)、華暮愛々(CV.高尾奏音) | 2025-winter |
| `kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-2nd-season-ed-2` | Unmei?／原賀胡桃(CV.進藤あまね)、銘戸芽衣(CV.三森すずこ)、須藤育(CV.高橋李依)、美杉美々美(CV.Lynn)、華暮愛々(CV.高尾奏音) | 2025-winter |
| `mashin-souzouden-wataru-op-1` | POP UP!／lol -エルオーエル- | 2025-winter |
| `mashin-souzouden-wataru-op-2` | 創／SANTA | 2025-spring |
| `mashin-souzouden-wataru-ed-1` | ポケット／FANTASTICS | 2025-winter、2025-spring |
| `sentai-red-isekai-de-boukensha-ni-naru-op-1` | Cuz I／牧島輝 | 2025-winter |
| `sentai-red-isekai-de-boukensha-ni-naru-ed-1` | Explosive Heart／内田彩 | 2025-winter |
| `sentai-red-isekai-de-boukensha-ni-naru-in-1` | さぁいこう！キズナファイブ／隆成 | 2025-winter |
| `sentai-red-isekai-de-boukensha-ni-naru-in-2` | マキシマム・キズナカイザー爆現!!／串田アキラ | 2025-winter |
| `a-rank-party-wo-ridatsu-shita-ore-wa-moto-oshiegotachi-to-meikyuu-shinbu-wo-mezasu-op-1` | Enter／零 | 2025-winter、2025-spring |
| `a-rank-party-wo-ridatsu-shita-ore-wa-moto-oshiegotachi-to-meikyuu-shinbu-wo-mezasu-ed-1` | Treasure Chest／田中有紀 | 2025-winter |
| `a-rank-party-wo-ridatsu-shita-ore-wa-moto-oshiegotachi-to-meikyuu-shinbu-wo-mezasu-ed-2` | MIRROR／田中有紀 | 2025-winter、2025-spring |
| `a-rank-party-wo-ridatsu-shita-ore-wa-moto-oshiegotachi-to-meikyuu-shinbu-wo-mezasu-ed-3` | Tapestry／田中有紀 | 2025-spring |
| `kinnikuman-kanpeki-choujin-shiso-hen-season-2-op-1` | キン肉マン英雄／遠藤正明 | 2025-winter |
| `kinnikuman-kanpeki-choujin-shiso-hen-season-2-ed-1` | 29／キン肉マン（CV：宮野真守） | 2025-winter |
| `dragon-ball-daima-op-1` | ジャカ☆ジャ〜ン／Zedd、C&K | 2024-fall、2025-winter |
| `dragon-ball-daima-ed-1` | NAKAMA／Zedd、AI | 2024-fall、2025-winter |
| `shangri-la-frontier-2nd-season-op-1` | QUEEN／LiSA | 2024-fall |
| `shangri-la-frontier-2nd-season-op-2` | Frontiers／Awich | 2025-winter |
| `shangri-la-frontier-2nd-season-ed-1` | 闇夜のダンサー -Dancer in the Dark Night／音羽-otoha- | 2024-fall |
| `shangri-la-frontier-2nd-season-ed-2` | realitYhurts.／CVLTE | 2025-winter |
| `rurouni-kenshin-meiji-kenkaku-romantan-kyoto-douran-op-1` | いらないもの／キタニタツヤ×なとり | 2024-fall |
| `rurouni-kenshin-meiji-kenkaku-romantan-kyoto-douran-op-2` | BURN／yama✕WurtS | 2025-winter |
| `rurouni-kenshin-meiji-kenkaku-romantan-kyoto-douran-ed-1` | 水光接天／NOMELON NOLEMON | 2024-fall |
| `rurouni-kenshin-meiji-kenkaku-romantan-kyoto-douran-ed-2` | ただひとつ／ざらめ | 2025-winter |
| `trillion-game-op-1` | Beat the odds／&TEAM | 2024-fall |
| `trillion-game-op-2` | over the top／宮本浩次 | 2025-winter |
| `trillion-game-ed-1` | アンビリーバブル／Klang Ruler | 2024-fall |
| `trillion-game-ed-2` | EGOIST／imase | 2025-winter |
| `ao-no-hako-op-1` | Same Blue／Official髭男dism | 2024-fall |
| `ao-no-hako-op-2` | 然らば／マカロニえんぴつ | 2025-winter |
| `ao-no-hako-ed-1` | ティーンエイジブルー／Eve | 2024-fall |
| `ao-no-hako-ed-2` | コントラスト／TOMOO | 2025-winter |

- 已處理anime ID：`curated-172258`、`curated-173333`、`curated-180052`、`curated-180812`、`curated-181886`、`curated-170083`、`curated-176508`、`curated-171637`、`curated-169315`、`curated-170942`。全目錄30季、2,052部、4,606用途（4,523 OP／ED、73 IN、10 TS），均有dataStatus；589筆基本三欄具兩類欄位證據，其餘4,017筆保留來源待細分。30筆既有季度待核及已記錄的部分跨季續查保持，本批未把未確認用途移入季度。
- 五套跨年TV補冬季：DAIMA兩曲同時保留2024秋／2025冬；シャンフロ2、京都動乱、トリリオン、アオのハコ的第一cour兩曲留2024秋，第二cour兩曲改2025冬，既有完整動畫頁仍顯示全部歌曲。冬季索引補5部，原秋季誤掛的後期8筆移出秋；沒有新增動畫或改URL。
- ワタル官方新章公告明列4月6日第13話，後期創/SANTA移春；テレ東4月20日第15話的音樂欄同列創及ポケット，ED保存冬／春，前期POP UP!只留冬。原TV為1月12日日曜17:30，WEB18:00及和歌山4月遲播分開，未由單曲4月6日配信推季度。
- エパリダ按原TV三部，Enter留冬／春、Treasure Chest冬、MIRROR冬／春、Tapestry春。第一方3月2日ED公告明列MIRROR為第2部，直接實讀Moview同列3月22日第10話開幕與MIRROR，配合春季曲目清單；第2部不是自動等於下一季。第三部5月14日公告與Lantis逐部曲序、春季用曲清單保存Tapestry，不從5月18日數位發行推TV日期。舊SunriseWorld offset索引已移動，沒有把搜尋快取當本次已讀第一方正文，未在公開來源加入該失效接點。日本テレビ1月11日土曜24:55（暦12日）原TV與WEB25:30、BS遲播及AT-X4月播出分開。
- 百名女友原兩筆Unmei?名義重複：依官方第2期single四人／五人曲序及中文第2季逐話清單，把原ED1修為Unmei? -胡桃・育・美々美・愛々ver.-及四人名義，ED2留含芽衣的五人版，分列4／5名角色／CV；原ID、序號及影片保持，沒有刪除或合併。四人／五人音源與兩個既有歌曲ID的作品關係留詳細階段，未由creditless或商品長度推full／TV。第19話medley等角色歌曲只有交叉／商品線索時保留續查，不把整張角色album轉成TV歌曲。
- 戦隊レッド新增兩首官方明列IN：さぁいこう！キズナファイブ/隆成、マキシマム・キズナカイザー爆現!!/串田アキラ，官方MUSIC與繁中插曲清單交叉並保存6筆詞曲編。片中虛構戰隊／機器人的主題曲屬本作IN，未誤當本作OP。AT-X1月12日23:30最速，TOKYO MX24:30與WEB24:00分開。
- 原名更正另3筆：DAIMA OPジャカ☆ジャ〜ン、シャンフロED闇夜のダンサー -Dancer in the Dark Night、トリリオンEDアンビリーバブル；舊拉丁查找保存在titleRomaji。演唱名義共9筆依官方修正，含音羽-otoha-、キタニタツヤ×なとり、yama✕WurtS、ざらめ、宮本浩次、Official髭男dism、マカロニえんぴつ及キン肉マン（CV：宮野真守），另含四人ED；不生成中文譯名。
- 新增102筆明列詞曲編角色：百名女友27、ワタル9、戦隊レッド含IN13、エパリダ10、キン肉マン6、DAIMA6、シャンフロ13、京都動乱18。角色條目不等於人數；部分有多名作曲／編曲，沒有把一般producer、OST配樂或「寫歌」概稱拆成未明列角色。角色／CV、兩組明確合作演唱、みきまりあ及AI本曲歌唱依來源分列；一般群組成員不自動套本曲歌唱。
- DAIMA仍保存Zedd、C&K／Zedd、AI的作品演唱名義，9月10日第一方公告明列AI歌唱與Zedd製作，個別vocal不把Zedd當演唱。官方Music未明列arrangement，留待補；YourAnimes與ABEMA第20話報導確認2025冬最終話，未把2月8PV發表日當TV播出。
- 已讀官方頁可支持single、TVサイズ、Instrumental等後續資料，均留各曲followUp及原來源；新增錄音／發行品／影片metadata／精確平台／YouTube外連皆0。radio主題歌、一般角色商品與OST純配樂不新增為TV IN，未重查既有30筆季度待核缺口或全部歷史影片。
- 32筆原媒體／連結／錄音及歌曲ID完整保留，2,042部非本批JSON逐項SHA-256相同。只有實讀ワタル後期公告1筆及トリリオン後期首頁2筆舊歌曲來源更新日期，其他未重查來源日期保持。2部沿原有效作品／首播日期，3部補TV時段，5部另以新cour／續播來源保存跨季核對，不刷新舊識別／圖像日期。沒有legacy覆寫移轉。
- 另在SOURCE_TERMS補Anisil的少量人工逐話交叉邊界與出典頁，保留第一方必要性；不鏡像目錄、複製文案／媒體、取個資或呼叫未公開endpoint。其資訊不當官方來源或整站資料重用授權。

### 有效來源與續查條件

- [百名女友第2期MUSIC](https://hyakkano.com/music/)同頁曲序／創作及[繁中作品第2季](https://zh.wikipedia.org/wiki/%E8%B6%85%E8%B6%85%E8%B6%85%E8%B6%85%E8%B6%85%E5%96%9C%E6%AD%A1%E4%BD%A0%E7%9A%84100%E5%80%8B%E5%A5%B3%E6%9C%8B%E5%8F%8B)區分四人／五人；現行第三期歌與成員不套第二期。[ワタルstaffcast](https://www.wataru-anime.net/staffcast/)、[第13話新章公告](https://www.wataru-anime.net/news/detail.html?id=22249)、[テレ東第15話](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202504/28400_202504201730.html)支持真正輪替；先前已有的精確公告連結繼續保存。
- [戦隊レッドMUSIC](https://isekai-red-anime.com/music.html)／[ONAIR](https://isekai-red-anime.com/onair.html)及[繁中插曲清單](https://zh.wikipedia.org/wiki/%E7%B4%85%E6%88%B0%E5%A3%AB%E5%9C%A8%E7%95%B0%E4%B8%96%E7%95%8C%E6%88%90%E4%BA%86%E5%86%92%E9%9A%AA%E8%80%85)同頁取得兩首基本歌及兩首IN；未因OST另一標點建立第二首同曲。[エパリダOP商品](https://www.arank-party-ridatsu-official.com/products/241026/)、[Lantis三ED商品](https://tanakayuki.lantis.jp/discography/treasurechest_normal/)、[第2部ED公告](https://arank-party-ridatsu-official.com/information/ed2/)／[第3部ED公告](https://www.arank-party-ridatsu-official.com/information/detail/?id=24293)、[Moview第10話](https://www.moview.jp/959085961.html)及[春季曲單](https://anime-song-info.com/arank-party-ridatsu-op-ed-25wn/)分別支援用途、原TV及歌曲，不把發行日當原TV日期。
- [キン肉マンSeason2 MUSIC](https://kin29man-anime.com/music/oped_season2/)、[DAIMA MUSIC](https://dragonballdaima.com/music.html)／[AI歌唱與製作公告](https://dragonballdaima.com/news/news_details2.html)／[YourAnimes最終話](https://youranimes.tw/animes/4814)與[ABEMA末話報導](https://times.abema.tv/articles/-/10166696)分清人物、歌唱及producer，不從DJ一般簡介推編曲。
- [シャンフロ1st2nd存檔MUSIC](https://anime.shangrilafrontier.com/1st2nd/music/)同頁有兩期八首主題曲及明列創作，本批只修改第二期；其他已讀事實後續重用。[CDJournal](https://www.cdjournal.com/news/awich/115564)直接記2025年1月5日第2cour TV開始。京都動乱[前期OP](https://rurouni-kenshin.com/music/?page=op&series=1st)、[前期ED](https://rurouni-kenshin.com/music/?page=ed)、[後期OP](https://rurouni-kenshin.com/music/)／[後期ED](https://rurouni-kenshin.com/music/?page=ed_2nd)及[Sony原TV公告](https://www.sonymusic.co.jp/artist/yama/info/569933)均已實讀，不能拿2023第一期或預設分頁的歌曲覆本期。
- [トリリオン第一cour](https://trilliongame-anime.com/music/index_1st.html)／[第二cour](https://trilliongame-anime.com/music/)及[官網1月9日TV開始](https://trilliongame-anime.com/)、[アオのハコ第一cour OP](https://aonohako-anime.com/music/opening.html)／[ED](https://aonohako-anime.com/music/ending.html)、[第二cour OP](https://aonohako-anime.com/music/opening_2.html)／[ED](https://aonohako-anime.com/music/ending_2.html)及[MANTAN原TV第2cour報導](https://mantan-web.jp/article/20250102dog00m200010000c.html)保存原期別；現行root的Season2新歌未套Season1。未明列逐曲LCA不從藝人創作經歷推定。
- 每曲dataStatus.pendingFields與followUp.fields／resumeWhen保留詳細缺口及續查條件。基本已核不代表所有影片、版本、收錄或IN已完整；百名女友第19話等有交叉／商品線索但無明確第一方TV用曲關係時，取得正式逐話credit或歌曲公告才新增。冬季現有只剩7筆延後短篇未逐批核對，仍有相鄰季度與長篇續播尚未入冬季索引，作品聯集未閉合，不將138 OP／ED作全季分母。

### 本機檢查與展示

- 最終npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部34筆、authoring／JSON身分名義／創作一致性與原媒體保留通過。首輪測試發現3筆動畫播出來源誤用歌曲cross_check分類，改為既有broadcast_cross_check後重跑必要test及build通過；未改正常程式、parser或gate。
- Chromium393×852展開10頁34組資料狀態，無溢出、app errors或影片iframe；四人／五人ED名義不同，舊Jaka☆Jaan搜尋仍找到新正規原名。11組季度搜尋通過：ワタル冬2／春2、エパリダ冬3／春3、5套續播各冬2、シャンフロ與京都動乱各秋2。in-app Chromium665像素實際檢視新IN的冬季、基本證據、三項詞曲編及詳細待補欄位。
- 3個季度資料檔及來源／checkpoint文件有變，無新季度、UI／contract／播放器／依賴／部署設定修改，不逐首或重跑本機完整E2E，正常PR／main仍含重要E2E。Cloudflare dry-run exit0、完成marker及無bindings；公開邊界、文件連結、敏感內容與diff在提交前收尾。正式發布及live驗收待完成，本機通過不當production證明。

預覽入口：`/anime/sentai-red-isekai-de-boukensha-ni-naru/`、`/anime/mashin-souzouden-wataru/`、`/anime/dragon-ball-daima/`、`/seasons/2025-winter/`、`/seasons/2025-spring/`、`/seasons/2024-fall/`。第60批接續頂部41筆，基本階段及長期目標均未完成。


### 第59批正式發布驗收（2026-10-20）

- [PR #151](https://github.com/kyeunga25/anisonary/pull/151)通過quality與Workers Builds後正常rebase合併；審閱head`3975f59a2cb02dd5bfd3acffd46607650de3d828`，main來源`bafff812802a4aa33f48c3627b0e33202c266481`與審閱tree相同，main兩項gate亦成功，含正常重要E2E，未略過gate。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch59-basics`與完整main來源／PR #151一致，第60批未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑是真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 10部34筆通過。
- 正式站Chromium393×852展開10頁34組名義／狀態，無溢出、app errors或影片iframe；四人／五人ED、舊拉丁曲名搜尋、新增2首插曲及11組實際冬／春／秋季度歌單核對通過。另在in-app Chromium665像素實際檢視新增マキシマム・キズナカイザー爆現!!的串田アキラ名義、詞曲編、冬季用途及第一方／交叉基本證據；4筆用途均有狀態、1筆詳情展開，無自動影片連線。
- annotated tag `batch59-basics`指向正式來源並已推送。第60批接續冬季及相鄰季度10部41筆起始用途，標準TV作品聯集、基本階段與長期目標未完成。


## 2020-2026-tv-basics-60（已正式發布）

- 範圍：標準TV的2025冬續播與相關季度，10部既有動畫、起始41筆用途；固定2020–2026基本階段與2026-10-14截止日維持。按本期及原TV輪替核定季度，不以作品最早首播年排除長篇，也不把所有歷史歌曲套冬季。
- 公開anime ID：`curated-164172`、`curated-173263`、`curated-163134`、`curated-169258`、`curated-171545`、`curated-154473`、`curated-171030`、`curated-171080`、`curated-172395`、`curated-159560`。沿有效精確來源補原名、名義、用途及逐曲狀態，明列IN一併記錄，詳細集中深化延後。
- 第59批正常PR／main gate、實際部署及正式站驗收已完成，來源與4,194產物固定；本批未混入前批發布，先核來源，尚未修改歌曲或宣稱齊備。冬季短篇7筆延後；作品聯集及長篇跨季仍未閉合，不用現有138 OP／ED當完整分母。
- 41筆既有及9筆新增用途已完成資料、公開JSON、本機與正式站展示驗證；47筆基本欄位證據齊備，3筆第一方用途及季度待核，正常發布已完成。先前成果及有條件續查保留。


### 第60批公開用途與實際差異

10部既有標準TV、41筆既有用途及9筆新增用途，共50筆；新增3 IN、1 OP及5 ED，9個新歌曲ID。原41個用途ID、序號、歌曲與媒體保留，兩筆依官方改列IN；47筆三項基本欄位具第一方／交叉證據，3筆用途第一方與季度待核。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `amagami-san-chi-no-enmusubi-op-1` | やわく恋して～ずっと僕らでいられますように～／ももいろクローバーZ | OP1 | 2024-fall |
| `amagami-san-chi-no-enmusubi-op-2` | Pray Pray Pray／甘神三姉妹 | OP2 | 2025-winter |
| `amagami-san-chi-no-enmusubi-ed-1` | 君に恋を結んで／甘神三姉妹 | ED1 | 2024-fall |
| `amagami-san-chi-no-enmusubi-ed-2` | 神様の言うとーり！／≠ME | ED2 | 2025-winter |
| `touhai-ura-rate-mahjong-touhai-roku-op-1` | ギャンブリングホール／オーイシマサヨシ | OP1 | 2024-fall、2025-winter |
| `touhai-ura-rate-mahjong-touhai-roku-ed-1` | プラスティック・ショーケース／太陽と踊れ月夜に唄え | ED1 | 2024-fall |
| `touhai-ura-rate-mahjong-touhai-roku-ed-2` | Tumbling Dice／えなこ × 草野華余子 | ED2 | 2025-winter |
| `re-zero-kara-hajimeru-isekai-seikatsu-3rd-season-op-1` | Reweave／鈴木このみ | OP1 | 2024-fall、2025-winter |
| `re-zero-kara-hajimeru-isekai-seikatsu-3rd-season-ed-1` | Reweave／鈴木このみ | ED1 | 待核 |
| `re-zero-kara-hajimeru-isekai-seikatsu-3rd-season-ed-2` | NOX LUX／MYTH & ROID | ED2 | 2024-fall、2025-winter |
| `re-zero-kara-hajimeru-isekai-seikatsu-3rd-season-in-1` | 剣鬼恋歌　第二幕／リリアナ（CV.山根綺） | IN1 | 2024-fall |
| `re-zero-kara-hajimeru-isekai-seikatsu-3rd-season-in-2` | 水面に揺れるプリステラ／リリアナ（CV.山根綺） | IN2 | 2024-fall |
| `re-zero-kara-hajimeru-isekai-seikatsu-3rd-season-ed-3` | I Trust You／エミリア（CV.高橋李依） | IN3 | 2024-fall |
| `re-zero-kara-hajimeru-isekai-seikatsu-3rd-season-ed-4` | プリステラの君よ／リリアナ・マスカレード（CV.山根綺） | IN4 | 2025-winter |
| `re-zero-kara-hajimeru-isekai-seikatsu-3rd-season-in-5` | 朝焼けを追い越す空／リリアナ・マスカレード（CV.山根綺） | IN5 | 2025-winter |
| `ao-no-miburo-op-1` | 青／SPYAIR | OP1 | 2024-fall |
| `ao-no-miburo-op-2` | OOKAMI／梅田サイファー | OP2 | 2025-winter |
| `ao-no-miburo-ed-1` | UNBREAKABLE／THE JET BOY BANGERZ from EXILE TRIBE | ED1 | 2024-fall |
| `ao-no-miburo-ed-2` | フラグメント／osage | ED2 | 2025-winter |
| `youkai-gakkou-no-sensei-hajimemashita-op-1` | えびぞりターン！／フォーエイト48 | OP1 | 2024-fall |
| `youkai-gakkou-no-sensei-hajimemashita-op-2` | 化けそうなココロ／Sou | OP2 | 2025-winter |
| `youkai-gakkou-no-sensei-hajimemashita-ed-1` | 僕らしさ／『ユイカ』 | ED1 | 2024-fall |
| `youkai-gakkou-no-sensei-hajimemashita-ed-2` | 妖怪ランデブー／REAL AKIBA BOYZ | ED2 | 2025-winter |
| `arifureta-shokugyou-de-sekai-saikyou-3rd-season-op-1` | Unending Wish／Void_Chords feat. MindaRyn | OP1 | 2024-fall |
| `arifureta-shokugyou-de-sekai-saikyou-3rd-season-op-2` | Compass／Void_Chords feat. MindaRyn | OP2 | 2024-fall、2025-winter |
| `arifureta-shokugyou-de-sekai-saikyou-3rd-season-ed-1` | The other story／DOBERMAN INFINITY | ED1 | 2024-fall |
| `arifureta-shokugyou-de-sekai-saikyou-3rd-season-ed-2` | Metamorphosis／iScream | ED2 | 2024-fall、2025-winter |
| `wonderful-precure-op-1` | わんだふるぷりきゅあ！evolution!!／吉武千颯 | OP1 | 2024-winter、2024-spring、2024-summer、2024-fall、2025-winter |
| `wonderful-precure-ed-1` | FUN☆FUN☆わんだふるDAYS！／石井あみ＆後本萌葉 | ED1 | 2024-winter、2024-spring |
| `wonderful-precure-ed-2` | しあわせえぼりゅ～しょん♡ ～こむぎ＆いろはVer.～／石井あみ＆後本萌葉 | ED2 | 2024-summer、2024-fall、2025-winter |
| `wonderful-precure-ed-3` | しあわせえぼりゅ～しょん♡ ～ユキ＆まゆVer.～／石井あみ＆後本萌葉 | ED3 | 2024-summer、2024-fall、2025-winter |
| `wonderful-precure-ed-4` | Happy≒Future／Chihaya Yoshitake、Moeha Nochimoto | ED4 | 待核 |
| `wonderful-precure-ed-5` | Wonderful Smile／石井あみ | ED5 | 待核 |
| `himitsu-no-aipri-op-1` | ぜんりょくじょしかくめい！／P丸様。 | OP1 | 2024-spring、2024-summer、2024-fall |
| `himitsu-no-aipri-op-2` | いっちょくせんだいさくせん！／P丸様。 | OP2 | 2024-fall、2025-winter |
| `himitsu-no-aipri-ed-1` | ひみつだけどね／青空ひまり（CV.藤寺美徳）、星川みつき（CV.平塚紗依） | ED1 | 2024-spring、2024-summer、2024-fall |
| `himitsu-no-aipri-ed-2` | アイプリバースイン！／青空ひまり（CV.藤寺美徳）、星川みつき（CV.平塚紗依） | ED2 | 2024-fall、2025-winter |
| `shinkalion-change-the-world-op-1` | 閃光ハヤブサ／GRe4N BOYZ | OP1 | 2024-spring、2024-summer、2024-fall |
| `shinkalion-change-the-world-ed-1` | HOPE!HOPE!HOPE!／meiyo | ED1 | 2024-spring |
| `shinkalion-change-the-world-ed-2` | KO.DA.MA.／THE ALFEE | ED2 | 2024-summer、2024-fall |
| `shinkalion-change-the-world-ed-3` | Seagull／山本彩 | ED3 | 2024-fall |
| `tousouchuu-great-mission-op-1` | Runaway World／fhána | OP1 | 2023-spring、2023-summer、2023-fall、2024-winter、2024-spring、2024-summer、2024-fall、2025-winter |
| `tousouchuu-great-mission-ed-1` | Fly Away／AB6IX | ED1 | 2023-spring |
| `tousouchuu-great-mission-ed-2` | TOP SPEED／Wienners | ED2 | 2023-summer |
| `tousouchuu-great-mission-ed-3` | 克己心／Mr.ふぉるて | ED3 | 2023-fall |
| `tousouchuu-great-mission-ed-4` | Baddest Behavior／TEMPEST | ED4 | 2024-winter |
| `tousouchuu-great-mission-ed-5` | ビリミ／ICEx | ED5 | 2024-spring |
| `tousouchuu-great-mission-ed-6` | 大変でエスケープ（^o^）／／AXXX1S | ED6 | 2024-summer |
| `tousouchuu-great-mission-ed-7` | アドレナリンゲーム／高嶺のなでしこ | ED7 | 2024-fall |
| `tousouchuu-great-mission-ed-8` | 自分キログラム／ALL IN | ED8 | 2025-winter |

- 已處理anime ID：`curated-164172`、`curated-173263`、`curated-163134`、`curated-169258`、`curated-171545`、`curated-154473`、`curated-171030`、`curated-171080`、`curated-172395`、`curated-159560`。全目錄30季、2,052部、4,615用途（4,527 OP／ED、78 IN、10 TS），均有dataStatus；636筆三項基本欄位有兩類欄位證據，其餘3,979筆保留來源待細分。已逐批處理1,336個唯一用途，跨季不能直接相加。
- 2025冬新增9部既有TV的續播關聯；本批19筆OP／ED與2筆IN納入冬季，動畫頁仍顯示全曲。シンカリオン暫只保存已證實2024季度，2025冬兩曲留部分季度缺口，不把長篇所有歌曲套到冬季。
- 新增用途9筆：Re:ゼロ3的剣鬼恋歌　第二幕（第51話）、水面に揺れるプリステラ（第56話）、朝焼けを追い越す空（第61話）三首官方明列IN；アイプリ後期OPいっちょくせんだいさくせん！與EDアイプリバースイン！；逃走中四首2024春／夏／秋及2025冬EDビリミ、大変でエスケープ（^o^）／、アドレナリンゲーム、自分キログラム。一般角色album、遊戲曲及純配樂不任意增為TV歌曲。
- Re:ゼロ I Trust You及プリステラの君よ按官方MUSIC改列第57／66話IN，原ed-3／ed-4公開ID與序號保留；交叉資料將同話標作ED，分類差異與再查條件記在各曲。新IN使用1、2、5序號避開既有3／4，不為改分類破壞舊連結。原Reweave ED1尚無明確第一方ED使用，與OP分開保留、季度空白，不自動合併或假定ED。
- 甘神前期OP／ED留2024秋、後期兩曲掛2025冬，官方ONAIR明列1月14日後期再開；凍牌OP跨2024秋／2025冬，ED按第1／2cour分季；青のミブロ保留第一期MUSIC存檔四曲，不把芹沢暗殺編新歌套第一期；妖怪学校按連續兩cour與官方四曲分秋／冬。
- ありふれた3後期Compass／Metamorphosis從第10話開始，逐話日期為2024年12月23日，後期仍同跨秋／冬；前期兩曲只留秋。不是把第2cour一律當下一季，也沒有由單曲配信日推TV日期。原TV為AT-X10月14日23:00，TOKYO MX24:00及WEB分開。
- アイプリ原清單只有前期兩曲；官方原期staff-cast明列前後期四曲、實際角色／CV及詞曲編，Anisil逐話界線為第1–30／31話起，テレ東1月26日節目音樂欄明列後期OP。前期保存2024春／夏／秋，後期保存2024秋／2025冬，沒有用現行おねがいアイプリ或リング編覆第一期。
- わんだふるOP保存2024冬至2025冬；前期ED為2024冬／春，後期兩種音源按奇數／偶數話、同樣石井あみ＆後本萌葉名義保存2024夏／秋及2025冬。版本名中的こむぎ／いろは／ユキ／まゆ沒有當作本曲CV演唱，也未由商品其他character版建立TV新曲。Happy≒Future、Wonderful Smile的特別TV ED只有逐話交叉支持，缺第一方TV用途；保留舊ID與全動畫頁、季度空白，曲名／演唱與原影片未刪。交棒新作插曲僅有交叉線索時留待取得官方用途。
- シンカリオン原期MUSIC與11月3日公告確認四曲、THE ALFEE為7月起及Seagull為11月3日起ED，保存已確認春／夏／秋。現行ONAIR是TOKYO MX再播，原テレ東story存檔未給出所需正文；兩輪定向查找後不續搜，OP／Seagull的2025冬實際使用待原TVcredit或正式節目音樂欄才補。
- 逃走中9首依官方逐季公告及繁中逐話表保存：Runaway World為2023春至2025冬；八首ED依2023春至2025冬各季分開。2024年新OP映像仍用Runaway World但換成第2段歌詞，未增新歌曲／錄音。ED8公告只說前山田健一「手がける」，未拆成未明列詞曲編。九筆原期公告由同一官方新聞頁一次取得入口，沒有逐首重搜整站。
- 原名更正11筆、演唱名義更正25筆；舊拉丁曲名保存titleRomaji供搜尋，沒有生成中文譯名。新增89筆明列詞曲編角色、44筆vocal條目（包含名義修正，並非44位新歌手）；甘神三姉妹兩曲與アイプリ雙人各明列角色／CV，通用團員簡介不自動當本曲演唱。甘神OP另有弦編曲留續查，不混入主編曲。
- 0新增YouTube watch外連、影片metadata、音源、發行品或確切平台；同頁已取得的single／album／TV edit等線索保存各曲來源與followUp供詳細階段重用。2,042部非本批JSON逐項SHA-256相同，41筆舊媒體、連結、歌曲ID及全部舊歌曲來源日期保持。3部補原TV時段，其餘作品首播／圖像日期不刷新。

### 有效來源與續查條件

- [甘神MUSIC](https://amagami-anime.com/music/)／[ONAIR](https://amagami-anime.com/onair/)、凍牌[OP](https://tohai-anime.com/music/op/)／[ED1](https://tohai-anime.com/music/ed/)／[ED2](https://tohai-anime.com/music/ed2/)／[第2cour TV](https://tohai-anime.com/onair/)，同頁明列事實重用；商品發行不當TV季度。
- [Re:ゼロ第3期MUSIC存檔](https://re-zero-anime.jp/tv/music/tv3.html)同頁有本期OP／ED、三首新IN與原兩首IN的明列話數／歌唱／創作；[逐話交叉](https://www.anisil.com/animes/6121-Re:%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8B%E7%95%B0%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB%203rd%20season)的ED分類差異保存。F.M.F來源憑證不符，未繞過或標作已讀；原作出版社舊入口未當第3期歌曲依據。
- [青のミブロMUSIC](https://miburoanime.com/music/)同頁第一期第1／2cour與第二期分區，依原期別核對；[妖怪学校MUSIC](https://youkaigakkou.com/music/)／[原TV ONAIR](https://youkaigakkou.com/onair/)支持四曲與連續兩cour。ありふれた3[原OP](https://arifureta.com/music/4161)／[後期OP](https://arifureta.com/music/4617)／[原ED](https://arifureta.com/music/4262)／[後期ED](https://arifureta.com/music/4641)及[YourAnimes逐話日期](https://youranimes.tw/animes/3870/onair)分清第10話仍在秋季。
- わんだふる[主題歌商品](https://www.toei-anim.co.jp/tv/wonderful_precure/music/)／[vocal曲序](https://www.toei-anim.co.jp/tv/wonderful_precure/music/soundtrack-vocal.php)及[逐話交叉](https://cal.syoboi.jp/tid/6969)分開歌曲身分、已明列TV用途及一般收錄；特別ED第一方缺口兩輪後留條件，不把album自動當TV證據。アイプリ[原期staff-cast](https://aipri.jp/anime/series/himitsu/staff-cast/)／[兩OP商品](https://aipri.jp/anime/series/himitsu/cd-bd/product-9/)／[テレ東1月26日](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202501/27970_202501261000.html)與[逐話交叉](https://www.anisil.com/animes/5906-%E3%81%B2%E3%81%BF%E3%81%A4%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%97%E3%83%AA)保存四曲與第31話界線。
- シンカリオン[原期MUSIC](https://www.shinkalion.com/series3/music/)／[11月3日Seagull與7月THE ALFEE公告](https://www.shinkalion.com/series3/news/2165/)與既有有效曲目來源重用；TV再播不當原期首播。逃走中[官方新聞入口](https://www.toei-anim.co.jp/tv/tosochu_gm/news/)一次取得九首歌曲的逐季正式公告，配合[繁中逐話清單](https://zh.wikipedia.org/wiki/%E9%80%83%E8%B5%B0%E4%B8%AD_THE_GREAT_MISSION)，各歌曲JSON保留對應精確公告URL。
- 每筆dataStatus.pendingFields及followUp.fields／resumeWhen保存後續音源、影片形式、收錄及平台缺項；部分跨季缺口另記followUp。3筆基本用途第一方待核、33筆全目錄季度待核與詳細核心缺口分開，不把未明當不存在或完整。

### 本機檢查與展示

- 最終npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部50筆、authoring／公開JSON與保留性檢查通過。資料gate要求已指定季度有第一方用途欄位證據，兩筆僅有交叉支持的特別ED改為季度待核後通過；正常parser／程式及gate未變。
- Chromium393×852展開10頁50組狀態，無水平溢出、app errors或影片iframe；18組跨季歌單、舊拉丁曲名搜尋、逃走中1／9歌名與8／9 ED篩選、Re:ゼロ5／8 IN與原ed-3網址通過。兩筆特別ED待核狀態可見，手機實際截圖檢視アイプリ新ED的兩位角色／CV、基本證據、三項創作角色與待補內容；in-app另確認4筆狀態、1筆展開及保留網址。
- 8個既有季度資料檔有變，沒有新季度、UI／contract／播放器／依賴／部署設定改動，不重跑本機完整E2E；正常PR／main仍含重要E2E。Cloudflare dry-run exit0、完成marker與無bindings。公開邊界、文件連結、敏感內容及diff在提交前收尾；本機通過不當production驗收。

預覽入口：`/anime/himitsu-no-aipri/`、`/anime/tousouchuu-great-mission/`、`/anime/re-zero-kara-hajimeru-isekai-seikatsu-3rd-season/`、`/anime/wonderful-precure/`、`/seasons/2025-winter/`、`/seasons/2024-fall/`。第61批接續頂部10部21筆，基本階段及長期目標未完成。


### 第60批正式發布驗收（2026-10-20）

- [PR #152](https://github.com/kyeunga25/anisonary/pull/152)通過quality與Workers Builds後正常rebase合併；審閱head`b35728bc571f6e3fbd6d4894e8cccd16acb495e4`，main來源`78886266be9ecb7516dccffecbd1619121c4400b`與審閱tree相同，main兩項gate亦成功，含正常重要E2E，未略過gate。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch60-basics`與完整main來源／PR #152一致，第61批未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑是真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 10部50筆通過。
- 正式站Chromium393×852展開10頁50組狀態，無溢出、app errors或影片iframe；18組跨季歌單、舊拉丁曲名查找、逃走中1／9與8／9 ED篩選、Re:ゼロ5／8 IN與保留ed-3網址，以及兩首特別ED待核狀態通過。手機截圖實際檢視新增アイプリバースイン！的完整性欄位與後續條件；in-app665像素另確認雙人角色／CV、4筆狀態、1筆詳情及收合／展開操作。
- annotated tag `batch60-basics`指向正式來源並已推送。第61批接續2024秋10部21筆起始用途；33筆全目錄季度待核與シンカリオン部分冬季缺口保存，作品聯集、基本階段與長期目標未完成。


## 2020-2026-tv-basics-61（已正式發布）

- 固定2020–2026標準TV基本資料階段及2026-10-14截止日維持；來源實際查閱2026-10-20。先核2024秋10部21筆既有用途，另修正前批青のミブロ兩筆跨年用途；實際處理23筆，合計11頁25筆驗證，另兩筆壬生浪後期用途只重用已核結果。沒有新動畫、新用途或新歌曲ID。
- 第60批正常發布已完成，來源`7888626`／`batch60-basics`；本批與第62批資料不混入該產物。原ID、序號、歌曲ID、音源、發行品及影片保留，詳細集中深化延後。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `dandadan-op-1` | オトノケ／Creepy Nuts | OP1 | 2024-fall |
| `dandadan-ed-1` | TAIDADA／ずっと真夜中でいいのに。 | ED1 | 2024-fall |
| `chi-chikyuu-no-undou-ni-tsuite-op-1` | 怪獣／サカナクション | OP1 | 2024-fall、2025-winter |
| `chi-chikyuu-no-undou-ni-tsuite-ed-1` | アポリア／ヨルシカ | ED1 | 2024-fall、2025-winter |
| `chi-chikyuu-no-undou-ni-tsuite-ed-2` | へび／ヨルシカ | ED2 | 2025-winter |
| `blue-lock-vs-u-20-japan-op-1` | 傍若のカリスマ／UNISON SQUARE GARDEN | OP1 | 2024-fall |
| `blue-lock-vs-u-20-japan-ed-1` | One／Snow Man | ED1 | 2024-fall |
| `natsume-yuujinchou-shichi-op-1` | Alca／柏木ひなた | OP1 | 2024-fall |
| `natsume-yuujinchou-shichi-ed-1` | こまりわらい／近藤利樹 | ED1 | 2024-fall |
| `dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-v-houjou-no-megami-hen-op-1` | 少年／GRe4N BOYZ | OP1 | 2024-fall、2025-winter |
| `dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-v-houjou-no-megami-hen-ed-1` | ハイドレート／sajou no hana | ED1 | 2024-fall、2025-winter |
| `raise-wa-tanin-ga-ii-op-1` | UNDER and OVER／THE ORAL CIGARETTES | OP1 | 2024-fall |
| `raise-wa-tanin-ga-ii-ed-1` | なに笑ろとんねん／吉乃 | ED1 | 2024-fall |
| `nageki-no-bourei-wa-intai-shitai-op-1` | 葛藤Tomorrow／Lezel | OP1 | 2024-fall |
| `nageki-no-bourei-wa-intai-shitai-ed-1` | すくりぃむ！／P丸様。 | ED1 | 2024-fall |
| `tsuma-shougakusei-ni-naru-op-1` | アイノリユニオン／pachae | OP1 | 2024-fall |
| `tsuma-shougakusei-ni-naru-ed-1` | Hidamari／Ms.OOJA | ED1 | 2024-fall |
| `maou-2099-op-1` | ホロウ／シユイ | OP1 | 2024-fall |
| `maou-2099-ed-1` | スピラ／sekai | ED1 | 2024-fall |
| `kekkon-suru-tte-hontou-desu-ka-op-1` | キラキラ／HoneyWorks feat.ハコニワリリィ | OP1 | 2024-fall |
| `kekkon-suru-tte-hontou-desu-ka-ed-1` | つまりは／ゴホウビ | ED1 | 2024-fall |
| `ao-no-miburo-op-1` | 青／SPYAIR | OP1 | 2024-fall、2025-winter |
| `ao-no-miburo-op-2` | OOKAMI／梅田サイファー | OP2 | 2025-winter |
| `ao-no-miburo-ed-1` | UNBREAKABLE／THE JET BOY BANGERZ from EXILE TRIBE | ED1 | 2024-fall、2025-winter |
| `ao-no-miburo-ed-2` | フラグメント／osage | ED2 | 2025-winter |

- 公開anime ID：`curated-171018`、`curated-151514`、`curated-163146`、`curated-166611`、`curated-170732`、`curated-170468`、`curated-175019`、`curated-162785`、`curated-163135`、`curated-165790`，更正`curated-169258`。原25筆及媒體保留，2,041個其他動畫JSON逐檔SHA-256相同。
- 10部21筆新增基本欄位證據，更正11個曲名、11個演唱名義，補31筆詞／曲／編角色與11筆演唱條目。4部補原TV時段，2部更正TV首播日期；6筆既有歌曲來源實際重讀後更新，其他舊來源日期保留。沒有新增YouTube、影片metadata、音源、發行品或平台項目。
- ダンダダン：オトノケ只保存明列作詞R-指定／作曲DJ松永，不推編曲；TAIDADA保存ACAね詞曲、煮ル果実與ZTMY編曲。ブルーロック第2期保存傍若のカリスマ與One，後者JUN (Blue Vintage)作詞、Sunny及D&H (PURPLE NIGHT)作曲／編曲，混音不冒充編曲。
- チ。OP怪獣及前EDアポリア跨2024秋／2025冬，後EDへび自第16話1月11日起；第15話為1月4日，故前ED不能漏冬季。夏目第七季原TV為2024秋，翌年額外配信及現行第六季頁腳不作新TV用途。
- ダンまちV TV為10月4日金曜24:30（曆10月5日）；後四話依2025年1月17日官方公告於2–3月在TOKYO MX／BS11／AT-X播出，少年與ハイドレート亦掛2025冬。串流先行、再播與延後原TV分別，不推春季。嘆き第1cour TV為10月1日23:30，舊9月29日不作TV首播；現行官網第2cour及配信資料不覆第1cour。
- 来世保存UNDER and OVER與なに笑ろとんねん、原TV10月7日23:00。妻、小学生保留官方英文原名Hidamari與Ms.OOJA；不把日文意譯冒充原名。魔王2099為ホロウ／シユイ與スピラ／sekai，兩曲專頁分開。結婚キラキラ保留HoneyWorks feat.ハコニワリリィ及同頁詞曲編，Hanon／Kotoha／TV size／Inst留詳細階段建音源，沒有增加TV歌單列數。
- 更正第60批分季疏漏：青のミブロ第12話於2025年1月4日播出，青／UNBREAKABLE為第1–12話，第二cour新曲自1月11日起；前兩曲增加2025冬，原2024秋及所有ID不變，後兩曲保持2025冬。只補實際缺口，不把新cour一律視為新季度。補充交叉日期來源不宣稱其提供曲名／演唱，詞曲編交叉資料未獲第一方支持時保留缺項。
- 全目錄30季、2,052部、4,615用途（4,527 OP／ED、78 IN、10 TS）均有dataStatus；657筆三項基本欄位有第一方／交叉證據，其餘3,958筆保留來源待細分。1,357個唯一用途已逐批處理；33筆完全季度待核與シンカリオン部分冬季缺口保持，不把未明當不存在。2025冬80部175用途／164 OPED，已核157；2024秋97部168用途／165 OPED，已核68。各季分母仍是現有快照，作品聯集未閉合。

### 來源重用、缺口與續查條件

- 同頁一次核身分、用途與已明列角色，沒有重查全目錄來源。原期第一方：[ダンダダンMUSIC](https://anime-dandadan.com/music/)、[チ。](https://anime-chi.jp/)及[ヨルシカ新ED第16話公告](https://yorushika.com/news/detail/11658?lang=en)、[ブルーロック第2期](https://tv.bluelock-pr.com/tv2nd/)、[夏目第七季存檔](https://www.natsume-anime.jp/introduction/series7)、[ダンまちV OP](https://danmachi.com/music/fifth_OP.php)／[ED](https://danmachi.com/music/fifth_ED.php)／[後四話TV](https://danmachi.com/news/news247.php)／[原期TV公告](https://www.universal-music.co.jp/gre4nboyz/news/2024-08-10/)。
- [来世原期首頁](https://raisewataningaii.com/)、[嘆きOP](https://nageki-anime.com/music/detail/4_ose92_1bh)／[ED](https://nageki-anime.com/music/detail/1r82-6-ew)／[製作方原TV公告](https://prtimes.jp/main/html/rd/p/000000038.000090815.html)、[妻、小学生Music切換](https://www.tsumasho-anime.com/)、[魔王2099 OP](https://2099.world/music/)／[ED](https://2099.world/music/?id=ed)、[結婚OP](https://365-wedding-anime.com/music/op/)／[ED](https://365-wedding-anime.com/music/ed/)及[原TV](https://365-wedding-anime.com/)；動態頁透過普通頁面實際切換，沒有把只讀到標頭當已核資料。
- 壬生浪重用[第一期MUSIC](https://miburoanime.com/music/)，補讀[第12話1月4日日期](https://mantan-web.jp/article/20250103dog00m200025000c.html)及[Anisil第1–12話／第13話界線](https://www.anisil.com/animes/6140-%E9%9D%92%E3%81%AE%E3%83%9F%E3%83%96%E3%83%AD)。チ。補讀[MANTAN第15話1月4日](https://en.mantan-web.jp/e_article/20250103dog00m200027000c.html)，歌曲身分交叉證據重用原來源日期。
- 每用途pendingFields／followUp保存後續缺項及resumeWhen：未明列詞曲編留空；影片形式、full／TV、逐曲發行品及確切正版平台留詳細階段沿本曲第一方續補。8筆重複通用續查說明合併為單一精確條件，來源標籤只在同頁確有創作角色時才標明；不把基本證據日期當全部詳細已收齊。
- 第62批接續頂部10部23筆，並有界核對Annict 2024-autumn及Bangumi 2024作品清單的標準TV聯集。未審候選與原始資料留本機，不先公布假定完整分母；短篇／WEB延後，不重搜未觸發的既有缺口。

### 本機檢查與展示

- 最終npm test 4檔8項、build 2,098 HTML／4,194產物通過；ApiProvider 11部25筆、authoring／公開JSON與保留性檢查通過。原25個用途及媒體保持，2,041個其他動畫JSON相同。已指定季度有第一方用途證據的gate保持。
- Chromium393×852展開11頁25組狀態，8組分季歌單、舊Hydrate搜尋、原TV日期／時段及英文Hidamari通過；無溢出、app errors或影片iframe。in-app665像素另實際收合／展開ハイドレート：2筆狀態、1筆詳情，基本證據、冬季用途、未記錄詞曲編與2025年1月17日續查條件可見。Browser plugin不可用，使用專案Chromium明確手機尺寸；in-app視窗不冒充393像素。
- 2個既有季度資料檔有變，沒有新季度、UI／contract／播放器／依賴／部署設定修改，不重跑本機完整E2E；正常PR／main仍含重要E2E。Cloudflare dry-run exit0、完成marker及無bindings；文件連結、公開邊界、敏感內容與diff在提交前收尾。本批正式發布及正式站驗收已完成，見下方獨立發布證據。

預覽入口：`/anime/dandadan/`、`/anime/chi-chikyuu-no-undou-ni-tsuite/`、`/anime/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-v-houjou-no-megami-hen/`、`/anime/ao-no-miburo/`、`/seasons/2024-fall/`、`/seasons/2025-winter/`。基本階段及長期目標未完成。


### 第61批正式發布驗收（2026-10-20）

- [PR #153](https://github.com/kyeunga25/anisonary/pull/153)通過quality與Workers Builds後正常rebase合併；審閱head`bc297570d1ece23e1a3afa359b877ce33b54bcfd`，main來源`a1d6f9b110f65cb2f6ef17b8f4f85926a20ccb37`與審閱tree相同，main兩項gate均成功，含正常重要E2E，沒有略過gate。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch61-basics`與完整main來源／PR #153一致，第62批未混入。
- 正式站92條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑是真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 11部25筆通過。
- 正式站Chromium393×852展開11頁25組狀態，8組實際季度歌單、Hydrate舊名搜尋、原TV日期／時段、英文Hidamari及未記錄詞曲編狀態通過；無溢出、app errors或影片iframe。in-app665像素另確認ハイドレート的基本證據、2025冬用途、24:30原TV與2025年1月17日後續條件，2筆狀態、1筆詳情及收合／展開操作通過，實際截圖已檢視。
- annotated tag `batch61-basics`指向正式來源並已推送。第62批接續10部23筆及2024秋標準TV作品盤點；33筆季度待核與シンカリオン部分冬季缺口保存，基本階段與長期目標仍未完成。


## 2020-2026-tv-basics-62（已正式發布）

- 固定2020–2026標準TV基本資料階段與2026-10-14截止日維持；來源實際查閱2026-10-20。2024秋10部23筆既有用途完成本機驗證；沒有新增動畫、用途或歌曲ID，兩筆原ED依第一方改列IN，原ID與序號保持。
- 第61批正常PR／main gate、實際部署與正式站驗收已完成，來源`a1d6f9b`／`batch61-basics`；第63批資料不混入本批發布。短篇／WEB及集中詳細深化延後，沒有把一批完成當整季或全目標完成。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `rekishi-ni-nokoru-akujo-ni-naruzo-op-1` | バッドゥドゥドゥ／Liyuu | OP1 | 2024-fall |
| `rekishi-ni-nokoru-akujo-ni-naruzo-ed-1` | わっちゅあね？／来栖りん | ED1 | 2024-fall |
| `hitoribocchi-no-isekai-kouryaku-op-1` | ODD NUMBER／吉乃 | OP1 | 2024-fall |
| `hitoribocchi-no-isekai-kouryaku-ed-1` | ハローとグッバイ／鯨木 | ED1 | 2024-fall |
| `saikyou-no-shien-shoku-wajutsushi-dearu-ore-wa-sekai-saikyou-clan-wo-shitagaeru-op-1` | Tactics／KOHTA YAMAMOTO feat. SAIKI | OP1 | 2024-fall |
| `saikyou-no-shien-shoku-wajutsushi-dearu-ore-wa-sekai-saikyou-clan-wo-shitagaeru-ed-1` | Liberation／KOHTA YAMAMOTO feat. AAAMYYY | ED1 | 2024-fall |
| `sword-art-online-alternative-gun-gale-online-ii-op-1` | GG／ReoNa | OP1 | 2024-fall |
| `sword-art-online-alternative-gun-gale-online-ii-ed-1` | Little Dancer／レン starring 楠木ともり | ED1 | 2024-fall |
| `sword-art-online-alternative-gun-gale-online-ii-ed-3` | Overclock／レン starring 楠木ともり | ED3 | 2024-fall |
| `sword-art-online-alternative-gun-gale-online-ii-ed-2` | Toxic／神崎エルザ starring ReoNa | IN2 | 2024-fall |
| `sword-art-online-alternative-gun-gale-online-ii-ed-4` | Oh UnHappy Day／神崎エルザ starring ReoNa | IN4 | 2024-fall |
| `seirei-gensouki-2-op-1` | アウフタクト／大西亜玖璃 | OP1 | 2024-fall |
| `seirei-gensouki-2-ed-1` | 春待歌／諏訪ななか | ED1 | 2024-fall |
| `mf-ghost-2nd-season-op-1` | ROCK ME KISS ME feat. MOTSU／芹澤 優 | OP1 | 2024-fall |
| `mf-ghost-2nd-season-ed-1` | Side U (Prod. AmPm)／Himika Akaneya | ED1 | 2024-fall |
| `kimi-wa-meido-sama-op-1` | おとずれ／tricot | OP1 | 2024-fall |
| `kimi-wa-meido-sama-ed-1` | 表情差分／DUSTCELL | ED1 | 2024-fall |
| `yarinaoshi-reijou-wa-ryuutei-heika-wo-kouryaku-chuu-op-1` | 淡く微か／sajou no hana | OP1 | 2024-fall |
| `yarinaoshi-reijou-wa-ryuutei-heika-wo-kouryaku-chuu-ed-1` | gradation／花たん | ED1 | 2024-fall |
| `maou-sama-retry-r-op-1` | 明日世界が終わるとしても／ASCA | OP1 | 2024-fall |
| `maou-sama-retry-r-ed-1` | クランシック feat. 北澤ゆうほ／MIMiNARI | ED1 | 2024-fall |
| `hoshi-furu-oukoku-no-nina-op-1` | nina／坂本真綾 | OP1 | 2024-fall |
| `hoshi-furu-oukoku-no-nina-ed-1` | 星の伝言／東山奈央 | ED1 | 2024-fall |

- 已處理anime ID：`curated-168139`、`curated-173693`、`curated-177104`、`curated-167141`、`curated-141182`、`curated-171642`、`curated-172190`、`curated-164299`、`curated-168500`、`curated-171038`。23筆三項基本欄位有第一方／交叉證據；更正6個曲名、16個演唱名義，補36筆詞／曲／編角色及16筆演唱條目。新增1個官方MV確切外連，沒有新增影片metadata、音源或發行品。
- 4部更正原TV日期，8部補原TV日期／時段標示（其中7部有明列時段，魔王R時段留空）；24時以後節目日期與曆日分開。4筆既有歌曲來源實際重讀後更新，其餘來源日期保持；原23個用途及歌曲ID、影片、音源、收錄關係與既有連結保留，2,042個其他動畫JSON SHA-256相同。
- 歴史に残る悪女OPバッドゥドゥドゥ／Liyuu與EDわっちゅあね？／来栖りん恢復原名，補6筆詞曲編；原TV10月1日火曜24:30為曆10月2日，23:30先行配信分開。ひとりぼっち保存ODD NUMBER／吉乃及ハローとグッバイ／鯨木；原TV10月3日木曜24:00為曆10月4日，舊9月27日屬ABEMA先行配信翌日，不當TV首播。
- 話術士原TV10月7日23:30，兩曲採KOHTA YAMAMOTO feat. SAIKI／AAAMYYY合作名義；單獨歌唱分別為SAIKI、AAAMYYY，商品明列兩位作詞與KOHTA作曲，沒有由Music或作編曲家簡介推本曲編曲。
- GGOⅡ原TV10月4日金曜24:00；Little Dancer／Overclock保存レン starring 楠木ともり及Jazzin’park明列詞曲編，角色與歌唱分別。Toxic第8話、Oh UnHappy Day第12話依藝人官方改列IN，交叉資料列ED的差異及再查條件保存；原ed-2／ed-4 ID、序號、影片與URL不變。分類更正後沿既有審閱影片資料補IN對應，沒有重新核舊影片或更新日期。
- 精霊幻想記2恢復アウフタクト／大西亜玖璃、春待歌／諏訪ななか，補6筆詞曲編；現行2026年1月ONAIR明列再放送，不增新TV季度。MFゴースト只採官方STAFF內2nd Season兩曲與名義，原TV日期來源保持，不套現行Final Season。
- 君は冥土原TV10月5日土曜25:30為曆10月6日，おとずれ／tricot、表情差分／DUSTCELL保持；不從artist comment的泛稱制作拆詞曲編。やり直し保留淡く微か／sajou no hana、gradation／花たん及6筆詞曲編，AT-X22:00 TV、TOKYO MX23:00與22:30配信分開。
- 魔王R原官網及歌曲公告404，未更新舊來源日期；Sony藝人公告支持明日世界が終わるとしても／ASCA、クランシック feat. 北澤ゆうほ／MIMiNARI、後者詞曲MIMiNARI及實際歌唱北澤ゆうほ。新MV外連直接來自此公告，區域／嵌入可用性未知，不推full。原TV10月5日有明列，舊9月28日不當TV首播；精確時段待原期公告恢復。
- ニナ保存nina／坂本真綾與星の伝言／東山奈央，補6筆詞曲編。原TV10月10日22:00、ABEMA10月7日先行與地方台較晚開播分開；同頁single／TV size／Inst只保存後續條件，沒有擴成新歌曲。
- 全目錄30季、2,052部、4,615用途（4,525 OP／ED、80 IN、10 TS）均有dataStatus；680筆三項基本欄位有兩類欄位證據，其餘3,935筆保留來源待細分。已逐批處理1,380個唯一用途；2024秋163筆現有OP／ED、已核89，33筆全目錄季度待核及シンカリオン部分冬季缺口不變，未重搜未觸發項。

### 來源、盤點與續查條件

- 第一方：[歴史MUSIC](https://rekiaku-anime.com/music/)／[原TV](https://rekiaku-anime.com/onair/)、[ひとりぼっち原期首頁](https://bocchi-kouryaku.com/)／[原TV與先行](https://bocchi-kouryaku.com/onAir)、[話術士合作名義](https://wajutsushi-anime.com/news/detail/n77qbznti)／[OP商品角色](https://wajutsushi-anime.com/products/music/detail/tactics)／[ED商品角色](https://wajutsushi-anime.com/products/music/detail/liberation)／[個別演唱](https://wajutsushi-anime.com/products/music/detail/h0hqspsww3)／[原TV](https://wajutsushi-anime.com/onAir)。
- [GGOⅡ本期MUSIC](https://gungale-online.net/music/)／[原TV](https://gungale-online.net/)／[神崎エルザ官方第8／12話插曲](https://www.kanzakielza.com/)、[精霊第2期MUSIC](https://seireigensouki.com/)、[MF第2期STAFF](https://mfg-anime.com/staff/)、[冥土MUSIC](https://kimihameidosama-anime.com/music/)／[原TV](https://kimihameidosama-anime.com/onair)、[やり直しMUSIC](https://yarinaoshi-reijyou.com/music.html)／[原TV](https://yarinaoshi-reijyou.com/onair.html)。
- [ASCA主題歌公告](https://www.sonymusic.co.jp/artist/asca/info/568618)、[MIMiNARI本曲詞曲／歌唱／官方MV及原TV](https://www.sonymusic.co.jp/artist/MIMiNARI/info/567535)、[ニナMUSIC](https://hoshi-nina-anime.com/music.html)／[原TV](https://hoshi-nina-anime.com/onair.html)。同頁一次取多項事實，舊歌曲交叉來源日期重用，沒有把新TV日期頁當歌曲原名證據。
- 有界盤點補讀[繁中2024秋新番及跨季清單](https://youranimes.tw/bangumi/202410)，實際可見卡片83新番＋20跨季，頁首標示84＋20，差異1筆留待來源修正；這不是標準TV分母。Annict既有秋季參考清單8頁227個最少身分索引已作本機對照；未把電影、短篇、WEB及未審候選寫進公開目錄，未更新整季catalog reference日期。Bangumi公開頁遇安全驗證未讀到內容、不繞過；來源恢復才補此交叉範圍。
- 本輪盤點確認需續核既有村井の恋與神之塔第2期的2024秋TV季度關聯；下一批按頂部ID沿第一方核實後修正。標準TV聯集尚未閉合，Annict／繁中標題差異與續播關聯不直接當新動畫；短篇及一般WEB保持延後。
- 每筆pendingFields／followUp記錄詞曲編、音源、影片形式、收錄與平台缺項及續查條件。魔王R原頁404在來源恢復／原期TV公告出現時補時段；GGO其他album曲要有具體TV使用證據才增用途；詳細階段沿同頁明列single、OST、TV size、Inst補關係，不從MV、產品或不同影片猜錄音。

### 本機檢查與展示

- 最終npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部23筆與保留性檢查通過。資料關聯使用既有groupName，parser與正常gate未改；分類更正後補原影片對應，23筆媒體與2,042個其他動畫JSON保持。
- Chromium393×852展開10頁23組資料狀態，4組2024秋歌單、舊Baddododo別名搜尋、4組TV日期／時段、官方MV確切外連及原ed-2／ed-4網址通過；無溢出、app errors或iframe。in-app665像素實際確認兩曲劇中歌、第12話、ReoNa／神崎エルザ、既有影片外連與逐曲缺口，5組狀態、1筆詳情，收合／展開通過，實際截圖已檢視。
- 1個既有季度seed及1個既有影片metadata對應檔有變，無新季度、UI／contract／播放器／依賴／部署設定修改，不重跑本機完整E2E；正常PR／main仍含重要E2E。Cloudflare dry-run exit0、完成marker及無bindings，文件連結、公開邊界、敏感內容與diff檢查通過；本機通過不作正式部署證明。

預覽入口：`/anime/sword-art-online-alternative-gun-gale-online-ii/`、`/anime/rekishi-ni-nokoru-akujo-ni-naruzo/`、`/anime/hitoribocchi-no-isekai-kouryaku/`、`/anime/maou-sama-retry-r/`、`/seasons/2024-fall/`。第63批接續頂部10部22筆；基本階段與長期目標未完成。


### 第62批正式發布驗收（2026-10-20）

- [PR #154](https://github.com/kyeunga25/anisonary/pull/154)通過quality與Workers Builds後正常rebase合併；審閱head`af911f15db2424af6bd2a61e2f3422e572be8744`，main來源`e0845d584c1733ec1192b66bb1c4cac6aae154fb`與審閱tree相同，main兩項gate成功，含正常重要E2E，沒有略過gate。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch62-basics`與完整main來源／PR #154一致，第63批未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑是真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 10部23筆通過。
- 正式站Chromium393×852展開10頁23組狀態，4組季度歌單、Baddododo舊名、4組原TV資料、官方MV確切外連及原ed-2／ed-4網址通過；無溢出、app errors或影片iframe。in-app665像素另確認兩首劇中歌、第12話、ReoNa／神崎エルザ、原影片外連及基本／詳細狀態，5組狀態、1筆詳情及收合／展開通過，實際截圖已檢視。
- annotated tag `batch62-basics`指向正式來源並已推送。第63批接續TV季度與同頁插曲缺口；標準TV聯集、基本階段與長期目標仍未完成。


## 2020-2026-tv-basics-63（正式驗收完成）

- 固定2020–2026標準TV基本階段及2026-10-14截止日維持；實際來源查閱2026-10-20。起始10部22筆，沿同頁納入ぷにる第2期既有兩曲及第14話插曲，最終11部24筆既有＋4筆新增IN，共28筆；新增動畫0、新用途4、新歌曲ID4，不等於新增4個錄音。
- 第62批正常PR／main gate、實際部署及正式站驗收已完成，來源`e0845d5`／`batch62-basics`；第64批資料不混入本批發布。詳細集中深化、短篇／WEB與未觸發缺口保持延後，整季作品聯集尚未閉合。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `murai-no-koi-op-1` | へんしん!／莉犬（すとぷり） | OP1 | 2024-fall |
| `murai-no-koi-ed-1` | すこ。／ヤバイTシャツ屋さん | ED1 | 2024-fall |
| `kami-no-tou-tower-of-god-2nd-season-op-1` | RISE UP／NiziU | OP1 | 2024-summer |
| `kami-no-tou-tower-of-god-2nd-season-op-2` | NIGHT／Stray Kids | OP2 | 2024-fall |
| `kami-no-tou-tower-of-god-2nd-season-ed-1` | BELIEVE／NiziU | ED1 | 2024-summer |
| `kami-no-tou-tower-of-god-2nd-season-ed-2` | Falling Up／Stray Kids | ED2 | 2024-fall |
| `kabushiki-gaisha-magi-lumiere-op-1` | オーダーメイド／まふまふ | OP1 | 2024-fall |
| `kabushiki-gaisha-magi-lumiere-ed-1` | ワークアウト／syudou | ED1 | 2024-fall |
| `ranma-1-2-2024-op-1` | 許婚っきゅん／ano | OP1 | 2024-fall |
| `ranma-1-2-2024-ed-1` | あんたなんて。／りりあ。 | ED1 | 2024-fall |
| `bleach-sennen-kessen-hen-soukoku-tan-op-1` | 言葉にせずとも／SIX LOUNGE | OP1 | 2024-fall |
| `bleach-sennen-kessen-hen-soukoku-tan-ed-1` | MONOCHROME／水槽 | ED1 | 2024-fall |
| `tensei-kizoku-kantei-skill-de-nariagaru-2nd-season-op-1` | SKILLAWAKE／PassCode | OP1 | 2024-fall |
| `tensei-kizoku-kantei-skill-de-nariagaru-2nd-season-ed-1` | Familiar／田中有紀 | ED1 | 2024-fall |
| `goukon-ni-ittara-onna-ga-inakatta-hanashi-op-1` | メリーゴーランドタイム／なすお☆ | OP1 | 2024-fall |
| `goukon-ni-ittara-onna-ga-inakatta-hanashi-ed-1` | 王様だーれだっ／ASOBI同盟 | ED1 | 2024-fall |
| `kamonohashi-ron-no-kindan-suiri-2nd-season-op-1` | フィードバックを鳴らして／ハンブレッダーズ | OP1 | 2024-fall |
| `kamonohashi-ron-no-kindan-suiri-2nd-season-ed-1` | ラビリンス／hockrockb | ED1 | 2024-fall |
| `kamonohashi-ron-no-kindan-suiri-2nd-season-in-1` | おはよう、世の中／にょにょん（CV.高垣彩陽） | IN1 | 2024-fall |
| `kamonohashi-ron-no-kindan-suiri-2nd-season-in-2` | おもひ／にょにょん（CV.高垣彩陽） | IN2 | 2024-fall |
| `kamonohashi-ron-no-kindan-suiri-2nd-season-in-3` | On Liberty／にょにょん（CV.高垣彩陽） | IN3 | 2024-fall |
| `puniru-wa-kawaii-slime-op-1` | ぎゅむ！／ぷにる（CV：篠原 侑） | OP1 | 2024-fall |
| `puniru-wa-kawaii-slime-ed-1` | 唱／ぷにる（CV：篠原 侑） | ED1 | 2024-fall |
| `negaposi-angler-op-1` | イト／Van de Shop | OP1 | 2024-fall |
| `negaposi-angler-ed-1` | 承認欲求／96猫 | ED1 | 2024-fall |
| `puniru-wa-kawaii-slime-2nd-season-op-1` | Brun-Brun／ぷにる（CV：篠原 侑） | OP1 | 2025-summer |
| `puniru-wa-kawaii-slime-2nd-season-ed-1` | 青と夏／ぷにる（CV：篠原 侑） | ED1 | 2025-summer |
| `puniru-wa-kawaii-slime-2nd-season-in-1` | 戦え！モンスーラ／南波遊助（CV.榎木淳弥） | IN1 | 2025-summer |

- 公開anime ID：`curated-150930`、`curated-153406`、`curated-171025`、`curated-178533`、`curated-169755`、`curated-178434`、`curated-169931`、`curated-172355`、`curated-171400`、`curated-179919`、`curated-185755`。28筆三項基本欄位有第一方／交叉證據，其中2筆ぷにる2期已有深入成果，本次只補欄位證據與演唱關聯；26筆為本批首次逐批核對。
- 新增4首IN：鴨乃橋第二期おはよう、世の中／おもひ／On Liberty（にょにょん，CV高垣彩陽）與ぷにる第二期第14話戦え！モンスーラ（南波遊助，CV榎木淳弥）。前者官方公告與リスアニ，後者官方MUSIC與JOYSOUND必要曲目metadata交叉支持；一般album曲、配樂或角色cover不直接增為TV歌曲。
- 更正5個曲名、12個演唱名義，補59筆詞／曲／編角色、18筆演唱條目及3筆團隊成員；不是59個唯一創作者。3筆新插曲外連共用1個官方single配信入口，地區可用性未知；新增YouTube、影片metadata、結構化音源與發行品均0。官方已明示full-size的三首IN留續查條件，沒有將未建立的音源關係記為完成。
- 24筆原用途、序號、歌曲ID、影片、音源、發行品、日期與既有平台連結保留；ぷにる2期原有single／album／錄音及確切Apple Music／Spotify／YouTube Music不重查、不改其來源日期。僅6筆實際重讀的既有歌曲來源更新，其餘日期保持；2,041個其他動畫JSON逐檔SHA-256相同。
- 村井原TV為10月6日23:30，9月4日為Disney+先行；兩曲TV用途掛2024秋，夏季作品索引保留先行身分但不冒稱已核TV歌。恢復へんしん!／莉犬（すとぷり）、すこ。／ヤバイTシャツ屋さん，團隊簡介只保存明列成員，不由書き下ろし推詞曲編。
- 神之塔2前期RISE UP／BELIEVE留2024夏，工房戦NIGHT／Falling Up改2024秋；10月6日23:00 TV及23:30配信分別。前期MUSIC／後期MOVIE與原ONAIR合併支持用途，2部既有動畫新增秋季關聯，沒有另建重複工房戦動畫。
- マジルミエ採第1期存檔オーダーメイド／まふまふ、ワークアウト／syudou及6筆詞曲編，常規23:00／初回23:05分開；現行2026第二期不覆原期。らんま採第1期許婚っきゅん／ano、あんたなんて。／りりあ。及7筆詞曲編，原TV10月5日24:55（曆10月6日），後來再播與其他期別不增本期季度。
- BLEACH採相剋譚第3cour言葉にせずとも／SIX LOUNGE、MONOCHROME／水槽，原期日期沿舊已登記來源顯示，不套第4cour2026改期。藝人泛稱自己詞曲編不擅自當本曲明列角色。
- 鑑定貴族2原官網404，改用ブシロード原期公告一次核兩曲、11筆詞曲編與9月29日23:30 TV。兩輪定向查找後，首話第13話的逐曲夏季用途仍不清楚：交叉條目註OP首話未使用，節目共用OP／ED欄位不足以證明該話；兩曲秋季已核、夏季部分缺口保留，沒有推夏季或假定不存在。
- 合コン原TV10月4日25:30（曆10月5日），舊9月30日是ABEMA先行；メリーゴーランドタイム／なすお☆與王様だーれだっ／ASOBI同盟補9筆詞曲編。官方single內互換歌手版、TV Size及Inst留詳細階段，沒有新增TV用途。
- 鴨乃橋2原TV10月7日22:30，OPハンブレッダーズ名義更正；新IN三曲保存角色／CV與10筆詞曲編，11月19日為配信日，不當TV首用日期。ぷにる第1期ぎゅむ！／唱保存角色與篠原侑、7筆詞曲編，原作者及本版編曲分別；第2期已完成深入資料沿用，新增南波插曲不直接套OP／ED的音源與收錄。ネガポジ兩曲保存イト／Van de Shop、承認欲求／96猫與6筆詞曲編，10月3日AT-X22:00 TV與10月11日歌曲配信分別。
- 全目錄30季、2,052部、4,619用途（4,525 OP／ED、84 IN、10 TS）均有dataStatus；708筆三項基本欄位有兩類欄位證據，其餘3,911筆保留來源待細分。已逐批處理1,406個唯一用途；2024秋99部175用途／167 OPED、已核109，夏77部194 OPED、已核19；2025夏增加1筆IN但OPED分母208不變。

### 來源、未解缺口與續查條件

- [村井MUSIC](https://murainokoi-anime.com/music/)／[原TV與先行](https://murainokoi-anime.com/)、[神之塔前期MUSIC](https://tog-anime.com/music/index.html)／[工房戦MOVIE](https://tog-anime.com/movie/)／[原TV](https://tog-anime.com/onair/index.html)、[マジルミエ第1期MUSIC](https://magilumiere-pr.com/1st/music/)／[原TV](https://magilumiere-pr.com/1st/onair/)、[らんま期別MUSIC](https://ranma-pr.com/music/)／[原TV與再播分列](https://ranma-pr.com/onair/)。
- [BLEACH第3cour OP](https://bleach-anime.com/music/op03.html)／[ED](https://bleach-anime.com/music/ed03.html)、[鑑定貴族製作方原期公告](https://prtimes.jp/main/html/rd/p/000008039.000014827.html)、[合コンMUSIC](https://goukon-anime.com/music/index.html)／[原TV](https://goukon-anime.com/onair/index.html)、[鴨乃橋原期MUSIC區](https://kamonohashiron.com/#music)／[原TV](https://kamonohashiron.com/onair/)／[三首IN公告](https://kamonohashiron.com/news/20241118-01.html)／[リスアニ交叉](https://www.lisani.jp/0000270544/)。
- [ぷにる兩期MUSIC](https://puniru-anime.com/music/)／[第2期原TV](https://puniru-anime.com/onair/)／[新IN曲目metadata交叉](https://www.joysound.com/web/search/song/1128761)、[ネガポジMUSIC](https://np-angler.com/music.html)／[原TV](https://np-angler.com/onair.html)。一頁可支持多曲及多欄位時一次使用；角色／CV、歌唱、作詞作曲與一般團隊成員分開，不從商品其他曲推新用途。
- JOYSOUND只人工核一首的曲名、演唱與相關動畫，不展開／保存／印刷歌詞、不取音訊或用戶資料；公開來源矩陣增加同一使用邊界。既有交叉來源及深入平台日期保留；來源引用只連實際已讀且已在逐曲ledger登記的頁面，不用TV日期頁假稱曲名／演唱證據。
- 33筆全目錄完全季度待核保持；シンカリオン兩筆2025冬及鑑定貴族2兩筆2024夏為部分季度缺口，與33筆分開。鑑定需原期第13話實際音樂名單／明確使用界線出現才補夏季，兩輪後不重搜未觸發項。其餘缺詞曲編、版本、影片形式、收錄及平台依每用途pendingFields／followUp條件續補；ぷにる2期原有深入成果保持。
- 新IN續查說明限定本曲，26句重複通用狀態文字移除，保留欄位表與具體條件；曲目狀態不宣稱所有版本收齊。標準TV作品聯集仍未閉合，短篇／WEB不阻較舊季度基本盤點；下一批接續頂部7部25筆。

### 本機檢查與展示

- 最終npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 11部28筆及保留性檢查通過。原24筆媒體／收錄保持，2,041個其他動畫JSON相同；引用gate指出的日期來源缺項已補正逐曲ledger，正常parser與gate未改。
- Chromium393×852展開11頁28組狀態，10組夏／秋歌單、舊Henshin與新增On Liberty目標列、4組原TV資料、4首新IN證據、保留ぷにる2期版本／發行品／確切平台及部分季度條件通過；無溢出、app errors或影片iframe。On Liberty可同時返回相近曲名，依現有搜尋核目標列，不為私人驗證假定唯一結果或改正常歌單連結。
- in-app665像素另實際收合／展開新戦え！モンスーラ：3組狀態、1筆詳情，基本雙來源、角色／榎木淳弥、三項角色及本曲缺口可見；專案393像素手機截圖實際檢視，舊OP／ED深入項目未被套新IN。Browser plugin不可用，使用專案Chromium明確尺寸，in-app不冒充手機。
- 3個既有季度資料檔及來源矩陣／checkpoint有變，沒有新季度、UI／contract／播放器／依賴／部署設定修改，不重跑本機完整E2E；正常PR／main仍含重要E2E。Cloudflare dry-run（無bindings）、文件相對連結、公開邊界245檔及diff檢查通過；正式發布另以下方驗收為準，本機檢查不單獨作production證明。

預覽入口：`/anime/puniru-wa-kawaii-slime-2nd-season/`、`/anime/kamonohashi-ron-no-kindan-suiri-2nd-season/`、`/anime/murai-no-koi/`、`/anime/kami-no-tou-tower-of-god-2nd-season/`、`/seasons/2024-fall/`、`/seasons/2024-summer/`、`/seasons/2025-summer/`。第64批接續7部25筆，基本階段及長期目標未完成。


### 正式發布驗收（2026-10-20）

- 資料、來源使用邊界與checkpoint共3段提交；[PR #155](https://github.com/kyeunga25/anisonary/pull/155)的quality／Workers檢查均通過，正常rebase合併。完整main來源`32f85096f111b6023b0bbd719974c5bb6e4348a7`，與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch63-basics`與完整main來源／PR #155一致，第64批未混入。
- 正式站92條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 11部28筆通過。
- 正式站Chromium393×852展開11頁28組狀態，10組季度歌單、舊名與新增歌曲目標列、4組原TV資料、4首新IN、既有ぷにる第2期深入項目與鑑定貴族部分季度續查條件通過；無溢出、app errors或影片iframe。in-app665像素另核新IN角色／榎木淳弥、三項創作角色、基本證據、明確缺口及收合／展開；3組狀態、1筆詳情、0 iframe，兩種實際截圖均已檢視。
- annotated tag `batch63-basics`指向正式來源並已推送。第64批接續2024秋；33筆全目錄季度待核、4筆部分季度缺口、標準TV作品聯集與其餘年度基本盤點未完成。


## 2020-2026-tv-basics-64（正式驗收完成）

- 固定2020–2026標準TV基本階段及2026-10-14截止日維持；實際來源查閱2026-10-20。處理7部25筆既有用途，新增8筆已核插曲，合計33筆基本欄位證據；新增動畫0、新用途8、新歌曲ID8，不表示8首全新創作或8個已建立錄音。
- 第63批正常PR／main、實際部署及正式站驗收已完成，來源`32f8509`／`batch63-basics`；第65批資料不混入本批發布。詳細集中深化、短篇／WEB及未觸發缺口維持延後，標準TV作品聯集尚未閉合。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `love-live-superstar-3rd-season-op-1` | Let's be ONE／Liella! | OP1 | 2024-fall |
| `love-live-superstar-3rd-season-ed-1` | DAISUKI FULL POWER／澁谷かのん（CV.伊達さゆり） | ED1 | 2024-fall |
| `love-live-superstar-3rd-season-ed-2` | DAISUKI FULL POWER／澁谷かのん（CV.伊達さゆり）、ウィーン・マルガレーテ（CV.結那）、鬼塚冬毬（CV.坂倉 花） | ED2 | 2024-fall |
| `love-live-superstar-3rd-season-ed-3` | DAISUKI FULL POWER／米女メイ（CV.薮島朱音）、若菜四季（CV.大熊和奏） | ED3 | 2024-fall |
| `love-live-superstar-3rd-season-ed-4` | DAISUKI FULL POWER／鬼塚夏美（CV.絵森 彩） | ED4 | 2024-fall |
| `love-live-superstar-3rd-season-ed-5` | DAISUKI FULL POWER／Liella! | ED5 | 2024-fall |
| `love-live-superstar-3rd-season-ed-6` | DAISUKI FULL POWER／唐 可可（CV.Liyuu）、平安名すみれ（CV.ペイトン尚未） | ED6 | 2024-fall |
| `love-live-superstar-3rd-season-ed-7` | DAISUKI FULL POWER／鬼塚冬毬（CV.坂倉 花） | ED7 | 2024-fall |
| `love-live-superstar-3rd-season-ed-8` | DAISUKI FULL POWER／嵐 千砂都（CV.岬 なこ） | ED8 | 2024-fall |
| `love-live-superstar-3rd-season-ed-9` | DAISUKI FULL POWER／ウィーン・マルガレーテ（CV.結那） | ED9 | 2024-fall |
| `love-live-superstar-3rd-season-ed-10` | DAISUKI FULL POWER／葉月 恋（CV.青山なぎさ）、桜小路きな子（CV.鈴原希実） | ED10 | 2024-fall |
| `love-live-superstar-3rd-season-ed-11` | DAISUKI FULL POWER／Liella! | ED11 | 2024-fall |
| `love-live-superstar-3rd-season-in-1` | Butterfly Wing／ウィーン・マルガレーテ（CV.結那） | IN1 | 2024-fall |
| `love-live-superstar-3rd-season-in-2` | Bubble Rise／澁谷かのん（CV.伊達さゆり）、ウィーン・マルガレーテ（CV.結那）、鬼塚冬毬（CV.坂倉 花） | IN2 | 2024-fall |
| `love-live-superstar-3rd-season-in-3` | Special Color／Liella! | IN3 | 2024-fall |
| `love-live-superstar-3rd-season-in-4` | 星屑クルージング ～上海 Ver.～／唐 可可（CV.Liyuu） | IN4 | 2024-fall |
| `love-live-superstar-3rd-season-in-5` | 絶対的LOVER／Liella!、澁谷かのん（CV.伊達さゆり）、ウィーン・マルガレーテ（CV.結那）、鬼塚冬毬（CV.坂倉 花） | IN5 | 2024-fall |
| `love-live-superstar-3rd-season-in-6` | Dazzling Game／Liella!、澁谷かのん（CV.伊達さゆり）、ウィーン・マルガレーテ（CV.結那）、鬼塚冬毬（CV.坂倉 花） | IN6 | 2024-fall |
| `love-live-superstar-3rd-season-in-7` | 笑顔のPromise／Liella! | IN7 | 2024-fall |
| `love-live-superstar-3rd-season-in-8` | スーパースター!!／Liella! | IN8 | 2024-fall |
| `love-live-superstar-3rd-season-ed-12` | 始まりは君の空 ～11 Ver.～／Liella! | IN12 | 2024-fall |
| `ao-no-exorcist-yuki-no-hate-hen-op-1` | RE RESCUE／Reol | OP1 | 2024-fall |
| `ao-no-exorcist-yuki-no-hate-hen-ed-1` | ツララ／Yobahi | ED1 | 2024-fall |
| `nanatsu-no-taizai-mokushiroku-no-yonkishi-2nd-season-op-1` | MMH／UVERworld | OP1 | 2024-fall |
| `nanatsu-no-taizai-mokushiroku-no-yonkishi-2nd-season-ed-1` | アカイロ／Hana Hope | ED1 | 2024-fall |
| `sayonara-ryuusei-konnichiwa-jinsei-op-1` | Together Forever／LUN8 | OP1 | 2024-fall |
| `sayonara-ryuusei-konnichiwa-jinsei-ed-1` | 君と見た景色／EverdreaM | ED1 | 2024-fall |
| `party-kara-tsuihou-sareta-sono-chiyushi-jitsu-wa-saikyou-ni-tsuki-op-1` | 最強？最高！Brave My Heart／立花日菜 | OP1 | 2024-fall |
| `party-kara-tsuihou-sareta-sono-chiyushi-jitsu-wa-saikyou-ni-tsuki-ed-1` | Only／Sizuk | ED1 | 2024-fall |
| `mahoutsukai-ni-narenakatta-onnanoko-no-hanashi-op-1` | コラージュ／PUFFYとついでにTOOBOE | OP1 | 2024-fall |
| `mahoutsukai-ni-narenakatta-onnanoko-no-hanashi-ed-1` | 瞬間最大風速／halca | ED1 | 2024-fall |
| `acro-trip-op-1` | フラーグム／水瀬いのり | OP1 | 2024-fall |
| `acro-trip-ed-1` | リバーシブルベイベー／カノエラナ | ED1 | 2024-fall |

- 公開anime ID：`curated-155502`、`curated-176311`、`curated-176292`、`curated-176053`、`curated-174043`、`curated-107372`、`curated-157965`。33筆原名、演唱與用途均有第一方／交叉欄位證據，每筆保存詳細缺項及具體續查位置。
- 更正8個曲名、14個演唱名義，補90筆詞／曲／編角色、33筆演唱條目與2筆團隊成員；不是90個唯一創作者。新增1個Only官方MV外連；影片metadata、結構化音源與發行品新增均0，地區／嵌入可用性未知，不由MV推full。
- 25筆原ID、用途序號、歌曲ID、影片、版本標籤、發行品、日期及既有平台連結保留；僅4筆實際讀過的既有歌曲來源更新（四騎士首頁TV、アクロトリップ首頁各兩曲），其他來源日期保持；2,045個其他動畫JSON逐檔SHA-256相同。
- Love Live第3期官方single／OST一次核13筆既有用途與8筆漏曲。11個DAISUKI FULL POWER用途保留原ID及不同話數歌唱，官方OST逐曲明列角色／CV；曲作者以第一方拼寫，沒有採交叉索引的常s楽寺等錯字或其錯誤TV時段，也沒有把同名逐話版先合併為一個錄音。
- 原ed-12的始まりは君の空 ～11 Ver.～依官方商品改列第12話IN，交叉索引列ED的差異與續核條件保存，原ed-12 ID／序號／URL不改。官方single為11 Ver.、OST為第12話Ver.，兩者錄音同一性仍待核。
- 8筆新增IN為Butterfly Wing（第1話Piano Size）、Bubble Rise（第2話）、Special Color（第3話）、星屑クルージング上海版（第5話）、絶対的LOVER（第6話）、Dazzling Game（第8話）、笑顔のPromise（第10話）、スーパースター!!（第11話）。6筆有官方明列插曲商品；Piano／上海版以官方第3期OST核名稱、歌唱及期別收錄，逐話插曲用途由繁中作品條目與アニシル交叉核對，詞曲編／譯詞仍留待第一方逐曲資料。沒有把商品其他曲或リエラのうた3特別パート冒當本篇OP／ED／IN。
- Love Live原TV為2024年10月6日NHK Eテレ17:00–17:25；2025年1月single及2月OST是發行日，不增2025冬TV用途。既有歌唱與新三位角色／CV分開保存，未從團隊目前成員表推每曲全員實際演唱；21筆詳情預設收合，只展開所選歌曲。
- 青エク採雪ノ果篇原期RE RESCUE／Reol與ツララ／Yobahi，10月5日24:30（曆6日）TV，現行終夜篇另記。四騎士採第2期MMH／UVERworld與アカイロ／Hana Hope，10月6日16:30，沒有混入同頁Season1或由藝人簡介拆逐曲職位。
- 竜生原TV10月10日25:28（曆11日），舊10月4日為ABEMA先行；Together Forever／LUN8、君と見た景色／EverdreaM保存，ED詞曲川崎鷹也及團隊成員明列。Only以Sizuk為作品名義、Kotoha為歌唱，詞曲編明列，最強？最高！Brave My Heart恢復立花日菜與4筆創作角色；治癒師原期公告核10月5日深夜2時，現行ONAIR的2025一挙再播不套原期。
- まほなれ採コラージュ／PUFFYとついでにTOOBOE與瞬間最大風速／halca；TOOBOE詞曲、PUFFY歌唱分別，未從一般簡介推編曲。原TV10月4日25:53（曆5日），TOOBOE版／anime size／Inst未另建TV用途。アクロトリップ恢復フラーグム／水瀬いのり與リバーシブルベイベー／カノエラナ及6筆詞曲編，TV10月2日22:00，FOD先行另記；藝人half album與single兩版的已知曲目留具體續查位置。
- 全目錄30季、2,052部、4,627用途（4,524 OP／ED、93 IN、10 TS）均有dataStatus；741筆三項基本欄位有兩類欄位證據，其餘3,886筆保留來源待細分。已逐批處理1,439個唯一用途；2024秋99部183用途／166 OPED、已核133，詳細核心1／缺口132；33筆全目錄季度待核及4筆部分季度缺口維持。

### 來源、未解缺口與續查條件

- [Love Live原TV](https://www.lovelive-anime.jp/yuigaoka/onair/)、[OP single](https://www.lovelive-anime.jp/yuigaoka/music/cd38.php)／[ED single](https://www.lovelive-anime.jp/yuigaoka/music/cd39.php)、[第2／3話插曲](https://www.lovelive-anime.jp/yuigaoka/music/cd40.php)／[第6／8話](https://www.lovelive-anime.jp/yuigaoka/music/cd42.php)／[第10／11話](https://www.lovelive-anime.jp/yuigaoka/music/cd44.php)／[第12話](https://www.lovelive-anime.jp/yuigaoka/music/cd46.php)、[官方逐話歌唱與版本OST](https://www.lovelive-anime.jp/yuigaoka/music/cd49.php)、[繁中作品及插曲交叉](https://zh.wikipedia.org/wiki/Love_Live!_Superstar!!)。日文交叉索引保留精確來源於每曲；原AnimeThemes有效來源與日期重用，沒有全面重查。
- [雪ノ果篇OP](https://ao-ex.com/snow//music/opening.html)／[ED](https://ao-ex.com/snow//music/ending.html)／[原TV](https://ao-ex.com/snow/)、[四騎士第2期MUSIC](https://7sins-4knights.net/music/)／[原TV](https://www.7sins-4knights.net/)、[竜生MUSIC](https://dragonlife-anime.com/music/)／[原TV與先行](https://dragonlife-anime.com/onair/)。
- [治癒師MUSIC](https://sonochiyushi.com/music/index.html)／[原期TV公告](https://sonochiyushi.com/news/index00220000.html)／[Only歌唱與詞曲編、官方MV入口](https://sizuk.info/release/only/)、[まほなれMUSIC](https://mahonare.asmik-ace.co.jp/music)／[TOOBOE逐曲詞曲、PUFFY歌唱及原TV](https://www.sonymusic.co.jp/artist/tooboe/info/566184)、[アクロトリップ同頁MUSIC及TV](https://acrotrip-anime.com/)。一次使用同頁已明列事實，沒有用歌詞、一般團隊簡介、專輯其他曲或再播日期填逐曲缺項。
- 各逐話DAISUKI版本明記OST Disc2曲序及待核錄音；新增IN記錄本曲single品番／OST位置，Piano／上海版缺詞曲編或譯詞不從其他版移植。角色歌、Off Vocal、image song及同張商品其他曲須有用途證據才另建用途；詳細階段回到這些精確來源續補。
- Only雖有官方MV外連，影片渠道／形式metadata及地區可用性仍待核；其餘已存影片保留，已有一支影片不代表所有形式完整。TV Size／single／album／OST有名單而尚未結構化時仍顯示音源／收錄待補，不把同名版或不同商品當同一錄音。
- 33筆完全未分季及シンカリオン2025冬／鑑定貴族2首話夏季各2筆部分季度缺口保持，沒有重搜未觸發項。2024秋作品聯集尚未閉合，跨夏秋續播、長篇及魚人島編等範圍仍需後續盤點；短篇／WEB／特殊番延後，不冒稱現有166筆為全季總數。

### 本機檢查與展示

- 最終npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 7部33筆及保留性檢查通過。原25筆媒體／深入關係保持，2,045個其他動畫JSON相同；正常parser與資料gate未改。
- Chromium393×852展開7頁33組狀態，5組季度歌單、3個舊名搜尋及新Bubble Rise、7組原TV資料、9筆IN含原ed-12網址、Only確切官方MV外連通過；無溢出、app errors或影片iframe。1月發售的Love Live插曲仍只在2024秋，非2025冬。
- in-app665像素實際收合／展開Bubble Rise，21組狀態、1筆詳情、三位角色／CV、三項創作及品番／OST曲序續查條件可見。展示發現的8筆繁中來源語言標籤已修正並重驗，手機與in-app最終截圖均已檢視；Browser plugin不可用，手機尺寸使用專案Chromium，不以in-app寬度冒充手機。
- 只有1個既有季度資料檔與checkpoint變更，沒有新季度、UI／contract／播放器／依賴／部署設定修改；本機不重跑完整E2E，正常PR／main仍含重要E2E。本批Cloudflare dry-run無bindings，文件相對連結、公開邊界245檔與diff檢查通過；正式發布另以下方驗收為準，本機檢查不單獨作production證明。

預覽入口：`/anime/love-live-superstar-3rd-season/`、`/anime/sayonara-ryuusei-konnichiwa-jinsei/`、`/anime/party-kara-tsuihou-sareta-sono-chiyushi-jitsu-wa-saikyou-ni-tsuki/`、`/anime/acro-trip/`、`/seasons/2024-fall/`。第65批接續頂部11部30筆，基本階段及長期目標未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分段提交；[PR #156](https://github.com/kyeunga25/anisonary/pull/156)的quality／Workers均通過，正常rebase合併。完整main來源`0f59a7ebf2a6df5afd127a4e44e72d68bc97a1ba`，與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch64-basics`與完整main來源／PR #156一致，第65批未混入。
- 正式站84條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 7部33筆通過。
- 正式站Chromium393×852展開7頁33組狀態，5組季度歌單、3個舊名及新增插曲搜尋、7組原TV、9筆IN含原ed-12網址與Only官方MV確切外連通過；無溢出、app errors或影片iframe。in-app665像素另核21組狀態／1筆詳情、三位角色／CV、創作、正確繁中來源語言及具體品番／OST曲序續查條件，收合／展開通過；兩種實際截圖均已檢視。
- annotated tag `batch64-basics`指向正式來源並已推送。第65批接續跨夏秋及秋季標準TV；33筆全目錄季度待核、4筆部分季度缺口、作品聯集及其餘基本盤點未完成。


## 2020-2026-tv-basics-65（正式驗收完成）

- 固定2020–2026標準TV基本階段及2026-10-14截止日維持；實際查閱2026-10-20。11部30筆既有用途，補2筆漏收IN，共32筆；29筆三項基本欄位有第一方／交叉證據，3筆特殊ED仍待第一方曲目／逐話用途，不以資料有值當作全部完成。
- 第64批正常PR／main、實際部署及正式站驗收完成，來源`0f59a7e`／`batch64-basics`。本批每筆保存dataStatus、缺項與具體續查條件；詳細深化及短篇／WEB延後。第66批只登記後續範圍，資料不混入本批發布。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `tasuuketsu-op-1` | エンペラータイム／ビバラッシュ | OP1 | 2024-summer |
| `tasuuketsu-op-2` | Fly Higher／Travis Japan | OP2 | 2024-fall |
| `tasuuketsu-ed-1` | GAME OVER／弌誠 | ED1 | 2024-summer |
| `tasuuketsu-ed-2` | REASONS／相羽あいな | ED2 | 2024-fall |
| `fairy-tail-100-years-quest-op-1` | Story／Da-iCE | OP1 | 2024-summer |
| `fairy-tail-100-years-quest-op-2` | Endless Happy-Ending／THE RAMPAGE from EXILE TRIBE | OP2 | 2024-fall, 2025-winter |
| `fairy-tail-100-years-quest-ed-1` | 友よ　ここでサヨナラだ／僕が見たかった青空 | ED1 | 2024-summer |
| `fairy-tail-100-years-quest-ed-2` | ties／野田愛実 | ED2 | 2024-fall, 2025-winter |
| `fairy-tail-100-years-quest-in-1` | Beyond the Quest／高梨康治 featuring Noora Louhimo (BATTLE BEAST) | IN1 | 2024-summer, 2024-fall, 2025-winter |
| `sengoku-youko-senma-konton-hen-op-1` | KATAWARA／STEREO DIVE FOUNDATION | OP1 | 2024-summer, 2024-fall |
| `sengoku-youko-senma-konton-hen-ed-1` | 夜の隨／七海ひろき | ED1 | 2024-summer |
| `sengoku-youko-senma-konton-hen-ed-2` | すれちがい／歌唱未確認 | ED2 | 待核；保留動畫頁及全目錄 |
| `sengoku-youko-senma-konton-hen-ed-3` | 万里一空／Rainy。 | ED3 | 2024-fall |
| `sengoku-youko-senma-konton-hen-in-1` | 赤泥／MindaRyn | IN1 | 2024-summer, 2024-fall |
| `delicos-nursery-op-1` | UNFAIR／中島美嘉 | OP1 | 2024-summer, 2024-fall |
| `delicos-nursery-ed-1` | Prayer／Anonymouz | ED1 | 2024-summer, 2024-fall |
| `shin-tennis-no-ouji-sama-u-17-world-cup-semifinal-op-1` | Wake up／Kidella | OP1 | 2024-fall |
| `shin-tennis-no-ouji-sama-u-17-world-cup-semifinal-ed-1` | GLANZ／emBLEm=ADLER | ED1 | 2024-fall |
| `kamierabi-god-app-season-2-op-1` | 風化／名無し之太郎 | OP1 | 2024-fall |
| `kamierabi-god-app-season-2-ed-1` | 幸福のすゝめ／LEEVELLES | ED1 | 2024-fall |
| `kinokoinu-op-1` | きのこいぬ／HY | OP1 | 2024-fall |
| `kinokoinu-ed-1` | Heart b-b-beat!!／IBERIs& | ED1 | 2024-fall |
| `mecha-ude-tv-op-1` | VORTEX／セツコ(空白ごっこ) | OP1 | 2024-fall |
| `mecha-ude-tv-ed-1` | Karma／セツコ(空白ごっこ) | ED1 | 2024-fall |
| `mecha-ude-tv-ed-2` | arma／XAI | ED2 | 待核；保留動畫頁及全目錄 |
| `the-idolm-ster-shiny-colors-2nd-season-op-1` | プリズムフレア／シャイニーカラーズ | OP1 | 2024-fall |
| `the-idolm-ster-shiny-colors-2nd-season-ed-1` | Wandering Dream Chaser／ストレイライト | ED1 | 2024-fall |
| `ooi-tonbo-2nd-season-op-1` | Seven pieces／Sacra e sole | OP1 | 2024-fall |
| `ooi-tonbo-2nd-season-ed-1` | 勝ちたくなっちゃったね／TOKYO GROOVE JYOSHI | ED1 | 2024-fall |
| `ooi-tonbo-2nd-season-ed-2` | Let's Swing／TOKYO GROOVE JYOSHI featuring 大井とんぼ（CV：はやしりか） | ED2 | 待核；保留動畫頁及全目錄 |
| `haigakura-op-1` | Chaser／MADKID | OP1 | 2024-fall, 2025-summer |
| `haigakura-ed-1` | Phoenix／牧島 輝 | ED1 | 2024-fall, 2025-summer |

- 公開anime ID：`curated-174070`、`curated-139095`、`curated-176660`、`curated-167991`、`curated-165810`、`curated-172199`、`curated-177581`、`curated-154673`、`curated-175533`、`curated-178729`、`curated-168537`。新增動畫0、新用途2、新歌曲ID2；更正7個原曲名、17個演唱名義，補46筆詞／曲／編角色、40筆歌唱條目，不等同46個唯一作者。官方影片外連、影片metadata、結構化音源及發行品新增均0，既有成果保留。
- 30筆原ID、用途序號、歌曲ID、影片、錄音／發行品、日期、版本與平台連結保留；僅8筆實際讀過的既有歌曲來源更新（多数欠4、カミエラビ2、きのこいぬ2），其餘日期不推高。2,041個其他動畫JSON逐檔SHA-256相同。四部夏秋續播補2024秋作品入口；Fairy補2025冬、ハイガクラ補2025夏，沒有複製動畫頁或改slug。
- 多数欠恢復エンペラータイム／ビバラッシュ、GAME OVER／弌誠及REASONS／相羽あいな；前後cour四曲分夏／秋，不從弌誠一般創作簡介推本曲詞曲編。原TV7月2日25:59、首回26:10，曆7月3日；現場エンペラータイム演唱不增TV用途。
- Fairy原TV7月7日17:30；官方明列10月13日第14話起Endless Happy-Ending／THE RAMPAGE from EXILE TRIBE及ties／野田愛実，後期兩曲涵蓋2025年1月5日第25話。前期Story及友よ　ここでサヨナラだ只列夏季，總集篇沒有自動沿用。Story同頁明列6筆詞曲編，友よ3筆；後期缺項保留。
- 新IN Beyond the Quest以高梨康治 featuring Noora Louhimo (BATTLE BEAST)為發表名義、Noora Louhimo為實際歌唱，詞若井望、曲高梨康治；官方9月29日第13話首次使用，交叉逐話核第16／23／25話，夏／秋及2025冬用途分開。演奏者沒有當歌唱者；OST／SPECIAL PV及確切配信入口已有來源，詳細關係留待整理，未由PV推full。
- 戰國妖狐分開救世姐弟篇與千魔混沌篇；KATAWARA詞曲編R・O・N、夜の隨詞曲編松本明人、万里一空詞雨宮二己／曲編YOSHIHIRO依官方。前半ED夜の隨只列夏季，10月9日最終cour的万里一空列秋季。新IN赤泥由MindaRyn官方8月1日公告核原名、歌唱及詞SACHIKO／曲編Evan Call，8月14日拔刀場景起用，交叉第18／33話；預定配信與平台日期未硬合。
- Delico官方MUSIC明列UNFAIR／中島美嘉與Prayer／Anonymouz，前者中島美嘉、野村陽一郎共同詞曲。8月7日24:30（曆8日）原TV至11月27日最終話，兩曲補秋季；11月6日single不是首播。
- SEMIFINAL採Wake up／Kidella、GLANZ／emBLEm=ADLER，FEEL MEE明列手塚、ボルク、Q・P的三位CV。原TV10月2日24:00（曆3日）；2026決勝メンバー決定戦另期。カミエラビ第2期原曲風化／名無し之太郎、幸福のすゝめ／LEEVELLES及10月2日24:55原TV明列，不套第1期。
- きのこいぬ原期10月3日與HY／IBERIs&歌曲明列，精確TV時段待補，不把21:25串流當TV；一般成員表不當逐曲全員歌唱。メカウデ原TV10月3日24:30（曆4日），官方對VORTEX／Karma明列セツコ(空白ごっこ)及澤野弘之作編曲；MODv不直接增TV用途。
- シャニアニ2恢復プリズムフレア／シャイニーカラーズ，LACM-24580明列詞こだまさおり、曲ヒゲドライバー、編Powerless及本曲19位角色／CV，三峰結華為希水しお；沒有套用舊CV或目前其他團隊成員。Wandering Dream Chaser／ストレイライト官方明列第1話披露，ED分類由原交叉來源核對；CD unit版、live scene及劇場先行不增TV歌曲或錄音。原TV10月4日25:23（曆5日）。
- とんぼ2分開第1／第2期Music；Seven pieces詞かわさき健／曲オバタ コウイチ／編GIRA MUNDO，勝ちたくなっちゃったね詞Dragonfly／曲編柴田敏孝。原TV10月5日10:00；2025年1月11日起為再播，沒有新增冬季用途。ハイガクラ原期10月7日與2025第8話8月21日深夜新內容分開，官方MUSIC沿用Chaser／MADKID及Phoenix／牧島 輝，補夏季；7月1至7話重播不另增用途。
- 全目錄30季、2,052部、4,629用途（4,524 OP／ED、95 IN、10 TS）全部有dataStatus；770筆三項基本欄位有兩類欄位證據，其餘3,859筆保留來源待細分。已逐批處理1,471個唯一用途；2024秋103部191用途／172 OPED、已核155、詳細核心1／缺口154；2024夏188 OPED／已核27，2025冬166／已核159，夏210／已核195。36筆完全季度待核、4筆部分季度缺口分開，快照分母仍不是標準TV全季聯集。

### 來源、未解缺口與續查條件

- [多数欠MUSIC](https://www.vap.co.jp/tasuketsu_anime/)／[原TV](https://www.vap.co.jp/tasuketsu_anime/onair/)、[Fairy MUSIC](https://fairytail100yq.com/music/)／[第14話起新曲](https://fairytail100yq.com/news/detail.php?id=1119909)／[最終話與插曲PV](https://fairytail100yq.com/news/detail.php?id=1121808)、[Beyond the Quest原名／歌唱／詞曲及第13話公告](https://www.fairytail100yq.com/news/detail.php?id=1119544)／[逐話交叉](https://www.mau2.com/anime/fairytail100nenquest)。
- [戰國妖狐MUSIC](https://sengoku-youko.com/music/)／[原TV](https://sengoku-youko.com/onair/)／[MindaRyn 2024年8月1日赤泥公告](https://mindaryn.com/newscat/Release)／[繁中逐話交叉](https://zh.wikipedia.org/wiki/戰國妖狐)、[Delico MUSIC](https://delicosnursery.com/music/)／[原TV](https://delicosnursery.com/onair/)／[11月27日最終話公告](https://delicosnursery.com/news/?article_id=66720)。
- [FEEL MEE原期曲名／三位角色](https://tenipuri.jp/news/news/15516.html)／[SEMIFINAL原TV](https://tenipuri.jp/u17/semi-final/onair.html)、[カミエラビ原期MUSIC](https://kamierabi.com/)／[TV](https://kamierabi.com/onair/)、[きのこいぬ](https://kinokoinu-anime.com/)、[メカウデMUSIC](https://mecha-ude.com/music/)／[TV](https://mecha-ude.com/onair/)。
- [プリズムフレア LACM-24580](https://shinycolors.lantis.jp/releaseinfo/lacm-24580/)／[第1話披露曲](https://shinycolors-anime2nd.idolmaster-official.jp/news/straylight-mv/)／[原TV](https://shinycolors-anime2nd.idolmaster-official.jp/onair/)、[とんぼ兩期MUSIC](https://tonbo-anime.com/music/)／[原期與再播](https://tonbo-anime.com/onair/)／[第25話ED交叉](https://www.mau2.com/anime/ooitonbo-2)、[Phoenix原期10月7日](https://columbia.jp/artist-info/makishimahikaru/info/88661.html)／[ハイガクラ2025新內容](https://haigakura.jp/onair/)。其餘有效既有交叉來源及日期沿用，沒有全面重查。

| 用途 | 未解基本缺口 | 續查條件 |
| --- | --- | --- |
| すれちがい（原ed-2） | 交叉僅列Evan Call作曲／編曲及第19話特殊ED，第一方MUSIC未列；已移除錯誤Evan Call歌唱，顯示歌唱未確認，季度暫空 | 原期第19話片尾名單、日文OST逐曲表或作者逐曲實績可讀時再核；兩輪定向查找未明，未觸發不重搜 |
| arma（原ed-2） | [主辦方現場採訪](https://diskgarage.com/digaonline/liverepo/218320)記錄XAI演唱並稱メカウデ插曲；原交叉列第12話ED。採訪為交叉來源，官方MUSIC／OST商品沒有逐曲名單，季度暫空 | 第12話片尾名單、藝人／唱片官方arma資料或完整OST曲表可核時確認ED／IN與季度；不把配樂總作者當本曲詞曲編 |
| とんぼ2 Let's Swing（原ed-2） | 第一方已明第1期原曲身分、名義及詞曲編；交叉列第2期第25話ED，第2期重用仍缺第一方逐話證據，季度暫空 | 第2期第25話片尾名單、官方重用公告或逐話曲表可核時補秋季；原曲基本事實不重查 |

- 三筆均保留原ID／URL、全目錄與動畫頁，不把未確認歌唱或用途當作已完成，也不由一般「插曲」稱呼自動改ED為IN。其他29筆不受這些單筆缺口阻擋。36筆完全季度缺口與シンカリオン2025冬、鑑定貴族2首話夏季共4筆部分缺口分開。
- 詳細階段可重用本曲single／OST精確入口：Wake up NECM-10305、GLANZ NECM-11068、プリズムフレア LACM-24580及Phoenix COKM-45268；版本、off vocal、收錄與確切平台未結構化仍標待補。19位角色的OP單曲版不直接推unit版為TV用途；已存影片不表示所有官方形式或區域可用性完整。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 11部32筆及保留性檢查通過；29筆欄位證據、3筆來源待確認與36筆季度待核計數一致。正常資料／parser／安全gate及應用程式未改。
- Chromium393×852實際驗11頁32組狀態，8組跨季歌單、3個舊名與2筆新插曲及arma搜尋、9組原TV／再播資料、3筆待核舊網址和兩筆IN證據通過；預設收合、無橫向溢出／app errors／影片iframe。Browser plugin不可用，以專案Chromium驗手機尺寸。
- in-app665像素實際收合／展開赤泥，5組狀態／1筆展開、詞曲編與續查條件、歌唱未確認提示可見；手機與in-app截圖均已檢視，不把本機寬度當手機。既有ID、影片／深層關係及2,041個其他動畫JSON保持。
- 只有4個既有季度資料檔、來源規則與checkpoint變更；沒有新季度、UI／contract／播放器／依賴／部署設定修改，本機不重跑全套E2E，正常PR／main仍含重要E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾均通過；本機通過不等於已部署。

預覽入口：`/anime/sengoku-youko-senma-konton-hen/#theme-sengoku-youko-senma-konton-hen-in-1`、`/anime/fairy-tail-100-years-quest/`、`/anime/the-idolm-ster-shiny-colors-2nd-season/`、`/seasons/2024-fall/`。第66批接續頂部9部26筆，標準TV聯集、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 來源規則、資料與checkpoint分段提交；[PR #157](https://github.com/kyeunga25/anisonary/pull/157)的quality／Workers均通過，正常rebase合併。完整main來源`dec2061cd452229996adca28db12d8e750e3a599`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch65-basics`與完整main來源／PR #157一致，第66批資料未混入。
- 正式站92條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 11部32筆通過。
- 正式站Chromium393×852實驗11頁32組狀態、8組季度歌單、舊名／新插曲及arma搜尋、9組TV／再播資料、3筆待核舊網址及兩筆IN證據；無溢出、app errors或影片iframe。in-app665像素另核5組狀態／1筆詳情、歌唱未確認提示、赤泥詞曲編及續查條件，實際收合／展開通過；兩種截圖均已檢視。
- annotated tag `batch65-basics`指向正式來源並已推送。第66批接續魚人島編、跨季續播及2024夏標準TV；36筆全目錄季度待核、4筆部分季度缺口、作品聯集及其餘基本盤點未完成。

## 2020-2026-tv-basics-66（正式驗收完成）

- 固定2020–2026標準TV基本階段及2026-10-14截止日維持；實際查閱2026-10-20。9部26筆既有用途，補6筆OP／ED及1筆插曲，共33筆；原名、演唱名義與用途均有第一方及交叉欄位證據。兩筆最終話部分季度待核不阻擋其他已確認用途。
- 每筆公開dataStatus保留已記錄項目、詳細缺項、來源日期與具體followUp；列表維持緊湊，詳情按需展開。第66批正常PR／main與實際部署已正式驗收，來源`ce8b8fa`／`batch66-basics`。第67批範圍另行登記，不混入本批凍結資料。

### 公開用途及已確認季度

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `one-piece-gyojin-tou-hen-op-1` | ウィーゴー！／麦わらの一味 | OP1 | 2024-fall |
| `one-piece-gyojin-tou-hen-op-2` | ウィーゴー！～HIKAKIN＆SEIKIN with モンキー・D・ルフィ ver.～／HIKAKIN＆SEIKIN with モンキー・D・ルフィ | OP2 | 2025-winter |
| `one-piece-gyojin-tou-hen-op-3` | ウィーゴー！～白上フブキ、宝鐘マリン、角巻わため with 大槻マキ ver.～／白上フブキ、宝鐘マリン、角巻わため with 大槻マキ | OP3 | 2025-winter |
| `one-piece-gyojin-tou-hen-op-4` | ウィーゴー！～小鳥遊キアラ、ハコス・ベールズ、こぼ・かなえる with きただにひろし Ver.～／小鳥遊キアラ、ハコス・ベールズ、こぼ・かなえる with きただにひろし | OP4 | 2025-winter |
| `one-piece-gyojin-tou-hen-ed-1` | Sailing／BE:FIRST | ED1 | 2024-fall, 2025-winter |
| `boku-no-hero-academia-7-op-1` | 誰我為／TK from 凛として時雨 | OP1 | 2024-spring |
| `boku-no-hero-academia-7-op-2` | カーテンコール／優里 | OP2 | 2024-summer, 2024-fall |
| `boku-no-hero-academia-7-ed-1` | 蕾／Omoinotake | ED1 | 2024-spring |
| `boku-no-hero-academia-7-ed-2` | 六等星／ざらめ | ED2 | 2024-summer, 2024-fall |
| `oshi-no-ko-2nd-season-op-1` | ファタール／GEMN | OP1 | 2024-summer |
| `oshi-no-ko-2nd-season-ed-1` | Burning／羊文学 | ED1 | 2024-summer |
| `oshi-no-ko-2nd-season-in-1` | POP IN 2／B小町 | IN1 | 2024-summer, 2024-fall |
| `2-5-jigen-no-ririsa-op-1` | シャッターチャンス／めいちゃん | OP1 | 2024-summer |
| `2-5-jigen-no-ririsa-op-2` | ツギハギの翼／そらる | OP2 | 2024-summer, 2024-fall |
| `2-5-jigen-no-ririsa-ed-1` | Watch Me／天乃リリサ（CV：前田佳織里）、橘美花莉（CV：鬼頭明里） | ED1 | 2024-summer |
| `2-5-jigen-no-ririsa-ed-2` | Release Sigh／天乃リリサ（CV：前田佳織里）、橘美花莉（CV：鬼頭明里）、ノノア（CV：鈴代紗弓）、喜咲アリア（CV：渡部紗弓） | ED2 | 2024-summer, 2024-fall |
| `yu-gi-oh-go-rush-op-1` | 蜃気楼／フレデリック | OP1 | 2022-spring, 2022-summer, 2022-fall, 2023-winter |
| `yu-gi-oh-go-rush-op-2` | ソウル・ギャラクシー／BRADIO | OP2 | 2023-spring, 2023-summer, 2023-fall, 2024-winter |
| `yu-gi-oh-go-rush-op-3` | デュエルしようぜ！／オーイシマサヨシ | OP3 | 2024-spring, 2024-summer, 2024-fall, 2025-winter |
| `yu-gi-oh-go-rush-ed-1` | One Way／佐伯ユウスケ | ED1 | 2022-spring, 2022-summer |
| `yu-gi-oh-go-rush-ed-2` | One Way -Fresh Pop Rearrange-／王道遊飛（CV：熊谷俊輝）＆王道遊歩（CV：福島香々） | ED2 | 2022-fall, 2023-winter |
| `yu-gi-oh-go-rush-ed-3` | Cosmos／向井太一 | ED3 | 2023-spring, 2023-summer |
| `yu-gi-oh-go-rush-ed-4` | 旅立ちの唄／175R | ED4 | 2023-fall, 2024-winter |
| `yu-gi-oh-go-rush-ed-5` | STAR RUSH／七瀬彩夏 | ED5 | 2024-spring, 2024-summer |
| `yu-gi-oh-go-rush-ed-6` | サヨナラにはならない／七瀬彩夏 | ED6 | 2024-fall, 2025-winter |
| `maou-gun-saikyou-no-majutsushi-wa-ningen-datta-op-1` | Ctrl C／KOHTA YAMAMOTO feat. Shun Ikegai | OP1 | 2024-summer |
| `maou-gun-saikyou-no-majutsushi-wa-ningen-datta-ed-1` | I still／KOHTA YAMAMOTO feat. 明智マヤ | ED1 | 2024-summer |
| `isekai-suicide-squad-op-1` | Another World／布袋寅泰 | OP1 | 2024-summer |
| `isekai-suicide-squad-ed-1` | Go-Getters／Mori Calliope | ED1 | 2024-summer |
| `boku-no-tsuma-wa-kanjou-ga-nai-op-1` | おかえりなさい／ときのそら | OP1 | 2024-summer |
| `boku-no-tsuma-wa-kanjou-ga-nai-ed-1` | Wave／清水美依紗 | ED1 | 2024-summer |
| `shinmai-ossan-bouken-sha-saikyou-party-ni-shinu-hodo-kitaerarete-muteki-ni-naru-op-1` | 荒野に咲けよ冒険者たち／串田アキラ | OP1 | 2024-summer |
| `shinmai-ossan-bouken-sha-saikyou-party-ni-shinu-hodo-kitaerarete-muteki-ni-naru-ed-1` | さがしもの／藤川千愛 | ED1 | 2024-summer |

- 公開anime ID：`curated-183423`、`curated-163139`、`curated-166531`、`curated-158559`、`curated-142842`、`curated-173584`、`curated-166710`、`curated-175450`、`curated-163292`。新增動畫0、用途7、歌曲ID7；更正14個原曲名、19個名義，補87筆詞／曲／編角色與41筆歌唱條目，角色數不等於唯一作者數。官方影片外連、metadata、結構化音源及發行品新增均0；已明single／OST入口作為後續深化接點。
- 26筆既有ID、類型、序號、歌曲ID、影片、錄音／發行關係、歌曲日期、版本及平台連結保留，2,043個其他動畫JSON逐檔SHA-256相同。只更新4筆實際重讀的既有歌曲來源（魔王軍2、新米オッサン2），其餘既有來源日期維持。原seed所有者保留，跨季registry關聯既有anime ID，不複製動畫頁。
- 魚人島編恢復麦わらの一味歌唱的ウィーゴー！，三組2025年1月5日、2月2日、3月2日起的角色／藝人OP依原名及歌唱／編曲分開，後三筆只列2025冬；Sailing跨秋冬。官方明列3月30日結束，不從發行日或新版MV推2025春用途；HikakinTV／SeikinTV另版MV不當OA同錄音。原10月27日公告為預定，既有11月3日首播日及原核對日期未以它覆蓋。
- 我的英雄學院第7期官方曲目明列誰我為／TK from 凛として時雨、蕾／Omoinotake、カーテンコール／優里、六等星／ざらめ；TK明列詞曲編。實讀官方第139話5月4日、第147話6月29日、第148話7月13日、第159話10月12日；前期兩曲僅春、後期兩曲夏秋，不以週數心算首用日期，Memories、FINAL或2026其他內容分開。
- 我推第2期7月3日23時開播，最終第24話改10月6日19時；ファタール／GEMN及Burning／羊文学先保留夏季，最終話常規OP／ED實用未明。新IN POP IN 2由官方第24話插曲公告與Vol.4核原名、B小町、三位角色／CV及詞曲編，交叉第23話亦使用，記夏秋。10月9日CD／solo配信不是首用日期，Say What?／深海52Hz及Vol.4.5 solo未據此新增TV用途。
- 2.5次元的誘惑官方MUSIC核四曲及詞曲編、兩位／四位角色CV。原TV7月5日22:30；交叉逐話曲目與實際播表確認第13話在9月27日已換後期，ツギハギの翼／Release Sigh列夏秋，前期兩曲僅夏。播出表只作日期／季度證據，不充歌曲名義證據；ballade／solo或OST版待獨立錄音與用途證據。
- GO RUSH第一方Marvelous同頁核九曲與明列詞曲編，補ソウル・ギャラクシー／BRADIO、デュエルしようぜ！／オーイシマサヨシ、Cosmos／向井太一、旅立ちの唄／175R、STAR RUSH與サヨナラにはならない／七瀬彩夏。2022–2025三年度輪替依官方前後期與交叉話數分季；EFFY、NOIZEWAVE及shogo.k依第一方拼法。第151話特殊用曲未明不推定年度常規曲；TV Size／rearrange／off vocal及OST曲表不等於多首創作或新用途。
- 魔王軍原TV更正7月3日22時，6月26日為ABEMA先行；Ctrl C實際歌唱／詞Shun Ikegai，I still為明智マヤ，不把KOHTA YAMAMOTO的一般作編曲經歷推逐曲職位。我的妻子原TV更正7月2日23時，6月29日是ABEMA先行；恢復おかえりなさい／ときのそら、Wave／清水美依紗。
- 異世界自殺突擊隊日本TV更正7月5日24:30（曆7月6日），6月27日海外先行串流分開。日本MUSIC明列Another World／布袋寅泰及其曲／編，已移除無證據的布袋歌唱；Go-Getters詞Mori Calliope／Yuki Tsujimura、曲Giga／TeddyLoid，沒有把Composed推編曲。日本TV日期目前以交叉頁記錄，原期第一方ONAIR未明，作品來源角色與歌曲證據分開。
- 新米オッサン原TV7月1日26時（曆2日），恢復荒野に咲けよ冒険者たち／串田アキラ、さがしもの／藤川千愛及同頁詞曲編；2025串流新增不增TV季度。其餘細節以每筆followUp續查，不全面重搜。
- 全目錄2,052部、4,636用途（4,530 OP／ED、96 IN、10 TS）全部有dataStatus；803筆三項基本欄位有兩類證據，其餘3,833筆保留來源待細分。已逐批處理1,504唯一用途。全目錄有28筆非空季度用途保存use_quarters續查／媒體界線備註，當中近期6筆明確跨季缺口與36筆完全未分季用途分開；不能把欄位有值或備註數當作全季完整度。

### 主要證據、缺口與續查條件

- [魚人島初期名義](https://one-piece.com/news/69138/index.html)、[原曲與Sailing詞曲編](https://one-piece.com/news/69189/index.html)、[2025年1月版](https://one-piece.com/news/70569/index.html)、[2／3月版與期末](https://one-piece.com/news/70881/index.html)；11月3日改期仍待原期第一方公告，不反覆重查舊預定日。
- [我的英雄學院第7期MUSIC](https://heroaca.com/music/music_7th/)、[第147話6月29日](https://heroaca.com/episodes/7th/ep147/)、[第148話7月13日](https://heroaca.com/episodes/7th/ep148/)、[最終話10月12日](https://heroaca.com/episodes/7th/ep159/)、[繁中逐話交叉](https://zh.wikipedia.org/wiki/我的英雄學院_(動畫))。其他三曲詞曲編及MHA Arr Ver.待本曲single／原期曲表，OST名不直接建新用途。
- [我推第2期MUSIC／Vol.4](https://ichigoproduction.com/Season2/music/index.html)、[第24話插曲公告](https://ichigoproduction.com/Season2/news/index01130000.html)、[最終話時段](https://ichigoproduction.com/Season2/news/index01070000.html)、[繁中逐話交叉](https://zh.wikipedia.org/wiki/【我推的孩子】_(動畫))。ファタール及Burning經兩輪定向查找後仍無第24話實用名單，保留use_quarters；僅待該話原始片頭／片尾或官方逐話曲表可核時回補秋季，不由整期概稱推定。
- [Ririsa MUSIC](https://ririsa-official.com/music/)、[原TV](https://ririsa-official.com/onair/)、[逐話曲目交叉](https://cal.syoboi.jp/tid/7124/subtitle)、[第13話實際播表](https://cal.syoboi.jp/tid/7124/time)。詳細階段再補各曲single／OST、角色solo與ballade版、確切平台及官方影片形式。
- [GO RUSH官方CD／OST逐曲表](https://www.marv.jp/special/yugioh_gorush/cd.html)、[繁中話數與期間](https://zh.wikipedia.org/wiki/遊戲王GO_RUSH)、[TV Guide逐期曲目交叉](https://www.tvguide.or.jp/db/anime/yugioh/gorush/)。MJSS-09329／09341／09364~5／09387與SOUND RUSH FOUR為詳細收錄接點；第151話特殊用曲待原期逐話名單，不憑專輯TV Size增用途。
- [魔王軍MUSIC／TV](https://maougun-anime.com/)、[自殺突擊隊日本MUSIC](https://wwws.warnerbros.co.jp/suicidesquad-isekai/ja/music/)、[日本TV日期與曲目交叉](https://zh.wikipedia.org/wiki/異世界自殺突擊隊)、[我的妻子MUSIC](https://bokutsuma-anime.com/music/)／[TV](https://bokutsuma-anime.com/onair/)、[新米オッサンMUSIC／TV](https://shinmaiossan-anime.com/)。自殺突擊隊原期ONAIR兩輪未明，待日本官網時段資料恢復；交叉列第9／10話插曲亦待第一方逐話曲表，未新增IN。
- 所有33筆個別followUp保留本曲詳細缺項及具體入口；沒有新增官方影片、音源或發行品結構便不稱已完成這些欄位。舊36筆完全季度缺口及既有部分缺口只按原觸發條件續查。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、公開邊界245檔與diff檢查通過；ApiProvider實讀9部33筆，33筆基本欄位證據及保留性／全季計數通過。首次檢查指出歌曲來源誤用動畫層級角色，已將4筆日期交叉來源依現有契約修正，未改parser、應用程式或gate。
- Chromium393×852驗9頁33組狀態、12組跨季歌單、舊名及新增曲搜尋、3筆TV日期補正、布袋非歌唱角色及兩筆最終話缺口；預設收合、展開無橫向溢出／app errors／未同意影片iframe。私有預覽斷言按實際「最終第24話」文字校準，不改正常程式。
- in-app665像素實際收合／展開POP IN 2，3組狀態／1筆展開，三位角色CV、詞曲編、來源及續查條件可見；手機與in-app實際截圖已檢視。Browser plugin不可用，以專案Chromium驗手機尺寸。
- 僅12個既有季度資料檔與checkpoint，沒有新季度、UI、contract、播放器、依賴或部署設定變更；本機不重跑全套E2E，正常PR／main仍含重要E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾均通過；本機通過不等於已部署。

預覽入口：`/anime/oshi-no-ko-2nd-season/#theme-oshi-no-ko-2nd-season-in-1`、`/anime/yu-gi-oh-go-rush/`、`/anime/2-5-jigen-no-ririsa/`、`/seasons/2024-summer/`。第67批接續頂部10部22筆；2024秋現有未逐批核對12筆屬短篇／WEB／特殊版延後，標準TV作品聯集仍未閉合，不以現有清單宣稱全季齊備。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #158](https://github.com/kyeunga25/anisonary/pull/158)的quality／Workers通過，正常rebase合併。完整main來源`ce8b8fa46590f30ec9fa689955efd8c77bde41bb`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch66-basics`與完整main來源／PR #158一致，第67批資料未混入。
- 正式站88條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放與ApiProvider 9部33筆通過。
- 正式站Chromium393×852實驗9頁33組狀態、12組跨季歌單、舊名與新增曲搜尋、3筆TV日期補正、布袋非歌唱角色及兩筆最終話缺口；無溢出、app errors或影片iframe。in-app665像素核3組狀態／1筆展開、POP IN 2角色CV與詞曲編、最終話待核提示，實際收合／展開通過；兩種截圖均已檢視。
- annotated tag `batch66-basics`指向正式來源並已推送。第67批接續2024夏10部22筆基本用途；36筆完全季度待核、個別use_quarters續查條件及詳細缺項保留，作品聯集與2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-67（正式驗收完成）

- 固定2020–2026標準TV基本階段及2026-10-14截止日維持；實際查閱2026-10-20。2024夏10部22筆既有用途，20筆原名／名義／用途有第一方及交叉欄位證據，2筆特殊用曲的第一方缺口保留；沒有以缺少詞曲編、音源或發行品阻擋其他基本資料。
- 每筆保存dataStatus、詳細缺項與具體續查條件；基本核對日期依三項欄位兩類證據，沒有將沿用8月30日交叉來源一律推高。第67批正常PR／main及實際部署已正式驗收，來源`6bee626`／`batch67-basics`；第68批另外登記來源整理範圍。

### 公開用途與實際差異

| 公開theme ID | 原名／名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `gimai-seikatsu-op-1` | 天使たちの歌／fhána | OP1 | 2024-summer |
| `gimai-seikatsu-ed-1` | 水槽のブランコ／Kitri | ED1 | 2024-summer |
| `giji-harem-op-1` | ブラウス／ゴホウビ | OP1 | 2024-summer |
| `giji-harem-ed-1` | アドリブ／七倉 凛（CV：早見沙織） | ED1 | 2024-summer |
| `giji-harem-ed-2` | ブラウス／ゴホウビ | ED2 | 待核；保留原ID、全目錄及動畫頁 |
| `tasogare-outfocus-op-1` | クランクアップ／山崎育三郎 | OP1 | 2024-summer |
| `tasogare-outfocus-ed-1` | Unchain×Unchain／Amber’s | ED1 | 2024-summer |
| `ramen-aka-neko-op-1` | 赤猫／水曜日のカンパネラ | OP1 | 2024-summer |
| `ramen-aka-neko-ed-1` | 本日のおすすめ／離婚伝説 | ED1 | 2024-summer |
| `ore-wa-subete-wo-parry-suru-gyaku-kanchigai-no-sekai-saikyou-wa-boukensha-ni-naritai-op-1` | AMBITION／桜木舞華【ウタヒメドリーム】（CV：鈴木杏奈） | OP1 | 2024-summer |
| `ore-wa-subete-wo-parry-suru-gyaku-kanchigai-no-sekai-saikyou-wa-boukensha-ni-naritai-ed-1` | ノーギフテッド／ウタヒメドリーム オールスターズ | ED1 | 2024-summer |
| `megami-no-cafe-terrace-2nd-season-op-1` | チャージ！／小玉ひかり | OP1 | 2024-summer |
| `megami-no-cafe-terrace-2nd-season-ed-1` | なっちゃった！／アーリオ・オーリオ・エ・ペペロンチーノ | ED1 | 2024-summer |
| `senpai-wa-otokonoko-op-1` | 我がまま／くじら | OP1 | 2024-summer |
| `senpai-wa-otokonoko-ed-1` | あれが恋だったのかな feat. にしな／くじら | ED1 | 2024-summer |
| `nier-automata-ver1-1a-2nd-season-op-1` | ブラックボックス／LiSA | OP1 | 2024-summer |
| `nier-automata-ver1-1a-2nd-season-ed-1` | 灰ト祈リ／GEMS COMPANY | ED1 | 2024-summer |
| `nier-automata-ver1-1a-2nd-season-ed-2` | Weight of the World/壊レタ世界ノ歌／河野万里奈 | ED2 | 待核；保留原ID、全目錄及動畫頁 |
| `dungeon-no-naka-no-hito-op-1` | マイクロレボリューション／TrySail | OP1 | 2024-summer |
| `dungeon-no-naka-no-hito-ed-1` | ブループリント／ナナヲアカリ | ED1 | 2024-summer |
| `kono-sekai-wa-fukanzen-sugiru-op-1` | No Complete／Liyuu | OP1 | 2024-summer |
| `kono-sekai-wa-fukanzen-sugiru-ed-1` | LOOP／NACHERRY | ED1 | 2024-summer |

- 公開anime ID：`curated-152681`、`curated-163623`、`curated-166700`、`curated-170998`、`curated-170695`、`curated-166477`、`curated-163133`、`curated-167420`、`curated-168345`、`curated-163077`。動畫、用途、歌曲ID新增均0；更正18個原名、15個名義，補39筆詞／曲／編角色及22筆歌唱條目，角色數不等同唯一作者。官方影片外連、metadata、錄音及發行品新增均0，既有成果保留。
- 22筆既有ID、類型、序號、歌曲ID、影片、錄音／發行關係、歌曲日期、版本及平台連結保留；2,042個其他動畫JSON逐檔SHA-256相同。9筆實際讀取的既有歌曲來源更新（疑似ハーレム3、赤猫2、パリイ2、カフェ2），其餘來源日期維持。沒有應用程式、資料contract、依賴或部署設定變更。
- 義妹生活恢復天使たちの歌／fhána及水槽のブランコ／Kitri，原期AT-X週四21時、TOKYO MX22:30與22時地上波先行配信分開；現行ONAIR未明精確首播日，既有7月4日及基準來源保留。一般樂團成員及創作自介未推本曲個別職位。
- 疑似ハーレム恢復ブラウス／ゴホウビ、アドリブ／七倉 凛（CV：早見沙織）；原TV7月4日24:30（曆5日）。角色歌ってみた影片不當TV新用途，原ED2ブラウス歌曲身分可證，但特殊ED使用未取得清楚第一方逐話證據，季度暫空。
- 黄昏アウトフォーカス兩曲官方同頁核クランクアップ／山崎育三郎（詞曲尾崎雄貴、編Galileo Galilei）、Unchain×Unchain／Amber’s（詞豊島こうき、曲Amber’s、編Amber’s及徳永暁人）；原TV7月4日23:30與數位7月5日分開。ESCL-5991-92的25時間及instrumental為詳細收錄接點，未據此新增TV用途。
- 赤猫官網實際切換第1期核赤猫／水曜日のカンパネラ、詞曲ケンモチヒデフミ，以及本日のおすすめ／離婚伝説、詞曲編離婚伝説；現行第2期公告不套2024原期，首播日期沿用已存在有效來源，精確原TV時段待後續正式公告。
- パリイ官方同頁明列AMBITION／桜木舞華【ウタヒメドリーム】（CV：鈴木杏奈），詞Spirit Garden、曲岩橋星実、編竹田祐介；ノーギフテッド／ウタヒメドリーム オールスターズ詞ZAQ、曲ogappe、編奈良悠樹，本曲七位角色／CV逐一保存，不套一般現行團隊表。原TV7月4日24時（曆5日），CD另曲與lyric／live形式不推新用途或錄音。
- 女神咖啡廳第2期官網圖文／替代文字明列チャージ！／小玉ひかり及其詞曲、編Naoki Itai；なっちゃった！／アーリオ・オーリオ・エ・ペペロンチーノ詞曲編キノシタ。原TV7月4日24:26（曆5日）與25:26先行串流分開，第1期另頁不混用。
- 先輩原TV Music明列我がまま／くじら及あれが恋だったのかな feat. にしな／くじら，ED實際歌唱にしな；5月5日官方公告逐曲明詞曲くじら，不由一般詞曲編自介補編曲。2025電影大人になれない另期；原期ONAIR連結not found，7月5日首播沿用既有資料，沒有猜時段。
- NieR第2季度明列ブラックボックス／LiSA（詞曲秋田ひろむ、編出羽良彰）與灰ト祈リ／GEMS COMPANY；GEMS一般九人名單不當本曲全員歌唱，岡部／ヨコオ的評論與簡介未拆成未明逐曲職位。原TV7月5日23:30，地方台較晚播放不延伸歌曲原期。Weight of the World原ED2的逐話交叉另列第24話插曲，第一方身分／本期用途未明，保留原ED類型及ID、季度暫空，不由遊戲OST推同錄音。
- 地下城官網入口404，以Bushiroad製作方自有名義公告一次核マイクロレボリューション／TrySail（詞曲徳丸 凌、編最上清空及川島章裕）、ブループリント／ナナヲアカリ（詞ナユタセイジ及ナナヲアカリ、曲ナユタセイジ、編Hajime Taguchi）及原TV7月5日25:53（曆6日），未取鏡像或繞過限制。
- この世界は不完全すぎる官方STAFF／本曲評論核No Complete／Liyuu、LOOP／NACHERRY及兩位本曲歌唱村上奈津実、田中ちえ美；作品配樂總作者不充主題曲作者。原TV7月5日26:23（曆6日），10月5日追加串流與2025再播不增TV季度。
- 全目錄2,052部、4,636用途（4,530 OP／ED、96 IN、10 TS）全部有dataStatus；823筆三項基本欄位有兩類欄位證據，其餘3,813筆來源待細分。已逐批處理1,526唯一用途；2024夏現有190 OP／ED、已核65、詳細核心0／缺口65，38筆完全季度待核另列。快照分母與欄位具備不代表標準TV作品聯集已閉合。

### 來源、未解缺口與續查條件

- [義妹Music](https://gimaiseikatsu-anime.com/music/index.html)／[原期時段](https://gimaiseikatsu-anime.com/onair/index.html)、[疑似ハーレムMusic](https://gijiharem.com/music/index.html)／[原TV](https://gijiharem.com/)、[黄昏Music](https://tasogare-anime.com/music)／[原TV](https://tasogare-anime.com/onair)、[赤猫第1期切換頁MUSIC](https://ramenakaneko.com/)。
- [パリイMusic／七位角色](https://parry-anime.com/music/)／[原TV](https://parry-anime.com/)、[女神2 Music](https://goddess-cafe.com/music)／[原TV](https://goddess-cafe.com/)、[先輩TV Music](https://senpaiha-otokonoko.com/music/)／[逐曲詞曲公告](https://senpaiha-otokonoko.com/news/?id=65350)。
- [NieR第2季度Music](https://nierautomata-anime.com/music/)／[原TV](https://nierautomata-anime.com/onair/)／[第24話交叉曲表](https://www.mau2.com/anime/nierautomataver11a-2/ep/24)、[地下城製作方公告](https://prtimes.jp/main/html/rd/p/000007806.000014827.html)、[不完全世界曲目](https://www.konofuka.com/staffcast/)／[原TV與後續串流](https://www.konofuka.com/onair/)。其他有效交叉來源及日期沿用，不全面重查。
- ブラウス特殊ED經官方Music、逐話及藝人／唱片頁兩輪定向查找未明，歌曲身分與特殊ED用途證據分開；待該特殊用曲集數的原始片尾或官方逐話表再核。Weight of the World經原期官方及藝人定向查找仍缺第一方，本期逐話交叉列IN而舊用途列ED；待原片尾、官方本期OST對照或藝人明列本期用途再核，未觸發不反覆重搜或猜改分類。
- 各曲詞曲編、錄音、官方影片形式、收錄及確切平台在followUp保留本曲入口；未結構化的single／OST與版本仍標待補。原期TV資料不齊只保留該欄位缺口，其他已核歌曲不受阻。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、公開邊界245檔、ApiProvider 10部22筆、22筆ID／媒體與2,042個其他動畫JSON保留性、季度計數與diff檢查通過；20筆基本欄位證據、2筆特殊用途來源待確認及38筆全目錄季度待核一致。
- Chromium393×852驗10頁22組狀態、10組夏季歌單、舊羅馬字／新原名與角色搜尋、7組原TV時段、兩筆待核舊URL及七位角色名單；預設收合，無溢出、app errors或未同意影片iframe。
- in-app665像素實際收合／展開ノーギフテッド，2組狀態／1筆展開，七位角色CV、詞曲編、保留的8月30日基本交叉核對日期與新缺口記錄可見。手機及in-app實際截圖已檢視；Browser plugin不可用，以專案Chromium驗手機尺寸。
- 僅2024夏資料檔與checkpoint變更，沒有新季度、UI、contract、播放器、依賴或部署設定變更；本機不重跑全套E2E，正常PR／main仍含重要E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾均通過；本機通過不等於已部署。

預覽入口：`/anime/ore-wa-subete-wo-parry-suru-gyaku-kanchigai-no-sekai-saikyou-wa-boukensha-ni-naritai/`、`/anime/giji-harem/`、`/anime/nier-automata-ver1-1a-2nd-season/`、`/seasons/2024-summer/`。第68批接續頂部4部25筆；標準TV聯集、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料及checkpoint分類提交；[PR #159](https://github.com/kyeunga25/anisonary/pull/159)的quality／Workers通過，正常rebase合併。完整main來源`6bee6267c3094f1e35742b3908e85296f5f140e8`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch67-basics`與完整main來源／PR #159一致，第68批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部22筆通過。
- 正式站Chromium393×852實驗10頁22組狀態、10組夏季歌單、舊名／新原名與角色搜尋、7組原TV時段、兩筆待核舊URL及七位角色名單；無溢出、app errors或影片iframe。in-app665像素核2組狀態／1筆展開、ノーギフテッド七位角色及詞曲編、ブラウス特殊ED基本與季度缺口，收合／展開通過；兩種實際截圖均已檢視。
- annotated tag `batch67-basics`指向正式來源並已推送。第68批接續2024夏4部25筆；38筆完全季度待核、各筆use_quarters條件與詳細缺項保留，作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-68（正式驗收完成）

- 固定2020–2026標準TV基本階段及2026-10-14截止日維持；實際查閱2026-10-20。2024夏4部25筆既有用途及1筆新增插曲，共26筆基本原名／名義／用途有第一方及交叉欄位證據。同頁明列的創作一併保存，詳細階段不阻擋基本資料。
- 每筆dataStatus保存已記錄欄位、詳細缺項及具體續查條件；アーリャ4筆ED沿用有效官方影片來源與2026-08-30日期，沒有以整理日期代替實際核對日。第68批正常PR／main及實際部署已正式驗收，來源`91b33da`／`batch68-basics`；第69批範圍另行登記。

### 公開用途與實際差異

| 公開theme ID | 原名／名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `shy-tokyo-dakkan-hen-op-1` | WILLSHINE／PassCode | OP1 | 2024-summer |
| `shy-tokyo-dakkan-hen-ed-1` | そばにいるよ／シャイ／紅葉山テル（CV：下地紫野）＆小石川惟子（CV：東山奈央） | ED1 | 2024-summer |
| `shy-tokyo-dakkan-hen-ed-2` | 月篝／天王寺曖（CV：小岩井ことり） | ED2 | 2024-summer |
| `shy-tokyo-dakkan-hen-ed-3` | ボクらのLove & Peace／ミェンロン／リー＝ミンミン（CV：村瀬 歩） | ED3 | 2024-summer |
| `shy-tokyo-dakkan-hen-ed-4` | ウリプカ／スピリッツ／ペペシャ・アンドレアノワ（CV：能登麻美子） | ED4 | 2024-summer |
| `shy-tokyo-dakkan-hen-ed-5` | Angel In Black／レディ・ブラック／ピルツ・デュナン（CV：鈴代紗弓） | ED5 | 2024-summer |
| `shy-tokyo-dakkan-hen-ed-6` | One Day A Boy／スターダスト／ディヴィー＝W＝ジョン（CV：三木眞一郎） | ED6 | 2024-summer |
| `shy-tokyo-dakkan-hen-ed-7` | 月篝 ～満月 ver.～／天王寺曖（CV：小岩井ことり）＆ウツロ／天王寺昧（CV：上田 瞳） | ED7 | 2024-summer |
| `shy-tokyo-dakkan-hen-in-1` | Shiny Girl (Shy Cover)／シャイ／紅葉山テル（CV：下地紫野） | IN1 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-op-1` | 1番輝く星／アーリャ（CV：上坂すみれ） | OP1 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-1` | 学園天国／アーリャ（CV：上坂すみれ） | ED1 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-2` | 可愛くてごめん／アーリャ（CV：上坂すみれ） | ED2 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-3` | 想い出がいっぱい／アーリャ（CV：上坂すみれ） | ED3 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-4` | ハレ晴レユカイ／アーリャ（CV：上坂すみれ） | ED4 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-5` | 小さな恋のうた／アーリャ（CV：上坂すみれ） | ED5 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-6` | 秘密の言葉／アーリャ（CV：上坂すみれ）×花譜 | ED6 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-7` | ラブ・ストーリーは突然に／アーリャ（CV：上坂すみれ） | ED7 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-8` | CHE.R.RY／アーリャ（CV：上坂すみれ） | ED8 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-9` | ワールドイズマイン／アーリャ（CV：上坂すみれ） | ED9 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-10` | こいのうた／アーリャ（CV：上坂すみれ） | ED10 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-11` | 気まぐれロマンティック／アーリャ（CV：上坂すみれ） | ED11 | 2024-summer |
| `tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san-ed-12` | ハナモヨイ／アーリャ（CV：上坂すみれ） | ED12 | 2024-summer |
| `cardfight-vanguard-divinez-season-2-op-1` | 宿命／すとぷり | OP1 | 2024-summer, 2024-fall |
| `cardfight-vanguard-divinez-season-2-ed-1` | 端程山／MyGO!!!!! | ED1 | 2024-summer, 2024-fall |
| `madougushi-dahlia-wa-utsumukanai-op-1` | ちいさな蕾／岬 なこ | OP1 | 2024-summer |
| `madougushi-dahlia-wa-utsumukanai-ed-1` | Glitter／堀内まり菜 | ED1 | 2024-summer |

- 公開anime ID：`curated-171748`、`curated-162804`、`curated-165681`、`curated-168623`。新增動畫0、用途1；新增Shiny Girl角色cover連回既有原曲，沒有另計新創作。第1期`curated-155389`僅補原曲識別關聯`shy-op-1-song`一處，不計為本批重新核對第1期用途。更正20個原名、23個名義，補67筆詞／曲／編角色及27筆歌唱條目，角色數不等於唯一作者數。
- SHY月篝及満月ver.共用歌曲識別，保留兩個既有用途、不同歌唱名義與已證實版本標籤。25筆既有ID、類型、序號、影片、錄音／發行關係、日期及平台連結保留；官方影片外連、影片metadata、結構化錄音及發行品新增均0。2,047個其他動畫JSON逐檔SHA-256相同，另第1期SHY精確驗證僅一處歌曲識別新增。既有來源物件與日期更新0，不將新讀取的頁面套到全部來源。
- SHY東京奪還編原TV7月1日24時（曆2日），官方9月10日公告第23話9月16日、第24話9月23日24:10；9月24日OST不當秋季TV。MUSIC同頁明列WILLSHINE／PassCode、7種ED名義與詞曲編，OST LZC-2823第29曲明列Shiny Girl (Shy Cover)插曲及下地紫野歌唱、Misaki詞曲、小山 寿編曲；原唱MindaRyn與角色版分開。一般PassCode成員表不當逐曲全員歌唱；OST的TV Size／Anime Size及其他曲目沒有直接生成新用途／錄音。
- アーリャ第1期OP恢復1番輝く星／アーリャ（CV：上坂すみれ），詞曲編白戸佑輔；8首ED依官方原頁保存原名及明列創作，秘密の言葉明列花譜與アーリャ雙人歌唱。原頁ED曲表只有前8首，後4首ワールドイズマイン、こいのうた、気まぐれロマンティック、ハナモヨイ沿用已審核官方影片與2026-08-30日期，詞曲編留待深化，未從翻唱原唱推編曲。原第1期ONAIR明列7月3日23:30，不套第2期公告年份或時段。
- Vanguard Divinez Season2官方原期MUSIC核宿命／すとぷり（曲Tom-H@ck、編RINZO）、端程山／MyGO!!!!!（詞藤原優樹、曲編トミタカズキ），一般團員名單未當本曲歌唱表。原期TV7月6日08時；Bushiroad原公告文字明9月28日第11話，KADOKAWA節目表明10月5日第12話、10月12日最終話，原期兩曲保存夏／秋用途；PDF未成功顯示的圖像日期沒有當作已讀證據。節目表僅作播出交叉，不作歌曲原名或名義證據。
- Vanguard OP作詞有第一方異文：原MUSIC列koshi、原STAFF列Tom-H@ck，作詞保持未確認，公開followUp列明兩頁及續查條件；不因同頁可取到曲編而猜選作詞。
- ダリヤ兩頁一次核ちいさな蕾／岬 なこ（詞PA-NON、曲山田智和、編渡辺拓也）、Glitter／堀内まり菜（詞つむぎしゃち、曲編夢見クジラ）。原TV7月6日21時AT-X；10月1日Netflix追加串流不延伸秋季TV，CD另曲不當已用插曲。
- 全目錄2,052部、4,637用途（4,530 OP／ED、97 IN、10 TS）全部有dataStatus；849筆三項基本欄位有兩類欄位證據，其餘3,788筆來源待細分。已逐批處理1,552唯一用途；2024夏現有190 OP／ED、已核90、詳細核心0／缺口90，秋因Vanguard兩曲跨季為177 OP／ED、已核165、詳細核心1／缺口164。38筆完全季度待核、近期6筆具體跨季缺口與其他use_quarters條件分開保留；快照不表示標準TV作品聯集閉合。

### 來源、未解缺口與續查條件

- [SHY第2期MUSIC／OST](https://www.shy-anime.com/music/2nd/)／[原期ONAIR](https://www.shy-anime.com/onair/)／[第23／24話原TV公告](https://www.shy-anime.com/news/1290.html)／[本期歌曲用途交叉](https://anison.online/anime/4721)。詳細階段重用LZC-2823與LAMR-34034／4034補音源、版本、收錄及確切平台；Shy Cover不自動代表full／TV，原唱與角色錄音同一性不猜造。
- [アーリャ第1期OP](https://roshidere.com/music/index.html)／[ED前8曲](https://roshidere.com/music/ed.html)／[第1期TV](https://roshidere.com/onair/index1.html)。後4曲有效官方影片沿用：[ED9](https://www.youtube.com/watch?v=HrHPgipTDAU)、[ED10](https://www.youtube.com/watch?v=tqdEDUyrJ1k)、[ED11](https://www.youtube.com/watch?v=-5HZqR6OfYI)、[ED12](https://www.youtube.com/watch?v=spO_gsp-uUs)，日期2026-08-30維持；待原期完整ED表、官方單曲／BD逐曲表或詳細階段取得明列職位再補。
- [Vanguard原期MUSIC](https://anime.cf-vanguard.com/vgd/music/season-2/)／[原期STAFF](https://anime.cf-vanguard.com/vgd/staff-cast/season-2/)／[原期TV](https://anime.cf-vanguard.com/vgd/onair/season-2/)／[Bushiroad第11話公告文字](https://bushiroad.co.jp/media/f760c076e03630ba)／[原期逐話播出交叉](https://thetv.jp/program/0001048341/plot/)。宿命作詞兩頁異文已兩輪定向核對，待原single一致逐曲表、實際原始歌曲credit或官方更正再核，不輪流重搜歌詞站。
- [ダリヤOP](https://dahliya-anime.com/music/op)／[ED](https://dahliya-anime.com/music/ed)／[原TV](https://dahliya-anime.com/onair/)。詳細階段重用兩首官方single與明列版本資料補收錄、曲序、完整／TV、影片形式及確切平台，沒有從MV、making或digital日期推錄音長度與TV季度。
- 所有曲目尚未結構化的音源、收錄、官方影片形式及確切平台仍在dataStatus／followUp標記待補；既有metadata或外連不表示本批新增影片或所有版本齊備。一般藝人簡介不當逐曲職位，配樂總作者不充主題曲作者。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、公開邊界245檔、ApiProvider 4部26筆、25筆既有ID／媒體、同曲版本／角色cover關聯、第1期精確單處識別變更與2,047個其他動畫JSON保留性通過；季度計數及來源日期一致。
- Chromium393×852驗4頁26組狀態、7組夏／秋歌單、6組新原名／舊羅馬字搜尋、4組原TV時段、後4曲舊核對日期、作詞異文、満月兩位角色與新增插曲。初始詳情收合，無橫向溢出、app errors或未同意影片iframe。
- in-app665像素實際收合／展開新增Shiny Girl角色版，9組狀態／1筆展開；角色、詞曲編、版本、原唱關聯、欄位狀態及續查條件可見，無iframe或溢出。手機及in-app實際截圖已檢視；Browser plugin不可用，以專案Chromium驗手機尺寸。
- 僅2024夏主資料、2024秋跨季registry、2023秋原曲識別關聯及checkpoint變更；沒有新季度、UI、contract、播放器、依賴或部署設定變更，本機不重跑全套E2E，正常PR／main保留重要E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾均通過；本機通過不等於已部署。

預覽入口：`/anime/shy-tokyo-dakkan-hen/#theme-shy-tokyo-dakkan-hen-in-1`、`/anime/cardfight-vanguard-divinez-season-2/`、`/anime/tokidoki-bosotto-rossiya-go-de-dereru-tonari-no-alya-san/`、`/seasons/2024-summer/`及`/seasons/2024-fall/`。第69批接續頂部10部27筆；標準TV作品聯集、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料及checkpoint分類提交；[PR #160](https://github.com/kyeunga25/anisonary/pull/160)的quality／Workers通過，正常rebase合併。完整main來源`91b33da633eacf39de643644aba27f717533ac36`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch68-basics`與完整main來源／PR #160一致，第69批資料未混入。
- 正式站80條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 4部26筆通過，另精確核第1期SHY原曲識別JSON。
- 正式站Chromium393×852實驗4頁26組狀態、7組夏／秋歌單、6組新原名／舊名搜尋、4組原TV時段、後4曲舊核對日期、Vanguard作詞異文、満月兩位角色及新增插曲，無溢出、app errors或影片iframe。in-app665像素核9組狀態／1筆展開、新插曲角色／詞曲編／原唱關聯、續查條件及收合／展開；兩種實際截圖均已檢視。
- annotated tag `batch68-basics`指向正式來源並已推送。第69批接續2024夏10部27筆；38筆完全季度待核、各筆use_quarters條件與詳細缺項保留，作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-69（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。2024夏10部27筆既有用途及2筆新增插曲，共29筆；26筆三項基本欄位具第一方／交叉證據，3筆特殊用途保留第一方缺口。詳細欄位不阻擋其他已確認資料。
- 每筆公開dataStatus保留欄位狀態與具體followUp。舊官方影片與交叉來源有效日期沿用；新角色CV映射與原歌唱影片依各自日期分開，沒有更新未重新查閱的影片來源。第69批正常PR／main及實際部署已正式驗收，來源`61abb7f`／`batch69-basics`，第70批範圍另行登記。

### 公開用途與實際差異

| 公開theme ID | 原名／名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `mob-kara-hajimaru-tansaku-eiyuutan-op-1` | UpStart／天月-あまつき- | OP1 | 2024-summer |
| `mob-kara-hajimaru-tansaku-eiyuutan-ed-1` | ストロボ・ファンタジー／May'n | ED1 | 2024-summer |
| `mob-kara-hajimaru-tansaku-eiyuutan-ed-2` | MOVE ON BABY／SMILE PRINCESS | ED2 | 2024-summer |
| `tensui-no-sakuna-hime-op-1` | 晴々！／いきものがかり | OP1 | 2024-summer |
| `tensui-no-sakuna-hime-ed-1` | ORIGAMI／Little Glee Monster | ED1 | 2024-summer |
| `tensui-no-sakuna-hime-ed-2` | ヤナト田植唄／Yui、Myrthe、Sakuna-hime、Tauemon、Kinta、Kaimaru | ED2 | 待核；保留全目錄及動畫頁 |
| `nige-jouzu-no-wakagimi-op-1` | プランA／DISH// | OP1 | 2024-summer |
| `nige-jouzu-no-wakagimi-ed-1` | 鎌倉STYLE／ぼっちぼろまる | ED1 | 2024-summer |
| `shoushimin-series-op-1` | スイートメモリー／Eve | OP1 | 2024-summer |
| `shoushimin-series-ed-1` | 意解けない／ammo | ED1 | 2024-summer |
| `tsue-to-tsurugi-no-wistoria-op-1` | Fire and Fear／PENGUIN RESEARCH | OP1 | 2024-summer |
| `tsue-to-tsurugi-no-wistoria-ed-1` | フローズン／TRUE | ED1 | 2024-summer |
| `tsue-to-tsurugi-no-wistoria-ed-2` | Wistoria: Wand and Sword (Vocal ver.)／Jun Futamata | ED2 | 待核；保留全目錄及動畫頁 |
| `shikanoko-nokonoko-koshitantan-op-1` | シカ色デイズ／シカ部 | OP1 | 2024-summer |
| `shikanoko-nokonoko-koshitantan-ed-1` | シカせんべいのうた／鹿乃子のこ（CV：潘めぐみ）、虎視虎子（CV：藤田咲） | ED1 | 2024-summer |
| `shikanoko-nokonoko-koshitantan-ed-2` | 野生のシカ／虎視虎子（CV：藤田咲） | IN2 | 2024-summer |
| `na-nare-hana-nare-op-1` | Cheer for you!／PoMPoMs | OP1 | 2024-summer |
| `na-nare-hana-nare-ed-1` | with／PoMPoMs | ED1 | 2024-summer |
| `na-nare-hana-nare-in-1` | FeverFestaFever!／PoMPoMs | IN1 | 2024-summer |
| `na-nare-hana-nare-ed-2` | YOU for YOU／PoMPoMs | IN2 | 2024-summer |
| `na-nare-hana-nare-ed-3` | 花になれ／PoMPoMs | IN3 | 2024-summer |
| `na-nare-hana-nare-in-4` | スロウスターター／小父内涼葉（CV：中島由貴）、谷崎詩音（CV：佳原萌枝） | IN4 | 2024-summer |
| `isekai-yururi-kikou-kosodate-shinagara-boukensha-shimasu-op-1` | ゆるリング Travel days／手羽先センセーション | OP1 | 2024-summer |
| `isekai-yururi-kikou-kosodate-shinagara-boukensha-shimasu-ed-1` | MAKUAKE／ゴホウビ | ED1 | 2024-summer |
| `isekai-shikkaku-op-1` | 修羅日記／伊東歌詞太郎 | OP1 | 2024-summer |
| `isekai-shikkaku-ed-1` | さよなら、素晴らしき世界よ／前島麻由 | ED1 | 2024-summer |
| `koi-wa-futago-de-warikirenai-op-1` | パラレルなハート／内田真礼 | OP1 | 2024-summer |
| `koi-wa-futago-de-warikirenai-ed-1` | ハニーシトロン -Strings Arrange-／神宮寺琉実（CV：後本萌葉）、神宮寺那織（CV：内田真礼） | ED1 | 待核；保留全目錄及動畫頁 |
| `koi-wa-futago-de-warikirenai-ed-2` | ハニーシトロン／神宮寺琉実（CV：後本萌葉）、神宮寺那織（CV：内田真礼） | ED2 | 2024-summer |

- 公開anime ID：`curated-172416`、`curated-175868`、`curated-162896`、`curated-173295`、`curated-174576`、`curated-175977`、`curated-170891`、`curated-171031`、`curated-152137`、`curated-167144`。新增動畫0、用途2、歌曲識別2；兩筆新插曲為FeverFestaFever!及スロウスターター第8話雙人版。更正19個原名、13個名義，補52筆詞／曲／編角色及29筆歌唱條目；角色數不等於唯一作者數。
- 野生のシカ、YOU for YOU及花になれ依官方插曲稱法改為IN，原3個ED形式的公開ID及序號保留，舊深連結仍可用；不是新增3首歌曲。後兩首的交叉特殊片尾稱法保留於用途說明。既有3組影片對應移至更正用途，影片ID、外連與原核對日期保留；野生のシカ舊tv_size與花になれ舊creditless_ed沒有充分形式證據，改為other，沒有推full／TV或新增錄音。YOU for YOU既有官方音訊項目保持official_audio。
- 27筆舊用途ID、序號、日期、平台及錄音／發行關係保留；Honey Citron原曲與Strings Arrange共用歌曲識別及已證實版本標籤，弦樂版TV用途另待核。2,042個其他動畫JSON逐檔SHA-256相同；影片／外連新增0、結構化錄音與發行品新增0，既有成果保留。
- 10筆既有歌曲來源實際更新：しかのこ3、ウィストリア3、ゆるり2、異世界失格2，均為已實際讀取的原期官網／日期事實；未重新讀取的官方影片與舊交叉來源日期保持。逃げ上手及異世界失格的原曲身分沿用已審閱官方影片與2026-08-30日期，沒有用現行第2期頁替代第1期。
- モブ官方同頁明UpStart／天月-あまつき-、ストロボ・ファンタジー／May'n及詞曲編；第7話公告明MOVE ON BABY／SMILE PRINCESS、詞只野菜摘、曲編広川恵一與七位本曲歌手留言，一次保存。原TV7月6日22時，single另曲PRINCESS PRIDE等不當TV用途。
- サクナ兩首原期OP／ED恢復原名及名義，原TV7月6日23時至9月28日；ヤナト田植唄交叉列第3／12話插曲，第一方角色版／逐話曲表仍未明，保留舊ED2待核，不由遊戲錄音、配樂作者或一般CV表推本曲credit。朝倉さや第13話另一版本與2026特殊篇分開，沒有猜補新用途。
- 逃げ上手兩曲恢復プランA／DISH//及鎌倉STYLE／ぼっちぼろまる；原期7月6日首播沿用舊有效證據，精確時段待官方原期公告，現行2026第2期曲目及remix不套2024。小市民恢復スイートメモリー／Eve、意解けない／ammo，ammo本曲留言明詞與歌唱岡本優星；6月7日原官方公告核第1期7月6日深夜1:30（曆7日），與現行2025第2期ONAIR分開。
- ウィストリア原第1期首頁保留7月7日16:30，現行ONAIR為2025再播，兩曲Fire and Fear／PENGUIN RESEARCH及フローズン／TRUE官方各頁可核。一般樂團或TRUE作詞家簡介未當逐曲創作；舊Vocal ver.特殊ED的本期第一方用途未取得，季度暫空。
- しかのこ官方Music明OP四位角色／CV及兩曲詞曲編，原TV7月7日23:30更正先前7月3日ABEMA先行串流日期。野生のシカ角色CV依官網人物資料與原曲歌唱對照，創作未從交叉表單獨移植。
- なれなれ同頁一次核OP／ED及第3／5／8／12話插曲與明列職位，新增第5話FeverFestaFever!／PoMPoMs及第8話スロウスターター／小父内涼葉（中島由貴）、谷崎詩音（佳原萌枝）。第2話同名版本、go your way等尚缺適用第一方逐曲證據，不猜新增；with編曲依官方PRIMAGIC。原TV7月7日23:45，地方台後續及一挙再播不增原期季度。
- ゆるり官方同頁核ゆるリング Travel days／手羽先センセーション與詞曲編Funta7，MAKUAKE／ゴホウビ明詞スージー、曲スージー及ゴホウビ，製作不當編曲。原TV7月7日深夜1:50（曆8日）與先行WEB分開。異世界失格原AT-X7月9日23:30、地上波24:30與串流24時分開；修羅日記／伊東歌詞太郎及さよなら、素晴らしき世界よ／前島麻由沿用原有效影片證據。
- ふたきれOPパラレルなハート／内田真礼與EDハニーシトロン／神宮寺姊妹原頁明列詞曲編；音樂集J(un)-pod分列原曲與Strings Arrange，收錄不證明弦樂版TV特殊ED，該用途季度暫空，不將原ED編曲移植弦樂版。原TV7月10日23:30 AT-X與地上波／ABEMA25時分開。
- 全目錄2,052部、4,639用途（4,527 OP／ED、102 IN、10 TS）全部有dataStatus；875筆三項基本欄位有兩類欄位證據，其餘3,764筆來源待細分。已逐批處理1,581唯一用途；2024夏因分類與待核為184 OP／ED、已核111、詳細核心0／缺口111，另9筆已確認夏季插曲分列，不將季度OPED減少當資料刪除。41筆完全季度待核、近期6筆具體跨季缺口及其他use_quarters條件分開保留，標準TV作品聯集未閉合。

### 來源、缺口與續查條件

- [モブMusic](https://mobkara.com/music/)／[第7話特殊ED與七位歌手](https://mobkara.com/news/post-286/)／[原TV](https://mobkara.com/onair/)。詳細階段重用XNDD-00020/B、00021、00022/B、00023及特殊ED原配信入口補音源與收錄；single另曲及MV不推新用途／錄音。
- [サクナMusic](https://sakuna-anime.com/music/)／[原TV](https://sakuna-anime.com/onair/)／[動畫歌曲交叉](https://zh.wikipedia.org/wiki/天穗之咲稻姬)。角色版ヤナト田植唄經原期Music及定向查找未明，待原始片尾／本期OST曲表；曲名與使用分類的交叉資訊不充第一方，遊戲版與別話歌手版本分開。
- 逃げ上手沿用已審閱[原OP](https://www.youtube.com/watch?v=l1HeItO98FI)／[原ED](https://www.youtube.com/watch?v=VNl4J9b_xhE)與原2026-08-30日期，現行Music／ONAIR及兩輪原期查找未有清楚原時段，待第1期可讀官方公告才補；不重搜已確認曲目。[小市民Music](https://shoshimin-anime.com/music/index.html)／[第1期原TV公告](https://shoshimin-anime.com/news/index00160000.html)可重用TFCC-81084–81086等入口進行後續深化。
- [ウィストリア原OP](https://wistoria-anime.com/1st/music/opening/)／[原ED](https://wistoria-anime.com/1st/music/ending/)／[第1期原時段](https://wistoria-anime.com/1st/)。Vocal ver.經Music及定向查找未有本期逐話第一方，待原期OST或原片尾；VVCL-2527–2529、LACM-24608／34608的版本／收錄留詳細階段。
- [しかのこMusic／角色名單](https://www.anime-shikanoko.jp/music/)／[原TV與先行串流](https://www.anime-shikanoko.jp/)／[逐話用途交叉](https://zh.wikipedia.org/wiki/鹿乃子乃子乃子虎视眈眈)。野生のシカ沿用[原官方影片](https://www.youtube.com/watch?v=OItaYHRaM9g)與8月30日日期；其他逐話插曲原入口未提供可讀曲表，第一方逐曲證據出現才補，沒有以MV或交叉表單獨新增。
- [なれなれ逐曲配信表](https://narenare-anime.com/music/)／[原TV](https://narenare-anime.com/onair/)／[原名與逐話交叉](https://zh.wikipedia.org/wiki/亦叶亦花)。YOU for YOU及花になれ依官方插曲稱法分類，特殊片尾稱法與第9話使用待原始credit對照；スロウスターター本次只登記第8話雙人名義，第2話與其他歌唱版本保留詳細續查，不從同名推同錄音。
- [ゆるり同頁兩曲與TV](https://isekai-yururi-anime.jp/index.php)／[異世界失格原TV及主題曲名義](https://isekaishikkaku.com/)，原曲影片來源日期保持。[ふたきれOP](https://futakire.com/music/opening.html)／[ED](https://futakire.com/music/ending.html)／[原曲與弦樂版收錄](https://futakire.com/music/ost.html)／[原TV](https://futakire.com/onair.html)；Strings Arrange待原片尾或官方逐話表確認TV使用及實際編曲，LACA-19052～3總配樂作者不當逐曲編曲。
- 各曲未結構化音源、其他影片形式、收錄與確切平台保留每曲followUp。缺少可選欄位不阻擋26筆基本資料；3筆第一方用途缺口保留、其餘前批未觸發缺口不重查。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部29筆及保留性通過；27個舊ID、3筆IN訂正、2個媒體形式保守訂正、2,042個其他動畫JSON、來源分開日期與Honey Citron同曲關聯一致。
- Chromium393×852驗10頁29組狀態、10組夏季歌單、4組OPED／IN篩選、8組新原名／舊羅馬字搜尋、9組原TV時段、3筆待核舊深連結與原影片8月30日日期；頁面初始詳情收合，無橫向溢出、app errors或未同意影片iframe。六曲動畫頁沿用緊湊歌單與按需展開。
- in-app665像素實際收合／展開新增スロウスターター，6組狀態／1筆展開；兩位角色CV、詞曲編、來源與本曲續查條件可見，舊ED2／ED3入口顯示插曲；手機及in-app實際截圖已檢視。Browser plugin不可用，以專案Chromium驗手機尺寸。
- 僅2024夏資料、3筆更正用途的既有影片對應與checkpoint變更；沒有新季度、UI、contract、播放器行為、依賴或部署設定變更，本機不額外重跑全套E2E，正常PR／main保留重要E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾均通過；本機通過不等於已部署。

預覽入口：`/anime/na-nare-hana-nare/#theme-na-nare-hana-nare-in-4`、`/anime/shikanoko-nokonoko-koshitantan/#theme-shikanoko-nokonoko-koshitantan-ed-2`、`/anime/koi-wa-futago-de-warikirenai/`及`/seasons/2024-summer/`。第70批接續頂部4部26筆；作品聯集、基本階段、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料及checkpoint分類提交；[PR #161](https://github.com/kyeunga25/anisonary/pull/161)的quality／Workers通過，正常rebase合併。完整main來源`61abb7f6233e12af9f73f7a98c1c96380ad1f7bf`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch69-basics`與完整main來源／PR #161一致，第70批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部29筆通過。
- 正式站Chromium393×852驗10頁29組狀態、10組夏季歌單、4組OPED／IN篩選、8組舊名／新原名搜尋、9組原TV時段、3筆待核舊深連結及原影片日期，無溢出、app errors或影片iframe。in-app665像素核6組狀態／1筆展開、新插曲兩位角色CV／詞曲編／具體續查及原ED2／ED3入口顯示插曲，收合／展開通過；兩種實際截圖均已檢視。
- annotated tag `batch69-basics`指向正式來源並已推送。第70批接續2024夏4部26筆；41筆完全季度待核、各筆use_quarters條件與詳細缺項保留，作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-70（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。2024夏4部26筆既有用途：22筆基本原名、名義與用途具第一方／交叉欄位證據，4筆特殊用途尚缺第一方確認；詳細欄位不阻擋其餘已確認資料。
- 每曲dataStatus記錄現有欄位、未知項目及具體續查條件；有效舊來源與2026-08-30影片日期沿用，新曲目／角色資料依實際日期另存。第70批正常PR／main與實際部署已正式驗收，來源`34517f6`／`batch70-basics`。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-op-1` | バーチャル・ショータイム！／心音淡雪（CV：佐倉綾音）＆シュワちゃん（CV：佐倉綾音） | OP1 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-1` | シャンパンになりきれない私を／心音淡雪（CV：佐倉綾音） | ED1 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-2` | 男と女のラブゲーム／心音淡雪（CV：佐倉綾音）、宇月 聖（CV：小林ゆう） | ED2 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-3` | スイートマジック／祭屋 光（CV：Machico） | ED3 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-5` | 踊る赤ちゃん人間／山谷 還（CV：茅野愛衣） | ED5 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-6` | ふたつの星／神成シオン（CV：諸星すみれ）、宇月 聖（CV：小林ゆう） | ED6 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-7` | ノットボッチ...夏／柳瀬ちゃみ（CV：菊池紗矢香） | ED7 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-8` | コバルトメモリーズ／彩 ましろ（CV：水野 朔） | ED8 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-9` | 空色の指先／苑風エーライ（CV：M・A・O） | ED9 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-10` | 2001年のゲーム・キッス／昼寝ネコマ（CV：大橋彩香） | ED10 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-11` | 冬の日のエトランゼ／相馬有素（CV：田所あずさ） | ED11 | 2024-summer |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-12` | Live Start ALL STAR ver.／Live-ON CAST | ED12 | 待核；保留全目錄及動畫頁 |
| `vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-4` | ライブスタート／Live-ON CAST | IN4 | 2024-summer |
| `make-heroine-ga-oosugiru-op-1` | つよがるガール feat. もっさ(ネクライトーキー)／ぼっちぼろまる | OP1 | 2024-summer |
| `make-heroine-ga-oosugiru-ed-1` | LOVE 2000／八奈見杏菜（CV：遠野ひかる） | ED1 | 2024-summer |
| `make-heroine-ga-oosugiru-ed-2` | CRAZY FOR YOU／焼塩檸檬（CV：若山詩音） | ED2 | 2024-summer |
| `make-heroine-ga-oosugiru-ed-3` | feel my soul／小鞠知花（CV：寺澤百花） | ED3 | 2024-summer |
| `make-heroine-ga-oosugiru-ed-4` | つよがるガール feat. もっさ(ネクライトーキー)／ぼっちぼろまる | ED4 | 待核；保留全目錄及動畫頁 |
| `atri-my-dear-moments-op-1` | あの光／乃木坂46 | OP1 | 2024-summer |
| `atri-my-dear-moments-ed-1` | YESとNOの間に／22/7 | ED1 | 2024-summer |
| `atri-my-dear-moments-ed-2` | Dear Moments／アトリ（CV：赤尾ひかる） | ED2 | 待核；保留全目錄及動畫頁 |
| `atri-my-dear-moments-ed-3` | 光放て！／柳 麻美 | ED3 | 待核；保留全目錄及動畫頁 |
| `naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka-op-1` | 世界輪廻／Unlucky Morpheus | OP1 | 2024-summer |
| `naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka-ed-1` | 途切れないで／好芻（SUSU） | ED1 | 2024-summer |
| `naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka-ed-2` | 愛、アムネシア／アーバンギャルド | ED2 | 2024-summer |
| `naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka-ed-3` | UMBRA／ELFENSJóN | ED3 | 2024-summer |

- 公開anime ID：`curated-160488`、`curated-171457`、`curated-154963`、`curated-167419`。新增動畫、用途、歌曲、影片外連、結構化音源與發行品均0；更正20個原名、21個名義，補16筆詞／曲／編角色及25筆歌唱條目，角色條目不等於唯一作者數。
- ライブスタート依官方劇中歌稱法改為IN4，保留原ED4形式的公開ID、序號、影片ID及深連結；既有影片對應移至IN4。官方short MV保存music_video，ATRI兩支紀念影片保存pv，原tv_size標記不再推定音源長度。不同影片不另增歌曲／錄音。
- 負けヒロイン同一首つよがるガール的OP及待核特殊ED共用原OP歌曲識別，兩用途ID及各影片保留；MV不自動另算一首。VTuber ALL STAR缺少精確版本第一方資料，沒有猜造日文版名或錄音關係。
- 26個舊用途ID、序號、原日期、已存錄音／發行與平台項目均保留；2,048個其他動畫JSON逐檔SHA-256相同。僅なぜ僕4筆舊官網歌曲來源因實際讀取更新，其餘舊來源物件／日期保持。
- 全目錄2,052部、4,639用途（4,526 OP／ED、103 IN、10 TS）全部有dataStatus；897筆基本欄位有兩類欄位證據，其餘3,742筆來源待細分。已逐批處理1,607唯一用途。2024夏現179 OP／ED、已核132、詳細核心0／缺口132，另10筆夏季插曲；分母變動來自1筆分類更正與4筆待核季度移出，沒有刪除歌曲。45筆完全季度待核及30筆非空季度續查分開；近期6筆具體跨季缺口與ATRI2筆未明後段日期不混算。

### 來源、缺口與續查條件

- VTuber：[本期Music](https://vden.jp/music/index.html)明列OP兩角色名義及劇中歌ライブスタート／Live-ON CAST；[第1卷](https://vden.jp/bd/index.html)、[第2卷](https://vden.jp/bd/02.html)、[第3卷](https://vden.jp/bd/03.html)附エンディングテーマソングCD一次核10首角色版ED及CV。OP兩名義同為佐倉綾音，並非兩位真人歌手；Live-ON CAST未取得本曲個別歌唱表，作品全CV名單不套逐曲。原TV依[ONAIR](https://vden.jp/onair/index.html)7月7日23:30 AT-X，地上波24:30及串流24時分開，BD發售月份不當用曲季度。詳細階段重用ZMXZ-17711–17713／ZMBZ-17721–17723本角色版逐曲表補詞曲編、版本及收錄。ALL STAR經三卷曲表及定向查找仍未明，待明列該版本的官方配信或原始片尾才補用途／版本關係；兩輪後不為此阻擋其餘12筆。
- 負けヒロイン：[原期OP](https://makeine-anime.com/music/)明つよがるガール feat.もっさ、ぼっちぼろまる詞曲編及兩位歌唱；[Ending](https://makeine-anime.com/music/ending.html)／[Album](https://makeine-anime.com/music/album.html)明LOVE 2000、CRAZY FOR YOU、feel my soul三位角色cover及CV，其他專輯曲不當TV用途。[原ONAIR](https://makeine-anime.com/onair/)7月13日24:30（曆14日），首頁現行第2期不套2024原期。OP再作特殊ED經原期Ending及定向查找未有第一方逐話證據，待原片尾／官方用曲表；AICL-4600及SVWC-70670版本／收錄留詳細階段，本角色編曲不抄原唱。
- ATRI：[OP](https://atri-anime.com/music/)明あの光／乃木坂46，詞秋元康、曲編BASEMINT；[ED](https://atri-anime.com/music/ed.html)明YESとNOの間に／22/7，詞秋元康、曲YU-JIN及SHIN、編YU-JIN，一般成員留言不當全曲歌唱表。[ONAIR](https://atri-anime.com/onair/)7月13日24時（曆14日），[原第13話Story](https://atri-anime.com/story/?id=13)未明日期，定向原期日期查找未明後段TV，兩曲保持已核夏季並記use_quarters觸發，不以10月5日PV公告日判秋季。既有[Dear Moments官方Log06 PV](https://www.youtube.com/watch?v=wbKsxfbWXWY)及8月30日核對日期保留，僅明アトリ／赤尾ひかる本曲名義；[光放て！公告](https://atri-anime.com/news/?article_id=66359)明柳麻美與詞紺野アスタ、曲編松本文紀，但兩支PV不證明TV的特殊ED／插曲。待原片尾／官方逐話曲表與實際日期才補兩個用途季度，遊戲原曲及TV錄音另核。
- なぜ僕：[原官網同頁](https://www.nazeboku.com/)一次核世界輪廻／Unlucky Morpheus、途切れないで／好芻、愛、アムネシア／アーバンギャルド、UMBRA／ELFENSJóN的OP／三ED及7月13日22:30 TV；好芻既有SUSU拼寫保留搜尋。作品總配樂Akiyoshi Yasuda不是各主題曲作者；詞曲編、個別歌唱、音源及收錄待原曲逐曲資料，不為詳細缺項另作廣泛搜尋。
- 各歌可選詳細欄位保留followUp；4筆第一方特殊用途缺口與ATRI2筆後段日期已到兩輪定向界線，只有相應官方逐話／版本資料出現才續查，其餘前批未觸發缺口不重查。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 4部26筆、舊ID／媒體／來源日期保留性、897筆基本狀態及全28季度計數通過；26筆均有逐曲followUp，22筆基本欄位證據與4筆用途待核如實區分。
- Chromium393×852驗4頁26組狀態、5組季度歌單（含ATRI秋季0筆）、4組OPED／IN篩選、8組新原名／舊拼寫搜尋、4組原TV資料、4筆待核舊深連結與既有影片日期；頁面初始詳情收合，無橫向溢出、app errors或未同意影片iframe。私用QA依實際24:00／24:30顯示核對，未因日期正規化假設改正常程式。
- in-app665像素核13組狀態、1筆展開及原ED4入口顯示插曲／MV／Live-ON CAST個別歌唱續查；實測收合／展開、用途篩選顯示1／13及回全部13／13。手機角色雙人歌唱及in-app緊湊列表實際截圖已檢視。Browser plugin不可用，以專案Chromium驗手機尺寸。
- 僅2024夏資料、1筆更正用途的既有影片對應／3筆影片形式及checkpoint變更；沒有新季度、UI、contract、播放器行為、依賴或設定變更，本機不額外重跑全套E2E，正常PR／main保留重要E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾均通過；本機通過不等於已部署。

預覽入口：`/anime/vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta/#theme-vtuber-nanda-ga-haishin-kiri-wasuretara-densetsu-ni-natteta-ed-2`、`/anime/make-heroine-ga-oosugiru/`、`/anime/atri-my-dear-moments/`及`/seasons/2024-summer/`。第71批先2024夏7部16筆，再春3部6筆；作品聯集、基本階段、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料及checkpoint分類提交；[PR #162](https://github.com/kyeunga25/anisonary/pull/162)的quality／Workers均通過，正常rebase合併。完整main來源`34517f65c421457ce49b8b094161115eefee11ce`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch70-basics`及完整main來源／PR #162，第71批資料未混入。
- 正式站78條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 4部26筆通過。
- 正式站Chromium393×852驗4頁26組狀態、5組季度歌單（ATRI秋季0筆）、4組用途篩選、8組新舊名搜尋、4組原TV及4筆待核深連結，無溢出、app errors或未同意影片iframe。in-app665像素核13組狀態／1筆展開，原ED4入口顯示插曲、short MV及Live-ON CAST個別歌唱續查，實測收合／展開及1／13篩選；手機雙人角色演唱與in-app實際截圖均已檢視。
- annotated tag `batch70-basics`指向正式來源並已推送。第71批先夏7部16筆、再春3部6筆；45筆完全季度待核、6筆近期具體跨季缺口、ATRI兩曲後段日期與各筆詳細條件保留，作品聯集及2020–2026基本階段未完成。

## 2020-2026-tv-basics-71（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。2024夏7部16筆、春3部6筆，共10部22筆既有用途；20筆基本原名、演唱名義與用途具第一方／交叉欄位證據，Rick and Morty兩曲保留第一方逐曲缺口。詳細缺項不阻擋其餘基本資料。
- 每曲dataStatus保存現有欄位、缺項及具體followUp。未重讀的官方影片及交叉來源日期保留，原期TV、先行串流、其他地區／再播及恢復播出分開；第71批正常PR／main與實際部署已正式驗收，來源`c49cb5e`／`batch71-basics`。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `kimi-to-boku-no-saigo-no-senjou-arui-wa-sekai-ga-hajimaru-seisen-season-ii-op-1` | セナカアワセ／AliA | OP1 | 2024-summer, 2025-spring |
| `kimi-to-boku-no-saigo-no-senjou-arui-wa-sekai-ga-hajimaru-seisen-season-ii-ed-1` | Para Bellum／Sizuk | ED1 | 2024-summer, 2025-spring |
| `mayonaka-punch-op-1` | ギミギミ／りぶ（CV：ファイルーズあい）、苺子（CV：伊藤ゆいな）、譜風（CV：羊宮妃那）、十景（CV：上田瞳）、ゆき（CV：茅野愛衣） | OP1 | 2024-summer |
| `mayonaka-punch-ed-1` | 編集点／真咲（CV：長谷川育美） | ED1 | 2024-summer |
| `mayonaka-punch-ed-2` | 君へ／譜風（CV：羊宮妃那） | ED2 | 2024-summer |
| `mayonaka-punch-ed-3` | ナイトダイバー／りぶ（CV：ファイルーズあい）、苺子（CV：伊藤ゆいな）、譜風（CV：羊宮妃那）、十景（CV：上田瞳） | ED3 | 2024-summer |
| `hazure-waku-no-joutai-ijou-skill-de-saikyou-ni-natta-ore-ga-subete-wo-juurin-suru-made-op-1` | Hazure／超学生 | OP1 | 2024-summer |
| `hazure-waku-no-joutai-ijou-skill-de-saikyou-ni-natta-ore-ga-subete-wo-juurin-suru-made-ed-1` | pray／Hakubi | ED1 | 2024-summer |
| `bye-bye-earth-op-1` | FACELESS／ASCA | OP1 | 2024-summer |
| `bye-bye-earth-ed-1` | I LUV U 2／LMYK | ED1 | 2024-summer |
| `grendizer-u-op-1` | 会心ノ一撃／GLAY | OP1 | 2024-summer |
| `grendizer-u-ed-1` | Protect You／BAND-MAID | ED1 | 2024-summer |
| `kinnikuman-kanpeki-choujin-shiso-hen-op-1` | LOVE & JUSTICE／高梨康治×FLOW | OP1 | 2024-summer |
| `kinnikuman-kanpeki-choujin-shiso-hen-ed-1` | 超人／キン肉マン（CV：宮野真守） | ED1 | 2024-summer |
| `rick-and-morty-the-anime-op-1` | Love Is Entropy／0C from CODE OF ZERO、Cameron Earnshaw | OP1 | 待核；保留全目錄及動畫頁 |
| `rick-and-morty-the-anime-ed-1` | The Other Side／AYUKO SAITO | ED1 | 待核；保留全目錄及動畫頁 |
| `one-room-hi-atari-futsuu-tenshi-tsuki-op-1` | 君色のキセキ／小倉 唯 | OP1 | 2024-spring |
| `one-room-hi-atari-futsuu-tenshi-tsuki-ed-1` | Sunny Canvas／サンドリオン | ED1 | 2024-spring |
| `kami-wa-game-ni-ueteiru-op-1` | NewGame／AliA | OP1 | 2024-spring |
| `kami-wa-game-ni-ueteiru-ed-1` | I'm GAME!／立花日菜 | ED1 | 2024-spring |
| `shuumatsu-train-doko-e-iku-op-1` | GA-TAN GO-TON／中島 怜 | OP1 | 2024-spring |
| `shuumatsu-train-doko-e-iku-ed-1` | ユリイカ／ロクデナシ | ED1 | 2024-spring |

- 公開anime ID：`curated-139825`、`curated-174044`、`curated-173694`、`curated-157371`、`curated-154195`、`curated-162796`、`curated-150103`、`curated-169927`、`curated-144176`、`curated-155657`。新增動畫、用途、歌曲、影片外連、結構化音源與發行品均0；更正9個原名、12個演唱名義，補47筆同頁明列詞／曲／編角色及20筆歌唱條目；條目數不等於唯一作者／歌手數。
- キミ戦II原兩曲補2025春恢復播出季度及registry關係，歌曲與動畫頁不複製；2024原TV7月10日22:30 AT-X依原News核實，現行4月10日20:30為2025恢復，地上波及串流另列。天使つき原首播由3月30日ABEMA先行更正為4月6日22時TV；グレンダイザーU原7月5日25:23與後續Netflix分開，ハズレ枠7月4日24:59與2025再播分開。
- 22個舊ID、序號、影片ID／形式、原發行日期、錄音／發行關係與既有外連全部保留；2,042部其他動畫JSON逐檔SHA-256相同。6筆既有歌曲官網來源實際更新：ハズレ枠2、グレンダイザーU2、天使つき2；未重新讀取的其他舊來源物件／日期保持。
- 全目錄2,052部、4,639用途（4,526 OP／ED、103 IN、10 TS）全部有dataStatus；917筆基本欄位有兩類欄位證據，其餘3,722筆來源待細分。已逐批處理1,629唯一用途。2024夏177 OP／ED已核146、詳細核心0／缺口146，另10筆插曲；春169已核27、核心0／缺口27。2025春因恢復播出兩曲為150 OP／ED已核129、詳細核心46／缺口83；分母變動不是新增兩首歌曲。
- 夏季現有未逐批核對31筆屬已延後的WEB／短篇／特殊編排；仍需核對較早首播作品的夏季後半用曲與作品聯集，不宣稱全夏季閉合。第72批春季狼與香辛料後半季度一併處理，短篇／WEB不阻擋前進。

### 來源、缺口與續查條件

- キミ戦II：[Music](https://kimisentv.com/music/)明セナカアワセ／AliA，詞TKT、曲EREN；Para Bellum／Sizuk，歌AYAME（from AliA）、詞只野菜摘、曲俊龍、編藤田淳平。原期[News](https://kimisentv.com/news/)的2024年6月7日公告明7月10日22:30 AT-X；[現行ONAIR](https://kimisentv.com/onair/)明2025年4月10日恢復播出。原期及恢復季度保存，2024延期期間SeasonⅠ選集與2023形象歌REVERSI不套本期用途；OP編曲及版本／平台留詳細階段。
- 真夜中ぱんチ：[Music](https://mayopan.jp/music/)一次核四曲與各自角色CV：OPギミギミ五人、ED編集点真咲、君へ第4話譜風、ナイトダイバー第8話四人（未含ゆき）。OP詞松井洋平、曲編神田ジョン；編集点詞松井洋平、曲及編分別列ハラミちゃん與樂。鋼琴演奏未當歌唱，特殊兩ED未明詞曲編保留待補。[原TV](https://mayopan.jp/onair/)7月8日22:30與先行／後續配信分開；原曲官方配信表留作版本與收錄深化入口。
- ハズレ枠：[Music](https://hazurewaku-anime.com/music/)明Hazure／超学生、pray／Hakubi；留言僅提作者或一般署名，沒有完整逐曲姓名／分工，未補推定職位。[官網原TV](https://hazurewaku-anime.com/)明7月4日24:59 TBS（曆5日）。Web工具403後以普通瀏覽器讀公開頁面，沒有繞過驗證；詞曲編、個別歌唱與收錄待官方逐曲表。
- ばいばいアース：[保存第1季Music](https://bye2earth.com/music/seazon_1.html)明FACELESS／ASCA，詞ASCA、曲編津波幸平；I LUV U 2／LMYK，詞LMYK、曲LMYK及Toru Horikoshi、編Jimmy Jam and Terry Lewis及Toru Horikoshi。[2024年5月23日原公告](https://bye2earth.com/news/#n24_0523)明7月12日23:30 WOWOW，現行2025第2季ONAIR及音樂不套原期。詳細階段重用VVCL-2545–2549及ESCL-5878–5879逐版曲表，其他single曲不當TV用途。
- グレンダイザーU：[官網同頁](https://grendizer-official.net/)一次核会心ノ一撃／GLAY及Protect You／BAND-MAID、本曲詞MIKU KOBATO、曲編BAND-MAID與TV7月5日25:23。HISASHI的Guitar及小鳩ミクVocal&Guitar留言職位不套各曲創作／全部個別歌唱；Prime Video26時與Netflix10月上架不增原TV季度。OP詞曲編待官方本曲表。
- キン肉マン：[保存Season1曲表](https://kin29man-anime.com/music/oped/)明LOVE & JUSTICE／高梨康治×FLOW，詞森雪之丞、曲鈴木裕明、編高梨康治／FLOW／鈴木裕明；超人／キン肉マン（宮野真守）詞曲編APAZZI。現行Season2曲與第0話主題曲不冒充這兩用途。原7月7日首播及有效來源日期沿用，精確時段經兩輪原期定向查找未明，待原官方公告可讀；PCCG-70540版本與收錄留詳細階段。
- Rick and Morty：[官方節目頁](https://www.adultswim.com/videos/rick-and-morty-the-anime)及[製作方首播公告](https://press.wbd.com/us/media-release/adult-swim-0/rick-and-morty-anime/all-new-series-rick-and-morty-anime-premieres-august-15-adult-swim)可核2024十話TV系列、美國8月15日節目日深夜英語版、日本語字幕8月17日節目日深夜及Max翌日串流，沒有猜填日本TV時段。兩曲原名／名義／交叉表保留，官方兩頁未列逐曲表；兩輪定向查找未取得清楚第一方，兩用途季度暫空。待原OP／ED credit、官方OST逐曲表或本曲藝人／版權方公告明列原名、歌唱與TV用途，再補夏／秋逐話季度；非官方歌詞、社群鏡像及總配樂職位不當第一方曲目證據。
- 天使つき：[原TV同頁](https://tenshitsuki.com/)明4月6日22時TV與3月30日ABEMA先行；[Music](https://tenshitsuki.com/music.html)明君色のキセキ／小倉唯，詞小倉唯、曲編武田将弥；Sunny Canvas／サンドリオン，詞磯谷佳江及絵伊子、曲編渡部チェル。藝人歌曲不套所飾角色名義；COZC-2087–2090及COCC-18201–18204逐版曲表可重用深化，地方台後播不當新原期季度。
- 神飢：[Music](https://godsgame-anime.com/music.html)明NewGame／AliA及I'm GAME!／立花日菜，[ONAIR](https://godsgame-anime.com/onair.html)明4月1日21:30 AT-X、地上波22:30及串流22時；總原聲帶的吟不套主題曲創作。個別詞曲編、歌唱、版本與收錄留詳細階段。
- 終末トレイン：[Music](https://shumatsu-train.com/goods/music/index.html)明GA-TAN GO-TON／中島怜，詞曲姉田ウ夢ヤ及堀下さゆり、編姉田ウ夢ヤ；ユリイカ／ロクデナシ，詞曲傘村トータ、編小松一也。一般專案歌手介紹不當本曲歌唱表，OST的黒豹便のテーマ未有適用逐話證據，不由收錄新增TV插曲。[原ONAIR](https://shumatsu-train.com/onair/index.html)4月1日21時AT-X，現行2025地方台後播分開；VTZL-240／243、VTCL-35374／35376曲表留深化。
- 47筆完全季度待核、30筆非空季度use_quarters條件、近期6筆具體跨季缺口及ATRI兩首後段日期分開保留。只有對應第一方資料可讀時續查，不重查前批所有資料；可選欄位缺失不阻擋20筆基本證據。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部22筆與舊ID／媒體／來源保留性通過；917筆基本狀態及28季計數與原期／恢復播出加入既有季度目錄相符。公開動畫季度以既有季度目錄與theme.seasonIds核對，沒有改資料契約。
- Chromium393×852驗10頁22組狀態、12組季度歌單（含2025春兩曲及2025夏0筆）、4組OPED篩選、8組新原名／舊羅馬字搜尋、10組原TV資料、2筆待核舊深連結及舊影片來源日期，無溢出、app errors或未同意影片iframe；原曲歌唱五人／特殊ED四人沒有混用。
- in-app665像素核4組狀態／1筆展開、編集点角色歌唱、作詞及共同曲編、明確續查及原8月30日影片來源，收合／展開通過；手機及in-app實際截圖均已檢視。Browser plugin不可用，以專案Chromium驗手機尺寸。
- 僅2024夏／春資料、2025春恢復季度registry及checkpoint改動；沒有新增季度、UI、contract、播放器行為、依賴或部署設定變更，本機不額外重跑全套E2E，正常PR／main保留重要E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾均通過；本機通過不等於已部署。

預覽入口：`/anime/mayonaka-punch/#theme-mayonaka-punch-ed-1`、`/anime/kimi-to-boku-no-saigo-no-senjou-arui-wa-sekai-ga-hajimaru-seisen-season-ii/`、`/seasons/2025-spring/`及`/seasons/2024-spring/`。第72批接續春季10部24筆及相應後半季度；作品聯集、基本階段、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料及checkpoint分類提交；[PR #163](https://github.com/kyeunga25/anisonary/pull/163)的quality／Workers通過，正常rebase合併。完整main來源`c49cb5e43f8a69199dee0fe98b6600d803eeb961`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch71-basics`及完整main來源／PR #163，第72批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部22筆通過。
- 正式站Chromium393×852驗10頁22組狀態、12組季度歌單（2025春兩曲及夏0筆）、4組用途篩選、8組新舊名搜尋、10組原TV及2筆待核深連結，原來源日期保留，無溢出、app errors或未同意影片iframe。in-app665像素核4組狀態／1筆展開、編集点角色歌唱及共同曲編／作詞與明確續查，收合／展開通過；兩種實際截圖均已檢視。
- annotated tag `batch71-basics`指向正式來源並已推送。第72批接續春10部24筆及相應後半季度；47筆完全季度待核、6筆近期具體跨季缺口、ATRI後段日期與每曲詳細條件保留，作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-72（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。2024春10部24筆既有OP／ED及1筆新插曲，共25筆基本原名、演唱名義與用途具第一方／交叉欄位證據。詳細缺項不阻擋基本資料。
- 每曲dataStatus保存現有欄位、缺項及具體followUp；原期TV、先行串流、第二部分、續期與其他版名義分開。未重讀的官方影片及交叉來源日期保留；第72批正常PR／main與實際部署已正式驗收，來源`032b439`／`batch72-basics`。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `ookami-to-koushinryou-merchant-meets-the-wise-wolf-op-1` | 旅のゆくえ／Hana Hope | OP1 | 2024-spring |
| `ookami-to-koushinryou-merchant-meets-the-wise-wolf-op-2` | Sign／Aimer | OP2 | 2024-summer |
| `ookami-to-koushinryou-merchant-meets-the-wise-wolf-ed-1` | アンダンテ／ClariS | ED1 | 2024-spring |
| `ookami-to-koushinryou-merchant-meets-the-wise-wolf-ed-2` | りんごと君／音莉飴 | ED2 | 2024-summer |
| `touken-ranbu-kai-kyoden-moyuru-honnouji-op-1` | Whatever Happens／INI | OP1 | 2024-spring |
| `touken-ranbu-kai-kyoden-moyuru-honnouji-ed-1` | DAYBREAK／鳥海浩輔、前野智昭、泰勇気、阪口大助、新垣樽助、山下誠一郎、佐藤拓也、村瀬歩、田丸篤志、斉藤壮馬 | ED1 | 2024-spring |
| `tensei-shitara-dai-nana-ouji-datta-node-kimamani-majutsu-wo-kiwamemasu-op-1` | キュンリアス／樋口楓 | OP1 | 2024-spring |
| `tensei-shitara-dai-nana-ouji-datta-node-kimamani-majutsu-wo-kiwamemasu-ed-1` | ハッピーの秘訣／熊田茜音 | ED1 | 2024-spring |
| `dekisokonai-to-yobareta-moto-eiyuu-wa-jikka-kara-tsuihou-sareta-node-suki-katte-ni-ikiru-koto-ni-shita-op-1` | EVOLVE／蒼井翔太 | OP1 | 2024-spring |
| `dekisokonai-to-yobareta-moto-eiyuu-wa-jikka-kara-tsuihou-sareta-node-suki-katte-ni-ikiru-koto-ni-shita-ed-1` | メリトクラシー／愛美 | ED1 | 2024-spring |
| `re-monster-op-1` | Into the Fire／CHANSUNG(2PM) & AK-69 feat. CHANGMIN(2AM) | OP1 | 2024-spring |
| `re-monster-ed-1` | 運命／EverdreaM | ED1 | 2024-spring |
| `bartender-kami-no-glass-op-1` | Stardust Memory／川崎鷹也 | OP1 | 2024-spring |
| `bartender-kami-no-glass-ed-1` | スピカ／上白石萌音 | ED1 | 2024-spring |
| `bartender-kami-no-glass-in-1` | Swallow／オレオレオナ | IN1 | 2024-spring |
| `yuru-camp-season-3-op-1` | レイドバックジャーニー／キミのね | OP1 | 2024-spring |
| `yuru-camp-season-3-ed-1` | So Precious／亜咲花 | ED1 | 2024-spring |
| `hananoi-kun-to-koi-no-yamai-op-1` | 君のせい／Sexy Zone | OP1 | 2024-spring |
| `hananoi-kun-to-koi-no-yamai-ed-1` | エヴリー・セカンド（ジャパニーズ・ヴァージョン）／ミイナ・オカベ | ED1 | 2024-spring |
| `mahouka-koukou-no-rettousei-3rd-season-op-1` | Shouted Serenade／LiSA | OP1 | 2024-spring |
| `mahouka-koukou-no-rettousei-3rd-season-ed-1` | recall／八木海莉 | ED1 | 2024-spring |
| `mahouka-koukou-no-rettousei-3rd-season-ed-2` | スノーノワール／三月のパンタシア | ED2 | 2024-spring |
| `mahouka-koukou-no-rettousei-3rd-season-ed-3` | 紫苑の花束を／ASCA | ED3 | 2024-spring |
| `maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii-op-1` | ワカラナイアイ／The Brow Beat | OP1 | 2024-spring |
| `maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii-ed-1` | ブルースター／山本彩 | ED1 | 2024-spring |

- 公開anime ID：`curated-145728`、`curated-150085`、`curated-156415`、`curated-166372`、`curated-169417`、`curated-155890`、`curated-155908`、`curated-165855`、`curated-143271`、`curated-156023`。新增動畫0、用途1、歌曲ID1；新增〈Swallow〉第5話插曲，其餘24個用途ID／序號／歌曲ID與URL保留。更正15個原名、15個演唱名義，補36筆同頁明列詞／曲／編角色、1筆日本語譯詞及27筆歌唱條目；條目數不等於唯一作者／歌手數。
- 狼與香辛料第二部分原OP2／ED2改掛2024夏，動畫既有ID加入既有夏季registry，原兩曲留春季；沒有重複歌曲或動畫頁。Re:Monster原日期由4月2日先行串流更正為TV4月4日24時（曆5日）；其他原TV時段與24時以上節目日均依第一方核對。
- 原影片ID／形式、外連、錄音、收錄發行品及發行日期全部保留，新增影片／外連／結構化音源／發行品均0；2,042部其他動畫JSON逐檔SHA-256相同。12筆既有歌曲官網來源實際更新：狼與香辛料4、元英雄2、Re:Monster2、バーテンダー2、花野井2；其他未重讀舊來源物件／日期保持。
- 全目錄2,052部、4,640用途（4,526 OP／ED、104 IN、10 TS）均有dataStatus，942筆基本欄位有第一方／交叉欄位證據，其餘3,698筆來源待細分；已逐批處理1,654唯一用途。2024春167 OP／ED已核49、詳細核心0／缺口49，另1筆插曲；夏179 OP／ED已核148、詳細核心0／缺口148，另10筆插曲。春／夏分母改變來自兩筆既有用途移季，不是新增兩首。

### 來源、缺口與續查條件

- 狼與香辛料：[OP1](https://spice-and-wolf.com/music/opening.html)、[ED1](https://spice-and-wolf.com/music/ending.html)、[第二部分OP](https://spice-and-wolf.com/music/opening_2nd.html)、[第二部分ED](https://spice-and-wolf.com/music/ending_2nd.html)及[6月28日公告](https://spice-and-wolf.com/news/detail_240628_04.html)支持四曲、演唱及前／後半用途；[中文動畫頁](https://zh.wikipedia.org/wiki/狼與辛香料_(動畫))曲表與第14話7月2日交叉對應夏季。[原官網](https://spice-and-wolf.com/)首播4月1日25:30，現行2027第2期不套2024第二部分。頁面一般簡介及非第一方詞曲資料未自動補逐曲職位，詳細階段重用各本曲發行頁。
- 刀剣乱舞廻：[Music](https://touken-kai.jp/music/)明Whatever Happens／INI、DAYBREAK與12個角色／10位不同CV，逐話組合未直接當12人同一錄音；[原TV公告](https://touken-kai.jp/news/008/)明4月2日23時、全8話標準長度TV，DMM23:30及後續電影分開。[8月30日訂正](https://touken-kai.jp/news/068/)明DAYBREAK憂愁／叙情arr.曲10–13的藤代佑太郎正字；版限定編曲不套全部原曲，詳細階段再對應版本／角色組合與收錄。
- 第七王子：[Music](https://dainanaoji.com/music)第1期欄明キュンリアス／樋口楓、安藤紗々詞、光増ハジメ曲編；ハッピーの秘訣／熊田茜音、森雪之丞詞、加藤裕介曲編。[保存原ONAIR](https://dainanaoji.com/onair/240318)明4月1日24時；現行第2季及第2季single再收原曲不直接新增2025用途。詳細階段重用原single逐版曲表。
- 元英雄：[官網同頁](https://www.dekisoko-anime.com/)一次核TV4月1日26時及EVOLVE／蒼井翔太（綿貫直行詞曲、綿貫直行／佐藤厚仁共同編）、メリトクラシー／愛美（すりぃ詞曲編）；作品配樂與聲演角色未套歌曲職位，版本、收錄及平台留詳細階段。
- Re:Monster：[官網](https://re-monster.com/)明Into the Fire／CHANSUNG(2PM) & AK-69 feat. CHANGMIN(2AM)、運命／EverdreaM；[原公告](https://re-monster.com/news/76/)區分4月1日24時先行與4月4日TV，[原作出版社新聞稿](https://animebox.jp/401197/)明TV24時／BS24:30。團員一般簡介與總配樂未當逐曲創作，詳細階段再補本曲正式名單與版本。
- バーテンダー：[官網同頁](https://bartender-anime.com/)核TV4月3日24時、Stardust Memory／川崎鷹也、スピカ／上白石萌音及第5話插曲Swallow／オレオレオナ；[Shazam確切曲目](https://www.shazam.com/song/1749029480/swallow)與[animeMANGA插曲表](https://www.animemanga.jp/anime/12172%2Cbartender-glass-of-god)交叉支持新插曲身分／用途。交叉表其他集數及副標錄音未直接當新增用途或另一首；詞曲編需本曲第一方逐曲表，未抄歌詞或採用下載鏡像。詳細階段重用原聲帶曲表對應錄音、收錄與平台。
- ゆるキャン3：[Music](https://yurucamp.jp/third/music/)明レイドバックジャーニー／キミのね；So Precious／亜咲花，佐々木恵梨詞、佐々木恵梨／中村ヒロ共同曲編。OP團員一般創作／演奏簡介未套逐曲詞曲編；本頁明single另有Another Ensemble及USSW-0484原聲帶兩曲TV Size，詳細階段直接重用曲表建立音源與收錄。[ONAIR](https://yurucamp.jp/third/onair/)明4月4日23時AT-X、23:30 MX與BS24時。
- 花野井：[Music](https://hananoikun-pr.com/music/)明君のせい／Sexy Zone，nozomi*詞、Toshiya Hosokawa／Funk Uchino／Gigi／SILLY TEMBA曲、Toshiya Hosokawa／SILLY TEMBA編；エヴリー・セカンド（ジャパニーズ・ヴァージョン）／ミイナ・オカベ，Mads Koch／Mina Okabe／Nick Madsen共同詞曲及Kanata Okajima日本語詞。保留原曲演唱名義，日語版與英語原曲不自動合併音源；編曲與錄音／發行品留詳細階段。[原TV](https://hananoikun-pr.com/)4月4日23:56。
- 魔法科3：[OP](https://mahouka.jp/3rd/music/)明Shouted Serenade／LiSA，LiSA／田淵智也詞、田淵智也曲、堀江晶太編；三組[ED1](https://mahouka.jp/3rd/music/?page=ed01)、[ED2](https://mahouka.jp/3rd/music/?page=ed02)、[ED3](https://mahouka.jp/3rd/music/?page=ed03)各明recall／八木海莉（ダブルセブン編）、スノーノワール／三月のパンタシア（スティープルチェース編）、紫苑の花束を／ASCA（古都内乱編）。感言與舊季作品不當完整逐曲職位，[ONAIR](https://mahouka.jp/3rd/onair/)明原4月5日23:30。ED詞曲編與各edition留詳細階段。
- 魔王エルフ：[Music](https://madome-anime.com/music/)明ワカラナイアイ／The Brow Beat、ブルースター／山本彩及杉山勝彦編曲參與；完整共同編曲與詞曲未明，單一已列編曲不當完整名單，arrangement保留續查。[製作方原新聞稿](https://www.atpress.ne.jp/news/389666)明4月4日24:30 TV及ABEMA；第1話同時、第2話起先行一週，現行ONAIR10月串流不移原TV季度。詳細階段重用single／Mカード逐曲表補錄音、完整職位及平台。
- 47筆完全季度待核、30筆非空季度use_quarters條件、近期6筆具體跨季缺口與ATRI兩首後段日期分開保留。已有有效來源先重用，只有對應新第一方資料／詳細補充任務才續查，不因可選缺項重搜全部資料。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部25筆、舊ID／媒體／來源保留性與全28季統計通過。沒有新增資料契約，季度仍以theme.seasonIds與既有季度目錄核對。
- Chromium393×852驗10頁25組狀態、12組季度歌單（第二部分夏季2筆、秋季0筆）、4組OP／ED／IN篩選、8組新原名／舊羅馬字搜尋、10組原TV時段；角色CV、版本限定訂正、日本語版共同詞曲／譯詞與新插曲深連結均可見，無溢出、app errors或未同意影片iframe。
- in-app665像素核2組狀態／1筆展開、日語版與三位共同詞曲／日本語詞、具體待補／續查及原8月30日影片來源；收合／展開通過，手機及in-app實際截圖均已檢視。Browser plugin不可用，以專案Chromium驗手機尺寸。
- 僅2024春資料、既有夏季registry及checkpoint改動；沒有新增季度、UI、contract、播放器行為、依賴或部署設定，本機不額外重跑全套E2E，正常PR／main保留重要E2E。Cloudflare dry-run無bindings；文件連結、公開邊界245檔與diff收尾通過，本機通過不等於已部署。

預覽入口：`/anime/bartender-kami-no-glass/#theme-bartender-kami-no-glass-in-1`、`/anime/hananoi-kun-to-koi-no-yamai/#theme-hananoi-kun-to-koi-no-yamai-ed-1`、`/seasons/2024-spring/`及`/seasons/2024-summer/`。第73批接續春7部27筆及相應後半／特殊用途，作品聯集、基本階段、詳細與長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料及checkpoint分類提交；[PR #164](https://github.com/kyeunga25/anisonary/pull/164)的quality／Workers通過，正常rebase合併。完整main來源`032b4395d12f01658e928f625472f8f2ff6e624b`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch72-basics`及完整main來源／PR #164，第73批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部25筆通過。
- 正式站Chromium393×852驗10頁25組狀態、12組季度歌單（第二部分夏季2筆及秋0筆）、4組用途篩選、8組新舊名搜尋、10組原TV及角色CV／日本語版／新插曲深連結，原來源日期保留，無溢出、app errors或未同意影片iframe。in-app665像素核2組狀態／1筆展開、日語版本及共同詞曲／日本語譯詞、明確續查與原影片日期，收合／展開通過；兩種實際截圖均已檢視。
- annotated tag `batch72-basics`指向正式來源並已推送。第73批接續春7部27筆及相應後半／特殊用途；47筆完全季度待核、6筆近期具體跨季缺口、ATRI後段日期及每曲詳細條件保留，作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-73（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。2024春7部27筆既有用途及2筆新增插曲，共29筆；26筆基本原名、演唱名義與用途具第一方／交叉欄位證據，3筆保留第一方特殊ED缺口及季度待核。
- 每曲dataStatus保存現有欄位、缺項及具體followUp；不將音樂作品本篇演唱場景當常規OP／ED。原TV節目日、初回特別時段、劇場先行、發行／串流與本篇用曲季度分開。第73批正常PR／main與實際部署已正式驗收，來源`9507107`／`batch73-basics`。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `tensei-shitara-slime-datta-ken-3rd-season-op-1` | PEACEKEEPER／STEREO DIVE FOUNDATION | OP1 | 2024-spring |
| `tensei-shitara-slime-datta-ken-3rd-season-op-2` | レナセールセレナーデ／ももいろクローバーZ | OP2 | 2024-spring, 2024-summer |
| `tensei-shitara-slime-datta-ken-3rd-season-ed-1` | Believer／来栖りん | ED1 | 2024-spring |
| `tensei-shitara-slime-datta-ken-3rd-season-ed-2` | Miracle soup／MindaRyn | ED2 | 2024-spring, 2024-summer |
| `tensei-shitara-slime-datta-ken-3rd-season-ed-3` | PEACEKEEPER／STEREO DIVE FOUNDATION | ED3 | 待核；保留全目錄及原動畫頁 |
| `the-idolm-ster-shiny-colors-op-1` | ツバサグラビティ／シャイニーカラーズ | OP1 | 2024-spring |
| `the-idolm-ster-shiny-colors-ed-5` | Spread the Wings!! (Off Vocal)／Shiny Colors | ED5 | 待核；保留全目錄及原動畫頁 |
| `the-idolm-ster-shiny-colors-ed-6` | Multicolored Sky／Shiny Colors | ED6 | 待核；保留全目錄及原動畫頁 |
| `the-idolm-ster-shiny-colors-ed-1` | バベルシティ・グレイス／アンティーカ | IN1 | 2024-spring |
| `the-idolm-ster-shiny-colors-ed-2` | アルストロメリア／アルストロメリア | IN2 | 2024-spring |
| `the-idolm-ster-shiny-colors-ed-3` | 夢咲きAfter School／放課後クライマックスガールズ | IN3 | 2024-spring |
| `the-idolm-ster-shiny-colors-ed-4` | ヒカリのdestination／イルミネーションスターズ | IN4 | 2024-spring |
| `wind-breaker-op-1` | 絶対零度／なとり | OP1 | 2024-spring |
| `wind-breaker-ed-1` | 無敵／Young Kee | ED1 | 2024-spring |
| `henjin-no-salad-bowl-op-1` | ギフにテッド／和ぬか | OP1 | 2024-spring |
| `henjin-no-salad-bowl-ed-1` | 今晩の喧嘩／名誉伝説 | ED1 | 2024-spring |
| `astro-note-op-1` | ホホエミノオト／降幡愛 | OP1 | 2024-spring |
| `astro-note-ed-1` | ココロのカギ／豪徳寺ミラ（CV：内田真礼）、宮坂拓己（CV：斉藤壮馬） | ED1 | 2024-spring |
| `highspeed-etoile-op-1` | ADRENALIZED／水樹奈々 | OP1 | 2024-spring |
| `highspeed-etoile-ed-1` | ファンファーレ／SCANDAL | ED1 | 2024-spring |
| `girls-band-cry-op-1` | 雑踏、僕らの街／トゲナシトゲアリ | OP1 | 2024-spring |
| `girls-band-cry-ed-2` | 誰にもなれない私だから／トゲナシトゲアリ | ED2 | 2024-spring |
| `girls-band-cry-ed-1` | 空の箱／トゲナシトゲアリ（井芹仁菜、河原木桃香） | IN1 | 2024-spring |
| `girls-band-cry-ed-3` | 声なき魚／トゲナシトゲアリ（新川崎（仮）） | IN3 | 2024-spring |
| `girls-band-cry-ed-4` | 視界の隅 朽ちる音／トゲナシトゲアリ（新川崎（仮）） | IN4 | 2024-spring |
| `girls-band-cry-ed-5` | 名もなき何もかも／トゲナシトゲアリ | IN5 | 2024-spring |
| `girls-band-cry-ed-6` | 空白とカタルシス／トゲナシトゲアリ | IN6 | 2024-spring |
| `girls-band-cry-in-7` | Cycle Of Sorrow／ダイヤモンドダスト | IN7 | 2024-spring |
| `girls-band-cry-in-8` | 運命の華／トゲナシトゲアリ | IN8 | 2024-spring |

- 公開anime ID：`curated-156822`、`curated-162889`、`curated-163270`、`curated-166828`、`curated-171040`、`curated-152302`、`curated-164212`。新增動畫0、用途2、歌曲ID2，為Cycle Of Sorrow及運命の華；9筆既有ED更正IN（シャニアニ4、GBC5），27個舊用途ID／序號及URL保留。更正20個原名、20個演唱名義，補33筆同頁明列詞／曲／編角色及39筆歌唱條目；條目數不等於唯一作者／歌手數。
- PEACEKEEPER原兩項用途未各有獨立公開songId，本批共用原OP歌曲ID，特殊ED用途ID仍保留待核；未另造一首歌。轉生史萊姆後半OP／ED依中文曲表第60話與劇集6月21日起對應春末，保留春並補夏；兩曲沒有按發行日期或第二部分名稱一律移出春季。
- 既有YouTube影片ID、標題、頻道、官方狀態、外連、發行日期、錄音及收錄關係保留。4個動畫演唱片段原tv_size分類未有音源長度證據，改other；1支既有Official MV解除full推定、改music_video。5筆override依更正用途搬key並保留影片，沒有重複或遺失媒體。
- ThemeCard保留目前影片定位，另以原用途ID尾段提供相容別名；2,052部動畫的1,838個既有影片定位均仍存在，新增11個相容定位，無重複。五個本批舊video-ed連結實際可展開更正後IN卡。沒有變更public JSON契約或新增影片播放請求。
- 新增播放器影片／影片外連、結構化音源及發行品均0；4個已讀官方逐話YouTube引用保存為第一方來源，不算新播放器影片。2,045部其他動畫JSON逐檔SHA-256相同；只有アストロノオト兩筆原官網來源實際更新，其餘未重讀來源物件／日期保留。只有明列本曲用途的來源寫anime_use證據，日期頁及一般MV各保留適用欄位。
- 全目錄2,052部、4,642用途（4,517 OP／ED、115 IN、10 TS）均有dataStatus，968筆基本欄位有第一方／交叉證據，其餘3,674筆來源待細分；累計處理1,683唯一用途。2024春155 OP／ED已核64、詳細核心0／缺口64，另12筆插曲；夏181 OP／ED已核150、詳細核心0／缺口150，另10筆插曲。春季OP／ED分母減少來自9筆改IN及3筆暫不分季，歌曲未刪除。

### 來源、缺口與續查條件

- 轉生史萊姆3：[官方原聲帶逐曲表](https://www.ten-sura.com/news/anime/tensura/news/post/10584)一次核PEACEKEEPER／STEREO DIVE FOUNDATION（R・O・N詞曲編）、Believer／来栖りん（Junxix.詞曲、藤田卓也編）、レナセールセレナーデ／ももいろクローバーZ（大森元貴詞曲、山下洋介編）、Miracle soup／MindaRyn（SACHIKO詞曲、長澤孝志編）。兩碟TV size及發行資料留詳細階段重用，不以劇伴藤間仁套各曲。[中文曲表](https://zh.wikipedia.org/wiki/關於我轉生變成史萊姆這檔事_(動畫))與[劇集日期](https://zh.wikipedia.org/wiki/關於我轉生變成史萊姆這檔事劇集列表)明第60話6月21日、第61話6月28日及夏季續播；後半兩曲保留春並補夏。原4月5日TV日期及有效舊來源沿用，精確時段留待原期公告；原ED3最終話片尾用途兩輪第一方查找仍未明，待官方第72話credit或明示特殊ED公告，季度暫空。
- シャニアニ：[原OP商品](https://shinycolors.lantis.jp/releaseinfo/lacm-24508/)明ツバサグラビティ／シャイニーカラーズ、16個角色CV、こだまさおり詞及山口朗彦曲編；三峰結華以本產品希水しお署名，不套早期遊戲錄音。四組版與Off Vocal已列，留詳細階段建立音源／收錄。原[Movie](https://shinycolors-anime.idolmaster-official.jp/movie/)連接的四支官方逐話標題明第2話アンティーカ／バベルシティ・グレイス、第3話アルストロメリア、第4話放課後クライマックスガールズ／夢咲きAfter School、第5話イルミネーションスターズ／ヒカリのdestination之ライブシーン，[中文曲表](https://zh.wikipedia.org/wiki/偶像大師_閃耀色彩)交叉支持插曲，四個原ED ID改IN並保存。逐曲演唱版本／個別角色名單與詞曲編留詳細階段；未將整體cast套每曲。
- シャニアニ原ED5／6：Spread the Wings!! (Off Vocal)及Multicolored Sky的交叉曲表與原名義保留，官網Movie／Special與兩輪定向查找未取得清楚第一方逐話ED證據，季度暫空；等待第9／12話片尾credit或正式動畫曲表明列用途與版本。Off Vocal未新增推定歌唱；不從遊戲原曲或單曲收錄自動認定動畫ED。[ONAIR](https://shinycolors-anime.idolmaster-official.jp/onair/)明第1期4月5日25:28初回（常規25:23），2023劇場先行及2024秋第2期分開。
- WIND BREAKER：[原期OP](https://wb-anime.net/music/op01.html)、[原期ED](https://wb-anime.net/music/ed01.html)明絶対零度／なとり、無敵／Young Kee；原期頁保留2024年4月4日24:26官方節目文字，現行2025 Season2不套本期。一般自作詞曲簡介與感言未當完整逐曲職位；原single、版本及收錄留詳細階段。
- 変サラ：[Music](https://www.tbs.co.jp/anime/hensara/music/)明ギフにテッド／和ぬか、和ぬか詞曲、100回嘔吐與和ぬか共同編；今晩の喧嘩／名誉伝説、けっさく詞曲。一般Vo.／Gt.簡介未當本曲完整錄音表；ED編曲、原期精確時段及其他詳細項留具體續查，既有曆日／來源日期沿用，現行串流不移原TV季度。
- アストロノオト：[官網同頁](https://sh-anime.shochiku.co.jp/astro-note/)明ホホエミノオト／降幡愛（森雪之丞詞、本間昭光曲編）及ココロのカギ／豪徳寺ミラ(CV.内田真礼)、宮坂拓己(CV.斉藤壮馬)。4月5日原TV與配信日分開，未猜精確原時段；全曲集LACA-19039–40的宗本康兵不套ED逐曲職位，兩首未列名插曲未由整張收錄推定新增。詳細階段重用原single及全曲集表。
- HIGHSPEED：[Music](https://highspeed-etoile.com/music/)明ADRENALIZED／水樹奈々、水樹奈々詞與光増ハジメ曲編；ファンファーレ／SCANDAL、LUMINOUS第2曲TOMOMI詞及MAMI曲編。其他專輯曲不當本作TV用途，[ONAIR](https://highspeed-etoile.com/onair/)原4月5日25:53；原官網プリマステラ曲目公告留詳細階段逐曲對應插曲，不以同團體／發行品推定每首用途。
- GBC：[原single](https://girls-band-cry.com/news/post-143.html)明雑踏、僕らの街OP、誰にもなれない私だからED及第1話空の箱；[Movie](https://girls-band-cry.com/movie/)明第1／3／5／7／11話五首插曲及第11話Cycle Of Sorrow、第13話運命の華。[棘ナシ原曲表](https://girls-band-cry.com/news/post-200.html)支持團體及前名義，原[cast](https://girls-band-cry.com/staff-cast/)對應空の箱兩名角色CV；[中文動畫曲表](https://zh.wikipedia.org/wiki/少女樂團_吶喊吧)交叉用途，涉及不同歌唱版本的交叉來源只作適用欄位，未套用其另一版歌手／創作。五個原ED ID改IN，另增兩插曲；心象的フラクタル及ETERNAL FLAME為已明列發行曲，逐話第一方用途未明前不新增。原MV不推full、動畫演唱場景不當真實live錄音；詞曲編與各版關係待原single逐曲表。[原TV](https://girls-band-cry.com/onair/)4月5日24:30，總集編電影不套此季度。
- 50筆完全季度待核、30筆非空季度use_quarters條件、近期6筆具體跨季缺口與ATRI兩首後段日期分開保留。已有有效證據先重用，只有對應新第一方資料或詳細補充階段觸發再查，不以可選缺項阻擋26筆基本證據。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 7部29筆、舊ID／媒體／來源保留性及28季統計通過。用途證據與既有公開狀態映射一致。
- 因補影片定位相容，另跑既有6項核心E2E全部通過；使用隔離的4351／4352及獨立暫存產物，涵蓋瀏覽／搜尋、季度、離線、影片同意與公開錯誤狀態。資料與UI檢查未降低既有gate。
- Chromium393×852驗7頁29組狀態、9組季度歌單（史萊姆夏2筆、秋0筆）、6組OP／ED／IN篩選、8組新原名／舊字搜尋、7組原TV資料、3筆待核深連結及5筆舊影片定位；16角色CV與角色插曲皆可讀，無溢出、app errors或未同意iframe。
- in-app665像素核GBC9組狀態／1筆展開、空の箱角色CV與IN用途、來源日期及具體續查；舊video-ed及目前video-in定位存在、收合／展開通過。手機及in-app實際截圖已檢視；Browser plugin不可用，以專案Chromium驗手機尺寸。
- 資料、既有夏季registry、5筆影片分類、ThemeCard定位相容及checkpoint範圍；沒有新增季度、public契約、依賴或部署設定。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過；本機驗證不等於部署。

預覽入口：`/anime/girls-band-cry/#theme-girls-band-cry-ed-1`、`/anime/girls-band-cry/#video-ed-1-pA-pzhQQFBA`、`/anime/the-idolm-ster-shiny-colors/`、`/seasons/2024-spring/`及`/seasons/2024-summer/`。第74批春10部30筆接續，作品聯集、基本階段、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料、定位相容及checkpoint分類提交；[PR #165](https://github.com/kyeunga25/anisonary/pull/165)的quality／Workers通過，正常rebase合併。完整main來源`95071072d8a55d79af477b6880b8fbabab2b0196`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch73-basics`及完整main來源／PR #165，第74批資料未混入。
- 正式站84條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 7部29筆通過。
- 正式站Chromium393×852驗7頁29組狀態、9組季度歌單、6組用途篩選、8組新舊名搜尋、7組原TV、3筆待核及5筆舊影片定位，無溢出、app errors或未同意iframe。in-app665像素核9組狀態／1筆展開、空の箱IN用途與角色CV、具體續查、原來源日期及舊video-ed／目前video-in定位，收合／展開通過；兩種實際截圖均已檢視。
- 本機已驗證全2,052部的1,838個舊影片定位保留、無重複；正式站本批5筆舊定位亦實際通過。annotated tag `batch73-basics`指向正式來源並已推送。第74批春10部30筆接續，50筆完全季度待核、6筆近期具體跨季缺口、ATRI後段日期與每曲詳細條件保留；作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-74（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。2024春10部30筆既有用途，25筆原名、演唱名義及用途有第一方／交叉欄位證據，5筆特殊ED保留第一方用途缺口；每筆dataStatus、缺項與具體followUp均可在公開JSON及動畫頁讀取。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `ooi-tonbo-op-1` | 羽ばたけ／Sacra e sole | OP1 | 2024-spring |
| `ooi-tonbo-ed-1` | Let’s Swing／TOKYO GROOVE JYOSHI featuring 大井とんぼ（CV：はやしりか） | ED1 | 2024-spring |
| `karasu-wa-aruji-wo-erabanai-op-1` | poi／Saucy Dog | OP1 | 2024-spring, 2024-summer |
| `karasu-wa-aruji-wo-erabanai-ed-1` | とこしえ／志方あきこ | ED1 | 2024-spring, 2024-summer |
| `hibike-euphonium-3-op-1` | ディスコ・キッド／北宇治高校吹奏楽部 | OP1 | 2024-spring |
| `hibike-euphonium-3-op-2` | ReCoda／TRUE | OP2 | 2024-spring |
| `hibike-euphonium-3-ed-1` | 音色の彼方／北宇治カルテット | ED1 | 2024-spring |
| `hibike-euphonium-3-ed-2` | 愛の挨拶／北宇治高校吹奏樂部 | ED2 | 待核；全目錄及原動畫頁保留 |
| `hibike-euphonium-3-ed-3` | 響け！ユーフォニアム e D.C. al fine／北宇治高校吹奏楽部 | ED3 | 待核；全目錄及原動畫頁保留 |
| `tonari-no-youkai-san-op-1` | お化けひまわり／Pii | OP1 | 2024-spring |
| `tonari-no-youkai-san-ed-1` | イロノナカ／久保あおい | ED1 | 2024-spring |
| `sentai-daishikkaku-op-1` | 次回予告／キタニタツヤ | OP1 | 2024-spring |
| `sentai-daishikkaku-ed-1` | 正解はいらない／ナナヲアカリ | ED1 | 2024-spring |
| `yozakura-san-chi-no-daisakusen-op-1` | 運命ちゃん／いきものがかり | OP1 | 2024-spring |
| `yozakura-san-chi-no-daisakusen-op-2` | Secret Operation／fripSide feat. Yoshino Nanjo | OP2 | 2024-summer |
| `yozakura-san-chi-no-daisakusen-ed-1` | fam!／CHiCO | ED1 | 2024-spring |
| `yozakura-san-chi-no-daisakusen-ed-2` | 結婚行進曲／ASOBI同盟 | ED2 | 2024-summer |
| `blue-archive-the-animation-op-1` | 青春のアーカイブ／アビドス高等学校対策委員会 | OP1 | 2024-spring |
| `blue-archive-the-animation-ed-1` | 真昼の空の月／アビドス高等学校対策委員会 | ED1 | 2024-spring |
| `yoru-no-kurage-wa-oyogenai-op-1` | イロドリ／カノエラナ | OP1 | 2024-spring |
| `yoru-no-kurage-wa-oyogenai-ed-1` | 1日は25時間。／ツルシマアンナ | ED1 | 2024-spring |
| `yoru-no-kurage-wa-oyogenai-ed-2` | 最強ガール／JELEE | ED2 | 待核；全目錄及原動畫頁保留 |
| `yoru-no-kurage-wa-oyogenai-ed-3` | 月の温度／JELEE | ED3 | 待核；全目錄及原動畫頁保留 |
| `yoru-no-kurage-wa-oyogenai-ed-4` | 渋谷アクアリウム／JELEE | ED4 | 待核；全目錄及原動畫頁保留 |
| `tensei-kizoku-kantei-skill-de-nariagaru-op-1` | ブルーデイズ／TRUE | OP1 | 2024-spring |
| `tensei-kizoku-kantei-skill-de-nariagaru-ed-1` | Finally／リシア・プレイド（CV：花澤香菜） | ED1 | 2024-spring |
| `the-fable-op-1` | Professionalism feat. 般若／ALI | OP1 | 2024-spring |
| `the-fable-op-2` | スイッチ／梅田サイファー | OP2 | 2024-summer |
| `the-fable-ed-1` | Odd Numbers／梅田サイファー | ED1 | 2024-spring |
| `the-fable-ed-2` | BEYOND feat. MaRI／ALI | ED2 | 2024-summer |

- 公開anime ID：`curated-164440`、`curated-170503`、`curated-109731`、`curated-146867`、`curated-158417`、`curated-158898`、`curated-160589`、`curated-163078`、`curated-164702`、`curated-166910`。新增動畫、用途、歌曲、影片外連、結構化音源及發行品均0；30個原用途ID／序號／類型、歌曲ID及URL保留。更正23個原名、20個演唱名義，同頁補52筆詞／曲／編角色及31筆演唱條目；條目不等於唯一人數。
- 烏的兩首延續夏季，夜櫻與ファブル後半各兩首改掛夏季；三個既有TV系列補入既有夏季registry。夜櫻前半7月交界及後半10月終回保留4筆逐曲續查。原TV深夜節目日轉曆日，現行續期、2025再播、劇場版及串流分開。
- 既有YouTube影片ID、標題、頻道、官方狀態、分類、連結、發行日期、錄音與發行品關係全保留；未重查來源物件及日期保留。只有となりの妖怪さん兩筆既有官網來源實際重新查閱更新；鑑定貴族NC標題及藍檔OP／ED用途證據沿用原2026-08-30日期。日期頁不單獨當歌曲或用途證據。
- 其餘2,042部動畫JSON逐檔SHA-256相同；全2,052部、4,642筆用途（4,517 OP／ED、115 IN、10 TS）均有dataStatus，993筆基本欄位證據、3,649筆來源待細分。累計處理1,713唯一用途。春季146 OP／ED已核85、詳細核心0／缺口85，另12 IN；夏季187 OP／ED已核156、詳細核心0／缺口156，另10 IN。分母變化來自已核季度與5筆暫不分季，沒有刪除歌曲。

### 來源、缺口與續查條件

- とんぼ：[Music](https://tonbo-anime.com/music/)一次核第1期羽ばたけ／Sacra e sole（川人雅代詞、オバタコウイチ曲、小西貴雄編）、Let’s Swing／TOKYO GROOVE JYOSHI featuring 大井とんぼ（CV：はやしりか）（Dragonfly詞、柴田敏孝曲編）。[ONAIR](https://tonbo-anime.com/onair/)明4月6日10:00原期；第2期常規ED勝ちたくなっちゃったね已於第65批確認，直接沿用，原舊曲重用待核ID不重複新增。
- 烏：[官方Staff/Cast](https://www.nhk-character.com/karasu/staffcast/)核poi／Saucy Dog及とこしえ／志方あきこ；[ステラnet](https://www.steranet.jp/articles/-/3014)原期介紹交叉4月6日23:45，[原夏季節目表](https://thetv.jp/program/selection/444/)明兩曲延續。未以樂團一般簡介填逐曲詞曲編，原期官網來源日期保留。
- 響け3：從現行網站實際連結取得[原TV保存頁](https://tv3rd.anime-eupho.com/)，原4月7日17:00與再播／劇場版分開。[OP](https://tv3rd.anime-eupho.com/music/op/)列ReCoda／TRUE、唐沢美帆詞、トミタカズキ及hisakuni曲、鈴木雅也／曽木琢磨／山本拓夫編；[ED](https://tv3rd.anime-eupho.com/music/ed/)列音色の彼方／北宇治カルテット、ZAQ詞曲、白戸佑輔編及四角色CV。[第一回公告](https://anime-eupho.com/news/?id=556)與[OST曲表](https://anime-eupho.com/news/?id=589)確認ディスコ・キッド特別OP及北宇治高校吹奏楽部，無推定歌唱。原ED2愛の挨拶有CD音源與綠輝／求版歧義，ED3 e D.C. al fine的原片尾用途未取得第一方證據；兩輪後保留原入口、季度暫空，等原話數片尾／正式逐話資料，2025活動不替代2024錄音。
- 妖怪：[官方同頁](https://tonari-no-yokai-san.com/)核お化けひまわり／Pii及イロノナカ／久保あおい，ABC／テレビ朝日原4月6日深夜2時為曆日4月7日02:00；未逐曲明列詞曲編，詳細階段再用原發行表。
- 戰隊：[原期OP公告](https://sh-anime.shochiku.co.jp/anime-sentai-daishikkaku/news/230/)核次回予告／キタニタツヤ及4月7日16:30；[原期ED公告](https://sh-anime.shochiku.co.jp/anime-sentai-daishikkaku/news/346/)核正解はいらない／ナナヲアカリ。現行2nd season Music沒有套入2024，詳細職位待原single逐曲名單。
- 夜櫻：[前半Music](https://mission-yozakura-family.com/music/index.html)核運命ちゃん／いきものがかり（水野良樹詞、水野良樹／蔦谷好位置曲、KOHD／蔦谷好位置編）、fam!／CHiCO（aio詞曲、aio×hiroo編）；[後半Music](https://mission-yozakura-family.com/music/index02.html)核Secret Operation／fripSide feat. Yoshino Nanjo（Satoshi Yaginuma詞曲、Satoshi Yaginuma／Shinya Saito編）、結婚行進曲／ASOBI同盟（雨曇／田中輝詞、雨曇曲編）。[原ONAIR](https://mission-yozakura-family.com/onair/)明4月7日17:00，夏季節目表交叉後半兩曲；前半7月及後半10月交界待逐曲原片頭／片尾，不按專輯發行日分季。
- 藍檔：[原主題歌single公告](https://sh-anime.shochiku.co.jp/bluearchive-anime/news/676/)同頁列青春のアーカイブ及真昼の空の月、アビドス高等学校対策委員会五角色CV；前者40mP詞曲編、後者RED詞曲編。[テレビ東京](https://www.tv-tokyo.co.jp/anime/bluearchive/)原首播公告4月7日23:45；用途由已核官方NC標題沿用，未刷新舊影片日期。full／TVsize／instrumental及曲表留詳細階段重用，不因不同版本新增歌曲。
- 夜クラ：[OP](https://yorukura-anime.com/music/)明イロドリ／カノエラナ（同人詞曲、永井正道編）；[原ED](https://yorukura-anime.com/music/ed.html)明1日は25時間。／ツルシマアンナ、40mP詞曲編。[JELEE](https://yorukura-anime.com/music/jelee.html)、[原期新聞05](https://yorukura-anime.com/news/page05.html)及[新聞04](https://yorukura-anime.com/news/page04.html)明最強ガール第3話、月の温度第4話、渋谷アクアリウム第5話劇中歌及40mP詞曲編，後兩首明高橋李依歌唱；JELEE一般製作團隊沒有全當歌手。[交叉曲表](https://cal.syoboi.jp/tid/6980)列特殊ED，但第一方兩輪未明ED標記，原ED2／3／4保留原類型與ID、季度暫空，等待原片尾或官方ED說明；MV及mini album不單獨證明ED。[原ONAIR](https://yorukura-anime.com/onair/)4月6日25:00轉曆日4月7日01:00。
- 鑑定貴族：已核官方NC標題明ブルーデイズ／TRUE及Finally／リシア・プレイド（CV：花澤香菜），沿用既有第一方連結與2026-08-30核對日；同一single的ReCoda作者未套ブルーデイズ。原期精確時段及詳細名單等待正式原期頁可讀。
- ファブル：[2024保存頁前半Music](https://www.vap.co.jp/the-fable-anime/2024/music/?s1)明Professionalism feat. 般若／ALI、Odd Numbers／梅田サイファー；[後半Music](https://www.vap.co.jp/the-fable-anime/2024/music/?s2)明スイッチ／梅田サイファー、BEYOND feat. MaRI／ALI，保留官方feat.曲名，未將團體簡介當完整逐曲客演表。[原ONAIR](https://www.vap.co.jp/the-fable-anime/2024/onair/)4月6日24:55轉曆日4月7日00:55；後半短期調25:05不移原首播時段。[7月原報道](https://game.watch.impress.co.jp/docs/news/1606072.html)交叉後半OP；split single的Anime Size與收錄待詳細階段，沒有導入2027第2期。
- 55筆完全季度待核、34筆非空季度use_quarters條件、10筆近期具體跨季缺口及ATRI兩首後段日期分開保留。只在明確的新第一方證據或詳細補充階段觸發續查，不輪流重搜所有舊資料。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部30筆、ID／媒體／來源保留性及全28季統計通過。每筆公開狀態及followUp與authoring映射一致，未為私有驗證增加public欄位。
- Chromium393×852驗10頁30組狀態、14組季度歌單（含三部夏季各2筆及夜櫻秋0筆）、4組OP／ED篩選、6組原名／舊羅馬字搜尋、10組原TV資料及5筆待核深連結；五角色CV、逐曲詞曲編及原來源日期可見，無溢出、app errors或未同意iframe。
- in-app665像素核藍檔2組狀態／1筆展開、五角色CV與40mP、具體待補／續查及舊2026-08-30用途來源，收合／展開通過；手機與in-app實際截圖已檢視。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 僅2024春資料、既有夏季registry及checkpoint變更；沒有新增季度、UI、contract、播放器、依賴或部署設定。本機依矩陣不重跑全套E2E，正常PR／main保留核心E2E；Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/blue-archive-the-animation/#theme-blue-archive-the-animation-op-1`、`/anime/hibike-euphonium-3/`、`/anime/yoru-no-kurage-wa-oyogenai/`、`/seasons/2024-spring/`及`/seasons/2024-summer/`。第75批春10部25筆接續，作品聯集、基本階段、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #166](https://github.com/kyeunga25/anisonary/pull/166)的quality／Workers通過，正常rebase合併。完整main來源`7b2e5137d84fb5212f95218cacd92e6e55de77f1`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch74-basics`及完整main來源／PR #166，第75批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部30筆通過。
- 正式站Chromium393×852驗10頁30組狀態、14組季度、4組OP／ED篩選、6組原名／舊字搜尋、10組原TV及5筆待核深連結，無溢出、app errors或未同意iframe。in-app665像素核藍檔2組狀態／1筆展開、五角色CV、40mP、具體續查、原來源日期及收合／展開；手機及in-app實際截圖均已檢視。
- annotated tag `batch74-basics`指向正式來源並已推送。第75批春10部25筆接續，55筆完全季度待核、34筆非空季度use_quarters條件、10筆近期具體跨季缺口及ATRI後段日期保留；作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-75（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；本批實際查閱2026-10-20，沿用來源保留原核對日。2024春10部25筆既有用途，23筆基本欄位具第一方／交叉證據，2筆特殊ED待核；每曲現有欄位、缺項與具體續查條件保存於dataStatus及followUp。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `jii-san-baa-san-wakagaeru-op-1` | 君がおじいちゃんあたしがおばあちゃん／コレサワ | OP1 | 2024-spring |
| `jii-san-baa-san-wakagaeru-ed-1` | 添い遂げYO-YO!!／正蔵（CV：三木眞一郎）＆イネ（CV：能登麻美子） | ED1 | 2024-spring |
| `shinigami-bocchan-to-kuro-maid-3rd-season-op-1` | シネマティックパレード／なすお☆ | OP1 | 2024-spring |
| `shinigami-bocchan-to-kuro-maid-3rd-season-ed-1` | エトワールメモワール／アリス（CV：真野あゆみ） | ED1 | 2024-spring |
| `shinigami-bocchan-to-kuro-maid-3rd-season-ed-2` | 夜想曲／アリス（CV：真野あゆみ） | ED2 | 待核；全目錄及原動畫頁保留 |
| `shinigami-bocchan-to-kuro-maid-3rd-season-ed-3` | 満月とシルエットの夜（ウェディングVer.）／坊ちゃん（CV：花江夏樹）＆アリス（CV：真野あゆみ） | IN3 | 2024-spring |
| `vampire-dormitory-op-1` | Sugar Blood Kiss／FANTASTICS | OP1 | 2024-spring |
| `vampire-dormitory-ed-1` | また あした／山本美人（CV：市ノ瀬加那） | ED1 | 2024-spring |
| `mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2-op-1` | オン・ザ・フロントライン／ヒトリエ | OP1 | 2024-spring |
| `mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2-ed-1` | 守りたいもの／大原ゆい子 | ED1 | 2024-spring |
| `mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2-ed-2` | ツバサ／ナナホシ（CV：若山詩音） | ED2 | 2024-spring |
| `mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2-ed-3` | かげくらべの唄／大原ゆい子 | ED3 | 2024-summer |
| `lv2-kara-cheat-datta-moto-yuusha-kouho-no-mattari-isekai-life-op-1` | 旦那様とのラブラブ・ラブソング／フェンリース（CV：釘宮理恵） | OP1 | 2024-spring |
| `lv2-kara-cheat-datta-moto-yuusha-kouho-no-mattari-isekai-life-ed-1` | ユートピア学概論／DIALOGUE＋ | ED1 | 2024-spring |
| `unnamed-memory-op-1` | 呼び声／丁 | OP1 | 2024-spring |
| `unnamed-memory-ed-1` | blan_／Arika | ED1 | 2024-spring |
| `rinkai-op-1` | Windshifter／佐々木李子 | OP1 | 2024-spring |
| `rinkai-ed-1` | Override!／伊東泉（CV：川村海乃）、平塚ナナ（CV：葵あずさ）、弥彦巫子（CV：長谷川玲奈）、那古屋紗智（CV：北守さいか）、高松絹早（CV：杉山里穂）、熊本愛（CV：日向未南） | ED1 | 2024-spring |
| `tadaima-okaeri-op-1` | ふたつのことば／MADKID | OP1 | 2024-spring |
| `tadaima-okaeri-ed-1` | つなぎあい／谷本貴義 | ED1 | 2024-spring |
| `kono-subarashii-sekai-ni-shukufuku-wo-3-op-1` | Growing Up／Machico | OP1 | 2024-spring |
| `kono-subarashii-sekai-ni-shukufuku-wo-3-ed-1` | あの日のままのぼくら／アクア（CV：雨宮天）、めぐみん（CV：高橋李依）、ダクネス（CV：茅野愛衣） | ED1 | 2024-spring |
| `date-a-live-v-op-1` | Paradoxes／富田美憂 | OP1 | 2024-spring |
| `date-a-live-v-ed-1` | ヒトヒラ／sweet ARMS | ED1 | 2024-spring |
| `date-a-live-v-ed-2` | Paradoxes／富田美憂 | ED2 | 待核；全目錄及原動畫頁保留 |

- 公開anime ID：`curated-168138`、`curated-169584`、`curated-170604`、`curated-166873`、`curated-170130`、`curated-158709`、`curated-163141`、`curated-169698`、`curated-136804`、`curated-151380`。新增動畫、用途、歌曲、影片、結構化音源及發行品均0；25個原用途ID、序號與URL保留。更正18個原名、20個演唱名義，補23筆詞／曲／編角色及29筆演唱條目，非唯一人數。
- 死神第3期原ED3更正為第36話婚禮插曲IN3，原ID保留；Wedding改編版與原第1期OP共用歌曲ID、另列versionLabel。夜想曲與原第1期ED、デートV Paradoxes兩項用途亦共用已確認歌曲ID；原項目未曾另列公開songId，未因重用／改編再造歌曲。
- 無職II原24話6月30日24:00為曆日7月1日，かげくらべの唄屬夏季用途，原動畫補入既有夏季registry；常規OP／ED在最終話是否使用仍各自續查，不按整季首播或collection發行日一律分季。
- 12筆第一方歌曲／用途證據直接沿用已核官方NC標題及2026-08-30日期；所有既有影片物件、連結、日期及未重讀來源保留，只有じいさん與ヴァンパイア各兩筆既有官網來源實際更新。新讀Bangumi交叉來源標示簡中。其餘2,042部動畫JSON逐檔SHA-256相同。
- 全2,052部、4,642用途（4,516 OP／ED、116 IN、10 TS）均有dataStatus，1,016筆基本欄位證據、3,626筆來源待細分。累計處理1,738唯一用途；春142 OP／ED已核106、詳細核心0／缺口106，另13 IN；夏188 OP／ED已核157、詳細核心0／缺口157，另10 IN。分母變化來自用途更正、待核與實際曆日分季，歌曲未刪除。
- 首頁、全部歌曲及季度共用歌單的演唱摘要限制兩行，完整名義仍在DOM與動畫詳情。手機實測リンカイED列由143.36px降至106.42px，無省略底層資料；本批對既有角色長名單保持緊湊。

### 來源、缺口與續查條件

- じいさん：[原官網同頁](https://jisanbasan.com/)確認君がおじいちゃんあたしがおばあちゃん／コレサワ與添い遂げYO-YO!!／正蔵(CV.三木眞一郎)＆イネ(CV.能登麻美子)，AT-X4月7日23:30先於TOKYO MX24:30，ABEMA／Netflix24:00串流另列。未列詞曲編留詳細階段。
- 死神第3期：既有原NC標題確認シネマティックパレード／なすお☆、エトワールメモワール／アリス(CV.真野あゆみ)。[第3期ONAIR](https://bocchan-anime.com/onair/index3.html)原4月7日22:00；[婚禮公告](https://bocchan-anime.com/news/index02850000.html)、[原配信頁](https://lnk.to/74T9Mn6A)及[中文交叉](https://bangumi.tv/subject/455835)明第36話婚禮用原OP改編版及兩角色CV，原ED3改IN。原[第1期Music](https://bocchan-anime.com/music/index1.html)只證夜想曲歌曲身分，不足證第3期特殊ED；等待原第35話片尾／明示重用公告，季度暫空。Wedding編曲不套原OP，錄音關係留詳細階段。
- ヴァンパイア：既有原NC確認Sugar Blood Kiss／FANTASTICS與また あした／山本美人(CV.市ノ瀬加那)，[原官網](https://vampire-dormitory.com/)明4月7日23:30 TV。角色版與原發行歌手不混，細項待原single逐曲資料。
- 無職II：[官方主題歌collection公告](https://mushokutensei.jp/news/240714_01/)及[原2nd曲目](https://mushokutensei.jp/music/?season=2nd&tab=op)明第15話ツバサ由ナナホシ(CV.若山詩音)翻唱、第24話かげくらべの唄／大原ゆい子並明後者詞曲。原NC明オン・ザ・フロントライン／ヒトリエ、守りたいもの／大原ゆい子。[第24話原公告](https://mushokutensei.jp/news/240628_1/)6月30日24:00對應7月1日夏季；常規兩曲是否延用該話未推定。原期精確常規TV時段沿用既有曆日待原公告，現行2026第3期不套本期。
- Lv2、Unnamed Memory及ただおか：沿用原官方NC的旦那様とのラブラブ・ラブソング／フェンリース(CV.釘宮理恵)、ユートピア学概論／DIALOGUE＋、呼び声／丁、blan_／Arika、ふたつのことば／MADKID、つなぎあい／谷本貴義。[Lv2原ONAIR](https://lv2-cheat.com/onair)AT-X4月8日23:00、地上波與23:30串流分開。另兩部既有原期曆日保留，精確時段與作者留原期公告及詳細階段，不套現行續期。
- リンカイ：[原OP／ED公告](https://rinkai-pj.com/news/20240221_02/)明Windshifter／佐々木李子、5u5h1詞曲編；Override!由伊東泉／川村海乃、平塚ナナ／葵あずさ、弥彦巫子／長谷川玲奈、那古屋紗智／北守さいか、高松絹早／杉山里穂、熊本愛／日向未南六角色CV演唱，maimie詞及eba曲編。原期精確TV時段與single音源關係留續查，不以現行Project活動日期重分季。
- このすば3：[Music](https://konosuba.com/3rd/music/)逐曲明Growing Up／Machico、園田健太郎詞曲編；あの日のままのぼくら／アクア・めぐみん・ダクネス三角色CV、佐藤良成詞曲編。[原ONAIR](https://konosuba.com/3rd/onair/)TOKYO MX4月10日23:30，23:00先行串流另列；同頁solo／off vocal／TV曲表留詳細階段。
- デートV：[原Music](https://date-a-live5th-anime.com/music/)明Paradoxes／富田美憂及ヒトヒラ／sweet ARMS，兩曲渡部紫緒詞、坂部剛曲編；[原ONAIR](https://date-a-live5th-anime.com/onair/)AT-X4月10日23:30與TOKYO MX25:00分開。原ED2 Paradoxes的特殊片尾缺少第一方明示，兩輪後保留原入口、名義與詞曲編，季度暫空，待原逐話credit／官方特殊ED公告；solo version不當新歌或自動推全體錄音名單。
- 57筆完全季度待核、36筆非空季度use_quarters條件、12筆近期具體跨季缺口及ATRI後段日期分開保留，只查新證據及真實缺口，不因可選資料重搜全部。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部25筆、28季及資料／來源／媒體保留性通過。每曲dataStatus與followUp映射一致。
- 歌單摘要樣式改動另跑既有6項核心E2E全部通過，隔離4351／4352及暫存產物；首次私有啟動器未同步埠導致5項失敗，修正啟動環境後重跑，正常程式及測試未為此改動。
- Chromium393×852驗10頁25組狀態、12組季度歌單、4組OP／ED／IN篩選、6組原名／舊字搜尋、10組原TV、2筆待核及婚禮插曲原ID；首頁／全部歌曲／季度三入口演唱摘要均至多兩行，DOM完整名義與詳情六角色名單保留，無溢出、app errors或未同意iframe。
- in-app665像素核リンカイ2組狀態／1筆展開、六角色CV、maimie／eba、具體待補／續查及原2026-08-30來源日期，收合／展開通過；實際手機詳情／緊湊歌單及in-app截圖已檢視。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 資料、既有夏季registry、共用歌單摘要樣式及checkpoint變更；沒有新增季度、public契約、播放器請求、依賴或部署設定。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/rinkai/#theme-rinkai-ed-1`、`/anime/shinigami-bocchan-to-kuro-maid-3rd-season/#theme-shinigami-bocchan-to-kuro-maid-3rd-season-ed-3`、`/anime/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2/`、`/songs/`及`/seasons/2024-spring/`。第76批春10部23筆接續，作品聯集、基本階段、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料、緊湊歌單樣式及checkpoint分類提交；[PR #167](https://github.com/kyeunga25/anisonary/pull/167)的quality／Workers通過，正常rebase合併。完整main來源`ae677692ab4ab9809d612c9a2dc4f437a2ecfba8`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch75-basics`及完整main來源／PR #167，第76批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部25筆通過。
- 正式站Chromium393×852驗10頁25組狀態、12組季度、4組用途、6組新舊名搜尋、10組原TV、2筆待核及婚禮插曲原ID；首頁／全部歌曲／季度三入口演唱摘要至多兩行，完整DOM名義及詳情保留，無溢出、app errors或未同意iframe。
- in-app665像素核歌單兩行摘要及完整可讀文字、リンカイ2組狀態／1筆展開、六角色CV、maimie／eba、續查、原來源日期及收合／展開；手機詳情、緊湊歌單及in-app實際截圖均已檢視。本機既有6項核心E2E與正常PR／main E2E通過。
- annotated tag `batch75-basics`指向正式來源並已推送。第76批春10部23筆接續，57筆完全季度待核、36筆非空季度use_quarters條件、12筆近期具體跨季缺口及ATRI後段日期保留；作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-76（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20，沿用證據保留原日期。春10部23個原用途加同頁明標3插曲，共26筆，24筆基本欄位證據、2筆待核；所有已知缺項及具體續查條件在dataStatus與followUp保存。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `seiyuu-radio-no-uraomote-op-1` | Now On Air／伊藤美来 | OP1 | 2024-spring |
| `seiyuu-radio-no-uraomote-ed-1` | STAND BY YOU／歌種やすみ（CV：伊藤美来）＆夕暮夕陽（CV：豊田萌絵） | ED1 | 2024-spring |
| `seiyuu-radio-no-uraomote-in-1` | 揺れ恋ゆららか！／歌種やすみ＆夕暮夕陽 | IN1 | 2024-spring |
| `seiyuu-radio-no-uraomote-in-2` | 君と指を絡めて～光射す、君と～／夕暮夕陽 | IN2 | 2024-spring |
| `seiyuu-radio-no-uraomote-in-3` | さくらいろ／ハートタルト（歌種やすみ、夕暮夕陽、桜並木乙女） | IN3 | 2024-spring |
| `kaii-to-otome-to-kamikakushi-op-1` | ハザードシンボル／遊遊 | OP1 | 2024-spring |
| `kaii-to-otome-to-kamikakushi-ed-1` | 朱く染めて心臓／大渕野々花 | ED1 | 2024-spring |
| `boukyaku-battery-tv-op-1` | ライラック／Mrs. GREEN APPLE | OP1 | 2024-spring |
| `boukyaku-battery-tv-ed-1` | 忘レナ唄／マカロニえんぴつ | ED1 | 2024-spring |
| `kenka-dokugaku-op-1` | Wild Boy／MA55IVE THE RAMPAGE | OP1 | 2024-spring |
| `kenka-dokugaku-ed-1` | バイラルハック／Crab 蟹 Club | ED1 | 2024-spring |
| `maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-part-2-op-1` | 魔王／BURNOUT SYNDROMES×東山奈央 | OP1 | 2024-spring, 2024-summer |
| `maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-part-2-ed-1` | シンゲツ／楠木ともり | ED1 | 2024-spring, 2024-summer |
| `kaijuu-8-gou-op-1` | Abyss／YUNGBLUD | OP1 | 2024-spring |
| `kaijuu-8-gou-ed-1` | Nobody／OneRepublic | ED1 | 2024-spring |
| `kuroshitsuji-kishuku-gakkou-hen-op-1` | 狂信者のパレード -The Parade of Battlers／音羽-otoha- | OP1 | 2024-spring |
| `kuroshitsuji-kishuku-gakkou-hen-ed-1` | 贖罪／シド | ED1 | 2024-spring |
| `shadowverse-flame-arc-hen-op-1` | Do Or Die／ナノ | OP1 | 2024-spring, 2024-summer |
| `shadowverse-flame-arc-hen-ed-1` | HEAVY GAMER／LIL LEAGUE | ED1 | 2024-spring, 2024-summer |
| `sasayaku-you-ni-koi-wo-utau-op-1` | Follow your arrows／SSGIRLS（歌：笹倉かな） | OP1 | 2024-spring, 2024-fall |
| `sasayaku-you-ni-koi-wo-utau-ed-1` | ギフティ／木野ひまり（CV：嶋野花） | ED1 | 2024-spring |
| `sasayaku-you-ni-koi-wo-utau-ed-2` | メリトクラシー／ローレライ（歌：水上スイ） | ED2 | 2024-spring |
| `sasayaku-you-ni-koi-wo-utau-ed-3` | イタラズ／ローレライ（歌：水上スイ） | ED3 | 待核；全目錄及原動畫頁保留 |
| `sasayaku-you-ni-koi-wo-utau-ed-4` | 屋上のメロディー／SSGIRLS（歌：笹倉かな） | ED4 | 待核；全目錄及原動畫頁保留 |
| `the-new-gate-op-1` | 世界を射抜いて／Sou | OP1 | 2024-spring |
| `the-new-gate-ed-1` | カナタボシ／岡咲美保 | ED1 | 2024-spring |

- 公開anime ID：`curated-159039`、`curated-160090`、`curated-167927`、`curated-174653`、`curated-130590`、`curated-153288`、`curated-166715`、`curated-172187`、`curated-160181`、`curated-170890`。新增動畫0、用途3、歌曲ID3；三曲為揺れ恋ゆららか！、君と指を絡めて～光射す、君と～、さくらいろ。23個舊用途ID／序號／類型、URL及已有歌曲ID保留；更正16個原名、18個演唱名義，補23筆詞曲編及25筆演唱條目，非唯一人數。
- 14筆直接重用原官方NC標題與2026-08-30日期；新插曲與真正缺口才查新頁。既有影片物件、類型、連結、發行日期、錄音與發行品關係保留，沒有新播放器影片／外連、錄音或結構化發行品。只有声優ラジオ及魔王学院各兩筆既有官網來源實際更新；其餘2,042部動畫JSON逐檔SHA-256相同。
- 全2,052部、4,645用途（4,516 OP／ED、119 IN、10 TS）均有dataStatus；1,040筆基本欄位證據、3,605筆來源待細分，累計1,764唯一用途處理。春140 OP／ED已核127、詳細核心0／缺口127，另16 IN；夏192已核161、詳細核心0／缺口161；秋178已核166、詳細核心1／缺口165。作品聯集與全季範圍仍未閉合。

### 來源、缺口與續查條件

- [声優ラジオ官網同頁](https://seiyuradio-anime.com/)核Now On Air／伊藤美来（つむぎしゃち詞、夢見クジラ曲、大沢圭一編）、STAND BY YOU／歌種やすみ(CV.伊藤美来)＆夕暮夕陽(CV.豊田萌絵)，AT-X4月10日21:00原TV與TOKYO MX22:00、21:30串流分開。COCX-42280逐曲明標三首劇中歌及演唱名義，[交叉曲表](https://www.anisil.com/animes/5928-%E5%A3%B0%E5%84%AA%E3%83%A9%E3%82%B8%E3%82%AA%E3%81%AE%E3%82%A6%E3%83%A9%E3%82%AA%E3%83%A2%E3%83%86)再核IN；一般角色曲、Bonus三人／solo版及Instrumental未當新用途。詞曲編與各版收錄留詳細階段，桜並木乙女CV依同頁長谷川育美。
- [魔王学院原官網](https://maohgakuin.com/)核原AT-X4月12日22:00，地上波24:00與後段臨時時段另列；原NC明魔王／BURNOUT SYNDROMES×東山奈央及シンゲツ／楠木ともり，[第24話交叉名單](https://www.mau2.com/anime/maougakuinnofutekigousha2-2/ep/24)明兩曲及7月24日記錄，保留春並補夏。個別作者及錄音留原single逐曲表。
- [シャドウバースF原Music](https://anime.shadowverse.jp/music/)明2024年4月起Do Or Die／ナノ（ナノ詞、堀江晶太曲編）及HEAVY GAMER／LIL LEAGUE（SHOKICHI詞、SKY BEATZ與SHOKICHI曲、SKY BEATZ編）。[Cygames第95話原新聞稿](https://prtimes.jp/main/html/rd/p/000000993.000005593.html)同頁明9月7日9:30續播與兩首主題曲，補夏季；9月常規時段未冒充4月初回時段，團體簡介未當六人逐曲錄音名單。
- [ささ恋原OP／ED](https://sasakoi-anime.com/music/oped.html)明Follow your arrows／SSGIRLS(歌.笹倉かな)、藤林聖子詞／黒須克彦曲編，以及ギフティ／木野ひまり(CV.嶋野花)、渡辺翔詞曲／渡辺拓也編；對話CV與真實歌唱者分開。[ローレライ曲表](https://sasakoi-anime.com/music/album_lorelei.html)及原NC核メリトクラシー／ローレライ(歌.水上スイ)、渡辺翔詞曲／渡辺拓也編。
- [原延後公告](https://sasakoi-anime.com/news/index01370000.html)明11／12話2024年12月28日25:45起（曆日12月29日），[逐話交叉表](https://www.mau2.com/anime/sasayakuyounikoiwoutau)明11話仍用Follow your arrows作OP，保留春並補秋。交叉第1話另有同曲片尾記錄，第一方特殊ED未明前不另造用途，續查條件保存在該OP。
- 原ED3イタラズ與ED4屋上のメロディー：官方[ローレライ](https://sasakoi-anime.com/music/album_lorelei.html)／[SSGIRLS](https://sasakoi-anime.com/music/album_ssgirls.html)曲表核名稱、名義及詞曲，但不以劇中歌album整張收錄推出逐曲TV用途。交叉表列IN，第一方精確用途／錄音仍待原話數片尾或官方演奏片段；原類型及ID保留、季度暫空。イタラズ有不同編曲的Acoustic版，未將標準版編曲套入未知用途；屋上原album列住谷翔平，待本用途錄音確認再補。
- 怪異、忘却バッテリー、喧嘩独学、怪獣8号、黒執事寄宿学校及THE NEW GATE的原名與演唱名義直接重用已核官方NC標題；完全版不等於full、一般歌手介紹不代逐曲職位。原期曆日保留，精確初回時段、詳細名單及版本待原公告／正式逐曲表；沒有輪流重搜所有舊資料。
- 59筆完全季度待核、36筆非空季度use_quarters條件、12筆近期具體跨季缺口及ATRI後段日期分開保留；沒有把兩首原待核ED算入季度，亦未把本批新插曲當作重複影片或專輯版本。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部26筆、全28季及ID／媒體／來源保留性通過；dataStatus及followUp與authoring映射一致。三首同頁明標插曲加入後完成相應收尾檢查，沒有逐首跑全套。
- Chromium393×852驗10頁26組狀態、14組季度歌單（兩部夏季各2筆、ささ恋秋1筆及夏0筆）、4組OP／ED／IN篩選、6組原名／舊字搜尋、10組原TV資料與2筆待核；新插曲原名、角色CV、來源及具體續查可讀，無溢出、app errors或未同意iframe。
- in-app665像素核声優ラジオ5組狀態／1筆展開、揺れ恋ゆららか！兩角色CV及原名、IN用途、來源日期與續查，收合／展開通過；手機與in-app實際截圖已檢視。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 僅2024春資料、既有夏／秋registry及checkpoint變更；沒有新增季度、UI、public契約、播放器請求、依賴或部署設定，按矩陣不額外重跑本機全套E2E，正常PR／main保留核心E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/seiyuu-radio-no-uraomote/#theme-seiyuu-radio-no-uraomote-in-1`、`/anime/sasayaku-you-ni-koi-wo-utau/`、`/seasons/2024-spring/`、`/seasons/2024-summer/`及`/seasons/2024-fall/`。第77批春1部／冬9部26筆接續，標準TV作品聯集、基本階段、詳細及長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #168](https://github.com/kyeunga25/anisonary/pull/168)的quality／Workers通過，正常rebase合併。完整main來源`f6771d3a6991a24e19f1f3f333292bb916c805cb`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch76-basics`及完整main來源／PR #168，第77批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部26筆通過。
- 正式站Chromium393×852驗10頁26組狀態、14組季度、4組用途、6組新舊名搜尋、10組原TV、2筆待核及3首新插曲，無溢出、app errors或未同意iframe。in-app665像素核声優ラジオ5組狀態／1筆展開、揺れ恋ゆららか！兩角色CV、IN用途、實際來源日期、續查及收合／展開；手機及in-app實際截圖均已檢視。
- annotated tag `batch76-basics`指向正式來源並已推送。第77批春1部／冬9部26筆接續；59筆完全季度待核、36筆非空季度條件、12筆近期具體跨季缺口及ATRI後段日期保留，ささ恋同曲第1話片尾新用途待第一方。標準TV作品聯集及2020–2026基本階段仍未完成。

## 2020-2026-tv-basics-77（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20，沿用證據保留原日期。春1部及冬9部26個原用途，24筆基本欄位證據、2筆特殊ED用途待核；每筆的dataStatus及followUp保存缺項與明確續查條件。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `kimetsu-no-yaiba-hashira-geiko-hen-op-1` | 夢幻／MY FIRST STORY × HYDE | OP1 | 2024-spring |
| `kimetsu-no-yaiba-hashira-geiko-hen-ed-1` | 永久 -トコシエ-／HYDE × MY FIRST STORY | ED1 | 2024-spring |
| `isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu-op-1` | Cotton Days／Sizuk | OP1 | 2024-winter |
| `isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu-ed-1` | ふわふわpartyつられてhappy／harmoe | ED1 | 2024-winter |
| `jaku-chara-tomozaki-kun-2nd-stage-op-1` | イージー？ハード？しかして進めっ！／DIALOGUE＋ | OP1 | 2024-winter |
| `jaku-chara-tomozaki-kun-2nd-stage-ed-1` | 誰かじゃないから／DIALOGUE＋ | ED1 | 2024-winter |
| `jaku-chara-tomozaki-kun-2nd-stage-ed-2` | フレンドファンファーレ／DIALOGUE＋ | ED2 | 2024-winter |
| `youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season-op-1` | マイナーピース／ZAQ | OP1 | 2024-winter |
| `youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season-ed-1` | 今世大革命／ニノミヤユイ | ED1 | 2024-winter |
| `youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season-ed-2` | Fixer／ニノミヤユイ | ED2 | 待核；全目錄與原動畫頁保留 |
| `youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season-ed-3` | カーストルーム／ZAQ | ED3 | 待核；全目錄與原動畫頁保留 |
| `ishura-op-1` | 修羅に堕として／sajou no hana | OP1 | 2024-winter |
| `ishura-ed-1` | 白花／鈴木このみ | ED1 | 2024-winter |
| `mahou-shoujo-ni-akogarete-op-1` | My dream girls／NACHERRY | OP1 | 2024-winter |
| `mahou-shoujo-ni-akogarete-ed-1` | とげとげサディスティック／エノルミータ | ED1 | 2024-winter |
| `mahou-shoujo-ni-akogarete-ed-2` | とげとげサディスティック／エノルミータ | ED2 | 2024-winter |
| `mato-seihei-no-slave-op-1` | 夢の糸／鬼頭明里 | OP1 | 2024-winter |
| `mato-seihei-no-slave-ed-1` | CHA∞IN／内田真礼 | ED1 | 2024-winter |
| `dungeon-meshi-op-1` | Sleep Walking Orchestra／BUMP OF CHICKEN | OP1 | 2024-winter |
| `dungeon-meshi-op-2` | 運命／sumika | OP2 | 2024-spring |
| `dungeon-meshi-ed-1` | Party!!／緑黄色社会 | ED1 | 2024-winter |
| `dungeon-meshi-ed-2` | キラキラの灰／リーガルリリー | ED2 | 2024-spring |
| `nozomanu-fushi-no-boukensha-op-1` | IMMORTAL／JUVENILE | OP1 | 2024-winter |
| `nozomanu-fushi-no-boukensha-ed-1` | Keep Your Fire Burning／阿部真央 | ED1 | 2024-winter |
| `sasaki-to-pii-chan-op-1` | FLY／MADKID | OP1 | 2024-winter |
| `sasaki-to-pii-chan-ed-1` | 曖昧ガール／大西亜玖璃 | ED1 | 2024-winter |

- 公開anime ID：`curated-166240`、`curated-152072`、`curated-143866`、`curated-146066`、`curated-161476`、`curated-162780`、`curated-141821`、`curated-153518`、`curated-147642`、`curated-152682`。新增動畫／用途／歌曲ID均0；26個原用途ID、序號、類型及URL保留。更正17個歌曲原名、16個演唱名義，同頁補22筆詞曲編及17筆演唱條目（非唯一人數）。
- 既有影片只更正2筆呈現形式：夢幻由未證實full的full_music_video改music_video；永久 -トコシエ-由other改官方標明的lyric_video。影片ID、標題、渠道、日期及其他metadata相同，無新增音源或發行品，未重讀來源無日期更新；其他2,042部動畫JSON逐檔SHA-256相同。
- 魔法少女にあこがれてED2保留用途與影片，依原官方標題明標5人Ver.，與ED1共用歌曲ID；未把不同演唱版算新歌曲，也未由NC推full／TV錄音。角色／CV的逐人名單留待該版正式credits。
- 全2,052部、4,645用途（4,516 OP／ED、119 IN、10 TS）均有dataStatus；1,064筆基本欄位證據、3,581筆來源待細分，累計1,790唯一用途處理。冬134 OP／ED已核34、詳細核心0／缺口34；春142已核131、詳細核心0／缺口131，另16 IN。所有季度作品聯集仍未閉合，表內分母不代表全季總量。

### 來源、缺口與續查條件

- [鬼滅柱稽古原Music](https://kimetsu.com/anime/hashirageikohen/music/)核夢幻／MY FIRST STORY × HYDE及共同MY FIRST STORY、CHIMERAZ詞曲編，Hiro本曲留言明示與HYDE合唱；永久 -トコシエ-／HYDE × MY FIRST STORY由梶浦由記詞曲編。ED未由OP留言推個別歌唱，原首播5月12日保留，精確初回台別時段待詳細階段。
- [もふなで原發行商公告](https://news.ponycanyon.co.jp/2023/11/92445)同頁核Cotton Days／Sizuk及ふわふわpartyつられてhappy／harmoe，中村彼方詞、Tomggg曲編；明TOKYO MX原TV2024年1月7日22:00、BS11同日23:30、読売1月8日25:59。舊1月1日更正，不在未取得證據下宣稱舊日期為串流日；原作品站現停機，保留2026-08-30來源，不輪流重查。Sizuk一般專案簡介未當本曲AYAME演唱證據。
- 友崎2nd正常OP／ED直接重用既有官方影片原文，DIALOGUE＋名義保留全形；[原第5話專訪](https://tomozaki-koushiki.com/special/interview05.php)明フレンドファンファーレ為第5話特殊ED，未推最終話。逐曲作者及版本、收錄、確切平台留詳細階段。
- [よう実3rd專用Music](https://you-zitsu.com/3rd/music.html)核マイナーピース／ZAQ及ZAQ詞曲編；今世大革命／ニノミヤユイ、ニノミヤユイ與100回嘔吐詞、100回嘔吐曲編。聲優二ノ宮ゆい與音樂名義分開；當前4th主站未當3rd用途證據。
- 同頁只證明Fixer為ニノミヤユイ收錄曲及100回嘔吐詞曲編，未明特殊ED；兩輪定向查找後，舊Lantis商品已轉泛目錄，未以泛頁補證。カーストルーム原官方Lyric Video證原曲／ZAQ、原作OP；3rd官網留言只引用歌詞，未明本期ED。兩個舊用途ID及類型保留、季度暫空；取得第5／13話原字幕或明確官方特殊ED公告後再核用途，未猜本曲LCA。
- 迷宮飯四首由原官方NC標題核原名、名義及本期用途；[逐話交叉表](https://zh.wikipedia.org/wiki/%E8%BF%B7%E5%AE%AE%E9%A3%AF)明Sleep Walking Orchestra／BUMP OF CHICKEN與Party!!／緑黄色社会為2–13話，運命／sumika及キラキラの灰／リーガルリリー為14–24話，14話4月4日，後兩首由冬移春。2024年第1期第2シーズン與2027另一期分開。交叉第1話同曲作ED待第一方字幕後才新增用途；未由交叉作者欄單獨補第一方LCA。
- 異修羅、魔都精兵、望まぬ不死與佐々木原名及演唱名義直接重用既有官方NC，無新檢索；各原期日期保留，精確台別時段、詞曲編、個別演唱、音源、收錄與平台待本曲原發行逐曲表。団體／製作專案名義未推個人演唱或全部團員。
- 61筆完全季度待核、36筆非空季度use_quarters條件、12筆近期具體跨季缺口及ATRI後段日期分開保留。本批兩首待核未計入季度；可選詳細缺項不阻擋其餘24筆基本欄位。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部26筆、28季度統計及ID／來源／媒體保留性通過；dataStatus與followUp在公開JSON與authoring一致。
- Chromium393×852驗10頁26組狀態、12組季度（迷宮飯冬2／春2）、4組OP／ED篩選、6組原名／舊字搜尋、10組原TV與2筆待核，沒有溢出、app errors或未同意iframe。in-app665像素核もふなで2組狀態／1筆展開、原TV1月7日22:00、詞曲編、來源日期、具體續查及收合／展開，實際截圖已檢視。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 僅2024春／冬seed、春registry、兩筆既有影片形式與checkpoint變更；沒有新季度、UI、public契約、播放器請求、依賴或部署設定變更。按矩陣不額外重跑本機全套E2E，正常PR／main保留核心E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu/`、`/anime/kimetsu-no-yaiba-hashira-geiko-hen/`、`/anime/dungeon-meshi/`、`/seasons/2024-winter/`及`/seasons/2024-spring/`。第78批冬10部21筆接續，基本階段與長期目標未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #169](https://github.com/kyeunga25/anisonary/pull/169)的quality／Workers通過，正常rebase合併。完整main來源`d6277c2963fec5f2262cb74a5f9f9da1b6b1d097`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch77-basics`及完整main來源／PR #169，第78批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部26筆通過。
- 正式站Chromium393×852驗10頁26組狀態、12組季度、4組用途、6組原名／舊字搜尋、10組原TV及2筆待核，無溢出、app errors或未同意iframe；in-app665像素核もふなで2組狀態／1筆展開、原TV1月7日22:00、詞曲編、來源日期、續查與收合／展開。手機及in-app實際截圖均已檢視。
- annotated tag `batch77-basics`指向正式來源並已推送。第78批冬10部21筆接續；61筆完全季度待核、36筆非空季度條件、12筆近期具體跨季缺口及ATRI後段日期保留。2020–2026基本階段、詳細與整體範圍仍未完成。

## 2020-2026-tv-basics-78（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20，沿用來源保留原核對日期。2024冬10部21個原用途，20筆基本欄位證據、1筆特殊ED第一方用途待核；每筆dataStatus及followUp保存缺項與具體續查。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `sokushi-cheat-ga-saikyou-sugite-isekai-no-yatsura-ga-marude-aite-ni-naranai-n-desu-ga-op-1` | Killer Bars／Hilcrhyme | OP1 | 2024-winter |
| `sokushi-cheat-ga-saikyou-sugite-isekai-no-yatsura-ga-marude-aite-ni-naranai-n-desu-ga-ed-1` | Haze／桜木舞華【ウタヒメドリーム】（CV：鈴木杏奈） | ED1 | 2024-winter |
| `chiyu-mahou-no-machigatta-tsukaikata-op-1` | Cure／waterweed | OP1 | 2024-winter |
| `chiyu-mahou-no-machigatta-tsukaikata-ed-1` | Green jade／ChouCho | ED1 | 2024-winter |
| `kekkon-yubiwa-monogatari-op-1` | Lover's Eye／Sizuk | OP1 | 2024-winter |
| `kekkon-yubiwa-monogatari-ed-1` | ココロノナカ／AliA | ED1 | 2024-winter |
| `pon-no-michi-op-1` | ポンポポポン／中田花奈 feat. ぽんのみちオールスターズ | OP1 | 2024-winter |
| `pon-no-michi-ed-1` | Good Luck Waker／halca | ED1 | 2024-winter |
| `mashle-kami-shinkakusha-kouho-senbatsu-shiken-hen-op-1` | Bling-Bang-Bang-Born／Creepy Nuts | OP1 | 2024-winter |
| `mashle-kami-shinkakusha-kouho-senbatsu-shiken-hen-ed-1` | トーキョーズ・ウェイ！／私立恵比寿中学 | ED1 | 2024-winter |
| `yubisaki-to-renren-op-1` | 雪の音／Novelbright | OP1 | 2024-winter |
| `yubisaki-to-renren-ed-1` | snowspring／チョーキューメイ | ED1 | 2024-winter |
| `momochi-san-chi-no-ayakashi-ouji-op-1` | 鬼灯／神山羊 | OP1 | 2024-winter |
| `momochi-san-chi-no-ayakashi-ouji-ed-1` | 愛故／むﾄ | ED1 | 2024-winter |
| `ore-dake-level-up-na-ken-op-1` | LEveL／SawanoHiroyuki[nZk]:TOMORROW X TOGETHER | OP1 | 2024-winter |
| `ore-dake-level-up-na-ken-ed-1` | request／krage | ED1 | 2024-winter |
| `shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-2nd-op-1` | routine life／ゆいにしお | OP1 | 2024-winter |
| `shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-2nd-ed-1` | 導き、捧げて／JYOCHO | ED1 | 2024-winter |
| `shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-2nd-ed-2` | 息を吸う ここで吸う 生きてく／ゆいにしお | ED2 | 待核；全目錄與原動畫頁保留 |
| `ao-no-exorcist-shimane-illuminati-hen-op-1` | Eye's Sentry／UVERworld | OP1 | 2024-winter |
| `ao-no-exorcist-shimane-illuminati-hen-ed-1` | 学級日誌／紫 今 | ED1 | 2024-winter |

- 公開anime ID：`curated-158028`、`curated-137908`、`curated-160389`、`curated-165314`、`curated-166610`、`curated-166794`、`curated-167146`、`curated-151807`、`curated-156131`、`curated-158931`。新增動畫／用途／歌曲ID均0；21個原用途ID、序號、類型及URL保留。更正9個原名、10個演唱名義，補9筆詞曲編及10筆演唱條目（非唯一人數）。
- 18筆直接重用既有官方NC／MV標題，沒有為已充分證據另開搜索；只對真の仲間2nd缺口作兩輪定向查找及原Music期別分頁核對。同頁取得各自歌曲、作者及用途，不把第一期作者拼寫／編曲套入第二期曲目。所有舊來源日期保留，其他2,042部動畫JSON逐檔SHA-256相同。
- 6筆舊影片只將未由標題證實full的full_music_video收窄music_video，包含ぽんのみち兩首、真の仲間2nd三個既有影片及青の祓魔師ED；影片ID、渠道、標題與其他metadata保持，沒有新音源、影片、發行品或外連。
- 全2,052部4,645用途（4,516 OP／ED、119 IN、10 TS）均有dataStatus；1,084筆基本欄位證據、3,561筆來源待細分，累計1,811唯一用途處理。冬季133 OP／ED已核54、詳細核心0／缺口54；春142已核131、詳細核心0／缺口131。作品聯集及全季分母仍未閉合。

### 來源、缺口與續查條件

- 即死チート原NC明Killer Bars／Hilcrhyme及Haze／桜木舞華【ウタヒメドリーム】(CV.鈴木杏奈)，角色／CV有本曲證據；治癒魔法Cure／waterweed、Green jade／ChouCho，結婚指輪Lover's Eye／Sizuk及ココロノナカ／AliA均直接沿用原NC與2026-08-30日期。Sizuk專案名義未推製作人或其他曲目的個別歌唱。
- ぽんのみち原MV明ポンポポポン／中田花奈 feat. ぽんのみちオールスターズ與Good Luck Waker／halca，feat.名義未展開無證據的角色／CV；マッシュル原NC明Bling-Bang-Bang-Born／Creepy Nuts及トーキョーズ・ウェイ！／私立恵比寿中学。
- ゆびさき原NC核雪の音／Novelbright及snowspring／チョーキューメイ；百千原NC核鬼灯／神山羊及愛故／むﾄ；俺だけレベルアップ原NC核LEveL／SawanoHiroyuki[nZk]:TOMORROW X TOGETHER及request／krage，未推澤野本人或團體全部成員逐曲演唱。青の祓魔師島根篇原官方影片核Eye's Sentry／UVERworld及学級日誌／紫 今；其他期主題曲未混入。
- [真の仲間原Music](https://shinnonakama.com/music/)的2nd分頁核routine life／ゆいにしお、詞曲ゆいにしお／編曲水口浩次；導き、捧げて／JYOCHO、詞曲編中川大二郎。1st分頁另核息を吸う ここで吸う 生きてく／ゆいにしお及同曲詞曲編，與既有2021年原OP共用歌曲ID，保留本期舊ED2用途ID。
- 息を吸う本期特殊ED經兩輪定向查找仍未取得明確第一方話數用途；原MV與原站1st欄只能證第一期OP，未用其他作品藝人簡介、舊歌曲頁或非官方歌詞補第二期ED。季度暫空；取得2nd原話數片尾字幕或官方特殊ED公告後才補用途與季度。曲目作者已核與錄音版本等同是兩個問題，未由MV推full或新錄音。
- 原TV日期沿用有效原期來源，精確台別時段待原公告；本批未重查全量舊頁。詞曲編、個別演唱、音源、官方影片其他形式、收錄及正版確切入口等可選詳細缺口，按每曲followUp保存，集中深化延後。62筆完全季度待核、36筆非空季度條件、12筆近期具體跨季缺口與ATRI後段日期分開。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部21筆、28季度與來源／ID／媒體保留性通過；公開JSON的dataStatus及followUp與authoring一致。
- Chromium393×852驗10頁21組狀態、10組季度、4組OP／ED、6組原名／舊字搜尋、10組原TV及1筆待核；in-app665像素核即死チート2組狀態／1筆展開、Haze角色／CV、來源日期、具體續查及收合／展開，手機及in-app實際截圖已檢視，無溢出、app errors或未同意iframe。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 僅冬季seed、6筆影片形式與checkpoint變更；沒有新季度、UI、public契約、播放器請求、依賴或部署設定變更。按矩陣不額外重跑本機全套E2E，正常PR／main保留核心E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/sokushi-cheat-ga-saikyou-sugite-isekai-no-yatsura-ga-marude-aite-ni-naranai-n-desu-ga/`、`/anime/pon-no-michi/`、`/seasons/2024-winter/`。第79批冬10部25筆接續，基本階段、詳細與長期目標仍未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #170](https://github.com/kyeunga25/anisonary/pull/170)的quality／Workers通過，正常rebase合併。完整main來源`924211d3b91a0f94dc8808b07c882e4f0a872bc6`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch78-basics`及完整main來源／PR #170，第79批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部21筆通過。
- 正式站Chromium393×852驗10頁21組狀態、10組季度、4組用途、6組原名／舊字搜尋、10組原TV及1筆待核；in-app665像素核即死チート2組狀態／1筆展開、Haze角色／CV、原來源日期、缺口日期、續查及收合／展開。手機及in-app實際截圖均已檢視，無溢出、app errors或未同意iframe。
- annotated tag `batch78-basics`指向正式來源並已推送。第79批冬10部25筆接續；62筆完全季度待核、36筆非空季度條件、12筆近期具體跨季缺口及ATRI後段日期保留。2020–2026基本階段、詳細與整體範圍仍未完成。

## 2020-2026-tv-basics-79（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。2024冬10部25個原用途，24筆基本欄位證據、1筆特殊ED第一方用途待核；每筆dataStatus及followUp保存缺項與具體續查，詳細與短篇不阻擋基本階段。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `boku-no-kokoro-no-yabai-yatsu-2nd-season-op-1` | 「僕は...」／あたらよ | OP1 | 2024-winter |
| `boku-no-kokoro-no-yabai-yatsu-2nd-season-ed-1` | 恋してる自分すら愛せるんだ／こはならむ | ED1 | 2024-winter |
| `loop-7-kaime-no-akuyaku-reijou-wa-moto-tekikoku-de-jiyuu-kimama-na-hanayome-seikatsu-wo-mankitsu-suru-op-1` | Another Birthday／土岐隼一 | OP1 | 2024-winter |
| `loop-7-kaime-no-akuyaku-reijou-wa-moto-tekikoku-de-jiyuu-kimama-na-hanayome-seikatsu-wo-mankitsu-suru-ed-1` | 消えない／THE BINARY | ED1 | 2024-winter |
| `saikyou-tank-no-meikyuu-kouryaku-tairyoku-9999-no-rare-skill-mochi-tank-yuusha-party-wo-tsuihou-sareru-op-1` | Brave／いれいす | OP1 | 2024-winter |
| `saikyou-tank-no-meikyuu-kouryaku-tairyoku-9999-no-rare-skill-mochi-tank-yuusha-party-wo-tsuihou-sareru-ed-1` | 夢の中で／いれいす | ED1 | 2024-winter |
| `tsuki-ga-michibiku-isekai-douchuu-2nd-season-op-1` | ユートピア／須田景凪 | OP1 | 2024-winter |
| `tsuki-ga-michibiku-isekai-douchuu-2nd-season-op-2` | リヴァーサル／syudou | OP2 | 2024-spring |
| `tsuki-ga-michibiku-isekai-douchuu-2nd-season-ed-1` | ああ人生に涙あり／深澄 真（CV：花江夏樹）、識（CV：津田健次郎） | ED1 | 2024-winter |
| `tsuki-ga-michibiku-isekai-douchuu-2nd-season-ed-2` | My Factor／伊東健人 | ED2 | 2024-winter |
| `tsuki-ga-michibiku-isekai-douchuu-2nd-season-ed-3` | 常識外れヒューマン／前田佳織里 | ED3 | 2024-spring |
| `tsuki-ga-michibiku-isekai-douchuu-2nd-season-ed-4` | ああ人生に涙あり／巴（CV：佐倉綾音）、澪（CV：鬼頭明里） | ED4 | 待核；全目錄及原動畫頁保留 |
| `kyuujitsu-no-warumono-san-op-1` | 遊歩／いゔどっと | OP1 | 2024-winter |
| `kyuujitsu-no-warumono-san-ed-1` | 休息充電／GLASGOW | ED1 | 2024-winter |
| `high-card-season-2-op-1` | Showdown／FIVE NEW OLD | OP1 | 2024-winter |
| `high-card-season-2-ed-1` | 白昼夢／Raon | ED1 | 2024-winter |
| `dosanko-gal-wa-namara-menkoi-op-1` | なまらめんこいギャル／オーイシマサヨシ | OP1 | 2024-winter |
| `dosanko-gal-wa-namara-menkoi-ed-1` | わやわやわー！／亜咲花 | ED1 | 2024-winter |
| `akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-de-wa-arimasen-op-1` | Ray of Light／花たん | IN1 | 2024-winter |
| `akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-de-wa-arimasen-op-2` | LOVE or HATE?／前島麻由 | OP2 | 2024-winter |
| `akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-de-wa-arimasen-ed-1` | 好きがレベチ／エレノーラ･ヒルローズ（CV：日高里菜）、ユミエラ･ドルクネス（CV：ファイルーズあい） | ED1 | 2024-winter |
| `oroka-na-tenshi-wa-akuma-to-odoru-op-1` | オトワ／太陽と踊れ月夜に唄え | OP1 | 2024-winter |
| `oroka-na-tenshi-wa-akuma-to-odoru-ed-1` | Gift／石原夏織 | ED1 | 2024-winter |
| `hime-sama-goumon-no-jikan-desu-op-1` | まっさかさマジック！／shallm | OP1 | 2024-winter |
| `hime-sama-goumon-no-jikan-desu-ed-1` | 明日は明日の風が吹く／LEEVELLES | ED1 | 2024-winter |

- 公開anime ID：`curated-166216`、`curated-168374`、`curated-169935`、`curated-139518`、`curated-162002`、`curated-163151`、`curated-155963`、`curated-163076`、`curated-164244`、`curated-166522`。新增動畫／用途／歌曲ID均0；25個原用途ID、序號及URL保留，1筆OP→IN修正與對應影片override key同步，其他24筆類型保留。更正18個原名、18個演唱名義，補20筆詞曲編及21筆演唱條目（非唯一人數）。
- 18筆直接重用原官方NC原名／名義或特殊ED標題與2026-08-30日期。新讀兩個原官網同頁多曲、職位及原TV，中文逐話／主題曲表交叉；只有第二幕原站6筆既有來源條目實際更新，並非6次另查同頁。其他2,042部動畫JSON逐檔SHA-256相同。
- LOVE or HATE?舊MV未明full，形式由full_music_video收窄music_video；所有既有影片ID、標題、渠道及其他metadata、連結、錄音及發行品關係保留，沒有新音源、影片、發行品或外連。
- 全2,052部4,645用途（4,515 OP／ED、120 IN、10 TS）均有dataStatus；1,108筆基本欄位證據、3,537筆來源待細分，累計1,836唯一用途處理。冬129 OP／ED已核75、詳細核心0／缺口75，另1 IN；春144已核133、詳細核心0／缺口133，另16 IN。分母為現有快照，作品聯集仍未閉合。

### 來源、缺口與續查條件

- [悪役令嬢99原Music](https://akuyakulv99-anime.com/music/)同頁明Ray of Light／花たん為挿入歌（やしきん詞、うたたね歌菜曲編），[中文主題曲表](https://zh.wikipedia.org/wiki/%E5%8F%8D%E6%B4%BE%E5%8D%83%E9%87%91%E7%AD%89%E7%B4%9A99%EF%BD%9E%E6%88%91%E6%98%AF%E9%9A%B1%E8%97%8F%E9%A0%AD%E7%9B%AE%E4%BD%86%E4%B8%8D%E6%98%AF%E9%AD%94%E7%8E%8B%EF%BD%9E)亦列第1話插入曲；原公開op-1 ID仍可開啟，類型改IN1，未將作中遊戲OP當本作正常OP，也未新增另一筆重複歌曲或用途。
- 同頁正常OP LOVE or HATE?／前島麻由：深川琴美詞、OHTORA與maeshima soshi曲、maeshima soshi編；ED好きがレベチ／エレノーラ･ヒルローズ(CV.日高里菜)與ユミエラ･ドルクネス(CV.ファイルーズあい)：タナカ零詞曲編，角色／CV依逐曲列示。原OP2序號保留，不因更正另一用途而重排公開入口。
- [第二幕原站Music與TV](https://tsukimichi.com/)同頁核ユートピア／須田景凪（須田景凪詞曲編）、My Factor／伊東健人（常楽寺澪詞、石黑剛與常楽寺澪曲、石黑剛編）及常識外れヒューマン／前田佳織里（田仲圭太詞曲、TOPICS.LAB編）。原TV2024年1月8日TOKYO MX23:00，其他台別、再播及第三幕公告分開。
- リヴァーサル／syudou原站明第2court，原NC亦明第二court；[中文逐話表](https://zh.wikipedia.org/wiki/%E6%9C%88%E5%85%89%E4%B8%8B%E7%9A%84%E7%95%B0%E4%B8%96%E7%95%8C%E4%B9%8B%E6%97%85)第13話4月1日，與後半ED同歸春季。原Music合列syudou、syudou商店詞曲編，交叉只列syudou；逐人職位先留空，待正式逐曲credits釐清，不自行拆分。
- 第一夜特殊EDああ人生に涙あり／深澄 真(CV.花江夏樹)、識(CV.津田健次郎)直接沿用第二幕原NC，冬季與角色證據明確。舊ED4巴(CV.佐倉綾音)／澪(CV.鬼頭明里)影片則明第一幕第4話；交叉列第二幕20話5月20日，但兩輪定向查找無第一方相應用途，季度暫空。取得原第20話片尾或官方特殊ED公告才核用途與季度；交叉不同話數編曲不同，不套用第一夜或第一幕編曲，也不僅因同名即合併錄音。
- 僕ヤバ2原名「僕は...」保留影片內外雙引號所示的曲名括號；こはならむ、土岐隼一、THE BINARY、いれいす、いゔどっと、GLASGOW、FIVE NEW OLD、Raon、オーイシマサヨシ、亜咲花、太陽と踊れ月夜に唄え、石原夏織、shallm及LEEVELLES逐曲原名／名義均直接重用原期官方NC，未重查充分舊證據。詞曲編、個別成員、音源及收錄、平台詳細缺項按每曲狀態保存。
- 63筆完全季度待核、36筆非空季度use_quarters條件、12筆近期具體跨季缺口及ATRI後段日期分開；本批待核特殊ED未計入冬或春，已確認歌曲核心、角色與舊影片仍可查閱。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部25筆、28季及ID／來源／媒體保留性通過；dataStatus及followUp與authoring一致。初輪後僅兩則資料備註改為讀者用途與缺口說明，因此對最後資料重做相應收尾檢查，沒有修改正常程式或舊測試。
- Chromium393×852驗10頁25組狀態、12組季度（月導冬3／春2）、4組OP／ED／IN、6組原名／舊字搜尋、10組原TV與1筆待核。in-app665像素核悪役令嬢99的3組狀態／1筆展開，原op-1入口顯示劇中歌、花たん及詞曲編、日期、續查與收合／展開；手機與in-app實際截圖已檢視，無溢出、app errors或未同意iframe。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 僅冬季seed、春季registry、既有影片key／1筆形式及checkpoint變更；沒有新季度、UI、public契約、播放器請求、依賴或部署設定變更。按矩陣不額外重跑本機全套E2E，既有類型／別名相容沿用，正常PR／main保留核心E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-de-wa-arimasen/#theme-akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-de-wa-arimasen-op-1`、`/anime/tsuki-ga-michibiku-isekai-douchuu-2nd-season/`、`/seasons/2024-winter/`及`/seasons/2024-spring/`。第80批冬10部23筆接續，基本階段、詳細及整體範圍仍未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #171](https://github.com/kyeunga25/anisonary/pull/171)的quality／Workers通過，正常rebase合併。完整main來源`3671156056469442d2922017dea4bb2a15c25ef2`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch79-basics`及完整main來源／PR #171，第80批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部25筆通過。
- 正式站Chromium393×852驗10頁25組狀態、12組季度、4組OP／ED／IN、6組原名／舊字搜尋、10組原TV及1筆待核；in-app665像素核悪役令嬢99的3組狀態／1筆展開，原op-1入口顯示劇中歌、詞曲編、來源日期、續查與收合／展開。手機及in-app實際截圖均已檢視，無溢出、app errors或未同意iframe。
- annotated tag `batch79-basics`指向正式來源並已推送。第80批冬10部23筆接續；63筆完全季度待核、36筆非空季度條件、12筆近期具體跨季缺口及ATRI後段日期保留。2020–2026基本階段、詳細與整體範圍仍未完成。

## 2020-2026-tv-basics-80（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。冬10部23個原用途，22筆基本欄位證據、1筆特殊ED待核、3筆末話使用條件保存在dataStatus.followUp；基本、詳細及整體範圍未完成。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `synduality-noir-part-2-op-1` | アイレ／ARCANA PROJECT | OP1 | 2024-winter |
| `synduality-noir-part-2-ed-1` | Drifters／STEREO DIVE FOUNDATION | ED1 | 2024-winter |
| `shaman-king-flowers-op-1` | Turn the World／水樹奈々 | OP1 | 2024-winter, 2024-spring |
| `shaman-king-flowers-ed-1` | ディア・パンタレイ／上坂すみれ | ED1 | 2024-winter, 2024-spring |
| `gekai-elise-op-1` | believer／エリーゼ（CV：石川由依） | OP1 | 2024-winter |
| `gekai-elise-ed-1` | Listen／荒井麻珠 | ED1 | 2024-winter |
| `metallic-rouge-op-1` | Rouge／由薫 | OP1 | 2024-winter |
| `metallic-rouge-ed-1` | Scarlet／ダズビー | ED1 | 2024-winter |
| `yuuki-bakuhatsu-bang-bravern-op-1` | ババーンと推参！バーンブレイバーン／ブレイバーン（CV：鈴村健一） | OP1 | 2024-winter |
| `yuuki-bakuhatsu-bang-bravern-ed-1` | 双炎の肖像／イサミ・アオ（CV：鈴木崚汰）／ルイス・スミス（CV：阿座上洋平） | ED1 | 2024-winter |
| `yuuki-bakuhatsu-bang-bravern-ed-2` | ババーンと推参！バーンブレイバーン／ブレイバーン（CV：鈴村健一） | ED2 | 待核；全目錄及動畫頁保留 |
| `30-sai-made-doutei-da-to-mahou-tsukai-ni-nareru-rashii-op-1` | はじめては全部君がいい／声にならないよ | OP1 | 2024-winter |
| `30-sai-made-doutei-da-to-mahou-tsukai-ni-nareru-rashii-ed-1` | マジカルラブ／安達 清＆黒沢優一（CV：小林千晃・鈴木崚汰） | ED1 | 2024-winter |
| `sengoku-youko-op-1` | HIBANA／MindaRyn | OP1 | 2024-winter |
| `sengoku-youko-ed-1` | 夕闇のうた／KEIKO | ED1 | 2024-winter |
| `gekkan-mousou-kagaku-op-1` | オーバーサイエンてぃふぃっく！／月刊モー想科学編集部（石井孝英・山本和臣・白井悠介・土岐隼一） | OP1 | 2024-winter |
| `gekkan-mousou-kagaku-ed-1` | SCIENCE／土岐隼一 | ED1 | 2024-winter |
| `majo-to-yajuu-op-1` | 相聞詩／そこに鳴る | OP1 | 2024-winter |
| `majo-to-yajuu-ed-1` | 光のトリル／南條愛乃 | ED1 | 2024-winter, 2024-spring |
| `urusei-yatsura-2022-2nd-season-op-1` | ロックオン feat. はしメロ, 巡巡／MAISONdes | OP1 | 2024-winter |
| `urusei-yatsura-2022-2nd-season-op-2` | バイマイダーリン feat. みきまりあ, ニト。／MAISONdes | OP2 | 2024-spring |
| `urusei-yatsura-2022-2nd-season-ed-1` | 雷櫻 feat. 9Lana, SAKURAmoti／MAISONdes | ED1 | 2024-winter |
| `urusei-yatsura-2022-2nd-season-ed-2` | 春紛い feat. アユニ・D, ニト。／MAISONdes | ED2 | 2024-spring |

- 公開anime ID：`curated-169559`、`curated-147850`、`curated-162144`、`curated-162985`、`curated-165598`、`curated-167087`、`curated-168194`、`curated-169418`、`curated-153818`、`curated-155645`。新增動畫／用途／歌曲ID均0，23個原用途ID、序號、類型與URL保留。更正15個原名、19個演唱名義，補20筆詞曲編及20筆演唱條目（非唯一人數）；4首MAISONdes保留企畫及feat.名義，未把未分工參與者合列作歌唱。
- ブレイバーン原ED2與OP同歌同影片，共用OP歌曲ID；原片明OPノンテロップ，影片呈現改creditless_op，未用它證第一話ED或推新錄音。其他影片ID、標題、渠道與metadata、原連結、發行日、錄音及發行品關係保留；沒有新影片、音源、發行品或平台項目。
- 新讀同一原頁一次核多曲／職位，只因實際查閱うる星原TV換日，更新其4筆既有官網來源日期；其他舊來源日期保留。其餘2,042部動畫JSON逐檔SHA-256相同。全2,052部4,645用途（4,515 OP／ED、120 IN、10 TS）均有dataStatus；1,130筆基本欄位證據、3,515筆來源待細分，累計1,859唯一用途處理。
- 冬126 OP／ED已核95、詳細核心0／缺口95；春149已核138、詳細核心0／缺口138，另16 IN。春季有メタリック動畫metadata，但兩首尚無已確認春季用途；各季作品聯集未閉合，分母仍是現有快照。

### 來源、缺口與續查條件

- [SYNDUALITY原Staff&Cast](https://www.synduality-noir.com/staffcast/)明本期OPアイレ／ARCANA PROJECT、ED Drifters／STEREO DIVE FOUNDATION；原第2cour NC互核。未把配樂中山真斗或音樂專案成員自動當歌唱者。
- [勇気爆発原Music](https://bangbravern.com/music)的OP／ED分頁明ババーンと推参！バーンブレイバーン／ブレイバーン(CV.鈴村健一)、古屋真詞／加藤裕介曲編；双炎の肖像／イサミ・アオ(CV.鈴木崚汰)與ルイス・スミス(CV.阿座上洋平)、古屋真詞、磯崎健史與TSUKASA曲、磯崎健史編。CD的Instrumental未當新TV用途。原ED2兩輪查找仍無第一話特殊ED第一方，待原字幕／明確公告再核；保留既有ID、同歌曲及原影片，季度空值。
- [月刊OP頁](https://moh-scientific-anime.com/music/)逐曲明月刊モー想科学編集部四名演唱者石井孝英、山本和臣、白井悠介、土岐隼一及久下真音詞；曲／編合列ANDW、久下真音，逐人分工留正式credits，不按名字順序拆角色。[ED頁](https://moh-scientific-anime.com/musiced/)明SCIENCE／土岐隼一與オノシ(24chocolate)詞曲編，Instrumental及アニメ盤TV Edit留詳細關係深化，sideB不自動當動畫歌曲。
- [戦国妖狐第一部公告](https://sengoku-youko.com/news/detail.php?id=20)核HIBANA／MindaRyn（SACHIKO詞、小山寿曲編）與夕闇のうた／KEIKO（梶浦由記詞曲編）。[逐話曲表](https://zh.wikipedia.org/wiki/%E6%88%B0%E5%9C%8B%E5%A6%96%E7%8B%90)明正常用途2–6、8–12話，四月13話未用；維持冬季，不把動畫完結季度套到歌曲。TV size先行配信日不是TV用途日；交叉第1話OP作片尾待第一方後另核。
- FLOWERS原NC核水樹奈々／Turn the World、上坂すみれ／ディア・パンタレイ；[逐曲表](https://cal.syoboi.jp/tid/6921/goods)兩首均2–13話，[逐話表](https://zh.wikipedia.org/wiki/%E9%80%9A%E9%9D%88%E7%8E%8BFLOWERS)第13廻列四月，保留冬補春。沒有把台表深夜標記推為錄音發行日，第1話同曲特殊片尾待第一方再新增。
- 魔女と野獣[逐曲表](https://cal.syoboi.jp/tid/6943)明ED光のトリル使用2–12話，[逐話表](https://zh.wikipedia.org/wiki/%E9%AD%94%E5%A5%B3%E8%88%87%E9%87%8E%E7%8D%B8)第12話4月5日，ED保留冬補春；OP相聞詩沒有末話逐曲使用證據，保留冬並存四月續查。台帳演唱者有南篠異字，未照錄；南條愛乃以官方NC及中文曲表核對，台帳只作ED話數與曲名證據。
- メタリック兩首由原NC核Rouge／由薫與Scarlet／ダズビー。[TV期間交叉](https://en.wikipedia.org/wiki/Metallic_Rouge)至4月4日，動畫metadata可列春季，兩輪查找仍無第13話逐曲使用證據；兩曲只保留已確認冬季，待原片頭／片尾或官方逐話名單後補四月使用。與魔女OP共3筆具體跨季條件，未阻擋其餘已確認資料。
- [うる星原Music](https://uy-allstars.com/music/)明MAISONdes第3／4cour四曲及feat.參與署名，未由一般人物簡介推逐曲歌唱／作者；原站首播1月11日木曜24:55換算1月12日週五00:55。[ABEMA第36話報導](https://times.abema.tv/articles/-/10122337)明4月11日起換新OP／ED，與原Music第4cour名單對照，後半兩首歸春；報導只用作期別／播出證據，不聲稱它逐曲列名或作詞曲來源，也未從Prime Video上架日推出原TV。
- 外科医エリーゼ／石川由依角色名義、荒井麻珠、チェリまほ／声にならないよ及安達 清＆黒沢優一(CV.小林千晃・鈴木崚汰)直接重用原NC。未列職位、音源、收錄及平台按每曲fields與續查條件處理，已核欄位及有效證據優先沿用。64筆完全季度待核、39筆非空季度條件、15筆具體跨季缺口及ATRI後段日期分開保留。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 10部23筆、全28季及ID／來源／媒體保留性通過；dataStatus與followUp和authoring一致。核對來源發現南條異字後只修正一筆引用範圍，再驗最後資料，未修改正常程式或舊測試。
- Chromium393×852驗10頁23組狀態、15組季度（FLOWERS春2、魔女春1、メタリック春0、うる星春2、戦国春0）、4組OP／ED、7組原名／舊字／正確演唱者搜尋、10組原TV、1筆待核及3筆部分季度條件。in-app665像素核勇気爆発3組狀態／1筆展開，双炎兩角色CV及詞曲編、日期、續查及收合／展開，實際手機與in-app截圖已檢視，無溢出、app errors或未同意iframe。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 僅冬季seed、春registry、1筆既有影片形式及checkpoint，無新季度、UI、public契約、播放器請求、依賴或部署設定變更；既有動畫／歌曲季度分別表示沿用。按矩陣不額外重跑本機全套E2E，正常PR／main保留核心E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/yuuki-bakuhatsu-bang-bravern/#theme-yuuki-bakuhatsu-bang-bravern-ed-1`、`/anime/metallic-rouge/`、`/anime/majo-to-yajuu/`、`/seasons/2024-winter/`及`/seasons/2024-spring/`。第81批冬8部29筆原用途及未有歌曲動畫接續，基本、詳細及整體範圍仍未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #172](https://github.com/kyeunga25/anisonary/pull/172)的quality／Workers通過，正常rebase合併。完整main來源`5ea3eead0f3896dede2719b014fe69c45cc42531`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch80-basics`及完整main來源／PR #172，第81批資料未混入。
- 正式站90條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 10部23筆通過。
- 正式站Chromium393×852驗10頁23組狀態、15組季度、4組OP／ED、7組原名／舊字搜尋、10組原TV、1筆待核及3筆部分季度待核；in-app665像素核勇気爆発的3組狀態／1筆展開，角色二重唱、詞曲編、來源日期、續查與收合／展開。手機及in-app實際截圖均已檢視，無溢出、app errors或未同意iframe。
- annotated tag `batch80-basics`指向正式來源並已推送。第81批冬8部29筆接續；64筆完全季度待核、39筆非空季度條件、15筆近期具體跨季缺口及ATRI後段日期保留。2020–2026基本階段、詳細與整體範圍仍未完成。

## 2020-2026-tv-basics-81（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持，實際查閱2026-10-20。冬8部29筆原用途，25筆基本欄位證據、4筆待核、3筆非空季度條件；明治撃剣另補動畫資料，沒有新增未證歌曲。基本、詳細及整體範圍未完成。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `saijaku-tamer-wa-gomi-hiroi-no-tabi-wo-hajimemashita-op-1` | 果てのない旅／鈴木愛奈 | OP1 | 2024-winter |
| `saijaku-tamer-wa-gomi-hiroi-no-tabi-wo-hajimemashita-ed-1` | because／丁 | ED1 | 2024-winter |
| `cardfight-vanguard-divinez-op-1` | 切札／V.W.P | OP1 | 2024-winter, 2024-spring |
| `cardfight-vanguard-divinez-ed-1` | 両翼のBrilliance／Morfonica | ED1 | 2024-winter, 2024-spring |
| `bucchigiri-op-1` | Sesame／Kroi | OP1 | 2024-winter |
| `bucchigiri-ed-1` | らぶじゅてーむ／甲田まひる | ED1 | 2024-winter |
| `snack-basue-op-1` | ウラオモテアクアリウム／otonari feat. RIRIKO,佐高陵平 | OP1 | 2024-winter |
| `snack-basue-ed-1` | オリビアを聴きながら／明美（CV：高橋李依） | ED1 | 2024-winter |
| `snack-basue-ed-2` | 長い夜／タツ兄（CV：落合福嗣） | ED2 | 2024-winter |
| `snack-basue-ed-3` | シルエット・ロマンス／東美樹（CV：笠間淳） | ED3 | 2024-winter |
| `snack-basue-ed-4` | サバイバル／山田（CV：阿座上洋平）＆風間（CV：福島潤） | ED4 | 2024-winter |
| `snack-basue-ed-5` | SFラブストーリー／森田（CV：岩崎諒太）feat. 明美（CV：高橋李依） | ED5 | 2024-winter |
| `snack-basue-ed-6` | あゝ無情／明美（CV：高橋李依） | ED6 | 2024-winter |
| `snack-basue-ed-7` | ロンリー・チャップリン／バス江（CV：斉藤貴美子）with タツ兄（CV：落合福嗣） | ED7 | 2024-winter |
| `snack-basue-ed-8` | フレンズ／小雨（CV：宮本侑芽） | ED8 | 2024-winter |
| `snack-basue-ed-9` | 星空のディスタンス／森田（CV：岩崎諒太） | ED9 | 2024-winter |
| `snack-basue-ed-10` | 目を閉じておいでよ／山田（CV：阿座上洋平）feat. 明美（CV：高橋李依） | ED10 | 2024-winter |
| `snack-basue-ed-11` | 夢を信じて／勇者（CV：高橋良輔）＆ラスボス（CV：子安武人） | ED11 | 2024-winter |
| `snack-basue-ed-12` | 喝采／バス江（CV：斉藤貴美子） | ED12 | 2024-winter |
| `snack-basue-ed-13` | 恋のバカンス／Akemi、Basue | ED13 | 待核；全目錄及動畫頁保留 |
| `kingdom-5th-season-op-1` | 導火／DeNeel | OP1 | 2024-winter |
| `kingdom-5th-season-ed-1` | RULERS／Novel Core | ED1 | 2024-winter |
| `hikari-no-ou-2nd-season-op-1` | 飛花落花／Cocco | OP1 | 2024-winter |
| `hikari-no-ou-2nd-season-ed-1` | 抱きしめて／坂本真綾 | ED1 | 2024-winter |
| `ninja-kamui-op-1` | VENGEANCE／coldrain | OP1 | 2024-winter, 2024-spring |
| `ninja-kamui-ed-1` | VENGEANCE／coldrain | ED1 | 待核；全目錄及動畫頁保留 |
| `ninja-kamui-ed-2` | Eye Openers／Jessica Gelinas | ED2 | 2024-winter, 2024-spring |
| `ninja-kamui-ed-3` | Unbroken／Toft Willingham | ED3 | 待核；全目錄及動畫頁保留 |
| `ninja-kamui-ed-4` | Chain Reaction／Toft Willingham | ED4 | 待核；全目錄及動畫頁保留 |

- 公開anime ID：`curated-156891`、`curated-164204`、`curated-165254`、`curated-166093`、`curated-155227`、`curated-162842`、`curated-171144`、`curated-151639`。新增動畫／用途／歌曲ID均0，29個原用途ID、序號、類型及URL保留。更正23個原名、17個演唱名義，補20項詞曲編及22項演唱條目（非唯一人數）。
- 直接重用原官方NC的逐曲名稱與角色／CV；0筆舊來源日期更新。只新增實際查閱的第一方／交叉證據，2,044部其他動畫JSON逐檔SHA-256相同。NINJA KAMUI原ED1與OP同歌曲共用歌曲ID，仍保留原用途ID及待核狀態；影片形式兩筆改正，其他影片、錄音、發行品、連結與既有日期保留。沒有新影片、音源、收錄或平台項目。
- 全2,052部4,645用途（4,515 OP／ED、120 IN、10 TS）均有dataStatus，1,155筆基本欄位證據、3,490筆來源尚待細分；累計1,888唯一用途已處理。冬122 OP／ED已核120、詳細核心0／缺口120；春153已核142、詳細核心0／缺口142，另16 IN。分母為現有快照，續播作品聯集仍未閉合。

### 已核來源、缺口與續查條件

- 最弱テイマー原[OP Music](https://saijakutamer-anime.com//map.php#music)、[ED分頁](https://saijakutamer-anime.com//map.php#inner2)及[On Air](https://saijakutamer-anime.com//map.php#onair)核果てのない旅／鈴木愛奈、金子麻友美詞、夢見クジラ曲、夢見クジラ與大沢圭一編；because／丁詞曲編。原TV為1月12日週五23:00，先行串流及AT-X分開；同single另曲、Instrumental不當新動畫用途。
- [Divinez原Season1 Music](https://anime.cf-vanguard.com/vgd/music/season-1/)明切札／V.W.P，廉【Ren】詞曲、朝比奈健人【Kent Asahina】編；両翼のBrilliance／Morfonica，織田あすか詞、菊田大介曲編。[中文逐話曲表](https://zh.wikipedia.org/wiki/卡片戰鬥先導者)兩首正常用途均至13話，原期1至4月，補冬及春；第一話OP作ED仍待第一方後另核，不把現官網2026續期當原Season1。
- ぶっちぎり兩首直接沿用原官方NC名義與原名。[原逐話表](https://ja.wikipedia.org/wiki/ぶっちぎり%3F!)明第11話3月30日，第12話4月6日；正常EDらぶじゅてーむ為1–11話，末話使用Sesame作ED。正常用途保留冬季，動畫可列春；OP四月正常使用與特殊ED需原片頭／片尾或官方逐話音樂表再確認，未由全劇末日推兩曲均在四月使用，也未自動新增特殊ED。
- [スナック原Music](https://snackbasue.com/music)明otonari企劃與feat.名義、RIRIKO為Vocal & Lyrics、佐高陵平為Compose & Arrangement；未推佐高或Sound Produce歌唱。12話官方NC逐曲明原名、角色及CV，直接重用，不把原唱當動畫角色歌手。TV Size、HANO+7M ReMix及Instrumental留詳細階段分錄音／收錄。
- [スナック第13話Story](https://snackbasue.com/story/13)明恋のバカンス為ED且Blu-ray／配信限定；兩輪定向查找仍無逐曲演唱及原發布日期第一方。保留原Akemi／Basue名義待核，未由其他話CV推本曲歌手；待本話字幕或官方逐曲表與日期後再補季度，原ID與全目錄入口保留。
- キングダム第5期導火／DeNeel及RULERS／Novel Core直接重用原官方NC，來源日期保留，沒有讀現6期官網去替代原期。
- [WOWOW本期公告](https://prtimes.jp/main/html/rd/p/000007556.000001355.html)核火狩りの王第二季飛花落花／Cocco及抱きしめて／坂本真綾，前者Cocco詞曲、後者大江千里詞曲；編曲未列留空。原TV1月14日週日23:00，串流另列。飛花落花舊片明Lyric Video，形式改lyric_video；抱きしめて明Full Ver.，保留full_music_video，未額外推錄音。
- [音樂團隊原公告](https://team-max.co.jp/2023/12/11/meiji1874/)確認明治撃剣1874原TV1月14日週日23:00、BS松竹東急及dアニメ23:30配信。原官網連線失敗、新檢索播出頁導向404；沒有替換成404入口，也未把劇伴片山修志當OP／ED作者或歌手。待原片頭／片尾、官方歌曲名單恢復後再新增，0首已錄不表示沒有歌曲。
- [NINJA KAMUI日本官網](https://www.aniplex.co.jp/ninjakamui/)明VENGEANCE／coldrain及正常EDJessica Gelinas，與[官方原聲帶](https://music.apple.com/us/album/ninja-kamui-original-series-soundtrack/1729651210)Eye Openers互核。舊NC標題Eye Operners拼字保留為原影片metadata，歌曲名依曲目原名；原ED1 MV只明Official Music Video，改music_video，不能證第一話ED／full。
- [原TV逐話交叉表](https://en.wikipedia.org/wiki/Ninja_Kamui)為美國2至5月、日本7至9月；正常兩曲保留冬並補春，日本七月逐曲使用另存2條續查，動畫metadata與歌曲確認季度分開。第10話Unbroken的Toft演唱與ED用途尚缺第一方；第13話交叉Chain Reaction與官方原聲帶Chaine Reaction綴字及演唱對應仍缺；第一話VENGEANCE特殊ED亦缺。經兩輪查找保存3筆原名義、ID及季度空值，不把總藝人R・O・N當本曲歌手、相似綴字當同錄音或OST曲表當ED實證。待相應原片尾或官方逐曲演唱／用途公告後續查。
- 每曲fields只列未完成欄位，續查重用已核證據。全目錄68筆完全季度待核、42筆已有季度的use_quarters條件，其中18筆近期具體跨季缺口及ATRI後段日期另存；不因詳細欄位或單筆衝突停止其他已確認資料。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 8部29筆、28季及ID／來源／媒體保留性通過，authoring與公開dataStatus.followUp一致。
- Chromium393×852驗8頁29組狀態、12組季度（Divinez春2、NINJA春2／夏0、ぶっちぎり春0）、4組OP／ED、8組原名／舊字／角色搜尋、8組原TV、4筆待核及3筆部分季度條件，另驗明治撃剣0曲頁可正常瀏覽。in-app665像素驗スナック14組狀態／1筆展開，企劃名義、逐曲演唱、詞曲編、日期、續查及收合／展開；實際截圖已檢視，無溢出、app errors或未同意iframe。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 資料與既有影片形式／registry補正，無新季度、UI、public契約、播放器、依賴或部署設定變更；按矩陣不重跑額外本機全套E2E，正常PR／main保留核心E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/snack-basue/#theme-snack-basue-op-1`、`/anime/ninja-kamui/`、`/anime/meiji-gekken-1874/`、`/seasons/2024-winter/`及`/seasons/2024-spring/`。第82批先補2024冬續播8部30筆：葬送のフリーレン、シャングリラ・フロンティア、薬屋のひとりごと、ラグナクリムゾン、アンデッドアンラック、め組の大吾、キャプテン翼Jr.ユース、黙示録の四騎士；首播季度與冬季換曲分開。基本、詳細及整體範圍仍未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #173](https://github.com/kyeunga25/anisonary/pull/173)的quality／Workers通過，正常rebase合併。完整main來源`0a55586a98dca17d14e94b73e3894f827d032a4d`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch81-basics`及完整main來源／PR #173，第82批資料未混入。
- 正式站86條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 8部29筆通過。
- 正式站Chromium393×852驗8頁29組狀態、12組季度、4組OP／ED、8組原名／舊字／角色搜尋、8組原TV、4筆待核及3筆部分季度待核；in-app665像素核スナック的14組狀態／1筆展開，企劃、實際演唱與詞曲編、來源日期、續查與收合／展開。手機及in-app實際截圖均已檢視，無溢出、app errors或未同意iframe。
- annotated tag `batch81-basics`指向正式來源並已推送。第82批2024冬續播8部30筆接續；68筆完全季度待核、42筆非空季度條件、18筆近期具體跨季缺口及ATRI後段日期保留。2020–2026基本階段、詳細與整體範圍仍未完成。

## 2020-2026-tv-basics-82（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日維持；實際查閱2026-10-20。8部原期位於2023秋的標準TV，追2024冬／春續播及原期用曲。30筆原用途及7筆新用途全部具備基本欄位證據；3筆跨季條件另存，沒有把本批完成當整季或整體完成。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度 |
| --- | --- | --- | --- |
| `sousou-no-frieren-op-1` | 勇者／YOASOBI | OP1 | 2023-fall |
| `sousou-no-frieren-ed-1` | Anytime Anywhere／milet | ED1 | 2023-fall, 2024-winter |
| `sousou-no-frieren-ed-2` | bliss／milet | ED2 | 2023-summer |
| `sousou-no-frieren-op-2` | 晴る／ヨルシカ | OP2 | 2024-winter |
| `sousou-no-frieren-in-1` | bliss／milet | IN1 | 2023-fall |
| `megumi-no-daigo-kyuukoku-no-orange-op-1` | アンスロポス／SUPER EIGHT（旧：関ジャニ∞） | OP1 | 2023-fall, 2024-winter |
| `megumi-no-daigo-kyuukoku-no-orange-ed-1` | Perfect World／LMYK | ED1 | 2023-summer, 2023-fall |
| `megumi-no-daigo-kyuukoku-no-orange-ed-2` | MISSION／中島美嘉 | ED2 | 2024-winter |
| `ragna-crimson-op-1` | ROAR／ulma sound junction | OP1 | 2023-fall |
| `ragna-crimson-ed-1` | 鱗角／小林私 | ED1 | 2023-fall |
| `ragna-crimson-op-2` | 感脳性リベレーション／saji | OP2 | 2024-winter |
| `ragna-crimson-ed-2` | 空に標結う／小林私 | ED2 | 2024-winter |
| `shangri-la-frontier-op-1` | BROKEN GAMES／FZMZ | OP1 | 2023-fall |
| `shangri-la-frontier-ed-1` | エース／CHiCO | ED1 | 2023-fall |
| `shangri-la-frontier-op-2` | Danger Danger／FZMZ feat. icy | OP2 | 2024-winter |
| `shangri-la-frontier-ed-2` | ガジュマル ～Heaven in the Rain～／ReoNa | ED2 | 2024-winter |
| `captain-tsubasa-season-2-junior-youth-hen-op-1` | AS ONE／WEST. | OP1 | 2023-fall |
| `captain-tsubasa-season-2-junior-youth-hen-ed-1` | 燃えてヒーロー／WEST. | ED1 | 2023-fall |
| `captain-tsubasa-season-2-junior-youth-hen-op-2` | ファンタジスタ／WEST. | OP2 | 2024-winter |
| `captain-tsubasa-season-2-junior-youth-hen-op-3` | ハート／WEST. | OP3 | 2024-spring |
| `undead-unluck-op-1` | 01／女王蜂 | OP1 | 2023-fall, 2024-winter |
| `undead-unluck-ed-1` | know me...／八木海莉 | ED1 | 2023-fall, 2024-winter |
| `undead-unluck-op-2` | ラブコール／シユイ | OP2 | 2024-winter |
| `undead-unluck-ed-2` | この愛に敵うもんはない／OKAMOTO'S | ED2 | 2024-winter |
| `nanatsu-no-taizai-mokushiroku-no-yonkishi-op-1` | UP TO ME!／Little Glee Monster | OP1 | 2023-fall |
| `nanatsu-no-taizai-mokushiroku-no-yonkishi-ed-1` | Friends Are For／MOONCHILD | ED1 | 2023-fall |
| `nanatsu-no-taizai-mokushiroku-no-yonkishi-op-2` | Your Key／JO1 | OP2 | 2024-winter |
| `nanatsu-no-taizai-mokushiroku-no-yonkishi-ed-2` | 未完成／ざきのすけ。 | ED2 | 2024-winter |
| `kusuriya-no-hitorigoto-op-1` | 花になって／緑黄色社会 | OP1 | 2023-fall |
| `kusuriya-no-hitorigoto-ed-1` | アイコトバ／アイナ・ジ・エンド | ED1 | 2023-fall |
| `kusuriya-no-hitorigoto-op-2` | アンビバレント／Uru | OP2 | 2024-winter |
| `kusuriya-no-hitorigoto-ed-2` | 愛は薬／wacci | ED2 | 2024-winter |
| `kusuriya-no-hitorigoto-in-1` | 想風／大原ゆい子 | IN1 | 2023-fall |
| `kusuriya-no-hitorigoto-in-2` | 明日を訪ねて／XAI | IN2 | 2023-fall |
| `kusuriya-no-hitorigoto-in-3` | 雪中花／きしかな子 | IN3 | 2023-fall |
| `kusuriya-no-hitorigoto-in-4` | 蒼空の炎／竹中だいち | IN4 | 2024-winter |
| `kusuriya-no-hitorigoto-in-5` | 想い咲く時／アオイエマ。 | IN5 | 2024-winter |

- 公開anime ID：`curated-154587`、`curated-158791`、`curated-146493`、`curated-151970`、`curated-163024`、`curated-154116`、`curated-148862`、`curated-161645`。新增動畫0，原30個用途ID、序號、類型及URL保留；新增7個用途及6個歌曲ID。MISSION為新增ED，bliss第11話IN與原特別ED共用歌曲；其餘5筆為藥屋已證插曲，未由同名影片或OST收錄自動造新歌曲。
- 更正18個原名、13個演唱名義，補61項詞曲編及20項演唱條目（按用途，非唯一人數）。0筆舊來源日期更新，原2023資料2026-09-01等各自日期保留；只為實際查閱頁新增欄位證據。其他2,044部動畫JSON逐檔SHA-256相同。原影片、外連、發行日期、錄音及收錄關係保留，沒有新影片、錄音、發行品或平台項目。
- 全2,052部4,652用途（4,516 OP／ED、126 IN、10 TS）均有dataStatus；1,192筆基本欄位證據、3,460筆來源尚待細分，1,925唯一用途逐批處理。2024冬139 OP／ED已核137、詳細核心0／缺口137，另3 IN；2024春154已核143，另16 IN。2023秋189已核28，另4 IN；2023夏139已核13。跨季不可加總，作品聯集未閉合；冬季其餘兩筆現有未核為延後短篇，不能由此宣稱全季作品已盤點齊。

### 來源、實際補齊與續查條件

- 葬送のフリーレン原[第1cour Music](https://frieren-anime.jp/music/1st_1/)、[第2cour Music](https://frieren-anime.jp/music/1st_2)逐曲明勇者／YOASOBI與Ayase詞曲編、晴る／ヨルシカ與n-buna詞曲編、Anytime Anywhere／milet與milet詞、milet／野村陽一郎／中村泰輔曲及Evan Call編。[原TV公告](https://frieren-anime.jp/news/243/)明9月29日21:00初回2小時、10月6日起週五23:00通常TV。
- [bliss同一官方公告](https://frieren-anime.jp/news/1026/)明9月29日TV特別ED及11月17日第11話IN、milet詞／歌及Evan Call曲編，分夏ED與秋IN且共用歌曲。[初回配信說明](https://frieren-anime.jp/news/465/)明9月30日00:00配信1–4話才披露Anytime Anywhere正常ED，沒有把此配信日算作夏季TV正常ED或新錄音。[中文逐話表](https://zh.wikipedia.org/wiki/葬送的芙莉蓮_(動畫))交叉用途及日期；勇者9月29日TV實際OP仍無清楚證據，兩輪查找後保留通常TV秋，待原TV片頭／明確公告再補夏。
- [め組の大吾原Music](https://meguminodaigo.com/music/)明アンスロポス／SUPER EIGHT並記由関ジャニ∞改名、Perfect World／LMYK第一cour及漏錄MISSION／中島美嘉第二cour。[逐話曲表](https://zh.wikipedia.org/wiki/火線先鋒大吾)Perfect World為1–12話、首話9月30日，保留夏／秋；MISSION為13–23話、13話1月6日，補冬。アンスロポス秋／冬正常OP已核，9月30日首話是否以OP使用仍待原字幕，不由首播日推夏季。
- [ラグナ原Music](https://ragna-crimson.com/music/)明ROAR／ulma sound junction、鱗角／小林私與後半兩曲。[後半OP](https://ragna-crimson.com/music/op2.html)明感脳性リベレーション／saji、ヨシダタクミ詞曲與saji／アオヤマイクミ共同編；[後半ED](https://ragna-crimson.com/music/ed2.html)明空に標結う／小林私詞曲、レトロリロン編。同頁一部コーラス涼音已明，個別和聲留詳細名單深化，不推全部團體演唱。[中文曲表](https://zh.wikipedia.org/wiki/狩龍人拉格納)明前／後半與未用話數；台表9月30日深夜與原曆日10月1日分開，特殊ED未自動新增。
- [シャンフロ原1st／2nd archive Music](https://anime.shangrilafrontier.com/1st2nd/music/)同頁明第一季四曲與逐項詞曲編：BROKEN GAMES／FZMZ、Danger Danger／FZMZ feat. icy（更正舊Reol合列）、エース／CHiCO、ガジュマル ～Heaven in the Rain～／ReoNa。第一期1–13及14–25話按[中文逐話表](https://zh.wikipedia.org/wiki/香格里拉·開拓異境～糞作獵手挑戰神作～)歸秋與冬，未套現3rd的2027公告；弦編不推新錄音、一般Band成員資料不推逐曲演唱。
- [翼ジュニアユース原Music](https://ball-ha-tomodachi.com/jryouth/music/)明WEST.三首OP及燃えてヒーローED，第一cour OP／ED逐項詞曲編保存。[逐曲表](https://cal.syoboi.jp/tid/6806)OP為1–13、14–26、27–39話，[實際TV時表](https://cal.syoboi.jp/tid/6806/time)14話1月7日、27話4月7日，分秋／冬／春。ED未明使用話數，兩輪後仍無後兩cour片尾實證；保留秋，待14話後與27話後原字幕／明確延用公告再補冬／春，未混2018角色版。
- アンデッド原[OP1](https://undead-unluck.net/music/opening.html)、[ED1](https://undead-unluck.net/music/ending.html)、[OP2](https://undead-unluck.net/music/opening_2.html)、[ED2](https://undead-unluck.net/music/ending_2.html)核女王蜂／01、八木海莉／know me...、シユイ／ラブコール及OKAMOTO'S／この愛に敵うもんはない；後半同頁明DECO*27詞曲及オカモトショウ本人詞曲陳述，編曲未列。[逐話曲表](https://zh.wikipedia.org/wiki/不死不運)前半2–14話、14話1月13日，保留秋並補冬；後半15–24冬，不由cour名排除一月前半曲。
- [黙示録原Music](https://7sins-4knights.net/music/)明UP TO ME!／Little Glee Monster、Friends Are For／MOONCHILD、Your Key／JO1及未完成／ざきのすけ。，與[中文曲表](https://zh.wikipedia.org/wiki/七大罪_(漫畫))1–11及12–24話互核。公告局部標題誤列OP未採，依Music與本文ED分類；未由二期、一般簡介或交叉作者表補第一方未列職位。
- [藥屋原Season1](https://kusuriyanohitorigoto.jp/season1/index.html)同頁明四首正常OP／ED、Movie逐話插曲及OST逐曲歌／詞；[中文表](https://zh.wikipedia.org/wiki/藥師少女的獨語_(動畫))與[原文插曲表](https://www.anisil.com/animes/5728-%E8%96%AC%E5%B1%8B%E3%81%AE%E3%81%B2%E3%81%A8%E3%82%8A%E3%81%94%E3%81%A8?fp%5B%5D=3176)互核，新增想風／大原ゆい子（3話）、明日を訪ねて／XAI（9話）、雪中花／きしかな子（12話）、蒼空の炎／竹中だいち（19話）、想い咲く時／アオイエマ。（24話）。
- [想風原公告](https://kusuriyanohitorigoto.jp/season1/news/20231023_2.html)明大原ゆい子詞／歌、桶狭間ありさ曲編；其他四曲詞者依原OST逐曲列名，未由DISC音樂總作者推所有逐曲作編。明日をたずねて影片題名與正式OST訪ねて對照；中文表想こ、大原由衣子、竹中大志異字／漢字化不照錄，依第一方與原文逐曲表保存。[創作方作品項](https://love-annex.jp/creators/内田ましろ/)與[授權曲目](https://open.spotify.com/track/612TOuGBMHSUhmFzqtasqM)補想い咲く時插曲用途，平台共同藝人未當全部歌手、播放地區未聲稱。
- 藥屋OST另列ホトトギス及詞者柿原優子，23／24話插曲目前僅交叉表、演唱及本話用途第一方仍待原片尾／逐曲公告；保留具體續查，不新增猜測歌手或未證用途。其他特殊片尾、未列職位、錄音、收錄及平台依每曲fields／resumeWhen續查，3筆新跨季條件不阻擋已確認核心。全目錄68筆完全季度待核、45筆非空季度條件，其中21筆具體跨季缺口及ATRI日期分開保留。

### 本機檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 8部37筆、28季、原30用途／來源日期／媒體保留性及新增7用途／6歌曲關係通過；公開dataStatus.followUp與authoring一致。
- Chromium393×852驗8頁37組狀態、19組季度、6組OP／ED／IN、10組原名／舊名／新增演唱搜尋、8組原TV、3筆非空季度條件；含新MISSION、同歌曲bliss插曲及藥屋5插曲。in-app665核藥屋9組狀態／1筆展開，想い咲く時原名、名義、24話、已列詞者、日期、完整性及收合／展開；實際手機與in-app截圖均已檢視，無橫向溢出、app errors或未同意iframe。Browser plugin不可用，以專案Chromium驗明確手機尺寸。
- 僅2023秋seed、既有季度registry與checkpoint；沒有新季度、UI、public契約、播放器、依賴或部署設定變更。按矩陣不額外重跑本機全套E2E，正常PR／main保留核心E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機驗證不等於部署。

預覽入口：`/anime/kusuriya-no-hitorigoto/#theme-kusuriya-no-hitorigoto-in-5`、`/anime/sousou-no-frieren/#theme-sousou-no-frieren-in-1`、`/anime/megumi-no-daigo-kyuukoku-no-orange/#theme-megumi-no-daigo-kyuukoku-no-orange-ed-2`、`/seasons/2024-winter/`及`/seasons/2023-fall/`。第83批8部27筆既有用途接續：DOG SIGNAL、川越BOYS SING、SHY、はめつのおうこく、暴食のベルセルク、帰還者の魔法は特別です、とあるおっさんVRMMO、聖剣学院。已逐批處理的長篇沿用既有證據及續查觸發，不全面重搜。基本、詳細及整體範圍未完成。


### 正式發布驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #174](https://github.com/kyeunga25/anisonary/pull/174)的quality／Workers通過，正常rebase合併。完整main來源`5988e83914bfd62d9f5b17d89b2403280082a0e9`與已審閱樹一致，main兩項檢查均通過。
- 實際Wrangler部署固定4,194個已驗證產物，來源乾淨；Cloudflare版本metadata確認`batch82-basics`及完整main來源／PR #174，第83批資料未混入。
- 正式站86條HTML／JSON／目錄／Service Worker路徑與固定產物SHA-256相同，2條未知路徑為真正404；安全headers、API noindex／revalidation／無跨域開放及ApiProvider 8部37筆通過。
- 正式站Chromium393×852驗8頁37組狀態、19組季度、6組OP／ED／IN、10組原名／舊字／新增演唱搜尋、8組原TV、7筆新增用途及3筆部分季度待核；in-app665像素核藥屋的9組狀態／1筆展開，想い咲く時原名、名義、24話、已列詞者、來源日期、續查與收合／展開。手機及in-app實際截圖均已檢視，無溢出、app errors或未同意iframe。
- annotated tag `batch82-basics`指向正式來源並已推送。第83批冬續播及秋標準TV8部27筆接續；68筆完全季度待核、45筆非空季度條件、21筆近期具體跨季缺口及ATRI後段日期保留。2020–2026基本階段、詳細與整體範圍仍未完成。

## 2020-2026-tv-basics-83（正式驗收完成，已暫停）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實際查閱2026-10-20。8部27筆既有用途，23筆基本欄位證據、4筆第一方用途／版本缺口與1筆部分季度條件。沒有新動畫或新用途，不以批次結束代表基本階段或全部歌曲完成。完成本批發布與正式驗收後暫停，不啟動新批／排程。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `seiken-gakuin-no-maken-tsukai-op-1` | 1000年愛／藤川千愛 | OP1 | 2023-fall |
| `seiken-gakuin-no-maken-tsukai-ed-1` | ゆるり／果歩 | ED1 | 2023-fall |
| `boushoku-no-berserk-op-1` | Jekyll & Hyde／EverdreaM | OP1 | 2023-fall |
| `boushoku-no-berserk-ed-1` | 青の原石／EverdreaM | ED1 | 2023-fall |
| `shy-op-1` | Shiny Girl／MindaRyn | OP1 | 2023-fall |
| `shy-ed-1` | シリタイキモチ／シャイ/紅葉山テル（CV.下地紫野）＆小石川惟子（CV.東山奈央） | ED1 | 2023-fall |
| `shy-ed-2` | 君だけがヒーロー／小石川惟子（CV.東山奈央） | ED2 | 2023-fall |
| `shy-ed-3` | 私の青い空〜As I am〜／シャイ/紅葉山テル（CV.下地紫野） | ED3 | 2023-fall |
| `toaru-ossan-no-vrmmo-katsudouki-op-1` | Magic Writer／saji | OP1 | 2023-fall |
| `toaru-ossan-no-vrmmo-katsudouki-ed-1` | キボウノレシピ／岡咲美保 | ED1 | 2023-fall |
| `hametsu-no-oukoku-op-1` | 消えるまで／Hana Hope | OP1 | 2023-fall |
| `hametsu-no-oukoku-ed-1` | Prayer／Who-ya Extended | ED1 | 2023-fall |
| `kikansha-no-mahou-wa-tokubetsu-desu-op-1` | GET BACK／FLOW | OP1 | 2023-fall |
| `kikansha-no-mahou-wa-tokubetsu-desu-ed-1` | 6を撫でる／ももすももす | ED1 | 2023-fall |
| `kawagoe-boys-sing-op-1` | アンノウンの色彩／Kaco | OP1 | 2023-fall |
| `kawagoe-boys-sing-ed-1` | Ride Out the Fall／川越学園ボーイズ・クワイア部 | ED1 | 2023-fall |
| `kawagoe-boys-sing-ed-2` | グッバイ・ボーイ／葉加瀬友, a.k.a 博士（CV.葉山翔太） | ED2 | 第一方用途／版本待核，原入口保留 |
| `kawagoe-boys-sing-ed-3` | Summer Blessing／Hayato Doujima、Saitama Kenritsu Urawa Koukou Glee Club | ED3 | 第一方用途／版本待核，原入口保留 |
| `kawagoe-boys-sing-ed-4` | Matsubokkuri solo version／Tatsumaru Tachibana | ED4 | 第一方用途／版本待核，原入口保留 |
| `kawagoe-boys-sing-ed-5` | Ride Out the Fall／川越学園ボーイズ・クワイア部 | ED5 | 2023-fall |
| `kawagoe-boys-sing-ed-6` | Ride Out the Fall／川越学園ボーイズ・クワイア部 | ED6 | 2023-fall |
| `kawagoe-boys-sing-ed-7` | Ride Out the Fall／川越学園ボーイズ・クワイア部 | ED7 | 2023-fall |
| `kawagoe-boys-sing-ed-8` | Ride Out the Fall／川越学園ボーイズ・クワイア部 | ED8 | 2023-fall |
| `kawagoe-boys-sing-ed-9` | Ride Out the Fall／川越学園ボーイズ・クワイア部 | ED9 | 2023-fall |
| `kawagoe-boys-sing-ed-10` | Ride Out the Fall／川越学園ボーイズ・クワイア部 | ED10 | 2024-winter |
| `dog-signal-op-1` | 雪月風花／高橋優 | OP1 | 2023-fall |
| `dog-signal-ed-1` | シュガースポット／にしな | ED1 | 第一方用途／版本待核，原入口保留 |

- 公開anime ID：`curated-140501`、`curated-156039`、`curated-155389`、`curated-161364`、`curated-160900`、`curated-163142`、`curated-162209`、`curated-160514`。更正13個原名、17個演唱名義，補13項詞曲編及41項演唱條目，按用途計數。7筆Ride Out the Fall各話演唱用途共用既有歌曲身分；6個舊隱含重複身分接到同曲，原27用途ID、序號、類型、URL及原明確歌曲ID保留。既有影片、外連、錄音、發行日期及收錄資料未改，0新用途、0新歌曲、0新影片／錄音／發行品／平台項目。
- 全2,052部4,652用途（4,516 OP／ED、126 IN、10 TS）均有dataStatus；1,215筆基本欄位證據、3,437筆來源尚待細分。1,952個唯一用途逐批處理，其中1,816 OP／ED、126 IN、10 TS。0筆舊來源日期更新，原2026-09-01等各自日期保留；其他2,044部動畫JSON逐檔SHA-256相同。公開dataStatus.followUp與authoring的fields、note、resumeWhen、checkedAt一致，方便後續按未完欄位續查。
- 2023秋184 OP／ED已核50、詳細核心0／缺口50；2024冬140已核138、詳細核心0／缺口138，另3 IN。四筆暫空用途及川越冬季ED使秋季分母較前批減5，並非刪歌；動畫頁及全部歌曲保留。各季現有快照分母未閉合、跨季不能加總，未把全部詳細欄位補齊或整季完成計入。

### 來源、補齊與具體續查

- 聖剣学院原[主題曲公告](https://seikengakuin.com/news/142/)與[PV公告](https://seikengakuin.com/news/274/)核1000年愛／藤川千愛及ゆるり／果歩；[TV／配信頁](https://seikengakuin.com/onair-streaming/)明TV東京10月2日25:30，即10月3日週二01:30。舊9月26日為ABEMA先行配信曆日，已修原TV，不推夏季TV用曲。
- 暴食原[Music](https://bousyoku-anime.com/music/)核Jekyll & Hyde及青の原石／EverdreaM，ED40mP詞明確保存。ROCK★PANDA／HIPTIP在混合詞曲／製作職位合列，未按位置猜各人職位；待正式逐曲分欄。[TV公告](https://bousyoku-anime.com/news/31/)明10月4日25:30，即10月5日週四01:30；[先行配信公告](https://bousyoku-anime.com/news/30/)明10月1日24:00，原10月2日與TV分開。
- [SHY原Movie](https://www.shy-anime.com/movie/)同頁核第一期Shiny Girl／MindaRyn、正常EDシリタイキモチ／兩角色CV、第4話君だけがヒーロー／小石川惟子（東山奈央）、第5話私の青い空〜As I am〜／シャイ/紅葉山テル（下地紫野）。[中文逐話表](https://zh.wikipedia.org/wiki/SHY_(漫畫))互核，沒有混現第二期Music或把一般人物簡介移作逐曲作者。
- とあるおっさん原[OP Music](https://toaru-ossan.com/music/)明Magic Writer／saji、ヨシダタクミ詞曲及saji／河合英嗣共同編曲；[ED Music](https://toaru-ossan.com/music/ed.html)明キボウノレシピ／岡咲美保、青柳諒詞曲編。原英文曲名保留，樂團成員介紹未當全員演唱。
- [はめつ原Music](https://hametsu-anime.com/music.html)同頁核消えるまで／Hana Hope、Prayer／Who-ya Extended；已列TV size等候詳細深化，不由MV名稱推full或新錄音。[Aniplex原第一期BD6](https://online.aniplex.co.jp/itemajZzBnky06.html)明2023年10月cour與GET BACK／FLOW、6を撫でる／ももすももす；[原ED頁](https://returners-magic.com/music/?page=ed)互核，現在第二期Sorrow的作者不移植到GET BACK。
- 川越原[OP Music](https://boys-sing.com/music/opening.html)明アンノウンの色彩／Kaco詞歌、三島大声曲編；[逐話表](https://cal.syoboi.jp/tid/6870)OP1–10、11／12無OP，冬季延播不自動給OP補冬。[NBCUniversal授權ED專輯](https://music.apple.com/jp/album/kawagoe-boys-sing-ending-theme-ride-out-the-fall/1804600218)逐項明Ep2／3／4／8／9／10／12及演唱CV，7用途共用歌曲、保存各話版本名義及原用途ID；[中文日期表](https://zh.wikipedia.org/wiki/川越男子歌唱團)核第12話2024年1月15日，該筆ED歸冬，其餘已證秋。曲長不是TV／full證據，沒有新錄音或收錄關係。
- 川越Ep9交叉TV表另列Popperくん、授權配信名義未列；Ep10授權列9位、交叉TV表合列10位。個別TV／配信差異待原片尾，不造CV或移植Ep12名單。官網與授權平台角色異字不轉成新歌曲；本批主名義採正版平台團體、逐曲保存明確CV。
- 川越グッバイ・ボーイ／葉加瀬友（葉山翔太）與TAKU INOUE詞曲依[Original Songs vol.2](https://boys-sing.com/music/original_song.html)保存，但第5話ED第一方未明；Summer Blessing第6話的歌唱／特殊ED，以及松ぼっくりsolo version第7話與公開合唱版對應仍缺第一方。兩輪後三筆保留原ED ID、原入口及季度空值，待各原話數片尾／官方逐曲版本說明；不把故事標題、插曲、合唱商品或Lyric Video推特殊ED。原[Blu-ray取消公告](https://boys-sing.com/news/index00570000.html)已讀，未新增已取消商品作已發售收錄。
- DOG SIGNAL [NHK原OP公告](https://www.nhk.jp/g/blog/x1jts4qosu/)標題明雪月風花／高橋優；[中文曲表與逐話日期](https://zh.wikipedia.org/wiki/愛犬訊號)核原期與2024年1月續播。OP保留秋；冬季延用待原一月後TV片頭或明確逐曲表，不由動畫結束日推歌曲全程用到終回。[にしな官方Music](https://nishina247.jp/music/)核シュガースポット原名及演唱，ED用途兩輪後仍欠第一方明示；原ED入口保留、季度暫空，待NHK／演唱者／唱片方明示動畫ED或原TV片尾可讀後續查。
- 全目錄72筆完全季度待核、46筆非空季度條件，其中22筆具體跨季缺口及ATRI後段日期分開保存。本批4筆第一方缺口與DOG SIGNAL冬季條件不阻擋已核23筆；詞曲編、個人演唱、音源、影片、發行品及確切平台按逐曲狀態留待詳細階段。

### 檢查與展示

- npm test 4檔8項、build 2,098 HTML／4,194產物、ApiProvider 8部27筆、28季及原ID／明確歌曲ID／媒體／來源日期保留性通過；23筆基本欄位證據與4筆待核映射正確。
- Chromium393×852驗8頁27組狀態、10組季度（含動畫有冬／歌曲未證時0列）、2組用途篩選、8組舊羅馬字搜尋、8組原TV及4筆待核／1筆部分季度；in-app665驗川越11狀態／1筆展開、10人名單、實際第12話冬ED、舊／新來源日期、完整性與收合／展開。實際手機及in-app截圖已檢視，無溢出、app errors或未同意iframe。私有預覽查詢依已保存Kieru made修正，沒有為測試修改正常程式。
- 僅2023秋seed、既有季度registry及checkpoint；無新季度、UI、公開契約、播放器、依賴或部署設定。按矩陣不額外跑本機全套E2E，正常PR／main仍保留核心E2E。Cloudflare dry-run無bindings、文件連結、公開邊界245檔及diff收尾通過，本機通過不等於部署。

預覽入口：`/anime/kawagoe-boys-sing/#theme-kawagoe-boys-sing-ed-10`、`/anime/shy/#theme-shy-ed-2`、`/anime/seiken-gakuin-no-maken-tsukai/`、`/seasons/2023-fall/`及`/seasons/2024-winter/`。本批發布驗收後暫停，待明確繼續才接下列既有公開ID：`curated-142599`、`curated-146206`、`curated-166452`、`curated-111322`、`curated-129188`、`curated-158927`、`curated-162670`、`curated-162803`、`curated-156184`；9部20筆，先核豚のレバー延期／冬季，其餘原2023秋標準TV。這只是下一次接點，未開始收集或建立後批。基本、詳細、作品聯集與長期範圍未完成。

### 正式發布與暫停驗收（2026-10-20）

- 資料與checkpoint分類提交；[PR #175](https://github.com/kyeunga25/anisonary/pull/175)的quality／Workers通過，正常rebase合併。完整資料main來源`8577312ce64d53d6969006f18f3de1d6c8a51d82`與已審閱樹一致，main兩項正常檢查通過。
- 實際Wrangler部署4,194個固定已驗證產物，Cloudflare版本metadata核`batch83-basics`、完整來源及PR #175；正式站86條HTML／JSON／目錄／Service Worker路徑SHA-256相同，2條未知路徑真正404。安全headers、API noindex／revalidation／無跨域開放及ApiProvider8部27筆通過。
- 正式站Chromium393×852驗8頁27組狀態、10組季度、2組用途、8組舊名搜尋、8組原TV、4筆待核及1筆部分季度；in-app665驗川越11狀態／1筆展開、10人名單、第12話冬ED、舊／新來源日期、完整性與收合／展開。實際手機及in-app截圖已檢視，無溢出、app errors或未同意iframe。
- annotated tag `batch83-basics`指向資料正式來源並推送；驗收／暫停收尾為純文件提交，不新增資料或公開runtime內容。資料、程序、公開狀態與來源日期分開記錄，原工作目錄既有變更保留。
- 第83批收尾後已暫停。沒有第84批資料收集、範圍啟動、背景工作或排程；待明確繼續才從頂部9部20筆既有公開ID及逐曲缺口接續。全目錄72筆完全季度待核、46筆非空季度條件、22筆具體跨季缺口及ATRI日期保存；基本階段、各季作品聯集、詳細與長期目標未完成。

## 2020-2026-tv-basics-84（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日；實際查閱2026-10-22。9部、原20用途及2筆已證插曲，共22筆：20筆基本逐欄證據，2筆第一方特殊用途待核、3筆部分季度條件。作品聯集、詳細與全部歌曲目標均未完成。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `buta-no-liver-wa-kanetsu-shiro-op-1` | 私が笑う理由は／ASCA | OP1 | 2023-fall |
| `buta-no-liver-wa-kanetsu-shiro-ed-1` | ひとりじゃないよ／Myuk | ED1 | 2023-fall |
| `seijo-no-maryoku-wa-bannou-desu-season-2-op-1` | Semisweet Afternoon／結城アイラ | OP1 | 2023-fall |
| `seijo-no-maryoku-wa-bannou-desu-season-2-ed-1` | Lilac Melody／鈴木愛奈 | ED1 | 2023-fall |
| `seijo-no-maryoku-wa-bannou-desu-season-2-ed-2` | Blessing -realize-／Aira Yuuki | ED2 | 第一方用途待核，原入口保留 |
| `mahoutsukai-no-yome-season-2-part-2-op-1` | 眠らされたリネージュ／JUNNA | OP1 | 2023-fall |
| `mahoutsukai-no-yome-season-2-part-2-ed-1` | fam／遊遊 | ED1 | 2023-fall |
| `mahoutsukai-no-yome-season-2-part-2-in-1` | クワイエットクワイア／山本晃 | IN1 | 2023-fall |
| `mahoutsukai-no-yome-season-2-part-2-in-2` | holiday／井上苑子 | IN2 | 2023-fall |
| `tate-no-yuusha-no-nariagari-season-3-op-1` | SIN／MADKID | OP1 | 2023-fall |
| `tate-no-yuusha-no-nariagari-season-3-ed-1` | 好きになってはいけない理由／藤川千愛 | ED1 | 2023-fall |
| `tate-no-yuusha-no-nariagari-season-3-ed-2` | キラキラキュっ／フィーロ（CV：日高里菜） | ED2 | 第一方用途待核，原入口保留 |
| `goblin-slayer-ii-op-1` | Entertainment／Mili | OP1 | 2023-fall |
| `goblin-slayer-ii-ed-1` | 霞の向こうへ／中島由貴 | ED1 | 2023-fall |
| `spy-family-season-2-op-1` | クラクラ／Ado | OP1 | 2023-fall |
| `spy-family-season-2-ed-1` | トドメの一撃／Vaundy feat. Cory Wong | ED1 | 2023-fall |
| `dr-stone-new-world-part-2-op-1` | 遥か／清 竜人 | OP1 | 2023-fall |
| `dr-stone-new-world-part-2-ed-1` | 好きにしなよ／Anly | ED1 | 2023-fall |
| `dead-mount-death-play-part-2-op-1` | スクラップアート／水瀬いのり | OP1 | 2023-fall |
| `dead-mount-death-play-part-2-ed-1` | Hope／内田雄馬 | ED1 | 2023-fall |
| `boukensha-ni-naritai-to-miyako-ni-deteitta-musume-ga-s-rank-ni-natteta-op-1` | 閃 -Sen-／南條愛乃 | OP1 | 2023-fall |
| `boukensha-ni-naritai-to-miyako-ni-deteitta-musume-ga-s-rank-ni-natteta-ed-1` | homeward journey／やなぎなぎ | ED1 | 2023-fall |

- 公開anime ID：`curated-142599`、`curated-146206`、`curated-166452`、`curated-111322`、`curated-129188`、`curated-158927`、`curated-162670`、`curated-162803`、`curated-156184`。更正12個原名、12個演唱名義，同頁補39項詞／曲／編及14項演唱條目（按用途計數）；新增2筆IN、2個歌曲ID。原20用途ID、序號、類型、URL及明確歌曲ID保留；0新影片／音源／發行品／平台項目，既有媒體及外連不變。
- 全目錄2,052部、4,654用途（4,516 OP／ED、128 IN、10 TS）均有dataStatus；1,235筆基本逐欄證據、3,419筆來源尚待細分。1,974個唯一用途已逐批處理：1,836 OP／ED、128 IN、10 TS。未重查的原來源日期完整保留，舊動畫metadata核對日期保持2026-09-01，僅新讀URL逐項記2026-10-22；其他2,043部動畫JSON逐檔SHA-256相同。
- 2023秋OP／ED由184改182，已核68、詳細核心0／缺口68；兩筆特殊用途改季度空值但未刪歌曲。兩新IN不混入OP／ED分母。2024冬140已核138；2023夏139已核13，動畫有跨季不等於歌曲已證跨季。全28季表見上方，分母均為未閉合快照、跨季不可加總。當前全目錄欄位數由[CATALOG_STATS.md](./CATALOG_STATS.md)自動產生，與人工逐批核對分開。

### 已補欄位、來源與續查

- 豚のレバー[主題曲公告](https://butaliver-anime.com/news/?article_id=63743)核私が笑う理由は／ASCA、ひとりじゃないよ／Myuk；[原TV時段](https://butaliver-anime.com/onair/)為10月7日24:30，即10月8日00:30。[終回公告](https://butaliver-anime.com/news/?article_id=64647)證2024年2月5日25:30、實際2月6日，動畫補冬。逐話交叉表稱終回無OP、ASCA曲改ED，第一方逐曲用途未明；原OP只保秋並存冬季續查，不新造特殊ED或把Myuk同步掛冬。
- 聖女第2期[Music](https://seijyonomaryoku.jp/music/index.html)同頁核Semisweet Afternoon／結城アイラ及Lilac Melody／鈴木愛奈的詞曲編，OP按官方共同作編曲原署名保存。原Blessing -realize-特殊ED與中文插曲分類衝突，兩輪後仍缺第一方本曲及用途；保留原ED2、Aira Yuuki及季度空值，不由他首Blessing推作者。待原第12話credit／官方逐曲說明或恢復可讀的本作曲表。
- 魔法使的新娘[FlyingDog OP](https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025763/VTZL-233.html)及[ED](https://www.jvcmusic.co.jp/flyingdog/-/Discography/A028393/VE3WT-10645.html)核眠らされたリネージュ／JUNNA、fam／遊遊與詞曲編。[官方OST2](https://mahoyome.jp/music/detail.html?id=1969)可讀搜尋索引逐項明第22話クワイエットクワイア／山本晃及第24話holiday／井上苑子，M20／21作者明列；[中文曲表](https://zh.wikipedia.org/wiki/魔法使的新娘)互核。普通頁正文當次僅骨架，證據範圍如實記錄，沒有稱正文完整可讀或由OST收錄本身推IN；不由九月先行OP公開推夏季TV用途。
- [盾勇第3期](https://shieldhero-anime.jp/3rd/)核SIN／MADKID及好きになってはいけない理由／藤川千愛與AT-X 10月6日21:00 TV。キラキラキュっ／フィーロ（CV：日高里菜）曲目身分依官方MV與Columbia曲表可讀索引，但原第4話特殊ED／插曲用途仍欠第一方；保留ED2、序號、季度空值及原入口，待原TV片尾或官方逐話明示，不把角色歌或MV當ED。
- [Goblin II原Staff](https://goblinslayer.jp/staffcast/)核Entertainment／Mili、霞の向こうへ／中島由貴；[藝人原期公告](https://nakashimayuki.com/news/842.html)逐曲明敬也-amazuti-詞曲、amazuti編曲，九月音樂配信不當TV夏季。SPY第2期[OP](https://spy-family.net/tvseries/music/music_op_season2.php)核クラクラ／Ado、meiyo詞曲及菅野よう子 × SEATBELTS合署編曲；[ED](https://spy-family.net/tvseries/music/music_ed_season2.php)保Vaundy feat. Cory Wong完整名義，僅Vaundy作個別演唱，不推Cory歌唱或把一般個人簡介變本曲作者。
- Dr.STONE [原第3期後半公告](https://dr-stone.jp/news/4578/)核10月12日TV及遥か／清 竜人、好きにしなよ／Anly，不混當前第4期。Dead Mount [Music](https://dmdp-anime.jp/music/)核スクラップアート／水瀬いのり、Hope／内田雄馬；栁舘周平字形保存，Hope只補篠崎あやと三角色。[藝人原期887頁](https://www.uchidayuma.com/information/?id=887)與動畫頁另一共同作者的祐／裕字形不同，未猜合併；待正式更正或原發行credit。三種角色已有值不宣稱所有共同作者齊全。
- S級娘[製作方原期公告](https://prtimes.jp/main/html/rd/p/000007165.000014827.html)明AT-X 9月28日23:00是真正TV，與同時ABEMA配信分開，動畫補夏秋；[南條原公告](https://nbcuni-music.com/yoshino_nanjo/news/hp0001/index05000000.html)及[やなぎなぎ曲表](https://yanaginagi.net/discography/homeward-journey/)核閃 -Sen-、homeward journey與詞曲編。兩輪未獲九月首話逐曲credit，兩歌只確認秋、夏季待原TV首話字幕或明確逐話表，不跟隨動畫自動掛夏。
- 全目錄74筆完全季度待核、49筆已有季度的use_quarters條件，其中25筆具體跨季缺口及ATRI日期另存。本批2筆特殊用途與3筆跨季條件均在dataStatus.followUp保存fields／note／resumeWhen／checkedAt；其他未知詳細欄位按pendingFields續補。

### 網站、工具與檢查

- 整合現有網站與工具修改時逐檔三方合併，保留已發布資料及演唱者兩行樣式，原工作目錄未寫入。搜尋資料改不可變雜湊URL、分片與字詞路由，初始HTML約45 KB；18資料分片、64路由分桶，不把查詢文字傳給伺服器。首頁／歌曲／季度保緊湊表列，動畫原slug、錨點、全部歌曲、來源及搜尋分頁保留。
- Service Worker僅預載9個輕量fallback／靜態檔，共74,459 bytes，沒有全目錄HTML／JSON預載；清理本產品舊全站cache，不碰其他產品cache。公開runtime維持已審閱靜態snapshot；線上SEO、必要API noindex及影片明確連線同意不變。
- 統一verify:batch／verify:full從公開產物生成欄位統計，來源／設定／環境／全部產物雜湊吻合時才可重用本機Curated build；外部API同網址內容可變，停用自動重用。單元、audit及E2E不快取。公開程式及資料另以不入版控的本機備份保存、逐檔雜湊驗證；還原只能用新目錄。
- 首次完整gate發現2項Vitest中度漏洞，最小更新lockfile內8個Vitest套件4.1.11→4.1.12，其餘依賴及package範圍不變；實際安裝檔案版本已核。嚴格npm audit重新通過、0漏洞，沒有降低門檻。
- verify:batch通過；依賴修正後verify:full通過：6檔20項單元、型別0錯誤／警告、2,098 HTML／4,276產物、統計相符、公開邊界、Cloudflare dry-run無bindings及8條E2E。修正依賴前後4,276個公開產物逐檔位元相同。ApiProvider9部22筆與ID／來源日期／原媒體保留性通過。
- Chromium393×852實看9頁22組狀態、11組季度、2組用途、11組搜尋（9組舊羅馬字含作品條件、2組新IN）、9組原TV、2筆待核及3筆部分季度；1280×900預覽SPY緊湊兩列。無橫向溢出、app errors或未同意iframe，實際截圖已檢視。Kura Kura等廣泛字詞按正常分頁存在，私有QA以作品條件限定，未為測試改正常搜尋。
- 11份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證，私人目錄及秘密檔排除。正式GitHub／Cloudflare證據另記，本機成功不表示已部署。

預覽入口：`/anime/mahoutsukai-no-yome-season-2-part-2/#theme-mahoutsukai-no-yome-season-2-part-2-in-1`、`/anime/spy-family-season-2/`、`/seasons/2023-fall/`及`/seasons/2024-winter/`。第84批正式驗收後接續第85批10部33筆：`curated-155527`、`curated-154454`、`curated-160515`、`curated-126316`、`curated-142666`、`curated-143327`、`curated-158926`、`curated-150077`、`curated-158704`、`curated-154214`。這是已公開seed的下一接點，尚未開始來源查找；繼續按基本資料優先，兩輪未明即保留具體續查，不重查全部舊來源。

### 正式發布與驗收（2026-10-22）

- [PR #177](https://github.com/kyeunga25/anisonary/pull/177)的quality／Workers兩項正常檢查通過後rebase合併；main來源`24ec80ed4cda82316c9bbe54fa4b2edc189412e3`與已審閱樹完全一致，main兩項正常檢查亦通過。搜尋／工具、最小測試依賴、資料與checkpoint分類提交並推送，annotated tag `batch84-basics`已推送。
- 實際Wrangler部署4,276個固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR #177相符。正式站90條HTML／JSON／目錄／SW／搜尋資產路徑SHA-256與固定產物相同，另2條未知路徑真404；API noindex／revalidation及無開放CORS、安全headers通過。兩個實際搜尋資產返回br壓縮、immutable一年cache及noindex；沒有傳送搜尋文字。
- 正式站ApiProvider9部22筆與本機一致；Chromium393×852驗9頁22組狀態、11季度、2用途、11搜尋、9組原TV、2筆待核及3筆部分季度，1280×900驗緊湊歌單。無溢出、app errors或未同意iframe，兩張實際正式站截圖已檢視。
- 第84批資料與展示已正式驗收；不代表各季作品聯集、基本階段或全部歌曲完成。74筆完全季度待核、49筆非空季度條件、25筆具體跨季缺口及ATRI日期保存；逐曲待補欄位與續查狀態保留。

## 2020-2026-tv-basics-85（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實際查閱2026-10-22。10部、原33用途加1筆已證IN，共34筆：26筆基本逐欄證據、8筆特殊用途待核、4筆部分季度條件；另更正1筆既有作者續查欄位索引。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

### 公開用途與實際差異

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `ojou-to-banken-kun-op-1` | 好きになっちゃダメな人／オーイシマサヨシ | OP1 | 2023-fall |
| `ojou-to-banken-kun-ed-1` | Magie×Magie／鬼頭明里 | ED1 | 2023-fall |
| `dekoboko-majo-no-oyako-jijou-op-1` | Sugar Doughnuts／水樹奈々 | OP1 | 2023-fall |
| `dekoboko-majo-no-oyako-jijou-ed-1` | Welcome!／angela | ED1 | 2023-fall |
| `overtake-op-1` | Tailwind／叶 | OP1 | 2023-fall |
| `overtake-ed-1` | グッドラック／畠中 祐 | ED1 | 2023-fall |
| `b-project-netsuretsu-love-call-op-1` | 熱烈＊ラブコール／B-PROJECT | OP1 | 2023-fall |
| `b-project-netsuretsu-love-call-ed-1` | Cinematic／B-PROJECT | ED1 | 2023-fall |
| `b-project-netsuretsu-love-call-ed-2` | Miracles／キタコレ | ED2 | 2023-fall |
| `b-project-netsuretsu-love-call-ed-3` | Unknown Dimension／KiLLER KiNG | ED3 | 2023-fall |
| `b-project-netsuretsu-love-call-ed-4` | BEAST／THRIVE | ED4 | 2023-fall |
| `b-project-netsuretsu-love-call-ed-5` | Kissから始まるI love you／MooNs | ED5 | 2023-fall |
| `b-project-netsuretsu-love-call-ed-6` | Desire／ウルトラズ | ED6 | 第一方用途待核，原入口保留 |
| `b-project-netsuretsu-love-call-ed-7` | Never Back Down／キタコレ＆MooNs | ED7 | 第一方用途待核，原入口保留 |
| `b-project-netsuretsu-love-call-ed-8` | Let's Get The Party Started／THRIVE & KiLLER KiNG | ED8 | 第一方用途待核，原入口保留 |
| `b-project-netsuretsu-love-call-ed-9` | Update／ウルトラズ | ED9 | 第一方用途待核，原入口保留 |
| `migi-to-dali-op-1` | ユウマガドキ／そらるとりぶ | OP1 | 2023-fall |
| `migi-to-dali-ed-1` | Skyline／Nulbarich | ED1 | 2023-fall |
| `mf-ghost-ed-1` | Stereo Sunset (Prod. AmPm)／Himika Akaneya | ED1 | 2023-fall |
| `mf-ghost-op-1` | JUNGLE FIRE feat. MOTSU／芹澤 優 feat. MOTSU | OP1 | 2023-fall |
| `kamonohashi-ron-no-kindan-suiri-op-1` | いけないfool logic／UNISON SQUARE GARDEN | OP1 | 2023-fall |
| `kamonohashi-ron-no-kindan-suiri-ed-1` | リップシンク／hockrockb | ED1 | 2023-fall |
| `paradox-live-the-animation-ed-1` | BaNG!!!／BAE | ED1 | 第一方用途待核，原入口保留 |
| `paradox-live-the-animation-op-1` | RISE UP／BAE、The Cat‘s Whiskers、cozmez、悪漢奴等 | OP1 | 2023-fall |
| `paradox-live-the-animation-ed-2` | Every Day Every Night／武雷管 | ED2 | 2023-fall |
| `paradox-live-the-animation-ed-3` | Fadeaway／屋上のトモダチ（闇堂四季、矢戸乃上那由汰） | ED3 | 2023-fall |
| `paradox-live-the-animation-ed-4` | F△Bulous／BAE | ED4 | 第一方用途待核，原入口保留 |
| `paradox-live-the-animation-in-1` | FLY HIGH!!!／BAE | IN1 | 2023-fall |
| `watashi-no-oshi-wa-akuyaku-reijou-op-1` | レイジョアハンズ!! ～Raise Y/Our Hands!!～／レイ（CV.芹澤優）＆クレア（CV.奈波果林） | OP1 | 2023-fall |
| `watashi-no-oshi-wa-akuyaku-reijou-ed-1` | O.C. ～Optimum Combination～／レイ（CV.芹澤優） | ED1 | 2023-fall |
| `watashi-no-oshi-wa-akuyaku-reijou-ed-2` | O.C. ～Optimum Combination～／クレア（CV.奈波果林） | ED2 | 第一方用途待核，原入口保留 |
| `watashi-no-oshi-wa-akuyaku-reijou-ed-3` | O.C. ～Optimum Combination～／レイ（CV.芹澤優）＆クレア（CV.奈波果林） | ED3 | 第一方用途待核，原入口保留 |
| `konyaku-haki-sareta-reijou-wo-hirotta-ore-ga-ikenai-koto-wo-oshiekomu-op-1` | イケナイエトランゼ／緋月ゆい | OP1 | 2023-fall |
| `konyaku-haki-sareta-reijou-wo-hirotta-ore-ga-ikenai-koto-wo-oshiekomu-ed-1` | Graceful World／シャーロット・エヴァンズ（CV.早見沙織） | ED1 | 2023-fall |

- 公開anime ID：`curated-155527`、`curated-154454`、`curated-160515`、`curated-126316`、`curated-142666`、`curated-143327`、`curated-158926`、`curated-150077`、`curated-158704`、`curated-154214`。更正14個原名、21個演唱名義，同頁補41項詞／曲／編及25項演唱條目（按用途計數）；新增1筆IN／1個新歌曲身分。私推三個ED用途共用原ED1歌曲ID，2個舊隱含重複身分合到同曲，原用途ID／序號／類型／URL及明確歌曲ID保留；沒有新影片、錄音、發行品或平台項目，既有媒體不變。
- 全目錄2,052部、4,655用途（4,516 OP／ED、129 IN、10 TS）均有dataStatus；1,261筆基本逐欄證據、3,394筆來源尚待細分。2,008個唯一用途逐批處理，其中1,869 OP／ED、129 IN、10 TS。未重讀來源日期完整保留；動畫metadata仍各自保留原日期，只有新讀URL記2026-10-22。除本批10部及1部既有續查索引修正外，其他2,041部動畫JSON逐檔SHA-256相同。
- 2023秋現有OP／ED由182改174、已核93、詳細核心0／缺口93；8筆改用途季度空值而非刪歌，新IN不混入OP／ED分母。2023夏139 OP／ED已核13，新增兩個動畫季度關聯而不推定歌曲夏季使用。全28季表見上方；現有分母未閉合、跨季不可加總，欄位盤點由[CATALOG_STATS.md](./CATALOG_STATS.md)自動生成。

### 已補欄位、來源與續查

- お嬢原[TV頁](https://ojoutobankenkun.com/onair/)明初回9月28日25:05、實際9月29日01:05，通常24:30與2024年AT-X後續播出分開；動畫補夏秋。[商品頁](https://ojoutobankenkun.com/product/)可讀索引逐項核好きになっちゃダメな人／オーイシマサヨシ、大石昌良詞曲編，以及Magie×Magie／鬼頭明里、高瀬愛虹詞、脇眞富曲編；正文403的限制如實保留。首播後NCOP／ED公開不能證首話實際逐曲使用，兩歌只確認秋、夏季待原第1話credit或官方逐話曲表。
- でこぼこ原[Music](https://dekoboko-majo-anime.jp/music/)核Sugar Doughnuts／水樹奈々、Welcome!／angela；沒有從人物／樂團簡介推個別歌唱。OVERTAKE [Music](https://komaki-motors.com/music/)核Tailwind／叶、グッドラック／畠中 祐，[Lantis原公告](https://lantis.jp/title/overtake/news_1694845843.html)補hotaru詞、eba曲編；原TV為AT-X 10月1日22:00，2024 BS11重播不取代原期。
- ミギとダリ[Music](https://migitodali.com/music/)核ユウマガドキ／そらるとりぶ、煮ル果実詞曲編；兩位各自評論明示本OP演唱，保存そらる與りぶ。Skyline／Nulbarich詞曲編按原署名保存，未由band成員介紹推全員演唱。
- B-PROJECT原[TV](https://www.bpro-anime.com/onair/)明AT-X 10月2日21:30先播，Tokyo深夜26:00實為翌日02:00；[Theme Song](https://www.bpro-anime.com/music/themesong/)核熱烈＊ラブコール、Cinematic及各單位名義。四支官方NCED可讀索引／描述明Miracles、Unknown Dimension、BEAST、Kissから始まるI love you及對應Ending Theme；直接watch不可讀的限制不隱瞞，沒有因此建立錄音或推full。
- B-PROJECT Desire／ウルトラズ、Never Back Down／キタコレ＆MooNs、Let's Get The Party Started／THRIVE & KiLLER KiNG、Update／ウルトラズ已有官方曲目身分，但兩輪後仍缺清楚第一方原TV特殊ED用途；保留原ED6–9、季度空值及入口。待官方逐話片尾、明示集數的NCED／公告或原credit可讀，不由[OST](https://www.bpro-anime.com/music/soundtrack/)或single B面收錄推ED。
- Paradox原[主題曲公告](https://paradoxlive.jp/animation/news/detail.php?id=1111128)核RISE UP／四單位與Every Day Every Night／武雷管；Fadeaway／屋上のトモダチ由官方NCED第7話索引及[原商品](https://paradoxlive.jp/animation/discography/detail.php?id=1019937)核對。BaNG!!!及F△Bulous保留曲目身分，後者依官方△更正舊Δ、舊羅馬字仍可搜；[逐話交叉表](https://cal.syoboi.jp/tid/6869)列第1／8話插曲及無ED，但第一方特殊ED未明，原ED1／4與季度空值保留，不把IN交叉表生成支持ED的anime_use evidence。BaNG同頁明MICRO詞、藤本和則曲、Kazunori Fujimoto編，原署名保存，不推錄音版本。
- 新FLY HIGH!!!／BAE依[官方Opening Track](https://paradoxlive.jp/animation/discography/detail.php?id=1019935)明第1話挿入歌及[中文曲表](https://zh.wikipedia.org/wiki/Paradox_Live)可讀索引互核，新增IN1／秋；未由商品日、曲長或MV判TV size／full，詞曲編及詳細演唱名單保留待補。
- MF GHOST [Animax第一方原公告](https://prtimes.jp/main/html/rd/p/000000459.000003633.html)明9月30日23:00–23:30第1話最速TV；22:30是另外特番，10月7日才regular。動畫補夏秋，JUNGLE FIRE feat. MOTSU／芹澤 優 feat. MOTSU、Stereo Sunset (Prod. AmPm)／Himika Akaneya只確認秋，夏季待該原話credit或官方逐曲資料，不把整場特番或先行TV日期自動推兩歌夏季。
- 鴨乃橋ロン原TV 10月2日及イケナイ教原TV 10月4日沿有效舊來源、2026-09-01日期，不從現站第2期或2025配信日重設。各原期Music／special核いけないfool logic、リップシンク、イケナイエトランゼ、Graceful World及演唱名義；同頁已明作者保存，其他未知不由一般簡介推。
- 私推[官方Music](https://wataoshi-anime.com/music/)核レイジョアハンズ!! ～Raise Y/Our Hands!!～及O.C. ～Optimum Combination～三演唱名義與TECHNOBOYS PULCRAFT GREEN-FUND詞曲編；[原期第1話公告](https://wataoshi-anime.com/news/20231003.html)只確證レイED1。[具名演唱者媒體訪談](https://www.lisani.jp/0000242494/2/)提solo交替及第5話雙人ED，按來源規則只作cross_check；兩個精確NCED未取得清楚官方索引內容，クレアED2及雙人ED3保留原ID/type、同歌曲與季度空值，待官方逐話credit／NCED可核。沒有把採訪host誤標藝人官方渠道，沒有由同曲多演唱直接造音源ID。
- 既有`dead-mount-death-play-part-2-ed-1`的Hope共同作者祐／裕異字已在原note／resumeWhen記錄，本批只在原followUp.fields補列lyrics／composition／arrangement索引；原checkedAt 2026-10-22及各來源日期不變、無新查詢。三角色已有值的roles_recorded不表示全作者名單齊備，後續可依續查欄位精確回補。
- 全目錄82筆完全季度待核、53筆非空use_quarters條件，其中29筆具體跨季缺口及ATRI日期分開保存；本批8特殊用途與4跨季條件不阻擋其餘26筆。逐曲fields／note／resumeWhen／checkedAt及pendingFields維持可追溯，未知不猜補。

### 檢查與展示

- verify:batch及正式發布verify:full通過：6檔20項單元、型別0錯誤／警告、2,098 HTML／4,276產物、統計相符、嚴格audit零漏洞、公開邊界、Cloudflare dry-run無bindings與8條E2E。匹配來源／環境／產物雜湊後重用正常build，未快取單元／audit／E2E。
- ApiProvider10部34筆、28季、原33用途ID／明確歌曲ID／原媒體／未重讀來源日期及2,041部JSON保留性通過；Hope單筆續查欄位補正與其餘完整JSON相同。原ED ID保留而不讓錯誤IN交叉證據支撐ED，共同歌曲關係正確。
- Chromium393×852驗10頁34狀態、12季度、3用途、12搜尋（10組舊名＋作品、新IN及舊FΔ別名）、10組原TV、8待核與4partial，另驗Hope續查；1280×900預覽B-PROJECT六筆已分季的緊湊歌單。無溢出、app errors或未同意iframe，實際手機／桌面截圖已檢視；8筆季度空值仍可由全目錄及動畫舊入口到達。
- 本批只改既有資料／季度關聯／欄位盤點與checkpoint，未改UI／parser／播放器／依賴或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/paradox-live-the-animation/#theme-paradox-live-the-animation-in-1`、`/anime/b-project-netsuretsu-love-call/`、`/anime/watashi-no-oshi-wa-akuyaku-reijou/`及`/seasons/2023-fall/`。第85批正式驗收後接第86批6部23筆既有用途：`curated-157399`、`curated-161964`、`curated-163329`、`curated-156632`、`curated-159559`、`curated-162984`。只是下一接點，未開始來源查找；仍按基本資料與更新效率優先，短篇／WEB及詳細欄位延後。

### 正式發布與驗收（2026-10-22）

- [PR #178](https://github.com/kyeunga25/anisonary/pull/178)同SHA的quality／Workers通過後正常rebase合併。main來源`ad2cd8d7e40e33b81f4cb9368bf028b216c641d3`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch85-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站94條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部34筆與本機一致；Chromium393×852驗10頁34狀態、12季度、3用途、12搜尋、10原TV、8待核及4部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-86（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。6部原23用途加1筆已證IN，共24筆：22筆基本逐欄證據、2筆特殊用途待核。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `bullbuster-op-1` | トライ・ライ・ライ／NORISTRY | OP1 | 2023-fall |
| `bullbuster-ed-1` | 頑張れと叫ぶたび／鈴木このみ | ED1 | 2023-fall |
| `kage-no-jitsuryokusha-ni-naritakute-2nd-season-op-1` | grayscale dominator／OxT | OP1 | 2023-fall |
| `kage-no-jitsuryokusha-ni-naritakute-2nd-season-ed-1` | Polaris in the Night／ラムダ（CV：長谷川育美） | ED1 | 2023-fall |
| `kage-no-jitsuryokusha-ni-naritakute-2nd-season-ed-2` | Polaris in the Night／ニュー（CV：内田真礼） | ED2 | 2023-fall |
| `kage-no-jitsuryokusha-ni-naritakute-2nd-season-ed-3` | Polaris in the Night／カイ（CV：南真由） | ED3 | 2023-fall |
| `kage-no-jitsuryokusha-ni-naritakute-2nd-season-ed-4` | Polaris in the Night／オメガ（CV：前川涼子） | ED4 | 2023-fall |
| `kage-no-jitsuryokusha-ni-naritakute-2nd-season-ed-5` | Everything is Changing／前島麻由 | IN5 | 2023-fall |
| `kage-no-jitsuryokusha-ni-naritakute-2nd-season-ed-6` | Darling in the Night／七陰 | ED6 | 2023-fall |
| `kage-no-jitsuryokusha-ni-naritakute-2nd-season-ed-7` | HIGHEST／OxT | ED7 | 第一方用途待核，原入口保留 |
| `tokyo-revengers-tenjiku-hen-op-1` | ホワイトノイズ／Official髭男dism | OP1 | 2023-fall |
| `tokyo-revengers-tenjiku-hen-ed-1` | Say My Name／HEY-SMITH | ED1 | 2023-fall |
| `uma-musume-pretty-derby-season-3-ed-1` | ロストシャイン／キタサンブラック（CV.矢野妃菜喜） | ED1 | 2023-fall |
| `uma-musume-pretty-derby-season-3-op-1` | ソシテミンナノ／キタサンブラック（CV.矢野妃菜喜）、サトノダイヤモンド（CV.立花日菜）、サトノクラウン（CV.鈴代紗弓）、シュヴァルグラン（CV.夏吉ゆうこ）、サウンズオブアース（CV.MAKIKO）、ドゥラメンテ（CV.秋奈） | OP1 | 2023-fall |
| `uma-musume-pretty-derby-season-3-ed-2` | アコガレChallenge Dash!!／キタサンブラック（CV.矢野妃菜喜）、スペシャルウィーク（CV.和氣あず未）、サイレンススズカ（CV.高野麻里佳）、トウカイテイオー（CV.Machico）、ウオッカ（CV.大橋彩香）、ダイワスカーレット（CV.木村千咲）、ゴールドシップ（CV.上田 瞳）、メジロマックイーン（CV.大西沙織） | ED2 | 2023-fall |
| `uma-musume-pretty-derby-season-3-ed-3` | 空のほほえみ方／キタサンブラック（CV.矢野妃菜喜） | ED3 | 2023-fall |
| `uma-musume-pretty-derby-season-3-ed-4` | 夢のこたえ／サトノダイヤモンド（CV.立花日菜） | ED4 | 2023-fall |
| `uma-musume-pretty-derby-season-3-ed-5` | Ambitious World／サトノダイヤモンド（CV.立花日菜）、キタサンブラック（CV.矢野妃菜喜） | ED5 | 第一方用途待核，原入口保留 |
| `uma-musume-pretty-derby-season-3-ed-6` | うまぴょい伝説／31名角色／演唱者，完整逐人名單見動畫頁及公開JSON | ED6 | 2023-fall |
| `uma-musume-pretty-derby-season-3-in-1` | 光の後ろ姿／シュヴァルグラン（CV.夏吉ゆうこ） | IN1 | 2023-fall |
| `16bit-sensation-another-layer-op-1` | 65535／中川翔子 | OP1 | 2023-fall |
| `16bit-sensation-another-layer-ed-1` | リンク～past and future～／秋里コノハ（CV.古賀葵） | ED1 | 2023-fall |
| `kamierabi-god-app-op-1` | スクラップ＆ビルド／ELAIZA | OP1 | 2023-fall |
| `kamierabi-god-app-ed-1` | Bleed My Heart／Alisa | ED1 | 2023-fall |

- 公開anime ID：`curated-157399`、`curated-161964`、`curated-163329`、`curated-156632`、`curated-159559`、`curated-162984`。更正11個原名、17個演唱名義；同頁補50項詞／曲／編、61項演唱（按用途計）。新增光の後ろ姿1筆IN／1歌曲身分；Everything is Changing為既有用途分類更正，原ed-5 ID及sequence5保留，非新增。四Polaris共用原ED1歌曲；天竺與聖夜OP明示續用，兩用途首次共同顯式設定聖夜原基底songId，較早用途僅補此關係、其他JSON欄位完全不變。未新增影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,656用途（4,515 OP／ED、131 IN、10 TS）均有dataStatus；1,283筆基本逐欄證據、3,373筆來源待細分。2,032個唯一用途逐批處理，其中1,891 OP／ED、131 IN、10 TS。原23用途ID／序號及明確歌曲ID、原媒體、未重讀來源日期保留；除6部與1部既有歌曲關係補齊外，其他2,045部動畫JSON逐檔SHA-256相同。
- 2023秋OP／ED由174改171、已核113、詳細核心0／缺口113：1筆改IN及2筆季度空值，不刪歌曲；新IN不混入OP／ED。28季表見頂部，分母未閉合、跨季不能加總；[CATALOG_STATS.md](./CATALOG_STATS.md)為自動欄位盤點，三作者角色有值不代表全名單或詳細資料完成。

### 證據與續查

- [Bullbuster官網](https://bullbuster.jp/)同頁核トライ・ライ・ライ／NORISTRY、頑張れと叫ぶたび／鈴木このみ及詞曲編，最早AT-X10月4日21:00，Lemino先行配信分開。[Tokyo原期放送公告](https://tokyo-revengers-anime.com/news/archives/3693)明10月3日24:00＝10月4日00:00，[原主題曲公告](https://tokyo-revengers-anime.com/news/archives/3768)明ホワイトノイズ／Official髭男dism延續聖夜；[商品頁](https://tokyo-revengers-anime.com/product/)同證兩篇OP及天竺ED Say My Name／HEY-SMITH，未混當前2026曲。
- 影之強者[第二期Music](https://shadow-garden.jp/2nd/music/)明grayscale dominator／OxT及Everything is Changing／前島麻由第7話挿入歌、詞曲編；[Movie](https://shadow-garden.jp/2nd/movie/)逐項明四Polaris角色CV版本NCED及第8話Darling in the Night七陰Ver.。不由NCED推full或新錄音；Everything用途改IN，中文曲表互核、舊AnimeThemes ED來源保留日期但不生成正面IN用途證據。HIGHEST的歌曲／作者可由[第一期Music](https://shadow-garden.jp/1st/goods/music/)核，第二期特殊ED兩輪仍缺第一方；故事標題不是用曲，中文表列OP不生成支持ED的usage。原ED7及季度空值保留，待原第二期第12話credit或明確官方逐話說明。
- 賽馬娘Lantis原期[Vol.1](https://umamusume.lantis.jp/discography/animation-derby-season-3-vol-1%E3%80%8C%E3%82%BD%E3%82%B7%E3%83%86%E3%83%9F%E3%83%B3%E3%83%8A%E3%83%8E%E3%80%8D/)、[Vol.2](https://umamusume.lantis.jp/discography/animation-derby-season-3-vol-2%E3%80%8C%E3%82%A2%E3%82%B3%E3%82%AC%E3%83%ACchallenge-dash%E3%80%8D/)及[OST](https://umamusume.lantis.jp/discography/animation-derby-season-3-vol-3-original-sound-track/)逐曲明通常OP／ED、第1／4／6／13話ED及第12話光の後ろ姿挿入歌、各自詞曲編與演唱；新IN有中文動畫條目互核，未繼承舊AnimeThemes。第13話うまぴょい伝説採官方31人名單，未套6／8人商品版；展示僅省重複CV標記保留全部人名，469字符合原500字gate、31項個別歌唱完整保存。Ambitious World的[遊戲曲表](https://umamusume.lantis.jp/discography/winning-live-04/)只證歌曲／作者，第三期9話ED兩輪缺第一方；原ED5季度空值，待原逐話credit／官方ED。第13話ソシテミンナノ僅明版本未明IN，不新增用途。
- [16bit原Music](https://16bitsensation-al.com/music/)及[ED頁](https://16bitsensation-al.com/music/?page=ed)核65535／中川翔子、リンク～past and future～／秋里コノハ（CV.古賀葵）與詞曲編；TV10月4日24:30＝10月5日00:30。第7話其他歌曲僅交叉資料，待第一方逐話字幕或明示後才擴增插曲。[Kamierabi Music](https://kamierabi.com/music/)明分season1/2，核原期スクラップ＆ビルド／ELAIZA、Bleed My Heart／Alisa；[原期109公告](https://kamierabi.com/news/?p=109)清楚官方搜尋索引明10月4日24:55＝10月5日00:55，正文Cache miss如實保存；未把2024再播／後續季或一般藝人comment當作者。
- 本批兩筆完全季度待核及所有未收錄詳細欄位均保存逐曲fields／note／resumeWhen／checkedAt與pendingFields；全目錄84筆完全季度待核、53筆非空季度條件，其中29筆具體跨季缺口及ATRI日期分開。原來源未重讀不刷新日期。

### 檢查與展示

- verify:batch及正式發布verify:full通過：6檔20項單元、型別0錯誤／警告、2,098 HTML／4,276產物、統計相符、嚴格audit零漏洞、公開邊界、Cloudflare dry-run無bindings及8條E2E。匹配來源／環境／產物雜湊後重用正常build，未快取單元／audit／E2E。
- ApiProvider6部24筆、28季、ID／媒體／來源日期、共同歌曲與單筆既有關係補齊保留性通過；原ED5入口展示第7話IN。Chromium393×852驗6頁24狀態、6季度、3用途過濾、8搜尋、6原TV及2待核，1280×900歌單7列通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe；長演唱名單完整保存、列表仍緊湊。
- 本批僅既有資料、欄位盤點與checkpoint，無UI／parser／依賴改動或新季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/kage-no-jitsuryokusha-ni-naritakute-2nd-season/#theme-kage-no-jitsuryokusha-ni-naritakute-2nd-season-ed-5`、`/anime/uma-musume-pretty-derby-season-3/#theme-uma-musume-pretty-derby-season-3-in-1`及`/seasons/2023-fall/`。正式驗收後接第87批10部24筆：`curated-163364`、`curated-164312`、`curated-166523`、`curated-138788`、`curated-154459`、`curated-143085`、`curated-154692`、`curated-158895`、`curated-159808`、`curated-162720`。此處只列接點，尚未查新來源。

### 正式發布與驗收（2026-10-22）

- [PR #179](https://github.com/kyeunga25/anisonary/pull/179)同SHA的quality／Workers通過後正常rebase合併。main來源`52ecdaad2daccefb4640d696e886ccba3c28cfa0`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch86-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站86條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider6部24筆與本機一致；Chromium393×852驗6頁24狀態、6季度、3用途、8搜尋、6原TV、2待核及0部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-87（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部原24用途加10筆已證IN，共34筆：31筆基本逐欄證據、3筆特殊用途待核。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `bikkurimen-op-1` | コレクション／Dannie May | OP1 | 2023-fall |
| `bikkurimen-ed-1` | 青春☆ワチャゴナドゥ／ヤマト（CV:梶田大嗣）、牛若（CV:森嶋秀太）、ジャック（CV:橘 龍丸） | ED1 | 2023-fall |
| `bikkurimen-ed-2` | 祈り／マリア（CV：日笠陽子） | ED2 | 2023-fall |
| `yuzuki-san-chi-no-yon-kyoudai-op-1` | 泣いていいんだ／flumpool | OP1 | 2023-fall |
| `yuzuki-san-chi-no-yon-kyoudai-ed-1` | ささくれ／久保あおい | ED1 | 2023-fall |
| `kizuna-no-allele-season-2-op-1` | Perfect World!!／PathTLive | OP1 | 2023-fall |
| `kizuna-no-allele-season-2-ed-1` | じゃんけんほい！／#kzn | ED1 | 2023-fall |
| `kizuna-no-allele-season-2-ed-2` | mirAI wave!／PathTLive | ED2 | 第一方歌曲／用途待核，原入口保留 |
| `kizuna-no-allele-season-2-in-1` | アスノヒカリ／BRT５ | IN1 | 2023-fall |
| `kizuna-no-allele-season-2-in-2` | HEART’s AURORA／ミラク（CV.日原あゆみ）＆クリス（CV.小玉ひかり） | IN2 | 2023-fall |
| `kizuna-no-allele-season-2-in-3` | Soleil／ノエル（CV.貫井柚佳） | IN3 | 2023-fall |
| `kizuna-no-allele-season-2-in-4` | Tell me,Sympathy／ニスカ（CV.松岡侑李）＆ミラク（CV.日原あゆみ） | IN4 | 2023-fall |
| `kizuna-no-allele-season-2-in-5` | 未完成Fate／ミラク（CV.日原あゆみ）＆サラ（CV.夏目妃菜） | IN5 | 2023-fall |
| `kizuna-no-allele-season-2-in-6` | パーフェクト・ゲーマー／ゾーイ（CV.古畑奈和）＆ジュア（CV.南雲希美） | IN6 | 2023-fall |
| `kizuna-no-allele-season-2-in-7` | Fake out／リズ（CV.塙有咲）＆ソフィア（CV.北原侑奈） | IN7 | 2023-fall |
| `kizuna-no-allele-season-2-in-8` | Let go／ヒメナ（CV.荒井瑠里）＆ジェシー（CV.蘭笛） | IN8 | 2023-fall |
| `kizuna-no-allele-season-2-in-9` | LINX／Kizuna AI | IN9 | 2023-fall |
| `kizuna-no-allele-season-2-in-10` | Link to heart／ミラク（CV.日原あゆみ） | IN10 | 2023-fall |
| `under-ninja-op-1` | Hyper／Kroi | OP1 | 2023-fall |
| `under-ninja-ed-1` | 秘密／KOTORI | ED1 | 2023-fall |
| `keikenzumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashi-op-1` | ラブ･ユー･テンダー！／内田真礼 | OP1 | 2023-fall |
| `keikenzumi-na-kimi-to-keiken-zero-na-ore-ga-otsukiai-suru-hanashi-ed-1` | あいことば／AliA | ED1 | 2023-fall |
| `saihate-no-paladin-tetsusabi-no-yama-no-ou-op-1` | 命火／やなぎなぎ | OP1 | 2023-fall |
| `saihate-no-paladin-tetsusabi-no-yama-no-ou-ed-1` | パズル／KOTOKO | ED1 | 2023-fall |
| `saihate-no-paladin-tetsusabi-no-yama-no-ou-ed-2` | Ryuugoroshi no Eiyuu no Uta／Eri Suzuki | ED2 | 第一方歌曲／用途待核，原入口保留 |
| `kanojo-mo-kanojo-season-2-op-1` | ドラマチックに恋したい／小玉ひかり | OP1 | 2023-fall |
| `kanojo-mo-kanojo-season-2-ed-1` | ふぉりら／ClariS | ED1 | 2023-fall |
| `arknights-touin-kiro-op-1` | ACHE in PULSE／MYTH & ROID | OP1 | 2023-fall |
| `arknights-touin-kiro-ed-1` | R.I.P.／ReoNa | ED1 | 2023-fall |
| `arknights-touin-kiro-ed-2` | Fleeting Wish／Ayahi Takagaki | ED2 | 第一方歌曲／用途待核，原入口保留 |
| `hikikomari-kyuuketsuki-no-monmon-op-1` | Red Liberation／fripSide | OP1 | 2023-fall |
| `hikikomari-kyuuketsuki-no-monmon-ed-1` | 眠れない feat.楠木ともり／MIMiNARI | ED1 | 2023-fall |
| `kibou-no-chikara-otona-precure-23-op-1` | ときめき／いきものがかり | OP1 | 2023-fall |
| `kibou-no-chikara-otona-precure-23-ed-1` | 雫のプリキュア／キュア・カルテット | ED1 | 2023-fall |

- 公開anime ID：`curated-163364`、`curated-164312`、`curated-166523`、`curated-138788`、`curated-154459`、`curated-143085`、`curated-154692`、`curated-158895`、`curated-159808`、`curated-162720`。更正13個原名、8個演唱名義；同頁補63項詞／曲／編、32項演唱（按用途計）。絆第二期新增10筆IN／10歌曲身分，不新增影片、錄音、發行品或平台項目。mirAI wave!候選指向已核第一期OP歌曲，第一期僅顯式補原基底songId；沒有官方明示第二期沿用，仍不生成本期usage證據、季度空值、不宣稱同一錄音。
- 全目錄2,052部、4,666用途（4,515 OP／ED、141 IN、10 TS）均有dataStatus；1,314筆基本逐欄證據、3,352筆來源待細分。2,066個唯一用途逐批處理，其中1,915 OP／ED、141 IN、10 TS。原24用途ID／type／序號、明確歌曲ID及原媒體保留；只有實讀Bikkurimen Music三筆及Otona原官網TV兩筆共5筆舊來源更新日期，其他未重讀日期保持。除10部及1部既有歌曲關係補齊外，其他2,041部動畫JSON逐檔SHA-256相同。
- 2023秋OP／ED由171改168、已核134、詳細核心0／缺口134；3筆季度空值不刪歌，新IN不混入OP／ED。28季表見頂部；現有分母未閉合、跨季不能加總。[CATALOG_STATS.md](./CATALOG_STATS.md)為自動欄位盤點，不等於全季完成。

### 證據與續查

- Bikkurimen[Music](https://anime-bikkuri-men.jp/music/)同頁核コレクション／Dannie May、青春☆ワチャゴナドゥ三人演唱、祈り／マリア（CV日笠陽子）及詞曲編；相鄰CHARACTER SONG不混ED。柚木[AT-X原頁](https://www.at-x.com/program/detail/17613)明10月1日19:00–20:30第1–3話先行TV，常規10月5日23:30另列；兩者同Fall，不把先行TV當WEB。[Music](https://yuzukisan-anime.com/music/)核泣いていいんだ／flumpool、ささくれ／久保あおい，不由藝人簡介另一曲作者推本曲。
- 絆[官網正常en入口](https://kizunanoallele.com/en.html)直接正文仍有日文MUSIC，明S2 OP Perfect World!!／PathTLive、EDじゃんけんほい！／#kzn及12首S2插曲；[TV東京Music原2023/10表](https://www.ttmnet.co.jp/theme/2023-10/)互證通常用途，不作作者來源。已明且中文曲表一致的10首IN新增；逐話集數僅交叉表所示，usage僅記第二期插曲。en頁language記multi；根頁maintenance不刷新舊日期，不繞限制。
- 絆mirAI wave!已證原曲／作者只屬S1 OP，兩輪無S2終回ED第一方，原ED2保留、季度空且無正面usage；待原第24話字幕或官方逐話ED。Ready Go／VICONIC與交叉READY GO／VICONIQ、Remortework與交叉Remotework存在綴字／名義差異，保留待官方更正或正式逐曲字幕，未新建用途；另第24話其他交叉候選仍缺第一方，也不新增。
- [Under Ninja](https://under-ninja.jp/onair/)明首話10月5日25:33＝10月6日01:33，與通常25:43／第2話特別編排分開；[Music](https://under-ninja.jp/music/)核Hyper／Kroi、秘密／KOTORI。經驗差[Music](https://kimizero.com/music/index.html)核ラブ･ユー･テンダー！／内田真礼及あいことば／AliA；半形中點按原文，舊名可搜。最果て[Products](https://farawaypaladin.com/products)核命火／やなぎなぎ、パズル／KOTOKO；特殊原ED2兩輪只有第三方身分／ED或IN差異，保原Romanized名義、空季度、不生成FP歌曲／用途證據，待第12話原字幕或官方逐曲說明。
- カノジョS2[Music](https://kanokano-anime.com/music/)核ドラマチックに恋したい／小玉ひかり及ふぉりら／ClariS，保Naoki Itai與Yusuke Koshiro共同編曲；原首話10月7日02:28延後5分鐘，常規02:23另列。冬隠帰路[原TV](https://2nd.arknights-anime.jp/on-air)清楚官方索引明10月7日01:23；[藝人AZUL曲表](https://mythandroid.com/musics/15596)明ACHE in PULSE／MYTH & ROID及本期OP，[ReoNa官方HEART索引](https://www.reona-reona.com/HEART/)明R.I.P.本期ED及作者，body503如實記；宮野幸子只列銅管編曲，不推共同作曲。Fleeting Wish官方原/news/25僅JS骨架且索引無可核正文，中文PRTS只作cross_check；原ED2與Ayahi Takagaki名義保留、季度空，待本期官方曲目／ED明示，不混遊戲kiyo版。
- ひきこまり[Staff/Cast](https://www.hikikomari.com/staffcast/)本曲留言支持fripSide上杉真央／阿部寿世歌唱；眠れない feat.楠木ともり保正式曲名與MIMiNARI名義、楠木個別演唱，不把團隊簡介當全員歌唱。[Otona Music](https://otonaprecure2023.com/music/)核ときめき／いきものがかり、雫のプリキュア／キュア・カルテット及四名實際歌唱，詞曲編同頁列明，不混單曲另一首電影用途。
- 本批3筆待核及詳細缺欄均保存逐曲fields／note／resumeWhen／checkedAt及pendingFields。全目錄87筆完全季度待核、53筆非空季度條件，其中29筆具體跨季缺口及ATRI日期分開；三角色有值不代表全作者、版本或平台資料完整。

### 檢查與展示

- verify:batch先通過；共同歌曲關係的最小修正後重建最終產物、重新生成統計並通過verify:full：6檔20項單元、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E。最終full重用完全匹配建置，單元／audit／E2E未快取。
- ApiProvider10部34筆、28季、ID／來源日期／媒體與2,041部JSON保留性、第一期單筆共同歌曲修正通過。Chromium393×852驗10頁34狀態、10季度、3用途過濾、20搜尋（含10新IN）、10原TV及3待核；1280×900歌單12列通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批僅資料、欄位盤點及checkpoint，無UI／parser／依賴改動或新季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/kizuna-no-allele-season-2/#theme-kizuna-no-allele-season-2-in-2`、`/anime/yuzuki-san-chi-no-yon-kyoudai/`及`/seasons/2023-fall/`。第88批8部26筆已登記並分工查核：`curated-163140`、`curated-165070`、`curated-120755`、`curated-154384`、`curated-161992`、`curated-162694`、`curated-166896`、`curated-155419`；先完成本批正式驗收，再集中整合，未驗證內容不計完成。

### 正式發布與驗收（2026-10-22）

- [PR #180](https://github.com/kyeunga25/anisonary/pull/180)同SHA的quality／Workers通過後正常rebase合併。main來源`08fb3942e0dce46058cd67bef5fda767cb46c25f`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch87-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站94條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部34筆與本機一致；Chromium393×852驗10頁34狀態、10季度、3用途、20搜尋、10原TV、3待核及0部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-88（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。8部、原26用途加12筆已證新用途，共38筆：33筆基本逐欄證據、5筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `hypnosis-mic-division-rap-battle-rhyme-anima-op-1` | RISE FROM DEAD／Division All Stars | OP1 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-ed-1` | Next Stage／Buster Bros!!! | ED1 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-ed-2` | Next Stage／MAD TRIGGER CREW | ED2 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-ed-3` | Next Stage／Bad Ass Temple | ED3 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-ed-4` | Next Stage／どついたれ本舗 | ED4 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-ed-5` | Next Stage／麻天狼 | ED5 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-ed-6` | Next Stage／Fling Posse | ED6 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-ed-7` | Hoodstar +／Division All Stars | ED7 | 第一方身分／用途待核，原入口保留 |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-1` | Bring it on／Buster Bros!!! | IN1 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-2` | ジンギ（Pay Respect）／MAD TRIGGER CREW | IN2 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-3` | SANITY／Bad Ass Temple | IN3 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-4` | New World／どついたれ本舗 | IN4 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-5` | Dive in／麻天狼 | IN5 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-6` | AN IDOL／Fling Posse | IN6 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-7` | We go with the flow／Buster Bros!!!／Bad Ass Temple | IN7 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-8` | PUMP IT UP／MAD TRIGGER CREW／どついたれ本舗 | IN8 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-9` | FIGHTER’S ROAD／Fling Posse／麻天狼 | IN9 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-10` | BATTLE ANIMA＋01／TBH／キアロ&スクーロ VS Division Leaders | IN10 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-11` | BATTLE ANIMA＋02／キアロ VS Division All Stars -3rd Team- | IN11 | 2023-fall |
| `hypnosis-mic-division-rap-battle-rhyme-anima-in-12` | BATTLE ANIMA＋03／スクーロ VS Division All Stars -2nd Team- | IN12 | 2023-fall |
| `atarashii-joushi-wa-dotennen-op-1` | プラネタリア／フジファブリック | OP1 | 2023-fall |
| `atarashii-joushi-wa-dotennen-ed-1` | 花束／Lenny code fiction | ED1 | 2023-fall |
| `the-idolm-ster-million-live-op-1` | Rat A Tat!!!／MILLIONSTARS | OP1 | 2023-fall |
| `the-idolm-ster-million-live-ed-1` | セブンカウント／MILLIONSTARS | ED1 | 第一方身分／用途待核，原入口保留 |
| `the-idolm-ster-million-live-ed-2` | 海風とカスタネット／MILLIONSTARS Team2nd | ED2 | 第一方身分／用途待核，原入口保留 |
| `the-idolm-ster-million-live-ed-3` | catch my feeling／MILLIONSTARS Team4th | ED3 | 第一方身分／用途待核，原入口保留 |
| `the-idolm-ster-million-live-ed-4` | Brand New Theater!／MILLIONSTARS | ED4 | 第一方身分／用途待核，原入口保留 |
| `tearmoon-teikoku-monogatari-dantoudai-kara-hajimaru-hime-no-tensei-gyakuten-story-op-1` | ハッピーエンドプリンセス／上坂すみれ | OP1 | 2023-fall |
| `tearmoon-teikoku-monogatari-dantoudai-kara-hajimaru-hime-no-tensei-gyakuten-story-ed-1` | Queen of the Night／カノエラナ | ED1 | 2023-fall |
| `potion-danomi-de-ikinobimasu-op-1` | tailwind／katagiri | OP1 | 2023-fall |
| `potion-danomi-de-ikinobimasu-ed-1` | Love is a potion／harmoe | ED1 | 2023-fall |
| `kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-ed-1` | スイートサイン／岬 なこ | ED1 | 2023-fall |
| `kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-op-1` | 大大大大大好きな君へ♡／花園羽香里（CV.本渡 楓）、院田唐音（CV.富田美憂）、好本 静（CV.長縄まりあ）、栄逢凪乃（CV.瀬戸麻沙美）、薬膳楠莉（CV.朝井彩加） | OP1 | 2023-fall |
| `kimi-no-koto-ga-dai-dai-dai-dai-daisuki-na-100-nin-no-kanojo-ed-2` | 今日のエンディングは私が買い取ったから好きにしていいわよね♡／花園羽々里（CV.上坂すみれ） | ED2 | 2023-fall |
| `bokura-no-ameiro-protocol-op-1` | S9aiR／SennaRin | OP1 | 2023-fall |
| `bokura-no-ameiro-protocol-ed-1` | Another Complex／somei | ED1 | 2023-fall |
| `hoshikuzu-telepath-op-1` | 点と線／伊藤美来 | OP1 | 2023-fall |
| `hoshikuzu-telepath-ed-1` | 天体図／サンドリオン | ED1 | 2023-fall |

- 公開anime ID：`curated-163140`、`curated-165070`、`curated-120755`、`curated-154384`、`curated-161992`、`curated-162694`、`curated-166896`、`curated-155419`。更正11個原名、10個演唱名義；同頁補133項詞／曲／編及37項演唱（按用途計）。新增12筆用途／12個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,678用途（4,515 OP／ED、153 IN、10 TS）均有dataStatus；1,347筆基本逐欄證據、3,331筆來源待細分。2,104個唯一用途逐批處理，其中1,941 OP／ED、153 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有4筆真正重讀舊來源更新日期。其他2,043部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- ヒプノシスマイク[原期主題曲頁](https://hypnosismic-anime.com/music/?page=oped)明RISE FROM DEAD及Next Stage六地區Ver.，六用途共用原ED1歌曲身分，各版詞作者、團隊及版別分別保留；不合併成同一作者清單，也不由NCED推full或新錄音。[原期官方劇中RAP公告](https://hypnosismic.com/news/hmra231225/)逐項明第1–12話曲名／團隊／作者，中文第二期逐話表互核，新增IN1–12；本批133項詞曲編含逐版及逐用途，不是133位唯一作者。頁面部分欄名重複作詞的原始問題未自行改字，IN作者採另一明確官方公告。
- Hoodstar +的[2021原曲公告](https://hypnosismic.com/news/hmhs210902/)只清楚明曲名與invisible manners詞曲編、18人Ver.；原名義及本期第13話ED兩輪未取得第一方，保原ED7、季度空及既有artist，不生成FP artist／本期usage或推18人歌唱。RELIEVE缺本期交叉，Love Dimension缺本期第一方用途，不新增，待官方逐話credit與可核交叉曲表。
- Million Live! [OP商品](https://www.lantis.jp/imas/release_LACM-24420.html)明Rat A Tat!!!／MILLIONSTARS、本期OP及詞曲編；セブンカウント只明prologue image song。海風とカスタネット、catch my feeling與Brand New Theater!各官方曲表可證身分／團體／作者，Team2nd五名、Team4th六名歌唱按本曲商品明列保存，未從CAST推39人全唱。四特殊ED兩輪缺本期逐話第一方，保原ED1–4與空季度；待第4／7／8／12話原片尾或官方逐話曲表。遊戲、劇場先行版及整張動畫歌曲集概括介紹不代替TV用途，ロケットスター☆亦不憑交叉資料新增。
- 100カノ[原Music](https://hyakkano.com/music/)核大大大大大好きな君へ♡五人、スイートサイン／岬 なこ及原特殊ED2角色演唱、詞曲編；共同曲編田淵智也／睦月周平／滝澤俊輔／eba完整分角色保存。ED2用途只採[原post-62](https://hyakkano.com/news/post-62/)清楚官方索引明第11話ED，不讓商品收錄或曲名含エンディング自行證用途；原TV10月8日22:30，後續季與劇場分開。
- 新しい上司[Music](https://do-tennen.com/music/op.html)核プラネタリア／フジファブリック及花束／Lenny code fiction；ティアムーン[Music](https://tearmoon-pr.com/music/)核ハッピーエンドプリンセス／上坂すみれ、Queen of the Night／カノエラナ及詞曲編。ポーション原商品核tailwind／katagiri及Love is a potion／harmoe，後者作者同頁明列；僕らの雨いろプロトコル原官網核S9aiR／SennaRin、Another Complex／somei，未由producer或band profile猜作者。
- 星屑原官網Music／Staff同頁核点と線／伊藤美来、天体図／サンドリオン與共同作者；首頁播出欄已換2025串流，原TV採[2023-09-15公告](https://hoshitele-anime.com/news/detail/?id=14)明10月9日21:00 AT-X。真讀僕雨與星屑根URL各兩筆共4筆舊來源才更新日期；其他未讀日期不刷新。另更正既有arknights-touin-kiro-ed-2的PRTS中文來源language由ja為zh-Hans，原核對日2026-10-22及其他完整JSON不變、沒有新查詢。
- 本批5筆待核及全部詳細缺欄保存fields／note／resumeWhen／checkedAt與pendingFields。全目錄92筆完全季度待核、53筆非空季度條件、29筆具體跨季缺口及ATRI日期分開；2023秋現有OP／ED163筆已逐批核155，剩餘8筆在延後作品佇列，作品聯集尚未閉合。下一批轉2023夏，保留秋季後續補漏與短篇／WEB待辦。

### 檢查與展示

- 初次資料檢查發現5筆續查條件空白，未變更parser或降低gate；補齊合理詳細續查後，verify:batch及verify:full均通過：6檔20項單元、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E。相符build重用，單元／audit／E2E未快取。
- ApiProvider8部38筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗8頁38組狀態、8季度、3用途過濾、20搜尋、8原TV、5待核及0部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批僅資料、欄位盤點及checkpoint，無UI／parser／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/hypnosis-mic-division-rap-battle-rhyme-anima/#theme-hypnosis-mic-division-rap-battle-rhyme-anima-in-1`、`/anime/the-idolm-ster-million-live/`及`/seasons/2023-fall/`。 接第89批2023夏10部22筆既有用途：`curated-151513`、`curated-163571`、`curated-163132`、`curated-155982`、`curated-155730`、`curated-154391`、`curated-162893`、`curated-146065`、`curated-146836`、`curated-146953`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #181](https://github.com/kyeunga25/anisonary/pull/181)同SHA的quality／Workers通過後正常rebase合併。main來源`a3f9f41e39777693ab218c4054939a3c33787ae3`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch88-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站90條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider8部38筆與本機一致；Chromium393×852驗8頁38狀態、8季度、3用途、20搜尋、8原TV、5待核及0部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-89（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原22用途加10筆已證新用途，共32筆：32筆基本逐欄證據、0筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `genjitsu-no-yohane-sunshine-in-the-mirror-op-1` | 幻日ミステリウム／Aqours | OP1 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-ed-1` | キミノタメボクノタメ／Aqours | ED1 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-in-1` | Far far away／ヨハネ(CV.小林愛香) | IN1 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-in-2` | Be as one!!!／ダイヤ(CV.小宮有紗)、ルビィ(CV.降幡 愛)、チカ(CV.伊波杏樹) | IN2 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-in-3` | R・E・P／ハナマル(CV.高槻かなこ)、ヨウ(CV.斉藤朱夏)、カナン(CV.諏訪ななか) | IN3 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-in-4` | Hey, dear my friends／ヨハネ(CV.小林愛香)、リコ(CV.逢田梨香子)、マリ(CV.鈴木愛奈) | IN4 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-in-5` | GIRLS!!／ヨハネ(CV.小林愛香) | IN5 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-in-6` | Wonder sea breeze／ヨハネ(CV.小林愛香)、ハナマル(CV.高槻かなこ)、ダイヤ(CV.小宮有紗)、ルビィ(CV.降幡 愛)、チカ(CV.伊波杏樹)、ヨウ(CV.斉藤朱夏)、カナン(CV.諏訪ななか)、リコ(CV.逢田梨香子)、マリ(CV.鈴木愛奈) | IN6 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-in-7` | Forever U & I／ヨハネ(CV.小林愛香) | IN7 | 2023-summer |
| `genjitsu-no-yohane-sunshine-in-the-mirror-in-8` | La la 勇気のうた／ヨハネ(CV.小林愛香)、ハナマル(CV.高槻かなこ)、ダイヤ(CV.小宮有紗)、ルビィ(CV.降幡 愛)、チカ(CV.伊波杏樹)、ヨウ(CV.斉藤朱夏)、カナン(CV.諏訪ななか)、リコ(CV.逢田梨香子)、マリ(CV.鈴木愛奈) | IN8 | 2023-summer |
| `bang-dream-it-s-mygo-op-1` | 壱雫空／MyGO!!!!! | OP1 | 2023-summer |
| `bang-dream-it-s-mygo-ed-1` | 栞／MyGO!!!!! | ED1 | 2023-summer |
| `bang-dream-it-s-mygo-in-1` | Here, the world!／sumimi | IN1 | 2023-spring |
| `horimiya-piece-op-1` | 幸せ／Omoinotake | OP1 | 2023-summer |
| `horimiya-piece-ed-1` | URL／坂口有望 | ED1 | 2023-summer |
| `horimiya-piece-ed-2` | ドクロニンジャコノハ／河野 桜（CV:近藤玲奈）×柳 明音（CV:福山 潤） | ED2 | 2023-summer |
| `ayaka-op-1` | AYAKASHI／angela | OP1 | 2023-summer |
| `ayaka-ed-1` | フラッシュバック／saji | ED1 | 2023-summer |
| `uchi-no-kaisha-no-chiisai-senpai-no-hanashi-op-1` | HONEY／小林柊矢 | OP1 | 2023-summer |
| `uchi-no-kaisha-no-chiisai-senpai-no-hanashi-ed-1` | sugar／由薫 | ED1 | 2023-summer |
| `jitsu-wa-ore-saikyou-deshita-op-1` | リセット ライフ？／Lezel | OP1 | 2023-summer |
| `jitsu-wa-ore-saikyou-deshita-ed-1` | ひみCHU★プリラブマジック／Star★Shiμʼne!!! | ED1 | 2023-summer |
| `ryza-no-atelier-tokoyami-no-joou-to-himitsu-no-kakurega-op-1` | ゴールデンレイ／三月のパンタシア | OP1 | 2023-summer |
| `ryza-no-atelier-tokoyami-no-joou-to-himitsu-no-kakurega-ed-1` | アロー／Awkmiu | ED1 | 2023-summer |
| `mushoku-tensei-ii-isekai-ittara-honki-dasu-op-1` | spiral／LONGMAN | OP1 | 2023-summer |
| `mushoku-tensei-ii-isekai-ittara-honki-dasu-ed-1` | ムスビメ／大原ゆい子 | ED1 | 2023-summer |
| `mushoku-tensei-ii-isekai-ittara-honki-dasu-ed-2` | 花咲み／シルフィエット（CV.茅野愛衣） | ED2 | 2023-summer |
| `mushoku-tensei-ii-isekai-ittara-honki-dasu-ed-3` | Clover／大原ゆい子 | ED3 | 2023-summer |
| `lv1-maou-to-one-room-yuusha-op-1` | One Room Adventure／MADKID | OP1 | 2023-summer |
| `lv1-maou-to-one-room-yuusha-ed-1` | ミライ＝テレポート／ねんね | ED1 | 2023-summer |
| `masamune-kun-no-revenge-r-op-1` | Please, please!／大橋彩香 | OP1 | 2023-summer |
| `masamune-kun-no-revenge-r-ed-1` | twilight little star／ChouCho | ED1 | 2023-summer |

- 公開anime ID：`curated-151513`、`curated-163571`、`curated-163132`、`curated-155982`、`curated-155730`、`curated-154391`、`curated-162893`、`curated-146065`、`curated-146836`、`curated-146953`。更正14個原名、10個演唱名義；同頁補99項詞／曲／編及43項演唱（按用途計）。新增10筆用途／10個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,688用途（4,516 OP／ED、162 IN、10 TS）均有dataStatus；1,379筆基本逐欄證據、3,309筆來源待細分。2,136個唯一用途逐批處理，其中1,964 OP／ED、162 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- Yohane[原TV表](https://www.yohane.net/onair/)明7月2日22:30，6月25日ABEMA是先行WEB；[OP](https://www.yohane.net/music/detail/?id=1)幻日ミステリウム及[ED](https://www.yohane.net/music/detail/?id=2)キミノタメボクノタメ均Aqours。原Music各卷逐曲明第1／3／4／6／7／8／12／13話八首IN、角色／CV及詞曲編，中文曲表互核，新增IN1–8；沒有由CD、MV或一般全員CAST推用曲或逐人唱功。
- MyGO [Bushiroad原期具名公告](https://prtimes.jp/main/html/rd/p/000006775.000014827.html)明6月29日22:00–23:30原TV第1–3話，第4話起TV23:00、ABEMA22:30另計。[官方原期News](https://bang-dream.com/news/1633/)清楚可讀索引明壱雫空、栞／MyGO!!!!!及第1話Here, the world!／sumimi。正常官網部分正文404的限制如實記；首話IN與原TV日期可串證春季，動畫補春夏，兩首OP／ED僅已證夏季、春季待原第1–3話逐曲字幕／官方用曲明示，不跟動畫自動補季。
- ホリミヤ原細頁核幸せ／Omoinotake、URL／坂口有望；[原第4卷商品](https://horimiya-anime.com/bddvd/04.html?tab=3)直接明page.7 EDドクロニンジャコノハ、河野桜／近藤玲奈×柳明音／福山潤及HERO詞、松下英樹曲、大久保友裕編，原ED2 ID保留。TV表7月1日23:30明週六，頁頂圖alt錯寫週五不採。AYAKA現OnAir串流不當首播，採[原news243](https://ayaka-project.com/news/243/)；[Music](https://ayaka-project.com/music/)核AYAKASHI／angela與フラッシュバック／saji。
- 小先輩原OP／ED頁核HONEY／小林柊矢及sugar／由薫，實俺[Music](https://jitsuhaoresaikyo-anime.com/music/)核リセット ライフ？／Lezel、ひみCHU★プリラブマジック／Star★Shiμʼne!!!，詞曲編同頁明列，未由人物／團體簡介推全部歌唱。原深夜TV分別7月2日01:30與02:00，與配信分開。ライザ原[Music](https://ar-anime.com/music/)核ゴールデンレイ／三月のパンタシア及アロー／Awkmiu；初回1小時TV7月2日00:00，OST試聽不當IN用途。
- 無職II前半[原Music](https://mushokutensei.jp/music/?season=2nd&tab=op)明花咲み／シルフィエット（CV茅野愛衣）第12話ED與Clover／大原ゆい子第0話ED；原themesong合集只作身分／作者，usage限定原逐話Music及230526_2公告。新Clover用ED3，不改原ED1／2序號，也不繼承AnimeThemes；中文第0話來源明標zh-Hans，與汐れいら同名曲分開。[230630_1](https://mushokutensei.jp/news/230630_1/)明7月2日24:00＝7月3日00:00原TV，不混2024後半或先行上映。
- Lv1魔王[Music](https://lv1room.com/music/)核One Room Adventure／MADKID與ミライ＝テレポート／ねんね，官網未明ED作者留缺；政宗R[Music](https://masamune-tv.com/music/)核Please, please!／大橋彩香及twilight little star／ChouCho。原最早AT-X分別7月3日21:30與21:00，首播與延期前原訂日期／先行串流分開。
- 本批無完全季度待核，MyGO兩筆春季條件保存逐曲fields／note／resumeWhen／checkedAt；全目錄92筆完全季度待核、55筆非空季度條件，其中31筆具體跨季缺口及ATRI日期分開。未知作者、錄音、官方影片、發行與平台均依pendingFields續補，不能由三作者角色有值宣稱全部詳細齊備。

### 檢查與展示

- verify:batch與正式發布verify:full通過：6檔20項單元、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E。最終相符建置重用，單元／audit／E2E未快取；所有續查條件在整合前檢查非空，未放寬資料gate。
- ApiProvider10部32筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁32組狀態、11季度、3用途過濾、20搜尋、10原TV、0待核及2部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 季度頁只改一行提示：每列是用曲用途、動畫頁涵蓋主題曲／插曲／來源；緊湊布局、ID與URL不變。動畫季度registry只加已證MyGO春季關聯，沒有新增季度、parser或依賴改動。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/bang-dream-it-s-mygo/#theme-bang-dream-it-s-mygo-in-1`、`/anime/mushoku-tensei-ii-isekai-ittara-honki-dasu/#theme-mushoku-tensei-ii-isekai-ittara-honki-dasu-ed-3`及`/seasons/2023-summer/`。 接第90批2023夏10部22筆既有用途：`curated-153339`、`curated-160188`、`curated-163205`、`curated-157397`、`curated-153360`、`curated-147103`、`curated-162983`、`curated-145064`、`curated-163079`、`curated-155418`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #182](https://github.com/kyeunga25/anisonary/pull/182)同SHA的quality／Workers通過後正常rebase合併。main來源`85220cc1f37996cacbf8b2e5d7e7115a2ea887df`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch89-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站92條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部32筆與本機一致；Chromium393×852驗10頁32狀態、11季度、3用途、20搜尋、10原TV、0待核及2部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-90（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原22用途加0筆已證新用途，共22筆：22筆基本逐欄證據、0筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `okashi-na-tensei-op-1` | Brand new day／sana（sajou no hana） | OP1 | 2023-summer |
| `okashi-na-tensei-ed-1` | 風味絶佳／YuNi | ED1 | 2023-summer |
| `suki-na-ko-ga-megane-wo-wasureta-op-1` | NAME／綴 | OP1 | 2023-summer |
| `suki-na-ko-ga-megane-wo-wasureta-ed-1` | メガネゴーラウンド／マサヨシがめがねを忘れた | ED1 | 2023-summer |
| `mononogatari-2nd-season-op-1` | 誰が為／メガテラ・ゼロ | OP1 | 2023-summer |
| `mononogatari-2nd-season-ed-1` | プライベート・ルーム／田所あずさ | ED1 | 2023-summer |
| `yumemiru-danshi-wa-genjitsushugisha-op-1` | Paraglider／石原夏織 | OP1 | 2023-summer |
| `yumemiru-danshi-wa-genjitsushugisha-ed-1` | #夢は短し恋せよ乙女／夏川愛華（CV：涼本あきほ） | ED1 | 2023-summer |
| `jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-op-1` | ファンファーレ／BRADIO | OP1 | 2023-summer |
| `jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-ed-1` | いつものスープ／Peel the Apple | ED1 | 2023-summer |
| `watashi-no-shiawase-na-kekkon-op-1` | 貴方の側に。／りりあ。 | OP1 | 2023-summer |
| `watashi-no-shiawase-na-kekkon-ed-1` | ヰタ・フィロソフィカ／伊東歌詞太郎 | ED1 | 2023-summer |
| `undead-girl-murder-farce-op-1` | Crack-Crack-Crackle／CLASS:y | OP1 | 2023-summer |
| `undead-girl-murder-farce-ed-1` | reversal／Anna | ED1 | 2023-summer |
| `jujutsu-kaisen-2nd-season-op-1` | 青のすみか／キタニタツヤ | OP1 | 2023-summer |
| `jujutsu-kaisen-2nd-season-op-2` | SPECIALZ／King Gnu | OP2 | 2023-summer, 2023-fall |
| `jujutsu-kaisen-2nd-season-ed-1` | 燈／崎山蒼志 | ED1 | 2023-summer |
| `jujutsu-kaisen-2nd-season-ed-2` | more than words／羊文学 | ED2 | 2023-summer, 2023-fall |
| `sugar-apple-fairy-tale-part-2-op-1` | サプライズ／中島 怜 | OP1 | 2023-summer |
| `sugar-apple-fairy-tale-part-2-ed-1` | door／東山奈央 | ED1 | 2023-summer |
| `seija-musou-salaryman-isekai-de-ikinokoru-tame-ni-ayumu-michi-op-1` | バグちゃん／なすお☆ | OP1 | 2023-summer |
| `seija-musou-salaryman-isekai-de-ikinokoru-tame-ni-ayumu-michi-ed-1` | A NEW DAY／中島由貴 | ED1 | 2023-summer |

- 公開anime ID：`curated-153339`、`curated-160188`、`curated-163205`、`curated-157397`、`curated-153360`、`curated-147103`、`curated-162983`、`curated-145064`、`curated-163079`、`curated-155418`。更正14個原名、16個演唱名義；同頁補42項詞／曲／編及18項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,688用途（4,516 OP／ED、162 IN、10 TS）均有dataStatus；1,401筆基本逐欄證據、3,287筆來源待細分。2,158個唯一用途逐批處理，其中1,986 OP／ED、162 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- おかしな転生[原TV節目表](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202307/27614_202307032530.html)明7月3日25:30＝7月4日01:30；原Music明Brand new day／sana（sajou no hana）及風味絶佳／YuNi。OP作曲名義同頁Tsubasa／tsubasa大小寫不一，保留逐曲composition續查；同商品角色翻唱TVsize不新增TV用途。
- 好きめが原[OnAir](https://sh-anime.shochiku.co.jp/sukimega/onair)明7月4日23:00；原OP／ED頁核NAME／綴、メガネゴーラウンド／マサヨシがめがねを忘れた。ED直接列三個歌唱名義，オーイシマサヨシ與作者大石昌良分開保存，未由全cast推歌唱。
- もののがたり原官網維護，採[ShoPro製作方具名公告](https://prtimes.jp/main/html/rd/p/000000951.000002610.html)同時核第二章7月4日00:00原TV、誰が為／メガテラ・ゼロ及プライベート・ルーム／田所あずさ、已列詞曲編。夢見る男子[OnAir](https://yumemirudanshi.com/onair/)明7月4日02:00，OP Paraglider／石原夏織及含#的ED #夢は短し恋せよ乙女／夏川愛華（CV：涼本あきほ）保留官方角色名義；HAMA-kgn按原頁字形，不採交叉來源字母誤次序。
- 自販機採[第一期官方存檔](https://jihanki-anime.com/1st/)核ファンファーレ／BRADIO及いつものスープ／Peel the Apple，7月5日22:00原TV不套現根頁第三期。わたしの幸せな結婚用[原倒數頁](https://watakon-anime.com/special/countdown-image/)及原期公告確認7月5日23:30；第一期Music核貴方の側に。／りりあ。及ヰタ・フィロソフィカ／伊東歌詞太郎，不從同盤角色版推新動畫用途。
- アンデッドガール[OnAir](https://undeadgirl.jp/onair/)明7月5日24:55＝7月6日00:55；Music核Crack-Crack-Crackle／CLASS:y與reversal／Anna及ED已列詞曲編，去除舊原名額外連字號空白，原ID保留。
- 咒術第二季[原放送schedule](https://jujutsukaisen.jp/news/20230703_02.php)明懐玉・玉折7月6日至8月3日、渋谷事変8月31日起；原後半OP及ED公告與中文逐曲／逐話表串證SPECIALZ／King Gnu及more than words／羊文学跨夏秋，青のすみか／キタニタツヤ、燈／崎山蒼志只夏。動畫補秋季registry，同一歌曲用途ID不另造；未由樂團一般成員簡介推本曲全員演唱。
- シュガーアップル第二クール[OnAir](https://sugarapple-anime.com/onair/)原最早AT-X7月7日21:30，原Music核サプライズ／中島 怜及door／東山奈央及逐曲詞曲編。聖者無双[TBS OnAir](https://www.tbs.co.jp/anime/seija/onair/)明7月13日深夜1:28＝7月14日01:28原TV，7月7日是ABEMA提前一週串流；Music核バグちゃん／なすお☆及A NEW DAY／中島由貴，原版作者不與同盤翻唱或特別版本混用。
- 本批22筆基本欄位均有第一方及交叉證據，沒有新增歌曲／音源／影片／發行品，也沒有更新未重讀舊來源日期。Tsubasa／tsubasa已另記composition缺口；未知詞曲編、錄音、官方影片、發行品及平台欄位沿逐曲狀態續補。

### 檢查與展示

- verify:batch與正式發布verify:full通過：6檔20項單元、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E。最終相符建置重用，單元／audit／E2E未快取；未放寬資料gate。
- ApiProvider10部22筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁22組狀態、11季度、3用途過濾、10搜尋、10原TV、0待核及0部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批僅資料、欄位盤點及checkpoint，無UI／parser／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/okashi-na-tensei/#theme-okashi-na-tensei-op-1`、`/anime/seija-musou-salaryman-isekai-de-ikinokoru-tame-ni-ayumu-michi/`及`/seasons/2023-fall/`。 接第91批2023夏10部24筆既有用途：`curated-142877`、`curated-156040`、`curated-159322`、`curated-163136`、`curated-131863`、`curated-154745`、`curated-158530`、`curated-142598`、`curated-148465`、`curated-149883`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #183](https://github.com/kyeunga25/anisonary/pull/183)同SHA的quality／Workers通過後正常rebase合併。main來源`a08df03e3260157f8415d964dc35c158902c935a`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch90-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站92條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部22筆與本機一致；Chromium393×852驗10頁22狀態、11季度、3用途、10搜尋、10原TV、0待核及0部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-91（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原24用途加0筆已證新用途，共24筆：22筆基本逐欄證據、2筆特殊用途待核、3筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `rurouni-kenshin-meiji-kenkaku-romantan-2023-op-1` | 飛天／Ayase✕R-指定 | OP1 | 2023-summer |
| `rurouni-kenshin-meiji-kenkaku-romantan-2023-op-2` | るろうの形代／菅田将暉✕東京スカパラダイスオーケストラ | OP2 | 2023-fall |
| `rurouni-kenshin-meiji-kenkaku-romantan-2023-ed-1` | 切っ先／Reol | ED1 | 2023-summer |
| `rurouni-kenshin-meiji-kenkaku-romantan-2023-ed-2` | 存在証明／KID PHENOMENON | ED2 | 2023-fall |
| `higeki-no-genkyou-to-naru-saikyou-gedou-last-boss-joou-wa-tami-no-tame-ni-tsukushimasu-op-1` | 救世主／月詠み | OP1 | 2023-summer |
| `higeki-no-genkyou-to-naru-saikyou-gedou-last-boss-joou-wa-tami-no-tame-ni-tsukushimasu-ed-1` | PRIDE／チョーキューメイ | ED1 | 2023-summer |
| `bleach-sennen-kessen-hen-ketsubetsu-tan-op-1` | STARS／w.o.d. | OP1 | 2023-summer |
| `bleach-sennen-kessen-hen-ketsubetsu-tan-ed-1` | Endroll／神山羊 | ED1 | 2023-summer |
| `shadowverse-flame-seven-shadows-hen-op-1` | 灯火／Half time Old | OP1 | 2023-summer |
| `shadowverse-flame-seven-shadows-hen-ed-1` | シェケナーレ／OCHA NORMA | ED1 | 2023-summer |
| `liar-liar-op-1` | LIES GOES ON／May’n | OP1 | 2023-summer |
| `liar-liar-ed-1` | fakey merry game／SMILE PRINCESS | ED1 | 2023-summer |
| `kanojo-okarishimasu-3rd-season-op-1` | 恋愛ミリフィルム／halca | OP1 | 2023-summer |
| `kanojo-okarishimasu-3rd-season-ed-1` | エンドロール／Amber's | ED1 | 2023-summer |
| `kanojo-okarishimasu-3rd-season-ed-2` | エンドロール／Amber's | ED2 | 第一方身分／用途待核，原入口保留 |
| `ai-no-idenshi-op-1` | No Frontier／Aile The Shota | OP1 | 2023-summer |
| `ai-no-idenshi-ed-1` | 勿忘草／GReeeeN | ED1 | 2023-summer |
| `nanatsu-no-maken-ga-shihai-suru-op-1` | 剣花／夢見クジラ feat. みみずく&ふくろう | OP1 | 2023-summer |
| `nanatsu-no-maken-ga-shihai-suru-ed-1` | アイム／夢見クジラ feat. つむぎしゃち(from キミのね) | ED1 | 2023-summer, 2023-fall |
| `nanatsu-no-maken-ga-shihai-suru-ed-2` | Beyond fate／Mion Yano | ED2 | 第一方身分／用途待核，原入口保留 |
| `level-1-dakedo-unique-skill-de-saikyou-desu-op-1` | Chase Me／ノラ from 今夜、あの街から | OP1 | 2023-summer |
| `level-1-dakedo-unique-skill-de-saikyou-desu-ed-1` | タンバリンの鳴る丘／宮川愛李 | ED1 | 2023-summer |
| `dekiru-neko-wa-kyou-mo-yuuutsu-op-1` | 憂う門には福来たる／somei | OP1 | 2023-summer |
| `dekiru-neko-wa-kyou-mo-yuuutsu-ed-1` | 破壊前夜のこと／asmi | ED1 | 2023-summer |

- 公開anime ID：`curated-142877`、`curated-156040`、`curated-159322`、`curated-163136`、`curated-131863`、`curated-154745`、`curated-158530`、`curated-142598`、`curated-148465`、`curated-149883`。更正16個原名、11個演唱名義；同頁補40項詞／曲／編及11項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,688用途（4,516 OP／ED、162 IN、10 TS）均有dataStatus；1,423筆基本逐欄證據、3,265筆來源待細分。2,182個唯一用途逐批處理，其中2,010 OP／ED、162 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他1,999部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 劍心採[原2023第一期Music](https://rurouni-kenshin.com/1st/music/)，飛天／Ayase✕R-指定與切っ先／Reol只夏，るろうの形代／菅田将暉×東京スカパラダイスオーケストラ與存在証明／KID PHENOMENON只秋；各用途ID保留，不把後半歌曲套入夏季。Reol原特設頁清楚索引明初回25:05＝7月7日01:05，通常24:55另計。
- ラス為[原2023公告](https://lastame.com/1st/news/230518-02/)同頁核救世主／月詠み、PRIDE／チョーキューメイ及已列作者；原OnAir目前只留配信，TV首播時分兩輪未取得第一方。沿用7月7日候選並明標待核，metadataVerifiedAt及未讀首頁來源仍2026-09-01，未建立正面TV時間證據；整頁verifiedAt因實讀歌曲／交叉來源更新，不表示TV日期已核。
- BLEACH採原[訣別譚公告](https://bleach-anime.com/news/?id=63100)核7月8日23:00，原OP02／ED02頁明STARS／w.o.d.、Endroll／神山羊；普通正文403時只用已清楚顯示的官方索引事實，不臆測作者。Shadowverse原Music及Cygames具名公告核灯火／めいちゃん、シェケナーレ／OCHA NORMA與7月8日09:30；兩曲只已證夏，秋季逐曲用途保留partial，2024年1月綜藝不當動畫冬季續播。
- Liar Liar[原News88](https://liar-liar-anime.com/news/88)同頁核LIES GOES ON／May’n、fakey merry game／SMILE PRINCESS及詞曲編，原TV7月8日22:30。租借3原Music核恋愛ミリフィルム／halca、エンドロール／Amber's；Sony ESCL-5860清楚索引明Ballad Version及一般版，兩用途共用原ED1-song但版本標示分開。Ballad第32／33話ED兩輪仍無第一方，保留ED2 ID／序號、季度空值，不套一般版作者或新造錄音。 本批24筆用途對應23個明確songId，版本不重複當作新歌曲。
- AI遺電子原Music及0708公告核No Frontier／Aile The Shota、勿忘草／GReeeeN；演唱名義改回2023原期GReeeeN，原TV7月8日01:53。既有GRe4N BOYZ字形屬後來名義，不當當年歌曲署名。
- 七魔劍原2023-06-02公告核剣花／夢見クジラ feat. みみずく&ふくろう、アイム／夢見クジラ feat. つむぎしゃち(from キミのね)；只按歌唱留言記實唱者，不把共同名義全當vocal。ED1逐話交叉可串證夏秋，OP秋季仍待逐曲FP。Beyond fate兩輪仍無精確FP，中文列IN、Anisil列ED2有衝突，保留原ED2／Mion Yano候選及來源但無正面用途evidence，季度空值，待第7話官方credits決定分類。
- Lv1 Unique[原Staff & Cast](https://level1-anime.com/staffcast/)核Chase Me／ノラ from 今夜、あの街から及タンバリンの鳴る丘／宮川愛李，動畫劇伴作者不套主題曲。能幹貓原caststaff核憂う門には福来たる／somei、破壊前夜のこと／asmi。原TV分別7月8日22:00與02:23，串流分開。
- 基本證據、用途季度及詞曲編的明確未解followUp即使已有值，也納入pendingFields。離線保留性逐筆確認既有43部77用途只改此索引、事實及來源日期不變；其餘1,999部JSON逐檔相同。錄音／影片／發行／平台仍依已存欄位判定，保留獨立詳細續查；未把舊模板全面併入而誤標已有官方影片。
- 本批2 held、3 partial及1個動畫TV時分缺口均留具體條件；全目錄94筆完全季度待核、58筆非空季度條件，其中34筆具體跨季缺口與ATRI日期分開。舊影片詳細續查模板的殘留需後續有針對性整理，未重讀或清掉來源。

### 檢查與展示

- verify:batch及verify:full通過：6檔21項單元（新增一項通用狀態契約）、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E。保留性腳本初次混同比較動畫metadata基準與整頁彙總日期，改按原seed基準及精確來源日期分別核驗後通過；公開程式未為此改動，未放寬gate。相符建置重用，單元／audit／E2E未快取。
- ApiProvider10部24筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁24組狀態、12季度、3用途過濾、10搜尋、10筆TV／待核狀態展示、2待核及3部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批包含基本／季度／作者待核索引修復、public type註解與一項通用契約測試；不改schema欄位或enum，資料與程式及文件分類提交。季度registry只加已證跨季動畫關聯，無新增季度或依賴。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/nanatsu-no-maken-ga-shihai-suru/#theme-nanatsu-no-maken-ga-shihai-suru-op-1`、`/anime/okashi-na-tensei/#theme-okashi-na-tensei-op-1`及`/seasons/2023-fall/`。 接第92批2023夏10部25筆既有用途：`curated-150970`、`curated-139435`、`curated-139606`、`curated-160447`、`curated-159831`、`curated-152802`、`curated-154643`、`curated-145140`、`curated-163263`、`curated-155168`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #184](https://github.com/kyeunga25/anisonary/pull/184)同SHA的quality／Workers通過後正常rebase合併。main來源`89dc2d2baa0814d9bafe1e56b3b9b82efab3d492`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch91-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站178條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部24筆與本機一致；Chromium393×852驗10頁24狀態、12季度、3用途、10搜尋、10筆TV／待核狀態展示、2待核及3部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-92（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原25用途加0筆已證新用途，共25筆：25筆基本逐欄證據、0筆特殊用途待核、3筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `cardfight-vanguard-will-dress-season-3-op-1` | The last resort／GYROAXIA | OP1 | 2023-summer |
| `cardfight-vanguard-will-dress-season-3-ed-1` | BLUE BUD／青木陽菜 | ED1 | 2023-summer |
| `shinigami-bocchan-to-kuro-maid-2nd-season-op-1` | 君とレヴュー／坊ちゃん（CV.花江夏樹）＆アリス（CV.真野あゆみ） | OP1 | 2023-summer |
| `shinigami-bocchan-to-kuro-maid-2nd-season-ed-1` | 星屑レクイエム／なすお☆ | ED1 | 2023-summer |
| `eiyuu-kyoushitsu-op-1` | Bravery? Naturally?／樋口楓 | OP1 | 2023-summer |
| `eiyuu-kyoushitsu-ed-1` | Another Self／熊田茜音 | ED1 | 2023-summer |
| `temple-op-1` | 煩悩☆パラダイス／愛美 | OP1 | 2023-summer |
| `temple-ed-1` | おいでませ！三日月寺／結月（CV.愛美）、月夜（CV.芹澤優）、海月（CV.山下七海）、ミア（CV.朝日奈丸佳）、カグラ（CV.上坂すみれ） | ED1 | 2023-summer |
| `temple-ed-2` | いつかは満月のように！／結月（CV.愛美）、月夜（CV.芹澤優）、海月（CV.山下七海） | ED2 | 2023-summer |
| `temple-ed-3` | カルチャーギャップ・テンプテーション／ミア（CV.朝日奈丸佳）、カグラ（CV.上坂すみれ） | ED3 | 2023-summer |
| `zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto-op-1` | ソングオブザデッド／KANA-BOON | OP1 | 2023-summer, 2023-fall |
| `zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto-ed-1` | ハピネス オブ ザ デッド／シユイ | ED1 | 2023-summer, 2023-fall |
| `dark-gathering-op-1` | 幽世／luz | OP1 | 2023-summer |
| `dark-gathering-ed-1` | 灰色／花澤香菜 | ED1 | 2023-summer |
| `dark-gathering-ed-2` | インタリオ／花澤香菜 | ED2 | 2023-fall |
| `synduality-noir-op-1` | RAYTRACER／STEREO DIVE FOUNDATION | OP1 | 2023-summer |
| `synduality-noir-ed-1` | ユリイカ／ARCANA PROJECT | ED1 | 2023-summer |
| `helck-op-1` | It’s My Soul／七海ひろき | OP1 | 2023-summer |
| `helck-op-2` | HELP／愛美 | OP2 | 2023-fall |
| `helck-ed-1` | スターチス／saji | ED1 | 2023-summer |
| `helck-ed-2` | ヒカリ／カノエラナ | ED2 | 2023-fall |
| `bungou-stray-dogs-5th-season-op-1` | 鉄の檻／GRANRODEO | OP1 | 2023-summer |
| `bungou-stray-dogs-5th-season-ed-1` | 軌跡／ラックライフ | ED1 | 2023-summer |
| `hataraku-maou-sama-2nd-season-op-1` | 光のない街／nano.RIPE | OP1 | 2023-summer |
| `hataraku-maou-sama-2nd-season-ed-1` | bloomin'／Liyuu | ED1 | 2023-summer |

- 公開anime ID：`curated-150970`、`curated-139435`、`curated-139606`、`curated-160447`、`curated-159831`、`curated-152802`、`curated-154643`、`curated-145140`、`curated-163263`、`curated-155168`。更正18個原名、16個演唱名義；同頁補52項詞／曲／編及25項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,688用途（4,516 OP／ED、162 IN、10 TS）均有dataStatus；1,448筆基本逐欄證據、3,240筆來源待細分。2,207個唯一用途逐批處理，其中2,035 OP／ED、162 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- Vanguard will+Dress Season3原官方存檔Music清楚索引明The last resort／GYROAXIA、BLUE BUD／青木陽菜及逐曲詞曲編；Bushiroad原期官方PDF明7月8日08:00。動畫10月7日終話另屬秋季，但兩曲秋季逐曲FP未明，僅記夏並保留2 partial；不以動畫續播替代歌曲用曲證據。
- 死神坊ちゃん第二期原Music明君とレヴュー／坊ちゃん（CV.花江夏樹）＆アリス（CV.真野あゆみ）、星屑レクイエム／なすお☆；角色歌唱名義分開，不推全cast。YTE自身原作品頁明7月9日22:00。英雄教室原表明7月9日23:00，Music核Bravery? Naturally?／樋口楓、Another Self／熊田茜音及已列詞曲編；各曲作者只按其本曲明列。
- てんぷる原TV7月8日25:30＝7月9日01:30，WEB24:00先行另列。原ED主題歌公告清楚索引明「ED主題歌となる3曲」與M01–03逐曲名義，Music正文亦列歌唱角色，故おいでませ！三日月寺、いつかは満月のように！、カルチャーギャップ・テンプテーション保留三筆ED，並非僅由商品曲表推TV用途；角色／CV按曲列，原序號不動。OP煩悩☆パラダイス／愛美同原頁核實。
- Zom100原7月9日17:00，原Music核ソングオブザデッド／KANA-BOON、ハピネス オブ ザ デッド／シユイ。官方延播公告明12月25日第10–12話TV，中文逐話音樂段可串證第10–11話仍使用原OP/ED，兩用途補夏秋。第12話OP轉作ED僅本輪交叉來源明示，不擅增第一方未確認新用途。
- Dark Gathering原7月10日01:05，Music逐曲明幽世／luz、灰色及インタリオ／花澤香菜，已列詞曲編按曲保存。ED1只夏、ED2只秋；幽世秋季OP兩輪仍缺逐曲第一方，僅夏並留partial，最終話作IN不能替代後半OP證據。SYNDUALITY Noir原7月11日00:00，原cour Music明RAYTRACER／STEREO DIVE FOUNDATION及ユリイカ／ARCANA PROJECT，ED同頁清楚索引明中山真斗詞曲編；不混2024後半。
- Helck原7月12日01:29，官方Music同頁核四首及已列詞曲編；It’s My Soul／七海ひろき、スターチス／saji為第1–12話夏，HELP／愛美、ヒカリ／カノエラナ為第13–24話秋，逐話交叉明第12話9月27日、第13話10月4日。後半原用途ID及序號不動，沒有因跨季另造新歌曲。
- 文豪第5期原Music與第4期分段，採第5期鉄の檻／GRANRODEO、軌跡／ラックライフ，原TV7月12日23:00；未由第4期段作者推第5期逐曲作者。働く魔王2023續篇Music採光のない街／nano.RIPE、bloomin'／Liyuu與本曲作者，原TV7月13日23:30，不混前2022章。
- 本批無完全季度待核，Vanguard兩曲與Dark OP共3 partial保存具體resume。全目錄94筆完全季度待核、61筆非空季度條件，其中37筆具體跨季缺口與ATRI日期分開；未知詳細欄位及舊媒體續查記錄保留，沒有重查全部歷史來源。
- 後續並行範圍已於2026-10-22查核前登記：第93批10部29筆既有用途：`curated-163542`、`curated-150972`、`curated-128893`、`curated-153344`、`curated-155783`、`curated-144932`、`curated-151189`、`curated-153152`、`curated-153332`、`curated-154965`；第94批9部29筆既有用途：`curated-157295`、`curated-163256`、`curated-127550`、`curated-144188`、`curated-147571`、`curated-141911`、`curated-153845`、`curated-156896`、`curated-154876`。第93批先接夏季標準TV餘項及春季，第94批接春季；範圍已登記不表示資料完成，未驗證內容不計公開成果。

### 檢查與展示

- verify:batch及verify:full通過：6檔21單元、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E。公開資料整合前交叉覆核修正一個中文來源語言override層級，未改parser；實際保留性及來源日期核對通過。相符建置重用，單元／audit／E2E未快取。
- ApiProvider10部25筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁25組狀態、13季度、3用途過濾、10搜尋、10筆TV／待核狀態展示、0待核及3部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批僅資料、欄位盤點及checkpoint，無UI／parser／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/dark-gathering/#theme-dark-gathering-op-1`、`/anime/helck/`及`/seasons/2023-fall/`。 接第93批2023春、2023夏10部29筆既有用途：`curated-163542`、`curated-150972`、`curated-128893`、`curated-153344`、`curated-155783`、`curated-144932`、`curated-151189`、`curated-153152`、`curated-153332`、`curated-154965`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #185](https://github.com/kyeunga25/anisonary/pull/185)同SHA的quality／Workers通過後正常rebase合併。main來源`40acb57358b9141230591a7d0aec37a828daf2fe`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch92-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站92條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部25筆與本機一致；Chromium393×852驗10頁25狀態、13季度、3用途、10搜尋、10筆TV／待核狀態展示、0待核及3部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-93（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原29用途加1筆已證新用途，共30筆：30筆基本逐欄證據、0筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `spy-kyoushitsu-2nd-season-op-1` | 楽園／nonoc | OP1 | 2023-summer |
| `spy-kyoushitsu-2nd-season-ed-1` | ニューサンス／sajou no hana | ED1 | 2023-summer |
| `spy-kyoushitsu-2nd-season-ed-2` | Pausing Shutter／モニカ（CV：悠木 碧） | ED2 | 2023-summer |
| `spy-kyoushitsu-2nd-season-ed-3` | ドレス・ハート・ルージュ／ティア（CV：上坂すみれ） | ED3 | 2023-summer |
| `spy-kyoushitsu-2nd-season-ed-4` | Pureness×Careless／アネット（CV：楠木ともり） | ED4 | 2023-summer |
| `spy-kyoushitsu-2nd-season-ed-5` | 花の日／リリィ（CV：雨宮 天） | ED5 | 2023-summer |
| `shiro-seijo-to-kuro-bokushi-op-1` | コイセカイ／ClariS | OP1 | 2023-summer |
| `shiro-seijo-to-kuro-bokushi-ed-1` | トコシエスタ／ササノマリイ | ED1 | 2023-summer |
| `jigokuraku-op-1` | W●RK／millennium parade × 椎名林檎 | OP1 | 2023-spring, 2023-summer |
| `jigokuraku-ed-1` | 紙一重／Uru | ED1 | 2023-spring, 2023-summer |
| `mix-meisei-story-nidome-no-natsu-sora-no-mukou-e-op-1` | Starting Over／sumika | OP1 | 2023-spring |
| `mix-meisei-story-nidome-no-natsu-sora-no-mukou-e-op-2` | アマリリス／BLUE ENCOUNT | OP2 | 2023-summer |
| `mix-meisei-story-nidome-no-natsu-sora-no-mukou-e-ed-1` | ハルノオト／miwa | ED1 | 2023-spring |
| `mix-meisei-story-nidome-no-natsu-sora-no-mukou-e-ed-2` | 今この瞬間を／Little Glee Monster | ED2 | 2023-summer |
| `tengoku-daimakyou-op-1` | innocent arrogance／BiSH | OP1 | 2023-spring |
| `tengoku-daimakyou-ed-1` | 誰も彼も何処も何も知らない／ASOBI同盟 | ED1 | 2023-spring |
| `tengoku-daimakyou-ed-2` | 誰も彼も何処も何も知らない／ASOBI同盟 | ED2 | 2023-spring |
| `edens-zero-2nd-season-op-1` | Never say Never／西川貴教 | OP1 | 2023-spring |
| `edens-zero-2nd-season-op-2` | 械物／Tani Yuuki | OP2 | 2023-summer |
| `edens-zero-2nd-season-ed-1` | リンネ／ASCA | ED1 | 2023-spring |
| `edens-zero-2nd-season-ed-2` | my star／ロザリーナ | ED2 | 2023-summer |
| `my-home-hero-op-1` | 愛の歌／藤川千愛 | OP1 | 2023-spring |
| `my-home-hero-ed-1` | Decided／Dizzy Sunfist | ED1 | 2023-spring |
| `boku-no-kokoro-no-yabai-yatsu-op-1` | 斜陽／ヨルシカ | OP1 | 2023-spring |
| `boku-no-kokoro-no-yabai-yatsu-ed-1` | 数センチメンタル／こはならむ | ED1 | 2023-spring |
| `tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito-op-1` | Preview／内田彩 | OP1 | 2023-spring |
| `tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito-ed-1` | 七色の絵の具で／ナナランド | ED1 | 2023-spring |
| `tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito-in-1` | Endless roll／内田彩 | IN1 | 2023-spring |
| `yamada-kun-to-lv999-no-koi-wo-suru-op-1` | ぐらでーしょん feat. 北澤ゆうほ／KANA-BOON | OP1 | 2023-spring |
| `yamada-kun-to-lv999-no-koi-wo-suru-ed-1` | トリック・アート／清 竜人 | ED1 | 2023-spring |

- 公開anime ID：`curated-163542`、`curated-150972`、`curated-128893`、`curated-153344`、`curated-155783`、`curated-144932`、`curated-151189`、`curated-153152`、`curated-153332`、`curated-154965`。更正20個原名、17個演唱名義；同頁補59項詞／曲／編及18項演唱（按用途計）。新增1筆用途／1個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,689用途（4,516 OP／ED、163 IN、10 TS）均有dataStatus；1,478筆基本逐欄證據、3,211筆來源待細分。2,237個唯一用途逐批處理，其中2,064 OP／ED、163 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有6筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- Spy Classroom第二期原Music的SPECIAL ENDING區及專用CD明四首特殊ED、角色歌唱及逐曲作者；楽園、ニューサンス與Pausing Shutter、ドレス・ハート・ルージュ、Pureness×Careless、花の日均保原用途ID。不是從普通角色商品推ED。白聖女原最早TV7月13日00:30，原OP／ED正文核コイセカイ／ClariS、トコシエスタ／ササノマリイ及已明詞曲，未明編曲留缺。
- 地獄樂[原最終話TV節目表](https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202307/27374_202307012300.html)直接列7月1日23:00及W●RK／millennium parade × 椎名林檎、紙一重／Uru，兩曲補春夏，原用途不另造新歌。Uru官方單曲頁只支援已列詞曲編，作補充source／credit evidence，未當動畫用途證據。
- MIX第二季第13話是6月24日、第14話7月8日，中間實際跳週；Starting Over／sumika、ハルノオト／miwa只春，アマリリス／BLUE ENCOUNT、今この瞬間を／Little Glee Monster只夏。依原期cour資料與逐話表分季，不按預想連週日曆推算。
- 天國大魔境OP innocent arrogance／BiSH及ED誰も彼も何処も何も知らない／ASOBI同盟按原頁核實。官網真實連到權利方smartlink的第8話Special Arrange明確版本名及ED，原ED2與ED1共用ed-1-song，versionLabel #08 Special Arrange及個別編曲保留；沒有因不同編曲／用途新增一首歌或捏造音源格式。
- EDENS ZERO第二期原TV4月2日00:55，Never say Never／西川貴教、リンネ／ASCA只春；械物／Tani Yuuki及my star／ロザリーナ只已證夏。中文表把39話仍列舊曲，與7月2日精確逐話用曲不符，保來源但排除錯誤positive usage，改用38／39／50話精確可讀交叉索引，舊AnimeThemes日期不刷新。秋季終話使用後半兩曲仍缺逐曲第一方，兩筆partial保留，不從整部跨季自動套曲季。
- My Home Hero原Music核愛の歌／藤川千愛、Decided／Dizzy Sunfist，合寫作者名義依本曲明列。僕心原頁核斜陽／ヨルシカ、数センチメンタル／こはならむ；原TV4月2日01:30，首季與後續季分開。
- 轉生貴族原TV4月3日00:00，4月2日21:00是先行WEB。原Music及內田彩4月24日公告明Endless roll為第12話IN，中文曲表交叉支持實曆6月19日春季；新增IN1，歌唱內田彩、東乃カノ詞與小野貴光曲編按原文，不承接OP/ED舊AnimeThemes，也不因coupling收錄自行推用途。原OP Preview／内田彩、ED七色の絵の具で／ナナランド依原頁核實。
- 山田Lv999原TV4月2日00:30；發行方正式曲名ぐらでーしょん feat. 北澤ゆうほ，主要藝人KANA-BOON，guest北澤歌唱另列、不從bandbio推全員。EDトリック・アート／清竜人核原名名義及已列作者，個別演唱名單尚不代表全部。
- 本批30用途對應29個明確songId；2筆EDENS秋季條件與未知詳細欄位保留。全目錄94筆完全季度待核、63筆非空季度條件，其中39筆具體跨季缺口與ATRI日期分開。第94批9部29筆已審閱待集中整合，尚未計公開完成。
- 後續查核前已登記：第95批8部28筆既有用途：`curated-131518`、`curated-146975`、`curated-148048`、`curated-149028`、`curated-150075`、`curated-154364`、`curated-146234`、`curated-146678`；第96批10部21筆既有用途：`curated-148109`、`curated-155070`、`curated-134131`、`curated-141208`、`curated-150957`、`curated-151606`、`curated-151801`、`curated-154412`、`curated-160442`、`curated-140754`。第95、96批來源分工進行中，仍依94→95→96順序公開整合；同作品同頁明確新插曲可低成本補，未驗證內容不計完成。

### 檢查與展示

- verify:batch及verify:full通過：6檔21單元、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E。首次批次檢查攔下兩個本有夏季ID被重複加入registry，僅修正本批registry資料後重跑；失敗後的舊產物解析／展示結果不採用，成功新建置30筆全部重新驗證。未更動正常驗證器或放寬gate。
- ApiProvider10部30筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁30組狀態、13季度、3用途過濾、11搜尋、10筆TV／待核狀態展示、0待核及2部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批修改春／夏兩份seed、已證動畫跨季registry及欄位盤點／checkpoint；無parser／UI／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito/#theme-tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito-in-1`、`/anime/tengoku-daimakyou/`及`/seasons/2023-summer/`。 接第94批2023春9部29筆既有用途：`curated-157295`、`curated-163256`、`curated-127550`、`curated-144188`、`curated-147571`、`curated-141911`、`curated-153845`、`curated-156896`、`curated-154876`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #186](https://github.com/kyeunga25/anisonary/pull/186)同SHA的quality／Workers通過後正常rebase合併。main來源`edbfe9c318e2b2342f282ae5b434f8a9e61b84db`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch93-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站92條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部30筆與本機一致；Chromium393×852驗10頁30狀態、13季度、3用途、11搜尋、10筆TV／待核狀態展示、0待核及2部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-94（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。9部、原29用途加0筆已證新用途，共29筆：23筆基本逐欄證據、6筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `jijou-wo-shiranai-tenkousei-ga-guigui-kuru-op-1` | アルコルとポラリス／近藤玲奈 | OP1 | 2023-spring |
| `jijou-wo-shiranai-tenkousei-ga-guigui-kuru-ed-1` | ココロネ／Kitri | ED1 | 2023-spring |
| `duel-masters-win-duel-wars-op-1` | Winner Win!／影山ヒロノブ | OP1 | 2023-spring |
| `duel-masters-win-duel-wars-op-2` | Ability／AXXX1S | OP2 | 2023-summer |
| `duel-masters-win-duel-wars-op-3` | Believe it leap／杉本琢弥 | OP3 | 第一方身分／用途待核，原入口保留 |
| `duel-masters-win-duel-wars-op-4` | 戦いが消えた日／SAD originals. | OP4 | 2024-winter |
| `duel-masters-win-duel-wars-ed-1` | 放課後ギュッと／原因は自分にある。 | ED1 | 第一方身分／用途待核，原入口保留 |
| `duel-masters-win-duel-wars-ed-2` | BRAND NEW MOMENT／上月せれな | ED2 | 2023-summer |
| `duel-masters-win-duel-wars-ed-3` | ドロー／ザアザア | ED3 | 2023-fall |
| `duel-masters-win-duel-wars-ed-4` | Abyss-Over／超学生 | ED4 | 2024-winter |
| `kuma-kuma-kuma-bear-punch-op-1` | キミトノミライ／和氣あず未 | OP1 | 2023-spring |
| `kuma-kuma-kuma-bear-punch-ed-1` | ずっと／ユナ（CV:河瀬茉希） | ED1 | 2023-spring |
| `alice-gear-aegis-expansion-op-1` | Dash and Go!／鈴木愛奈 | OP1 | 2023-spring |
| `alice-gear-aegis-expansion-ed-1` | Just a little bit／堀内まり菜 | ED1 | 2023-spring |
| `alice-gear-aegis-expansion-ed-2` | Nakano Bojou／Yuna Taniguchi | ED2 | 第一方身分／用途待核，原入口保留 |
| `isekai-wa-smartphone-to-tomo-ni-2-op-1` | リアルダイヤモンド／Gemstone7 | OP1 | 2023-spring |
| `isekai-wa-smartphone-to-tomo-ni-2-ed-1` | イセカイジュエリー／ユミナ（CV:高野麻里佳）、リンゼ（CV:福緒 唯）、エルゼ（CV:内田真礼） | ED1 | 第一方身分／用途待核，原入口保留 |
| `isekai-wa-smartphone-to-tomo-ni-2-ed-2` | イセカイジュエリー／ユミナ（CV:高野麻里佳）、リンゼ（CV:福緒 唯）、エルゼ（CV:内田真礼）、八重（CV:赤﨑千夏）、スゥ（CV:山下七海）、リーン（CV:上坂すみれ） | ED2 | 第一方身分／用途待核，原入口保留 |
| `isekai-wa-smartphone-to-tomo-ni-2-ed-3` | イセカイジュエリー／ユミナ（CV:高野麻里佳）、リンゼ（CV:福緒 唯）、エルゼ（CV:内田真礼）、八重（CV:赤﨑千夏）、スゥ（CV:山下七海）、リーン（CV:上坂すみれ）、ルーシア（CV:高木美佑）、ヒルデガルド（CV:芹澤 優）、桜（CV:久保田未夢） | ED3 | 2023-spring |
| `skip-to-loafer-op-1` | メロウ／須田景凪 | OP1 | 2023-spring |
| `skip-to-loafer-ed-1` | ハナウタとまわり道／逢田梨香子 | ED1 | 2023-spring |
| `isekai-de-cheat-skill-wo-te-ni-shita-ore-wa-genjitsu-sekai-wo-mo-musou-suru-level-up-wa-jinsei-wo-kaeta-op-1` | 逆転劇／月詠み | OP1 | 2023-spring |
| `isekai-de-cheat-skill-wo-te-ni-shita-ore-wa-genjitsu-sekai-wo-mo-musou-suru-level-up-wa-jinsei-wo-kaeta-ed-1` | ハチミツ／スガ シカオ | ED1 | 2023-spring |
| `kizuna-no-allele-op-1` | mirAI wave!／PathTLive | OP1 | 2023-spring |
| `kizuna-no-allele-ed-1` | 寄花-Yosuga-／#kzn | ED1 | 2023-spring |
| `tokyo-mew-mew-new-2nd-season-op-1` | めがもるふぉ～ぜ♡／Smewthie | OP1 | 2023-spring |
| `tokyo-mew-mew-new-2nd-season-ed-1` | Can-do Dreamer／Smewthie | ED1 | 2023-spring |
| `tokyo-mew-mew-new-2nd-season-ed-2` | MAGICAL☆CARNIVAL／Smewthie | ED2 | 2023-spring |
| `tokyo-mew-mew-new-2nd-season-ed-3` | my sweet heart ~New~♡Ver.~／Yuuki Tenma | ED3 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-157295`、`curated-163256`、`curated-127550`、`curated-144188`、`curated-147571`、`curated-141911`、`curated-153845`、`curated-156896`、`curated-154876`。更正14個原名、12個演唱名義；同頁補57項詞／曲／編及34項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,689用途（4,516 OP／ED、163 IN、10 TS）均有dataStatus；1,501筆基本逐欄證據、3,188筆來源待細分。2,266個唯一用途逐批處理，其中2,093 OP／ED、163 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有8筆真正重讀舊來源更新日期。其他2,043部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 転校生原TV是4月9日22:00，4月2日為ABEMA先行；アルコルとポラリス／近藤玲奈、ココロネ／Kitri保春，夏季終話用曲仍待逐話第一方，兩筆partial不由動畫跨季推定。
- デュエル・マスターズWIN 決闘学園按原期TV與逐話資料，OP1春、OP2／ED2夏、ED3秋、OP4／ED4為2024冬。第25話是9月24日，10月1日為復習プレイバック，不以假設連續新集把第二組推秋。Believe it leap／杉本琢弥有權利方歌曲身分但TV用途缺可讀第一方；放課後ギュッと／原因は自分にある。仍待原期官方ED或逐話字幕，兩筆held、原ID及名義保留。
- くまクマ熊ベアーぱーんち！核原Music、作者及4月3日22:00 TV。Alice Gear原TV4月4日01:05，4月3日21:00是WEB；正常OP／ED已核，原ED2 Nakano Bojou仍缺原第6話官方曲名／角色歌唱與用途，不猜改中文或日文名。
- スマートフォン第二期改為實讀原官方首頁；先前YouTube播放清單仍保留原來源與未重讀日期。real diamond／Gemstone7與イセカイジュエリー的3／6／9人版本名義、已列作者按原商品及Music；只有9人版用途已有明確第一方，3人／6人版各等第1–4／5–8話片尾或官方逐話證據，季度空值。三ED共用原ed-1-song而保各自ID、演唱、編曲及versionLabel，未建新錄音。原TV4月3日23:30。
- Skip and Loafer原TV4月4日23:00；いせれべ原TV4月7日00:30，4月4日是FOD先行；各曲原名、名義與同頁作者已核。絆第一期原TV4月4日01:30，mirAI wave!及寄花-Yosuga-保各期用途，既有共同歌曲ID不改。英文官方頁標multi，不把語言override放入theme層。
- 東京ミュウミュウにゅ〜第二期初回4月5日00:30，與通常00:00分開。OP及ED1／MAGICAL☆CARNIVAL特殊ED有原期用途證據。官方另明第15話IN，但本次已讀交叉表只證ED，暫不另增IN；待原話數或可靠逐曲交叉證據。原ED3 my sweet heart ~New~♡Ver.~的本期原名、演唱與用途未齊，不由第一期第12話、2002年OP或商品作者表套本期；保原入口及續查。未核候選影片不公開。
- 本批29用途對應27個明確歌曲ID；6筆held、2筆已知跨季條件保存。全目錄100筆完全季度待核、65筆非空季度條件，其中41筆具體跨季缺口與ATRI日期分開；詳細核心缺少不阻擋已證基本事實。
- 後續範圍已登記：第95批8部原28筆及16首官方逐話插曲，第96批10部原21筆及1首已證插曲，已審閱來源待依序集中整合／驗證。U149僅用已列逐話來源證用途，角色CV頁只支援明確歌唱對照，不混入用曲證據。
- 並行查核前已登記：第97批12部28筆既有用途：`curated-145139`、`curated-147369`、`curated-148098`、`curated-155158`、`curated-157765`、`curated-151847`、`curated-143653`、`curated-157198`、`curated-150672`、`curated-156854`、`curated-163417`、`curated-153452`；第98批2部29筆既有用途：`curated-158871`、`curated-128715`。第98批Pokémon完整24筆中OP5–7／ED15–17六筆已有證據，保留原事實日期不重查；只核OP1–4／ED1–14及贄姫5筆，29stored／23待核分開。依94→95→96→97→98整合，未驗證內容不計公開完成。

### 檢查與展示

- verify:batch及verify:full通過：6檔21單元、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E；未改正常驗證器或放寬gate。
- ApiProvider9部29筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗9頁29組狀態、12季度、3用途過濾、9搜尋、9筆TV／待核狀態展示、6待核及2部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批修改春季seed、已證動畫跨季registry及欄位盤點／checkpoint；無parser／UI／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/isekai-wa-smartphone-to-tomo-ni-2/`、`/anime/duel-masters-win-duel-wars/`及`/seasons/2024-winter/`。 接第95批2023春8部28筆既有用途：`curated-131518`、`curated-146975`、`curated-148048`、`curated-149028`、`curated-150075`、`curated-154364`、`curated-146234`、`curated-146678`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #187](https://github.com/kyeunga25/anisonary/pull/187)同SHA的quality／Workers通過後正常rebase合併。main來源`4e02487b73026bff9c6ffdef4f8fa6005592358f`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch94-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站90條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider9部29筆與本機一致；Chromium393×852驗9頁29狀態、12季度、3用途、9搜尋、9筆TV／待核狀態展示、6待核及2部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-95（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。8部、原28用途加16筆已證新用途，共44筆：43筆基本逐欄證據、1筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `dr-stone-new-world-op-1` | ワスレガタキ／石崎ひゅーい | OP1 | 2023-spring |
| `dr-stone-new-world-ed-1` | Where Do We Go?／OKAMOTO'S | ED1 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-op-1` | Shine In The Sky☆／U149 | OP1 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-1` | よりみちリトルスター／U149 | ED1 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-2` | みんなのきもち／市原仁奈（CV：久野美咲） | ED2 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-3` | Romantic Now／赤城みりあ（CV：黒沢ともよ） | ED3 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-4` | 愛の讃歌／櫻井桃華（CV：照井春佳） | ED4 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-5` | GEMSTONE／的場梨沙（CV：集貝はな） | ED5 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-6` | ACE／結城晴（CV：小市眞琴） | ED6 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-7` | お願い！シンデレラ 古賀小春ソロ・リミックス／古賀小春（CV：小森結梨） | ED7 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-8` | あこがれステッチ／佐々木千枝（CV：今井麻夏） | ED8 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-9` | ひまわりマークをさがせ！／龍崎薫（CV：春瀬なつみ） | ED9 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-10` | グッデイ・グッナイ／U149 | ED10 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-ed-11` | to you for me／橘ありす（CV：佐藤亜美菜） | ED11 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-1` | お願い！シンデレラ／橘ありす（CV：佐藤亜美菜） | IN1 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-2` | きみにいっぱい☆／市原仁奈（CV：久野美咲）、一ノ瀬志希（CV：藍原ことみ）、宮本フレデリカ（CV：髙野麻美） | IN2 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-3` | 凸凹スピードスター／安部菜々（CV：三宅麻理恵）、佐藤心（CV：花守ゆみり）、赤城みりあ（CV：黒沢ともよ） | IN3 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-4` | 無重力シャトル／櫻井桃華（CV：照井春佳） | IN4 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-5` | BEYOND THE STARLIGHT／的場梨沙（CV：集貝はな） | IN5 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-6` | Tulip／速水奏、塩見周子、城ヶ崎美嘉、一ノ瀬志希、宮本フレデリカ | IN6 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-7` | Nightwear／速水奏、塩見周子、城ヶ崎美嘉、一ノ瀬志希、宮本フレデリカ | IN7 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-8` | アイム・ア・リトル・プリンセス ～お星さまにお願い～／古賀小春（CV：小森結梨） | IN8 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-9` | Sing the Prologue♪／桐生つかさ（CV：河瀬茉希）、佐々木千枝（CV：今井麻夏） | IN9 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-10` | アタシガルール／桐生つかさ（CV：河瀬茉希） | IN10 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-11` | SUN♡FLOWER／橘ありす（CV：佐藤亜美菜）、結城晴（CV：小市眞琴）、龍崎薫（CV：春瀬なつみ） | IN11 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-12` | ゼロトゥワン!!／U149 | IN12 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-13` | ドレミファクトリー！／U149 | IN13 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-14` | in fact／橘ありす（CV：佐藤亜美菜） | IN14 | 2023-spring |
| `the-idolm-at-ster-cinderella-girls-u149-in-15` | キラメキ☆／U149 | IN15 | 2023-spring |
| `kaminaki-sekai-no-kamisama-katsudou-op-1` | I wish／来栖りん | OP1 | 2023-spring |
| `kaminaki-sekai-no-kamisama-katsudou-ed-1` | Steppin' Up Life!／ミタマ（CV：鬼頭明里） | ED1 | 2023-spring |
| `watashi-no-yuri-wa-oshigoto-desu-op-1` | 秘密♡Melody／小倉 唯 | OP1 | 2023-spring |
| `watashi-no-yuri-wa-oshigoto-desu-ed-1` | 夢が覚めても／白鷺陽芽（CV：小倉 唯）＆綾小路美月（CV：上坂すみれ） | ED1 | 2023-spring |
| `kono-subarashii-sekai-ni-bakuen-wo-op-1` | STAY FREE／Machico | OP1 | 2023-spring |
| `kono-subarashii-sekai-ni-bakuen-wo-ed-1` | JUMP IN／めぐみん(CV:高橋李依)、ゆんゆん(CV:豊崎愛生) | ED1 | 2023-spring |
| `mahoutsukai-no-yome-season-2-op-1` | Dear／JUNNA | OP1 | 2023-spring |
| `mahoutsukai-no-yome-season-2-ed-1` | 無伴奏／edda | ED1 | 2023-spring |
| `isekai-one-turn-kill-neesan-ane-douhan-no-isekai-seikatsu-hajimemashita-op-1` | 華麗ワンターン／TrySail | OP1 | 2023-spring |
| `isekai-one-turn-kill-neesan-ane-douhan-no-isekai-seikatsu-hajimemashita-op-2` | Follow You！／TrySail | OP2 | 2023-spring |
| `isekai-one-turn-kill-neesan-ane-douhan-no-isekai-seikatsu-hajimemashita-ed-1` | 無窮プラトニック／VALIS | ED1 | 2023-spring |
| `isekai-one-turn-kill-neesan-ane-douhan-no-isekai-seikatsu-hajimemashita-in-1` | メグリメグッテ／ギルドロップス | IN1 | 2023-spring |
| `opuscolors-op-1` | SHINY／浦島坂田船 | OP1 | 2023-spring |
| `opuscolors-ed-1` | New frame／月見里和哉（CV：内田雄馬）＆多岐瀬響（CV：逢坂良太） | ED1 | 2023-spring |
| `opuscolors-ed-2` | Clear／月見里和哉（CV：内田雄馬）＆多岐瀬響（CV：逢坂良太） | ED2 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-131518`、`curated-146975`、`curated-148048`、`curated-149028`、`curated-150075`、`curated-154364`、`curated-146234`、`curated-146678`。更正14個原名、18個演唱名義；同頁補117項詞／曲／編及94項演唱（按用途計）。新增16筆用途／15個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,705用途（4,516 OP／ED、179 IN、10 TS）均有dataStatus；1,544筆基本逐欄證據、3,161筆來源待細分。2,310個唯一用途逐批處理，其中2,121 OP／ED、179 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,044部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 第95批由8部原28用途擴至44用途，新增16筆官方逐話IN，不擴張到未明用途的普通OST／角色商品。15首U149 IN一次重用Columbia原曲表BONUS逐話明示與已讀中文曲表交叉；範圍只第1–12話，沒有把Blu-ray第13話或未具第一方的モーレツ☆世直しギルティ！／ハイファイ☆デイズ加入。原TV4月5日24:00換實曆4月6日00:00。
- U149原OP／11ED與15IN均保存逐曲正式歌唱及作者；CV頁只對應已在本曲歌欄的角色，不由全cast推演唱。27筆用途的第一方anime_use僅採各自明示用途的useOnlySources；角色CV支援頁逐曲註冊來源／日期、只進credit evidence，不當插曲或ED證據。Tulip／Nightwear的LiPPS名義只列已證五角色，未猜CV。
- お願い！シンデレラ VOCAL LESSON VERSION的IN1與既有古賀小春solo remix ED7共原ed-7-song；實唱、用途及versionLabel分開。IN1逐曲編曲在Columbia頁／自營商店資料相異，暫不補、也不繼承ED7編曲；待權利方釐清。GAME VERSION／TV VERSION只存官方用途版本字樣，本階段沒有建立推定錄音。
- Dr. STONE NEW WORLD第一cour兩曲與已核後cour分開，原TV4月6日22:30。このすば爆焔原TV4月6日01:00，00:00為先行串流；正式官網入口補正，舊YouTube入口仍保原來源日期。STAY FREE／Machico及JUMP IN／めぐみん・ゆんゆん按本曲作者／歌唱列名。魔法使いの嫁第二期首cour兩曲原TV4月6日22:00，不套23:00串流或秋後cour。
- 神無き世界原TV4月6日01:30，I wish／来栖りん與Steppin’ Up Life!／ミタマ（鬼頭明里）保已證春；7月終話的逐曲第一方未明，兩筆partial。7月播動畫不等所有曲已證夏。百合お仕事原Music核原名、名義與用途，不從角色表套未列歌唱。
- 異世界ワンターンキル姉さん原TV4月8日22:30，4月7日是先行；原3筆OP／ED核實。新INメグリメグッテ由官方第11話公告與中文表交叉，詞藤原優樹／曽木琢磨按共同詞署名，其他逐曲作者依原頁，不由coupling收錄推出用途。
- Opus.COLORs原TV4月7日00:00，採原期DMM製作方公告／周年原播記載，未用後來7月再播。SHINY與New frame已核；Clear身分與已列LCA有第一方，但特殊ED用途兩輪未明，保原ID、季度空值與原話數片尾／官方逐曲公告續查條件。
- 44用途包含16新IN、15新歌曲身分；1筆held、2筆部分季度保存。全目錄101筆完全季度待核、67筆非空季度條件，其中43筆具體跨季缺口與ATRI日期分開。第96批10部22筆來源已審待集中整合，詳細影片／音源／發行品與正版平台仍待下一階段。
- 後續查核前已登記：第97批12部28筆既有用途：`curated-145139`、`curated-147369`、`curated-148098`、`curated-155158`、`curated-157765`、`curated-151847`、`curated-143653`、`curated-157198`、`curated-150672`、`curated-156854`、`curated-163417`、`curated-153452`；第98批2部29筆既有用途：`curated-158871`、`curated-128715`；Pokémon原24筆中6筆已核保持全欄與日期，只核18筆及贄姫5筆。未驗證事實不計完成，依批次集中整合。
- 來源查核前已登記2023冬接續：第99批11部27筆既有用途：`curated-137909`、`curated-151252`、`curated-141249`、`curated-153629`、`curated-141062`、`curated-146323`、`curated-147864`、`curated-151806`、`curated-153841`、`curated-155202`、`curated-155211`；第100批9部29筆既有用途：`curated-130696`、`curated-139821`、`curated-146850`、`curated-148116`、`curated-143064`、`curated-143338`、`curated-151040`、`curated-152523`、`curated-154969`。各組只查已登記缺口，未驗證內容不計公開完成；基本、詳細與長期範圍仍未完成。

### 檢查與展示

- verify:batch及verify:full通過：6檔21單元、型別0錯誤／警告、2,098 HTML／4,276產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E；未更動正常程式或放寬gate。 首次私人展示腳本只數首24列而報數量差異；依既有正常分頁逐頁核27用途後全通過，僅修私人預覽腳本，未改正常UI或降低gate。
- ApiProvider8部44筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗8頁44組狀態、8季度、3用途過濾、24搜尋、8筆TV／待核狀態展示、1待核及2部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批僅春季seed、已證動畫跨季registry、欄位盤點及checkpoint；無parser／UI／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/the-idolm-at-ster-cinderella-girls-u149/#theme-the-idolm-at-ster-cinderella-girls-u149-in-1`、`/anime/isekai-one-turn-kill-neesan-ane-douhan-no-isekai-seikatsu-hajimemashita/`及`/seasons/2023-spring/`。 接第96批2023春10部21筆既有用途：`curated-148109`、`curated-155070`、`curated-134131`、`curated-141208`、`curated-150957`、`curated-151606`、`curated-151801`、`curated-154412`、`curated-160442`、`curated-140754`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #188](https://github.com/kyeunga25/anisonary/pull/188)同SHA的quality／Workers通過後正常rebase合併。main來源`ec5a59680fa33c2c1d6fd790cd19469b433e70b6`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch95-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站88條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider8部44筆與本機一致；Chromium393×852驗8頁44狀態、8季度、3用途、24搜尋、8筆TV／待核狀態展示、1待核及2部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-96（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原21用途加1筆已證新用途，共22筆：21筆基本逐欄證據、1筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `yuusha-ga-shinda-op-1` | 死んだ！／オーイシマサヨシ | OP1 | 2023-spring |
| `yuusha-ga-shinda-ed-1` | 可愛くって意地悪しちゃう／久保ユリカ | ED1 | 2023-spring |
| `kawaisugi-crisis-op-1` | スペースキャットビッグバン／超学生 | OP1 | 2023-spring |
| `kawaisugi-crisis-ed-1` | にゃんぼりーdeモッフィー!!／DIALOGUE＋ | ED1 | 2023-spring |
| `mahou-shoujo-magical-destroyers-op-1` | MAGICAL DESTROYER／愛美 | OP1 | 2023-spring |
| `mahou-shoujo-magical-destroyers-ed-1` | Gospelion in a classic love／The 13th tailor | ED1 | 2023-spring |
| `mahou-shoujo-magical-destroyers-in-1` | Everything Happens for a reason／オタクヒーロー（CV.古川慎） | IN1 | 2023-spring |
| `tonikaku-kawaii-2nd-season-op-1` | 刹那の誓い（feat.由崎司）／Neko Hacker | OP1 | 2023-spring |
| `tonikaku-kawaii-2nd-season-ed-1` | 夜のかたすみ／由崎司（CV：鬼頭明里） | ED1 | 2023-spring |
| `edomae-elf-op-1` | 奇縁ロマンス／ナナヲアカリ | OP1 | 2023-spring |
| `edomae-elf-ed-1` | おどる ひかり／Cody・Lee(李) | ED1 | 2023-spring |
| `birdie-wing-golf-girls-story-season-2-op-1` | Venus Line／広瀬香美 | OP1 | 2023-spring |
| `birdie-wing-golf-girls-story-season-2-ed-1` | 君がいるから／門脇更紗 | ED1 | 2023-spring |
| `birdie-wing-golf-girls-story-season-2-ed-2` | Kimi ga Iru kara -Acoustic ver.-／Sarasa Kadowaki | ED2 | 第一方身分／用途待核，原入口保留 |
| `mashle-op-1` | Knock Out／岡崎体育 | OP1 | 2023-spring |
| `mashle-ed-1` | シュークリーム・ファンク／フィロソフィーのダンス | ED1 | 2023-spring |
| `megami-no-cafe-terrace-op-1` | 運命共同体！／音莉飴 | OP1 | 2023-spring |
| `megami-no-cafe-terrace-ed-1` | ドラマチック／佐藤ミキ | ED1 | 2023-spring |
| `rokudou-no-onna-tachi-op-1` | ENDLESS LABYRINTH／EverdreaM | OP1 | 2023-spring |
| `rokudou-no-onna-tachi-ed-1` | Love Will Find A Way／THE RAMPAGE | ED1 | 2023-spring |
| `isekai-shoukan-wa-nidome-desu-op-1` | Continue Distortion／秘密結社ニルヴァージュ∀ | OP1 | 2023-spring |
| `isekai-shoukan-wa-nidome-desu-ed-1` | Be ambitious!!!／メイビーME | ED1 | 2023-spring |

- 公開anime ID：`curated-148109`、`curated-155070`、`curated-134131`、`curated-141208`、`curated-150957`、`curated-151606`、`curated-151801`、`curated-154412`、`curated-160442`、`curated-140754`。更正12個原名、18個演唱名義；同頁補66項詞／曲／編及19項演唱（按用途計）。新增1筆用途／1個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,706用途（4,516 OP／ED、180 IN、10 TS）均有dataStatus；1,565筆基本逐欄證據、3,141筆來源待細分。2,332個唯一用途逐批處理，其中2,142 OP／ED、180 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,041部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 勇者が死んだ！原TV4月7日01:00、カワイスギクライシス4月7日22:30；原頁核正常兩曲、名義及明示作者。魔法少女マジカルデストロイヤーズ初回4月8日02:25為特別時段，不套正常01:55。ED以The 13th tailor正式名義，reina實際歌唱另列，不由製作名義推演唱。F.M.F作者頁只採本次普通搜尋可讀明確索引，正文不可讀限制保存。
- 新增Everything Happens for a reason／オタクヒーロー（CV古川慎）第8話IN，動畫原逐話曲目與中文交叉雙證，JUN INAGAWA詞、羽柴吟曲編依明示。另一首暴走少女愛伝 茶茶在第一方與交叉歌唱人數不符，保續查、不猜多一名歌唱或新增。
- Tonikaku第二期OP製作／主要名義Neko Hacker，逐曲鬼頭明里歌唱另列；不把製作雙人組推成實唱。江戶前精靈初回原公告4月8日02:55，不套常規02:25。兩作原Music作者及正式名義保存，未由團隊bio補未列成員。
- Birdie第二期官方原公告明續用第一期Venus Line，OP保第二期原用途而共同birdie-wing-golf-girls-story-op-1-song；第一期seed只加這個明確songId，其他資料／日期完全保留，不重搬歷史資料。第二期正常ED已核；君がいるから -Acoustic ver.-仍缺本版身分／TV特殊ED第一方，原ED2季度空，未從原ED1移植編曲／歌唱。VGMdb僅OST收錄交叉，明確排除正面anime_use；第一方與候選平台界線保留。
- Birdie原精確TV時分兩輪未明，現Onair是串流，保原4月8日與未讀根頁9月1日日期、無時分；不以BS後續或再播時刻代原最早首播。Mashle原正常兩曲只已證春，7月1日末話TV雖有交叉日期，逐曲第一方仍缺，2筆partial與動畫夏季關聯分開。
- 女神咖啡廳第一期原TV4月8日01:25，OP共同作者音莉飴／メブキユウ依原欄，ED上坂梨紗原字形保留。六道惡女4月8日01:35，ED的SHOKICHI／DAIS Miyachi／Yuichi Ohno按明確詞曲角色，Produced／Sound Produced不自動作編曲。異世界二度召喚原TV4月9日02:00，不用後來7月再播；無逐曲第一方LCA留空。
- 本批1首新IN、1個新歌曲身分；22用途含1held與2partial。全目錄102筆完全季度待核、69筆非空季度條件，其中45筆具體跨季缺口及ATRI日期分開。其他2041部JSON逐檔相同，第一期Birdie只多顯式歌曲ID為已列保留性例外；來源及其日期未因此全面更新。
- 接續已審來源：第97批12部30筆、第98批2部29stored／23待核；Pokémon六筆原已核完整保留，前六RVR身份／用途已證但逐版季度未明，與後六身分／用途缺口分開。第99／100範圍預先登記：第99批11部27筆既有用途：`curated-137909`、`curated-151252`、`curated-141249`、`curated-153629`、`curated-141062`、`curated-146323`、`curated-147864`、`curated-151806`、`curated-153841`、`curated-155202`、`curated-155211`；第100批9部29筆既有用途：`curated-130696`、`curated-139821`、`curated-146850`、`curated-148116`、`curated-143064`、`curated-143338`、`curated-151040`、`curated-152523`、`curated-154969`。未驗證內容不計完成，詳細及長期仍未完成。
- 新查詢前已登記2023冬接續：第101批10部28筆既有用途：`curated-155089`、`curated-155907`、`curated-130588`、`curated-135102`、`curated-140596`、`curated-142853`、`curated-144092`、`curated-144553`、`curated-145665`、`curated-147216`；第102批10部25筆既有用途：`curated-151679`、`curated-152765`、`curated-126529`、`curated-135778`、`curated-136435`、`curated-142914`、`curated-136430`、`curated-141785`、`curated-142193`、`curated-142849`。未驗證內容不計公開完成。

### 檢查與展示

- verify:batch及verify:full通過：6檔21單元、型別0錯誤／警告、2,098 HTML／4,277產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E；沒有放寬資料或安全gate。
- ApiProvider10部22筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁22組狀態、10季度、3用途過濾、11搜尋、10筆TV／待核狀態展示、1待核及2部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批修改2023春seed、第一期Birdie原2022春seed的一個songId、已證動畫跨季registry、欄位盤點及checkpoint；無parser／UI／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/mahou-shoujo-magical-destroyers/#theme-mahou-shoujo-magical-destroyers-in-1`、`/anime/birdie-wing-golf-girls-story-season-2/`及`/seasons/2023-spring/`。 接第97批2023春12部28筆既有用途：`curated-145139`、`curated-147369`、`curated-148098`、`curated-155158`、`curated-157765`、`curated-151847`、`curated-143653`、`curated-157198`、`curated-150672`、`curated-156854`、`curated-163417`、`curated-153452`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #189](https://github.com/kyeunga25/anisonary/pull/189)同SHA的quality／Workers通過後正常rebase合併。main來源`10dda91bf27e3fb33f0d7af447dec61b1a121298`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch96-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站94條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部22筆與本機一致；Chromium393×852驗10頁22狀態、10季度、3用途、11搜尋、10筆TV／待核狀態展示、1待核及2部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-97（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。12部、原28用途加2筆已證新用途，共30筆：28筆基本逐欄證據、2筆特殊用途待核、5筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `kimetsu-no-yaiba-katanakaji-no-sato-hen-op-1` | 絆ノ奇跡／MAN WITH A MISSION × milet | OP1 | 2023-spring |
| `kimetsu-no-yaiba-katanakaji-no-sato-hen-ed-1` | コイコガレ／milet × MAN WITH A MISSION | ED1 | 2023-spring |
| `kimetsu-no-yaiba-katanakaji-no-sato-hen-in-1` | 竈門禰豆子のうた／椎名豪 featuring 中川奈美 | IN1 | 2023-spring |
| `ao-no-orchestra-op-1` | Cantabile／Novelbright | OP1 | 2023-spring |
| `ao-no-orchestra-ed-1` | 夕さりのカノン feat.『ユイカ』／粗品 | ED1 | 2023-spring |
| `otonari-ni-ginga-op-1` | となりあわせ／松本千夏 | OP1 | 2023-spring |
| `otonari-ni-ginga-ed-1` | Near Stella／五色しおり（CV.和久井 優） | ED1 | 2023-spring |
| `mobile-suit-gundam-the-witch-from-mercury-season-2-op-1` | slash／yama | OP1 | 2023-spring |
| `mobile-suit-gundam-the-witch-from-mercury-season-2-ed-1` | Red:birthmark／アイナ・ジ・エンド | ED1 | 2023-spring |
| `mobile-suit-gundam-the-witch-from-mercury-season-2-ed-2` | 祝福／YOASOBI | ED2 | 第一方身分／用途待核，原入口保留 |
| `mobile-suit-gundam-the-witch-from-mercury-season-2-in-1` | 宝石の日々／アイナ・ジ・エンド | IN1 | 2023-summer |
| `world-dai-star-op-1` | ワナビスタ！／鳳 ここな（CV：石見舞菜香）、静香（CV：長谷川育美）、カトリナ・グリーベル（CV：天城サリー）、新妻八恵（CV：長縄まりあ）、柳場ぱんだ（CV：大空直美）、流石知冴（CV：佐々木李子） | OP1 | 2023-spring |
| `world-dai-star-ed-1` | トゥ・オブ・アス／鳳 ここな（CV：石見舞菜香）、静香（CV：長谷川育美） | ED1 | 2023-spring |
| `world-dai-star-ed-2` | 名もなき恋人よ／柳場ぱんだ（CV：大空直美）、流石知冴（CV：佐々木李子） | ED2 | 第一方身分／用途待核，原入口保留 |
| `kanojo-ga-koushaku-tei-ni-itta-riyuu-op-1` | SURVIVE／MindaRyn | OP1 | 2023-spring |
| `kanojo-ga-koushaku-tei-ni-itta-riyuu-ed-1` | Always and Forever／SERRA | ED1 | 2023-spring |
| `kanojo-ga-koushaku-tei-ni-itta-riyuu-ed-2` | Fireworks／MindaRyn | ED2 | 2023-spring |
| `kimi-wa-houkago-insomnia-op-1` | いつ逢えたら／aiko | OP1 | 2023-spring |
| `kimi-wa-houkago-insomnia-ed-1` | ラプス／Homecomings | ED1 | 2023-spring |
| `kimi-wa-houkago-insomnia-ed-2` | ヘルツ／Homecomings | ED2 | 2023-spring |
| `dead-mount-death-play-op-1` | ネロ／Sou | OP1 | 2023-spring |
| `dead-mount-death-play-ed-1` | アイオライト／水瀬いのり | ED1 | 2023-spring |
| `oshi-no-ko-op-1` | アイドル／YOASOBI | OP1 | 2023-spring |
| `oshi-no-ko-ed-1` | メフィスト／女王蜂 | ED1 | 2023-spring |
| `the-marginal-service-op-1` | Quiet explosion／宮野真守 | OP1 | 2023-spring |
| `the-marginal-service-ed-1` | Salt & Sugar／内田雄馬 | ED1 | 2023-spring |
| `majutsushi-orphen-hagure-tabi-seiiki-hen-op-1` | MOTIVE RAIN／森久保祥太郎 | OP1 | 2023-spring |
| `majutsushi-orphen-hagure-tabi-seiiki-hen-ed-1` | 終焉のDestiny／渕上舞 | ED1 | 2023-spring |
| `ousama-ranking-yuuki-no-takarabako-op-1` | GOLD／PEOPLE 1 | OP1 | 2023-spring |
| `ousama-ranking-yuuki-no-takarabako-ed-1` | あてもなく／Aimer | ED1 | 2023-spring |

- 公開anime ID：`curated-145139`、`curated-147369`、`curated-148098`、`curated-155158`、`curated-157765`、`curated-151847`、`curated-143653`、`curated-157198`、`curated-150672`、`curated-156854`、`curated-163417`、`curated-153452`。更正17個原名、15個演唱名義；同頁補52項詞／曲／編及24項演唱（按用途計）。新增2筆用途／2個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,708用途（4,516 OP／ED、182 IN、10 TS）均有dataStatus；1,593筆基本逐欄證據、3,115筆來源待細分。2,362個唯一用途逐批處理，其中2,170 OP／ED、182 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,040部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 刀鍛冶の里編原TV4月9日23:15；正常OP／ED按原Music核實。竈門禰豆子のうた由官方插曲頁與中文曲表確證第11話IN；官方影片只支援本次實讀歌曲身分／作者，anime_use僅限插曲原頁，不把影片形式推TV用途或音源長度。
- 青のオーケストラ4月9日17:00原TV、動畫夏秋續播關聯由已讀日期來源保留；兩曲只已證春，夏秋逐曲仍待片尾／官方延用公告，2筆partial。おとなりに銀河最早TV4月9日01:30，4月8日25:30換實曆，00:00為WEB先行；歌唱與用途原頁核實。
- 水星の魔女第二期原TV4月9日17:00由Bandai原期PDF；slash與Red:birthmark只已證春，2筆夏季條件不因最終話日直接全套。官方原ED頁另明宝石の日々IN，藝人原7月3日公告明最終回，Natalie原期報道證前日7月2日播出；新IN按實際夏季，不用配信日推TV。原ED2祝福只有第一期歌曲身分FP與第二期片尾CC，保持本期held／空季度，未以同名推新錄音或解除用途缺口。
- World Dai Star正常OP／ED及逐曲角色作者已核；名もなき恋人よ有官方雙人歌唱與劇中歌資料，未明ED，原ED2 held、ID/type保留，不由一般劇中歌字樣自動改IN。公爵邸Fireworks由Lantis真連向藝人原discography明第6話ED、Ryu（Ryu Matsuyama）詞曲編；Insomnia的ヘルツ由唱片方原期索引明第7話限定ED，未因媒體稱IN覆蓋正式用途。
- Insomnia原TV4月11日00:00；原末話節目表7月3日24:00只泛列主題曲，精確逐話CC明ラプス末話作IN、OP亦作ED，因此不拿泛用欄證夏季ED。ED只spring，OP summer保partial，未新增未有第一方的末話特殊ED／IN。DMD原前courMusic與已核後cour分開。
- Oshi首話4月12日23:00、Orphen聖域4月12日20:30、王様寶箱4月14日00:55均有原期第一方；長首話仍屬本標準TV範圍。Marginal兩曲原名／藝人／用途由日本テレビ音楽原2023年6月曲表確認，原官網空頁不當新證據；精確TV時分兩輪未明，保4月12日與原metadata／根頁9月1日、無時分，續查條件保存。
- 本批2新用途／2新歌曲，其他2040部JSON逐檔相同；全目錄104筆完全季度待核、74筆非空季度條件，其中50筆具體跨季缺口與ATRI日期分開。基本、詳細及長期範圍仍未完成。
- 查詢前已登記：第103批10部29筆既有用途：`curated-148969`、`curated-156067`、`curated-116867`、`curated-144144`、`curated-158870`、`curated-125869`、`curated-139213`、`curated-146954`、`curated-155068`、`curated-157883`；第104批10部29筆既有用途：`curated-139820`、`curated-139587`、`curated-137341`、`curated-124395`、`curated-139630`、`curated-142701`、`curated-142838`、`curated-145815`、`curated-150695`、`curated-128890`。仍依98→99→100→101→102→103→104整合，來源交接不是公開完成；作品聯集與特殊媒體分類續查保留。

### 檢查與展示

- verify:batch及verify:full通過：6檔21單元、型別0錯誤／警告、2,098 HTML／4,277產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E；未放寬有效gate。
- ApiProvider12部30筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗12頁30組狀態、13季度、3用途過濾、14搜尋、12筆TV／待核狀態展示、2待核及5部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批僅春季seed、已證動畫夏秋關聯registry、欄位盤點及checkpoint；無parser／UI／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/kimetsu-no-yaiba-katanakaji-no-sato-hen/`、`/anime/mobile-suit-gundam-the-witch-from-mercury-season-2/`、`/seasons/2023-summer/`。 接第98批2023春2部29筆既有用途：`curated-158871`、`curated-128715`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #190](https://github.com/kyeunga25/anisonary/pull/190)同SHA的quality／Workers通過後正常rebase合併。main來源`78362b0b586ce98add0db52f54f75bd29d97e981`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch97-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站96條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider12部30筆與本機一致；Chromium393×852驗12頁30狀態、13季度、3用途、14搜尋、12筆TV／待核狀態展示、2待核及5部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-98（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。2部、原29用途加0筆已證新用途，共29筆：22筆基本逐欄證據、7筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `pokemon-2023-op-1` | ドキメキダイアリー／asmi feat. Chinozo | OP1 | 2023-spring, 2023-summer, 2023-fall |
| `pokemon-2023-op-2` | ハロ／yama × ぼっちぼろまる | OP2 | 2023-fall, 2024-winter |
| `pokemon-2023-op-3` | Will／IVE | OP3 | 2024-spring, 2024-summer |
| `pokemon-2023-op-4` | Only One Story／ZEROBASEONE | OP4 | 2024-fall, 2025-winter |
| `pokemon-2023-op-5` | GET BACK／ゆず | OP5 | 2025-spring, 2025-summer |
| `pokemon-2023-op-6` | アイオライト／Eve | OP6 | 2025-fall, 2026-winter, 2026-spring |
| `pokemon-2023-op-7` | セカイツナガレ／リコ＆ロイ（CV：鈴木みのり＆寺崎裕香） | OP7 | 2026-spring, 2026-summer, 2026-fall |
| `pokemon-2023-ed-1` | RVR〜ライジングボルテッカーズラップ〜[フリードVer.]／リコ（CV.鈴木みのり）＆ロイ（CV.寺崎裕香）＆フリード（CV.八代拓） | ED1 | 基本身分／用途已證；用途季度待核 |
| `pokemon-2023-ed-2` | RVR〜ライジングボルテッカーズラップ〜[オリオVer.]／リコ（CV.鈴木みのり）＆ロイ（CV.寺崎裕香）＆オリオ（CV.佐倉綾音） | ED2 | 基本身分／用途已證；用途季度待核 |
| `pokemon-2023-ed-3` | RVR〜ライジングボルテッカーズラップ〜[マードックVer.]／リコ（CV.鈴木みのり）＆ロイ（CV.寺崎裕香）＆マードック（CV.三宅健太） | ED3 | 基本身分／用途已證；用途季度待核 |
| `pokemon-2023-ed-4` | RVR〜ライジングボルテッカーズラップ〜[モリーVer.]／リコ（CV.鈴木みのり）＆ロイ（CV.寺崎裕香）＆モリー（CV.真堂圭） | ED4 | 基本身分／用途已證；用途季度待核 |
| `pokemon-2023-ed-5` | RVR〜ライジングボルテッカーズラップ〜[ランドウVer.]／リコ（CV.鈴木みのり）＆ロイ（CV.寺崎裕香）＆ランドウ（CV.塾一久） | ED5 | 基本身分／用途已證；用途季度待核 |
| `pokemon-2023-ed-6` | RVR〜ライジングボルテッカーズラップ〜[ドットVer.]／リコ（CV.鈴木みのり）＆ロイ（CV.寺崎裕香）＆ドット（CV.青山吉能） | ED6 | 基本身分／用途已證；用途季度待核 |
| `pokemon-2023-ed-7` | RVR ~Rising Volt Tacklers Rap~ [Friede Ver.PART2]／Minori Suzuki、Taku Yashiro、Yuka Terasaki | ED7 | 第一方身分／用途待核，原入口保留 |
| `pokemon-2023-ed-8` | RVR ~Rising Volt Tacklers Rap~ [Murdock Ver.PART2]／Minori Suzuki、Kenta Miyake、Yuka Terasaki | ED8 | 第一方身分／用途待核，原入口保留 |
| `pokemon-2023-ed-9` | RVR ~Rising Volt Tacklers Rap~ [Molly Ver.PART2]／Minori Suzuki、Yuka Terasaki、Kei Shindou | ED9 | 第一方身分／用途待核，原入口保留 |
| `pokemon-2023-ed-10` | RVR ~Rising Volt Tacklers Rap~ [Orio Ver.PART2]／Ayane Sakura、Minori Suzuki、Yuka Terasaki | ED10 | 第一方身分／用途待核，原入口保留 |
| `pokemon-2023-ed-11` | RVR ~Rising Volt Tacklers Rap~ [Landau Ver.PART2]／Minori Suzuki、Yuka Terasaki、Ikkyuu Juku | ED11 | 第一方身分／用途待核，原入口保留 |
| `pokemon-2023-ed-12` | RVR ~Rising Volt Tacklers Rap~ [Gurumin Ver.]／Minori Suzuki、Yoshino Aoyama、Yuka Terasaki | ED12 | 第一方身分／用途待核，原入口保留 |
| `pokemon-2023-ed-13` | Let me battle／9Lana | ED13 | 2024-spring |
| `pokemon-2023-ed-14` | ピッカーン！／Giga & TeddyLoid meets 松田里奈 & 森田ひかる（櫻坂46） | ED14 | 2024-fall, 2025-winter |
| `pokemon-2023-ed-15` | Ready Go／ME:I | ED15 | 2025-spring, 2025-summer |
| `pokemon-2023-ed-16` | ねてもさめても／ポルカドットスティングレイ | ED16 | 2025-fall, 2026-winter, 2026-spring |
| `pokemon-2023-ed-17` | キュートなキューたい／CUTIE STREET | ED17 | 2026-spring, 2026-summer, 2026-fall |
| `niehime-to-kemono-no-ou-op-1` | 朔の贄／BIN | OP1 | 2023-spring |
| `niehime-to-kemono-no-ou-op-2` | LOVE INFINITY／Hinano | OP2 | 2023-summer |
| `niehime-to-kemono-no-ou-ed-1` | ONLY／GARNiDELiA | ED1 | 2023-spring |
| `niehime-to-kemono-no-ou-ed-2` | call your name／katagiri | ED2 | 2023-summer |
| `niehime-to-kemono-no-ou-ed-3` | Miles Away／KOHTA YAMAMOTO | ED3 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-158871`、`curated-128715`。更正10個原名、9個演唱名義；同頁補8項詞／曲／編及22項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,708用途（4,516 OP／ED、182 IN、10 TS）均有dataStatus；1,609筆基本逐欄證據、3,099筆來源待細分。2,367個唯一用途逐批處理，其中2,175 OP／ED、182 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,050部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- Pokémon原24用途只查OP1–4／ED1–14共18筆；OP5–7／ED15–17六筆所有原資料、songId、來源／checkedAt及媒體保持原樣，未再查未重算本輪新增。另贄姫5筆，共29展示／23本輪查核；全選22筆基本證據其中6來自既有，實際本輪新增16筆。
- Pokémon第一方商品公告逐版列RVR前六原名、三人歌唱及各版TV EDノンクレジット映像，確證身分與用途；逐版TV季度未明，6筆保持field_evidence_recorded、季度空及use_quarters續查。官方同頁明版本關係，六用途共pokemon-2023-ed-1-song；各演唱與版本保留、不建立新錄音。後六PART2／ぐるみん只有概括「他6Ver.」未具名，兩輪未取得逐版FP，保held、不套入前六共歌，也不由當週來賓推版本歌唱。
- OP1按原TV7月28日／10月20日曲表明春夏秋2023；OP2原10月27日啟用及1月19日延用證秋2023／冬2024；OP3原4月12日／7月12日證春夏2024；OP4及ピッカーン證秋2024／冬2025。原版Let me battle只已證2024春，夏季feat輪替不能當原9Lana版延用，保partial。製作名義與歌唱分開：Chinozo對詞曲、asmi實唱；Giga & TeddyLoid meets名義不推兩製作人歌唱，松田／森田與DECO詞按本曲原文。
- Pokémon原最早TV4月14日18:55由Sony自家原期稿，未從配信或後來時刻反推。metadataVerifiedAt保9月1日，五筆原metadata來源各保10月19日；新增本次實讀URL才22，六筆已核用途的全部來源日期不刷新。
- 贄姫原Onair索引4月19日24:00換實曆4月20日00:00；四正常曲由原Music／Movie核身分用途，未把CC時刻當最早TV。前OP朔の贄保春，7月第12話的逐曲第一方仍缺、留partial；前ED到6月29日只春，新cour兩曲由原7月cour公告及第13話起交叉證夏。Miles Away只有OST收錄與整碟參與名單，逐曲歌唱／特殊ED兩輪未明，原ED3／名義／序號保留而季度空、不由KOHTA整碟署名推歌唱。
- 本批0新用途／0新歌曲，其他2050部JSON相同。全目錄99筆用途季度空包含上述6筆已證用途，不能全稱基本證據未明；另76筆非空季度條件，其中52筆具體跨季缺口與ATRI日期保存。詳細及整季作品聯集尚未完成。
- 本輪逐曲證據及具體續查已接替Pokémon18筆舊的泛用季度提醒，因此只移除該18筆沒有核對日的原通用use_quarters備註；保留本輪13筆空季度與Let me battle具體季度條件，未動六筆完整保留用途。OP1–4／ED14已證季度不再被舊提醒誤列未解。整合重加native季度引用曾被gate攔截，移除重複後重跑必要檢查，未修改正常程式或降低gate。
- 後續標準TV來源查核已登記：第105批6部27筆既有用途：`curated-139274`、`curated-143086`、`curated-146475`、`curated-155011`、`curated-139369`、`curated-142343`；第106批3部25筆既有用途：`curated-125910`、`curated-145604`、`curated-130298`。未驗證內容不計完成，海外原TV／雙半段格式與跨季用途先核界線。

### 檢查與展示

- verify:batch及verify:full通過：6檔21單元、型別0錯誤／警告、2,098 HTML／4,277產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E；未放寬有效gate。
- ApiProvider2部29筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗2頁29組狀態、17季度、3用途過濾、2搜尋、2筆TV／待核狀態展示、7待核及2部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批僅春季seed、已證動畫跨年季度registry、欄位盤點及checkpoint；六筆原已核用途整筆保留，無parser／UI／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/pokemon-2023/`、`/anime/niehime-to-kemono-no-ou/`、`/seasons/2023-fall/`。 接第99批2023冬11部27筆既有用途：`curated-137909`、`curated-151252`、`curated-141249`、`curated-153629`、`curated-141062`、`curated-146323`、`curated-147864`、`curated-151806`、`curated-153841`、`curated-155202`、`curated-155211`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #191](https://github.com/kyeunga25/anisonary/pull/191)同SHA的quality／Workers通過後正常rebase合併。main來源`183b11b25343d9b4e90ebeff493a01c8ae0145e6`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch98-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站76條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider2部29筆與本機一致；Chromium393×852驗2頁29狀態、17季度、3用途、2搜尋、2筆TV／待核狀態展示、7待核及2部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-99（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。11部、原27用途加2筆已證新用途，共29筆：29筆基本逐欄證據、0筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `ningen-fushin-no-boukensha-tachi-ga-sekai-wo-sukuu-you-desu-op-1` | Glorious World／土岐隼一 | OP1 | 2023-winter |
| `ningen-fushin-no-boukensha-tachi-ga-sekai-wo-sukuu-you-desu-ed-1` | Never Fear／阿部真央 | ED1 | 2023-winter |
| `koori-zokusei-danshi-to-cool-na-douryou-joshi-op-1` | FROZEN MIDNIGHT／佐久間貴生 | OP1 | 2023-winter |
| `koori-zokusei-danshi-to-cool-na-douryou-joshi-ed-1` | リナリア／Nowlu | ED1 | 2023-winter |
| `bungou-stray-dogs-4th-season-op-1` | TRUE STORY／SCREEN mode | OP1 | 2023-winter |
| `bungou-stray-dogs-4th-season-ed-1` | しるし／ラックライフ | ED1 | 2023-winter |
| `tensei-oujo-to-tensai-reijou-no-mahou-kakumei-op-1` | アルカンシェル／花たん | OP1 | 2023-winter |
| `tensei-oujo-to-tensai-reijou-no-mahou-kakumei-ed-1` | Only for you／アニスフィア・ウィン・パレッティア（CV.千本木彩花）、ユフィリア・マゼンタ（CV.石見舞菜香） | ED1 | 2023-winter |
| `technoroid-overmind-op-1` | LOVE NO HATE／KNoCC | OP1 | 2023-winter |
| `technoroid-overmind-ed-1` | インヴィジブル -one heart-／KNoCC、STAND-ALONE | ED1 | 2023-winter |
| `technoroid-overmind-in-1` | 願いのチカラ／KNoCC | IN1 | 2023-winter |
| `technoroid-overmind-in-2` | ライクメッセージ／KNoCC | IN2 | 2023-winter |
| `spy-kyoushitsu-op-1` | 灯火／nonoc | OP1 | 2023-winter |
| `spy-kyoushitsu-ed-1` | Secret Code／鈴木このみ | ED1 | 2023-winter |
| `spy-kyoushitsu-ed-2` | Fool on the secret／エルナ（CV：水瀬いのり） | ED2 | 2023-winter |
| `spy-kyoushitsu-ed-3` | DON'T／ジビア（CV：東山奈央） | ED3 | 2023-winter |
| `spy-kyoushitsu-ed-4` | SPARKLEscape／サラ（CV：佐倉綾音） | ED4 | 2023-winter |
| `spy-kyoushitsu-ed-5` | 偽りない幸福を／グレーテ（CV：伊藤美来） | ED5 | 2023-winter |
| `onii-chan-wa-oshimai-op-1` | アイデン貞貞メルトダウン／えなこ feat. P丸様。 | OP1 | 2023-winter |
| `onii-chan-wa-oshimai-ed-1` | ひめごと＊クライシスターズ／ONIMAI SISTERS（高野麻里佳・石原夏織・金元寿子・津田美波） | ED1 | 2023-winter |
| `tomo-chan-wa-onnanoko-op-1` | くらえ！テレパシー／マハラージャン | OP1 | 2023-winter |
| `tomo-chan-wa-onnanoko-ed-1` | yurukuru＊love／相沢 智（CV：高橋李依）、群堂みすず（CV：日高里菜）、キャロル・オールストン（CV：天城サリー） | ED1 | 2023-winter |
| `tomo-chan-wa-onnanoko-ed-2` | Jiribaki_love／久保田淳一郎（CV：石川界人）、御崎光助（CV：天﨑滉平）、田辺達巳（CV：松岡禎丞） | ED2 | 2023-winter |
| `tsurune-tsunagari-no-issha-op-1` | ℃／ラックライフ | OP1 | 2023-winter |
| `tsurune-tsunagari-no-issha-ed-1` | ヒトミナカ／丁 | ED1 | 2023-winter |
| `revenger-op-1` | ダウンタイマー／レトベア（unknown Vo：O2） | OP1 | 2023-winter |
| `revenger-ed-1` | un_mute／坂本真綾 | ED1 | 2023-winter |
| `dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-shin-shou-yakusai-hen-op-1` | 視紅／早見沙織 | OP1 | 2023-winter |
| `dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-shin-shou-yakusai-hen-ed-1` | 切り傷／sajou no hana | ED1 | 2023-winter |

- 公開anime ID：`curated-137909`、`curated-151252`、`curated-141249`、`curated-153629`、`curated-141062`、`curated-146323`、`curated-147864`、`curated-151806`、`curated-153841`、`curated-155202`、`curated-155211`。更正14個原名、21個演唱名義；同頁補57項詞／曲／編及32項演唱（按用途計）。新增2筆用途／2個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,710用途（4,516 OP／ED、184 IN、10 TS）均有dataStatus；1,638筆基本逐欄證據、3,072筆來源待細分。2,396個唯一用途逐批處理，其中2,202 OP／ED、184 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,041部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 11部原27用途加TECHNOROID第3話願いのチカラ、第6話ライクメッセージ兩IN，共29基本證據；官方event原逐話回顧與Lisani原期逐話訪談交叉，不由現實活動medley日期當TV。Joying與第5話曲尚缺用途類別交叉，暫不新增。
- 人間不信TV改1月10日23:00，1月3日為ABEMA先行；冰屬性男子TV1月4日22:30、WEB1月3日分開；文豪S4核原1月4日23:00，未套第5期；轉生王女最早AT-X1月4日21:00，地上波25:00與ABEMA24:00較後。逐曲角色/CV只依正式歌唱欄，PV曲Joyride不當動畫IN。
- Spy Classroom第一期原TV1月5日22:30，原index1 SPECIAL ENDING明四曲及逐曲角色作者；グレーテ偽りない幸福を官方作編塚田耕平，中文作者錯誤只作衝突備註，不覆蓋第一方。TECHNOROID CLIMBER與お兄ちゃんはおしまい原TV1月5日00:00／23:30；團隊成員簡介不當逐人歌唱，雙人OP與四人ED採本曲直接宣告及錄音留言。
- Danmachi深章原TV1月7日01:05，1月5日為ABEMA先行；Tsurune1月5日00:00、Tomo00:30、REVENGER AT-X21:00最早。Tomo男性版ED身份來源與3月9日Special Ending Animation用途來源分開，僅精確後者進useOnlySources；搜尋索引可讀範圍如實記錄。REVENGER原名un_mute，中文漏字un_mut只採artist交叉，原有效AnimeThemes題名證據保日期。
- 同頁明示作者順手保存，未逐曲明LCA留缺；Not meet doubt等只有中文逐話線索沒有第一方不新增。其他2041部JSON相同，未重讀日期、ID及媒體保留；全目錄99筆空季度、76筆非空季度條件，其中52筆具體跨季缺口與ATRI日期分開，基本與長期尚未完成。
- 後續標準TV來源範圍已登記：第107批10部29筆既有用途：`curated-131182`、`curated-146233`、`curated-154545`、`curated-131516`、`curated-140439`、`curated-142985`、`curated-144533`、`curated-142541`、`curated-151379`、`curated-136150`；第108批6部23筆既有用途：`curated-139092`、`curated-130003`、`curated-137822`、`curated-141949`、`curated-142481`、`curated-116674`。尚未驗證，不預計完成。短篇／特殊格式先分辨、已核成果保留。

### 檢查與展示

- verify:batch及verify:full通過：6檔21單元、型別0錯誤／警告、2,098 HTML／4,277產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E；未放寬有效gate。
- ApiProvider11部29筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗11頁29組狀態、11季度、3用途過濾、13搜尋、11筆TV／待核狀態展示、0待核及0部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批僅冬季seed、欄位盤點及checkpoint，無季度registry、parser／UI／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/technoroid-overmind/`、`/anime/spy-kyoushitsu/`、`/seasons/2023-winter/`。 接第100批2023冬9部29筆既有用途：`curated-130696`、`curated-139821`、`curated-146850`、`curated-148116`、`curated-143064`、`curated-143338`、`curated-151040`、`curated-152523`、`curated-154969`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #192](https://github.com/kyeunga25/anisonary/pull/192)同SHA的quality／Workers通過後正常rebase合併。main來源`5699d4a2862dd74d7e8cbc3f5e772d3103cb1d3c`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch99-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站94條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider11部29筆與本機一致；Chromium393×852驗11頁29狀態、11季度、3用途、13搜尋、11筆TV／待核狀態展示、0待核及0部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-100（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。9部、原29用途加0筆已證新用途，共29筆：28筆基本逐欄證據、1筆特殊用途待核、1筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `the-legend-of-heroes-sen-no-kiseki-northern-war-op-1` | The story so far／秋田知里 | OP1 | 2023-winter |
| `the-legend-of-heroes-sen-no-kiseki-northern-war-ed-1` | proud hero／中川奈美 | ED1 | 2023-winter |
| `sugar-apple-fairy-tale-op-1` | ミュージカル／鈴木みのり | OP1 | 2023-winter |
| `sugar-apple-fairy-tale-ed-1` | 叶える／諸星すみれ | ED1 | 2023-winter |
| `sugar-apple-fairy-tale-ed-2` | I Will Go On／諸星すみれ | ED2 | 第一方身分／用途待核，原入口保留 |
| `isekai-nonbiri-nouka-op-1` | Flower Ring／ルールーシー＝ルー（CV.下地紫野）＆ティア（CV.洲崎綾） | OP1 | 2023-winter |
| `isekai-nonbiri-nouka-ed-1` | Feel the winds／緋月ゆい | ED1 | 2023-winter |
| `hyouken-no-majutsushi-ga-sekai-wo-suberu-op-1` | Dystopia／Sizuk | OP1 | 2023-winter |
| `hyouken-no-majutsushi-ga-sekai-wo-suberu-ed-1` | ラウドヘイラー／内田真礼 | ED1 | 2023-winter |
| `tsundere-akuyaku-reijou-liselotte-to-jikkyou-no-endou-kun-to-kaisetsu-no-kobayashi-san-op-1` | イビツナコトバ／ダズビー | OP1 | 2023-winter |
| `tsundere-akuyaku-reijou-liselotte-to-jikkyou-no-endou-kun-to-kaisetsu-no-kobayashi-san-ed-1` | 花のように／Anna | ED1 | 2023-winter |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-op-1` | ギフト／オーイシマサヨシ | OP1 | 2023-winter |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-ed-1` | 小さな恋のうた／椎名真昼（CV：石見舞菜香） | ED1 | 2023-winter |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-ed-2` | 愛唄／椎名真昼（CV：石見舞菜香） | ED2 | 2023-winter |
| `otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-ed-3` | 君に届け／椎名真昼（CV：石見舞菜香） | ED3 | 2023-winter |
| `trigun-stampede-op-1` | TOMBI／Kvi Baba | OP1 | 2023-winter |
| `trigun-stampede-ed-1` | 星のクズ α／Salyu × haruka nakamura | ED1 | 2023-winter |
| `trigun-stampede-ed-2` | 聖者の行進／Salyu × haruka nakamura | ED2 | 2023-winter |
| `kaiko-sareta-ankoku-heishi-30-dai-no-slow-na-second-life-op-1` | CHANGEMAKER／Hinano | OP1 | 2023-winter |
| `kaiko-sareta-ankoku-heishi-30-dai-no-slow-na-second-life-ed-1` | Dear Doze Days／鬼頭明里 | ED1 | 2023-winter |
| `uniteup-op-1` | Unite up!／UniteUp! | OP1 | 2023-winter |
| `uniteup-ed-1` | いいの／KIKUNOYU | ED1 | 2023-winter |
| `uniteup-ed-2` | 吠えろ！クロスファイヤー／PROTOSTAR | ED2 | 2023-winter |
| `uniteup-ed-3` | FIRE／LEGIT | ED3 | 2023-winter |
| `uniteup-ed-4` | 希望の声／Anela | ED4 | 2023-winter |
| `uniteup-ed-5` | トリプレット／PROTOSTAR | ED5 | 2023-winter |
| `uniteup-ed-6` | A.P.P.L.E.／JAXX/JAXX | ED6 | 2023-winter |
| `uniteup-ed-7` | call／高尾大毅 | ED7 | 2023-spring |
| `uniteup-ed-8` | ユメノトビラ／清瀬明良×高尾大毅×春賀楽翔 | ED8 | 2023-spring |

- 公開anime ID：`curated-130696`、`curated-139821`、`curated-146850`、`curated-148116`、`curated-143064`、`curated-143338`、`curated-151040`、`curated-152523`、`curated-154969`。更正16個原名、19個演唱名義；同頁補34項詞／曲／編及19項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,710用途（4,516 OP／ED、184 IN、10 TS）均有dataStatus；1,666筆基本逐欄證據、3,044筆來源待細分。2,425個唯一用途逐批處理，其中2,231 OP／ED、184 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,043部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 閃の軌跡原舊官網已轉向無關內容，移除該失效域的可點官網、source及相應evidence引用；只退役已查明的外連，其他ID／來源與日期保留。有效Falcom頁只證作品與2023年1–3月TV、季度；原始首播日作待核候選保留，不補記憶或CC的精確日／時分，不建立精確TV第一方證據，等原製播方公告恢復。兩曲基本身份用途採已讀管理方原期自家頁，精確動畫日期缺口不阻擋已證歌曲。
- Sugar前cour最早TV1月6日AT-X21:30由原2023年1月官方PDF，未用現7月第二courOnair。正常兩曲與I Will Go On身份/LCA依同頁；後者只有中文IN類別、沒有本期ED第一方，保原ED2 ID/type/sequence而held空季，中文IN不產正面ED usage。異世界農家原1月6日AT-X21:00，角色歌唱與作者按本曲欄，不錯配coupling作者。
- ツンリゼ原首話特番由25:55改26:25，實曆1月7日02:25；天使原一期1月7日22:30，三ED由原期官方ED／第7話／最終話公告確證，不由商品推出。冰剣現OnAir只放送終了，WEB26:30不能代原TV，兩輪未明精確時分，保原1月6日與metadata／來源日期、無時分；Sizuk主名義與AYAME實唱分開，詞曲編按原Music逐曲明列。
- Trigun首話1月7日23:15為原公告特別時段，正常23:00分開；聖者の行進原Salyu公告明最終特殊ED／Salyu歌唱／haruka詞曲，正式合作名義由TOY’S FACTORY原EP身份補充、該商品頁不當用途證據，未推haruka歌唱。Dark1月7日22:00。
- UniteUp九用途由原Music／Movie逐話ED與單曲頁核實；call／ユメノトビラ官方第10／11話與中文4月1／8日串證spring。OP只winter、spring延用缺第一方留partial，不因延播全部套春；原TV分鐘兩輪未明，保1月7日與舊根頁9月1日、metadata基準不刷，現2024重播不倒推。
- 0新用途／0新歌曲，其他2043部JSON相同，失效域退役為已列來源保留性例外。全目錄100筆空季度、77筆非空季度條件，其中53筆具體跨季缺口及ATRI日期保存。歌曲基本、精確TV、詳細資料及全季聯集各自留續查，未稱整體完成。
- 後續標準TV查核範圍已登記：第109批3部25筆既有用途：`curated-127230`、`curated-146676`、`curated-143277`；第110批9部26筆既有用途：`curated-146962`、`curated-138565`、`curated-140660`、`curated-21294`、`curated-124410`、`curated-141775`、`curated-142095`、`curated-143270`、`curated-143417`。先秋季餘項再夏季，未驗證資料不預計完成；特殊／短篇延後並保留既有成果。

### 檢查與展示

- verify:batch及verify:full通過：21單元、型別0錯誤／警告、2,098 HTML／4,277公開產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E；未放寬有效gate。
- ApiProvider9部29筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗9頁29組狀態、10季度、3用途過濾、9搜尋、9筆TV／待核狀態展示、1待核及1部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批修改冬季seed、UniteUp已證spring動畫關聯registry、欄位盤點及checkpoint；退役一個已失效官方域外連，無parser／UI／依賴改動或新增季度。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/the-legend-of-heroes-sen-no-kiseki-northern-war/`、`/anime/sugar-apple-fairy-tale/`；`/seasons/2023-winter/`、`/seasons/2023-spring/`。 接第101批2023冬10部28筆既有用途：`curated-155089`、`curated-155907`、`curated-130588`、`curated-135102`、`curated-140596`、`curated-142853`、`curated-144092`、`curated-144553`、`curated-145665`、`curated-147216`；已登記的並行來源查核不預計為公開資料完成。

### 正式發布與驗收（2026-10-22）

- [PR #193](https://github.com/kyeunga25/anisonary/pull/193)同SHA的quality／Workers通過後正常rebase合併。main來源`ca50443c73f0b60bfe75ca371384ac0164e036cf`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch100-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站90條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider9部29筆與本機一致；Chromium393×852驗9頁29狀態、10季度、3用途、9搜尋、9筆TV／待核狀態展示、1待核及1部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-101（隨第104批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原28用途加6筆已證新用途，共34筆：27筆基本逐欄證據、7筆特殊用途待核、6筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `ars-no-kyojuu-op-1` | 変幻自在／PENGUIN RESEARCH | OP1 | 2023-winter |
| `ars-no-kyojuu-ed-1` | 名もない花／遥海 | ED1 | 2023-winter |
| `ars-no-kyojuu-ed-2` | 名もない花 – piano ver.／遥海 | ED2 | 第一方身分／用途待核，原入口保留 |
| `buddy-daddies-op-1` | SHOCK!／Ayase | OP1 | 2023-winter |
| `buddy-daddies-ed-1` | My Plan／DURDN | ED1 | 2023-winter |
| `maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-op-1` | SEIEN／Lenny code fiction | OP1 | 2023-winter, 2023-summer |
| `maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-ed-1` | エソア／ももすももす | ED1 | 2023-winter, 2023-summer |
| `maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-ed-2` | エソア -Ballad ver.-／ももすももす | ED2 | 2023-summer |
| `kamitachi-ni-hirowareta-otoko-2-op-1` | Way to go／MindaRyn | OP1 | 2023-winter |
| `kamitachi-ni-hirowareta-otoko-2-ed-1` | ドラム式探査機／田所あずさ | ED1 | 2023-winter |
| `ijiranaide-nagatoro-san-2nd-attack-op-1` | LOVE CRAZY／上坂すみれ | OP1 | 2023-winter |
| `ijiranaide-nagatoro-san-2nd-attack-ed-1` | MY SADISTIC ADOLESCENCE♡／長瀞さん（CV.上坂すみれ）、ガモちゃん（CV.小松未可子）、ヨッシー（CV.鈴木愛奈）、桜（CV.井澤詩織） | ED1 | 2023-winter |
| `tokyo-revengers-seiya-kessen-hen-op-1` | ホワイトノイズ／Official髭男dism | OP1 | 2023-winter |
| `tokyo-revengers-seiya-kessen-hen-ed-1` | 傷つけど、愛してる。／ツユ | ED1 | 2023-winter |
| `benriya-saitou-san-isekai-ni-iku-op-1` | kaleidoscope／Teary Planet | OP1 | 2023-winter |
| `benriya-saitou-san-isekai-ni-iku-ed-1` | ひだまりの彩度／konoco | ED1 | 2023-winter |
| `saikyou-onmyouji-no-isekai-tenseiki-op-1` | RECONNECTION／angela | OP1 | 2023-winter |
| `saikyou-onmyouji-no-isekai-tenseiki-ed-1` | リンク／イーファ（CV.和氣あず未）×アミュ（CV.稗田寧々） | ED1 | 第一方身分／用途待核，原入口保留 |
| `saikyou-onmyouji-no-isekai-tenseiki-ed-2` | 月夜のタクト／Sou | ED2 | 2023-winter |
| `saikyou-onmyouji-no-isekai-tenseiki-ed-3` | リンク／メイベル（CV.鬼頭明里） | ED3 | 第一方身分／用途待核，原入口保留 |
| `saikyou-onmyouji-no-isekai-tenseiki-ed-4` | リンク／イーファ（CV.和氣あず未）×アミュ（CV.稗田寧々）×メイベル（CV.鬼頭明里） | ED4 | 第一方身分／用途待核，原入口保留 |
| `saikyou-onmyouji-no-isekai-tenseiki-ed-5` | リンク／イーファ（CV.和氣あず未） | ED5 | 第一方身分／用途待核，原入口保留 |
| `saikyou-onmyouji-no-isekai-tenseiki-ed-6` | リンク／アミュ（CV.稗田寧々） | ED6 | 第一方身分／用途待核，原入口保留 |
| `nier-automata-ver1-1a-op-1` | escalate／Aimer | OP1 | 2023-winter |
| `nier-automata-ver1-1a-ed-1` | アンチノミー／amazarashi | ED1 | 2023-winter |
| `nier-automata-ver1-1a-ed-2` | Weight of the World／English Version(Ver1.1a)／J’Nique Nicole | ED2 | 第一方身分／用途待核，原入口保留 |
| `d4dj-all-mix-op-1` | Maihime／Lyrical Lily | OP1 | 2023-winter |
| `d4dj-all-mix-ed-1` | Around and Around／愛本りんく（CV.西尾夕香）、山手響子（CV.愛美）、出雲咲姫（CV.紡木吏佐）、瀬戸リカ（CV.平嶋夏海）、青柳 椿（CV.加藤里保菜）、桜田美夢（CV.反田葉月） | ED1 | 2023-winter |
| `d4dj-all-mix-in-1` | OVERWHELM!／Peaky P-key | IN1 | 2023-winter |
| `d4dj-all-mix-in-2` | 春とショコラ／Lyrical Lily | IN2 | 2023-winter |
| `d4dj-all-mix-in-3` | ARCANA／燐舞曲 | IN3 | 2023-winter |
| `d4dj-all-mix-in-4` | D.M.F／Merm4id | IN4 | 2023-winter |
| `d4dj-all-mix-in-5` | Look at me♡／Happy Around! | IN5 | 2023-winter |
| `d4dj-all-mix-in-6` | 4 many colors／Photon Maiden | IN6 | 2023-winter |

- 公開anime ID：`curated-155089`、`curated-155907`、`curated-130588`、`curated-135102`、`curated-140596`、`curated-142853`、`curated-144092`、`curated-144553`、`curated-145665`、`curated-147216`。更正17個原名、16個演唱名義；同頁補41項詞／曲／編及33項演唱（按用途計）。新增6筆用途／6個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,716用途（4,516 OP／ED、190 IN、10 TS）均有dataStatus；1,693筆基本逐欄證據、3,023筆來源待細分。2,459個唯一用途逐批處理，其中2,259 OP／ED、190 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有6筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- Ars原TV1月6日25:25即1月7日01:25；piano ED2僅身分／版本關係已證、本期ED用途仍held空季度，與原ED1共歌而不建立錄音。Buddy原TV1月6日24:00即1月7日00:00；4月1日末話兩曲延用缺第一方，整部含spring而兩曲只winter並partial。
- 魔王學院原期精確TV首日／時分兩輪仍未讀到，保原候選startDate及metadata核對日期，不移植現第二cour或WEB時間，不產精確TV第一方證據。官方逐曲已明前半歌曲原延播夏季用途；Ballad版與原曲共歌、保原用途與編曲資料，不能由一般商品推出用途。神拾2最早TV1月8日24:00即1月9日00:00；ABEMA1月8日21:30為WEB。
- 長瀞2最早TV1月7日25:00即1月8日01:00；ABEMA一週先行與dアニメ一日先行均是WEB。東京復仇者聖夜篇最早MBS1月7日26:08即1月8日02:08；兩曲4月2日末話用曲缺第一方，winter已證、spring留partial，不套後續篇或再播。齋藤原TV1月8日AT-X22:30，地上波先行WEB24:00仍較後。
- 最強陰陽師最早TV1月7日AT-X23:30，整部跨4月1日不套歌曲；五筆リンク已有歌曲身分與逐曲演唱、但各版本期ED用途未證，保原ID／type／序號held空季度，不從ED專輯、cast或角色名單推出用途，不建未證共歌關係。
- NieR原TV1月7日24:00即1月8日00:00，第9–12話延至7月23日；兩首正常OPED只winter並留summer逐曲延用partial，特殊ED2本期版本／ED用途未證故held，不由遊戲原曲或OST推出動畫版本。
- D4DJ All Mix最早原TV1月13日23:00，1月8日23:00 DMM是先行WEB；六個新IN由官方逐話劇中披露與專項交叉逐話表支持，均winter，各自新歌曲且只帶本IN來源，不繼承舊OPED的AnimeThemes／影片／唱片／外連。
- 28個既有用途ID／序號及有效舊來源保留，只刷新實際重讀URL；新增6用途／6歌曲，2個已明版名關係共既有歌，無新錄音。其他2042部JSON應保持一致。全目錄107筆空季度、83筆非空季度條件；本批7筆held是不足第一方用途，不混作98批已證用途但待核季度的語義。所有媒體／發行／平台詳細欄位仍依續查條件補，未宣稱整體完成。
- 後續標準TV來源範圍已登記：第111批9部30筆既有用途：`curated-103118`、`curated-112640`、`curated-145468`、`curated-146625`、`curated-146668`、`curated-129192`、`curated-145545`、`curated-133844`、`curated-139212`；第112批10部23筆既有用途：`curated-146210`、`curated-114745`、`curated-117196`、`curated-124641`、`curated-135806`、`curated-136934`、`curated-149874`、`curated-138882`、`curated-140187`、`curated-128223`。僅登記與來源查核，不預計公開資料完成；夏季聯集仍開放，短篇／WEB／特殊格式先核界線並延後。

### 檢查與展示

- verify:batch及verify:full通過：21單元、型別0錯誤／警告、2,098 HTML／4,277公開產物、嚴格audit零漏洞、公開邊界、統計、Cloudflare dry-run無bindings及8條E2E；未放寬有效gate。
- ApiProvider10部34筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁34組狀態、11季度、4用途過濾、16搜尋、10筆TV／待核狀態展示、7待核及6部分季度；1280×900歌單通過。實際手機／桌面截圖已檢視，無橫向溢出、app errors或未同意iframe。
- 本批修改已選冬季seed、已證跨春／夏的動畫registry關聯、欄位盤點及同一checkpoint；registry排除target seed原生與尾端numeric ID後只補缺少關聯，無缺少ID不產空spread；無parser／UI／依賴或新增季度改動。兩份修改文件的本機連結、最後公開邊界與diff通過；本機公開程式／資料備份已建立並逐檔驗證。GitHub／Cloudflare正式證據另記，本機成功不表示已部署。

預覽入口：`/anime/ars-no-kyojuu/`、`/anime/buddy-daddies/`；`/seasons/2023-winter/`、`/seasons/2023-spring/`、`/seasons/2023-summer/`。 接第102批2023冬10部25筆既有用途：`curated-151679`、`curated-152765`、`curated-126529`、`curated-135778`、`curated-136435`、`curated-142914`、`curated-136430`、`curated-141785`、`curated-142193`、`curated-142849`；已登記的並行來源查核不預計為公開資料完成。

### 已登記2022夏後續範圍（2026-10-22）

- 第113批2022夏8部30筆既有用途：`curated-141391`、`curated-146650`、`curated-139093`、`curated-144323`、`curated-144509`、`curated-145260`、`curated-136707`、`curated-145001`。Duel Masters WIN零用途標準TV候選亦納入，不因零用途排除；特殊歌曲逐曲雙來源，未驗證不計完成。
- 第114批2022夏7部23筆既有用途：`curated-146637`、`curated-140753`、`curated-130592`、`curated-140642`、`curated-129196`、`curated-149326`、`curated-153412`。Duel Masters WIN零用途標準TV候選亦納入，不因零用途排除；特殊歌曲逐曲雙來源，未驗證不計完成。

## 2020-2026-tv-basics-102（隨第104批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原25用途加0筆已證新用途，共25筆：23筆基本逐欄證據、2筆特殊用途待核、5筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `nokemono-tachi-no-yoru-op-1` | 明日のカタチ／竹達彩奈 | OP1 | 2023-winter |
| `nokemono-tachi-no-yoru-ed-1` | Rewrite／Hakubi | ED1 | 2023-winter |
| `rougo-ni-sonaete-isekai-de-8-manmai-no-kinka-wo-tamemasu-op-1` | 光ったコインが示す方／前田佳織里 | OP1 | 2023-winter |
| `rougo-ni-sonaete-isekai-de-8-manmai-no-kinka-wo-tamemasu-ed-1` | やっぱりエコノミー／YABI×YABI | ED1 | 2023-winter |
| `kyokou-suiri-season-2-op-1` | ヨトギバナシ／カノエラナ | OP1 | 2023-winter |
| `kyokou-suiri-season-2-ed-1` | Invincible Love／宮野真守 | ED1 | 2023-winter |
| `high-card-op-1` | Trickster／FIVE NEW OLD | OP1 | 2023-winter |
| `high-card-ed-1` | スクワッド！／めいちゃん | ED1 | 2023-winter |
| `mou-ippon-op-1` | Stand By Me／Subway Daydream | OP1 | 2023-winter |
| `mou-ippon-ed-1` | Ipponmichi／Ayasa Itou, Yukari Anzai & Chiyuki Miura | ED1 | 第一方身分／用途待核，原入口保留 |
| `mou-ippon-ed-2` | Ipponmichi／Ayasa Itou, Yukari Anzai, Chiyuki Miura & Nene Hieda | ED2 | 第一方身分／用途待核，原入口保留 |
| `mou-ippon-ed-3` | いっぽんみち／青葉西高校柔道部（伊藤彩沙、安齋由香里、三浦千幸、稗田寧々、永瀬アンナ） | ED3 | 2023-winter |
| `kyuuketsuki-sugu-shinu-2-op-1` | NEW DRAMA PARADISE／福山 潤 | OP1 | 2023-winter |
| `kyuuketsuki-sugu-shinu-2-ed-1` | わかってたよ／ロナルド（CV：古川 慎） | ED1 | 2023-winter |
| `kyuuketsuki-sugu-shinu-2-ed-2` | Cozy Crazy PARTY!／TRD | ED2 | 2023-winter |
| `vinland-saga-season-2-op-1` | River／Anonymouz | OP1 | 2023-winter |
| `vinland-saga-season-2-op-2` | Paradox／Survive Said The Prophet | OP2 | 2023-spring |
| `vinland-saga-season-2-ed-1` | Without Love／LMYK | ED1 | 2023-winter |
| `vinland-saga-season-2-ed-2` | Ember／haju:harmonics | ED2 | 2023-spring |
| `mononogatari-op-1` | 恋衣／ARCANA PROJECT | OP1 | 2023-winter |
| `mononogatari-ed-1` | rebind／TRUE | ED1 | 2023-winter |
| `eiyuu-ou-bu-wo-kiwameru-tame-tenseisu-soshite-sekai-saikyou-no-minarai-kishi-op-1` | DAY1／AUO feat. MORISAKI WIN | OP1 | 2023-winter |
| `eiyuu-ou-bu-wo-kiwameru-tame-tenseisu-soshite-sekai-saikyou-no-minarai-kishi-ed-1` | セルフハグ・ビッグラヴ／ゆいにしお | ED1 | 2023-winter |
| `ayakashi-triangle-op-1` | 熱風は流転する／フィロソフィーのダンス | OP1 | 2023-winter |
| `ayakashi-triangle-ed-1` | 厭わない feat. 富田美憂,市ノ瀬加那／MIMiNARI | ED1 | 2023-winter |

- 公開anime ID：`curated-151679`、`curated-152765`、`curated-126529`、`curated-135778`、`curated-136435`、`curated-142914`、`curated-136430`、`curated-141785`、`curated-142193`、`curated-142849`。更正11個原名、12個演唱名義；同頁補38項詞／曲／編及16項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,716用途（4,516 OP／ED、190 IN、10 TS）均有dataStatus；1,716筆基本逐欄證據、3,000筆來源待細分。2,484個唯一用途逐批處理，其中2,284 OP／ED、190 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有4筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 本批原TV按原台／原期第一方拆開：Nokemono1月8日22:00、八萬金貨1月7日26:00即1月8日02:00、虛構推理Season2 1月8日25:05即1月9日01:05，均不以WEB提前時刻或後續重播代TV。Nokemono4月末話兩曲仍留逐曲spring條件。
- HIGH CARD原Season1 AT-X1月9日20:00與原先行上映、10月再播分開；吸血鬼すぐ死ぬ2原TV1月9日23:00，ABEMA22:30是先行WEB。わかってたよ第一方明第1話ED，保原ED用途，不沿用交叉表IN分類。
- 冰海戰記Season2原TV1月9日24:30即1月10日00:30；四首按前後cour分冬／春，不把新cour概括套全曲。もういっぽん！TV1月8日25:35即1月9日01:35，頁主圖星期筆誤依TV正文及實曆換日。前三／四人候選版的題名名義／逐曲ED用途未證，保原ID與各自歌曲ID，不從五人版或同CD推同曲／歌唱；五人ED3原第8話已證、四月延用另留條件。
- 物之古物奇譚原第一章TV1月9日24:00即1月10日00:00，不套7月第二章；英雄王原台番組表1月9日25:45即1月10日01:45，先行上映不作TV。AUO feat. MORISAKI WIN演唱名義保留，實唱只列MORISAKI WIN，不把製作名義當歌唱。
- あやかしトライアングル原TV1月9日25:00即1月10日01:00，7月重啟與原首播分開；兩曲已證冬，夏季逐曲延用仍partial。MIMiNARI名義、曲名feat.兩人與實唱分開，未推製作團體全員歌唱。
- 25個既有用途ID／序號及有效舊來源保留；0新用途／歌曲／媒體，其他2042部JSON需逐檔相同。全目錄109筆空季度、88筆非空季度條件，其中64筆具體跨季缺口；詳細欄位留具體續查，不宣稱全部歌曲完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部25筆與未選資料保留性通過。Chromium393×852全部25筆狀態、12季度／3用途篩選、10搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查另待安全稽核服務可用，不記為正式驗收。
- 第101–104批預定合併正式驗收，完整audit／CI／部署未通過前不計正式；未驗證、未完成及尚未正式資料保留。
- ApiProvider10部25筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁25組狀態、12季度、3用途過濾、10搜尋、10筆TV／待核狀態展示、2待核及5部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批僅2023冬seed、已證動畫跨季registry、欄位盤點與同一checkpoint，無parser／UI／依賴或新季度改動。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/nokemono-tachi-no-yoru/、http://127.0.0.1:4345/anime/rougo-ni-sonaete-isekai-de-8-manmai-no-kinka-wo-tamemasu/、http://127.0.0.1:4345/anime/kyokou-suiri-season-2/。 接第103批2023冬10部29筆既有用途：`curated-148969`、`curated-156067`、`curated-116867`、`curated-144144`、`curated-158870`、`curated-125869`、`curated-139213`、`curated-146954`、`curated-155068`、`curated-157883`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-103（隨第104批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原29用途加2筆已證新用途，共31筆：22筆基本逐欄證據、9筆特殊用途待核、9筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `kubo-san-wa-mob-wo-yurusanai-op-1` | ドラマチックじゃなくても／花澤香菜 | OP1 | 2023-winter |
| `kubo-san-wa-mob-wo-yurusanai-ed-1` | かすかでたしか／DIALOGUE+ | ED1 | 2023-winter |
| `tondemo-skill-de-isekai-hourou-meshi-op-1` | 贅沢な匙／Van de Shop | OP1 | 2023-winter |
| `tondemo-skill-de-isekai-hourou-meshi-ed-1` | Happy-go-Journey／内田雄馬 | ED1 | 2023-winter |
| `itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-2-op-1` | 究極アンバランス！／純情のアフィリア | OP1 | 第一方身分／用途待核，原入口保留 |
| `itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-2-op-2` | この盾に、隠れます。／純情のアフィリア | OP2 | 2023-winter |
| `itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-2-ed-1` | Step for Joy／FRAM | ED1 | 2023-winter |
| `itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-2-in-1` | As You Wish／FRAM | IN1 | 2023-winter |
| `itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-2-in-2` | Scutum／FRAM | IN2 | 2023-winter |
| `ooyukiumi-no-kaina-op-1` | テレパス／ヨルシカ | OP1 | 2023-winter |
| `ooyukiumi-no-kaina-ed-1` | ジュブナイル／GReeeeN | ED1 | 2023-winter |
| `pocket-monsters-mezase-poke-mon-master-op-1` | めざせポケモンマスター -with my friends-／サトシ（CV：松本梨香） | OP1 | 2023-winter |
| `pocket-monsters-mezase-poke-mon-master-ed-1` | ひゃくごじゅういち／オーキド博士とポケモンキッズ | ED1 | 第一方身分／用途待核，原入口保留 |
| `pocket-monsters-mezase-poke-mon-master-ed-2` | タケシのパラダイス／タケシ（うえだゆうじ） | ED2 | 第一方身分／用途待核，原入口保留 |
| `pocket-monsters-mezase-poke-mon-master-ed-3` | ラプラスにのって／カスミ（飯塚雅弓）＆ラプラス（愛河里花子） | ED3 | 第一方身分／用途待核，原入口保留 |
| `pocket-monsters-mezase-poke-mon-master-ed-4` | 前向きロケット団！／ロケット団（ムサシ・コジロウ・ニャース） | ED4 | 第一方身分／用途待核，原入口保留 |
| `pocket-monsters-mezase-poke-mon-master-ed-5` | タイプ：ワイルド／松本梨香 | ED5 | 第一方身分／用途待核，原入口保留 |
| `hikari-no-ou-op-1` | 嘘つき／家入レオ | OP1 | 2023-winter |
| `hikari-no-ou-ed-1` | まだ遠くにいる／坂本真綾 | ED1 | 2023-winter |
| `cardfight-vanguard-will-dress-season-2-op-1` | Accelerate／すとぷり | OP1 | 2023-winter, 2023-spring |
| `cardfight-vanguard-will-dress-season-2-ed-1` | Re-raise／Argonavis feat. 旭 那由多 from GYROAXIA | ED1 | 2023-winter, 2023-spring |
| `shin-shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-op-1` | Evolution／ナノ | OP1 | 2023-winter |
| `shin-shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-ed-1` | Adore me／山崎エリイ | ED1 | 2023-winter |
| `majutsushi-orphen-hagure-tabi-urbanrama-hen-op-1` | HYSTERIC CARAVAN／森久保祥太郎 | OP1 | 2023-winter |
| `majutsushi-orphen-hagure-tabi-urbanrama-hen-ed-1` | ファンタジック・パートナー／渕上舞 | ED1 | 2023-winter |
| `hirogaru-sky-precure-op-1` | ひろがるスカイ！プリキュア ～Hero Girls～／石井あみ | OP1 | 2023-winter, 2023-spring, 2023-summer, 2023-fall, 2024-winter |
| `hirogaru-sky-precure-ed-1` | ヒロガリズム／石井あみ・吉武千颯 | ED1 | 2023-winter, 2023-spring |
| `hirogaru-sky-precure-ed-2` | Dear Shine Sky／吉武千颯 | ED2 | 2023-summer, 2023-fall, 2024-winter |
| `hirogaru-sky-precure-ed-3` | うれしくて／いきものがかり | ED3 | 第一方身分／用途待核，原入口保留 |
| `hirogaru-sky-precure-ed-4` | All for one Forever／吉武千颯・礒部花凜・北川理恵・駒形友梨・Machico・宮本佳那子 | ED4 | 第一方身分／用途待核，原入口保留 |
| `hirogaru-sky-precure-ed-5` | ヒロガリズム ～Precure Quintet Ver.～／キュアスカイ（CV：関根明良）・キュアプリズム（CV：加隈亜衣）・キュアウィング（CV：村瀬歩）・キュアバタフライ（CV：七瀬彩夏）・キュアマジェスティ（CV：古賀葵） | ED5 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-148969`、`curated-156067`、`curated-116867`、`curated-144144`、`curated-158870`、`curated-125869`、`curated-139213`、`curated-146954`、`curated-155068`、`curated-157883`。更正11個原名、20個演唱名義；同頁補51項詞／曲／編及26項演唱（按用途計）。新增2筆用途／2個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,718用途（4,516 OP／ED、192 IN、10 TS）均有dataStatus；1,738筆基本逐欄證據、2,980筆來源待細分。2,515個唯一用途逐批處理，其中2,313 OP／ED、192 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 久保原TV1月10日21:30，不以4月重啟第1話作原首播；兩正常曲春季逐曲延用仍partial。とんでもスキル原第1季TV1月10日24:00即1月11日00:00，以原TV番組表核實，不套現S2首頁。大雪海原TV1月11日24:55即1月12日00:55，完成披露上映與後來電影分開。
- 防振第二期正常兩曲已證冬，四月延播逐曲留條件；原OP1第一期歌曲在第二期特殊OP用途仍未明，保原ID與季度空，未啟用未證共同歌曲關係。官方Music明示兩首IN As You Wish／Scutum並有交叉用途，新增兩用途各自歌曲，Scutum只核冬、春季用途待核；沒有從OST收錄推劇中使用。
- めざせポケモンマスター原TV1月13日18:55，全11話冬季；1月6日宣傳SP與後續新主角系列分開。OP逐曲身分／歌唱與LCA依Sony原文，五首候選ED僅專輯曲目身分可核，本系列逐話FP用途仍缺，保原入口及冬季空值，不由彙編CD推出本期ED。
- 火狩りの王原第1期TV1月14日22:30，WOWOW自身新聞稿與同時串流分開；OP詞作已有部分署名但名單仍未完整，以lyrics續查避免有值被誤當齊全。will+Dress Season2原TV1月14日08:00，兩正常曲冬春逐曲使用有來源，未沿用其他Season深夜時段。
- 真・進化の実原TV1月13日25:23即1月14日01:23，Orphenアーバンラマ原TV1月18日20:30；各兩曲只已證冬，四月末話仍留逐曲partial。聖域篇與原Urbanrama分開。
- ひろがるスカイ！プリキュア原TV2月5日08:30，正常OP及常規兩ED按已證季度分開；3筆特殊ED版只有商品／電影相關身分或名單，未得本TV逐曲用途，保原ID與季度空。Quintet僅照官方明示版名及五演唱角色，不由全cast推歌唱。
- 原29用途ID／序號及有效未重讀來源日期保持；新增2用途／2歌曲，沒有新錄音、影片或發行品。其他2042部JSON逐檔相同，來源及逐欄證據分開；全目錄118筆空季度、97筆非空季度條件，其中73筆具體跨季缺口保存。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部31筆與未選資料保留性通過。Chromium393×852全部31筆狀態、16季度／3用途篩選、12搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查另待安全稽核服務可用，不記為正式驗收。
- 第101–104批預定合併正式驗收，完整audit／CI／部署未通過前不計正式；未驗證、未完成及尚未正式資料保留。
- ApiProvider10部31筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁31組狀態、16季度、3用途過濾、12搜尋、10筆TV／待核狀態展示、9待核及9部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批只更新2023冬seed、已證跨春／夏／秋／冬動畫registry、欄位盤點與checkpoint，無parser／UI／依賴或新季度改動。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/kubo-san-wa-mob-wo-yurusanai/、http://127.0.0.1:4345/anime/tondemo-skill-de-isekai-hourou-meshi/、http://127.0.0.1:4345/anime/itai-no-wa-iya-nano-de-bougyoryoku-ni-kyokufuri-shitai-to-omoimasu-2/。 接第104批2022秋10部29筆既有用途：`curated-139820`、`curated-139587`、`curated-137341`、`curated-124395`、`curated-139630`、`curated-142701`、`curated-142838`、`curated-145815`、`curated-150695`、`curated-128890`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-104（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原29用途加3筆已證新用途，共32筆：31筆基本逐欄證據、1筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `akuyaku-reijou-nanode-last-boss-wo-kattemimashita-op-1` | 共感されなくてもいいじゃない／高橋李依 | OP1 | 2022-fall |
| `akuyaku-reijou-nanode-last-boss-wo-kattemimashita-ed-1` | ノミック／ACCAMER | ED1 | 2022-fall |
| `tensei-shitara-ken-deshita-op-1` | 転生したら剣でした／岸田教団＆THE明星ロケッツ | OP1 | 2022-fall |
| `tensei-shitara-ken-deshita-ed-1` | more＜STRONGLY／黒崎真音 | ED1 | 2022-fall |
| `uchi-no-shishou-wa-shippo-ga-nai-op-1` | 幻愛遊戯／GARNiDELiA | OP1 | 2022-fall |
| `uchi-no-shishou-wa-shippo-ga-nai-ed-1` | ヴァージニア／Hinano | ED1 | 2022-fall |
| `uzaki-chan-wa-asobitai-double-op-1` | いちごいちえ Celebration／鹿乃と宇崎ちゃん | OP1 | 2022-fall |
| `uzaki-chan-wa-asobitai-double-ed-1` | はっぴーらいふ／MKLNtic | ED1 | 2022-fall |
| `boku-no-hero-academia-6th-season-op-1` | ひたむき／SUPER BEAVER | OP1 | 2022-fall |
| `boku-no-hero-academia-6th-season-op-2` | ぼくらの／Eve | OP2 | 2023-winter |
| `boku-no-hero-academia-6th-season-ed-1` | SKETCH／秋山黄色 | ED1 | 2022-fall |
| `boku-no-hero-academia-6th-season-ed-2` | キタカゼ／SIX LOUNGE | ED2 | 2023-winter |
| `koukyuu-no-karasu-op-1` | MYSTERIOUS／女王蜂 | OP1 | 2022-fall |
| `koukyuu-no-karasu-ed-1` | 夏の雪／krage | ED1 | 2022-fall |
| `spy-x-family-part-2-op-1` | SOUVENIR／BUMP OF CHICKEN | OP1 | 2022-fall |
| `spy-x-family-part-2-ed-1` | 色彩／yama | ED1 | 2022-fall |
| `spy-x-family-part-2-in-1` | Breeze／(K)NoW_NAME | IN1 | 2022-fall |
| `noumin-kanren-no-skill-bakka-agetetara-nazeka-tsuyoku-natta-op-1` | Growing up／7ORDER | OP1 | 2022-fall |
| `noumin-kanren-no-skill-bakka-agetetara-nazeka-tsuyoku-natta-ed-1` | ローリンソウル・ハッピーデイズ／ポップしなないで | ED1 | 2022-fall |
| `yuusha-party-wo-tsuihou-sareta-beast-tamer-saikyoushu-no-nekomimi-shoujo-to-deau-op-1` | Change The World／MADKID | OP1 | 2022-fall |
| `yuusha-party-wo-tsuihou-sareta-beast-tamer-saikyoushu-no-nekomimi-shoujo-to-deau-ed-1` | LOVE＆MOON／高野麻里佳 | ED1 | 2022-fall |
| `idolish7-third-beat-part-2-op-1` | WONDER LiGHT／IDOLiSH7 | OP1 | 2022-fall, 2023-winter |
| `idolish7-third-beat-part-2-op-2` | Happy Days Creation!／Re:vale＆IDOLiSH7 | OP2 | 2022-fall |
| `idolish7-third-beat-part-2-ed-1` | IMPERIAL CHAIN／ŹOOĻ | ED1 | 2022-fall, 2023-winter |
| `idolish7-third-beat-part-2-ed-2` | 願いはShine On The Sea／十 龍之介（CV：佐藤拓也） | ED2 | 2022-fall |
| `idolish7-third-beat-part-2-ed-3` | 願いはShine On The Sea／TRIGGER | ED3 | 2022-fall |
| `idolish7-third-beat-part-2-ed-4` | Dear Butterfly／MEZZO” | ED4 | 2022-fall |
| `idolish7-third-beat-part-2-ed-5` | カラフル／MEZZO” | ED5 | 2022-fall |
| `idolish7-third-beat-part-2-ed-6` | ミライノーツを奏でて／Re:vale | ED6 | 第一方身分／用途待核，原入口保留 |
| `idolish7-third-beat-part-2-ed-7` | SECRET NIGHT／IDOLiSH7 | ED7 | 2023-winter |
| `idolish7-third-beat-part-2-in-1` | 願いはShine On The Sea／十 龍之介（CV：佐藤拓也） | IN1 | 2022-fall |
| `idolish7-third-beat-part-2-in-2` | SECRET NIGHT／IDOLiSH7 | IN2 | 2023-winter |

- 公開anime ID：`curated-139820`、`curated-139587`、`curated-137341`、`curated-124395`、`curated-139630`、`curated-142701`、`curated-142838`、`curated-145815`、`curated-150695`、`curated-128890`。更正18個原名、13個演唱名義；同頁補56項詞／曲／編及17項演唱（按用途計）。新增3筆用途／1個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,721用途（4,516 OP／ED、195 IN、10 TS）均有dataStatus；1,769筆基本逐欄證據、2,952筆來源待細分。2,547個唯一用途逐批處理，其中2,342 OP／ED、195 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 悪役令嬢原TV10月1日22:30，9月24日ABEMA為一週先行WEB。轉生劍原第1季TV10月5日23:00，9月28日ABEMA與9月25日先行上映非TV；根站已轉S2，官方入口更正到原S1子站，新首頁另存實讀日，舊根頁未重讀日期保持。
- しっぽな原TV9月30日22:30屬夏，整部續播秋已證，兩首歌曲夏季用途兩輪仍缺逐曲FP，維持已證秋及summer條件。宇崎第2季原TV10月1日21:00 AT-X，23:00只地上波先行WEB，宣傳特番不作本編首播。
- 英雄學院第6期原TV10月1日17:30；官方第6期曲頁明前後cour，前半OP／ED秋、後半OP／ED冬。ぼくらの／キタカゼ1月7日正式使用，12月24日次回預告不算秋季歌曲用途。後宮の烏原TV10月1日23:30，Prime同日24:00是次日WEB。
- SPY×FAMILY是Season1第2cour，原TV10月1日23:00；SOUVENIR／色彩依原曲頁。新增第19話明示插曲Breeze：第一方正文、中文逐曲表與交叉報道同證，(K)NoW_NAME名義與NIKIIE歌唱／作詞、Makoto Miyazaki作曲／編曲分職位，不繼承舊AT或影片。
- 農民相關原TV10月1日22:00由7ORDER權利方原期頁；兩曲原名／名義／用途已核，OP同頁LCA保存；ED作者待逐曲第一方。Beast Tamer原TV10月2日22:00，10月1日ABEMA為先行WEB。
- IDOLiSH7 Third BEAT!第2cour沿用既有TV10月2日及原核對日，根頁未重讀日期9月1日保持、分鐘待核；動畫跨冬與逐曲冬季各自有來源。Happy Days原OP僅秋，SECRET NIGHT原ED／新增IN屬冬。官方逐話插曲表明第15話願いはShine On The Sea及第27話SECRET NIGHT，新增兩IN用途而共原ED2／ED7歌曲ID，各用自己的用途及演唱資料、不產新錄音。ミライノーツ原ED候選用途仍held，未由OST推出ED。
- 原29用途ID／序號保持，新增3用途但僅1新歌曲（Breeze），另外兩IN與既有歌共享明示作品身分；沒有新影片、錄音、發行品或平台。其他2042部JSON相同，全目錄119筆空季度、99筆非空季度條件，其中75筆具體跨季缺口；詳細及整體基本目標未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部32筆與未選資料保留性通過。Chromium393×852全部32筆狀態、13季度／3用途篩選、13搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查另待安全稽核服務可用，不記為正式驗收。
- 第101–104批預定合併正式驗收，完整audit／CI／部署未通過前不計正式；未驗證、未完成及尚未正式資料保留。
- ApiProvider10部32筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁32組狀態、13季度、3用途過濾、13搜尋、10筆TV／待核狀態展示、1待核及2部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批只更新2022秋seed、已證動畫跨年／跨季registry、欄位盤點與同一checkpoint，無parser／UI／依賴或新增季度。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/akuyaku-reijou-nanode-last-boss-wo-kattemimashita/、http://127.0.0.1:4345/anime/tensei-shitara-ken-deshita/、http://127.0.0.1:4345/anime/uchi-no-shishou-wa-shippo-ga-nai/。 接第105批2022秋6部27筆既有用途：`curated-139274`、`curated-143086`、`curated-146475`、`curated-155011`、`curated-139369`、`curated-142343`；已登記的並行來源查核不預計為公開資料完成。

### 第101–104批合併正式驗收

- 四批共40部、122筆用途，原資料與文件已逐批分類提交；每批本機API與手機／桌面已驗證，本機完整檢查曾因npm稽核503失敗，未記通過；當前來源已通過正常GitHub CI中的verify:full完整發布檢查及[PR #194](https://github.com/kyeunga25/anisonary/pull/194)正常CI。正式來源`518b84606b7d9cc869a5a5433e91a43e3c35ae97`／`batch104-basics`。
- 四批全部40部正式API與既有個別已驗證JSON深層相同，152條HTML／JSON／季度／搜尋資產逐檔符合固定部署產物，另2條真404；第104批10部32筆另有正式手機／桌面與搜尋互動驗證。沒有將整批全部頁面宣稱為本次production瀏覽器重測。

### 正式發布與驗收（2026-10-22）

- [PR #194](https://github.com/kyeunga25/anisonary/pull/194)同SHA的quality／Workers通過後正常rebase合併。main來源`518b84606b7d9cc869a5a5433e91a43e3c35ae97`與已審閱樹一致，main兩項正常檢查亦通過；分類提交及annotated tag `batch104-basics`已推送。
- 實際Wrangler部署固定已驗證產物，Cloudflare版本metadata的tag／完整來源／PR均相符。正式站92條HTML／JSON／目錄／SW／搜尋資產與固定產物逐檔SHA-256相同，另2條真404；安全headers、API noindex／revalidation及無開放CORS通過，兩搜尋資產實際壓縮、immutable一年cache／noindex通過。
- 正式站ApiProvider10部32筆與本機一致；Chromium393×852驗10頁32狀態、13季度、3用途、13搜尋、10筆TV／待核狀態展示、1待核及2部分季度，1280×900歌單通過。實際正式站截圖已檢視，無溢出、app errors或未同意iframe。
- 本批正式驗收完成；既有逐曲缺口保存，不代表作品聯集、基本全部歌曲、詳細或長期範圍完成。

## 2020-2026-tv-basics-105（隨第108批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。6部、原27用途加0筆已證新用途，共27筆：13筆基本逐欄證據、14筆特殊用途待核、4筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `mobile-suit-gundam-the-witch-from-mercury-op-1` | 祝福／YOASOBI | OP1 | 2022-fall |
| `mobile-suit-gundam-the-witch-from-mercury-ed-1` | 君よ 気高くあれ／シユイ | ED1 | 2022-fall |
| `poputepipikku-2nd-season-op-1` | Endless Love／蒼井翔太 | OP1 | 2022-fall |
| `poputepipikku-2nd-season-op-2` | PSYCHO:LOGY／蒼井翔太 | OP2 | 2022-fall |
| `poputepipikku-2nd-season-ed-1` | 仲良ピース（女性Ver.）／Manaka Iwami、Ikumi Hasegawa | ED1 | 2022-fall |
| `poputepipikku-2nd-season-ed-2` | 仲良ピース（男性Ver.）／Jun Oosuka、Hiroki Takahashi | ED2 | 2022-fall |
| `poputepipikku-2nd-season-ed-3` | 仲良ピース（超予算勇者★グレートバリバリピピック MIX 女性Ver.）／Manaka Iwami、Ikumi Hasegawa | ED3 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-4` | 仲良ピース（超予算勇者★グレートバリバリピピック MIX 男性Ver.）／Hiroki Takahashi、Jun Oosuka | ED4 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-5` | 仲良ピース（B-side MIX 女性Ver.）／Manaka Iwami、Ikumi Hasegawa | ED5 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-6` | 仲良ピース（B-side MIX 男性Ver.）／Hiroki Takahashi、Jun Oosuka | ED6 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-7` | 仲良ピース（葛飾出身 MIX 女性Ver.）／Manaka Iwami、Ikumi Hasegawa | ED7 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-8` | 仲良ピース（葛飾出身 MIX 男性Ver.）／Hiroki Takahashi、Jun Oosuka | ED8 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-9` | 仲良ピース（Sweet Pop MIX 女性Ver.）／Manaka Iwami、Ikumi Hasegawa | ED9 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-10` | 仲良ピース（Sweet Pop MIX 男性Ver.）／Hiroki Takahashi、Jun Oosuka | ED10 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-11` | 仲良ピース（Dance Rock MIX 女性Ver.）／Manaka Iwami、Ikumi Hasegawa | ED11 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-12` | 仲良ピース（Dance Rock MIX 男性Ver.）／Hiroki Takahashi、Jun Oosuka | ED12 | 第一方身分／用途待核，原入口保留 |
| `poputepipikku-2nd-season-ed-13` | 蒼井翔太体操／Shouta Aoi | ED13 | 第一方身分／用途待核，原入口保留 |
| `c-danchi-op-1` | Make Believe／Ivan Kwong | OP1 | 第一方身分／用途待核，原入口保留 |
| `c-danchi-ed-1` | Secret of the day／De Tesla | ED1 | 第一方身分／用途待核，原入口保留 |
| `c-danchi-ed-2` | Kurosaki hahuriuta／Ayahi Takagaki | ED2 | 第一方身分／用途待核，原入口保留 |
| `berserk-ougon-jidai-hen-memorial-edition-op-1` | Aria／平沢進 | OP1 | 2022-fall |
| `berserk-ougon-jidai-hen-memorial-edition-ed-1` | Wish／中島美嘉 | ED1 | 2022-fall |
| `berserk-ougon-jidai-hen-memorial-edition-ed-2` | Mirage with Shiro SAGISU／中島美嘉 | ED2 | 2022-fall |
| `shinmai-renkinjutsushi-no-tenpo-keiei-op-1` | はじまるウェルカム／大西亜玖璃 | OP1 | 2022-fall |
| `shinmai-renkinjutsushi-no-tenpo-keiei-ed-1` | Fine Days／諏訪ななか | ED1 | 2022-fall |
| `golden-kamuy-4th-season-op-1` | NEVER SAY GOODBYE feat. Mummy-D／ALI | OP1 | 2022-fall |
| `golden-kamuy-4th-season-ed-1` | すべてがそこにありますように。／THE SPELLBOUND | ED1 | 2022-fall |

- 公開anime ID：`curated-139274`、`curated-143086`、`curated-146475`、`curated-155011`、`curated-139369`、`curated-142343`。更正15個原名、9個演唱名義；同頁補23項詞／曲／編及13項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,721用途（4,516 OP／ED、195 IN、10 TS）均有dataStatus；1,782筆基本逐欄證據、2,939筆來源待細分。2,574個唯一用途逐批處理，其中2,369 OP／ED、195 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有5筆真正重讀舊來源更新日期。其他2,046部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 水星の魔女原第1季TV10月2日17:00，原動畫跨2023冬，兩首只已證2022秋；第12話冬季逐曲第一方仍未明，保partial。祝福僅依本曲明示ikura歌唱，君よ気高くあれ同頁ryo詞／曲／編；保實際既有songId，有明示者保原值、未明者沿原用途ID歌曲fallback，沒有建立與第二期候選ED的推測關係。
- ポプテピピック第二系列原TV10月1日25:30即10月2日01:30，為標準TV時段雙半段形式。KING製播方原稿明PSYCHO:LOGY OP／歌唱／LCA；實際發行商JPU自刊明第1話Endless Love OP及男女兩ED原文演唱。英文原名照第一方保留，不由cast推未明日文演唱名義。其餘11個MIX／體操用途只有官方商品曲名或候選資料，未取得逐版TV用途／完整歌唱；title-only不當完整歌曲身分，季度空、原ID／名義與具體續查保留，沒有從專輯收錄推出TV用途。
- 《C團地》權利方原稿明美國Toonami四集half-hour miniseries，屬延後特殊範圍。本次已讀媒體界線保存，不再擴搜或阻擋標準TV向舊季度前進；Saturday10月1日Midnight ET/PT按實曆10月2日表述，不填JST分鐘或未證日本首TV。原稿只明OP／ED演唱名義而無曲名，未拼交叉表成第一方song／usage；三舊候選用途維持held，不從角色cast推特殊ED歌唱。
- ベルセルク黄金時代篇MEMORIAL EDITION原TV10月1日24:30即10月2日00:30。Aria由官方TV trailer直接明OP，商品僅身分；Wish依原期ED公告，Mirage依原第8話特殊ED公告及原一次播出日期，不由coupling曲表推用曲。新米錬金術師原TV10月3日21:00 AT-X，WEB22:00較後；兩正常曲由Music同頁核原名、名義與已列LCA。
- ゴールデンカムイ第四期原TV10月3日23:00；動畫因延播跨2023春，但4月3日重播原第37話不等於新話首播。原兩首OP／ED本期身分／用途已核，春季第43–49話逐曲第一方兩輪仍缺，保2022秋及具體partial，不由整部復播推出所有歌曲季度。
- 27個舊用途、ID／序號與有效未重讀來源日期保留；0新歌曲／音源／影片／發行品，其他2046部JSON保持一致。全目錄133筆空季度、103筆非空季度條件，其中79筆具體跨季缺口；詳細及整體基本範圍未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 6部27筆與未選資料保留性通過。Chromium393×852全部27筆狀態、6季度／3用途篩選、6搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查另待安全稽核服務可用，不記為正式驗收。
- 第105–108批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider6部27筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗6頁27組狀態、6季度、3用途過濾、6搜尋、6筆TV／待核狀態展示、14待核及4部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批僅2022秋seed、已證動畫跨季registry、欄位盤點與checkpoint；保留四集迷你番已查界線並列延後，無parser／UI／依賴或新季度改動。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/mobile-suit-gundam-the-witch-from-mercury/、http://127.0.0.1:4345/anime/poputepipikku-2nd-season/、http://127.0.0.1:4345/anime/c-danchi/。 接第106批2022秋3部25筆既有用途：`curated-125910`、`curated-145604`、`curated-130298`；已登記的並行來源查核不預計為公開資料完成。

### 已登記長篇TV歌曲季度補漏（2026-10-22）

- 第115批：`curated-21`、`curated-235`、`curated-112153`，3部15筆既有用途。7筆已核2026身分及既有資料保留，僅真正缺季按新證據補必要季度欄位；8筆舊寶可夢用途待核，優先盤點2020–2026真正缺季與正常OP／ED輪替；不因作品原首播早於2020排除。缺歌數尚未證明，新增只依實讀第一方／交叉來源；不將未覆蓋季度直接算成已證漏歌。
- 原後續2022夏格式／春季候選延後至第116–117批，待登記；既有成果保留。原TV日期與metadata未讀不重查或刷新，已核日期及ID穩定；舊資料owner僅在實證需要時最小接通現有季度欄位，不全檔搬移。

## 2020-2026-tv-basics-106（隨第108批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。3部、原25用途加0筆已證新用途，共25筆：18筆基本逐欄證據、7筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `vazzrock-the-animation-op-1` | Fly High／VAZZY | OP1 | 2022-fall |
| `vazzrock-the-animation-op-2` | Asterism⁂／ROCK DOWN | OP2 | 2022-fall |
| `vazzrock-the-animation-ed-1` | Follow Me／眞宮孝明（CV：新垣樽助） | ED1 | 2022-fall |
| `vazzrock-the-animation-ed-2` | Blinding lights／吉良凰香（CV：小林裕介） | ED2 | 2022-fall |
| `vazzrock-the-animation-ed-3` | エフバラード／小野田 翔（CV：菊池幸利） | ED3 | 2022-fall |
| `vazzrock-the-animation-ed-4` | Passion Groove!／久慈川悠人（CV：長谷川芳明） | ED4 | 2022-fall |
| `vazzrock-the-animation-ed-5` | シアワセノカタチ／築 二葉（CV：白井悠介） | ED5 | 2022-fall |
| `vazzrock-the-animation-ed-6` | Escape／築 一紗（CV：山中真尋） | ED6 | 2022-fall |
| `vazzrock-the-animation-ed-7` | Illusion×Kiss／天羽玲司（CV：佐藤拓也） | ED7 | 2022-fall |
| `vazzrock-the-animation-ed-8` | Stay／立花 歩（CV：坂 泰斗） | ED8 | 2022-fall |
| `vazzrock-the-animation-ed-9` | Smile again／大山直助（CV：笹 翼） | ED9 | 2022-fall |
| `vazzrock-the-animation-ed-10` | Lucida／白瀬優馬（CV：堀江 瞬） | ED10 | 2022-fall |
| `vazzrock-the-animation-ed-11` | ダイジョーブ／名積ルカ（CV：河本啓佑） | ED11 | 2022-fall |
| `vazzrock-the-animation-ed-12` | 花の誇り／大黒 岳（CV：増元拓也） | ED12 | 2022-fall |
| `vazzrock-the-animation-ed-13` | I can’t stop dancing!／VAZZY & ROCK DOWN | ED13 | 2022-fall |
| `shinobi-no-ittoki-op-1` | 光／ハンブレッダーズ | OP1 | 2022-fall |
| `shinobi-no-ittoki-ed-1` | おぼえたて／黒子首 | ED1 | 2022-fall |
| `kage-no-jitsuryokusha-ni-naritakute-op-1` | HIGHEST／OxT | OP1 | 2022-fall, 2023-winter |
| `kage-no-jitsuryokusha-ni-naritakute-ed-1` | Darling in the Night／Asami Seto | ED1 | 第一方身分／用途待核，原入口保留 |
| `kage-no-jitsuryokusha-ni-naritakute-ed-2` | Darling in the Night／Inori Minase | ED2 | 第一方身分／用途待核，原入口保留 |
| `kage-no-jitsuryokusha-ni-naritakute-ed-3` | Darling in the Night／Suzuko Mimori | ED3 | 第一方身分／用途待核，原入口保留 |
| `kage-no-jitsuryokusha-ni-naritakute-ed-4` | Darling in the Night／Fairouz Ai | ED4 | 第一方身分／用途待核，原入口保留 |
| `kage-no-jitsuryokusha-ni-naritakute-ed-5` | Darling in the Night／Hisako Kanemoto | ED5 | 第一方身分／用途待核，原入口保留 |
| `kage-no-jitsuryokusha-ni-naritakute-ed-6` | Darling in the Night／Ayaka Asai | ED6 | 第一方身分／用途待核，原入口保留 |
| `kage-no-jitsuryokusha-ni-naritakute-ed-7` | Darling in the Night／Reina Kondou | ED7 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-125910`、`curated-145604`、`curated-130298`。更正7個原名、15個演唱名義；同頁補63項詞／曲／編及27項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,721用途（4,516 OP／ED、195 IN、10 TS）均有dataStatus；1,800筆基本逐欄證據、2,921筆來源待細分。2,599個唯一用途逐批處理，其中2,394 OP／ED、195 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,049部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- VAZZROCK THE ANIMATION原TV最早TOKYO MX 2022年10月5日22:30；10月4日22:30為ABEMA先行WEB，與TV分開。15個既有用途全部保留，兩首OP公告直接明VAZZY／ROCK DOWN及本曲各6名歌唱CV、詞曲編；13首ED由官方逐話頁直接明曲名、角色歌唱與作者，不從雙人商品曲表順序或一般cast推歌唱。
- VAZZ的エフバラード、シアワセノカタチ、ダイジョーブ、花の誇り等回到官方原名；第13話官方直接明I can’t stop dancing!為ED，保原ED13。Mau2該話寫無ED，故排除該URL對本用途的正面usage及song欄位，不改官方已證用途；原有效AnimeThemes與已讀中文索引另行交叉。第13話只用官方團體名義，不將出演名冊推為12位逐人演唱。
- 陰の実力者になりたくて！原第1季最早AT-X 2022年10月5日22:30；23:00地上波先行WEB仍較AT-X晚，2023年4月再播與第二季分開。HIGHEST／OxT及詞曲編由原期曲頁直接明示，逐話交叉支持秋季與2023冬季用途。
- 七筆Darling in the Night原solo ED兩輪仍缺逐版歌唱身分與本期TV用途第一方；官方曲頁僅明七陰全體名義，不能由七名cast或全體商品推出七個solo版本。保原ID／type／序號及原artist字串，held季度[]、useOnlySources[]，標unverifiedSong／omitVocalFallback；未建立未證共享歌曲或錄音。待第一季官方逐話片尾、可讀NCED索引或公告明逐版名義／用途後，再按原逐話日期分季，不能套第二季七陰合唱ED。
- 忍の一時兩曲由原官網Music直接明光／ハンブレッダーズ為OP、おぼえたて／黒子首為ED。原首日10月4日沿既有資料保留；兩輪未取得可讀原期第一方精確TV分鐘，現onair只有2024平台上架，海外UTC+8串流亦不能代替日本原TV。metadataVerifiedAt與未重讀根來源仍9月1日，已採用Music新實讀URL才記10月22日；歌曲基本用途與TV分鐘缺口分開，未以本次曲頁新讀日刷新整部metadata基準。
- 原25用途ID／序號與既有明示songId保持，沒有新增IN、影片、錄音、發行品或平台。僅保存已審閱事實與適用來源，局部查核不批次刷新舊來源日期，未重讀AnimeThemes等仍保原日。本批未選動畫公開JSON應一致；全目錄140筆空季度、103筆非空季度條件，其中79筆具體跨季缺口，待集中proof實數替換。詳細階段與整體基本收集目標均未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 3部25筆與未選資料保留性通過。Chromium393×852全部25筆狀態、4季度／13用途篩選、25搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第105–108批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider3部25筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗3頁25組狀態、4季度、13用途過濾、25搜尋、3筆TV／待核狀態展示、7待核及0部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批2022秋seed、已證原期動畫跨2023冬的registry補缺、欄位盤點及同一checkpoint。registry先排target seed原生與尾端numeric IDs及既有literal，再補缺少關聯；沒有parser／UI／依賴／新季度改動。所有寫入及檢查由集中流程執行。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/vazzrock-the-animation/、http://127.0.0.1:4345/anime/shinobi-no-ittoki/、http://127.0.0.1:4345/anime/kage-no-jitsuryokusha-ni-naritakute/。 接第107批2022秋10部29筆既有用途：`curated-131182`、`curated-146233`、`curated-154545`、`curated-131516`、`curated-140439`、`curated-142985`、`curated-144533`、`curated-142541`、`curated-151379`、`curated-136150`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-107（隨第108批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原29用途加0筆已證新用途，共29筆：19筆基本逐欄證據、10筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `yama-no-susume-next-summit-op-1` | 想いのち晴れ／あおい（CV:井口裕香）、ひなた（CV:阿澄佳奈） | OP1 | 2022-fall |
| `yama-no-susume-next-summit-ed-1` | 扉を開けてベルを鳴らそう／あおい（CV:井口裕香）、ひなた（CV:阿澄佳奈） | ED1 | 2022-fall |
| `yama-no-susume-next-summit-ed-2` | 扉を開けてベルを鳴らそう／あおい（CV:井口裕香） | ED2 | 第一方身分／用途待核，原入口保留 |
| `yama-no-susume-next-summit-ed-3` | 扉を開けてベルを鳴らそう／ひなた（CV:阿澄佳奈） | ED3 | 第一方身分／用途待核，原入口保留 |
| `yama-no-susume-next-summit-ed-4` | Staccato Days／Kana Asumi、Yuka Iguchi | ED4 | 第一方身分／用途待核，原入口保留 |
| `futoku-no-guild-op-1` | Never the Fever!!／佐咲紗花 | OP1 | 2022-fall |
| `futoku-no-guild-ed-1` | シュガー･シュガー･スパイス／栗林みな実 | ED1 | 2022-fall |
| `futoku-no-guild-ed-2` | シュガー･シュガー･スパイス／Karin Isobe、You Taichi、Ayano Shibuya、Yuna Kamakura、Saho Shirasu | ED2 | 第一方身分／用途待核，原入口保留 |
| `human-bug-daigaku-op-1` | CATASTROPHE／ナノ | OP1 | 2022-fall |
| `human-bug-daigaku-ed-1` | BAD CITY（BUG HUMAN）／Lowland Jazz | ED1 | 2022-fall |
| `do-it-yourself-op-1` | どきどきアイデアをよろしく!／潟女DIY部!! | OP1 | 2022-fall |
| `do-it-yourself-ed-1` | 続く話／せるふとぷりん（CV:稲垣好、市ノ瀬加那） | ED1 | 2022-fall |
| `mob-psycho-100-iii-op-1` | １／MOB CHOIR | OP1 | 2022-fall |
| `mob-psycho-100-iii-ed-1` | コバルト／MOB CHOIR | ED1 | 2022-fall |
| `mob-psycho-100-iii-ed-2` | Exist／MOB CHOIR | ED2 | 第一方身分／用途待核，原入口保留 |
| `muv-luv-alternative-2nd-season-op-1` | 暁を撃て／JAM Project, 栗林みな実 | OP1 | 2022-fall |
| `muv-luv-alternative-2nd-season-ed-1` | 再会／V.W.P | ED1 | 2022-fall |
| `mushikaburi-hime-op-1` | Prologue／井口裕香 | OP1 | 2022-fall |
| `mushikaburi-hime-ed-1` | 革表紙／伊東歌詞太郎 | ED1 | 2022-fall |
| `megaton-kyuu-musashi-2nd-season-op-1` | 英雄のうた／松浦航大 | OP1 | 2022-fall, 2023-winter |
| `megaton-kyuu-musashi-2nd-season-ed-1` | 迷える羊たちの挽歌／小林マナ | ED1 | 2022-fall, 2023-winter |
| `megaton-kyuu-musashi-2nd-season-ed-2` | Endless Way／Yuki Sugiyama | ED2 | 第一方身分／用途待核，原入口保留 |
| `akiba-maid-sensou-op-1` | メイド大回転／とんとことんスタッフ一同 | OP1 | 2022-fall |
| `akiba-maid-sensou-ed-1` | 冥途の子守唄／万年嵐子（CV：佐藤利奈） | ED1 | 2022-fall |
| `akiba-maid-sensou-ed-2` | 一生女の子宣言☆／Rina Satou | ED2 | 第一方身分／用途待核，原入口保留 |
| `akiba-maid-sensou-ed-3` | 冥途の子守唄／Reina Kondou | ED3 | 第一方身分／用途待核，原入口保留 |
| `seiken-densetsu-legend-of-mana-the-teardrop-crystal-op-1` | Tear of Will／早見沙織 | OP1 | 2022-fall |
| `seiken-densetsu-legend-of-mana-the-teardrop-crystal-ed-1` | Song of Mana -The Teardrop Crystal-／Saori Hayami | ED1 | 第一方身分／用途待核，原入口保留 |
| `seiken-densetsu-legend-of-mana-the-teardrop-crystal-ed-2` | Song of MANA ~Ending Theme~／Annika | ED2 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-131182`、`curated-146233`、`curated-154545`、`curated-131516`、`curated-140439`、`curated-142985`、`curated-144533`、`curated-142541`、`curated-151379`、`curated-136150`。更正18個原名、17個演唱名義；同頁補42項詞／曲／編及31項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,721用途（4,516 OP／ED、195 IN、10 TS）均有dataStatus；1,819筆基本逐欄證據、2,902筆來源待細分。2,628個唯一用途逐批處理，其中2,423 OP／ED、195 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有3筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- ヤマノススメ Next Summit原TV 2022年10月5日00:30；前日24:00 ABEMA為先行WEB。正常OP／ED兩角色歌唱由逐曲官方名義明示；あおい／ひなたsolo身分與版本已明，但兩個solo及Staccato Days本期TV用途共3筆held。共享歌曲關係僅保留proposal，未套canonical或新增錄音。2023地方局後播不延伸用曲季度。
- 不徳のギルド原TV AT-X 10月5日23:30；兩首正常用曲基本證據已核，ED詞曲編同頁明列。五人角色版ED仍缺逐版第一方身分／用途，保候選名義、held空季度；原曲頁僅證title，不推出角色版演唱。
- ヒューマンバグ大学 -不死学部不幸学科-原TV 10月5日22:00。CATASTROPHE／ナノ與BAD CITY（BUG HUMAN）／Lowland Jazz及已列詞曲編由發行商公告直接支持；ED僅官方演奏名義，noVocals不由樂團介紹或中文主唱字樣補歌唱。
- Do It Yourself!!原TV首話10月6日00:30，後續常規24:00不代首話時間。兩曲正式團體／角色名義、逐曲歌唱及已明詞曲補入；編曲未由相鄰資料推定。
- モブサイコ100 III原TV10月6日00:00。１／コバルト基本用途與詞曲編已核；Exist歌曲身分、MOB CHOIR及詞曲編有官方單曲曲表，但本期特殊ED用途仍held。TV EDIT或商品收錄不等於第4／6話ED明證；媒體訪談僅交叉。
- マブラヴ オルタネイティヴ第二期原TV10月6日00:55。暁を撃て／JAM Project, 栗林みな実明OP與本曲LCA；再会／V.W.P明ED，五人本曲評論支持實唱，未從一般成員表推斷。虫かぶり姫原TV10月6日21:00；Prologue／井口裕香與革表紙／伊東歌詞太郎兩曲用途已核，後者LCA明列，前者作者仍待逐曲一方。
- メガトン級ムサシ第二季原TV10月7日22:00，先行上映、第一季總集篇與2024再播分開。英雄のうた／松浦航大及迷える羊たちの挽歌／小林マナ確認秋與2023冬；Endless Way候選身分及特殊ED用途仍held。
- アキバ冥途戦争原TV10月7日00:00；正常兩曲及LCA已核。一生女の子宣言☆的作者公司公告僅支持原名與作者，本候選演唱未明，title-only不得生成FP artist／usage或vocals；第12話冥途の子守唄近藤版亦held。
- 聖剣伝説 Legend of Mana -The Teardrop Crystal-原TV10月8日01:25；Tear of Will／早見沙織及LCA已核，兩個Song of Mana候選ED身分／用途未得本期逐版一方，保原ID／名義與held空季度，不由遊戲原曲或商品推版本。
- 保29用途ID、序號與既有songId；0新增影片、錄音、發行品或平台。來源逐URL依真正實讀日期處理；AT等未重讀交叉來源沿crossCheckDates保原9月1日。未選公開JSON應一致；全目錄150筆空季度、103筆非空季度條件與季度統計待集中proof實數替換。詳細階段及整體目標仍未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部29筆與未選資料保留性通過。Chromium393×852全部29筆狀態、12季度／3用途篩選、10搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第105–108批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider10部29筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁29組狀態、12季度、3用途過濾、10搜尋、10筆TV／待核狀態展示、10待核及0部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批原期資料、已證動畫跨季關聯、欄位盤點及同一checkpoint；registry排除target原生seed、尾端numeric IDs與已存literal，無缺少關聯則不造空spread。無parser／UI／依賴改動，資料與檢查由集中流程執行。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/yama-no-susume-next-summit/、http://127.0.0.1:4345/anime/futoku-no-guild/、http://127.0.0.1:4345/anime/human-bug-daigaku/。 接第108批2022秋6部23筆既有用途：`curated-139092`、`curated-130003`、`curated-137822`、`curated-141949`、`curated-142481`、`curated-116674`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-108（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。6部、原23用途加4筆已證新用途，共27筆：24筆基本逐欄證據、3筆特殊用途待核、3筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `mairimashita-iruma-kun-3rd-season-op-1` | ギリギリRide it out／FANTASTICS from EXILE TRIBE | OP1 | 2022-fall |
| `mairimashita-iruma-kun-3rd-season-ed-1` | 鍋奉行／水曜日のカンパネラ | ED1 | 2022-fall |
| `mairimashita-iruma-kun-3rd-season-ed-2` | Tomodachi no Senaka／Akuma Gakkou Babyls Seito no Mina-san | ED2 | 第一方身分／用途待核，原入口保留 |
| `bocchi-the-rock-op-1` | 青春コンプレックス／結束バンド | OP1 | 2022-fall |
| `bocchi-the-rock-ed-1` | Distortion!!／結束バンド | ED1 | 2022-fall |
| `bocchi-the-rock-ed-2` | カラカラ／結束バンド | ED2 | 2022-fall |
| `bocchi-the-rock-ed-3` | なにが悪い／結束バンド | ED3 | 2022-fall |
| `bocchi-the-rock-ed-4` | 転がる岩、君に朝が降る／結束バンド | ED4 | 2022-fall |
| `bocchi-the-rock-in-1` | ギターと孤独と蒼い惑星／結束バンド | IN1 | 2022-fall |
| `bocchi-the-rock-in-2` | あのバンド／結束バンド | IN2 | 2022-fall |
| `bocchi-the-rock-in-3` | 忘れてやらない／結束バンド | IN3 | 2022-fall |
| `bocchi-the-rock-in-4` | 星座になれたら／結束バンド | IN4 | 2022-fall |
| `blue-lock-op-1` | カオスが極まる／UNISON SQUARE GARDEN | OP1 | 2022-fall |
| `blue-lock-op-2` | Judgement／ASH DA HERO | OP2 | 2023-winter |
| `blue-lock-ed-1` | WINNER／仲村宗悟 | ED1 | 2022-fall |
| `blue-lock-ed-2` | Numbness like a ginger／UNISON SQUARE GARDEN | ED2 | 2023-winter |
| `fuufu-ijou-koibito-miman-op-1` | TRUE FOOL LOVE／Liyuu | OP1 | 2022-fall |
| `fuufu-ijou-koibito-miman-ed-1` | Stuck on you／Nowlu | ED1 | 2022-fall |
| `fuufu-ijou-koibito-miman-ed-2` | Swallows／Nowlu | ED2 | 第一方身分／用途待核，原入口保留 |
| `yowamushi-pedal-limit-break-op-1` | Keep going／04 Limited Sazabys | OP1 | 2022-fall, 2023-winter |
| `yowamushi-pedal-limit-break-op-2` | ラストシーン／Novelbright | OP2 | 2023-winter |
| `yowamushi-pedal-limit-break-ed-1` | PRIDE／Novelbright | ED1 | 2022-fall, 2023-winter |
| `yowamushi-pedal-limit-break-ed-2` | アクション／山下大輝 with 佐伯ユウスケ | ED2 | 2023-winter |
| `bleach-sennen-kessenhen-op-1` | スカー／キタニタツヤ | OP1 | 2022-fall |
| `bleach-sennen-kessenhen-ed-1` | Rapport／キタニタツヤ | ED1 | 2022-fall |
| `bleach-sennen-kessenhen-ed-2` | 最果て／SennaRin | ED2 | 2022-fall |
| `bleach-sennen-kessenhen-ed-3` | Number One - Bankai／Hazel Fernandes | ED3 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-139092`、`curated-130003`、`curated-137822`、`curated-141949`、`curated-142481`、`curated-116674`。更正5個原名、4個演唱名義；同頁補52項詞／曲／編及9項演唱（按用途計）。新增4筆用途／4個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,725用途（4,516 OP／ED、199 IN、10 TS）均有dataStatus；1,843筆基本逐欄證據、2,882筆來源待細分。2,655個唯一用途逐批處理，其中2,446 OP／ED、199 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,046部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 涵蓋入間第三系列、孤獨搖滾、BLUE LOCK第一期、夫婦以上戀人未滿、飆速宅男LIMIT BREAK與BLEACH千年血戰篇第一cour。首TV、先行WEB、較後地方局、再播及後續cour分開。
- 孤獨搖滾新增ギターと孤独と蒼い惑星、あのバンド、忘れてやらない、星座になれたら四筆插曲用途及四個歌曲身分。逐話官方公告證TV用途，商品頁僅證曲名及結束バンド名義；未明個別演唱不由cast推斷，影片、連結、錄音與發行品從空起，不繼承原OP／ED資料。
- 入間兩首正常歌與BLUE LOCK原OP缺逐曲冬季延用第一方，保已證秋季及具體續查條件，不由動畫跨季推全部歌曲。飆速宅男依逐曲來源保已證季度。
- held為入間特殊ED候選Tomodachi no Senaka、夫婦以上特殊ED候選Swallows及BLEACH原ED3候選Number One - Bankai。Swallows的歌曲身分與用途分開；Number One候選交叉來源稱IN但精確第一方尚缺，保原ID／type／序號並排除該來源正面ED用途；title-only不產演唱身分、用途或歌唱fallback。
- 只更新真正實讀來源日期，既有AnimeThemes及其他未重讀來源沿原日期；正文、動態頁或索引限制保留。原有ID及明確歌曲關係保持，未選JSON應一致；全目錄153筆空季度與106筆非空季度條件待集中proof實數替換，詳細階段與整體目標未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 6部27筆與未選資料保留性通過。Chromium393×852全部27筆狀態、9季度／3用途篩選、10搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第105–108批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider6部27筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗6頁27組狀態、9季度、3用途過濾、10搜尋、6筆TV／待核狀態展示、3待核及3部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批六部原期資料、四筆明確插曲、已證動畫季度關聯與同一checkpoint；native-safe registry排除原生及既存ID，無缺項不造空spread。無程式、UI或依賴變更。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/mairimashita-iruma-kun-3rd-season/、http://127.0.0.1:4345/anime/bocchi-the-rock/、http://127.0.0.1:4345/anime/blue-lock/。 接第109批2022秋3部25筆既有用途：`curated-127230`、`curated-146676`、`curated-143277`；已登記的並行來源查核不預計為公開資料完成。

### 第105–108批合併正式驗收

- 四批25部既有作品（24部標準TV及1部保留／延後短篇）、108筆用途；新增4筆插曲／4個歌曲身分，74筆基本證據、34筆待核及7筆非空季度條件保留。原ID、序號、媒體與未重讀來源日期保留。
- [PR #195](https://github.com/kyeunga25/anisonary/pull/195)與main同樹的正常quality／Workers檢查通過；完整gate採正常CI實際verify:full（含audit及8項E2E），未把失敗或未完成本機full計為通過，沒有放寬gate。來源`2845f4196b8852395e7aeeec751b81b5376ce9db`／`batch108-basics`；固定產物已部署，版本metadata來源／tag／PR相符。
- 四批25部108筆正式ApiProvider與本機相同，122條HTML／JSON／季度／搜尋資產逐檔符合凍結產物，另2條真404。第108批6部27筆另有實際production Chromium手機／桌面與搜尋互動驗證，截圖已檢視；沒有把其餘三批宣稱為本次production瀏覽器重測。
- 本批正式驗收完成；基本、詳細及長期範圍仍未完成。

## 2020-2026-tv-basics-109（隨第112批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。3部、原25用途加1筆已證新用途，共26筆：21筆基本逐欄證據、5筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `chainsaw-man-op-1` | KICK BACK／米津玄師 | OP1 | 2022-fall |
| `chainsaw-man-ed-1` | CHAINSAW BLOOD／Vaundy | ED1 | 2022-fall |
| `chainsaw-man-ed-2` | 残機／ずっと真夜中でいいのに。 | ED2 | 2022-fall |
| `chainsaw-man-ed-3` | 刃渡り2億センチ／マキシマム ザ ホルモン | ED3 | 2022-fall |
| `chainsaw-man-ed-4` | 錠剤／TOOBOE | ED4 | 2022-fall |
| `chainsaw-man-ed-5` | インザバックルーム／syudou | ED5 | 2022-fall |
| `chainsaw-man-ed-6` | 大脳的なランデブー／Kanaria | ED6 | 2022-fall |
| `chainsaw-man-ed-7` | ちゅ、多様性。／ano | ED7 | 2022-fall |
| `chainsaw-man-ed-8` | first death／TK from 凛として時雨 | ED8 | 2022-fall |
| `chainsaw-man-ed-9` | Deep down／Aimer | ED9 | 2022-fall |
| `chainsaw-man-ed-10` | DOGLAND／PEOPLE 1 | ED10 | 2022-fall |
| `chainsaw-man-ed-11` | バイオレンス／女王蜂 | ED11 | 2022-fall |
| `chainsaw-man-ed-12` | ファイトソング／Eve | ED12 | 2022-fall |
| `chainsaw-man-in-1` | 刃渡り2億センチ／マキシマム ザ ホルモン | IN1 | 2022-fall |
| `renai-flops-op-1` | Love? Reason why!!／鈴木このみ | OP1 | 2022-fall |
| `renai-flops-ed-1` | Flop Around／Miku Itou | ED1 | 第一方身分／用途待核，原入口保留 |
| `renai-flops-ed-2` | Flop Around／Ayana Taketatsu、Miku Itou | ED2 | 第一方身分／用途待核，原入口保留 |
| `renai-flops-ed-3` | Flop Around／Ayana Taketatsu、Miku Itou、Rie Takahashi | ED3 | 第一方身分／用途待核，原入口保留 |
| `renai-flops-ed-4` | Flop Around／Ayana Taketatsu、Miku Itou、Rie Takahashi、Hisako Kanemoto | ED4 | 第一方身分／用途待核，原入口保留 |
| `renai-flops-ed-5` | Flop Around／和泉沢愛生（CV.伊藤美来）、アメリア・アーヴィング（CV.竹達彩奈）、イリヤ・イリューヒン（CV.高橋李依）、バイ・モンファ（CV.金元寿子）、カリン・イステル（CV.高野麻里佳） | ED5 | 第一方身分／用途待核，原入口保留 |
| `renai-flops-ed-6` | Flop Around／和泉沢愛生（CV.伊藤美来）、アメリア・アーヴィング（CV.竹達彩奈）、イリヤ・イリューヒン（CV.高橋李依）、バイ・モンファ（CV.金元寿子）、カリン・イステル（CV.高野麻里佳） | ED6 | 2022-fall |
| `renai-flops-ed-7` | lost in the white／井澤愛（CV：伊藤美来） | ED7 | 2022-fall |
| `urusei-yatsura-2022-op-1` | アイウエ feat. 美波, SAKURAmoti／MAISONdes（feat. 美波, SAKURAmoti） | OP1 | 2022-fall |
| `urusei-yatsura-2022-op-2` | アイワナムチュー feat. asmi, すりぃ／MAISONdes（feat. asmi, すりぃ） | OP2 | 2023-winter |
| `urusei-yatsura-2022-ed-1` | トウキョウ・シャンディ・ランデヴ feat. 花譜, ツミキ／MAISONdes（feat. 花譜, ツミキ） | ED1 | 2022-fall |
| `urusei-yatsura-2022-ed-2` | アイタリナイ feat. yama, ニト。／MAISONdes（feat. yama, ニト。） | ED2 | 2023-winter |

- 公開anime ID：`curated-127230`、`curated-146676`、`curated-143277`。更正4個原名、8個演唱名義；同頁補63項詞／曲／編及16項演唱（按用途計）。新增1筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,726用途（4,516 OP／ED、200 IN、10 TS）均有dataStatus；1,864筆基本逐欄證據、2,862筆來源待細分。2,681個唯一用途逐批處理，其中2,471 OP／ED、200 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有13筆真正重讀舊來源更新日期。其他2,049部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- チェンソーマン原TV東京電視系6局2022年10月11日24:00，即實曆10月12日00:00；Prime Video25:00為稍後WEB。原12話在秋季，2023地方局後播、一挙及後續電影不延伸原期用曲。原13個OP／ED用途及同頁已明作者補入；ED3的編曲仍未知，sample原曲作者不混作KICK BACK本曲作者。
- 刃渡り2億センチ在原TV官方music同頁同時明列ED與IN，官方回顧明原TV ED3及TV IN同曲，媒體交叉支持。新增獨立IN1並共原chainsaw-man-ed-3-song；保原ED3 ID／type／序號，不新增歌曲、錄音、影片、發行品，不套劇場70%edit。新用途只用自身來源與空媒體／連結，不繼承舊AnimeThemes或原ED影片。
- 恋愛フロップス原TV AT-X 10月12日21:00；地上波及其同時WEB較後。Love? Reason why!!／鈴木このみ、五人Flop Around原ED6及lost in the white／井澤愛名義三筆基本證據已明。
- Flops原ED1–ED5五筆用途仍held空季度。前四候選的第一方只證曲名，不生成FP演唱身分、用途或歌唱fallback；ED5的五人身分及作者可保，但用途仍未明。ED5／ED6重複疑點僅proposal，保全部原ID與歌曲關係，不擅合併或推instrumental；With You未得第一方TV用途，不新增。
- うる星やつら原期首話特別25:45，即10月14日01:45，與後續常規24:55及現2024第二期onair分開。第一courアイウエ／トウキョウ・シャンディ・ランデヴ只列2022秋，第二courアイワナムチュー／アイタリナイ只列2023冬；feat正式名義與已明四位歌唱分開，不把合作作者全部當實唱。
- 25個既有用途ID、序號、實際既有songId及舊媒體保持；0新增歌曲身分、影片、錄音或發行品。只有實讀來源記2026-10-22，未重讀AT／YT與其他來源仍保原日期；普通頁、索引與正文限制照實記。未選公開JSON應一致；全目錄158筆空季度與106筆非空季度條件待集中proof實數替換，詳細階段與整體目標仍未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 3部26筆與未選資料保留性通過。Chromium393×852全部26筆狀態、5季度／3用途篩選、4搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第109–112批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider3部26筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗3頁26組狀態、5季度、3用途過濾、4搜尋、3筆TV／待核狀態展示、5待核及0部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批3部原期資料、1筆共歌曲IN、已證動畫季度關聯、欄位盤點及同一checkpoint。registry排除目標原生seed、export尾端numeric IDs及既存literal，無缺項不造空spread；沒有程式、UI或依賴改動。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/chainsaw-man/、http://127.0.0.1:4345/anime/renai-flops/、http://127.0.0.1:4345/anime/urusei-yatsura-2022/。 接第110批2022秋、2022夏9部26筆既有用途：`curated-146962`、`curated-138565`、`curated-140660`、`curated-21294`、`curated-124410`、`curated-141775`、`curated-142095`、`curated-143270`、`curated-143417`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-117（隨第120批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。9部、原26用途加2筆已證新用途，共28筆：27筆基本逐欄證據、1筆特殊用途待核、4筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `chimimo-op-1` | マルコッパ／眉村ちあき | OP1 | 2022-summer |
| `chimimo-ed-1` | なんだなんなんだ！／小松未可子 | ED1 | 2022-summer |
| `fuuto-tantei-op-1` | Private Eye／Big Gadgets ft.上木彩矢 w TAKUYA | OP1 | 2022-summer, 2022-fall |
| `fuuto-tantei-ed-1` | 罪と罰とアングラ／松岡充 | ED1 | 2022-summer, 2022-fall |
| `fuuto-tantei-in-1` | W-G-X 〜W Goes Next〜／上木彩矢 w TAKUYA | IN1 | 2022-summer |
| `fuuto-tantei-in-2` | Let’s go ahead／風祭メグ（CV：Machico） | IN2 | 2022-summer |
| `kakkou-no-iinazuke-op-1` | 凸凹／吉岡聖恵 | OP1 | 2022-spring, 2022-summer |
| `kakkou-no-iinazuke-op-2` | Glitter／sumika | OP2 | 2022-summer |
| `kakkou-no-iinazuke-ed-1` | 四角運命／三月のパンタシア | ED1 | 2022-spring, 2022-summer |
| `kakkou-no-iinazuke-ed-2` | HELLO HELLO HELLO／藍井エイル | ED2 | 2022-summer |
| `summer-time-render-op-1` | 星が泳ぐ／マカロニえんぴつ | OP1 | 2022-spring, 2022-summer |
| `summer-time-render-op-2` | 夏夢ノイジー／亜咲花 | OP2 | 2022-summer |
| `summer-time-render-ed-1` | 回夏／cadode | ED1 | 2022-spring, 2022-summer |
| `summer-time-render-ed-2` | 失恋ソング沢山聴いて 泣いてばかりの私はもう。／りりあ。 | ED2 | 2022-summer |
| `summer-time-render-ed-3` | 失恋ソング沢山聴いて 泣いてばかりの私はもう。acoustic ver.／りりあ。 | ED3 | 2022-summer |
| `honzuki-no-gekokujou-shisho-ni-naru-tame-ni-wa-shudan-wo-erandeiraremasen-3rd-season-op-1` | あの日のことば／東山奈央 | OP1 | 2022-spring |
| `honzuki-no-gekokujou-shisho-ni-naru-tame-ni-wa-shudan-wo-erandeiraremasen-3rd-season-ed-1` | 言葉にできない／坂本真綾 | ED1 | 2022-spring |
| `kyoukai-senki-part-2-op-1` | Overload／富金原佑菜 | OP1 | 2022-spring |
| `kyoukai-senki-part-2-ed-1` | pARTs／Natumi. | ED1 | 2022-spring |
| `kyoukai-senki-part-2-ed-2` | enemy／Blank paper | ED2 | 第一方身分／用途待核，原入口保留 |
| `kawaii-dake-ja-nai-shikimori-san-op-1` | ハニージェットコースター／なすお☆ | OP1 | 2022-spring |
| `kawaii-dake-ja-nai-shikimori-san-ed-1` | Route BLUE／中島由貴 | ED1 | 2022-spring |
| `kono-healer-mendokusai-op-1` | ジェリーフィッシュな君へ／大西亜玖璃 | OP1 | 2022-spring |
| `kono-healer-mendokusai-ed-1` | HERO in HEALER／カーラ with アルヴィン、キノコ | ED1 | 2022-spring |
| `kingdom-4th-season-op-1` | 黎-ray-／SUIREN | OP1 | 2022-spring, 2022-summer |
| `kingdom-4th-season-op-2` | geki／zonji | OP2 | 2022-summer, 2022-fall |
| `kingdom-4th-season-ed-1` | 眩耀／珀 | ED1 | 2022-spring, 2022-summer |
| `kingdom-4th-season-ed-2` | Believe／みさき | ED2 | 2022-summer, 2022-fall |

- 公開anime ID：`curated-144858`、`curated-131912`、`curated-132052`、`curated-129201`、`curated-121176`、`curated-143203`、`curated-127911`、`curated-132351`、`curated-140350`。更正1個原名、6個演唱名義；同頁補36項詞／曲／編及13項演唱（按用途計）。新增2筆用途／2個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,792用途（4,552 OP／ED、230 IN、10 TS）均有dataStatus；2,059筆基本逐欄證據、2,733筆來源待細分。2,912個唯一用途逐批處理，其中2,672 OP／ED、230 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有6筆真正重讀舊來源更新日期。其他2,043部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 原26用途的ID、type、sequence、已有明確songID及媒體保留。raw theme可沒有id，依原API type／sequence精確對應；acoustic ED3是唯一已授權舊關係更正，ED2仍用原song。兩新IN依未占用IN1／2，raw links空、只有各自已讀東映逐話公告及新讀中文CC，不繼承舊AnimeThemes、影片、錄音或發行。builder僅可補exact動畫首頁入口，該入口不算媒體或平台完成。
- カッコウの許嫁第一cour兩曲經原期最後cour公告與逐話日期確認spring／summer；第二cour兩曲只summer，動畫延至10/2不能推fall，保兩partial。式守兩曲只spring，延播7月之逐曲第一方缺口保兩partial。動畫季度與每曲seasonIds分開。
- 境界戦機第二部enemy歌曲原名／Blank paper身份已證，但第一方只列第一部OP，未得本第二部特殊ED用途，保ED2原ID／type／sequence、空季度held；title／artist可記，不產正面first_party anime_use，兩個交叉候選來源亦從正面usage排除，不猜S1共同歌曲。
- Summer Time Render第一cour兩曲跨實曆7/1，後半正常曲只summer；acoustic ED3只核第24話summer，官方明原曲acoustic關係而共既有song，versionLabel保留，不建recording、不承襲普通版編曲／個別演唱。第25話IN與第24話夏夢IN缺第一方精確分類，保私有deferred，不新增。
- 風都探偵原TV8/8 22:00與WEB8/1分開；原OP正式Big Gadgets ft.上木彩矢 w TAKUYA，只有兩位明示chorus列vocals，不把instrumental unit推全員主唱。ED正式松岡充，吉川晃司本曲chorus與作曲明列而不改雙人主唱名義。東映第3／4話原公告與中文逐話CC支持W-G-X／Let’s go ahead兩新IN，各只summer。
- ちみも原TV7/7深夜1:30即7/8 01:30；原番組12話24段及授權正片24分，完整正常TV編排不因兩段直接排短。5/30選段先行WEB不當spring TV用途，2曲只summer；新sh-anime.shochiku官網入口可用，舊不可讀入口／原日期仍保存。
- Kingdom第4系列第一cour兩曲1–13含7/3，故spring／summer；第二cour兩曲14–26含10/2，故summer／fall。Believe正式みさき。原期精確首TV分鐘第一方未取得，保原4/10與metadata9/01；不能套根頁第6期或共用2021頁尾。境界第二部原TV首日已明、最早分鐘仍缺，不把CC候選00:00升成已核。
- 所有metadata基準9/01與逐URL22實讀分開。firstPartySongFields、useOnlySources、dateOnly與crossCheckUsageExclusions各守欄位界線；LCA只採同頁明示，cast／band簡介不推逐人歌唱，已明chorus保具體範圍。全目錄194筆空季度、126筆非空季度缺口待實際proof替換。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 9部28筆與未選資料保留性通過。Chromium393×852全部28筆狀態、16季度／48用途篩選、11搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第117–120批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider9部28筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗9頁28組狀態、16季度、48用途過濾、11搜尋、9筆TV／待核狀態展示、1用途待核、0非空季度基本證據缺口及4部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 只替換2022/summer.ts與2022/spring.ts中的9個已選原seed物件及必要registry；沿用110的literal JSON reader，不import／執行seed module。原生seed map與numeric AnimeIds尾端先排除後加registry，未選owner物件原文字節、其他seed module與全部未選公開JSON按SHA-256保全。5億年短篇zero不在117範圍，既有物件與ID保留。另以獨立修正處理公開檢查對數值搜尋路由Base64的偶然文字誤報：嚴格驗證manifest、內容hash、位元與數值結構後只排除該二進位欄位的文字比對；明文及不合格式的候選仍檢查並拒絕。增加3項回歸測試，未改索引產生、公開資料契約、UI或依賴。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/chimimo/、http://127.0.0.1:4345/anime/fuuto-tantei/、http://127.0.0.1:4345/anime/kakkou-no-iinazuke/。 第118批2022春既有作品7部29筆既有用途已登記：`curated-141350`、`curated-125367`、`curated-132171`、`curated-134732`、`curated-140960`、`curated-116605`、`curated-123330`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-110（隨第112批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。9部、原26用途加6筆已證新用途，共32筆：31筆基本逐欄證據、1筆特殊用途待核、4筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `4-nin-wa-sorezore-uso-wo-tsuku-op-1` | エクリプス／NACHERRY | OP1 | 2022-fall |
| `4-nin-wa-sorezore-uso-wo-tsuku-ed-1` | For 4 Forever／リッカ（CV.田中ちえ美）、千代（CV.村上奈津実）、関根（CV.佐倉綾音）、翼（CV.潘めぐみ） | ED1 | 2022-fall |
| `fumetsu-no-anata-e-2nd-season-op-1` | PINK BLOOD／宇多田ヒカル | OP1 | 2022-fall |
| `fumetsu-no-anata-e-2nd-season-ed-1` | Roots／浜渦正志 | ED1 | 2022-fall |
| `arknights-reimei-zensou-op-1` | Alive／ReoNa | OP1 | 2022-fall |
| `arknights-reimei-zensou-ed-1` | BE ME／Doul | ED1 | 2022-fall |
| `kancolle-itsuka-ano-umi-de-op-1` | 時雨／龍玄とし | OP1 | 2022-fall |
| `kancolle-itsuka-ano-umi-de-ed-1` | 未来（いま）／C2機関"1MYB" | ED1 | 2022-fall |
| `kancolle-itsuka-ano-umi-de-ed-2` | Sasebo no Shigure／C2 Kikan "1MYB" | ED2 | 第一方身分／用途待核，原入口保留 |
| `kanojo-okarishimasu-2nd-season-op-1` | ヒミツ恋ゴコロ／CHiCO with HoneyWorks | OP1 | 2022-summer |
| `kanojo-okarishimasu-2nd-season-ed-1` | 言えない feat.asmi／MIMiNARI | ED1 | 2022-summer |
| `shoot-goal-to-the-future-op-1` | アオレイド／宮川愛李 | OP1 | 2022-summer |
| `shoot-goal-to-the-future-ed-1` | RIVALS／all at once | ED1 | 2022-summer |
| `shoot-goal-to-the-future-in-1` | 夜明け前／メリー | IN1 | 2022-summer |
| `kami-kuzu-idol-op-1` | Let's ZING!／ZINGS | OP1 | 2022-summer |
| `kami-kuzu-idol-ed-1` | キミキラ／ZINGS | ED1 | 2022-summer |
| `kami-kuzu-idol-ed-2` | ハレラルラ／最上アサヒ | ED2 | 2022-summer |
| `kami-kuzu-idol-ed-3` | 裏表のデュエット／ZINGS | ED3 | 2022-summer |
| `kami-kuzu-idol-ed-4` | 恋せよパラメディック／スイートファーマシー | ED4 | 2022-summer |
| `kami-kuzu-idol-ed-5` | INNOCENT STORY／Cgrass | ED5 | 2022-summer |
| `kami-kuzu-idol-ed-6` | Respect／仁淀ユウヤ・瀬戸内ヒカル | ED6 | 2022-summer |
| `kami-kuzu-idol-ed-7` | フィナーレ～その先へ～／ZINGS | ED7 | 2022-summer |
| `kami-kuzu-idol-in-1` | 恋のBANG／ZINGS | IN1 | 2022-summer |
| `kami-kuzu-idol-in-2` | 絶対証明ロック／ZINGS | IN2 | 2022-summer |
| `kami-kuzu-idol-in-3` | HAPPINESS for ALL／Cgrass | IN3 | 2022-summer |
| `kami-kuzu-idol-in-4` | 乗り越えてLOST／ZINGS | IN4 | 2022-summer |
| `lycoris-recoil-op-1` | ALIVE／ClariS | OP1 | 2022-summer |
| `lycoris-recoil-ed-1` | 花の塔／さユり | ED1 | 2022-summer |
| `teppen-op-1` | てっぺんっ天国 ～TOP OF THE LAUGH!!!～／てっぺんっオールスターズ | OP1 | 2022-summer |
| `teppen-ed-1` | あはっててっぺんっ／May'n | ED1 | 2022-summer |
| `teppen-ed-2` | ハグ・ユア・レッグ／ヤングワイワイ（阪本やよい：伊藤彩沙、高橋よもぎ：愛美、細野ゆず：佐々木未来） | IN2 | 2022-summer |
| `teppen-in-3` | あくまで手毬唄／高橋よもぎ（CV.愛美）＆バーバア（CV.井上喜久子） | IN3 | 2022-summer |

- 公開anime ID：`curated-146962`、`curated-138565`、`curated-140660`、`curated-21294`、`curated-124410`、`curated-141775`、`curated-142095`、`curated-143270`、`curated-143417`。更正5個原名、11個演唱名義；同頁補49項詞／曲／編及35項演唱（按用途計）。新增6筆用途／6個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,732用途（4,515 OP／ED、207 IN、10 TS）均有dataStatus；1,895筆基本逐欄證據、2,837筆來源待細分。2,713個唯一用途逐批處理，其中2,496 OP／ED、207 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,043部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 4人はそれぞれウソをつく原TV10月16日02:00，ABEMA26:30比原TV晚。エクリプス／NACHERRY與For 4 Forever四角色名義、LCA及後者四人實唱由官方逐曲明示；coupling／OST不推新IN。
- 不滅のあなたへSeason2原TV10月23日19:00。PINK BLOOD／宇多田ヒカル詞曲歌與Roots／浜渦正志作編由原期staff明示；Roots無歌唱fallback。兩曲先登秋，冬季逐曲第一方仍待核，各留partial；全20話與CC逐話曲表不直接代替冬季逐曲證據。與S1續投共歌僅proposal，未改active songId。
- アークナイツ黎明前奏原TV10月29日01:23，WEB10時較後、2023夏再播與後續季分開。官方原期索引可讀Alive／ReoNa與LCA、BE ME／Doul用途；普通open僅JS骨架，來源備註照實記，不從中文左乙版移植演唱。
- 艦これいつかあの海で原TV11月4日00:30。時雨／龍玄とし、未来（いま）／C2機関1MYB與已明詞曲可證；延播至冬季原第6／7／8話日期已核，但正常兩曲冬季逐曲第一方仍partial。佐世保の時雨本期本版身分／特殊ED仍held，保舊候選名義；不由遊戲曲或BD角色圖題推用途，地方局4月後播不延伸春季。正常八集TV保範圍。
- 彼女、お借りします第2期原TV7月2日01:25；兩正常曲ヒミツ恋ゴコロ／sumika、言えない feat.asmi／MIMiNARI由原期頁明示，不混第三期。シュート！Goal to the Future原TV7月2日23:30，兩正常曲及最終第13話夜明け前／メリーIN按正式藝人公告與原期媒體交叉新增；不由團員訪談推逐人成員歌唱。
- 神クズ☆アイドル原TV7月2日01:53，8筆既有用途保留並新增恋のBANG、絶対証明ロック、HAPPINESS for ALL、乗り越えてLOST四IN。官方原期配信彙整逐曲明用途與名義；逐人歌唱及LCA僅取明列本曲頁，credit-only商品不擴用途。Mau2 OP／ED3錯字排除song欄，其他曲Mau2無演唱僅採title及用途；不從全cast推出未明本曲vocal。
- リコリス・リコイル原TV7月2日23:30；兩原曲名義與用途按原期來源，與後續短篇／其他商品分開。てっぺんっ原TV7月2日22:30；ハグ・ユア・レッグ官方明IN，保teppen-ed-2 ID／sequence2與原歌曲ID更正type=IN，不新建teppen-in-2。新增あくまで手毬唄為IN3，正式逐曲作者／演唱按官方明列；排除舊AT將該曲當ED的正面usage。
- 本批六新IN各從自身來源建立用途與歌曲，無繼承舊AT、影片或外連；新歌曲數從actual舊／新songId集合計算，待proof驗證，不以標題或目標數硬湊。原26用途ID、序號、既存歌曲ID與媒體保持，唯一type允差為teppen-ed-2。只有真正實讀來源更新日期，未讀AT／根來源按既有日保留。全目錄159筆空季度與110筆非空季度條件待proof實數替換；基本、詳細及作品聯集仍未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 9部32筆與未選資料保留性通過。Chromium393×852全部32筆狀態、10季度／3用途篩選、15搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第109–112批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider9部32筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗9頁32組狀態、10季度、3用途過濾、15搜尋、9筆TV／待核狀態展示、1待核及4部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批2022秋／夏兩個seed owner、已證動畫跨季registry補缺、欄位盤點與同一checkpoint。native seed與export尾端numeric IDs、既存literal先排除；無缺項不造空spread。無parser／UI／依賴改動。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/4-nin-wa-sorezore-uso-wo-tsuku/、http://127.0.0.1:4345/anime/fumetsu-no-anata-e-2nd-season/、http://127.0.0.1:4345/anime/arknights-reimei-zensou/。 接第111批2022夏9部30筆既有用途：`curated-103118`、`curated-112640`、`curated-145468`、`curated-146625`、`curated-146668`、`curated-129192`、`curated-145545`、`curated-133844`、`curated-139212`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-111（隨第112批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。9部、原30用途加1筆已證新用途，共31筆：19筆基本逐欄證據、12筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-op-1` | WONDERFUL WORLD／ルミナスウィッチーズ | OP1 | 2022-summer |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-1` | わたしとみんなのうた／ヴァージニア・ロバートソン（CV.鳴海まい）、渋谷いのり（CV.細川美菜子） | ED1 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-2` | わたしとみんなのうた／リュドミラ・アンドレエヴナ・ルスラノヴァ（CV.藍本あみ）、アイラ・ペイヴィッキ・リンナマー（CV.真宮涼） | ED2 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-3` | わたしとみんなのうた／アイラ・ペイヴィッキ・リンナマー（CV.真宮涼）、エレオノール・ジョヴァンナ・ガション（CV.都月彩楓） | ED3 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-4` | わたしとみんなのうた／シルヴィ・カリエッロ（CV.吉北梨乃）、ジョアンナ・エリザベス・スタッフォード（CV.豆咲りお） | ED4 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-5` | わたしとみんなのうた／マリア・マグダレーネ・ディートリヒ（CV.古仲可奈）、マナイア・マタワウラ・ハト（CV.結木美咲） | ED5 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-6` | わたしとみんなのうた／ヴァージニア・ロバートソン（CV.鳴海まい）、渋谷いのり（CV.細川美菜子）、リュドミラ・アンドレエヴナ・ルスラノヴァ（CV.藍本あみ） | ED6 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-7` | わたしとみんなのうた／マリア・マグダレーネ・ディートリヒ（CV.古仲可奈）、ジョアンナ・エリザベス・スタッフォード（CV.豆咲りお） | ED7 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-8` | わたしとみんなのうた／シルヴィ・カリエッロ（CV.吉北梨乃）、マナイア・マタワウラ・ハト（CV.結木美咲） | ED8 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-9` | わたしとみんなのうた／ヴァージニア・ロバートソン（CV.鳴海まい）、エレオノール・ジョヴァンナ・ガション（CV.都月彩楓） | ED9 | 第一方身分／用途待核，原入口保留 |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-10` | わたしとみんなのうた／ルミナスウィッチーズ | ED10 | 2022-summer |
| `renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches-ed-11` | Flying Skyhigh／ルミナスウィッチーズ | ED11 | 第一方身分／用途待核，原入口保留 |
| `utawarerumono-futari-no-hakuoro-op-1` | 人なんだ／Suara | OP1 | 2022-summer |
| `utawarerumono-futari-no-hakuoro-ed-1` | ヌエドリ／Suara | ED1 | 第一方身分／用途待核，原入口保留 |
| `utawarerumono-futari-no-hakuoro-ed-2` | 百日草／Suara | ED2 | 2022-summer |
| `utawarerumono-futari-no-hakuoro-ed-3` | 夢想歌 2016／Suara | ED3 | 第一方身分／用途待核，原入口保留 |
| `yurei-deco-op-1` | 1,000,000,000,000,000,000,000,000 LOVE／クラムボン | OP1 | 2022-summer |
| `yurei-deco-ed-1` | あいむいんらぶ／Hack’n Berry | ED1 | 2022-summer |
| `engage-kiss-op-1` | 誰彼スクランブル／halca | OP1 | 2022-summer |
| `engage-kiss-ed-1` | 恋愛脳／ナナヲアカリ | ED1 | 2022-summer |
| `rwby-hyousetsu-teikoku-op-1` | Beyond Selves／Void_Chords feat. L | OP1 | 2022-summer |
| `rwby-hyousetsu-teikoku-ed-1` | Awake／早見沙織 | ED1 | 2022-summer |
| `tensei-kenja-no-isekai-life-daini-no-shokugyou-wo-ete-sekai-saikyou-ni-narimashita-op-1` | 無自覚の天才／Non Stop Rabbit | OP1 | 2022-summer |
| `tensei-kenja-no-isekai-life-daini-no-shokugyou-wo-ete-sekai-saikyou-ni-narimashita-ed-1` | ごはんだヨッ！ダダダダン！！／スラちゃんず△ | ED1 | 2022-summer |
| `youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-2nd-season-op-1` | Dance In The Game／ZAQ | OP1 | 2022-summer |
| `youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-2nd-season-ed-1` | 人芝居／渕上 舞 | ED1 | 2022-summer |
| `overlord-iv-op-1` | HOLLOW HUNGER／OxT | OP1 | 2022-summer |
| `overlord-iv-ed-1` | No Man's Dawn／前島麻由 | ED1 | 2022-summer |
| `overlord-iv-in-1` | fallen／ラナー（CV：安野希世乃） | IN1 | 2022-summer |
| `cardfight-vanguard-will-dress-op-1` | BLACK&WHITE／Argonavis feat. 旭 那由多 from GYROAXIA | OP1 | 2022-summer |
| `cardfight-vanguard-will-dress-ed-1` | Do the Dive／Call of Artemis | ED1 | 2022-summer |

- 公開anime ID：`curated-103118`、`curated-112640`、`curated-145468`、`curated-146625`、`curated-146668`、`curated-129192`、`curated-145545`、`curated-133844`、`curated-139212`。更正2個原名、21個演唱名義；同頁補97項詞／曲／編及37項演唱（按用途計）。新增1筆用途／1個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,733用途（4,515 OP／ED、208 IN、10 TS）均有dataStatus；1,914筆基本逐欄證據、2,819筆來源待細分。2,744個唯一用途逐批處理，其中2,526 OP／ED、208 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,043部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- ルミナスウィッチーズ原TV7月3日21:00，地上波先行WEB23:00晚於AT-X。12原用途全部保ID；WONDERFUL WORLD OP與わたしとみんなのうた團體ED可證，另外九個旋轉演唱ED與Flying Skyhigh共10筆held空季度。商品ep／solo標籤不代逐話TV用途，不做canonical合併；本曲歌唱只取明列版本，團體名冊不推九人全部實唱。Flying Skyhigh在中文／Mau2是IN分類而原候選ED，排除衝突來源的正面ED用途，待本期官方逐話證據才處理原ID type。
- うたわれるもの二人の白皇原TV7月3日01:00，初回雙話與同時WEB分開。人なんだ／百日草原名、Suara與逐曲LCA已明，動畫跨秋但兩曲先只summer，各留秋季逐曲partial。ヌエドリ既有歌曲身份／作者可證，仍無本期特殊ED明證而held；夢想歌 2016候選版本身份與用途均未明，held且不由2016商品年份推錄音版本或歌唱，不合併任何歌曲。
- ユーレイデコ原TV7月3日沿既有來源保留，原期精確分鐘未核；不把歌曲7月3日24時配信或動畫23:30 WEB當TV。1,000,000,000,000,000,000,000,000 LOVE／クラムボン與あいむいんらぶ／Hack’n Berry及同頁已明作者按原期索引保存；歌曲來源新讀22，metadata基準與未讀TV來源9/01保留。
- Engage Kiss原TV7月3日00:30，WEB25:00較後。誰彼スクランブル／halca與恋愛脳／ナナヲアカリ由原期Music明示，作者泛稱書きおろし不擴成完整LCA。RWBY氷雪帝国原TV7月3日22:30，6月24日前三話先行WEB另列；Beyond Selves正式名義Void_Chords feat. L及Awake／早見沙織按官方明示，L本曲實唱與作曲企劃分開。兩部metadataVerifiedAt均保9/01。
- 転生賢者原TV7月4日20:00 AT-X第1、2話連續，地上波與WEB24時較後。無自覚の天才／Non Stop Rabbit及ごはんだヨッ！ダダダダン！！／スラちゃんず△原名用途有官方索引及中文交叉；Felion本曲逐曲表直接列ED六人歌唱與詞曲編，僅credit補充，不從cast推歌唱或coupling推IN。原站403限制照實記，未繞過或刷新未讀根頁。
- ようこそ実力至上主義の教室へ2nd Season原TV7月4日21:00，地上波先行ABEMA22:00仍晚於AT-X。Dance In The Game／ZAQ與人芝居／渕上 舞的詞曲編由原/2nd/Music同頁逐曲明列，不移植coupling或後續季資料。
- オーバーロードIV原TV7月5日22:00，WEB24時較後。HOLLOW HUNGER／OxT與No Man's Dawn／前島麻由完整LCA按原期曲表；OxT組合名義不推兩位成員均歌唱。新增fallen／ラナー(CV安野希世乃)為第13話IN，有官方直接用途、作者與新讀中文交叉，原期9月27日22:00逐話公告串summer。新用途不繼承舊AnimeThemes、影片或商品，raw links為空，公開builder只允許exact作品官網首頁fallback，該入口不算媒體或正版平台完成。
- カードファイト!! ヴァンガードwill+Dress原2022 TV7月4日24:00即實日7月5日00:00，後續Season2／3分開。BLACK&WHITE正式Argonavis feat. 旭 那由多 from GYROAXIA、Do the Dive／Call of Artemis及LCA由Bushiroad公司原公告明列；ED本曲欄列四角色CV才補實唱，OP不由cast或團員bio推逐人歌唱。舊站404以原公司PR正文補證，最終兼ED只有CC不新造用途。
- 30原用途ID、序號、既有songID、原媒體與未讀來源日期保持；held不因身份／LCA可證便加TV用途或季度，2partial只保現已證summer。全目錄171筆空季度與112筆非空季度條件待proof實數替換；基本、詳細及作品聯集仍未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 9部31筆與未選資料保留性通過。Chromium393×852全部31筆狀態、10季度／3用途篩選、10搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第109–112批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider9部31筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗9頁31組狀態、10季度、3用途過濾、10搜尋、9筆TV／待核狀態展示、12待核及2部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批2022-summer seed選定9物件、已證動畫跨季registry缺項、必要欄位盤點與同一checkpoint。registry先排native seed map及export尾端numeric IDs與既存literal，不重加原生ID；未選定raw seed物件及所有未選定公開anime JSON嚴格保全，無parser／UI／依賴改動。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/renmei-kuugun-koukuu-mahou-ongakutai-luminous-witches/、http://127.0.0.1:4345/anime/utawarerumono-futari-no-hakuoro/、http://127.0.0.1:4345/anime/yurei-deco/。 接第112批2022夏10部23筆既有用途：`curated-146210`、`curated-114745`、`curated-117196`、`curated-124641`、`curated-135806`、`curated-136934`、`curated-149874`、`curated-138882`、`curated-140187`、`curated-128223`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-118（隨第120批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。7部、原29用途加1筆已證新用途，共30筆：29筆基本逐欄證據、1筆特殊用途待核、3筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `kunoichi-tsubaki-no-mune-no-uchi-op-1` | ハイライト・ハイライト／the peggies | OP1 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-1` | あかね組活動日誌 ～戌班～／ツバキ（CV.夏吉ゆうこ）・サザンカ（CV.根本京里）・アサガオ（CV.鈴代紗弓） | ED1 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-2` | あかね組活動日誌 ～未班～／ベニスモモ（CV.山根綺）・ミズバショウ（CV.石見舞菜香）・トウワタ（CV.富田美憂） | ED2 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-3` | あかね組活動日誌 ～巳班～／ウイキョウ（CV.朝日奈丸佳）・キキョウ（CV.田中美海） | ED3 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-4` | あかね組活動日誌 ～申班～／モクレン（CV.羊宮妃那）・ツワブキ（CV.広瀬ゆうき）・ホウセンカ（CV.河野ひより） | ED4 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-5` | あかね組活動日誌 ～丑班～／シオン（CV.長谷川育美）・スズラン（CV.遠野ひかる）・アジサイ（CV.古賀葵） | ED5 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-6` | あかね組活動日誌 ～寅班～／フキ（CV.南真由）・イタドリ（CV.七瀬彩夏）・ウメ（CV.和多田美咲） | ED6 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-7` | あかね組活動日誌 ～辰班～／ヒギリ（CV.貫井柚佳）・スズシロ（CV.高田憂希）・ハス（CV.佳原萌枝） | ED7 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-8` | あかね組活動日誌 ～亥班～／ドクダミ（CV.川井田夏海）・アオギリ（CV.小市眞琴）・シャクヤク（CV.土屋李央） | ED8 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-9` | あかね組活動日誌 ～酉班～／スミレ（CV.ファイルーズあい）・アザミ（CV.朝井彩加）・タンポポ（CV.井上ほの花） | ED9 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-10` | あかね組活動日誌 ～子班～／タチアオイ（CV.市ノ瀬加那）・ヒグルマ（CV.峯田茉優）・ハギ（CV.近藤玲奈） | ED10 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-11` | あかね組活動日誌 ～卯班～／カゲツ（CV.会沢紗弥）・ホトトギス（CV.幸村恵理）・ムクゲ（CV.伊藤彩沙） | ED11 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-12` | あかね組活動日誌 ～午班～／ヒナギク（CV.高野麻里佳）・キブシ（CV.長縄まりあ）・オニユリ（CV.大地葉） | ED12 | 2022-spring |
| `kunoichi-tsubaki-no-mune-no-uchi-ed-13` | あかね組活動日誌 ～ねうしとらうたつみうまひつじさるとりいぬい大集合！～／リンドウ、キブシ、ヒナギク、トウワタ、スズシロ、タンポポ、ドクダミ、ミズバショウ、ツバキ、サザンカ、アサガオ、ベニスモモ、シオン、ウイキョウ、キキョウ、モクレン、ツワブキ、ホウセンカ、スズラン、アジサイ、ウメ、イタドリ、フキ、ヒギリ、ハス、アオギリ、シャクヤク、スミレ、アザミ、タチアオイ、ヒグルマ、ハギ、カゲツ、ホトトギス、ムクゲ、オニユリ | ED13 | 第一方身分／用途待核，原入口保留 |
| `kaguya-sama-wa-kokurasetai-ultra-romantic-op-1` | GIRI GIRI／鈴木雅之 feat. すぅ | OP1 | 2022-spring |
| `kaguya-sama-wa-kokurasetai-ultra-romantic-ed-1` | ハートはお手上げ／鈴木愛理 | ED1 | 2022-spring |
| `kaguya-sama-wa-kokurasetai-ultra-romantic-ed-2` | My Nonfiction／白銀御行（CV:古川慎）& 藤原千花（CV:小原好美） | ED2 | 2022-spring |
| `dance-dance-danseur-op-1` | 鳴り響く限り／YUKI | OP1 | 2022-spring |
| `dance-dance-danseur-ed-1` | 風、花／ヒトリエ | ED1 | 2022-spring |
| `ao-ashi-op-1` | 無心拍数／[Alexandros] | OP1 | 2022-spring |
| `ao-ashi-op-2` | Presence／Superfly | OP2 | 2022-summer |
| `ao-ashi-ed-1` | Blue Diary／Rin音 | ED1 | 2022-spring |
| `ao-ashi-ed-2` | カラー・リリィの恋文／神はサイコロを振らない | ED2 | 2022-summer |
| `spy-x-family-op-1` | ミックスナッツ／Official髭男dism | OP1 | 2022-spring |
| `spy-x-family-ed-1` | 喜劇／星野源 | ED1 | 2022-spring |
| `spy-x-family-in-1` | TBD／(K)NoW_NAME | IN1 | 2022-spring |
| `date-a-live-iv-op-1` | OveR／富田美憂 | OP1 | 2022-spring |
| `date-a-live-iv-ed-1` | S.O.S／sweet ARMS | ED1 | 2022-spring |
| `machikado-mazoku-2-choume-op-1` | ときめきランデヴー／shami momo（吉田優子・千代田桃） | OP1 | 2022-spring |
| `machikado-mazoku-2-choume-ed-1` | 宵加減テトラゴン／コーロまちカド（シャミ子・桃・リリス・ミカン） | ED1 | 2022-spring |

- 公開anime ID：`curated-141350`、`curated-125367`、`curated-132171`、`curated-134732`、`curated-140960`、`curated-116605`、`curated-123330`。更正0個原名、15個演唱名義；同頁補49項詞／曲／編及46項演唱（按用途計）。新增1筆用途／1個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,793用途（4,552 OP／ED、231 IN、10 TS）均有dataStatus；2,088筆基本逐欄證據、2,705筆來源待細分。2,942個唯一用途逐批處理，其中2,701 OP／ED、231 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有18筆真正重讀舊來源更新日期。其他2,045部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 原29用途的ID、type、sequence、已有songID與媒體保留。raw theme可以沒有id，依原API type／sequence精確對應。TBD為官方原曲名，不是placeholder；只加IN1及其自身已讀原期官網逐話公告／中文第5話CC，raw links空，不承襲舊AnimeThemes、OPED影片、錄音或發行。builder只可補exact動畫首頁入口，不能當作媒體完成。
- 女忍者椿的心事原4/9(土)24:00即實曆4/10 00:00。12個已證輪替ED各以官方原期逐話公告直接歌：角色(CV)保存正式名義及本曲實唱，僅spring；ED企劃明全ED作詞くまのきよみ，只有戌班曲編白戸佑輔可補，不外推其他作家名單。OP credits空，不套ED作詞企劃、不由band簡介補詞曲或歌唱。
- 女忍者ED13全員版只有第一方曲名，未得可讀逐曲正式歌唱與第13話TV ED正文，保原36角色名義、ID／ED13／序號及媒體，quarters空且held／unverifiedSong／omitVocalFallback；第一方song只title、無正面first_party anime_use，交叉候選用途亦排除，不合併13版歌曲。已明ED企劃作詞仍保留；解除條件是原官方逐話credit或可讀公告。OP已證spring、7月逐曲用途仍缺，保1partial。
- 輝夜第三期原TV4/8 24:00即4/9 00:00；正式入口改/3rd/，普通搜尋索引可確認原期首頁但正文503，如實標示限制。既有root來源日期9/01保留，不把後續新作首頁當第三期。原公告明GIRI GIRI／鈴木雅之 feat.すぅ及ハートはお手上げ／鈴木愛理，詞曲編明示；第5話My Nonfiction保正式大小寫、角色演唱及本曲LCA，中文同歌大小寫只作已列artist範圍交叉。商品OST收錄不自動新增IN。
- 約會大作戰IV原AT-X4/8 22:00最早TV；dアニメ23:00地上波先行WEB晚於AT-X，MX等25:00不是原首播。OveR／富田美憂、S.O.S／sweet ARMS與詞曲編同頁可證，團體不推每位cast歌唱；兩曲spring。
- まちカドまぞく2丁目原TBS4/7深夜1:28即4/8 01:28。兩曲本曲團隊、CV及LCA在原主題歌公告明示；原TV最後一話節目日6/30換實曆7/1使動畫跨summer，但未得逐曲最終話credit，兩曲只spring各保partial，不由作品末日、商品TV size擴歌曲季。
- Aoashi原小学館2022/4/9當日公告明18:25；當前首頁為2026重播，不當原期。原Music明第一cour兩曲及其LCA，第二cour兩曲分列；藝人原公告明第二cour／Presence 7/2開始，串中文#13–24日期，只把後兩曲列summer，前兩曲spring。團體留言成員職位不當本曲逐人實唱。
- SPY×FAMILY用原第一cour專頁及2022/3/7播出公告：4/9 23:00，OPミックスナッツ／Official髭男dism、ED喜劇／星野源只spring；現通用Music已是Season3，不用作本期正面證據。TBD官網原第5話明插曲／(K)NoW_NAME，歌唱Ayaka Tachibana、詞AIJ、曲編Makoto Miyazaki逐列，只有本曲明示個別vocals，不由團體名單擴展。
- Dance Dance Danseur原4/8 25:25即4/9 01:25，與2023配信擴大分開。根頁503與/music不可讀，改從原onair、真CD導覽取得曲名／名義／用途。OP鳴り響く限り／YUKI、ED風、花／ヒトリエ均spring，Sony正文明ED詞シノダ／曲ゆーまお；文末BD誤寫OP不推翻動畫官網與正文一致分類，也不從成員職位推本曲歌唱。
- 所有metadata基準9/01與逐URL22實讀分開，未重讀AnimeThemes／YouTube／root與其他來源維持原日期。firstPartySongFields、useOnlySources、creditSources、date-only與交叉欄位限制依facts，不把credit-only頁當identity或usage。全目錄195筆空季度、129筆非空季度缺口待實際proof替換。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 7部30筆與未選資料保留性通過。Chromium393×852全部30筆狀態、10季度／30用途篩選、8搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第117–120批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider7部30筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗7頁30組狀態、10季度、30用途過濾、8搜尋、7筆TV／待核狀態展示、1用途待核、0非空季度基本證據缺口及3部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 只替換2022/spring.ts七個已選原seed物件與必要跨季registry。JSON literal reader不import seed module；registry先排除原生seed map及numeric AnimeIds尾端。未選owner物件原文字節、其他seed module及全部未選公開JSON按SHA-256保全。沒有parser／gate／UI／依賴改動。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/kunoichi-tsubaki-no-mune-no-uchi/、http://127.0.0.1:4345/anime/kaguya-sama-wa-kokurasetai-ultra-romantic/、http://127.0.0.1:4345/anime/dance-dance-danseur/。 第119批2022春既有作品10部27筆既有用途已登記：`curated-132010`、`curated-133175`、`curated-132474`、`curated-135384`、`curated-138459`、`curated-142984`、`curated-111321`、`curated-130319`、`curated-130586`、`curated-132532`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-112（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原22用途加3筆已證新用途，共25筆：24筆基本逐欄證據、1筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `kinsou-no-vermeil-gakeppuchi-majutsushi-wa-saikyou-no-yakusai-to-mahou-sekai-wo-tsukisusumu-op-1` | Abracada-Boo／石原夏織 | OP1 | 2022-summer |
| `kinsou-no-vermeil-gakeppuchi-majutsushi-wa-saikyou-no-yakusai-to-mahou-sekai-wo-tsukisusumu-ed-1` | Mortal With You／Mili | ED1 | 2022-summer |
| `made-in-abyss-retsujitsu-no-ougonkyou-op-1` | かたち／安月名莉子 | OP1 | 2022-summer |
| `made-in-abyss-retsujitsu-no-ougonkyou-ed-1` | Endless Embrace／MYTH & ROID | ED1 | 2022-summer |
| `tokyo-mew-mew-new-op-1` | Cat!!してSuperGirls／Smewthie | OP1 | 2022-summer |
| `tokyo-mew-mew-new-ed-1` | トキメキ☆イチゴいちえ／Smewthie | ED1 | 2022-summer |
| `tokyo-mew-mew-new-ed-2` | my sweet heart（にゅ～♡ver.）／桃宮いちご（CV：天麻ゆうき） | ED2 | 2022-summer |
| `tokyo-mew-mew-new-in-1` | I believe／藤原ざくろ（CV：石井萌々果） | IN1 | 2022-summer |
| `tokyo-mew-mew-new-in-2` | 私を呼ぶ声／藤原ざくろ（CV：石井萌々果） | IN2 | 2022-summer |
| `tokyo-mew-mew-new-in-3` | my sweet heart（にゅ～♡ver.）／桃宮いちご（CV：天麻ゆうき） | IN3 | 2022-summer |
| `jashin-chan-dropkick-x-op-1` | あれこれドラスティック feat. 鈴木愛奈／halca | OP1 | 2022-summer |
| `jashin-chan-dropkick-x-ed-1` | 流線形メーデー／花譜×可不 | ED1 | 2022-summer |
| `jashin-chan-dropkick-x-ed-2` | サンキュードロップキック！／邪神ちゃん（CV：鈴木愛奈）＆初音ミク | ED2 | 第一方身分／用途待核，原入口保留 |
| `isekai-oji-san-op-1` | story／前島麻由 | OP1 | 2022-summer |
| `isekai-oji-san-ed-1` | 一番星ソノリティ／井口裕香 | ED1 | 2022-summer |
| `mamahaha-no-tsurego-ga-motokano-datta-op-1` | デネブとスピカ／DIALOGUE＋ | OP1 | 2022-summer |
| `mamahaha-no-tsurego-ga-motokano-datta-ed-1` | ふたりピノキオ／harmoe | ED1 | 2022-summer |
| `warau-arsnotoria-sun-op-1` | はじまりへと続く場所／ハナウタ（第五寮） | OP1 | 2022-summer |
| `warau-arsnotoria-sun-ed-1` | With you／cluppo | ED1 | 2022-summer |
| `kumichou-musume-to-sewagakari-op-1` | 未来のヒーローたちへ／タケヤキ翔 | OP1 | 2022-summer |
| `kumichou-musume-to-sewagakari-ed-1` | かえりみちの色／渋谷ハル | ED1 | 2022-summer |
| `shin-tennis-no-ouji-sama-u-17-world-cup-op-1` | I can fly／YOSHIKI EZAKI x Bleecker Chrome | OP1 | 2022-summer |
| `shin-tennis-no-ouji-sama-u-17-world-cup-ed-1` | Dear Friend／テニプリアーティスターズ | ED1 | 2022-summer |
| `soredemo-ayumu-wa-yosetekuru-op-1` | 駆け引きはポーカーフェイス／花澤香菜 | OP1 | 2022-summer |
| `soredemo-ayumu-wa-yosetekuru-ed-1` | 50センチ／八乙女うるし（CV：中村カンナ） | ED1 | 2022-summer |

- 公開anime ID：`curated-146210`、`curated-114745`、`curated-117196`、`curated-124641`、`curated-135806`、`curated-136934`、`curated-149874`、`curated-138882`、`curated-140187`、`curated-128223`。更正2個原名、13個演唱名義；同頁補55項詞／曲／編及20項演唱（按用途計）。新增3筆用途／2個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,736用途（4,515 OP／ED、211 IN、10 TS）均有dataStatus；1,938筆基本逐欄證據、2,798筆來源待細分。2,769個唯一用途逐批處理，其中2,548 OP／ED、211 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 金装のヴェルメイユ原TV7月5日22:30，ABEMA地上波同時23:00較後；兩曲原名、石原夏織／Mili名義及LCA已明，Mortal With You原曲與Japanese ver.作者不混填，商品TV size不當本輪音源完成。
- メイドインアビス烈日の黄金郷原TV7月6日22:30。保已刊かたちOP1及Endless Embrace ED1；raw OP2かたち經既有override映公開OP1，raw OP1 GRAVITY既有排除物件完整保留，不計公開old／held、不由OST曲表解除排除或新增IN，不改正常程式。
- 東京ミュウミュウにゅ～♡原TV7月5日24:00，即實曆7月6日00:00，原12話與2023第二期分開。正常OP／ED與同頁LCA已明；Smewthie團體名義不由cast推每位實唱。
- 東京第12話my sweet heart（にゅ～♡ver.）原公告明IN、原BD明同版特殊ED。保原ED2並新增獨立IN3共原ED2歌曲ID；另增第4話I believe與第6話私を呼ぶ声兩首已雙證IN。新增3用途但只新增2歌曲身分，不新建錄音、影片、發行品或平台，新IN不繼承舊AT／媒體。
- 邪神ちゃんドロップキックX原TV7月6日02:05。兩正常歌基本證據已明；サンキュードロップキック！身分、名義及LCA有一方，但本期第9話特殊ED仍缺明確第一方，保原ED2 held空季度，不由官方MV推TV用途。
- 異世界おじさん原首TV日期7月6日有官方，原首時分待核；6月先行、10月重啟與原首日分開。動畫原期summer／fall／2023-winter關聯保留，story與一番星ソノリティ僅夏季逐曲可證，秋冬延用兩筆partial，不由整部延播補歌季。
- 継母の連れ子が元カノだった原TV7月6日21:00；DIALOGUE＋及harmoe兩正常曲與同頁已明LCA補入，團體介紹不作全員逐曲實唱。咲うアルスノトリアすんっ！原TV同日21:30，ハナウタ（第五寮）本曲五CV由官方歌曲欄明列，cluppo詞作自述只補已證角色，不移植遊戲作者。
- 組長娘と世話係原TV7月7日22:30，先行ピクチャードラマ另作短篇，不當本篇TV首播；兩正常曲名義與ANCHOR詞曲編已明。新テニスの王子様U-17 WORLD CUP原首TV7月6日24:00，即實曆7月7日00:00，2024／2026章分開；Dear Friend已證一名詞作者不等於共同名單完整，缺口保留，不推團體全員實唱。
- それでも歩は寄せてくる原首TV7月8日01:35，首話特別時刻與常規01:28分開；OP原名／花澤香菜及已明LCA、ED八乙女うるしCV中村カンナ名義補入，未FP作者保持待核。
- 保22個公開原用途ID、序號與歌曲關係；Abyss只有既有raw2／public1對應，其他原序號不normalize。來源逐URL按實讀日期處理，未重讀舊源／日期保持，作者有已知角色也不代表全名單完成。未選公開JSON應一致；全目錄172筆空季度與114筆非空季度條件待集中proof實數替換，詳細階段與整體目標未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部25筆與未選資料保留性通過。Chromium393×852全部25筆狀態、11季度／3用途篩選、13搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第109–112批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider10部25筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁25組狀態、11季度、3用途過濾、13搜尋、10筆TV／待核狀態展示、1待核及2部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批10部原期資料、3筆已證東京IN、已證動畫季度關聯、欄位盤點及同一checkpoint。native-safe registry排除原生seed、export數字尾端及既存literal；Abyss排除raw物件和app/parser完整保持，無其他程式、UI或依賴改動。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/kinsou-no-vermeil-gakeppuchi-majutsushi-wa-saikyou-no-yakusai-to-mahou-sekai-wo-tsukisusumu/、http://127.0.0.1:4345/anime/made-in-abyss-retsujitsu-no-ougonkyou/、http://127.0.0.1:4345/anime/tokyo-mew-mew-new/。 接第113批2022夏8部30筆既有用途：`curated-141391`、`curated-146650`、`curated-139093`、`curated-144323`、`curated-144509`、`curated-145260`、`curated-136707`、`curated-145001`；已登記的並行來源查核不預計為公開資料完成。

## 第109–112批合併正式驗收

- 四批31部標準TV既有作品、114筆用途；新增11筆插曲／9個歌曲身分，95筆基本證據、19筆待核及8筆非空季度條件保留。原ID、序號、媒體與未重讀來源日期保留。
- [PR #196](https://github.com/kyeunga25/anisonary/pull/196)與main同樹的正常quality／Workers檢查通過；完整gate採正常PR與main CI實際verify:full（含audit及必要E2E），未把失敗或未完成本機full計為通過，沒有放寬gate。來源`af879b4dd91813eeb0553157f2e17856ce409261`／`batch112-basics`；固定產物已部署，版本metadata來源／tag／PR相符。
- 四批31部114筆正式ApiProvider與本機相同，134條HTML／JSON／季度／搜尋資產逐檔符合凍結產物，另2條真404。第112批API／routes由上述成功superset依精確公開物件派生，未重複HTTP；10部25筆另有實際production Chromium手機／桌面與搜尋互動驗證，截圖已檢視；沒有把其餘三批宣稱為本次production瀏覽器重測。
- 同步修正既有來源隔離測試，以明確公開ID處理原始／公開用途序號映射；產品映射、精確來源集合及第一方／交叉來源檢查維持。測試修正已獨立提交並通過正常完整CI。
- 本批正式驗收完成；基本、詳細及長期範圍仍未完成。

## 2020-2026-tv-basics-113（隨第116批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。8部、原30用途加8筆已證新用途，共38筆：33筆基本逐欄證據、5筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `yofukashi-no-uta-op-1` | 堕天／Creepy Nuts | OP1 | 2022-summer |
| `yofukashi-no-uta-ed-1` | よふかしのうた／Creepy Nuts | ED1 | 2022-summer |
| `yofukashi-no-uta-in-1` | ロスタイム／Creepy Nuts | IN1 | 2022-summer |
| `bucchigire-op-1` | 一番光れ！-ブッチギレ-／西川貴教 | OP1 | 2022-summer |
| `bucchigire-ed-1` | 断罪デモクラシー／自象存在name-less | ED1 | 2022-summer |
| `shadows-house-2nd-season-op-1` | シャル・ウィ・ダンス？／ReoNa | OP1 | 2022-summer |
| `shadows-house-2nd-season-ed-1` | Masquerade／ClariS | ED1 | 2022-summer |
| `hoshi-no-samidare-op-1` | 暁光／Half time Old | OP1 | 2022-summer |
| `hoshi-no-samidare-op-2` | BE the HERO／Raon | OP2 | 2022-fall |
| `hoshi-no-samidare-ed-1` | Reflexion／SpendyMily | ED1 | 2022-summer |
| `hoshi-no-samidare-ed-2` | ZERO／Sano ibuki | ED2 | 2022-fall |
| `hoshi-no-samidare-ed-3` | Babylon 天使の詩／the pillows | ED3 | 第一方身分／用途待核，原入口保留 |
| `prima-doll-op-1` | Tin Toy Melody／シャノワール | OP1 | 2022-summer |
| `prima-doll-ed-1` | 薄花桜／灰桜（CV. 和氣あず未） | ED1 | 2022-summer |
| `prima-doll-ed-2` | 待宵月／月下（CV. 富田美憂） | ED2 | 2022-summer |
| `prima-doll-ed-3` | 星導～ホシシルベ～／箒星（CV. 中島由貴） | ED3 | 2022-summer |
| `prima-doll-ed-4` | ツギハギ／鴉羽（CV. 楠木ともり） | ED4 | 2022-summer |
| `prima-doll-ed-5` | 雨の迷い猫／灰桜（CV. 和氣あず未）＆レーツェル（CV. 鬼頭明里） | ED5 | 2022-summer |
| `prima-doll-ed-6` | 夢咲＊ハレ舞台／シャノワール | ED6 | 2022-summer |
| `prima-doll-ed-7` | 想歌灯／シャノワール | ED7 | 2022-summer |
| `prima-doll-in-1` | カミツレの歌／灰桜（CV. 和氣あず未）、千代（CV. 久野美咲）、夕霧（CV. 小松未可子） | IN1 | 2022-summer |
| `prima-doll-in-2` | 華羽織／灰桜（CV. 和氣あず未）、鴉羽（CV. 楠木ともり） | IN2 | 2022-summer |
| `prima-doll-in-3` | 月来香／月下（CV. 富田美憂） | IN3 | 2022-summer |
| `prima-doll-in-4` | 祝彩歌／灰桜（CV. 和氣あず未） | IN4 | 2022-summer |
| `prima-doll-in-5` | アイスクリームの歌／灰桜（CV. 和氣あず未）＆千代（CV. 久野美咲） | IN5 | 2022-summer |
| `prima-doll-in-6` | 時のゆりかご／桜花（CV. 中原麻衣） | IN6 | 2022-summer |
| `prima-doll-in-7` | 機械仕掛けの賛歌／シャノワール | IN7 | 2022-summer |
| `kuro-no-shoukanshi-op-1` | 頭ん中DEAD END／レトベア（unknown Vo：10fu） | OP1 | 2022-summer |
| `kuro-no-shoukanshi-ed-1` | Wherever／鈴木みのり | ED1 | 2022-summer |
| `kuro-no-shoukanshi-ed-2` | Wherever remix／鈴木みのり | ED2 | 第一方身分／用途待核，原入口保留 |
| `isekai-yakkyoku-op-1` | 夢想的クロニクル／石原夏織 | OP1 | 2022-summer |
| `isekai-yakkyoku-ed-1` | 白雨／Little Black Dress | ED1 | 2022-summer |
| `extreme-hearts-op-1` | インフィニット／岡咲美保 | OP1 | 2022-summer |
| `extreme-hearts-ed-1` | SUNRISE（Ver.First 2）／葉山陽和（CV：野口瑠璃子）、小鷹咲希（CV：岡咲美保） | ED1 | 2022-summer |
| `extreme-hearts-ed-2` | SUNRISE (Ver. Starting 3)／Miho Okasaki、Ruriko Noguchi、Kana Yuuki | ED2 | 第一方身分／用途待核，原入口保留 |
| `extreme-hearts-ed-3` | SUNRISE (Ver. Untie 4)／Miho Okasaki、Ruriko Noguchi、Kana Yuuki、Ayaka Fukuhara | ED3 | 第一方身分／用途待核，原入口保留 |
| `extreme-hearts-ed-4` | SUNRISE（ver.RISE）／RISE | ED4 | 2022-summer |
| `extreme-hearts-ed-5` | SUNRISE（ver. Summer memories）／RISE | ED5 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-141391`、`curated-146650`、`curated-139093`、`curated-144323`、`curated-144509`、`curated-145260`、`curated-136707`、`curated-145001`。更正4個原名、14個演唱名義；同頁補73項詞／曲／編及50項演唱（按用途計）。新增8筆用途／8個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,744用途（4,515 OP／ED、219 IN、10 TS）均有dataStatus；1,971筆基本逐欄證據、2,773筆來源待細分。2,807個唯一用途逐批處理，其中2,578 OP／ED、219 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有15筆真正重讀舊來源更新日期。其他2,044部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- よふかしのうた原TV首話7/7 25:05–25:35，即實曆7/8 01:05；不套常規24:55或後年再播25:45。堕天／よふかしのうた正式Creepy Nuts名義與原期OPED核對；新增ロスタイム為本期插曲，由自身官方與新讀交叉來源支持，不從團體名冊推兩成員皆實唱，保舊root／影片／AnimeThemes未讀日期。
- ブッチギレ！原TV7/8 22:30最早，Prime Video／ひかりTV同時WEB另列。OP一番光れ！-ブッチギレ-／西川貴教、ED断罪デモクラシー／自象存在name-less依原期Music保存，未明逐曲作者不由一般藝人簡介補LCA；既有ID／序號／媒體不變。
- シャドーハウス2nd原TV7/8 24:00即7/9 00:00，Prime Video24:30較後。シャル・ウィ・ダンス？／ReoNa與Masquerade／ClariS依本期官方曲表核，歌名採第一方原文；同頁明示ED作者順手補，團體簡介不推每員歌唱；實讀精確根頁URL與未讀舊root分開保日期。
- 惑星のさみだれ原TV7/8 25:55即7/9 01:55，較後WEB不移TV首日。前cour兩曲只summer、後cour兩曲依10月原期具名公告與交叉逐曲為fall；作品24話不自動擴每曲。Babylon 天使の詩／the pillows原ED3精確原名及本期特殊ED第一方未能直接讀取，held且unverifiedSong；英文CC引用作者tweet不升第一方，保ID／候選名義與空季度，不合併歌曲。
- プリマドール原TV7/8 24:30即7/9 00:30；ABEMA7/3 23:30為先行WEB。8筆原OPED與各少人歌唱依本期直接曲表核，不從cast名冊或商品版本推用曲。新增カミツレの歌、華羽織、月来香、祝彩歌、アイスクリームの歌、時のゆりかご、機械仕掛けの賛歌七首明證IN，各自保第一方／交叉／已明詞曲編與實唱，不由黑貓亭翻唱、Blu-ray商品或原ED其他話場景評論推更多用途。
- 黒の召喚士原出版社2022期公告支持TV7/9，最早TV精確分鐘仍缺，保持空並留續查，不移植歌曲配信零時或海外平台時區。頭兩主題曲原名／本曲名義／用途可證；Wherever remix只商品精確身份與鈴木みのり可證，本期本版ED未明而held；firstPartySongFields限title／artist、useOnlySources空，不啟用共同canonical或沿原曲編曲。metadata基準9/01及未讀root／AT保留。
- 異世界薬局原AT-X7/10 21:30最早，dアニメ23:00地上波先行仍較AT-X晚。夢想的クロニクル／石原夏織與白雨／Little Black Dress由Music直接原名／用途／正式演唱及LCA核；詞作保存Little Black Dress正式名義，不由CC的RYO推個人別名，兩曲summer。
- Extreme Hearts原TV7/9 25:30即7/10 01:30，WEB26:00較後；10月北海道後播與CS一挙不擴歌曲fall。インフィニット及SUNRISE First 2／RISE版有逐版原期官方用途與已明LCA／本曲實唱；Starting 3、Untie 4、Summer memories三候選身份與TV用途未明，held且不補歌唱。官網關聯頁只background extraSources，不生成identity／anime_use／credits；Unite／Untie字形衝突未猜改，不做canonical。
- 30筆原用途ID、序號、既有songID、舊媒體／外連與未讀來源日期保持。新8IN raw links空、無影片／錄音／發行／平台；API builder僅可補exact動畫首頁入口，該fallback不算媒體或正版平台完成。全目錄177筆空季度及114筆非空季度條件待proof實數替換；基本、詳細與作品聯集仍有缺口。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 8部38筆與未選資料保留性通過。Chromium393×852全部38筆狀態、10季度／3用途篩選、16搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第113–116批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider8部38筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗8頁38組狀態、10季度、3用途過濾、16搜尋、8筆TV／待核狀態展示、5待核及0部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批2022-summer選定8個seed物件、已證動畫跨季registry缺項、必要盤點與同一checkpoint。registry排除target seed map、AnimeIds numeric尾端與既有literal，避免重加原生ID；未選定raw物件原文字串及所有未選定公開anime JSON以hash嚴格保全，不改parser／UI／依賴。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/yofukashi-no-uta/、http://127.0.0.1:4345/anime/bucchigire/、http://127.0.0.1:4345/anime/shadows-house-2nd-season/。 接第114批2022夏7部23筆既有用途：`curated-146637`、`curated-140753`、`curated-130592`、`curated-140642`、`curated-129196`、`curated-149326`、`curated-153412`；已登記的並行來源查核不預計為公開資料完成。

### 已登記後續範圍（沿用）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日；既有範圍登記與來源查核狀態保留，未驗證內容不計完成。
- 已登記2022-summer 8部30筆既有用途：`curated-141391`、`curated-146650`、`curated-139093`、`curated-144323`、`curated-144509`、`curated-145260`、`curated-136707`、`curated-145001`。原TV／季度、原名、演唱名義、用途及第一方／交叉來源優先；兩輪未明記具體續查，詳細及特殊／短篇格式延後。
- 整合基準已由第112批真正main及固定產物重新取得；可靠前批來源`af879b4`／`batch112-basics`。8部30筆原ID與未重讀來源日期保留，已審閱事實仍待集中整合及必要驗證。
- 第113–116批為下一組整合發布；逐批先做必要本機資料／展示驗證及分類提交，第116批集中正式驗收。第115批基線沿第114批已驗證本機stage刷新，不要求第114批獨立正式發布。

## 2020-2026-tv-basics-119（隨第120批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原27用途加1筆已證新用途，共28筆：22筆基本逐欄證據、6筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `koi-wa-sekai-seifuku-no-ato-de-op-1` | 恋はエクスプロージョン（feat.田村ゆかり）／オーイシマサヨシ feat. 田村ゆかり | OP1 | 2022-spring |
| `koi-wa-sekai-seifuku-no-ato-de-op-2` | 恋はエクスプロージョン（feat.カルバリンベア[CV:安元洋貴]）／オーイシマサヨシ feat. カルバリンベア（CV.安元洋貴） | OP2 | 第一方身分／用途待核，原入口保留 |
| `koi-wa-sekai-seifuku-no-ato-de-ed-1` | 恋は世界定理と共に／DIALOGUE＋ | ED1 | 2022-spring |
| `mahoutsukai-reimeiki-op-1` | dawn of infinity／fripSide | OP1 | 2022-spring |
| `mahoutsukai-reimeiki-ed-1` | インプリンティング／▽▲TRiNITY▲▽ | ED1 | 2022-spring |
| `gaikotsu-kishi-sama-op-1` | 嗚呼、我が浪漫の道よ／PelleK | OP1 | 2022-spring |
| `gaikotsu-kishi-sama-ed-1` | 僕らが愚かだなんて誰が言った／DIALOGUE＋ | ED1 | 2022-spring |
| `shachiku-san-wa-youjo-yuurei-ni-iyasaretai-op-1` | Cherish／石原夏織 | OP1 | 2022-spring |
| `shachiku-san-wa-youjo-yuurei-ni-iyasaretai-ed-1` | 聴こえる？／内田真礼 | ED1 | 2022-spring |
| `heroine-tarumono-op-1` | ジュリエッタ／LIP×LIP | OP1 | 2022-spring |
| `heroine-tarumono-ed-1` | 東京サニーパーティー／涼海ひより（CV：水瀬いのり）、服部樹里（CV：佐倉綾音）、中村千鶴（CV：早見沙織） | ED1 | 2022-spring |
| `heroine-tarumono-ed-2` | 可愛くなりたい／涼海ひより（CV：水瀬いのり）、瀬戸口雛（CV：麻倉もも） | ED2 | 第一方身分／用途待核，原入口保留 |
| `heroine-tarumono-ed-3` | ロメオ／榎本虎太朗（CV：花江夏樹）、柴崎健（CV：江口拓也） | ED3 | 第一方身分／用途待核，原入口保留 |
| `heroine-tarumono-ed-4` | 夢ファンファーレ／HoneyWorks feat. 成海聖奈・成海萌奈（CV：雨宮天・夏川椎菜） | ED4 | 2022-spring |
| `heroine-tarumono-ed-5` | ヒロイン育成計画／服部樹里（CV：佐倉綾音）、涼海ひより（CV：水瀬いのり）、中村千鶴（CV：早見沙織） | ED5 | 第一方身分／用途待核，原入口保留 |
| `komi-san-wa-comyushou-desu-2nd-season-op-1` | 青100色／伊藤美来 | OP1 | 2022-spring |
| `komi-san-wa-comyushou-desu-2nd-season-ed-1` | 小喋日和／FantasticYouth | ED1 | 2022-spring |
| `tate-no-yuusha-no-nariagari-season-2-op-1` | Bring Back／MADKID | OP1 | 2022-spring |
| `tate-no-yuusha-no-nariagari-season-2-ed-1` | ゆずれない／藤川千愛 | ED1 | 2022-spring |
| `rpg-fudousan-op-1` | Make Up Life!／風色琴音（CV：井上ほの花）、ファー（CV：木野日菜）、ルフリア（CV：川井田夏海）、ラキラ（CV：石見舞菜香） | OP1 | 2022-spring |
| `rpg-fudousan-ed-1` | Awesome！／まねきケチャ | ED1 | 2022-spring |
| `rpg-fudousan-ed-2` | 竜の歌／ポーラ、風色琴音 | ED2 | 第一方身分／用途待核，原入口保留 |
| `murabito-a-op-1` | Be My Friend!!!／大橋彩香 | OP1 | 2022-spring |
| `murabito-a-ed-1` | reincarnation／ChouCho | ED1 | 2022-spring |
| `deaimon-op-1` | 菫／坂本真綾 | OP1 | 2022-spring |
| `deaimon-ed-1` | ここにある約束／であいもん | ED1 | 2022-spring |
| `deaimon-ed-2` | オーランドー／納野和（CV：島﨑信長） | ED2 | 第一方身分／用途待核，原入口保留 |
| `deaimon-in-1` | 八重に咲く／堀河美弦（CV：鈴木みのり） | IN1 | 2022-spring |

- 公開anime ID：`curated-132010`、`curated-133175`、`curated-132474`、`curated-135384`、`curated-138459`、`curated-142984`、`curated-111321`、`curated-130319`、`curated-130586`、`curated-132532`。更正3個原名、5個演唱名義；同頁補32項詞／曲／編及20項演唱（按用途計）。新增1筆用途／1個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,794用途（4,552 OP／ED、232 IN、10 TS）均有dataStatus；2,110筆基本逐欄證據、2,684筆來源待細分。2,970個唯一用途逐批處理，其中2,728 OP／ED、232 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有10筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 原27用途的ID、type、sequence、已有songID與媒體保持；英文候選曲名更正原文時，保既有titleRomaji。新IN1只帶自身已讀來源，raw links與媒體空；builder只可補exact動畫首頁入口，不算錄音／影片／發行已完成。
- 戀愛要在世界征服後原AT-X4/8 21:30，現官網2023配信重開另列。常規OP男女duet有本曲明示及大石昌良詞曲編，ED正式DIALOGUE＋及本曲作者明示，未推全員歌唱。熊版OP2只在官方商品曲表證原名與feat.名義；媒體第6話特別OP報導只cross，不冒充第一方。保原OP2／序號及媒體，季度空held、無vocals fallback，不憑同名／商品建立共同song或錄音。
- 魔法使黎明期原TBS4/7深夜1:58即4/8 01:58，公告開頭年份2021誤植與2022公告日期／原期標題分開記錄。主題歌原名dawn of infinity及インプリンティング、詞曲編與個別本曲歌唱由原Music明示。末話節目日6/30換實曆7/1，動畫跨summer；兩曲缺7月逐曲第一方credit，只spring，各保partial／use_quarters續查。
- 骸骨騎士原第一期onair正文直接AT-X木23:30；4/7首日由AT-X原週表可讀搜尋索引明第1話新番，PDF正文404限制如實保存。第一期OP專頁正文明嗚呼、我が浪漫の道よ／PelleK、hotaru詞與eba曲，未明編曲；ED只採官方Music可讀索引明第一期曲名／DIALOGUE＋，正文503，未從中文反填第一方作者。2026第二期另列，不移植後期用途。
- 社畜想被幼女幽靈療癒原AT-X4/7 21:00，先行上映及配信非TV首播。Music同頁明Cherish／石原夏織、聴こえる？／内田真礼與完整詞曲編；OST同名ばーじょん不當新IN或新錄音。
- ヒロイン原MX4/7 22:30。原Music只明ジュリエッタ／LIP×LIP及東京サニーパーティー／三角色歌唱，舊來源標籤「輪替ED」不能擴張正文。HoneyWorks原6/9公告直接第10話夢ファンファーレ特殊ED及HoneyWorks feat.成海姊妹／雨宮天・夏川椎菜，配信6/10不當TV日。可愛くなりたい、ロメオ、ヒロイン育成計画三候選版本缺完整本版FP身份／用途，保ID、舊名義、季度空與unverifiedSong／held，無第一方identity／usage或cast-derived vocals。
- 古見第二期用TV Tokyo原4/6深夜0時換實曆4/7 00:00，當前官網2023重播不當原期。兩曲原Music明青100色／伊藤美来及小喋日和／FantasticYouth；ruby讀音不附入曲名，團體profile不推每位成員本曲詞曲或演唱。
- 盾勇第二期原AT-X4/6 22:00早於同日配信，原期首頁明Bring Back／MADKID與ゆずれない／藤川千愛。RPG不動産原AT-X4/6 21:30，Make Up Life!四角色／CV本曲歌唱明示，Awesome！保團體名義；竜の歌缺FP本版身份及特殊ED用途，保原artist／ID／ED2、空季度held、無cast-derived vocals，普通Music只背景extra。
- 村人A原AT-X4/6 21:00早於配信；原Music／藝人頁明Be My Friend!!!／大橋彩香及reincarnation／ChouCho，ED同頁詞曲ChouCho／編村山☆潤可補；同CD其他作品不移作本期用途。
- 相合之物原AT-X4/6 23:30依原官方節目公告普通索引，正文cache miss；官網4/6 24:30是WEB，分開記錄。OP菫／坂本真綾及EDここにある約束／であいもん、詞曲編同頁直接；project介紹不推兩人全員演唱。オーランドー官方OST證本曲身份及島﨑信長歌唱，但未明第9話ED用途，故identity／本曲vocals可存、無正面FP或CCusage、季度空held。八重に咲く原第2話官方公告明IN及詞曲つじあやの，Music明鈴木みのり本曲歌唱，中文#2與4/13交叉；只新增IN1，不從整張OST擴IN。
- metadataVerifiedAt與未重讀root／AnimeThemes／YouTube等日期保9/01，實讀URL才22。sourceReadNotes保官方索引／正文限制；identity-only、credit-only、date-only及useOnlySources依原facts，不升作精確特殊用途。全目錄201筆空季度、131筆非空季度缺口待實際proof替換。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部28筆與未選資料保留性通過。Chromium393×852全部28筆狀態、11季度／33用途篩選、11搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第117–120批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider10部28筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁28組狀態、11季度、33用途過濾、11搜尋、10筆TV／待核狀態展示、6用途待核、0非空季度基本證據缺口及2部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 只替換2022/spring.ts十個已選原seed物件及必要跨季registry。registry排除原生seed map與numeric AnimeIds尾端；無新增會員即不造空spread。未選owner物件原文字節、其他seed module及未選公開JSON逐一SHA保全。URL僅HTTPS既有canonical規則，root空path補斜線；posterAlt／bannerAlt只有原值完全等於既有title-derived模板且題名確實更正時才允派生更新。沒有parser、gate、UI或依賴修改。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/koi-wa-sekai-seifuku-no-ato-de/、http://127.0.0.1:4345/anime/mahoutsukai-reimeiki/、http://127.0.0.1:4345/anime/gaikotsu-kishi-sama/。 第120批2022春既有作品10部20筆既有用途已登記：`curated-140787`、`curated-140830`、`curated-141014`、`curated-140457`、`curated-133412`、`curated-132526`、`curated-139303`、`curated-142074`、`curated-146865`、`curated-125124`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-114（隨第116批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。7部、原23用途加12筆已證新用途，共35筆：27筆基本逐欄證據、8筆特殊用途待核、8筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `orient-awajishima-gekitou-hen-op-1` | Break it down／花村想太 & Lil' Fang | OP1 | 2022-summer |
| `orient-awajishima-gekitou-hen-ed-1` | 色違いの糸束／梶原岳人 | ED1 | 2022-summer |
| `shine-post-op-1` | ワンダー・スターター／TINGS | OP1 | 2022-summer |
| `shine-post-ed-1` | パレットガールズ／TINGS | ED1 | 2022-summer |
| `shine-post-ed-2` | 一歩前ノセカイ／TiNgS | ED2 | 2022-summer |
| `shine-post-ed-3` | Yellow Rose／TiNgS | ED3 | 2022-summer |
| `shine-post-in-1` | Sweet Surrender／螢 | IN1 | 2022-summer |
| `shine-post-in-2` | Be Your Light!!／TINGS | IN2 | 2022-summer |
| `shine-post-in-3` | GYB!!／HY:RAIN | IN3 | 2022-fall |
| `hataraku-maou-sama-op-1` | WITH／栗林みな実 | OP1 | 2022-summer |
| `hataraku-maou-sama-ed-1` | 水鏡の世界／堀内まり菜 | ED1 | 2022-summer |
| `love-live-superstar-2nd-season-op-1` | WE WILL!!／Liella! | OP1 | 2022-summer |
| `love-live-superstar-2nd-season-ed-2` | 追いかける夢の先で／桜小路きな子（CV：鈴原希実） | ED2 | 第一方身分／用途待核，原入口保留 |
| `love-live-superstar-2nd-season-ed-3` | 追いかける夢の先で／澁谷かのん（CV：伊達さゆり）、唐可可（CV：Liyuu）、嵐千砂都（CV：岬なこ）、平安名すみれ（CV：ペイトン尚未）、葉月恋（CV：青山なぎさ）、桜小路きな子（CV：鈴原希実） | ED3 | 第一方身分／用途待核，原入口保留 |
| `love-live-superstar-2nd-season-ed-4` | 追いかける夢の先で／米女メイ（CV：薮島朱音）、若菜四季（CV：大熊和奏） | ED4 | 第一方身分／用途待核，原入口保留 |
| `love-live-superstar-2nd-season-ed-5` | 追いかける夢の先で／鬼塚夏美（CV：絵森彩） | ED5 | 第一方身分／用途待核，原入口保留 |
| `love-live-superstar-2nd-season-ed-6` | 追いかける夢の先で／Liella! | ED6 | 2022-summer |
| `love-live-superstar-2nd-season-ed-7` | 追いかける夢の先で／葉月恋（CV：青山なぎさ） | ED7 | 第一方身分／用途待核，原入口保留 |
| `love-live-superstar-2nd-season-ed-8` | 追いかける夢の先で／桜小路きな子（CV：鈴原希実）、米女メイ（CV：薮島朱音）、若菜四季（CV：大熊和奏）、鬼塚夏美（CV：絵森彩） | ED8 | 第一方身分／用途待核，原入口保留 |
| `love-live-superstar-2nd-season-ed-9` | 追いかける夢の先で／唐可可（CV：Liyuu）、平安名すみれ（CV：ペイトン尚未） | ED9 | 第一方身分／用途待核，原入口保留 |
| `love-live-superstar-2nd-season-ed-10` | 追いかける夢の先で／澁谷かのん（CV：伊達さゆり） | ED10 | 第一方身分／用途待核，原入口保留 |
| `love-live-superstar-2nd-season-ed-1` | Welcome to 僕らのセカイ／Liella! | IN1 | 2022-summer |
| `love-live-superstar-2nd-season-in-2` | Butterfly Wing／ウィーン・マルガレーテ（CV：結那） | IN2 | 2022-summer |
| `love-live-superstar-2nd-season-in-3` | Go!! リスタート／Liella! | IN3 | 2022-summer |
| `love-live-superstar-2nd-season-in-4` | ビタミンSUMMER！／Liella! | IN4 | 2022-summer |
| `love-live-superstar-2nd-season-in-5` | Sing！Shine！Smile！／Liella! | IN5 | 2022-summer |
| `dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-shin-shou-meikyuu-hen-op-1` | 天灯／sajou no hana | OP1 | 2022-summer |
| `dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-iv-shin-shou-meikyuu-hen-ed-1` | Guide／早見沙織 | ED1 | 2022-summer |
| `saikin-yatotta-maid-ga-ayashii-op-1` | す、好きじゃない！／≠ME | OP1 | 2022-summer |
| `saikin-yatotta-maid-ga-ayashii-ed-1` | 秘密の庭のふたり／堀江由衣 | ED1 | 2022-summer |
| `saikin-yatotta-maid-ga-ayashii-in-1` | 虹の彼方へ／リリス（CV. 高橋李依） | IN1 | 2022-summer |
| `duel-masters-win-op-1` | Step Up／ONE N' ONLY | OP1 | 2022-summer, 2022-fall |
| `duel-masters-win-op-2` | Limitless／ATEEZ | OP2 | 2023-winter |
| `duel-masters-win-ed-1` | WINNING ROAD／上月せれな | ED1 | 2022-summer, 2022-fall |
| `duel-masters-win-ed-2` | FLY AGAIN／MONOLITH | ED2 | 2023-winter |

- 公開anime ID：`curated-146637`、`curated-140753`、`curated-130592`、`curated-140642`、`curated-129196`、`curated-149326`、`curated-153412`。更正1個原名、16個演唱名義；同頁補68項詞／曲／編及31項演唱（按用途計）。新增12筆用途／12個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,756用途（4,518 OP／ED、228 IN、10 TS）均有dataStatus；1,998筆基本逐欄證據、2,758筆來源待細分。2,842個唯一用途逐批處理，其中2,604 OP／ED、228 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,045部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- ORIENT 淡路島激闘編原TV7/11 25:30即實曆7/12 01:30，先行WEB26:00較後。Break it down／花村想太 & Lil' Fang與色違いの糸束／梶原岳人依原第二cour Music直接核用途與名義；OP只列本曲明示兩人歌唱，不由Da-iCE／FAKY名冊填全員，也不移植第一cour Break out作者。本期用途只summer。
- SHINE POST原TV7/12 25:29即7/13 01:29；第10–12話延至秋季，正常OPワンダー・スターター／TINGS與EDパレットガールズ仍只確證summer，各留fall partial。一歩前ノセカイ、Yellow Rose依官方Movie明第4／6話ED，保原ED2／3並採TiNgS名義。新增Sweet Surrender／螢第1話、Be Your Light!!／TINGS第9話、GYB!!／HY:RAIN第10話三IN；前兩夏，第10話官方改期10/4 25:29在秋。正式團體名義不自動展開逐人成員歌唱。
- はたらく魔王さま！！原2022前cour TV7/14 23:30；7/7直前特番不是第一話，2023續cour不同。WITH／栗林みな実與水鏡の世界／堀内まり菜按原期Music的1st OP／ED段及逐曲M1作者核對，沒有把後cour、其他收錄曲或nano.RIPE自我翻唱署名套入原唱；兩曲summer。
- Love Live! Superstar!! 2期原Eテレ7/17 19:00；動畫延至10/9不自動擴每首fall。WE WILL!!與Liella!正常ED版追いかける夢の先で已明原期OPED，秋季逐曲用途各partial。Welcome to 僕らのセカイ第一方明第1話挿入歌，原ed-1 ID／sequence1／songID保持，只將type更正IN，不新增重複IN1。八個少人ED版本的商品身份、逐曲角色歌唱及作者已記，但缺本期逐版官方TV用途，held空季度且不合併canonical。新增IN2 Butterfly Wing、IN3 Go!! リスタート、IN4 ビタミンSUMMER！、IN5 Sing！Shine！Smile！，依官方逐曲話數及中文曲表雙證，均summer；本曲作者／演唱證據與cast名冊分開。
- ダンまちIV 新章 迷宮篇原TV7/22 25:05即7/23 01:05；ABEMA7/21 23:00為較早WEB，另記不作TV首日。天灯／sajou no hana與Guide／早見沙織依本期Music及原2022中文公告核，與2023深章厄災篇分開。末話原TV10/1與WEB9/29不同，兩首只summer，fall逐曲用途各partial；團員介紹不填未明作者或全員歌唱。
- 最近雇ったメイドが怪しい原TV7/23 26:00即7/24 02:00；Bandai／Hulu26:30較後。す、好きじゃない！／≠ME及秘密の庭のふたり／堀江由衣基本用途已明，兩曲秋季逐話一方仍缺而partial，動畫夏秋不套逐曲。ED編曲依歌手官方原文南田健吾，中文交叉的南田建吾不反向覆蓋。新增虹の彼方へ／リリス（CV.高橋李依）IN1，官網正文明第7話初OA並有中文／逐話交叉，不是單憑OST收錄推插曲。
- デュエル・マスターズWIN原TV9/4 08:30、原期至2023/3/26共29話，官方08:30–09:00時段支持標準TV；原零用途作品納入，不因0筆略過。新增OP1 Step Up／ONE N' ONLY、ED1 WINNING ROAD／上月せれな，精確#1–17及官方#17 12/25串證summer／fall；OP2 Limitless／ATEEZ與ED2 FLY AGAIN／MONOLITH為#18–29，Columbia1/8換曲公告、1月曲表與官方#18日期串證winter。後續決闘学園編不同期。官網更新為已實讀原TV Tokyo dm_win首頁並登記22，新四用途只用自身來源；舊Shopro來源維持9/01。標2022.10的TV Tokyo Music表混列後續歌，已排除正面用途。Step Up的Ethan Augustin詞曲角色來源相反，僅收一致JUNE詞曲與Ethan編曲，lyrics／composition仍索引待複核，不阻基本用途。
- 23筆原用途ID／序號／songID、原媒體／外連及未讀來源日期保持，僅上述LL單筆更正type；八個held版本仍空季度，八筆非空季度用途保留partial續查。新增12用途raw links空，無影片／錄音／發行／平台繼承；API builder可補exact動畫首頁fallback，該入口不當媒體或正版平台。全目錄185筆空季度、122筆非空季度缺口待proof實數替換；作品聯集與詳細欄位尚未閉合。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 7部35筆與未選資料保留性通過。Chromium393×852全部35筆狀態、11季度／8用途篩選、18搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第113–116批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider7部35筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗7頁35組狀態、11季度、8用途過濾、18搜尋、7筆TV／待核狀態展示、8待核及8部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只更新本批2022-summer選定7個seed物件、已證動畫跨季registry缺項、必要盤點與同一checkpoint。registry排除target seed map、AnimeIds numeric尾端及既有literal後才新增，沒有extra不造空spread。未選定owner raw物件原文字串及所有未選定公開anime JSON以byte hash保全；不改parser／UI／依賴。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/orient-awajishima-gekitou-hen/、http://127.0.0.1:4345/anime/shine-post/、http://127.0.0.1:4345/anime/hataraku-maou-sama/。 接第115批跨年度長篇TV（原首播日期保留）2部10筆既有用途：`curated-21`、`curated-112153`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-115（隨第116批合併正式驗收完成）

- 實際核對分區：本輪核對19筆（18筆基本、1筆待核），另2筆原已核用途整筆保留未重查；本輪新補基本證據18筆。選定展示21筆／基本20筆包含保留資料，不能全算本輪新核。
- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。2部、原10用途加11筆已證新用途，共21筆：20筆基本逐欄證據、1筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `one-piece-op-22` | OVER THE TOP／きただにひろし | OP22 | 2020-winter, 2020-spring, 2020-summer |
| `one-piece-op-23` | DREAMIN’ ON／Da-iCE | OP23 | 2020-summer, 2020-fall, 2021-winter, 2021-spring, 2021-summer, 2021-fall |
| `one-piece-op-24` | PAINT／I Don’t Like Mondays. | OP24 | 2022-winter, 2022-spring, 2022-summer, 2022-fall, 2023-winter, 2023-spring, 2023-summer |
| `one-piece-op-25` | 最高到達点／SEKAI NO OWARI | OP25 | 2023-summer, 2023-fall |
| `one-piece-op-26` | あーーっす！／きただにひろし | OP26 | 2024-winter, 2024-spring, 2024-summer, 2024-fall |
| `one-piece-op-27` | 天使と悪魔／GRe4N BOYZ | OP27 | 2025-spring, 2025-summer |
| `one-piece-op-28` | カーマイン／ELLEGARDEN | OP28 | 2025-summer, 2025-fall |
| `one-piece-op-29` | ルミナス - Luminous／アイナ・ジ・エンド | OP29 | 2026-spring, 2026-summer |
| `one-piece-ed-19` | Raise／Chilli Beans. | ED19 | 2023-summer, 2023-fall |
| `one-piece-ed-20` | Dear sunrise／大槻マキ | ED20 | 2024-winter, 2024-spring, 2024-summer, 2024-fall |
| `one-piece-ed-21` | The 1／muque | ED21 | 2025-spring, 2025-summer |
| `one-piece-ed-22` | PUNKS／カメレオン・ライム・ウーピーパイ | ED22 | 2025-summer, 2025-fall |
| `one-piece-ed-23` | その未来／時速36km | ED23 | 2026-spring, 2026-summer |
| `pocket-monsters-2019-op-1` | 1・2・3／After the Rain（そらる×まふまふ） | OP1 | 2020-winter, 2020-spring, 2020-summer |
| `pocket-monsters-2019-op-2` | 1・2・3／西川くんとキリショー | OP2 | 2020-summer, 2020-fall |
| `pocket-monsters-2019-op-3` | 1・2・3／からあげ姉妹（生田絵梨花・松村沙友理 from 乃木坂46） | OP3 | 2021-winter, 2021-spring, 2021-summer, 2021-fall, 2022-winter |
| `pocket-monsters-2019-op-4` | 1・2・3／サトシ＆ゴウ（CV：松本梨香＆山下大輝） | OP4 | 2022-winter, 2022-spring, 2022-summer, 2022-fall |
| `pocket-monsters-2019-ed-1` | ポケモンしりとり（ピカチュウ→ミュウVer.）／ポケモン音楽クラブ（増田順一／パソコン音楽クラブ／ポケモンキッズ2019） | ED1 | 2020-winter, 2020-fall, 2021-winter, 2021-spring |
| `pocket-monsters-2019-ed-2` | ポケモンしりとり（ミュウ→ザマゼンタVer.）／ポケモン音楽クラブ（増田順一／パソコン音楽クラブ／ポケモンキッズ2019） | ED2 | 2020-spring, 2020-summer, 2020-fall, 2021-winter, 2021-spring |
| `pocket-monsters-2019-ed-3` | バツグンタイプ／ポケモン音楽クラブ（増田順一／パソコン音楽クラブ／ポケモンキッズ2019） | ED3 | 2021-spring, 2021-summer, 2021-fall, 2022-winter, 2022-spring, 2022-summer, 2022-fall |
| `pocket-monsters-2019-ed-4` | 1・2・3／After the Rain（そらる×まふまふ） | ED4 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-21`、`curated-112153`。更正0個原名、4個演唱名義；同頁補40項詞／曲／編及9項演唱（按用途計）。新增11筆用途／11個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,767用途（4,529 OP／ED、228 IN、10 TS）均有dataStatus；2,016筆基本逐欄證據、2,751筆來源待細分。2,861個唯一用途逐批處理，其中2,623 OP／ED、228 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,050部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- ONE PIECE以官方原期公告、中文逐話用途表及TV曲表交叉新增歷史OP22–28與ED19–22；既有OP29／ED23的ID、songID、身分、credits、媒體、外連、sources與核對日期整筆保留。2026沒有額外季度正面逐曲證據，不補秋季；不改1999首播或metadata。
- OVER THE TOP的2019起用本身不作2020續用證據；TV歷史表截止年有誤，該用途排除該行，以官方934話2020/7/26日期與中文916／927／934話日期及本曲892–934話使用範圍交叉冬春夏。日期頁僅作date-only補充，不能生成曲名／演唱或usage evidence。
- DREAMIN’ ON、PAINT、最高到達点、あーーっす！、天使と悪魔、カーマイン及四首ED各依本曲原TV使用期間分季，不以整部續播、音樂發行或MV上傳日推季。PAINT官方原期新聞為主題歌，精確OP由已驗證官方YouTube可見標題補足；部分官方普通正文403，採用內容限實讀官方公開索引，限制逐URL保存。沒有新增影片或推full／TV錄音。
- ONE PIECE 1000話特別OP、Film RED連動特殊OP、1137話特殊ED僅有交叉線索而未取得適用第一方，保留續查，不新增用途。魚人島特別編輯版為另一作品，延後核對，其曲不套原TV。基本常規補漏不代表全部歷史歌曲或詳細資料閉合。
- 寶可夢旅途8筆原用途保ID／類型／序號。4個1・2・3 OP演唱版依原作者、Sony接棒與同曲リアレンジ／歌い継ぐ明示，共用原OP1-song；三個關係更正保各用途本曲演唱、作者及編曲，不把原版編曲搬到其他版。兩種ポケモンしりとり仍各保原歌曲身分，不因標題近似自動合併。
- 寶可夢After the Rain版原ED4在2020年以後TV用途缺第一方且最終話交叉衝突，保原候選名義及songID、空季度held；不偷偷改成サトシ＆ゴウ，也不與OP共同歌曲合併。歌曲身分／作者證據與TV用途分開，所有held續查條件保留。
- 保寶可夢2019首播、所有metadata與9/02日期；只為其row明存metadataVerifiedAt防新歌曲來源日期外溢。Fall2019 wrapper僅以既有seasonIds可選override及nullish fallback接通，本row加2019 owner與已證2020–2022季度；其他row維持原預設，不加公開schema、不搬全歷史。
- 11筆新增用途有獨立來源、空原始links、無舊影片／錄音／發行品繼承。新增11個歌曲身分與三個舊版歌曲關係合併後，全目錄唯一歌曲預期淨增8，必以實際前後ID集合驗證；全目錄186空季度與122非空季度缺口待proof實數填入。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 2部21筆與未選資料保留性通過。Chromium393×852全部21筆狀態、37季度／111用途篩選、13搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第113–116批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider2部21筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗2頁21組狀態、37季度、111用途過濾、13搜尋、2筆TV／待核狀態展示、1待核及0部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定僅替換兩個原生TypeScript目標seed物件、Fall2019兩行必要兼容與已證季度registry缺項，另正常盤點及checkpoint更新。以TypeScript AST定位UTF8 object範圍，不用JSON decoder讀原生TS、不求值或整檔重序列化；未選物件與目標外原bytes逐檔保全，兼容差異只有明列兩行。Registry以114凍結quarter API實際成員排除native、numeric tail與既有foreign，沒有extra不造空spread。Conan獨立於116。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/one-piece/、http://127.0.0.1:4345/anime/pocket-monsters-2019/。 接第116批跨年度長篇TV（原首播日期保留）1部5筆既有用途：`curated-235`；已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-116（正式驗收完成）

- 實際核對分區：本輪核對23筆（16筆基本、7筆待核），另5筆原已核用途整筆保留未重查；本輪新補基本證據16筆。選定展示28筆／基本21筆包含保留資料，不能全算本輪新核。
- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。1部、原5用途加23筆已證新用途，共28筆：21筆基本逐欄證據、7筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `meitantei-conan-op-51` | 真っ赤なLip／WANDS | OP51 | 2020-winter, 2020-spring, 2020-summer |
| `meitantei-conan-op-52` | JUST BELIEVE YOU／all at once | OP52 | 第一方身分／用途待核，原入口保留 |
| `meitantei-conan-op-53` | ZEROからハジメテ／倉木麻衣 | OP53 | 2021-winter, 2021-spring, 2021-summer |
| `meitantei-conan-op-54` | YURA YURA／WANDS | OP54 | 2021-fall |
| `meitantei-conan-op-55` | SLEEPLESS／B'z | OP55 | 2022-winter, 2022-spring |
| `meitantei-conan-op-56` | SPARKLE／大黒摩季 | OP56 | 2022-summer, 2022-fall, 2023-winter |
| `meitantei-conan-op-57` | RAISE INSIGHT／WANDS | OP57 | 2023-winter, 2023-spring, 2023-summer, 2023-fall |
| `meitantei-conan-op-58` | Unraveling Love ～少しの勇気～／倉木麻衣 | OP58 | 2023-fall, 2024-winter, 2024-spring, 2024-summer, 2024-fall |
| `meitantei-conan-op-59` | But ノーラヴ／Rainy。 | OP59 | 第一方身分／用途待核，原入口保留 |
| `meitantei-conan-op-60` | Poker Face／あみゅり | OP60 | 第一方身分／用途待核，原入口保留 |
| `meitantei-conan-op-61` | Heaven Knows／B'z | OP61 | 2026-winter, 2026-spring |
| `meitantei-conan-op-62` | 愛のFIRE／新浜レオン | OP62 | 2026-summer, 2026-fall |
| `meitantei-conan-ed-61` | 少しづつ 少しづつ／SARD UNDERGROUND | ED61 | 2020-winter, 2020-spring, 2020-summer |
| `meitantei-conan-ed-62` | 星合／all at once | ED62 | 第一方身分／用途待核，原入口保留 |
| `meitantei-conan-ed-63` | Reboot／宮川愛李 | ED63 | 2021-winter, 2021-spring, 2021-summer |
| `meitantei-conan-ed-64` | ベロニカ／倉木麻衣 | ED64 | 2021-summer, 2021-fall |
| `meitantei-conan-ed-65` | SWEET MOONLIGHT／BREAKERZ | ED65 | 第一方身分／用途待核，原入口保留 |
| `meitantei-conan-ed-66` | 空っぽの心／SARD UNDERGROUND | ED66 | 2022-spring, 2022-summer |
| `meitantei-conan-ed-67` | プレイメーカー feat.大野雄大（from Da-iCE）／all at once | ED67 | 2022-fall, 2023-winter |
| `meitantei-conan-ed-68` | クウフク（starring VALSHE）／今夜、あの街から | ED68 | 第一方身分／用途待核，原入口保留 |
| `meitantei-conan-ed-69` | ...and Rescue Me／Rainy。 | ED69 | 第一方身分／用途待核，原入口保留 |
| `meitantei-conan-ed-70` | Y☺︎u & I／倉木麻衣 | ED70 | 2023-fall, 2024-winter, 2024-spring, 2024-summer |
| `meitantei-conan-ed-71` | 夢で逢いましょう／SARD UNDERGROUND | ED71 | 2024-summer, 2024-fall |
| `meitantei-conan-ed-72` | Shooting star／WANDS | ED72 | 2025-winter |
| `meitantei-conan-ed-73` | Fun! Fun! Fun!／新浜レオン | ED73 | 2025-spring, 2025-summer, 2025-fall |
| `meitantei-conan-ed-74` | TOWA 〜永久に風に乗る〜／倉木麻衣 | ED74 | 2026-winter, 2026-spring |
| `meitantei-conan-ed-75` | 7 DAYS／Rainy。 | ED75 | 2026-spring, 2026-summer |
| `meitantei-conan-ed-76` | 愛で全部抱きしめて愛して／倉木麻衣 | ED76 | 2026-summer, 2026-fall |

- 公開anime ID：`curated-235`。更正0個原名、0個演唱名義；同頁補23項詞／曲／編及8項演唱（按用途計）。新增23筆用途／23個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,790用途（4,552 OP／ED、228 IN、10 TS）均有dataStatus；2,032筆基本逐欄證據、2,758筆來源待細分。2,884個唯一用途逐批處理，其中2,646 OP／ED、228 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有0筆真正重讀舊來源更新日期。其他2,051部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 新用途直接採未占用的真實歷代編號OP51–60、ED61–73及相應穩定ID；不是將舊OP51加排成OP63。既有OP61／62及ED74／75／76的ID、songID、序號、原名／名義、evidence、credits、媒體、季度與各來源日期全部保留，原1996首播及現有metadata不重核、不刷新。
- YTV歷代OP・ED投票頁普通open僅JS骨架；已讀普通搜尋索引的2020年代區逐項原名／正式名義，能證身份與OPED聯集。精確OP／ED欄未分列，不能把聯集硬標為每首精確用途或已確認季度。OP52 JUST BELIEVE YOU、OP59 But ノーラヴ、OP60 Poker Face、ED62 星合、ED65 SWEET MOONLIGHT、ED68 クウフク（starring VALSHE）、ED69 ...and Rescue Me七筆因此held空季度，保identity第一方及精確分類交叉來源、basic_evidence／use_quarters具體續查條件；不使用unverifiedSong否定已證身份。
- 其餘16筆只由各自精確一方用途頁產anime_use usage evidence，YTV聯集頁仍僅支持title／artist。YTV原TV歷代段明倉木麻衣四首的OPED及年份；WANDS公告／逐曲表明三OP及Shooting star ED；SARD UNDERGROUND三曲逐曲表明ED及詞曲編；B’z歷代明SLEEPLESS為2022 TV OP；大黒摩季原公告明SPARKLE 7/9起OP；Avex大野雄大公告明プレイメーカー2022/10/1今夜起ED；BZONE作者所與androp原公告明新浜Fun! Fun! Fun!及宮川愛李Reboot ED。
- 已確認用途季度以具名精確一方TV用途加逐曲原TV期間交叉核對；不由發售、NC上傳、MV、商品收錄或整部持續播出推每曲季度。七held交叉候補季度只留續查，不進seasonIds／registry；2020秋因此仍待精確一方補證。其他確認動畫季度為16新曲與五舊曲聯集，保現有owner 2026-summer，target seed原生IDs及numeric尾端排除後才加跨季registry。
- 同頁明示的LCA順手保留，未明逐職位不從楽曲提供、團員或cast介紹推論。Fun! Fun! Fun!僅得後藤康二共同作詞等明示職位，其他共同詞作者尚缺，lyrics索引仍待核。大野雄大本曲歌唱由本人權利方Avex公告支持，不把Da-iCE全員或商品另收星合Acoustic版套入本曲。吉他合作、starring字樣及正式團體名義不自動填逐人vocals。
- 新23用途僅自身已核來源、空raw links、無影片／錄音／發行／平台繼承；builder可補exact既有動畫首頁fallback，該入口不算媒體或正版平台完成。Poker Face精確啟用日7/12與7/19資料分歧保留為續查，不用配信日裁決，且本輪該用途仍held空季度。全目錄193筆空季度、122筆非空季度缺口待實際proof數字替換。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（21項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 1部28筆與未選資料保留性通過。Chromium393×852全部28筆狀態、27季度／81用途篩選、24搜尋與待核／部分季度通過；1280×900歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第113–116批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料保留。
- ApiProvider1部28筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗1頁28組狀態、27季度、81用途過濾、24搜尋、1筆TV／待核狀態展示、7待核及0部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 預定只替換src/data/curated-seeds/2026/summer.ts中的Conan單一物件及必要registry項。以TypeScript AST定位物件與UTF-8 byte位置，僅解讀literal，不import／執行seed module，支援原生手寫TS鍵名與SeedRows別名。目標物件以外的整個owner前後bytes、其他seed module及全部未選公開anime JSON以hash保全。五舊raw物件與五舊API物件逐項嚴格相等；不改parser／gate／UI／依賴或metadata日期。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/meitantei-conan/。 接第117批2022春、2022夏9部26筆既有用途：`curated-144858`、`curated-131912`、`curated-132052`、`curated-129201`、`curated-121176`、`curated-143203`、`curated-127911`、`curated-132351`、`curated-140350`；已登記的並行來源查核不預計為公開資料完成。

## 第113–116批合併正式驗收

- 四批18部標準TV、122筆展示用途；本輪核對115筆，另7筆原已核用途整筆保留。展示基本證據101筆，其中本輪新補94筆；21筆待核及8筆非空季度條件保留。新增54用途（16 IN、38 OP／ED）／54個新歌曲ID，三個已有明證的同曲關係更正後，唯一歌曲淨增51。
- [PR #197](https://github.com/kyeunga25/anisonary/pull/197)與main整棵tree等於原local116凍結資料；正常quality／Workers與完整發布gate採PR及main各自精確SHA的實際verify:full（含audit及必要E2E），未把失敗或未完成本機full計為通過，沒有放寬gate。來源`11d001d56088a7b7484712831d90eb9170b53618`／`batch116-basics`；固定產物已部署，version metadata來源／tag／PR相符。
- 四批18部122筆正式ApiProvider與本機相同，108條HTML／JSON／季度／搜尋資產逐檔符合凍結產物，另2條真404。第116批API／routes依成功superset的精確公開物件取子集，未重複HTTP；僅第116批1部28筆另有實際production Chromium手機／桌面與搜尋互動驗證，截圖已檢視，未宣稱其餘三批production瀏覽器重測。
- 只對Pokémon2019輸入提供既有seasonIds可選override及原值優先的兩行相容處理，其餘row／預設與未選公開JSON保留；Sony明示的三個版本共同歌曲、LoveLive原ED1→IN1保原ID與序號。112既有來源隔離測試映射已是正式基線，本組沒有再改test。
- 本組正式驗收完成；基本、詳細及長期範圍仍未完成。

## 2020-2026-tv-basics-120（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原20用途加6筆已證新用途，共26筆：23筆基本逐欄證據、3筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `motto-majime-ni-fumajime-kaiketsu-zorori-3rd-season-op-1` | 大逆転どっこいSHOW／ゾロリ（山寺宏一） | OP1 | 2022-spring |
| `motto-majime-ni-fumajime-kaiketsu-zorori-3rd-season-ed-1` | ZORORI ROCK!!!／ヤバイTシャツ屋さん | ED1 | 2022-spring |
| `birdie-wing-golf-girls-story-op-1` | Venus Line／広瀬香美 | OP1 | 2022-spring |
| `birdie-wing-golf-girls-story-ed-1` | ヨダカ／月詠み | ED1 | 2022-spring |
| `birdie-wing-golf-girls-story-in-1` | HONEY DAYS (GONE TOO SOON)／Luiza | IN1 | 2022-spring |
| `birdie-wing-golf-girls-story-in-2` | Take a chance／illiomote | IN2 | 2022-spring |
| `tomodachi-game-op-1` | ダブルシャッフル／水樹奈々 | OP1 | 2022-spring |
| `tomodachi-game-ed-1` | 灯日／saji | ED1 | 2022-spring |
| `yuusha-yamemasu-op-1` | BROKEN IDENTITY／鈴木みのり | OP1 | 2022-spring |
| `yuusha-yamemasu-ed-1` | Growing／東山奈央 | ED1 | 2022-spring |
| `yuusha-yamemasu-ed-2` | de messiah／東山奈央 | ED2 | 2022-spring |
| `healer-girl-op-1` | Feel You, Heal You／ヒーラーガールズ | OP1 | 2022-spring |
| `healer-girl-ed-1` | Believe like Singing.／ヒーラーガールズ | ED1 | 2022-spring |
| `healer-girl-ed-2` | Feel You, Heal You／烏丸理彩、森嶋響、藤井かな、矢薙ソニア、五城玲美 | ED2 | 第一方身分／用途待核，原入口保留 |
| `build-divide-code-white-op-1` | Gold／EGOIST | OP1 | 2022-spring |
| `build-divide-code-white-ed-1` | A Shout Of Triumph／Who-ya Extended | ED1 | 2022-spring |
| `build-divide-code-white-ed-2` | Re:Painted／Who-ya Extended | ED2 | 第一方身分／用途待核，原入口保留 |
| `black-rock-shooter-dawn-fall-op-1` | ASEED／ZAQ | OP1 | 2022-spring |
| `black-rock-shooter-dawn-fall-ed-1` | Before the Nightmare／高槻かなこ | ED1 | 2022-spring |
| `black-rock-shooter-dawn-fall-ed-2` | ブラック★ロックシューター／supercell feat. 初音ミク | ED2 | 第一方身分／用途待核，原入口保留 |
| `otomege-sekai-wa-mob-ni-kibishii-sekai-desu-op-1` | サイレントマイノリティー／伊東歌詞太郎 | OP1 | 2022-spring |
| `otomege-sekai-wa-mob-ni-kibishii-sekai-desu-ed-1` | selfish／安月名莉子 | ED1 | 2022-spring |
| `duel-masters-king-max-op-1` | ヒストリア／ベアードアード | OP1 | 2022-spring, 2022-summer |
| `duel-masters-king-max-ed-1` | コレカラ／Coeur à Coeur | ED1 | 2022-spring, 2022-summer |
| `rikei-ga-koi-ni-ochita-no-de-shoumei-shitemita-heart-op-1` | Love-Evidence／雨宮天 | OP1 | 2022-spring |
| `rikei-ga-koi-ni-ochita-no-de-shoumei-shitemita-heart-ed-1` | ビビっとラブ／CHiCO with HoneyWorks meets まふまふ | ED1 | 2022-spring |

- 公開anime ID：`curated-140787`、`curated-140830`、`curated-141014`、`curated-140457`、`curated-133412`、`curated-132526`、`curated-139303`、`curated-142074`、`curated-146865`、`curated-125124`。更正0個原名、1個演唱名義；同頁補54項詞／曲／編及5項演唱（按用途計）。新增6筆用途／6個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,800用途（4,556 OP／ED、234 IN、10 TS）均有dataStatus；2,133筆基本逐欄證據、2,667筆來源待細分。2,996個唯一用途逐批處理，其中2,752 OP／ED、234 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有2筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 原20用途的ID、type、sequence、已有songID與媒體保持；原零曲的佐羅利第三系列與キングMAX保留各自作品ID和完整seed位置，補正常OP／ED，不以零曲排除。新6用途只有自身已讀來源，raw links／媒體空；builder只可補exact動畫首頁入口，不算錄音、影片或發行已完成。
- 佐羅利第三系列官方明NHK Eテレ2022/4/6 19:00普通TV；OP大逆転どっこいSHOW／ゾロリ（山寺宏一）、ED ZORORI ROCK!!!／ヤバイTシャツ屋さん均由原期官方或原作方自行發布公告明示。OP保存已明田中公平作曲及山寺宏一本曲實唱，不由角色表推導。兩曲只確認spring；動畫續至summer不替代7–9月逐曲第一方credit，各保partial續查。
- BIRDIE WING原TV為4/5 24:00即實曆4/6 00:00。Venus Line／広瀬香美及ヨダカ／月詠み沿原Music補已明詞曲編；團體名義不推全員歌唱。原Music明HONEY DAYS (GONE TOO SOON)／Luiza為第1、5話IN及Take a chance／illiomote為第10、11話IN，另有獨立中文／日文交叉，僅spring，不繼承原OP／ED的AnimeThemes或媒體。
- 朋友遊戲原TV為4/5 25:29即實曆4/6 01:29；Hulu與d動畫同節目日24:00先行WEB分開。ダブルシャッフル／水樹奈々及灯日／saji由原Music補本曲詞曲編；不把演唱團體名冊當個別本曲歌唱。
- 勇者辭職原AT-X4/5 22:30早於ABEMA23:30及地上波24:30。BROKEN IDENTITY／鈴木みのり、Growing及de messiah／東山奈央逐曲由原Music明OP／ED與署名，均spring；CD內共收錄不代替用途。
- Healer Girl原MX／BS11 4/4 23:00。Feel You, Heal You OP及Believe like Singing. ED由原staff頁明正式名義與用途；不從全cast推本曲實唱。原ED2候選Feel You, Heal You缺本版第一方身份及特殊ED用途，保原ID／ED2／名義與舊媒體，unverifiedSong、季度空held，不生成fallback vocals或共同歌曲關係。
- Build Divide Code White原4/2 24:30即實曆4/3 00:30；第一期及ABEMA同步另列。Gold／EGOIST、A Shout Of Triumph／Who-ya Extended採本期Music及作者署名。Re:Painted官方藝人頁僅證歌名／演唱，無本期特殊ED2第一方；保已證身份、原ID／ED2、季度空held及useOnlySources空，不讓商品曲目或舊交叉來源升用途。
- BRS DAWN FALL原MX4/3 23:00；ASEED／ZAQ與Before the Nightmare／高槻かなこ由本期BDCD明主題曲與詞曲編。ブラック★ロックシューター原ED2候選缺本期第一方身份／用途，保舊supercell feat.初音ミク名義與媒體、unverifiedSong及季度空held；一般BDCD僅背景補充，不混2012版或原VOCALOID曲。
- 乙女モブ第一期原AT-X4/3 22:00；d動畫23:00及MX24:30另列，不能以後續第二期覆蓋。サイレントマイノリティー／伊東歌詞太郎及selfish／安月名莉子由第一期Music補完整詞曲編，均spring。
- キングMAX確認為4/3 08:30–09:00常規TV，重播／特別編與17話原本編分開。ヒストリア／ベアードアード及コレカラ／Coeur à Coeur由原事務所與TV東京Music七月官方曲表支持spring及summer；官方七月普通搜尋索引內容可見、正文timeout限制保留。コレカラ公告頁模板2021日期矛盾不當播期證據。兩新OP／ED不推團體成員全員歌唱、不造錄音。
- 理系第二期原TV官方原公告索引明4/1 25:30即實曆4/2 01:30，Prime同時配信；正文cache miss如實保留，不套第一期或重播。Love-Evidence／雨宮天與ビビっとラブ／CHiCO with HoneyWorks meets まふまふ依原Music核身份／用途；未明第一方詞曲編不從中文反填。
- metadataVerifiedAt及未重讀root／AnimeThemes／YouTube保9/01，實讀URL才22。sourceReadNotes保索引／正文限制；identity-only、credit-only、date-only及useOnlySources依facts。三held均為空季度；六組基本證據缺口另列，這批沒有已證非空季度basic gap，不以!held推basic。全目錄204筆空季度、133筆非空季度缺口待實際proof替換。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部26筆與未選資料保留性通過。Chromium393×852全部26筆狀態、12季度／36用途篩選、14搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第117–120批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider10部26筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁26組狀態、12季度、36用途過濾、14搜尋、10筆TV／待核狀態展示、3用途待核、0非空季度基本證據缺口及2部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 只替換2022/spring.ts十個已選原seed物件及必要跨季registry，保留兩部原零曲作品。registry須排除native seed會員與numeric AnimeIds尾端已存ID；未選owner物件原文字節、其他module及未選公開JSON逐一SHA保全。完整季度snapshot與active目標集合分開，不能要求全snapshot恰等於28。沒有app、parser、gate、UI或依賴修改。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/motto-majime-ni-fumajime-kaiketsu-zorori-3rd-season/、http://127.0.0.1:4345/anime/birdie-wing-golf-girls-story/、http://127.0.0.1:4345/anime/tomodachi-game/。 第121批2022春既有作品8部24筆既有用途已登記：`curated-129193`、`curated-133891`、`curated-137281`、`curated-137633`、`curated-138452`、`curated-140085`、`curated-141774`、`curated-143289`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-121（隨第124批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。8部、原24用途加3筆已證新用途，共27筆：23筆基本逐欄證據、4筆特殊用途待核、4筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `shokei-shoujo-no-virgin-road-op-1` | Paper Bouquet／Mili | OP1 | 2022-spring |
| `shokei-shoujo-no-virgin-road-ed-1` | 灯火セレナード／ChouCho | ED1 | 2022-spring |
| `love-live-nijigasaki-gakuen-school-idol-doukoukai-2nd-season-op-1` | Colorful Dreams! Colorful Smiles!／虹ヶ咲学園スクールアイドル同好会 | OP1 | 2022-spring |
| `love-live-nijigasaki-gakuen-school-idol-doukoukai-2nd-season-ed-1` | 夢が僕らの太陽さ／虹ヶ咲学園スクールアイドル同好会 | ED1 | 2022-spring |
| `love-live-nijigasaki-gakuen-school-idol-doukoukai-2nd-season-in-1` | Future Parade／虹ヶ咲学園スクールアイドル同好会 | IN1 | 2022-spring |
| `aharen-san-wa-hakarenai-op-1` | はなれない距離／TrySail | OP1 | 2022-spring |
| `aharen-san-wa-hakarenai-ed-1` | キョリ感／ハコニワリリィ | ED1 | 2022-spring |
| `aharen-san-wa-hakarenai-ed-2` | AHAREN HEART／阿波連れいな（CV.水瀬いのり） | ED2 | 2022-spring |
| `love-all-play-op-1` | 春玄鳥／Hey! Say! JUMP | OP1 | 2022-spring |
| `love-all-play-op-2` | サンダーソニア／Hey! Say! JUMP | OP2 | 2022-summer |
| `love-all-play-ed-1` | ライラ／LONGMAN | ED1 | 2022-spring |
| `love-all-play-ed-2` | 風の中／安田レイ | ED2 | 2022-summer |
| `gunjou-no-fanfare-op-1` | Move The Soul／JO1 | OP1 | 2022-spring |
| `gunjou-no-fanfare-ed-1` | OUTSIDERS／SawanoHiroyuki[nZk]:河野純喜&與那城奨（JO1） | ED1 | 2022-spring |
| `shadowverse-flame-op-1` | 心眼／Lanndo feat. 須田景凪 | OP1 | 2022-spring |
| `shadowverse-flame-op-2` | Tick-Tock／NEWS | OP2 | 2022-fall |
| `shadowverse-flame-ed-1` | マイターン／黒羽アリス（CV：小倉 唯） | ED1 | 2022-spring |
| `shadowverse-flame-ed-2` | STAR／超ときめき♡宣伝部 | ED2 | 2022-fall |
| `paripi-koumei-op-1` | チキチキバンバン／QUEENDOM | OP1 | 2022-spring |
| `paripi-koumei-ed-1` | 気分上々↑↑／EIKO starring 96猫、諸葛孔明（CV：置鮎龍太郎） | ED1 | 第一方身分／用途待核，原入口保留 |
| `paripi-koumei-ed-2` | 六本木うどん屋（仮）／EIKO starring 96猫 | ED2 | 第一方身分／用途待核，原入口保留 |
| `paripi-koumei-ed-3` | 気分上々↑↑／EIKO starring 96猫、諸葛孔明（CV：置鮎龍太郎）、KABE太人（CV：千葉翔也） | ED3 | 第一方身分／用途待核，原入口保留 |
| `paripi-koumei-ed-4` | 気分上々↑↑／EIKO starring 96猫、諸葛孔明（CV：置鮎龍太郎）、KABE太人（CV：千葉翔也）、久遠七海 starring Lezel | ED4 | 第一方身分／用途待核，原入口保留 |
| `paripi-koumei-in-1` | Be Crazy For Me／EIKO starring 96猫 | IN1 | 2022-spring |
| `paripi-koumei-in-2` | Shooting Star／EIKO starring 96猫 | IN2 | 2022-spring |
| `estab-life-great-escape-op-1` | ラナ／めいちゃん | OP1 | 2022-spring |
| `estab-life-great-escape-ed-1` | 0／GOOD ON THE REEL | ED1 | 2022-spring |

- 公開anime ID：`curated-129193`、`curated-133891`、`curated-137281`、`curated-137633`、`curated-138452`、`curated-140085`、`curated-141774`、`curated-143289`。更正2個原名、4個演唱名義；同頁補14項詞／曲／編及23項演唱（按用途計）。新增3筆用途／3個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,803用途（4,556 OP／ED、237 IN、10 TS）均有dataStatus；2,156筆基本逐欄證據、2,647筆來源待細分。3,023個唯一用途逐批處理，其中2,776 OP／ED、237 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有7筆真正重讀舊來源更新日期。其他2,044部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 公開anime ID與用途見本批表格。24筆既有用途全部保留，新增虹咲Future Parade及孔明Be Crazy For Me、Shooting Star三筆插曲；沒有新增影片、錄音、發行品或平台項目。更正2個原名、4個演唱名義，同頁補14項詞／曲／編角色及23項演唱紀錄（按用途計）。
- 虹咲第二期Future Parade：Lantis曲目資料確認原名與團體名義，官方目錄明第13話插曲，中文逐話資料交叉確認6月25日播出。僅列2022春，不從7月發售日推用途季度；其餘9首候選插曲待逐首取得演唱名義及TV用途證據。
- 孔明兩首新插曲均有原期官方插曲公告與中文逐話交叉資料，保存EIKO starring 96猫及角色／歌唱關係。気分上々↑↑三個演唱組合的官方商品可證同曲版本，但仍缺逐版TV ED第一方證據；ED3／ED4共用ED1歌曲身分，所有ED用途與序號保留。六本木うどん屋（仮）仍只有官方曲名，演唱及特殊ED用途待核。四筆ED均留空季度，待原期逐話公告或可讀官方影片明確對應版本後續查。
- Shadowverse Flame四首保留各自已證季度：心眼／マイターン為2022春，Tick-Tock／STAR為2022秋；各自延續至夏季或2023冬的證據仍待補，不能以作品續播把歌曲套入整季。後續章節已有獨立動畫入口，不另複製歌曲用途。
- Love All Play以官方逐cour日期區分春玄鳥／ライラ與サンダーソニア／風の中。阿波連AHAREN HEART保第3話特殊ED及水瀬いのり歌唱；群青OUTSIDERS補本曲已確認guest河野純喜、與那城奨，不由團體或cast介紹推全員歌唱。
- 處刑少女、虹咲第二期、阿波連與Estab Life的原TV精確日時仍待可讀第一方公告，原日期候選保留且清楚標示；不以先行WEB、付費上映、重播或商品發售日代替首播。這4項動畫日期精度缺口與歌曲基本資料、4項ED用途待核分別記錄。
- 本輪只更新7筆實際重讀的舊來源日期，其他既有來源日期保留。未選的2,044部動畫JSON逐檔相同；每首均保留完整性狀態、具體缺口與續查條件。手機與桌面實看後縮短27筆公開待補備註，只調整說明文字，不改來源、日期、歌曲身分、版本關係及待補欄位。
- 全目錄4,803筆用途、2,156筆基本逐欄證據；208筆完全季度待核、137筆非空季度仍有待補條件。已批次處理3,023筆，並不代表全部基本資料或詳細資料完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 8部27筆與未選資料保留性通過。Chromium393×852全部27筆狀態、12季度／36用途篩選、11搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第121–124批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider8部27筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗8頁27組狀態、12季度、36用途過濾、11搜尋、8筆TV／待核狀態展示、4用途待核、0非空季度基本證據缺口及4部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批只修改2022春已選動畫、必要跨季登記、欄位盤點及進度表。既有ID、網址、用途序號、媒體及未讀來源日期保留，程式、介面、解析器與依賴未改。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/shokei-shoujo-no-virgin-road/、http://127.0.0.1:4345/anime/love-live-nijigasaki-gakuen-school-idol-doukoukai-2nd-season/、http://127.0.0.1:4345/anime/aharen-san-wa-hakarenai/。 第122批2022冬既有作品10部25筆既有用途已登記：`curated-142080`、`curated-140502`、`curated-135136`、`curated-112323`、`curated-119056`、`curated-127050`、`curated-134252`、`curated-122808`、`curated-129190`、`curated-130591`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-122（隨第124批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原25用途加4筆已證新用途，共29筆：26筆基本逐欄證據、3筆特殊用途待核、7筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `delicious-party-precure-op-1` | Cheers！デリシャスパーティ♡プリキュア／Machico | OP1 | 2022-winter |
| `delicious-party-precure-ed-1` | DELICIOUS HAPPY DAYS♪／吉武千颯 | ED1 | 2022-winter |
| `delicious-party-precure-ed-2` | ココロデリシャス／佐々木李子 | ED2 | 2022-summer |
| `ryman-s-club-op-1` | The Warrior／Novelbright | OP1 | 2022-winter |
| `ryman-s-club-ed-1` | 二千五百万分の一／まふまふ | ED1 | 2022-winter |
| `vanitas-no-carte-part-2-op-1` | Your Name／Little Glee Monster | OP1 | 2022-winter |
| `vanitas-no-carte-part-2-ed-1` | salvation／モノンクル | ED1 | 2022-winter |
| `arifureta-shokugyou-de-sekai-saikyou-2nd-season-op-1` | Daylight／MindaRyn | OP1 | 2022-winter |
| `arifureta-shokugyou-de-sekai-saikyou-2nd-season-ed-1` | 外道讃歌／FantasticYouth | ED1 | 2022-winter |
| `kenja-no-deshi-wo-nanoru-kenja-op-1` | Ready Set Go!!／亜咲花 | OP1 | 2022-winter |
| `kenja-no-deshi-wo-nanoru-kenja-ed-1` | Ambitious／エラバレシ | ED1 | 2022-winter |
| `kenja-no-deshi-wo-nanoru-kenja-ed-2` | バラッド／亜咲花 | ED2 | 2022-winter |
| `kenja-no-deshi-wo-nanoru-kenja-in-1` | 挑み続ける者たち／レティシャ（cv.岡本美歌） | IN1 | 2022-winter |
| `kenja-no-deshi-wo-nanoru-kenja-in-2` | 新緑のメロディア／レティシャ（cv.岡本美歌） | IN2 | 2022-winter |
| `koroshi-ai-op-1` | Midnight Dancer／増田俊樹 | OP1 | 2022-winter |
| `koroshi-ai-ed-1` | マコトピリオド／小林愛香 | ED1 | 2022-winter |
| `fantasy-bishoujo-juniku-oji-san-to-op-1` | 暁のサラリーマン／福山芳樹 | OP1 | 2022-winter |
| `fantasy-bishoujo-juniku-oji-san-to-ed-1` | “FA”NTASYと！／Luce Twinkle Wink☆ | ED1 | 2022-winter |
| `princess-connect-re-dive-season-2-op-1` | Lost Princess／ペコリーヌ（CV：M・A・O）、コッコロ（CV：伊藤美来）、キャル（CV：立花理香） | OP1 | 2022-winter |
| `princess-connect-re-dive-season-2-ed-1` | 旅立ちの季節／ペコリーヌ（CV：M・A・O）、コッコロ（CV：伊藤美来）、キャル（CV：立花理香） | ED1 | 2022-winter |
| `princess-connect-re-dive-season-2-ed-2` | Connecting Happy!!／ペコリーヌ（CV：M・A・O）、コッコロ（CV：伊藤美来）、キャル（CV：立花理香） | ED2 | 第一方身分／用途待核，原入口保留 |
| `princess-connect-re-dive-season-2-in-1` | Shining Future／ノゾミ（CV：日笠陽子）、チカ（CV：福原綾香）、ツムギ（CV：木戸衣吹） | IN1 | 2022-winter |
| `princess-connect-re-dive-season-2-in-2` | Call Me Darling!／ノゾミ（CV：日笠陽子）、チカ（CV：福原綾香）、ツムギ（CV：木戸衣吹） | IN2 | 2022-winter |
| `tensai-ouji-no-akaji-kokka-saisei-jutsu-op-1` | LEVEL／やなぎなぎ×THE SIXTH LIE | OP1 | 2022-winter |
| `tensai-ouji-no-akaji-kokka-saisei-jutsu-ed-1` | ヒトリとキミと／南條愛乃 | ED1 | 2022-winter |
| `sabikui-bisco-op-1` | 風の音さえ聞こえない／JUNNA | OP1 | 2022-winter |
| `sabikui-bisco-ed-1` | 咆哮／ビスコ＆ミロ（CV：鈴木崚汰＆花江夏樹） | ED1 | 2022-winter |
| `sabikui-bisco-ed-2` | 咆哮／ミロ（CV：花江夏樹） | ED2 | 第一方身分／用途待核，原入口保留 |
| `sabikui-bisco-ed-3` | ぶち抜け！／上田剛士（AA=） | ED3 | 第一方身分／用途待核，原入口保留 |

- 公開anime ID：`curated-142080`、`curated-140502`、`curated-135136`、`curated-112323`、`curated-119056`、`curated-127050`、`curated-134252`、`curated-122808`、`curated-129190`、`curated-130591`。更正2個原名、0個演唱名義；同頁補53項詞／曲／編及17項演唱（按用途計）。新增4筆用途／4個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,807用途（4,556 OP／ED、241 IN、10 TS）均有dataStatus；2,182筆基本逐欄證據、2,625筆來源待細分。3,052個唯一用途逐批處理，其中2,801 OP／ED、241 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有12筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 25筆既有用途全部保留，新增賢者弟子與公主連結第二期各2筆插曲；未新增影片、錄音、發行品或平台項目。同頁補53項詞／曲／編角色及17項演唱紀錄（按用途計），10部動畫的原TV精確日時均已核對。
- 美味Party光美三首只列逐曲已證季度：前兩首為2022冬，ココロデリシャス為2022夏；其餘延續季度仍待逐曲第一方證據。リーマンズクラブ與ヴァニタス後半各2首僅確認2022冬，跨到春季末話的歌曲證據待補。共7筆保留跨季條件，不依作品續播或發售日補整季。
- 賢者弟子バラッド由官方Music明特殊ED用途；兩首新插曲挑み続ける者たち、新緑のメロディア有官方逐曲插曲與レティシャ（cv.岡本美歌）演唱名義、中文交叉。交叉資料列出的集數與作者不冒充第一方，詞曲編仍列續查。
- 公主連結第二期Shining Future及Call Me Darling!由本期Music明插曲、三角色歌唱及作者，中文交叉資料有作者字形／編曲差異，保存官方署名並將分歧逐欄記錄。Connecting Happy!!尚缺本期特殊ED第一方證據，原ED2入口、媒體保留，空季度待核；遊戲／商品收錄不當動畫用途。
- 錆喰いビスコ咆哮ミロsolo的官方商品明示同曲版本，ED2共用原ED1歌曲身分，保留ED2用途與版本標籤；特殊TV用途仍待核，不生成新錄音。ぶち抜け！依官方OST更正標點，保原演唱名義；逐話資料指OP、舊入口為ED3，保ED3待原片尾或原期公告釐清，不推劇伴作者必為主唱。
- 其餘平凡職業第二期、殺し愛、異世界美少女受肉、天才王子核對本期Music或製作／藝人公告；只補本曲已明署名與歌唱，團體介紹、角色表、c/w作者及先行PV不擴充成正面用途證據。
- 全10作原TV首播均取得已審第一方資料，深夜時刻換算至實曆日；特番、先行WEB與後續重播分開。只有12筆真正重讀舊來源更新日期，未讀來源日期與媒體保留；未選2,042部動畫JSON逐檔相同。
- 全目錄4,807筆用途、2,182筆基本逐欄證據；211筆完全季度待核、144筆非空季度仍有待補條件。每筆歌曲狀態及具體續查條件均可於動畫頁查看，詳細資料尚未全面補齊。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部29筆與未選資料保留性通過。Chromium393×852全部29筆狀態、16季度／48用途篩選、14搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第121–124批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider10部29筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁29組狀態、16季度、48用途過濾、14搜尋、10筆TV／待核狀態展示、3用途待核、0非空季度基本證據缺口及7部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批只修改2022冬已選動畫、必要跨季登記、欄位盤點與進度表；程式、介面、解析器及依賴未改。原用途ID、網址、序號、媒體及未讀來源日期保留。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/delicious-party-precure/、http://127.0.0.1:4345/anime/ryman-s-club/、http://127.0.0.1:4345/anime/vanitas-no-carte-part-2/。 第123批2022冬既有作品10部25筆既有用途已登記：`curated-137247`、`curated-126288`、`curated-131681`、`curated-139804`、`curated-109820`、`curated-112719`、`curated-124060`、`curated-131548`、`curated-132405`、`curated-136428`。已登記的並行來源查核不預計為公開資料完成。

## 第117–120批合併正式驗收

- 四批36部、112筆展示用途，本輪核對112筆、整筆保留0筆。基本六組證據齊101筆，本輪新補101筆；用途待核且空季度11筆，已證季度但基本欄位缺證0筆，基本缺證共11筆；11筆非空季度續查可與缺證重疊。新增10用途／10歌曲ID，同曲關係更正1筆後唯一歌曲淨增9。
- [PR #198](https://github.com/kyeunga25/anisonary/pull/198)及main的整棵tree符合原local120凍結產物；正常quality／Workers與verify:full採PR及main各自精確SHA、實際audit及必要E2E證據，不把未完成本機full計為通過。來源`5519a90f483ada0f2dbafa85e0d80ffccf0dbbd1`／`batch120-basics`；固定artifact已部署，version metadata來源／tag／PR相符。
- 合併36部112筆正式ApiProvider相同；144條實際HTML／JSON／目標季度／搜尋資產符合凍結產物，另2條真404。第120批10部26筆API／routes自成功superset導出，未重複HTTP；只第120批另有真正production Chromium手機／桌面及截圖已檢視，不宣稱其他三批production手機已重測。
- 只更新已登記2022春／夏作品、必要registry與進度統計；owner目標物件外bytes及未選公開JSON保留。已明同曲與用途分類依逐曲第一方及審閱facts，另有獨立的 public boundary 數值 routing 誤報修正與回歸測試，精確限 scripts/check-public-boundary.mjs 及 tests/unit/public-boundary.test.ts；正常 PR／main 完整 CI 實證涵蓋此修正，沒有依賴／產生器／資料格式改動。
- 本組正式驗收完成；基本、詳細與長期範圍仍未完成。

## 2020-2026-tv-basics-123（隨第124批合併正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原25用途加5筆已證新用途，共30筆：30筆基本逐欄證據、0筆特殊用途待核、2筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `gensou-sangokushi-tengen-reishinki-op-1` | ENISHI／Machico | OP1 | 2022-winter |
| `gensou-sangokushi-tengen-reishinki-ed-1` | 嘘／LACCO TOWER | ED1 | 2022-winter |
| `sasaki-to-miyano-op-1` | 瞬き／ミラクルチンパンジー | OP1 | 2022-winter |
| `sasaki-to-miyano-ed-1` | いちごサンセット／佐々木秀鳴（CV：白井悠介）、宮野由美（CV：斉藤壮馬） | ED1 | 2022-winter |
| `shingeki-no-kyojin-the-final-season-part-2-op-1` | The Rumbling／SiM | OP1 | 2022-winter |
| `shingeki-no-kyojin-the-final-season-part-2-ed-1` | 悪魔の子／ヒグチアイ | ED1 | 2022-winter |
| `tribe-nine-op-1` | Strike It Out／MIYAVI | OP1 | 2022-winter |
| `tribe-nine-ed-1` | Infocus／Void_Chords feat. LIO | ED1 | 2022-winter |
| `sabiiro-no-armor-reimei-op-1` | Faith／孫一（CV：佐藤大樹）、織田三郎信長（CV：増田俊樹）、ルシオ（CV：佐藤流司） | OP1 | 2022-winter |
| `sabiiro-no-armor-reimei-ed-1` | Tie and Tie／FANTASTICS from EXILE TRIBE | ED1 | 2022-winter |
| `sabiiro-no-armor-reimei-in-1` | Blue Eyes／孫一（CV.佐藤大樹） | IN1 | 2022-winter |
| `futsal-boys-op-1` | BRAVE MAKER／佐久間貴生 | OP1 | 2022-winter |
| `futsal-boys-ed-1` | Pianissimo／STEREO DIVE FOUNDATION | ED1 | 2022-winter |
| `baraou-no-souretsu-op-1` | 我、薔薇に淫す／古川慎 | OP1 | 2022-winter |
| `baraou-no-souretsu-op-2` | 荊棘輪舞曲／古川慎 | OP2 | 2022-spring |
| `baraou-no-souretsu-ed-1` | 悪夢／ZAQ | ED1 | 2022-winter |
| `baraou-no-souretsu-ed-2` | 螺旋／Nowlu | ED2 | 2022-spring |
| `akebi-chan-no-sailor-fuku-op-1` | はじまりのセツナ／蠟梅学園中等部1年3組 | OP1 | 2022-winter |
| `akebi-chan-no-sailor-fuku-ed-1` | Baton／明日小路（CV：村上まなつ） | ED1 | 2022-winter |
| `akebi-chan-no-sailor-fuku-ed-2` | 風にまかせて／明日小路（CV：村上まなつ） | ED2 | 2022-winter |
| `akebi-chan-no-sailor-fuku-ed-3` | はじまりのセツナ／蠟梅学園中等部1年3組 | ED3 | 2022-winter |
| `akebi-chan-no-sailor-fuku-in-1` | hem／福元 幹(CV.斉藤朱夏) | IN1 | 2022-winter |
| `akebi-chan-no-sailor-fuku-in-2` | Illumination／福元 幹(CV.斉藤朱夏) | IN2 | 2022-winter |
| `sono-bisque-doll-wa-koi-wo-suru-op-1` | 燦々デイズ／スピラ・スピカ | OP1 | 2022-winter |
| `sono-bisque-doll-wa-koi-wo-suru-ed-1` | 恋ノ行方／あかせあかり | ED1 | 2022-winter |
| `sono-bisque-doll-wa-koi-wo-suru-in-1` | 君に伝えたいことがあるんだ／スピラ・スピカ | IN1 | 2022-winter |
| `kaijin-kaihatsubu-no-kuroitsu-san-op-1` | Special Force／AXXX1S | OP1 | 2022-winter |
| `kaijin-kaihatsubu-no-kuroitsu-san-ed-1` | Destiny／メイビーME | ED1 | 2022-winter |
| `kaijin-kaihatsubu-no-kuroitsu-san-ed-2` | 曖昧あいでんてぃてぃ／メイビーME | ED2 | 2022-winter |
| `kaijin-kaihatsubu-no-kuroitsu-san-in-1` | ミラクルステップ／YURiKA | IN1 | 2022-winter |

- 公開anime ID：`curated-137247`、`curated-126288`、`curated-131681`、`curated-139804`、`curated-109820`、`curated-112719`、`curated-124060`、`curated-131548`、`curated-132405`、`curated-136428`。更正0個原名、0個演唱名義；同頁補54項詞／曲／編及12項演唱（按用途計）。新增5筆用途／5個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,812用途（4,556 OP／ED、246 IN、10 TS）均有dataStatus；2,212筆基本逐欄證據、2,600筆來源待細分。3,082個唯一用途逐批處理，其中2,826 OP／ED、246 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有18筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 25筆原用途全部保留，新增錆色鎧甲Blue Eyes、明日ちゃんhem及Illumination、換裝人偶君に伝えたいことがあるんだ、黑井津ミラクルステップ五筆插曲。更正1筆同歌關係，沒有新增影片、錄音、發行品或平台項目；同頁補54項詞／曲／編角色及12項演唱紀錄（按用途計）。
- 幻想三國誌、佐佐木與宮野、進擊巨人Final第二部分、TRIBE NINE各以原期官方用途與交叉來源確認曲名／演唱名義。進擊巨人最終#87跨至實曆4月4日，兩首只列已證2022冬，春季末話仍待逐曲第一方證據，不由作品播至4月推全部歌曲季度。
- 錆色鎧甲Blue Eyes有Victor正式曲名、孫一（CV.佐藤大樹）歌唱及插曲用途，LDH原期公告補作者；中文與逐話資料交叉。第12話為交叉資料的細節，未把索引或商品日期當官方逐話證明。Futsal Boys與薔薇王的葬列完整原用途保留，薔薇王兩cour歌曲按官方起日分冬／春。
- 明日ちゃんhem、Illumination由官方訪談明第2／3話插曲，Music補身份與作者。官方自刊音樂製作訪談明はじまりのセツナ第2段作特殊ED，ED3共用原OP1歌曲身分，保原ED3 ID與用途，不生成新錄音。風にまかせて採官方Music特殊ED，不由商品推用途。
- 換裝人偶新插曲由SMA原3月27日公告明第12話用途、中文交叉。黑井津ミラクルステップ由本期Music明插曲與YURiKA名義，中文逐話交叉；終話4月3日只證動畫播出，不據此新增ED或把所有歌曲延至春季。Destiny編曲字形分歧仍記待核，沒有猜補姓名。
- 幻想三國誌、佐佐木與宮野、TRIBE NINE、Futsal Boys的原TV精確日時仍缺可讀第一方證據，原候選日期保留，等待原期公告／台站表恢復可讀。這4項動畫精度缺口不影響30筆已確認歌曲基本資料，亦不混作僅缺分鐘。
- 只有18筆真正重讀的舊來源更新日期，其他原來源日期、媒體與ID保留。未選2,042部動畫JSON逐檔相同；30筆每首均有完整性、具體缺口及續查條件，公開備註使用簡短讀者文字。
- 全目錄4,812筆用途、2,212筆基本逐欄證據；211筆完全季度待核、146筆非空季度仍有待補條件。作品聯集、全年度基本資料與詳細資料仍未完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部30筆與未選資料保留性通過。Chromium393×852全部30筆狀態、13季度／39用途篩選、15搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第121–124批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider10部30筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁30組狀態、13季度、39用途過濾、15搜尋、10筆TV／待核狀態展示、0用途待核、0非空季度基本證據缺口及2部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批只修改2022冬已選動畫、必要跨季登記、欄位盤點與進度表；未改程式、介面、解析器或依賴。保留所有舊用途ID、序號、網址、媒體與未讀來源日期。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/gensou-sangokushi-tengen-reishinki/、http://127.0.0.1:4345/anime/sasaki-to-miyano/、http://127.0.0.1:4345/anime/shingeki-no-kyojin-the-final-season-part-2/。 第124批2022冬既有作品12部38筆既有用途已登記：`curated-139648`、`curated-125682`、`curated-128828`、`curated-129191`、`curated-138424`、`curated-118465`、`curated-127549`、`curated-128034`、`curated-128400`、`curated-140643`、`curated-130166`、`curated-137312`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-124（正式驗收完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。12部、原38用途加4筆已證新用途，共42筆：37筆基本逐欄證據、5筆特殊用途待核、4筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `genjitsu-shugi-yuusha-no-oukoku-saikenki-part-2-op-1` | REAL-EYES／水瀬いのり | OP1 | 2022-winter |
| `genjitsu-shugi-yuusha-no-oukoku-saikenki-part-2-ed-1` | LIGHTS／愛美 | ED1 | 2022-winter |
| `cue-op-1` | スタートライン／AiRBLUE | OP1 | 2022-winter |
| `cue-op-2` | Tomorrow's Diary／AiRBLUE | OP2 | 2022-spring |
| `cue-ed-1` | はじまりの鐘の音が鳴り響く空／AiRBLUE | ED1 | 2022-winter |
| `cue-ed-2` | さよならレディーメイド／AiRBLUE | ED2 | 第一方身分／用途待核，原入口保留 |
| `cue-ed-3` | ゆめだより／AiRBLUE | ED3 | 2022-spring |
| `cue-ed-4` | My Sustainer／AiRBLUE | ED4 | 第一方身分／用途待核，原入口保留 |
| `cue-ed-5` | ミライキャンバス／AiRBLUE | ED5 | 第一方身分／用途待核，原入口保留 |
| `dolls-frontline-op-1` | BAD CANDY／yukaDD(;´∀｀) | OP1 | 2022-winter |
| `dolls-frontline-ed-1` | HORIZON／TEAM SHACHI | ED1 | 2022-winter |
| `shikkakumon-no-saikyou-kenja-op-1` | Leap of faith／fripSide | OP1 | 2022-winter |
| `shikkakumon-no-saikyou-kenja-ed-1` | Day of Bright Sunshine／中島由貴 | ED1 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-op-1` | まっすぐ／大原ゆい子 | OP1 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-ed-1` | 夢で逢えたら／高木さん（CV：高橋李依） | ED1 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-ed-2` | Over Drive／高木さん（CV：高橋李依） | ED2 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-ed-3` | ひまわりの約束／高木さん（CV：高橋李依） | ED3 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-ed-4` | 学園天国／高木さん（CV：高橋李依） | ED4 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-ed-5` | じょいふる／高木さん（CV：高橋李依） | ED5 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-ed-6` | サンタが町にやってくる／高木さん（CV：高橋李依） | ED6 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-ed-7` | スノーマジックファンタジー／高木さん（CV：高橋李依） | ED7 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-ed-8` | 花／高木さん（CV：高橋李依） | ED8 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-in-1` | サンタになりたい／大原ゆい子 | IN1 | 2022-winter |
| `karakai-jouzu-no-takagi-san-3-in-2` | 風見鶏を見つけて／大原ゆい子 | IN2 | 2022-winter |
| `shuumatsu-no-harem-op-1` | JUST DO IT／H-el-ical// | OP1 | 2022-winter |
| `shuumatsu-no-harem-ed-1` | ENDiNG MiRAGE／EXiNA | ED1 | 2022-winter |
| `shuumatsu-no-harem-ed-2` | ENDiNG MiRAGE／EXiNA | ED2 | 第一方身分／用途待核，原入口保留 |
| `shuumatsu-no-harem-in-1` | 僕ら、ひとつだけのAnswer／Q’s(Luce Twinkle Wink) | IN1 | 2022-winter |
| `slow-loop-op-1` | やじるし→／ぽかぽかイオン | OP1 | 2022-winter |
| `slow-loop-ed-1` | シュワシュワ／Three∞Loop | ED1 | 2022-winter |
| `slow-loop-ed-2` | ゆるゆらりる／Three∞Loop | ED2 | 第一方身分／用途待核，原入口保留 |
| `orient-op-1` | Break out／Da-iCE | OP1 | 2022-winter |
| `orient-ed-1` | ナニイロ／羽多野渉 | ED1 | 2022-winter |
| `saiyuuki-reload-zeroin-op-1` | カミモホトケモ／GRANRODEO | OP1 | 2022-winter |
| `saiyuuki-reload-zeroin-ed-1` | 流転／仲村宗悟 | ED1 | 2022-winter |
| `tokyo-24-ku-op-1` | Papersky／Survive Said The Prophet | OP1 | 2022-winter |
| `tokyo-24-ku-ed-1` | 255,255,255／蒼生シュウタ（CV：榎木淳弥）、朱城ラン（CV：内田雄馬）、翠堂コウキ（CV：石川界人） | ED1 | 2022-winter |
| `tokyo-24-ku-in-1` | Find You／Survive Said The Prophet | IN1 | 2022-spring |
| `leadale-no-daichi-nite-op-1` | Happy encount／TRUE | OP1 | 2022-winter |
| `leadale-no-daichi-nite-ed-1` | 箱庭の幸福／田所あずさ | ED1 | 2022-winter |
| `hakozume-kouban-joshi-no-gyakushuu-op-1` | 知らなきゃ／安月名莉子 | OP1 | 2022-winter |
| `hakozume-kouban-joshi-no-gyakushuu-ed-1` | Change／nonoc | ED1 | 2022-winter |

- 公開anime ID：`curated-139648`、`curated-125682`、`curated-128828`、`curated-129191`、`curated-138424`、`curated-118465`、`curated-127549`、`curated-128034`、`curated-128400`、`curated-140643`、`curated-130166`、`curated-137312`。更正1個原名、0個演唱名義；同頁補44項詞／曲／編及17項演唱（按用途計）。新增4筆用途／4個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,816用途（4,556 OP／ED、250 IN、10 TS）均有dataStatus；2,249筆基本逐欄證據、2,567筆來源待細分。3,124個唯一用途逐批處理，其中2,864 OP／ED、250 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有15筆真正重讀舊來源更新日期。其他2,040部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 38筆既有用途全部保留，新增東京24區Find You、高木第三季サンタになりたい及風見鶏を見つけて、終末後宮僕ら、ひとつだけのAnswer四筆插曲。同頁補44項詞／曲／編角色及17項演唱紀錄（按用途計），沒有新影片、錄音、發行品或平台項目。
- 東京24區Find You由官方Music明第12話插曲及Survive Said The Prophet名義，中文逐話交叉，列2022春；原OP／ED僅列已證冬季，春季末話逐曲第一方仍待補。CUE兩cour普通曲由原官方資料核對，ED2／ED4／ED5特殊用途缺逐曲第一方，留空季度待核，不由商品同名推用途或同歌。ORIENT與失格紋按原期Music核歌曲，不把後cour頁面當第一cour精確首日。
- 高木第三季8首ED採原官方新聞／Music與中文或曲目交叉，沒有由劇場版曲目移入TV。兩首新插曲皆大原ゆい子名義、官方明第9／12話用途，中文逐話交叉。まっすぐ～ラララver.～的官方插曲分類與其他OP資料分歧，僅記續查，不新增未確定用途。学園天国只保官方高木名義，不推全部角色實唱。
- 最遊記與派出所女子以原Music核OP／ED、原台站表確認TV；歌手其他專輯只補已明本曲作者，不拿c/w作者當本曲。原地上波、AT-X、WEB先行與特番精確分開，未從播出星期猜分鐘。
- 現實主義勇者第二部分兩曲只列已證2022冬，4月3日終回的逐曲第一方證據待補；少女前線與里亞德錄大地的普通OP／ED採原期Music。Slow Loopゆるゆらりる身份／作者已證，但第9話特殊ED原公告不可讀，第三方tweet鏡像不升第一方，原ED2空季度待核。
- 終末後宮Sony明PiANO版本與原曲關係，ED2共用原ED1歌曲身分，保用途ID與版本標籤；第11話特殊ED仍只有交叉來源，留空季度。製作方Music Brains明第3話插曲僕ら、ひとつだけのAnswer與Q’s名義／作者；編曲與交叉資料分歧另列待核。動畫原TV第1話2021年10月8日21:30與先行WEB、2022年1月全期播出分開，不據此把各歌曲都補到2021秋。
- CUE與ORIENT原TV精確日時仍待可讀第一方原期公告，不把常規後續時刻當第一話；其餘原TV精度按實讀證據保存。只有15筆真正重讀舊來源更新日期，其他來源日期與媒體保留。未選2,040部動畫JSON逐檔相同。
- 全目錄4,816筆用途、2,249筆基本逐欄證據；216筆完全季度待核、150筆非空季度仍有待補條件。每首保存完整性狀態與具體續查條件，基本與詳細階段均未宣稱全目錄完成。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 12部42筆與未選資料保留性通過。Chromium393×852全部42筆狀態、16季度／48用途篩選、16搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第121–124批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider12部42筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗12頁42組狀態、16季度、48用途過濾、16搜尋、12筆TV／待核狀態展示、5用途待核、0非空季度基本證據缺口及4部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批只修改2022冬已選動畫、必要跨季登記、欄位盤點與進度表；程式、介面、解析器與依賴未改。原用途ID、序號、網址、媒體與未讀來源日期保留，既有排除錯誤用途未恢復。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/genjitsu-shugi-yuusha-no-oukoku-saikenki-part-2/、http://127.0.0.1:4345/anime/cue/、http://127.0.0.1:4345/anime/dolls-frontline/。 第125批2021秋、2022冬既有作品12部39筆既有用途已登記：`curated-131942`、`curated-123752`、`curated-138714`、`curated-124195`、`curated-142329`、`curated-105931`、`curated-113717`、`curated-136947`、`curated-131878`、`curated-126393`、`curated-134623`、`curated-132525`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-125（本機資料與展示驗證完成，發布檢查待完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。12部、原39用途加0筆已證新用途，共39筆：26筆基本逐欄證據、13筆特殊用途待核、5筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `jojo-no-kimyou-na-bouken-stone-ocean-op-1` | STONE OCEAN／ichigo from 岸田教団＆THE明星ロケッツ | OP1 | 2022-winter |
| `jojo-no-kimyou-na-bouken-stone-ocean-ed-1` | Distant Dreamer／Duffy | ED1 | 2022-winter |
| `shenmue-the-animation-op-1` | UNDEAD-NOID／伊東歌詞太郎 | OP1 | 2022-winter |
| `shenmue-the-animation-ed-1` | Sympathy／鳴ル銅鑼 | ED1 | 2022-winter |
| `heike-monogatari-op-1` | 光るとき／羊文学 | OP1 | 2022-winter |
| `heike-monogatari-ed-1` | unified perspective／agraph feat. ANI（スチャダラパー） | ED1 | 2022-winter |
| `hanma-baki-op-1` | Treasure Pleasure／GRANRODEO | OP1 | 2022-winter |
| `hanma-baki-ed-1` | Unchained World／GENERATIONS from EXILE TRIBE | ED1 | 2022-winter |
| `kimetsu-no-yaiba-yuukaku-hen-op-1` | 残響散歌／Aimer | OP1 | 2021-fall |
| `kimetsu-no-yaiba-yuukaku-hen-ed-1` | 朝が来る／Aimer | ED1 | 2021-fall |
| `blade-runner-black-lotus-op-1` | Feel You Now／Alessia Cara | OP1 | 2021-fall |
| `blade-runner-black-lotus-ed-1` | Feel You Now／Alessia Cara | ED1 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-2` | Water／X-Ambassadors | ED2 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-3` | Home／Walk Off The Earth | ED3 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-4` | Evil／Daya | ED4 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-5` | By My Side／A7S | ED5 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-6` | After You／Grey | ED6 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-7` | Save Myself／Kiana Ledé | ED7 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-8` | Intuition／salem ilese | ED8 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-9` | Rescue Me／Alesso & Danna Paola | ED9 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-10` | What Happens Next／Tori Kelly | ED10 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-11` | Thrash／G-Eazy | ED11 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-12` | Circles／iann dior | ED12 | 第一方身分／用途待核，原入口保留 |
| `blade-runner-black-lotus-ed-13` | Perfect Weapon／070 Shake | ED13 | 第一方身分／用途待核，原入口保留 |
| `ousama-ranking-op-1` | BOY／King Gnu | OP1 | 2021-fall |
| `ousama-ranking-op-2` | 裸の勇者／Vaundy | OP2 | 2022-winter |
| `ousama-ranking-ed-1` | Oz.／yama | ED1 | 2021-fall |
| `ousama-ranking-ed-2` | Flare／milet | ED2 | 2022-winter |
| `deep-insanity-the-lost-child-op-1` | 命の灯火／鈴木このみ | OP1 | 2021-fall |
| `deep-insanity-the-lost-child-ed-1` | 真珠色の革命／伊東歌詞太郎 | ED1 | 2021-fall |
| `gyakuten-sekai-no-denchi-shoujo-op-1` | Fever Dreamer／Mia REGINA | OP1 | 2021-fall |
| `gyakuten-sekai-no-denchi-shoujo-ed-1` | Reverse-Rebirth／鈴木愛奈 | ED1 | 2021-fall |
| `toushinki-g-s-frame-op-1` | 天／空白ごっこ | OP1 | 2021-fall |
| `toushinki-g-s-frame-ed-1` | Galactic Wind／MARiA | ED1 | 2021-fall |
| `lupin-iii-part-6-op-1` | THEME FROM LUPIN III 2021／Yuji Ohno & Lupintic Six | OP1 | 2021-fall, 2022-winter |
| `lupin-iii-part-6-ed-1` | MILK TEA／Yuji Ohno & Lupintic Six feat. Akari Dritschler | ED1 | 2021-fall |
| `lupin-iii-part-6-ed-2` | BITTER RAIN／Yuji Ohno & Lupintic Six feat. 藤原さくら | ED2 | 2022-winter |
| `build-divide-code-black-op-1` | BANG!!!／EGOIST | OP1 | 2021-fall |
| `build-divide-code-black-ed-1` | 不可逆的な命の肖像／眩暈SIREN | ED1 | 2021-fall |

- 公開anime ID：`curated-131942`、`curated-123752`、`curated-138714`、`curated-124195`、`curated-142329`、`curated-105931`、`curated-113717`、`curated-136947`、`curated-131878`、`curated-126393`、`curated-134623`、`curated-132525`。更正0個原名、8個演唱名義；同頁補32項詞／曲／編及7項演唱（按用途計）。新增0筆用途／0個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,816用途（4,556 OP／ED、250 IN、10 TS）均有dataStatus；2,275筆基本逐欄證據、2,541筆來源待細分。3,163個唯一用途逐批處理，其中2,903 OP／ED、250 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有14筆真正重讀舊來源更新日期。其他2,040部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 石之海原十二話、平家物語及範馬刃牙的先行WEB與後續TV分開。歌曲只採已確認的TV季度；石之海、Shenmue及平家物語的最早TV精確日時仍待原期節目表，沒有用串流日期代替。
- 範馬刃牙第一期TV確認2022年1月10日23:00；原2021年9月30日為Netflix先行網播，未混入第二期或後續作品。Shenmue採原海外TV冬季用途，日本較後配信及TV沿用季度仍待逐曲資料。
- 遊郭篇首播為2021年12月5日23:15；兩首常規曲目前確認秋季，冬季沿用仍待逐曲官方資料。王樣排名首播為10月15日00:55，前後半四曲分別確認秋、冬季。
- BLADE RUNNER — BLACK LOTUS確認美國Adult Swim／Toonami原TV，首兩話連播。首播當地實曆日為11月14日美東00:00，說明會保留時區；不把美東時分填成日本時間，也不把日語串流當作日本TV首播。
- Feel You Now的片頭用途已由官方確認，秋季可證，冬季沿用待逐話資料。其餘十三筆原片尾候選均保留：發行方可證曲名及藝人，但逐曲TV片尾用途不足，沒有從原聲帶、曲表或影片推定使用，也未因同名便合併歌曲。
- Deep Insanity最早TV為10月13日00:30，原音樂頁列兩曲的日文演唱名義及詞曲編，與同企劃遊戲分開。逆転世界ノ電池少女最早TV為10月11日23:00，早於地上波及串流。
- 闘神機ジーズフレーム原日本TV為10月12日19:00至19:30，10月11日先行WEB另列；唱片公司原公告索引及播出局半小時資料支持，正文受限如實記錄。日語歌曲與中文配音歌曲分開，沒有從配音名冊推歌唱。
- ルパン三世PART6官方前後半音樂頁確認同一主題，兩首片尾分屬秋、冬季；正式演奏名義採Yuji Ohno & Lupintic Six，客席歌唱各自列示。精確原TV首日時分仍待原期公告，第0話另曲未追加。
- ビルディバイドCode Black最早TV為10月10日00:30；兩首只核第一期秋季，沒有套用Code White資料。其他插曲候選未有足夠官方用途證據，本輪不新增。
- 作品與未重讀來源保留各自原核對日期，包括9月1日及9月2日；只有實際查閱並採用的來源更新至10月22日。個別實唱、作者或版本未明的欄位維持待補。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 12部39筆與未選資料保留性通過。Chromium393×852全部39筆狀態、20季度／60用途篩選、12搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第125–128批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider12部39筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗12頁39組狀態、20季度、60用途過濾、12搜尋、12筆TV／待核狀態展示、13用途待核、0非空季度基本證據缺口及5部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批涵蓋兩個原季度檔內十二部完整作品、39筆既有用途；保留用途識別、序號、既有媒體及其他作品資料。密集片尾不拆作或刪除，未知用途不當作已證。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/jojo-no-kimyou-na-bouken-stone-ocean/、http://127.0.0.1:4345/anime/shenmue-the-animation/、http://127.0.0.1:4345/anime/heike-monogatari/。 第126批2021秋既有作品10部26筆既有用途已登記：`curated-129874`、`curated-127400`、`curated-120646`、`curated-105119`、`curated-132473`、`curated-131584`、`curated-127412`、`curated-127401`、`curated-133965`、`curated-112716`。已登記的並行來源查核不預計為公開資料完成。

### 已登記後續範圍（沿用）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日；登記／後續實讀日期2026-10-22。此段為查核前登記快照，不代表資料或展示已完成。
- 2022冬原媒體／格式候選與2021秋接續12部39筆既有用途，完整作品不拆：`curated-131942`、`curated-123752`、`curated-138714`、`curated-124195`、`curated-142329`、`curated-105931`、`curated-113717`、`curated-136947`、`curated-131878`、`curated-126393`、`curated-134623`、`curated-132525`。原ID／序號／URL及未重讀來源日期保留；原TV實曆日／深夜時分、先行WEB與逐曲實用季度分開。
- 先核原名、正式演唱名義、OP／ED／IN用途與第一方＋中文優先交叉來源；同頁明詞曲編／本曲實唱或真正IN可低成本補，詳細錄音／影片／發行／平台後補，不由商品或cast推用途／歌唱。
- 每缺口最多兩輪定向，未明留held／partial與具體非空續查條件；待登記文件檢查及明確開查通知後才啟動來源查核。
- 石之海、Shenmue、平家物語與範馬刃牙先核原TV形式及先行WEB／海外TV次序；既有首日只保候選，不因配信先出或原owner年份排除。銀翼殺手14用途整作保留。其他格式／零用途候選仍保恢復條件，並非永久排除；未登記第126批不在本次開查範圍。標準TV季度聯集尚未閉合；既有歷史及未來登記全保留。

## 2020-2026-tv-basics-126（本機資料與展示驗證完成，發布檢查待完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原26用途加4筆已證新用途，共30筆：27筆基本逐欄證據、3筆特殊用途待核、5筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `kimetsu-no-yaiba-mugen-ressha-hen-tv-op-1` | 明け星／LiSA | OP1 | 2021-fall |
| `kimetsu-no-yaiba-mugen-ressha-hen-tv-ed-1` | 白銀／LiSA | ED1 | 2021-fall |
| `kimetsu-no-yaiba-mugen-ressha-hen-tv-ed-2` | 炎／LiSA | ED2 | 第一方身分／用途待核，原入口保留 |
| `world-trigger-3rd-season-op-1` | タイムファクター／神はサイコロを振らない | OP1 | 2021-fall |
| `world-trigger-3rd-season-ed-1` | 雲外憧憬／FantasticYouth | ED1 | 2021-fall |
| `senpai-ga-uzai-kouhai-no-hanashi-op-1` | アノーイング！さんさんウィーク！／五十嵐双葉（CV：楠木ともり）、桜井桃子（CV：早見沙織）、黒部夏美（CV：青山玲菜）、月城モナ（CV：古賀葵） | OP1 | 2021-fall |
| `senpai-ga-uzai-kouhai-no-hanashi-ed-1` | 虹が架かるまでの話／堀江由衣 | ED1 | 2021-fall |
| `shikizakura-op-1` | BELIEVE MYSELF／亜咲花 | OP1 | 2021-fall |
| `shikizakura-ed-1` | シキザクラ／May'n | ED1 | 2021-fall |
| `saihate-no-paladin-op-1` | The Sacred Torch／H-el-ical// | OP1 | 2021-fall |
| `saihate-no-paladin-ed-1` | 標火／やなぎなぎ | ED1 | 2021-fall |
| `visual-prison-op-1` | 残酷シャングリラ／O★Z | OP1 | 2021-fall |
| `visual-prison-ed-1` | BLOODY KISS／LOS†EDEN | ED1 | 2021-fall |
| `visual-prison-ed-3` | 銀河ティアラ／カルミラ | ED3 | 第一方身分／用途待核，原入口保留 |
| `visual-prison-ed-4` | Wing with wind／結希アンジュ | ED4 | 第一方身分／用途待核，原入口保留 |
| `visual-prison-in-1` | ROYAL CROWN／ECLIPSE | IN1 | 2021-fall |
| `visual-prison-ed-2` | 玉座のGEMINI／ECLIPSE | IN2 | 2021-fall |
| `visual-prison-in-3` | SACRIFICE／LOS†EDEN | IN3 | 2021-fall |
| `visual-prison-in-4` | ANGELIST／O★Z | IN4 | 2021-fall |
| `taishou-otome-otogibanashi-op-1` | オトメの心得／GARNiDELiA | OP1 | 2021-fall |
| `taishou-otome-otogibanashi-ed-1` | 真心に奏／土岐隼一 | ED1 | 2021-fall |
| `taishou-otome-otogibanashi-in-1` | 月夜ノコトリ／白鳥ことり（CV:伊藤彩沙） | IN1 | 2021-fall |
| `platinum-end-op-1` | Sense／BAND-MAID | OP1 | 2021-fall, 2022-winter |
| `platinum-end-ed-1` | 降伏論／宮下遊 | ED1 | 2021-fall |
| `platinum-end-ed-2` | ラストストロウ／空白ごっこ | ED2 | 2022-winter |
| `komi-san-wa-komyushou-desu-op-1` | シンデレラ／サイダーガール | OP1 | 2021-fall |
| `komi-san-wa-komyushou-desu-ed-1` | シンパシー／Kitri | ED1 | 2021-fall |
| `komi-san-wa-komyushou-desu-ed-2` | ヒカレイノチ／Kitri | ED2 | 2021-fall |
| `muv-luv-alternative-op-1` | 輪廻／V.W.P | OP1 | 2021-fall |
| `muv-luv-alternative-ed-1` | TRISTAR／STEREO DIVE FOUNDATION | ED1 | 2021-fall |

- 公開anime ID：`curated-129874`、`curated-127400`、`curated-120646`、`curated-105119`、`curated-132473`、`curated-131584`、`curated-127412`、`curated-127401`、`curated-133965`、`curated-112716`。更正2個原名、6個演唱名義；同頁補65項詞／曲／編及28項演唱（按用途計）。新增4筆用途／4個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,820用途（4,555 OP／ED、255 IN、10 TS）均有dataStatus；2,302筆基本逐欄證據、2,518筆來源待細分。3,193個唯一用途逐批處理，其中2,928 OP／ED、255 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有14筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 無限列車TV版原首播為2021年10月10日23:15，常規片頭片尾與劇場版分開；炎的原曲名、名義與作者已證，但官方只稱最終話主題歌，片尾分類仍待確認。
- ワールドトリガー第三期最早TV為10月10日01:30；兩首常規曲確認秋季，冬季逐曲沿用仍待官方資料，不把整部續播日期套到全部歌曲。
- 先輩がうざい後輩の話及シキザクラ確認原TV實曆日時分，角色歌唱只採本曲明示的署名；地方延播與先行串流分開。
- 最果てのパラディン第一期首播為10月9日22:00，兩曲只確認秋季，冬季沿用待逐話資料；未套用2023年第二期台表。
- ヴィジュアルプリズン的玉座のGEMINI由既有片尾候選更正為已證插曲，保留原識別及序號。另新增ROYAL CROWN、SACRIFICE、ANGELIST三首已證插曲；銀河ティアラ與Wing with wind雖有曲名、名義及作者，逐曲片尾用途仍待確認，沒有由角色表推歌唱。
- 大正オトメ御伽話確認原TV與兩首常規曲，新增已證插曲月夜ノコトリ。原始戀ノ歌候選維持既有隱藏狀態及完整資料，沒有恢復為不實片尾或另造用途。
- プラチナエンド原TV首播為10月8日01:28；Sense確認秋冬，前半片尾降伏論只確認秋季，冬季換曲界線待核。第二系列片尾採官方日文原名ラストストロウ，確認冬季，保留原用途。官方索引可讀而正文受限的範圍如實記錄。
- 古見第一期官方明示第一話特別片尾シンパシー、第2話起ヒカレイノチ；中文曲表分類不同，不改為插曲。片頭正式名義採サイダーガール。現台表為2023年重播，原2021年最早TV時分仍待原期公告。
- マブラヴ第一期原首話依官方更正為10月7日01:25，並非通常時段00:55；只核2021年秋季兩曲，後續第二期及重播換曲另分。
- 未重讀的官方首頁、影片及既有交叉來源仍保留原日期；本輪只為實際採用的已讀來源記10月22日。團體名單、商品收錄及職業簡介沒有用來推定逐曲歌唱或作者。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部30筆與未選資料保留性通過。Chromium393×852全部30筆狀態、13季度／39用途篩選、14搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第125–128批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider10部30筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁30組狀態、13季度、39用途過濾、14搜尋、10筆TV／待核狀態展示、3用途待核、0非空季度基本證據缺口及5部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批涵蓋2021秋季檔內十部完整作品、27筆原始歌曲欄位，其中26筆為原公開用途；一筆既有隱藏候選完整保留。四筆新插曲與一筆用途更正依逐曲證據處理，其他作品與未選欄位維持原樣。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/kimetsu-no-yaiba-mugen-ressha-hen-tv/、http://127.0.0.1:4345/anime/world-trigger-3rd-season/、http://127.0.0.1:4345/anime/senpai-ga-uzai-kouhai-no-hanashi/。 第127批2021秋既有作品10部27筆既有用途已登記：`curated-108987`、`curated-131565`、`curated-129898`、`curated-126793`、`curated-126213`、`curated-131005`、`curated-129068`、`curated-128827`、`curated-131019`、`curated-127720`。已登記的並行來源查核不預計為公開資料完成。

## 第121–124批合併正式驗收

- 四批40部、128筆展示用途，本輪核對128筆、整筆保留0筆。基本六組證據齊116筆，本輪新補116筆；用途待核且空季度12筆，已證季度但基本欄位缺證0筆，基本缺證共12筆；17筆非空季度續查可與缺證重疊。新增16用途／16歌曲ID，同曲關係更正5筆後唯一歌曲淨增11。
- [PR #199](https://github.com/kyeunga25/anisonary/pull/199)及main的整棵tree符合原local124凍結產物；正常quality／Workers與verify:full採PR及main各自精確SHA、實際audit及必要E2E證據，不把未完成本機full計為通過。來源`92a28d4a2936d64583113ce22ad637a92bb92b91`／`batch124-basics`；固定artifact已部署，version metadata來源／tag／PR相符。
- 合併40部128筆正式ApiProvider相同；152條實際HTML／JSON／目標季度／搜尋資產符合凍結產物，另2條真404。第124批12部42筆API／routes自成功superset導出，未重複HTTP；只第124批另有真正production Chromium手機／桌面及截圖已檢視，不宣稱其他三批production手機已重測。
- 只更新已登記2022春／冬作品、必要registry與進度統計；owner目標物件外bytes及未選公開JSON保留。已明同曲與用途分類依逐曲第一方及審閱facts，沒有app／scripts／tests／依賴改動；既有 checker 修正沿真正正式120基線，正常完整CI仍核24單元測試／audit及必要E2E。
- 本組正式驗收完成；基本、詳細與長期範圍仍未完成。

## 2020-2026-tv-basics-127（本機資料與展示驗證完成，發布檢查待完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。10部、原27用途加1筆已證新用途，共28筆：23筆基本逐欄證據、5筆特殊用途待核、0筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `sakugan-op-1` | 恍惚ラビリンス／遠藤正明 | OP1 | 2021-fall |
| `sakugan-ed-1` | Shine／MindaRyn | ED1 | 2021-fall |
| `sakugan-in-1` | Because of you／MindaRyn | IN1 | 2021-fall |
| `takt-op-destiny-op-1` | タクト／ryo (supercell) feat. まふまふ, gaku | OP1 | 2021-fall |
| `takt-op-destiny-ed-1` | SYMPHONIA／中島美嘉 | ED1 | 2021-fall |
| `sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru-op-1` | Dark seeks light／ニノミヤユイ | OP1 | 2021-fall |
| `sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru-ed-1` | A Promise／結城アイラ | ED1 | 2021-fall |
| `sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru-ed-2` | A Promise／ディア（CV：上田麗奈） | ED2 | 第一方身分／用途待核，原入口保留 |
| `puraore-pride-of-orange-op-1` | ファイオー・ファイト！／SMILE PRINCESS | OP1 | 2021-fall |
| `puraore-pride-of-orange-ed-1` | オレンジ／May'n | ED1 | 2021-fall |
| `shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-op-1` | 息を吸う ここで吸う 生きてく／ゆいにしお | OP1 | 2021-fall |
| `shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita-ed-1` | みんなおなじ／JYOCHO | ED1 | 2021-fall |
| `kyoukai-senki-op-1` | enemy／Blank paper | OP1 | 第一方身分／用途待核，原入口保留 |
| `kyoukai-senki-ed-1` | You're my perfect mirror／富金原佑菜 | ED1 | 第一方身分／用途待核，原入口保留 |
| `shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-op-1` | EVOLUTiON：／南條愛乃 | OP1 | 2021-fall |
| `shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-ed-1` | Moonlight Walk／Poppin'Party | ED1 | 2021-fall |
| `cardfight-vanguard-overdress-season-2-op-1` | START／すとぷり | OP1 | 2021-fall |
| `cardfight-vanguard-overdress-season-2-ed-1` | Blessed Rain／Amane Shindou | ED1 | 第一方身分／用途待核，原入口保留 |
| `cardfight-vanguard-overdress-season-2-ed-2` | Fateful...／Morfonica | ED2 | 2021-fall |
| `cardfight-vanguard-overdress-season-2-ed-3` | ZEAL of proud／Roselia | ED3 | 第一方身分／用途待核，原入口保留 |
| `tsuki-to-laika-to-nosferatu-op-1` | 緋ノ月／ALI PROJECT | OP1 | 2021-fall |
| `tsuki-to-laika-to-nosferatu-ed-1` | ありふれたいつか／Chima | ED1 | 2021-fall |
| `mushoku-tensei-isekai-ittara-honki-dasu-part-2-op-1` | 目覚めの唄／大原ゆい子 | OP1 | 2021-fall |
| `mushoku-tensei-isekai-ittara-honki-dasu-part-2-op-2` | 継承の唄／大原ゆい子 | OP2 | 2021-fall |
| `mushoku-tensei-isekai-ittara-honki-dasu-part-2-op-3` | 祈りの唄／大原ゆい子 | OP3 | 2021-fall |
| `mushoku-tensei-isekai-ittara-honki-dasu-part-2-op-4` | 遠くの子守の唄／大原ゆい子 | OP4 | 2021-fall |
| `mushoku-tensei-isekai-ittara-honki-dasu-part-2-op-5` | 旅人の唄～帰郷～／大原ゆい子 | OP5 | 2021-fall |
| `mushoku-tensei-isekai-ittara-honki-dasu-part-2-ed-1` | 風と行く道／大原ゆい子 | ED1 | 2021-fall |

- 公開anime ID：`curated-108987`、`curated-131565`、`curated-129898`、`curated-126793`、`curated-126213`、`curated-131005`、`curated-129068`、`curated-128827`、`curated-131019`、`curated-127720`。更正1個原名、9個演唱名義；同頁補70項詞／曲／編及9項演唱（按用途計）。新增1筆用途／1個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,821用途（4,555 OP／ED、256 IN、10 TS）均有dataStatus；2,325筆基本逐欄證據、2,496筆來源待細分。3,221個唯一用途逐批處理，其中2,955 OP／ED、256 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有26筆真正重讀舊來源更新日期。其他2,042部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 《SAKUGAN》補入〈Because of you〉的TV插曲用途；保留原片頭與片尾用途。
- 《世界頂尖的暗殺者轉生為異世界貴族》的〈A Promise（ディア Ver.）〉依官方說明與原曲連結；本期特殊片尾用途仍待核實。
- 《境界戰機》兩首曲目的個別片頭／片尾分類，以及《先導者 overDress 第二季》兩首特殊片尾用途，保留續查。
- 《月與萊卡與吸血公主》首話為實曆10月4日01:50，與通常時段區分；《宿命迴響》精確首播日時仍待官方資料。
- 三個原本未公開的歌曲候選保持原樣，未當作已確認用途加入。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 10部28筆與未選資料保留性通過。Chromium393×852全部28筆狀態、10季度／30用途篩選、11搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第125–128批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider10部28筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗10頁28組狀態、10季度、30用途過濾、11搜尋、10筆TV／待核狀態展示、5用途待核、0非空季度基本證據缺口及0部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 涵蓋2021秋季檔內十部完整作品、30筆原始歌曲欄位，其中27筆為既有公開用途。三筆隱藏候選完整保留；新增一筆已具第一方與交叉證據的插曲，並更正一筆官方明示的同曲關係。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/sakugan/、http://127.0.0.1:4345/anime/takt-op-destiny/、http://127.0.0.1:4345/anime/sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru/。 第128批2021秋既有作品9部29筆既有用途已登記：`curated-118103`、`curated-137309`、`curated-136119`、`curated-133510`、`curated-132071`、`curated-131586`、`curated-131083`、`curated-126897`、`curated-109745`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-128（本機資料與展示驗證完成，發布檢查待完成）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍與2026-10-14截止日；實讀2026-10-22。9部、原29用途加2筆已證新用途，共31筆：28筆基本逐欄證據、3筆特殊用途待核、5筆部分季度條件。作品聯集、基本全部歌曲、詳細與長期範圍未完成。

| 公開theme ID | 原名／演唱名義 | 用途 | 已確認季度／狀態 |
| --- | --- | --- | --- |
| `kyuuketsuki-sugu-shinu-op-1` | DIES IN NO TIME／福山潤 | OP1 | 2021-fall |
| `kyuuketsuki-sugu-shinu-ed-1` | Strangers／TRD | ED1 | 2021-fall |
| `digimon-ghost-game-op-1` | FACTION／Wienners | OP1 | 2021-fall |
| `digimon-ghost-game-ed-1` | ペダル／藍色アポロ | ED1 | 2021-fall |
| `digimon-ghost-game-ed-2` | だって今日まで恋煩い／BMK | ED2 | 2022-winter |
| `digimon-ghost-game-ed-3` | ひかりあうものたち／Bye-Bye-Handの方程式 | ED3 | 2022-spring |
| `digimon-ghost-game-ed-4` | モンスターディスコ／スガ シカオ×ヒャダイン | ED4 | 2022-summer |
| `digimon-ghost-game-ed-5` | STRAWBERRY／kobore | ED5 | 2022-fall |
| `digimon-ghost-game-ed-6` | Take Me Maybe／Penthouse | ED6 | 2023-winter |
| `digimon-ghost-game-in-1` | First Riders／増倉義将 | IN1 | 2021-fall |
| `digimon-ghost-game-in-2` | MAKUAKE／増倉義将 | IN2 | 2022-fall |
| `waccha-primagi-op-1` | Dreaming Sound／鈴木杏奈 | OP1 | 2021-fall, 2022-winter |
| `waccha-primagi-op-2` | Chasing the dream／鈴木杏奈 | OP2 | 2022-spring, 2022-summer |
| `waccha-primagi-op-3` | Magic×Color／鈴木杏奈 | OP3 | 2022-summer, 2022-fall |
| `waccha-primagi-ed-1` | Magical Future／陽比野まつり（CV：廣瀬千夏）、みゃむ（CV：小池理子） | ED1 | 2021-fall, 2022-winter |
| `waccha-primagi-ed-2` | チェックワンツー／みゃむ（CV：小池理子）、チムム（CV：引坂理絵）、きゃろん（CV：吉河順央） | ED2 | 2022-spring, 2022-summer, 2022-fall |
| `waccha-primagi-ed-3` | マジ・ワッチャパレード／陽比野まつり（CV：廣瀬千夏）、みゃむ（CV：小池理子） | ED3 | 第一方身分／用途待核，原入口保留 |
| `gunmachan-op-1` | SWITCH！／ぐんまちゃん（CV：高橋花林）、あおま（CV：内田彩）、みーみ（CV：小倉唯） | OP1 | 2021-fall |
| `gunmachan-ed-1` | Happy／今村麻莉愛（HKT48） | ED1 | 2021-fall |
| `tesla-note-op-1` | PUPPET’S／TOKYO MONSTERS | OP1 | 2021-fall |
| `tesla-note-ed-1` | 散文的LIFE／ニノミヤユイ | ED1 | 2021-fall |
| `86-eighty-six-part-2-op-1` | 境界線／amazarashi | OP1 | 2021-fall |
| `86-eighty-six-part-2-ed-1` | アルケミラ／リーガルリリー | ED1 | 2021-fall |
| `86-eighty-six-part-2-ed-2` | Avid／SawanoHiroyuki[nZk]、Mizuki | ED2 | 第一方身分／用途待核，原入口保留 |
| `86-eighty-six-part-2-ed-3` | LilaS／SawanoHiroyuki[nZk]、Honoka Takahashi | ED3 | 第一方身分／用途待核，原入口保留 |
| `mieruko-chan-op-1` | 「見えないからね!?」／四谷みこ（CV：雨宮 天） | OP1 | 2021-fall |
| `mieruko-chan-ed-1` | 「ミタナ？　ミタヨネ？？　ミテルヨネ？？？」／四谷みこ（CV：雨宮 天） | ED1 | 2021-fall |
| `sankaku-mado-no-sotogawa-wa-yoru-op-1` | サイカ／フレデリック | OP1 | 2021-fall |
| `sankaku-mado-no-sotogawa-wa-yoru-ed-1` | Breakers／羽多野 渉 | ED1 | 2021-fall |
| `muteking-the-dancing-hero-op-1` | ラビリンス／ORANGE RANGE | OP1 | 2021-fall |
| `muteking-the-dancing-hero-ed-1` | 希望の唄／KALMA | ED1 | 2021-fall |

- 公開anime ID：`curated-118103`、`curated-137309`、`curated-136119`、`curated-133510`、`curated-132071`、`curated-131586`、`curated-131083`、`curated-126897`、`curated-109745`。更正4個原名、8個演唱名義；同頁補51項詞／曲／編及15項演唱（按用途計）。新增2筆用途／2個歌曲身分，沒有新影片、錄音、發行品或平台項目。
- 全目錄2,052部、4,823用途（4,555 OP／ED、258 IN、10 TS）均有dataStatus；2,353筆基本逐欄證據、2,470筆來源待細分。3,252個唯一用途逐批處理，其中2,984 OP／ED、258 IN、10 TS。原ID／序號、明確歌曲ID、原媒體及未重讀日期保留；只有12筆真正重讀舊來源更新日期。其他2,043部動畫JSON逐檔SHA-256相同；例外最小更正見下方。
- 28季表見頂部；現有分母未閉合、跨季不可加總。[CATALOG_STATS.md](./CATALOG_STATS.md)由已驗證產物自動盤點欄位，三作者角色有值不表示全名單、版本或平台資料完成。

### 證據與續查

- 吸血鬼すぐ死ぬ原第一季首播為2021年10月4日23:00，兩首常規歌曲只採本期資料，較後第二季及網路配信分開。
- デジモンゴーストゲーム原TV首播為10月3日09:00；常規片尾輪替按各官方原期公告逐曲確認，秋季至後續季度分開。新增First Riders及MAKUAKE兩筆已證插曲，各自保留來源，後續沿用季度仍待逐話資料，不把每首歌曲套整部長篇期間。
- ワッチャプリマジ五首常規曲按TV輪替確認，片尾原名採チェックワンツー。マジ・ワッチャパレード雖有商品曲名，正式演唱與特殊片尾用途仍不足，保留原候選；不從遊戲章次或商品版本推TV使用。
- ぐんまちゃん原製作方明示首季為每回半小時、含三段短故事的十三回TV編排，首播為10月3日08:00；與獨立七分鐘版本及第二季分開。SWITCH！只列本曲已明示的三角色歌唱及作者。
- テスラノート原TV首播為10月3日23:00，先於23:30網播；曲名PUPPET’S與正式名義ニノミヤユイ依官方原文，沒有從聲優角色推演唱。
- 86原第2季度首播為10月3日00:00；官方更正最末兩話延至2022年3月12日及19日23:30。兩首常規曲只確認秋季，冬季使用仍待逐曲證據；Avid與LilaS原特殊片尾候選保留，未以跨季度通用曲表或中文不同分類當作本期官方證據。
- 見える子ちゃん最早TV為10月3日22:00；原音樂頁明示四谷みこ的本曲角色演唱及完整詞曲編，不從配音名冊推定。
- さんかく窓の外側は夜原TV為10月3日22:00；動畫兩曲與真人電影主題曲分開，已補同頁明示的三原康司詞曲、EvanCall作曲與羽多野渉歌唱。
- MUTEKING最早TV為10月3日01:26，原始節目標示10月2日深夜；兩首常規曲已補官方同頁完整詞曲編，2022年1月重播不自動另加歌曲季度，一般參加藝人名單不推成插曲。
- 普通官方索引可讀但正文受限之處如實保留；未重讀的官方首頁、影片與舊交叉來源仍保留原日期。只有本輪實際採用的來源記10月22日。

### 檢查與展示

- 必要本機檢查 verify:batch 通過（24項單元測試、完整建置及4,277份公開產物、統計／公開邊界／diff）；ApiProvider 9部31筆與未選資料保留性通過。Chromium393×852全部31筆狀態、19季度／57用途篩選、11搜尋與待核／部分季度通過；1280×900桌面歌單及兩張實際截圖已檢視，無溢出、app errors或未同意iframe。完整正式發布檢查於合併發布時由正常 CI 執行，目前不記為正式驗收。
- 第125–128批為獨立發布組；逐批本機資料與展示驗證後分類提交，正常完整audit／PR與main CI／部署及正式驗收仍待完成；未驗證、未完成與尚未正式資料分開保留。
- ApiProvider9部31筆、28季、ID／媒體／來源日期及未改JSON保留性通過。Chromium393×852驗9頁31組狀態、19季度、57用途過濾、11搜尋、9筆TV／待核狀態展示、3用途待核、0非空季度基本證據缺口及5部分季度；手機頁面DOM無橫向溢出、app errors或未同意iframe。桌面、截圖及人工view僅以本批實際驗證備註為準，未有明確證據不計完成。
- 本批涵蓋2021秋季原檔九部完整作品、29筆既有公開用途與兩筆新增插曲。半小時分段TV按原播出形式保留，既有識別、序號、媒體及未選作品資料維持原樣。文件連結、最後公開邊界、diff與本機備份依實際結果記錄；未另驗證者仍待確認。完整audit、GitHub CI及Cloudflare部署尚未正式驗收，本機成功不表示已部署。

本機預覽：http://127.0.0.1:4345/anime/kyuuketsuki-sugu-shinu/、http://127.0.0.1:4345/anime/digimon-ghost-game/、http://127.0.0.1:4345/anime/waccha-primagi/。 第129批2021秋、2021夏既有作品10部25筆既有用途已登記：`curated-132806`、`curated-131264`、`curated-122292`、`curated-126790`、`curated-87502`、`curated-128705`、`curated-122052`、`curated-132456`、`curated-117002`、`curated-122434`。已登記的並行來源查核不預計為公開資料完成。

## 2020-2026-tv-basics-129（執行中）

- 固定2020–2026標準TV基本階段、2007–2026長期範圍及2026-10-14截止日；登記／後續實讀日期2026-10-22。此段只登記，尚未啟動本批來源查核，不計完成。
- 2021秋剩餘普通候選接2021夏最新候選10部25筆既有用途，完整作品不拆：`curated-132806`、`curated-131264`、`curated-122292`、`curated-126790`、`curated-87502`、`curated-128705`、`curated-122052`、`curated-132456`、`curated-117002`、`curated-122434`。原ID／序號／URL及未重讀來源日期保留；原TV實曆日／深夜時分、先行WEB與逐曲實用季度分開。
- 先核原名、正式演唱名義、OP／ED／IN用途與第一方＋中文優先交叉來源；同頁明詞曲編／本曲實唱或真正IN可低成本補，詳細錄音／影片／發行／平台後補，不由商品或cast推用途／歌唱。
- 每缺口最多兩輪定向，未明留held／partial與具體非空續查條件；待登記文件檢查及明確開查通知後才啟動來源查核。
- 本批秋季6部與夏季4部整作接續，海賊王女原有海外先行標籤與日本TV日期分開查，不以原日期當日本首TV；全作品續播不能自動分給每曲季度。秋季11部零歌曲候選仍全留恢復名冊：0曲不是無OPED證據，若既有證據顯示正常24分鐘TV即提高優先，其他短篇／格式待核後補，不阻較舊季度；目前未查來源，未確認短篇。標準TV季度聯集尚未閉合；既有歷史及未來登記全保留。
