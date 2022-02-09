<script setup>
import { ref, defineAsyncComponent, h } from "vue";
import MultipleVmodel from "./sub/MultipleVmodel.vue"
import Slot from "./sub/Slot.vue";
import Provide from "./sub/Provide.vue";

const name = ref('');
const tel = ref('');
const slotName = ref('todoLi');
const AsyncComp1 = defineAsyncComponent(
    () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(import("./sub/Async.vue")), 1500);
      });
    }
);
const useH = h('strong', 'vue의 h 이용해 생성');

// const AsyncComp2 = defineAsyncComponent({
//   loader: () => import("./sub/Async.vue"),
//   loadingComponent: something,
//   errorComponent, something,
//   timeout: something,
//   suspensible: true,
//   onError(error, retry, fail, attempts) {
//
//   }
// })

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

    </template>
    <template #footer>
      난 푸터
    </template>
    <!-- v-slot:[slotName]과 동일    -->
    <template #[slotName]="{item: { name, detail }}">
      동적으로 v-slot 이름 바꿔서 위 아래 왔다갔다 하게<span>{{ name }} : {{ detail }}</span>
    </template>
  </Slot>
  <Provide></Provide>
  <p>1.5초 후 비동기로 부르는 component...mount가 후에 출력됨</p>
  <component v-bind:is="AsyncComp1"></component>
  <useH></useH>
</template>

<style scoped>

</style>