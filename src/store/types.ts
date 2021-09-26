import { Article } from "@/domain/Article";

export interface ArticleState {
  article: Article;
  searchResult: string;
  selectedCategoriesNumber: number;
  selectedCategories: Array<string>;
  selectedWordsNumber: number;
  selectedWords: Array<string>;
  isLoading: boolean;
}

export enum MutationTypes {
  GET_ARTICLE_DATA = "GET_ARTICLE_DATA",
  SELECT_WORDS = "SELECT_WORDS",
  SELECT_CATEGORIES = "SELECT_CATEGORIES",
  GET_SEARCH_RESULT = "GET_SEARCH_RESULT",
  START_LOADING = "START_LOADING",
  END_LOADING = "END_LOADING",
}

export enum ActionTypes {
  GET_ARTICLE_DATA = "GET_ARTICLE_DATA",
  SEARCH_ARTICLE_DATA = "SEARCH_ARTICLE_DATA",
}
