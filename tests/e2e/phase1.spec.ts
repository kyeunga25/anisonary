import { expect, test } from "@playwright/test";

test("static public API mirrors the reviewed catalogue without a runtime binding", async ({ request }) => {
  const seasonsResponse = await request.get("/api/v1/seasons.json");
  expect(seasonsResponse.status()).toBe(200);
  expect(seasonsResponse.headers()["content-type"]).toContain("application/json");
  const seasons = await seasonsResponse.json();
  expect(seasons).toHaveLength(2);

  const seasonResponse = await request.get("/api/v1/seasons/2026-summer.json");
  expect(seasonResponse.status()).toBe(200);
  const season = await seasonResponse.json();
  expect(season).toMatchObject({ id: "2026-summer" });
  expect(season.isMockData).not.toBe(true);
  expect(season.anime).toHaveLength(70);

  const animeResponse = await request.get("/api/v1/anime/mushoku-tensei-3.json");
  expect(animeResponse.status()).toBe(200);
  const anime = await animeResponse.json();
  expect(anime).toMatchObject({ slug: "mushoku-tensei-3" });
  expect(anime.themes.length).toBeGreaterThan(0);

  expect((await request.get("/api/v1/seasons/2099-winter.json")).status()).toBe(404);
  expect((await request.get("/api/v1/anime/not-a-real-anime.json")).status()).toBe(404);
});

test("static responses enforce the generated Content Security Policy", async ({ page }) => {
  const policyViolations: string[] = [];
  page.on("console", (message) => {
    if (message.text().includes("Content Security Policy")) policyViolations.push(message.text());
  });

  const response = await page.goto("/");
  const policy = response?.headers()["content-security-policy"] ?? "";

  expect(policy).toContain("default-src 'self'");
  expect(policy).toContain("script-src-attr 'none'");
  expect(policy).toContain("style-src-attr 'none'");
  expect(policy).toContain("img-src 'self' https://s4.anilist.co");
  expect(policy).toContain("frame-src https://www.youtube-nocookie.com");
  expect(policy).not.toMatch(/unsafe-inline|unsafe-eval/);

  await page.getByRole("button", { name: "切換深色模式" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect(policyViolations).toEqual([]);
});

test("curated catalogue flow reaches verified themes, lazy video and an official page", async ({ page, context }) => {
  const youtubeRequests: string[] = [];
  page.on("request", (request) => {
    const hostname = new URL(request.url()).hostname;
    if (hostname === "i.ytimg.com" || hostname === "www.youtube-nocookie.com") {
      youtubeRequests.push(request.url());
    }
  });

  await context.route("https://www.youtube-nocookie.com/**", (route) =>
    route.fulfill({ status: 200, contentType: "text/html", body: "<!doctype html><title>Mock YouTube</title>" })
  );
  await context.route("https://nex-tone.link/**", (route) =>
    route.fulfill({ status: 200, contentType: "text/html", body: "<!doctype html><title>Official music landing page</title>" })
  );

  await page.goto("/");
  await expect(page).toHaveTitle("Anisonary｜動畫歌典");
  await page.getByRole("link", { name: "瀏覽 2026 夏季" }).click();
  await expect(page).toHaveURL(/\/seasons\/2026-summer\/$/);

  await page.getByRole("link", { name: "週三" }).click();
  await expect(page).toHaveURL(/#weekday-3$/);

  const videoFilter = page.getByRole("checkbox", { name: "有官方影片" });
  await videoFilter.check();
  await expect(videoFilter).toBeChecked();
  await page.getByRole("button", { name: "清除篩選" }).click();
  await expect(videoFilter).not.toBeChecked();

  await page.getByRole("link", { name: /查看 幼女戦記Ⅱ/ }).click();
  await expect(page).toHaveURL(/\/anime\/youjo-senki-2\/$/);
  await expect(page.getByRole("heading", { name: "主題曲" })).toBeVisible();
  await expect(page.getByText("公開視覺來源：")).toBeVisible();
  await expect(page.getByRole("link", { name: /回報資料問題/ })).toHaveAttribute("href", /catalog-correction\.yml/);

  const player = page.locator("[data-youtube-player]").first();
  await expect(player.locator("iframe")).toHaveCount(0);
  expect(youtubeRequests).toEqual([]);
  await player.getByRole("button", { name: /載入 YouTube 影片/ }).click();
  await expect(player.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com/);
  await expect(player.locator("[data-youtube-frame]")).toHaveAttribute("aria-busy", "false");
  expect(youtubeRequests.some((url) => url.includes("youtube-nocookie.com"))).toBe(true);
  expect(youtubeRequests.some((url) => url.includes("i.ytimg.com"))).toBe(false);

  const platformLink = page.locator('a[href="https://nex-tone.link/GPsD8PYbf"]');
  await expect(platformLink).toHaveCount(1);
  const popupPromise = page.waitForEvent("popup");
  await platformLink.click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(/nex-tone\.link\/GPsD8PYbf/);
  await popup.close();
});

test("cross-season search stays local and matches anime, songs, and artists", async ({ page }) => {
  const externalRequests: string[] = [];
  page.on("request", (request) => {
    if (new URL(request.url()).origin !== "http://127.0.0.1:4321") {
      externalRequests.push(request.url());
    }
  });

  await page.goto("/search/");
  await expect(page.getByRole("heading", { name: "跨季度搜尋" })).toBeVisible();
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("139");

  const search = page.getByRole("searchbox", { name: "搜尋動畫或歌曲" });
  await search.fill("ＭＹＴＨ & ＲＯＩＤ");
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("3");
  await expect(page.locator("[data-catalog-theme-count]")).toHaveText("3");
  await expect(page.getByRole("link", { name: "幼女戦記Ⅱ" })).toBeVisible();
  await expect(page.getByText("Why? RED induction")).toBeVisible();
  await expect(page.getByRole("link", { name: "Re:ゼロから始める異世界生活 4th season" })).toBeVisible();
  await expect(page.getByRole("link", { name: "クレバテスⅡ-魔獣の王と偽りの勇者伝承-" })).toBeVisible();

  await search.fill("幼女戰記");
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("1");
  await expect(page.locator("[data-catalog-theme-count]")).toHaveText("2");

  await search.fill("找不到的作品名稱");
  await expect(page.locator("[data-catalog-search-empty]")).toBeVisible();
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("0");

  await search.press("Escape");
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("139");
  expect(externalRequests).toEqual([]);
});

test("public catalogue remains readable offline without caching personal input", async ({ page, context }) => {
  await page.goto("/search/");
  await expect(page.locator('link[rel="manifest"]')).toHaveAttribute("href", "/manifest.webmanifest");

  const registrationScope = await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.ready;
    return registration.scope;
  });
  expect(registrationScope).toBe("http://127.0.0.1:4321/");
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(true);

  const cachedUrls = await page.evaluate(async () => {
    const names = await caches.keys();
    const requests = await Promise.all(names.map(async (name) => (await caches.open(name)).keys()));
    return requests.flat().map((request) => request.url);
  });
  expect(cachedUrls.length).toBeGreaterThan(0);
  expect(cachedUrls.every((url) => url.startsWith("http://127.0.0.1:4321/"))).toBe(true);
  expect(cachedUrls.some((url) => url.includes("mock-posters"))).toBe(false);
  expect(cachedUrls.some((url) => new URL(url).search.length > 0)).toBe(false);

  await context.setOffline(true);
  try {
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: "跨季度搜尋" })).toBeVisible();

    await page.goto("/not-cached-while-offline/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: "目前沒有網絡連線。" })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
  } finally {
    await context.setOffline(false);
  }
});

test("season and anime pages expose canonical metadata and JSON-LD", async ({ page }) => {
  await page.goto("/seasons/2026-summer/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://anisonary.k-y.cc/seasons/2026-summer/"
  );
  const seasonJsonLd = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
  expect(seasonJsonLd["@type"]).toBe("CollectionPage");
  await expect(page.getByRole("heading", { name: "季度全集參考" })).toBeVisible();
  await expect(page.locator('a[href="https://annict.com/works/2026-summer?display=list_detailed"]')).toHaveCount(1);
  await expect(page.locator('a[href="https://bangumi.github.io/api/"]')).toHaveCount(1);

  await page.goto("/anime/ghost-in-the-shell-2026/");
  const animeJsonLd = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
  expect(animeJsonLd).toMatchObject({ "@type": "TVSeries", name: "攻殻機動隊 THE GHOST IN THE SHELL" });
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /s4\.anilist\.co/);
});

test("mobile season filters remain keyboard-operable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/seasons/2026-summer/");

  const videoFilter = page.getByRole("checkbox", { name: "有官方影片" });
  await videoFilter.focus();
  await page.keyboard.press("Space");
  await expect(videoFilter).toBeChecked();
  await expect(page.locator("[data-result-count]")).toHaveText("57");
  await expect(page.getByRole("heading", { name: "2026 夏季動畫" })).toBeVisible();
});

test("unknown routes render the public 404 state and stay out of the index", async ({ page }) => {
  const response = await page.goto("/not-a-real-route/");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "這一頁還未收錄。" })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
});

test("API failures render a public error state without leaking upstream details", async ({ page }) => {
  await page.goto("http://127.0.0.1:4322/");

  await expect(page.getByRole("alert")).toContainText("暫時無法載入資料");
  await expect(page.getByRole("alert")).toContainText("季度與動畫資料暫時無法取得");
  await expect(page.locator("body")).not.toContainText("ECONNREFUSED");
  await expect(page.locator("body")).not.toContainText("127.0.0.1:9");
});

test("broken remote posters show an accessible fallback", async ({ page }) => {
  await page.route("**/bx177699-hnzc1CS5ZSM2.png", (route) => route.abort());
  await page.goto("/anime/ghost-in-the-shell-2026/");

  const poster = page.locator("[data-poster]").first();
  await expect(poster).toHaveAttribute("data-poster-state", "unavailable");
  await expect(page.getByRole("img", { name: /圖片暫時無法載入/ })).toBeVisible();
  await expect(poster.getByText("暫時無法顯示")).toBeVisible();
});
