<template>
  <section id="IntroProduct" ref="IntroProduct" >
    <div class="scrollMarkerContent" ref="IntroProductMarker">
      &nbsp;
    </div>
    <div ref="visibleContent"
         id="visibleContent" class="visibleContent">
      <div id="image-container">
        <div class="front-image" ref="device"></div>
      </div>
      <div class="mainBannerContent mainBannerContent1" ref="content1">
        <div class="content">
          <h1>BiLumix </h1>
          <h2>GENERATION 2.0</h2>
          <h3>Shadowless Headlamp</h3>
        </div>
      </div>
      <div class="mainBannerContent mainBannerContent2" ref="content2">
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
      zoomImage: {
        min: 1,
        max: 3,
        step: 0.01,
        current: 1
      },
      zoomText: {
        min: 0,
        max: 1,
        step: 0.005,
        current: 1
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

      // let direction = event.deltaY > 0 ? 1 : -1;
      // if(this.animation.current<(this.animation.max-.2) && direction>0){
      //   event.preventDefault()
      // }
      // this.calcAnimationWheel(event.deltaY, direction, null)
		},
    calcAnimationWheel(): void {
      let val = -1/this.animation.max * this.animation.current
      // console.log(this.animation.current, this.animation.max, val)
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
  min-height: 200vh;
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
  transform: rotate(15deg);
  animation: animate 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
}
#image-container {
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: -webkit-fill-available;
  display: contents;
}
.mainBannerContent{
  position: absolute;
  bottom: 0;
  text-align: center;
  transition: .5s;
}
.mainBannerContent1 h1{
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
.mainBannerContent1 h2{
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 10px;
  color: hsla(0,0%,100%,.6);
  display: block;
  max-width: 600px;
  text-transform: uppercase;
  text-align: center;
}
.mainBannerContent h3{
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
.mainBannerContent1{
  animation: content1Animation 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
  bottom: 20%;
}

.mainBannerContent2 .content{
  position: absolute;
  width: 50%;

  animation: content2AnimationContent 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);
}

.mainBannerContent2{
  background: #fff url(/images/normal/device_image/bilumix-sequence000.png) no-repeat left center/cover;
  display: flex;
  width: 100%;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  height: 100%;
  opacity: 0;
  animation: content2Animation 1.01s;
  animation-play-state: paused;
  animation-delay: var(--delay);

}
.mainBannerContent2 h1{
  font-size: xxx-large !important;
  line-height: .5em;
}
.mainBannerContent2 p{
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
    transform: scale(1);
  }
  10% {
    opacity: 1;
  }
  40% {
    transform: scale(.5);
    opacity: 0;
  }
  65% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes content2Animation {
  0% {
    opacity: 0;
  }
  40% {
    background-position: left center;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  85% {
    background-size: contain;
    background-position: -250px center;
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes content2AnimationContent {
  0% {
    border: red 3px solid;
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
    opacity: 1;
  }
  50% {
    transform: rotate(25deg) scale(3);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 500px) {

  .mainBannerContent2 .content{
    width: 80%;
  }

  @keyframes content2Animation {
    0% {
      opacity: 0;
      z-index: 100000;
    }
    40% {
      opacity: 0;
      background-position: -130px center !important;
    }
    50% {
      opacity: 1;
    }
    65% {
      background-position: -130px -50px !important;;
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>