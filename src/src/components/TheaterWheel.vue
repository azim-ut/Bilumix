<template>
  <div :id="'TheaterWheel' + $props.name" :class="{'theaterDiv':true}" :style="{'height': $props.height +'px'}" ref="theaterDiv">
      <div class="projector" ref="projector">
        <div class="front" ref="front">
          <div class="contentWrap">
            <slot></slot>
          </div>
        </div>
        <div class="bg">
          <div v-for="(img, $index) in $props.frames"
               :key="$index"
               :class="{'bgModeCover': $props.bgMode === 'cover', 'bgModeContain': $props.bgMode === 'contain'}"
               v-show="$index === theaterDivIndex"
               :style="{'background-image': 'url(' + img + ')'}"></div>
        </div>
      </div>
      <div class="framesBar" ref="framesBar">
        <div v-for="(img, $index) in $props.frames"
             :key="$index"
             :class="{'bgDisabled': !framesWithBackground.includes($index)}"
             :style="{'height': ($props.height/$props.frames.length) + 'px', 'background-image': 'url(' + img + ')'}"></div>
      </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
  components: { },
  props: {
    name: "" as String,
    test: false,
    effects: [] as Array<String>,
    height: 500,
    bgMode: "cover",
    frames: [] as Array<URL>
  },
  data() {
    return {
      wh: 0,
      theaterDivIndex: 5,
      loaded: false,
      theaterDivHeight: 100,
      framesWithBackground: [],
      reel: {
        min: 1,
        max: 3,
        step: 1,
        current: 1
      }
    }
  },
  methods: {
    updateReelPosition(direction): number {
      let newZoom = Math.floor(this.reel.current + direction * this.reel.step);
      if (newZoom < this.reel.min) {
        newZoom = this.reel.min
      }
      if(newZoom > this.$props.frames.length) {
        newZoom = this.$props.frames.length
      }
      this.reel.current = newZoom;
      // console.log(this.reel.current , direction , this.reel.step , this.reel.max, this.$props.frames.length)
    },
    handleWheel(event: Event){
      let direction = event.deltaY > 0 ? 1 : -1;
      let rect = this.$refs.theaterDiv?.getBoundingClientRect();
      if(!rect){
        return;
      }
      this.updateReelPosition(direction)
      // console.log(this.reel.current , direction , this.reel.step)

      // if(
      //     (direction > 0 && this.reel.current<this.reel.max) ||
      //     (direction < 0 && (this.reel.current>1 || !this.reel.current))
      // ){
        if(this.$props.frames[this.reel.current] && this.framesWithBackground.includes(this.reel.current)){
          this.theaterDivIndex = this.reel.current
        }
      // }

      for(let i = this.reel.current-5; i<this.reel.current+5; i++){
        if(i>=0 && i<this.$props.frames.length && !this.framesWithBackground.includes(i)){
          this.framesWithBackground.push(i)
        }
      }
    },
    loadedEvent(){
      this.loaded = true;
    },
    autoUploadFrames(){
      if(this.framesWithBackground.length !== this.$props.frames.length){
        let max = 5
        this.$props.frames.forEach((row, ind) => {
          if(!this.framesWithBackground.includes(ind) && max-->0){
            this.framesWithBackground.push(ind)
          }
        })
        setTimeout(this.autoUploadFrames, 150)
      }
    }
  },
  unmounted () {
    let container = document.getElementById('TheaterWheel' + this.$props.name);
    container?.removeEventListener('wheel', this.handleWheel);
    container?.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    this.reel.max = this.$props.frames.length

    let container = document.getElementById('TheaterWheel' + this.$props.name);
    container?.addEventListener('wheel', this.handleWheel);
    container?.addEventListener('load', this.loadedEvent);
    setTimeout(this.autoUploadFrames, 150)
    setTimeout(() => {
      window.scrollTo(0,10)
    }, 250)
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
  vertical-align: bottom;
  align-items: end;
  z-index: 1000;
  right: 0;
  left: 0;
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
  background: transparent none no-repeat center center;
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