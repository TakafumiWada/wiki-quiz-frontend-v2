import { Question } from "@/types/Question";

export interface QuestionState {
  question: Question;
  searchResult: boolean;
  isLoading: boolean;
}

export enum MutationTypes {
  GET_QUESTION_DATA = "GET_QUESTION_DATA",
  GET_SEARCH_RESULT = "GET_SEARCH_RESULT",
  START_LOADING = "START_LOADING",
  END_LOADING = "END_LOADING",
}

export enum ActionTypes {
  GET_QUESTION_DATA = "GET_ARTICLE_DATA",
  SEARCH_QUESTION_DATA = "SEARCH_ARTICLE_DATA",
}
