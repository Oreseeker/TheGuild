<template>
  <div class="mobile-menu-toggler">
    <div class="line"/>
    <div class="line"/>
    <div class="line"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style scoped>
.mobile-menu-toggler {
  --size: 40px;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 30px;
  padding: 4px;
  justify-content: space-between;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 2px;
  background: white;
}
</style>
