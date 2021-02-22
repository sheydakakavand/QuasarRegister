
const routes = [
  {
    path: '/',
    component: () => import('layouts/search.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/join/user', name: '', component: () => import('pages/join.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
