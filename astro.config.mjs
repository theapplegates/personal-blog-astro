// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { transformerNotationHighlight } from "@shikijs/transformers";
import vercel from "@astrojs/vercel"; // Updated import

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog.paulapplegate.com",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  
  markdown: {
    shikiConfig: {
      themes: {
        light: "dracula",
        dark: "dracula",
      },
      transformers: [transformerNotationHighlight()],
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  adapter: vercel(), // Removed "hybrid" output
});
