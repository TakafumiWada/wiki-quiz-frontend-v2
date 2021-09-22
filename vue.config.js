module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      title: "QuizWiki",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/stylesheets/global.scss";`,
      },
    },
  },
};
