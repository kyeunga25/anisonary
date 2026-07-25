import type { APIRoute } from "astro";
import { curatedSeasons } from "@/data/curated-data";
import { publicJsonResponse } from "@/data/public-api-assets";

export const GET = (() => publicJsonResponse(curatedSeasons)) satisfies APIRoute;
