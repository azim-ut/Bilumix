<template>

  <HeadMenu :key="$route.path" />
  <div class="contentBody" style="margin-top: 80px;">
    <IntroFrame1 />
    <TheaterWheel :name="'product'"
                  :test="true"
                  :bg-mode="'cover'"
                  :scroll-event="scroll.event"
                  :frames="productTheater.frames"
                  :height="610">

    </TheaterWheel>
    <TheaterWheel :name="'video1'"
                  :test="true"
                  :bg-mode="'cover'"
                  :style="{'background':'#000'}"
                  :scroll-event="scroll.event"
                  :frames="video1Theater.frames"
                  :height="610">
    </TheaterWheel>
    <TheaterWheel :bg-mode="'cover'"
                  :frames="video2Theater.frames"
                  :style="{'background':'#000'}"
                  :scroll-event="scroll.event"
                  :height="610"
                  :name="'video2'"
                  :test="true">
    </TheaterWheel>
    <div class="contentBody">
      <!-- PLACE CONTENT HERE -->
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
      loaded: false,
      shortTextBlocks: [
        {
          title: "Weightless",
          bg: "/images/static/bl-overview-01.png",
          sub: "Light & Sturdy",
          text: "No pressure or added weight on the nose. Contoured to fit snugly on the head for a comfortable wear all day long."
        },
        {
          title: "Shadowless",
          bg: "/images/static/bl-overview-02.png",
          sub: "Dual Lights",
          text: "Two LED light sources deliver a strong spotlight in angles that eliminate any shadow from a first person POV."
        },
        {
          title: "Wireless",
          bg: "/images/static/bl-overview-03.png",
          sub: "Two Rechargeable Batteries",
          text: "An enhanced power management system along with two rechargeable batteries allow you to work continuously for up to 12 hours."
        },
        {
          title: "Weightless 2",
          bg: "/images/static/bl-overview-01.png",
          sub: "Light & Sturdy 2",
          text: "text 222."
        }
      ],
      scroll: {
        event: undefined
      },
      productTheater: {
        frames: [] as any[]
      },
      video1Theater: {
        frames: [] as any[]
      },
      video2Theater: {
        frames: [] as any[]
      }
    }
  },
  methods: {
    loadedEvent(){
      this.loaded = true
      console.log("loaded")
    },
    fillTheaterFrames(){
      this.productTheater.frames = []
      let cnt = 279;
      while(cnt-->0){
        let src = "/images/min/device_image/bilumix-sequence" + cnt + "-min.png"
        if(cnt>=10 && cnt<100){
          src = "/images/min/device_image/bilumix-sequence0" + cnt + "-min.png"
        }else if(cnt<10){
          src = "/images/min/device_image/bilumix-sequence00" + cnt + "-min.png"
        }
        // let path = require(src)
        this.productTheater.frames.unshift(new URL(src, import.meta.url))
      }
    },
    fillVideoTheaterFrames(){
      this.video1Theater.frames = []
      let cnt = 224;
      while(cnt-->0){
        let path = "/images/min/video1/video1-sq-" + cnt + "-min.jpg"
        if(cnt>=10 && cnt<100){
          path = "/images/min/video1/video1-sq-0" + cnt + "-min.jpg"
        }else if(cnt<10){
          path = "/images/min/video1/video1-sq-00" + cnt + "-min.jpg"
        }
        this.video1Theater.frames.unshift(path)
      }
    },
    fillVideo2TheaterFrames(){
      this.video2Theater.frames = []
      let cnt = 235;
      while(cnt-->0){
        let path = "/images/min/video2/video2-sq-" + cnt + "-min.jpg"
        if(cnt>=10 && cnt<100){
          path = "/images/min/video2/video2-sq-0" + cnt + "-min.jpg"
        }else if(cnt<10){
          path = "/images/min/video2/video2-sq-00" + cnt + "-min.jpg"
        }
        this.video2Theater.frames.unshift(path)
      }
    },
    handleScroll(event){
      this.scroll.event = event
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('load', this.loadedEvent);
    this.fillTheaterFrames()
    this.fillVideoTheaterFrames()
    this.fillVideo2TheaterFrames()
  }
})
</script>

<style scoped>
.loaderBase img{
  width: 10px; height: 10px;
  opacity: .01;
}

.mainBanner .content h1{
  line-height: 40px;
  font-size: 50px;
  text-shadow: 1px 1px 13px rgba(0,0,0,.5);
}
.mainBanner .content h2{
  font-size: 16px;
  letter-spacing: 10px;
}
.mainBanner .content h3{
  font-size: 35px;
  font-weight: 600;
  max-width: 600px;
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
}
</style>