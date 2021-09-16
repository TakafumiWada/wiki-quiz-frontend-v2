import { createStore } from "vuex";

import { articleApi } from "@/api/article";
import { Article } from "@/domain/Article";
import { Store, MutationTypes, ActionTypes } from "@/types/store";
import { SELECTED_CATEGORIES_NUMBER, SELECTED_WORDS_NUMBER } from "@/config";

const LIMITED_WORD_LENGTH = 18;

const randomSelect = (array: Array<string>, num: number): Array<string> => {
  const newArray: Array<string> = [];
  let rand = 0;
  while (newArray.length < num && array.length > 0) {
    rand = Math.floor(Math.random() * array.length);
    if (array[rand].length <= LIMITED_WORD_LENGTH) {
      newArray.push(array[rand]);
      array.splice(rand, 1);
    }
  }
  return newArray;
};

export default createStore<Store>({
  state: {
    article: {
      categories: [],
      contents: [],
      title: "",
      topic: {},
      words: [],
      image: "",
      url: "",
    },
    searchResult: "",
    selectedCategoriesNumber: SELECTED_CATEGORIES_NUMBER,
    selectedCategories: [],
    selectedWordsNumber: SELECTED_WORDS_NUMBER,
    selectedWords: [],
    isLoading: false,
  },
  mutations: {
    [MutationTypes.GET_ARTICLE_DATA]: (
      state: Store,
      payload: Article
    ): void => {
      state.article = payload;
    },
    [MutationTypes.SELECT_WORDS]: (state: Store): void => {
      if (state.article.title) {
        state.selectedWords = randomSelect(
          state.article.words,
          state.selectedWordsNumber
        );
      }
    },
    [MutationTypes.SELECT_CATEGORIES]: (state: Store): void => {
      if (!state.article.title) return;
      if (state.article.categories.length < 3) {
        state.selectedCategories = state.article.categories;
        return;
      }
      state.selectedCategories = randomSelect(
        state.article.categories,
        state.selectedCategoriesNumber
      );
    },
    [MutationTypes.GET_SEARCH_RESULT]: (
      state: Store,
      payload: { searchResult: string }
    ): void => {
      state.searchResult = payload.searchResult;
    },
    [MutationTypes.START_LOADING]: (state: Store): void => {
      state.isLoading = true;
    },
    [MutationTypes.END_LOADING]: (state: Store): void => {
      state.isLoading = false;
    },
  },
  actions: {
    [ActionTypes.GET_ARTICLE_DATA]: async ({ commit }): Promise<void> => {
      commit(MutationTypes.START_LOADING);
      const article = await articleApi.getArticle();
      commit(MutationTypes.GET_ARTICLE_DATA, article);
      commit(MutationTypes.SELECT_WORDS);
      commit(MutationTypes.SELECT_CATEGORIES);
      commit(MutationTypes.END_LOADING);
    },
    [ActionTypes.SEARCH_ARTICLE_DATA]: async (
      { commit },
      payload: { text: string }
    ): Promise<void> => {
      const searchResult = await articleApi.searchArticle(payload.text);
      commit(MutationTypes.GET_SEARCH_RESULT, { searchResult });
    },
  },
});
