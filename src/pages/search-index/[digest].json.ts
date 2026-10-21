import type { APIRoute, GetStaticPaths } from "astro";
import { getDataProvider, shouldRequireApiData } from "@/data/provider";
import { loadCatalogSearchData } from "@/data/page-data";
import { buildCatalogSearchAssets } from "@/data/catalog-search-assets";
import { buildCatalogSearchIndex } from "@/utils/catalog-search-index";

export const getStaticPaths = (async () => {
  const data = await loadCatalogSearchData(getDataProvider(), shouldRequireApiData());
  if (data.status === "error") return [];
  const { chunks, routes } = buildCatalogSearchAssets(buildCatalogSearchIndex(data.entries));
  return [...chunks, ...routes].map(({ digest, content }) => ({
    params: { digest }, props: { content }
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => new Response(props.content, {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "public, max-age=31536000, immutable",
    "X-Robots-Tag": "noindex"
  }
});
