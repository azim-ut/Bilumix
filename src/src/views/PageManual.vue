<script setup lang="ts">
import { manualStore as mStore} from '@/store/manual/manual'
const manualStore = mStore()
</script>
<template>

  <HeadMenu :key="$route.path" />
  <div class="contentBody manualList">
    <h1>Manuals</h1>
		<div class="grid grid2">

      <div class="block grid grid2 force"
           v-for="row in manualStore.getList">
        <div class="image" :style="{'background-image': 'url(' + row.image + ')'}"></div>
        <div class="right">
          <div class="title">{{row.title}}</div>
          <div class="links">
            <a :href="row.link">Detail</a>
            <a @click="showVideo(row.video)">Watch video</a>
          </div>
        </div>
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

export default defineComponent({
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  data() {
    return {
    }
  },
  methods: {
    showVideo(link: string){
      console.log(link)
    }
  },
  unmounted () {
  },
  mounted(){
  }
})
</script>

<style scoped>
h1{
}
.manualList{

}
.manualList .block{
  margin: 10px;
  overflow: hidden;
  border-radius: 7px;
  min-height: 160px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.manualList .block .image{
  min-height: 160px;
  background: #000 no-repeat center center/cover;
}
.manualList .block .right{

}
.manualList .block .right .title{
  font-weight: bolder;
  text-align: center;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 22px;
}
.manualList .block .right .links{
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}
.manualList .block .right .links a{
  color: rgb(25, 157, 220);
  text-decoration: none;
  margin: 5px 10px;
  padding: 5px 10px;
}


@media (max-width: 950px) {
  .manualList .block{

    margin: 10px auto;
    min-width: 60%;
    max-width: 70%;
    overflow: hidden;
    border-radius: 7px;
    min-height: 160px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }
}

@media (max-width: 600px) {
  .grid2.force {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>