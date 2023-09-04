<template>

  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <!-- PLACE CONTENT HERE -->
  </div>
  <Footer />
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

export default defineComponent({
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
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
</style>