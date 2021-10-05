export const linkToOuterPage = (url: string): void => {
  window.open(url, "_blank");
};

export const failedNetwork = () => {
  alert(
    "【通信エラー】\nページを再起動してください。繰り返し失敗する場合は、時間が経ってから再度お試しください。"
  );
};
