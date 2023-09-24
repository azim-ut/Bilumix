<template>
  <div :id="'TheaterMainWheel' + $props.name" :class="{'theaterDiv':true}" :style="{'height': $props.height}" ref="theaterDiv">
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
             v-show="$index === video.current"
             :style="{'background-image': 'url(' + img + ')', 'height': $props.height}"></div>
      </div>
    </div>
    <div class="framesBar" ref="framesBar">
      <div v-for="(img, $index) in video.frames"
           :key="$index"
           :class="{'bgDisabled': !video.loaded.includes($index)}"
           :style="{'height': '10px', 'background-image': 'url(' + img + ')'}"></div>
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
    height: '500px',
    bgMode: "cover",
    frames: [] as any[],
    pos: 1 as number
  },
  data() {
    return {
      timer: undefined as undefined|number,
      video: {
        frames: [] as any[],
        loaded: [] as number[],
        current: 0,
        index: 1
      },
      cnt: 279,
      loaded: false,
    }
  },
  methods: {
    playVideo(progress: number): void{
      if(progress){
        let val = Math.round(this.cnt/70 * progress)
        if(val <= this.cnt && this.video.loaded.includes(val)){
          this.video.current = val
        }
        if(val>this.cnt){
          this.video.current = this.cnt-1
        }
      }
    },
    fillVideoFrames(){
      this.video.frames = []
      let cnt = this.cnt;
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
    pos: function(newVal, oldVal) {
      if(newVal !== oldVal){
        this.playVideo(newVal)
      }
    }
  },
  unmounted () {
    clearTimeout(this.timer)
  },
  async mounted(){
    setTimeout(this.autoUploadFrames, 50)
    await this.fillVideoFrames()
    this.playVideo(0)
  }
})
</script>

<style scoped>
.theaterDiv{
  position: relative;
  max-height: 100vh;
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
  transition: .5s;
}
.projector .front{
  position: relative;
  top:0;
  width: 100%;
}
.projector .front .contentWrap{
  position: absolute;
  display: flex;
  vertical-align: center;
  align-items: center;
  justify-content: center;
  z-index: 50;
  right: 0;
  left: 30%;
  top: 0;
  bottom: 0;
}
.projector .bg{
  position: absolute;
  width: 100%;
  top: 0;
}
.projector .bg div{
  position: relative;
  width: 100%;
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
@media (max-width: 400px) {

  .framesBar{
    width: 100%;
  }
}
</style>