<template>
  <div class="grid">
    <ul class="p-0 m-0 flex flex-col justify-center">
      <li
        v-for="subject in subjectList"
        :key="subject.id"
        class="w-120 h-70 mb-5 mx-auto text-center leading-70 cursor-move"
        :style="`background-color:${subject.color}`"
        draggable="true"
        @dragstart="handleDragStart($event, subject)"
        @dragend="handleDragEnd"
      >
        {{ subject.subject }}
      </li>
    </ul>
    <div>
      <table class="text-center mx-auto border-collapse">
        <tr>
          <th></th>
          <th v-for="subjectDay in subjectTable.weekday" :key="subjectDay.id">
            {{ subjectDay.day }}
          </th>
        </tr>
        <tr
          v-for="(subjectTime, index) in subjectTable.time"
          :key="subjectTime.id"
          class="border border-solid"
        >
          <td class="w-130 h-80 border-soild border p-0">
            {{ subjectTime.times }}
          </td>
          <td
            v-for="n in subjectTable.weekday.length"
            :key="n"
            class="w-130 h-80 border-soild border p-0"
            @dragenter="handleDragEnter"
            @dragover="handleDragOver"
            :data-row="index + 1"
            :data-col="n"
          >
            <template v-if="subjectSelect[`${n}-${index + 1}`]">
              <CourseItem
                :subjectItem="subjectSelect[`${n}-${index + 1}`]"
                @handleDeleteSubjectItem="
                  () => handleDeleteSubjectItem({ row: index + 1, col: n })
                "
              />
            </template>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from "vue";
import CourseItem from "./courseItem.vue";
// import { vDel } from "@/directives/courseDirective.js";
const props = defineProps({
  subjectList: {
    type: Array,
    required: true,
  },
  subjectTable: {
    type: Object,
    required: true,
  },
});

const subjectSelect = reactive({});

// const colorCom = (val) => {
//   return props?.subjectList.find((item) => item.subject == val);
// };

const currentSubjectItem = ref({});
const subjectItemPosition = ref("");

function handleDragStart(e, data) {
  const tar = e.target;
  currentSubjectItem.value = { color: data.color, subject: data.subject };
  tar.style.opacity = 0.4;
}

function handleDragEnd(e) {
  const tar = e.target;
  tar.style.opacity = 1;

  subjectSelect[subjectItemPosition.value] = currentSubjectItem.value;

  //清空当前收集的数据
  currentSubjectItem.value = {};
  subjectItemPosition.value = "";
}

function handleDragOver(e) {}

function handleDragEnter(e) {
  const tar = e.target;

  const row = tar.dataset.row;
  const col = tar.dataset.col;

  subjectItemPosition.value = `${col}-${row}`;
}

//删除课程项
function handleDeleteSubjectItem(params) {
  delete subjectSelect[`${params.col}-${params.row}`];
}
</script>

<style scoped>
.grid {
  grid-template-columns: 360px 1fr;
}
</style>
