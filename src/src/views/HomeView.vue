<template>
  <div>
    <div class="contentBlock" style="position: relative;" v-if="this.productTheater.frames.length>0">
      <Theater :bg-mode="'contain'" :frames="this.productTheater.frames" :height="2000"></Theater>
    </div>
    <div class="contentBlock" style="position: relative; background: black" v-if="this.video1Theater.frames.length>0">
      <Theater :bg-mode="'cover'" :frames="this.video1Theater.frames" :height="2000"></Theater>
    </div>
    <div class="contentBlock" style="position: relative; background: black;" v-if="this.video2Theater.frames.length>0">
      <Theater :bg-mode="'cover'" :frames="this.video2Theater.frames" :height="2000"></Theater>
    </div>
    <div class="loaderBase">
      <!--    <img v-for="img in this.video2Theater.frames" :src="img">-->
      <!--    <img v-for="img in this.video1Theater.frames" :src="img">-->
      <!--    <img v-for="img in this.productTheater.frames" :src="img">-->
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Theater from "@/components/Theater.vue";

export default defineComponent({
  components: {Theater},
  data() {
    return {
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
    fillProductTheaterFrames(){
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
  },
  mounted(){
    this.fillProductTheaterFrames()
    this.fillVideo1TheaterFrames()
    this.fillVideo2TheaterFrames()
  }
})
</script>

<style scoped>
.contentBlock{
  width: 100%;
  min-height: 100vh;
}
.loaderBase{ width: 1px; height: 1px; overflow: hidden;}
.loaderBase img{
  width: 10px; height: 10px;
  opacity: .01;
}
</style>