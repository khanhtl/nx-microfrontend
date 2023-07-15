import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[]=[
  {
    path: '/',
    children: [

      {
        path: '/target',
        component: () => import('../app/components/Target.vue'),
      },
      {
        path: '/period',
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
  console.log(to, from);

  // ...
  // explicitly return false to cancel the navigation
  return true
})

export { router };
