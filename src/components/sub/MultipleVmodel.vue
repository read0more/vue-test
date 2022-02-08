<script setup>
const emit = defineEmits(['update:name', 'update:tel']);
const props = defineProps({
  name: String,
  tel: String,
  nameModifiers: Object,
  telModifiers: Object,
});

function inputName({ target: { value } }) {
  value = value.charAt(0).toUpperCase() + value.slice(1);
  emit('update:name', value);
}

function inputTel({ target: { value }}) {
  value = value.replace(/-/g, "").replace(/^([0-9]{3})([0-9]{4})([0-9]{4})$/, "$1-$2-$3");
  emit('update:tel', value);
}
</script>

<template>
  <input :value="name" @input="inputName">
  <p>{{ name }}</p>
  <input :value="tel" @input="inputTel">
  <p>{{ tel }}</p>
</template>

<style scoped>

</style>