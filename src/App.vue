<template>
  <div id="app">
    <Header></Header>
    <main id="main">
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}
</style>
