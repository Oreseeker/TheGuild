<template>
  <nav class="the-toolbar">
    <RLink :to="logoLink" class="logo">Зверинец Владыки</RLink>
    <NavigationMenu class="navigation-menu"/>
    <SocialLinks class="social-links"/>
    <MobileMenuToggler
      class="burger-menu"
      @click="showMobileMenu = !showMobileMenu"
    />
    <MobileMenu
      v-model="showMobileMenu"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RLink from '@/components/reusable/RLink.vue';
import TheFooterButton from '@/components/TheFooter/TheFooterButton.vue';
import { RouteName } from '@/enums';
import NavigationMenu from '@/components/NavigationMenu.vue';
import MobileMenuToggler from '@/components/MobileMenuToggler.vue';
import MobileMenu from '@/components/MobileMenu.vue';
import SocialLinks from '@/components/SocialLinks.vue';

export default defineComponent({
  components: {
    SocialLinks,
    MobileMenu,
    MobileMenuToggler,
    NavigationMenu,
    RLink,
  },
  data() {
    return {
      showMobileMenu: false,
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
  font-size: 1.5rem;
  margin: 0 40px 0 0;
  text-decoration: none;
  /*min-width: max-content;*/
}

.nav-link {
  display: block;
  text-decoration: none;
  transition: all 100ms linear;
}

.nav-link.r-link-active {
  color: #bebebe;
}

.burger-menu {
  display: none;
}

.social-links {
  margin: 0 0 0 auto;
}

@media screen and (max-width: 1024px) {
  .navigation-menu {
    display: none;
  }

  .the-toolbar {
    justify-content: space-between;
  }

  .social-links {
    display: none;
  }

  .burger-menu {
    display: flex;
  }

  .logo {
    font-size: 1.25rem;
    margin: 0;
  }
}
</style>
