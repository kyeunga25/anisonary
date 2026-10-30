const types = ["OP", "ED", "IN", "TS"];
const quarters = ["winter", "spring", "summer", "fall"];

function countUses(themes) {
  const counts = { OP: 0, ED: 0, IN: 0, TS: 0 };
  for (const theme of themes) {
    if (!types.includes(theme.type)) throw new Error("Unknown song use type in catalogue statistics.");
    counts[theme.type] += 1;
  }
  return counts;
}

/** @param {import('../src/types/public-api').PublicTheme} theme */
function hasBasicSources(theme) {
  return Boolean(theme.titleJa && theme.artistDisplayName
    && theme.sources.some((source) => source.role === "first_party")
    && theme.sources.some((source) => source.role === "cross_check"));
}

function summarizeProgress(anime) {
  const themes = anime.flatMap((detail) => detail.themes);
  const recorded = (theme) => theme.dataStatus?.basic === "field_evidence_recorded";
  const pending = (theme, field) => theme.dataStatus?.pendingFields?.includes(field) ?? false;
  const basicReady = (theme) => recorded(theme) && !pending(theme, "basic_evidence");
  const coreReady = (theme) => basicReady(theme) && !pending(theme, "use_quarters");
  const corePending = themes.filter((theme) => !coreReady(theme));
  const withoutUses = anime.filter((detail) => !detail.themes.length);
  return {
    basicEvidenceMissingUses: themes.filter((theme) => !recorded(theme)).length,
    explicitBasicReviewUses: themes.filter((theme) => recorded(theme) && !basicReady(theme)).length,
    basicReadyQuarterPendingUses: themes.filter((theme) => basicReady(theme) && !coreReady(theme)).length,
    corePendingUses: corePending.length,
    quarterPendingUses: themes.filter((theme) => pending(theme, "use_quarters")).length,
    distinctSongIdsAmongCorePendingUses: new Set(corePending.flatMap((theme) => theme.songId ? [theme.songId] : [])).size,
    corePendingUsesWithoutSongId: corePending.filter((theme) => !theme.songId).length,
    animeAllStoredUsesCoreReady: anime.filter((detail) => detail.themes.length && detail.themes.every(coreReady)).length,
    animeWithStoredUseCoreGaps: anime.filter((detail) => detail.themes.some((theme) => !coreReady(theme))).length,
    animeWithoutScopedUses: withoutUses.length,
    animeWithoutScopedUsesNotUsed: withoutUses.filter((detail) => detail.themeAvailability === "not_used").length
  };
}

export function youtubeLinkId(url) {
  const parsed = new URL(url);
  const id = parsed.hostname === "youtu.be" ? parsed.pathname.slice(1)
    : ["youtube.com", "www.youtube.com"].includes(parsed.hostname) && parsed.pathname === "/watch"
      ? parsed.searchParams.get("v") : null;
  return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
}

/**
 * Count published uses independently from songs, recordings and releases.
 * Per-quarter counts use confirmed theme membership, with the existing legacy
 * work-membership fallback used by the public playlist.
 * @param {import('../src/types/public-api').PublicSeasonDetail[]} seasons
 * @param {import('../src/types/public-api').PublicAnimeDetail[]} anime
 */
export function summarizeCatalog(seasons, anime) {
  const bySlug = new Map(anime.map((detail) => [detail.slug, detail]));
  if (bySlug.size !== anime.length || new Set(anime.map((detail) => detail.id)).size !== anime.length
    || new Set(seasons.map((season) => season.id)).size !== seasons.length) {
    throw new Error("Duplicate catalogue identity in statistics inputs.");
  }
  const themes = anime.flatMap((detail) => detail.themes);
  if (new Set(themes.map((theme) => theme.id)).size !== themes.length) {
    throw new Error("Duplicate song use identity in statistics inputs.");
  }
  const songIds = new Set(themes.flatMap((theme) => theme.songId ? [theme.songId] : []));
  const recordings = themes.flatMap((theme) => theme.recordings ?? []);
  const releases = themes.flatMap((theme) => theme.releases ?? []);
  const videos = themes.flatMap((theme) => theme.videos);
  const directVideoIds = new Set(themes.flatMap((theme) => theme.links
    .filter((link) => link.platform === "YouTube" && link.linkType === "direct_track")
    .flatMap((link) => youtubeLinkId(link.url) ? [youtubeLinkId(link.url)] : [])));
  const scopedAnime = (memberships) => [...new Set(memberships.flatMap((season) => season.anime.map((card) => card.slug)))].map((slug) => {
    const detail = bySlug.get(slug);
    if (!detail || memberships.some((season) => season.anime.some((card) => card.slug === slug && card.id !== detail.id))) {
      throw new Error("Missing or inconsistent anime in statistics inputs.");
    }
    const memberIds = new Set(memberships.filter((season) => season.anime.some((card) => card.slug === slug)).map((season) => season.id));
    return { ...detail, themes: detail.themes.filter((theme) => !theme.seasonIds || theme.seasonIds.some((id) => memberIds.has(id))) };
  });
  const quarterStats = seasons.map((season) => {
    if (new Set(season.anime.map((card) => card.slug)).size !== season.anime.length) {
      throw new Error("Duplicate seasonal membership in statistics inputs.");
    }
    const uses = season.anime.flatMap((card) => {
      const detail = bySlug.get(card.slug);
      if (!detail || detail.id !== card.id) throw new Error("Missing or inconsistent anime in statistics inputs.");
      return detail.themes.filter((theme) => !theme.seasonIds || theme.seasonIds.includes(season.id));
    });
    return {
      id: season.id, year: season.year, quarter: season.quarter,
      anime: season.anime.length, uses: uses.length, types: countUses(uses),
      basicSources: uses.filter(hasBasicSources).length,
      fieldEvidence: uses.filter((theme) => theme.dataStatus?.basic === "field_evidence_recorded").length,
      progress: summarizeProgress(scopedAnime([season])),
      recordedCreditRoles: uses.filter((theme) => ["lyrics", "composition", "arrangement"]
        .every((role) => theme.credits.some((credit) => credit.role === role))).length
    };
  }).sort((left, right) => right.year - left.year || quarters.indexOf(right.quarter) - quarters.indexOf(left.quarter));
  const years = [...new Set(seasons.map((season) => season.year))].sort((left, right) => right - left).map((year) => {
    const owners = scopedAnime(seasons.filter((season) => season.year === year));
    return { year, anime: owners.length, uses: owners.reduce((count, detail) => count + detail.themes.length, 0), progress: summarizeProgress(owners) };
  });
  return {
    seasons: seasons.length, anime: anime.length, uses: themes.length, types: countUses(themes),
    seasonalReferences: seasons.reduce((count, season) => count + season.anime.length, 0),
    basicSources: themes.filter(hasBasicSources).length,
    fieldEvidence: themes.filter((theme) => theme.dataStatus?.basic === "field_evidence_recorded").length,
    progress: summarizeProgress(anime), years,
    registeredSongs: songIds.size,
    usesWithoutSongId: themes.filter((theme) => !theme.songId).length,
    recordings: new Set(recordings.map((recording) => recording.id)).size,
    releases: new Set(releases.map((release) => release.id)).size,
    videoMetadata: videos.length,
    uniqueVideoMetadata: new Set(videos.map((video) => video.youtubeVideoId)).size,
    directVideoLinks: directVideoIds.size,
    links: new Set(themes.flatMap((theme) => theme.links.map((link) => link.url))).size,
    quarters: quarterStats
  };
}

export function renderCatalogStatistics(stats) {
  const number = (value) => new Intl.NumberFormat("en-US").format(value);
  const quarterLabels = { winter: "冬", spring: "春", summer: "夏", fall: "秋" };
  const rows = stats.quarters.map((season) => `| ${season.year} ${quarterLabels[season.quarter]} | ${number(season.anime)} | ${number(season.types.OP)} | ${number(season.types.ED)} | ${number(season.types.IN)} | ${number(season.types.TS)} | ${number(season.basicSources)} | ${number(season.fieldEvidence)} | ${number(season.recordedCreditRoles)} |`);
  const progressRow = (label, scope) => `| ${label} | ${number(scope.anime)} | ${number(scope.uses)} | ${number(scope.progress.basicEvidenceMissingUses)} | ${number(scope.progress.explicitBasicReviewUses)} | ${number(scope.progress.basicReadyQuarterPendingUses)} | ${number(scope.progress.corePendingUses)} |`;
  return `# 目錄統計 / Catalogue Statistics

此文件由 \`npm run catalog:stats:update\` 從已驗證 build 的公開 JSON 產生，勿手動修改數字。它記錄目前本機 source 的收錄與欄位存在情況；季度盤點、已逐批核對的公開 ID、未解問題及接續位置只記在 [收集進度](./CATALOG_COLLECTION_STATUS.md)。本機統計不是 production 驗收，也不是整季或長期目標的完成率。

## 計數定義 / Counting rules

- 全目錄按動畫 ID 與正式 theme ID 去重；舊 ID 別名不增加用途數。
- 季度依歌曲 \`seasonIds\` 計數；省略的舊資料沿用作品季度。跨季用途可在不同季度出現，因此季度欄不能直接相加作全目錄總數。
- 歌曲、音源及發行品只計已登記的各自 ID；沒有 song ID 的用途不推算為唯一歌曲。
- 「基本來源」表示曲名、演唱名義及第一方／交叉來源有值；「基本逐欄證據」沿用公開 \`dataStatus\`。兩者均不證明作品聯集已閉合。
- 待完成用途分成互不重疊的「缺欄位證據」、「已有欄位證據但仍明列基本補審」及「基本已齊、僅用途季度待核」。三項相加為基本／季度待完成聯集；\`field_evidence_recorded\` 仍有 \`basic_evidence\` 或 \`use_quarters\` 待辦時，不計作必需缺口已清。
- 待辦歌曲只列已登記 song ID 的去重數，以及尚無 song ID 的用途數；兩者不能相加推算未知的唯一歌曲總數。
- 「詞曲編有值」只盤點三項角色，不等同所有製作名單或詳細資料已核對齊備。

## 全目錄 / Catalogue totals

| 項目 | 數量 |
| --- | ---: |
| 季度快照 | ${number(stats.seasons)} |
| 唯一動畫 | ${number(stats.anime)} |
| 季度動畫引用 | ${number(stats.seasonalReferences)} |
| 唯一歌曲用途 | ${number(stats.uses)} |
| OP／ED 用途 | ${number(stats.types.OP + stats.types.ED)} |
| IN 插曲用途 | ${number(stats.types.IN)} |
| TS 一般主題歌用途 | ${number(stats.types.TS)} |
| 有基本來源的用途 | ${number(stats.basicSources)} |
| 有基本逐欄證據的用途 | ${number(stats.fieldEvidence)} |
| 已登記的唯一歌曲 ID | ${number(stats.registeredSongs)} |
| 尚未登記 song ID 的用途 | ${number(stats.usesWithoutSongId)} |
| 已登記的唯一音源 ID | ${number(stats.recordings)} |
| 已登記的唯一發行品 ID | ${number(stats.releases)} |
| 影片 metadata 項目／唯一影片 ID | ${number(stats.videoMetadata)}／${number(stats.uniqueVideoMetadata)} |
| 唯一 YouTube 歌曲直連 ID | ${number(stats.directVideoLinks)} |
| 唯一平台連結 URL | ${number(stats.links)} |

## 現有名冊待辦 / Remaining registered work

以下涵蓋目前公開名冊的所有形式，包含延後處理的短篇與 WEB；未收入名冊的作品及歌曲數未知，不是標準 TV 全季或二十年目標的完整分母。

| 項目 | 數量 |
| --- | ---: |
| 已存用途的基本／季度均無待辦之動畫 | ${number(stats.progress.animeAllStoredUsesCoreReady)} |
| 至少一筆用途仍有基本／季度待辦之動畫 | ${number(stats.progress.animeWithStoredUseCoreGaps)} |
| 尚無已存用途之動畫 | ${number(stats.progress.animeWithoutScopedUses)} |
| 其中標示不設獨立 OP／ED 之動畫 | ${number(stats.progress.animeWithoutScopedUsesNotUsed)} |
| 待完成用途聯集 | ${number(stats.progress.corePendingUses)} |
| 其中已登記的唯一歌曲 ID | ${number(stats.progress.distinctSongIdsAmongCorePendingUses)} |
| 其中尚無 song ID 的用途 | ${number(stats.progress.corePendingUsesWithoutSongId)} |

「均無待辦」只指已存用途的基本資料與季度，不表示完整作品歌單或詳細欄位收齊。季度／年度的無用途範圍只涵蓋相應期別，與全目錄未列用途分開；跨年作品及歌曲仍可能重複出現。

| 年度／季度 | 動畫 | 用途 | 缺欄位證據 | 明確基本補審 | 僅季度待核 | 待完成聯集 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
${progressRow("全目錄", stats)}
${stats.years.map((year) => progressRow(String(year.year), year)).join("\n")}
${stats.quarters.map((season) => progressRow(`${season.year} ${quarterLabels[season.quarter]}`, season)).join("\n")}

年度按該年已存季度及用途去重；季度按相應用途會員計數。未確認任何季度的用途只在全目錄列出，不能由年度或季度相加推回全目錄。所需時間取決於可用來源、形式核實與發布驗收，這份計數不自動推算完成日期。

## 季度欄位盤點 / Quarterly field inventory

| 季度 | 動畫 | OP | ED | IN | TS | 基本來源 | 基本逐欄證據 | 詞曲編有值 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
${rows.join("\n")}

## 建置容量 / Build footprint

\`npm run catalog:stats\` 另即時計算該份 build 的檔案、搜尋索引及離線預載容量。容量會隨建置環境、站點設定與工具版本改變，不在共用文件重抄，也不混入 CI 的資料過期判定。索引、離線及既有公開檔案驗證上限保持不變。

## 更新 / Regeneration

- 資料批次：\`npm run verify:batch\` 完成原有單元、型別、建置及產物檢查，更新本文件，再檢查公開邊界與 diff。
- 完整驗證／CI：\`npm run verify:full\` 檢查本文件是否過期，保留依賴稽核、Cloudflare dry-run 與 E2E；正常網站重用同一份已驗證 build。
- 單獨讀取、更新或核對：\`npm run catalog:stats\`、\`npm run catalog:stats:update\`、\`npm run catalog:stats:check\`。來源、環境或產物有變時，先重新 build；不自動採信舊 dist。

Counts are derived from the verified local public snapshot. They describe published records and stored fields, not completed seasonal coverage, globally deduplicated songs without IDs, or a verified production deployment.
`;
}

export function renderBuildFootprint(capacity) {
  const number = (value) => new Intl.NumberFormat("en-US").format(value);
  const mib = (value) => `${(value / 1024 / 1024).toFixed(2)} MiB`;
  return `## 當次建置容量 / Current build footprint

| 項目 | 數量或未壓縮大小 |
| --- | ---: |
| HTML 頁 | ${number(capacity.html)} |
| 公開產物檔案 | ${number(capacity.files)} |
| 全部產物 | ${mib(capacity.bytes)} |
| 搜尋頁 HTML | ${mib(capacity.searchHtmlBytes)} |
| 獨立搜尋索引合計 | ${mib(capacity.searchIndexBytes)} |
| 還原後完整搜尋索引 | ${mib(capacity.searchIndexDecodedBytes)} |
| 索引 gzip 合計（本機試算） | ${mib(capacity.searchGzipBytes)} |
| 字詞路由表合計（不會全量預載） | ${mib(capacity.searchRoutingBytes)} |
| 路由表 gzip 合計（本機試算） | ${mib(capacity.searchRoutingGzipBytes)} |
| 字詞路由表分片 | ${number(capacity.searchRoutingBuckets)} |
| 頁內搜尋分片清單 | ${(capacity.searchManifestBytes / 1024).toFixed(2)} KiB |
| 搜尋索引分片 | ${number(capacity.searchChunks)} |
| 離線預載 URL | ${number(capacity.precacheUrls)} |
| 離線預載內容合計 | ${mib(capacity.precacheBytes)} |

除 gzip 試算外，容量是該次 build 的未壓縮檔案內容量，不是實測線上流量、瀏覽器記憶體或 Cache Storage 實際用量；正式傳輸量取決於伺服器與瀏覽器協商的壓縮方式。字詞搜尋每次最多讀取 4 份路由表，再載入可能命中的索引；上列合計不是首次搜尋下載量。
`;
}
