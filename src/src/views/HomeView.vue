<template>
  <div>
    <div class="contentBlock product" style="position: relative;" v-if="this.productTheater.frames.length>0">
      <Theater :name="'product'" :test="true" :bg-mode="'cover'" :frames="this.productTheater.frames" :height="20">
        <div class="mainBanner">
          <div class="content">
            <h1>BiLumix</h1>
            <h2>GENERATION 2.0</h2>
            <h3>Shadowless Headlamp</h3>
          </div>
        </div>
      </Theater>
    </div>
    <RoundedBlackBox
        v-for="row in shortTextBlocks"
        :title = "row.title"
        :sub = "row.sub"
        :text = "row.text"
    ></RoundedBlackBox>
    <div class="contentBlock" style="position: relative; background: black;" v-if="this.video2Theater.frames.length>0">
      <Theater :name="'video2'" :bg-mode="'cover'" :test="false" :frames="this.video2Theater.frames" :height="20"></Theater>
    </div>
    <div class="contentBlock" style="position: relative; background: black" v-if="this.video1Theater.frames.length>0">
      <Theater :name="'video1'" :bg-mode="'cover'" :frames="this.video1Theater.frames" :height="20"></Theater>
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
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";

export default defineComponent({
  components: {RoundedBlackBox, Theater},
  data() {
    return {
      shortTextBlocks: [
        {
          title: "Weightless",
          sub: "Light & Sturdy",
          text: "No pressure or added weight on the nose. Contoured to fit snugly on the head for a comfortable wear all day long."
        },
        {
          title: "Weightless 2",
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