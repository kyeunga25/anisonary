import { curated2019SummerSeeds } from "@/data/curated-seeds/2019/summer";
import type { CuratedThemeSourceOverrideMap, CuratedThemeSourceSeed } from "@/data/curated-theme-sources/types";

const firstPartyUrlById: Readonly<Partial<Record<number, string>>> = {
  "100280": "https://hstar-mu.com/cd/optheme.html",
  "107672": "https://katsu-kami.com/music/index.html",
  "105074": "https://tejina-senpai.jp/music.html",
  "108111": "https://sounandesuka.jp/#music",
  "107226": "https://dumbbell-anime.jp/products/music.html",
  "104252": "https://maousama-anime.com/2019/music/",
  "107956": "https://columbia.jp/uchinoko-anime/release.html",
  "105081": "https://jyoshimuda.com/music.html",
  "105333": "https://dr-stone.jp/music/1st/",
  "105310": "https://fireforce-anime.jp/season1/music/",
  "108147": "https://granbelm.com/music/",
  "105932": "https://honeyworks.jp/release/cwhw11th/",
  "106918": "https://anime.elmelloi.com/music/",
  "21673": "https://www.symphogear-xv.com/products/",
  "102926": "https://www.nhg-anime.com/product/",
  "103048": "https://rst-anime.com/product/cd/theme/",
  "21512": "https://ensemblestars-anime.com/music",
  "107068": "https://takagi3.me/2nd/goods/music_ed.php",
  "101348": "https://vinlandsaga.jp/music/",
  "107961": "https://hensuki.com/music/",
  "106894": "https://happinet-phantom.com/wakanobu/music.html",
  "100668": "https://arifureta.com/music/701",
  "106893": "https://news.ponycanyon.co.jp/2019/06/32796",
  "101547": "https://isekai-cheat-magician.com/music/",
  "108430": "https://movie2020.given-anime.com/tv/music/",
  "107490": "https://www.tbs.co.jp/anime/machikado/1st/news/news20190610_01.html",
  "104463": "https://toaru-project.com/accelerator/music/index.html",
  "104723": "https://okaasan-online.com/music/",
  "101167": "https://danmachi.com/danmachi2/music/",
  "107876": "https://newbem.jp/music/index.html",
  "108444": "https://www.ntv.co.jp/tryknights/music/",
  "109929": "https://prtimes.jp/main/html/rd/p/000000004.000044099.html",
  "109603": "https://www.tv-tokyo.co.jp/anime/yamishibai7/staff/"
};

const firstPartyUrlsByTheme: Readonly<Partial<Record<string, readonly string[]>>> = {
  "102427:OP:1": [
    "https://www.universal-music.co.jp/the-struts/news/2019-06-27/",
    "https://www.universal-music.co.jp/the-struts/products/00602577983849/"
  ],
  "102427:ED:1": ["https://www.universal-music.co.jp/the-struts/products/uics-1355/"],
  "111131:OP:1": [
    "https://www.netflix.com/tudum/articles/black-music-anime-connection-closer-look",
    "https://www.youtube.com/watch?v=Vheqm2tJcd8"
  ],
  "109929:ED:2": [
    "https://prtimes.jp/main/html/rd/p/000000004.000044099.html",
    "https://prtimes.jp/main/html/rd/p/000000006.000044099.html"
  ],
  "100891:OP:1": ["https://myfirststory.net/contents/254098"],
  "100891:ED:1": ["https://kengan.net/music/ed.html", "https://kengan.net/music/anthems.html"],
  "111144:OP:1": ["https://bushiroad-music.com/musics/brmm-10211/"],
  "111144:ED:1": ["https://argo-bdp.com/music/post-2702/"],
  "111144:ED:2": ["https://www.youtube.com/watch?v=jlX_8QPjZmY"],
  "107663:OP:1": [
    "https://astra-anime.com/products/music.html"
  ],
  "107663:ED:1": [
    "https://astra-anime.com/products/music.html"
  ],
  "105310:OP:2": [
    "https://fireforce-anime.jp/season1/music/2nd.php"
  ],
  "105310:ED:2": [
    "https://fireforce-anime.jp/season1/music/2nd.php"
  ],
  "108147:ED:1": [
    "https://granbelm.com/music/",
    "https://uru-official.com/feature/negai"
  ],
  "105932:ED:1": [
    "https://www.sonymusic.co.jp/artist/asakuramomo/info/509173"
  ],
  "21512:OP:1": [
    "https://ensemblestars-anime.com/music/op"
  ],
  "21512:OP:2": [
    "https://ensemblestars-anime.com/music/op2"
  ],
  "21512:OP:3": [
    "https://ensemblestars-anime.com/music/op2"
  ],
  "21512:ED:1": [
    "https://ensemblestars-anime.com/music/ed"
  ],
  "21512:ED:2": [
    "https://ensemblestars-anime.com/music/ed"
  ],
  "21512:ED:3": [
    "https://ensemblestars-anime.com/music/ed2"
  ],
  "21512:ED:4": [
    "https://ensemblestars-anime.com/music/ed2"
  ],
  "21512:ED:5": [
    "https://ensemblestars-anime.com/music/ed3"
  ],
  "21512:ED:6": [
    "https://ensemblestars-anime.com/music/ed3"
  ],
  "21512:ED:7": [
    "https://ensemblestars-anime.com/music/ed4"
  ],
  "21512:ED:8": [
    "https://ensemblestars-anime.com/music/ed4"
  ],
  "21512:ED:9": [
    "https://ensemblestars-anime.com/music/ed5"
  ],
  "21512:ED:10": [
    "https://ensemblestars-anime.com/music/ed5"
  ],
  "21512:ED:11": [
    "https://ensemblestars-anime.com/music/ed6"
  ],
  "21512:ED:12": [
    "https://ensemblestars-anime.com/music/ed6"
  ],
  "107068:OP:1": [
    "https://takagi3.me/2nd/goods/music.php"
  ],
  "100668:ED:1": [
    "https://arifureta.com/music/704"
  ],
  "106893:ED:1": [
    "https://news.ponycanyon.co.jp/2019/07/33194"
  ],
  "107490:OP:1": [
    "https://www.tbs.co.jp/anime/machikado/1st/news/news20190610_01.html",
    "https://www.tbs.co.jp/anime/machikado/1st/goods/cd.html"
  ],
  "107490:ED:1": [
    "https://www.tbs.co.jp/anime/machikado/1st/news/news20190610_01.html",
    "https://www.tbs.co.jp/anime/machikado/1st/goods/cd.html"
  ]
};

const crossCheckById: Readonly<Partial<Record<number, CuratedThemeSourceSeed>>> = {
  102427: {
    label: "Wikipedia：2019 年配信版 OP／ED 交叉核對",
    url: "https://en.wikipedia.org/wiki/Knights_of_the_Zodiac:_Saint_Seiya",
    language: "en",
    role: "cross_check"
  },
  109929: {
    label: "アニソン調べる：配信版 OP と輪替 ED 交叉核對",
    url: "https://anison.online/anime/1159",
    language: "ja",
    role: "cross_check"
  }
};

export const curated2019SummerThemeSources: CuratedThemeSourceOverrideMap = Object.fromEntries(
  curated2019SummerSeeds.flatMap((seed) => seed.themes.map((theme) => {
    const key = `${seed.anilistId}:${theme.type}:${theme.sequence}`;
    const urls = firstPartyUrlsByTheme[key] ?? [firstPartyUrlById[seed.anilistId]];
    const crossCheck: CuratedThemeSourceSeed | undefined = crossCheckById[seed.anilistId] ?? (seed.animeThemesUrl ? {
      label: "AnimeThemes：OP／ED 次序與演唱版本交叉核對",
      url: seed.animeThemesUrl,
      language: "en",
      role: "cross_check"
    } : undefined);
    if (!urls.length || urls.some((url) => !url) || !crossCheck) {
      throw new Error(`Missing reviewed summer 2019 theme source: ${key}`);
    }
    const sources: CuratedThemeSourceSeed[] = [
      ...urls.map((url): CuratedThemeSourceSeed => ({
        label: `《${seed.titleZhHant}》第一方音樂資料：曲目、用途與演唱版本`,
        url: url!,
        language: seed.anilistId === 111131 ? "en" : "ja",
        role: "first_party"
      })),
      crossCheck
    ];
    return [key, sources];
  }))
);
