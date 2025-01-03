import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { transformerNotationHighlight } from "@shikijs/transformers";

export default defineConfig({
  site: "https://blog.pavanbhaskar.com",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "dracula",
        dark: "dracula",
      },
      transformers: [transformerNotationHighlight()]
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  output: "server",
  adapter: vercel()
});
