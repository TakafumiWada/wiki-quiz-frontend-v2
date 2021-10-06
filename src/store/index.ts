import { InjectionKey } from "@vue/composition-api";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { QuestionState } from "./types";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const key: InjectionKey<Store<QuestionState>> = Symbol();

export default createStore<QuestionState>({
  state,
  mutations,
  actions,
});

export const useStore = (): Store<QuestionState> => {
  return baseUseStore(key);
};
