<template>

  <HeadMenu :key="$route.path" />
  <div class="MySlidesStore">

    <div>
      <img src="/images/static/bilumix-side.webp" />

      <img src="/images/static/bl-overview-01.webp" />
      <img src="/images/static/bl-overview-02.webp" />
      <img src="/images/static/bl-overview-03.webp" />
      <img src="/images/static/bl-system-feature-01.webp" />
      <img src="/images/static/bl-system-feature-02.webp" />
      <img src="/images/static/bl-system-feature-03.webp" />
      <img src="/images/static/bl-user-feature-01.webp" />
      <img src="/images/static/bl-user-feature-02.webp" />
    </div>
    <div v-for="row in getFirstSlides()">
      <img :src="row.path" @load="markAsLoaded(row)" />
    </div>
  </div>
  <div class="content" style="margin-top: 80px; position: relative;">
    <ScrollDownIndicator />

    <div class="IntroFrame">
    </div>
    <IntroFrame1 :progress="scroll.progress"
                 :screenH="this.screenHeight"/>

    <div class="textBlocksPanelWrap centered min80h">
      <div style="min-width: 100%;">
        <div class="textBlocksPanel textBlocksPanel1 grid grid3 ">
          <RoundedBlackBox v-for="row in shortTextBlocks1"
                           :bg="row.bg"
                           :bgColor="row.bgColor"
                           :title="row.title"
                           :sub="row.sub"
                           :text="row.text"
          ></RoundedBlackBox>
        </div>
      </div>
    </div>

    <div style="position:relative; height: 0vh; background: transparent;">
    </div>

    <div class="textBlocksPanelWrap centered" style="margin: 0 !important; padding: 0 !important; background-color: #151515;">
      <div class="textBlocksPanel textBlocksPanel2 grid grid2" style="height: 1%;">
        <RoundedBlackBox2 v-for="row in shortTextBlocks2"
                         :bg="row.bg"
                         :margin="'10px'"
                         :bgColor="row.bgColor"
                         :title="row.title"
                         :sub="row.sub"
                         :text="row.text"
        ></RoundedBlackBox2>
      </div>
    </div>
    <div class="DoctorVideoFrame">
    </div>


    <div class="textBlocksPanelWrap centered min50h">
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


    <div class="preFooterBlock" >
      <div class="specialOffers">
        <div>
          <h1>{{mainBundles.SPECIAL_OFFERS_H1}}</h1>
          <h3 class="gradientTitle">{{mainBundles.SPECIAL_OFFERS_TEXT}}</h3>
        </div>
      </div>
      <div class="stayUpdate">
        <StayUpdated />
      </div>
    </div>


    <Modal :name="'video2'"
           :show="() => video2.show"
           :close-callback="() => {video2.show = false}">
      <div class="video" v-if="video2.show">
        <video :src="video2.src" autoplay preload="auto" controls="true" style="width: 100%; height: 100%;"></video>
      </div>
    </Modal>
  </div>
  <Footer />
  <div class="MySlidesStore" v-if="startLoadAnimation">
    <div v-for="row in getSlides()">
      <img :src="row.path" @load="markAsLoaded(row)" />
    </div>
  </div>
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
import mainBundles from "@local/main_text.json"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import RoundedBlackBox3 from "@/components/RoundedBlackBox3.vue";
import TheaterMainWheel from "@/components/TheaterMainWheel.vue";
import RoundedBlackBox2 from "@/components/RoundedBlackBox2.vue";
import StayUpdated from "@/components/StayUpdated.vue";
import DoctorsVideo from "@/components/DoctorsVideo.vue";
import {mapStores} from "pinia";
import {slideStore} from "@/store/slide/slide";
import type {Slide} from "@/store/slide/types";

export default defineComponent({
  computed: {
    ...mapStores(slideStore)
  },
  components: {
    DoctorsVideo,
    StayUpdated,
    RoundedBlackBox2,
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
      startLoadAnimation: false,
      screenHeight: 0,
      video2: {
        show: false,
        src: '/video/bilumix-gen2-cm-long-720.mp4'
      },
      mainBundles: mainBundles,
      shortTextBlocks1: block1,
      shortTextBlocks2: block2,
      shortTextBlocks3: block3,
      scroll: {
        progress: 0,
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
    getSlides(): Slide[]{
      return this.slideStore.list
    },
    getFirstSlides(): Slide[]{
      return this.slideStore.getFirstSlides()
    },
    loadedEvent(){
      this.loaded = true
    },
    onWheel(event: any): void {
      this.scroll.event = event
      let plane = this.$refs.IntroProductScroll?.getBoundingClientRect()
      this.screenHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      this.scroll.progress = Math.floor(window.scrollY/this.screenHeight * 100)
    },
    fillTheaterFrames(){
      this.productTheater.frames = []
      let cnt = 279;
      while(cnt-->0){
        let src = "/images/min/device_image/bilumix-sequence" + cnt + "-min.webp"
        if(cnt>=10 && cnt<100){
          src = "/images/min/device_image/bilumix-sequence0" + cnt + "-min.webp"
        }else if(cnt<10){
          src = "/images/min/device_image/bilumix-sequence00" + cnt + "-min.webp"
        }
        // let path = require(src)
        this.productTheater.frames.unshift(new URL(src, import.meta.url))
      }
    },
    fillDoctor1Frames(){
      let cnt = 224;
      while(cnt-->0){
        let path = "/images/min/video1/video1-sq-" + cnt + "-min.webp"
        if(cnt>=10 && cnt<100){
          path = "/images/min/video1/video1-sq-0" + cnt + "-min.webp"
        }else if(cnt<10){
          path = "/images/min/video1/video1-sq-00" + cnt + "-min.webp"
        }
        this.slideStore.addSlide({
          ind: cnt,
          group: "Doctor1",
          path: path,
          loaded: false
        })
      }
    },
    fillDoctor2Frames(){
      let cnt = 235;
      while(cnt-->0){
        let path = "/images/min/video2/video2-sq-" + cnt + "-min.webp"
        if(cnt>=10 && cnt<100){
          path = "/images/min/video2/video2-sq-0" + cnt + "-min.webp"
        }else if(cnt<10){
          path = "/images/min/video2/video2-sq-00" + cnt + "-min.webp"
        }
        this.slideStore.addSlide({
          ind: cnt,
          group: "Doctor2",
          path: path,
          loaded: false
        })
      }
    },
    fillIntroDeviceFrames(){
      let cnt = 279;
      while(cnt-->0){
        let path = "/images/min/device_image/bilumix-sequence" + cnt + "-min.webp"
        if(cnt>=10 && cnt<100){
          path = "/images/min/device_image/bilumix-sequence0" + cnt + "-min.webp"
        }else if(cnt<10){
          path = "/images/min/device_image/bilumix-sequence00" + cnt + "-min.webp"
        }
        this.slideStore.addSlide({
          ind: cnt,
          group: "IntroDevice",
          path: path,
          loaded: false
        })
      }
    },
    markAsLoaded(slide: Slide) {
      this.slideStore.loaded(slide)
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.onWheel);
    window.removeEventListener('mousewheel', this.onWheel);
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    this.fillIntroDeviceFrames()
    this.fillDoctor1Frames()
    this.fillDoctor2Frames()
    window.addEventListener('scroll', this.onWheel);
    window.addEventListener('mousewheel', this.onWheel);
    window.addEventListener('load', this.loadedEvent);
    setTimeout(() => { this.startLoadAnimation = true }, 1000)
    // this.fillTheaterFrames()
    // this.fillVideoTheaterFrames()
    // this.fillVideo2TheaterFrames()
  }
})
</script>

<style scoped>
.blockH1{
  letter-spacing: normal;
}
.loaderBase img{
  width: 10px; height: 10px;
  opacity: .01;
}
.IntroFrame{
  position:relative; height: 450vh; background: transparent;
}
.DoctorVideoFrame{
  position:relative; min-height: 400vh; pointer-events: none; background: transparent;
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

.textBlocksPanel{
  background: white;
}


.textBlocksPanel1{
  background: white;
  max-width: 1280px;
  margin: auto;
}
.textBlocksPanel2{
  background-color: #151515;
  margin: 0 auto;
  min-width: 270px;
  max-width: 1280px;
}
.textBlocksPanel2  .inner{
  top: 10% !important;
}

.textBlocksPanelWrap{
  background: white;
  position: relative;
  z-index: 2;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}

.specialOffers{
  text-align: center;
  background: black;
  color: white;
  display: flex;
  padding: 3% 10%;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
}
.specialOffers h1{
  margin: auto;
  padding: 0;
  letter-spacing: normal;
  color: #fff;
  font-weight: 500;
}
.specialOffers h3{
  margin: auto;
}
.preFooterBlock{
  position: relative;
  background: #fff;
  z-index: 2;
}
.textBlocksPanel3{
  display: block;
  padding: 5% 0;
  background: white;
  margin: auto;
  width: 100%;
  min-width: 270px;
  max-width: 1280px;
}
.MySlidesStore{overflow: hidden; position: absolute; z-index: -11000; opacity: 1; top: 0;}
.MySlidesStore div{ float: left; border: red 1px solid; width: 10px; height: 10px; background: white;}
.MySlidesStore div img{width: 10px; height: 10px; opacity: .4;}
@media (max-width: 850px) {
  .textBlocksPanelWrap{
    margin: 0;
  }
  .textBlocksPanel2 h1{
    text-align: left;
  }
  .blockH1{
    font-weight: 500;
    padding: 20px;
  }
}
@media (max-width: 600px) {

  .DoctorVideoFrame{
    min-height: 600vh;
  }
  .IntroFrame{
    min-height: 750vh;
  }
  .textBlocksPanel2{
    min-width: 280px;
  }
  .blockH1{
    padding: 20px 0;
  }

  .specialOffers h1{
  }
  .specialOffers h3{
  }
}

</style>