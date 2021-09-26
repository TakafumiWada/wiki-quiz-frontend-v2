import { mutations } from "@/store/mutations";
import { state as initialState } from "@/store/state";
import { MutationTypes } from "@/store/types";

import { mockArticle, articleState, loadingState } from "./mockState";

describe("mutation", () => {
  it("GET_ARTICLE_DATA", () => {
    const state = initialState;
    mutations[MutationTypes.GET_ARTICLE_DATA](state, mockArticle);
    expect(state.article).toEqual(mockArticle);
  });

  it("SELECT_WORDS", () => {
    const state = articleState;
    mutations[MutationTypes.SELECT_WORDS](state);
    expect(state.selectedWords.length).toBe(state.selectedWordsNumber);
  });

  it("SELECT_CATEGORIES", () => {
    const state = articleState;
    mutations[MutationTypes.SELECT_CATEGORIES](initialState);
    expect(state.selectedWords.length).toBe(state.selectedWordsNumber);
  });

  it("GET_SEARCH_RESULT", () => {
    const state = initialState;
    const searchResult = "search result";
    mutations[MutationTypes.GET_SEARCH_RESULT](state, { searchResult });
    expect(state.searchResult).toBe(searchResult);
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
