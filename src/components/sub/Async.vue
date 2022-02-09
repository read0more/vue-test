<script setup>
import { onBeforeMount } from "vue";
onBeforeMount(() => {
  alert('mount전');
});
</script>

<template>
  <p>Async로 넣은 component</p>
</template>

<style scoped>

</style>