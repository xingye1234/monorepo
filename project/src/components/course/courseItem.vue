<template>
  <div
    class="w-120 h-70 mx-auto text-center leading-70 relative"
    :style="`background-color:${subjectItem.color}`"
  >
    <span
      class="absolute right-5 top--23 text-white cursor-pointer"
      @click="handleDeleteSubjectItem"
      >X</span
    >
    <!-- {{ subjectSelect[`${n}-${index + 1}`] }} -->
    {{ subjectItem.subject }}
  </div>
</template>
<script setup>
defineProps({
  subjectItem: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["handleDeleteSubjectItem"]);

const handleDeleteSubjectItem = () => {
  emits("handleDeleteSubjectItem");
};
</script>
