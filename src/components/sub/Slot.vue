<script setup>
import { ref } from "vue";
const items = ref([
  { 'name': 'todo이름', 'detail': 'todo 디테일' }
]);
</script>

<template>
  <div>
    <slot>
      default slot is empty
    </slot>
    <header>
      <slot name="header">header slot is empty</slot>
    </header>
    <main>
      <slot name="main">main slot is empty</slot>
    </main>
    <footer>
      <slot name="footer">footer slot is empty</slot>
    </footer>
    <ul>
      <li v-for="(item, index) in items">
        <slot :item="item" name="todoLi"></slot>
      </li>
    </ul>
    <div v-for="(item, index) in items">
      <slot :item="item" name="todoDiv"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>