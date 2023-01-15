import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AboutUs from '@/views/AboutUs.vue';
import GuildRules from '@/views/GuildRules.vue';
import JoinGuild from '@/views/JoinGuild.vue';
import { RouteName } from '@/enums';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.ABOUT_US,
    component: AboutUs,
  },
  {
    path: '/rules',
    name: RouteName.RULES,
    component: GuildRules,
  },
  {
    path: '/join',
    name: RouteName.JOIN,
    component: JoinGuild,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
