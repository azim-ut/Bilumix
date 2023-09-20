<template>
  <section id="IntroProduct" ref="IntroProduct" >
    <div class="scrollMarkerContent" ref="IntroProductMarker">
      &nbsp;
    </div>
    <div ref="visibleContent"
         id="visibleContent" class="visibleContent">
      <div class="mainBanner mainBanner1" ref="content1">
        <div class="front-image" ref="device"></div>
        <div class="content">
          <h1>BiLumix </h1>
          <h2>GENERATION 2.0</h2>
          <h3 class="gradientTitle">{{mainBundles.INTRO_BANNER_1_TITLE}}</h3>
        </div>
      </div>
      <div class="mainBanner mainBanner2" ref="content2">
        <TheaterMainWheel
            class="video1"
            :name="'main'"
            :test="true"
            :bg-mode="'cover'"
            :style="{}"
            :pos="animation.current"
            :height="'100vh'">
        </TheaterMainWheel>

          <div class="content" ref="content2content">
            <div class="center">
              <h1>{{mainBundles.INTRO_BANNER_2_TITLE_2_1}}</h1>
              <h1>{{mainBundles.INTRO_BANNER_2_TITLE_2_2}}</h1>
              <p style="margin: auto;" v-html="mainBundles.INTRO_BANNER_2_TEXT"></p>
              <button class="emphasized-button" @click="video1.show = true"><font-awesome-icon icon="fa-solid fa-circle-play" /> {{mainBundles.TO_VIDEO}}</button>
            </div>
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
    <div class="scrollContent" ref="IntroProductScroll">
      &nbsp;
    </div>
  </section>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Theater from "@/components/Theater.vue";
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import Modal from "@/components/Modal.vue";
import mainBundles from "@local/main_text.json"
import TheaterMainWheel from "@/components/TheaterMainWheel.vue";

export default defineComponent({
  components: {TheaterMainWheel, Modal, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox, Theater},
  data() {
    return {
      mainBundles: mainBundles,
      scroll: {
        event: null
      },
      animation: {
        lastY: 0,
        temp: 0,
        min: 0,
        max: 100,
        step: .5,
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
    loadedEvent(){
      this.loaded = true
    },
    onWheel(event: any): void {
      this.scroll.event = event
      let rect = this.$refs.IntroProductMarker?.getBoundingClientRect()
      if(!rect){
        return
      }
      let plane = this.$refs.IntroProductScroll?.getBoundingClientRect()
      let pos = rect.y * -1
      let progress = Math.floor(pos/plane.height * 100)
      if(progress>this.animation.max){
          progress = this.animation.max
          return
      }
      if(progress<this.animation.min){
          progress = this.animation.min
        	return
      }

      this.animation.current = progress
      this.calcAnimationWheel()
		},
    calcAnimationWheel(): void {
      let val = -1/this.animation.max * this.animation.current
      this.$refs.device.style.setProperty('--delay', (val) + 's')
      this.$refs.content1.style.setProperty('--delay', (val) + 's')
      this.$refs.content2.style.setProperty('--delay', (val) + 's')
      this.$refs.content2content.style.setProperty('--delay', (val) + 's')
		},
  },
  unmounted () {
    window.removeEventListener('load', this.loadedEvent);
    let container = document.getElementById('IntroProduct');
    if(container){
      window.removeEventListener('scroll', this.onWheel)
      window.removeEventListener('wheel', this.onWheel)
      window.removeEventListener('touchmove', this.onWheel)
      window.removeEventListener('mousewheel', this.onWheel)
    }
  },
  mounted(){
    window.addEventListener('load', this.loadedEvent);
    let container = document.getElementById('IntroProduct');
    if(container) {
      window.addEventListener('scroll', this.onWheel)
      window.addEventListener('wheel', this.onWheel)
      window.addEventListener('touchmove', this.onWheel)
      window.addEventListener('mousewheel', this.onWheel)
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
  position: relative;
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
  background: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
#IntroProduct .scrollContent{
  position: relative;
  border: transparent 1px solid;
  min-height: 500vh;
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
  width: 50%;
  height: 80%;
  top: 10%;
  position: absolute;
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
  font-size: 8rem;
  text-transform: none;
  text-shadow: 1px 1px 13px rgba(0,0,0,.5);
  text-align: center;
}
.mainBanner1 h2{
  font-weight: 500;
  letter-spacing: 18px;
  color: hsla(0,0%,100%,.6);
  display: block;
  max-width: 600px;
  text-transform: uppercase;
  text-align: center;
}
.mainBanner1 .content{
  z-index: 2;
  text-align: center;
  animation: content1AnimationContent 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
  position: absolute;
  bottom: 10%;
}
.mainBanner1 .content h3{
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 3rem;
}

.mainBanner2 .content{
  position: absolute;
  width: 50%;
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
  clip-path: circle(10px at center);
  position: absolute;
  opacity: 0;
  animation: content2Animation 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
  overflow: hidden;
  margin: auto;
}
.mainBanner2 h1{
  font-size: 6vw;
  font-weight: 600;
  padding: 0;
}
.mainBanner2 p{
  padding: 20px;
  width: 50%;
}
.mainBanner2 .video1{
  position: absolute;
  left: 10%;
  min-width: 50%;
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
  10% {
    opacity: 1;
  }
  20% {
    transform: scale(.2);
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 0;
  }
}
@keyframes content2Animation {
  0% {
    clip-path: circle(1px at center);
    opacity: 0;
  }
  22% {
    background-position: left center;
    opacity: 0;
  }
  25% {
    clip-path: circle(2px at center);
    opacity: 1;
  }
  70% {
    clip-path: circle(2000px at center);
  }
  85% {
    background-size: contain;
    background-position: -250px center;
    opacity: 1;
  }
  100% {
    clip-path: circle(2000px at center);
    opacity: 0;
  }
}
@keyframes content1AnimationContent {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: scale(.1);
  }
}
@keyframes content2AnimationContent {
  0% {
  }
  30% {
    right: calc(50% - 150px);
  }
  65% {
    right: 1%;
  }
  100% {
    right: 1%;
  }
}

@keyframes animate {
  0% {
    transform: rotate(15deg) scale(1);
    opacity: 1;
  }
  20% {
    transform: rotate(25deg) scale(3);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 850px) {
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
  }
  .mainBanner2 .content{
    position: absolute;
    right: 0;
  }
}

@media (min-width: 1000px) {
  .mainBanner2 h1 {
  }
}

@media (max-width: 813px) {
  .mainBanner1 h1 {
    font-size: 15vw;
  }
  .mainBanner2 h1 {
    height: 70px;
    font-size: 15vw;
  }
}

@media (max-width: 500px) {
  .mainBanner1 h1 {
  }

  .mainBanner1 h2 {
    letter-spacing: 10px;
  }

  .mainBanner1 .content h3{
  }


  .mainBanner2 p{
    width: 80%;
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
    left: 0;
  }

  @keyframes content2Animation {

    0% {
      clip-path: circle(1px at center);
      opacity: 0;
      display: block;
      z-index: 100000;
    }
    20% {
      opacity: 0;
      display: block;
    }
    25% {
      clip-path: circle(2px at center);
      display: block;
      opacity: 1;
      background-position: -350px center;
    }
    50% {
    }
    65% {
      opacity: 1;
    }
    70% {
      clip-path: circle(2000px at center);
    }
    100% {
      clip-path: circle(2000px at center);
      opacity: 0;
    }
  }
}
</style>