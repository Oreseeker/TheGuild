<template>
  <Teleport to="body">
    <Transition>
      <div v-if="modelValue" class="mobile-menu">
        <div class="top">
          <CloseButton
            class="close"
            @click="$emit('update:modelValue')"
          />
        </div>
        <NavigationMenu
          alignment="vertical"
          @click:menu-item="$emit('update:modelValue')"
        />
        <SocialLinks class="social-links"/>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import CloseButton from '@/components/CloseButton.vue';
import SocialLinks from '@/components/SocialLinks.vue';

export default defineComponent({
  components: { SocialLinks, CloseButton, NavigationMenu },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    modelValue(val: boolean) {
      if (val) {
        document.querySelector('html')!.style.overflow = 'hidden';
        return;
      }
      document.querySelector('html')!.style.overflow = '';
    },
  },
});
</script>

<style scoped>
.mobile-menu {
  width: 100%;
  min-height: 100vh;
  background: var(--popup-background);
  top: 0;
  z-index: 1000;
  position: fixed;
}

.top {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}

.v-enter-from,
.v-leave-to {
  right: -100%;
}

.v-enter-to,
.v-leave-from {
  right: 0;
}

.v-enter-active,
.v-leave-active {
  transition: right 200ms linear;
}

.close {
  width: 60px;
  height: 60px;
}

.social-links {
  margin: 40px auto 0 auto;
  width: max-content;
}
</style>
