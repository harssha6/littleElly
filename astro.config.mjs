import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.littleelly.com/",
    integrations: [sitemap(), react(), tailwind()],
    output: "server",
    adapter: vercel(),
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport",
    },
    server: (command) => ({
        port: command === "dev" ? 4231 : 4000,
        host: true,
    }),
});
