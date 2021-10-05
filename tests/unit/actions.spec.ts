import { state as initialState } from "@/store/state";
import { actions } from "@/store/actions";
import { ActionTypes, MutationTypes } from "@/store/types";
import { mockQuestion } from "./mockState";

jest.mock("@/api", () => ({
  // articleApi: {
  //   getArticle: () => {
  //     return new Promise((resolve) => {
  //       resolve(mockQuestion);
  //     });
  //   },
  //   searchArticle: (searchText: string) => {
  //     return new Promise((resolve) => {
  //       resolve(searchText);
  //     });
  //   },
  // },
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
          resolve({ status: 200, data: { isCorrect: true } });
        });
      },
    };
  },
}));

describe("actions", () => {
  it("GET_QUESTION_DATA", async () => {
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
  it("SEARCH_QUESTION_DATA", async () => {
    const commit = jest.fn();
    const state = initialState;
    const searchText = "searchText";
    await (actions[ActionTypes.SEARCH_QUESTION_DATA] as any)(
      { commit, state },
      { text: searchText }
    );
    expect(commit).toHaveBeenNthCalledWith(1, MutationTypes.GET_SEARCH_RESULT, {
      isCorrect: true,
    });
  });
});
