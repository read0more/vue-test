<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function onClick() {
  router.push('/about');
}
</script>

<template>
  <router-view></router-view>
  <nav>
    <ul>
      <li><router-link to="/">/로 이동</router-link></li>
      <li><router-link to="/about">/about으로 이동</router-link></li>
      <li><button @click="$router.push('/')">router push로 /이동</button></li>
      <li><button @click="onClick">router push로 /about</button></li>
    </ul>
  </nav>

</template>

<style scoped>

</style>