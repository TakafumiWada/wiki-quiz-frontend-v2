import { ArticleState } from "./types";
import { SELECTED_CATEGORIES_NUMBER, SELECTED_WORDS_NUMBER } from "@/config";

export const state: ArticleState = {
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
};
