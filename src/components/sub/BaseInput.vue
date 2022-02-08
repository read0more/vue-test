<script setup>
const emit = defineEmits(['custom-event']);
function input({ target: { value: text } }) {
  emit('custom-event', text)
}
</script>

<template>
  <input type="text" @input="input"/>
</template>

<style scoped>

</style>