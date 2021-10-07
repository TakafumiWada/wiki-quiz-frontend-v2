import { reactive } from "@vue/reactivity";

export interface AnimationState {
  isAnimationStart: boolean[];
  isAnimationEnd: boolean[];
}

export interface Animation {
  animationState: AnimationState;
  animationInit: () => void;
  animationStart: (index: number) => void;
  animationEnd: (index: number) => void;
}

export const useAnimation = (): Animation => {
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
