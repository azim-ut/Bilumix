<template>
  <section id="DoctorsVideo" ref="IntroProduct" >
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

      <button class="watchVideo emphasized-button" @click="video2.show = true"><font-awesome-icon icon="fa-solid fa-circle-play" /> Watch Video</button>
    </div>
  </section>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {RouterView} from "vue-router";
import Modal from "@/components/Modal.vue";
import mainBundles from "@local/main_text.json"
import TheaterWheelVideo2 from "@/components/TheaterWheelVideo2.vue";
import TheaterWheelVideo1 from "@/components/TheaterWheelVideo1.vue";

export default defineComponent({
  components: {TheaterWheelVideo1, Modal, RouterView, TheaterWheelVideo2},
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
    handleScroll(event: any){
      this.scroll.event = event
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

.videoBlock{
  position: relative;
  background: #fff;
  z-index: 2;
  min-height: 100vh;
}
.videoBlock .emphasized-button{
  position: absolute;
  cursor: pointer;
  top: calc(50% - 30px);
  z-index: 1000;
  left: calc(50% - 100px);
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

@media (max-width: 500px) {
}
</style>