<template xmlns="http://www.w3.org/1999/html">

  <HeadMenu :key="$router.path"/>

  <div class="contentWrap">
      <div class="grid grid3">
        <div>&nbsp;</div>
        <div class="center" style="padding: 50px 0 100px;">
          <h2>{{bundles.FEEDBACK_TITLE}}</h2>
          <p>{{bundles.FEEDBACK_TEXT}}</p>
          <button class="emphasized-button" @click="callForm()">{{bundles.FEEDBACK_SUBMIT}}</button>
        </div>
        <div>&nbsp;</div>
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
import textBundles from "@local/feedback_text.json";

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
      bundles: textBundles
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
    window.scroll(0,0)
  }
})
</script>

<style scoped>
h2{
  font-size: 2.125rem;
  font-weight: 700;
}
.contentWrap{
  font-size: 24px;
  min-height: 50vh;
}
.emphasized-button{
  padding: 1rem 3rem;
}
</style>