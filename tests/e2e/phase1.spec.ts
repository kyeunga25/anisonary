import { expect, test } from "@playwright/test";

const e2ePort = process.env.ANISONARY_E2E_PORT ?? "4321";
const e2eOrigin = `http://127.0.0.1:${e2ePort}`;
const e2eErrorPort = process.env.ANISONARY_E2E_ERROR_PORT ?? String(Number(e2ePort) + 1);
const e2eErrorOrigin = `http://127.0.0.1:${e2eErrorPort}`;

test("static public API mirrors the reviewed catalogue without a runtime binding", async ({ request }) => {
  const seasonsResponse = await request.get("/api/v1/seasons.json");
  expect(seasonsResponse.status()).toBe(200);
  expect(seasonsResponse.headers()["content-type"]).toContain("application/json");
  const seasons = await seasonsResponse.json();
  expect(seasons).toHaveLength(29);

  const seasonResponse = await request.get("/api/v1/seasons/2026-summer.json");
  expect(seasonResponse.status()).toBe(200);
  const season = await seasonResponse.json();
  expect(season).toMatchObject({ id: "2026-summer", reviewState: "reviewed", verifiedAt: "2026-08-02" });
  expect(season.isMockData).not.toBe(true);
  expect(season.anime).toHaveLength(70);
  expect(season.catalogReferences).toEqual(expect.arrayContaining([
    expect.objectContaining({ sourceRole: "inventory", reviewState: "reviewed" }),
    expect.objectContaining({ sourceRole: "cross_check", reviewState: "reviewed" })
  ]));

  const winterResponse = await request.get("/api/v1/seasons/2026-winter.json");
  expect(winterResponse.status()).toBe(200);
  const winter = await winterResponse.json();
  expect(winter).toMatchObject({ id: "2026-winter" });
  expect(winter.anime).toHaveLength(66);

  const fall2023Response = await request.get("/api/v1/seasons/2023-fall.json");
  expect(fall2023Response.status()).toBe(200);
  const fall2023 = await fall2023Response.json();
  expect(fall2023).toMatchObject({ id: "2023-fall", reviewState: "reviewed", verifiedAt: "2026-09-01" });
  expect(fall2023.anime).toHaveLength(100);

  const summer2023Response = await request.get("/api/v1/seasons/2023-summer.json");
  expect(summer2023Response.status()).toBe(200);
  const summer2023 = await summer2023Response.json();
  expect(summer2023).toMatchObject({ id: "2023-summer", reviewState: "reviewed", verifiedAt: "2026-09-01" });
  expect(summer2023.anime).toHaveLength(75);

  const spring2023Response = await request.get("/api/v1/seasons/2023-spring.json");
  expect(spring2023Response.status()).toBe(200);
  const spring2023 = await spring2023Response.json();
  expect(spring2023).toMatchObject({ id: "2023-spring", reviewState: "reviewed", verifiedAt: "2026-09-01" });
  expect(spring2023.anime).toHaveLength(79);

  const winter2023Response = await request.get("/api/v1/seasons/2023-winter.json");
  expect(winter2023Response.status()).toBe(200);
  const winter2023 = await winter2023Response.json();
  expect(winter2023).toMatchObject({ id: "2023-winter", reviewState: "reviewed", verifiedAt: "2026-09-01" });
  expect(winter2023.anime).toHaveLength(72);

  const fall2022Response = await request.get("/api/v1/seasons/2022-fall.json");
  expect(fall2022Response.status()).toBe(200);
  const fall2022 = await fall2022Response.json();
  expect(fall2022).toMatchObject({ id: "2022-fall", reviewState: "reviewed", verifiedAt: "2026-09-01" });
  expect(fall2022.anime).toHaveLength(80);

  const summer2022Response = await request.get("/api/v1/seasons/2022-summer.json");
  expect(summer2022Response.status()).toBe(200);
  const summer2022 = await summer2022Response.json();
  expect(summer2022).toMatchObject({ id: "2022-summer", reviewState: "reviewed", verifiedAt: "2026-09-01" });
  expect(summer2022.anime).toHaveLength(69);

  const spring2022Response = await request.get("/api/v1/seasons/2022-spring.json");
  expect(spring2022Response.status()).toBe(200);
  const spring2022 = await spring2022Response.json();
  expect(spring2022).toMatchObject({ id: "2022-spring", reviewState: "reviewed", verifiedAt: "2026-09-01" });
  expect(spring2022.anime).toHaveLength(79);

  const fall2021Response = await request.get("/api/v1/seasons/2021-fall.json");
  expect(fall2021Response.status()).toBe(200);
  const fall2021 = await fall2021Response.json();
  expect(fall2021).toMatchObject({ id: "2021-fall", reviewState: "reviewed", verifiedAt: "2026-09-02" });
  expect(fall2021.anime).toHaveLength(65);

  const summer2021Response = await request.get("/api/v1/seasons/2021-summer.json");
  expect(summer2021Response.status()).toBe(200);
  const summer2021 = await summer2021Response.json();
  expect(summer2021).toMatchObject({
    id: "2021-summer",
    reviewState: "reviewed",
    verifiedAt: "2026-09-02"
  });
  expect(summer2021.anime).toHaveLength(46);

  const spring2021Response = await request.get("/api/v1/seasons/2021-spring.json");
  expect(spring2021Response.status()).toBe(200);
  const spring2021 = await spring2021Response.json();
  expect(spring2021).toMatchObject({
    id: "2021-spring",
    reviewState: "reviewed",
    verifiedAt: "2026-09-02"
  });
  expect(spring2021.anime).toHaveLength(73);

  const winter2021Response = await request.get("/api/v1/seasons/2021-winter.json");
  expect(winter2021Response.status()).toBe(200);
  const winter2021 = await winter2021Response.json();
  expect(winter2021).toMatchObject({
    id: "2021-winter",
    reviewState: "reviewed",
    verifiedAt: "2026-09-02"
  });
  expect(winter2021.anime).toHaveLength(67);

  const fall2020Response = await request.get("/api/v1/seasons/2020-fall.json");
  expect(fall2020Response.status()).toBe(200);
  const fall2020 = await fall2020Response.json();
  expect(fall2020).toMatchObject({
    id: "2020-fall",
    reviewState: "reviewed",
    verifiedAt: "2026-09-02"
  });
  expect(fall2020.anime).toHaveLength(67);

  const summer2020Response = await request.get("/api/v1/seasons/2020-summer.json");
  expect(summer2020Response.status()).toBe(200);
  const summer2020 = await summer2020Response.json();
  expect(summer2020).toMatchObject({
    id: "2020-summer",
    reviewState: "reviewed",
    verifiedAt: "2026-09-02"
  });
  expect(summer2020.anime).toHaveLength(31);

  const fall2019Response = await request.get("/api/v1/seasons/2019-fall.json");
  expect(fall2019Response.status()).toBe(200);
  const fall2019 = await fall2019Response.json();
  expect(fall2019).toMatchObject({
    id: "2019-fall",
    reviewState: "reviewed",
    verifiedAt: "2026-09-02"
  });
  expect(fall2019.anime).toHaveLength(67);

  const kenganResponse = await request.get("/api/v1/anime/kengan-ashura-part-2.json");
  expect(kenganResponse.status()).toBe(200);
  const kengan = await kenganResponse.json();
  expect(kengan.themes).toEqual([
    expect.objectContaining({ type: "OP", sequence: 1, titleJa: "KING & ASHLEY", versionLabel: "2019 年 Netflix 配信版", videos: [] }),
    expect.objectContaining({
      type: "OP",
      sequence: 2,
      titleJa: "哀紫電一閃",
      videos: [expect.objectContaining({ youtubeVideoId: "3oWHMoFohuM", officialStatus: "official" })]
    }),
    expect.objectContaining({ type: "ED", sequence: 1, titleJa: "Born This Way", versionLabel: "2019 年 Netflix 配信版", videos: [] }),
    expect.objectContaining({
      type: "ED",
      sequence: 2,
      titleJa: "ASHURA",
      videos: [expect.objectContaining({ youtubeVideoId: "jjjfr8jizCs", officialStatus: "official" })]
    })
  ]);

  const kamizmodeResponse = await request.get("/api/v1/anime/saikyou-kamizmode.json");
  expect(kamizmodeResponse.status()).toBe(200);
  const kamizmode = await kamizmodeResponse.json();
  expect(kamizmode.themes).toEqual([
    expect.objectContaining({
      type: "OP",
      sequence: 1,
      titleJa: "カ！カ！カ！カミズモード！",
      videos: [expect.objectContaining({ youtubeVideoId: "R_ikYBHPdqg", officialStatus: "official" })]
    }),
    expect.objectContaining({
      type: "ED",
      sequence: 1,
      titleJa: "笑顔でBYE！～カミズモ音頭～"
    })
  ]);

  const hokusaiResponse = await request.get("/api/v1/anime/oshiete-hokusai-the-animation.json");
  expect(hokusaiResponse.status()).toBe(200);
  const hokusai = await hokusaiResponse.json();
  expect(hokusai.themes).toEqual([
    expect.objectContaining({
      type: "OP",
      sequence: 1,
      titleJa: "てんこりんのテーマ",
      artistDisplayName: "CHAI、岡倉てんこりん（CV：和氣あず未）、雷神（CV：小西克幸）"
    }),
    expect.objectContaining({
      type: "ED",
      sequence: 1,
      titleJa: "おしえて北斎！",
      artistDisplayName: "上鈴木兄弟（P.O.P）＆YMCK",
      videos: [expect.objectContaining({ youtubeVideoId: "3V_5OFSBr0M", officialStatus: "official" })]
    })
  ]);

  const vivyResponse = await request.get("/api/v1/anime/vivy-fluorite-eye-s-song.json");
  expect(vivyResponse.status()).toBe(200);
  const vivy = await vivyResponse.json();
  expect(vivy.themes).toEqual([
    expect.objectContaining({
      type: "OP",
      sequence: 1,
      titleJa: "Sing My Pleasure",
      artistDisplayName: "ヴィヴィ（Vo. 八木海莉）",
      videos: [expect.objectContaining({ youtubeVideoId: "2p8ig-TrYPY", officialStatus: "official" })]
    })
  ]);

  const spyFamilyResponse = await request.get("/api/v1/anime/spy-x-family.json");
  expect(spyFamilyResponse.status()).toBe(200);
  const spyFamily = await spyFamilyResponse.json();
  expect(spyFamily.themes).toEqual([
    expect.objectContaining({
      type: "OP",
      sequence: 1,
      titleJa: "ミックスナッツ",
      artistDisplayName: "Official髭男dism",
      videos: [expect.objectContaining({ youtubeVideoId: "U_rWZK_8vUY", officialStatus: "official" })]
    }),
    expect.objectContaining({
      type: "ED",
      sequence: 1,
      titleJa: "喜劇",
      artistDisplayName: "星野源",
      videos: [expect.objectContaining({ youtubeVideoId: "nRKJBpFFsuI", officialStatus: "official" })]
    })
  ]);

  const madeInAbyssResponse = await request.get("/api/v1/anime/made-in-abyss-retsujitsu-no-ougonkyou.json");
  expect(madeInAbyssResponse.status()).toBe(200);
  const madeInAbyss = await madeInAbyssResponse.json();
  expect(madeInAbyss.themes).toEqual([
    expect.objectContaining({
      type: "OP",
      sequence: 1,
      titleJa: "かたち",
      artistDisplayName: "安月名莉子",
      videos: [expect.objectContaining({ youtubeVideoId: "o_RG03t7cVE", officialStatus: "official" })]
    }),
    expect.objectContaining({
      type: "ED",
      sequence: 1,
      titleJa: "Endless Embrace",
      artistDisplayName: "MYTH & ROID",
      videos: [expect.objectContaining({ youtubeVideoId: "KkSBdRFWnnI", officialStatus: "official" })]
    })
  ]);

  const chainsawManResponse = await request.get("/api/v1/anime/chainsaw-man.json");
  expect(chainsawManResponse.status()).toBe(200);
  const chainsawMan = await chainsawManResponse.json();
  expect(chainsawMan.themes).toHaveLength(13);
  expect(chainsawMan.themes[0]).toMatchObject({
    type: "OP",
    titleJa: "KICK BACK",
    artistDisplayName: "米津玄師",
    videos: [expect.objectContaining({ youtubeVideoId: "dFlDRhvM4L0", officialStatus: "official" })]
  });
  expect(chainsawMan.themes.at(-1)).toMatchObject({
    type: "ED",
    sequence: 12,
    titleJa: "ファイトソング",
    artistDisplayName: "Eve",
    videos: [expect.objectContaining({ youtubeVideoId: "7jM0fUAR2xg", officialStatus: "official" })]
  });

  const gokushufudouResponse = await request.get("/api/v1/anime/gokushufudou-season-2.json");
  expect(gokushufudouResponse.status()).toBe(200);
  const gokushufudou = await gokushufudouResponse.json();
  expect(gokushufudou.themes).toEqual([
    expect.objectContaining({
      type: "OP",
      titleJa: "シュフノミチ",
      artistDisplayName: "打首獄門同好会",
      videos: [expect.objectContaining({ youtubeVideoId: "wGliHwjmSxc", officialStatus: "official" })]
    }),
    expect.objectContaining({
      type: "ED",
      titleJa: "極・夫婦街道",
      artistDisplayName: "打首獄門同好会",
      videos: [expect.objectContaining({ youtubeVideoId: "O5rWQF5BOWI", officialStatus: "official" })]
    })
  ]);

  const kimetsuYuukakuResponse = await request.get("/api/v1/anime/kimetsu-no-yaiba-yuukaku-hen.json");
  expect(kimetsuYuukakuResponse.status()).toBe(200);
  const kimetsuYuukaku = await kimetsuYuukakuResponse.json();
  expect(kimetsuYuukaku.themes).toEqual([
    expect.objectContaining({
      type: "OP",
      titleJa: "残響散歌",
      artistDisplayName: "Aimer"
    }),
    expect.objectContaining({
      type: "ED",
      titleJa: "朝が来る",
      artistDisplayName: "Aimer"
    })
  ]);

  const kaguyaResponse = await request.get("/api/v1/anime/kaguya-sama-wa-kokurasetai-first-kiss-wa-owaranai.json");
  expect(kaguyaResponse.status()).toBe(200);
  const kaguya = await kaguyaResponse.json();
  expect(kaguya.themes).toEqual([
    expect.objectContaining({
      type: "OP",
      titleJa: "Love is Show",
      artistDisplayName: "鈴木雅之 feat. 高城れに",
      videos: [expect.objectContaining({ youtubeVideoId: "e1P5WxxMBmE", officialStatus: "official" })]
    }),
    expect.objectContaining({
      type: "ED",
      titleJa: "heart notes",
      artistDisplayName: "鈴木愛理",
      videos: [expect.objectContaining({ youtubeVideoId: "Jk6S15iIgxc", officialStatus: "official" })]
    })
  ]);

  const youjoShachouResponse = await request.get("/api/v1/anime/youjo-shachou-r.json");
  expect(youjoShachouResponse.status()).toBe(200);
  const youjoShachou = await youjoShachouResponse.json();
  expect(youjoShachou.themes).toEqual(expect.arrayContaining([
    expect.objectContaining({ type: "OP", titleJa: "鳴らせ！むじなシンフォニー", artistDisplayName: "其原有沙" }),
    expect.objectContaining({
      type: "ED",
      titleJa: "オ・ヒ・メ・サ・マ！",
      videos: [expect.objectContaining({ youtubeVideoId: "zUNn0CsuZg4", officialStatus: "official" })]
    })
  ]));

  const scottPilgrimResponse = await request.get("/api/v1/anime/scott-pilgrim-takes-off.json");
  expect(scottPilgrimResponse.status()).toBe(200);
  const scottPilgrim = await scottPilgrimResponse.json();
  expect(scottPilgrim.themes).toEqual(expect.arrayContaining([
    expect.objectContaining({
      type: "OP",
      titleJa: "bloom",
      artistDisplayName: "ネクライトーキー",
      videos: [expect.objectContaining({ youtubeVideoId: "QjQym1J9Qtw", officialStatus: "official" })]
    })
  ]));

  const pokemonConciergeResponse = await request.get("/api/v1/anime/pokemon-concierge.json");
  expect(pokemonConciergeResponse.status()).toBe(200);
  const pokemonConcierge = await pokemonConciergeResponse.json();
  expect(pokemonConcierge.themes[0]).toMatchObject({
    type: "ED",
    titleJa: "君の居場所（Have a Good Time Here）",
    artistDisplayName: "竹内まりや",
    videos: [expect.objectContaining({ youtubeVideoId: "pQR4xBEM11Q", officialStatus: "official" })]
  });

  const animeResponse = await request.get("/api/v1/anime/mushoku-tensei-3.json");
  expect(animeResponse.status()).toBe(200);
  const anime = await animeResponse.json();
  expect(anime).toMatchObject({ slug: "mushoku-tensei-3", reviewState: "reviewed" });
  expect(anime.themes.length).toBeGreaterThan(0);
  expect(anime.sources.some((source: { role: string }) => source.role === "first_party")).toBe(true);
  expect(anime.themes[0]).toMatchObject({ reviewState: "reviewed" });
  expect(anime.themes[0].sources.some((source: { role: string }) => source.role === "first_party")).toBe(true);
  expect(anime.themes[0].sources.some((source: { role: string }) => source.role === "cross_check")).toBe(true);
  expect(anime).not.toHaveProperty("completionPercent");

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
  await page.emulateMedia({ reducedMotion: "reduce" });

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

  const videoFilter = page.getByRole("checkbox", { name: "有正版影片" });
  await videoFilter.check();
  await expect(videoFilter).toBeChecked();
  await page.getByRole("button", { name: "清除篩選" }).click();
  await expect(videoFilter).not.toBeChecked();

  await page.getByRole("link", { name: /查看 幼女戦記Ⅱ/ }).click();
  await expect(page).toHaveURL(/\/anime\/youjo-senki-2\/$/);
  await expect(page.getByRole("heading", { name: "主題曲" })).toBeVisible();
  await expect(page.getByText("審閱狀態：已審閱").first()).toBeVisible();
  const sourceDisclosure = page.locator(".theme-card").first().locator("summary");
  if (await sourceDisclosure.count()) await sourceDisclosure.click();
  await expect(page.getByRole("list", { name: "歌曲核對來源" }).first()).toBeVisible();
  await expect(page.getByText(/資料完整度/)).toHaveCount(0);
  await expect(page.getByText("公開視覺來源：")).toBeVisible();
  await expect(page.getByRole("link", { name: /回報資料問題/ })).toHaveAttribute("href", /catalog-correction\.yml/);

  const player = page.locator("[data-youtube-player]").first();
  await expect(player.locator("iframe")).toHaveCount(0);
  expect(youtubeRequests).toEqual([]);
  await player.getByRole("button", { name: /載入 YouTube 影片/ }).click();
  await expect(player.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com/);
  await expect(player.locator("iframe")).toHaveAttribute("referrerpolicy", "strict-origin-when-cross-origin");
  await expect(player.locator("[data-youtube-frame]")).toHaveAttribute("aria-busy", "false");
  expect(youtubeRequests.some((url) => url.includes("youtube-nocookie.com"))).toBe(true);
  expect(youtubeRequests.some((url) => url.includes("i.ytimg.com"))).toBe(false);

  const platformLink = page
    .getByRole("list", { name: "音樂平台與購買連結" })
    .locator('a[href="https://nex-tone.link/GPsD8PYbf"]');
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
    if (new URL(request.url()).origin !== e2eOrigin) {
      externalRequests.push(request.url());
    }
  });

  await page.goto("/search/");
  await expect(page.getByRole("heading", { name: "跨季度搜尋" })).toBeVisible();
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("1949");

  const search = page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" });
  await search.fill("ＭＹＴＨ & ＲＯＩＤ");
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("8");
  await expect(page.locator("[data-catalog-theme-count]")).toHaveText("8");
  await expect(page.getByRole("link", { name: "幼女戦記Ⅱ" })).toBeVisible();
  await expect(page.getByText("Why? RED induction")).toBeVisible();
  await expect(page.getByRole("link", { name: "Re:ゼロから始める異世界生活 4th season" })).toBeVisible();
  await expect(page.getByRole("link", { name: "クレバテスⅡ-魔獣の王と偽りの勇者伝承-" })).toBeVisible();
  await expect(page.getByRole("link", { name: "アークナイツ 冬隠帰路" })).toBeVisible();

  await search.fill("幼女 myth");
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("1");
  await expect(page.locator("[data-catalog-theme-count]")).toHaveText("1");
  await expect(page.getByRole("link", { name: "幼女戦記Ⅱ" })).toBeVisible();
  await expect(page.getByText("Why? RED induction")).toBeVisible();
  await expect(page.getByText("Weiter! Weiter!")).toBeHidden();
  expect(new URL(page.url()).search).toBe("");

  await search.fill("片頭曲 myth");
  await expect(page.getByRole("link", { name: "幼女戦記Ⅱ" })).toBeVisible();
  await expect(page.getByText("Why? RED induction")).toBeVisible();
  await expect(page.getByText("Awake Anew")).toBeHidden();

  await search.fill("幼女戰記");
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("1");
  await expect(page.locator("[data-catalog-theme-count]")).toHaveText("2");

  await search.fill("KICK BACK");
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("1");
  await expect(page.locator("[data-catalog-theme-count]")).toHaveText("1");
  await expect(page.getByRole("link", { name: "チェンソーマン" })).toBeVisible();
  await expect(page.getByText("KICK BACK", { exact: true })).toBeVisible();

  await search.fill("找不到的作品名稱");
  await expect(page.locator("[data-catalog-search-empty]")).toBeVisible();
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("0");

  await search.press("Escape");
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("1949");
  expect(externalRequests).toEqual([]);
});

test("added seasonal pages render their reviewed theme records", async ({ page }) => {
  test.setTimeout(60_000);
  // Catalogue assertions wait for content; remote poster latency must not gate navigation.
  const visit = (path: string) => page.goto(path, { waitUntil: "domcontentloaded" });

  await visit("/seasons/2026-winter/");
  await expect(page.getByRole("heading", { name: "2026 冬季動畫" })).toBeVisible();
  await page.getByRole("link", { name: /查看 CHOPPER's/ }).click();
  await expect(page).toHaveURL(/\/anime\/choppers\/$/);
  await expect(page.getByRole("heading", { name: "トニートニートニーチョッパー" })).toBeVisible();
  await expect(page.getByText("ももすももす")).toBeVisible();

  await visit("/seasons/2025-summer/");
  await expect(page.getByRole("heading", { name: "2025 夏季動畫" })).toBeVisible();
  await page.getByRole("link", { name: /查看 銀河特急 ミルキー☆サブウェイ/ }).click();
  await expect(page).toHaveURL(/\/anime\/ginga-tokkyuu-milky-subway\/$/);
  await expect(page.getByRole("heading", { name: "Altair and Vega" })).toBeVisible();
  await expect(page.getByText("MindaRyn", { exact: true })).toBeVisible();

  await visit("/seasons/2025-spring/");
  await expect(page.getByRole("heading", { name: "2025 春季動畫" })).toBeVisible();
  await page.locator('a[href="/anime/oideyo-mahou-shoujo-mura-fuhou-senkyo/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/oideyo-mahou-shoujo-mura-fuhou-senkyo\/$/);
  await expect(page.getByRole("heading", { name: "化け物集う村" })).toBeVisible();
  await expect(page.getByText("釧路（CV：小原莉子）", { exact: true })).toBeVisible();

  await visit("/seasons/2025-winter/");
  await expect(page.getByRole("heading", { name: "2025 冬季動畫" })).toBeVisible();
  await page.locator('a[href="/anime/mashin-souzouden-wataru/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/mashin-souzouden-wataru\/$/);
  await expect(page.getByRole("heading", { name: "POP UP!", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "創", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "ポケット", exact: true })).toBeVisible();
  await expect(page.getByText("lol -エルオーエル-", { exact: true })).toBeVisible();
  await expect(page.getByText("SANTA", { exact: true })).toBeVisible();
  await expect(page.getByText("FANTASTICS", { exact: true })).toBeVisible();

  await visit("/seasons/2024-fall/");
  await expect(page.getByRole("heading", { name: "2024 秋季動畫" })).toBeVisible();
  await page.locator('a[href="/anime/dandadan/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/dandadan\/$/);
  await expect(page.getByRole("heading", { name: "オトノケ", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "TAIDADA", exact: true })).toBeVisible();
  await expect(page.locator(".theme-card__artist", { hasText: "Creepy Nuts" })).toBeVisible();

  await visit("/seasons/2024-summer/");
  await expect(page.getByRole("heading", { name: "2024 夏季動畫" })).toBeVisible();
  await page.locator('a[href="/anime/kami-no-tou-tower-of-god-2nd-season/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/kami-no-tou-tower-of-god-2nd-season\/$/);
  await expect(page.getByRole("heading", { name: "RISE UP", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "NIGHT", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "BELIEVE", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Falling Up", exact: true })).toBeVisible();

  await visit("/seasons/2024-spring/");
  await expect(page.getByRole("heading", { name: "2024 春季動畫" })).toBeVisible();
  await page.locator('a[href="/anime/ookami-to-koushinryou-merchant-meets-the-wise-wolf/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/ookami-to-koushinryou-merchant-meets-the-wise-wolf\/$/);
  await expect(page.getByRole("heading", { name: "Tabi no Yukue", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Sign", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Andante", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Ringo to Kimi", exact: true })).toBeVisible();

  await visit("/seasons/2024-winter/");
  await expect(page.getByRole("heading", { name: "2024 冬季動畫" })).toBeVisible();
  await page.locator('a[href="/anime/snack-basue/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/snack-basue\/$/);
  await expect(page.getByRole("heading", { name: "Uraomote Aquarium feat. RIRIKO, Ryohei Sataka", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Kassai", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Koi no Vacation", exact: true })).toBeVisible();

  await visit("/seasons/2023-fall/");
  await expect(page.getByRole("heading", { name: "2023 秋季動畫" })).toBeVisible();
  await page.locator('a[href="/anime/sousou-no-frieren/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/sousou-no-frieren\/$/);
  await expect(page.getByRole("heading", { name: "Yuusha", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Haru", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Anytime Anywhere", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "bliss", exact: true })).toBeVisible();

  await visit("/anime/scott-pilgrim-takes-off/");
  await expect(page.getByRole("heading", { name: "bloom", exact: true })).toBeVisible();
  await expect(page.locator(".theme-card__artist", { hasText: "ネクライトーキー" })).toBeVisible();
  await expect(page.getByRole("button", { name: /載入 YouTube 影片.*bloom/ })).toBeVisible();

  await visit("/seasons/2023-summer/");
  await expect(page.getByRole("heading", { name: "2023 夏季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("4");
  await expect(page.locator("[data-weekday-section]:visible [data-weekday-count]")).toHaveText([
    "1 套",
    "1 套",
    "2 套"
  ]);
  await page.locator('a[href="/anime/youjo-shachou-r/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/youjo-shachou-r\/$/);
  await expect(page.getByRole("heading", { name: "鳴らせ！むじなシンフォニー", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "オ・ヒ・メ・サ・マ！", exact: true })).toBeVisible();
  await expect(page.getByText("其原有沙", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /載入 YouTube 影片.*オ・ヒ・メ・サ・マ/ })).toBeVisible();

  await visit("/seasons/2023-spring/");
  await expect(page.getByRole("heading", { name: "2023 春季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("3");
  await page.locator('a[href="/anime/kaguya-sama-wa-kokurasetai-first-kiss-wa-owaranai/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/kaguya-sama-wa-kokurasetai-first-kiss-wa-owaranai\/$/);
  await expect(page.getByRole("heading", { name: "Love is Show", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "heart notes", exact: true })).toBeVisible();
  await expect(page.getByText("鈴木雅之 feat. 高城れに", { exact: true })).toBeVisible();
  await expect(page.getByText("鈴木愛理", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /載入 YouTube 影片.*Love is Show/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /載入 YouTube 影片.*heart notes/ })).toBeVisible();

  await visit("/seasons/2023-winter/");
  await expect(page.getByRole("heading", { name: "2023 冬季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("5");
  await page.locator('a[href="/anime/gokushufudou-season-2/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/gokushufudou-season-2\/$/);
  await expect(page.getByRole("heading", { name: "シュフノミチ", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "極・夫婦街道", exact: true })).toBeVisible();
  await expect(page.getByText("打首獄門同好会", { exact: true })).toHaveCount(2);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片.*シュフノミチ/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /載入 YouTube 影片.*極・夫婦街道/ })).toBeVisible();

  await visit("/seasons/2022-fall/");
  await expect(page.getByRole("heading", { name: "2022 秋季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("7");
  await page.locator('a[href="/anime/chainsaw-man/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/chainsaw-man\/$/);
  await expect(page.getByRole("heading", { name: "KICK BACK", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "ファイトソング", exact: true })).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(13);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(13);

  await visit("/seasons/2022-summer/");
  await expect(page.getByRole("heading", { name: "2022 夏季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("13");
  await page.locator('a[href="/anime/made-in-abyss-retsujitsu-no-ougonkyou/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/made-in-abyss-retsujitsu-no-ougonkyou\/$/);
  await expect(page.getByRole("heading", { name: "かたち", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Endless Embrace", exact: true })).toBeVisible();
  await expect(page.getByText("GRAVITY", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);

  await visit("/seasons/2022-spring/");
  await expect(page.getByRole("heading", { name: "2022 春季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("12");
  await page.locator('a[href="/anime/spy-x-family/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/spy-x-family\/$/);
  await expect(page.getByRole("heading", { name: "ミックスナッツ", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "喜劇", exact: true })).toBeVisible();
  await expect(page.getByText("Official髭男dism", { exact: true })).toBeVisible();
  await expect(page.getByText("星野源", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);

  await visit("/seasons/2022-winter/");
  await expect(page.getByRole("heading", { name: "2022 冬季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("13");
  await page.locator('a[href="/anime/karakai-jouzu-no-takagi-san-3/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/karakai-jouzu-no-takagi-san-3\/$/);
  await expect(page.getByRole("heading", { name: "まっすぐ", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "花", exact: true })).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(9);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(9);

  await visit("/seasons/2021-fall/");
  await expect(page.getByRole("heading", { name: "2021 秋季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("14");
  await page.locator('a[href="/anime/megaton-kyuu-musashi/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/megaton-kyuu-musashi\/$/);
  await expect(page.getByRole("heading", { name: "MUSASHI", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "滅亡世界のバラッド", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "奇跡の命", exact: true })).toBeVisible();
  await expect(page.getByText("星の海のラウドネス", { exact: true })).toHaveCount(0);
  await expect(page.locator(".theme-card")).toHaveCount(3);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);
  await visit("/seasons/2021-summer/");
  await expect(page.getByRole("heading", { name: "2021 夏季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("32");
  await page.locator('a[href="/anime/love-live-superstar/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/love-live-superstar\/$/);
  await expect(page.getByRole("heading", { name: "START!! True dreams", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "未来は風のように", exact: true })).toBeVisible();
  await expect(page.getByText("未来予報ハレルヤ", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Wish Song", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);
  await visit("/seasons/2021-spring/");
  await expect(page.getByRole("heading", { name: "2021 春季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("39");
  await page.locator('a[href="/anime/vivy-fluorite-eye-s-song/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/vivy-fluorite-eye-s-song\/$/);
  await expect(page.getByRole("heading", { name: "Sing My Pleasure", exact: true })).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(1);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(1);
  await visit("/seasons/2021-winter/");
  await expect(page.getByRole("heading", { name: "2021 冬季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("34");
  await page.locator('a[href="/anime/oshiete-hokusai-the-animation/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/oshiete-hokusai-the-animation\/$/);
  await expect(page.getByRole("heading", { name: "てんこりんのテーマ", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "おしえて北斎！", exact: true })).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(2);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(1);
  await visit("/seasons/2020-fall/");
  await expect(page.getByRole("heading", { name: "2020 秋季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("31");
  await page.locator('a[href="/anime/jujutsu-kaisen/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/jujutsu-kaisen\/$/);
  await expect(page.getByRole("heading", { name: "廻廻奇譚", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "VIVID VICE", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "LOST IN PARADISE feat. AKLO", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "give it back", exact: true })).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(4);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(4);
  await visit("/seasons/2020-summer/");
  await expect(page.getByRole("heading", { name: "2020 夏季動畫" })).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("25");
  await page.locator('a[href="/anime/lapis-relights/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/lapis-relights\/$/);
  await expect(page.getByRole("heading", { name: "私たちのSTARTRAIL", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "プラネタリウム", exact: true })).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(5);
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(5);
  await visit("/seasons/2020-spring/");
  await expect(
    page.getByRole("heading", { name: "2020 春季動畫" }),
  ).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("40");
  await page
    .locator('a[href="/anime/bungou-to-alchemist-shinpan-no-haguruma/"]')
    .first()
    .click();
  await expect(page).toHaveURL(
    /\/anime\/bungou-to-alchemist-shinpan-no-haguruma\/$/,
  );
  await expect(
    page.getByRole("heading", { name: "グッド・バイ", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "藪の中のジンテーゼ", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(2);
  await expect(
    page.getByRole("button", { name: /載入 YouTube 影片/ }),
  ).toHaveCount(2);
  await visit("/seasons/2020-winter/");
  await expect(
    page.getByRole("heading", { name: "2020 冬季動畫" }),
  ).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("14");
  await page.locator('a[href="/anime/dorohedoro/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/dorohedoro\/$/);
  await expect(
    page.getByRole("heading", { name: "Welcome トゥ 混沌", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "404", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(7);
  await expect(
    page.getByRole("button", { name: /載入 YouTube 影片/ }),
  ).toHaveCount(7);
  await visit("/seasons/2019-fall/");
  await expect(
    page.getByRole("heading", { name: "2019 秋季動畫" }),
  ).toBeVisible();
  await page.getByRole("checkbox", { name: "有正版影片" }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("19");
  await page.locator('a[href="/anime/kengan-ashura-part-2/"]').first().click();
  await expect(page).toHaveURL(/\/anime\/kengan-ashura-part-2\/$/);
  await expect(
    page.getByRole("heading", { name: "哀紫電一閃", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "ASHURA", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".theme-card")).toHaveCount(4);
  await expect(
    page.getByRole("button", { name: /載入 YouTube 影片/ }),
  ).toHaveCount(2);
});

test("public catalogue remains readable offline without caching personal input", async ({ page, context }) => {
  await page.goto("/search/");
  await expect(page.locator('link[rel="manifest"]')).toHaveAttribute("href", "/manifest.webmanifest");

  const registrationScope = await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.ready;
    return registration.scope;
  });
  expect(registrationScope).toBe(`${e2eOrigin}/`);
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(true);
  await page.goto("/anime/strike-witches-501-takeoff-2019/");
  await page.goto("/anime/gonjiro-2019/");

  const cachedUrls = await page.evaluate(async () => {
    const names = await caches.keys();
    const requests = await Promise.all(names.map(async (name) => (await caches.open(name)).keys()));
    return requests.flat().map((request) => request.url);
  });
  expect(cachedUrls.length).toBeGreaterThan(0);
  expect(cachedUrls.every((url) => url.startsWith(`${e2eOrigin}/`))).toBe(true);
  expect(cachedUrls.some((url) => url.includes("mock-posters"))).toBe(false);
  expect(cachedUrls.some((url) => new URL(url).search.length > 0)).toBe(false);

  await context.setOffline(true);
  try {
    await page.getByRole("link", { name: "搜尋「pal@pop」的歌曲", exact: true }).first().click();
    await expect(page.getByRole("heading", { name: "跨季度搜尋" })).toBeVisible();
    await expect(page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" })).toHaveValue("pal@pop");
    await expect(page.getByLabel("搜尋範圍")).toHaveValue("creators");
    await expect(page.getByRole("link", { name: "わさわさわさ！", exact: true })).toBeVisible();
    expect(await page.evaluate(() => localStorage.length + sessionStorage.length)).toBe(0);
    const offlineCachedUrls = await page.evaluate(async () => {
      const names = await caches.keys();
      const requests = await Promise.all(names.map(async (name) => (await caches.open(name)).keys()));
      return requests.flat().map((request) => request.url);
    });
    expect(offlineCachedUrls.every((url) => !new URL(url).hash && !new URL(url).search)).toBe(true);
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" })).toHaveValue("pal@pop");

    await page.goto("/anime/strike-witches-501-takeoff-2019/", { waitUntil: "domcontentloaded" });
    await page.locator(".theme-navigation summary").click();
    await page.getByRole("navigation", { name: "本作品歌曲" }).locator('a[href="#theme-strike-witches-501-takeoff-2019-ed-12"]').click();
    await expect(page.locator("#theme-strike-witches-501-takeoff-2019-ed-12")).toBeFocused();
    await expect(page.locator("iframe")).toHaveCount(0);

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

  const videoFilter = page.getByRole("checkbox", { name: "有正版影片" });
  await videoFilter.focus();
  await page.keyboard.press("Space");
  await expect(videoFilter).toBeChecked();
  await expect(page.locator("[data-result-count]")).toHaveText("58");
  await expect(page.getByRole("heading", { name: "2026 夏季動畫" })).toBeVisible();
});

test("catalogue navigation stays compact and drills down through published years and quarters", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/catalog/");
  const navigation = page.getByRole("navigation", { name: "主要導覽" });
  await expect(navigation.getByRole("link")).toHaveCount(5);
  await expect(navigation.getByRole("link", { name: /動畫目錄/ })).toHaveAttribute("aria-current", "page");
  await expect(navigation.locator('a[href^="/seasons/"]')).toHaveCount(0);
  await expect(page.getByRole("button", { name: "選單" })).toBeHidden();
  await expect(page.locator('.catalog-decade').first()).toHaveAttribute("open", "");
  const olderDecade = page.locator('.catalog-decade').last();
  await expect(olderDecade).not.toHaveAttribute("open");
  await olderDecade.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(olderDecade.getByRole("link", { name: /2019/ })).toBeVisible();
  await page.getByRole("link", { name: /2025.*3 個季度/ }).click();
  await expect(page.getByRole("heading", { name: "2025 動畫目錄" })).toBeVisible();
  const quarters = page.getByRole("list", { name: "2025 已收錄季度" });
  await expect(quarters.getByRole("link")).toHaveCount(3);
  await expect(quarters.locator('a[href="/seasons/2025-fall/"]')).toHaveCount(0);
  await quarters.getByRole("link", { name: /春季動畫/ }).click();
  await expect(page).toHaveURL(/\/seasons\/2025-spring\/$/);
  await expect(navigation.getByRole("link", { name: /動畫目錄/ })).toHaveAttribute("aria-current", "true");
  await expect(page.getByRole("navigation", { name: "2025 年季度導覽" }).getByRole("link", { name: "春季" })).toHaveAttribute("aria-current", "page");
  await expect(page.getByRole("navigation", { name: "所在位置" }).getByRole("link", { name: "2025", exact: true })).toHaveAttribute("href", "/catalog/2025/");
  await expect(page.getByLabel("季度資料狀態")).toContainText("已發布 29 個季度、1,949 個作品頁與 4,323 首 OP／ED");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  const menu = page.getByRole("button", { name: "選單" });
  expect((await page.locator(".site-header").boundingBox())!.height).toBeLessThanOrEqual(80);
  await expect(navigation).toBeHidden();
  await menu.focus();
  await menu.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(navigation.getByRole("link").first()).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(navigation.getByRole("link", { name: /動畫目錄/ })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(navigation).toBeHidden();
  await menu.click();
  await navigation.getByRole("link", { name: /動畫目錄/ }).click();
  await expect(page).toHaveURL(/\/catalog\/$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("search paginates a bounded DOM and combines year, quarter, creator, and song filters", async ({ page }) => {
  await page.goto("/search/");
  await expect(page.locator("[data-catalog-search]")).toHaveAttribute("data-search-ready", "true");
  const results = page.locator("[data-catalog-result]");
  await expect(results).toHaveCount(12);
  const firstTitle = await results.first().locator("h2").textContent();
  await page.getByRole("button", { name: "下一頁" }).click();
  await expect(page.locator("[data-search-page]")).toContainText("第 2／163 頁");
  await expect(page.locator("#catalog-search-results")).toBeFocused();
  await expect(results).toHaveCount(12);
  expect(await results.first().locator("h2").textContent()).not.toBe(firstTitle);
  const input = page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" });
  await page.getByLabel("年份", { exact: true }).selectOption("2026");
  await page.getByLabel("季度", { exact: true }).selectOption("summer");
  await input.fill("ゼロから");
  await expect(results).toHaveCount(1);
  await expect(results.locator('a[href="/anime/re-zero-season-4/"]').first()).toBeVisible();
  await expect(results.locator(".catalog-result__season")).toHaveAttribute("href", "/seasons/2026-summer/");
  await page.getByLabel("季度", { exact: true }).selectOption("spring");
  await expect(results.locator(".catalog-result__season")).toHaveAttribute("href", "/seasons/2026-spring/");
  await input.fill("");
  await page.getByLabel("年份", { exact: true }).selectOption("2025");
  await page.getByLabel("季度", { exact: true }).selectOption("fall");
  await expect(page.locator("[data-catalog-search-empty]")).toBeVisible();
  await expect(page.getByRole("navigation", { name: "搜尋結果分頁" })).toBeHidden();
  await page.getByRole("button", { name: "重設" }).click();
  await expect(input).toBeFocused();
  await expect(results).toHaveCount(12);
  await page.getByLabel("搜尋範圍").selectOption("creators");
  await input.fill("米津玄師");
  await expect(page.getByRole("link", { name: "KICK BACK", exact: true })).toBeVisible();
  await page.getByLabel("搜尋範圍").selectOption("songs");
  await page.getByLabel("歌曲用途").selectOption("ED");
  await input.fill("KICK BACK");
  await expect(results).toHaveCount(0);
  await page.getByLabel("歌曲用途").selectOption("OP");
  await expect(results).toHaveCount(1);
  expect(new URL(page.url()).search).toBe("");
  await page.getByRole("link", { name: "KICK BACK", exact: true }).click();
  expect(new URL(page.url()).hash).toMatch(/^#theme-/);
  const target = page.locator(`[id="${decodeURIComponent(new URL(page.url()).hash.slice(1))}"]`);
  await expect(target.getByRole("heading", { name: "KICK BACK", exact: true })).toBeVisible();
  await expect(target.locator("iframe")).toHaveCount(0);
});

test("catalogue and search fit narrow devices, with native browsing available without JavaScript", async ({ page, browser }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  for (const path of ["/catalog/", "/catalog/2025/", "/search/"]) {
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("KICK BACK");
  await expect(page.getByRole("link", { name: "KICK BACK", exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const nativePage = await context.newPage();
  await nativePage.goto(`${e2eOrigin}/catalog/`);
  await expect(nativePage.getByRole("navigation", { name: "主要導覽" }).getByRole("link")).toHaveCount(5);
  await expect(nativePage.getByRole("navigation", { name: "主要導覽" })).toBeVisible();
  await nativePage.locator(".catalog-decade").last().locator("summary").click();
  await nativePage.getByRole("link", { name: /2019.*3 個季度/ }).click();
  await nativePage.getByRole("link", { name: /秋季動畫.*67 套動畫/ }).click();
  await expect(nativePage.getByRole("heading", { name: "2019 秋季動畫" })).toBeVisible();
  await context.close();
});

test("creator links open local search and retain keyboard, back, reset and narrow-screen browsing", async ({ page, browser, request }) => {
  const requests: string[] = [];
  page.on("request", (item) => requests.push(item.url()));
  const input = page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" });
  const scope = page.getByLabel("搜尋範圍");
  for (const width of [1280, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/anime/gonjiro-2019/");
    const creator = page.getByRole("link", { name: "搜尋「pal@pop」的歌曲", exact: true }).first();
    await expect(creator).toHaveAttribute("href", "/search/#creator=pal%40pop");
    await creator.focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/search\/#creator=pal%40pop$/);
    await expect(input).toHaveValue("pal@pop");
    await expect(input).toHaveAttribute("maxlength", "80");
    await expect(scope).toHaveValue("creators");
    await expect(page.getByLabel("年份", { exact: true })).toHaveValue("");
    await page.getByRole("link", { name: "わさわさわさ！", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/gonjiro-2019\/#theme-gonjiro-2019-ed-1$/);
    await page.goBack();
    await expect(input).toHaveValue("pal@pop");
    await expect(scope).toHaveValue("creators");
    await page.getByRole("button", { name: "重設", exact: true }).click();
    await expect(page).toHaveURL(`${e2eOrigin}/search/`);
    await expect(input).toBeFocused();
    await expect(input).toHaveValue("");
    await expect(scope).toHaveValue("all");
    await expect(page.locator("[data-catalog-result]")).toHaveCount(12);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator("iframe")).toHaveCount(0);
  }
  expect(requests.every((url) => !new URL(url).hash && !new URL(url).search)).toBe(true);
  expect(requests.some((url) => /youtube|ytimg|googlevideo/.test(new URL(url).hostname))).toBe(false);
  expect(await page.evaluate(() => localStorage.length + sessionStorage.length)).toBe(0);

  const response = await request.get("/api/v1/anime/uma-musume-pretty-derby-season-2.json");
  const detail = await response.json();
  const ensemble = detail.themes.find((theme: { id: string }) => theme.id === "uma-musume-pretty-derby-season-2-op-1");
  expect(ensemble.artistDisplayName.length).toBeGreaterThan(80);
  await page.goto("/anime/uma-musume-pretty-derby-season-2/");
  const artist = page.locator("#theme-uma-musume-pretty-derby-season-2-op-1 .theme-card__artist");
  await expect(artist).toHaveText(ensemble.artistDisplayName);
  await expect(artist.getByRole("link")).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.goto("/anime/beyblade-burst-sparking/");
  const instrumental = page.locator("#theme-beyblade-burst-sparking-ed-1 .theme-card__artist");
  await expect(instrumental).toHaveText("(インストゥルメンタル)");
  await expect(instrumental.getByRole("link")).toHaveCount(0);

  const native = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const nativePage = await native.newPage();
    await nativePage.goto(`${e2eOrigin}/anime/gonjiro-2019/`);
    await nativePage.getByRole("link", { name: "搜尋「CHAI」的歌曲", exact: true }).first().click();
    await expect(nativePage.locator("[data-catalog-search] noscript p")).toContainText("搜尋需要 JavaScript");
    await nativePage.getByRole("link", { name: "按年份與季度瀏覽全部動畫", exact: true }).click();
    await expect(nativePage).toHaveURL(`${e2eOrigin}/catalog/`);
    expect(await nativePage.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  } finally {
    await native.close();
  }
});

test("creator search rejects malformed fragments and keeps manual edits and skip navigation local", async ({ page }) => {
  const input = page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" });
  const scope = page.getByLabel("搜尋範圍");
  for (const hash of ["#creator=%", "#creator=CHAI&creator=LiSA", `#creator=${"a".repeat(81)}`]) {
    await page.goto(`/search/${hash}`);
    await expect(page.locator("[data-catalog-search]")).toHaveAttribute("data-search-ready", "true");
    await expect(input).toHaveValue("");
    await expect(scope).toHaveValue("all");
    await expect(page.locator("[data-catalog-result]")).toHaveCount(12);
  }
  const literal = "<img src=x onerror=alert(1)>";
  await page.goto(`/search/#creator=${encodeURIComponent(literal)}`);
  await expect(input).toHaveValue(literal);
  await expect(page.locator("[data-catalog-search-empty]")).toBeVisible();
  await expect(page.locator("[data-catalog-search] img, [data-catalog-search] iframe")).toHaveCount(0);
  await page.evaluate(() => { location.hash = "creator=CHAI"; });
  await expect(input).toHaveValue("CHAI");
  await expect(scope).toHaveValue("creators");
  await expect(page.getByRole("link", { name: "レッツ！ゴンじろー", exact: true })).toBeVisible();
  await page.getByLabel("年份", { exact: true }).selectOption("2019");
  await expect(page).toHaveURL(`${e2eOrigin}/search/`);
  await input.fill("pal@pop");
  await expect(page.getByRole("link", { name: "わさわさわさ！", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "跳到主要內容", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  await expect(input).toHaveValue("pal@pop");
  await expect(page.getByRole("link", { name: "わさわさわさ！", exact: true })).toBeVisible();
  await input.press("Escape");
  await expect(input).toHaveValue("");
  await expect(page).toHaveURL(`${e2eOrigin}/search/`);
  await page.evaluate(() => { location.hash = "creator=CHAI"; });
  await expect(input).toHaveValue("CHAI");
  await input.fill("pal@pop");
  await expect(page).toHaveURL(`${e2eOrigin}/search/`);
  await expect(page.getByRole("link", { name: "わさわさわさ！", exact: true })).toBeVisible();
});

test("2019 summer exposes its coverage, searchable credits and image-free responsive cards", async ({ page }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/catalog/2019/");
    await page.getByRole("link", { name: /夏季動畫.*42 套動畫/ }).click();
    await expect(page.getByRole("heading", { name: "2019 夏季動畫" })).toBeVisible();
    await expect(page.getByText("本季正在補充，目前收錄 42 套作品，包括 38 套 TV 與 4 套網絡連載。其餘作品及特殊歌曲版本仍待核對。", { exact: true })).toBeVisible();
    await expect(page.locator("[data-anime-card]")).toHaveCount(42);
    await expect(page.locator("[data-anime-card] img")).toHaveCount(0);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/search/");
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("summer");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("梶浦由記");
    await page.getByRole("link", { name: "starting the case: Rail Zeppelin", exact: true }).click();
    const opening = page.locator(".theme-card").filter({ has: page.getByRole("heading", { name: "starting the case: Rail Zeppelin", exact: true }) });
    await expect(opening).toContainText("純音樂片頭曲");
    await expect(opening).not.toContainText("演唱：梶浦由記");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.goto("/anime/dumbbell-nan-kilo-moteru/");
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);
  await expect(page.locator("iframe")).toHaveCount(0);
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>" }));
  await page.getByRole("button", { name: /載入 YouTube 影片/ }).first().click();
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/mgympfbOgqw/);
});

test("Kengan search reaches the requested release version and keeps its official video attached", async ({ page }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("fall");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("KING & ASHLEY");
    await page.getByRole("link", { name: "KING & ASHLEY", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/kengan-ashura-part-2\/#theme-kengan-ashura-part-2-op-1$/);
    const original = page.locator("#theme-kengan-ashura-part-2-op-1");
    await expect(original).toContainText("2019 年 Netflix 配信版");
    await expect(original.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(0);
    const replacement = page.locator("#theme-kengan-ashura-part-2-op-2");
    await expect(replacement).toContainText("哀紫電一閃");
    await expect(replacement).toContainText("2020 年電視播出版（第 13 話起）");
    await expect(replacement.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(1);
    await expect(page.locator(".theme-card")).toHaveCount(4);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test("summer web titles expose searchable English credits and an honest missing-song state", async ({ page }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("summer");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("BJRNCK");
    await page.getByRole("link", { name: "Showdown", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/cannon-busters\/#theme-cannon-busters-op-1$/);
    await expect(page.locator("#theme-cannon-busters-op-1")).toContainText("Marty Grimes、BJRNCK");
    await expect(page.locator(".theme-card")).toHaveCount(1);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/anime/saint-seiya-knights-of-the-zodiac/#theme-saint-seiya-knights-of-the-zodiac-op-1");
    await expect(page.locator(".theme-card")).toHaveCount(2);
    await expect(page.locator("#theme-saint-seiya-knights-of-the-zodiac-op-1")).toContainText("The Struts 英文演唱版");
    await expect(page.locator("#theme-saint-seiya-knights-of-the-zodiac-op-1")).toContainText("TIM JENSEN");
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/anime/hero-mask-2nd-season/");
    await expect(page.getByRole("heading", { name: "主題曲資料尚待補充" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "本作不設獨立 OP／ED" })).toHaveCount(0);
    await expect(page.locator(".theme-card, iframe, .anime-hero img")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test("summer TV shorts preserve distinct search results, programme slots and unconfirmed credits", async ({ page }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("summer");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("殘念生物事典");
    await page.locator('a[href="/anime/zannen-na-ikimono-jiten-2019/"]').first().click();
    await expect(page).toHaveURL(/\/anime\/zannen-na-ikimono-jiten-2019\/$/);
    await expect(page.getByText("平日 09:30（日本；7/29～8/7）", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "主題曲資料尚待補充" })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/anime/odoru-mowai-kun/");
    await expect(page.getByText("《おはスタ》星期二 07:05 節目內（日本）", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "主題曲資料尚待補充" })).toBeVisible();
    await expect(page.locator('a[href="https://youranimes.tw/bangumi/201907"]')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/anime/business-fish/#theme-business-fish-ed-1");
    const ending = page.locator("#theme-business-fish-ed-1");
    await expect(ending).toContainText("Don't Stop Moving");
    await expect(ending).toContainText("BUSINESS FISH");
    await expect(ending.locator(".theme-card__credits dt")).toHaveText("Credits");
    await expect(ending.locator(".theme-card__credits dd")).toHaveText("待確認");
    await expect(page.locator(".theme-card")).toHaveCount(1);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test("song details retain reviewed vocal credits alongside release-artist labels", async ({ page }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("summer");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("矢野奨吾");
    await page.getByRole("link", { name: "まるつけ", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/given\/#theme-given-ed-2$/);
    const given = page.locator("#theme-given-ed-2");
    await expect(given).toBeInViewport({ ratio: 0.3 });
    await expect(given.locator(".theme-card__artist")).toHaveText("ギヴン");
    await expect(given.locator(".theme-card__credits div").filter({ hasText: "矢野奨吾" }).locator("dt")).toHaveText("演唱");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/hakata-mentai-pirikarako-chan/#theme-hakata-mentai-pirikarako-chan-ed-1");
    const synthesized = page.locator("#theme-hakata-mentai-pirikarako-chan-ed-1");
    await expect(synthesized.locator(".theme-card__artist")).toHaveText("mathru@かにみそP");
    await expect(synthesized.locator(".theme-card__credits div").filter({ hasText: "鳴花ヒメ・ミコト" }).locator("dt")).toHaveText("演唱");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }

  await page.goto("/anime/saint-seiya-knights-of-the-zodiac/");
  await expect(page.locator("#theme-saint-seiya-knights-of-the-zodiac-op-1 .theme-card__credits dt").filter({ hasText: /^演唱$/ })).toHaveCount(0);
  await page.goto("/anime/lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note/");
  const instrumental = page.locator(".theme-card").filter({ has: page.getByRole("heading", { name: "starting the case: Rail Zeppelin", exact: true }) });
  await expect(instrumental.locator(".theme-card__credits dt")).toHaveText(["作曲", "編曲"]);
  await page.goto("/anime/business-fish/");
  await expect(page.locator("#theme-business-fish-ed-1 .theme-card__credits dt")).toHaveText("Credits");
  await expect(page.locator("#theme-business-fish-ed-1 .theme-card__credits dd")).toHaveText("待確認");
});

test("2019 spring browsing and creator search reach the correct special ending on desktop and mobile", async ({ page }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/catalog/2019/");
    await page.getByRole("link", { name: /春季動畫.*32 套動畫/ }).click();
    await expect(page.getByRole("heading", { name: "2019 春季動畫" })).toBeVisible();
    await expect(page.getByText("本季正在補充，目前收錄 32 套 TV 作品（含電視短篇及重編版）。其餘作品、跨季延續及特殊歌曲版本仍待核對。", { exact: true })).toBeVisible();
    await expect(page.locator("[data-anime-card]")).toHaveCount(32);
    await expect(page.locator("[data-anime-card] img")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/search/");
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("spring");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByLabel("歌曲用途").selectOption("ED");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("中川奈美");
    await page.getByRole("link", { name: "竈門炭治郎のうた", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/kimetsu-no-yaiba\/#theme-kimetsu-no-yaiba-ed-2$/);
    const ending = page.locator("#theme-kimetsu-no-yaiba-ed-2");
    await expect(ending).toBeInViewport({ ratio: 0.3 });
    await expect(ending).toContainText("第19話片尾／兼插入歌");
    await expect(ending.locator(".theme-card__artist")).toHaveText("椎名豪 featuring 中川奈美");
    await expect(ending.locator(".theme-card__credits div").filter({ hasText: "中川奈美" }).locator("dt")).toHaveText("演唱");
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }

  await page.goto("/anime/one-punch-man-2nd-season/");
  await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);
  await expect(page.locator("iframe")).toHaveCount(0);
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>" }));
  await page.locator("#theme-one-punch-man-2nd-season-ed-1").getByRole("button", { name: /載入 YouTube 影片/ }).click();
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/MeK5M0M8U8A/);
});

test("spring character search reaches the episode-six ensemble and preserves the first-season Study trio", async ({ page }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("spring");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByLabel("歌曲用途").selectOption("ED");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("黒瀬ゆうこ");
    await expect(page.locator("[data-catalog-result]")).toHaveCount(1);
    await page.getByRole("link", { name: "爆笑ぼっち塾 校歌", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/hitoribocchi-no-marumaru-seikatsu\/#theme-hitoribocchi-no-marumaru-seikatsu-ed-2$/);
    const ending = page.locator("#theme-hitoribocchi-no-marumaru-seikatsu-ed-2");
    await expect(ending).toBeInViewport({ ratio: 0.3 });
    await expect(ending).toContainText("第6話片尾");
    await expect(ending.locator(".theme-card__credits dt").filter({ hasText: /^演唱$/ })).toHaveCount(0);
    await expect(ending.locator(".theme-card__artist"))
      .toHaveText("一里ぼっち（CV：森下千咲）、砂尾なこ（CV：田中美海）、本庄アル（CV：鬼頭明里）、ソトカ・ラキター（CV：黒瀬ゆうこ）");
    await expect(page.getByRole("heading", { name: "まけるなアル かがやけアル", exact: true })).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/bokutachi-wa-benkyou-ga-dekinai-1st-season/#theme-bokutachi-wa-benkyou-ga-dekinai-1st-season-op-1", { waitUntil: "domcontentloaded" });
    const opening = page.locator("#theme-bokutachi-wa-benkyou-ga-dekinai-1st-season-op-1");
    await expect(opening.locator(".theme-card__artist")).toHaveText("Study");
    await expect(opening.locator(".theme-card__credits dt").filter({ hasText: /^演唱$/ })).toHaveCount(1);
    await expect(opening.locator(".theme-card__credits div").filter({ hasText: /^演唱/ }).locator("dd"))
      .toHaveText("古橋文乃（CV：白石晴香）、緒方理珠（CV：富田美憂）、武元うるか（CV：鈴代紗弓）");
    await expect(opening).not.toContainText("Lynn");
    await expect(opening).not.toContainText("朝日奈丸佳");
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }

  await page.goto("/anime/midara-na-ao-chan-wa-benkyou-ga-dekinai/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("iframe")).toHaveCount(0);
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>" }));
  await page.locator("#theme-midara-na-ao-chan-wa-benkyou-ga-dekinai-ed-1").getByRole("button", { name: /載入 YouTube 影片/ }).click();
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/Uc7Dp_pFO_k/);
});

test("spring fantasy songs retain searchable vocalists, edition dates and consent-bound video links", async ({ page }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("spring");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByLabel("歌曲用途").selectOption("ED");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("園山ひかり");
    await page.getByRole("link", { name: "With Your Breath", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/shoumetsu-toshi\/#theme-shoumetsu-toshi-ed-2$/);
    const ending = page.locator("#theme-shoumetsu-toshi-ed-2");
    await expect(ending.locator(".theme-card__artist")).toHaveText("SPR5");
    await expect(ending.locator(".theme-card__credits dt").filter({ hasText: /^演唱$/ })).toHaveCount(1);
    await expect(ending.locator(".theme-card__credits div").filter({ hasText: /^演唱/ }).locator("dd"))
      .toHaveText("社本悠、岩井映美里、直田姫奈、大西亜玖璃、園山ひかり");
    await expect(ending.locator(".theme-card__credits div").filter({ hasText: "園山ひかり" }).locator("dt")).toHaveText("演唱");
    await expect(page.locator(".theme-card")).toHaveCount(2);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/gunjou-no-magmel/#theme-gunjou-no-magmel-op-1", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#theme-gunjou-no-magmel-op-1")).toContainText("TV Size：2019-06-05；完整版：2019-06-19");
    await expect(page.locator("#theme-gunjou-no-magmel-ed-1")).toContainText("The Key -群青のマグメルver.-");
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/anime/kenja-no-mago/#theme-kenja-no-mago-ed-1", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#theme-kenja-no-mago-ed-1")).toContainText("第6話使用 MV 畫面");
    await expect(page.locator(".theme-card")).toHaveCount(2);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }

  await page.goto("/anime/shoumetsu-toshi/", { waitUntil: "domcontentloaded" });
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>" }));
  await page.locator("#theme-shoumetsu-toshi-ed-2").getByRole("button", { name: /載入 YouTube 影片/ }).click();
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/wZ3Fe1JeecE/);
});

test("supernatural spring songs preserve co-writers, TV edits and distinct Fairy gone quarters", async ({ page }) => {
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("spring");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByLabel("歌曲用途").selectOption("OP");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("松井洋平");
    await page.getByRole("link", { name: "dis-communicate", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/mayonaka-no-occult-koumuin\/#theme-mayonaka-no-occult-koumuin-op-1$/);
    const opening = page.locator("#theme-mayonaka-no-occult-koumuin-op-1");
    await expect(opening.locator(".theme-card__credits dt").filter({ hasText: /^作詞$/ })).toHaveCount(1);
    await expect(opening.locator(".theme-card__credits div").filter({ hasText: /^作詞/ }).locator("dd"))
      .toHaveText("福山 潤、松井洋平");
    await expect(opening).toContainText("動畫盤另收錄 dis-communicate TV edit");
    await expect(opening.locator(".youtube-media__title")).toContainText("MV short ver.");
    await expect(page.locator("#theme-mayonaka-no-occult-koumuin-ed-1")).toContainText("約束のOverture TV edit");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/fairy-gone/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".theme-card h3")).toHaveText(["KNOCK on the CORE", "Ash-like Snow"]);
    await expect(page.locator("#theme-fairy-gone-op-1 .theme-card__credits dd")).toHaveText(["Ayaka Tachibana、AIJ", "宮崎誠", "宮崎誠"]);
    await expect(page.locator("#theme-fairy-gone-ed-1 .theme-card__credits dd")).toHaveText(["NIKIIE", "eNu", "宮崎誠", "宮崎誠"]);
    await expect(page.locator("#theme-fairy-gone-ed-1")).toContainText("TV Size 另行配信；單曲版：2019-04-24");
    await page.locator("#theme-fairy-gone-op-1 summary").click();
    await expect(page.locator("#theme-fairy-gone-op-1").getByRole("link", { name: /VERY GOO/ })).toHaveAttribute("href", "https://www.verygoo.jp/works/202003-201904.php");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/anime/fairy-gone-2/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".theme-card h3")).toHaveText(["STILL STANDING", "Stay Gold"]);
    await page.goto("/anime/sarazanmai/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".theme-card h3")).toHaveText(["まっさら", "スタンドバイミー"]);
    await expect(page.locator("#theme-sarazanmai-op-1 .theme-card__credits div").filter({ hasText: "谷口鮪" })).toHaveCount(3);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/search/");
    for (const [label, value] of [["年份", "2019"], ["季度", "spring"], ["搜尋範圍", "creators"], ["歌曲用途", "ED"]]) {
      await page.getByLabel(label!, { exact: true }).selectOption(value!);
    }
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("NIKIIE");
    await page.getByRole("link", { name: "Ash-like Snow", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/fairy-gone\/#theme-fairy-gone-ed-1$/);
  }
  expect(mediaRequests).toEqual([]);
  await page.goto("/anime/fairy-gone/", { waitUntil: "domcontentloaded" });
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>" }));
  await page.locator("#theme-fairy-gone-ed-1").getByRole("button", { name: /載入 YouTube 影片/ }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/ee855kKPujc/);
});

test("spring music search reaches singing voices, release editions and the official ending reading", async ({ page }) => {
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("spring");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByLabel("歌曲用途").selectOption("ED");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("Alisa");
    await expect(page.locator("[data-catalog-result]")).toHaveCount(1);
    await page.getByRole("link", { name: "Not Afraid", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/carole-and-tuesday\/#theme-carole-and-tuesday-ed-2$/);
    await expect(page.locator(".anime-hero__zh")).toHaveText("凱洛與塔斯黛");
    await expect(page.locator(".theme-card h3")).toHaveText(["Kiss Me", "Polly Jean", "Hold Me Now", "Not Afraid"]);
    await expect(page.locator("#theme-carole-and-tuesday-ed-2 .theme-card__credits div").filter({ hasText: /^演唱Alisa$/ })).toHaveCount(1);
    await expect(page.locator("#theme-carole-and-tuesday-op-2")).toContainText("後半播出部分；單曲另收錄 TV size ver.");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/robihachi/", { waitUntil: "domcontentloaded" });
    const opening = page.locator("#theme-robihachi-op-1");
    await expect(opening).toContainText("單曲一般版由 Hatchi 演唱；另收錄 H☆R version");
    await expect(opening.locator(".theme-card__credits dd")).toHaveText("Hatchi（CV：河本啓佑）");
    await expect(opening.locator(".youtube-media__title")).toHaveText("TVアニメ「RobiHachi」OPテーマ「天才のプレイリスト」");
    await expect(page.locator(".theme-card")).toHaveCount(2);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    await page.getByLabel("搜尋範圍").selectOption("songs");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("Aoki Homura");
    await expect(page.locator("[data-catalog-result]")).toHaveCount(1);
    await page.getByRole("link", { name: "青き炎", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/bakumatsu-crisis\/#theme-bakumatsu-crisis-ed-1$/);
    await expect(page.locator(".theme-card h3")).toHaveText(["Brave Rejection", "青き炎"]);
    await expect(page.locator(".theme-card__credits dd")).toHaveText(["待確認", "待確認"]);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
  await page.goto("/anime/robihachi/", { waitUntil: "domcontentloaded" });
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>" }));
  await page.locator("#theme-robihachi-op-1").getByRole("button", { name: /載入 YouTube 影片/ }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/YqxmjDgTLEc/);
});

test("spring school-music search keeps co-writers, digital dates and video editions attached to the correct season", async ({ page }) => {
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("spring");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByLabel("歌曲用途").selectOption("ED");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("工藤政人");
    await expect(page.locator("[data-catalog-result]")).toHaveCount(1);
    await page.getByRole("link", { name: "Speechless", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/kono-oto-tomare\/#theme-kono-oto-tomare-ed-1$/);
    await expect(page.locator(".theme-card h3")).toHaveText(["Tone", "Speechless"]);
    const speechless = page.locator("#theme-kono-oto-tomare-ed-1");
    await expect(speechless.locator(".theme-card__credits div").filter({ hasText: /^作曲/ })).toHaveText("作曲前迫潤哉、工藤政人");
    await expect(speechless.locator(".theme-card__credits div").filter({ hasText: /^編曲/ })).toHaveText("編曲工藤政人、早川博隆");
    await expect(speechless.locator(".youtube-media__title")).toContainText("Short ver.");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/fruits-basket-2019/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".theme-card h3")).toHaveText(["Again", "Chime", "Lucky Ending", "One Step Closer"]);
    await expect(page.locator("#theme-fruits-basket-2019-op-1 .theme-card__version")).toHaveText("第一季第 1 cour；日文原版");
    await expect(page.locator("#theme-fruits-basket-2019-op-2")).toContainText("CD 於 2019-09-04 發行");
    const closer = page.locator("#theme-fruits-basket-2019-ed-2");
    await expect(closer.locator(".theme-card__credits dd")).toHaveText("Nicole Morier、Drew Erickson、William Aoyama");
    await expect(closer.locator(".youtube-media__title")).toHaveText([
      "INTERSECTION / One Step Closer (TVアニメ「フルーツバスケット」Ending Ver.)", "INTERSECTION / One Step Closer"
    ]);
    await expect(closer.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/mix-meisei-story/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".theme-card h3")).toHaveText(["イコール", "VS", "君に届くまで", "君に伝えたストーリー"]);
    await expect(page.locator("#theme-mix-meisei-story-ed-2 .theme-card__credits dd")).toHaveText(["中園勇樹", "中園勇樹"]);
    await expect(page.locator("#theme-mix-meisei-story-ed-2")).toContainText("2019-07-13");
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
  await page.goto("/anime/fruits-basket-2019/", { waitUntil: "domcontentloaded" });
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>" }));
  await page.locator("#theme-fruits-basket-2019-ed-2").getByRole("button", { name: /載入 YouTube 影片/ }).nth(1).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/YZg8DYDR_8g/);
});

test("spring sports and TV shorts expose reviewed covers, digital dates and incomplete song records", async ({ page }) => {
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    for (const [label, value] of [["年份", "2019"], ["季度", "spring"], ["搜尋範圍", "creators"], ["歌曲用途", "ED"]]) {
      await page.getByLabel(label!, { exact: true }).selectOption(value!);
    }
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("久下真音");
    await page.getByRole("link", { name: "どんなときも。", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/hachigatsu-no-cinderella-nine\/#theme-hachigatsu-no-cinderella-nine-ed-1$/);
    const cover = page.locator("#theme-hachigatsu-no-cinderella-nine-ed-1");
    await expect(cover.locator("time")).toHaveText("2019-06-17");
    await expect(cover).toContainText("迷你專輯於 2019-08-09");
    await expect(cover.locator(".theme-card__artist"))
      .toHaveText("有原翼（CV：西田望見）、東雲龍（CV：近藤玲奈）、野崎夕姫（CV：南早紀）、河北智恵（CV：井上ほの花）");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/chou-kadou-girl-amazing-stranger/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".theme-card h3")).toHaveText(["それゆけ！恋ゴコロ", "ONE"]);
    await expect(page.locator("#theme-chou-kadou-girl-amazing-stranger-op-1 .youtube-media__title")).toContainText("FULL Ver.");
    await expect(page.locator("#theme-chou-kadou-girl-amazing-stranger-ed-1 time")).toHaveText("2019-04-27");
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/yatogame-chan-kansatsu-nikki/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: "主題曲資料尚待補充" })).toBeVisible();
    await expect(page.locator(".theme-card")).toHaveCount(0);
    await expect(page.locator("main")).toContainText("首話 18:55");
    await expect(page.getByRole("link", { name: "← 返回 2019 春季動畫" })).toHaveAttribute("href", "/seasons/2019-spring/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
});

test("spring character songs preserve special endings, split-season dates and complete ensemble credits", async ({ page }) => {
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  for (const width of [1280, 960, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/", { waitUntil: "domcontentloaded" });
    for (const [label, value] of [["年份", "2019"], ["季度", "spring"], ["搜尋範圍", "creators"], ["歌曲用途", "ED"]]) {
      await page.getByLabel(label!, { exact: true }).selectOption(value!);
    }
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("nonoc");
    await page.getByRole("link", { name: "Hollow Veil", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/isekai-quartet\/#theme-isekai-quartet-ed-2$/);
    const special = page.locator("#theme-isekai-quartet-ed-2");
    await expect(special).toContainText("第 5 話特別片尾");
    await expect(special.locator("time")).toHaveText("2019-08-07");
    await expect(special.locator(".theme-card__credits div").filter({ hasText: /^作詞/ }).locator("dd")).toHaveText("nonoc、安田史生");
    await expect(page.locator("#theme-isekai-quartet-op-1 .theme-card__artist"))
      .toHaveText("アインズ（CV：日野 聡）、カズマ（CV：福島 潤）、スバル（CV：小林裕介）、ターニャ（CV：悠木 碧）");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/shingeki-no-kyojin-season-3-part-2/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".theme-card h3")).toHaveText(["憧憬と屍の道", "Name of Love"]);
    const opening = page.locator("#theme-shingeki-no-kyojin-season-3-part-2-op-1");
    const ending = page.locator("#theme-shingeki-no-kyojin-season-3-part-2-ed-1");
    await expect(opening.locator("time")).toHaveText("2019-06-19");
    await expect(opening).toContainText("TV Size 於 2019-04-29");
    await expect(ending.locator("time")).toHaveText("2019-04-29");
    await expect(ending).toContainText("CD 於 2019-05-29");
    await expect(ending.locator(".theme-card__credits div").filter({ hasText: /^作曲/ }).locator("dd")).toHaveText("Cinema Staff、Youichiro Nomura");
    await expect(ending.locator(".youtube-media__title")).toContainText("Short ver.");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/namu-amida-butsu-rendai-utena/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#theme-namu-amida-butsu-rendai-utena-op-1 time")).toHaveCount(0);
    await expect(page.locator("#theme-namu-amida-butsu-rendai-utena-ed-1 time")).toHaveText("2019-01-15");
    await expect(page.locator("#theme-namu-amida-butsu-rendai-utena-ed-1 .youtube-media__title")).toContainText("Lyric Video");
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
});

test("YU-NO creator search preserves the exchanged theme singers, release editions and short official videos", async ({ page }) => {
  const slug = "kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no";
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    await page.getByLabel("年份", { exact: true }).selectOption("2019");
    await page.getByLabel("季度", { exact: true }).selectOption("spring");
    await page.getByLabel("搜尋範圍").selectOption("creators");
    await page.getByLabel("歌曲用途").selectOption("OP");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("高木龍一");
    await page.getByRole("link", { name: "MOTHER", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/anime/${slug}/#theme-${slug}-op-2$`));
    const laterOpening = page.locator(`#theme-${slug}-op-2`);
    await expect(laterOpening.locator(".theme-card__artist")).toHaveText("鈴木このみ");
    await expect(laterOpening.locator("time")).toHaveText("2019-11-06");
    await expect(laterOpening).toContainText("TV Size 於 2019-08-07");
    const opening = page.locator(`#theme-${slug}-op-1`);
    await expect(opening.locator("time")).toHaveText("2019-04-17");
    await expect(opening).toContainText("CD 於 2019-04-24");
    await expect(opening).toContainText("Music Video Short ver.");
    await expect(page.locator(`#theme-${slug}-ed-1`)).toContainText("官方影片為 TV Size MV");
    await expect(page.locator(`#theme-${slug}-ed-2 .theme-card__artist`)).toHaveText("亜咲花");
    await expect(page.locator(".theme-card")).toHaveCount(4);
    await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
});

test("anime details keep full-width poster-free headings and readable metadata across responsive boundaries", async ({ page, browser }) => {
  for (const width of [1280, 960, 760, 640, 521, 520, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const slug of ["gundam-the-origin-zenya-akai-suisei", "re-zero-season-4"]) {
      await page.goto(`/anime/${slug}/`);
      const hero = page.locator(".anime-hero");
      const layout = await hero.evaluate((element) => {
        const rect = element.getBoundingClientRect();
        const content = element.querySelector(".anime-hero__content")!.getBoundingClientRect();
        return {
          width: rect.width, contentWidth: content.width,
          fields: [...element.querySelectorAll(".anime-hero__meta div")].map((row) => {
            const label = row.querySelector("dt")!;
            const value = row.querySelector("dd")!;
            const range = document.createRange();
            range.selectNodeContents(label);
            return {
              labelLines: new Set([...range.getClientRects()].map(({ top }) => top)).size,
              labelRight: label.getBoundingClientRect().right,
              valueLeft: value.getBoundingClientRect().left
            };
          })
        };
      });
      if (slug === "gundam-the-origin-zenya-akai-suisei") expect(layout.contentWidth).toBeCloseTo(layout.width, 0);
      expect(layout.fields).toHaveLength(4);
      for (const field of layout.fields) {
        expect(field.labelLines).toBe(1);
        expect(field.valueLeft).toBeGreaterThan(field.labelRight);
      }
      if (width <= 760) expect(new Set(layout.fields.map(({ valueLeft }) => Math.round(valueLeft))).size).toBe(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await expect(page.locator("iframe")).toHaveCount(0);
    }
  }
  const native = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 640, height: 900 } });
  try {
    const nativePage = await native.newPage();
    await nativePage.goto(`${e2eOrigin}/anime/gundam-the-origin-zenya-akai-suisei/`);
    const hero = await nativePage.locator(".anime-hero").boundingBox();
    const content = await nativePage.locator(".anime-hero__content").boundingBox();
    expect(content?.width).toBeCloseTo(hero!.width, 0);
    const quarter = nativePage.getByRole("navigation", { name: "所在位置" }).getByRole("link", { name: "2019 春季動畫" });
    await quarter.focus();
    await nativePage.keyboard.press("Enter");
    await expect(nativePage).toHaveURL(/\/seasons\/2019-spring\/$/);
    await expect(nativePage.getByRole("heading", { name: "2019 春季動畫" })).toBeVisible();
  } finally {
    await native.close();
  }
});

test("Bakugan Japanese theme search preserves shared credits and separates the later ending from localized media", async ({ page, browser, request }) => {
  const slug = "bakugan-battle-planet-2019";
  const mediaRequests: string[] = [];
  page.on("request", (item) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(item.url()).hostname)) mediaRequests.push(item.url());
  });
  const response = await request.get(`/api/v1/anime/${slug}.json`);
  expect(response.status()).toBe(200);
  const detail = await response.json();
  expect(detail.id).toBe("catalog-bakugan-battle-planet-2019");
  expect(detail.themes).toHaveLength(3);
  expect(detail.themes.every((theme: { releaseDate?: string }) => !theme.releaseDate)).toBe(true);
  for (const width of [1280, 960, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("爆丸 決戰星球");
    await page.getByRole("link", { name: /爆丸バトルプラネット/ }).first().click();
    await expect(page).toHaveURL(new RegExp(`/anime/${slug}/$`));
    await expect(page.locator(".anime-hero__zh")).toHaveText("爆丸 決戰星球");
    await expect(page.locator(".anime-hero__romaji")).toHaveCount(0);
    await expect(page.locator(".theme-card")).toHaveCount(3);
    await expect(page.locator(".theme-navigation")).toHaveCount(0);
    await expect(page.locator(".theme-card time")).toHaveCount(0);
    await expect(page.locator(`#theme-${slug}-op-1 .theme-card__credits dd`)).toHaveText(["MiNE", "川口進、MiNE、Atsushi Shimada", "Atsushi Shimada、Peach"]);
    await expect(page.locator(`#theme-${slug}-ed-1 .theme-card__credits dd`)).toHaveText(["中村崇人", "中村崇人", "Dr.Dalmatian"]);
    const later = page.locator(`#theme-${slug}-ed-2`);
    await expect(later.locator(".theme-card__credits dt")).toHaveText(["作詞", "作曲"]);
    await expect(later).toContainText("後期 ED（2020 年更新）");
    await later.getByRole("link", { name: "搜尋「児山啓介」的歌曲", exact: true }).focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" })).toHaveValue("児山啓介");
    for (const [label, value] of [["年份", "2019"], ["季度", "spring"], ["歌曲用途", "ED"]]) await page.getByLabel(label!, { exact: true }).selectOption(value!);
    await expect(page.locator("[data-catalog-result]")).toHaveCount(1);
    await page.getByRole("link", { name: "サヨナラの方程式", exact: true }).click();
    await expect(later).toBeFocused();
    await expect(page.locator("iframe")).toHaveCount(0);
    await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const nativePage = await context.newPage();
    await nativePage.goto(`${e2eOrigin}/catalog/2019/`);
    await nativePage.getByRole("link", { name: /春季動畫.*32 套動畫/ }).click();
    await nativePage.getByRole("link", { name: /爆丸バトルプラネット/ }).first().click();
    await expect(nativePage).toHaveURL(new RegExp(`/anime/${slug}/$`));
    await expect(nativePage.locator(".theme-card")).toHaveCount(3);
    await expect(nativePage.getByRole("link", { name: /YOYOTV 台灣播出方/ })).toHaveAttribute("href", "https://www.youtube.com/watch?v=9yiBbt820uo");
    await expect(nativePage.locator("iframe")).toHaveCount(0);
    expect(await nativePage.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  } finally {
    await context.close();
  }
});

test("long song lists provide compact local navigation with keyboard, history and correct ending targets", async ({ page }) => {
  const slug = "strike-witches-501-takeoff-2019";
  const mediaRequests: string[] = [];
  page.on("request", (item) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(item.url()).hostname)) mediaRequests.push(item.url());
  });
  for (const width of [1280, 960, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(`/anime/${slug}/`);
    const disclosure = page.locator(".theme-navigation");
    const summary = disclosure.locator("summary");
    const navigation = page.getByRole("navigation", { name: "本作品歌曲" });
    await expect(disclosure).not.toHaveAttribute("open");
    await expect(summary).toContainText("1 首 OP · 12 首 ED");
    await expect(navigation).toBeHidden();
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(navigation.getByRole("link")).toHaveCount(13);
    const panel = await navigation.boundingBox();
    expect(panel!.height).toBeLessThanOrEqual(844 * 0.55 + 1);
    const groupLink = navigation.locator(`a[href="#theme-${slug}-ed-12"]`);
    await expect(groupLink).toContainText("Treasure of life #12");
    await expect(groupLink).toContainText("第501統合戦闘航空団");
    await groupLink.focus();
    await page.keyboard.press("Enter");
    const group = page.locator(`#theme-${slug}-ed-12`);
    await expect(group).toBeFocused();
    await expect(group).toBeInViewport({ ratio: 0.3 });
    await expect(page.locator(":target")).toHaveAttribute("id", `theme-${slug}-ed-12`);
    await page.keyboard.press("Tab");
    expect(await group.evaluate((element) => element.contains(document.activeElement))).toBe(true);
    await page.goBack();
    await expect(disclosure).toHaveAttribute("open");
    await navigation.locator(`a[href="#theme-${slug}-ed-2"]`).click();
    await expect(page.locator(`#theme-${slug}-ed-2`)).toBeFocused();
    await expect(page.locator(`#theme-${slug}-ed-2 .theme-card__artist`)).toHaveText("エーリカ・ハルトマン（CV：野川さくら）");
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
  for (const slug of ["gonjiro-2019", "kengan-ashura-part-2", "aoi-hane-mitsuketa"]) {
    await page.goto(`/anime/${slug}/`);
    await expect(page.locator(".theme-navigation")).toHaveCount(0);
  }
});

test("the largest song list keeps every title reachable with native disclosure and no JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const page = await context.newPage();
    await page.goto(`${e2eOrigin}/anime/bessatsu-olympia-kyklos/`);
    const disclosure = page.locator(".theme-navigation");
    await expect(disclosure).not.toHaveAttribute("open");
    await disclosure.locator("summary").focus();
    await page.keyboard.press("Enter");
    const navigation = page.getByRole("navigation", { name: "本作品歌曲" });
    await expect(navigation.getByRole("link")).toHaveCount(25);
    expect(await navigation.evaluate((element) => element.scrollHeight > element.clientHeight)).toBe(true);
    const lastLink = navigation.getByRole("link").last();
    const target = page.locator((await lastLink.getAttribute("href"))!);
    await lastLink.focus();
    await expect(lastLink).toBeInViewport();
    await page.keyboard.press("Enter");
    await expect(target).toBeFocused();
    await expect(target).toBeInViewport({ ratio: 0.3 });
    await expect(page.locator(".theme-card")).toHaveCount(25);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  } finally {
    await context.close();
  }
});

test("501 Takeoff creator search reaches the correct solo ending and keeps the group preview separate across devices", async ({ page, browser, request }) => {
  const slug = "strike-witches-501-takeoff-2019";
  const mediaRequests: string[] = [];
  page.on("request", (item) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(item.url()).hostname)) mediaRequests.push(item.url());
  });
  const response = await request.get(`/api/v1/anime/${slug}.json`);
  expect(response.status()).toBe(200);
  const detail = await response.json();
  expect(detail.id).toBe("catalog-strike-witches-501-2019");
  expect(detail.themes).toHaveLength(13);
  expect(detail).not.toHaveProperty("anilistUrl");
  for (const width of [1280, 960, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(`/anime/${slug}/`);
    await expect(page.locator(".anime-hero__zh")).toHaveText("強襲魔女 501部隊出動！");
    await expect(page.locator(".anime-hero__romaji")).toHaveCount(0);
    const solo = page.locator(`#theme-${slug}-ed-2`);
    const creator = solo.getByRole("link", { name: "搜尋「野川さくら」的歌曲", exact: true });
    await creator.focus();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" })).toHaveValue("野川さくら");
    await expect(page.getByLabel("搜尋範圍")).toHaveValue("creators");
    for (const [label, value] of [["年份", "2019"], ["季度", "spring"], ["歌曲用途", "ED"]]) {
      await page.getByLabel(label!, { exact: true }).selectOption(value!);
    }
    await expect(page.locator("[data-catalog-result]")).toHaveCount(1);
    await page.getByRole("link", { name: "Treasure of life #2", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/anime/${slug}/#theme-${slug}-ed-2$`));
    await expect(solo).toBeInViewport({ ratio: 0.3 });
    await expect(solo.locator(".theme-card__artist")).toHaveText("エーリカ・ハルトマン（CV：野川さくら）");
    await expect(solo.locator(".theme-card__credits dt")).toHaveText(["演唱", "作詞", "編曲"]);
    await expect(solo.locator("time")).toHaveText("2019-06-26");
    await expect(solo).toContainText("作曲署名待核對");
    await expect(solo.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(0);
    const group = page.locator(`#theme-${slug}-ed-12`);
    await expect(group.locator(".theme-card__artist")).toHaveText("第501統合戦闘航空団");
    await expect(group).toContainText("官方影片為試聽短版");
    await expect(group.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(1);
    await expect(page.locator(`#theme-${slug}-op-1`)).toContainText("官方影片為短版 MV");
    await expect(page.locator(".theme-card")).toHaveCount(13);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official ending preview fixture</title>" }));
  const preview = page.locator(`#theme-${slug}-ed-12`).getByRole("button", { name: /載入 YouTube 影片/ });
  await preview.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/63fWLXw7ylY/);

  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const nativePage = await context.newPage();
    await nativePage.goto(`${e2eOrigin}/catalog/2019/`);
    await nativePage.getByRole("link", { name: /春季動畫.*32 套動畫/ }).click();
    await nativePage.getByRole("link", { name: /ストライクウィッチーズ 501部隊発進しますっ/ }).first().click();
    await expect(nativePage).toHaveURL(new RegExp(`/anime/${slug}/$`));
    await expect(nativePage.locator(".theme-card")).toHaveCount(13);
    const sources = nativePage.locator(`#theme-${slug}-ed-12 details`);
    await sources.locator("summary").focus();
    await nativePage.keyboard.press("Enter");
    await expect(sources.locator('a[href="https://columbia.jp/prod-info/COCX-40890/"]')).toBeVisible();
    await expect(nativePage.locator("iframe")).toHaveCount(0);
    expect(await nativePage.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  } finally {
    await context.close();
  }
});

test("Gonjiro search preserves independent identity, co-composers and the licensed TV ending across devices", async ({ page, browser, request }) => {
  const mediaRequests: string[] = [];
  page.on("request", (item) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(item.url()).hostname)) mediaRequests.push(item.url());
  });
  const response = await request.get("/api/v1/anime/gonjiro-2019.json");
  expect(response.status()).toBe(200);
  const detail = await response.json();
  expect(detail.id).toBe("catalog-gonjiro-2019");
  expect(detail).not.toHaveProperty("anilistUrl");
  expect(detail).not.toHaveProperty("titleRomaji");
  for (const width of [1280, 960, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    for (const [label, value] of [["年份", "2019"], ["季度", "spring"], ["搜尋範圍", "creators"], ["歌曲用途", "ED"]]) {
      await page.getByLabel(label!, { exact: true }).selectOption(value!);
    }
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("pal@pop");
    await page.getByRole("link", { name: "わさわさわさ！", exact: true }).click();
    await expect(page).toHaveURL(/\/anime\/gonjiro-2019\/#theme-gonjiro-2019-ed-1$/);
    await expect(page.getByRole("heading", { name: "けだまのゴンじろー", exact: true })).toBeVisible();
    await expect(page.locator(".anime-hero__zh")).toHaveText("毛球權次郎");
    await expect(page.locator(".anime-hero__romaji")).toHaveCount(0);
    await expect(page.getByRole("link", { name: "AniList", exact: true })).toHaveCount(0);
    await expect(page.locator("#theme-gonjiro-2019-op-1 .theme-card__credits dd")).toHaveText(["ユウキ", "マナ、カナ", "CHAI"]);
    const ending = page.locator("#theme-gonjiro-2019-ed-1");
    await expect(ending.locator(".theme-card__credits dd")).toHaveText(["デーモン閣下", "デーモン閣下、pal@pop", "pal@pop"]);
    await expect(ending.locator("time")).toHaveText("2019-07-24");
    await expect(ending).toContainText("2019-04-06");
    await expect(ending).toContainText("アニメエンディングver.");
    await expect(ending).toContainText("Tomoki Misato");
    await expect(ending).toContainText("授權");
    await expect(ending.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(1);
    await expect(page.locator(".theme-card")).toHaveCount(2);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Licensed ending fixture</title>" }));
  await page.getByRole("button", { name: /載入 YouTube 影片/ }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/GrWK6BJwziI/);

  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const nativePage = await context.newPage();
  await nativePage.goto(`${e2eOrigin}/catalog/2019/`);
  await nativePage.getByRole("link", { name: /春季動畫.*32 套動畫/ }).click();
  await nativePage.getByRole("link", { name: /けだまのゴンじろー/ }).first().click();
  await expect(nativePage).toHaveURL(/\/anime\/gonjiro-2019\/$/);
  await expect(nativePage.locator(".theme-card")).toHaveCount(2);
  await expect(nativePage.locator(".anime-hero__romaji")).toHaveCount(0);
  await expect(nativePage.locator("iframe")).toHaveCount(0);
  expect(await nativePage.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await context.close();
});

test("ORIGIN creator search reaches the reviewed cover and keeps the episode-twelve video attached to its ending", async ({ page }) => {
  const slug = "gundam-the-origin-zenya-akai-suisei";
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    for (const [label, value] of [["年份", "2019"], ["季度", "spring"], ["搜尋範圍", "creators"], ["歌曲用途", "ED"]]) {
      await page.getByLabel(label!, { exact: true }).selectOption(value!);
    }
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("ニール・セダカ");
    await page.getByRole("link", { name: "水の星へ愛をこめて", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/anime/${slug}/#theme-${slug}-ed-2$`));
    const cover = page.locator(`#theme-${slug}-ed-2`);
    await expect(cover.locator(".theme-card__artist")).toHaveText("SUGIZO feat. コムアイ（水曜日のカンパネラ）");
    await expect(cover.locator(".theme-card__credits dd")).toHaveText(["コムアイ（水曜日のカンパネラ）", "売野雅勇", "ニール・セダカ", "SUGIZO"]);
    await expect(page.locator(`#theme-${slug}-op-3 .theme-card__artist`)).toHaveText("LUNA SEA");
    await expect(page.locator(`#theme-${slug}-op-3 time`)).toHaveText("2019-09-06");
    await expect(page.locator(`#theme-${slug}-ed-1 .theme-card__credits dd`).first()).toHaveText("井荻麟、売野雅勇");
    const third = page.locator(`#theme-${slug}-ed-3`);
    await expect(third).toContainText("第12話版");
    await expect(third.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(2);
    const finale = page.locator(`#theme-${slug}-ed-4`);
    await expect(finale.locator(".theme-card__credits dd")).toHaveText(["アイナ・ジ・エンド（BiSH）", "MORRIE", "SUGIZO", "SUGIZO"]);
    await expect(finale).toContainText("最終話 ED");
    await expect(page.locator(".theme-card")).toHaveCount(7);
    await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(8);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Episode-twelve ending fixture</title>" }));
  await page.locator(`#theme-${slug}-ed-3`).getByRole("button", { name: /載入 YouTube 影片/ }).nth(1).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("iframe")).toHaveCount(1);
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/Nnzm6h4fIRQ/);
  await expect(page.locator(`#theme-${slug}-ed-3`).getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(1);
});

test("Diamond creator search reaches the original endings and preserves CD dates, co-arrangers and media versions", async ({ page }) => {
  const slug = "diamond-no-ace-act-ii";
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/search/");
    for (const [label, value] of [["年份", "2019"], ["季度", "spring"], ["搜尋範圍", "creators"], ["歌曲用途", "ED"]]) {
      await page.getByLabel(label!, { exact: true }).selectOption(value!);
    }
    await page.getByRole("searchbox", { name: "搜尋動畫、歌曲或創作者" }).fill("hotaru");
    await page.getByRole("link", { name: "チャンス！", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/anime/${slug}/#theme-${slug}-ed-3$`));
    const chance = page.locator(`#theme-${slug}-ed-3`);
    await expect(chance.locator(".theme-card__artist")).toHaveText("三森すずこ");
    await expect(chance.locator(".theme-card__credits dd")).toHaveText(["hotaru", "大石昌良", "大石昌良、yamazo"]);
    await expect(chance).toContainText("官方音源");
    const escalation = page.locator(`#theme-${slug}-ed-2`);
    await expect(escalation.locator(".theme-card__credits dd")).toHaveText(["hotaru", "Tom-H@ck", "KanadeYUK、Tom-H@ck"]);
    await expect(escalation).toContainText("Music Video Full");
    await expect(page.locator(`#theme-${slug}-op-1`)).toContainText("TV Size 於 2019-04-02");
    await expect(page.locator(`#theme-${slug}-op-2 time`)).toHaveText("2020-08-12");
    await expect(page.locator(`#theme-${slug}-ed-4 time`)).toHaveText("2020-02-05");
    await expect(page.locator(".theme-card")).toHaveCount(6);
    await expect(page.getByRole("button", { name: /載入 YouTube 影片/ })).toHaveCount(6);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official audio fixture</title>" }));
  await page.locator(`#theme-${slug}-ed-3`).getByRole("button", { name: /載入 YouTube 影片/ }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/MNzIIZzqAVU/);
});

test("complete ensemble names appear once while individual vocalists and production roles remain available", async ({ page, request, browser }) => {
  const repeated = [
    ["isekai-quartet", "isekai-quartet-op-1"],
    ["isekai-quartet", "isekai-quartet-ed-1"],
    ["hitoribocchi-no-marumaru-seikatsu", "hitoribocchi-no-marumaru-seikatsu-op-1"],
    ["hitoribocchi-no-marumaru-seikatsu", "hitoribocchi-no-marumaru-seikatsu-ed-2"],
    ["cannon-busters", "cannon-busters-op-1"],
    ["sewayaki-kitsune-no-senko-san", "sewayaki-kitsune-no-senko-san-op-1"],
    ["seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai", "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-6"],
    ["hachigatsu-no-cinderella-nine", "hachigatsu-no-cinderella-nine-ed-1"]
  ] as const;
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    for (const [slug, id] of repeated) {
      const response = await request.get(`/api/v1/anime/${slug}.json`);
      const detail = await response.json();
      const theme = detail.themes.find((item: { id: string }) => item.id === id);
      await page.goto(`/anime/${slug}/#theme-${id}`, { waitUntil: "domcontentloaded" });
      const card = page.locator(`#theme-${id}`);
      await expect(card.locator(".theme-card__artist")).toHaveText(theme.artistDisplayName);
      await expect(card.locator(".theme-card__credits dt").filter({ hasText: /^演唱$/ })).toHaveCount(0);
      const vocals = theme.credits.filter((credit: { role: string }) => credit.role === "vocals");
      expect(vocals.length).toBeGreaterThan(1);
      for (const credit of vocals) await expect(card.locator(".theme-card__artist")).toContainText(credit.name);
      const production = theme.credits.filter((credit: { role: string }) => credit.role !== "vocals");
      for (const credit of production) await expect(card.locator(".theme-card__credits")).toContainText(credit.name);
      if (!production.length) await expect(card.locator(".theme-card__credits")).toContainText("製作待確認");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await expect(page.locator("iframe")).toHaveCount(0);
    }
  }
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const nativePage = await context.newPage();
  await nativePage.goto(`${e2eOrigin}/anime/hachigatsu-no-cinderella-nine/`);
  const card = nativePage.locator("#theme-hachigatsu-no-cinderella-nine-ed-1");
  await expect(card.locator(".theme-card__artist")).toContainText("井上ほの花");
  await expect(card.locator(".theme-card__credits dd")).toHaveText(["槇原敬之", "槇原敬之", "久下真音"]);
  await expect(card.locator(".theme-card__credits dt").filter({ hasText: /^演唱$/ })).toHaveCount(0);
  await card.locator("summary").click();
  await expect(card.getByRole("list", { name: "歌曲核對來源" }).getByRole("link")).toHaveCount(4);
  await context.close();
});

test("song summaries group shared roles, retain every name and show only reviewed release dates", async ({ page, browser }) => {
  const candyResponse = await page.request.get("/api/v1/anime/candy-caries.json");
  const candy = await candyResponse.json() as { themes: { id: string; credits: { name: string; role: string }[] }[] };
  const telepathy = candy.themes.find(({ id }) => id === "candy-caries-ed-1")!;
  for (const width of [1280, 960, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/anime/candy-caries/#theme-candy-caries-ed-1", { waitUntil: "domcontentloaded" });
    const summary = page.locator("#theme-candy-caries-ed-1 .theme-card__summary");
    const credits = summary.locator(".theme-card__credits");
    await expect(credits.locator("dt")).toHaveText(["作詞", "作曲", "編曲"]);
    for (const credit of telepathy.credits.filter(({ role }) => role !== "vocals")) {
      await expect(credits).toContainText(credit.name);
    }
    await expect(summary.locator("time")).toHaveAttribute("datetime", "2026-05-18");
    await expect(summary.locator(".theme-card__release-date")).toHaveText("發行日期 2026-05-18");
    expect(await credits.evaluate((element) => element.getBoundingClientRect().height)).toBeLessThan(235);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await page.goto("/anime/fruits-basket-2019/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#theme-fruits-basket-2019-op-1 time")).toHaveText("2019-04-12");
    await expect(page.locator("#theme-fruits-basket-2019-op-2 time")).toHaveAttribute("datetime", "2019-07-05");
    await expect(page.locator("#theme-fruits-basket-2019-op-2 .theme-card__version")).toContainText("CD 於 2019-09-04 發行");
    await page.goto("/anime/bullet-bullet/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#theme-bullet-bullet-op-1 time")).toHaveCount(0);
    await expect(page.locator("#theme-bullet-bullet-op-1 .theme-card__credits dt")).toHaveText(["作詞", "作曲", "編曲"]);
    await expect(page.getByRole("heading", { name: "BULLET/BULLET", exact: true, level: 1 })).toBeVisible();
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  const nativeContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const nativePage = await nativeContext.newPage();
  await nativePage.goto(`${e2eOrigin}/anime/kono-oto-tomare/`);
  const speechless = nativePage.locator("#theme-kono-oto-tomare-ed-1");
  await expect(speechless.locator(".theme-card__credits dd")).toHaveText(["前迫潤哉", "前迫潤哉、工藤政人", "工藤政人、早川博隆"]);
  await expect(speechless.locator("time")).toHaveAttribute("datetime", "2019-05-08");
  await speechless.locator("summary").focus();
  await nativePage.keyboard.press("Enter");
  const source = speechless.getByRole("link", { name: /内田雄馬官方：春季 ED/ });
  await source.focus();
  await expect(source).toBeFocused();
  expect(await nativePage.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await nativeContext.close();
});

test("official video titles identify the edition before consent and remain visible after loading", async ({ page }) => {
  const mediaRequests: string[] = [];
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo/.test(new URL(request.url()).hostname)) mediaRequests.push(request.url());
  });
  const longTitle = "TVアニメ『プリマドール』OPテーマ「Tin Toy Melody」Full ver.／シャノワール 灰桜（和氣あず未）、鴉羽（楠木ともり）、月下（富田美憂）、箒星（中島由貴）、レーツェル（鬼頭明里）";
  for (const width of [320, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/anime/prima-doll/", { waitUntil: "domcontentloaded" });
    const player = page.locator("[data-youtube-player]").filter({ has: page.locator('[data-embed-url*="Dx3nvcC54Hc"]') });
    const title = player.locator(".youtube-media__title");
    await expect(title).toHaveText(longTitle);
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
    expect(await title.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
    expect((await title.boundingBox())!.y + (await title.boundingBox())!.height)
      .toBeLessThanOrEqual((await player.locator("[data-youtube-frame]").boundingBox())!.y);
    const playIcon = (await player.locator(".youtube-media__play").boundingBox())!;
    const consent = (await player.locator(".youtube-media__consent").boundingBox())!;
    expect(playIcon.y + playIcon.height + 4).toBeLessThanOrEqual(consent.y);
    await expect(page.locator("iframe")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  expect(mediaRequests).toEqual([]);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/anime/gunjou-no-magmel/", { waitUntil: "domcontentloaded" });
  const opening = page.locator("#theme-gunjou-no-magmel-op-1 [data-youtube-player]");
  await expect(opening.locator(".youtube-media__title")).toHaveText("風男塾 (Fudanjuku) / Dash&Daaash!!（Short Ver.）");
  await page.goto("/anime/shoumetsu-toshi/", { waitUntil: "domcontentloaded" });
  const ending = page.locator("#theme-shoumetsu-toshi-ed-2 [data-youtube-player]");
  const title = ending.locator(".youtube-media__title");
  await expect(title).toContainText("Music Video(2chorus)");
  expect(mediaRequests).toEqual([]);
  await page.route("https://www.youtube-nocookie.com/**", (route) => route.fulfill({ contentType: "text/html", body: "<!doctype html><title>Official player fixture</title>" }));
  await ending.getByRole("button", { name: /載入 YouTube 影片/ }).focus();
  await page.keyboard.press("Enter");
  await expect(ending.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/wZ3Fe1JeecE/);
  await expect(title).toContainText("Music Video(2chorus)");
  await expect(title).toBeVisible();
});

test("dense song sources expand independently with complete links, visible review dates and native keyboard access", async ({ page, browser, request }) => {
  const response = await request.get("/api/v1/anime/medalist-2nd-season.json");
  const anime = await response.json();
  const expectedSources = anime.themes.find((theme: { id: string }) => theme.id === "medalist-2nd-season-ed-1").sources;
  expect(expectedSources).toHaveLength(14);
  for (const width of [1280, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/anime/medalist-2nd-season/", { waitUntil: "domcontentloaded" });
    const ending = page.locator("#theme-medalist-2nd-season-ed-1");
    const sources = ending.getByRole("list", { name: "歌曲核對來源" });
    const links = sources.getByRole("link");
    const disclosure = ending.locator("details");
    const toggle = disclosure.locator("summary");
    await expect(disclosure).not.toHaveAttribute("open");
    await expect(toggle).toContainText("核對來源（14）");
    await expect(toggle.getByText("審閱狀態：已審閱")).toBeVisible();
    await expect(toggle.getByText(/最後驗證：/)).toBeVisible();
    await expect(links).toHaveCount(0);
    expect((await toggle.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    if (width === 1280) expect((await ending.locator(".theme-card__summary").boundingBox())!.height).toBeLessThan(300);
    if (width === 390) expect((await ending.locator(".theme-card__summary").boundingBox())!.height).toBeLessThan(400);
    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(disclosure).toHaveAttribute("open", "");
    await expect(page.locator(".theme-card details[open]")).toHaveCount(1);
    await expect(links).toHaveCount(expectedSources.length);
    for (let index = 0; index < expectedSources.length; index += 1) {
      await expect(links.nth(index)).toBeVisible();
      await expect(links.nth(index)).toContainText(expectedSources[index].label);
      await expect(links.nth(index)).toHaveAttribute("href", expectedSources[index].url);
      await expect(links.nth(index)).toHaveAttribute("rel", "noopener noreferrer external");
    }
    if (width === 1280) expect((await ending.locator(".theme-card__summary").boundingBox())!.height).toBeLessThan(500);
    if (width === 390) expect((await ending.locator(".theme-card__summary").boundingBox())!.height).toBeLessThan(820);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await toggle.focus();
    await page.keyboard.press("Space");
    await expect(disclosure).not.toHaveAttribute("open");
    await expect(links).toHaveCount(0);
    await expect(toggle).toBeFocused();

    await page.goto("/anime/gal-to-kyouryuu/", { waitUntil: "domcontentloaded" });
    expect(await page.locator(".theme-card__verification").evaluateAll((elements) =>
      elements.every((element) => element.scrollWidth <= element.clientWidth)
    )).toBe(true);
    await page.goto("/anime/ginga-eiyuu-densetsu-die-neue-these-seiran/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".theme-card").first().locator("details")).toHaveCount(0);
    await expect(page.getByRole("list", { name: "歌曲核對來源" }).first().getByRole("link")).toHaveCount(2);
    if (width === 1280) expect((await page.locator(".theme-card__summary").first().boundingBox())!.height).toBeLessThan(180);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator("iframe")).toHaveCount(0);
  }

  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const nativePage = await context.newPage();
  await nativePage.goto(`${e2eOrigin}/anime/medalist-2nd-season/`, { waitUntil: "domcontentloaded" });
  const nativeEnding = nativePage.locator("#theme-medalist-2nd-season-ed-1");
  const nativeLinks = nativeEnding.getByRole("list", { name: "歌曲核對來源" }).getByRole("link");
  await expect(nativeLinks).toHaveCount(0);
  await nativeEnding.locator("summary").focus();
  await nativePage.keyboard.press("Space");
  await expect(nativeLinks).toHaveCount(14);
  await nativeLinks.first().focus();
  await nativePage.keyboard.press("Tab");
  await expect(nativeLinks.nth(1)).toBeFocused();
  expect(await nativePage.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await context.close();
});

test("weekday navigation follows populated groups and remains useful after filters and without JavaScript", async ({ page, browser }) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/seasons/2019-spring/", { waitUntil: "domcontentloaded" });
    const navigation = page.getByRole("navigation", { name: "跳到播出星期" });
    await expect(navigation.getByRole("link")).toHaveText(["週一", "週二", "週三", "週四", "週五", "週六", "週日"]);
    await expect(page.locator("[data-weekday-section]:visible")).toHaveCount(7);
    await expect(page.locator(".weekday-section__empty")).toHaveCount(0);
    await expect(page.locator("[data-weekday-section]").first()).toHaveAttribute("id", "weekday-1");

    await page.getByRole("checkbox", { name: "有正版影片" }).check();
    await expect(navigation.getByRole("link")).toHaveText(["週一", "週二", "週三", "週四", "週五", "週六", "週日"]);
    await expect(page.locator("[data-result-count]")).toHaveText("21");
    const expectedCounts = [3, 4, 1, 1, 3, 4, 5];
    for (const [index, link] of (await navigation.getByRole("link").all()).entries()) {
      const target = page.locator((await link.getAttribute("href"))!);
      await expect(target).toBeVisible();
      await expect(target.locator("[data-anime-card]:visible")).toHaveCount(expectedCounts[index]!);
    }
    await navigation.getByRole("link", { name: "週六" }).click();
    await expect(page).toHaveURL(/#weekday-6$/);
    await expect(navigation.getByRole("link", { name: "週六" })).toHaveAttribute("aria-current", "location");
    await page.getByRole("button", { name: "清除篩選" }).click();
    await expect(navigation.getByRole("link")).toHaveText(["週一", "週二", "週三", "週四", "週五", "週六", "週日"]);
    await expect(page.locator("[data-result-count]")).toHaveText("32");
    await expect(page.getByRole("checkbox", { name: "有 OP" })).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }

  await page.goto("/seasons/2023-fall/", { waitUntil: "domcontentloaded" });
  for (const label of ["有 OP", "有 ED", "有正版影片"]) await page.getByRole("checkbox", { name: label, exact: true }).check();
  await expect(page.locator("[data-result-count]")).toHaveText("0");
  await expect(page.locator("[data-filter-empty]")).toHaveText("沒有符合目前篩選條件的動畫。");
  await expect(page.locator("[data-filter-empty]")).toBeVisible();
  await expect(page.getByRole("navigation", { name: "跳到播出星期" })).toBeHidden();
  await expect(page.locator("[data-weekday-section]:visible")).toHaveCount(0);
  await page.getByRole("button", { name: "清除篩選" }).click();
  await expect(page.locator("[data-result-count]")).toHaveText("100");
  await expect(page.getByRole("navigation", { name: "跳到播出星期" })).toBeVisible();
  await expect(page.locator("[data-filter-empty]")).toBeHidden();

  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const nativePage = await context.newPage();
  await nativePage.goto(`${e2eOrigin}/seasons/2019-spring/`);
  await expect(nativePage.getByRole("navigation", { name: "跳到播出星期" }).getByRole("link"))
    .toHaveText(["週一", "週二", "週三", "週四", "週五", "週六", "週日"]);
  await expect(nativePage.locator("[data-weekday-section]")).toHaveCount(7);
  await expect(nativePage.locator("[data-anime-card]")).toHaveCount(32);
  await nativePage.getByRole("link", { name: "週五", exact: true }).click();
  await expect(nativePage).toHaveURL(/#weekday-5$/);
  expect(await nativePage.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await context.close();
});

test("unknown routes render the public 404 state and stay out of the index", async ({ page }) => {
  const response = await page.goto("/not-a-real-route/");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "這一頁還未收錄。" })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
});

test("API failures render a public error state without leaking upstream details", async ({ page }) => {
  await page.goto(`${e2eErrorOrigin}/`);

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
