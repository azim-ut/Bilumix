<template>
  <div :id="'TheaterVideo2' + $props.name" :class="{'theaterDiv':true}" :style="{'height': $props.height +'px'}" ref="theaterDiv">
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
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia";
import {slideStore} from "@/store/slide/slide";
import {Slide} from "@/store/slide/types";

export default defineComponent({
  computed: {
    ...mapStores(slideStore)
  },
  components: { },
  props: <any>{
    name: "" as String,
    test: false,
    height: 500,
    bgMode: "cover",
    progress: 0,
    scrollEvent: undefined
  },
  data() {
    return {
      slide: null as Slide|null,
      lastSlide: null as Slide|null
    }
  },
  methods: {
    progressUpdate(progress: number): void{
      let max = this.slideStore.getSlides(this.$props.name).length
      let pos = progress/100 * max
      const next = Math.floor(pos)

      if(this.slideStore?.isLoaded(next, this.$props.name)){
        let slide = this.slideStore.getLoadedSlide(next, this.$props.name)
        if(slide && slide.loaded){
          this.lastSlide = this.slide;
          this.slide = slide
        }
      }
    },
    loadedEvent(){
      this.loaded = true;
    }
  },
  watch: {
    progress: function(newVal, oldVal) { // watch it
      if(newVal != oldVal){
        this.progressUpdate(newVal)
      }
    },
    scrollEvent: function(newVal, oldVal) {
      if(newVal != oldVal && newVal) {
        // this.handleWheel()
      }
    }
  },
  unmounted () {
    let container = document.getElementById('TheaterWheel' + this.$props.name);
  },
  mounted(){
    this.slide = this.slideStore.getLoadedSlide(0, this.$props.name)
  }
})
</script>

<style scoped>
.theaterDiv{
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  scroll-behavior: smooth;
  min-height: 100vh;
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
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
}
.projector .front .contentWrap{
  position: absolute;
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  z-index: 50;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.projector .bg{
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
.projector .bg div{
  position: absolute;
  width: 100%;
  animation: ease-in;
  background: transparent none no-repeat center center;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
.projector .bg div.bgModeCover{
  background-size: cover !important;
}
.projector .bg div.bgModeContain{
  background-size: contain !important;
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
</style>