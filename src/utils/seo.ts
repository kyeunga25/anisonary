import type { PublicAnimeDetail, PublicSeasonDetail, PublicSeasonSummary } from "@/types/public-api";

export type JsonLd = Record<string, unknown>;

function absoluteUrl(pathOrUrl: string, site: URL | string): string {
  return new URL(pathOrUrl, site).toString();
}

export function serializeJsonLd(value: JsonLd | JsonLd[]): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function buildWebsiteJsonLd(site: URL | string): JsonLd {
  const url = absoluteUrl("/", site);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    url,
    name: "Anisonary 動畫歌典",
    alternateName: "Anisonary",
    description: "按季度與動畫，找到每一首 OP／ED 的官方入口。",
    inLanguage: "zh-Hant"
  };
}

export function buildSeasonJsonLd(season: PublicSeasonDetail, site: URL | string): JsonLd {
  const url = absoluteUrl(`/seasons/${season.id}/`, site);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: `${season.year} ${season.titleZhHant}`,
    alternateName: season.titleJa,
    inLanguage: ["zh-Hant", "ja"],
    isPartOf: {
      "@id": `${absoluteUrl("/", site)}#website`
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: season.anime.length,
      itemListElement: season.anime.map((anime, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TVSeries",
          name: anime.titleJa,
          alternateName: [anime.titleZhHant, anime.titleRomaji].filter(Boolean),
          url: absoluteUrl(`/anime/${anime.slug}/`, site)
        }
      }))
    }
  };
}

export function buildAnimeJsonLd(
  anime: PublicAnimeDetail,
  season: PublicSeasonSummary,
  site: URL | string
): JsonLd {
  const url = absoluteUrl(`/anime/${anime.slug}/`, site);
  const sameAs = [anime.officialSiteUrl, anime.anilistUrl, anime.bangumiUrl].filter(
    (reference): reference is string => Boolean(reference)
  );

  return {
    "@context": "https://schema.org",
    "@type": "TVSeries",
    "@id": `${url}#tvseries`,
    url,
    name: anime.titleJa,
    alternateName: [anime.titleZhHant, anime.titleRomaji].filter(Boolean),
    image: anime.posterUrl ? absoluteUrl(anime.posterUrl, site) : undefined,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    inLanguage: ["ja", "zh-Hant"],
    isPartOf: {
      "@type": "CollectionPage",
      "@id": `${absoluteUrl(`/seasons/${season.id}/`, site)}#collection`,
      name: `${season.year} ${season.titleZhHant}`
    }
  };
}
