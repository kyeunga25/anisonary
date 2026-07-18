import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { beforeAll, describe, expect, it } from "vitest";
import AnimeCard from "@/components/anime/AnimeCard.astro";
import ErrorState from "@/components/common/ErrorState.astro";
import SourceList from "@/components/anime/SourceList.astro";
import ExternalLinkList from "@/components/links/ExternalLinkList.astro";
import ThemeCard from "@/components/theme/ThemeCard.astro";
import ThemeEmptyState from "@/components/theme/ThemeEmptyState.astro";
import LazyYouTube from "@/components/youtube/LazyYouTube.astro";
import { MockProvider } from "@/data/mock-provider";
import type { PublicAnimeDetail } from "@/types/public-api";

describe("Phase 1 public components", () => {
  let container: Awaited<ReturnType<typeof AstroContainer.create>>;
  let anime: PublicAnimeDetail;

  beforeAll(async () => {
    container = await AstroContainer.create();
    anime = (await new MockProvider().getAnime("yoake-no-polaris"))!;
  });

  it("renders an accessible anime card", async () => {
    const html = await container.renderToString(AnimeCard, { props: { anime } });

    expect(html).toContain('lang="ja"');
    expect(html).toContain("查看 夜明けのポラリス");
    expect(html).toContain(anime.posterAlt);
  });

  it("renders theme identity, credits and source verification", async () => {
    const html = await container.renderToString(ThemeCard, { props: { theme: anime.themes[0] } });

    expect(html).toContain("OP1");
    expect(html).toContain("作詞");
    expect(html).toContain("最後驗證：2026-07-14");
  });

  it("keeps YouTube iframe unloaded until an explicit button action", async () => {
    const html = await container.renderToString(LazyYouTube, {
      props: { video: anime.themes[0]!.videos[0] }
    });

    expect(html).toContain("載入 YouTube 影片");
    expect(html).toContain("youtube-nocookie.com");
    expect(html).not.toContain("<iframe");
  });

  it("labels external links and applies safe rel attributes", async () => {
    const html = await container.renderToString(ExternalLinkList, {
      props: { links: anime.themes[0]!.links }
    });

    expect(html).toContain("直接歌曲");
    expect(html).toContain("搜尋結果");
    expect(html).toContain('rel="noopener noreferrer external"');
    expect(html).toContain("在新分頁開啟外部網站");
  });

  it("renders source, empty and error states", async () => {
    const [sources, empty, error] = await Promise.all([
      container.renderToString(SourceList, { props: { sources: anime.sources } }),
      container.renderToString(ThemeEmptyState, {
        props: { seasonId: "2026-summer", seasonLabel: "2026 夏季動畫" }
      }),
      container.renderToString(ErrorState)
    ]);

    expect(sources).toContain("最後驗證");
    expect(empty).toContain("主題曲資料尚未公布");
    expect(error).toContain('role="alert"');
    expect(error).toContain("暫時無法載入資料");
  });
});
