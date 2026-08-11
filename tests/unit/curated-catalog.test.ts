import { describe, expect, it } from "vitest";
import { curatedAnimeDetails, curatedSeasonDetails, curatedSeasons } from "@/data/curated-data";
import { CuratedProvider } from "@/data/curated-provider";
import { creditRoleLabel } from "@/utils/theme";

describe("curated public catalogue", () => {
  it("publishes all four reviewed seasonal snapshots", () => {
    expect(curatedSeasons.map((season) => season.id)).toEqual([
      "2026-summer",
      "2026-spring",
      "2026-winter",
      "2025-summer"
    ]);
    expect(curatedSeasonDetails).toHaveLength(4);
    expect(curatedSeasonDetails.map((season) => season.anime.length)).toEqual([70, 70, 66, 75]);
    expect(curatedSeasonDetails.map((season) => [season.id, season.reviewState, season.verifiedAt])).toEqual([
      ["2026-summer", "reviewed", "2026-08-02"],
      ["2026-spring", "reviewed", "2026-08-02"],
      ["2026-winter", "reviewed", "2026-07-28"],
      ["2025-summer", "reviewed", "2026-08-10"]
    ]);
    expect(curatedAnimeDetails).toHaveLength(280);
    expect(curatedAnimeDetails.filter((anime) => anime.themes.length > 0)).toHaveLength(278);
    expect(curatedAnimeDetails.flatMap((anime) => anime.themes)).toHaveLength(615);
    expect(curatedAnimeDetails.filter((anime) => anime.themeAvailability === "documented")).toHaveLength(278);
    expect(curatedAnimeDetails.filter((anime) => anime.themeAvailability === "not_used")).toHaveLength(2);
    expect(curatedAnimeDetails.filter((anime) => anime.themeAvailability === "not_announced")).toHaveLength(0);
    const youtubeLinks = curatedAnimeDetails
      .flatMap((anime) => anime.themes)
      .flatMap((theme) => theme.links)
      .filter((link) => link.platform === "YouTube");
    expect(youtubeLinks).toHaveLength(454);
    expect(youtubeLinks.every((link) => new URL(link.url).hostname === "www.youtube.com")).toBe(true);
  });

  it("keeps every season card connected to one complete detail record", () => {
    const slugs = curatedAnimeDetails.map((anime) => anime.slug);
    const ids = curatedAnimeDetails.map((anime) => anime.id);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(ids).size).toBe(ids.length);

    for (const season of curatedSeasonDetails) {
      for (const card of season.anime) {
        const detail = curatedAnimeDetails.find((anime) => anime.slug === card.slug);
        expect(detail, card.slug).toBeDefined();
        expect(detail?.titleJa).toBeTruthy();
        expect(detail?.titleZhHant).toBeTruthy();
        expect(detail?.themes).toHaveLength(card.opCount + card.edCount);
      }
    }
  });

  it("uses traceable HTTPS artwork and reviewed public sources", () => {
    const newlyReviewedIds = new Set(
      curatedSeasonDetails
        .filter((season) => season.id === "2026-winter" || season.id === "2025-summer")
        .flatMap((season) => season.anime.map((anime) => anime.id))
    );
    const freshlyReviewedThemeIds = new Set([
      "shibou-yuugi-de-meshi-wo-kuu-op-1",
      "shibou-yuugi-de-meshi-wo-kuu-ed-1",
      "hanazakari-no-kimitachi-e-op-1",
      "hanazakari-no-kimitachi-e-ed-1",
      "champignon-no-majo-op-1",
      "champignon-no-majo-ed-1",
      "sousou-no-frieren-2nd-season-op-1",
      "sousou-no-frieren-2nd-season-ed-1",
      "sousou-no-frieren-2nd-season-ed-2",
      "oshi-no-ko-3rd-season-op-1",
      "oshi-no-ko-3rd-season-ed-1",
      "gelpiyo-ed-1",
      "candy-caries-ed-1",
      "kumarba-season-3-op-1",
      "pan-no-akachan-tv-ed-1",
      "nezumi-kun-no-chokki-tv-ed-1",
      "odekake-kozame-season-2-ed-1",
      "shou-3-ashibe-qq-goma-chan-ed-1",
      "shinobanai-crypto-ninja-sakuya-san-no-maki-op-1",
      "neko-konogoro-tenka-toitsu-hen-op-1",
      "turkey-op-1",
      "turkey-op-2",
      "turkey-ed-1",
      "turkey-ed-2",
      "turkey-ed-3",
      "turkey-ed-4",
      "turkey-ed-5",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-op-1",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-1",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-2",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-3",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-4",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-5",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-6",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-7",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-8",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-9",
      "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-10",
      "watari-kun-no-xx-ga-houkai-sunzen-op-1",
      "watari-kun-no-xx-ga-houkai-sunzen-op-2",
      "watari-kun-no-xx-ga-houkai-sunzen-ed-1",
      "watari-kun-no-xx-ga-houkai-sunzen-ed-2",
      "punirunes-puni-3-op-1",
      "binan-koukou-chikyuu-bouei-bu-haikara-op-1",
      "binan-koukou-chikyuu-bouei-bu-haikara-ed-1",
      "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-op-1",
      "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-1",
      "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-2",
      "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-3",
      "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-4",
      "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-5",
      "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-6",
      "kamitsubaki-shi-kensetsuchuu-op-1",
      "kamitsubaki-shi-kensetsuchuu-ed-1",
      "kamitsubaki-shi-kensetsuchuu-ed-2",
      "kamitsubaki-shi-kensetsuchuu-ed-3",
      "kamitsubaki-shi-kensetsuchuu-ed-4",
      "kamitsubaki-shi-kensetsuchuu-ed-5",
      "kamitsubaki-shi-kensetsuchuu-ed-6",
      "kamitsubaki-shi-kensetsuchuu-ed-7",
      "kamitsubaki-shi-kensetsuchuu-ed-8",
      "kamitsubaki-shi-kensetsuchuu-ed-9",
      "kamitsubaki-shi-kensetsuchuu-ed-10",
      "kamitsubaki-shi-kensetsuchuu-ed-11",
      "gakkou-de-wa-oshiete-kurenai-taisetsu-na-koto-ed-1",
      "kanojo-okarishimasu-4th-season-op-1",
      "kanojo-okarishimasu-4th-season-ed-1",
      "yofukashi-no-uta-season-2-op-1",
      "yofukashi-no-uta-season-2-ed-1",
      "yofukashi-no-uta-season-2-ed-2",
      "chibi-godzilla-no-gyakushuu-3-op-1",
      "jigoku-sensei-nube-2025-op-1",
      "jigoku-sensei-nube-2025-ed-1",
      "tsuyokute-new-saga-op-1",
      "tsuyokute-new-saga-ed-1",
      "clevatess-majuu-no-ou-to-akago-to-kabane-no-yuusha-op-1",
      "clevatess-majuu-no-ou-to-akago-to-kabane-no-yuusha-ed-1",
      "onmyo-kaiten-re-verse-op-1",
      "onmyo-kaiten-re-verse-ed-1",
      "jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-2nd-season-op-1",
      "jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-2nd-season-ed-1",
      "necronomico-no-cosmic-horror-show-op-1",
      "necronomico-no-cosmic-horror-show-ed-1",
      "mizu-zokusei-no-mahou-tsukai-op-1",
      "mizu-zokusei-no-mahou-tsukai-ed-1",
      "bad-girl-op-1",
      "bad-girl-ed-1",
      "bad-girl-ed-2",
      "isekai-mokushiroku-mynoghra-hametsu-no-bunmei-de-hajimeru-sekai-seifuku-op-1",
      "isekai-mokushiroku-mynoghra-hametsu-no-bunmei-de-hajimeru-sekai-seifuku-ed-1",
      "jibaku-shounen-hanako-kun-2-part-2-op-1",
      "jibaku-shounen-hanako-kun-2-part-2-ed-1",
      "koujo-denka-no-kateikyoushi-op-1",
      "koujo-denka-no-kateikyoushi-ed-1",
      "mattaku-saikin-no-tantei-to-kitara-op-1",
      "mattaku-saikin-no-tantei-to-kitara-ed-1",
      "mattaku-saikin-no-tantei-to-kitara-ed-2",
      "ginga-tokkyuu-milky-subway-op-1",
      "ginga-tokkyuu-milky-subway-op-2",
      "tsuihousha-shokudou-e-youkoso-op-1",
      "tsuihousha-shokudou-e-youkoso-ed-1",
      "kizetsu-yuusha-to-ansatsu-hime-op-1",
      "kizetsu-yuusha-to-ansatsu-hime-ed-1",
      "gacen-shoujo-to-ibunka-kouryuu-op-1",
      "gacen-shoujo-to-ibunka-kouryuu-ed-1",
      "tomica-heroes-jobraver-tokusou-gattai-robo-tv-op-1",
      "yuusha-party-wo-tsuihou-sareta-shiro-madoushi-s-rank-boukensha-ni-hirowareru-kono-shiro-madoushi-ga-kikakugaisugiru-op-1",
      "yuusha-party-wo-tsuihou-sareta-shiro-madoushi-s-rank-boukensha-ni-hirowareru-kono-shiro-madoushi-ga-kikakugaisugiru-ed-1",
      "karaoke-iko-op-1",
      "dr-stone-science-future-part-2-op-1",
      "dr-stone-science-future-part-2-ed-1",
      "kizu-darake-seijo-yori-houfuku-wo-komete-op-1",
      "kizu-darake-seijo-yori-houfuku-wo-komete-ed-1",
      "busu-ni-hanataba-wo-op-1",
      "busu-ni-hanataba-wo-ed-1",
      "tougen-anki-op-1",
      "tougen-anki-op-2",
      "tougen-anki-ed-1",
      "tougen-anki-ed-2",
      "futari-solo-camp-op-1",
      "futari-solo-camp-op-2",
      "futari-solo-camp-ed-1",
      "shuukan-ranobe-anime-op-1",
      "shuukan-ranobe-anime-ed-1",
      "yami-shibai-15-ed-1",
      "utagoe-wa-mille-feuille-op-1",
      "muchuu-sa-kimi-ni-op-1",
      "muchuu-sa-kimi-ni-ed-1",
      "chikyuu-no-latair-ed-1",
      "hikaru-ga-shinda-natsu-op-1",
      "hikaru-ga-shinda-natsu-ed-1",
      "gachiakuta-op-1",
      "gachiakuta-op-2",
      "gachiakuta-ed-1",
      "gachiakuta-ed-2",
      "sakamoto-days-part-2-op-1",
      "sakamoto-days-part-2-ed-1",
      "kaoru-hana-wa-rin-to-saku-op-1",
      "kaoru-hana-wa-rin-to-saku-ed-1",
      "arknights-enshin-shomei-op-1",
      "arknights-enshin-shomei-ed-1",
      "arknights-enshin-shomei-ed-2",
      "ame-to-kimi-to-op-1",
      "ame-to-kimi-to-ed-1",
      "9-nine-shihaisha-no-oukan-op-1",
      "9-nine-shihaisha-no-oukan-ed-1",
      "food-court-de-mata-ashita-op-1",
      "food-court-de-mata-ashita-ed-1",
      "silent-witch-chinmoku-no-majo-no-kakushigoto-op-1",
      "silent-witch-chinmoku-no-majo-no-kakushigoto-ed-1",
      "ruri-no-houseki-op-1",
      "ruri-no-houseki-ed-1",
      "bullet-bullet-op-1",
      "bullet-bullet-ed-1",
      "hotel-inhumans-op-1",
      "hotel-inhumans-ed-1",
      "fermat-no-ryouri-op-1",
      "fermat-no-ryouri-ed-1",
      "zutaboro-reijou-wa-ane-no-moto-konyakusha-ni-dekiai-sareru-op-1",
      "zutaboro-reijou-wa-ane-no-moto-konyakusha-ni-dekiai-sareru-ed-1",
      "dekin-no-mogura-op-1",
      "dekin-no-mogura-ed-1",
      "puniru-wa-kawaii-slime-2nd-season-op-1",
      "puniru-wa-kawaii-slime-2nd-season-ed-1",
      "city-the-animation-op-1",
      "city-the-animation-ed-1",
      "city-the-animation-ed-3",
      "nyaight-of-the-living-cat-op-1",
      "nyaight-of-the-living-cat-ed-1",
      "kakkou-no-iinazuke-season-2-op-1",
      "kakkou-no-iinazuke-season-2-ed-1",
      "grand-blue-season-2-op-1",
      "grand-blue-season-2-ed-1",
      "watashi-ga-koibito-ni-nareru-wake-nai-jan-muri-muri-muri-ja-nakatta-op-1",
      "watashi-ga-koibito-ni-nareru-wake-nai-jan-muri-muri-muri-ja-nakatta-ed-1",
      "tate-no-yuusha-no-nariagari-season-4-op-1",
      "tate-no-yuusha-no-nariagari-season-4-ed-1",
      "osomatsu-san-4th-season-op-1",
      "osomatsu-san-4th-season-ed-1",
      "new-panty-and-stocking-with-garterbelt-op-1",
      "new-panty-and-stocking-with-garterbelt-ed-1",
      "leviathan-op-1",
      "leviathan-ed-1",
      "tensei-shitara-dai-nana-ouji-datta-node-kimamani-majutsu-wo-kiwamemasu-2nd-season-op-1",
      "tensei-shitara-dai-nana-ouji-datta-node-kimamani-majutsu-wo-kiwamemasu-2nd-season-ed-1",
      "mikadono-sanshimai-wa-angai-choroi-op-1",
      "mikadono-sanshimai-wa-angai-choroi-ed-1",
      "mikadono-sanshimai-wa-angai-choroi-ed-2",
      "mikadono-sanshimai-wa-angai-choroi-ed-3",
      "my-melody-and-kuromi-ed-1",
      "poke-mon-concierge-part-2-ed-1"
    ]);
    const latestReviewedThemeIds = new Set([
      "yuusha-kei-ni-shosu-choubatsu-yuusha-9004-tai-keimu-kiroku-op-1",
      "hokuto-no-ken-kenou-gun-zako-tachi-no-banka-op-1",
      "hokuto-no-ken-kenou-gun-zako-tachi-no-banka-ed-1",
      "goumon-baito-kun-no-nichijou-op-1",
      "goumon-baito-kun-no-nichijou-ed-1",
      "vigilante-boku-no-hero-academia-illegals-2nd-season-op-1",
      "vigilante-boku-no-hero-academia-illegals-2nd-season-ed-1",
      "ikoku-nikki-op-1",
      "ikoku-nikki-ed-1",
      "golden-kamuy-saishuushou-op-1",
      "golden-kamuy-saishuushou-ed-1",
      "kirei-ni-shitemoraemasu-ka-op-1",
      "kirei-ni-shitemoraemasu-ka-ed-1",
      "jujutsu-kaisen-shimetsu-kaiyuu-zenpen-op-1",
      "jujutsu-kaisen-shimetsu-kaiyuu-zenpen-ed-1",
      "jigokuraku-2nd-season-op-1",
      "jigokuraku-2nd-season-ed-1",
      "trigun-stargaze-op-1",
      "trigun-stargaze-ed-1",
      "fate-strange-fake-op-1",
      "fate-strange-fake-ed-1",
      "medalist-2nd-season-op-1",
      "medalist-2nd-season-ed-1",
      "darwin-jihen-op-1",
      "darwin-jihen-ed-1",
      "mf-ghost-3rd-season-op-1",
      "mf-ghost-3rd-season-ed-1",
      "yuusha-party-wo-oidasareta-kiyou-binbou-op-1",
      "yuusha-party-wo-oidasareta-kiyou-binbou-ed-1",
      "tamon-kun-ima-docchi-op-1",
      "tamon-kun-ima-docchi-ed-1",
      "tamon-kun-ima-docchi-ed-2",
      "takopii-no-genzai-op-1",
      "takopii-no-genzai-ed-1",
      "kaijuu-8-gou-2nd-season-op-1",
      "kaijuu-8-gou-2nd-season-ed-1",
      "dandadan-2nd-season-op-1",
      "dandadan-2nd-season-ed-1"
    ]);

    for (const anime of curatedAnimeDetails) {
      expect(anime.posterUrl).toMatch(/^https:\/\/s4\.anilist\.co\//);
      if (anime.bannerUrl) expect(anime.bannerUrl).toMatch(/^https:\/\/s4\.anilist\.co\//);
      expect(anime.imageSourceUrl).toMatch(/^https:\/\/anilist\.co\/anime\//);
      expect(anime.posterAlt).toContain(anime.titleJa);
      expect(anime.reviewState).toBe("reviewed");
      expect(anime.sources.length).toBeGreaterThanOrEqual(2);
      expect(anime.sources.some((source) => source.role === "first_party")).toBe(true);
      expect(anime.sources.some((source) => source.role !== "first_party")).toBe(true);

      for (const item of anime.sources) {
        expect(item.url).toMatch(/^https:\/\//);
        expect(item.url).not.toContain("example.com");
        expect(["zh-Hant", "zh-Hans", "ja", "en", "multi"]).toContain(item.language);
        expect(item.verifiedAt).toBe(anime.verifiedAt);
      }

      for (const item of anime.themes) {
        const expectedVerifiedAt = latestReviewedThemeIds.has(item.id)
          ? "2026-08-11"
          : freshlyReviewedThemeIds.has(item.id)
          ? "2026-08-10"
          : item.id === "hyakki-yakou-shou-ed-1" || item.id === "chikyuu-daisuki-kikkun-ed-1"
          ? "2026-08-02"
          : newlyReviewedIds.has(anime.id) ? "2026-07-28" : "2026-07-25";
        expect(item.titleJa).toBeTruthy();
        expect(item.artistDisplayName).toBeTruthy();
        expect(item.reviewState).toBe("reviewed");
        expect(item.sources.length).toBeGreaterThanOrEqual(2);
        expect(item.sources.some((source) => source.role === "first_party")).toBe(true);
        expect(item.sources.some((source) => source.role === "cross_check")).toBe(true);
        expect(item.sourceLabels).toEqual([...new Set(item.sources.map((source) => source.label))]);
        expect(item.lastVerifiedAt).toBe(expectedVerifiedAt);
        for (const source of item.sources) {
          expect(source.url).toMatch(/^https:\/\//);
          expect(source.url).not.toContain("example.com");
          expect(["zh-Hant", "zh-Hans", "ja", "en", "multi"]).toContain(source.language);
          expect(source.verifiedAt).toBe(expectedVerifiedAt);
        }
        for (const link of item.links) expect(link.url).toMatch(/^https:\/\//);
      }

      expect(anime.hasOfficialVideo).toBe(anime.themes.some((item) =>
        item.videos.length > 0 || item.links.some((link) => link.platform === "YouTube")
      ));
    }
  });

  it("includes manually verified themes missed by the seasonal song indexes", () => {
    const expectedThemes = [
      ["choppers", "OP", "トニートニートニーチョッパー", "ももすももす"],
      ["enen-no-shouboutai-san-no-shou-part-2", "OP", "Ignis -イグニス-", "西川貴教"],
      ["trigun-stargaze", "ED", "スターダスト", "FOMARE"],
      ["prism-rondo", "ED", "star flower", "Chilli Beans."],
      ["ginga-tokkyuu-milky-subway", "OP", "Altair and Vega", "MindaRyn"],
      ["poke-mon-concierge-part-2", "ED", "オノマトペISLAND", "山下達郎"],
      ["chikyuu-no-latair", "ED", "地球のオーケストラ", "アースセイバーズ"]
    ] as const;

    for (const [slug, type, titleJa, artist] of expectedThemes) {
      const theme = curatedAnimeDetails
        .find((anime) => anime.slug === slug)
        ?.themes.find((item) => item.type === type && item.titleJa === titleJa);
      expect(theme, `${slug}:${type}:${titleJa}`).toBeDefined();
      expect(theme?.artistDisplayName).toContain(artist);
    }
  });

  it("adds reviewed 2025 summer song details from first-party releases", () => {
    const schoolAnime = curatedAnimeDetails.find((anime) =>
      anime.slug === "gakkou-de-wa-oshiete-kurenai-taisetsu-na-koto"
    );
    const schoolEnding = schoolAnime?.themes.find((theme) => theme.id.endsWith("-ed-1"));

    expect(schoolAnime).toMatchObject({
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(schoolEnding).toMatchObject({
      type: "ED",
      titleJa: "学校では教えてくれないこと",
      titleRomaji: "Gakkou de wa Oshiete Kurenai Koto",
      artistDisplayName: "OCHA NORMA",
      lastVerifiedAt: "2026-08-10"
    });
    expect(schoolEnding?.credits).toEqual(expect.arrayContaining([
      { name: "OCHA NORMA", role: "vocals" },
      { name: "星部ショウ", role: "lyrics" },
      { name: "星部ショウ", role: "composition" },
      { name: "星部ショウ", role: "arrangement" }
    ]));
    expect(schoolEnding?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "5E4EprwFUEY",
      type: "full_music_video",
      channelName: "OCHA NORMA",
      officialStatus: "official"
    }));
    expect(schoolEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://gakkodeha-anime.com/", role: "first_party" }),
      expect.objectContaining({ url: "https://natalie.mu/comic/news/627063", role: "cross_check" })
    ]));

    const rentalAnime = curatedAnimeDetails.find((anime) => anime.slug === "kanojo-okarishimasu-4th-season");
    expect(rentalAnime?.themes.find((theme) => theme.type === "OP")?.videos)
      .toContainEqual(expect.objectContaining({ youtubeVideoId: "q9YrWVr4dvI", type: "full_music_video" }));
    expect(rentalAnime?.themes.find((theme) => theme.type === "ED")).toMatchObject({
      titleJa: "ぼくのベガ",
      titleRomaji: "Boku no Vega",
      artistDisplayName: "リーガルリリー",
      videos: expect.arrayContaining([
        expect.objectContaining({ youtubeVideoId: "jrGOylZ63oE", type: "full_music_video" })
      ])
    });

    const karaokeAnime = curatedAnimeDetails.find((anime) => anime.slug === "karaoke-iko");
    expect(karaokeAnime?.themes[0]?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "Jh9atzsn2MM",
      type: "creditless_op",
      channelName: "KADOKAWA Anime Channel"
    }));
  });

  it("enriches both Kanojo Okarishimasu season 4 themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "kanojo-okarishimasu-4th-season");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      id: "curated-179344",
      titleJa: "彼女、お借りします 第4期",
      titleZhHant: "出租女友 （第4期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      id: "kanojo-okarishimasu-4th-season-op-1",
      titleJa: "Umitsuki",
      artistDisplayName: "ClariS",
      releaseDate: "2025-07-12",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "ClariS", role: "vocals" },
      { name: "ClariS", role: "lyrics" },
      { name: "栗林悟", role: "composition" },
      { name: "栗原暁(Jazzinʼpark)", role: "composition" },
      { name: "栗林悟", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "VOdmjxK8QGQ",
        type: "creditless_op",
        channelName: "DMM pictures",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "q9YrWVr4dvI",
        type: "full_music_video",
        channelName: "ClariS Official YouTube Channel",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=q9YrWVr4dvI",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://claris.lnk.to/Umitsuki",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://kanokari-official.com/4th/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/claris/info/575423",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/animeVideo.php?sn=49141",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      id: "kanojo-okarishimasu-4th-season-ed-1",
      titleJa: "ぼくのベガ",
      titleRomaji: "Boku no Vega",
      artistDisplayName: "リーガルリリー",
      releaseDate: "2025-07-01",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "リーガルリリー", role: "vocals" },
      { name: "たかはしほのか", role: "lyrics" },
      { name: "たかはしほのか", role: "composition" },
      { name: "リーガルリリー", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "4G_FxiIALwo",
        type: "creditless_ed",
        channelName: "DMM pictures",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "jrGOylZ63oE",
        type: "full_music_video",
        channelName: "リーガルリリー Official YouTube Channel",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=jrGOylZ63oE",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://kmu.lnk.to/MyDearVega",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://kanokari-official.com/4th/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.office-augusta.com/regallily/news/?post=news-20250701",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375577/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/animeVideo.php?sn=49141",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("corrects and enriches all Yofukashi no Uta season 2 themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "yofukashi-no-uta-season-2");
    const opening = anime?.themes.find((theme) => theme.id === "yofukashi-no-uta-season-2-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "yofukashi-no-uta-season-2-ed-1");
    const finaleEnding = anime?.themes.find((theme) => theme.id === "yofukashi-no-uta-season-2-ed-2");

    expect(anime).toMatchObject({
      id: "curated-175914",
      titleJa: "よふかしのうた Season 2",
      titleZhHant: "徹夜之歌 （第2期）",
      opCount: 1,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Mirage",
      artistDisplayName: "Creepy Nuts",
      releaseDate: "2025-07-04",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "Creepy Nuts", role: "vocals" },
      { name: "R-指定", role: "lyrics" },
      { name: "DJ松永", role: "composition" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "l5S0JhqULAU",
        type: "creditless_op",
        channelName: "【フジテレビ】アニメ公式チャンネル",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "ce6yxES9oLA",
        type: "full_music_video",
        channelName: "Creepy Nuts",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=l5S0JhqULAU",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://smar.lnk.to/Mirage",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://yofukashi-no-uta.com/news/20250605_130/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/creepynuts/info/574463",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376217/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "眠れ",
      titleRomaji: "Nemure",
      artistDisplayName: "Creepy Nuts",
      releaseDate: "2025-07-05",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "Creepy Nuts", role: "vocals" },
      { name: "R-指定", role: "lyrics" },
      { name: "DJ松永", role: "composition" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "K5T_aKoN31Q",
        type: "creditless_ed",
        channelName: "【フジテレビ】アニメ公式チャンネル",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "iL4Gq4qe8ok",
        type: "full_music_video",
        channelName: "Creepy Nuts",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=K5T_aKoN31Q",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://smar.lnk.to/Nemure",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://yofukashi-no-uta.com/news/20250704_183/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/creepynuts/info/575650",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376216/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(finaleEnding).toMatchObject({
      titleJa: "よふかしのうた",
      titleRomaji: "Yofukashi no Uta",
      artistDisplayName: "Creepy Nuts",
      releaseDate: "2018-12-12",
      lastVerifiedAt: "2026-08-10"
    });
    expect(finaleEnding?.credits).toEqual([
      { name: "Creepy Nuts", role: "vocals" },
      { name: "R-指定", role: "lyrics" },
      { name: "DJ松永", role: "composition" }
    ]);
    expect(finaleEnding?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "pFvJaDwnwXk",
        type: "creditless_ed",
        channelName: "【フジテレビ】アニメ公式チャンネル",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "H64uBYufE_I",
        type: "other",
        channelName: "Creepy Nuts - Topic",
        officialStatus: "official"
      })
    ]);
    expect(finaleEnding?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=pFvJaDwnwXk",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/creepynuts/discography/buy/AIXX01411B01A",
        linkType: "official_landing_page"
      })
    ]));
    expect(finaleEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://yofukashi-no-uta.com/1st/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/creepynuts/discography/buy/AIXX01411B01A",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/260226/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches the Chibi Godzilla season 3 opening theme", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "chibi-godzilla-no-gyakushuu-3");
    const opening = anime?.themes.find((theme) => theme.id === "chibi-godzilla-no-gyakushuu-3-op-1");

    expect(anime).toMatchObject({
      id: "curated-193883",
      titleJa: "ちびゴジラの逆襲(第3期)",
      titleZhHant: "小小哥吉拉的逆襲 （第3期）",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      titleJa: "怪獣島",
      artistDisplayName: "水曜日のカンパネラ",
      releaseDate: "2025-07-02",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "水曜日のカンパネラ", role: "vocals" },
      { name: "ケンモチヒデフミ", role: "lyrics" },
      { name: "ケンモチヒデフミ", role: "composition" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "ZAP6ravVi8k",
        type: "creditless_op",
        channelName: "ちびゴジラ公式チャンネル Chibi Godzilla channel",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "3ymaUz2ECfQ",
        type: "full_music_video",
        channelName: "水曜日のカンパネラ",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=ZAP6ravVi8k",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://wed-camp.lnk.to/monsterisland",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://chibigodzilla.jp/", role: "first_party" }),
      expect.objectContaining({
        url: "https://wmg.jp/wedcamp/discography/31405/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://wmg.jp/wedcamp/news/90120/", role: "first_party" }),
      expect.objectContaining({ url: "https://wmg.jp/wedcamp/news/90142/", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375984/", role: "cross_check" })
    ]));
  });

  it("enriches both Jigoku Sensei Nube 2025 themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "jigoku-sensei-nube-2025");
    const opening = anime?.themes.find((theme) => theme.id === "jigoku-sensei-nube-2025-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "jigoku-sensei-nube-2025-ed-1");

    expect(anime).toMatchObject({
      id: "curated-179678",
      titleJa: "地獄先生ぬ～べ～ (2025)",
      titleZhHant: "靈異教師神眉 （上半）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "P0WER-悪霊退散-",
      artistDisplayName: "-真天地開闢集団-ジグザグ",
      releaseDate: "2025-07-09",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "-真天地開闢集団-ジグザグ", role: "vocals" },
      { name: "命-mikoto-", role: "lyrics" },
      { name: "命-mikoto-", role: "composition" },
      { name: "命-mikoto-", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "-_lYCBqyNYo",
        type: "creditless_op",
        channelName: "It's Anime powered by REMOW",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "bezvNBpQk0E",
        type: "full_music_video",
        channelName: "真天地開闢集団ジグザグ",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=-_lYCBqyNYo",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://zigzag.lnk.to/P0WER-AkuryoTaisan-",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://nube-anime.com/news/1492/", role: "first_party" }),
      expect.objectContaining({ url: "https://zigzag.asia/works/haishin-014.html", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376209/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286773",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5360",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "ひまわり",
      artistDisplayName: "Chilli Beans.",
      releaseDate: "2025-07-16",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "Chilli Beans.", role: "vocals" },
      { name: "Chilli Beans.", role: "lyrics" },
      { name: "Chilli Beans.", role: "composition" },
      { name: "Chilli Beans.", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "2or2lWw6RXA",
        type: "creditless_ed",
        channelName: "It's Anime powered by REMOW",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "yhnJAI2qPRY",
        type: "full_music_video",
        channelName: "Chilli Beans.",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=2or2lWw6RXA",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://asab.lnk.to/CB_himawari",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://nube-anime.com/news/1602/", role: "first_party" }),
      expect.objectContaining({ url: "https://chilli-beans.com/discography/detail/5532/", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376337/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286773",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5360",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Tsuyokute New Saga themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "tsuyokute-new-saga");
    const opening = anime?.themes.find((theme) => theme.id === "tsuyokute-new-saga-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "tsuyokute-new-saga-ed-1");

    expect(anime).toMatchObject({
      id: "curated-155838",
      titleJa: "強くてニューサーガ",
      titleZhHant: "強者的新傳說",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "演者",
      artistDisplayName: "4s4ki",
      releaseDate: "2025-07-09",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "4s4ki", role: "vocals" },
      { name: "4s4ki", role: "lyrics" },
      { name: "4s4ki", role: "composition" },
      { name: "NUU$HI", role: "composition" },
      { name: "4s4ki", role: "arrangement" },
      { name: "NUU$HI", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "_SpiB2tqgcg",
        type: "creditless_op",
        channelName: "アルファポリス公式",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "oZUzDN5QIok",
        type: "full_music_video",
        channelName: "4s4ki",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=_SpiB2tqgcg",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://www.jvcmusic.co.jp/-/Linkall/VE3WT-11789.html",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://tsuyosaga-pr.com/movie/", role: "first_party" }),
      expect.objectContaining({ url: "https://4s4ki.xyz/discography/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.jvcmusic.co.jp/-/Linkall/VE3WT-11789.html",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376007/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://news.gamebase.com.tw/news/detail/99433765",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "her",
      artistDisplayName: "甲田まひる",
      releaseDate: "2025-07-25",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "甲田まひる", role: "vocals" },
      { name: "甲田まひる", role: "lyrics" },
      { name: "甲田まひる", role: "composition" },
      { name: "野村陽一郎", role: "composition" },
      { name: "野村陽一郎", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "465x4w84mUc",
        type: "creditless_ed",
        channelName: "アルファポリス公式",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "M7Rb8X38YxY",
        type: "full_music_video",
        channelName: "甲田まひる（Mahiru Coda）",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=465x4w84mUc",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://mahirucoda.lnk.to/her",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://tsuyosaga-pr.com/movie/", role: "first_party" }),
      expect.objectContaining({
        url: "https://wmg.jp/mahirucoda/discography/31681/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sma.co.jp/s/sma/news/detail/110938?ima=0000&link=ROBO004",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/377110/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://news.gamebase.com.tw/news/detail/99433765",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Clevatess themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "clevatess-majuu-no-ou-to-akago-to-kabane-no-yuusha"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "clevatess-majuu-no-ou-to-akago-to-kabane-no-yuusha-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "clevatess-majuu-no-ou-to-akago-to-kabane-no-yuusha-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-178869",
      titleJa: "クレバテス-魔獣の王と赤子と屍の勇者-",
      titleZhHant: "Clevatess -魔獸之王與嬰兒與屍之勇者-",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Ruler",
      artistDisplayName: "前島麻由",
      releaseDate: "2025-07-03",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "前島麻由", role: "vocals" },
      { name: "川田まみ", role: "lyrics" },
      { name: "中沢伴行", role: "composition" },
      { name: "fumi", role: "composition" },
      { name: "中沢伴行", role: "arrangement" },
      { name: "fumi", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "Y9X49sAp-M8",
        type: "creditless_op",
        channelName: "KADOKAWAanime",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "0uwIeG0ozOk",
        type: "full_music_video",
        channelName: "前島麻由 YouTube Official Channel",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=Y9X49sAp-M8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://nex-tone.link/A00196082",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://clevatess.com/1st/music/", role: "first_party" }),
      expect.objectContaining({ url: "https://mayumaeshima.com/discography/", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375807/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5325",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Destiny",
      artistDisplayName: "Ellie Goulding",
      releaseDate: "2025-11-12",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "Ellie Goulding", role: "vocals" },
      { name: "Ellie Goulding", role: "songwriting" },
      { name: "Jack Rochon", role: "songwriting" },
      { name: "Kurtis Wells", role: "songwriting" },
      { name: "Livvi Franc", role: "songwriting" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "d4rp4rBPQks",
        type: "creditless_ed",
        channelName: "KADOKAWAanime",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "OdCVg3iGEFg",
        type: "full_music_video",
        channelName: "EllieGouldingVEVO",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=d4rp4rBPQks",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://elliegoulding.lnk.to/destiny",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://clevatess.com/1st/music/ed.php",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/elliegoulding/products/00602488232579/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.shazam.com/song/1850005429/destiny", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5325",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Onmyo Kaiten Re:Birth Verse themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "onmyo-kaiten-re-verse");
    const opening = anime?.themes.find((theme) => theme.id === "onmyo-kaiten-re-verse-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "onmyo-kaiten-re-verse-ed-1");

    expect(anime).toMatchObject({
      id: "curated-187387",
      titleJa: "陰陽廻天 Re:バース",
      titleZhHant: "陰陽迴天 Re:Birth Verse",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "CRY OUT CRY OVER",
      artistDisplayName: "Who-ya Extended",
      releaseDate: "2025-07-03",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "Who-ya Extended", role: "vocals" },
      { name: "Who-ya Extended", role: "lyrics" },
      { name: "Who-ya Extended", role: "composition" },
      { name: "Who-ya Extended", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "-Bdqz9qWD2Q",
        type: "creditless_op",
        channelName: "【フジテレビ】アニメ公式チャンネル",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "vchCprjoiHY",
        type: "full_music_video",
        channelName: "Who-ya Extended official YouTube channel",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=-Bdqz9qWD2Q",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://who-yaextended.lnk.to/CRYOUTCRYOVER",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://ssl.sme.co.jp/artist/wyxt/info/575903",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375988/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5743",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "TURN OVER",
      artistDisplayName: "9Lana",
      releaseDate: "2025-07-02",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "9Lana", role: "vocals" },
      { name: "Tana.H", role: "lyrics" },
      { name: "Tana.H", role: "composition" },
      { name: "KOHEI KIRIAKE", role: "composition" },
      { name: "Marchin", role: "composition" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "nx8_hvbyB0A",
        type: "creditless_ed",
        channelName: "【フジテレビ】アニメ公式チャンネル",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "oYr-W71m2Is",
        type: "full_music_video",
        channelName: "9Lana",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=nx8_hvbyB0A",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://9lana.lnk.to/TURN_OVERWN",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/9Lana/info/575160",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/9Lana/info/575921",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375895/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5743",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Vending Machine season 2 themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-2nd-season"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-2nd-season-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "jidou-hanbaiki-ni-umarekawatta-ore-wa-meikyuu-wo-samayou-2nd-season-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-169440",
      titleJa: "自動販売機に生まれ変わった俺は迷宮を彷徨う 2nd Season",
      titleZhHant: "轉生成自動販賣機的我今天也在迷宮徘徊 （第2期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "未来サイダー",
      artistDisplayName: "BRADIO",
      releaseDate: "2025-07-02",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "BRADIO", role: "vocals" },
      { name: "真行寺貴秋", role: "lyrics" },
      { name: "BRADIO", role: "composition" },
      { name: "BRADIO", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "2wSAIf9xb3w",
        type: "tv_size",
        channelName: "アニメ「自動販売機に生まれ変わった俺は迷宮を彷徨う」公式",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "nYrbevdC-NQ",
        type: "full_music_video",
        channelName: "BRADIO",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=2wSAIf9xb3w",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/funkfire",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://jihanki-anime.com/2nd/", role: "first_party" }),
      expect.objectContaining({ url: "https://bradio.jp/news/detail/1928", role: "first_party" }),
      expect.objectContaining({ url: "https://bradio.jp/news/detail/1948", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375608/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4614",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "僕だけの地平線",
      artistDisplayName: "相羽あいな",
      releaseDate: "2025-09-03",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "相羽あいな", role: "vocals" },
      { name: "カシラテ", role: "lyrics" },
      { name: "先田貴裕", role: "composition" },
      { name: "先田貴裕", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "lS4-iBLiQL8",
        type: "creditless_ed",
        channelName: "アニメ「自動販売機に生まれ変わった俺は迷宮を彷徨う」公式",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "yyB6FxfCtW8",
        type: "official_audio",
        channelName: "Aina Aiba - Topic",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=lS4-iBLiQL8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/album/my-own-horizon-single/1834061522",
        linkType: "direct_album"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://jihanki-anime.com/2nd/", role: "first_party" }),
      expect.objectContaining({
        url: "https://up-info.news/jihanki-anime/article/20250827_ed2_aibaaina.html",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/381058/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4614",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Necronomico themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "necronomico-no-cosmic-horror-show"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "necronomico-no-cosmic-horror-show-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "necronomico-no-cosmic-horror-show-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-185505",
      titleJa: "ネクロノミ子のコズミックホラーショウ",
      titleZhHant: "涅庫羅諾美子的宇宙恐怖秀",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "確証論",
      artistDisplayName: "緑仙",
      releaseDate: "2025-07-02",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "緑仙", role: "vocals" },
      { name: "緑仙", role: "lyrics" },
      { name: "RUCCA", role: "lyrics" },
      { name: "eba", role: "composition" },
      { name: "eba", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "xmNorNQsp4A",
        type: "creditless_op",
        channelName: "Cygamesアニメすきすき",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "ObGB9fZHtu0",
        type: "full_music_video",
        channelName: "緑仙 / Ryushen",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=xmNorNQsp4A",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://ryushen.lnk.to/kakushoronWE",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://anime-necronomico.help/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/ryushen/news/2025-07-02-3/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375512/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5625",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "PANDORA feat.のあ(from カラフルピーチ)",
      artistDisplayName: "Vell",
      releaseDate: "2025-07-09",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "のあ(from カラフルピーチ)", role: "vocals" },
      { name: "Vell", role: "lyrics" },
      { name: "Vell", role: "composition" },
      { name: "Vell", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "6VgI1QcAE0Q",
        type: "creditless_ed",
        channelName: "Cygamesアニメすきすき",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "dy9S_OIp-wQ",
        type: "full_music_video",
        channelName: "Vell",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=6VgI1QcAE0Q",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://nex-tone.link/A00195170",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://anime-necronomico.help/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=dy9S_OIp-wQ",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376457/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5625",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Water Magician themes and keeps their videos distinct", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "mizu-zokusei-no-mahou-tsukai");
    const opening = anime?.themes.find((theme) => theme.id === "mizu-zokusei-no-mahou-tsukai-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "mizu-zokusei-no-mahou-tsukai-ed-1");

    expect(anime).toMatchObject({
      id: "curated-186052",
      titleJa: "水属性の魔法使い",
      titleZhHant: "水屬性的魔法師",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "ブルーモーション",
      artistDisplayName: "名誉伝説",
      releaseDate: "2025-07-23",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "名誉伝説", role: "vocals" },
      { name: "けっさく", role: "lyrics" },
      { name: "けっさく", role: "composition" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "wxdHpj7r6Rc",
        type: "creditless_op",
        channelName: "TBSアニメ",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "kJ5p2LTw3Cc",
        type: "official_audio",
        channelName: "名誉伝説",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=wxdHpj7r6Rc",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/song/1825825583",
        linkType: "direct_track"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://mizuzokusei-anime.com/news/post-55", role: "first_party" }),
      expect.objectContaining({ url: "https://meiyodensetsu.com/discography/66/", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/377031/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5663",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "たゆたうままに",
      artistDisplayName: "みさき",
      releaseDate: "2025-07-04",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "みさき", role: "vocals" },
      { name: "みさき", role: "lyrics" },
      { name: "みさき", role: "composition" },
      { name: "本間昭光", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "C8kHWlQDTx0",
        type: "creditless_ed",
        channelName: "TBSアニメ",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "sOskREY8Ihw",
        type: "other",
        channelName: "みさき",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=C8kHWlQDTx0",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/misaki/products/uk1as-03272/",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.links.some(
      (link) => link.url === "https://www.youtube.com/watch?v=wxdHpj7r6Rc"
    )).toBe(false);
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://mizuzokusei-anime.com/news/post-55", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/misaki/products/uk1as-03272/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375850/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5663",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches all Bad Girl themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "bad-girl");
    const opening = anime?.themes.find((theme) => theme.id === "bad-girl-op-1");
    const firstEnding = anime?.themes.find((theme) => theme.id === "bad-girl-ed-1");
    const secondEnding = anime?.themes.find((theme) => theme.id === "bad-girl-ed-2");

    expect(anime).toMatchObject({
      id: "curated-178675",
      titleJa: "ばっどがーる",
      titleZhHant: "Bad Girl 不良少女",
      opCount: 1,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "すーぱーびっぐらぶ！",
      artistDisplayName: "天狼群",
      releaseDate: "2025-07-05",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "優谷優（CV.橘杏咲）", role: "vocals" },
      { name: "水鳥亜鳥（CV.花宮初奈）", role: "vocals" },
      { name: "涼風涼（CV.松岡美里）", role: "vocals" },
      { name: "瑠璃葉るら（CV.花井美春）", role: "vocals" },
      { name: "烏屋茶房", role: "lyrics" },
      { name: "ヒゲドライバー", role: "composition" },
      { name: "ヒゲドライバー", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "HbocaCxe5gU",
        type: "creditless_op",
        channelName: "KING AMUSEMENT CREATIVE official channel",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "n9cTW8IKD0w",
        type: "official_audio",
        channelName: "TENROGUN - Topic",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=HbocaCxe5gU",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tenrogun.lnk.to/KING_OF_EVIL",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://badgirl-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://news.kingrecords.co.jp/2025/06/39728/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/380619/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5311",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(firstEnding).toMatchObject({
      titleJa: "BAD SURPRISE",
      artistDisplayName: "天狼群",
      releaseDate: "2025-07-05",
      lastVerifiedAt: "2026-08-10"
    });
    expect(firstEnding?.credits).toEqual([
      { name: "優谷優（CV.橘杏咲）", role: "vocals" },
      { name: "水鳥亜鳥（CV.花宮初奈）", role: "vocals" },
      { name: "涼風涼（CV.松岡美里）", role: "vocals" },
      { name: "瑠璃葉るら（CV.花井美春）", role: "vocals" },
      { name: "ZAQ", role: "lyrics" },
      { name: "ZAQ", role: "composition" },
      { name: "ZAQ", role: "arrangement" }
    ]);
    expect(firstEnding?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "lGSdTT5XW_s",
        type: "creditless_ed",
        channelName: "KING AMUSEMENT CREATIVE official channel",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "T_q7ulTOxFw",
        type: "official_audio",
        channelName: "TENROGUN - Topic",
        officialStatus: "official"
      })
    ]);
    expect(firstEnding?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=lGSdTT5XW_s",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tenrogun.lnk.to/KING_OF_EVIL",
        linkType: "official_landing_page"
      })
    ]));
    expect(firstEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://badgirl-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://badgirl-anime.com/news/20250701_160/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/380614/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5311",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(secondEnding).toMatchObject({
      titleJa: "はーと掻き回してアゲル♡",
      artistDisplayName: "瑠璃葉るら(CV.花井美春)",
      releaseDate: "2025-08-17",
      lastVerifiedAt: "2026-08-10"
    });
    expect(secondEnding?.credits).toEqual([
      { name: "瑠璃葉るら(CV.花井美春)", role: "vocals" },
      { name: "MUTEKI DEAD SNAKE", role: "lyrics" },
      { name: "MUTEKI DEAD SNAKE", role: "composition" },
      { name: "MUTEKI DEAD SNAKE", role: "arrangement" }
    ]);
    expect(secondEnding?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "IgqIpKWD0wU",
        type: "other",
        channelName: "KING AMUSEMENT CREATIVE official channel",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "sAXoDCvRyhA",
        type: "official_audio",
        channelName: "Rura Ruriha(CV.Miharu Hanai) - Topic",
        officialStatus: "official"
      })
    ]);
    expect(secondEnding?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=IgqIpKWD0wU",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tenrogun.lnk.to/KING_OF_EVIL",
        linkType: "official_landing_page"
      })
    ]));
    expect(secondEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://badgirl-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.kingrecords.co.jp/cs/g/gKICA-2640/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/380615/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5311",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Apocalypse Bringer Mynoghra themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "isekai-mokushiroku-mynoghra-hametsu-no-bunmei-de-hajimeru-sekai-seifuku"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "isekai-mokushiroku-mynoghra-hametsu-no-bunmei-de-hajimeru-sekai-seifuku-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "isekai-mokushiroku-mynoghra-hametsu-no-bunmei-de-hajimeru-sekai-seifuku-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-178433",
      titleJa: "異世界黙示録マイノグーラ ～破滅の文明で始める世界征服～",
      titleZhHant: "異世界默示錄麥諾格拉～從毀滅文明開始征服世界～",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Majestic Catastrophe",
      artistDisplayName: "佐々木李子",
      releaseDate: "2025-07-07",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "佐々木李子", role: "vocals" },
      { name: "真崎エリカ", role: "lyrics" },
      { name: "アッシュ井上(Dream Monster)", role: "composition" },
      { name: "アッシュ井上(Dream Monster)", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "HsgEZJbp58c",
        type: "creditless_op",
        channelName: "ハピネット【アニメ公式】",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "IlriEKE8iBU",
        type: "full_music_video",
        channelName: "佐々木李子",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=HsgEZJbp58c",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/LZC-3126",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://mynoghra-anime.com/music/", role: "first_party" }),
      expect.objectContaining({ url: "https://sasakirico.com/discography.html", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376221/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5300",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "more than W",
      artistDisplayName: "寺島拓篤",
      releaseDate: "2025-07-07",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "寺島拓篤", role: "vocals" },
      { name: "寺島拓篤", role: "lyrics" },
      { name: "TAKE(FLOW)", role: "composition" },
      { name: "TAKE(FLOW)", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "JfgPB5nziX8",
        type: "creditless_ed",
        channelName: "ハピネット【アニメ公式】",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "6ImTrobSMFk",
        type: "other",
        channelName: "Takuma Terashima Official Channel",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=JfgPB5nziX8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/album/more-than-w-single/1818305545",
        linkType: "direct_album"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://mynoghra-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://takuma-terashima.lantis.jp/news/2256/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://takuma-terashima.lantis.jp/news/2263/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376225/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5300",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Toilet-Bound Hanako-kun 2 Part 2 themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "jibaku-shounen-hanako-kun-2-part-2"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "jibaku-shounen-hanako-kun-2-part-2-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "jibaku-shounen-hanako-kun-2-part-2-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-189326",
      titleJa: "地縛少年花子くん２ 後編",
      titleZhHant: "地縛少年花子君2 後篇",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "かごめかごめ",
      titleRomaji: "Kagome Kagome",
      artistDisplayName: "オーイシマサヨシ",
      releaseDate: "2025-07-06",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "オーイシマサヨシ", role: "vocals" },
      { name: "大石昌良", role: "lyrics" },
      { name: "大石昌良", role: "composition" },
      { name: "大石昌良", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "5cevONCM6p4",
        type: "creditless_op",
        channelName: "TBSアニメ",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "ALMhSqje8UU",
        type: "full_music_video",
        channelName: "Masayoshi Oishi",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=5cevONCM6p4",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://014014.lnk.to/kagomekagome",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://hanakokun.com/2nd/music/music20250618_01/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://hanakokun.com/2nd/movie/", role: "first_party" }),
      expect.objectContaining({
        url: "https://news.ponycanyon.co.jp/2025/07/112752",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375880/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5803",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "mo∞ent",
      artistDisplayName: "鬼頭明里",
      releaseDate: "2025-07-06",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "鬼頭明里", role: "vocals" },
      { name: "Saku", role: "lyrics" },
      { name: "Saku", role: "composition" },
      { name: "Saku", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "zIPdM4fGk70",
        type: "creditless_ed",
        channelName: "TBSアニメ",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "I37_89gai64",
        type: "official_audio",
        channelName: "鬼頭明里 Official Artist Channel",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=zIPdM4fGk70",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://kitoakari.lnk.to/moment",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://hanakokun.com/2nd/music/music20250618_02/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://hanakokun.com/2nd/movie/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.ponycanyon.co.jp/music/PCSP000006624",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375881/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5803",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Private Tutor to the Duke's Daughter themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "koujo-denka-no-kateikyoushi"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "koujo-denka-no-kateikyoushi-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "koujo-denka-no-kateikyoushi-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-170113",
      titleJa: "公女殿下の家庭教師",
      titleZhHant: "公爵千金的家庭教師",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Wish for you",
      artistDisplayName: "前島亜美",
      releaseDate: "2025-07-06",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "前島亜美", role: "vocals" },
      { name: "Imaban", role: "lyrics" },
      { name: "Imaban", role: "composition" },
      { name: "石倉誉之", role: "arrangement" },
      { name: "Imaban", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "rbruZu_xiDA",
        type: "creditless_op",
        channelName: "GREE Entertainment ANIME & GAME【公式】",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "sJ3zUFbHBZc",
        type: "full_music_video",
        channelName: "前島亜美",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=rbruZu_xiDA",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://ami-maeshima.lnk.to/1stSG-Wishforyou",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://koujodenka-anime.com/products/detail/i2on4skfkrn9/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://maeshima-ami.net/contents/956548",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376296/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4818",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "少女のすゝめ",
      titleRomaji: "Shoujo no Susume",
      artistDisplayName: "岡咲美保",
      releaseDate: "2025-06-27",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "岡咲美保", role: "vocals" },
      { name: "秋田涼一", role: "lyrics" },
      { name: "澤田 空海理", role: "composition" },
      { name: "澤田 空海理", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "QMTfG-7RBcI",
        type: "creditless_ed",
        channelName: "GREE Entertainment ANIME & GAME【公式】",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "3QFdvtAO8I8",
        type: "full_music_video",
        channelName: "Miho Okasaki",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=QMTfG-7RBcI",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://okasakimiho.lnk.to/SHAKING",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://koujodenka-anime.com/products/detail/ho9ktey11y/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://news.kingrecords.co.jp/2025/06/40407/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375886/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4818",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches every Mattaku Saikin no Tantei to Kitara theme, including the episode 11 ending", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "mattaku-saikin-no-tantei-to-kitara"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "mattaku-saikin-no-tantei-to-kitara-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "mattaku-saikin-no-tantei-to-kitara-ed-1"
    );
    const episodeEnding = anime?.themes.find(
      (theme) => theme.id === "mattaku-saikin-no-tantei-to-kitara-ed-2"
    );

    expect(creditRoleLabel("translation")).toBe("譯詞");
    expect(anime).toMatchObject({
      id: "curated-180460",
      titleJa: "まったく最近の探偵ときたら",
      titleZhHant: "最近的偵探真沒用",
      opCount: 1,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Suffer",
      artistDisplayName: "岡崎体育",
      releaseDate: "2025-07-02",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "岡崎体育", role: "vocals" },
      { name: "岡崎体育", role: "lyrics" },
      { name: "岡崎体育", role: "composition" },
      { name: "岡崎体育", role: "arrangement" },
      { name: "dustbox", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "QEHlMHce05M",
        type: "creditless_op",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "n8Kqnurces4",
        type: "full_music_video",
        channelName: "okazakitaiiku Official Channel",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=QEHlMHce05M",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://okazakitaiiku.lnk.to/Suffer",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://mattan-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/okazakitaiiku/info/574487",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375667/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5426",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "GORI☆GORI Feez e-Girl!!",
      artistDisplayName: "真白（CV.花澤香菜）VS愉快なおじさんたち（CV.杉田智和）",
      releaseDate: "2025-07-02",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "真白（CV.花澤香菜）", role: "vocals" },
      { name: "愉快なおじさんたち（CV.杉田智和）", role: "vocals" },
      { name: "花園姫子", role: "lyrics" },
      { name: "花園姫子", role: "composition" },
      { name: "花園姫子", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "63MdWK5-Ogk",
        type: "creditless_ed",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "3GK-Wea79pQ",
        type: "official_audio",
        channelName: "真白（CV：花澤香菜）VS 愉快なおじさんたち（CV：杉田智和） - Topic",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=63MdWK5-Ogk",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://nex-tone.link/aykGS4DGu",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://mattan-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1821384771",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/375804/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5426",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(episodeEnding).toMatchObject({
      titleJa: "帰れソレントへ",
      titleRomaji: "Kaere Sorrento e",
      artistDisplayName: "真白（CV.花澤香菜）",
      releaseDate: "2025-09-24",
      lastVerifiedAt: "2026-08-10"
    });
    expect(episodeEnding?.credits).toEqual([
      { name: "真白（CV.花澤香菜）", role: "vocals" },
      { name: "Giambattista De Curtis", role: "lyrics" },
      { name: "徳永政太郎", role: "translation" },
      { name: "Ernesto De Curtis", role: "composition" },
      { name: "菊谷知樹", role: "arrangement" }
    ]);
    expect(episodeEnding?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "h5N8L66avCM",
        type: "creditless_ed",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(episodeEnding?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=h5N8L66avCM",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/sD0agp",
        linkType: "official_landing_page"
      })
    ]));
    expect(episodeEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=h5N8L66avCM",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://mattan-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.anisil.com/animes/6354-%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%8F%E6%9C%80%E8%BF%91%E3%81%AE%E6%8E%A2%E5%81%B5%E3%81%A8%E3%81%8D%E3%81%9F%E3%82%89",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5426",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Milky Subway openings without misclassifying its insert song", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "ginga-tokkyuu-milky-subway"
    );
    const mainTheme = anime?.themes.find(
      (theme) => theme.id === "ginga-tokkyuu-milky-subway-op-1"
    );
    const episodeOneOpening = anime?.themes.find(
      (theme) => theme.id === "ginga-tokkyuu-milky-subway-op-2"
    );

    expect(anime).toMatchObject({
      id: "curated-189069",
      titleJa: "銀河特急 ミルキー☆サブウェイ",
      titleZhHant: "銀河特急 Milky☆Subway",
      opCount: 2,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(mainTheme).toMatchObject({
      titleJa: "銀河系まで飛んで行け！",
      titleRomaji: "Gingakei made Tonde Ike!",
      artistDisplayName: "キャンディーズ",
      releaseDate: "1977-12-05",
      lastVerifiedAt: "2026-08-10"
    });
    expect(mainTheme?.credits).toEqual([
      { name: "キャンディーズ", role: "vocals" },
      { name: "喜多條忠", role: "lyrics" },
      { name: "吉田拓郎", role: "composition" },
      { name: "馬飼野康二", role: "arrangement" }
    ]);
    expect(mainTheme?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "QbfPKfEuqCY",
        type: "other",
        channelName: "MILKY☆SUBWAY THE GALACTIC LIMITED EXPRESS",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(mainTheme?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=QbfPKfEuqCY",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lgp.lnk.to/Gingakeimade",
        linkType: "official_landing_page"
      })
    ]));
    expect(mainTheme?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://milkygalacticuniverse.com/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://shin-ei-animation.jp/works/milkysubway/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/219943/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://www.kiokunokiroku.jp/artist/000484/archive/008378",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5774",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(episodeOneOpening).toMatchObject({
      titleJa: "Altair and Vega",
      artistDisplayName: "MindaRyn",
      releaseDate: "2025-08-30",
      lastVerifiedAt: "2026-08-10"
    });
    expect(episodeOneOpening?.credits).toEqual([
      { name: "MindaRyn", role: "vocals" },
      { name: "亀山陽平", role: "lyrics" },
      { name: "土井浩平", role: "composition" },
      { name: "土井浩平", role: "arrangement" }
    ]);
    expect(episodeOneOpening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "6vK8A3npElM",
        type: "other",
        channelName: "MILKY☆SUBWAY THE GALACTIC LIMITED EXPRESS",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "9y7LyfrbDDE",
        type: "official_audio",
        channelName: "MindaRyn _",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(episodeOneOpening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=6vK8A3npElM",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/LZC-3263",
        linkType: "official_landing_page"
      })
    ]));
    expect(episodeOneOpening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://back-cms.milkygalacticuniverse.com/158/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://mindaryn.com/discography/altair-and-vega/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://pylonport.bandainamcomusiclive.co.jp/news/311",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/379448/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5774",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(anime?.themes.some((theme) => theme.titleJa === "ときめき★メテオストライク")).toBe(false);
  });

  it("enriches both Welcome to the Outcast's Restaurant themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "tsuihousha-shokudou-e-youkoso"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "tsuihousha-shokudou-e-youkoso-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "tsuihousha-shokudou-e-youkoso-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-185544",
      titleJa: "追放者食堂へようこそ！",
      titleZhHant: "歡迎光臨流放者食堂！",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "ユニーク",
      titleRomaji: "Unique",
      artistDisplayName: "Dannie May",
      releaseDate: "2025-07-02",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "Dannie May", role: "vocals" },
      { name: "マサ", role: "lyrics" },
      { name: "マサ", role: "composition" },
      { name: "田中タリラ", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "fu8Z_vVYuNg",
        type: "creditless_op",
        channelName: "TVアニメ「追放者食堂へようこそ!」公式",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "q44nWv5L38M",
        type: "full_music_video",
        channelName: "Dannie May",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=fu8Z_vVYuNg",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://dannie.lnk.to/Unique",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://tsuihosha-shokudo.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://danniemay.com/disco/33th-single%EF%BC%BBdigital%EF%BC%BD%E3%83%A6%E3%83%8B%E3%83%BC%E3%82%AF/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376080/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5633",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "まごころ My Heart",
      titleRomaji: "Magokoro My Heart",
      artistDisplayName: "超ときめき♡宣伝部",
      releaseDate: "2025-07-04",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "超ときめき♡宣伝部", role: "vocals" },
      { name: "スノヒロ", role: "lyrics" },
      { name: "三好啓太", role: "composition" },
      { name: "三好啓太", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "idskIUheaa4",
        type: "creditless_ed",
        channelName: "TVアニメ「追放者食堂へようこそ!」公式",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "qSR0aW1YdcU",
        type: "other",
        channelName: "Cho Tokimeki♡Sendenbu Official（超ときめき♡宣伝部）",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=idskIUheaa4",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/album/%E3%81%BE%E3%81%94%E3%81%93%E3%82%8D-my-heart-single/1822948921",
        linkType: "direct_album"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://tsuihosha-shokudo.com/music/", role: "first_party" }),
      expect.objectContaining({ url: "https://toki-sen.com/contents/939957", role: "first_party" }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/album/%E3%81%BE%E3%81%94%E3%81%93%E3%82%8D-my-heart-single/1822948921",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376602/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5633",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Shy Hero and Assassin Princesses themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "kizetsu-yuusha-to-ansatsu-hime"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "kizetsu-yuusha-to-ansatsu-hime-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "kizetsu-yuusha-to-ansatsu-hime-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-186561",
      titleJa: "気絶勇者と暗殺姫",
      titleZhHant: "氣絕勇者與暗殺公主",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "天伝バラバラ",
      titleRomaji: "Tenden Barabara",
      artistDisplayName: "吉乃",
      releaseDate: "2025-07-11",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "吉乃", role: "vocals" },
      { name: "柊マグネタイト", role: "lyrics" },
      { name: "柊マグネタイト", role: "composition" },
      { name: "柊マグネタイト", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "KwokenvxcbM",
        type: "creditless_op",
        channelName: "ぽにきゃん-Anime PONY CANYON",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "q998CIH1QnM",
        type: "full_music_video",
        channelName: "吉乃",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=KwokenvxcbM",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/TendenBarabara",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://cloud9pro.co.jp/news/p/11567/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.ponycanyon.co.jp/music/PCSP000006631",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5704",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "スキマジカン",
      titleRomaji: "Sukima Jikan",
      artistDisplayName: "シエル（CV：佐伯伊織）・アネモネ（CV：上田 瞳）・ゴア（CV：白石晴香）",
      releaseDate: "2025-07-11",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "シエル（CV：佐伯伊織）", role: "vocals" },
      { name: "アネモネ（CV：上田 瞳）", role: "vocals" },
      { name: "ゴア（CV：白石晴香）", role: "vocals" },
      { name: "小鷲翔太", role: "lyrics" },
      { name: "小鷲翔太", role: "composition" },
      { name: "小鷲翔太", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "KnU-i-_fe58",
        type: "creditless_ed",
        channelName: "ぽにきゃん-Anime PONY CANYON",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "21tJh5oL8uc",
        type: "official_audio",
        channelName: "ぽにきゃん-Anime PONY CANYON",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "2VNqtpMHqGc",
        type: "other",
        channelName: "ぽにきゃん-Anime PONY CANYON",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=KnU-i-_fe58",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/PocketMoment",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.ponycanyon.co.jp/music/PCSP000006516",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5704",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://zh.wikipedia.org/wiki/%E6%B0%A3%E7%B5%95%E5%8B%87%E8%80%85%E8%88%87%E6%9A%97%E6%AE%BA%E5%85%AC%E4%B8%BB",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("corrects and enriches both Game Center Girl themes", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "gacen-shoujo-to-ibunka-kouryuu"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "gacen-shoujo-to-ibunka-kouryuu-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "gacen-shoujo-to-ibunka-kouryuu-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-180794",
      titleJa: "ゲーセン少女と異文化交流",
      titleZhHant: "遊樂場少女的異文化交流",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "ふたりのスタートボタン",
      titleRomaji: "Futari no Start Button",
      artistDisplayName: "リリー・ベイカー（CV：天城サリー）・草壁葵衣（CV：小山内怜央）",
      releaseDate: "2025-07-07",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "リリー・ベイカー（CV：天城サリー）", role: "vocals" },
      { name: "草壁葵衣（CV：小山内怜央）", role: "vocals" },
      { name: "TAG", role: "lyrics" },
      { name: "TAG", role: "composition" },
      { name: "TAG", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "BLX7qZwt--w",
        type: "creditless_op",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "YvgqX4aYeYM",
        type: "official_audio",
        channelName: "リリー・ベイカー（CV：天城サリー）、草壁葵衣（CV：小山内怜央） - Topic",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=BLX7qZwt--w",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://nex-tone.link/hVcyQjV8s",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://gacen-girl-anime.com/news/index00200000.html",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://gacen-girl-anime.com/music/", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376133/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5437",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Amusing Flavor",
      artistDisplayName: "リリー・ベイカー（CV：天城サリー）",
      releaseDate: "2025-07-07",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "リリー・ベイカー（CV：天城サリー）", role: "vocals" },
      { name: "t+pazolite", role: "lyrics" },
      { name: "t+pazolite", role: "composition" },
      { name: "t+pazolite", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "CldOd2aIo9s",
        type: "creditless_ed",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "-axB2oLf-rk",
        type: "official_audio",
        channelName: "リリー・ベイカー（CV：天城サリー） - Topic",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "NWlYoswlS5E",
        type: "other",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=CldOd2aIo9s",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://nex-tone.link/hVcyQjV8s",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://gacen-girl-anime.com/news/index00120000.html",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://gacen-girl-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5437",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%A8%82%E5%A0%B4%E5%B0%91%E5%A5%B3%E7%9A%84%E7%95%B0%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches the Jobraver opening without inventing a release date", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "tomica-heroes-jobraver-tokusou-gattai-robo-tv"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "tomica-heroes-jobraver-tokusou-gattai-robo-tv-op-1"
    );

    expect(anime).toMatchObject({
      id: "curated-196229",
      titleJa: "トミカヒーローズ ジョブレイバー 特装合体ロボ (TV)",
      titleZhHant: "特裝合體機器人 Jobraver",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      titleJa: "特装合体！ジョブレイバー",
      titleRomaji: "Tokusou Gattai! Jobraver",
      artistDisplayName: "悠佑（fromいれいす）",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.releaseDate).toBeUndefined();
    expect(opening?.credits).toEqual([
      { name: "悠佑（fromいれいす）", role: "vocals" },
      { name: "酒井陽一", role: "lyrics" },
      { name: "酒井陽一", role: "composition" },
      { name: "酒井陽一", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "pwMtFNWtKWw",
        type: "other",
        channelName: "タカラトミー",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "c-W2qQdKtV8",
        type: "other",
        channelName: "タカラトミー",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=pwMtFNWtKWw",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://www.takaratomy.co.jp/products/tomica/jobraver/anime/broadcast/",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.takaratomy.co.jp/products/tomica/jobraver/anime/broadcast/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.takaratomy.co.jp/product_release/pdf/p250516.pdf",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.oricon.co.jp/anime/187/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://24h.pchome.com.tw/books/prod/DJBF1Z-A900JVNCW",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Banished White Mage themes with their digital release dates", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "yuusha-party-wo-tsuihou-sareta-shiro-madoushi-s-rank-boukensha-ni-hirowareru-kono-shiro-madoushi-ga-kikakugaisugiru"
    );
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      id: "curated-179885",
      titleJa: "勇者パーティーを追放された白魔導師、Sランク冒険者に拾われる ～この白魔導師が規格外すぎる～",
      titleZhHant: "被驅逐出勇者隊伍的白魔導師，被S級冒險者撿到",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "純情であれ。",
      titleRomaji: "Junjou de Are.",
      artistDisplayName: "梶原岳人",
      releaseDate: "2025-07-04",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "梶原岳人", role: "vocals" },
      { name: "梶原岳人", role: "lyrics" },
      { name: "梶原岳人", role: "composition" },
      { name: "フワリ（Dream Monster）", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "K40kD2uUxsw",
        type: "creditless_op",
        channelName: "ハピネット【アニメ公式】",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "vfrLFCX9rhQ",
        type: "official_audio",
        channelName: "Gakuto Kajiwara",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=K40kD2uUxsw",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://avex.lnk.to/gakutokajiwara",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://tsuiho-shiromadoshi.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://avex.jp/kajiwaragakuto/discography/?c=single",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://avex.jp/kajiwaragakuto/news/detail.php?id=1126205",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5390",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "光射す扉",
      titleRomaji: "Hikari Sasu Tobira",
      artistDisplayName: "ChouCho",
      releaseDate: "2025-07-11",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "ChouCho", role: "vocals" },
      { name: "ChouCho", role: "lyrics" },
      { name: "ChouCho", role: "composition" },
      { name: "村山☆潤", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "-9U80m51qWE",
        type: "creditless_ed",
        channelName: "ハピネット【アニメ公式】",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "lucxQJk-KLI",
        type: "full_music_video",
        channelName: "ChouCho Official Channel",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "Gjo1JxNHrHU",
        type: "official_audio",
        channelName: "ChouCho Official Channel",
        officialStatus: "official",
        embeddable: true
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=-9U80m51qWE",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/LZC-3151",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://tsuiho-shiromadoshi.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/song/1820168761",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5390",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://home.gamer.com.tw/artwork.php?sn=6167561",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches the Karaoke Iko opening theme", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "karaoke-iko");
    const opening = anime?.themes.find((theme) => theme.id === "karaoke-iko-op-1");

    expect(anime).toMatchObject({
      id: "curated-183127",
      titleJa: "カラオケ行こ！",
      titleZhHant: "去唱卡拉OK吧！",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      titleJa: "HOWL",
      artistDisplayName: "Ayumu Imazu",
      releaseDate: "2025-07-25",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "Ayumu Imazu", role: "vocals" },
      { name: "Ayumu Imazu", role: "lyrics" },
      { name: "Ayumu Imazu", role: "composition" },
      { name: "D&H (PURPLE NIGHT)", role: "composition" },
      { name: "Ayumu Imazu", role: "arrangement" },
      { name: "D&H (PURPLE NIGHT)", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "Jh9atzsn2MM",
        type: "creditless_op",
        channelName: "KADOKAWA Anime Channel",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "-bt4cX7dCT8",
        title: "Ayumu Imazu - HOWL [Music Video]",
        type: "full_music_video",
        channelName: "Ayumu Imazu",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=-bt4cX7dCT8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://ayumu.lnk.to/HOWL",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://karaoke-muchusa.com/karaoke/music.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://wmg.jp/ayumu-imazu/discography/31724/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Dr.STONE Part 2 themes from the official music release", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "dr-stone-science-future-part-2");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      titleZhHant: "Dr.STONE 新石紀 SCIENCE FUTURE （第4期第2部分）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "KANA-BOON", role: "vocals" },
      { name: "谷口鮪", role: "lyrics" },
      { name: "谷口鮪", role: "composition" },
      { name: "KANA-BOON", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "HNYp4T0kMNU",
        type: "creditless_op",
        channelName: "TOHO animation",
        officialStatus: "official"
      }),
      expect.objectContaining({
        youtubeVideoId: "zc6OMsBN-As",
        type: "full_music_video",
        channelName: "KANA-BOON Official YouTube Channel",
        officialStatus: "official"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://kmu.lnk.to/SUPERNOVA",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://sp.kanaboon.jp/news/detail/2588", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376403/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5789",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "no man's world",
      artistDisplayName: "音羽-otoha-"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "音羽-otoha-", role: "vocals" },
      { name: "音羽-otoha-", role: "lyrics" },
      { name: "音羽-otoha-", role: "composition" },
      { name: "音羽-otoha-", role: "arrangement" },
      { name: "赤山コウ", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "slJjDE64mFY",
        type: "creditless_ed",
        channelName: "TOHO animation"
      }),
      expect.objectContaining({
        youtubeVideoId: "SZhcN4jVVzA",
        type: "full_music_video",
        channelName: "音羽-otoha-"
      }),
      expect.objectContaining({
        youtubeVideoId: "Yxp_4KspixU",
        type: "other",
        channelName: "TOHO animation"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://otohaofficial.com/musics/19736",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://otohaofficial.com/contents/961719", role: "first_party" }),
      expect.objectContaining({ url: "https://dr-stone.jp/news/5684/", role: "first_party" }),
      expect.objectContaining({ url: "https://www.youtube.com/watch?v=85lz1dqGKOA", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376444/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5789",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    for (const theme of [opening, ending]) {
      expect(theme?.lastVerifiedAt).toBe("2026-08-10");
      expect(theme?.sources).toContainEqual(expect.objectContaining({
        url: "https://dr-stone.jp/music/",
        role: "first_party"
      }));
    }
  });

  it("enriches both Broken Saintess themes with official videos and full credits", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "kizu-darake-seijo-yori-houfuku-wo-komete");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      titleJa: "傷だらけ聖女より報復をこめて",
      titleZhHant: "黑化吧！聖女大人",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "DiZZY",
      artistDisplayName: "鷲尾伶菜",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "鷲尾伶菜", role: "vocals" },
      { name: "鷲尾伶菜", role: "lyrics" },
      { name: "Kristi", role: "lyrics" },
      { name: "中山翔吾", role: "lyrics" },
      { name: "中山翔吾", role: "composition" },
      { name: "中山翔吾", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "hAPAvHr0Igw",
        type: "creditless_op",
        channelName: "AnimationID"
      }),
      expect.objectContaining({
        youtubeVideoId: "ORVnmnN613U",
        type: "full_music_video",
        channelName: "鷲尾伶菜 Official YouTube Channel"
      }),
      expect.objectContaining({
        youtubeVideoId: "GKsHN5NUs6c",
        type: "other",
        channelName: "鷲尾伶菜 Official YouTube Channel"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://music.apple.com/jp/song/1822186335",
      linkType: "direct_track"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://prtimes.jp/main/html/rd/p/000001509.000007785.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5479",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=145415",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "アビス",
      artistDisplayName: "のんぴー",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "のんぴー", role: "vocals" },
      { name: "Nonpy", role: "lyrics" },
      { name: "Nonpy", role: "composition" },
      { name: "Shuya Masayoshi", role: "composition" },
      { name: "Shuya Masayoshi", role: "arrangement" }
    ]));
    expect(ending?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "v4Ds22elMHo",
      type: "creditless_ed",
      channelName: "AnimationID"
    }));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://music.apple.com/jp/song/1821600576",
      linkType: "direct_track"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://prtimes.jp/main/html/rd/p/000001508.000007785.html",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/385921/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5479",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("keeps the Busu TV themes separate from the theme-less official mini anime", () => {
    const tvAnime = curatedAnimeDetails.find((item) => item.slug === "busu-ni-hanataba-wo");
    const miniAnime = curatedAnimeDetails.find((item) => item.slug === "obusu-ni-hanataba-wo");
    const opening = tvAnime?.themes.find((theme) => theme.type === "OP");
    const ending = tvAnime?.themes.find((theme) => theme.type === "ED");

    expect(tvAnime).toMatchObject({
      id: "curated-156395",
      titleJa: "ブスに花束を。",
      titleZhHant: "為丑女獻上花束",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "TWS", role: "vocals" },
      { name: "Ayumu Imazu", role: "lyrics" },
      { name: "Ayumu Imazu", role: "composition" },
      { name: "A.G.O", role: "composition" },
      { name: "Ayumu Imazu", role: "arrangement" },
      { name: "A.G.O", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "sUP7rjlcWkY",
        type: "creditless_op",
        channelName: "TVアニメ『ブスに花束を。』公式"
      }),
      expect.objectContaining({
        youtubeVideoId: "Bc-hWqZxZ6I",
        type: "other",
        channelName: "TWS - Topic"
      })
    ]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://tws.lnk.to/bloomWE",
      linkType: "official_landing_page"
    }));

    expect(ending?.credits).toEqual([
      { name: "GLASGOW", role: "vocals" },
      { name: "藤本栄太", role: "lyrics" },
      { name: "やさしさ", role: "lyrics" },
      { name: "アラタニ", role: "composition" },
      { name: "やさしさ", role: "composition" },
      { name: "GLASGOW", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "jEJvz7l-AsI",
        type: "creditless_ed",
        channelName: "TVアニメ『ブスに花束を。』公式"
      }),
      expect.objectContaining({
        youtubeVideoId: "NVr3Isl8zk0",
        type: "full_music_video",
        channelName: "GLASGOW"
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://vap.lnk.to/souvenir",
      linkType: "official_landing_page"
    }));

    for (const theme of [opening, ending]) {
      expect(theme?.lastVerifiedAt).toBe("2026-08-10");
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({ url: "https://busunihanatabawo.com/", role: "first_party" }),
        expect.objectContaining({
          url: "https://youranimes.tw/animes/3974",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }

    expect(miniAnime).toMatchObject({
      id: "curated-196063",
      titleJa: "おブスに花束を",
      titleZhHant: "為丑女獻上花束 迷你動畫",
      opCount: 0,
      edCount: 0,
      hasOfficialVideo: false,
      officialSiteUrl: "https://www.youtube.com/watch?v=lEzijOwAOOw",
      verifiedAt: "2026-08-10",
      themeAvailability: "not_used",
      themes: []
    });
    expect(miniAnime?.sources).toContainEqual(expect.objectContaining({
      label: "動畫官方 YouTube：迷你動畫第 1 話",
      url: "https://www.youtube.com/watch?v=lEzijOwAOOw",
      role: "first_party"
    }));
  });

  it("corrects and enriches both Tougen Anki cours", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "tougen-anki");
    const themes = anime?.themes ?? [];
    const opening1 = themes.find((theme) => theme.id === "tougen-anki-op-1");
    const opening2 = themes.find((theme) => theme.id === "tougen-anki-op-2");
    const ending1 = themes.find((theme) => theme.id === "tougen-anki-ed-1");
    const ending2 = themes.find((theme) => theme.id === "tougen-anki-ed-2");

    expect(anime).toMatchObject({
      id: "curated-177474",
      titleJa: "桃源暗鬼",
      titleZhHant: "桃源暗鬼",
      opCount: 2,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(themes.map((theme) => ({
      id: theme.id,
      titleJa: theme.titleJa,
      artistDisplayName: theme.artistDisplayName
    }))).toEqual([
      {
        id: "tougen-anki-op-1",
        titleJa: "OVERNIGHT",
        artistDisplayName: "THE ORAL CIGARETTES"
      },
      {
        id: "tougen-anki-op-2",
        titleJa: "阿弥陀籤",
        artistDisplayName: "超学生"
      },
      {
        id: "tougen-anki-ed-1",
        titleJa: "What is justice?",
        artistDisplayName: "BAND-MAID"
      },
      {
        id: "tougen-anki-ed-2",
        titleJa: "ACTION",
        artistDisplayName: "eill"
      }
    ]);

    expect(opening1?.credits).toEqual([
      { name: "THE ORAL CIGARETTES", role: "vocals" },
      { name: "山中拓也", role: "lyrics" },
      { name: "山中拓也", role: "composition" },
      { name: "THE ORAL CIGARETTES", role: "arrangement" },
      { name: "辻村有記", role: "arrangement" }
    ]);
    expect(opening1?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "bL7eFBy5Iz8", type: "creditless_op" }),
      expect.objectContaining({ youtubeVideoId: "xYT7E72vT1s", type: "full_music_video" }),
      expect.objectContaining({ youtubeVideoId: "POGLi9LRHd4", type: "other" })
    ]);
    expect(opening1?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=bL7eFBy5Iz8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://oral.lnk.to/OVERNIGHTPR",
        linkType: "official_landing_page"
      })
    ]));

    expect(opening2?.credits).toEqual([
      { name: "超学生", role: "vocals" },
      { name: "辻村有記", role: "lyrics" },
      { name: "辻村有記", role: "composition" },
      { name: "辻村有記", role: "arrangement" }
    ]);
    expect(opening2?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "yI3PSYmU8ig", type: "creditless_op" }),
      expect.objectContaining({ youtubeVideoId: "D8GybKU4Wso", type: "full_music_video" })
    ]);
    expect(opening2?.links).toContainEqual(expect.objectContaining({
      url: "https://lnk.to/chogakusei_amidakuji",
      linkType: "official_landing_page"
    }));

    expect(ending1?.credits).toEqual([
      { name: "BAND-MAID", role: "vocals" },
      { name: "小鳩ミク", role: "lyrics" },
      { name: "BAND-MAID", role: "composition" }
    ]);
    expect(ending1?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "UVaJ-BQAQLU", type: "creditless_ed" }),
      expect.objectContaining({ youtubeVideoId: "3kMIh0_Wkpk", type: "full_music_video" })
    ]);
    expect(ending1?.links).toContainEqual(expect.objectContaining({
      url: "https://band-maid.lnk.to/What_is_justice",
      linkType: "official_landing_page"
    }));

    expect(ending2?.credits).toEqual([
      { name: "eill", role: "vocals" },
      { name: "eill", role: "lyrics" },
      { name: "eill", role: "composition" },
      { name: "Ryo'LEFTY'Miyata", role: "composition" },
      { name: "eill", role: "arrangement" },
      { name: "Ryo'LEFTY'Miyata", role: "arrangement" },
      { name: "nabeLTD", role: "arrangement" },
      { name: "Katsushiro Sato", role: "arrangement" }
    ]);
    expect(ending2?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "WHUpja-jFVk", type: "creditless_ed" }),
      expect.objectContaining({ youtubeVideoId: "Vb81OSHCfw4", type: "full_music_video" })
    ]);
    expect(ending2?.links).toContainEqual(expect.objectContaining({
      url: "https://eill.lnk.to/ACTION",
      linkType: "official_landing_page"
    }));

    for (const theme of themes) {
      expect(theme.lastVerifiedAt).toBe("2026-08-10");
      expect(theme.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({
          url: "https://youranimes.tw/animes/5224",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
    expect(opening1?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.uta-net.com/song/376218/",
      role: "cross_check"
    }));
    expect(opening2?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.uta-net.com/song/380958/",
      role: "cross_check"
    }));
    expect(ending1?.sources).toContainEqual(expect.objectContaining({
      url: "https://ponycanyon.com.tw/post/2788/",
      language: "zh-Hant",
      role: "first_party"
    }));
    expect(ending2?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.uta-net.com/song/380937/",
      role: "cross_check"
    }));
  });

  it("enriches both Futari Solo Camp cours and their shared ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "futari-solo-camp");
    const themes = anime?.themes ?? [];
    const opening1 = themes.find((theme) => theme.id === "futari-solo-camp-op-1");
    const opening2 = themes.find((theme) => theme.id === "futari-solo-camp-op-2");
    const ending = themes.find((theme) => theme.id === "futari-solo-camp-ed-1");

    expect(anime).toMatchObject({
      id: "curated-185965",
      titleJa: "ふたりソロキャンプ",
      titleZhHant: "雙人單身露營",
      opCount: 2,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(themes.map((theme) => ({
      id: theme.id,
      titleJa: theme.titleJa,
      artistDisplayName: theme.artistDisplayName
    }))).toEqual([
      {
        id: "futari-solo-camp-op-1",
        titleJa: "灯りは遠く",
        artistDisplayName: "スカート"
      },
      {
        id: "futari-solo-camp-op-2",
        titleJa: "ふたりでいようか",
        artistDisplayName: "HOKUTO"
      },
      {
        id: "futari-solo-camp-ed-1",
        titleJa: "ふたりキャンプ feat. SPECIAL OTHERS",
        artistDisplayName: "オーイシマサヨシ"
      }
    ]);

    expect(opening1?.credits).toEqual([
      { name: "スカート", role: "vocals" },
      { name: "澤部渡", role: "lyrics" },
      { name: "澤部渡", role: "composition" },
      { name: "スカート", role: "arrangement" }
    ]);
    expect(opening1?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "8TkTZeCJc3M",
        type: "creditless_op",
        channelName: "ぽにきゃん-Anime PONY CANYON"
      })
    ]);
    expect(opening1?.links).toContainEqual(expect.objectContaining({
      url: "https://lnk.to/akarihatooku",
      linkType: "official_landing_page"
    }));

    expect(opening2?.credits).toEqual([
      { name: "HOKUTO", role: "vocals" },
      { name: "Furui Riho", role: "lyrics" },
      { name: "Furui Riho", role: "composition" },
      { name: "knoak", role: "arrangement" }
    ]);
    expect(opening2?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "YHHAaTqZ0hw",
        type: "full_music_video",
        channelName: "HOKUTO"
      })
    ]);
    expect(opening2?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=YHHAaTqZ0hw",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/FUTARIDEIYOUKA",
        linkType: "official_landing_page"
      })
    ]));

    expect(ending?.credits).toEqual([
      { name: "オーイシマサヨシ", role: "vocals" },
      { name: "大石昌良", role: "lyrics" },
      { name: "大石昌良", role: "composition" },
      { name: "大石昌良", role: "arrangement" },
      { name: "SPECIAL OTHERS", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "FiprFdhKpq4",
        type: "creditless_ed",
        channelName: "ぽにきゃん-Anime PONY CANYON"
      }),
      expect.objectContaining({
        youtubeVideoId: "mGsf9W28gCM",
        type: "other",
        channelName: "Masayoshi Oishi - Topic"
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://014014.lnk.to/futaricamp",
      linkType: "official_landing_page"
    }));

    for (const theme of themes) {
      expect(theme.lastVerifiedAt).toBe("2026-08-10");
      expect(theme.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({
          url: "https://youranimes.tw/animes/5658",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
    expect(opening1?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.uta-net.com/song/376140/",
      role: "cross_check"
    }));
    expect(opening2?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.ldh.co.jp/news/detail.php?lang=jpn&newsid=0000052169&site=TRIBE",
      role: "first_party"
    }));
    expect(ending?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.014014.jp/discography/6954",
      role: "first_party"
    }));
  });

  it("enriches the Weekly Light Novel Anime opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "shuukan-ranobe-anime");
    const opening = anime?.themes.find((theme) => theme.id === "shuukan-ranobe-anime-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "shuukan-ranobe-anime-ed-1");

    expect(anime).toMatchObject({
      id: "curated-198745",
      titleJa: "週刊ラノベアニメ",
      titleZhHant: "週刊輕小說動畫",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      titleJa: "Hajimariの合図",
      artistDisplayName: "吉武千颯",
      releaseDate: "2025-09-24",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "吉武千颯", role: "vocals" },
      { name: "北川悠仁", role: "lyrics" },
      { name: "北川悠仁", role: "composition" },
      { name: "佐々木“コジロー”貴之", role: "composition" },
      { name: "佐々木“コジロー”貴之", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "w6ctiNUEQOk",
        type: "creditless_op",
        channelName: "ラノベアニメ【公式】"
      }),
      expect.objectContaining({
        youtubeVideoId: "glaiG2Q9Ei8",
        type: "full_music_video",
        channelName: "ABC Animation Channel"
      })
    ]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://nex-tone.link/A00197639",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.abc-anime.co.jp/music/detail?id=1",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/381649/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://santora.tw/2025-summer-anime/",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "群青と未完の彼方",
      artistDisplayName: "七瀬彩夏 feat.佐々木“コジロー”貴之",
      releaseDate: "2025-09-24",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "七瀬彩夏", role: "vocals" },
      { name: "こだまさおり", role: "lyrics" },
      { name: "佐々木“コジロー”貴之", role: "composition" },
      { name: "佐々木“コジロー”貴之", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "H1f-zAyxE6w",
        type: "creditless_ed",
        channelName: "ラノベアニメ【公式】"
      }),
      expect.objectContaining({
        youtubeVideoId: "pYq8ddtJ9MU",
        type: "full_music_video",
        channelName: "ABC Animation Channel"
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://nex-tone.link/A00197640",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.abc-anime.co.jp/music/detail?id=2",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/381652/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://santora.tw/2025-summer-anime/",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("corrects the Yami Shibai season 15 ending and adds its release details", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "yami-shibai-15");
    const ending = anime?.themes.find((theme) => theme.id === "yami-shibai-15-ed-1");

    expect(anime).toMatchObject({
      id: "curated-194088",
      titleJa: "闇芝居 十五期",
      titleZhHant: "闇芝居 （第15期）",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(ending).toMatchObject({
      titleJa: "だぅと",
      titleRomaji: "Dauto",
      artistDisplayName: "ナオト・インティライミ",
      releaseDate: "2025-07-16",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "ナオト・インティライミ", role: "vocals" },
      { name: "ナオト・インティライミ", role: "lyrics" },
      { name: "ナオト・インティライミ", role: "composition" },
      { name: "ナオト・インティライミ", role: "arrangement" },
      { name: "大久保薫", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "dH_4eKIK4fE",
        title: "ナオト・インティライミ「だぅと」Lyric Video",
        type: "other",
        channelName: "Naoto Inti Raymi Official Channel",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=dH_4eKIK4fE",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://naoto.lnk.to/Doubt",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.tv-tokyo.co.jp/information/202506/5057.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.nananaoto.com/news/ENJ_naoto_news_6ce0462a9f6e48ac8dfdf7e48d4e9726",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/376618/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://zh.wikipedia.org/zh-hant/%E6%9A%97%E8%8A%9D%E5%B1%85",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches the Utagoe wa Mille-Feuille theme song", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "utagoe-wa-mille-feuille");
    const opening = anime?.themes.find((theme) => theme.id === "utagoe-wa-mille-feuille-op-1");

    expect(anime).toMatchObject({
      id: "curated-166215",
      titleJa: "うたごえはミルフィーユ",
      titleZhHant: "歌聲是法式千層酥",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      titleJa: "思い出話",
      titleRomaji: "Omoidebanashi",
      artistDisplayName: "手鞠沢高校アカペラ部",
      releaseDate: "2025-07-23",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "手鞠沢高校アカペラ部", role: "vocals" },
      { name: "Taiki Azegami (ARTribe)", role: "lyrics" },
      { name: "N1K0 (ARTribe)", role: "lyrics" },
      { name: "Taiki Azegami (ARTribe)", role: "composition" },
      { name: "細井涼介", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "OuV9MwBVVzg",
        title: "うたごえはミルフィーユ「思い出話」Music Video",
        type: "full_music_video",
        channelName: "うたごえはミルフィーユ",
        officialStatus: "official"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=OuV9MwBVVzg",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/song/1820353512",
        linkType: "direct_track"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://utamille.com/music/post-7/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://news.ponycanyon.co.jp/2025/05/111101",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/375907/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4331/videos",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches both Muchuu sa, Kimi ni theme songs", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "muchuu-sa-kimi-ni");
    const opening = anime?.themes.find((theme) => theme.id === "muchuu-sa-kimi-ni-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "muchuu-sa-kimi-ni-ed-1");

    expect(anime).toMatchObject({
      id: "curated-183128",
      titleJa: "夢中さ、きみに。",
      titleZhHant: "為你著迷",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      titleJa: "ラブル",
      artistDisplayName: "須田景凪",
      releaseDate: "2025-08-20",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "須田景凪", role: "vocals" },
      { name: "須田景凪", role: "lyrics" },
      { name: "須田景凪", role: "composition" },
      { name: "須田景凪", role: "arrangement" },
      { name: "赤山コウ", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "6SohipajDTE",
        type: "creditless_op",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "O2W9VK0KIZc",
        type: "full_music_video",
        channelName: "須田景凪 バルーン"
      })
    ]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://keinasuda.lnk.to/rubble",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://karaoke-muchusa.com/muchusa/music.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.a-sketch.com/discography/%E3%83%A9%E3%83%96%E3%83%AB/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/animeVideo.php?sn=45336",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "微炭酸アドレセンス",
      artistDisplayName: "山下大輝 × 畠中祐",
      releaseDate: "2025-08-22",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "山下大輝", role: "vocals" },
      { name: "畠中祐", role: "vocals" },
      { name: "OHTORA", role: "lyrics" },
      { name: "OHTORA", role: "composition" },
      { name: "maeshima soshi", role: "composition" },
      { name: "maeshima soshi", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "X3JEsa-jwX0",
        type: "creditless_ed",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "yh3DiDOPwqo",
        type: "full_music_video",
        channelName: "山下大輝 / Daiki Yamashita Official YouTube Channel"
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://a-sketch-inc.lnk.to/Daiki_Yamashita_x_Tasuku_Hatanaka_bitansan_adolescence",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://karaoke-muchusa.com/muchusa/music.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://yamashitadaiki.com/discography/1171/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://zh.wikipedia.org/zh-hant/%E7%82%BA%E4%BD%A0%E8%91%97%E8%BF%B7",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("enriches the Chikyuu no Latair ending theme", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "chikyuu-no-latair");
    const ending = anime?.themes.find((theme) => theme.id === "chikyuu-no-latair-ed-1");

    expect(anime).toMatchObject({
      id: "curated-198408",
      titleJa: "地球のラテール",
      titleZhHant: "地球拉泰爾",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(ending).toMatchObject({
      titleJa: "地球のオーケストラ",
      artistDisplayName: "アースセイバーズ（カナデ CV.谷江玲音と子どもたち）＆ラテール（CV.田村ゆかり）",
      releaseDate: "2025-09-25",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "アースセイバーズ（カナデ CV.谷江玲音と子どもたち）", role: "vocals" },
      { name: "ラテール（CV.田村ゆかり）", role: "vocals" },
      { name: "高岸遥", role: "lyrics" },
      { name: "高岸楓", role: "lyrics" },
      { name: "野崎良太", role: "composition" },
      { name: "野崎良太", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "HDkb3oEJgUs",
        title: "【2025年9月5日放送開始！】生物多様性を楽しく学ぶアニメ『地球のラテール』",
        type: "other",
        channelName: "Earth Saverチャンネル",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=HDkb3oEJgUs",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://linkco.re/GD9S5SCP",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://latair.jp/tvanime/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://latair.jp/2025/08/14/latair0905/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://linkco.re/GD9S5SCP",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.oricon.co.jp/anime/428/",
        role: "cross_check"
      })
    ]));
  });

  it("adds official streaming-anime theme videos and first-party credits", () => {
    const myMelodyTheme = curatedAnimeDetails
      .find((anime) => anime.slug === "my-melody-and-kuromi")
      ?.themes.find((theme) => theme.type === "ED");

    expect(myMelodyTheme).toMatchObject({
      titleJa: "Kawaii (Prod. Gen Hoshino)",
      artistDisplayName: "LE SSERAFIM",
      lastVerifiedAt: "2026-08-10"
    });
    expect(myMelodyTheme?.credits).toEqual(expect.arrayContaining([
      { name: "LE SSERAFIM", role: "vocals" },
      { name: "星野源", role: "lyrics" },
      { name: "星野源", role: "composition" },
      { name: "星野源", role: "arrangement" }
    ]));
    expect(myMelodyTheme?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "DY4ckIx94xw",
      type: "full_music_video",
      channelName: "HYBE LABELS",
      officialStatus: "official"
    }));
    expect(myMelodyTheme?.sources).toContainEqual(expect.objectContaining({
      url: "https://prtimes.jp/main/html/rd/p/000000665.000037629.html",
      role: "first_party"
    }));

    const conciergeTheme = curatedAnimeDetails
      .find((anime) => anime.slug === "poke-mon-concierge-part-2")
      ?.themes.find((theme) => theme.type === "ED");

    expect(conciergeTheme).toMatchObject({
      titleJa: "オノマトペISLAND",
      artistDisplayName: "山下達郎",
      lastVerifiedAt: "2026-08-10"
    });
    expect(conciergeTheme?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "Ks03nrhi2NU",
      type: "full_music_video",
      channelName: "山下達郎 Tatsuro Yamashita",
      officialStatus: "official"
    }));
    expect(conciergeTheme?.sources).toContainEqual(expect.objectContaining({
      url: "https://about.netflix.com/ja/news/pokemon-concierge-new-episodes-premieres-september-4",
      role: "first_party"
    }));
  });

  it("enriches the Pokemon Concierge Part 2 ending theme", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "poke-mon-concierge-part-2");
    const ending = anime?.themes.find((theme) => theme.id === "poke-mon-concierge-part-2-ed-1");

    expect(anime).toMatchObject({
      id: "curated-175035",
      titleJa: "ポケモンコンシェルジュ 2クール",
      titleZhHant: "寶可夢 禮賓部 新篇章",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(ending).toMatchObject({
      titleJa: "オノマトペISLAND",
      artistDisplayName: "山下達郎",
      releaseDate: "2025-09-04",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "山下達郎", role: "vocals" },
      { name: "山下達郎", role: "lyrics" },
      { name: "山下達郎", role: "composition" },
      { name: "山下達郎", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "Ks03nrhi2NU",
        title: "山下達郎『オノマトペISLAND』ポケモンコンシェルジュ コラボMV",
        type: "full_music_video",
        channelName: "山下達郎 Tatsuro Yamashita",
        officialStatus: "official"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=Ks03nrhi2NU",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tatsuroyamashita.lnk.to/ONMTPISLNDPu",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://wmg.jp/tatsuro/discography/32013/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.netflix.com/tw/title/81186864",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://tower.jp/item/6971263/%E3%82%AA%E3%83%8E%E3%83%9E%E3%83%88%E3%83%9AISLAND-MOVE-ON",
        role: "cross_check"
      })
    ]));
  });

  it("completes both Takopi themes with releases, links, credits and videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "takopii-no-genzai");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      id: "curated-185407",
      titleJa: "タコピーの原罪",
      titleZhHant: "章魚嗶的原罪",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(opening).toMatchObject({
      titleJa: "ハッピーラッキーチャッピー",
      artistDisplayName: "ano",
      releaseDate: "2025-06-04",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "ano", role: "vocals" },
      { name: "あの", role: "lyrics" },
      { name: "あの", role: "composition" },
      { name: "TAKU INOUE", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "ciFvLHCThdg",
        type: "creditless_op",
        channelName: "TBSアニメ"
      }),
      expect.objectContaining({
        youtubeVideoId: "s7FgdaGOw9s",
        type: "full_music_video",
        channelName: "ano official channel"
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://ano-official.com/discography/detail/6626/",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1889741674",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://ano-official.com/news/detail/74046",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ano-official.com/discography/detail/6626/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1889741674",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=142775",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "がらすの線",
      artistDisplayName: "Tele",
      releaseDate: "2025-06-25",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "Tele", role: "vocals" },
      { name: "谷口喜多朗", role: "lyrics" },
      { name: "谷口喜多朗", role: "composition" },
      { name: "谷口喜多朗", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "uA50rpzCKqY",
        type: "creditless_ed",
        channelName: "TBSアニメ"
      }),
      expect.objectContaining({
        youtubeVideoId: "drS7STiDBCY",
        type: "full_music_video",
        channelName: "Tele"
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://tele.lnk.to/garasunosen",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1820349965",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://tele.jp.net/music/%E7%A1%9D%E5%AD%90%E3%81%AE%E7%B7%9A/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://tele.jp.net/news/1454/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1820349965",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=142775",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    for (const theme of [opening, ending]) {
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({
          url: "https://www.tbs.co.jp/anime/takopi_project/music/",
          role: "first_party"
        }),
        expect.objectContaining({
          url: "https://www.4gamers.com.tw/news/detail/71910/toko-p-animation-release-in-2025-june",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
  });

  it("preserves Western songwriting credits for both Kaiju No. 8 season 2 themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "kaijuu-8-gou-2nd-season");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(creditRoleLabel("songwriting")).toBe("詞曲");
    expect(anime).toMatchObject({
      id: "curated-178754",
      titleJa: "怪獣８号 第２期",
      titleZhHant: "怪獸8號 （第2期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(opening).toMatchObject({
      titleJa: "You Can’t Run From Yourself",
      artistDisplayName: "AURORA",
      releaseDate: "2025-07-18",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "AURORA", role: "vocals" },
      { name: "AURORA", role: "songwriting" },
      { name: "Fredrik Svabø", role: "songwriting" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "rH8FCwzOdpI",
        type: "creditless_op",
        channelName: "TOHO animation チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "cgM1K48shdI",
        type: "other",
        channelName: "AURORA"
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://umj.lnk.to/AURORA_YCRFY",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1823156201",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/aurora/products/00602478611926/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/aurora/news/2025-07-18/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1823156201",
        language: "zh-Hant",
        role: "first_party"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Beautiful Colors",
      artistDisplayName: "OneRepublic",
      releaseDate: "2025-07-25",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "OneRepublic", role: "vocals" },
      { name: "Ryan Tedder", role: "songwriting" },
      { name: "Brent Kutzle", role: "songwriting" },
      { name: "Josh Varnadore", role: "songwriting" },
      { name: "Jeff Owen", role: "songwriting" },
      { name: "Tyler Spry", role: "songwriting" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "R5AHlP2cny0",
        type: "creditless_ed",
        channelName: "TOHO animation チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "_EmKiQknNHY",
        type: "full_music_video",
        channelName: "OneRepublic"
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://umj.lnk.to/1R_BC",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1826134951",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/onerepublic/products/ui1as-00664/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/onerepublic/news/2025-07-25/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1826134951",
        language: "zh-Hant",
        role: "first_party"
      })
    ]));

    for (const theme of [opening, ending]) {
      expect(theme?.sources).toContainEqual(expect.objectContaining({
        url: "https://kaiju-no8.net/music/season2.html",
        role: "first_party"
      }));
    }
    expect(opening?.sources).toContainEqual(expect.objectContaining({
      url: "https://gnn.gamer.com.tw/detail.php?sn=287463",
      language: "zh-Hant",
      role: "cross_check"
    }));
    expect(ending?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.cool-style.com.tw/wd2/archives/1215036-%E3%80%8A%E6%80%AA%E7%8D%B8-8-%E8%99%9F%E3%80%8B%E7%AC%AC%E4%BA%8C%E5%AD%A3-ed%E3%80%88beautiful-colors%E3%80%89%E5%85%AC%E9%96%8B%EF%BC%81%E6%90%96%E6%BB%BE%E5%A4%A9%E5%9C%98-onerepublic-%E7%8D%BB/",
      language: "zh-Hant",
      role: "cross_check"
    }));
  });

  it("publishes complete reviewed theme details for The Summer Hikaru Died", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "hikaru-ga-shinda-natsu");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(opening).toMatchObject({
      titleJa: "再会",
      artistDisplayName: "Vaundy",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "Vaundy", role: "vocals" },
      { name: "Vaundy", role: "lyrics" },
      { name: "Vaundy", role: "composition" },
      { name: "Vaundy", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "UP7la6a1H1g",
        type: "creditless_op",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "WcaSSvtHFeM",
        type: "full_music_video",
        channelName: "Vaundy"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://lnk.to/Vaundy_saikai",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://hikanatsu-anime.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://vaundy.jp/news/detail/10936",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.4gamers.com.tw/news/detail/72144/the-summer-hikaru-died-netflix-animation-release-in-july",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "あなたはかいぶつ",
      artistDisplayName: "TOOBOE",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "TOOBOE", role: "vocals" },
      { name: "TOOBOE", role: "lyrics" },
      { name: "TOOBOE", role: "composition" },
      { name: "TOOBOE", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "_dq21OHPJTk",
        type: "creditless_ed",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "iKBc6dMskmw",
        type: "full_music_video",
        channelName: "TOOBOE"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://tooboe.lnk.to/youaremymonster",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://hikanatsu-anime.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://prtimes.jp/main/html/rd/p/000004583.000013546.html",
        role: "first_party"
      })
    ]));
  });

  it("completes Dandadan season 2 themes while collapsing duplicate videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "dandadan-2nd-season");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "dandadan-2nd-season-op-1",
      "dandadan-2nd-season-ed-1"
    ]);
    expect(anime).toMatchObject({
      id: "curated-185660",
      titleJa: "ダンダダン 第2期",
      titleZhHant: "膽大黨 （第2期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(opening).toMatchObject({
      titleJa: "革命道中",
      artistDisplayName: "アイナ・ジ・エンド",
      releaseDate: "2025-07-02",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "アイナ・ジ・エンド", role: "vocals" },
      { name: "アイナ・ジ・エンド", role: "lyrics" },
      { name: "Shin Sakiura", role: "lyrics" },
      { name: "アイナ・ジ・エンド", role: "composition" },
      { name: "Shin Sakiura", role: "composition" },
      { name: "Shin Sakiura", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "ZWjbvYWUMHo",
        type: "creditless_op",
        channelName: "MBS animation 公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "NLIGDjKBLY0",
        type: "full_music_video",
        channelName: "アイナ・ジ・エンド Official"
      })
    ]));
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://aina.lnk.to/OnTheWay",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1821087731",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.ainatheend.jp/news/detail.php?id=1125067",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://avexnet.jp/release/1020983",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1821087731",
        language: "zh-Hant",
        role: "first_party"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "どうかしてる",
      artistDisplayName: "WurtS",
      releaseDate: "2025-07-11",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "WurtS", role: "vocals" },
      { name: "WurtS", role: "lyrics" },
      { name: "WurtS", role: "composition" },
      { name: "WurtS", role: "arrangement" },
      { name: "Singo Kubota［Jazzin'park］", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "LxUeFYhLE0U",
        type: "creditless_ed",
        channelName: "MBS animation 公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "we3tmndN4Es",
        type: "full_music_video",
        channelName: "WurtS"
      })
    ]));
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://lnk.to/WurtS_ds",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1824189859",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://wurts.jp/2675/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://wurts.jp/2625/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1824189859",
        language: "zh-Hant",
        role: "first_party"
      })
    ]));

    for (const theme of [opening, ending]) {
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({
          url: "https://anime-dandadan.com/music/",
          role: "first_party"
        }),
        expect.objectContaining({
          url: "https://hypebeast.com/zh/2025/7/dan-da-dan-season-2-op-ed-release",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
  });

  it("publishes complete reviewed theme details for both Gachiakuta cours", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "gachiakuta");
    const opening1 = anime?.themes.find((theme) => theme.id === "gachiakuta-op-1");
    const opening2 = anime?.themes.find((theme) => theme.id === "gachiakuta-op-2");
    const ending1 = anime?.themes.find((theme) => theme.id === "gachiakuta-ed-1");
    const ending2 = anime?.themes.find((theme) => theme.id === "gachiakuta-ed-2");

    expect(anime).toMatchObject({
      opCount: 2,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "gachiakuta-op-1",
      "gachiakuta-op-2",
      "gachiakuta-ed-1",
      "gachiakuta-ed-2"
    ]);

    expect(opening1?.credits).toEqual(expect.arrayContaining([
      { name: "Paledusk", role: "vocals" },
      { name: "KAITO", role: "lyrics" },
      { name: "DAIDAI", role: "composition" },
      { name: "DAIDAI", role: "arrangement" }
    ]));
    expect(opening1?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "JxX7WU5DQug",
        type: "creditless_op",
        channelName: "“GACHIAKUTA” Anime Official Channel"
      }),
      expect.objectContaining({
        youtubeVideoId: "pF8yG4YNyPw",
        type: "full_music_video",
        channelName: "Paledusk"
      })
    ]));
    expect(opening1?.links).toContainEqual(expect.objectContaining({
      url: "https://asab.lnk.to/HUGs",
      linkType: "official_landing_page"
    }));
    expect(opening1?.sources).toContainEqual(expect.objectContaining({
      url: "https://gnn.gamer.com.tw/detail.php?sn=286936",
      language: "zh-Hant",
      role: "cross_check"
    }));

    expect(opening2?.credits).toEqual(expect.arrayContaining([
      { name: "Mori Calliope", role: "vocals" },
      { name: "syudou", role: "lyrics" },
      { name: "Mori Calliope", role: "lyrics" },
      { name: "syudou", role: "composition" },
      { name: "syudou", role: "arrangement" }
    ]));
    expect(opening2?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "AqWR546Xy8A",
        type: "creditless_op",
        channelName: "“GACHIAKUTA” Anime Official Channel"
      }),
      expect.objectContaining({
        youtubeVideoId: "do8EmK-XoAg",
        type: "full_music_video",
        channelName: "Mori Calliope Ch. hololive-EN"
      })
    ]));
    expect(opening2?.links).toContainEqual(expect.objectContaining({
      url: "https://lnk.to/mc_ljc",
      linkType: "official_landing_page"
    }));

    expect(ending1).toMatchObject({ titleRomaji: "Tomoshibi" });
    expect(ending1?.credits).toEqual(expect.arrayContaining([
      { name: "DUSTCELL", role: "vocals" },
      { name: "Misumi", role: "lyrics" },
      { name: "Misumi", role: "composition" },
      { name: "Misumi", role: "arrangement" }
    ]));
    expect(ending1?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "_r8XHQtADlQ",
        type: "creditless_ed",
        channelName: "“GACHIAKUTA” Anime Official Channel"
      }),
      expect.objectContaining({
        youtubeVideoId: "iG1AOY9QjHw",
        type: "full_music_video",
        channelName: "DUSTCELL"
      })
    ]));
    expect(ending1?.links).toContainEqual(expect.objectContaining({
      url: "https://lnkfi.re/dustcell_tomoshibi_250716",
      linkType: "official_landing_page"
    }));

    expect(ending2).toMatchObject({ titleRomaji: "Ban" });
    expect(ending2?.credits).toEqual(expect.arrayContaining([
      { name: "カラノア", role: "vocals" },
      { name: "雄大", role: "lyrics" },
      { name: "雄大", role: "composition" },
      { name: "カラノア", role: "arrangement" },
      { name: "永田涼司", role: "arrangement" }
    ]));
    expect(ending2?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "08TGBLLK8RE",
        type: "creditless_ed",
        channelName: "“GACHIAKUTA” Anime Official Channel"
      }),
      expect.objectContaining({
        youtubeVideoId: "qCSI5MHYBYA",
        type: "full_music_video",
        channelName: "カラノア"
      })
    ]));
    expect(ending2?.links).toContainEqual(expect.objectContaining({
      url: "https://asab.lnk.to/karanoah_ban",
      linkType: "official_landing_page"
    }));

    for (const theme of [opening1, opening2, ending1, ending2]) {
      expect(theme).toMatchObject({ lastVerifiedAt: "2026-08-10" });
      expect(theme?.sources).toContainEqual(expect.objectContaining({
        url: "https://gachiakuta-anime.com/music/",
        role: "first_party"
      }));
    }
    for (const theme of [opening2, ending2]) {
      expect(theme?.sources).toContainEqual(expect.objectContaining({
        url: "https://gachiakuta-anime.com/news/detail/?id=1128704",
        role: "first_party"
      }));
    }
  });

  it("collapses Sakamoto Days part 2 videos into two reviewed themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "sakamoto-days-part-2");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "sakamoto-days-part-2-op-1",
      "sakamoto-days-part-2-ed-1"
    ]);

    expect(opening).toMatchObject({
      titleJa: "Method",
      artistDisplayName: "Kroi",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "Kroi", role: "vocals" },
      { name: "内田怜央", role: "lyrics" },
      { name: "Kroi", role: "composition" },
      { name: "Kroi", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "YNYkTXknYjE",
        type: "creditless_op",
        channelName: "TMSアニメ公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "VuLIn8ZHgxw",
        type: "full_music_video",
        channelName: "TMSアニメ公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "oioOfrRKhrI",
        type: "full_music_video",
        channelName: "Kroi"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://lnk.to/Kroi_Method",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://sakamotodays.jp/1st/music/season1-part2/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://kroi.net/discography/detail/5281/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ponycanyon.com.tw/post/2520/",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "ダンデライオン",
      titleRomaji: "Dandelion",
      artistDisplayName: "go!go!vanillas",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "go!go!vanillas", role: "vocals" },
      { name: "牧達弥", role: "lyrics" },
      { name: "牧達弥", role: "composition" },
      { name: "go!go!vanillas", role: "arrangement" },
      { name: "井上惇志(showmore)", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "3u8JxBtxt5k",
        type: "creditless_ed",
        channelName: "TMSアニメ公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "N7NGiZsi1VQ",
        type: "full_music_video",
        channelName: "go!go!vanillas"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://lnk.to/ggv_Dandelion",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://sakamotodays.jp/1st/music/season1-part2/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gogovanillas.com/news/detail/5488",
        role: "first_party"
      })
    ]));
  });

  it("keeps Kaoru Hana insert songs outside the reviewed OP and ED catalogue", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "kaoru-hana-wa-rin-to-saku");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "kaoru-hana-wa-rin-to-saku-op-1",
      "kaoru-hana-wa-rin-to-saku-ed-1"
    ]);
    expect(anime?.themes.some((theme) => theme.titleJa === "Hitohira" || theme.titleJa === "ひとひら"))
      .toBe(false);

    expect(opening).toMatchObject({
      titleJa: "まなざしは光",
      titleRomaji: "Manazashi wa Hikari",
      artistDisplayName: "キタニタツヤ",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "キタニタツヤ", role: "vocals" },
      { name: "キタニタツヤ", role: "lyrics" },
      { name: "キタニタツヤ", role: "composition" },
      { name: "キタニタツヤ", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "8WLNNu78mUk",
        type: "creditless_op",
        channelName: "アニプレックス チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "fvrS1KjmG-g",
        type: "full_music_video",
        channelName: "キタニタツヤ / Tatsuya Kitani"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://kitanitatsuya.lnk.to/DeK8YcHP",
      linkType: "official_landing_page"
    }));

    expect(ending).toMatchObject({
      titleJa: "ハレの日に",
      titleRomaji: "Hare no Hi ni",
      artistDisplayName: "汐れいら",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "汐れいら", role: "vocals" },
      { name: "汐れいら", role: "lyrics" },
      { name: "汐れいら", role: "composition" },
      { name: "上口浩平", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "W4fND8qaTtE",
        type: "creditless_ed",
        channelName: "アニプレックス チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "wUPbV0Oz6Io",
        type: "full_music_video",
        channelName: "汐れいら"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://erj.lnk.to/mhlpXu",
      linkType: "official_landing_page"
    }));

    for (const theme of [opening, ending]) {
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({ role: "first_party" }),
        expect.objectContaining({
          url: "https://gnn.gamer.com.tw/detail.php?sn=286652",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
  });

  it("publishes the Arknights finale ending alongside its main themes", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "arknights-enshin-shomei");
    const opening = anime?.themes.find((theme) => theme.id === "arknights-enshin-shomei-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "arknights-enshin-shomei-ed-1");
    const finaleEnding = anime?.themes.find((theme) => theme.id === "arknights-enshin-shomei-ed-2");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "arknights-enshin-shomei-op-1",
      "arknights-enshin-shomei-ed-1",
      "arknights-enshin-shomei-ed-2"
    ]);

    expect(opening).toMatchObject({
      titleJa: "End of Days",
      artistDisplayName: "ReoNa",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "ReoNa", role: "vocals" },
      { name: "ハヤシケイ（LIVE LAB.）", role: "lyrics" },
      { name: "ReoNa", role: "lyrics" },
      { name: "rui（fade）", role: "lyrics" },
      { name: "rui（fade）", role: "composition" },
      { name: "堀江晶太", role: "arrangement" },
      { name: "宮野幸子（SHANGRI-LA INC.）", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "m6i-frdBemo",
        type: "creditless_op",
        channelName: "アークナイツ 公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "lrF8dqA74DQ",
        type: "full_music_video",
        channelName: "ReoNa official YouTube channel"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://reona.lnk.to/EndofDays",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://arknights-anime.jp/news/40", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.4gamers.com.tw/news/detail/71503/arknights-rise-from-ember-anime-season-3rd-in-july-2025",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Truth",
      artistDisplayName: "糸奇はな",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "糸奇はな", role: "vocals" },
      { name: "糸奇はな", role: "lyrics" },
      { name: "糸奇はな", role: "composition" },
      { name: "兼松 衆", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "H-xK8jKq-9I",
        type: "creditless_ed",
        channelName: "アークナイツ 公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "cdI3pFxfw50",
        type: "full_music_video",
        channelName: "アークナイツ 公式チャンネル"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://nex-tone.link/A00199631",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://arknights-anime.jp/news/44", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.4gamers.com.tw/news/detail/71503/arknights-rise-from-ember-anime-season-3rd-in-july-2025",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(finaleEnding).toMatchObject({
      type: "ED",
      titleJa: "生命換装",
      titleRomaji: "Seimei Kansou",
      artistDisplayName: "ReoNa",
      lastVerifiedAt: "2026-08-10"
    });
    expect(finaleEnding?.credits).toEqual(expect.arrayContaining([
      { name: "ReoNa", role: "vocals" },
      { name: "傘村トータ（LIVE LAB.）", role: "lyrics" },
      { name: "傘村トータ（LIVE LAB.）", role: "composition" },
      { name: "宮野幸子（SHANGRI-LA INC.）", role: "arrangement" }
    ]));
    expect(finaleEnding?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "0xR91gHai4k",
      type: "full_music_video",
      channelName: "アークナイツ 公式チャンネル"
    }));
    expect(finaleEnding?.links).toContainEqual(expect.objectContaining({
      url: "https://reona.lnk.to/Seimeikanso",
      linkType: "official_landing_page"
    }));
    expect(finaleEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://arknights-anime.jp/news/46", role: "first_party" }),
      expect.objectContaining({
        url: "https://prts.wiki/w/%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%EF%BC%9A%E7%84%B0%E7%83%AC%E6%9B%99%E6%98%8E",
        language: "zh-Hans",
        role: "cross_check"
      })
    ]));
  });

  it("publishes corrected With You and the Rain credits and official videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "ame-to-kimi-to");
    const opening = anime?.themes.find((theme) => theme.id === "ame-to-kimi-to-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "ame-to-kimi-to-ed-1");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "ame-to-kimi-to-op-1",
      "ame-to-kimi-to-ed-1"
    ]);

    expect(opening).toMatchObject({
      titleJa: "雨と",
      titleRomaji: "Ame to",
      artistDisplayName: "鈴木真海子",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "鈴木真海子", role: "vocals" },
      { name: "鈴木真海子", role: "lyrics" },
      { name: "鈴木真海子", role: "composition" },
      { name: "ryo takahashi", role: "composition" },
      { name: "ryo takahashi", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "OOmuZxXI4lU",
        type: "creditless_op",
        channelName: "NBCUniversal Anime/Music"
      }),
      expect.objectContaining({
        youtubeVideoId: "T0PYzggLT9w",
        type: "full_music_video",
        channelName: "鈴木真海子 / mamiko suzuki"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://suzukimamiko.lnk.to/ameto.SG",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://amekimi-anime.com/music/oped.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=287297",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "filled",
      artistDisplayName: "菅原圭",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "菅原圭", role: "vocals" },
      { name: "菅原圭", role: "lyrics" },
      { name: "菅原圭", role: "composition" },
      { name: "Naoki Itai", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "XYJ1xCEUTxg",
        type: "creditless_ed",
        channelName: "NBCUniversal Anime/Music"
      }),
      expect.objectContaining({
        youtubeVideoId: "tkc_QRHMkro",
        type: "full_music_video",
        channelName: "菅原圭"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://keisugawara.lnk.to/filled_EP",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://amekimi-anime.com/music/oped.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=287297",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("publishes the verified 9-nine opening and ending package", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "9-nine-shihaisha-no-oukan");
    const opening = anime?.themes.find((theme) => theme.id === "9-nine-shihaisha-no-oukan-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "9-nine-shihaisha-no-oukan-ed-1");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "9-nine-shihaisha-no-oukan-op-1",
      "9-nine-shihaisha-no-oukan-ed-1"
    ]);

    expect(opening).toMatchObject({
      titleJa: "ResoNAnce",
      artistDisplayName: "あらき",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "あらき", role: "vocals" },
      { name: "山口たこ（Crearts）", role: "lyrics" },
      { name: "堀江晶太", role: "composition" },
      { name: "堀江晶太", role: "arrangement" }
    ]));
    expect(opening?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "UpbWNBDQ4TQ",
      type: "creditless_op",
      channelName: "ぱれっとチャンネル"
    }));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://linkco.re/zM5HMA0e",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://nine-anime.marv.jp/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=139603",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Pale Blaze",
      artistDisplayName: "米倉千尋",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "米倉千尋", role: "vocals" },
      { name: "山口たこ（Crearts）", role: "lyrics" },
      { name: "堀江晶太", role: "composition" },
      { name: "堀江晶太", role: "arrangement" }
    ]));
    expect(ending?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "O41bylC8_MI",
      type: "creditless_ed",
      channelName: "ぱれっとチャンネル"
    }));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://linkco.re/zM5HMA0e",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://nine-anime.marv.jp/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=139603",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("keeps the Food Court special ending movie attached to one ending theme", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "food-court-de-mata-ashita");
    const opening = anime?.themes.find((theme) => theme.id === "food-court-de-mata-ashita-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "food-court-de-mata-ashita-ed-1");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "food-court-de-mata-ashita-op-1",
      "food-court-de-mata-ashita-ed-1"
    ]);

    expect(opening).toMatchObject({
      titleJa: "未完成に瞬いて",
      artistDisplayName: "おいしくるメロンパン",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "おいしくるメロンパン", role: "vocals" },
      { name: "ナカシマ", role: "lyrics" },
      { name: "ナカシマ", role: "composition" },
      { name: "おいしくるメロンパン", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "Mes1XCDZYTo",
        type: "creditless_op",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "1L0bMfq94KA",
        type: "full_music_video",
        channelName: "おいしくるメロンパン"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://oisiclemelonpan.lnk.to/YoungGlow_Pre",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://www.foodcourtjk-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://acgsecrets.hk/anime/1857/",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "となりあわせ",
      artistDisplayName: "和田と山本（CV.宮崎ヒヨリ・青山吉能）",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "和田と山本（CV.宮崎ヒヨリ・青山吉能）", role: "vocals" },
      { name: "三好啓太", role: "lyrics" },
      { name: "三好啓太", role: "composition" },
      { name: "三好啓太", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "CLVx27ALbgs",
        type: "creditless_ed",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "_vORepjHH7M",
        type: "other",
        channelName: "KADOKAWAanime"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://nex-tone.link/nHgmT6Tim",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://www.foodcourtjk-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://acgsecrets.hk/anime/1857/",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Silent Witch double theme release", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "silent-witch-chinmoku-no-majo-no-kakushigoto"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "silent-witch-chinmoku-no-majo-no-kakushigoto-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "silent-witch-chinmoku-no-majo-no-kakushigoto-ed-1"
    );

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Feel",
      artistDisplayName: "羊文学",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "羊文学", role: "vocals" },
      { name: "塩塚モエカ", role: "lyrics" },
      { name: "塩塚モエカ", role: "composition" },
      { name: "羊文学", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "8dky0A7Gx1c",
        type: "creditless_op",
        channelName: "アニプレックス チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "bVrPoCfMZCE",
        type: "full_music_video",
        channelName: "羊文学"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://hitsujibungaku.lnk.to/Feel_milddays",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://silentwitch.net/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.sonymusic.com.tw/album/d-o-n-t-l-a-u-g-h-i-t-o-f-f/",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://tower.jp/item/7109461", role: "cross_check" })
    ]));

    expect(ending).toMatchObject({
      titleJa: "mild days",
      artistDisplayName: "羊文学",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "羊文学", role: "vocals" },
      { name: "塩塚モエカ", role: "lyrics" },
      { name: "塩塚モエカ", role: "composition" },
      { name: "羊文学", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "ZssInPdN6o8",
        type: "creditless_ed",
        channelName: "アニプレックス チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "Wpa4u04yQyw",
        type: "full_music_video",
        channelName: "羊文学"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://hitsujibungaku.lnk.to/Feel_milddays",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://silentwitch.net/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.sonymusic.com.tw/album/mild-days/",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://tower.jp/item/7109461", role: "cross_check" })
    ]));
  });

  it("preserves the verified Ruri no Houseki theme credits and official videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "ruri-no-houseki");
    const opening = anime?.themes.find((theme) => theme.id === "ruri-no-houseki-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "ruri-no-houseki-ed-1");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "光のすみか",
      artistDisplayName: "安田レイ",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "安田レイ", role: "vocals" },
      { name: "安田レイ", role: "lyrics" },
      { name: "大濱健悟", role: "composition" },
      { name: "玉井健二", role: "arrangement" },
      { name: "南田健吾", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "YDOARwO2SNk",
        type: "creditless_op",
        channelName: "アニプレックス チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "Lo-OjEM6qYc",
        type: "full_music_video",
        channelName: "安田レイ Official YouTube Channel"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://reiyasuda.lnk.to/hikarinosumika",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://rurinohouseki.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://acgsecrets.hk/anime/1872/",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "サファイア",
      artistDisplayName: "Hana Hope",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "Hana Hope", role: "vocals" },
      { name: "矢野水音", role: "lyrics" },
      { name: "宅見将典", role: "composition" },
      { name: "宅見将典", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "CtA_47WtzzY",
        type: "creditless_ed",
        channelName: "アニプレックス チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "uZu7powiHGM",
        type: "full_music_video",
        channelName: "Hana Hope"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://smar.lnk.to/XnLtN8",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://rurinohouseki.com/music/?id=ed", role: "first_party" }),
      expect.objectContaining({
        url: "https://acgsecrets.hk/anime/1872/",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("consolidates and enriches the verified BULLET/BULLET opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "bullet-bullet");
    const opening = anime?.themes.find((theme) => theme.id === "bullet-bullet-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "bullet-bullet-ed-1");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((theme) => theme.id)).toEqual([
      "bullet-bullet-op-1",
      "bullet-bullet-ed-1"
    ]);

    expect(opening).toMatchObject({
      titleJa: "WORK HARD",
      artistDisplayName: "ちゃんみな",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "ちゃんみな", role: "vocals" },
      { name: "ちゃんみな", role: "lyrics" },
      { name: "ちゃんみな", role: "composition" },
      { name: "SLAY", role: "composition" },
      { name: "AVIN", role: "composition" },
      { name: "stevenc4stle", role: "composition" },
      { name: "Opro", role: "composition" },
      { name: "AVIN", role: "arrangement" },
      { name: "SLAY", role: "arrangement" },
      { name: "stevenc4stle", role: "arrangement" },
      { name: "Opro", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "zCvfrOnhShU",
        type: "creditless_op",
        channelName: "ちゃんみな [CHANMINA]"
      }),
      expect.objectContaining({
        youtubeVideoId: "HCdLEiXoxwg",
        type: "full_music_video",
        channelName: "ちゃんみな [CHANMINA]"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://nolabel.lnk.to/WORKHARD",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://bullet-bullet.com/music.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286389",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Glass Door",
      artistDisplayName: "Newspeak",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "Newspeak", role: "vocals" },
      { name: "Rei", role: "lyrics" },
      { name: "Rei", role: "composition" },
      { name: "Newspeak", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "Z3-arFGHmU0",
        type: "creditless_ed",
        channelName: "Newspeak Jp"
      }),
      expect.objectContaining({
        youtubeVideoId: "nEFEkZ-GXrY",
        type: "full_music_video",
        channelName: "Newspeak Jp"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://newspeakjp.lnk.to/GlassDoorPu",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://bullet-bullet.com/music.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286389",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Hotel Inhumans theme credits and official videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "hotel-inhumans");
    const opening = anime?.themes.find((theme) => theme.id === "hotel-inhumans-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "hotel-inhumans-ed-1");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "ミスター・ムーンライト",
      artistDisplayName: "imase",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "imase", role: "vocals" },
      { name: "imase", role: "lyrics" },
      { name: "imase", role: "composition" },
      { name: "久保田真悟（Jazzin'park）", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "ATiEBvuxBQw",
        type: "creditless_op",
        channelName: "テレ東アニメ"
      }),
      expect.objectContaining({
        youtubeVideoId: "b2RNMNoTnJA",
        type: "full_music_video",
        channelName: "imase"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://imase.lnk.to/mr_moonlightPR",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://hotel-inhumans.com/music.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5554",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Merry Go Round",
      artistDisplayName: "NOA",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "NOA", role: "vocals" },
      { name: "Sunny", role: "lyrics" },
      { name: "NOA", role: "lyrics" },
      { name: "UTA", role: "composition" },
      { name: "Sunny", role: "composition" },
      { name: "NOA", role: "composition" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "usKne28i008",
        type: "creditless_ed",
        channelName: "NOA"
      }),
      expect.objectContaining({
        youtubeVideoId: "agN5U3CxT2Q",
        type: "full_music_video",
        channelName: "NOA"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://noa.lnk.to/merrygoroundPR",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://hotel-inhumans.com/music.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5554",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376114/", role: "cross_check" })
    ]));
  });

  it("preserves the verified Fermat no Ryouri theme credits and official videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "fermat-no-ryouri");
    const opening = anime?.themes.find((theme) => theme.id === "fermat-no-ryouri-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "fermat-no-ryouri-ed-1");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "メイラード",
      artistDisplayName: "OSHIKIKEIGO",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "OSHIKIKEIGO", role: "vocals" },
      { name: "OSHIKIKEIGO", role: "lyrics" },
      { name: "OSHIKIKEIGO", role: "composition" },
      { name: "OSHIKIKEIGO", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "ByuXopW9FTg",
        type: "creditless_op",
        channelName: "スカパー・ピクチャーズ チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "w5ZVt5-qXqw",
        type: "full_music_video",
        channelName: "OSHIKIKEIGO"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://oshikikeigo.lnk.to/Maillard",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://www.fermat-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5661",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({ url: "https://natalie.mu/music/pickup/oshikikeigo", role: "cross_check" })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Change Over",
      artistDisplayName: "DXTEEN",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "DXTEEN", role: "vocals" },
      { name: "Susumu Kawaguchi", role: "lyrics" },
      { name: "Shun Kusakawa", role: "lyrics" },
      { name: "Susumu Kawaguchi", role: "composition" },
      { name: "Shun Kusakawa", role: "composition" },
      { name: "Susumu Kawaguchi", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "0CM2i95JvwE",
        type: "creditless_ed",
        channelName: "スカパー・ピクチャーズ チャンネル"
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://dxteen.com/news/detail/1289",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://www.fermat-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://dxteen.com/discography/detail/33/?lang=zh-tw",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376607/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5661",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Zutaboro Reijou theme credits and official videos", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "zutaboro-reijou-wa-ane-no-moto-konyakusha-ni-dekiai-sareru"
    );
    const opening = anime?.themes.find(
      (theme) => theme.id === "zutaboro-reijou-wa-ane-no-moto-konyakusha-ni-dekiai-sareru-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "zutaboro-reijou-wa-ane-no-moto-konyakusha-ni-dekiai-sareru-ed-1"
    );

    expect(anime).toMatchObject({
      titleZhHant: "破爛千金被姊姊的原婚約者溺愛著",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "月蝕",
      artistDisplayName: "krage",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "krage", role: "vocals" },
      { name: "内澤崇仁", role: "lyrics" },
      { name: "内澤崇仁", role: "composition" },
      { name: "内澤崇仁", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "TxzfhanFwHI",
        type: "creditless_op",
        channelName: "日活アニメチャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "OMPs6_EmoP0",
        type: "full_music_video",
        channelName: "krage Official YouTube Channel"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://krage.lnk.to/cIqazD",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://zutaboro-anime.com/music.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/krage/info/576315",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5391",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "マリー",
      artistDisplayName: "Myuk",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "Myuk", role: "vocals" },
      { name: "Guiano", role: "lyrics" },
      { name: "Guiano", role: "composition" },
      { name: "Guiano", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "LZnXIc0bM_4",
        type: "creditless_ed",
        channelName: "日活アニメチャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "qBkdlGHv_ug",
        type: "full_music_video",
        channelName: "Myuk"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://myuk.lnk.to/DearMarie",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://zutaboro-anime.com/music.html", role: "first_party" }),
      expect.objectContaining({ url: "https://myuk.jp/867/", role: "first_party" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5391",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Dekin no Mogura theme credits and official videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "dekin-no-mogura");
    const opening = anime?.themes.find((theme) => theme.id === "dekin-no-mogura-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "dekin-no-mogura-ed-1");

    expect(anime).toMatchObject({
      titleZhHant: "出入禁止的鼴鼠",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "神頼み",
      artistDisplayName: "syudou",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "syudou", role: "vocals" },
      { name: "syudou", role: "lyrics" },
      { name: "syudou", role: "composition" },
      { name: "木内友軌", role: "arrangement" },
      { name: "花井諒", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "i0XigEENjpM",
        type: "creditless_op",
        channelName: "avex pictures"
      }),
      expect.objectContaining({
        youtubeVideoId: "l3HWRidBqTw",
        type: "full_music_video",
        channelName: "syudou"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://syudou.lnk.to/kamidanomi",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://dekinnomogura.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://syudou.com/disco/%E7%A5%9E%E9%A0%BC%E3%81%BF/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5572",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "喧騒 feat. Aile The Shota",
      artistDisplayName: "椎乃味醂",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "Aile The Shota", role: "vocals" },
      { name: "椎乃味醂", role: "lyrics" },
      { name: "椎乃味醂", role: "composition" },
      { name: "椎乃味醂", role: "arrangement" },
      { name: "Aile The Shota", role: "arrangement" }
    ]);
    expect(ending?.credits).not.toContainEqual({ name: "椎乃味醂", role: "vocals" });
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "R3biGiurkOY",
        type: "creditless_ed",
        channelName: "avex pictures"
      }),
      expect.objectContaining({
        youtubeVideoId: "t9E9BQ83BIU",
        type: "full_music_video",
        channelName: "椎乃味醂"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://orcd.co/sheenomirin_harmony",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://dekinnomogura.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://ailetheshota.tokyo/topic/dekinnomogura/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376277/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5572",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Puniru season two theme credits and official videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "puniru-wa-kawaii-slime-2nd-season");
    const opening = anime?.themes.find(
      (theme) => theme.id === "puniru-wa-kawaii-slime-2nd-season-op-1"
    );
    const ending = anime?.themes.find(
      (theme) => theme.id === "puniru-wa-kawaii-slime-2nd-season-ed-1"
    );

    expect(anime).toMatchObject({
      titleZhHant: "噗妮露是可愛史萊姆 （第2期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Brun-Brun",
      artistDisplayName: "ぷにる（CV：篠原 侑）",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual(expect.arrayContaining([
      { name: "ぷにる（CV：篠原 侑）", role: "vocals" },
      { name: "森いづみ", role: "lyrics" },
      { name: "森いづみ", role: "composition" },
      { name: "森いづみ", role: "arrangement" }
    ]));
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "RhYMhoPx0O4",
        type: "creditless_op",
        channelName: "TOHO animation チャンネル"
      })
    ]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://nex-tone.link/nXrVJW3Ar",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://puniru-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286621",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5647",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "青と夏",
      artistDisplayName: "ぷにる（CV：篠原 侑）",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual(expect.arrayContaining([
      { name: "ぷにる（CV：篠原 侑）", role: "vocals" },
      { name: "大森元貴", role: "lyrics" },
      { name: "大森元貴", role: "composition" },
      { name: "森いづみ", role: "arrangement" }
    ]));
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "dWtvWZ50Uk0",
        type: "creditless_ed",
        channelName: "TOHO animation チャンネル"
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://nex-tone.link/WMXKNMN8J",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://puniru-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://puniru-anime.com/music/album02/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5647",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified CITY THE ANIMATION themes without inventing unnamed special endings", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "city-the-animation");
    const opening = anime?.themes.find((theme) => theme.id === "city-the-animation-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "city-the-animation-ed-1");
    const specialEnding = anime?.themes.find((theme) => theme.id === "city-the-animation-ed-3");

    expect(anime).toMatchObject({
      titleZhHant: "CITY THE ANIMATION",
      opCount: 1,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Hello",
      artistDisplayName: "Furui Riho",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "Furui Riho", role: "vocals" },
      { name: "Furui Riho", role: "lyrics" },
      { name: "Furui Riho", role: "composition" },
      { name: "knoak", role: "arrangement" },
      { name: "Sayo Oyama", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "10eZAXGuVT4",
        type: "creditless_op",
        channelName: "京アニチャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "JxyACq69HgA",
        type: "full_music_video",
        channelName: "Furui Riho"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://furuiriho.lnk.to/hello",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://city-the-animation.com/music/opening/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://news.ponycanyon.co.jp/2025/05/111305",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.primevideo.com/-/zh_TW/detail/0S1DSDV3YPNM8W8GZQK8FJTZ9H",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "LUCKY",
      artistDisplayName: "TOMOO",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "TOMOO", role: "vocals" },
      { name: "TOMOO", role: "lyrics" },
      { name: "TOMOO", role: "composition" },
      { name: "Ryo Konishi", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "bP9yvQKl02Q",
        type: "creditless_ed",
        channelName: "京アニチャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "B6W3pvmWmX0",
        type: "full_music_video",
        channelName: "TOMOO"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://tomoo.lnk.to/LUCKY",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://city-the-animation.com/music/ending/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://news.ponycanyon.co.jp/2025/07/112579",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.primevideo.com/-/zh_TW/detail/0S1DSDV3YPNM8W8GZQK8FJTZ9H",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(specialEnding).toMatchObject({
      titleJa: "MAMBO NO. 5",
      artistDisplayName: "Dámaso Pérez Prado",
      lastVerifiedAt: "2026-08-10",
      videos: []
    });
    expect(specialEnding?.credits).toEqual([
      { name: "Dámaso Pérez Prado", role: "composition" }
    ]);
    expect(specialEnding?.credits).not.toContainEqual({
      name: "Dámaso Pérez Prado",
      role: "vocals"
    });
    expect(specialEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://city-the-animation.com/story/11/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://lcweb2.loc.gov/static/programs/national-recording-preservation-board/documents/Mambo-No-5_Firmat.pdf",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://animethemes.moe/anime/city_the_animation",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Nyaight of the Living Cat theme credits and official videos", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "nyaight-of-the-living-cat");
    const opening = anime?.themes.find((theme) => theme.id === "nyaight-of-the-living-cat-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "nyaight-of-the-living-cat-ed-1");

    expect(anime).toMatchObject({
      titleZhHant: "NYAIGHT OF THE LIVING CAT 活屍貓之夜",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "CAT CITY",
      artistDisplayName: "THE YELLOW MONKEY",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "THE YELLOW MONKEY", role: "vocals" },
      { name: "吉井和哉", role: "lyrics" },
      { name: "菊地英昭", role: "composition" },
      { name: "THE YELLOW MONKEY", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "_Ki5aP9DBYw",
        type: "creditless_op",
        channelName: "ソニー・ピクチャーズ 公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "L-OuFdRYHl8",
        type: "full_music_video",
        channelName: "THE YELLOW MONKEY"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://tym.lnk.to/catcity",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://nyailivi.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://theyellowmonkeysuper.jp/lyrics/detail/1029/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://vgmdb.net/album/152460", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286804",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Matatabi",
      artistDisplayName: "WANIMA",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "WANIMA", role: "vocals" },
      { name: "KENTA", role: "lyrics" },
      { name: "KENTA", role: "composition" },
      { name: "WANIMA", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "gkWcg8wmu_8",
        type: "creditless_ed",
        channelName: "ソニー・ピクチャーズ 公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "Uhku33YQNZA",
        type: "full_music_video",
        channelName: "WANIMA"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://wanima.lnk.to/matatabi",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://nyailivi.com/music/", role: "first_party" }),
      expect.objectContaining({ url: "https://wanima.net/musics/19109", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376149/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286804",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified A Couple of Cuckoos season two theme details", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "kakkou-no-iinazuke-season-2");
    const opening = anime?.themes.find((theme) => theme.id === "kakkou-no-iinazuke-season-2-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "kakkou-no-iinazuke-season-2-ed-1");

    expect(anime).toMatchObject({
      titleZhHant: "杜鵑婚約 （第2期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "君がくれたもの",
      artistDisplayName: "asmi",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "asmi", role: "vocals" },
      { name: "asmi", role: "lyrics" },
      { name: "asmi", role: "composition" },
      { name: "Taro Ishida", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "RVOwhB5wEkA",
        type: "creditless_op",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "mv_4JVTkog8",
        type: "full_music_video",
        channelName: "asmi Official Channel"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://asmi.lnk.to/AllYouGaveMeWN",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://cuckoos-anime.com/news.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://prtimes.jp/main/html/rd/p/000004609.000013546.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5377",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "あなたでなくちゃ",
      artistDisplayName: "22/7",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "22/7", role: "vocals" },
      { name: "秋元康", role: "lyrics" },
      { name: "中山翔吾", role: "composition" },
      { name: "中山翔吾", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "HsfGYPHErTg",
        type: "creditless_ed",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "NkmkyggvPns",
        type: "full_music_video",
        channelName: "22/7 OFFICIAL YouTube CHANNEL"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://227.lnk.to/Anatadenakucha",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://cuckoos-anime.com/news.html", role: "first_party" }),
      expect.objectContaining({
        url: "https://nanabunnonijyuuni-mobile.com/s/n110/news/detail/10840",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5377",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Grand Blue season two theme details", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "grand-blue-season-2");
    const opening = anime?.themes.find((theme) => theme.id === "grand-blue-season-2-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "grand-blue-season-2-ed-1");

    expect(anime).toMatchObject({
      titleZhHant: "GRAND BLUE 碧藍之海 2 （第2期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "青春永遠（せいしゅんとは）",
      artistDisplayName: "湘南乃風 feat. 新しい学校のリーダーズ",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "湘南乃風", role: "vocals" },
      { name: "新しい学校のリーダーズ", role: "vocals" },
      { name: "湘南乃風", role: "lyrics" },
      { name: "yonkey", role: "lyrics" },
      { name: "新しい学校のリーダーズ", role: "lyrics" },
      { name: "湘南乃風", role: "composition" },
      { name: "yonkey", role: "composition" },
      { name: "湘南乃風", role: "arrangement" },
      { name: "yonkey", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "kHfGSs6A3xU",
        type: "creditless_op",
        channelName: "NBCUniversal Anime/Music"
      }),
      expect.objectContaining({
        youtubeVideoId: "eFj2sr4qd4M",
        type: "other",
        channelName: "湘南乃風"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://snkz.lnk.to/sstw_fullsz",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://grandblue-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.134r.com/news/detail.html?id=9335",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/380539/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=288001",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5491",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "裸でどつきあい feat. May'n",
      artistDisplayName: "SEAMO",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "SEAMO", role: "vocals" },
      { name: "May'n", role: "vocals" },
      { name: "Naoki Takada", role: "lyrics" },
      { name: "Naoki Takada", role: "composition" },
      { name: "Giz'Mo(from Jam9)", role: "composition" },
      { name: "Shintaro“Growth”Izutsu", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "_gLM5qjn5Hk",
        type: "creditless_ed",
        channelName: "NBCUniversal Anime/Music"
      }),
      expect.objectContaining({
        youtubeVideoId: "znI3ld4OJco",
        type: "official_audio",
        channelName: "Seamo - Topic"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://avex.lnk.to/GB2_ED",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://grandblue-anime.com/music/", role: "first_party" }),
      expect.objectContaining({ url: "https://seamo.jp/contents/959127", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376306/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=288001",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5491",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Watanare theme details and official videos", () => {
    const anime = curatedAnimeDetails.find((item) =>
      item.slug === "watashi-ga-koibito-ni-nareru-wake-nai-jan-muri-muri-muri-ja-nakatta"
    );
    const opening = anime?.themes.find((theme) =>
      theme.id === "watashi-ga-koibito-ni-nareru-wake-nai-jan-muri-muri-muri-ja-nakatta-op-1"
    );
    const ending = anime?.themes.find((theme) =>
      theme.id === "watashi-ga-koibito-ni-nareru-wake-nai-jan-muri-muri-muri-ja-nakatta-ed-1"
    );

    expect(anime).toMatchObject({
      titleZhHant: "我們不可能成為戀人！絕對不行。（※似乎可行？）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "ムリムリ進化論",
      artistDisplayName: "ナナヲアカリ",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "ナナヲアカリ", role: "vocals" },
      { name: "ナユタセイジ", role: "lyrics" },
      { name: "ナユタセイジ", role: "composition" },
      { name: "やしきん", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "rV_lQGGtPt0",
        type: "creditless_op",
        channelName: "集英社DeNAプロジェクツ 公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "o4OsvOqHnZM",
        type: "full_music_video",
        channelName: "ナナヲアカリ OFFICIAL"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://nanaoakari.lnk.to/wPOGAC",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://www.watanare-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/nanaoakari/info/575468",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376166/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5574",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "迷っちゃうわ",
      artistDisplayName: "フィロソフィーのダンス",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "フィロソフィーのダンス", role: "vocals" },
      { name: "木下龍平", role: "lyrics" },
      { name: "木下龍平", role: "composition" },
      { name: "木下龍平", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "iVAVffggNlw",
        type: "creditless_ed",
        channelName: "集英社DeNAプロジェクツ 公式チャンネル"
      }),
      expect.objectContaining({
        youtubeVideoId: "ueF7bFkHiAQ",
        type: "full_music_video",
        channelName: "フィロソフィーのダンス Official YouTube Channel"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://philosophynodance.lnk.to/Mayocchauwa",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://www.watanare-anime.com/music/", role: "first_party" }),
      expect.objectContaining({
        url: "https://danceforphilosophy.com/news/2025/06/10/5655",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376528/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5574",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Shield Hero season four theme details", () => {
    const anime = curatedAnimeDetails.find((item) =>
      item.slug === "tate-no-yuusha-no-nariagari-season-4"
    );
    const opening = anime?.themes.find((theme) =>
      theme.id === "tate-no-yuusha-no-nariagari-season-4-op-1"
    );
    const ending = anime?.themes.find((theme) =>
      theme.id === "tate-no-yuusha-no-nariagari-season-4-ed-1"
    );

    expect(anime).toMatchObject({
      titleZhHant: "盾之勇者成名錄 Season4 （第4期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Resolution",
      artistDisplayName: "MADKID",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "MADKID", role: "vocals" },
      { name: "LIN", role: "lyrics" },
      { name: "YUKI", role: "lyrics" },
      { name: "敬也-amazuti-", role: "composition" },
      { name: "GAK-amazuti-", role: "composition" },
      { name: "GAK-amazuti-", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "SJxVzZy_hF8",
        type: "creditless_op",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "MJkJ3NVQgO4",
        type: "full_music_video",
        channelName: "MADKID OFFICIAL"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://mdkd.lnk.to/Resolution",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://shieldhero-anime.jp/news/", role: "first_party" }),
      expect.objectContaining({
        url: "https://columbia.jp/madkid/disco/resolution.html",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376402/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=284346",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4965",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "永遠に一回の",
      artistDisplayName: "藤川千愛",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "藤川千愛", role: "vocals" },
      { name: "藤川千愛", role: "lyrics" },
      { name: "竹田祐介(Elements Garden)", role: "composition" },
      { name: "竹田祐介(Elements Garden)", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "SHT6PLktB6o",
        type: "creditless_ed",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "u6gAScS2oiU",
        type: "full_music_video",
        channelName: "藤川千愛"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://chiaifujikawa.lnk.to/eien",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://shieldhero-anime.jp/news/", role: "first_party" }),
      expect.objectContaining({
        url: "https://columbia.jp/artist-info/fujikawachiai/discography/COKM-45814.html",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376247/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=284346",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4965",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Osomatsu season four theme details", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "osomatsu-san-4th-season");
    const opening = anime?.themes.find((theme) => theme.id === "osomatsu-san-4th-season-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "osomatsu-san-4th-season-ed-1");

    expect(anime).toMatchObject({
      titleZhHant: "阿松 （第4期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "おそ松さんのボンバシェー！",
      artistDisplayName: "DA PUMP",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "DA PUMP", role: "vocals" },
      { name: "m.c.A・T", role: "lyrics" },
      { name: "Tarcsi Zoltán Jolly", role: "composition" },
      { name: "Ha-ne(Relic Lyric, inc.)", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "w_qoJn4-DUQ",
        type: "creditless_op",
        channelName: "TVアニメ「おそ松さん」公式"
      }),
      expect.objectContaining({
        youtubeVideoId: "xyUNHFok2C0",
        type: "full_music_video",
        channelName: "DA PUMP"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://dapump.lnk.to/stdl_back2daunity",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://osomatsusan.com/news/detail/?id=1125264",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://dapump-fc.jp/news/detail/915", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376018/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286655",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5269",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "バディ",
      artistDisplayName: "ひとみ from あたらよ＆松野家6兄弟",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "ひとみ from あたらよ", role: "vocals" },
      { name: "松野家6兄弟", role: "vocals" },
      { name: "亀田誠治", role: "lyrics" },
      { name: "亀田誠治", role: "composition" },
      { name: "亀田誠治", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "Kd7GLhMtAXA",
        type: "creditless_ed",
        channelName: "TVアニメ「おそ松さん」公式"
      }),
      expect.objectContaining({
        youtubeVideoId: "TKIdS2GY-rw",
        type: "official_audio",
        channelName: "Release - Topic"
      })
    ]));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://avex.lnk.to/oso4_ED",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://osomatsusan.com/news/detail/?id=1125436",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://osomatsusan.com/bd-dvd-cd/detail/?id=1021053",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/380723/", role: "cross_check" }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=286655",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5269",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("consolidates and preserves the verified New Panty and Stocking theme details", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "new-panty-and-stocking-with-garterbelt");
    const opening = anime?.themes.find((theme) => theme.id === "new-panty-and-stocking-with-garterbelt-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "new-panty-and-stocking-with-garterbelt-ed-1");

    expect(anime).toMatchObject({
      titleZhHant: "新吊帶襪天使",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "Theme of New PANTY ＆ STOCKING",
      artistDisplayName: "TeddyLoid & ☆Taku Takahashi with Ashley & E.V.P",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "Ashley", role: "vocals" },
      { name: "E.V.P", role: "vocals" },
      { name: "☆Taku Takahashi", role: "lyrics" },
      { name: "Ashley", role: "lyrics" },
      { name: "E.V.P", role: "lyrics" },
      { name: "TeddyLoid", role: "composition" },
      { name: "☆Taku Takahashi", role: "composition" },
      { name: "☆Taku Takahashi", role: "arrangement" },
      { name: "TeddyLoid", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual(expect.arrayContaining([
      expect.objectContaining({
        youtubeVideoId: "4AXQpImawSQ",
        type: "creditless_op",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "9tE-PUcb6os",
        type: "creditless_op",
        channelName: "KADOKAWAanime"
      }),
      expect.objectContaining({
        youtubeVideoId: "zCQFqVJiuVg",
        type: "official_audio",
        channelName: "Music of New PANTY & STOCKING with GARTERBELT"
      })
    ]));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://jvcmusic.lnk.to/EP_themeofnew_pantystocking_pre",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://newpsg.com/music/", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376855/", role: "cross_check" }),
      expect.objectContaining({ url: "https://tower.jp/item/6853227", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4368",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "Reckless",
      artistDisplayName: "m-flo loves Adee A.",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "VERBAL", role: "vocals" },
      { name: "Adee A.", role: "vocals" },
      { name: "VERBAL", role: "lyrics" },
      { name: "Adee A.", role: "lyrics" },
      { name: "☆Taku Takahashi", role: "composition" },
      { name: "Adee A.", role: "composition" },
      { name: "☆Taku Takahashi", role: "arrangement" },
      { name: "TAAR", role: "arrangement" },
      { name: "MONJOE", role: "arrangement" }
    ]);
    expect(ending?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "v1daqPsmVFs",
      type: "creditless_ed",
      channelName: "KADOKAWAanime"
    }));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://jvcmusic.lnk.to/EP_themeofnew_pantystocking_pre",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://newpsg.com/music/", role: "first_party" }),
      expect.objectContaining({ url: "https://m-flo.com/news/26", role: "first_party" }),
      expect.objectContaining({ url: "https://www.uta-net.com/song/376608/", role: "cross_check" }),
      expect.objectContaining({ url: "https://tower.jp/item/6853227", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/4368",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified Leviathan theme details without treating the instrumental opening as vocals", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "leviathan");
    const opening = anime?.themes.find((theme) => theme.id === "leviathan-op-1");
    const ending = anime?.themes.find((theme) => theme.id === "leviathan-ed-1");

    expect(anime).toMatchObject({
      titleZhHant: "利維坦號戰記",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "ひとすじの道へ",
      titleRomaji: "Paths Combine",
      artistDisplayName: "久石譲",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "鈴木麻実子", role: "lyrics" },
      { name: "久石譲", role: "composition" },
      { name: "戸田信子", role: "arrangement" },
      { name: "Robin Hoffmann", role: "arrangement" }
    ]);
    expect(opening?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "rUUIjlT_7Dg",
      type: "creditless_op",
      channelName: "Netflix Anime"
    }));
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://music.apple.com/us/album/leviathan-soundtrack-from-the-netflix-series/1821632011",
      linkType: "direct_album"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://about.netflix.com/ja/news/leviathan-takes-flight-on-july-10",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.qobuz.com/us-en/album/leviathan-soundtrack-from-the-netflix-series-nobuko-toda-kazuma-jinnouchi/z8p6zgbtcmwib",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://musicbrainz.org/work/b621aa3d-03ba-4649-b58d-8a73de669241",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5271",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      titleJa: "その先の空へ",
      titleRomaji: "The Sky Ahead",
      artistDisplayName: "久石譲 feat. ダイアナ・ガーネット",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "ダイアナ・ガーネット", role: "vocals" },
      { name: "鈴木麻実子", role: "lyrics" },
      { name: "久石譲", role: "composition" },
      { name: "戸田信子", role: "arrangement" },
      { name: "Robin Hoffmann", role: "arrangement" }
    ]);
    expect(ending?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "OIUgq1qA1n4",
      type: "creditless_ed",
      channelName: "Netflix Anime"
    }));
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://music.apple.com/us/album/leviathan-soundtrack-from-the-netflix-series/1821632011",
      linkType: "direct_album"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://about.netflix.com/ja/news/leviathan-takes-flight-on-july-10",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.qobuz.com/us-en/album/leviathan-soundtrack-from-the-netflix-series-nobuko-toda-kazuma-jinnouchi/z8p6zgbtcmwib",
        role: "cross_check"
      }),
      expect.objectContaining({ url: "https://www.joysound.com/web/search/song/1123344", role: "cross_check" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5271",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves the verified seventh prince season two themes without retaining the season one opening", () => {
    const anime = curatedAnimeDetails.find((item) =>
      item.slug === "tensei-shitara-dai-nana-ouji-datta-node-kimamani-majutsu-wo-kiwamemasu-2nd-season"
    );
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      titleZhHant: "轉生為第七王子，隨心所欲的魔法學習之路 第二季",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "CALLING†",
      artistDisplayName: "樋口楓",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "樋口楓", role: "vocals" },
      { name: "安藤紗々", role: "lyrics" },
      { name: "光増ハジメ(FirstCall)", role: "composition" },
      { name: "光増ハジメ(FirstCall)", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "WZ-xST_J04g",
        type: "creditless_op",
        channelName: "isekai channel @バンダイナムコフィルムワークス"
      }),
      expect.objectContaining({
        youtubeVideoId: "gPBwiuijMQg",
        type: "full_music_video",
        channelName: "樋口楓【にじさんじ所属】"
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=WZ-xST_J04g",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/LZC-3127",
        linkType: "official_landing_page"
      })
    ]));
    expect(opening?.links.some((link) => link.url.includes("Rj0H9Ce1-nI"))).toBe(false);
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://dainanaoji.com/music", role: "first_party" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5294",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=140000",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
    expect(opening?.sources.some((source) => source.url.includes("Rj0H9Ce1-nI"))).toBe(false);

    expect(ending).toMatchObject({
      titleJa: "Meteor",
      artistDisplayName: "岬なこ",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "岬なこ", role: "vocals" },
      { name: "喜介", role: "lyrics" },
      { name: "BOUNCEBACK（Blue Bird's Nest）", role: "composition" },
      { name: "倉内達矢", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "LV0EaKjqMAo",
        type: "creditless_ed",
        channelName: "isekai channel @バンダイナムコフィルムワークス"
      }),
      expect.objectContaining({
        youtubeVideoId: "ZQTbnRejazA",
        type: "full_music_video",
        channelName: "岬なこ Official YouTube Channel"
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=LV0EaKjqMAo",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/LACM-24706d",
        linkType: "official_landing_page"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://dainanaoji.com/music", role: "first_party" }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5294",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=140000",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("preserves all three verified Mikadono sister endings and the opening vocal credit", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "mikadono-sanshimai-wa-angai-choroi");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const endings = anime?.themes.filter((theme) => theme.type === "ED") ?? [];

    expect(anime).toMatchObject({
      titleZhHant: "帝乃三姊妹意外地容易相處。",
      opCount: 1,
      edCount: 3,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    expect(opening).toMatchObject({
      titleJa: "君にふさわしい奇跡",
      artistDisplayName: "日曜日のメゾンデ",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "礼衣", role: "vocals" },
      { name: "くじら", role: "lyrics" },
      { name: "くじら", role: "composition" },
      { name: "くじら", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "FRJkSEKZ0Ss", type: "creditless_op" }),
      expect.objectContaining({ youtubeVideoId: "coZT_PK-nxc", type: "full_music_video" })
    ]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://orcd.co/nichimezo_miracle",
      linkType: "official_landing_page"
    }));

    expect(endings.map((theme) => ({
      id: theme.id,
      titleJa: theme.titleJa,
      artistDisplayName: theme.artistDisplayName
    }))).toEqual([
      {
        id: "mikadono-sanshimai-wa-angai-choroi-ed-1",
        titleJa: "曖昧グラフィティ",
        artistDisplayName: "帝乃一輝（CV.天海由梨奈）"
      },
      {
        id: "mikadono-sanshimai-wa-angai-choroi-ed-2",
        titleJa: "One Road",
        artistDisplayName: "帝乃二琥（CV.古賀葵）"
      },
      {
        id: "mikadono-sanshimai-wa-angai-choroi-ed-3",
        titleJa: "Sunrise Prism",
        artistDisplayName: "帝乃三和（CV.青山吉能）"
      }
    ]);
    expect(endings[0]?.credits).toEqual([
      { name: "帝乃一輝（CV.天海由梨奈）", role: "vocals" },
      { name: "叶人", role: "lyrics" },
      { name: "藤井健太郎", role: "composition" },
      { name: "藤井健太郎", role: "arrangement" }
    ]);
    expect(endings[1]?.credits).toEqual([
      { name: "帝乃二琥（CV.古賀葵）", role: "vocals" },
      { name: "叶人", role: "lyrics" },
      { name: "Meis Clauson", role: "composition" },
      { name: "Meis Clauson", role: "arrangement" }
    ]);
    expect(endings[2]?.credits).toEqual([
      { name: "帝乃三和（CV.青山吉能）", role: "vocals" },
      { name: "叶人", role: "lyrics" },
      { name: "藤井亮太", role: "composition" },
      { name: "谷ナオキ", role: "arrangement" }
    ]);
    expect(endings.map((theme) => theme.videos[0]?.youtubeVideoId)).toEqual([
      "qIeLqPMjk6s",
      "FTsXmDzsBMU",
      "Jh7AAapWJ-A"
    ]);
    for (const ending of endings) {
      expect(ending.videos[0]).toMatchObject({
        type: "creditless_ed",
        channelName: "アニプレックス チャンネル"
      });
      expect(ending.links).toContainEqual(expect.objectContaining({
        url: "https://online.aniplex.co.jp/itemoXHmEHFY.html",
        linkType: "direct_album"
      }));
      expect(ending.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({ url: "https://mikadono.family/music/ed.html", role: "first_party" }),
        expect.objectContaining({
          url: "https://youranimes.tw/animes/5326",
          language: "zh-Hant",
          role: "cross_check"
        }),
        expect.objectContaining({ url: "https://www.uta-net.com/tieup/19263/", role: "cross_check" })
      ]));
      expect(ending.lastVerifiedAt).toBe("2026-08-10");
    }
  });

  it("preserves the complete reviewed Kamitsubaki City episode-ending sequence", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "kamitsubaki-shi-kensetsuchuu");
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const endings = anime?.themes.filter((theme) => theme.type === "ED") ?? [];

    expect(anime).toMatchObject({
      titleZhHant: "神椿市建設中。",
      opCount: 1,
      edCount: 11,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      id: "kamitsubaki-shi-kensetsuchuu-op-1",
      titleJa: "歌姫",
      titleRomaji: "Utahime",
      artistDisplayName: "V.W.P",
      releaseDate: "2025-07-04",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "V.W.P", role: "vocals" },
      { name: "笹川真生", role: "lyrics" },
      { name: "笹川真生", role: "composition" },
      { name: "笹川真生", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "xBQePsKtiDE", type: "creditless_op" }),
      expect.objectContaining({ youtubeVideoId: "yMM8hrAnbTc", type: "full_music_video" })
    ]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://phenomenon-record.lnk.to/DIVA",
      linkType: "official_landing_page"
    }));

    expect(endings.map((theme) => ({
      id: theme.id,
      titleJa: theme.titleJa,
      artistDisplayName: theme.artistDisplayName,
      releaseDate: theme.releaseDate,
      videoId: theme.videos[0]?.youtubeVideoId
    }))).toEqual([
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-1",
        titleJa: "追憶",
        artistDisplayName: "V.W.P",
        releaseDate: "2025-07-09",
        videoId: "m9UFr5RyZeE"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-2",
        titleJa: "BREATHE",
        artistDisplayName: "ヰ世界情緒",
        releaseDate: "2025-07-23",
        videoId: "2ErDR6ku6UY"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-3",
        titleJa: "閃光だった",
        artistDisplayName: "理芽",
        releaseDate: "2025-07-30",
        videoId: "LYnF2X_mnBI"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-4",
        titleJa: "距離。",
        artistDisplayName: "春猿火",
        releaseDate: "2025-08-06",
        videoId: "pn-4lkMEjUQ"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-5",
        titleJa: "シャングリラ",
        artistDisplayName: "幸祜",
        releaseDate: "2025-08-13",
        videoId: "Dqey9ZXH5Mk"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-6",
        titleJa: "ひとえに壊れて",
        artistDisplayName: "花譜",
        releaseDate: "2025-08-20",
        videoId: "VMkIQ3gD494"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-7",
        titleJa: "閃光だった（Rearranged ver.）",
        artistDisplayName: "理芽 × 幸祜",
        releaseDate: "2025-08-27",
        videoId: "wz696q7pdeI"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-8",
        titleJa: "BREATHE（Rearranged ver.）",
        artistDisplayName: "ヰ世界情緒 × 春猿火",
        releaseDate: "2025-09-03",
        videoId: "2QCSQPC829g"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-9",
        titleJa: "欲望",
        artistDisplayName: "V.W.P",
        releaseDate: "2024-03-27",
        videoId: "RVcJUSYS6_8"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-10",
        titleJa: "電脳 sinka ver.",
        artistDisplayName: "V.W.P",
        releaseDate: "2025-09-17",
        videoId: "zWyXgjQJfFU"
      },
      {
        id: "kamitsubaki-shi-kensetsuchuu-ed-11",
        titleJa: "魔女(真) sinka ver.",
        artistDisplayName: "V.W.P",
        releaseDate: "2025-10-01",
        videoId: "ofTllighKyE"
      }
    ]);

    expect(endings[6]?.credits).toEqual([
      { name: "理芽", role: "vocals" },
      { name: "幸祜", role: "vocals" },
      { name: "笹川真生", role: "lyrics" },
      { name: "笹川真生", role: "composition" },
      { name: "朝比奈健人", role: "arrangement" }
    ]);
    expect(endings[7]?.credits).toEqual([
      { name: "ヰ世界情緒", role: "vocals" },
      { name: "春猿火", role: "vocals" },
      { name: "香椎モイミ", role: "lyrics" },
      { name: "香椎モイミ", role: "composition" },
      { name: "朝比奈健人", role: "arrangement" }
    ]);
    expect(endings[8]?.credits).toEqual([
      { name: "V.W.P", role: "vocals" },
      { name: "biz", role: "lyrics" },
      { name: "ZERA", role: "lyrics" },
      { name: "biz", role: "composition" },
      { name: "ZERA", role: "composition" },
      { name: "biz", role: "arrangement" },
      { name: "ZERA", role: "arrangement" },
      { name: "Li-OH", role: "arrangement" }
    ]);
    expect(endings[10]?.credits).toEqual([
      { name: "V.W.P", role: "vocals" },
      { name: "カンザキイオリ", role: "lyrics" },
      { name: "たかやん", role: "lyrics" },
      { name: "カンザキイオリ", role: "composition" },
      { name: "朝比奈健人", role: "arrangement" }
    ]);

    for (const theme of [opening, ...endings]) {
      expect(theme?.videos[0]).toMatchObject({ officialStatus: "official", embeddable: true });
      expect(theme?.lastVerifiedAt).toBe("2026-08-10");
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({ url: "https://kamitsubaki-anime.jp/music/", role: "first_party" }),
        expect.objectContaining({
          url: "https://zh.wikipedia.org/wiki/%E7%A5%9E%E6%A4%BF%E5%B8%82%E5%BB%BA%E8%A8%AD%E4%B8%AD%E3%80%82",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
  });

  it("preserves every episode-specific Santa Claus ending performance", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai"
    );
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const endings = anime?.themes.filter((theme) => theme.type === "ED") ?? [];

    expect(anime).toMatchObject({
      titleZhHant: "青春豬頭少年不會夢到聖誕服女郎",
      opCount: 1,
      edCount: 6,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      titleJa: "スノウドロップ",
      titleRomaji: "Snowdrop",
      artistDisplayName: "Conton Candy",
      releaseDate: "2025-07-06",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "Conton Candy", role: "vocals" },
      { name: "Conton Candy", role: "lyrics" },
      { name: "Conton Candy", role: "composition" },
      { name: "Conton Candy", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "T2dF1HIVEZs", type: "creditless_op" }),
      expect.objectContaining({ youtubeVideoId: "4cBCgc5Gb88", type: "full_music_video" }),
      expect.objectContaining({ youtubeVideoId: "vrW5WU_rcXc", type: "other" })
    ]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://contoncandy.lnk.to/SnowDrop",
      linkType: "official_landing_page"
    }));

    expect(endings.map((theme) => ({
      id: theme.id,
      titleJa: theme.titleJa,
      artistDisplayName: theme.artistDisplayName,
      releaseDate: theme.releaseDate,
      videoId: theme.videos[0]?.youtubeVideoId,
      videoType: theme.videos[0]?.type
    }))).toEqual([
      {
        id: "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-1",
        titleJa: "水平線は僕の古傷 広川卯月 Short Ver.",
        artistDisplayName: "広川卯月（CV.雨宮天）",
        releaseDate: "2025-07-06",
        videoId: "JZX93La1KwM",
        videoType: "creditless_ed"
      },
      {
        id: "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-2",
        titleJa: "水平線は僕の古傷 赤城郁実 Short Ver.",
        artistDisplayName: "赤城郁実（CV.山根綺）",
        releaseDate: "2025-07-27",
        videoId: "C7JnK625UnY",
        videoType: "creditless_ed"
      },
      {
        id: "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-3",
        titleJa: "水平線は僕の古傷 姫路紗良 Short Ver.",
        artistDisplayName: "姫路紗良（CV.小原好美）",
        releaseDate: "2025-08-24",
        videoId: "KB4wQXFBdpg",
        videoType: "creditless_ed"
      },
      {
        id: "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-4",
        titleJa: "水平線は僕の古傷 霧島透子 Short Ver.",
        artistDisplayName: "霧島透子",
        releaseDate: "2025-09-14",
        videoId: "eguA2RhRU9s",
        videoType: "official_audio"
      },
      {
        id: "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-5",
        titleJa: "水平線は僕の古傷 岩見沢寧々 Short Ver.",
        artistDisplayName: "岩見沢寧々（CV.上田麗奈）",
        releaseDate: "2025-09-21",
        videoId: "2FFAGSH5mYE",
        videoType: "creditless_ed"
      },
      {
        id: "seishun-buta-yarou-wa-santa-claus-no-yume-wo-minai-ed-6",
        titleJa: "水平線は僕の古傷",
        artistDisplayName:
          "広川卯月（CV.雨宮天）、赤城郁実（CV.山根綺）、姫路紗良（CV.小原好美）、岩見沢寧々（CV.上田麗奈）",
        releaseDate: "2025-09-24",
        videoId: "d3PyUcXxG6k",
        videoType: "official_audio"
      }
    ]);

    expect(endings[5]?.credits).toEqual([
      { name: "広川卯月（CV.雨宮天）", role: "vocals" },
      { name: "赤城郁実（CV.山根綺）", role: "vocals" },
      { name: "姫路紗良（CV.小原好美）", role: "vocals" },
      { name: "岩見沢寧々（CV.上田麗奈）", role: "vocals" },
      { name: "児玉雨子", role: "lyrics" },
      { name: "カワイヒデヒロ（fox capture plan）", role: "composition" },
      { name: "カワイヒデヒロ（fox capture plan）", role: "arrangement" }
    ]);
    for (const ending of endings) {
      expect(ending.credits).toEqual(expect.arrayContaining([
        { name: "児玉雨子", role: "lyrics" },
        { name: "カワイヒデヒロ（fox capture plan）", role: "composition" },
        { name: "カワイヒデヒロ（fox capture plan）", role: "arrangement" }
      ]));
      expect(ending.videos[0]).toMatchObject({ officialStatus: "official", embeddable: true });
      expect(ending.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({ url: "https://ao-buta.com/santa/", role: "first_party" }),
        expect.objectContaining({
          url: "https://acg.gamer.com.tw/acgDetail.php?s=136745",
          language: "zh-Hant",
          role: "cross_check"
        }),
        expect.objectContaining({
          url: "https://animethemes.moe/anime/seishun_buta_yarou_wa_santa_claus_no_yume_wo_minai",
          role: "cross_check"
        })
      ]));
      expect(ending.lastVerifiedAt).toBe("2026-08-10");
    }
  });

  it("preserves the complete verified Haikara vocal groups and release", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "binan-koukou-chikyuu-bouei-bu-haikara"
    );
    const opening = anime?.themes.find((theme) => theme.type === "OP");
    const ending = anime?.themes.find((theme) => theme.type === "ED");

    expect(anime).toMatchObject({
      titleZhHant: "美男高校地球防衛部HAIKARA！",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      titleJa: "ハイカラ de GO!!",
      titleRomaji: "Haikara de GO!!",
      artistDisplayName: "ハイカラ浪漫団",
      releaseDate: "2025-07-09",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "高野大河", role: "vocals" },
      { name: "長岡龍歩", role: "vocals" },
      { name: "観世智顕", role: "vocals" },
      { name: "小池貴大", role: "vocals" },
      { name: "草野太一", role: "vocals" },
      { name: "hotaru", role: "lyrics" },
      { name: "奥井康介", role: "composition" },
      { name: "奥井康介", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "3QGgv52xJiI", type: "other" }),
      expect.objectContaining({ youtubeVideoId: "L5AiuCQE-BY", type: "other" })
    ]);

    expect(ending).toMatchObject({
      titleJa: "残光 in your eyes",
      titleRomaji: "Zankou in your eyes",
      artistDisplayName: "蛮華羅新鋭隊",
      releaseDate: "2025-07-09",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "前野智昭", role: "vocals" },
      { name: "阿座上洋平", role: "vocals" },
      { name: "山下大輝", role: "vocals" },
      { name: "hotaru", role: "lyrics" },
      { name: "園田健太郎", role: "composition" },
      { name: "園田健太郎", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({ youtubeVideoId: "3QGgv52xJiI", type: "other" })
    ]);

    for (const theme of [opening, ending]) {
      expect(theme?.links).toContainEqual(expect.objectContaining({
        url: "https://lnk.to/boueibuhaikara_OPED",
        linkType: "official_landing_page"
      }));
      expect(theme?.videos[0]).toMatchObject({
        channelName: "美男高校地球防衛部",
        officialStatus: "official",
        embeddable: true
      });
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({ url: "https://boueibu.com/hc/music.html", role: "first_party" }),
        expect.objectContaining({
          url: "https://acgsecrets.hk/anime/1866/",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
  });

  it("preserves both cours of the verified Watari-kun opening and ending catalogue", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "watari-kun-no-xx-ga-houkai-sunzen"
    );

    expect(anime).toMatchObject({
      titleZhHant: "渡同學的××瀕臨崩壞",
      opCount: 2,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    const expectedThemes = [{
      id: "watari-kun-no-xx-ga-houkai-sunzen-op-1",
      type: "OP",
      sequence: 1,
      titleJa: "ゆうれいになりたい",
      titleRomaji: "Yuurei ni Naritai",
      artistDisplayName: "『ユイカ』",
      releaseDate: "2025-07-25",
      linkUrl: "https://yuika.lnk.to/yuureiWE",
      releaseSourceUrl: "https://www.universal-music.co.jp/yuika/news/2025-07-11/",
      credits: [
        { name: "『ユイカ』", role: "vocals" },
        { name: "『ユイカ』", role: "lyrics" },
        { name: "『ユイカ』", role: "composition" },
        { name: "花井諒", role: "arrangement" }
      ],
      videos: [
        { youtubeVideoId: "VWbhpovWyE8", type: "creditless_op" },
        { youtubeVideoId: "jJU6BcFYELw", type: "full_music_video" }
      ]
    }, {
      id: "watari-kun-no-xx-ga-houkai-sunzen-op-2",
      type: "OP",
      sequence: 2,
      titleJa: "ふたりぶん",
      titleRomaji: "Futaribun",
      artistDisplayName: "shallm",
      releaseDate: "2025-10-10",
      linkUrl: "https://www.universal-music.co.jp/shallm/products/uv1as-02043/",
      releaseSourceUrl: "https://www.universal-music.co.jp/shallm/news/2025-10-10/",
      credits: [
        { name: "shallm", role: "vocals" },
        { name: "lia", role: "lyrics" },
        { name: "lia", role: "composition" },
        { name: "Naoki Itai", role: "arrangement" },
        { name: "Yusuke Koshiro", role: "arrangement" }
      ],
      videos: [
        { youtubeVideoId: "spkbC8mqdWk", type: "creditless_op" },
        { youtubeVideoId: "Q7ECS0QU6s8", type: "full_music_video" }
      ]
    }, {
      id: "watari-kun-no-xx-ga-houkai-sunzen-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "愛愛愛愛愛",
      titleRomaji: "Ai Ai Ai Ai Ai",
      artistDisplayName: "PEDRO",
      releaseDate: "2025-07-09",
      linkUrl: "https://lnk.to/PEDRO_love",
      releaseSourceUrl: "https://www.pedro.tokyo/news/detail/941",
      credits: [
        { name: "PEDRO", role: "vocals" },
        { name: "アユニ・D", role: "lyrics" },
        { name: "アユニ・D", role: "composition" },
        { name: "友成空", role: "arrangement" }
      ],
      videos: [
        { youtubeVideoId: "58BggoIdOdA", type: "creditless_ed" },
        { youtubeVideoId: "fv0SRNXpMBQ", type: "full_music_video" }
      ]
    }, {
      id: "watari-kun-no-xx-ga-houkai-sunzen-ed-2",
      type: "ED",
      sequence: 2,
      titleJa: "失敗しないメンヘラの育て方",
      titleRomaji: "Shippai Shinai Menhera no Sodatekata",
      artistDisplayName: "平手友梨奈",
      releaseDate: "2025-10-29",
      linkUrl: "https://hirate-yurina.lnk.to/menheraPR",
      releaseSourceUrl: "https://cloud9pro.co.jp/news/p/12931/",
      credits: [
        { name: "平手友梨奈", role: "vocals" },
        { name: "Takahashi Shiho", role: "lyrics" },
        { name: "MUSOH", role: "composition" },
        { name: "MUSOH", role: "arrangement" }
      ],
      videos: [
        { youtubeVideoId: "LXE81S0RAkE", type: "creditless_ed" },
        { youtubeVideoId: "yU1G7roiczk", type: "full_music_video" }
      ]
    }];

    for (const expected of expectedThemes) {
      const theme = anime?.themes.find((item) => item.id === expected.id);
      expect(theme).toMatchObject({
        id: expected.id,
        type: expected.type,
        sequence: expected.sequence,
        titleJa: expected.titleJa,
        titleRomaji: expected.titleRomaji,
        artistDisplayName: expected.artistDisplayName,
        releaseDate: expected.releaseDate,
        lastVerifiedAt: "2026-08-10"
      });
      expect(theme?.credits).toEqual(expected.credits);
      expect(theme?.videos).toEqual(expected.videos.map((video) => expect.objectContaining({
        ...video,
        officialStatus: "official",
        embeddable: true
      })));
      expect(theme?.links).toContainEqual(expect.objectContaining({
        url: expected.linkUrl,
        linkType: "official_landing_page"
      }));
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({
          url: "https://watarikunxx-anime.com/music/index.html",
          role: "first_party"
        }),
        expect.objectContaining({
          url: "https://youranimes.tw/animes/4594",
          language: "zh-Hant",
          role: "cross_check"
        }),
        expect.objectContaining({ url: expected.releaseSourceUrl, role: "first_party" })
      ]));
    }
  });

  it("preserves the complete weekly DELUXE Finals ending rotation and its opening", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "cardfight-vanguard-divinez-deluxe-kesshou-hen"
    );

    expect(anime).toMatchObject({
      titleZhHant: "卡片戰鬥!! 先導者 Divinez DELUXE決勝篇 （第4期）",
      opCount: 1,
      edCount: 10,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    const expectedThemes = [{
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-op-1",
      type: "OP",
      sequence: 1,
      titleJa: "Feathered Dreams",
      titleRomaji: "Feathered Dreams",
      artistDisplayName: "Morfonica",
      releaseDate: "2025-07-06",
      linkUrl: "https://bmu.lnk.to/Morfonica_FD_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4115/",
      youtubeVideoId: "gr73cn_ny3k",
      videoType: "creditless_op",
      credits: [
        { name: "Morfonica", role: "vocals" },
        { name: "織田あすか(Elements Garden)", role: "lyrics" },
        { name: "藤田淳平(Elements Garden)", role: "composition" },
        { name: "藤田淳平(Elements Garden)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "Drive Your Heart",
      titleRomaji: "Drive Your Heart",
      artistDisplayName: "Poppin'Party",
      releaseDate: "2025-07-13",
      linkUrl: "https://bmu.lnk.to/PoppinParty_DYH_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4120/",
      youtubeVideoId: "xj6tnuuMz-E",
      videoType: "creditless_ed",
      credits: [
        { name: "Poppin'Party", role: "vocals" },
        { name: "中村航", role: "lyrics" },
        { name: "藤永龍太郎(Elements Garden)", role: "composition" },
        { name: "藤永龍太郎(Elements Garden)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-2",
      type: "ED",
      sequence: 2,
      titleJa: "紫炎",
      titleRomaji: "Shien",
      artistDisplayName: "Roselia",
      releaseDate: "2025-07-20",
      linkUrl: "https://bmu.lnk.to/Roselia_VF_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4123/",
      youtubeVideoId: "VxQQKMGmzcE",
      videoType: "tv_size",
      credits: [
        { name: "Roselia", role: "vocals" },
        { name: "織田あすか(Elements Garden)", role: "lyrics" },
        { name: "藤田淳平(Elements Garden)", role: "composition" },
        { name: "藤田淳平(Elements Garden)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-3",
      type: "ED",
      sequence: 3,
      titleJa: "残痕字",
      titleRomaji: "Page",
      artistDisplayName: "MyGO!!!!!",
      releaseDate: "2025-07-27",
      linkUrl: "https://bmu.lnk.to/MyGO_PG_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4124/",
      youtubeVideoId: "RwS6Q2hnIA4",
      videoType: "creditless_ed",
      credits: [
        { name: "MyGO!!!!!", role: "vocals" },
        { name: "藤原優樹(SUPA LOVE)", role: "lyrics" },
        { name: "長谷川大介(SUPA LOVE)", role: "composition" },
        { name: "長谷川大介(SUPA LOVE)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-4",
      type: "ED",
      sequence: 4,
      titleJa: "Color of Us",
      titleRomaji: "Color of Us",
      artistDisplayName: "Morfonica",
      releaseDate: "2025-08-03",
      linkUrl: "https://bmu.lnk.to/Morfonica_CoU_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4126/",
      youtubeVideoId: "1QCacwd8HQE",
      videoType: "creditless_ed",
      credits: [
        { name: "Morfonica", role: "vocals" },
        { name: "織田あすか(Elements Garden)", role: "lyrics" },
        { name: "近藤世真(Elements Garden)", role: "composition" },
        { name: "近藤世真(Elements Garden)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-5",
      type: "ED",
      sequence: 5,
      titleJa: "スタ〜リング ☆じぶん☆",
      titleRomaji: "Starring Jibun",
      artistDisplayName: "ハロー、ハッピーワールド！",
      releaseDate: "2025-08-10",
      linkUrl: "https://bmu.lnk.to/HHW_SM_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4134/",
      youtubeVideoId: "qYtFE_XRFXA",
      videoType: "creditless_ed",
      credits: [
        { name: "ハロー、ハッピーワールド！", role: "vocals" },
        { name: "織田あすか(Elements Garden)", role: "lyrics" },
        { name: "藤間仁(Elements Garden)", role: "composition" },
        { name: "藤間仁(Elements Garden)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-6",
      type: "ED",
      sequence: 6,
      titleJa: "スキ×すき×カラフリィ",
      titleRomaji: "Suki x Suki x Colorfully",
      artistDisplayName: "Pastel＊Palettes",
      releaseDate: "2025-08-24",
      linkUrl: "https://bmu.lnk.to/PastelPalettes_SC_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4138/",
      youtubeVideoId: "VADmXjRvxfo",
      videoType: "creditless_ed",
      credits: [
        { name: "Pastel＊Palettes", role: "vocals" },
        { name: "織田あすか(Elements Garden)", role: "lyrics" },
        { name: "岩橋星実(Elements Garden)", role: "composition" },
        { name: "岩橋星実(Elements Garden)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-7",
      type: "ED",
      sequence: 7,
      titleJa: "真夜中遊園地",
      titleRomaji: "Mayonaka Yuuenchi",
      artistDisplayName: "夢限大みゅーたいぷ",
      releaseDate: "2025-08-31",
      linkUrl: "https://bmu.lnk.to/yumemita_MY_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4139/",
      youtubeVideoId: "xblcm6pDbJk",
      videoType: "tv_size",
      credits: [
        { name: "夢限大みゅーたいぷ", role: "vocals" },
        { name: "烏屋茶房", role: "lyrics" },
        { name: "哥丸雄貴", role: "composition" },
        { name: "哥丸雄貴", role: "arrangement" },
        { name: "堀江晶太", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-8",
      type: "ED",
      sequence: 8,
      titleJa: "'FIGHT' ADDICT",
      titleRomaji: "'FIGHT' ADDICT",
      artistDisplayName: "RAISE A SUILEN",
      releaseDate: "2025-09-07",
      linkUrl: "https://bmu.lnk.to/RAS_FA_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4143/",
      youtubeVideoId: "nYHPbzzImlU",
      videoType: "tv_size",
      credits: [
        { name: "RAISE A SUILEN", role: "vocals" },
        { name: "織田あすか(Elements Garden)", role: "lyrics" },
        { name: "上松範康(Elements Garden)", role: "composition" },
        { name: "菊田大介(Elements Garden)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-9",
      type: "ED",
      sequence: 9,
      titleJa: "Part of the Life",
      titleRomaji: "Part of the Life",
      artistDisplayName: "Afterglow",
      releaseDate: "2025-09-21",
      linkUrl: "https://bmu.lnk.to/Afterglow_PotL_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4149/",
      youtubeVideoId: "wIgHxTWqeQg",
      videoType: "tv_size",
      credits: [
        { name: "Afterglow", role: "vocals" },
        { name: "織田あすか(Elements Garden)", role: "lyrics" },
        { name: "都丸椋太(Elements Garden)", role: "composition" },
        { name: "都丸椋太(Elements Garden)", role: "arrangement" }
      ]
    }, {
      id: "cardfight-vanguard-divinez-deluxe-kesshou-hen-ed-10",
      type: "ED",
      sequence: 10,
      titleJa: "‘S/’ The Way",
      titleRomaji: "‘S/’ The Way",
      artistDisplayName: "Ave Mujica",
      releaseDate: "2025-09-28",
      linkUrl: "https://bmu.lnk.to/AveMujica_Stw_TVwe",
      releaseSourceUrl: "https://bang-dream.com/discographies/4152/",
      youtubeVideoId: "VgO1a_9h8Z8",
      videoType: "tv_size",
      credits: [
        { name: "Ave Mujica", role: "vocals" },
        { name: "Diggy-MO’", role: "lyrics" },
        { name: "Diggy-MO’", role: "composition" },
        { name: "木下龍平(SUPA LOVE)", role: "composition" },
        { name: "Diggy-MO’", role: "arrangement" },
        { name: "木下龍平(SUPA LOVE)", role: "arrangement" }
      ]
    }];

    expect(anime?.themes.map((theme) => theme.id)).toEqual(expectedThemes.map((theme) => theme.id));
    for (const expected of expectedThemes) {
      const theme = anime?.themes.find((item) => item.id === expected.id);
      expect(theme).toMatchObject({
        id: expected.id,
        type: expected.type,
        sequence: expected.sequence,
        titleJa: expected.titleJa,
        titleRomaji: expected.titleRomaji,
        artistDisplayName: expected.artistDisplayName,
        releaseDate: expected.releaseDate,
        lastVerifiedAt: "2026-08-10"
      });
      expect(theme?.credits).toEqual(expected.credits);
      expect(theme?.videos).toEqual([expect.objectContaining({
        youtubeVideoId: expected.youtubeVideoId,
        type: expected.videoType,
        officialStatus: "official",
        embeddable: true
      })]);
      expect(theme?.links).toContainEqual(expect.objectContaining({
        url: expected.linkUrl,
        linkType: "official_landing_page"
      }));
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({
          url: "https://anime.cf-vanguard.com/vgd/music/finals/",
          role: "first_party"
        }),
        expect.objectContaining({
          url: "https://youranimes.tw/animes/5826",
          language: "zh-Hant",
          role: "cross_check"
        }),
        expect.objectContaining({ url: expected.releaseSourceUrl, role: "first_party" })
      ]));
    }
  });

  it("preserves both Turkey openings and every episode-ending replacement", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "turkey");

    expect(anime).toMatchObject({
      titleZhHant: "保齡球少女！",
      opCount: 2,
      edCount: 5,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });

    const expectedThemes = [{
      id: "turkey-op-1",
      type: "OP",
      sequence: 1,
      titleJa: "ヒャクニチソウ",
      titleRomaji: "Hyakunichisou",
      artistDisplayName: "長野県一刻館高校ボウリング部",
      releaseDate: "2025-07-09",
      linkUrl: "https://lnk.to/Hyakunichisou",
      sourcePageUrl: "https://turkey-project.com/music/",
      releaseSourceUrl: "https://turkey-project.com/news/406/",
      youtubeVideoId: "ZUcsckCrr7U",
      videoType: "creditless_op",
      credits: [
        { name: "長野県一刻館高校ボウリング部", role: "vocals" },
        { name: "北澤ゆうほ", role: "lyrics" },
        { name: "北澤ゆうほ", role: "composition" },
        { name: "川口圭太", role: "arrangement" }
      ]
    }, {
      id: "turkey-op-2",
      type: "OP",
      sequence: 2,
      titleJa: "ヒャクニチソウ",
      titleRomaji: "Hyakunichisou",
      artistDisplayName: "戸倉家の姫たち",
      releaseDate: "2025-09-24",
      linkUrl: "https://lnk.to/SideProject03",
      sourcePageUrl: "https://turkey-project.com/music/",
      releaseSourceUrl: "https://turkey-project.com/music/",
      youtubeVideoId: "-V4zQpTOVJw",
      videoType: "creditless_op",
      credits: [
        { name: "戸倉家の姫たち", role: "vocals" },
        { name: "北澤ゆうほ", role: "lyrics" },
        { name: "北澤ゆうほ", role: "composition" },
        { name: "川口圭太", role: "arrangement" }
      ]
    }, {
      id: "turkey-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "もしも",
      titleRomaji: "Moshimo",
      artistDisplayName: "太陽と踊れ月夜に唄え",
      releaseDate: "2025-07-16",
      linkUrl: "https://taiyotsukiyo.lnk.to/moshimo",
      sourcePageUrl: "https://turkey-project.com/music/musiced/",
      releaseSourceUrl: "https://www.ponycanyon.co.jp/music/PCSP000006657",
      youtubeVideoId: "2F2UrZJHUug",
      videoType: "creditless_ed",
      credits: [
        { name: "太陽と踊れ月夜に唄え", role: "vocals" },
        { name: "Akki", role: "lyrics" },
        { name: "Akki", role: "composition" },
        { name: "Akki", role: "arrangement" }
      ]
    }, {
      id: "turkey-ed-2",
      type: "ED",
      sequence: 2,
      titleJa: "フラッシュバック",
      titleRomaji: "Flashback",
      artistDisplayName: "Q.I.S.(北澤ゆうほ)",
      releaseDate: "2025-07-30",
      linkUrl: "https://lnk.to/Q.I.S._flashback",
      sourcePageUrl: "https://turkey-project.com/music/musicedlist/",
      releaseSourceUrl: "https://turkey-project.com/music/musicedlist/",
      youtubeVideoId: "Q21T1S5SctM",
      videoType: "other",
      credits: [
        { name: "Q.I.S.(北澤ゆうほ)", role: "vocals" },
        { name: "北澤ゆうほ", role: "lyrics" },
        { name: "北澤ゆうほ", role: "composition" },
        { name: "北澤ゆうほ", role: "arrangement" },
        { name: "川口圭太", role: "arrangement" }
      ]
    }, {
      id: "turkey-ed-3",
      type: "ED",
      sequence: 3,
      titleJa: "sincerity flower",
      titleRomaji: "sincerity flower",
      artistDisplayName: "結城アイラ",
      releaseDate: "2025-08-13",
      linkUrl: "https://lnk.to/sincerityflower",
      sourcePageUrl: "https://turkey-project.com/music/musicedlist/",
      releaseSourceUrl: "https://turkey-project.com/music/musicedlist/",
      youtubeVideoId: "urmtWrN2CXA",
      videoType: "other",
      credits: [
        { name: "結城アイラ", role: "vocals" },
        { name: "結城アイラ", role: "lyrics" },
        { name: "結城アイラ", role: "composition" },
        { name: "谷ナオキ", role: "arrangement" }
      ]
    }, {
      id: "turkey-ed-4",
      type: "ED",
      sequence: 4,
      titleJa: "Strike freedom!",
      titleRomaji: "Strike freedom!",
      artistDisplayName: "アザミ",
      releaseDate: "2025-08-20",
      linkUrl: "https://lnk.to/Strikefreedom",
      sourcePageUrl: "https://turkey-project.com/music/musicedlist/",
      releaseSourceUrl: "https://turkey-project.com/music/musicedlist/",
      youtubeVideoId: "wkGN3vyNYEQ",
      videoType: "other",
      credits: [
        { name: "アザミ", role: "vocals" },
        { name: "アザミ", role: "lyrics" },
        { name: "アザミ", role: "composition" },
        { name: "アザミ", role: "arrangement" }
      ]
    }, {
      id: "turkey-ed-5",
      type: "ED",
      sequence: 5,
      titleJa: "夏の住処",
      titleRomaji: "Natsu no Sumika",
      artistDisplayName: "やなぎなぎ",
      releaseDate: "2025-09-03",
      linkUrl: "https://lnk.to/natsunosumika",
      sourcePageUrl: "https://turkey-project.com/music/musicedlist/",
      releaseSourceUrl: "https://yanaginagi.net/information/turkey_song/",
      youtubeVideoId: "UczUQ-B912M",
      videoType: "other",
      credits: [
        { name: "やなぎなぎ", role: "vocals" },
        { name: "やなぎなぎ", role: "lyrics" },
        { name: "やなぎなぎ", role: "composition" },
        { name: "やなぎなぎ", role: "arrangement" }
      ]
    }];

    expect(anime?.themes.map((theme) => theme.id)).toEqual(expectedThemes.map((theme) => theme.id));
    for (const expected of expectedThemes) {
      const theme = anime?.themes.find((item) => item.id === expected.id);
      expect(theme).toMatchObject({
        id: expected.id,
        type: expected.type,
        sequence: expected.sequence,
        titleJa: expected.titleJa,
        titleRomaji: expected.titleRomaji,
        artistDisplayName: expected.artistDisplayName,
        releaseDate: expected.releaseDate,
        lastVerifiedAt: "2026-08-10"
      });
      expect(theme?.credits).toEqual(expected.credits);
      expect(theme?.videos).toEqual([expect.objectContaining({
        youtubeVideoId: expected.youtubeVideoId,
        type: expected.videoType,
        channelName: "ぽにきゃん-Anime PONY CANYON",
        officialStatus: "official",
        embeddable: true
      })]);
      expect(theme?.links).toContainEqual(expect.objectContaining({
        url: expected.linkUrl,
        linkType: "official_landing_page"
      }));
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({ url: expected.sourcePageUrl, role: "first_party" }),
        expect.objectContaining({ url: expected.releaseSourceUrl, role: "first_party" }),
        expect.objectContaining({
          url: "https://youranimes.tw/animes/4078",
          language: "zh-Hant",
          role: "cross_check"
        }),
        expect.objectContaining({
          url: "https://zh.wikipedia.org/wiki/%E4%BF%9D%E9%BD%A1%E7%90%83%E5%B0%91%E5%A5%B3%EF%BC%81",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
  });

  it("adds the sourced Neko Konogoro short-anime theme without inventing an ending", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "neko-konogoro-tenka-toitsu-hen"
    );
    const opening = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "ネコこのゴロ～天下統一編～",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(opening).toMatchObject({
      id: "neko-konogoro-tenka-toitsu-hen-op-1",
      type: "OP",
      sequence: 1,
      titleJa: "萌やせ！ネコ魂",
      titleRomaji: "Moyase! Neko Damashii",
      artistDisplayName: "ゴロ助（CV：逢来りん）",
      releaseDate: "2025-08-14",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "ゴロ助（CV：逢来りん）", role: "vocals" },
      { name: "STUDY優作", role: "lyrics" },
      { name: "中西ゆういちろう", role: "composition" }
    ]);
    expect(opening?.videos).toEqual([expect.objectContaining({
      youtubeVideoId: "_f_tbeoXuH4",
      title: "ゴロ助(CV：逢来りん)「萌やせ！ネコ魂」(Full ver.)MV/ネコこのゴロ～天下統一編～",
      type: "full_music_video",
      channelName: "エクサインターナショナル",
      officialStatus: "licensed",
      embeddable: true
    })]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://linkco.re/R8VfCUUr",
      linkType: "official_landing_page"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.atpress.ne.jp/news/439592",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://linkco.re/R8VfCUUr",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/album/moe-cat-spirit-single/1832975750",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5912",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://anison-alacarte.hatenablog.com/entry/2025/08/17/090000",
        role: "cross_check"
      })
    ]));
  });

  it("adds the sourced Crypto Ninja Sakuya third-season reused opening without inventing an ending", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "shinobanai-crypto-ninja-sakuya-san-no-maki"
    );
    const opening = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "Crypto Ninja 咲耶 參之卷 （第3期）",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(opening).toMatchObject({
      id: "shinobanai-crypto-ninja-sakuya-san-no-maki-op-1",
      type: "OP",
      sequence: 1,
      titleJa: "クリプトニンジャ咲耶",
      artistDisplayName: "宮原永海",
      releaseDate: "2023-11-15",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "宮原永海", role: "vocals" },
      { name: "妹尾達也", role: "lyrics" },
      { name: "妹尾達也", role: "composition" }
    ]);
    expect(opening?.videos).toEqual([expect.objectContaining({
      youtubeVideoId: "RMX-mfwzOaA",
      title: "【番組オープニング映像】『忍ばない！クリプトニンジャ咲耶』【10月3日（火）放送スタート！】",
      type: "tv_size",
      channelName: "ファンワークス",
      officialStatus: "official",
      embeddable: true
    })]);
    expect(opening?.links).toContainEqual(expect.objectContaining({
      url: "https://music.apple.com/jp/song/1715232588",
      linkType: "direct_track"
    }));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://fanworks.co.jp/news/cn231110/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.allcinema.net/cinema/396974",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/jp/song/1715232588",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5904",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("adds Gelpiyo's sourced reused ending without treating it as a 2026 release", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "gelpiyo");
    const ending = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "果凍小雞",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(ending).toMatchObject({
      id: "gelpiyo-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "delulu",
      artistDisplayName: "冨岡 愛",
      releaseDate: "2025-09-03",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "冨岡 愛", role: "vocals" },
      { name: "冨岡 愛", role: "lyrics" },
      { name: "冨岡 愛", role: "composition" },
      { name: "MANABOON", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "21RP0XW0nD4",
        title: "【TVアニメ『ゲルぴよ』】2026年1月21日(水) 21:54〜 TOKYO MX1にて放送スタートピヨ！",
        type: "other",
        channelName: "TOKYO MX",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "tVdQqZTsNOY",
        title: "冨岡 愛 - delulu (Music Video)",
        type: "full_music_video",
        channelName: "Tomioka Ai",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://tomiokaai.lnk.to/delulu",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/delulu/1834861290?i=1834861291",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://s.mxtv.jp/anime/gelpiyo/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=21RP0XW0nD4",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/delulu/1834861290?i=1834861291",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/379192/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://www.dcard.tw/@rickylin0121/post/261118194/b/1",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("classifies Candy Caries' sourced theme as an ending from the licensed episode credits", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "candy-caries");
    const ending = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "CANDY CARIES 蛀在糖糖裡",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(ending).toMatchObject({
      id: "candy-caries-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "Telepathy",
      artistDisplayName: "IS:SUE",
      releaseDate: "2026-05-18",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "IS:SUE", role: "vocals" },
      { name: "Chiaki Nagasawa", role: "lyrics" },
      { name: "Saori Nagano", role: "lyrics" },
      { name: "Takahito Nakamura", role: "lyrics" },
      { name: "Konomi Fujimura", role: "lyrics" },
      { name: "Rose Blueming", role: "lyrics" },
      { name: "Hiyori Nara", role: "lyrics" },
      { name: "N1K0", role: "lyrics" },
      { name: "Chiaki Nagasawa", role: "composition" },
      { name: "Saori Nagano", role: "composition" },
      { name: "Takahito Nakamura", role: "composition" },
      { name: "Takahito Nakamura", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "wM3E9LXHmu0",
        type: "other",
        channelName: "Candy Caries",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "PBIG3mjkLfU",
        type: "full_music_video",
        channelName: "IS:SUE",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "_xbVORxvC5M",
        type: "other",
        channelName: "IS:SUE",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "Ql5mn3Uy_oM",
        type: "other",
        channelName: "Muse木棉花-HK",
        officialStatus: "licensed",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://is-sue.lnk.to/QUARTET_AL",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/telepathy/1891308308?i=1891308582",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.candycaries.com/news/detail.php?id=23177",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://is-sue.jp/news/detail/655",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/telepathy/1891308308?i=1891308582",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/393103/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=Ql5mn3Uy_oM",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("adds Kumarba season 3's sourced reused opening without treating it as a 2026 release", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "kumarba-season-3"
    );
    const opening = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "Kumarba",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(opening).toMatchObject({
      id: "kumarba-season-3-op-1",
      type: "OP",
      sequence: 1,
      titleJa: "こんにちワールド",
      titleRomaji: "Konnichi World",
      artistDisplayName: "DJクマーバ（CV：ファイルーズあい）",
      releaseDate: "2024-04-06",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "DJクマーバ（CV：ファイルーズあい）", role: "vocals" },
      { name: "田村歩美", role: "lyrics" },
      { name: "田村歩美", role: "composition" },
      { name: "田村歩美", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "r42sa3uFJMk",
        type: "creditless_op",
        channelName: "クマーバチャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "QYuEX3Q-Tgw",
        type: "full_music_video",
        channelName: "クマーバチャンネル",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://lnk.to/dj_kw",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/konnichi-world/1736250595?i=1736250600",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://kumarba.com/pages/tv-anime",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://kumarba.com/blogs/news/131",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/konnichi-world/1736250595?i=1736250600",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/352581/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=r42sa3uFJMk",
        role: "first_party"
      })
    ]));
  });

  it("adds the sourced Pan no Akachan TV ending without carrying over the 2024 short-film song", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "pan-no-akachan-tv"
    );
    const ending = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "麵包寶寶",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(anime?.themes.map((theme) => theme.titleJa)).not.toContain("BABIES OF BREAD");
    expect(ending).toMatchObject({
      id: "pan-no-akachan-tv-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "we are エケチャン！",
      artistDisplayName: "Mashinomi",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.releaseDate).toBeUndefined();
    expect(ending?.credits).toEqual([
      { name: "Mashinomi", role: "vocals" },
      { name: "Mashinomi", role: "lyrics" },
      { name: "Mashinomi", role: "composition" },
      { name: "maigoishi", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([expect.objectContaining({
      youtubeVideoId: "CkIJQ9chwpA",
      title: "『パンの赤ちゃん』第1話「ごめんね」",
      type: "other",
      channelName: "パンの赤ちゃん【公式】 / BABIES OF BREAD",
      officialStatus: "official",
      embeddable: true
    })]);
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.ktv.jp/pan-aka-tv/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://prtimes.jp/main/html/rd/p/000000542.000024007.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.oricon.co.jp/anime/1114/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=CkIJQ9chwpA",
        role: "first_party"
      })
    ]));
  });

  it("classifies the sourced Nezumi-kun theme as an ending from its official creditless video", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "nezumi-kun-no-chokki-tv"
    );
    const ending = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "鼠小弟的小背心",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(ending).toMatchObject({
      id: "nezumi-kun-no-chokki-tv-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "グッドラック！マイフレンド feat.ムロツヨシ & さかなクン",
      artistDisplayName: "東京スカパラダイスオーケストラ",
      releaseDate: "2026-04-08",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "ムロツヨシ", role: "vocals" },
      { name: "茂木欣一", role: "vocals" },
      { name: "谷中敦", role: "lyrics" },
      { name: "NARGO", role: "composition" },
      { name: "東京スカパラダイスオーケストラ", role: "arrangement" },
      { name: "さかなクン（ソプラノサックス）", role: "other" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "duNgBS-ytF4",
        title: "アニメ「ねずみくんのチョッキ」ノンクレジットED",
        type: "creditless_ed",
        channelName: "ポプラ社",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "UcqQ8xO468s",
        title: "グッドラック！マイフレンド feat.ムロツヨシ & さかなクン / TOKYO SKA PARADISE ORCHESTRA",
        type: "full_music_video",
        channelName: "TOKYO SKA PARADISE ORCHESTRA OFFICIAL",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "K8l-wjqbt0Q",
        title: "グッドラック！マイフレンド feat.ムロツヨシ & さかなクン [ダンスビデオ] / TOKYO SKA PARADISE ORCHESTRA",
        type: "other",
        channelName: "TOKYO SKA PARADISE ORCHESTRA OFFICIAL",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://tokyoska.lnk.to/GoodLuckMyFriend",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.poplar.co.jp/pr/anime-nezumikun/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://avexnet.jp/release/1021455",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.avex.com.tw/Artist/artist.asp?ArtistCode=TKSKAJ",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://anison.online/anime/5626",
        role: "cross_check"
      })
    ]));
  });

  it("adds the sourced Odekake Kozame season 2 ending without carrying over season 1 music", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "odekake-kozame-season-2"
    );
    const ending = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "小鯊鯊出門去",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(ending).toMatchObject({
      id: "odekake-kozame-season-2-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "おでかけ",
      artistDisplayName: "子ザメちゃん（CV：花澤香菜）",
      releaseDate: "2026-05-30",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "子ザメちゃん（CV：花澤香菜）", role: "vocals" },
      { name: "子ザメちゃん", role: "lyrics" },
      { name: "橘亮祐", role: "composition" },
      { name: "篠崎あやと", role: "composition" },
      { name: "橘亮祐", role: "arrangement" },
      { name: "篠崎あやと", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "qsVhOeicRR4",
        title: "アニメ『おでかけ子ザメ』シーズン2 ノンクレジットED映像",
        type: "creditless_ed",
        channelName: "アニメ『おでかけ子ザメ』チャンネル",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://nex-tone.link/hpkxzLKJF",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://odekake-kozame.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://odekake-kozame.com/news/?id=20260412_1&mode=detail",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/6199",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("adds the sourced Shou 3 Ashibe ending without misclassifying the generic theme-song label", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "shou-3-ashibe-qq-goma-chan"
    );
    const ending = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "小3阿貝 QQ小芝麻",
      opCount: 0,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes).toHaveLength(1);
    expect(ending).toMatchObject({
      id: "shou-3-ashibe-qq-goma-chan-ed-1",
      type: "ED",
      sequence: 1,
      titleJa: "CUE CUE CUTE",
      artistDisplayName: "Hey! Say! JUMP",
      releaseDate: "2026-06-22",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "Hey! Say! JUMP", role: "vocals" },
      { name: "三島想平（cinema staff）", role: "lyrics" },
      { name: "三島想平（cinema staff）", role: "composition" },
      { name: "三島想平（cinema staff）", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "42sALQ9hzKI",
        title: "『小3アシベ QQゴマちゃん』歌詞付きのノンクレジットエンディング映像｜Hey! Say! JUMP「CUE CUE CUTE」",
        type: "creditless_ed",
        channelName: "アニメ小3アシベQQゴマちゃん公式チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "Ljs6_vRkYVg",
        title: "Hey! Say! JUMP - CUE CUE CUTE [Official Music Video]",
        type: "full_music_video",
        channelName: "Hey! Say! JUMP",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "ezbMU3U5omI",
        title: "「CUE CUE CUTE」×「小３アシベ QQゴマちゃん」Special Collaboration Video",
        type: "other",
        channelName: "Hey! Say! JUMP",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toContainEqual(expect.objectContaining({
      url: "https://heysayjump.lnk.to/CCC",
      linkType: "official_landing_page"
    }));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://qq-gomachan.com/music/cue-cue-cute/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://web.storm-labels.co.jp/s/st/discography/LCDA-0403",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/6139",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("corrects the verified Punirunes Puni 3 theme to an opening without inventing a release", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "punirunes-puni-3");
    const opening = anime?.themes[0];

    expect(anime).toMatchObject({
      titleZhHant: "軟軟噗尼寵物小精靈 噗尼3 （第3期）",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(opening).toMatchObject({
      id: "punirunes-puni-3-op-1",
      type: "OP",
      sequence: 1,
      titleJa: "ぷにぷにぷにるんず ぷにックスバージョン",
      titleRomaji: "Puni Puni Punirunes Punix Version",
      artistDisplayName: "ななひら",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.releaseDate).toBeUndefined();
    expect(opening?.credits).toEqual([
      { name: "ななひら", role: "vocals" },
      { name: "篠崎あやと", role: "lyrics" },
      { name: "橘亮祐", role: "lyrics" },
      { name: "篠崎あやと", role: "composition" },
      { name: "橘亮祐", role: "composition" },
      { name: "篠崎あやと", role: "arrangement" },
      { name: "橘亮祐", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "36fLHF_4pmw",
        title: "ぷにぷにぷにるんず フルマックスバージョン",
        type: "other",
        channelName: "ななひら / Nanahira",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "6ygzjl8U2vI",
        type: "other",
        channelName: "クマーバチャンネル",
        officialStatus: "licensed",
        embeddable: true
      })
    ]);
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.takaratomy.co.jp/product_release/pdf/p250530.pdf",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.tv-tokyo.co.jp/anime/song/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://youranimes.tw/animes/5885",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
    expect(opening?.sources.some(
      (source) => source.url === "https://animethemes.moe/anime/punirunes_puni_3"
    )).toBe(false);
    expect(anime?.sources.some(
      (source) => source.url === "https://animethemes.moe/anime/punirunes_puni_3"
    )).toBe(false);
  });

  it("preserves the verified second-season credits for Youjo Senki", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "youjo-senki-2");
    expect(anime?.titleJa).toBe("幼女戦記Ⅱ");
    expect(anime?.titleZhHant).toBe("幼女戰記Ⅱ");
    expect(anime?.themes[0]?.credits).toEqual(expect.arrayContaining([
      { name: "MYTH & ROID", role: "lyrics" },
      { name: "MYTH & ROID", role: "composition" },
      { name: "MYTH & ROID", role: "arrangement" }
    ]));
    expect(anime?.themes[1]?.credits).toEqual(expect.arrayContaining([
      { name: "hotaru", role: "lyrics" },
      { name: "中野雅之", role: "composition" },
      { name: "中野雅之", role: "arrangement" }
    ]));
  });

  it("includes the verified Mushoku Tensei III creditless ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "mushoku-tensei-3");
    const ending = anime?.themes.find((item) => item.id === "mushoku-tensei-3-ed-1");

    expect(anime?.hasOfficialVideo).toBe(true);
    expect(ending?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "UKcJqQqiXq0",
      type: "creditless_ed",
      officialStatus: "official"
    }));
  });

  it("publishes one sourced opening and ending for Oshi no Ko season 3 without duplicating the artist alias", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "oshi-no-ko-3rd-season");
    const opening = anime?.themes.find((item) => item.id === "oshi-no-ko-3rd-season-op-1");
    const ending = anime?.themes.find((item) => item.id === "oshi-no-ko-3rd-season-ed-1");

    expect(anime).toMatchObject({
      titleZhHant: "【我推的孩子】 （第3期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "oshi-no-ko-3rd-season-op-1",
      "oshi-no-ko-3rd-season-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "TEST ME",
      artistDisplayName: "ちゃんみな",
      releaseDate: "2026-01-14",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "ちゃんみな", role: "vocals" },
      { name: "ちゃんみな", role: "lyrics" },
      { name: "ちゃんみな", role: "composition" },
      { name: "Ryosuke \"Dr. R\" Sakai", role: "composition" },
      { name: "Ryosuke \"Dr. R\" Sakai", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "QgIQbeRzkkc",
        type: "creditless_op",
        channelName: "Anime 【OSHI NO KO】 Official Channel",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "hQ4-H-nNNz4",
        type: "full_music_video",
        channelName: "ちゃんみな [CHANMINA]",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://nolabel.lnk.to/TEST_ME",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/test-me/1866862251?i=1866862252",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://ichigoproduction.com/Season3/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ichigoproduction.com/Season3/news/index00670000.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://sonymusic.com.tw/album/test-me/",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://times.abema.tv/zt/articles/-/10221525",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "セレナーデ",
      titleRomaji: "Serenade",
      artistDisplayName: "なとり",
      releaseDate: "2026-01-21",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "なとり", role: "vocals" },
      { name: "なとり", role: "lyrics" },
      { name: "なとり", role: "composition" },
      { name: "ツミキ", role: "arrangement" },
      { name: "なとり", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "ZWvFR00t-NE",
        type: "creditless_ed",
        channelName: "Anime 【OSHI NO KO】 Official Channel",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "gNg2Qw5R-Q4",
        type: "full_music_video",
        channelName: "なとり / natori",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://natori.lnk.to/Serenade",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/%E3%82%BB%E3%83%AC%E3%83%8A%E3%83%BC%E3%83%87/1871971722?i=1871971723",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://ichigoproduction.com/Season3/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/natori/info/578563",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/natori/info/580062",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/%E3%82%BB%E3%83%AC%E3%83%8A%E3%83%BC%E3%83%87/1871971722?i=1871971723",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://times.abema.tv/zt/articles/-/10221525",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("consolidates Frieren season 2's opening videos while preserving its final-episode special ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "sousou-no-frieren-2nd-season");
    const opening = anime?.themes.find((item) => item.id === "sousou-no-frieren-2nd-season-op-1");
    const ending = anime?.themes.find((item) => item.id === "sousou-no-frieren-2nd-season-ed-1");
    const specialEnding = anime?.themes.find((item) => item.id === "sousou-no-frieren-2nd-season-ed-2");

    expect(anime).toMatchObject({
      opCount: 1,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "sousou-no-frieren-2nd-season-op-1",
      "sousou-no-frieren-2nd-season-ed-1",
      "sousou-no-frieren-2nd-season-ed-2"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "lulu.",
      artistDisplayName: "Mrs. GREEN APPLE",
      releaseDate: "2026-01-12",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "Mrs. GREEN APPLE", role: "vocals" },
      { name: "大森元貴", role: "lyrics" },
      { name: "大森元貴", role: "composition" },
      { name: "兼松 衆", role: "arrangement" },
      { name: "大森元貴", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "C0BG3B7aksU",
        type: "creditless_op",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "-kpHrSd2wOc",
        type: "other",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "MjeiIal1ZR0",
        type: "full_music_video",
        channelName: "Mrs. GREEN APPLE",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://lnk.to/MGA_lulu_0112",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/lulu/1867354077?i=1867354081",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://frieren-anime.jp/music/2nd/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://frieren-anime.jp/news/4710/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/lulu/1867354077?i=1867354081",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=141647",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "The Story of Us",
      artistDisplayName: "milet",
      releaseDate: "2026-01-16",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "milet", role: "vocals" },
      { name: "milet", role: "lyrics" },
      { name: "milet", role: "composition" },
      { name: "野村陽一郎", role: "composition" },
      { name: "Evan Call", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "FY4Bx2qtkRM",
        type: "creditless_ed",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "vQ8cH94ty3Y",
        type: "other",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "_1NbGbYG4qg",
        type: "full_music_video",
        channelName: "milet Official YouTube Channel",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://milet.lnk.to/TheStoryofUs",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/the-story-of-us/1863631186?i=1863631485",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://frieren-anime.jp/music/2nd/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.com.tw/album/the-story-of-us/",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/386441/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=141647",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(specialEnding).toMatchObject({
      type: "ED",
      sequence: 2,
      titleJa: "Trace",
      artistDisplayName: "milet",
      versionLabel: "第 38 話特別 ED",
      releaseDate: "2026-03-04",
      lastVerifiedAt: "2026-08-10"
    });
    expect(specialEnding?.credits).toEqual([
      { name: "milet", role: "vocals" },
      { name: "milet", role: "lyrics" },
      { name: "milet", role: "composition" },
      { name: "野村陽一郎", role: "composition" },
      { name: "野村陽一郎", role: "arrangement" }
    ]);
    expect(specialEnding?.videos).toEqual([expect.objectContaining({
      youtubeVideoId: "R5cBm08p_jE",
      type: "creditless_ed",
      channelName: "TOHO animation チャンネル",
      officialStatus: "official",
      embeddable: true
    })]);
    expect(specialEnding?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://milet.lnk.to/TheStoryofUs_SG",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/trace/1878095288?i=1878095294",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(specialEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://frieren-anime.jp/news/5419/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://frieren-anime.jp/news/5471/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/milet_music/info/582150",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/trace/1878095288?i=1878095294",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/388882/",
        role: "cross_check"
      })
    ]));
  });

  it("deduplicates and enriches the verified Shiboyugi instrumental opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "shibou-yuugi-de-meshi-wo-kuu");
    const opening = anime?.themes.find((item) => item.id === "shibou-yuugi-de-meshi-wo-kuu-op-1");
    const ending = anime?.themes.find((item) => item.id === "shibou-yuugi-de-meshi-wo-kuu-ed-1");

    expect(anime).toMatchObject({
      id: "curated-180746",
      titleJa: "死亡遊戯で飯を食う。",
      titleZhHant: "靠死亡遊戲混飯吃。",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "shibou-yuugi-de-meshi-wo-kuu-op-1",
      "shibou-yuugi-de-meshi-wo-kuu-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "¬Ersterbend（ノット エルシュテルベント）",
      artistDisplayName: "LIN（MADKID）",
      releaseDate: "2026-01-07",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "LIN（MADKID）", role: "composition" },
      { name: "LIN（MADKID）", role: "arrangement" }
    ]);
    expect(opening?.credits.some((credit) => credit.role === "vocals")).toBe(false);
    expect(opening?.videos).toEqual([expect.objectContaining({
      youtubeVideoId: "VugBZB4gNGk",
      type: "creditless_op",
      channelName: "KADOKAWAanime",
      officialStatus: "official",
      embeddable: true
    })]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=VugBZB4gNGk",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lin-mdkd.lnk.to/Ersterbend",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/ersterbend/1861647816?i=1861647817",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://shiboyugi-anime.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://shiboyugi-anime.com/movie/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/ersterbend/1861647816?i=1861647817",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=141219",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "祈り",
      titleRomaji: "Inori",
      artistDisplayName: "藤川千愛",
      releaseDate: "2026-01-07",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "藤川千愛", role: "vocals" },
      { name: "藤川千愛", role: "lyrics" },
      { name: "近藤世真（ElementsGarden）", role: "composition" },
      { name: "近藤世真（ElementsGarden）", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "9_wI_FRMrcI",
        type: "creditless_ed",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "3l4Yu6HMBwg",
        type: "full_music_video",
        channelName: "Chiai Fujikawa",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=9_wI_FRMrcI",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://chiaifujikawa.lnk.to/Inori",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/inori/1861647375?i=1861647376",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://shiboyugi-anime.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://shiboyugi-anime.com/movie/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://columbia.jp/artist-info/fujikawachiai/info/92540.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/inori/1861647375?i=1861647376",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=141219",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("keeps the verified Sentenced to Be a Hero theme as one officially classified theme song", () => {
    const anime = curatedAnimeDetails.find((item) =>
      item.slug === "yuusha-kei-ni-shosu-choubatsu-yuusha-9004-tai-keimu-kiroku"
    );
    const theme = anime?.themes[0];

    expect(anime).toMatchObject({
      id: "curated-167152",
      titleJa: "勇者刑に処す 懲罰勇者9004隊刑務記録",
      titleZhHant: "判處勇者刑",
      opCount: 1,
      edCount: 0,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "yuusha-kei-ni-shosu-choubatsu-yuusha-9004-tai-keimu-kiroku-op-1"
    ]);

    expect(theme).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "Kill the Noise",
      artistDisplayName: "SPYAIR",
      versionLabel: "主題歌（官方分類）",
      releaseDate: "2026-01-15",
      lastVerifiedAt: "2026-08-11"
    });
    expect(theme?.credits).toEqual([
      { name: "YOSUKE", role: "vocals" },
      { name: "MOMIKEN", role: "lyrics" },
      { name: "UZ", role: "composition" },
      { name: "UZ", role: "arrangement" },
      { name: "tasuku", role: "arrangement" }
    ]);
    expect(theme?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "h4I4frynoOo",
        type: "other",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "N79bSihoRUk",
        type: "full_music_video",
        channelName: "SPYAIR Official YouTube Channel",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(theme?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=h4I4frynoOo",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://spyair.lnk.to/IbfG7f",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/kill-the-noise/1863580179?i=1863580182",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(theme?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://yushakei-pj.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://yushakei-pj.com/movie/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/spyair/info/580281",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/kill-the-noise/1863580179?i=1863580182",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=134169",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified first-cour Hokuto henchmen opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) =>
      item.slug === "hokuto-no-ken-kenou-gun-zako-tachi-no-banka"
    );
    const opening = anime?.themes.find((item) =>
      item.id === "hokuto-no-ken-kenou-gun-zako-tachi-no-banka-op-1"
    );
    const ending = anime?.themes.find((item) =>
      item.id === "hokuto-no-ken-kenou-gun-zako-tachi-no-banka-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-198720",
      titleJa: "北斗の拳 拳王軍ザコたちの挽歌",
      titleZhHant: "北斗之拳 拳王軍雜兵們的輓歌 （上半）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "hokuto-no-ken-kenou-gun-zako-tachi-no-banka-op-1",
      "hokuto-no-ken-kenou-gun-zako-tachi-no-banka-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "Blacker Co., Ltd.",
      artistDisplayName: "イツカ▶︎",
      releaseDate: "2026-02-14",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "イツカ▶︎", role: "vocals" },
      { name: "三浦誠司", role: "lyrics" },
      { name: "三浦誠司", role: "composition" },
      { name: "三浦誠司", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "5ipBq1-qZlM",
        type: "tv_size",
        channelName: "イツカ▶︎_official",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "rnc0_R6CVcM",
        type: "full_music_video",
        channelName: "イツカ▶︎_official",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "peJQ2-g7I_4",
        type: "official_audio",
        channelName: "イツカ▶︎_official",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=5ipBq1-qZlM",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://fwinc.lnk.to/Cd0LFp",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/blacker-co-ltd/1870506510?i=1870506513",
        linkType: "direct_track",
        region: "TW"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "Elegy of the Enemies",
      artistDisplayName: "The Canbellz",
      releaseDate: "2025-12-18",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "神戸シンキ", role: "vocals" },
      { name: "神戸シンキ", role: "lyrics" },
      { name: "神戸シンキ", role: "composition" },
      { name: "神戸シンキ", role: "arrangement" },
      { name: "佐藤希久生", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "_EEMJOr1NLA",
        type: "full_music_video",
        channelName: "神戸シンキ / The Canbellz",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=_EEMJOr1NLA",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://linkco.re/V16FShUV",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/elegy-of-the-enemies/1862389731?i=1862389732",
        linkType: "direct_track",
        region: "TW"
      })
    ]));

    for (const theme of [opening, ending]) {
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({
          url: "https://zakoban.com/",
          role: "first_party"
        }),
        expect.objectContaining({
          url: "https://www.coamix.co.jp/zh-tw/topics/hokuto_zako_260105",
          language: "zh-Hant",
          role: "first_party"
        }),
        expect.objectContaining({
          url: "https://acg.gamer.com.tw/acgDetail.php?s=148359",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.fwinc.co.jp/digitalmusic/107169/",
        role: "first_party"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://linkco.re/V16FShUV?lang=ja",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://shinxx.com/news/202510/4828/",
        role: "first_party"
      })
    ]));
  });

  it("completes the verified Part-time Torturer opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) =>
      item.slug === "goumon-baito-kun-no-nichijou"
    );
    const opening = anime?.themes.find((item) =>
      item.id === "goumon-baito-kun-no-nichijou-op-1"
    );
    const ending = anime?.themes.find((item) =>
      item.id === "goumon-baito-kun-no-nichijou-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-197731",
      titleJa: "拷問バイトくんの日常",
      titleZhHant: "打工仔的拷問日常",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "goumon-baito-kun-no-nichijou-op-1",
      "goumon-baito-kun-no-nichijou-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "GO GO PARADISE!!",
      artistDisplayName: "GRANRODEO",
      releaseDate: "2026-01-05",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "GRANRODEO", role: "vocals" },
      { name: "谷山紀章", role: "lyrics" },
      { name: "飯塚昌明", role: "composition" },
      { name: "飯塚昌明", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "KOhrAtk6BLw",
        type: "creditless_op",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "RMNOzJBD5P0",
        type: "full_music_video",
        channelName: "GRANRODEO",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=KOhrAtk6BLw",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://laglean.lnk.to/GOPARA",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/go-go-paradise/1854314594?i=1854314684",
        linkType: "direct_track",
        region: "TW"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "明日天気になぁれ",
      titleRomaji: "Ashita Tenki ni Naare",
      artistDisplayName: "寺島拓篤",
      releaseDate: "2026-01-12",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "寺島拓篤", role: "vocals" },
      { name: "寺島拓篤", role: "lyrics" },
      { name: "海野水玉", role: "composition" },
      { name: "Seiji Iwasaki", role: "composition" },
      { name: "Seiji Iwasaki", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "UQYuIdD-dwk",
        type: "creditless_ed",
        channelName: "KADOKAWAanime",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "24CI2Pj89GM",
        type: "full_music_video",
        channelName: "Takuma Terashima Official Channel",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=UQYuIdD-dwk",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/%E6%98%8E%E6%97%A5%E5%A4%A9%E6%B0%97%E3%81%AB%E3%81%AA%E3%81%81%E3%82%8C/1856530836?i=1856530837",
        linkType: "direct_track",
        region: "TW"
      })
    ]));

    for (const theme of [opening, ending]) {
      expect(theme?.sources).toEqual(expect.arrayContaining([
        expect.objectContaining({
          url: "https://goumonbaitokun.com/news/article019.html",
          role: "first_party"
        }),
        expect.objectContaining({
          url: "https://acg.gamer.com.tw/acgDetail.php?s=145933",
          language: "zh-Hant",
          role: "cross_check"
        })
      ]));
    }
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://granrodeo.net/contents/1012616",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/go-go-paradise/1854314594?i=1854314684",
        language: "zh-Hant",
        role: "first_party"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://takuma-terashima.lantis.jp/news/2338/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/%E6%98%8E%E6%97%A5%E5%A4%A9%E6%B0%97%E3%81%AB%E3%81%AA%E3%81%81%E3%82%8C/1856530836?i=1856530837",
        language: "zh-Hant",
        role: "first_party"
      })
    ]));
  });

  it("completes the verified Vigilantes season 2 opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) =>
      item.slug === "vigilante-boku-no-hero-academia-illegals-2nd-season"
    );
    const opening = anime?.themes.find((item) =>
      item.id === "vigilante-boku-no-hero-academia-illegals-2nd-season-op-1"
    );
    const ending = anime?.themes.find((item) =>
      item.id === "vigilante-boku-no-hero-academia-illegals-2nd-season-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-195322",
      titleJa: "ヴィジランテ -僕のヒーローアカデミア ILLEGALS- 第2期",
      titleZhHant: "正義使者 -我的英雄學院之非法英雄- （第2期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "vigilante-boku-no-hero-academia-illegals-2nd-season-op-1",
      "vigilante-boku-no-hero-academia-illegals-2nd-season-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "CATCH!!!",
      artistDisplayName: "すりぃ",
      releaseDate: "2026-01-05",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "すりぃ", role: "vocals" },
      { name: "すりぃ", role: "lyrics" },
      { name: "すりぃ", role: "composition" },
      { name: "すりぃ", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "bJFqYBcIMcc",
        type: "other",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "0bJgiyfYASs",
        type: "full_music_video",
        channelName: "すりぃ",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "-VabYsRSrH8",
        type: "other",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=bJFqYBcIMcc",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://threee.lnk.to/cth",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/catch/1862662169?i=1862662591",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://vigilante-anime.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://vigilante-anime.com/news/20260309_01.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/catch/1862662169?i=1862662591",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://anime-song-info.com/vigilante-op-ed-25sp/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=143058",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "ミス・ユー",
      artistDisplayName: "シャイトープ",
      releaseDate: "2026-01-06",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "シャイトープ", role: "vocals" },
      { name: "佐々木想", role: "lyrics" },
      { name: "佐々木想", role: "composition" },
      { name: "花井諒", role: "arrangement" },
      { name: "シャイトープ", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "S3HQmsf7BSY",
        type: "creditless_ed",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "dpQHoYqbT0o",
        type: "full_music_video",
        channelName: "シャイトープ",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=S3HQmsf7BSY",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://erj.lnk.to/i7vHwW",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/%E3%83%9F%E3%82%B9-%E3%83%A6%E3%83%BC/1859601190?i=1859601193",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://vigilante-anime.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://vigilante-anime.com/interview/interview24.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/%E3%83%9F%E3%82%B9-%E3%83%A6%E3%83%BC/1859601190?i=1859601193",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.lisani.jp/0000301575/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=143058",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Ikoku Nikki opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "ikoku-nikki");
    const opening = anime?.themes.find((item) => item.id === "ikoku-nikki-op-1");
    const ending = anime?.themes.find((item) => item.id === "ikoku-nikki-ed-1");

    expect(anime).toMatchObject({
      id: "curated-177385",
      titleJa: "違国日記",
      titleZhHant: "異國日記",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "ikoku-nikki-op-1",
      "ikoku-nikki-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "ソナーレ",
      artistDisplayName: "TOMOO",
      releaseDate: "2026-01-07",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "TOMOO", role: "vocals" },
      { name: "TOMOO", role: "lyrics" },
      { name: "TOMOO", role: "composition" },
      { name: "小西遼（象眠舎、CRCK/LCKS）", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "g_nDJVMvSD8",
        type: "creditless_op",
        channelName: "ぽにきゃん-Anime PONY CANYON",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "V_f_r5YE12I",
        type: "full_music_video",
        channelName: "TOMOO",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=g_nDJVMvSD8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tomoo.lnk.to/sonare",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/sonare/1862338474",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://ikoku-anime.com/music/opening/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://news.ponycanyon.co.jp/2025/12/117648",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/sonare/1862338474",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=139183",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "言伝",
      artistDisplayName: "Bialystocks",
      releaseDate: "2026-01-05",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "Bialystocks", role: "vocals" },
      { name: "菊池剛", role: "lyrics" },
      { name: "甫木元空", role: "lyrics" },
      { name: "菊池剛", role: "composition" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "fyzUQiDSXqs",
        type: "creditless_ed",
        channelName: "ぽにきゃん-Anime PONY CANYON",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "HwWJ76pZ9us",
        type: "official_audio",
        channelName: "Bialystocks - ビアリストックス",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=fyzUQiDSXqs",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://bialystocks.lnk.to/kotodute",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/kotozute/1860510461",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://ikoku-anime.com/music/ending/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://ikoku-anime.com/news/post-16",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://news.ponycanyon.co.jp/2025/11/116103",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/kotozute/1860510461",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=139183",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Golden Kamuy final chapter opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "golden-kamuy-saishuushou");
    const opening = anime?.themes.find((item) => item.id === "golden-kamuy-saishuushou-op-1");
    const ending = anime?.themes.find((item) => item.id === "golden-kamuy-saishuushou-ed-1");

    expect(anime).toMatchObject({
      id: "curated-166521",
      titleJa: "ゴールデンカムイ 最終章",
      titleZhHant: "黃金神威 （第5期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "golden-kamuy-saishuushou-op-1",
      "golden-kamuy-saishuushou-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "黄金の彼方",
      artistDisplayName: "Awich × ALI",
      releaseDate: "2025-10-08",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "Awich × ALI", role: "vocals" },
      { name: "Awich", role: "lyrics" },
      { name: "LEO", role: "lyrics" },
      { name: "Chaki Zulu", role: "composition" },
      { name: "LEO", role: "composition" },
      { name: "Ryo’LEFTY’Miyata", role: "composition" },
      { name: "Chaki Zulu", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "YcRYX8hwQ8Y",
        type: "creditless_op",
        channelName: "NBCUniversal Anime/Music",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "mDKh85rae2c",
        type: "full_music_video",
        channelName: "Awich",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=YcRYX8hwQ8Y",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/GoldenHorizon",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1842061212",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://kamuy-anime.com/music/index6.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://alienlibertyinternational.com/cate/2293",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.universal-music.co.jp/awich/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1842061212",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=133646",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "The Ballad",
      artistDisplayName: "Ken Yokoyama",
      releaseDate: "2026-01-13",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "Ken Yokoyama", role: "vocals" },
      { name: "Ken", role: "lyrics" },
      { name: "Ken", role: "composition" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "SrmET-l5P_4",
        type: "creditless_ed",
        channelName: "NBCUniversal Anime/Music",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "87DfPstuyFI",
        type: "other",
        channelName: "NBCUniversal Anime/Music",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=SrmET-l5P_4",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://ken-yokoyama.lnk.to/theballad",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1861402066",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://kamuy-anime.com/news/index06580000.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.pizzaofdeath.com/kentheballad/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1861402066",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.lisani.jp/0000299705/",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=133646",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Wash It All Away opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "kirei-ni-shitemoraemasu-ka");
    const opening = anime?.themes.find((item) => item.id === "kirei-ni-shitemoraemasu-ka-op-1");
    const ending = anime?.themes.find((item) => item.id === "kirei-ni-shitemoraemasu-ka-ed-1");

    expect(anime).toMatchObject({
      id: "curated-194028",
      titleJa: "綺麗にしてもらえますか。",
      titleZhHant: "可以幫忙洗乾淨嗎？",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "kirei-ni-shitemoraemasu-ka-op-1",
      "kirei-ni-shitemoraemasu-ka-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "綺麗。",
      artistDisplayName: "ゆう。",
      releaseDate: "2026-01-06",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "ゆう。", role: "vocals" },
      { name: "じん", role: "lyrics" },
      { name: "じん", role: "composition" },
      { name: "すくろーす", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "kinVGoEF3O4",
        type: "creditless_op",
        channelName: "ハピネット【アニメ公式】",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "pKrg4_m_9e4",
        type: "full_music_video",
        channelName: "ゆう。",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=kinVGoEF3O4",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://www.jvcmusic.co.jp/-/Streaming/VE3WT-12194/A/1.html",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860787388",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://kinishite.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://kinishite.com/news/post-97",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A029783/VE3WT-12194.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860787388",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=298480",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "若葉のころ",
      artistDisplayName: "清浦夏実",
      releaseDate: "2026-01-06",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "清浦夏実", role: "vocals" },
      { name: "清浦夏実", role: "lyrics" },
      { name: "北川勝利", role: "composition" },
      { name: "北川勝利", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "kCERfeJ2HWI",
        type: "creditless_ed",
        channelName: "ハピネット【アニメ公式】",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "swPFCbVwhXo",
        type: "full_music_video",
        channelName: "FlyingDog",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=kCERfeJ2HWI",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://www.jvcmusic.co.jp/-/Streaming/VE3WT-12206/A/1.html",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860787616",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://kinishite.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://kinishite.com/news/post-99",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A021332/VE3WT-12206.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860787616",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=298480",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Jujutsu Kaisen Culling Game opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) =>
      item.slug === "jujutsu-kaisen-shimetsu-kaiyuu-zenpen"
    );
    const opening = anime?.themes.find((item) =>
      item.id === "jujutsu-kaisen-shimetsu-kaiyuu-zenpen-op-1"
    );
    const ending = anime?.themes.find((item) =>
      item.id === "jujutsu-kaisen-shimetsu-kaiyuu-zenpen-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-172463",
      titleJa: "呪術廻戦 死滅回游 前編",
      titleZhHant: "咒術迴戰 死滅迴游 前篇 （第3期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "jujutsu-kaisen-shimetsu-kaiyuu-zenpen-op-1",
      "jujutsu-kaisen-shimetsu-kaiyuu-zenpen-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "AIZO",
      artistDisplayName: "King Gnu",
      releaseDate: "2026-01-09",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "King Gnu", role: "vocals" },
      { name: "常田大希", role: "lyrics" },
      { name: "常田大希", role: "composition" },
      { name: "King Gnu", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "Xr032EhUDPw",
        type: "creditless_op",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "zz2a9Q2Wru0",
        type: "full_music_video",
        channelName: "King Gnu official YouTube channel",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=Xr032EhUDPw",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://kinggnu.lnk.to/AIZO",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860538548",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://jujutsukaisen.jp/movie/index_music.php",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://jujutsukaisen.jp/news/20260109_06.php",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://kinggnu.jp/music/AIZO/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860538548",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=137133",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "よあけのうた",
      artistDisplayName: "jo0ji",
      releaseDate: "2026-01-10",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "jo0ji", role: "vocals" },
      { name: "jo0ji", role: "lyrics" },
      { name: "jo0ji", role: "composition" },
      { name: "Ayatake Ezaki", role: "arrangement" },
      { name: "Koki Furukawa", role: "arrangement" },
      { name: "jo0ji", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "-i8LR9-WVps",
        type: "creditless_ed",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "ufcDIOS1HRo",
        type: "full_music_video",
        channelName: "jo0ji",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=-i8LR9-WVps",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://jo0ji.lnk.to/Yoakenouta",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860793850",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://jujutsukaisen.jp/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://jujutsukaisen.jp/news/20260109_05.php",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://sonymusic.com.tw/album/yoake-no-uta/",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860793850",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=137133",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Hell's Paradise season 2 opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "jigokuraku-2nd-season");
    const opening = anime?.themes.find((item) => item.id === "jigokuraku-2nd-season-op-1");
    const ending = anime?.themes.find((item) => item.id === "jigokuraku-2nd-season-ed-1");

    expect(anime).toMatchObject({
      id: "curated-166613",
      titleJa: "地獄楽 第二期",
      titleZhHant: "地獄樂 （第2期）",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "jigokuraku-2nd-season-op-1",
      "jigokuraku-2nd-season-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "かすかなはな",
      artistDisplayName: "キタニタツヤ feat. BABYMETAL",
      releaseDate: "2026-01-12",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "キタニタツヤ feat. BABYMETAL", role: "vocals" },
      { name: "Tatsuya Kitani", role: "lyrics" },
      { name: "Tatsuya Kitani", role: "composition" },
      { name: "Tatsuya Kitani", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "gHIA3Mhc618",
        type: "creditless_op",
        channelName: "TWIN ENGINE",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "t1gkIY4XvJ0",
        type: "full_music_video",
        channelName: "キタニタツヤ / Tatsuya Kitani",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=gHIA3Mhc618",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tatsuya-kitani.lnk.to/KasukanaHana",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1866806793",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.jigokuraku.com/music/op/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.jigokuraku.com/movie/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://tatsuyakitani.com/news/2419/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1866806793",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=133793",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "PERSONAL",
      artistDisplayName: "女王蜂",
      releaseDate: "2026-01-14",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "女王蜂", role: "vocals" },
      { name: "薔薇園アヴ", role: "lyrics" },
      { name: "薔薇園アヴ", role: "composition" },
      { name: "女王蜂", role: "arrangement" },
      { name: "塚田耕司", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "N-Go4JtUw6U",
        type: "creditless_ed",
        channelName: "TWIN ENGINE",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "vhqSCwhcgBY",
        type: "full_music_video",
        channelName: "女王蜂 / QUEEN BEE official YouTube channel",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=N-Go4JtUw6U",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://queenbee.lnk.to/PERSONAL",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1864160080",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.jigokuraku.com/music/ed/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.jigokuraku.com/movie/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/ziyoou-vachi/info/580303",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1864160080",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=133793",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified TRIGUN STARGAZE opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "trigun-stargaze");
    const opening = anime?.themes.find((item) => item.id === "trigun-stargaze-op-1");
    const ending = anime?.themes.find((item) => item.id === "trigun-stargaze-ed-1");

    expect(anime).toMatchObject({
      id: "curated-163144",
      titleJa: "TRIGUN STARGAZE",
      titleZhHant: "TRIGUN STARGAZE",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "trigun-stargaze-op-1",
      "trigun-stargaze-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "ピカレスクヒーロー",
      artistDisplayName: "ano",
      releaseDate: "2026-01-14",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "ano", role: "vocals" },
      { name: "あの", role: "lyrics" },
      { name: "DAIDAI(Paledusk)", role: "composition" },
      { name: "DAIDAI(Paledusk)", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "9PZ3t1RD9Rk",
        type: "tv_size",
        channelName: "TOHO animation",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "rs2WNAF2w54",
        type: "full_music_video",
        channelName: "ano official channel",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=9PZ3t1RD9Rk",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tf.lnk.to/PicaresqueHero",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1889745515",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://trigun-anime.com/music/op.php",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://trigun-anime.com/news/?p=817",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1889745515",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=131293",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "スターダスト",
      artistDisplayName: "FOMARE",
      releaseDate: "2026-01-14",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "FOMARE", role: "vocals" },
      { name: "アマダシンスケ", role: "lyrics" },
      { name: "アマダシンスケ", role: "composition" },
      { name: "FOMARE", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "Dz3TitQnWvo",
        type: "creditless_ed",
        channelName: "TOHO animation",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "_TMBbiA-aRg",
        type: "full_music_video",
        channelName: "TOHO animation",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=Dz3TitQnWvo",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tf.lnk.to/fomare_stardust",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1859576625",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://trigun-anime.com/music/ed.php",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://trigun-anime.com/news/?p=817",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1859576625",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=131293",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Fate/strange Fake opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "fate-strange-fake");
    const opening = anime?.themes.find((item) => item.id === "fate-strange-fake-op-1");
    const ending = anime?.themes.find((item) => item.id === "fate-strange-fake-ed-1");

    expect(anime).toMatchObject({
      id: "curated-166617",
      titleJa: "Fate/strange Fake",
      titleZhHant: "Fate/strange Fake",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "fate-strange-fake-op-1",
      "fate-strange-fake-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "PROVANT",
      artistDisplayName: "SawanoHiroyuki[nZk]:Jean-Ken Johnny & TAKUMA",
      releaseDate: "2026-01-04",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "SawanoHiroyuki[nZk]:Jean-Ken Johnny & TAKUMA", role: "vocals" },
      { name: "Benjamin＋cAnON.", role: "lyrics" },
      { name: "Hiroyuki SAWANO", role: "composition" },
      { name: "Hiroyuki SAWANO", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "tcC9g9dlv58",
        type: "creditless_op",
        channelName: "アニプレックス チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "bQVMACYeCYs",
        type: "full_music_video",
        channelName: "澤野弘之 / SawanoHiroyuki[nZk]",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=tcC9g9dlv58",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://nzk.lnk.to/PROVANT_DG",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1858500507",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://fate-strange-fake.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://fate-strange-fake.com/news/?article_id=69290",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.sonymusic.co.jp/artist/sawanohiroyukinzk/info/579442",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1858500507",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=133843",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "潜在的なアイ",
      artistDisplayName: "13.3g",
      releaseDate: "2026-01-11",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "13.3g", role: "vocals" },
      { name: "藤丸将太", role: "lyrics" },
      { name: "13.3g", role: "composition" },
      { name: "HIDEO NEKOTA", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "P7ZcQSEP6PU",
        type: "creditless_ed",
        channelName: "アニプレックス チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "rHlLzmlc69I",
        type: "creditless_ed",
        channelName: "アニプレックス チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "LeK0WZqC-As",
        type: "full_music_video",
        channelName: "13.3g",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=P7ZcQSEP6PU",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://13-3g.lnk.to/UnseenAi",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1863631438",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://fate-strange-fake.com/music/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://fate-strange-fake.com/news/?article_id=69290",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://13-3g.fanpla.jp/discography/detail/6174/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1863631438",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=133843",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Medalist season 2 opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "medalist-2nd-season");
    const opening = anime?.themes.find((item) => item.id === "medalist-2nd-season-op-1");
    const ending = anime?.themes.find((item) => item.id === "medalist-2nd-season-ed-1");

    expect(anime).toMatchObject({
      id: "curated-189275",
      titleJa: "メダリスト 第2期",
      titleZhHant: "金牌得主 第二季",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "medalist-2nd-season-op-1",
      "medalist-2nd-season-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "Cold Night",
      artistDisplayName: "HANA",
      releaseDate: "2026-01-24",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "HANA", role: "vocals" },
      { name: "CHANMINA", role: "lyrics" },
      { name: "CHANMINA", role: "composition" },
      { name: "SANGWOO", role: "composition" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "-hPpXrlgncE",
        type: "creditless_op",
        channelName: "TVアニメ『メダリスト』公式チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "y0buouJde-g",
        type: "full_music_video",
        channelName: "HANA official",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=-hPpXrlgncE",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://hana-brave.lnk.to/Cold_Night_DG",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/cold-night-single/1867687784?i=1867687787",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://medalist-pr.com/music.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://medalist-pr.com/news.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://hana.b-rave.tokyo/movie/mv/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/cold-night-single/1867687784?i=1867687787",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=144542",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "Rookies",
      artistDisplayName: "Conton Candy",
      releaseDate: "2026-01-25",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "Conton Candy", role: "vocals" },
      { name: "Conton Candy", role: "lyrics" },
      { name: "Conton Candy", role: "composition" },
      { name: "野村陽一郎", role: "arrangement" },
      { name: "Conton Candy", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "o076YrFjZsA",
        type: "creditless_ed",
        channelName: "TVアニメ『メダリスト』公式チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "8_zBmELClV8",
        type: "full_music_video",
        channelName: "Conton Candy",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=o076YrFjZsA",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://contoncandy.lnk.to/Rookies",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1867415955",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://medalist-pr.com/music.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://contoncandy.fanpla.jp/news/detail/67612",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://contoncandy.fanpla.jp/news/detail/68276",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/387322/",
        language: "ja",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1867415955",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=144542",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Darwin Incident opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "darwin-jihen");
    const opening = anime?.themes.find((item) => item.id === "darwin-jihen-op-1");
    const ending = anime?.themes.find((item) => item.id === "darwin-jihen-ed-1");

    expect(anime).toMatchObject({
      id: "curated-177679",
      titleJa: "ダーウィン事変",
      titleZhHant: "達爾文事變",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "darwin-jihen-op-1",
      "darwin-jihen-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "Make Me Wonder",
      artistDisplayName: "Official髭男dism",
      releaseDate: "2025-12-29",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "Official髭男dism", role: "vocals" },
      { name: "藤原聡", role: "lyrics" },
      { name: "藤原聡", role: "composition" },
      { name: "Official髭男dism", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "wTDmqzeugx8",
        type: "creditless_op",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "LU7xD_yx43c",
        type: "full_music_video",
        channelName: "Official髭男dism",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=wTDmqzeugx8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://hgdn.lnk.to/Make_Me_Wonder",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860741263",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://darwinsincident.net/music/opening.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://darwinsincident.net/news/20260105_01.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://higedan.com/news/detail/101536",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/385918/",
        language: "ja",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860741263",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=282119",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "Turn It Up",
      artistDisplayName: "a子",
      releaseDate: "2026-01-21",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "a子", role: "vocals" },
      { name: "a子", role: "lyrics" },
      { name: "a子", role: "composition" },
      { name: "中村エイジ", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "MFNM8RXPDuE",
        type: "creditless_ed",
        channelName: "TOHO animation チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "T57HYBSkci8",
        type: "full_music_video",
        channelName: "a子",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=MFNM8RXPDuE",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/ako_Turn_It_Up",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1864085295",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://darwinsincident.net/music/ending.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://darwinsincident.net/news/20260107_01.html",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://news.ponycanyon.co.jp/2026/02/118799",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.uta-net.com/song/386408/",
        language: "ja",
        role: "cross_check"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1864085295",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=282119",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified MF Ghost season 3 opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "mf-ghost-3rd-season");
    const opening = anime?.themes.find((item) => item.id === "mf-ghost-3rd-season-op-1");
    const ending = anime?.themes.find((item) => item.id === "mf-ghost-3rd-season-ed-1");

    expect(anime).toMatchObject({
      id: "curated-185753",
      titleJa: "MFゴースト 3rd Season",
      titleZhHant: "MF GHOST 燃油車鬥魂 第三季",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "mf-ghost-3rd-season-op-1",
      "mf-ghost-3rd-season-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "TIMELESS POWER feat. MOTSU",
      artistDisplayName: "芹澤 優",
      releaseDate: "2026-02-16",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "芹澤 優", role: "vocals" },
      { name: "MOTSU", role: "vocals" },
      { name: "MOTSU", role: "lyrics" },
      { name: "MOTSU", role: "composition" },
      { name: "大久保薫", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "M1Nj1mcgBns",
        type: "creditless_op",
        channelName: "TVアニメ「MFゴースト」公式",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "59aw0ps3spE",
        type: "full_music_video",
        channelName: "i☆Ris 公式チャンネル",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=M1Nj1mcgBns",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://avex.lnk.to/TIMELESSPOWERFULL",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1875142987",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://mfg-anime.com/news/detail.php?id=1129699",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://avex-pictures.co.jp/topic/56914/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://yu-serizawa.com/discography/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1875142987",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://mfg-anime.com/zh-CHT/news/detail.php?id=1129699",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=295937",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "予感の途中 Prod. ☆Taku Takahashi (m-flo)",
      artistDisplayName: "Himika Akaneya",
      releaseDate: "2026-03-02",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "Himika Akaneya", role: "vocals" },
      { name: "☆Taku Takahashi (m-flo)", role: "lyrics" },
      { name: "ARAKI", role: "lyrics" },
      { name: "☆Taku Takahashi (m-flo)", role: "composition" },
      { name: "ARAKI", role: "composition" },
      { name: "☆Taku Takahashi (m-flo)", role: "arrangement" },
      { name: "Mitsunori Ikeda", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "ngvqsIH11X8",
        type: "creditless_ed",
        channelName: "TVアニメ「MFゴースト」公式",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "60SUZFfx5BM",
        type: "full_music_video",
        channelName: "i☆Ris 公式チャンネル",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=ngvqsIH11X8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://avex.lnk.to/MF3_edfull",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1872060415",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://mfg-anime.com/news/detail.php?id=1129699",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://avex-pictures.co.jp/topic/76324/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://iris.dive2ent.com/discography/detail.php?id=1021279",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1872060415",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://mfg-anime.com/zh-CHT/news/detail.php?id=1129699",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=295937",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Jack-of-All-Trades opening and ending", () => {
    const anime = curatedAnimeDetails.find(
      (item) => item.slug === "yuusha-party-wo-oidasareta-kiyou-binbou"
    );
    const opening = anime?.themes.find(
      (item) => item.id === "yuusha-party-wo-oidasareta-kiyou-binbou-op-1"
    );
    const ending = anime?.themes.find(
      (item) => item.id === "yuusha-party-wo-oidasareta-kiyou-binbou-ed-1"
    );

    expect(anime).toMatchObject({
      id: "curated-187264",
      titleJa: "勇者パーティを追い出された器用貧乏",
      titleZhHant: "泛而不精的我被逐出了勇者隊伍",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "yuusha-party-wo-oidasareta-kiyou-binbou-op-1",
      "yuusha-party-wo-oidasareta-kiyou-binbou-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "シルベ",
      artistDisplayName: "常闇トワ",
      releaseDate: "2026-01-04",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "常闇トワ", role: "vocals" },
      { name: "古閑翔平（YOURNESS）", role: "lyrics" },
      { name: "古閑翔平（YOURNESS）", role: "composition" },
      { name: "古閑翔平（YOURNESS）", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "Jp6G6iiKMBc",
        type: "creditless_op",
        channelName: "バンダイナムコフィルムワークス チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "eUmwR0x55JU",
        type: "full_music_video",
        channelName: "Towa Ch. 常闇トワ",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=Jp6G6iiKMBc",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://cover.lnk.to/kWY400",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1863610138",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://kiyou-bimbou.com/", role: "first_party" }),
      expect.objectContaining({
        url: "https://kiyou-bimbou.com/news/?p=156%2F",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://hololivepro.com/news/20260103-01-267/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://hololive.hololivepro.com/music/694/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1863610138",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=144010",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "sukuu",
      artistDisplayName: "Nowlu",
      releaseDate: "2026-01-11",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "Nowlu", role: "vocals" },
      { name: "Nowlu", role: "lyrics" },
      { name: "クレハリュウイチ", role: "composition" },
      { name: "クレハリュウイチ", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "fj6ag_NdfFc",
        type: "creditless_ed",
        channelName: "バンダイナムコフィルムワークス チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "-Gl_0CqyUjU",
        type: "official_audio",
        channelName: "Nowlu - Topic",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=fj6ag_NdfFc",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://bnml.lnk.to/6jnFr4CZ",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1858500631",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://kiyou-bimbou.com/", role: "first_party" }),
      expect.objectContaining({
        url: "https://pylonport.bandainamcomusiclive.co.jp/news/459",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1858500631",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=144010",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("completes the verified Tamon-kun opening and endings", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "tamon-kun-ima-docchi");
    const opening = anime?.themes.find((item) => item.id === "tamon-kun-ima-docchi-op-1");
    const ending = anime?.themes.find((item) => item.id === "tamon-kun-ima-docchi-ed-1");
    const specialEnding = anime?.themes.find(
      (item) => item.id === "tamon-kun-ima-docchi-ed-2"
    );

    expect(anime).toMatchObject({
      id: "curated-178005",
      titleJa: "多聞くん今どっち！？",
      titleZhHant: "現在的是哪一個多聞！？",
      opCount: 1,
      edCount: 2,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-11"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "tamon-kun-ima-docchi-op-1",
      "tamon-kun-ima-docchi-ed-1",
      "tamon-kun-ima-docchi-ed-2"
    ]);
    expect(anime?.themes.some((item) => item.titleJa === "FLY")).toBe(false);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "Sweet Magic",
      artistDisplayName: "F/ACE",
      releaseDate: "2026-01-04",
      lastVerifiedAt: "2026-08-11"
    });
    expect(opening?.credits).toEqual([
      { name: "福原多聞（CV.波多野 翔）", role: "vocals" },
      { name: "坂口桜利（CV.千葉翔也）", role: "vocals" },
      { name: "橘 敬人（CV.畠中 祐）", role: "vocals" },
      { name: "石橋ナツキ（CV.天﨑滉平）", role: "vocals" },
      { name: "甲斐倫太郎（CV.長岡龍歩）", role: "vocals" },
      { name: "Soma Genda", role: "lyrics" },
      { name: "Dirty Orange", role: "composition" },
      { name: "Soma Genda", role: "composition" },
      { name: "Dirty Orange", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "cugf5FQ4fLE",
        type: "creditless_op",
        channelName: "アニメ「多聞くん今どっち!?」公式",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "H6L4hKqDcME",
        type: "official_audio",
        channelName: "F/ACE from the stage - Topic",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=cugf5FQ4fLE",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tamon-anime.lnk.to/SweetMagic",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860466124",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.tamon-anime.com/music/cd/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://tamon-anime.com/movie/", role: "first_party" }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860466124",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=139909",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "花と夢",
      titleRomaji: "Hana to Yume",
      artistDisplayName: "F/ACE",
      releaseDate: "2026-01-11",
      lastVerifiedAt: "2026-08-11"
    });
    expect(ending?.credits).toEqual([
      { name: "福原多聞（CV.波多野 翔）", role: "vocals" },
      { name: "坂口桜利（CV.千葉翔也）", role: "vocals" },
      { name: "橘 敬人（CV.畠中 祐）", role: "vocals" },
      { name: "石橋ナツキ（CV.天﨑滉平）", role: "vocals" },
      { name: "甲斐倫太郎（CV.長岡龍歩）", role: "vocals" },
      { name: "城田優", role: "lyrics" },
      { name: "城田優", role: "composition" },
      { name: "Mitsu.J", role: "composition" },
      { name: "Mitsu.J", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "_2dl3blJgy8",
        type: "creditless_ed",
        channelName: "アニメ「多聞くん今どっち!?」公式",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "MPWiQeMVqKg",
        type: "official_audio",
        channelName: "F/ACE from the stage - Topic",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=_2dl3blJgy8",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tamon-animate.lnk.to/HanatoYume",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860466031",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.tamon-anime.com/music/cd/",
        role: "first_party"
      }),
      expect.objectContaining({ url: "https://tamon-anime.com/movie/", role: "first_party" }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1860466031",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://forum.gamer.com.tw/C.php?bsn=45244&snA=48",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(specialEnding).toMatchObject({
      type: "ED",
      sequence: 2,
      versionLabel: "第 5 話特別 ED",
      titleJa: "RAIN",
      artistDisplayName: "F/ACE",
      releaseDate: "2026-02-01",
      lastVerifiedAt: "2026-08-11"
    });
    expect(specialEnding?.credits).toEqual([
      { name: "福原多聞（CV.波多野 翔）", role: "vocals" },
      { name: "坂口桜利（CV.千葉翔也）", role: "vocals" },
      { name: "橘 敬人（CV.畠中 祐）", role: "vocals" },
      { name: "石橋ナツキ（CV.天﨑滉平）", role: "vocals" },
      { name: "甲斐倫太郎（CV.長岡龍歩）", role: "vocals" },
      { name: "師走ゆき", role: "lyrics" },
      { name: "SHOW", role: "lyrics" },
      { name: "Mitsu.J", role: "composition" },
      { name: "Mitsu.J", role: "arrangement" }
    ]);
    expect(specialEnding?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "d4euM3A77Xw",
        type: "creditless_ed",
        channelName: "アニメ「多聞くん今どっち!?」公式",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "rwC4f83gnNA",
        type: "official_audio",
        channelName: "F/ACE from the stage - Topic",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(specialEnding?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=d4euM3A77Xw",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://tamon-animate.lnk.to/RAIN",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1869010808",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(specialEnding?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://tamon-anime.com/movie/", role: "first_party" }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/song/1869010808",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.litv.tv/comic/watch/VOD00388107",
        language: "zh-Hant",
        role: "cross_check"
      }),
      expect.objectContaining({ url: "https://utaten.com/lyric/mi26012903/", role: "cross_check" })
    ]));
  });

  it("deduplicates and enriches the verified Hana-Kimi opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "hanazakari-no-kimitachi-e");
    const opening = anime?.themes.find((item) => item.id === "hanazakari-no-kimitachi-e-op-1");
    const ending = anime?.themes.find((item) => item.id === "hanazakari-no-kimitachi-e-ed-1");

    expect(anime).toMatchObject({
      id: "curated-177580",
      titleJa: "花ざかりの君たちへ",
      titleZhHant: "花樣少年少女",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "hanazakari-no-kimitachi-e-op-1",
      "hanazakari-no-kimitachi-e-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "アドレナ",
      titleRomaji: "Adrena",
      artistDisplayName: "YOASOBI",
      releaseDate: "2026-01-04",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "ikura", role: "vocals" },
      { name: "Ayase", role: "lyrics" },
      { name: "Ayase", role: "composition" },
      { name: "Ayase", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "lU1wZMytGvY",
        type: "creditless_op",
        channelName: "アニプレックス チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "ARqP5ohiubY",
        type: "full_music_video",
        channelName: "YOASOBI",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=lU1wZMytGvY",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/yoasobi-adrena",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/%E3%82%A2%E3%83%89%E3%83%AC%E3%83%8A/1861370948?i=1861370949",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://hanakimi-anime.com/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://hanakimi-anime.com/news/?article_id=69096",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/%E3%82%A2%E3%83%89%E3%83%AC%E3%83%8A/1861370948?i=1861370949",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=295227",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "BABY",
      artistDisplayName: "YOASOBI",
      releaseDate: "2026-01-11",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "ikura", role: "vocals" },
      { name: "Ayase", role: "lyrics" },
      { name: "Ayase", role: "composition" },
      { name: "Ayase", role: "arrangement" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "QnFRBzxmC4s",
        type: "creditless_ed",
        channelName: "アニプレックス チャンネル",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "tWqZxTAy7rU",
        type: "full_music_video",
        channelName: "YOASOBI",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=QnFRBzxmC4s",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://lnk.to/yoasobi-baby",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/baby/1861370983?i=1861370984",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://hanakimi-anime.com/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://hanakimi-anime.com/news/?article_id=69096",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/baby/1861370983?i=1861370984",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://gnn.gamer.com.tw/detail.php?sn=295227",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("deduplicates and enriches the verified Champignon Witch opening and ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "champignon-no-majo");
    const opening = anime?.themes.find((item) => item.id === "champignon-no-majo-op-1");
    const ending = anime?.themes.find((item) => item.id === "champignon-no-majo-ed-1");

    expect(anime).toMatchObject({
      id: "curated-185514",
      titleJa: "シャンピニオンの魔女",
      titleZhHant: "蘑菇魔女",
      opCount: 1,
      edCount: 1,
      hasOfficialVideo: true,
      verifiedAt: "2026-08-10"
    });
    expect(anime?.themes.map((item) => item.id)).toEqual([
      "champignon-no-majo-op-1",
      "champignon-no-majo-ed-1"
    ]);

    expect(opening).toMatchObject({
      type: "OP",
      sequence: 1,
      titleJa: "魔法使いの日記",
      titleRomaji: "Mahoutsukai no Nikki",
      artistDisplayName: "ロス",
      releaseDate: "2026-01-09",
      lastVerifiedAt: "2026-08-10"
    });
    expect(opening?.credits).toEqual([
      { name: "ロス", role: "vocals" },
      { name: "ロス", role: "lyrics" },
      { name: "ロス", role: "composition" },
      { name: "100回嘔吐", role: "arrangement" }
    ]);
    expect(opening?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "FXq7zmbs1ws",
        type: "creditless_op",
        channelName: "TBSアニメ",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "Eqp5nUfNYKo",
        type: "full_music_video",
        channelName: "ロス",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(opening?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=FXq7zmbs1ws",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://rosu.lnk.to/diary",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/wizards-diary/1864141780?i=1864141796",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(opening?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://champignon-pr.com/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=FXq7zmbs1ws",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/wizards-diary/1864141780?i=1864141796",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=145458",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));

    expect(ending).toMatchObject({
      type: "ED",
      sequence: 1,
      titleJa: "君は",
      titleRomaji: "Kimi wa",
      artistDisplayName: "Ms.OOJA",
      releaseDate: "2026-01-09",
      lastVerifiedAt: "2026-08-10"
    });
    expect(ending?.credits).toEqual([
      { name: "Ms.OOJA", role: "vocals" },
      { name: "Ms.OOJA", role: "lyrics" },
      { name: "Ryuichi Kureha", role: "lyrics" },
      { name: "Soundbreakers", role: "lyrics" },
      { name: "Soundbreakers", role: "composition" },
      { name: "Ms.OOJA", role: "composition" },
      { name: "Ryuichi Kureha", role: "composition" }
    ]);
    expect(ending?.videos).toEqual([
      expect.objectContaining({
        youtubeVideoId: "jCP_ZA_ga30",
        type: "creditless_ed",
        channelName: "TBSアニメ",
        officialStatus: "official",
        embeddable: true
      }),
      expect.objectContaining({
        youtubeVideoId: "nzUr2Px5OfU",
        type: "full_music_video",
        channelName: "MsOOJA Channel",
        officialStatus: "official",
        embeddable: true
      })
    ]);
    expect(ending?.links).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=jCP_ZA_ga30",
        linkType: "direct_track"
      }),
      expect.objectContaining({
        url: "https://msooja.lnk.to/justyou",
        linkType: "official_landing_page"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/just-you/1863324174?i=1863324343",
        linkType: "direct_track",
        region: "TW"
      })
    ]));
    expect(ending?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://champignon-pr.com/",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=jCP_ZA_ga30",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://music.apple.com/tw/album/just-you/1863324174?i=1863324343",
        language: "zh-Hant",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://acg.gamer.com.tw/acgDetail.php?s=145458",
        language: "zh-Hant",
        role: "cross_check"
      })
    ]));
  });

  it("records Eagle Talon XX as a reviewed web series without separate OP or ED", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "himitsu-kessha-taka-no-tsume-xx");

    expect(anime).toMatchObject({
      id: "curated-203472",
      titleJa: "秘密結社 鷹の爪XX（ダブルエックス）",
      titleZhHant: "秘密結社 鷹之爪XX",
      opCount: 0,
      edCount: 0,
      hasOfficialVideo: false,
      themeAvailability: "not_used",
      verifiedAt: "2026-08-10",
      themes: []
    });
    expect(anime?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({
        url: "https://www.dle.jp/jp/news/takanotsume/3567.html",
        language: "ja",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=qmF8mGKzL8Q",
        language: "ja",
        role: "first_party"
      }),
      expect.objectContaining({
        url: "https://www.youtube.com/watch?v=a8WCyAclReU",
        language: "ja",
        role: "first_party"
      })
    ]));
  });

  it("returns defensive copies from the default repository provider", async () => {
    const provider = new CuratedProvider();
    const first = await provider.getAnime("akane-banashi");
    const second = await provider.getAnime("akane-banashi");
    expect(first).not.toBe(second);
    expect(await provider.getAnime("not-a-real-slug")).toBeNull();
  });
});
