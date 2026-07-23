import { expect, test } from "@playwright/test";

test("curated catalogue flow reaches verified themes, lazy video and an official page", async ({ page, context }) => {
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
  await player.getByRole("button", { name: /載入 YouTube 影片/ }).click();
  await expect(player.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com/);
  await expect(player.locator("[data-youtube-frame]")).toHaveAttribute("aria-busy", "false");

  const platformLink = page.locator('a[href="https://nex-tone.link/GPsD8PYbf"]');
  await expect(platformLink).toHaveCount(1);
  const popupPromise = page.waitForEvent("popup");
  await platformLink.click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(/nex-tone\.link\/GPsD8PYbf/);
  await popup.close();
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
  await expect(page.locator("[data-result-count]")).toHaveText("2");
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
