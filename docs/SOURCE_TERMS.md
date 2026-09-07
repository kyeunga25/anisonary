# 資料來源條款與使用閘門 / Source Terms and Use Gates

最後核對 / Last reviewed: **2026-09-02**

本文件把公開資料來源的條款轉成 Anisonary 的最小使用規則。它不是法律意見，
也不表示來源方背書或已向 Anisonary 授予其全部資料。來源條款變更、用途商業化、
資料規模擴張或使用方式改變時，必須停止自動更新，重新核對並在需要時取得書面許可。

## 共通規則

- 只取得完成季度盤點、作品識別及歌曲核對所需的最少欄位；不收集使用者資料；
- 只使用官方 API 或一般公開頁面，不使用 crawler、繞過限制、未公開 endpoint、
  cookie session、批量鏡像或 raw response archive；
- 不把任何來源當作 backup、資料倉庫或可再散布的原始資料集；
- 每個公開記錄保留可點擊來源 URL、角色及人工核對日期；不複製長篇介紹、評論、
  圖像或其他表達內容；
- 第三方資料、ID、媒體與來源 ledger 不在專案 Apache-2.0 授權範圍內，詳見
  [`../LICENSING.md`](../LICENSING.md)；
- 來源限制與產品功能衝突時，移除或停止使用該來源，不以專案授權覆蓋來源條款。

## 來源矩陣

Wikidata、オリミュウストア、LiveChart、日本 Columbia、Yamaha 與アニソン・オンライン的下列使用範圍另於 **2026-09-07** 核對；Bandai Namco Music Live 的商品目錄及權利頁另於 **2026-09-08** 核對；其餘來源保留上述核對日期。

| 來源                                                                                    | 目前用途                                         | 條款／權利重點                                                                                                                                 | 本專案控制                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 動畫官網、製作／發行／播出單位、唱片公司、藝人官方渠道                                  | 最終核對作品、播出、歌曲及 credits               | 公開頁面不等於內容重用授權                                                                                                                     | 只保存必要事實、短標題及來源 URL；不下載介紹、海報、錄音或影片                                                                                                                                    |
| [Bandai Namco Music Live](https://catalog.bandainamcomusiclive.co.jp/) | 個別歌曲用途、正式演唱名義與 CD 日期 | [網站條款](https://www.bandainamcomusiclive.co.jp/terms/)及[著作權／肖像權](https://catalog.bandainamcomusiclive.co.jp/low/)保留文章、媒體及資料庫編纂權；公開商品頁不授予整頁或資料集重用權 | 只人工核對必要事實及短識別名稱並保留來源連結；不複製頁面原文、曲目資料集或媒體，不嵌入唱片網站或取得試聽檔案 |
| [日本 Columbia](https://columbia.jp/) | 個別 OP／ED 的演唱版本、製作資料、發行日期與官方影片連結 | [Site Policy](https://columbia.jp/sitepolicy/) 保留內容權利，限制未經許可的複製、轉載與頁面嵌入；公開商品頁不授予整份資料或媒體重用權 | 只核對必要事實、短識別名稱與來源 URL；不保存頁面原文、圖片、歌詞、試聽音訊或影片，不嵌入來源網站 |
| [Yamaha 樂譜出版](https://www.ymm.co.jp/) | 個別原曲的作詞與作曲署名核對 | [網站政策](https://www.yamaha-meh.co.jp/agreement.html) 保留內容及商標權利，限制未經許可的複製、改作與散布；一般連結可自由建立 | 只核對原曲必要署名並保留來源；不取得樂譜樣本、歌詞、錄音、圖片或頁面原文；樂譜編曲與書籍日期不作動畫原曲編曲及發行日期 |
| [アニソン・オンライン](https://anison.online/) | 個別季度、OP／ED 用途與演唱者交叉核對 | [利用規約](https://anison.online/fmenu/terms) 保留內容著作權及商標權，並說明資料及外連沒有正確性保證 | 只人工交叉核對必要識別欄位並保留 URL；不鏡像頁面、媒體或資料集，不建立來源站的使用者書籤 |
| [LiveChart](https://www.livechart.me/) | 未作目前目錄的資料來源 | [Terms of Service](https://www.livechart.me/pages/terms) 禁止未取得事先同意的 scraping | 未取得事先同意前停止自動存取或擷取；不以其頁面補入 ID、名稱、圖片或其他目錄資料，改用可獨立核對且條款相容的來源 |
| [Wikidata](https://www.wikidata.org/) | 個別作品的外部識別交叉連結 | [Licensing](https://www.wikidata.org/wiki/Wikidata:Licensing) 將主命名空間的結構化資料列為 CC0，其他文字適用不同條款 | 只人工核對必要 ID 並保留條目連結；不保存原始回應、介紹或媒體；不把 CC0 延伸至其他來源或整個目錄 |
| [オリミュウストア](https://music.orimyu.com/) | 個別歌曲用途及配信名義交叉核對 | [利用規約](https://music.orimyu.com/php/support/UserSupport.php?pcd=rule) 保留平台與第三方權利，限制數位內容的複製、改作及再傳送 | 只核對公開商品頁的必要事實並保留連結；不購入、下載、試聽、保存或再散布歌曲、歌詞、圖片與頁面原文 |
| [Annict API](https://docs.annict.com/docs/ja/api/v1/works)                              | 日本季度 inventory 與 identity cross-check       | [Annict 利用規約](https://api.annict.com/terms) 保留服務／授權人知識產權並禁止侵權、過度負荷等行為                                             | OAuth token 不進 Git；只用文件化 Works API、必要分頁及最少欄位；不取得使用者資料、不保存 raw response                                                                                             |
| [Bangumi API](https://bangumi.github.io/api/)                                           | 中文條目與日期交叉核對                           | [版權及開發者平台聲明](https://bgm.tv/about/copyright) 要求使用 API、避免 crawler、只取必要資料；條目信息標示為 CC BY-SA，使用者內容仍屬投稿者 | 使用文件化 `GET /v0/subjects`、識別 User-Agent、最少欄位及來源 URL；不收集使用者資料或再提供 raw 平台資料；Bangumi 衍生部分維持其來源聲明所列 CC BY-SA 條款                                       |
| [AniList API](https://docs.anilist.co/)                                                 | 有界的作品 ID、公開頁及 remote media cross-check | [API Terms](https://docs.anilist.co/guide/terms-of-use) 禁止 backup／storage service、資料囤積、大規模收集及競爭性 tracker，商業用途另有門檻   | 不建立 tracker、不收集 user／list data、不批量鏡像或保存 API response；只保留已人工審閱記錄所需 ID／連結；remote image 不下載、重新託管或離線快取。商業化、範圍擴張或條款不確定時停用並先取得許可 |
| [AnimeThemes](https://animethemes.moe/)、[UZUREA](https://uzurea.net/) 及其他主題曲索引 | 發現 OP／ED 缺口及季度歸類                       | 網頁／API 可見性不等於媒體或資料重用授權                                                                                                       | 只作人工 cross-check 並保留來源 URL；不複製資料集、影片、音訊、圖片或長篇文字                                                                                                                     |
| [YourAnimes](https://youranimes.tw/)、[ACG Secrets](https://acgsecrets.hk/) 及中文年度動畫列表 | 繁中季度清單、首播月份與名稱交叉核對             | 公開季度頁及條目頁不等於整站資料、文案、圖片或商標的重用授權                                                                                     | 只作有界人工盤點，保存必要的已審閱事實與來源 URL；不鏡像季度頁、不保存 raw response、不收集使用者資料，也不把社群名稱自動標示為正式譯名                                                           |
| YouTube 官方／正式授權渠道                                                              | 核對歌曲與提供明確外連                           | 平台及影片權利人條款獨立適用                                                                                                                   | 只保存 reviewed video ID／URL；不下載、不代理、不自動播放，使用者明確同意後才連線                                                                                                                 |
| 台灣／香港代理、串流、出版社及播出機構                                                  | 正式繁中名稱與地區發行核對                       | 名稱、文案、圖片、商標及頁面內容仍屬各權利人                                                                                                   | 只保存必要名稱、發行事實及來源 URL；不把頁面文案、圖片或商標納入開放授權                                                                                                                          |

## 發佈前檢查

新增或更新來源前必須確認：

1. URL 是來源方的公開 HTTPS 頁面或文件化 API；
2. 使用方式、規模、商業狀態與目前條款相容；
3. 沒有 user data、token、cookie、raw dump、crawler output 或未公開 endpoint；
4. 記錄只包含必要事實與短識別欄位，並保存 provenance；
5. 媒體沒有被下載、代理、重新託管或加入離線 cache；
6. 相應資料仍被 [`LICENSING.md`](../LICENSING.md) 排除於 Apache-2.0；
7. `npm run catalog:check`、`npm test`、`npm run build` 及人工差異審查通過。

若任何一項不能確認，該來源或記錄不得加入發佈快照。

---

This document converts public source terms into minimum operational controls.
Anisonary uses only documented APIs or ordinary public pages, collects no user
data, retains no raw API archive, and does not use a source as a backup,
mirror, or bulk dataset. Source records and third-party media are excluded
from the repository's Apache-2.0 scope. Commercialisation, expansion in scale,
or changed terms requires a new review and, where necessary, written
permission. If compliance cannot be confirmed, the source or affected record
must not be published.
