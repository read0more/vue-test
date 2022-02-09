<script setup>
import { ref } from "vue";

const DIRECTION = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
}
const msg = ref('움직이는 메시지');
const count = ref(0);
const pinPadding = ref(0);
const direction = ref(DIRECTION.top);
</script>

<template>
  <div>
    <button @click="direction = $event.target.textContent">{{ DIRECTION.top }}</button>
    <button @click="direction = $event.target.textContent">{{ DIRECTION.right }}</button>
    <button @click="direction = $event.target.textContent">{{ DIRECTION.bottom }}</button>
    <button @click="direction = $event.target.textContent">{{ DIRECTION.left }}</button>
  </div>
  <input type="range" min="0" max="500" v-model="pinPadding">
  <h1 v-pin:[direction]="pinPadding">{{ msg }}</h1>

  <p class="global-scope">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
