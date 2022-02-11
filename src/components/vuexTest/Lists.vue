<script setup>
import List from "@/components/vuexTest/List.vue";
import { useStore } from "vuex";
const store = useStore();
const lists = store.state.list; // this.$store.state.list 대신에 이걸 써도 된다
</script>

<template>
  <ul>
    <List v-for="(value, index) in this.$store.state.list" :key="index" :text="value"></List>
  </ul>
</template>

<style scoped>

</style>