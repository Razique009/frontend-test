import { defineConfig } from "vite"
import { createVuePlugin } from "vite-plugin-vue2"
import { createSvgPlugin } from "vite-plugin-vue2-svg"

export default defineConfig({
  plugins: [createVuePlugin(), createSvgPlugin()],
})
