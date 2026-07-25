import type { APIRoute } from "astro";
import { curatedSeasonDetails } from "@/data/curated-data";
import { publicJsonResponse } from "@/data/public-api-assets";

export function getStaticPaths() {
  return curatedSeasonDetails.map((season) => ({
    params: { season: season.id },
    props: { payload: season }
  }));
}

export const GET = (({ props }) => publicJsonResponse(props.payload)) satisfies APIRoute;
