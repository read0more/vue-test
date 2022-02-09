<script setup>
import {ref, provide, computed, readonly} from "vue";
import NestedInjection1 from "./NestedInjection1.vue";

const input = ref('');
const todos = ref([]);
// 객체 전체를 readonly로 해버리면 length computed가 안먹힘
provide('todos', ({
  todos: readonly(todos),
  length: computed(() => todos.value.length)
}));
</script>

<template>
  <form @submit.prevent="todos.push(input)">
    입력하고 엔터치면 아래 출력<input type="text" @input="input = $event.target.value"/>
  </form>
  <NestedInjection1></NestedInjection1>
</template>

<style scoped>

</style>