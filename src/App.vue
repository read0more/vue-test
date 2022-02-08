<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Introduction from "./components/Introduction.vue";
import TemplateSyntax from "./components/TemplateSyntax.vue";
import ComputedAndWatch from "./components/ComputedAndWatch.vue";
import StyleClass from "./components/StyleClass.vue";
import IfAndShow from "./components/IfAndShow.vue";
import ListRendering from "./components/ListRendering.vue";
import Event from "./components/Event.vue";
import FormInputBinding from "./components/FormInputBinding.vue"
import ComponentsBasics from "./components/ComponentsBasics.vue"
import ComponentsInDepth from "./components/ComponentsInDepth.vue"
import { shallowRef, defineComponent } from "vue";

const activeComponent = shallowRef(HelloWorld);
function changeActiveComponent(event) {
  activeComponent.value = eval(event.target.textContent);
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <button v-on:click="changeActiveComponent">HelloWorld</button>
    <button v-on:click="changeActiveComponent">Introduction</button>
    <button v-on:click="changeActiveComponent">TemplateSyntax</button>
    <button v-on:click="changeActiveComponent">ComputedAndWatch</button>
    <button v-on:click="changeActiveComponent">StyleClass</button>
    <button v-on:click="changeActiveComponent">IfAndShow</button>
    <button v-on:click="changeActiveComponent">ListRendering</button>
    <button v-on:click="changeActiveComponent">Event</button>
    <button v-on:click="changeActiveComponent">FormInputBinding</button>
    <button v-on:click="changeActiveComponent">ComponentsBasics</button>
  </div>
  <div>
    <button v-on:click="changeActiveComponent">ComponentsInDepth</button>
  </div>
  <component v-bind:is="activeComponent"></component>
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
