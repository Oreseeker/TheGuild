<template>
  <nav class="the-toolbar">
    <RLink :to="logoLink" class="logo">Зверинец Владыки</RLink>
    <NavigationMenu class="navigation-menu"/>
    <div class="social-links">
      <TheFooterButton type="discord"/>
      <TheFooterButton type="youtube"/>
      <TheFooterButton type="twitch"/>
    </div>
    <BurgerMenu class="burger-menu"/>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RLink from '@/components/reusable/RLink.vue';
import TheFooterButton from '@/components/TheFooter/TheFooterButton.vue';
import { RouteName } from '@/enums';
import BurgerMenu from '@/components/BurgerMenu.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';

export default defineComponent({
  components: {
    NavigationMenu,
    BurgerMenu,
    RLink,
    TheFooterButton,
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
  computed: {
    logoLink() {
      return { name: RouteName.ABOUT_US };
    },
  },
});
</script>

<style scoped>
.the-toolbar {
  --padding: 20px;
  padding: var(--padding);
  width: 100%;
  background-color: var(--popup-background);
  margin: 0 0 20px 0;
  display: flex;
  justify-content: stretch;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid var(--footer-top-border);
}

.logo {
  font-size: 25px;
  margin: 0 40px 0 0;
  text-decoration: none;
  min-width: max-content;
}

.nav-link {
  display: block;
  text-decoration: none;
  transition: all 100ms linear;
}

.nav-link.r-link-active {
  color: #bebebe;
}

.social-links {
  display: flex;
  gap: 10px;
  margin: 0 0 0 auto;
}

.burger-menu {
  display: none;
}

@media screen and (max-width: 1024px) {
  .navigation-menu {
    display: none;
  }

  .the-toolbar {
    justify-content: space-between;
  }

  .social-links {
    margin: 0;
  }

  .burger-menu {
    display: revert;
  }

  .logo {
    font-size: 20px;
    margin: 0;
  }
}
</style>
