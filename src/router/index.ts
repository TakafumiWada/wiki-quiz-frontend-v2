import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/start",
    name: "Start",
    component: () => import("@/views/Start.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      let className = "";
      switch (to.hash) {
        case "#top":
          className = ".top";
          break;
        case "#about":
          className = ".about";
          break;
        case "#howto":
          className = ".howto";
          break;
        default:
          break;
      }
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
