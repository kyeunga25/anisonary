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

| 來源                                                                                    | 目前用途                                         | 條款／權利重點                                                                                                                                 | 本專案控制                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 動畫官網、製作／發行／播出單位、唱片公司、藝人官方渠道                                  | 最終核對作品、播出、歌曲及 credits               | 公開頁面不等於內容重用授權                                                                                                                     | 只保存必要事實、短標題及來源 URL；不下載介紹、海報、錄音或影片                                                                                                                                    |
| [Annict API](https://docs.annict.com/docs/ja/api/v1/works)                              | 日本季度 inventory 與 identity cross-check       | [Annict 利用規約](https://api.annict.com/terms) 保留服務／授權人知識產權並禁止侵權、過度負荷等行為                                             | OAuth token 不進 Git；只用文件化 Works API、必要分頁及最少欄位；不取得使用者資料、不保存 raw response                                                                                             |
| [Bangumi API](https://bangumi.github.io/api/)                                           | 中文條目與日期交叉核對                           | [版權及開發者平台聲明](https://bgm.tv/about/copyright) 要求使用 API、避免 crawler、只取必要資料；條目信息標示為 CC BY-SA，使用者內容仍屬投稿者 | 使用文件化 `GET /v0/subjects`、識別 User-Agent、最少欄位及來源 URL；不收集使用者資料或再提供 raw 平台資料；Bangumi 衍生部分維持其來源聲明所列 CC BY-SA 條款                                       |
| [AniList API](https://docs.anilist.co/)                                                 | 有界的作品 ID、公開頁及 remote media cross-check | [API Terms](https://docs.anilist.co/guide/terms-of-use) 禁止 backup／storage service、資料囤積、大規模收集及競爭性 tracker，商業用途另有門檻   | 不建立 tracker、不收集 user／list data、不批量鏡像或保存 API response；只保留已人工審閱記錄所需 ID／連結；remote image 不下載、重新託管或離線快取。商業化、範圍擴張或條款不確定時停用並先取得許可 |
| [AnimeThemes](https://animethemes.moe/)、[UZUREA](https://uzurea.net/) 及其他主題曲索引 | 發現 OP／ED 缺口及季度歸類                       | 網頁／API 可見性不等於媒體或資料重用授權                                                                                                       | 只作人工 cross-check 並保留來源 URL；不複製資料集、影片、音訊、圖片或長篇文字                                                                                                                     |
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
