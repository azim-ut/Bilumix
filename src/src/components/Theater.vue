<template>
  <div class="theaterDiv" ref="theaterDiv" v-if="loaded">
    <div class="projector" ref="projector">
      <div v-for="(img, $index) in $props.frames"
           :key="$index"
           :class="{'bgModeCover': $props.bgMode === 'cover', 'bgModeContain': $props.bgMode === 'contain'}"
           v-show="$index === theaterDivIndex"
           :style="{'background-image': 'url(' + img + ')'}"></div>
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
    height: null,
    bgMode: "cover",
    frames: [] as Array<URL>
  },
  data() {
    return {
      wh: 0,
      theaterDivIndex: 0,
      loaded: false,
      theaterDivHeight: 100,
      framesWithBackground: [],
      scroll: {
        direction: 1,
        lastPos: 0,
        newPos: 0,
        timer: 50,
        delta: 0,
        delay: 50
      }
    }
  },
  methods: {
    clearScrollSpeed(){
      this.scroll.lastPos = null
      this.scroll.delta = 0
    },
    getScrollSpeed(){
      if(!this.scroll.lastPos){
        this.clearScrollSpeed()
        let projectorY = this.$refs.theaterDiv?.getBoundingClientRect().top;
        if(projectorY<0){
          this.scroll.newPos = Math.abs(projectorY)

          this.scroll.delta = this.scroll.newPos - this.scroll.lastPos
          this.scroll.lastPos = this.scroll.newPos
          this.scroll.timer = setTimeout(this.clearScrollSpeed, this.scroll.delay)
          return this.scroll.delta
        }
      }
      return this.scroll.lastPos;
    },
    handleScroll(event: Event){
      if(event){
        // event.preventDefault()
      }
      let frames = this.$props.frames.length
      let boardSize = this.$refs.framesBar?.clientHeight
      let step = (boardSize / frames)
      let pos = Math.floor((this.scroll.newPos) / step)
      let speed = this.getScrollSpeed()
      if(speed>0){
        this.scroll.direction = 1
      }
      if(speed<0){
        this.scroll.direction = -1
      }
      if(this.$props.frames[pos] && this.framesWithBackground.includes(pos)){
        this.theaterDivIndex = pos
      }
      for(let i = pos-2; i<pos+2; i++){
        if(i>=0 && i<this.$props.frames.length && !this.framesWithBackground.includes(i)){
          this.framesWithBackground.push(i)
        }
      }
      // window.scrollTo(0,10)
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
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    this.theaterDivHeight = this.$props.frames.length
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('load', this.loadedEvent);
    this.handleScroll(null)

    setTimeout(this.autoUploadFrames, 150)
  }
})
</script>

<style scoped>
.theaterDiv{
  position: relative;
}
.projector{
  display: block;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 100vh;
}
.projector div{
  position: inherit;
  width: 100%;
  min-height: 100vh;
  animation: ease-in;
  background: transparent none no-repeat center center;
}
.projector div.bgModeCover{
  background-size: cover !important;
}
.projector div.bgModeContain{
  background-size: contain !important;
}
.framesBar{
  position: inherit;
  left: 10px;
  top: 0;
  width: 400px;
  overflow: hidden;
}
.framesBar div{
  width: 20px;
  height: 10px;
  opacity: .0;
  background: transparent none no-repeat center center/contain;
}
.framesBar div.bgDisabled{
  background: none !important;
}
</style>