import { MutationTree } from "vuex";
import { QuestionState, MutationTypes } from "./types";
import { Question } from "@/types/Question";

export const mutations: MutationTree<QuestionState> = {
  [MutationTypes.GET_QUESTION_DATA]: (state, payload: Question): void => {
    state.question = payload;
  },
  [MutationTypes.GET_SEARCH_RESULT]: (
    state,
    payload: { isCorrect: boolean }
  ): void => {
    state.searchResult = payload.isCorrect;
  },
  [MutationTypes.START_LOADING]: (state): void => {
    state.isLoading = true;
  },
  [MutationTypes.END_LOADING]: (state): void => {
    state.isLoading = false;
  },
};
