<template>
  <div class="block" :style="{'background-image': 'url(' + $props.bg + ')'}">
  	<div class="inner">
      <div class="bg">
        <h1>{{$props.title}}</h1>
      	<h3>{{$props.sub}}</h3>
        <p>{{$props.text}}
          <ScrollDownIndicator /></p>
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
    bg: "" as String,
    title: "" as String,
    sub: "" as String,
    text: "" as String
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
  margin: 10px;
}
.block h1{
  text-align: center;
}
.block h3{
  text-align: center;
}
.block .inner{
  margin: 10px;
  padding: 20px;
  color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}
.block{
  position: relative;
  background: transparent no-repeat center top/cover;
  min-height: 500px;
}
</style>