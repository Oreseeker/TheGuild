<template>
  <Teleport to="body">
    <Transition>
        <RBackdrop
          v-if="modelValue"
          v-bind="$attrs"
          @close="$emit('update:modelValue', false)"
        >
          <div class="content">
            <slot/>
          </div>
        </RBackdrop>
      </Transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RBackdrop from '@/components/reusable/RBackdrop.vue';

export default defineComponent({
  components: { RBackdrop },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
.content {
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 100ms linear;
}
</style>
