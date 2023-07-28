import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: HomeView
    },
    {
      path: '/offers',
      name: 'offers',
      component: HomeView
    },
    {
      path: '/manual',
      name: 'manual',
      component: HomeView
    },
    {
      path: '/support',
      name: 'support',
      component: HomeView
    },
    {
      path: '/trial',
      name: 'trial',
      component: HomeView
    },
    {
      path: '/package',
      name: 'package',
      component: HomeView
    }
  ]
})

export default router
