<script setup>
import List from "@/components/vuexTest/List.vue";
const props = defineProps({
  lists: Array
});

</script>

<template>
<ul>
  <!-- array 같은 경우에는 unwrapping이 안되므로, value도 추가한다. -->
  <List v-for="(value, index) in lists().value" :key="index" :text="value"></List>
</ul>
</template>

<style scoped>

</style>