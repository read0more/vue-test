<script setup>
import { ref } from "vue";
const rawHtmlInput = ref('<li>html입력하면 확인가능한 input</li>');
const dynamicId = ref('red');
const isButtonDisabled = ref(true);
const aAttribute = ref('href');

function onSubmit(e) {
  alert('submit');
}

setTimeout(() => {
  console.log('change id...red to cyan');
  dynamicId.value = 'cyan';
}, 1000);
</script>

<template>
  <input v-model="rawHtmlInput" />
  <p v-html="rawHtmlInput"></p>
  <div v-bind:id="'div-' + dynamicId">dynamic ID</div>
  <button v-bind:disabled="isButtonDisabled">Button</button>
  <div>
    <h3>템플릿 내 표현식 확인</h3>
    {{ 0 + 1 }} {{ ok ? 'YES' : 'NO' }} {{ "reverse".split('').reverse().join('') }}
    <!-- :[aAtrribute] = v-bind:[aAtrribute]  -->
    <!-- 동적 args를 null로하면 bind가 해제된다 -->
    <a :[aAttribute]="'https://google.com'">v-bind 속성 명이나 v-on 이벤트명도 동적으로 바꿀 수 있다.</a>
  </div>
  <!-- @submit = v-on:submit  -->
  <form @submit.prevent="onSubmit">
    <button type="submit">v-on:submit.prevent쓰면 event.preventDefault 알아서 호출</button>
  </form>
</template>

<style scoped>
  input {
    min-width: 500px;
  }

  #div-red {
    color: red;
  }

  #div-cyan {
    color: cyan;
  }
</style>