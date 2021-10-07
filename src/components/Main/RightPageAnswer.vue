<template>
  <div class="main-right__answer-view">
    <div class="answer-view__topic">
      <div class="answer-view__topic--text">答え</div>
      <img
        class="answer-view__topic--image"
        src="../../../public/images/main_book.png"
      />
    </div>
    <div class="answer-view__image--wrapper">
      <img class="answer-view__image" :src="question.image" alt="正解画像" />
    </div>
    <div class="answer-view__text">
      <a :href="question.url" target="_blank"
        >A.&nbsp;&nbsp;&nbsp;&nbsp;{{ question.title }}</a
      >
    </div>
    <div class="answer-view__subtext">
      答えをクリックしてWikipediaを確認してみよう！
    </div>
    <div class="answer-view__tweet">
      <div class="answer-view__tweet--text">あなたの答えをシェアしよう！</div>
      <div class="answer-view__tweet--button--wrapper">
        <div class="answer-view__tweet--button" @click="clickTweet">
          <img
            class="answer-view__tweet--button--image"
            src="../../../public/images/main_twitter.png"
          />
          <div class="answer-view__tweet--button--text">Tweet</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Question } from "../../types/Question";

export default defineComponent({
  name: "RightPageAnswer",
  props: {
    question: {
      type: Object as PropType<Question>,
      required: true,
    },
  },
  emits: ["click-tweet"],
  setup(_, { emit }) {
    const clickTweet = () => {
      emit("click-tweet");
    };
    return {
      clickTweet,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-right {
  &__answer-view {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.answer-view {
  &__topic {
    display: flex;
    align-items: center;
    margin: 1% 0;
    &--text {
      font-family: $noto-sans;
      font-size: 30px;
    }
    &--image {
      margin-left: 7px;
      height: 30px;
    }
  }
  &__image {
    height: 100%;
    object-fit: contain;
    &--wrapper {
      height: 50%;
      margin-top: 3%;
    }
  }
  &__text {
    min-width: 400px;
    text-align: center;
    margin-top: 20px;
    font-family: $noto-sans;
    font-size: 1.8em;
    font-weight: 800;
    text-decoration: underline;
    background: linear-gradient(transparent 70%, #92314566 70%);
    a {
      color: black;
    }
  }
  &__subtext {
    margin-top: 25px;
    font-family: $noto-sans;
    font-size: 18px;
  }
  &__tweet {
    margin-top: 30px;
    font-family: $noto-sans;
    display: flex;
    align-items: center;
    &--text {
      font-family: $noto-sans;
      font-size: 18px;
    }
    &--button {
      display: flex;
      justify-content: center;
      padding: 2px 7px;
      border: none;
      border-radius: 4px;
      background-color: #3aa5dd;
      cursor: pointer;
      &--wrapper {
        margin-left: 15px;
      }
      &--image {
        height: 23px;
      }
      &--text {
        font-family: $traviraj;
        font-size: 15px;
        color: white;
      }
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.6;
      }
    }
  }
}
</style>
