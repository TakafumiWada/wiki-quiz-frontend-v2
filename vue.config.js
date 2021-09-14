module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/stylesheets/global.scss";`,
      },
    },
  },
};
