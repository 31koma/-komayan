import { defineConfig } from "astro/config";
import { sites } from "@openai/sites-vite-plugin";

export default defineConfig({
  site: process.env.SITE_URL,
  output: "static",
  vite: {
    plugins: [sites()],
  },
});
