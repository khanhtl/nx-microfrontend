import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
const routes: RouteRecordRaw[]=[
  {
    path: '/',
    children: [
      {
        path: '/targets',
        name: 'targets',
        component: () => import('../app/views/targets/Targets.vue'),
      },
      {
        path: '/review-period',
        name: 'review-period',
        component: () => import('../app/views/review-period/ReviewPeriod.vue'),
      },
    ]
  }
]
const router=createRouter({
  routes: routes,
  // sub route to app
  history: createWebHistory('review'),
});

router.beforeEach((to, from) => {
  if (to.path==`/${(window as any).path}` || !(window as any).path) {
    return true;
  } else {
    return { name: (window as any).path }
  }
})

export { router };
