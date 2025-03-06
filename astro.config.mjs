// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://soc2certification.com',
  integrations: [
    sitemap(),
  ],
});

// https://astro.build/config
export default defineConfig({
  site: "https://soc2certification.com",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});

export default defineConfig({
  site: 'https://soc2certification.com',
  integrations: [sitemap()],
});
