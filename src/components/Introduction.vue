<script setup>
import { ref, onMounted } from "vue";

const count = ref(0);
const title = "this is title";
const message = ref("reverse message");
const input = ref("");
const messages = ["메시지1", "메시지2", "메시지3", "메시지4"];

const reverse = () => {
  message.value = message.value.split("").reverse().join("");
};
setInterval(() => {
  count.value++;
}, 1000);

onMounted(() => {
  console.log("마운트됨");
});
</script>

<template>
  <span v-bind:title="title">Counter: {{ count }}</span>
  <div v-on:click="reverse">{{ message }}</div>
  <div>
    <span>two way binding</span>
    <p>{{ input }}</p>
    <input v-model="input" />
    <div v-if="input">if로 input값 있을때만 보이는</div>
  </div>
  <ul style="display: inline-block">
    <li v-for="message in messages">
      {{ message }}
    </li>
  </ul>
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
