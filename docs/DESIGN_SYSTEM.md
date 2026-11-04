# 設計系統 / Design System

現有元件、CSS tokens 與實際瀏覽器呈現是設計依據。歷史 raster 概念圖不保存在公開 repository；作品圖像沿用已核對的來源，不使用生成式圖片。

## Tokens 與容器

以 [`global.css`](../src/styles/global.css) 為準，不在資料檔案保存設計值：

| 用途 | 淺色 | 深色 |
| --- | --- | --- |
| Canvas | `#ffffff` | `#08112b` |
| Surface | `#ffffff` | `#0d1939` |
| Subtle | `#f7f8fa` | `#111f43` |
| Ink | `#17233d` | `#f4f6ff` |
| Muted | `#667085` | `#aab4cd` |
| Accent | `#d3443c` | `#ff7a70` |
| Focus | `#2f63d8` | `#8cb0ff` |

- 控制項與卡片圓角為 6px；以細邊線區隔區塊。
- `.page-shell` 最大寬度為 1420px，使用流動頁邊距；內文頁限制為 900px。
- 系統 sans 字體搭配繁體中文與日文 fallback；已核對的原文名稱保留 `lang="ja"`。
- 桌面沿用左側導覽，手機以選單按鈕控制；鍵盤 focus、深淺色與 reduced motion 共用既有設定。

## 展示責任

| 範圍 | 元件／樣式 | 行為 |
| --- | --- | --- |
| 首頁、季度歌單、全部歌曲、搜尋 | `SongPlaylist`、`SongRow`、`playlist.css` | 緊湊歌曲列；通常每頁 24 列，季度完整內容另保留給無 JavaScript 瀏覽 |
| 季度目錄／年份 | `catalog.css` | 年代、年份及季度的原生連結；季度另提供海報牆入口 |
| 季度展示切換 | `SeasonViewNav` | 歌曲列表與動畫海報牆各有穩定 URL，預設季度入口仍是 playlist |
| 動畫身份 | `AnimeHero` | 小型 2:3 海報、原文／繁中名稱、季度、播出資料、審閱日期與外部參考 |
| 全部主題曲 | `AnimeThemes`、`ThemeCard` | 歌名、演唱者、名單與來源直接展開；桌面維持名單／來源雙欄，手機單欄；曲目跳轉與長列表篩選並存 |
| 延伸歌曲資料 | `ThemeDataStatus`、`SongRelations` | 資料狀態、音源與發行品直接可見；細項欄位證據保留原生 disclosure |
| 季度海報牆 | `SeasonAnimeWall`、`AnimePosterCard` | 2:3 海報與作品標題、播出資料、OP／ED 數及圖像歸屬；桌面 6 欄，依可用寬度遞減至手機 2 欄 |
| 影片與平台 | `LazyYouTube`、`ExternalLinkList` | 明確同意才載入影片；平台保留 Direct／Search／Official／Purchase 目的標籤 |

海報牆按已記錄編輯星期與時間排列，網絡／串流首播獨立分組。播出類型從現有 `broadcastLabel` 明確標記派生；只有播出時間的作品標示「定時播出」，其他為「播出類型未標示」。不推定題材、播放平台或地區授權。深夜 `25:30` 不移至次日。

## 資料與版面解耦

- Route 負責 provider、穩定網址、SEO 與頁面組合；元件接收 `Public*` 契約 props，不直接匯入季度 seed 或來源 override。
- `anime-browse.ts` 是純展示投影，讀取相同 `PublicAnimeCard` 並派生排序、分組與搜尋文字；不修改記錄，也不另存一份動畫資料。
- 改字體、間距、grid、欄位位置或卡片外觀，只調整元件／CSS；不改歌曲、來源日期、公開 ID、API 或資料庫。
- 新增真實資料欄位時，才按 [架構](./ARCHITECTURE.md) 同步 authoring、型別、parser 與展示；未知值繼續留空。
- 使用者文案不包含 parser、seed、內部收集或除錯細節。

## 媒體與漸進增強

- 首頁及主要歌曲列表不請求遠端海報；海報牆 lazy-load 已核對圖片，卡片與作品頁提供來源及 `no-referrer`。
- 圖片缺失或失效使用無作品內容的 accessible fallback；不以圖像缺失阻擋作品連結。
- 海報牆的名稱、星期與播出類型只在當頁篩選；不把輸入送至網絡、URL 或 storage。
- 無 JavaScript 時保留所有作品、播出分組跳轉、季度切換與展開的歌曲來源。
- 版面驗證涵蓋桌面／手機、無溢位、空結果與重設、原生鍵盤導覽、圖片 fallback，以及既有 YouTube 明確同意。

English: presentation components consume the public contract. Layout changes do not require catalogue edits or database migrations. Playlists remain the primary surface; seasonal poster walls provide a separate, progressively enhanced browsing route.
