import { MutationTypes, ActionTypes, ArticleState } from "./types";
import { articleApi } from "@/api/article";
import { ActionTree } from "vuex";

export const actions: ActionTree<ArticleState, any> = {
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
};
