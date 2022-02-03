<script setup>
import { ref, computed, watch, onUnmounted } from "vue";
const firstName = ref('');
const lastName = ref('');
const watchQuestion = ref('');
const answer = ref([]);
let id;

function debounce(callback, time) {
  return (args) => {
    clearTimeout(id);
    id = setTimeout(() => callback(...args), time);
    console.log('new id:' + id);
  }
}

onUnmounted(() => {
  console.log('unMounted 했으므로 API호출 취소:' + id);
  clearTimeout(id);
})

/*
getter로만 쓰고 싶다면...
const fullName = computed(() => `${lastName.value} ${firstName.value}`);
 */
const fullName = computed({
  get: () => `${lastName.value} ${firstName.value}`.trim(),
  set: (newValue) => {
    const names = newValue.trim().split(' ');
    lastName.value = names[0] ?? '';
    firstName.value = names[1] ?? '';
  }
});

watch(watchQuestion, debounce((newVal, oldVal) => {
  if(!newVal) return;
 fetch(`https://swapi.dev/api/people/?search=${newVal}`).then((res) => res.json()).then(json => {
   answer.value = json.results;
 })
}, 2000));
</script>

<template>
<div>
  성: <input v-model="lastName" />
  이름: <input v-model="firstName" />
  전체이름: <input v-model="fullName" />
  <p>fullname by computed: <span>{{ fullName }}</span></p>
</div>
  watch input: <input v-model="watchQuestion" />
  <h3>watch result</h3>
  <ul>
    <li v-for="row in answer">
      {{ row.name }}
    </li>
  </ul>
</template>

<style scoped>

</style>