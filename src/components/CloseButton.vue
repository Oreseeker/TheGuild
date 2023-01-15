<template>
  <div class="close-button"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>
.close-button {
  background: url('@/assets/close.svg') no-repeat center;
  background-size: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
