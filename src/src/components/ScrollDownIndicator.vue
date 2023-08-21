<template>
  <div class="box">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
  components: { },
  props: {
  },
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
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box span {
  display: block;
  width: 20px;
  height: 20px;
  border-bottom: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}
.box span:nth-child(1){
	animation-delay: -0.2s;
}
.box span:nth-child(2){
  animation-delay: -0.2s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {opacity: 1;}
  100% {
		opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>