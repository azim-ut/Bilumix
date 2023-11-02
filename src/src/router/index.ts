import {createRouter, createWebHistory} from 'vue-router'
import Page from "@/views/Page.vue";
import FrameIntroFrame1 from "@/views/FrameIntroFrame1.vue";
import FrameIntroVideo1 from "@/views/FrameIntroVideo1.vue";
import FrameIntroVideo2 from "@/views/FrameIntroVideo2.vue";
import PageShop from "@/views/PageShop.vue";
import PageOffers from "@/views/PageOffers.vue";
import PageManual from "@/views/PageManual.vue";
import PageSupport from "@/views/PageSupport.vue";
import PageTrial from "@/views/PageTrial.vue";
import PagePackage from "@/views/PagePackage.vue";
import PageManualItem from "@/views/PageManualItem.vue";
import PageRefundPolicy from "@/views/PageRefundPolicy.vue";
import PageDataPrivacy from "@/views/PageDataPrivacy.vue";
import PageTermOfUse from "@/views/PageTermOfUse.vue";
import PageShopItem from "@/views/PageShopItem.vue";

import seo from "@local/SEO.json";
import stayUpdated from "@/components/StayUpdated.vue";

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
      path: '/package/:link',
      name: 'headlamp',
      component: PagePackage
    },
    {
      path: '/shop/:link',
      name: 'shopItem',
      component: PageShopItem
    },
    {
      path: '/offers',
      name: 'offers',
      component: PageOffers
    },
    {
      path: '/refund-policy',
      name: 'refund',
      component: PageRefundPolicy
    },
    {
      path: '/data-privacy',
      name: 'dataPrivacy',
      component: PageDataPrivacy
    },
    {
      path: '/terms-of-service',
      name: 'termOfUse',
      component: PageTermOfUse
    },
    {
      path: '/manual/:link',
      name: 'manualPage',
      component: PageManualItem
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
      path: '/package/:link',
      name: 'package',
      component: PagePackage
    }
  ]
})

router.beforeEach((to, from, next) => {
  let defaultTitle = seo.TITLE_
  let title = undefined
  const seoKey = 'TITLE' + to.fullPath.split(/\?|\#/)[0].replaceAll('/','_')
  if(seo[seoKey]){
    title = seo[seoKey]
  }
  console.log(seoKey)
  if(!title){
    let offset = 0
    while (offset = seoKey.indexOf('_', offset)){
      let subKey = seoKey.substring(0, offset)
      if(!seo[subKey]){
        break;
      }
      title = seo[subKey]
      offset++
    }
  }

  //console.log(title, seoKey, seo[seoKey], to)

  if(!title){
    title = defaultTitle
  }
  document.title = title + ' Bilumix';
  next();
});

export default router
