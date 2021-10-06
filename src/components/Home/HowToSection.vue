<template>
  <div :class="`howto__section howto__section--${sectionNumer}`">
    <div class="howto__section--inner">
      <div
        :class="`howto__section--topic howto__section--topic--${sectionNumer}`"
      >
        {{ topic }}
      </div>
      <div class="howto__section--image">
        <img :src="`images/about_${sectionNumer}_white.png`" alt="" />
      </div>
      <div class="howto__section--subtopic">
        {{ subTopic }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HowToSection",
  props: {
    sectionNumer: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    subTopic: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
$border-size: 1px;
.howto__section {
  height: 50%;
  width: 43%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &--inner {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &--topic {
    width: 100%;
    font-family: $noto-sans;
    font-size: 1.5em;
    letter-spacing: 0.53px;
    &--three {
      margin-top: 1.5vh;
    }
    &--four {
      margin-top: 1.5vh;
    }
  }
  &--image {
    margin-top: 10px;
    height: 60%;
    img {
      height: 100%;
    }
  }
  &--subtopic {
    margin-top: 3%;
    font-family: $noto-sans;
    font-size: 1.1em;
    letter-spacing: 0.38px;
  }
  &--one {
    border-right: $border-size solid white;
    border-bottom: $border-size solid white;
  }
  &--two {
    border-left: $border-size solid white;
    border-bottom: $border-size solid white;
  }
  &--three {
    border-right: $border-size solid white;
    border-top: $border-size solid white;
  }
  &--four {
    border-top: $border-size solid white;
    border-left: $border-size solid white;
  }
}
</style>
