import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vuefrontPlugin from "vite-plugin-vue-vuefront";
import voie from "vite-plugin-voie";
import viteGraphlQl from "vite2-graphql-plugin";
import path from "path";
export const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true,
  };
};
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      "omit-deep-lodash",
      "apollo-boost",
      "isomorphic-fetch",
      "vue-meta/ssr",
      "cookie",
      "vite-plugin-vue-vuefront/installComponents",
    ],
    exclude: ["vue-demi"],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue({
      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: {
            lazy: ssrTransformCustomDir,
          },
        },
      },
    }),
    viteGraphlQl(),
    voie(),
    eslintPlugin({
      fix: true,
    }),
    vuefrontPlugin(),
  ],
});
