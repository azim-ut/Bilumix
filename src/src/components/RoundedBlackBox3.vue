<template>
  <div class="block" :style="{'margin': margin, 'background-color': ($props.bgColor??'transparent'), 'background-image': 'url(' + $props.bg + ')'}">
  	<div class="inner">
      <div class="bg">
        <h1 :style="{'color': color}">{{$props.title}}</h1>
      	<h3 class="gradientTitle">{{$props.sub}}</h3>
        <p>{{$props.text}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import IntroSection1 from "@/components/IntroSection1.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";

export default defineComponent({
  components: {ScrollDownIndicator, IntroSection1},
  props: {
    bg: "" as string|null,
    margin: "" as string|null,
    color: null as string|null,
    bgColor: null as string|null,
    title: "" as string,
    sub: "" as string,
    text: "" as string
  },
  data() {
  },
  methods: {
  },
  unmounted () {
  },
  mounted(){
  }
})
</script>

<style scoped>
.block {
  position: relative;
  min-height: 50vh;
  background: #000;
  border-radius: 38px;
}
.block h1{
  text-align: left;
  font-size: revert;
}
.block h3{
  text-align: center;
}
.block .inner{
  margin: 10px;
  padding: 20px;
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
}
.block{
  position: relative;
  background: transparent no-repeat center center/cover;
  min-height: 500px;
}

@media (max-width: 850px) {
  .block{
  }
}
</style>