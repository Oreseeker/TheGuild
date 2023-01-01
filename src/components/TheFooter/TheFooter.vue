<template>
  <footer class="the-footer">
    <div class="title">Зверинец Владыки</div>
    <div class="btns">
      <TheFooterButton type="discord"/>
      <TheFooterButton type="youtube"/>
      <TheFooterButton type="twitch"/>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheFooterButton from '@/components/TheFooter/TheFooterButton.vue';

export default defineComponent({
  components: { TheFooterButton },
  data() {
    return {
    };
  },
});
</script>

<style scoped>
.the-footer {
  --padding: 20px;
  padding: var(--padding);
  width: 100%;
  background-color: var(--popup-background);
  margin: 20px 0 0 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-top: 1px solid var(--footer-top-border)
}

.title {
  font-size: 25px;
  position: absolute;
  left: var(--padding);
}

.btns {
  display: flex;
  gap: 10px;
}
</style>
