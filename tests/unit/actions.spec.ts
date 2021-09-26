import { state as initialState } from "@/store/state";
import { actions } from "@/store/actions";
import { ActionTypes, MutationTypes } from "@/store/types";

jest.mock("@/api/article", () => ({
  articleApi: {
    getArticle: () => {
      return new Promise((resolve) => {
        resolve(mockArticle);
      });
    },
    searchArticle: (searchText: string) => {
      return new Promise((resolve) => {
        resolve(searchText);
      });
    },
  },
}));

import { mockArticle } from "./mockState";

describe("actions", () => {
  it("GET_ARTICLE_DATA", async () => {
    const commit = jest.fn();
    const state = initialState;
    await (actions[ActionTypes.GET_ARTICLE_DATA] as any)({ commit, state });
    expect(commit).toHaveBeenNthCalledWith(1, MutationTypes.START_LOADING);
    expect(commit).toHaveBeenNthCalledWith(
      2,
      MutationTypes.GET_ARTICLE_DATA,
      mockArticle
    );
    expect(commit).toHaveBeenNthCalledWith(3, MutationTypes.SELECT_WORDS);
    expect(commit).toHaveBeenNthCalledWith(4, MutationTypes.SELECT_CATEGORIES);
    expect(commit).toHaveBeenNthCalledWith(5, MutationTypes.END_LOADING);
  });
  it("SEARCH_ARTICLE_DATA", async () => {
    const commit = jest.fn();
    const state = initialState;
    const searchText = "searchText";
    await (actions[ActionTypes.SEARCH_ARTICLE_DATA] as any)(
      { commit, state },
      { text: searchText }
    );
    expect(commit).toHaveBeenNthCalledWith(1, MutationTypes.GET_SEARCH_RESULT, {
      searchResult: searchText,
    });
  });
});
