<script setup>
import { ref, reactive, toRefs, onBeforeUpdate, watchEffect } from "vue";
// toref, ref - reactive 차이 확인

const list = ref([1, 2, 3]);
const divRefs = ref([]);
let obj = reactive({
  name: 'first',
  tel: '01011111111',
});
// toRef를 쓰지 않고 그냥 분해할당하면 반응형을 잃는다.
let { name, tel } = toRefs(obj);

// 각 업데이트 전에 refs를 재설정하세요
onBeforeUpdate(() => {
  divRefs.value = []
});

setTimeout(() => console.log(divRefs.value), 500);
setTimeout(() => {
  name.value = 'second';
  tel.value = '00012345678';
}, 1500);

const stop = watchEffect((onInvalidate) => {
  /*
  watchEffect 멈출 때 정리가 필요하다면
  onInvalidate(callback)
 */
  console.log(`name이 ${name.value}로 바뀜`);
});
/*
  watchEffect 멈추기
  stop();
 */
</script>

<template>
  <p>{{ name }}</p>
  <p>{{ tel }}</p>
  <div v-for="(item, i) in list" :ref="el => { if (el) divRefs[i] = el }">
    {{ item }}
  </div>
</template>

<style scoped>

</style>