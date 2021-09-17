import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

export default createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      hidden: false,
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      meta: {
        index: 1
      }
    },
  ] as AppRouteRecordRaw[]
})