<script setup>
import { ref } from "vue";
const message = ref('');
const ime = ref('');
function inputIme({ target: { value } }) {
  ime.value = value;
}
const multiLineMessage = ref('');
const checked = ref(false);
const toggle = ref();
const checkedNames = ref([]);
const picked = ref('One');
const selected1 = ref('');
const selectList = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
]);
const selected2 = ref('B');
const objectSelected = ref('');
function change() {
  console.log(objectSelected.value.number);
}
</script>

<template>
  <input v-model="message" placeholder="여기를 수정해보세요" />
  <p>메시지: {{ message }}</p>
  <input v-bind:value="ime" placeholder="위와 다르게 자음별로도 갱신됨" @input="inputIme"/>
  <p>메시지: {{ ime }}</p>
  <textarea v-model="multiLineMessage" placeholder="여러줄을 입력해보세요"></textarea>
  <p style="white-space: pre-line;"><span>여러 줄을 가지는 메시지:</span>{{ multiLineMessage }}</p>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  <br />
  <input type="checkbox" id="toggle" v-model="toggle" true-value="체크됨" false-value="체크안됨" />
  <label for="toggle">{{ toggle }}</label>

  <div style="margin-top: 20px">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <p>Checked names: {{ checkedNames }}</p>
  </div>
  <div style="margin-top: 20px">
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>
  <div style="margin-top: 20px">
    <select v-model="selected1">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected1 }}</span>
  </div>
  <div style="margin-top: 20px">
    for로 select 생성
    <select v-model="selected2">
      <option v-for="option in selectList" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected2 }}</span>
    option value에 object 할당
    <select v-model="objectSelected" @change="change">
      <!-- 인라인 객체 리터럴 -->
      <option disabled value="">Please select one</option>
      <option :value="{ number: 123 }">123</option>
    </select>
  </div>
</template>

<style scoped>

</style>