<template>
  <div class="block" :style="{'margin': margin, 'background-color': ($props.bgColor??'transparent'), 'background-image': 'url(' + $props.bg + ')'}">
  	<div class="inner">
      <div class="bg">
        <h1 class="center" :style="{'color': color}">{{$props.title}}</h1>
      	<h3 class="gradientTitle">{{$props.sub}}</h3>
        <p>{{$props.text}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";

export default defineComponent({
  components: {ScrollDownIndicator},
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
  background: #000;
  border-radius: 38px;
  margin: 10px;
  height: 600px;
}
.block h1{
  padding: 0;
  letter-spacing: normal;
  font-weight: 500 !important;
  text-shadow: 1px 1px 13px rgba(0,0,0,.5);
}
.block .bg h1{
  font-weight: 400;
}
.block h3{
  text-align: center;
  margin: 10px auto;
}
.inner{
  margin: 4%;
  padding: 10px;
  color: #fff;
  top: auto;
  bottom: 10px;
  left: 0;
  right: 0;
  position: absolute;
}
.inner p{
  color: #0ff;
  margin: 0;
  text-align: justify !important;
}
.block{
  position: relative;
  background: transparent no-repeat center 15%/cover;
}

@media (max-width: 850px) {
  .block{
  }
}

@media (max-width: 600px) {
  .block{
  }
}
</style>