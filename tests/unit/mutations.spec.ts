import { mutations } from "@/store/mutations";
import { state as initialState } from "@/store/state";
import { MutationTypes } from "@/store/types";

import { mockQuestion, loadingState } from "./mockState";

describe("mutation", () => {
  it("GET_ARTICLE_DATA", () => {
    const state = initialState;
    mutations[MutationTypes.GET_QUESTION_DATA](state, mockQuestion);
    expect(state.question).toEqual(mockQuestion);
  });

  it("GET_SEARCH_RESULT", () => {
    const state = initialState;
    const searchResult = { isCorrect: true };
    mutations[MutationTypes.GET_SEARCH_RESULT](state, searchResult);
    expect(state.searchResult).toBe(searchResult.isCorrect);
  });

  it("START_LOADING", () => {
    const state = initialState;
    mutations[MutationTypes.START_LOADING](state);
    expect(state.isLoading).toBe(true);
  });

  it("END_LOADING", () => {
    const state = loadingState;
    mutations[MutationTypes.END_LOADING](state);
    expect(state.isLoading).toBe(false);
  });
});
