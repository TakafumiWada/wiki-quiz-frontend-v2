import { Router, RouteLocationRaw } from "vue-router";

export const linkToInnerPage = (
  router: Router,
  route: RouteLocationRaw
): void => {
  router.push(route).catch(() => {
    router.push("/");
    router.push(route);
  });
};

export const linkToOuterPage = (url: string): void => {
  window.open(url, "_blank");
};

export const failedNetwork = (): void => {
  alert(
    "【通信エラー】\nページを再起動してください。繰り返し失敗する場合は、時間が経ってから再度お試しください。"
  );
};
