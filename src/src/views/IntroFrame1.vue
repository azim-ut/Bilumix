<template>
  <section id="IntroProduct" class="contentBody">
    <div id="image-container">
      <div class="front-image" ref="device"></div>
    </div>
    <div class="mainBannerContent" ref="content">
      <div class="content">
        <h1>BiLumix</h1>
        <h2>GENERATION 2.0</h2>
        <h3>Shadowless Headlamp</h3>
      </div>
    </div>
    <ScrollDownIndicator/>
  </section>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Theater from "@/components/Theater.vue";
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import IntroSection1 from "@/components/IntroSection1.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";

export default defineComponent({
  components: {RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox, Theater},
  data() {
    return {
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
    updateReelPosition(direction): number {
      let newZoom = this.zoomImage.current + direction * this.zoomImage.step;
      if (newZoom < this.zoomImage.min) {
        newZoom = this.zoomImage.min
      }
      if(newZoom > this.zoomImage.max) {
        newZoom = this.zoomImage.max
      }
      this.zoomImage.current = newZoom;
    },
    updateZoomText(direction): number {
      let newZoom = this.zoomText.current + direction * this.zoomText.step;
      if (newZoom < this.zoomText.min) {
        newZoom = this.zoomText.min
      }
      if(newZoom > this.zoomText.max) {
        newZoom = this.zoomText.max
      }
      this.zoomText.current = newZoom;
    }
  },
  unmounted () {
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    window.addEventListener('load', this.loadedEvent);
    let container = document.getElementById('IntroProduct');

    container.addEventListener('wheel', (event) => {
      let direction = event.deltaY > 0 ? 1 : -1;
      this.updateReelPosition(direction)
      this.updateZoomText(direction * -1)
      if(
          (direction > 0 && this.zoomImage.current<this.zoomImage.max) ||
          (direction < 0 && (this.zoomImage.current>1 || !this.zoomImage.current))
      ){
        event.preventDefault()
        this.$refs.device.style.transform = 'scale(' + this.zoomImage.current + ')  rotate(15deg)'
        this.$refs.content.style.transform = 'scale(' + (this.zoomText.current) + ')'
      }
      // console.log(direction, this.zoomImage.current)
    })
  }
})
</script>

<style scoped>
.contentBody{
  min-height: 100vh;
  background: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.front-image{
  background: transparent url(/images/static/bilumix-side.png) no-repeat center top/contain;
  width: 50%;
  height: 50%;
  transform: rotate(15deg);
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
  bottom: 20%;
  text-align: center;
}
.mainBannerContent h1{
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
.mainBannerContent h2{
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
img {
  max-width: 100%;
}

#image-container img:hover {
  cursor: zoom-in;
}

@keyframes animate {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(45deg);
  }
}
</style>