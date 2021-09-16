const config = require("./vite.config");

/**
 * @type {import('vite').UserConfig}
 */
module.exports = Object.assign(config, {
  ssr: {},
  resolve: {
    alias: [
      {
        find: "@vue/runtime-dom",
        replacement: "@vue/runtime-dom/dist/runtime-dom.cjs.js",
      },
      {
        find: "vue-i18n",
        replacement: "vue-i18n/dist/vue-i18n.runtime-esm-bundler.js",
      },
      {
        find: "@vue/runtime-core",
        replacement: "@vue/runtime-core/dist/runtime-core.cjs.js",
      },
    ],
  },
});
