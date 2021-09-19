<template>
  <div class="main__wrapper">
    <b-loading v-model="isLoading"></b-loading>
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
            v-for="(word, index) in selectedWords"
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
        <div class="main-right__answer-view" v-if="showAnswer">
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
              :src="article.image"
              alt="正解画像"
            />
          </div>
          <div class="answer-view__text">
            <a :href="titleUrl" target="_blank"
              >A.&nbsp;&nbsp;&nbsp;&nbsp;{{ article.title }}</a
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
                      v-show="!isAnimationEnd[0]"
                      v-bind:class="{
                        mask: isAnimationStart[0],
                      }"
                      @click="animationStart(0)"
                      @animationend="animationEnd(0)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!isAnimationStart[0]"
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
                      v-for="category in selectedCategories"
                      :key="category"
                    >
                      {{ category }}
                    </div>
                  </div>
                  <div class="hint-mask__wrapper">
                    <div
                      class="hint-mask"
                      v-show="!isAnimationEnd[1]"
                      v-bind:class="{
                        mask: isAnimationStart[1],
                      }"
                      @click="animationStart(1)"
                      @animationend="animationEnd(1)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!isAnimationStart[1]"
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
                      v-show="!isAnimationEnd[2]"
                      v-bind:class="{
                        mask: isAnimationStart[2],
                      }"
                      @click="animationStart(2)"
                      @animationend="animationEnd(2)"
                    >
                      <div
                        class="hint-mask__text"
                        v-show="!isAnimationStart[2]"
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
                v-model="inputAnswer"
              />
            </div>
            <div class="answer__button--wrapper">
              <button class="answer__button" @click="clickAnswer">Go</button>
            </div>
          </div>
          <div v-if="showLinkAnswer" class="link_answer__wrapper">
            <div v-if="isAnswer" class="link_answer">
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
            <button class="link_answer__button" @click="showAnswer = true">
              答えを見る
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

import { useStore } from "@/store";
import { linkToOuterPage } from "@/utils";
import { ActionTypes, MutationTypes } from "../types/store";

export default defineComponent({
  name: "Main",
  setup() {
    const store = useStore();

    const state = reactive({
      tryGetArticle: 0,
      inputAnswer: "",
      isAnswer: false,
      showLinkAnswer: false,
      showAnswer: false,
      isAnimationStart: [false, false, false],
      isAnimationEnd: [false, false, false],
    });

    const article = computed(() => store.state.article);
    const searchResult = computed(() => store.state.searchResult);
    const selectedWords = computed(() => store.state.selectedWords);
    const selectedCategories = computed(() => store.state.selectedCategories);
    const isLoading = computed(() => store.state.isLoading);

    const titleLength = computed(() => article.value.title.length);
    const titleHead = computed(() => {
      if (!article.value.title) return;
      return article.value.title.charAt(0);
    });
    const titleUrl = computed(() => article.value.url);
    const isShow = computed(
      () => !isLoading.value && selectedWords.value.length
    );
    const tweetText = computed(() => {
      if (state.isAnswer) {
        return `すごい！ あなたは"${article.value.title}"を当てました🤩`;
      } else {
        return `残念... あなたは"${article.value.title}"を"${state.inputAnswer}"と答えました...😭`;
      }
    });

    const init = () => {
      state.tryGetArticle = 0;
      state.inputAnswer = "";
      state.isAnswer = false;
      state.showLinkAnswer = false;
      state.showAnswer = false;
      state.isAnimationStart = [false, false, false];
      state.isAnimationEnd = [false, false, false];
    };
    const getArticle = async () => {
      if (state.tryGetArticle < 3) {
        state.tryGetArticle++;
        await store.dispatch(ActionTypes.GET_ARTICLE_DATA);
        if (!article.value.title) await getArticle();
      }
    };
    const clickPlay = async () => {
      try {
        init();
        await getArticle();
        if (state.tryGetArticle > 2)
          throw new Error("アクセス回数が上限を超えました");
      } catch (err) {
        store.commit(MutationTypes.END_LOADING);
        alert("記事の取得に失敗しました。ページを再起動してください。");
      }
    };
    const searchAnswer = async () => {
      if (!state.inputAnswer) return;
      await store.dispatch(ActionTypes.SEARCH_ARTICLE_DATA, {
        text: state.inputAnswer,
      });
    };
    const clickAnswer = async () => {
      try {
        await searchAnswer();
        state.showLinkAnswer = true;
        state.isAnswer = searchResult.value === article.value.title;
      } catch (err) {
        alert("入力値が不正です。");
      }
    };

    const animationStart = (index: number) => {
      state.isAnimationStart[index] = true;
    };
    const animationEnd = (index: number) => {
      state.isAnimationEnd[index] = true;
    };

    const tweetAnswer = () => {
      const url = `https://twitter.com/intent/tweet?text=${tweetText.value}&url=https://www.quiz-wiki.com/`;
      linkToOuterPage(url);
    };

    return {
      state,
      article,
      selectedWords,
      selectedCategories,
      isLoading,
      titleLength,
      titleHead,
      titleUrl,
      isShow,
      clickPlay,
      clickAnswer,
      animationStart,
      animationEnd,
      tweetAnswer,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../stylesheets/main";
</style>
