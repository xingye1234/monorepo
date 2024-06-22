<template>
  <div class="h-screen text-16 bg-[#f1f5f9] jc-center flex-col">
    <!-- <Course /> -->
    <!-- <DragSort /> -->
    <!-- <button @click="isFirstRender = !isFirstRender">按钮</button>
    <div v-lazy-show="isFirstRender" class="mt-10">我出来了!</div> -->

    <button @click="handleClick">我是按钮</button>
  </div>
</template>

<script setup>
import Course from "@/components/course/index.vue";
import DragSort from "@/components/dragSort/index.vue";
import { vLazyShow } from "@/directives/lazyShow.js";
import { MessageBox } from "@wkx/packages";
import { ref } from "vue";

const isFirstRender = ref(false);

function handleClick() {
  MessageBox.alert("处理成功", () => {
    console.log("------->关闭了");
  });
}
</script>
