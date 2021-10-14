import { createApp } from "vue";
import VueGtag from "vue-gtag";
import App from "./App.vue";
import router from "./router";
import store, { key } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(store, key)
  .use(router)
  .use(VueGtag, {
    config: { id: process.env.VUE_APP_GA_MEASUREMENT_ID },
    router,
  })
  .mount("#app");
