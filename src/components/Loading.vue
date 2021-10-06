<template>
  <div class="main__loading" v-show="isLoading">
    <div
      class="main__loading--item spinner-border text-secondary"
      role="status"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
