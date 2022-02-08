<script setup>
defineProps({
  modelValue: String
});
</script>

<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped>

</style>