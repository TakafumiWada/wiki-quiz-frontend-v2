import { QuestionState } from "./types";

export const state: QuestionState = {
  question: {
    title: "",
    categories: [],
    words: [],
    image: "",
    url: "",
  },
  searchResult: false,
  isLoading: false,
};
