import { ComputedRef, computed } from "vue";
import { Question } from "@/types/Question";

export interface Hint {
  titleLength: ComputedRef<number>;
  titleHead: ComputedRef<string>;
  categories: ComputedRef<string[]>;
}

export const useHint = (question: ComputedRef<Question>): Hint => {
  return {
    titleLength: computed(() => question.value.title.length),
    titleHead: computed(() => question.value.title.charAt(0)),
    categories: computed(() => question.value.categories),
  };
};
