import { computed } from "vue";
import { Store } from "vuex";
import { ActionTypes, MutationTypes, QuestionState } from "@/store/types";

export const useQuestion = (store: Store<QuestionState>) => {
  const question = computed(() => store.state.question);
  const searchResult = computed(() => store.state.searchResult);
  const isLoading = computed(() => store.state.isLoading);

  const getQuestionData = async () => {
    await store.dispatch(ActionTypes.GET_QUESTION_DATA);
  };
  const searchQuestionData = async (inputAnswer: string) => {
    if (!inputAnswer) return;
    await store.dispatch(ActionTypes.SEARCH_QUESTION_DATA, {
      searchWord: inputAnswer,
      answer: store.state.question.title,
    });
  };
  const endLoading = () => {
    store.commit(MutationTypes.END_LOADING);
  };

  return {
    question,
    searchResult,
    isLoading,
    getQuestionData,
    searchQuestionData,
    endLoading,
  };
};
