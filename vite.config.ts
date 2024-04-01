import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "node:url"

import Nesting from "tailwindcss/nesting"
import TailWindCSS from "tailwindcss"
import AutoPrefixer from "autoprefixer"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      dts: "./src/auto-imports.d.ts",
    }),
    Components({ dirs: ["src/components"], dts: "src/components.d.ts" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [Nesting, TailWindCSS, AutoPrefixer],
    },
  },
})
