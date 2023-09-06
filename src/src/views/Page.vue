<template>

  <HeadMenu :key="$route.path" />
  <div class="content" style="margin-top: 80px; position: relative;">
    <ScrollDownIndicator />
    <IntroFrame1 />
    <div class="textBlocksPanelWrap" style="min-height: 100vh;">
      <div class="textBlocksPanel textBlocksPanel1 grid grid3">
        <RoundedBlackBox v-for="row in shortTextBlocks1"
                         :bg="row.bg"
                         :margin="'10px'"
                         :bgColor="row.bgColor"
                         :title="row.title"
                         :sub="row.sub"
                         :text="row.text"
        ></RoundedBlackBox>
      </div>
    </div>


    <div class="textBlocksPanelWrap" style="margin: 0 !important; padding: 0 !important; background-color: #151515;">
      <div class="textBlocksPanel textBlocksPanel2 grid grid2" style="min-height: 100vh; min-width: 380px;">
        <RoundedBlackBox2 v-for="row in shortTextBlocks2"
                         :bg="row.bg"
                         :margin="'10px'"
                         :bgColor="row.bgColor"
                         :title="row.title"
                         :sub="row.sub"
                         :text="row.text"
        ></RoundedBlackBox2>
      </div>
    </div>

    <div class="textBlocksPanelWrap" style="min-height: 100vh;">
      <div class="notForMobile textBlocksPanel textBlocksPanel3">
        <h1 class="center blockH1" v-html="shortTextBlocks3[0].title"></h1>
        <div class=" grid grid3">
          <RoundedBlackBox3 v-for="row in shortTextBlocks3.slice(1)"
                            :bg="row.bg"
                            :margin="'10px'"
                            :color="(row.color??'#fff')"
                            :bgColor="row.bgColor"
                            :title="row.title"
                            :sub="row.sub"
                            :text="row.text"
          ></RoundedBlackBox3>
        </div>
      </div>
    </div>



    <div class="videoBlock grid grid2">
      <TheaterWheelVideo1
          					class="video1"
          					:name="'video1'"
                    :test="true"
                    :bg-mode="'cover'"
                    :style="{'background':'#000'}"
                    :scroll-event="scroll.event"
                    :height="500">
      </TheaterWheelVideo1>

      <TheaterWheelVideo2
                    class="video2"
                    :bg-mode="'cover'"
                    :style="{'background':'#000'}"
                    :scroll-event="scroll.event"
                    :height="500"
                    :name="'video2'"
                    :test="false">
      </TheaterWheelVideo2>

      <button class="emphasized-button" @click="video2.show = true"><font-awesome-icon icon="fa-solid fa-circle-play" /> Watch Video</button>
    </div>
    <div class="preFooterBlock" >
      <div class="specialOffers">
        <div>
          <h1>{{mainBundles.SPECIAL_OFFERS_H1}}</h1>
          <h3 class="gradientTitle">{{mainBundles.SPECIAL_OFFERS_TEXT}}</h3>
        </div>
      </div>
      <div class="stayUpdate">
        <div>
          <h1>{{mainBundles.STAY_UPDATED_H1}}</h1>
          <p>{{mainBundles.STAY_UPDATED_TEXT}}</p>
          <div class="agreeWrap">
            <div class="agree">
              <div class="check">
                <span @click="stayUpdated.agree = !stayUpdated.agree">
                  <font-awesome-icon :icon="['far', 'square']" v-if="!stayUpdated.agree" />
                  <font-awesome-icon :icon="['far', 'square-check']" v-if="stayUpdated.agree" />
                </span>
              </div>
              <div class="text">
                {{mainBundles.AGREE_WITH}} <a href="data-privacy">{{mainBundles.AGREE_WITH_PRIVACY}}</a>.
              </div>
            </div>
          </div>
          <div :class="{'emailInput': true, 'active': stayUpdated.focus}" @click="stayUpdatedUpdate()">
            <input type="email" @change="stayUpdatedUpdate()" v-model="stayUpdated.email" :placeholder="mainBundles.ENTER_YOUR_EMAIL"/>
            <button>
              <div>{{mainBundles.SUBSCRIBE}}</div>
              <div><font-awesome-icon icon="fa-solid fa-envelope" /></div>
            </button>
          </div>
        </div>
      </div>
    </div>


    <Modal :name="'video2'"
           :show="() => video2.show"
           :close-callback="() => {video2.show = false}">
      <div class="video" v-if="video2.show">
        <video :src="video2.src" preload="auto" controls="true" style="width: 100%; height: 100%;"></video>
      </div>
    </Modal>
  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import IntroSection1 from "@/components/IntroFrame1.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/components/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";
import Modal from "@/components/Modal.vue"
import block1 from "@local/index_text_block1.json"
import block2 from "@local/index_text_block2.json"
import block3 from "@local/index_text_block3.json"
import mainBundles from "@local/main_text.json"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import RoundedBlackBox3 from "@/components/RoundedBlackBox3.vue";
import TheaterMainWheel from "@/components/TheaterMainWheel.vue";
import TheaterWheelVideo1 from "@/components/TheaterWheelVideo1.vue";
import TheaterWheelVideo2 from "@/components/TheaterWheelVideo2.vue";
import RoundedBlackBox2 from "@/components/RoundedBlackBox2.vue";

export default defineComponent({
  components: {
    RoundedBlackBox2,
    TheaterWheelVideo2,
    TheaterWheelVideo1,
    TheaterMainWheel,
    RoundedBlackBox3,
    FontAwesomeIcon,
    Modal,
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  data() {
    return {
      loaded: false,
      video2: {
        show: false,
        src: '/video/bilumix-gen2-cm-long-720.mp4'
      },
      mainBundles: mainBundles,
      shortTextBlocks1: block1,
      shortTextBlocks2: block2,
      shortTextBlocks3: block3,
      scroll: {
        event: undefined
      },
      stayUpdated: {
        focus: false,
        agree: false,
        email: null as string|null
      },
      productTheater: {
        frames: [] as any[]
      },
      video1Theater: {
        frames: [] as any[]
      },
      video2Theater: {
        frames: [] as any[]
      }
    }
  },
  methods: {
    loadedEvent(){
      this.loaded = true
    },
    stayUpdatedUpdate(){
      this.stayUpdated.focus = !this.stayUpdated.focus
      if(this.stayUpdated.email && this.stayUpdated.email.length > 2){
        this.stayUpdated.focus = true
      }
    },
    fillTheaterFrames(){
      this.productTheater.frames = []
      let cnt = 279;
      while(cnt-->0){
        let src = "/images/min/device_image/bilumix-sequence" + cnt + "-min.png"
        if(cnt>=10 && cnt<100){
          src = "/images/min/device_image/bilumix-sequence0" + cnt + "-min.png"
        }else if(cnt<10){
          src = "/images/min/device_image/bilumix-sequence00" + cnt + "-min.png"
        }
        // let path = require(src)
        this.productTheater.frames.unshift(new URL(src, import.meta.url))
      }
    },
    handleScroll(event: any){
      this.scroll.event = event
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousewheel', this.handleScroll);
    window.removeEventListener('load', this.loadedEvent);
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousewheel', this.handleScroll);
    window.addEventListener('load', this.loadedEvent);
    // this.fillTheaterFrames()
    // this.fillVideoTheaterFrames()
    // this.fillVideo2TheaterFrames()
  }
})
</script>

<style scoped>
.blockH1{
  font-size: revert;
  letter-spacing: normal;
}
.loaderBase img{
  width: 10px; height: 10px;
  opacity: .01;
}

.mainBanner .content h1{
  line-height: 40px;
  font-size: 50px;
  text-shadow: 1px 1px 13px rgba(0,0,0,.5);
}
.mainBanner .content h2{
  font-size: 16px;
  letter-spacing: 10px;
}
.mainBanner .content h3{
  font-size: 35px;
  font-weight: 600;
  max-width: 600px;
  background: #2ee8dc;
  background: -moz-linear-gradient(to right,#2ee8dc 0,#05b4ff 50%,#2d66eb 100%);
  background: -webkit-gradient(linear,left top,right top,from(#2ee8dc),color-stop(50%,#05b4ff),to(#2d66eb));
  background: -moz-linear-gradient(left,#2ee8dc 0,#05b4ff 50%,#2d66eb 100%);
  background: linear-gradient(90deg,#2ee8dc 0,#05b4ff 50%,#2d66eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: .8rem;
  letter-spacing: 2px;
}

.textBlocksPanel{
  background: white;
}
.textBlocksPanel2{
  background-color: #151515;
  margin: 0;
}
.textBlocksPanel2  .inner{
  top: 10% !important;
}

.stayUpdate{
  background: #199ddc;
  text-align: center;
  min-height: 100vh;
  display: flex;
  padding: 5%;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
}
.stayUpdate p{
  font-size: 20px;
  font-weight: 300;
  color: #000;
  margin-top: 0;
}
.stayUpdate .emailInput{
  margin: auto;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 30px;
  background: #9acded;
  border: #3a618b 1px solid;
}
.stayUpdate .emailInput input{
  border: none;
  width: 60%;
  height: 50px;
  outline: none;
  background: transparent;
  overflow: hidden;
  line-height: 25px;
  padding:  0 10px 0 40px;
  border-radius: 20px 0 0 20px;
  font-size: 18px;
}
.stayUpdate .emailInput button{
  border: none;
  border-left: #7596b9 1px solid;
  font-size: 13px;
  line-height: 16px;
  outline: none;
  height: 47px;
  width: 200px;
  margin: 3px;
  padding: 10px 30px 10px 20px;
  border-radius: 0 20px 20px 0;
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.stayUpdate .emailInput button svg{
  margin: 0 20px;
  height: 16px;
}
.stayUpdate .agreeWrap{
}
.stayUpdate .agreeWrap .agree{
  display: inline-flex;
  margin-bottom: 10px;
}
.stayUpdate .agreeWrap .agree div.text{
  margin-left: 10px;
  line-height: 30px;
}
.stayUpdate .agreeWrap .agree div.check span{
  cursor: pointer;
  font-size: 20px;
}
.stayUpdate .emailInput:hover,
.stayUpdate .emailInput.active{
  background: white;
  border: 2px solid rgba(0,57,110,.8)!important
}
.textBlocksPanelWrap{
  min-height: 100vh;
  background: white;
  position: relative;
  z-index: 2;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}

.specialOffers{
  text-align: center;
  background: black;
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
}
.specialOffers h1,
.stayUpdate h1{
  margin: auto;
  letter-spacing: normal;
  color: #fff;
  font-weight: 500;
  font-size: 300%;
}
.specialOffers h3{
  margin: auto;
  font-size: x-large;
}
.videoBlock{
  position: relative;
  background: #fff;
  z-index: 2;
  min-height: 100vh;
}
.preFooterBlock{
  position: relative;
  background: #fff;
  z-index: 2;
}
.videoBlock .emphasized-button{
  position: absolute;
  cursor: pointer;
  top: calc(50% - 30px);
  z-index: 1000;
  left: calc(50% - 100px);
}
.textBlocksPanel3{
  display: block;
  background: white;
}
.mobileOnly{
  display: none;
  z-index: 2;
  position: relative;
  overflow: hidden;
  background: white;
}
@media (max-width: 850px) {
  .textBlocksPanelWrap{
    margin: 0;
  }
  .textBlocksPanel2 h1{
    text-align: left;
  }
}
</style>