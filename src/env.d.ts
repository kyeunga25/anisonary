/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ANISONARY_REQUIRE_API_DATA?: "true" | "false";
  readonly PUBLIC_API_BASE_URL?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_DEFAULT_SEASON?: string;
  readonly PUBLIC_TIMEZONE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
