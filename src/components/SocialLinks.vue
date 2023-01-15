<template>
  <div class="social-links">
    <TheFooterButton type="discord"/>
    <TheFooterButton type="youtube"/>
    <TheFooterButton type="twitch"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheFooterButton from '@/components/TheFooter/TheFooterButton.vue';

export default defineComponent({
  components: {
    TheFooterButton,
  },
});
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 10px;
}
</style>
