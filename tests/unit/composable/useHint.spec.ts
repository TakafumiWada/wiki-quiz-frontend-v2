import { computed } from "vue";
import { useHint } from "@/composable/useHint";
import { mockQuestion } from "../../mock/mockState";

describe("useHint", () => {
  test("Question のタイトルが5文字の場合、 titleLength.value の値は 5 となる", () => {
    const question = mockQuestion;
    question.title = "5文字です";
    const hint = useHint(computed(() => question));
    expect(hint.titleLength.value).toBe(5);
  });

  test('Question のタイトルが"テスト"の場合、 titleHead.value の値は "テ" となる', () => {
    const question = mockQuestion;
    question.title = "テスト";
    const hint = useHint(computed(() => question));
    expect(hint.titleHead.value).toBe("テ");
  });

  test("categories の値は Question のカテゴリー一覧と一致する", () => {
    const question = mockQuestion;
    const categories = mockQuestion.categories;
    const hint = useHint(computed(() => question));
    expect(hint.categories.value).toEqual(categories);
  });
});
