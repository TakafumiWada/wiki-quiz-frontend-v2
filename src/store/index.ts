import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { articleApi } from "@/api/article";
import { ArticleState, MutationTypes, ActionTypes } from "./types";
import { SELECTED_CATEGORIES_NUMBER, SELECTED_WORDS_NUMBER } from "@/config";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const key: InjectionKey<Store<ArticleState>> = Symbol();

export default createStore<ArticleState>({
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
  mutations,
  actions,
});

export const useStore = () => {
  return baseUseStore(key);
};
