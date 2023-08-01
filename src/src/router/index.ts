import {createRouter, createWebHistory} from 'vue-router'
import Page from "@/views/Page.vue";
import IntroFrame1 from "@/views/IntroFrame1.vue";
import IntroVideo1 from "@/views/IntroVideo1.vue";
import IntroVideo2 from "@/views/IntroVideo2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page
    },
    {
      path: '/intro/frame1',
      name: 'introFrame1',
      component: IntroFrame1
    },
    {
      path: '/intro/video1',
      name: 'introVideo1',
      component: IntroVideo1
    },
    {
      path: '/intro/video2',
      name: 'introVideo2',
      component: IntroVideo2
    },
    {
      path: '/shop',
      name: 'shop',
      component: Page
    },
    {
      path: '/offers',
      name: 'offers',
      component: Page
    },
    {
      path: '/manual',
      name: 'manual',
      component: Page
    },
    {
      path: '/support',
      name: 'support',
      component: Page
    },
    {
      path: '/trial',
      name: 'trial',
      component: Page
    },
    {
      path: '/package',
      name: 'package',
      component: Page
    }
  ]
})

export default router
