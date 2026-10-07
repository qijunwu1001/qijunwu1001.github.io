import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL,
	base: process.env.BASE_PATH || undefined,
	devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
