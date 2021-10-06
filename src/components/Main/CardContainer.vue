<template>
  <div class="word__container">
    <Card v-for="(word, index) in words" :key="index" :word="word" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Card from "@/components/Main/Card.vue";

export default defineComponent({
  name: "CardContainer",
  components: { Card },
  props: {
    words: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.word {
  &__container {
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
