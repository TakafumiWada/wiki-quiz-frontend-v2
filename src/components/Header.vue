<template>
  <header>
    <div class="icon__container" @click="linkToTop">
      <div class="icon__content"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Header",
  setup() {
    const router = useRouter();

    const linkToTop = () => {
      if (
        router.currentRoute.value.name === "Home" &&
        router.currentRoute.value.hash === "#top"
      )
        return;
      router.push({ path: "/", hash: "#top" });
    };

    return { linkToTop };
  },
});
</script>

<style lang="scss" scoped>
.icon {
  &__container {
    position: fixed;
    top: 15px;
    left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background-color: #ffffffb3;
    cursor: pointer;
  }
  &__content {
    height: 60px;
    width: 120px;
    margin: 0 15px;
    z-index: 100;
    background-image: url(../../public/images/QuizWiki_Logo.png);
    background-size: cover;
  }
}
</style>
