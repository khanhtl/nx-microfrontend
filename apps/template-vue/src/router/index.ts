import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[]=[
  {
    path: '/',
    children: [

      {
        path: '/targets',
        component: () => import('../app/views/targets/Targets.vue'),
      },
      {
        path: '/review-period',
        component: () => import('../app/views/review-period/ReviewPeriod.vue'),
      },
    ]
  }
]

const router=createRouter({
  routes: routes,
  // sub route to app
  history: createWebHistory('review'),
  end: true
});

router.beforeEach((to, from) => {
  return true
});


export { router };
