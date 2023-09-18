<template>

  <header>
    <div class="menu-toggle" @click="showMobileMenu = !showMobileMenu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <div class="logo">
      <img src="@/assets/logo.svg">
    </div>
    <nav :class="{'active': showMobileMenu}">
      <ul>
        <li v-for="row in menu"
            @click="toggleMenu(row)"
            :class="{'active':row.active, 'mobileButtons': row.mobileButton}">
          <a>{{ row.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="contentWrap">
    <div style="margin-top: 80px;">
      <div class="contentBlock product" style="position: relative;">
        <iframe class="theaterFrame" src="/intro/frame1"></iframe>
      </div>
      <RoundedBlackBox
          v-for="row in shortTextBlocks"
          :title = "row.title"
          :sub = "row.sub"
          :text = "row.text"
      ></RoundedBlackBox>
      <div class="contentBlock product" style="position: relative;">
        <iframe class="theaterFrame" src="/intro/video1"></iframe>
      </div>
      <RoundedBlackBox
          v-for="row in shortTextBlocks"
          :title = "row.title"
          :sub = "row.sub"
          :text = "row.text"
      ></RoundedBlackBox>
      <div class="contentBlock product" style="position: relative;">
        <iframe class="theaterFrame" src="/intro/video2"></iframe>
      </div>
      <div class="loaderBase">
        <!--    <img v-for="img in this.video2Theater.frames" :src="img">-->
        <!--    <img v-for="img in this.video1Theater.frames" :src="img">-->
        <!--    <img v-for="img in this.productTheater.frames" :src="img">-->
      </div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Theater from "@/components/Theater.vue";
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";

export default defineComponent({
  components: {RouterView, Footer, ScrollDownIndicator, RoundedBlackBox, Theater},
  data() {
    return {
      showMobileMenu: false,
      menu: [
        {title: "Shop", active: false, name: 'shop', link:'/shop', mobileButton: false},
        {title: "Offers", active: true, name:'offers', link:'/offers', mobileButton: false},
        {title: "Manual", active: false, name:'manual', link:'/manual', mobileButton: false},
        {title: "Support", active: false, name:'support', link:'/support', mobileButton: false},
        {title: "Free trial", active: false, name:'trial', link:'/trial', mobileButton: true},
        {title: "Build package", active: false, name:'package', link:'/package', mobileButton: true}
      ],
      loaded: false,
      shortTextBlocks1: [
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
      productTheater: {
        frames: []
      },
      video1Theater: {
        frames: []
      },
      video2Theater: {
        frames: []
      }
    }
  },
  methods: {
    toggleMenu(menu: any){
      this.$router.push({name: menu.name})
      this.menu.forEach(row => {
        row.active = false
        if(row.link.startsWith(menu.link)){
          row.active = true
        }
      })
      this.showMobileMenu = false
    },
    loadedEvent(){
      this.loaded = true
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
    fillVideo1TheaterFrames(){
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
    }
  },
  unmounted () {
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    this.toggleMenu(this.$route.path)
    window.addEventListener('load', this.loadedEvent);
  }
})
</script>

<style scoped>
.contentBlock{
  width: 100%;
  overflow: hidden;
}
.loaderBase{ width: 1px; height: 1px; overflow: hidden;}
.loaderBase img{
  width: 10px; height: 10px;
  opacity: .01;
}
.contentBlock.product{
  min-height: 100vh;
}

.mainBanner{
  min-height: 100vh;
  display: flex;
  vertical-align: bottom;
  align-items: end;
}
.mainBanner .content h1{
  line-height: 40px;
  text-shadow: 1px 1px 13px rgba(0,0,0,.5);
}
.mainBanner .content h2{
  letter-spacing: 10px;
}
.mainBanner .content h3{
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
.mainBanner .content{
  padding: 10px;
  text-align: center;
  width: 100%;
}
.theaterFrame{
  width: 100%;
  min-height: 100vh;
  border: none;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
</style>