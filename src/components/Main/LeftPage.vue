<template>
  <section class="main-left">
    <div class="main-left__topic">
      <div class="main-left__topic--text">関連ワード</div>
      <img
        class="main-left__topic--pencil"
        src="../../../public/images/main_pencil.png"
      />
    </div>
    <CardContainer :words="words" />
    <div class="change-button">
      <button @click="changeQuestion">お題を変える</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CardContainer from "@/components/Main/CardContainer.vue";

export default defineComponent({
  name: "LeftPage",
  components: { CardContainer },
  props: {
    words: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  emits: ["change-question"],
  setup(_, { emit }) {
    const changeQuestion = () => {
      emit("change-question");
    };
    return {
      changeQuestion,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-left {
  height: 80%;
  width: 38%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__topic {
    display: flex;
    align-items: center;
    margin: 1% 0;
    &--text {
      font-family: $noto-sans;
      font-size: 30px;
    }
    &--pencil {
      margin-left: 7px;
      height: 30px;
    }
  }
}
.change-button {
  margin-top: 5%;
  button {
    height: 44px;
    width: 222px;
    font-family: $noto-sans;
    font-size: 18px;
    letter-spacing: 1.05px;
    color: white;
    background-color: #2b2e4ae6;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
}
</style>
