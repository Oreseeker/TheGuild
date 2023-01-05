<template>
  <div class="r-spoiler">
    <div
      class="toggler"
      @click="onTogglerClick"
      ref="toggler"
    >
      <slot name="toggler"/>
    </div>
    <Transition>
      <Component :is="tag"
        v-if="unfolded"
        class="content"
        :ignore-clicks-on="ignoreClicksOn"
        @outside="unfolded = false"
        v-on="listeners"
      >
        <slot name="content"/>
      </Component>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RMousedownOutside from '@/components/reusable/RMousedownOutside.vue';

enum RSpoilerMode {
  SPOILER = 'spoiler',
  MENU = 'menu',
}

export default defineComponent({
  components: { RMousedownOutside },
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String as PropType<RSpoilerMode>,
      default: RSpoilerMode.SPOILER,
      validator(val: any) {
        return Object.values(RSpoilerMode).includes(val);
      },
    },
  },
  data() {
    const ignoreClicksOn: HTMLDivElement[] = [];

    return {
      unfolded: false,
      ignoreClicksOn,
    };
  },
  computed: {
    tag() {
      return this.mode === RSpoilerMode.MENU ? RMousedownOutside : 'div';
    },
    listeners() {
      if (this.mode === RSpoilerMode.MENU) return { click: () => { this.unfolded = false; } };
      return {};
    },
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
  mounted() {
    this.ignoreClicksOn.push(this.$refs.toggler as HTMLDivElement);
  },
});
</script>

<style scoped>
.r-spoiler {
  position: relative;
}

.content {
  position: absolute;
  right: 0;
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
