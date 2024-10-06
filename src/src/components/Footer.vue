<template>
  <footer class="centered">

    <div class="bubble" v-if="showBubble()">{{bubbleText()}}</div>
    <div class="footerWrap">
      <div class="">

        <div class="grid grid6">
          <div class="block">
            <img src="/src/assets/logo.svg" style="height: 17px;"> {{ footerText.COMPANY }}

            <span>
              <div class="phone"><a :href="getPhoneLink(footerText.PHONE_NUM)"><span>{{footerText.PHONE}}</span></a></div>
              <div class="address">
              <div>{{ footerText.WORK_TIME_TITLE }}</div>
              <div>{{ footerText.WORK_TIME }}</div>
              <div>
                <span>Email: <a href="mailto:sales@bilumix.am" aria-label="Mail to sales@bilumix.am">sales@bilumix.am</a></span>
              </div>
              <div>{{ footerText.ADDRESS5 }}</div>
              </div>
            </span>

          </div>
          <div class="block address">
            <h6>&nbsp;</h6>
            <div>{{ footerText.CITY }}</div>
            <div>{{ footerText.ADDRESS_STREET }}</div>
            <div>{{ footerText.ADDRESS_BUILDING }}</div>
            <div>{{ footerText.ADDRESS_OFFICE }}</div>
          </div>
          <div class="block">
            <h6>{{ footerText.PAGES }}</h6>
            <ul>
              <li>
                <a :href="getLink('/shop/')">{{ footerText.PAGES_SHOP }}</a>
              </li>
              <li>
                <a :href="getLink('/offers/')">{{ footerText.PAGES_OFFERS }}</a>
              </li>
              <li>
                <a :href="getLink('/manual/')">{{ footerText.PAGES_MANUAL }}</a>
              </li>
              <li>
                <a :href="getLink('/support/')">{{ footerText.PAGES_SUPPORT }}</a>
              </li>
            </ul>
          </div>

          <div class="block">
            <h6><a :href="getLink('/shop')">{{ footerText.PRODUCTS }}</a></h6>
            <ul>
              <li><a :href="getLink('/package/headlamp')">{{footerText.PRODUCTS_HEADLAMP}}</a></li>
              <li><a :href="getLink('/shop#loupes')">{{footerText.PRODUCTS_LOUPES}}</a></li>
              <li><a :href="getLink('/shop#accessories')">{{footerText.PRODUCTS_ACCESSORIES}}</a></li>
              <li><a :href="getLink('/shop#parts')">{{footerText.PRODUCTS_REPLACEABLE}}</a></li>
            </ul>
          </div>

          <div class="block">
            <h6><a href="/legal/">{{ footerText.LEGAL }}</a></h6>

            <ul>
              <li v-if="lang==='en'"><a href="/files/LCD_halfscreen_1080x1920.pdf">{{footerText.BUKLET}}</a></li>
              <li v-if="lang==='en'"><a href="/files/new 2.5x_loupe email marketing.pdf">{{footerText.BROCHURE1}}</a></li>
              <li v-if="lang==='en'"><a href="/files/2022-Nov-bilumix-flyer-final-bleed-cmyk-2.pdf">{{footerText.BROCHURE2}}</a></li>
              <li v-if="lang==='en'"><a href="/files/bilumix-flyer.pdf">{{footerText.BROCHURE3}}</a></li>
              <li v-if="lang==='ru'"><a href="/files/buklet.pdf" target="_blank">{{footerText.BUKLET}}</a></li>
              <li v-if="lang==='ru'"><a href="/files/final_new 2.5x_loupe_email marketing.pdf" target="_blank">{{footerText.BROCHURE1}}</a></li>
              <li v-if="lang==='ru'"><a href="/files/final_2022-Nov-bilumix-flyer-final-bleed-cmyk-2.pdf" target="_blank">{{footerText.BROCHURE2}}</a></li>
              <li v-if="lang==='ru'"><a href="/files/final_bilumix-flyer.pdf" target="_blank">{{footerText.BROCHURE3}}</a></li>
            </ul>
          </div><div class="block">
          <div>
            <h6 style="font-weight: normal;">{{footerText.FOLLOW_US}}</h6>
            <div>
              <button class="FooterSocBtn MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" style="color: white;">
                <a href="https://www.facebook.com/BiLumixheadlamp/" rel="noreferrer" target="_blank" aria-label="Connect with our facebook" style="margin-right: 15px; color: white;">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
              <button class="FooterSocBtn MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" style="color: white;">
                <a href="https://www.instagram.com/bilumix/?hl=en" rel="noreferrer" target="_blank" aria-label="Connect with our instagram" style="margin-right: 15px; color: white;">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </button>
              <button class="FooterSocBtn MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" style="color: white;">
                <a href="https://api.whatsapp.com/send?phone=37493924647" style="color: yellow;">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                </a>
              </button>
            </div>
          </div>
        </div>
        </div>

      </div>

      <div class="copyright">
        Copyright © 2023 BiLumix.am
      </div>
    </div>
  </footer>

  <Cart />


  <Modal :name="'QuestionModal'"
         :show="isFormOpened"
         :close-callback="closeForm">
    <FeedbackForm />
  </Modal>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Modal from "@/components/Modal.vue";
import {mapStores} from "pinia";
import {feedbackStore} from "@/store/feedback/feedback";
import Cart from "@/components/Cart.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
import {bubbleStore} from "@/store/bubble/bubble";
import {videoStore} from "@/store/video/video";
import footerText from "@local/footer_text.json"

export default defineComponent({
  computed: {
    ...mapStores(feedbackStore, videoStore, bubbleStore)
  },
  components: {FeedbackForm, Cart, Modal},
  data() {
    return {
      lang: import.meta.env.VITE_DEFAULT_LOCALE,
      showQuestionModal: {},
      footerText: footerText
    }
  },
  emits: ['show-feedback-form'],
  methods: {
    getLink(link: string):string {
      if(this.lang === "en"){
        return '/en'+link;
      }
      return link;
    },
    getPhoneLink(link: string):string {
      return 'tel:'+link
    },
    openedForm(){
      this.feedbackStore.open()
    },
    isFormOpened(): boolean {
      return this.feedbackStore.isOpened
    },
    isVideoOpened(): boolean {
      return this.videoStore.isOpened
    },
    bubbleText(): string {
      return this.bubbleStore.text
    },
    showBubble(): boolean {
      return this.bubbleStore.isOpened()
    },
    closeForm(){
      this.feedbackStore.close()
    },
    closeVideo() {
      this.videoStore.setVideo(null)
      return this.videoStore.hideVideo()
    },
    videoSource(): string {
      return this.videoStore.src
    }
  },
  mounted () {
    // this.lang = import.meta.env.VITE_DEFAULT_LOCALE
  },
  created() {
  },
  watch:{
    'feedbackStore.isOpened': {
      handler(newVal,oldValue){

      },
      immediate: true
    },
    'videoStore.isOpened': {
      handler(newVal,oldValue){
        // console.log(newVal, oldValue)
      },
      immediate: true
    }
  }
})
</script>

<style scoped>
footer {
  z-index: 3;
  position: relative;
  background-color: #151515;
  color: #d0d0d0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.00938em;
  -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
  padding: 4rem 4rem;
  min-height: 50vh;
}

.footerWrap{
  width: 100%;
  max-width: 1380px;
}

a{
  color: hsla(0,0%,100%,.8);
  text-decoration: none;
}
italic {
  font-style: italic;
}
footer .content{
  margin: 10px 80px;
}
footer h6{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 0 10px 0;
  margin: 0;
}
footer ul{
  padding: 0;
  margin: 0;
  list-style: none;
}

footer .block{
  padding: 10px;
  min-width: 190px;
}

footer .block ul li{
  padding: 3px 0;
  position: relative;
  cursor: pointer;
  font-weight: 200;
}

footer .block ul li:hover:after{
  background: #2ed5ff;
}
footer .block ul li:after{
  content: "";
  position: absolute;
  width: 3px;
  height: 100%;
  top: 0;
  left: -10px;
  background-color: hsla(0,0%,100%,0);
  -webkit-transition: background-color .3s linear;
  -moz-transition: background-color .3s linear;
  transition: background-color .3s linear;
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  transform-origin: center;
  -webkit-transform: scaleY(.4);
  -moz-transform: scaleY(.4);
  transform: scaleY(.4);
}

footer button{
  background: transparent;
  border: none;
  color: #fff;
}

.MuiSvgIcon-root{
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.copyright{
  text-align: center;
  color: #8c8080;
  bottom: 10px;
  left: 0;
  right: 0;
  width: 100%;
}
.FooterSocBtn{
}
.FooterSocBtn a{
  font-size: 30px;
  line-height: 30px;
}
.feedback {
  background: #ffffff;
  padding: 20px 20px;
  border-radius: 19px;
}

.bubble {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.phone{
  cursor: pointer;
  opacity: 1;
  margin: 20px 0 10px;
}
.phone a{
  color: white;
  text-decoration: none;
}
.phone:hover{
  cursor: pointer;
  opacity: 1;
}
.phone span{
  font-weight: 800;
  font-style: normal;
}
.phone svg{
  margin-right: 10px;
}

@media (max-width: 850px) {
  footer{
    padding: 4rem 2rem;
    justify-content: left;
  }
  .footerWrap{
    min-width: 100%;
  }
  footer .grid.grid4 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>