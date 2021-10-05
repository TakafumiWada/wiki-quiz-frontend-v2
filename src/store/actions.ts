import { MutationTypes, ActionTypes, QuestionState } from "./types";
import { QuestionApiFactory } from "@/api";
import { ActionTree } from "vuex";
import { failedNetwork } from "@/utils";

const questionApi = QuestionApiFactory();

export const actions: ActionTree<QuestionState, any> = {
  [ActionTypes.GET_QUESTION_DATA]: async ({ commit }): Promise<void> => {
    commit(MutationTypes.START_LOADING);
    try {
      const response = await questionApi.questionGet();
      const question = response.data;
      commit(MutationTypes.GET_QUESTION_DATA, question);
      commit(MutationTypes.END_LOADING);
    } catch (error) {
      failedNetwork();
    }
  },
  [ActionTypes.SEARCH_QUESTION_DATA]: async (
    { commit },
    payload: { searchWord: string; answer: string }
  ): Promise<void> => {
    try {
      const { isCorrect } = (await questionApi.questionconfirmPost(payload))
        .data;
      commit(MutationTypes.GET_SEARCH_RESULT, { isCorrect });
    } catch (error) {
      if (error.response.status === 400) {
        alert(
          "回答に不正な値が入っています。\n「半角英数字」、「全角かな」から入力してください。"
        );
      } else {
        failedNetwork();
      }
    }
  },
};
