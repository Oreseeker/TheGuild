<template>
  <div
    class="r-backdrop"
  >
    <RMousedownOutside
      class="r-backdrop-content"
      @outside="$emit('close')"
    >
      <slot></slot>
    </RMousedownOutside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RMousedownOutside from '@/components/reusable/RMousedownOutside.vue';

export default defineComponent({
  components: { RMousedownOutside },
  name: 'RBackdrop',
  emits: ['close'],
});
</script>

<style scoped>
.r-backdrop {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
