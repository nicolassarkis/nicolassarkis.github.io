// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nicolassarkis.github.io",
  vite: {
    ssr: {
      optimizeDeps: {
        include: ["dayjs"],
      },
    },
    plugins: [tailwindcss()],
  },
});
