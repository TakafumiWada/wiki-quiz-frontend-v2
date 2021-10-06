import { useStore } from "@/store";
import { computed } from "vue";
import { ActionTypes, MutationTypes } from "@/store/types";

export const useStoreQuestion = () => {
  const store = useStore();
  const question = computed(() => store.state.question);
  const searchResult = computed(() => store.state.searchResult);
  const isLoading = computed(() => store.state.isLoading);

  const getQuestionData = async () => {
    await store.dispatch(ActionTypes.GET_QUESTION_DATA);
  };
  const searchQuestionData = async (inputAnswer: string) => {
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
