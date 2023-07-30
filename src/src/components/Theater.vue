<template>
  <div :class="{'theaterDiv':true, 'hidden': hidden}" ref="theaterDiv" v-if="loaded">
    <div class="projector" ref="projector">
      <div class="front" ref="front">
        <slot></slot>
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
           :style="{'height': ($props.height) + 'px', 'background-image': 'url(' + img + ')'}"></div>
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
    height: 10,
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
      hidden: true,
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
        let rect = this.$refs.theaterDiv?.getBoundingClientRect();
        if(rect){
          let projectorY = rect.top;
          this.hidden = (projectorY + rect.height)<0
          if(!this.hidden){
            this.hidden = !(projectorY<0 && (projectorY + rect.height)>0)
            // this.hidden = (projectorY + rect.top) > window.innerHeight
          }
          if(this.$props.test){
            // console.log(this.$props.name, this.hidden, projectorY, rect.height, projectorY + rect.height, window.innerHeight)
          }

          if(!this.hidden && projectorY<0){
            this.scroll.newPos = Math.abs(projectorY)

            this.scroll.delta = this.scroll.newPos - this.scroll.lastPos
            this.scroll.lastPos = this.scroll.newPos
            this.scroll.timer = setTimeout(this.clearScrollSpeed, this.scroll.delay)
            return this.scroll.delta
          }
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
      this.useZoom(speed)
      if(this.$props.frames[pos] && this.framesWithBackground.includes(pos)){
        this.theaterDivIndex = pos
      }
      for(let i = pos-2; i<pos+2; i++){
        if(i>=0 && i<this.$props.frames.length && !this.framesWithBackground.includes(i)){
          this.framesWithBackground.push(i)
        }
      }
    },
    useZoom(speed){
      if(this.$refs.front && !this.hidden){
        let val = (1-speed/(this.$props.height * (2*this.$props.frames.length/3)))
        if(val>0){
          this.$refs.front.style.transform = 'scale(' + val + ')';
        }else{
          this.$refs.front.style.transform = 'scale(0)';
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
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    this.theaterDivHeight = this.$props.frames.length
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('load', this.loadedEvent);
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
  overflow: hidden;
}
.theaterDiv.hidden{
  visibility: hidden;
}
.projector{
  position: fixed;
  top:0;
  width: 100%;
  min-height: 100vh;
  transition: .5s;
}
.projector .front{
  position: fixed;
  top:0;
  width: 100%;
  min-height: 100vh;
}
.projector .bg div{
  position: inherit;
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
  position: inherit;
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