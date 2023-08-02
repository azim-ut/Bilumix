import {createRouter, createWebHistory} from 'vue-router'
import Page from "@/views/Page.vue";
import FrameIntroFrame1 from "@/views/FrameIntroFrame1.vue";
import FrameIntroVideo1 from "@/views/FrameIntroVideo1.vue";
import FrameIntroVideo2 from "@/views/FrameIntroVideo2.vue";
import FramePage from "@/views/FramePage.vue";
import PageShop from "@/views/PageShop.vue";
import PageOffers from "@/views/PageOffers.vue";
import PageManual from "@/views/PageManual.vue";
import PageSupport from "@/views/PageSupport.vue";
import PageTrial from "@/views/PageTrial.vue";
import PagePackage from "@/views/PagePackage.vue";

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
      component: PageShop
    },
    {
      path: '/offers',
      name: 'offers',
      component: PageOffers
    },
    {
      path: '/manual',
      name: 'manual',
      component: PageManual
    },
    {
      path: '/support',
      name: 'support',
      component: PageSupport
    },
    {
      path: '/trial',
      name: 'trial',
      component: PageTrial
    },
    {
      path: '/package',
      name: 'package',
      component: PagePackage
    }
  ]
})

export default router
