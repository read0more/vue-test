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
import ModalButton from "./components/sub/ModalButton.vue";
import Reactivity from "./components/Reactivity.vue"
import RouteTest from "./components/RouteTest.vue"
import { shallowRef } from "vue";

const activeComponent = shallowRef(HelloWorld);
function changeActiveComponent(event) {
  activeComponent.value = eval(event.target.textContent);
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="modals"></div>
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
    <ModalButton></ModalButton>
    <button v-on:click="changeActiveComponent">ComponentsInDepth</button>
    <button v-on:click="changeActiveComponent">Reactivity</button>
  </div>
  <span>상기 컴포넌트들 keep-alive로 캐시됨</span>
  <keep-alive>
    <component v-bind:is="activeComponent"></component>
  </keep-alive>
  <fieldset>
    <strong>vue route된 영역</strong>
    <br />
    <RouteTest></RouteTest>
  </fieldset>
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
