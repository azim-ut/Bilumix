<template>
  <div class="block" :style="{'background-color': ($props.bgColor??'transparent'), 'background-image': 'url(' + $props.bg + ')'}">
  	<div class="inner">
      <div class="bg">
        <h1 :style="{'color': color}" v-html="$props.title"></h1>
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
  props: <any>{
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
  min-width: 370px;
  position: relative;
  min-height: 50vh;
  background: #000;
  border-radius: 38px;
  margin: 0 50px;
}
.block h1{
  text-align: left;
  font-size: revert;
  letter-spacing: normal;
  margin: 0;
  top: 10%;
  padding: 0;
  font-weight: 500;
  text-shadow: 1px 1px 13px rgba(0,0,0,.5);
}
.block h3{
  text-align: center;
}
.block p{
  margin: 0;
}
.block .inner{
  margin: 10px;
  padding: 20px;
  color: #fff;
  top: 20%;
  left: 0;
  right: 0;
  position: absolute;
}
.block .inner p{
  color: #0ff;
}
.block{
  position: relative;
  background: transparent no-repeat center bottom/contain;
  min-width: 300px;
  min-height: 460px;
}

.textBlocksPanel2 .block{
}

@media (max-width: 850px) {
  .block{
    min-width: 370px;
    margin: 0;
  }
  .block .inner{
    top: auto;
    bottom: 0%;
  }
}

@media (max-width: 600px) {
  .block{
    min-width: 270px;
  }
  .block h1{
    font-size: 25px;
  }
  .block .inner {
    margin: 0;
  }
}
</style>