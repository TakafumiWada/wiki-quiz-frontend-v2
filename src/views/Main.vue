<template>
  <div class="main__wrapper">
    <Loading :isLoading="isLoading" />
    <div v-if="!isLoading" class="main">
      <LeftPage :words="question.words" @change-question="clickPlay" />
      <section class="main-right">
        <RightPageAnswer
          v-if="state.showAnswer"
          :question="question"
          @click-tweet="clickTweet"
        />
        <RightPageDefault
          v-else
          :categories="question.categories"
          :searchResult="searchResult"
          :animation="animation"
          :hint="hint"
          v-model:inputAnswer="state.inputAnswer"
          :showLinkAnswer="state.showLinkAnswer"
          :showAnswer="state.showAnswer"
          @click-answer="clickAnswer"
          @click-show="clickShow"
        />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";

import Loading from "@/components/common/Loading.vue";
import LeftPage from "@/components/Main/LeftPage.vue";
import RightPageAnswer from "@/components/Main/RightPageAnswer.vue";
import RightPageDefault from "@/components/Main/RightPageDefault.vue";
import { useAnimation } from "@/composable/useAnimation";
import { useQuestion } from "@/composable/useQuestion";
import { useStore } from "@/store";
import { useHint } from "@/composable/useHint";
import { useTweet } from "@/composable/useTweet";
import { linkToOuterPage } from "@/utils";

interface State {
  inputAnswer: string;
  showLinkAnswer: boolean;
  showAnswer: boolean;
}

export default defineComponent({
  name: "Main",
  components: {
    Loading,
    LeftPage,
    RightPageAnswer,
    RightPageDefault,
  },
  setup() {
    const animation = useAnimation();
    const store = useQuestion(useStore());
    const hint = useHint(store.question);
    const tweet = useTweet();

    const state: State = reactive({
      inputAnswer: "",
      showLinkAnswer: false,
      showAnswer: false,
    });
    const init = () => {
      state.inputAnswer = "";
      state.showLinkAnswer = false;
      state.showAnswer = false;
      animation.animationInit();
    };
    const searchAnswer = async () => {
      await store.searchQuestionData(state.inputAnswer);
    };

    const clickTweet = () => {
      tweet.tweetAnswer(
        store.question.value.title,
        state.inputAnswer,
        store.searchResult.value,
        linkToOuterPage
      );
    };
    const clickPlay = async () => {
      init();
      await store.getQuestionData();
    };
    const clickAnswer = async () => {
      await searchAnswer();
      state.showLinkAnswer = true;
    };
    const clickShow = () => {
      state.showAnswer = true;
    };

    onMounted(async () => {
      await clickPlay();
    });

    return {
      ...store,
      state,
      clickPlay,
      clickAnswer,
      clickTweet,
      clickShow,
      animation,
      hint,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../stylesheets/main";
</style>
