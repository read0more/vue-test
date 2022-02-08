<script setup>
import { ref } from "vue";
import MultipleVmodel from "./sub/MultipleVmodel.vue"
import Slot from "./sub/Slot.vue";

const name = ref('');
const tel = ref('');
const slotName = ref('todoLi');
setInterval(() => {
  if (slotName.value === 'todoLi') {
    slotName.value = 'todoDiv';
  } else {
    slotName.value = 'todoLi';
  }
}, 1500);
</script>

<template>
  <MultipleVmodel v-model:name.capitalize="name" v-model:tel="tel"></MultipleVmodel>
  <Slot>
    your tel is {{ tel }}
    <template #header>
      난 헤더
    </template>
    <template #main>
      난 메인
    </template>
    <template #footer>
      난 푸터
    </template>
    <!-- v-slot:[slotName]과 동일    -->
    <template #[slotName]="{item: { name, detail }}">
      동적으로 v-slot 이름 바꿔서 위 아래 왔다갔다 하게<span>{{ name }} : {{ detail }}</span>
    </template>
  </Slot>
</template>

<style scoped>

</style>