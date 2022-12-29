<template>
  <div ref="rMousedownOutside" class="r-mousedown-outside">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    ignoreClicksOn: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onMousedown(event: MouseEvent) {
      const composedPath = event.composedPath();
      const selfEl = this.$refs.rMousedownOutside as HTMLDivElement;
      const isSelf = composedPath.includes(selfEl);
      // eslint-disable-next-line max-len
      const anyIgnoredElementsIncluded = this.ignoreClicksOn.some((el: any) => composedPath.includes((el)));
      if (!isSelf && !anyIgnoredElementsIncluded) {
        this.$emit('outside');
      }
    },
  },
  mounted() {
    window.addEventListener('mousedown', this.onMousedown);
  },
  unmounted() {
    window.removeEventListener('mousedown', this.onMousedown);
  },
  name: 'RMousedownOutside',
});
</script>

<style scoped>
.r-mousedown-outside {
  width: max-content;
}
</style>
