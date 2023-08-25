<template>
  <div :id="'TheaterMainWheel' + $props.name" :class="{'theaterDiv':true}" :style="{'height': $props.height +'px'}" ref="theaterDiv">
      <div class="projector" ref="projector">
        <div class="front" ref="front">
          <div class="contentWrap">
            <slot></slot>
          </div>
        </div>
        <div class="bg">
          <div v-for="(img, $index) in video.frames"
               :key="$index"
               :class="{'bgModeCover': $props.bgMode === 'cover', 'bgModeContain': $props.bgMode === 'contain'}"
               v-show="$index === theaterDivIndex"
               :style="{'background-image': 'url(' + img + ')'}"></div>
        </div>
      </div>
      <div class="framesBar" ref="framesBar">
        <div v-for="(img, $index) in video.frames"
             :key="$index"
             :class="{'bgDisabled': !video.loaded.includes($index)}"
             :style="{'height': ($props.height/video.frames.length) + 'px', 'background-image': 'url(' + img + ')'}"></div>
      </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
  components: { },
  props: <any>{
    name: "" as String,
    test: false,
    height: 500,
    bgMode: "cover",
    frames: [] as any[],
    scrollEvent: undefined
  },
  data() {
    return {
      video: {
        frames: [] as any[],
        loaded: [] as number[]
      },
      wh: 0,
      theaterDivIndex: 5,
      loaded: false,
      theaterDivHeight: 100,
      reel: {
        min: 1,
        max: 3,
        step: 1,
        current: 1,
        lastPos: -1,
      }
    }
  },
  methods: {
    handleWheel(event: any): void{
      if(!this.$refs.theaterDiv){
        return;
      }
      let rect = this.$refs.theaterDiv?.getBoundingClientRect()
      let frameTarget = (rect.top - rect.height)/this.$props.height * 100 * -1
      if(
          !rect ||
          frameTarget < 0 ||
          frameTarget > this.video.frames.length ||
          (rect.top + rect.height)<0 ||
          (rect.top-rect.height)>window.innerHeight
      ){
        return;
      }
      this.reel.current = Math.round(frameTarget)
      if(this.reel.lastPos === undefined){
        this.reel.lastPos = rect.top
      }
      if(this.video.frames[this.reel.current] && this.video.loaded.includes(this.reel.current)){
        this.theaterDivIndex = this.reel.current
      }

      for(let i = this.reel.current-5; i<this.reel.current+5; i++){
        if(i>=0 && i<this.video.frames.length && !this.video.loaded.includes(i)){
          this.video.loaded.push(i)
        }
      }
    },
    loadedEvent(){
      this.loaded = true;
    },
    fillVideoFrames(){
      this.video.frames = []
      let cnt = 224;
      while(cnt-->0){
        let path = "/images/min/device_image/bilumix-sequence" + cnt + "-min.png"
        if(cnt>=10 && cnt<100){
          path = "/images/min/device_image/bilumix-sequence0" + cnt + "-min.png"
        }else if(cnt<10){
          path = "/images/min/device_image/bilumix-sequence00" + cnt + "-min.png"
        }
        this.video.frames.unshift(path)
      }
    },
    autoUploadFrames(){
      if(this.video && this.video.loaded.length !== this.video.frames.length){
        let max = 5
        this.video.frames.forEach((row, ind) => {
          if(!this.video.loaded.includes(ind) && max-->0){
            this.video.loaded.push(ind)
          }
        })
        setTimeout(this.autoUploadFrames, 150)
      }
    }
  },
  watch: {
    scrollEvent: function(newVal, oldVal) {
      this.handleWheel(newVal)
    }
  },
  unmounted () {
    let container = document.getElementById('TheaterWheel' + this.$props.name);
    // window.removeEventListener('scroll', this.handleWheel);
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    this.reel.max = this.video.frames.length
    let container = document.getElementById('TheaterWheel' + this.$props.name);
    window.addEventListener('load', this.loadedEvent);
    setTimeout(this.autoUploadFrames, 150)
    this.fillVideoFrames()
  }
})
</script>

<style scoped>
.theaterDiv{
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.projector{
  position: absolute;
  top:0;
  bottom:0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  transition: .5s;
}
.projector .front{
  position: relative;
  top:0;
  width: 100%;
  min-height: 100vh;
}
.projector .front .contentWrap{
  min-height: 100vh;
  position: absolute;
  display: flex;
  vertical-align: center;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  right: 0;
  left: 30%;
  top: 0;
  bottom: 0;
}
.projector .bg{
  position: absolute;
  width: 100%;
  top: 0;
  min-height: 100vh;
}
.projector .bg div{
  position: relative;
  width: 100%;
  min-height: 100vh;
  animation: ease-in;
  background: transparent none no-repeat 50% center/contain;
}
.projector .bg div.bgModeCover{
  background-size: cover !important;
}
.projector .bg div.bgModeContain{
  background-size: contain !important;
}
.framesBar{
  left: 0px;
  top: 0;
  width: 400px;
  overflow: hidden;
}
.framesBar h1{
  text-align: center;
}
.framesBar div{
  width: 20px;
  height: 10px;
  opacity: .0;
  border: red 1px solid;
  background: transparent none no-repeat center center/contain;
}
.framesBar div.bgDisabled{
  background: none !important;
}
</style>