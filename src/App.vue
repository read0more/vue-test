<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Introduction from "./components/Introduction.vue";
import TemplateSyntax from "./components/TemplateSyntax.vue";

import { ref } from "vue";
const activeComponent = ref('HelloWorld');
function changeActiveComponent(event) {
  activeComponent.value = event.target.textContent;
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <button v-on:click="changeActiveComponent">HelloWorld</button>
    <button v-on:click="changeActiveComponent">Introduction</button>
    <button v-on:click="changeActiveComponent">TemplateSyntax</button>
  </div>
  <HelloWorld v-if="activeComponent === 'HelloWorld'" msg="Hello Vue 3 + Vite" />
  <Introduction v-if="activeComponent === 'Introduction'" />
  <TemplateSyntax v-if="activeComponent === 'TemplateSyntax'" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.global-scope {
  color: cyan;
}
</style>
