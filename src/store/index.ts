import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { ArticleState } from "./types";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const key: InjectionKey<Store<ArticleState>> = Symbol();

export default createStore<ArticleState>({
  state,
  mutations,
  actions,
});

export const useStore = () => {
  return baseUseStore(key);
};
