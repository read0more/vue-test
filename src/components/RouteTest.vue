<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const name1 = ref('');
const name2 = ref('');
const number = ref();

function onClick() {
  router.push('/about');
}

function onSubmit(event) {
  event.preventDefault();
  router.push(`${route.path}/${number.value}`);
}

watch(name1, () => {
  router.push(`/user/${name1.value}`);
});

watch(name2, () => {
  router.push(`/user-${name2.value}`);
});
</script>

<template>
  <router-view></router-view>
  <nav>
    <ul>
      <li><router-link to="/">/로 이동</router-link></li>
      <li><router-link to="/about">/about으로 이동</router-link></li>
      <li><button @click="$router.push('/')">router push로 /이동</button></li>
      <li><button @click="onClick">router push로 /about</button></li>
      <li>
        <label>input 내용에 따라 url변경</label>
        <input type="text" :value="name1" @input="name1 = $event.target.value">
        <br />
        <label>hyphen으로 구분해서 param 전달</label>
        <input type="text" :value="name2" @input="name2 = $event.target.value">
        <form @submit="onSubmit">
          <label>repeatable 적용...submit하면 확인</label>
          <input type="number" v-model="number">
        </form>
      </li>
    </ul>
  </nav>

</template>

<style scoped>

</style>