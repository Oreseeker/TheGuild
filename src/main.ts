import { createApp } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueYandexMetrika from 'vue3-yandex-metrika';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(VueYandexMetrika, {
    id: 93717235,
    router,
    env: process.env.NODE_ENV,
    options: {
      triggerEvent: true,
    },
  })
  .mount('#app');
