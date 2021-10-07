import { useAnimation, Animation } from "@/composable/useAnimation";

let animation: Animation;

describe("useAnimation", () => {
  beforeAll(() => {
    animation = useAnimation();
  });

  test("animationStart() で渡した index の state が true になる", () => {
    const index = 1;
    animation.animationStart(index);
    expect(animation.animationState.isAnimationStart).toEqual([
      false,
      true,
      false,
    ]);
  });

  test("animationEnd() で渡した index の state が true になる", () => {
    const index = 1;
    animation.animationEnd(index);
    expect(animation.animationState.isAnimationEnd).toEqual([
      false,
      true,
      false,
    ]);
  });

  test("init() を実行した場合、全ての state の値が false になる", () => {
    const index = 1;
    animation.animationState.isAnimationStart = [true, false, true];
    animation.animationState.isAnimationStart = [false, true, false];

    animation.animationInit();
    expect(animation.animationState.isAnimationStart).toEqual([
      false,
      false,
      false,
    ]);
    expect(animation.animationState.isAnimationEnd).toEqual([
      false,
      false,
      false,
    ]);
  });
});
