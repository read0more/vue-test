<script setup>
import { ref, computed } from "vue";
const array = ref([
  '나',
  '라',
  '가',
]);

const nestedArray = ref([
   [1,2,3,4,5],
   [6,7,8,9,10]
]);

const obj = {
  'name': 'park',
  'address': 'incheon',
  '아무거나키': '아무거나값',
}

const sortedArray = computed(() => [...array.value].sort());
const oddFilterArray = (numberArray) => numberArray.filter((el) => el % 2 !== 0);
//numberArray.filter((el) => el % 2 !== 0)
</script>

<template>
  <ul>
    array v-for
    <li v-for="(value, index) in array" :key="index">
      <span>index: {{ index }} / value: {{ value }}</span>
    </li>
  </ul>
  <ul>
    object v-for
    <li v-for="(value, key, index) in obj">
      <span>index: {{ index }} / key: {{ key }} / value: {{ value }}</span>
    </li>
  </ul>
  <ul>
    sorted array
    <li v-for="(value, index) in sortedArray" :key="index">
      <span>index: {{ index }} / value: {{ value }}</span>
    </li>
  </ul>
  <fieldset>
    <ul v-for="(arr, index) in nestedArray">
      nested and filtered odd number array {{ index }}번째 array
      <li v-for="el in oddFilterArray(arr)">
        홀수: <span>{{ el }}</span>
      </li>
    </ul>
  </fieldset>
  <div id="range" class="demo">
    <span v-for="n in 10">{{ n + ' ' }} </span>
  </div>
  <ul>
    렌더링되면 template태그는 사라진다.
    <template v-for="item in sortedArray">
      <li>{{ item }}</li>
    </template>
  </ul>
</template>

<style scoped>

</style>