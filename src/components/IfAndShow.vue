<script setup>
import { ref } from "vue";
const isIfBlockShow = ref(false);
function onClickIfBlockToggle() {
  isIfBlockShow.value = !isIfBlockShow.value;
}

const isShowBlockShow = ref(false);
function onClickShowBlockToggle() {
  isShowBlockShow.value = !isShowBlockShow.value;
}
</script>

<template>
  <button @click="onClickIfBlockToggle">v-if toggle</button>
  <div v-if="isIfBlockShow">v-if는 처음 값이 false면 true로 바뀌지 않는 한 렌더링을 하지 않는다.</div>
  <button @click="onClickShowBlockToggle">v-if toggle</button>
  <div v-show="isShowBlockShow">v-show는 단순히 display: block / none으로 전환한다.</div>
</template>

<style scoped>

</style>