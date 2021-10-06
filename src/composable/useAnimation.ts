import { reactive } from "@vue/reactivity";

export const useAnimation = () => {
  const state = reactive({
    isAnimationStart: [false, false, false],
    isAnimationEnd: [false, false, false],
  });
  const init = () => {
    state.isAnimationStart = [false, false, false];
    state.isAnimationEnd = [false, false, false];
  };
  const animationStart = (index: number) => {
    state.isAnimationStart[index] = true;
  };
  const animationEnd = (index: number) => {
    state.isAnimationEnd[index] = true;
  };
  return {
    animationState: state,
    animationInit: init,
    animationStart,
    animationEnd,
  };
};
