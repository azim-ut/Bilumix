<template>

  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div style="padding: 0 20px;">
      <h1>{{manual.title}}</h1>
      <div class="grid grid2">
        <div>
          <div class="video">
            <video :src="manual.video" autoplay preload="auto" controls="" style="width: 100%; height: 100%;"></video>
          </div>
        </div>
        <div>
          <div class="text" v-html="manual.text"></div>
          <div class="btn" @click="toManualsList">{{bundles.BACK}}</div>
        </div>
      </div>
    </div>
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
import {manualStore} from "@/store/manual/manual";
import {mapStores} from "pinia";
import type {ManualRecord} from "@/store/manual/types";
import bundles from "@local/manual_text.json";

export default defineComponent({
  computed: {
    ...mapStores(manualStore)
  },
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
  data() {
    return {
      bundles: bundles,
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
    },
    getLink():any {return this.$route.params.link},
    toManualsList() {
      this.$router.push({name: 'manual'})
    },
    closeModal(event: any){
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    },
  },
  unmounted () {
    window.removeEventListener('click', this.closeModal)
  },
  mounted(){
    window.scroll(0,0)
  	window.addEventListener('click', this.closeModal)
    window.scroll(0,0)
    this.manual = this.manualStore.getItem(this.getLink())
  }
})
</script>

<style scoped>
.contentWrap{
  padding-top: 50px;
}
video {
  border-radius: 17px;
}
.text {
  margin: 0 20px 20px;
}
</style>