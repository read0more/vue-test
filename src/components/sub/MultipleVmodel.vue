<script setup>
import { ref, onMounted } from "vue";
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

const nameRef = ref();
onMounted(() => {
  nameRef.value.focus();
});
</script>

<template>
  <p>ref 속성 이용해 focus됨</p>
  <input :value="name" @input="inputName" ref="nameRef">
  <p>{{ name }}</p>
  <input :value="tel" @input="inputTel">
  <p>{{ tel }}</p>
</template>

<style scoped>

</style>