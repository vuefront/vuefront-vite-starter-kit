module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: [
      "./src/components/**/*.vue",
      "./node_module/vuefront/**/*.vue",
      "./node_module/@vuefront/checkout-app/**/*.vue",
    ],
    safelist: [/^vf-/, /^md:vf-/, /^sm:vf-/, /^lg:vf-/],
  },
  // theme: {
  //   extend: {
  //     vuefront: {
  //       colors: {
  //         primary: 'red'
  //       }
  //     }
  //   }
  // },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("vuefront/tailwind/plugin.js"),
  ],
};
