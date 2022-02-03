<script setup>
import { ref, computed } from "vue";

const isActive = ref(false);
const hasError = ref(false);
const buttonClass = computed(() => ({ active: isActive.value, 'text-danger': hasError.value }));

const activeToggle = () => {
  isActive.value = !isActive.value;
}
const errorToggle = () => {
  hasError.value = !hasError.value;
}

const classA = 'a';
const classB = 'b';
</script>

<template>
  <!-- 인라인이어도 OK. { active: isActive, 'text-danger': hasError } -->
  <button class="static" :class="[classA, classB, buttonClass]">버튼</button>
  <button @click="activeToggle">위의 버튼에 active class 토글</button>
  <button @click="errorToggle">위의 버튼에 text class 토글</button>
  <p :style="{ color: 'orange' }">:style 인라인으로 스타일 적용함. :class 처럼 배열, 객체, computed property도 넣을 수 있다.</p>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">-webkit-box 같은 특정 브라우저에서 사용하는 접두사는 넣으면 알아서 적절한 접두사로 적용해줌.</div>
</template>

<style scoped>
.static {
  color: coral;
}

.active {
  font-weight: bold;
}

.text-danger {
  color: red;
}
</style>
