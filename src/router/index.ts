import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/enums';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.ABOUT_US,
    component: () => import('@/views/AboutUs.vue'),
  },
  {
    path: '/rules',
    name: RouteName.RULES,
    component: () => import('@/views/GuildRules.vue'),
  },
  {
    path: '/join',
    name: RouteName.JOIN,
    component: () => import('@/views/JoinGuild.vue'),
  },
  {
    path: '/raid_rules',
    name: RouteName.RAID_RULES,
    component: () => import('@/views/RaidRules.vue'),
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
