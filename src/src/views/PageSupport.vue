<template xmlns="http://www.w3.org/1999/html">

  <HeadMenu :key="$router.path"/>

  <div class="contentWrap">
    <div class="contentBody">
      <div class="grid grid3">
        <div>&nbsp;</div>
        <div class="center" style="padding: 50px 0 100px;">
          <h2>We are here for you</h2>
          <p>I want to ask a question!</p>
          <button class="emphasized-button" @click="callFeedbackForm()">Submit a question</button>
        </div>
        <div>&nbsp;</div>
      </div>
    </div>


  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import IntroSection1 from "@/components/IntroSection1.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/views/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  components: {
    Modal,
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  data() {
    return {

    }
  },
  methods: {
    callFeedbackForm(){
      console.log(this.$emit('show-feedback-form'))
      this.$emit('show-feedback-form');
    }
  },
  unmounted () {
  },
  mounted(){
  }
})
</script>

<style scoped>
</style>