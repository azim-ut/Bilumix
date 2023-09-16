<template>

  <HeadMenu :key="$route.path" />
  <div class="contentWrap">

      <div class="offersHeadWrap" style="min-height: 100vh; background: rgb(21, 21, 21);">
          <div class="bg_offers">
            <div class="title">
                <h2>{{mainBundles.SPECIAL_OFFERS_H1}}</h2>
            </div>
                <div class="scndblk">
                  <h3 class="textmlty">{{mainBundles.SPECIAL_OFFERS_TEXT}}</h3>
                </div>
          </div>
      </div>

  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/components/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";
import mainBundles from "@local/main_text.json"

export default defineComponent({
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
  data() {
    return {
      mainBundles: mainBundles,
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
.offersHeadWrap{
  min-height: 100vh;
  background: rgb(21, 21, 21);
  display: flex;
  vertical-align: middle;
  align-items: center;
}
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
.title{
    max-width: unset;
    width: 100%;
    color: white;
    margin: 0px;
    font-family: Rubik, sans-serif;
    font-weight: 500;
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

h3{
  font-size: 36px;
  font-weight: 400;
  background: #2ee8dc;
  background: -moz-linear-gradient(to right,#2ee8dc 0,#05b4ff 50%,#2d66eb 100%);
  background: -webkit-gradient(linear,left top,right top,from(#2ee8dc),color-stop(50%,#05b4ff),to(#2d66eb));
  background: -moz-linear-gradient(left,#2ee8dc 0,#05b4ff 50%,#2d66eb 100%);
  background: linear-gradient(90deg,#2ee8dc 0,#05b4ff 50%,#2d66eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: .8rem;
  letter-spacing: 2px;
  margin: auto;
}

@media (max-width: 850px) {
  .title h2{
    font-weight: 500;
    font-size: 2.75rem;
  }

  h3{
    font-size: 28px;
    width: 80%;
  }
}

@media (max-width: 600px) {
  .title h2{
    font-weight: 500;
    font-size: 2.5rem;
  }

  h3{
    font-size: 24px;
    width: 80%;
  }
}
</style>