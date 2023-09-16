<script setup lang="ts">
import { manualStore as mStore} from '@/store/manual/manual'
import Modal from "@/components/Modal.vue";
const manualStore = mStore()
</script>
<template>

  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div style="margin: 0 auto;">
      <div class="grid grid2 manualList">
        <div class="block" style="border: none; box-shadow: none;background: none; padding: 0;">
          <h1>Manuals</h1>
        </div>
        <div>&nbsp;</div>
      </div>
      <div class="grid grid2 manualList" style="margin-top: 0;">
        <div class="block grid grid2 force"
             v-for="row in manualStore.getList">
          <div class="image" :style="{'background-image': 'url(' + row.image + ')'}"></div>
          <div class="right">
            <div>
              <div class="title">{{row.title}}</div>
              <div class="linksWrap">
                <div class="links">
                  <a class="btn" @click="toManualPage(row.link)">{{ bundles.DETAILS }}</a>
                  <a class="btn" @click="showVideo(row)">{{ bundles.VIDEO }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <br/>
      <br/>
      </div>
    </div>

    <Modal :name="'videoModal'"
           :show="() => showModalVideo"
           :close-callback="() => {showModalVideo = null}">
      <div class="video" v-if="showModalVideo && showModalVideo.video">
        <video :src="showModalVideo.video" preload="auto" controls="true" style="width: 100%; height: 100%;"></video>
      </div>
    </Modal>

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
import type {ManualRecord} from "@/store/manual/types";
import manualTextBundles from "@local/manual_text.json";

export default defineComponent({
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
  data() {
    return {
      showModalVideo: null as any,
      bundles: manualTextBundles
    }
  },
  methods: {
    showVideo(link: ManualRecord){
      this.showModalVideo = link
    },
    toManualPage(link: string){
      this.$router.push({name: "manualPage", params: {link: link}})
    },
  },
  unmounted () {
  },
  mounted(){
    window.scroll(0,0)
  }
})
</script>

<style scoped>
.contentWrap{
  background: #f5f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1{
  margin: 10px 10px 0;
  font-size: 50px;
  padding: 20px 0 0 0;
  text-align: left;
}
.manualList{
  margin-top: 57px;
}
.manualList .block{
  overflow: hidden;
  border-radius: 7px;
  margin: 24px 10% 10px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}
.manualList .block .image{
  min-height: 160px;
  background: #000 no-repeat center center/cover;
}
.manualList .block .right{
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}
.manualList .block .right .title{
  font-weight: bolder;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 22px;
  margin: 10px 10px;
}
.manualList .block .right .links{
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}
.manualList .block .right .links a{
  background: #fff;
}
.manualList .block .right .links a:hover{
  background: #f1f9fd;
  transition: .5s;
}
@media (max-width: 800px) {
  .manualList .block{
    width: 80%;
  }


}

@media (max-width: 950px) {
  h1{
    margin: 10px auto;
    min-width: 60%;
    max-width: 70%;
  }
  .manualList .block{

    margin: 10px auto;
    width: 60%;
    overflow: hidden;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }

  .manualList .block:nth-child(4){
    margin-top: 10px;
  }
}

@media (max-width: 600px) {
  h1{
    margin: 20px 0 0;
    font-weight: 500;
    padding: 0;
    font-size: 200%;
  }
  .manualList .block{
    width: 90%;
  }
  .grid2.force {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>