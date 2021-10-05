<template>
  <section class="section-footer">
    <div class="section-footer__button">
      <button @click="linkToInnerPage(router, '/start')">
        <div>Quizに挑む</div>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

import { linkToInnerPage } from "@/utils";

export default defineComponent({
  name: "SectionFooter",
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
.section-footer {
  height: 15vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $home-color;
  &__button {
    button {
      height: 50px;
      width: 300px;
      font-size: 24px;
      letter-spacing: 1.65px;
      color: white;
      background-color: transparent;
      border: 2px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        letter-spacing: 10px;
      }
      div {
        height: 40px;
        width: 220px;
        line-height: 40px;
        font-family: $noto-sans;
        transition-duration: 0.3s;
      }
    }
  }
}
</style>
