<template>
  <!-- :class="stylesObj[styles]" -->
  <button
    class="px-5 py-3 text-white bg-[#030712] rounded-lg"
    @click="(e) => $emit('onClick', e, '按钮')"
  >
    <slot></slot>
  </button>
</template>
<script setup>
import { ref } from "vue";
defineProps({
  styles: {
    type: String,
    default() {
      return "px-5 py-3 text-white bg-blue rounded";
    },
  },
});

const stylesObj = ref({
  primary: "px-5 py-3 text-white bg-blue rounded",
  danger: "px-5 py-3 text-white bg-red rounded",
  warn: "px-5 py-3 text-white bg-yellow rounded",
  success: "px-5 py-3 text-white bg-green rounded",
});
</script>
