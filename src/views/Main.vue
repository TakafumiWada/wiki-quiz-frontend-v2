<template>
  <div class="main__wrapper">
    <div class="main__loading" v-show="isLoading">
      <div
        class="main__loading--item spinner-border text-secondary"
        role="status"
      ></div>
    </div>
    <div v-if="isShow" class="main">
      <section class="main-left">
        <div class="main-left__topic">
          <div class="main-left__topic--text">関連ワード</div>
          <img
            class="main-left__topic--pencil"
            src="../../public/images/main_pencil.png"
          />
        </div>
        <div class="word__container">
          <div
            class="word"
            v-for="(word, index) in question.words"
            :key="`wordIndex:${index}`"
          >
            <div class="word__round"></div>
            <div class="word__inner">{{ word }}</div>
          </div>
        </div>
        <div class="change-button">
          <button @click="clickPlay">お題を変える</button>
        </div>
      </section>
      <section class="main-right">
        <div class="main-right__answer-view" v-if="state.showAnswer">
          <div class="answer-view__topic">
            <div class="answer-view__topic--text">答え</div>
            <img
              class="answer-view__topic--image"
              src="../../public/images/main_book.png"
            />
          </div>
          <div class="answer-view__image--wrapper">
            <img
              class="answer-view__image"
              :src="question.image"
              alt="正解画像"
            />
          </div>
          <div class="answer-view__text">
            <a :href="titleUrl" target="_blank"
              >A.&nbsp;&nbsp;&nbsp;&nbsp;{{ question.title }}</a
            >
          </div>
          <div class="answer-view__subtext">
            答えをクリックしてWikipediaを確認してみよう！
          </div>
          <div class="answer-view__tweet">
            <div class="answer-view__tweet--text">
              あなたの答えをシェアしよう！
            </div>
            <div class="answer-view__tweet--button--wrapper">
              <div class="answer-view__tweet--button" @click="tweetAnswer">
                <img
                  class="answer-view__tweet--button--image"
                  src="../../public/images/main_twitter.png"
                />
                <div class="answer-view__tweet--button--text">Tweet</div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-right__not-answer" v-else>
          <div class="main-right__topic">
            <div class="main-right__topic--text">ヒント</div>
            <img
              class="main-right__topic--light"
              src="../../public/images/main_light.png"
            />
          </div>
          <div class="hint">
            <div class="hint__round"></div>
            <div class="hint__contents">
              <div class="hint__count">
                <div class="hint__count--text">
                  Hint1.&nbsp;&nbsp;&nbsp;&nbsp;文字数は...
                </div>
                <div class="hint__count--hint">
                  <div class="hint__count--hint--text">
                    {{ titleLength }}文字
                  </div>
                  <div class="hint-mask__wrapper">
                    <div
                      class="hint-mask"
                      v-show="!animationState.isAnimationEnd[0]"
                      v-bind:class="{
                        mask: animationState.isAnimationStart[0],
                      }"
                      @click="animationStart(0)"
                      @animationend="animationEnd(0)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!animationState.isAnimationStart[0]"
                      >
                        Click!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hint__category">
                <div class="hint__category--text">
                  Hint2.&nbsp;&nbsp;&nbsp;カテゴリーは...
                </div>
                <div class="hint__category--hint">
                  <div class="hint__category--hint--inner">
                    <div
                      class="hint__category--hint--element"
                      v-for="category in question.categories"
                      :key="category"
                    >
                      {{ category }}
                    </div>
                  </div>
                  <div class="hint-mask__wrapper">
                    <div
                      class="hint-mask"
                      v-show="!animationState.isAnimationEnd[1]"
                      v-bind:class="{
                        mask: animationState.isAnimationStart[1],
                      }"
                      @click="animationStart(1)"
                      @animationend="animationEnd(1)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!animationState.isAnimationStart[1]"
                      >
                        Click!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hint__head">
                <div class="hint__head--text">
                  Hint3.&nbsp;&nbsp;&nbsp;&nbsp;頭文字は...
                </div>
                <div class="hint__head--hint">
                  <div class="hint__head--hint--text">「{{ titleHead }}」</div>
                  <div class="hint-mask__wrapper">
                    <div
                      class="hint-mask"
                      v-show="!animationState.isAnimationEnd[2]"
                      v-bind:class="{
                        mask: animationState.isAnimationStart[2],
                      }"
                      @click="animationStart(2)"
                      @animationend="animationEnd(2)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!animationState.isAnimationStart[2]"
                      >
                        Click!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="answer">
            <div class="answer__input--wrapper">
              <input
                class="answer__input"
                placeholder="この記事のタイトルは？"
                v-model="state.inputAnswer"
              />
            </div>
            <div class="answer__button--wrapper">
              <button class="answer__button" @click="clickAnswer">Go</button>
            </div>
          </div>
          <div v-if="state.showLinkAnswer" class="link_answer__wrapper">
            <div v-if="state.searchResult" class="link_answer">
              <img
                src="../../public/images/main_smile.svg"
                class="link_answer__image"
              />
              <div class="link_answer__text">Bravo！大正解！！！</div>
            </div>
            <div v-else class="link_answer">
              <img
                src="../../public/images/main_frown.svg"
                class="link_answer__image"
              />
              <div class="link_answer__text">惜しい、不正解...！</div>
            </div>
            <button
              class="link_answer__button"
              @click="state.showAnswer = true"
            >
              答えを見る
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from "vue";

import { useStore } from "@/store";
import { linkToOuterPage } from "@/utils";
import { ActionTypes, MutationTypes } from "@/store/types";

const animation = () => {
  const state = reactive({
    isAnimationStart: [false, false, false],
    isAnimationEnd: [false, false, false],
  });
  const init = () => {
    state.isAnimationStart = [false, false, false];
    state.isAnimationEnd = [false, false, false];
  };
  const animationStart = (index: number) => {
    state.isAnimationStart[index] = true;
  };
  const animationEnd = (index: number) => {
    state.isAnimationEnd[index] = true;
  };
  return {
    animationState: state,
    animationInit: init,
    animationStart,
    animationEnd,
  };
};

const storeData = () => {
  const store = useStore();
  const question = computed(() => store.state.question);
  const searchResult = computed(() => store.state.searchResult);
  const isLoading = computed(() => store.state.isLoading);

  const getQuestionData = async () => {
    await store.dispatch(ActionTypes.GET_QUESTION_DATA);
  };
  const searchQuestionData = async (inputAnswer: string) => {
    await store.dispatch(ActionTypes.SEARCH_QUESTION_DATA, {
      searchWord: inputAnswer,
      answer: store.state.question.title,
    });
  };
  const endLoading = () => {
    store.commit(MutationTypes.END_LOADING);
  };

  return {
    question,
    searchResult,
    isLoading,
    getQuestionData,
    searchQuestionData,
    endLoading,
  };
};

export default defineComponent({
  name: "Main",
  setup() {
    const animationValue = animation();
    const storeValue = storeData();
    const state = reactive({
      inputAnswer: "",
      showLinkAnswer: false,
      showAnswer: false,
    });

    const titleLength = computed(() => storeValue.question.value.title.length);
    const titleHead = computed(() => {
      if (!storeValue.question.value.title) return;
      return storeValue.question.value.title.charAt(0);
    });
    const titleUrl = computed(() => storeValue.question.value.url);
    const isShow = computed(
      () => !storeValue.isLoading.value //&& !!storeValue.question.value.title
    );
    const tweetText = computed(() => {
      if (storeValue.searchResult) {
        return `すごい！ あなたは"${storeValue.question.value.title}"を当てました🤩`;
      } else {
        return `残念... あなたは"${storeValue.question.value.title}"を"${state.inputAnswer}"と答えました...😭`;
      }
    });

    const init = () => {
      state.inputAnswer = "";
      state.showLinkAnswer = false;
      state.showAnswer = false;
      animationValue.animationInit();
    };
    const clickPlay = async () => {
      try {
        init();
        await storeValue.getQuestionData();
      } catch (err) {
        storeValue.endLoading();
        alert("記事の取得に失敗しました。ページを再起動してください。"); //TODO
      }
    };
    const searchAnswer = async () => {
      if (!state.inputAnswer) return;
      await storeValue.searchQuestionData(state.inputAnswer);
    };
    const clickAnswer = async () => {
      try {
        await searchAnswer();
        state.showLinkAnswer = true;
      } catch (err) {
        alert("入力値が不正です。"); //TODO
      }
    };

    const tweetAnswer = () => {
      const url = `https://twitter.com/intent/tweet?text=${tweetText.value}&url=https://www.quiz-wiki.com/`;
      linkToOuterPage(url);
    };

    onMounted(async () => {
      await clickPlay();
    });

    return {
      state,
      titleLength,
      titleHead,
      titleUrl,
      isShow,
      clickPlay,
      clickAnswer,
      tweetAnswer,
      ...animationValue,
      ...storeValue,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../stylesheets/main";
</style>
