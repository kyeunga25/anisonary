import { expect, test, type Page } from "@playwright/test";
import { ApiProvider } from "../../src/data/api-provider";
import { smokePublicApi } from "../../src/data/api-smoke";
import { curatedAnimeDetails, curatedSeasons } from "../../src/data/curated-data";

const port = Number(process.env.ANISONARY_E2E_PORT ?? "4321");
const origin = `http://127.0.0.1:${port}`;
const errorOrigin = `http://127.0.0.1:${process.env.ANISONARY_E2E_ERROR_PORT ?? port + 1}`;
const appErrors = new WeakMap<Page, string[]>();

// Public media is intercepted: these flows verify our UI, not third-party availability.
test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  appErrors.set(page, errors);
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (/Content Security Policy|Refused to (?:execute|apply|load)/i.test(message.text())) errors.push(message.text());
  });
  await page.route("https://s4.anilist.co/**", (route) => route.fulfill({
    contentType: "image/svg+xml",
    body: '<svg xmlns="http://www.w3.org/2000/svg" width="768" height="1152"><rect width="768" height="1152" fill="#d8dce6"/></svg>'
  }));
});

test.afterEach(async ({ page }) => {
  expect(appErrors.get(page)).toEqual([]);
  if (page.url() !== "about:blank") {
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("vite-error-overlay, astro-error-overlay")).toHaveCount(0);
  }
});

test("the built static API serves the whole catalogue with consistent details and real 404s", async ({ request }) => {
  test.setTimeout(60_000);
  await expect(smokePublicApi(new ApiProvider(`${origin}/api/v1`))).resolves.toEqual({
    seasonCount: curatedSeasons.length,
    animeCount: curatedAnimeDetails.length
  });
  const response = await request.get("/api/v1/seasons.json");
  expect(response.headers()["content-type"]).toContain("application/json");
});

test("playlist browsing opens all anime songs and preserves sources, media consent and external links", async ({ page, context }, testInfo) => {
  const youtubeRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg/.test(new URL(request.url()).hostname)) youtubeRequests.push(request.url());
  });
  await context.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({
    contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>"
  }));
  await context.route("https://nex-tone.link/**", (route) => route.fulfill({
    contentType: "text/html", body: "<!doctype html><title>Official music landing page</title>"
  }));

  await page.setViewportSize({ width: 1536, height: 1024 });
  const response = await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveTitle("Anisonary｜動畫歌典");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const policy = response?.headers()["content-security-policy"] ?? "";
  expect(policy).toContain("default-src 'self'");
  expect(policy).toContain("frame-src https://www.youtube-nocookie.com");
  expect(policy).not.toMatch(/unsafe-inline|unsafe-eval/);
  await page.screenshot({ path: testInfo.outputPath("home-desktop.png") });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: testInfo.outputPath("home-mobile.png") });
  await page.setViewportSize({ width: 1536, height: 1024 });
  const homeTabs = page.getByRole("navigation", { name: "首頁季度歌單" });
  await homeTabs.getByRole("link", { name: "2026 春季" }).click();
  await expect(page.locator(".song-row__season").first()).toHaveText("2026 春季");
  await homeTabs.getByRole("link", { name: "2026 夏季" }).click();
  await page.getByRole("link", { name: "查看季度", exact: true }).click();
  await expect(page.getByRole("heading", { name: "2026 夏季動畫" })).toBeVisible();
  const initialCount = Number(await page.locator("[data-catalog-theme-count]").textContent());
  const videoFilter = page.getByRole("checkbox", { name: "有正版影片" });
  await videoFilter.check();
  await expect.poll(async () => Number(await page.locator("[data-catalog-theme-count]").textContent())).toBeLessThan(initialCount);
  await page.getByRole("button", { name: "重設" }).click();
  await expect(videoFilter).not.toBeChecked();
  await expect(page.locator("[data-catalog-theme-count]")).toHaveText(String(initialCount));
  const reviewedWeekday = curatedAnimeDetails.find((anime) => anime.slug === "youjo-senki-2")!.editorialWeekday;
  await page.getByLabel("播出星期").selectOption(String(reviewedWeekday));
  await page.getByRole("searchbox").fill("幼女");
  await expect(page.locator("[data-theme-result]")).toHaveCount(2);
  await page.route("https://s4.anilist.co/**", (route) => route.abort());
  await page.locator(".song-row").filter({ hasText: "Why? RED induction" }).click();
  await expect(page).toHaveURL(/\/anime\/youjo-senki-2\/$/);
  await expect(page.getByRole("heading", { name: /全部主題曲/ })).toBeVisible();
  await expect(page.locator(".theme-card__details[open]")).toHaveCount(0);
  await expect(page.getByRole("list", { name: "歌曲核對來源" }).first()).toBeHidden();
  await page.locator(".theme-card__details > summary").first().click();
  await expect(page.getByRole("list", { name: "歌曲核對來源" }).first()).toBeVisible();
  await expect(page.locator(".theme-card__credits").first()).toContainText("作詞");
  await expect(page.getByRole("link", { name: /回報資料問題/ })).toHaveAttribute("href", /catalog-correction\.yml/);
  await expect(page.locator('[data-poster]').first()).toHaveAttribute("data-poster-state", "unavailable");
  await expect(page.getByRole("img", { name: /圖片暫時無法載入/ })).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(2);
  await expect(page.getByRole("heading", { name: "Weiter! Weiter!", exact: true })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("anime-detail-desktop.png") });
  const jsonLd = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
  expect(jsonLd["@type"]).toBe("TVSeries");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://anisonary.k-y.cc/anime/youjo-senki-2/");

  const players = page.locator("[data-youtube-player]");
  await expect(page.locator("iframe")).toHaveCount(0);
  expect(youtubeRequests).toEqual([]);
  await players.first().getByRole("button", { name: /載入 YouTube 影片/ }).click();
  await expect(players.first().locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\//);
  await expect(players.first().locator("[data-youtube-frame]")).toHaveAttribute("aria-busy", "false");
  await expect(page.locator("iframe")).toHaveCount(1);
  expect(youtubeRequests.some((url) => url.includes("youtube-nocookie.com"))).toBe(true);
  expect(youtubeRequests.some((url) => url.includes("ytimg"))).toBe(false);

  const link = page.getByRole("list", { name: "音樂平台與購買連結" }).locator('a[href="https://nex-tone.link/GPsD8PYbf"]');
  await expect(link).toHaveAttribute("rel", /noopener.*noreferrer/);
  const popupPromise = page.waitForEvent("popup");
  await link.click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL("https://nex-tone.link/GPsD8PYbf");
  await popup.close();

  const multiPlayerAnime = curatedAnimeDetails.find((anime) =>
    anime.themes.flatMap((theme) => theme.videos).filter((video) => video.embeddable).length > 1
  );
  if (!multiPlayerAnime) throw new Error("A reviewed multi-player example is required for the consent flow");
  await page.goto(`/anime/${multiPlayerAnime.slug}/`, { waitUntil: "domcontentloaded" });
  for (const summary of await page.locator(".theme-card__details > summary").all()) await summary.click();
  await expect(players.nth(1).getByRole("button", { name: /載入 YouTube 影片/ })).toBeVisible();
  await expect(page.locator("iframe")).toHaveCount(0);
  await players.first().getByRole("button", { name: /載入 YouTube 影片/ }).click();
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(players.nth(1).locator("iframe")).toHaveCount(0);

  const aliasAnime = curatedAnimeDetails.find((anime) => anime.themes.some((theme) => theme.idAliases?.length));
  if (!aliasAnime) throw new Error("A reviewed duplicate-use correction is required for the legacy anchor flow");
  const canonicalTheme = aliasAnime.themes.find((theme) => theme.idAliases?.length)!;
  const oldId = canonicalTheme.idAliases![0]!;
  await page.goto(`/anime/${aliasAnime.slug}/#theme-${oldId}`);
  await expect(page.locator(`#theme-${oldId}`).locator("..")).toHaveAttribute("id", `theme-${canonicalTheme.id}`);
  await expect(page.locator(`#theme-${canonicalTheme.id}`)).toBeInViewport();
  await expect(page.locator(".theme-card")).toHaveCount(aliasAnime.themes.length);
});

test("song library and local search combine quarters, sorting, multilingual input and pagination", async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const externalRequests: string[] = [];
  page.on("request", (request) => {
    if (new URL(request.url()).origin !== origin) externalRequests.push(request.url());
  });
  await page.goto("/songs/");
  await expect(page.getByRole("heading", { name: "歌曲列表", exact: true })).toBeVisible();
  const results = page.locator("[data-catalog-result]");
  await expect(results).toHaveCount(24);
  const firstTitle = await results.first().locator(".song-row__song").textContent();
  await page.getByRole("button", { name: "下一頁" }).click();
  await expect(page.locator("[data-search-page]")).toContainText("第 2／");
  await expect(page.locator("#catalog-search-results")).toBeFocused();
  expect(await results.first().locator(".song-row__song").textContent()).not.toBe(firstTitle);
  await page.locator(".playlist-filters summary").click();
  await page.getByRole("combobox", { name: "排序", exact: true }).selectOption("oldest");
  await expect(results.first().locator(".song-row__season")).toHaveText("2019 夏季");
  await page.getByRole("combobox", { name: "排序", exact: true }).selectOption("newest");
  await expect(results.first().locator(".song-row__season")).toHaveText(`${curatedSeasons[0]!.year} ${curatedSeasons[0]!.titleZhHant.replace("動畫", "")}`);
  await page.getByRole("combobox", { name: "年份", exact: true }).selectOption("2026");
  await page.getByRole("combobox", { name: "季度", exact: true }).selectOption("summer");
  await page.getByRole("searchbox").fill("ゼロから");
  const crossQuarterSongCount = curatedAnimeDetails.find((anime) => anime.slug === "re-zero-season-4")!.themes.length;
  await expect(results).toHaveCount(crossQuarterSongCount);
  await expect(results.first().locator(".song-row__season")).toHaveText("2026 夏季");
  await page.getByRole("combobox", { name: "季度", exact: true }).selectOption("spring");
  await expect(results.first().locator(".song-row__season")).toHaveText("2026 春季");
  await expect(results).toHaveCount(crossQuarterSongCount);
  await page.getByRole("button", { name: "重設" }).click();
  await expect(results).toHaveCount(24);
  await page.locator(".playlist-filters summary").click();
  await page.screenshot({ path: testInfo.outputPath("song-library-mobile.png") });

  await page.goto("/search/");
  await expect(page).toHaveTitle(/跨季度搜尋/);
  const input = page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" });
  await input.fill("幼女 myth");
  await expect(results).toHaveCount(1);
  await expect(page.locator("#catalog-search-results")).toContainText("Why? RED induction");
  await input.fill("幼女戰記");
  await expect(page.locator("#catalog-search-results")).toContainText("幼女戦記Ⅱ");
  await input.fill("不存在的搜尋結果");
  await expect(page.locator("[data-catalog-search-empty]")).toBeVisible();
  await input.press("Escape");
  await expect(results).toHaveCount(24);
  await page.locator(".playlist-filters summary").click();
  await page.getByLabel("搜尋範圍").selectOption("creators");
  await input.fill("米津玄師");
  await expect(page.locator("#catalog-search-results")).toContainText("KICK BACK");
  await page.getByLabel("搜尋範圍").selectOption("songs");
  await page.getByRole("radio", { name: "ED", exact: true }).check();
  await input.fill("ＫＩＣＫ BACK");
  await expect(results).toHaveCount(0);
  await page.getByRole("radio", { name: "OP", exact: true }).check();
  await expect(results).toHaveCount(1);
  expect(new URL(page.url()).search).toBe("");
  expect(externalRequests).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("search-mobile.png") });

  await results.locator("a").click();
  expect(new URL(page.url()).hash).toMatch(/^#theme-/);
  const target = page.locator(`[id="${decodeURIComponent(new URL(page.url()).hash.slice(1))}"]`);
  await expect(target.getByRole("heading", { name: "KICK BACK", exact: true })).toBeVisible();
  await expect(target.locator("iframe")).toHaveCount(0);

  const hasAlbumExample = (theme: typeof curatedAnimeDetails[number]["themes"][number]) => theme.releases?.some((release) => release.type === "album") && theme.credits.some((credit) => credit.role === "group_member") && theme.links.some((link) => link.platform === "Apple Music");
  const enrichedAnime = curatedAnimeDetails.find((anime) => anime.themes.some(hasAlbumExample))!;
  const enrichedTheme = enrichedAnime.themes.find(hasAlbumExample)!;
  await page.goto("/search/");
  await input.fill(enrichedTheme.releases![0]!.title);
  await expect(results).toHaveCount(1);
  await results.locator("a").click();
  await expect(page).toHaveURL(`${origin}/anime/${enrichedAnime.slug}/#theme-${enrichedTheme.id}`);
  const enrichedCard = page.locator(`[id="theme-${enrichedTheme.id}"]`);
  await expect(enrichedCard.locator(".recording-list > li")).toHaveCount(enrichedTheme.recordings!.length);
  await expect(enrichedCard.locator(".release-list > li")).toHaveCount(enrichedTheme.releases!.length);
  await expect(enrichedCard).toContainText("團隊成員");
  await expect(enrichedCard).toContainText("音源對應待確認");
  await enrichedCard.locator(".field-evidence summary").click();
  await expect(enrichedCard.locator(".field-evidence")).toHaveAttribute("open", "");
  await expect(enrichedCard.locator(".field-evidence")).toContainText(enrichedTheme.evidence![0]!.verifiedAt);
  const albumLink = enrichedTheme.links.find((link) => link.platform === "Apple Music")!;
  await expect(enrichedCard.getByRole("link", { name: albumLink.label, exact: true })).toHaveAttribute("href", albumLink.url);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("recording-release-mobile.png") });
  await page.setViewportSize({ width: 1536, height: 1024 });
  await page.screenshot({ path: testInfo.outputPath("recording-release-desktop.png") });

  const videoAnime = curatedAnimeDetails.find((anime) => anime.themes.some((theme) => theme.videos.some((video) => video.embedAvailability === "unknown")))!;
  await page.goto(`/anime/${videoAnime.slug}/`);
  for (const summary of await page.locator(".theme-card__details > summary").all()) await summary.click();
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(page.locator(".youtube-media__fallback-caption")).toHaveCount(videoAnime.themes.flatMap((theme) => theme.videos).filter((video) => !video.embeddable).length);
  await expect(page.locator(".youtube-media__fallback-caption").filter({ hasText: "MV" }).first()).toBeVisible();

  const hasNamedVideos = (theme: typeof enrichedTheme) => theme.links.filter((link) => link.platform === "YouTube" && link.verifiedAt).length > 1;
  const namedAnime = curatedAnimeDetails.find((anime) => anime.themes.some(hasNamedVideos))!;
  const namedTheme = namedAnime.themes.find(hasNamedVideos)!;
  await page.goto(`/anime/${namedAnime.slug}/`);
  await page.locator(`[id="theme-${namedTheme.id}"] .theme-card__details > summary`).click();
  const platformLinks = page.locator(`[id="theme-${namedTheme.id}"]`).getByRole("list", { name: "音樂平台與購買連結" });
  for (const link of namedTheme.links.filter((link) => link.platform === "YouTube" && link.verifiedAt)) {
    await expect(platformLinks.locator(`a[href="${link.url}"]`)).toContainText(link.label);
  }
  await expect(page.locator("iframe")).toHaveCount(0);

  const longAnime = curatedAnimeDetails.find((anime) => anime.themes.length > 6 && anime.themes.some((theme) => theme.type === "ED"))!;
  await page.goto(`/anime/${longAnime.slug}/`);
  const themeSearch = page.getByRole("search", { name: "這部動畫的歌曲", exact: true });
  const visibleThemes = page.locator(".theme-card:not([hidden])");
  await expect(visibleThemes).toHaveCount(longAnime.themes.length);
  await themeSearch.getByRole("combobox", { name: "歌曲用途", exact: true }).selectOption("ED");
  await expect(visibleThemes).toHaveCount(longAnime.themes.filter((theme) => theme.type === "ED").length);
  await themeSearch.getByRole("searchbox").fill("不存在的歌曲");
  await expect(page.locator("[data-theme-filter-empty]")).toBeVisible();
  await themeSearch.getByRole("button", { name: "重設", exact: true }).click();
  await expect(visibleThemes).toHaveCount(longAnime.themes.length);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("year and quarter browsing works with a mobile keyboard, without JavaScript, and through 404 recovery", async ({ page, browser }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/catalog/");
  await expect(page.getByRole("heading", { name: "季度目錄", exact: true })).toBeVisible();
  const navigation = page.getByRole("navigation", { name: "主要導覽" });
  const menu = page.getByRole("button", { name: "選單" });
  await expect(navigation).toBeHidden();
  await menu.focus();
  await menu.press("Enter");
  await expect(navigation.getByRole("link").first()).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(navigation.getByRole("link", { name: /歌曲列表/ })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(navigation).toBeHidden();
  await page.getByRole("link", { name: /2025.*個季度/ }).click();
  await expect(page.getByRole("heading", { name: "2025 動畫目錄" })).toBeVisible();
  await page.getByRole("list", { name: "2025 已收錄季度" }).getByRole("link", { name: /春季動畫/ }).click();
  await expect(page.getByRole("heading", { name: "2025 春季動畫" })).toBeVisible();
  await page.locator(".playlist-filters summary").click();
  const filter = page.getByRole("checkbox", { name: "有正版影片" });
  const count = Number(await page.locator("[data-catalog-theme-count]").textContent());
  await filter.focus();
  await page.keyboard.press("Space");
  await expect(filter).toBeChecked();
  await expect.poll(async () => Number(await page.locator("[data-catalog-theme-count]").textContent())).toBeLessThan(count);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

  const nativeContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const nativePage = await nativeContext.newPage();
    await nativePage.route("https://s4.anilist.co/**", (route) => route.abort());
    await nativePage.goto(`${origin}/catalog/`);
    await expect(nativePage.getByRole("navigation", { name: "主要導覽" })).toBeVisible();
    await nativePage.goto(`${origin}/anime/youjo-senki-2/`);
    await expect(nativePage.getByRole("heading", { name: "Weiter! Weiter!", exact: true })).toBeVisible();
    await nativePage.locator(".theme-card__details > summary").first().focus();
    await nativePage.keyboard.press("Enter");
    await expect(nativePage.getByRole("list", { name: "歌曲核對來源" }).first()).toBeVisible();
    await expect(nativePage.locator("iframe")).toHaveCount(0);
    await nativePage.goto(`${origin}/catalog/`);
    await nativePage.getByRole("link", { name: /2019.*個季度/ }).click();
    await nativePage.getByRole("link", { name: /夏季動畫/ }).click();
    await expect(nativePage.getByRole("heading", { name: "2019 夏季動畫" })).toBeVisible();
    await nativePage.locator('.song-row[href^="/anime/"]').first().click();
    await expect(nativePage.getByRole("heading", { level: 1 })).toBeVisible();
  } finally {
    await nativeContext.close();
  }
  const notFound = await page.goto("/not-a-real-route/");
  expect(notFound?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "這一頁還未收錄。" })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await page.getByRole("link", { name: "瀏覽 2026 夏季" }).click();
  await expect(page).toHaveURL(`${origin}/seasons/2026-summer/`);
  await expect(page.getByRole("heading", { name: "2026 夏季動畫" })).toBeVisible();
});

test("offline reading and search work without caching queries, API data or remote media", async ({ page, context }) => {
  await page.goto("/search/");
  const scope = await page.evaluate(async () => (await navigator.serviceWorker.ready).scope);
  expect(scope).toBe(`${origin}/`);
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(true);
  const cacheUrls = () => page.evaluate(async () => {
    const names = await caches.keys();
    const requests = await Promise.all(names.map(async (name) => (await caches.open(name)).keys()));
    return requests.flat().map((request) => request.url).sort();
  });
  const before = await cacheUrls();
  expect(before.length).toBeGreaterThan(0);
  expect(before.every((url) => new URL(url).origin === origin && !new URL(url).search)).toBe(true);
  expect(before.some((url) => /\/api\/|404\.html/.test(url))).toBe(false);
  await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("不應儲存的搜尋字詞");
  await page.goto("/sources/?q=not-for-cache");
  expect(await cacheUrls()).toEqual(before);

  await context.setOffline(true);
  try {
    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: "跨季度搜尋" })).toBeVisible();
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("KICK BACK");
    await page.locator(".song-row").filter({ hasText: "KICK BACK" }).click();
    await expect(page.getByRole("heading", { name: "KICK BACK", exact: true })).toBeVisible();
    await page.goto("/not-cached-while-offline/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: "目前沒有網絡連線。" })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    expect(await cacheUrls()).toEqual(before);
  } finally {
    await context.setOffline(false);
  }
});

test("an unavailable API shows a usable public error without upstream details or invented catalogue data", async ({ page }) => {
  await page.goto(`${errorOrigin}/`);
  await expect(page.getByRole("alert")).toContainText("暫時無法載入資料");
  await expect(page.locator("body")).not.toContainText("127.0.0.1:9");
  await expect(page.locator("body")).not.toContainText("ECONNREFUSED");
  await expect(page.locator("[data-catalog-result]")).toHaveCount(0);
  await page.goto(`${errorOrigin}/search/`);
  await expect(page.getByRole("alert")).toContainText("暫時無法載入資料");
  await expect(page.locator("[data-catalog-result]")).toHaveCount(0);
  await page.goto(`${errorOrigin}/songs/`);
  await expect(page.getByRole("alert")).toContainText("暫時無法載入資料");
  await expect(page.locator("[data-catalog-result]")).toHaveCount(0);
  await page.goto(`${errorOrigin}/about/`);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("alert")).toHaveCount(0);
});
