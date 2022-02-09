<script setup>
import { ref, provide, computed } from "vue";
import NestedInjection1 from "./NestedInjection1.vue";

const input = ref('');
const todos = ref([]);
provide('todos', {
  todos,
  length: computed(() => todos.value.length)
});
</script>

<template>
  <form @submit.prevent="todos.push(input)">
    입력하고 엔터치면 아래 출력<input type="text" @input="input = $event.target.value"/>
  </form>
  <NestedInjection1></NestedInjection1>
</template>

<style scoped>

</style>