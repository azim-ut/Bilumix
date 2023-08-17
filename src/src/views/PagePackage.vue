<template>

  <HeadMenu :key="$route.path" />
  <div class="contentBody">
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
      menu: [
        {title: "Shop", active: false, name: 'shop', link:'/shop', mobileButton: false},
        {title: "Offers", active: true, name:'offers', link:'/offers', mobileButton: false},
        {title: "Manual", active: false, name:'manual', link:'/manual', mobileButton: false},
        {title: "Support", active: false, name:'support', link:'/support', mobileButton: false},
        {title: "Free trial", active: false, name:'trial', link:'/trial', mobileButton: true},
        {title: "Build package", active: false, name:'package', link:'/package', mobileButton: true}
      ],
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