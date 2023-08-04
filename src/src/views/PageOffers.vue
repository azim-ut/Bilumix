<template>

  <HeadMenu :key="$route.path" />
  <div class="contentBody">

    <div style="padding-top: 104px; background: rgb(21, 21, 21);"><section id="program-section" data-testid="program-section" class="SpecialOfferSection_root__2ZI3R"><div class="MuiContainer-root MuiContainer-maxWidthLg css-2jualf"><div class="MuiGrid-root MuiGrid-container css-1d3bbye"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-1au9qiw"><h2 class="MuiTypography-root MuiTypography-h2 css-pvaigf" style="text-align: center; color: white;">Special Offers</h2></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 css-1au9qiw"><div class="SpecialOfferSection_content__jKb91" style="max-width: unset; width: 100%;"><h3 class="bilumix-headline emphasized-text SpecialOfferSection_headline__3elOv" style="max-width: unset; width: 100%;">We will resume the offers back soon.</h3></div></div></div></div></section></div>


  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import IntroSection1 from "@/components/IntroSection1.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/views/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";

export default defineComponent({
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  data() {
    return {
      menu: [
        {title: "Shop", active: false, name: 'shop', link:'/shop', mobileButton: false},
        {title: "Offers", active: true, name:'offers', link:'/offers', mobileButton: false},
        {title: "Manual", active: false, name:'manual', link:'/manual', mobileButton: false},
        {title: "Support", active: false, name:'support', link:'/support', mobileButton: false},
        {title: "Free trial", active: false, name:'trial', link:'/trial', mobileButton: true},
        {title: "Build package", active: false, name:'package', link:'/package', mobileButton: true}
      ],
    }
  },
  methods: {

  },
  unmounted () {
  },
  mounted(){
  }
})
</script>

<style scoped>
</style>