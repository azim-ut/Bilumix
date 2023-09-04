<template>

  <HeadMenu :key="$route.path" />
  <div class="content" style="margin-top: 80px; position: relative;">
    <ScrollDownIndicator />
    <IntroFrame1 />
    <div class="textBlocksPanelWrap" style="min-height: 100vh;">
      <div class="textBlocksPanel textBlocksPanel1 grid grid3">
        <RoundedBlackBox v-for="row in shortTextBlocks1"
                         :bg="row.bg"
                         :margin="'10px'"
                         :bgColor="row.bgColor"
                         :title="row.title"
                         :sub="row.sub"
                         :text="row.text"
        ></RoundedBlackBox>
      </div>
    </div>


    <div class="textBlocksPanelWrap" style="margin: 0 !important; padding: 0 !important; background-color: #151515;">
      <div class="textBlocksPanel textBlocksPanel2 grid grid2" style="min-height: 100vh;">
        <RoundedBlackBox v-for="row in shortTextBlocks2"
                         :bg="row.bg"
                         :margin="'10px'"
                         :bgColor="row.bgColor"
                         :title="row.title"
                         :sub="row.sub"
                         :text="row.text"
        ></RoundedBlackBox>
      </div>
    </div>

    <div class="textBlocksPanelWrap" style="min-height: 100vh;">
      <div class="notForMobile textBlocksPanel textBlocksPanel3">
        <h1 class="center blockH1" v-html="shortTextBlocks3[0].title"></h1>
        <div class=" grid grid3">
          <RoundedBlackBox3 v-for="row in shortTextBlocks3.slice(1)"
                            :bg="row.bg"
                            :margin="'10px'"
                            :color="(row.color??'#fff')"
                            :bgColor="row.bgColor"
                            :title="row.title"
                            :sub="row.sub"
                            :text="row.text"
          ></RoundedBlackBox3>
        </div>
      </div>
    </div>



    <div class="videoBlock grid grid2">
      <TheaterWheelVideo1
          					class="video1"
          					:name="'video1'"
                    :test="true"
                    :bg-mode="'cover'"
                    :style="{'background':'#000'}"
                    :scroll-event="scroll.event"
                    :height="500">
      </TheaterWheelVideo1>

      <TheaterWheelVideo2
                    class="video2"
                    :bg-mode="'cover'"
                    :style="{'background':'#000'}"
                    :scroll-event="scroll.event"
                    :height="500"
                    :name="'video2'"
                    :test="false">
      </TheaterWheelVideo2>

      <button class="emphasized-button" @click="video2.show = true"><font-awesome-icon icon="fa-solid fa-circle-play" /> Watch Video</button>
    </div>
    <div class="preFooterBlock" >
      <div class="specialOffers">
        <h1>Special Offers</h1>
        <h3 class="gradientTitle">We will resume the offers back soon.</h3>
      </div>
      <div class="stayUpdate">
        <h1>Stay updated</h1>
        <p>For exclusive advance information on our new products and promotions.</p>
        <div class="emailInput">
          <input type="email" /><button>Subscribe <font-awesome-icon icon="fa-solid fa-envelope" /></button>
        </div>
      </div>
    </div>


    <Modal :name="'video2'"
           :show="() => video2.show"
           :close-callback="() => {video2.show = false}">
      <div class="video" v-if="video2.show">
        <video :src="video2.src" preload="auto" controls="true" style="width: 100%; height: 100%;"></video>
      </div>
    </Modal>
  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import IntroSection1 from "@/components/IntroFrame1.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/components/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";
import Modal from "@/components/Modal.vue"
import block1 from "@local/index_text_block1.json"
import block2 from "@local/index_text_block2.json"
import block3 from "@local/index_text_block3.json"
import indexTextBundles from "@local/shop_text.json";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import RoundedBlackBox3 from "@/components/RoundedBlackBox3.vue";
import TheaterMainWheel from "@/components/TheaterMainWheel.vue";
import TheaterWheelVideo1 from "@/components/TheaterWheelVideo1.vue";
import TheaterWheelVideo2 from "@/components/TheaterWheelVideo2.vue";

export default defineComponent({
  components: {
    TheaterWheelVideo2,
    TheaterWheelVideo1,
    TheaterMainWheel,
    RoundedBlackBox3,
    FontAwesomeIcon,
    Modal,
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  data() {
    return {
      loaded: false,
      video2: {
        show: false,
        src: '/video/bilumix-gen2-cm-long-720.mp4'
      },
      bundles: indexTextBundles,
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
    handleScroll(event: any){
      this.scroll.event = event
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousewheel', this.handleScroll);
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousewheel', this.handleScroll);
    window.addEventListener('load', this.loadedEvent);
    // this.fillTheaterFrames()
    // this.fillVideoTheaterFrames()
    // this.fillVideo2TheaterFrames()
  }
})
</script>

<style scoped>
.blockH1{
  font-size: revert;
  letter-spacing: normal;
}
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
  background: white;
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
  font-size: larger;
  margin: auto;
  padding: 0 10%;
  max-width: 300px;
  white-space: nowrap;
}
.stayUpdate .emailInput input{
  border: none;
  width: 60%;
  background: #fff;
  font-size: medium;
  padding: 10px;
  border-radius: 20px 0 0 20px;
}
.stayUpdate .emailInput button{
  border: none;
  border-left: #b6e8ff 1px solid;
  font-size: medium;
  background: #fff;
  padding: 10px;
  border-radius: 0 20px 20px 0;
}
.textBlocksPanelWrap{
  min-height: 100vh;
  background: white;
  position: relative;
  z-index: 2;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}

.specialOffers{
  padding: 5%;
  text-align: center;
  background: black;
  color: white;
}
.specialOffers h1,
.stayUpdate h1{
  margin: auto;
  letter-spacing: normal;
  font-size: xxx-large;
}
.stayUpdate h1{
  letter-spacing: normal;
}
.specialOffers h3{
  margin: auto;
  font-size: x-large;
}
.videoBlock{
  position: relative;
  background: #fff;
  z-index: 2;
  min-height: 100vh;
}
.preFooterBlock{
  position: relative;
  background: #fff;
  z-index: 2;
}
.videoBlock .emphasized-button{
  position: absolute;
  cursor: pointer;
  top: calc(50% - 30px);
  z-index: 1000;
  left: calc(50% - 100px);
}
.textBlocksPanel3{
  display: block;
  background: white;
}
.mobileOnly{
  display: none;
  z-index: 2;
  position: relative;
  overflow: hidden;
  background: white;
}
@media (max-width: 850px) {
  .textBlocksPanelWrap{
    margin: 0;
  }
}
</style>