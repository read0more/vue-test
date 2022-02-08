<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: {
    tel: Boolean,
    name: Boolean,
    test: Boolean,
  },
});

const emits = defineEmits();

function input({ target: { value }}) {
  const { tel, name, test } = props.modelModifiers;
  if (tel) {
    value = value.replace(/-/g, "").replace(/^([0-9]{3})([0-9]{4})([0-9]{4})$/, "$1-$2-$3");
  }

  if (name) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }

  if (test) {
    value = '!' + value;
  }

  emits('update:modelValue', value);
}
</script>

<template>

  <input :value="modelValue" @input="input">
</template>

<style scoped>

</style>