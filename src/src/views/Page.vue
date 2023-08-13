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
      <div class="center">
        <h1 style="font-size: 500%;">BRIGHT</h1>
        <h1 style="font-size: 500%;">CHOICE</h1>
        <p style="margin: auto; width: 50%; font-size: x-large;">
          For any procedure to illuminate
          an area via a unique, dual light source
          that eliminates any shadow
        </p>
        <button class="emphasized-button" @click="video1.show = true">Watch Video</button>
      </div>



    </TheaterWheel>

    <div class="textBlocksPanel textBlocksPanel1 grid grid3">
      <RoundedBlackBox v-for="row in shortTextBlocks1"
                       :bg="row.bg"
                       :bgColor="row.bgColor"
                       :title="row.title"
                       :sub="row.sub"
                       :text="row.text"
      ></RoundedBlackBox>
    </div>
    <TheaterWheel :name="'video1'"
                  :test="true"
                  :bg-mode="'cover'"
                  :style="{'background':'#000'}"
                  :scroll-event="scroll.event"
                  :frames="video1Theater.frames"
                  :height="610">
    </TheaterWheel>

    <div class="textBlocksPanel textBlocksPanel2 grid grid2">
      <RoundedBlackBox v-for="row in shortTextBlocks2"
                       :bg="row.bg"
                       :bgColor="row.bgColor"
                       :title="row.title"
                       :sub="row.sub"
                       :text="row.text"
      ></RoundedBlackBox>
    </div>
    <TheaterWheel :bg-mode="'cover'"
                  :frames="video2Theater.frames"
                  :style="{'background':'#000'}"
                  :scroll-event="scroll.event"
                  :height="610"
                  :name="'video2'"
                  :test="true">
    </TheaterWheel>
    <br/>
    <div class="textBlocksPanel textBlocksPanel3 grid grid3">
      <RoundedBlackBox v-for="row in shortTextBlocks3"
                       :bg="row.bg"
                       :bgColor="row.bgColor"
                       :title="row.title"
                       :sub="row.sub"
                       :text="row.text"
      ></RoundedBlackBox>
    </div>
    <div class="contentBody">
      <!-- PLACE CONTENT HERE -->
    </div>
    <div class="stayUpdate">
      <h1>Stay updated</h1>
      <h3>For exclusive advance information on our new products and promotions.</h3>
      <div class="emailInput">
        <input type="email" /><button>Subscribe <font-awesome-icon icon="fa-solid fa-envelope" /></button>
      </div>
    </div>


    <Modal :name="'video1'"
           :show="() => video1.show"
           :close-callback="() => {video1.show = false}">
      <div class="video" v-if="video1.show">
        <video :src="video1.src" preload="auto" controls="true" style="width: 100%; height: 100%;"></video>
      </div>
    </Modal>
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
import Modal from "@/components/Modal.vue";
import block1 from "@/data/index_text_block1.json"
import block2 from "@/data/index_text_block2.json"
import block3 from "@/data/index_text_block3.json"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {
    FontAwesomeIcon,
    Modal,
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  data() {
    return {
      loaded: false,
      video1: {
        show: false,
        src: '/video/intro.mp4'
      },
      shortTextBlocks1: block1,
      shortTextBlocks2: block2,
      shortTextBlocks3: block3,
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

.textBlocksPanel{
  margin: 0px auto;
}
.textBlocksPanel2{
  background-color: #151515;
}

.stayUpdate{
  background: #199ddc;
  padding: 100px 0;
  text-align: center;
}
.stayUpdate h1{
  color: #fff;
}
.stayUpdate .emailInput{

}
.stayUpdate .emailInput input{
  background: #b6e8ff;
  border: none;
  padding: 10px;
  border-radius: 20px 0 0 20px;
}
.stayUpdate .emailInput button{
  background: #b6e8ff;
  border: none;
  padding: 10px;
  border-radius: 0 20px 20px 0;
}
</style>