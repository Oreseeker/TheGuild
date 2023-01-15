<template>
  <div
    class="navigation-menu"
    :class="{ [alignment]: true }"
  >
    <RLink
      v-for="item in menu"
      :key="item.to.name"
      :to="item.to"
      class="nav-link"
      @click="$emit('click:menu-item', item)"
    >
      {{ item.text }}
    </RLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RLink from '@/components/reusable/RLink.vue';
import { RouteName } from '@/enums';

enum NavigationMenuAlignment {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export default defineComponent({
  components: {
    RLink,
  },
  props: {
    alignment: {
      type: String as PropType<NavigationMenuAlignment>,
      default: NavigationMenuAlignment.HORIZONTAL,
      validator(val: any) {
        return Object.values(NavigationMenuAlignment).includes(val);
      },
    },
  },
  data() {
    return {
      menu: [
        {
          to: { name: RouteName.ABOUT_US },
          text: 'О нас',
        },
        {
          to: { name: RouteName.RULES },
          text: 'Правила гильдии',
        },
        {
          to: { name: RouteName.JOIN },
          text: 'Вступление',
        },
      ],
    };
  },
});
</script>

<style scoped>
.navigation-menu {
  display: flex;
  gap: 10px;
}

.horizontal {
  flex-direction: row;
}

.vertical {
  flex-direction: column;
}

.vertical .nav-link {
  text-align: center;
}

.nav-link {
  display: block;
  text-decoration: none;
  transition: all 100ms linear;
  min-width: max-content;
}

.nav-link.r-link-active {
  color: var(--menu-item-active-color);
}

.vertical .nav-link {
  display: block;
  padding: 20px;
  width: 100%;
}

.vertical .nav-link:hover {
  background-color: #3b1f0a;
}
</style>
