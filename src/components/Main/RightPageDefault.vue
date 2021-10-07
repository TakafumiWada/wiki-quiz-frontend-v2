<template>
  <div class="main-right__not-answer">
    <div class="main-right__topic">
      <div class="main-right__topic--text">ヒント</div>
      <img
        class="main-right__topic--light"
        src="../../../public/images/main_light.png"
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
              {{ hint.titleLength }}文字
            </div>
            <div class="hint-mask__wrapper">
              <div
                class="hint-mask"
                v-show="!animation.animationState.isAnimationEnd[0]"
                v-bind:class="{
                  mask: animation.animationState.isAnimationStart[0],
                }"
                @click="animation.animationStart(0)"
                @animationend="animation.animationEnd(0)"
              >
                <div
                  class="hint-mask__text"
                  v-show="!animation.animationState.isAnimationStart[0]"
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
                v-for="category in categories"
                :key="category"
              >
                {{ category }}
              </div>
            </div>
            <div class="hint-mask__wrapper">
              <div
                class="hint-mask"
                v-show="!animation.animationState.isAnimationEnd[1]"
                v-bind:class="{
                  mask: animation.animationState.isAnimationStart[1],
                }"
                @click="animation.animationStart(1)"
                @animationend="animation.animationEnd(1)"
              >
                <div
                  class="hint-mask__text"
                  v-show="!animation.animationState.isAnimationStart[1]"
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
            <div class="hint__head--hint--text">「{{ hint.titleHead }}」</div>
            <div class="hint-mask__wrapper">
              <div
                class="hint-mask"
                v-show="!animation.animationState.isAnimationEnd[2]"
                v-bind:class="{
                  mask: animation.animationState.isAnimationStart[2],
                }"
                @click="animation.animationStart(2)"
                @animationend="animation.animationEnd(2)"
              >
                <div
                  class="hint-mask__text"
                  v-show="!animation.animationState.isAnimationStart[2]"
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
          :value="inputAnswer"
          @input="$emit('update:inputAnswer', $event.target.value)"
        />
      </div>
      <div class="answer__button--wrapper">
        <button class="answer__button" @click="clickAnswer">Go</button>
      </div>
    </div>
    <div v-if="showLinkAnswer" class="link_answer__wrapper">
      <div v-if="searchResult" class="link_answer">
        <img
          src="../../../public/images/main_smile.svg"
          class="link_answer__image"
        />
        <div class="link_answer__text">Bravo！大正解！！！</div>
      </div>
      <div v-else class="link_answer">
        <img
          src="../../../public/images/main_frown.svg"
          class="link_answer__image"
        />
        <div class="link_answer__text">惜しい、不正解...！</div>
      </div>
      <button class="link_answer__button" @click="clickShow">答えを見る</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Animation } from "@/composable/useAnimation";
import { Hint } from "@/composable/useHint";

export default defineComponent({
  name: "RightPageDefault",
  props: {
    categories: {
      type: Array as PropType<string[]>,
      required: true,
    },
    searchResult: {
      type: Boolean,
      required: true,
    },
    animation: {
      type: Object as PropType<Animation>,
      required: true,
    },
    hint: {
      type: Object as PropType<Hint>,
      required: true,
    },
    inputAnswer: {
      type: String,
      required: true,
    },
    showLinkAnswer: {
      type: Boolean,
      required: true,
    },
    showAnswer: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:inputAnswer", "click-answer", "click-show"],
  setup(_, { emit }) {
    const clickAnswer = () => {
      emit("click-answer");
    };
    const clickShow = () => {
      emit("click-show");
    };
    return {
      clickAnswer,
      clickShow,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-right {
  &__not-answer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__topic {
    display: flex;
    align-items: center;
    margin: 1% 0;
    &--text {
      font-family: $noto-sans;
      font-size: 30px;
    }
    &--light {
      margin-left: 3px;
      height: 30px;
    }
  }
}

.hint {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3%;
  border: 2px solid #923145;
  background-color: white;
  font-size: 1.1em;
  position: relative;
  font-family: $noto-sans;
  &__round {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 10px;
    border: 1px solid rgb(124, 124, 124);
    background-color: #f4ede6;
  }
  &__contents {
    margin: 20px 0 20px 35px;
  }
  &__count {
    display: flex;
    &--text {
      font-size: 25px;
    }
    &--hint {
      text-align: center;
      position: relative;
      min-width: 100px;
      margin-left: 20px;
      padding: 7px 0;
    }
  }
  &__category {
    margin-top: 15px;
    &--text {
      font-size: 25px;
      margin-bottom: 10px;
    }
    &--hint {
      position: relative;
      min-width: 200px;
      margin-left: 50px;
      padding: 3px 0;
      &--inner {
        padding: 3px 0;
        width: 100%;
      }
      &--element {
        text-align: center;
      }
    }
  }
  &__head {
    display: flex;
    margin-top: 20px;
    &--text {
      font-size: 25px;
    }
    &--hint {
      text-align: center;
      position: relative;
      min-width: 100px;
      margin-left: 20px;
      padding: 7px 0;
    }
  }
}
.hint-mask {
  height: calc(100% - 15px);
  width: 100%;
  background-color: #923145;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &__wrapper {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    margin-top: 10px;
    z-index: 3;
  }
  &__text {
    color: white;
    font-size: 20px;
    padding-bottom: 15px;
    z-index: 2;
  }
  &:before {
    width: 100%;
    height: 0;
    display: block;
    position: absolute;
    left: 0;
    bottom: 100%;
    border-bottom: solid 15px #923145;
    border-right: solid 15px transparent;
    content: "";
  }
}
@keyframes sizeScale {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
.mask {
  animation: sizeScale ease-in 1s forwards;
}

.answer {
  margin-top: 10px;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  &__input {
    height: 100%;
    width: 100%;
    font-family: $noto-sans;
    font-size: 25px;
    padding-left: 10px;
    background-color: #f2f2f2;
    border: 1px solid black;
    caret-color: #622feb;
    &:focus {
      outline-color: #923145;
    }
    &--wrapper {
      height: 100%;
      width: 75%;
    }
  }
  &__button {
    height: 100%;
    width: 100%;
    font-family: $traviraj;
    font-size: 25px;
    background-color: transparent;
    border: solid black;
    border-width: 1px 1px 7px 1px;
    cursor: pointer;
    &:hover {
      border-width: 1px 1px 4px 1px;
    }
    &:active {
      border-width: 1px 1px 1px 1px;
    }
    &--wrapper {
      height: 100%;
      width: 20%;
    }
  }
}

.link_answer {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(transparent 70%, #92314566 70%);
  &__wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text {
    text-align: center;
    font-family: $noto-sans;
    font-size: 30px;
    margin-left: 10px;
  }
  &__image {
    height: 30px;
    display: block;
  }
  &__button {
    height: 40px;
    width: 200px;
    margin-top: 20px;
    font-family: $noto-sans;
    font-size: 1.1em;
    letter-spacing: 0.88px;
    color: white;
    background-color: #923145;
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
