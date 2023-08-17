<template>
  <div class="contentBody">
    <Theater :name="'product'" :effects="['zoomOut']" :test="true" :bg-mode="'cover'" :frames="this.productTheater.frames" :height="20">
      <div class="mainBanner">
        <div class="content">
          <h1>BiLumix</h1>
          <h2>GENERATION 2.0</h2>
          <h3>Shadowless Headlamp</h3>
        </div>
      </div>
    </Theater>
  </div>
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
      loaded: false,
      productTheater: {
        frames: []
      }
    }
  },
  methods: {
    loadedEvent(){
      this.loaded = true
    },
    fillTheaterFrames(){
      this.productTheater.frames = []
      let cnt = 224;
      while(cnt-->0){
        let path = "/images/min/video1/video1-sq-" + cnt + "-min.jpg"
        if(cnt>=10 && cnt<100){
          path = "/images/min/video1/video1-sq-0" + cnt + "-min.jpg"
        }else if(cnt<10){
          path = "/images/min/video1/video1-sq-00" + cnt + "-min.jpg"
        }
        this.productTheater.frames.unshift(path)
      }
    }
  },
  unmounted () {
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    window.addEventListener('load', this.loadedEvent);
    this.fillTheaterFrames()
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
.mainBanner .content{
  padding: 10px;
  text-align: center;
  width: 100%;
}
</style>