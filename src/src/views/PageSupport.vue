<template xmlns="http://www.w3.org/1999/html">

  <HeadMenu :key="$router.path"/>

  <div class="contentWrap">
    <div class="contentBody">
      <div class="grid grid3">
        <div>&nbsp;</div>
        <div class="center" style="padding: 50px 0 100px;">
          <h2>We are here for you</h2>
          <p>I want to ask a question!</p>
          <button class="emphasized-button" @click="callForm()">Submit a question</button>
        </div>
        <div>&nbsp;</div>
      </div>
    </div>


  </div>
  <Footer/>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/components/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";
import Modal from "@/components/Modal.vue";
import {mapStores} from "pinia";
import {feedbackStore} from "@/store/feedback/feedback";

export default defineComponent({
  computed: {
    ...mapStores(feedbackStore)
  },
  components: {
    Modal,
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
  data() {
    return {

    }
  },
  methods: {
    callForm(){
      this.feedbackStore.toggle()
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