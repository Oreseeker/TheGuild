<template>
    <RSpoiler
      class="burger-menu"
      :opened="opened"
      close-on-outside-click
      mode="menu"
    >
      <template v-slot:toggler>
        <div class="toggler">
          <div class="line"/>
          <div class="line"/>
          <div class="line"/>
       </div>
      </template>
      <template v-slot:content>
        <div class="content">
          <NavigationMenu
            alignment="vertical"
          />
        </div>
      </template>
    </RSpoiler>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RSpoiler from '@/components/reusable/RSpoiler.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';

export default defineComponent({
  components: {
    NavigationMenu,
    RSpoiler,
  },
  data() {
    return {
      opened: false,
    };
  },
});
</script>

<style scoped>
.toggler {
  --size: 40px;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 30px;
  padding: 4px;
  justify-content: space-between;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 2px;
  background: white;
}

.content {
  background-color: var(--popup-background);
  border-radius: 4px;
}
</style>
