<template>

  <HeadMenu :key="$route.path" />
  <div class="contentBody">

    <div style="padding-top: 104px; background: rgb(21, 21, 21);">
        <div class="bg_offers">
          <div class="frstblk">
              <h2>Special Offers</h2>
          </div>
              <div class="scndblk">
                <h3 class="textmlty">We will resume the offers back soon.</h3>
              </div>
        </div>
    </div>


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
.bg_offers {
  margin: 0px;
  color: rgba(0, 0, 0, 0.87);
   font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 100%;
  text-align: center;
}
.frstblk{
    max-width: unset;
    width: 100%;
    color: white;
    margin: 0px;
    font-family: Rubik, sans-serif;
    font-weight: 550;
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }
.scndblk{
    max-width: unset;
    width: 100%;
    background: linear-gradient(90deg,#2ee8dc 0,#05b4ff 50%,#2d66eb);
  background: -webkit-gradient(linear,left top,right top,from(#2ee8dc),color-stop(50%,#05b4ff),to(#2d66eb));
  -webkit-background-clip: text;
    justify-content: center;
    font-size: 36px;
    font-weight: 400;
    margin: 0;

  }
.textmlty{
  text-shadow: none!important;
  font-family: Rubik,sans-serif;


}
</style>