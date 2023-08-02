import {createRouter, createWebHistory} from 'vue-router'
import Page from "@/views/Page.vue";
import FrameIntroFrame1 from "@/views/FrameIntroFrame1.vue";
import FrameIntroVideo1 from "@/views/FrameIntroVideo1.vue";
import FrameIntroVideo2 from "@/views/FrameIntroVideo2.vue";
import FramePage from "@/views/FramePage.vue";

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
      name: 'FrameIntroFrame1',
      component: FrameIntroFrame1
    },
    {
      path: '/intro/video1',
      name: 'FrameIntroVideo1',
      component: FrameIntroVideo1
    },
    {
      path: '/intro/video2',
      name: 'FrameIntroVideo2',
      component: FrameIntroVideo2
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
