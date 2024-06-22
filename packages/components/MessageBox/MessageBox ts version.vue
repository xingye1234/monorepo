<template>
  <div
    class="h-screen w-full absolute bg-black/30 top-0 left-0 flex justify-center items-center"
   
  >
    <div class="w-[24rem] h-fit text-white rounded-sm">
      <div
        class="flex justify-between h-10 items-center px-3 box-border"
        :class="[classesCom]"
      >
        <p class="m-0 font-bold">{{ title }}</p>
        <span class="text-xl cursor-pointer" @click="close">x</span>
      </div>

      <div class="p-4 box-border text-center bg-white text-[black]">
        <p class="p-4">
          {{ content }}
        </p>

        <div class="text-right mr-1">
          <button
            class="bg-blue-600 text-white px-4 py-1 rounded-sm"
            @click="close"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";


const props = withDefaults(
  defineProps<{
    type?: string;
    title?: string;
    content: string;
    close: any;
  }>(),
  {
    title: "系统提示",
    type: "primary",
  }
);
const classes: Record<string, string> = {
  primary: "bg-blue-500",
  danger: "bg-red-500",
  warnning: "bg-origin-500",
  success: "bg-green-500",
};

const classesCom = computed(() => {
  return classes[props?.type];
});
</script>
