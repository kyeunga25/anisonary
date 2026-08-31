# 授權範圍 / Licensing Scope

本存放庫同時包含可開源的軟件實作，以及不由軟件授權覆蓋的目錄資料與第三方內容。
根目錄 [`LICENSE`](LICENSE) 的 Apache License 2.0 必須按以下範圍理解。

## Apache-2.0 授權材料

除個別檔案另有聲明及下列排除項目外，由 `kyeunga25` 擁有或有權授權的應用程式
原始碼、元件、樣式、通用資料 provider／schema、建置／驗證腳本、測試邏輯及通用
技術文件，依 **Apache License 2.0** 提供。

散布授權材料或修改版本時，須遵守完整 [`LICENSE`](LICENSE)，包括保留適用的
版權、專利、授權與 [`NOTICE`](NOTICE) 告示，以及標示已修改檔案。

## 不包含在 Apache-2.0 授權內

本存放庫**沒有**就以下項目授予開源軟件或開放資料授權：

- `src/data/catalog-sources.ts`；
- `src/data/curated-seeds.ts` 及 `src/data/curated-seeds/**`；
- `src/data/curated-season-registry.ts`；
- `src/data/curated-theme-sources.ts` 及
  `src/data/curated-theme-sources/**`；
- `src/data/curated-theme-videos.ts` 及
  `src/data/curated-theme-videos/**`；
- 上述目錄記錄在測試、文件、建置產物、static API 或頁面中的複本、摘錄、
  選取、編排、來源 ledger、審閱註記及 provenance metadata；
- 動畫、歌曲、角色、歌詞、錄音、credits、海報／封面、圖片、影片、商標、
  外部連結內容及任何其他第三方材料；
- Anisonary 名稱、標誌、網域、favicon、視覺識別及 trade dress。

上述排除不主張壟斷不受著作權保護的單純事實；但任何事實的取得、批量提取、資料庫
使用、編排重用及第三方內容使用仍可能受來源條款、資料庫權利、著作權、商標或其他
法律限制。來源連結、ID 或公開可讀性不等於重用授權。

## 自行部署及資料替換

Apache-2.0 允許在遵守其條款下使用授權軟件，但不授權一併複製排除的目錄資料。
建立衍生目錄或部署時，應移除排除資料，改用你合法取得並可按預定方式處理的資料，
並重新核對來源 API、媒體 hotlink、快取、署名、商業使用及散布條款。

第三方套件及 Cloudflare 等平台受獨立條款約束；詳見
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) 及
[`docs/DATA_PROVENANCE.md`](docs/DATA_PROVENANCE.md)。

---

This repository combines open-source software with catalogue data and
third-party material that the software licence does not cover.

Except for files carrying separate notices and the exclusions above,
repository-owned application source, components, styles, generic provider and
schema code, build and validation scripts, test logic, and generic technical
documentation are licensed under **Apache-2.0**.

No open-source software or open-data licence is granted for the listed curated
data paths; copies or extracts of their records in tests, documentation, build
artifacts, static APIs, or pages; their selection, arrangement, source ledger,
review notes, or provenance metadata; third-party anime and music material; or
Anisonary branding and trade dress. This exclusion does not claim exclusive
rights in unprotectable bare facts, but source terms and database, copyright,
trade-mark, or other rights may still restrict acquisition, extraction,
arrangement, and reuse.

Self-hosters may use the licensed software under Apache-2.0, but must remove
excluded catalogue material and substitute data they are entitled to acquire,
process, display, and distribute.
