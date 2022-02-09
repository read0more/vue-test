<script setup>
import { ref } from "vue";

const modalOpen = ref(false);
const color = ref('skyblue');
</script>

<template>
  <button @click="modalOpen = true" class="button">
    Open full screen modal! (With teleport!)
  </button>
  <teleport to="#modals">
    <div v-if="modalOpen" class="modal" :style="{ 'background-color': color }">
      <div>
        <input type="text" :value="color" @input="color = $event.target.value" />
        (My parent is "body")
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
  .modal {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
    position: absolute;
  }

  /* todo: teleport안에 들어가면 v-bind 안되는데 방법 없는지 */
  .button {
    color: v-bind(color);
  }
</style>