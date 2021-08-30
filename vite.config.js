import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vuefrontPlugin from "vite-plugin-vue-vuefront";
import voie from "vite-plugin-voie";
import viteGraphlQl from "vite2-graphql-plugin";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["vuefront", "vuefront/lib/seo"],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue({
      // skipPreBuild: true,
    }),
    viteGraphlQl(),
    voie(),
    eslintPlugin({
      fix: true,
    }),
    vuefrontPlugin(),
  ],
});
