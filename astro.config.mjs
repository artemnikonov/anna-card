import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://annabody.studio',
  output: "static",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
