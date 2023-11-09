import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      styles: "/src/styles",
      assets: "/src/assets",
      constants: "/src/constants",
      models: "/src/models",
      store: "/src/store",
      utils: "/src/utils",
    },
  },
});
