import { ComputedRef, computed } from "vue";
import { Question } from "@/types/Question";

export const useHint = (question: ComputedRef<Question>) => {
  return {
    titleLength: computed(() => question.value.title.length),
    titleHead: computed(() => question.value.title.charAt(0)),
    categories: computed(() => question.value.categories),
  };
};
