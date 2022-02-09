<script setup>
import { inject } from "vue";
const { todos, length} = inject('todos');
</script>

<template>
  길이: {{ length }}
  <p v-for="todo in todos">{{ todo }}</p>
</template>

<style scoped>

</style>