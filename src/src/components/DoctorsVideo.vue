<template>
  <section id="DoctorsVideo" ref="DoctorsVideo" >
    <div class="scrollMarkerContent" ref="DoctorsVideoMarker">
      &nbsp;
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
      <div class="circle circle1" ref="circle1"></div>
      <div class="circle circle2" ref="circle2"></div>
      <div class="centered" style="width: 100%; position: absolute; left: 0; bottom: 0; top: 0;">
        <button class="watchVideo emphasized-button"
                @click="video.show = !video.show"><font-awesome-icon icon="fa-solid fa-circle-play" /> Watch Video</button>
      </div>
    </div>
    <div class="scrollContent" ref="DoctorVideoScroll">
      &nbsp;
    </div>
  </section>
  <Modal :name="'videoDoctor2'"
         :show="() => video.show"
         :close-callback="() => {video.show = false}">
    <div class="video" v-if="video.show">
      <video :src="video.src" preload="auto" controls="true" style="width: 100%; height: 100%;"></video>
    </div>
  </Modal>
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
      video: {
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
      let rect = this.$refs.DoctorsVideoMarker?.getBoundingClientRect()
      if(!rect){
        return
      }
      let plane = this.$refs.DoctorVideoScroll?.getBoundingClientRect()
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
      this.$refs.circle1.style?.setProperty('--delay', (val) + 's')
      this.$refs.circle2.style?.setProperty('--delay', (val) + 's')
		},
  },
  unmounted () {
    window.removeEventListener('load', this.loadedEvent);
    let container = document.getElementById('DoctorsVideo');
    if(container){
      window.removeEventListener('scroll', this.onWheel)
      window.removeEventListener('wheel', this.onWheel)
      window.removeEventListener('touchmove', this.onWheel)
      window.removeEventListener('mousewheel', this.onWheel)
    }
  },
  mounted(){
    window.addEventListener('load', this.loadedEvent);
    let container = document.getElementById('DoctorsVideo');
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
#DoctorsVideo {
  background: white;
}
#DoctorsVideo .scrollMarkerContent{
  border: transparent 5px solid;
  width: 10px;
  height: 10px;
  z-index: 100000;
  position: absolute;
}
#DoctorsVideo .scrollContent{
  position: absolute;
  top: 0;
  border: transparent 1px solid;
  left: 0;
  right: 0;
  bottom: 0;
}
:root {
  --delay: 0;
}
section{
  height: auto !important;
  top: 0;
}
.circle{
  background: #fff;
  border: red 5px solid;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: .3;
  z-index: 10;
}
.circle.circle1{
  clip-path: circle(25% at center);
  animation-play-state: paused;
  animation-delay: var(--delay);
  animation: circleAnimation1 1.01s;
}
.circle.circle2{
  clip-path: circle(20% at center);
  animation-play-state: paused;
  animation-delay: var(--delay);
  animation: circleAnimation2 1.01s;
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
  z-index: 1000;
}
.front-image{
  background: transparent url(/images/static/bilumix-side.png) no-repeat center top/contain;
  width: 50%;
  height: 80%;
  top: 10%;
  position: absolute;
  transform: rotate(15deg);
  animation: contentAnimation 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
}


@keyframes circleAnimation1 {
  0% {
    clip-path: circle(25% at center);
  }
  100% {
    clip-path: circle(20% at center);
  }
}

@keyframes circleAnimation2 {
  0% {
    clip-path: circle(20% at center);
  }
  100% {
    clip-path: circle(25% at center);
  }
}

@media (min-width: 500px) {
  .emphasized-button {
    padding: 10px 20px;
  }
}
</style>