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
import Layout from "@/components/vuexTest/Layout.vue";
import Lists from "@/components/vuexTest/Lists.vue";
import { shallowRef, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const headerInput = ref();
const headerInputLists = ref(['1','2','3']);
const headerInputListsFn = () => headerInputLists;
function onHeaderSubmit(event) {
  event.preventDefault();
  store.commit('addList', headerInput.value);
  headerInputLists.value.push();
}

const activeComponent = shallowRef(HelloWorld);
const show = ref(false);
function changeActiveComponent(event) {
  activeComponent.value = eval(event.target.textContent);
}
store.dispatch('addList', 'one');
store.dispatch('addList', 'two');
store.dispatch('addList', 'three');
store.dispatch('addList', 'four');
const arr = ref([]);
arr.value.push({ name: 'rec', id: 1});
arr.value.push({name: 'tiger', id: 2});
arr.value.push({name: 'nia', id: 3});
function add() {
  arr.value = [{ name: 'qqq', id: 4}, ...arr.value];
}
function remove() {
  arr.value = arr.value.filter((e) => e.name !== 'tiger');
}
</script>

<template>
  <input type="button" value="추가" @click="add" />
  <input type="button" value="삭제" @click="remove" />
  <ul>
    <strong>key를 배열의 index로 잡았기 때문에 추가나 삭제시 이상이 생긴다. 대신 value.id를 쓰면 정상화</strong>
    <li v-for="(value, index) in arr" :key="index">
      {{value.name}}: <input type="text" />
    </li>
  </ul>
  <button @click="show = !show">{{ show ? 'route 빼고 숨기기' : '나머지도 보이게'}}</button>
  <div v-show="show">
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
  </div>
  <fieldset>
    <strong>vue route된 영역</strong>
    <br />
    <RouteTest></RouteTest>
  </fieldset>
  <section :style="{ border: '1px solid'}">
    <Layout>
      <template #header>
        <form @submit="onHeaderSubmit">
          <input :value="headerInput" @input="headerInput = $event.target.value">
        </form>
      </template>
      <template #main>
        <Lists></Lists>
      </template>
    </Layout>
  </section>
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
