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
          <h3 class="gradientTitle">Shadowless Headlamp</h3>
        </div>
      </div>
      <div class="mainBanner mainBanner2" ref="content2">
          <div class="content" ref="content2content">
            <div class="center">
              <h1 style="font-size: revert;">BRIGHT</h1>
              <h1 style="font-size: revert;">CHOICE</h1>
              <p style="margin: auto; width: 50%; font-size: large;">
                For any procedure to illuminate
                an area via a unique, dual light source
                that eliminates any shadow
              </p>
              <button class="emphasized-button" @click="video1.show = true"><font-awesome-icon icon="fa-solid fa-circle-play" /> Watch Video</button>
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

export default defineComponent({
  components: {Modal, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox, Theater},
  data() {
    return {
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
		}
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
  min-height: 300vh;
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
  height: 50%;
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
  font-size: 50px;
  height: 40px;
  line-height: 40px;
  display: block;
  width: 100%;
  max-width: 600px;
  text-transform: none;
  text-shadow: 1px 1px 13px rgba(0,0,0,.5);
  text-align: center;
}
.mainBanner1 h2{
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 10px;
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
  bottom: 20%;
}
.mainBanner1 .content h3{
}

.mainBanner2 .content{
  position: absolute;
  width: 50%;
  animation: content2AnimationContent 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
}

.mainBanner2{
  background: #fff url(/images/normal/device_image/bilumix-sequence000.png) no-repeat left center/cover;
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
}
.mainBanner2 h1{
  font-size: xxx-large !important;
  line-height: .5em;
}
.mainBanner2 p{
  padding: 20px;
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
    opacity: 0;
  }
  20% {
    background-position: left center;
    opacity: 0;
  }
  25% {
    clip-path: circle(2px at center);
    opacity: 1;
  }
  50% {
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
    transform: scale(1.4);
  }
  30% {
    transform: scale(.1);
    opacity: 0;
  }
  100% {
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
  25% {
    transform: rotate(25deg) scale(3);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 500px) {

  .mainBanner2 .content{
    width: 80%;
  }

  @keyframes content2Animation {
    0% {
      opacity: 0;
      display: none;
      z-index: 100000;
    }
    20% {
      opacity: 0;
      display: none;
      background-position: -130px center !important;
    }
    25% {
      display: block;
      opacity: 1;
      width: 2px;
      height: 2px;
    }
    65% {
      background-position: -130px -50px !important;;
      opacity: 1;
      width: 100%;
      height: 100%;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>