<template>
  <section class="start">
    <div class="start__text">
      <div>新たな発見を求めて</div>
      <div><span class="start__text--en">QuizWiki</span>に挑みますか？</div>
    </div>
    <div class="start__button" @click="linkToInnerPage(router, '/main')">
      <div class="start__button--sub">挑む</div>
      <div class="start__button--main">TRY</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, RouteLocationRaw } from "vue-router";

import { linkToInnerPage } from "@/utils";

export default defineComponent({
  name: "Start",
  setup() {
    const router = useRouter();

    return {
      router,
      linkToInnerPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.start {
  color: #fdfdfd;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../../public/images/play_start.png);
  background-size: cover;
  &__text {
    text-align: center;
    font-family: $noto-sans;
    font-size: 50px;
    letter-spacing: 4.8px;
    margin-top: 13%;
    &--en {
      font-family: $traviraj;
    }
  }
  &__button {
    margin-top: 10%;
    text-align: center;
    letter-spacing: 1.5px;
    cursor: pointer;
    transition-duration: 0.3s;
    &:hover {
      letter-spacing: 15px;
    }
    &--sub {
      font-family: $noto-sans;
      font-size: 20px;
      margin-bottom: -10px;
    }
    &--main {
      font-family: $traviraj;
      font-size: 40px;
    }
  }
}
</style>
