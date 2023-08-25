<template>
  <div class="box">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
  components: { },
  data() {
    return {
    }
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
.box {
  position: fixed;
  z-index: 3;
  bottom: 60px;
  left: 50%;
  //transform: translate(-50%, -50%);
}
.box span {
  display: block;
  width: 50px;
  height: 50px;
  border-bottom: 1px solid #2994d1;
  border-right: 1px solid #2994d1;
  transform: rotate(45deg);
  margin: -30px;
  opacity: 0;
}
.box span:nth-child(1){
  animation: animate1 3s infinite;
}
.box span:nth-child(2){
  animation: animate2 3s infinite;
}
.box span:nth-child(3){
  animation: animate3 3s infinite;
}
.box span:nth-child(4){
  animation: animate4 3s infinite;
}
@keyframes animate1 {
  10% {opacity: 0;}
  25% {opacity: 1;}
  50% {opacity: 0;}
}
@keyframes animate2 {
  20% {opacity: 0;}
  40% {opacity: 1;}
  60% {opacity: 0;}
}
@keyframes animate3{
  30% {opacity: 0;}
  55% {opacity: 1;}
  70% {opacity: 0;}
}
@keyframes animate4{
  40% {opacity: 0;}
  60% {opacity: 1;}
  90% {opacity: 0;}
}
</style>