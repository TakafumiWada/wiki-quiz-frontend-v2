<template>
  <div class="word">
    <div class="word__round"></div>
    <div class="word__inner">{{ word }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    word: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.word {
  width: 25%;
  min-width: 150px;
  height: 95px;
  position: relative;
  margin: 10px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid black;
  &__round {
    height: 15px;
    width: 15px;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 7.5px;
    border: 1px solid rgb(124, 124, 124);
    background-color: #f4ede6;
  }
  &__inner {
    font-family: $noto-sans;
  }
}
</style>
