import { state as initialState } from "@/store/state";
import { actions } from "@/store/actions";
import { ActionTypes, MutationTypes } from "@/store/types";
import { mockQuestion } from "../../mock/mockState";

jest.mock("@/api", () => ({
  QuestionApiFactory: () => {
    return {
      questionGet: () => {
        return new Promise((resolve) => {
          resolve({ status: 200, data: mockQuestion });
        });
      },
      questionconfirmPost: (payload: {
        searchWord: string;
        answer: string;
      }) => {
        return new Promise((resolve) => {
          resolve({
            status: 200,
            data: { isCorrect: payload.searchWord == payload.answer },
          });
        });
      },
    };
  },
}));

describe("actions", () => {
  it("Questionを取得する", async () => {
    const commit = jest.fn();
    const state = initialState;
    await (actions[ActionTypes.GET_QUESTION_DATA] as any)({ commit, state });
    expect(commit).toHaveBeenNthCalledWith(1, MutationTypes.START_LOADING);
    expect(commit).toHaveBeenNthCalledWith(
      2,
      MutationTypes.GET_QUESTION_DATA,
      mockQuestion
    );
    expect(commit).toHaveBeenNthCalledWith(3, MutationTypes.END_LOADING);
  });

  it("入力した情報とタイトルが一致する場合、trueを返す", async () => {
    const commit = jest.fn();
    const state = initialState;
    state.question = mockQuestion;
    const searchText = "岡山県道193号美袋停車場線";
    await (actions[ActionTypes.SEARCH_QUESTION_DATA] as any)(
      { commit, state },
      { searchWord: searchText, answer: state.question.title }
    );
    expect(commit).toHaveBeenNthCalledWith(1, MutationTypes.GET_SEARCH_RESULT, {
      isCorrect: true,
    });
  });

  it("入力した情報が空の場合、何もせずに返す", async () => {
    const commit = jest.fn();
    const state = initialState;
    state.question = mockQuestion;
    const searchText = "";
    await (actions[ActionTypes.SEARCH_QUESTION_DATA] as any)(
      { commit, state },
      { searchWord: searchText, answer: state.question.title }
    );
    expect(commit).toHaveBeenCalledTimes(0);
  });
});
