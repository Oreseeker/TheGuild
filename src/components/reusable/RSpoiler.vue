<template>
  <div class="r-spoiler" @click="onTogglerClick">
    <slot name="toggler"/>
  </div>
  <Transition>
    <div v-if="unfolded" class="content">
      <slot name="content"/>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      unfolded: false,
    };
  },
  watch: {
    opened(val: boolean) {
      this.unfolded = val;
    },
  },
  methods: {
    onTogglerClick() {
      this.unfolded = !this.unfolded;
    },
  },
});
</script>

<style scoped>
.content {

}
</style>
