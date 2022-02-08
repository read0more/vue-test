<script setup>
import BaseInput from "./sub/BaseInput.vue"
import CustomVmodel from "./sub/CustomVmodel.vue"
import CustomVmodel2 from "./sub/CustomVmodel2.vue"
import Slot from './sub/Slot.vue';
import { ref } from "vue";

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');

</script>

<template>
  <!-- pascal case, kebab case 둘 다 됨 -->
  <!--  <BaseInput></BaseInput> -->
  <!-- input1처럼 굳이 만들지 않아도 input2 처럼 IME고려한 input 양방향 바인딩 적용 가능 -->
  커스텀이벤트로 작성 <base-input @custom-event="input1 = $event"></base-input>
  <p>{{ input1 }}</p>
  기본 이벤트객체 이용 <input :value="input2" @input="input2 = $event.target.value">
  <p>{{ input2 }}</p>
  컴포넌트에 modelValue 이용하여 v-model 적용되게 <custom-vmodel v-model.name="input3"></custom-vmodel>
  <p>{{ input3 }}</p>
  컴포넌트에 computed 이용하여 v-model 적용되게<br />(이것만 IME 반영이 제대로 되지 않음) <custom-vmodel2 v-model="input4"></custom-vmodel2>
  <p>{{ input4 }}</p>
  <Slot>
    <strong>slot 이용한 부분</strong>
  </Slot>
</template>

<style scoped>

</style>