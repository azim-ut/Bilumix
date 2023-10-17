<template>
  <div :id="'TheaterMainWheel' + $props.name" :class="{'theaterDiv':true}" :style="{'height': $props.height}" ref="theaterDiv">
    <div class="projector" ref="projector">
      <div class="front" ref="front">
        <div class="contentWrap">
          <slot></slot>
        </div>
      </div>
      <div class="bg">
        <div v-if="lastSlide"
             :class="{'bgModeCover': $props.bgMode === 'cover', 'bgModeContain': $props.bgMode === 'contain'}"
             :style="{'background-image': 'url(' + lastSlide.path + ')'}"></div>
        <div v-if="slide"
             :class="{'bgModeCover': $props.bgMode === 'cover', 'bgModeContain': $props.bgMode === 'contain'}"
             :style="{'background-image': 'url(' + slide.path + ')'}"></div>
      </div>
      <div class="framesBar" ref="framesBar">
        <div :class="{'bgDisabled': true}"
             :style="{'height': '10px'}"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia";
import {slideStore} from "@/store/slide/slide";
import type {Slide} from "@/store/slide/types";

export default defineComponent({
  computed: {
    ...mapStores(slideStore)
  },
  components: { },
  props: <any>{
    name: "" as String,
    height: '500px',
    bgMode: "cover",
    frames: [] as any[],
    from: 0 as number,
    to: 0 as number,
    progress: 0 as number
  },
  data() {
    return {
      slide: null as Slide|null,
      lastSlide: null as Slide|null
    }
  },
  methods: {
    playVideo(progress: number): void{
      if(progress >= 0 && (progress >= this.$props.from && progress <= this.$props.to)){
        const progressDelta = this.slideStore.getSlides(this.$props.name).length/(this.$props.to - this.$props.from)
        const frame = Math.floor(progress * progressDelta)
        const val: number = Math.floor(frame)

        if(this.slideStore?.isLoaded(val, this.$props.name)) {
          let slide = this.slideStore.getLoadedSlide(val, this.$props.name)
          if(slide){
            this.lastSlide = this.slide;
            this.slide = slide
          }
        }
      }
    },
    onWheel(event: any){
      // console.log(this.$refs.theaterDiv.scrollY)
      this.playVideo(this.$props.progress)
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.onWheel);
    window.removeEventListener('mousewheel', this.onWheel);
  },
  watch:{
    progress: function(newVal, oldVal) { // watch it
      if(newVal != oldVal){
        // this.playVideo(newVal)
      }
    }
  },
  async mounted(){
    window.addEventListener('scroll', this.onWheel);
    window.addEventListener('mousewheel', this.onWheel);
    this.playVideo(0)
    this.slide = this.slideStore.getLoadedSlide(0, this.$props.name)
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
  min-height: 100vh;
  animation: ease-in;
  background: transparent none no-repeat 50% center/contain;
}
.projector .bg div.bgModeCover{
  opacity: .9;
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