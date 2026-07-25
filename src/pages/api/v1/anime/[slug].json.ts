import type { APIRoute } from "astro";
import { curatedAnimeDetails } from "@/data/curated-data";
import { publicJsonResponse } from "@/data/public-api-assets";

export function getStaticPaths() {
  return curatedAnimeDetails.map((anime) => ({
    params: { slug: anime.slug },
    props: { payload: anime }
  }));
}

export const GET = (({ props }) => publicJsonResponse(props.payload)) satisfies APIRoute;
