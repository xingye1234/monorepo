<template>
  <div class="w-200 h-400 bg-[#fee2e2] mx-auto" v-dragsort>
    <li
      v-for="n in 6"
      :key="n"
      draggable="true"
      class="bg-[#6ee7b7] px-10 py-20 text-white text-center mb-10 cursor-move"
    >
      {{ n }}
    </li>
  </div>
</template>
<script setup>
import { vDragsort } from "@/directives/dragSort.js";
</script>
