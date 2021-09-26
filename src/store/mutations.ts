import { MutationTree } from "vuex";
import { ArticleState, MutationTypes } from "./types";
import { Article } from "@/domain/Article";
import { LIMITED_WORD_LENGTH } from "@/config";

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

export const mutations: MutationTree<ArticleState> = {
  [MutationTypes.GET_ARTICLE_DATA]: (
    state: ArticleState,
    payload: Article
  ): void => {
    state.article = payload;
  },
  [MutationTypes.SELECT_WORDS]: (state: ArticleState): void => {
    if (state.article.title) {
      state.selectedWords = randomSelect(
        state.article.words,
        state.selectedWordsNumber
      );
    }
  },
  [MutationTypes.SELECT_CATEGORIES]: (state: ArticleState): void => {
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
    state: ArticleState,
    payload: { searchResult: string }
  ): void => {
    state.searchResult = payload.searchResult;
  },
  [MutationTypes.START_LOADING]: (state: ArticleState): void => {
    state.isLoading = true;
  },
  [MutationTypes.END_LOADING]: (state: ArticleState): void => {
    state.isLoading = false;
  },
};
