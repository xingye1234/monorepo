<template>
  <div class="h-full w-full bg-[#f3f4f6]">
    <CoursePanel :subjectList="subjectList" :subjectTable="subjectTable" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import CoursePanel from "./coursePanel.vue";
const subjectList = ref([
  { id: 1, subject: "语文", color: "#fb923c" },
  { id: 2, subject: "数学", color: "#fbbf24" },
  { id: 3, subject: "英语", color: "#a3e635" },
  { id: 4, subject: "地理", color: "#5eead4" },
  { id: 5, subject: "历史", color: "#38bdf8" },
  { id: 6, subject: "政治", color: "#f0abfc" },
]);

const subjectTable = ref({
  weekday: [
    { id: 1, day: "星期一" },
    { id: 2, day: "星期二" },
    { id: 3, day: "星期三" },
    { id: 4, day: "星期四" },
    { id: 5, day: "星期五" },
    { id: 6, day: "星期六" },
    { id: 7, day: "星期天" },
  ],
  time: [
    { id: 1, times: "8:10 - 8:55" },
    { id: 2, times: "9:15 - 10:00" },
    { id: 3, times: "10:20 - 11:05" },
    { id: 4, times: "11:15 - 12:00" },
    { id: 5, times: "14:00 - 14:45" },
    { id: 6, times: "14:55 - 15:40" },
    { id: 7, times: "15:50 - 16:35" },
    { id: 8, times: "16:45 - 17:30" },
  ],
});
</script>
