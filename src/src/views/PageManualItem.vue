<template>

  <HeadMenu :key="$route.path" />
  <div class="contentBody">
    <h1>{{manual.title}}</h1>
    <div class="grid grid2">
      <div>
        <div class="video">
          <video :src="manual.video" preload="auto" controls="" style="width: 100%; height: 100%;"></video>
        </div>
      </div>
      <div>
        <div class="text" v-html="manual.text"></div>
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
import {manualStore} from "@/store/manual/manual";
import {mapStores} from "pinia";
import type {ManualRecord} from "@/store/manual/types";

export default defineComponent({
  computed: {
    ...mapStores(manualStore)
  },
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  data() {
    return {
      manual: {
        title: "-",
        text: "",
        image: "",
        video: "",
        link: ""
      } as ManualRecord
    }
  },
  methods: {
    showVideo(link: string){
      console.log(link)
    },
    getLink():any {return this.$route.params.link}
  },
  unmounted () {
  },
  mounted(){
    this.manual = this.manualStore.getItem(this.getLink())
  }
})
</script>

<style scoped>
.contentBody {
  margin: 80px 20px 10px;
}
video {
  border-radius: 17px;
}
.text {
  margin: 0 20px 20px;
}
</style>