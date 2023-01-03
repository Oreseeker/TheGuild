<template>
  <a
    v-if="isHTMLLink"
    :href="to"
    :class="classes"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="$attrs"
  >
    <slot/>
  </a>
  <RouterLink
    v-else
    v-slot="slotProps"
    :to="to"
    :class="classes"
    v-bind="$attrs"
    active-class="r-link-active"
    exact-active-class="r-link-exact-active"
  >
    <slot
      v-bind="slotProps"
    />
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

type VLinkTo = RouteLocationRaw | string;

type VLinkDisabled = boolean;

export type VLinkProps = {
  to: VLinkTo;
  disabled: VLinkDisabled;
}

function isHTMLLink(link: unknown) {
  return typeof link === 'string' && link.startsWith('http');
}

export default defineComponent({
  props: {
    to: {
      type: [String, Object] as PropType<VLinkTo>,
      required: true,
    },
    disabled: {
      type: Boolean as PropType<VLinkDisabled>,
      default: false,
    },
  },
  computed: {
    isHTMLLink() {
      return isHTMLLink(this.to);
    },
    classes() {
      const { disabled } = this;
      return { disabled };
    },
  },
});
</script>

<style scoped>
.disabled {
  pointer-events: none;
}
</style>
