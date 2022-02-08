<script setup>
const emit = defineEmits(['custom']);
function input({ target: { value: text } }) {
  emit('custom', text)
}
</script>

<template>
  <input type="text" @input="input"/>
</template>

<style scoped>

</style>