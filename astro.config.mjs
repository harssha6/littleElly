import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from '@astrojs/react';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  server: (command) => ({ port: command === 'dev' ? 4231 : 4000, host: true })
});