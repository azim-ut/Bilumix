<template>
  <footer class="centered">

    <div class="bubble" v-if="showBubble()">{{bubbleText()}}</div>
    <div class="footerWrap">
      <div class="grid grid12">
        <div class="block">
          <img src="/src/assets/logo.svg" style="height: 17px;"> {{ footerText.COMPANY }}
          <address>
            <span>
              {{ footerText.ADDRESS1 }}<br />
              {{ footerText.ADDRESS2 }}<br />
              {{ footerText.ADDRESS3 }}<br />
              {{ footerText.ADDRESS4 }}<br />
              {{ footerText.ADDRESS5 }}<br />
              {{ footerText.ADDRESS6 }}<br />
              {{ footerText.ADDRESS7 }}
            </span>
            <br/>
            <span>Email: <a href="mailto:sales@bilumix.ru" aria-label="Mail to sales@bilumix.ru">sales@bilumix.ru</a></span>
          </address>
        </div>
        <div class="grid grid4 force">
          <div class="block">
            <h6>{{ footerText.PAGES }}</h6>
            <ul>
              <li>
                <a href="/shop/">{{ footerText.PAGES_SHOP }}</a>
              </li>
              <li>
                <a href="/offers/">{{ footerText.PAGES_OFFERS }}</a>
              </li>
              <li>
                <a href="/manual/">{{ footerText.PAGES_MANUAL }}</a>
              </li>
              <li>
                <a href="/support/">{{ footerText.PAGES_SUPPORT }}</a>
              </li>
            </ul>
          </div>

          <div class="block">
            <h6><a href="/shop">{{ footerText.PRODUCTS }}</a></h6>
            <ul>
              <li><a href="/shop">{{footerText.PRODUCTS_HEADLAMP}}</a></li>
              <li><a href="/shop#loupes">{{footerText.PRODUCTS_LOUPES}}</a></li>
              <li><a href="/shop#accessories">{{footerText.PRODUCTS_ACCESSORIES}}</a></li>
              <li><a href="/shop#parts">{{footerText.PRODUCTS_REPLACEABLE}}</a></li>
            </ul>
          </div>

          <div class="block">
            <h6><a href="/legal/">{{ footerText.LEGAL }}</a></h6>
            <ul>
              <li><a href="refund-policy/">{{footerText.LEGAL_REFUND_POLICY}}</a></li>
              <li><a href="/data-privacy/">{{footerText.LEGAL_DATA_PRIVACY}}</a></li>
              <li><a href="/terms-of-service/">{{footerText.LEGAL_TERMS_SERVICE}}</a></li>
            </ul>
          </div>

          <div class="block">
            <div>
              <h6 style="font-weight: normal;">{{footerText.FOLLOW_US}}</h6>
              <div>
                <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" style="color: white;">
                  <a href="https://www.facebook.com/BiLumixheadlamp/" rel="noreferrer" target="_blank" aria-label="Connect with our facebook" style="margin-right: 15px; color: white;">
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon">
                      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                    </svg>
                  </a>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
                <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" style="color: white;">
                  <a href="https://www.instagram.com/bilumix/?hl=en" rel="noreferrer" target="_blank" aria-label="Connect with our instagram" style="margin-right: 15px; color: white;">
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </a>
                  <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="copyright">
        Copyright © 2023 BiLumix.ru Designed and built by SK
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
import footerText from "@local/footer_text.json"
import {bubbleStore} from "@/store/bubble/bubble";

export default defineComponent({
  computed: {
    ...mapStores(feedbackStore, bubbleStore)
  },
  components: {FeedbackForm, Cart, Modal},
  data() {
    return {
      showQuestionModal: {},
      footerText: footerText
    }
  },
  emits: ['show-feedback-form'],
  methods: {
    openedForm(){
      this.feedbackStore.open()
    },
    isFormOpened(): boolean {
      return this.feedbackStore.isOpened
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
  },
  mounted () {
  },
  created() {
  },
  watch:{
    'feedbackStore.isOpened': {
      handler(newVal,oldValue){

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
address {
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