import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[]=[
  {
    path: '/',
    children: [

      {
        path: '/targets',
        component: () => import('../app/components/Target.vue'),
      },
      {
        path: '/review-period',
        component: () => import('../app/components/Period.vue'),
      },
    ]
  }
]

const router=createRouter({
  routes: routes,
  history: createWebHistory('review'),
  end: true
});

router.beforeEach((to, from) => {
  return true
});


export { router };
