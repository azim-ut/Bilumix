<template>
  <section id="IntroProduct" ref="IntroProduct" style="min-height: 600vh; background: white;">
    <div class="scrollMarkerContent" ref="IntroProductMarker">
      &nbsp;
    </div>
    <div id="visibleContent" class="visibleContent">

      <div class="mainBanner mainBanner1" ref="content1" v-if="blocks[0].on">
        <div class="bg"></div>
        <div class="front-image" ref="device"></div>
        <div class="content">
          <h1>BiLumix </h1>
          <h3>GENERATION 2.0</h3>
          <h2 class="gradientTitle">{{mainBundles.INTRO_BANNER_1_TITLE}}</h2>
        </div>
      </div>

      <div class="mainBanner mainBanner2"  ref="content2" v-if="blocks[1].on">
        <div class="content2Wrap">
          <TheaterMainWheel
              class="video1"
              :name="'IntroDevice'"
              :bg-mode="'cover'"
              :progress="blocks[1].progress"
              :from="0"
              :to="40"
              :height="'100vh'">
          </TheaterMainWheel>

          <div class="content" ref="content2content">
            <div class="center">
              <h1>{{mainBundles.INTRO_BANNER_2_TITLE_2_1}}</h1>
              <h1>{{mainBundles.INTRO_BANNER_2_TITLE_2_2}}</h1>
              <p style="margin: auto;" v-html="mainBundles.INTRO_BANNER_2_TEXT"></p>
              <button class="emphasized-button" @click="showVideo(mainBundles.VIDEO1_PATH)"><font-awesome-icon icon="fa-solid fa-circle-play" /> {{mainBundles.TO_VIDEO}}</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mainBanner mainBanner3" ref="content3" v-if="blocks[2].on">
        <DoctorsVideo :progress="blocks[2].progress"/>
      </div>

    </div>

    <div class="scrollContent" ref="IntroProductScroll">
      &nbsp;
    </div>
    <div class="contentScrollToMiss"></div>2
  </section>
</template>

<script lang="ts">

import {defineComponent, PropType} from "vue"
import Theater from "@/components/Theater.vue";
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import Modal from "@/components/Modal.vue";
import mainBundles from "@local/main_text.json"
import TheaterMainWheel from "@/components/TheaterMainWheel.vue";
import DoctorsVideo from "@/components/DoctorsVideo.vue";
import TheaterWheelVideo2 from "@/components/TheaterWheelVideo2.vue";
import {mapStores} from "pinia";
import {videoStore} from "@/store/video/video";

export default defineComponent({
  components: {
    TheaterWheelVideo2,
    DoctorsVideo, TheaterMainWheel, Modal, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox, Theater},
  computed: {...mapStores(videoStore)},
  props: {
    progress: 0 as PropType<number>,
    screenH: 0 as PropType<number>
  },
  data() {
    return {
      mainBundles: mainBundles,
      scroll: {
        event: null
      },
      blocks: [
        {
          on: true,
          from: 0,
          to: 14,
          progress: 1,
          refs: [ 'content1', 'device' ]
        },
        {
          on: false,
          from: 10,
          to: 30,
          progress: 1,
          refs: [ 'content2', 'content2content' ]
        },
        {
          on: false,
          from: 51.5,
          to: 79.5,
          progress: 1,
          refs: [ 'content3' ]
        }
      ],
      animation: {
        lastY: 0,
        temp: 0,
        min: 0,
        max: 100,
        step: .01,
        current: 1
      },
      video1: {
        show: false,
        src: '/video/intro.mp4'
      },
      loaded: false
    }
  },
  methods: {
    onWheel(event: any): void {
      this.scroll.event = event

      this.blocks
          .forEach((row: any) => { row.on = row.from <= this.$props.progress && row.to >= this.$props.progress})

      this.blocks
          .filter((row: any) => row.on)
          .find((animation: any) => {
            let minProgress = animation.from * this.$props.screenH / 100
            let maxProgress = animation.to * this.$props.screenH / 100
            // console.log(minProgress, maxProgress, window.scrollY)
            let progress = Math.floor((window.scrollY - minProgress) / (maxProgress - minProgress) * 100)
            if(progress<0 || progress>100){
              return;
            }
            animation.progress = progress
            let val = Math.floor(window.scrollY/maxProgress * animation.progress*100) / -10000
            // console.log("Global %:", this.$props.progress??0, "Block %", animation.progress, "delay:", val)
            animation.refs.forEach((ref: any) => {
              this.calcAnimationWheel(ref, val)
            })
          })
    },
    calcAnimationWheel(ref: any, val: number): void {
      if(this.$refs[ref]){
        this.$refs[ref].style.setProperty('--delay', (val) + 's')
      }
    },
    showVideo(src: string): void {
      this.videoStore.setVideo(src)
      this.videoStore.showVideo()
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.onWheel);
    let container = document.getElementById('IntroProduct');
    if(container){
      window.removeEventListener('scroll', this.onWheel)
      window.removeEventListener('wheel', this.onWheel)
      window.removeEventListener('touchmove', this.onWheel)
      window.removeEventListener('mousewheel', this.onWheel)
    }
  },
  mounted(){
    let container = document.getElementById('IntroProduct');
    if(container) {
      window.addEventListener('scroll', this.onWheel)
      window.addEventListener('wheel', this.onWheel)
      window.addEventListener('touchmove', this.onWheel)
      window.addEventListener('mousewheel', this.onWheel)
    }
  },
  watch:{
    progress: function(newVal, oldVal) { // watch it)
      if(newVal != oldVal){
        let rect = this.$refs.IntroProduct?.getBoundingClientRect()
        if(!rect){
          return
        }
        let screenY = (newVal * this.$props.screenH)/100

        let posY = screenY - rect.y
        let min = rect.y
        let max = rect.y + rect.height


        // this.animation.current =
        // this.calcAnimationWheel()
      }
    }
  }
})
</script>

<style scoped>
:root {
  --delay: 0;
}
section{
  height: auto !important;
}
#IntroProduct{
  position: fixed;
  overflow: scroll;
}
#IntroProduct .visibleContent{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
#IntroProduct .scrollContent{
  position: relative;
  border: transparent 1px solid;
  min-height: 800vh;
}
#IntroProduct .scrollMarkerContent{
  border: transparent 5px solid;
  width: 10px;
  height: 10px;
  z-index: 100000;
  position: absolute;
}
.front-image{
  background: transparent url(/images/static/bilumix-side.png) no-repeat center top/contain;
  width: 40%;
  height: 60%;
  top: 15%;
  position: absolute;
  transition: opacity 0.6s ease-out 0s, transform 1.2s linear 0s;
  transform-origin: center center;
  transform: rotate(15deg);
  animation: animate 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
}

.mainBanner1{
  animation: content1Animation 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
  display: contents;
  background: black !important;
  top: 0; bottom: 0; right: 0; left: 0;
}

.mainBanner1 .bg{
  display: block;
  position: absolute;
  background: #151515 !important;
  top: 0; bottom: 0; right: 0; left: 0;
}

.mainBanner1 h1{
  color: #fff;
  height: 40px;
  line-height: 40px;
  display: block;
  font-weight: 600;
  width: 100%;
  max-width: 600px;
  font-family: "Roboto";
  text-transform: none;
  text-shadow: 1px 1px 13px rgba(0,0,0,.5);
  text-align: center;
}
.mainBanner1 h2{
  font-weight: 500;
  display: block;
  max-width: 600px;
  text-transform: uppercase;
  text-align: center;
}
.mainBanner1 .content{
  text-align: center;
  animation: content1AnimationContent 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
  position: absolute;
  bottom: 10%;
}
.mainBanner1 .content h3{
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  font-weight: 600;
  max-width: 600px;
  color: hsla(0,0%,100%,.6);
}
.content2Wrap {
  position:relative;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  background: white;
}

.mainBanner2 .content{
  position: absolute;
  width: 50%;
  max-width: 400px;
  top: calc(50% - 150px);
  right: calc(50% - 200px);
  animation: content2AnimationContent 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
}

.mainBanner2{
  background: #fff no-repeat left center/cover;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  width: 100%;
  height: 100%;
  clip-path: circle(0px at center);
  position: absolute;
  opacity: 0;
  animation: content2Animation 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
  overflow: hidden;
  margin: auto;
  top:0;
}
.mainBanner3{
  background: #fff no-repeat left center/cover;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  width: 100%;
  height: 100%;
  clip-path: circle(0px at center);
  position: absolute;
  animation: content3Animation 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
  overflow: hidden;
  margin: auto;
  z-index: 111;
  top:0;
}
.mainBanner2 h1{
  font-weight: 600;
  padding: 0;
  text-align: left;
}
.mainBanner2 p{
  padding: 20px;
  text-align: left;
}
.mainBanner2 .video1{
  position: absolute;
  left: 2%;
  min-width: 70%;
  animation: content2VideoAnimation 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
}
img {
  max-width: 100%;
}

#image-container img:hover {
  cursor: zoom-in;
}

@keyframes content1Animation {
  0% {
    transform: scale(3);
    opacity: 0;
  }
  60% {
    transform: scale(.2);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes content1AnimationContent {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  60% {
    transform: scale(.01);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes content2VideoAnimation {
  0% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bgAnimation {
  0% {
    background-color: #151515;
  }
  1% {
    background-color: #fff;
  }
  100% {
    background-color: #fff;
  }
}
@keyframes content2Animation {
  0% {
    clip-path: circle(0px at center);
    opacity: 1;
  }
  50% {
    clip-path: circle(300vh at center);
    background-size: contain;
    background-position: -250px center;
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    clip-path: circle(300vh at center);
  }
}
@keyframes content3Animation {
  0% {
    clip-path: circle(0px at center);
  }
  50% {
    clip-path: circle(300vh at center);
    opacity: 1;
  }
  100% {
    clip-path: circle(0px at center);
  }
}
@keyframes content2AnimationContent {
  0% {
  }
  15% {
    transform: translate3d(0px, 0px, 0px);
  }
  35% {
    transform: translate3d(50%, 0px, 0px);
  }
  100% {
    transform: translate3d(50%, 0px, 0px);
  }
}

@keyframes animate {
  0% {
    transform: rotate(15deg) scale(1) translate3d(0px, 0px, 0px);
    opacity: 1;
  }
  60% {
    transform: rotate(25deg) scale(3) translate3d(0px, 0px, 0px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 950px) {
  .mainBanner2{
    background-image: none;
    width: 100%;
    left: 0;
    right: 0;
    display: block;
  }
  .mainBanner2 .video1{
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    min-width: 70%;
  }
  .mainBanner2 .content{
    position: absolute;
    right: 5%;
    top: calc(50% - 150px);
  }
}

@media (min-width: 1000px) {
  .mainBanner2 .video1{
    left: 5%;
    min-width: 50%;
  }
  .mainBanner2 .content{
    right: calc(50% - 150px);
    top: calc(50% - 150px);
  }
}

@media (max-width: 813px) {
}

@media (max-width: 950px) {

  @keyframes content2AnimationContent {
    0% {
      opacity: .8;
    }
    15% {
      transform: translate3d(0px, 0px, 0px);
    }
    65% {
      transform: translate3d(-10%, 0px, 0px);
    }
    90% {
    }
    100% {
      transform: translate3d(-10%, 0px, 0px);
    }
  }
}

@media (max-width: 500px) {

  .mainBanner2 h1{
    text-align: center;
  }

  .mainBanner1 h1 {
  }

  .mainBanner1 h2 {
    letter-spacing: 10px;
  }

  .mainBanner2 p{
    width: 90%;
    text-align: center;
    padding: 0 0 10px 0;
  }

  .mainBanner2 .content{
    margin: auto;
    left: 0;
    right: 0;
    bottom: 20px;
    top: auto;
    width: 100%;
  }
  .front-image{
    width: 80%;
  }

  @keyframes content2AnimationContent {
    0% {
      opacity: .8;
    }
    15% {
      transform: translate3d(0px, 0px, 0px);
    }
    65% {
      transform: translate3d(0px, -10%, 0px);
      opacity: .8;
    }
    90% {
      opacity: 0;
    }
    100% {
      transform: translate3d(0px, 0px, 0px);
      opacity: 0;
    }
  }
}
</style>