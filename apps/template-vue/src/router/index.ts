import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import TargetDetail from '../app/views/targets/TargetDetail.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../app/App.vue'),
    children: [
      {
        path: 'targets',
        name: 'targets',
        component: () => import('../app/views/targets/Targets.vue'),
      },

      {
        path: 'targets/:id',
        name: 'targets_detail',
        component: TargetDetail,
        props: true,
      },
      {
        path: 'review-period',
        name: 'review-period',
        component: () => import('../app/views/review-period/ReviewPeriod.vue'),
      },
    ],
  },
];
const router = createRouter({
  routes: routes,
  // sub route to app
  history: createWebHistory('review'),
});

router.beforeEach((to, from) => {
  if (to.name == `${(window as any).name}` || !(window as any).name) {
    return true;
  } else {
    return { name: (window as any).name };
  }
});

export { router };
