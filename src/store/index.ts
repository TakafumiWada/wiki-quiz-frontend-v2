import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { articleApi } from "@/api/article";
import { Article } from "@/domain/Article";
import { ArticleStore, MutationTypes, ActionTypes } from "@/types/store";
import {
  SELECTED_CATEGORIES_NUMBER,
  SELECTED_WORDS_NUMBER,
  LIMITED_WORD_LENGTH,
} from "@/config";

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

export const key: InjectionKey<Store<ArticleStore>> = Symbol();

export default createStore<ArticleStore>({
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
      state: ArticleStore,
      payload: Article
    ): void => {
      state.article = payload;
    },
    [MutationTypes.SELECT_WORDS]: (state: ArticleStore): void => {
      if (state.article.title) {
        state.selectedWords = randomSelect(
          state.article.words,
          state.selectedWordsNumber
        );
      }
    },
    [MutationTypes.SELECT_CATEGORIES]: (state: ArticleStore): void => {
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
      state: ArticleStore,
      payload: { searchResult: string }
    ): void => {
      state.searchResult = payload.searchResult;
    },
    [MutationTypes.START_LOADING]: (state: ArticleStore): void => {
      state.isLoading = true;
    },
    [MutationTypes.END_LOADING]: (state: ArticleStore): void => {
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

export const useStore = () => {
  return baseUseStore(key);
};
