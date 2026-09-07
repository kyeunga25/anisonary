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
  expect(seasons).toHaveLength(28);

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
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("1917");

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
  await expect(page.locator("[data-catalog-anime-count]")).toHaveText("1917");
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
  await expect(page.getByLabel("季度資料狀態")).toContainText("已發布 28 個季度、1,917 個作品頁與 4,229 首 OP／ED");

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
  await expect(page.locator("[data-search-page]")).toContainText("第 2／160 頁");
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
  await nativePage.getByRole("link", { name: /2019.*2 個季度/ }).click();
  await nativePage.getByRole("link", { name: /秋季動畫.*67 套動畫/ }).click();
  await expect(nativePage.getByRole("heading", { name: "2019 秋季動畫" })).toBeVisible();
  await context.close();
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
