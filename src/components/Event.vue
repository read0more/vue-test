<script setup>
import { ref, computed } from "vue";

function onClickOne(msg, event) {
  console.log(msg, event);
}

function onClickTwo(msg, event) {
  console.log(msg, event);
}

function warn(message) {
  alert(message);
}

</script>

<template>
  <button @click="onClickOne('첫 번째 click 핸들러', $event), onClickTwo('두 번째 click 핸들러', $event)">버튼</button>
  <form @click.prevent>
    <button type="submit">페이지 다시로드 하지 않는 폼</button>
  </form>
  <div @click.self="warn('부모만 alert되고 자식에는 적용x')">
    부모
    <div>자식1</div>
    <div>자식2</div>
    <div>자식3</div>
  </div>
  delete나 backspace나 ctrl+enter 눌렀을 때 이벤트 트리거
  <input @keyup.delete="warn('delete키나 backspace키 누름')" @keyup.ctrl.enter="warn('ctrl엔터')"/>
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
