import { MutationTypes, ActionTypes, QuestionState } from "./types";
import { QuestionApiFactory } from "@/api";
import { ActionTree } from "vuex";

const questionApi = QuestionApiFactory();

export const actions: ActionTree<QuestionState, any> = {
  [ActionTypes.GET_QUESTION_DATA]: async ({ commit }): Promise<void> => {
    commit(MutationTypes.START_LOADING);
    const response = await questionApi.questionGet();
    if (response.status == 500) {
      console.log("aaaa"); //TODO
      return;
    }
    const question = response.data;
    commit(MutationTypes.GET_QUESTION_DATA, question);
    commit(MutationTypes.END_LOADING);
  },
  [ActionTypes.SEARCH_QUESTION_DATA]: async (
    { commit },
    payload: { searchWord: string; answer: string }
  ): Promise<void> => {
    const { isCorrect } = (await questionApi.questionconfirmPost(payload)).data;
    commit(MutationTypes.GET_SEARCH_RESULT, { isCorrect });
  },
};
