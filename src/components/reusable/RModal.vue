<template>
  <Teleport to="body">
    <RBackdrop v-bind="$attrs">
      <div class="content">
        <slot/>
      </div>
    </RBackdrop>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RBackdrop from '@/components/reusable/RBackdrop.vue';

export default defineComponent({
  components: { RBackdrop },
});
</script>

<style scoped>
.content {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 90vh;
}
</style>
