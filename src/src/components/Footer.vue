<template>
  <footer>
    <div class="grid grid5">
      <div class="block">
        <img src="/src/assets/logo.svg">
        <address>
          <span>41 University Drive Suite 400,<br />Newtown, PA 18940<br />United States</span>
          <br/>
          <span>Email: <a href="mailto:sales@bilumix.ru" aria-label="Mail to sales@bilumix.ru">sales@bilumix.ru</a></span>
        </address>
      </div>
      <div class="block">
        <h6>Pages</h6>
        <ul>
          <li>
            <a href="/shop/">Shop</a>
          </li>
          <li>
            <a href="/offers/">Offers</a>
          </li>
          <li>
            <a href="/manual/">Manual</a>
          </li>
          <li>
            <a href="/support/">Support</a>
          </li>
        </ul>
      </div>

      <div class="block">
        <h6><a href="/products/">Products</a></h6>
        <ul>
          <li><a href="/headlamp/">Headlamp</a></li>
          <li><a href="/loupes/">Loupes</a></li>
          <li><a href="/accessories/">Accessories</a></li>
          <li><a href="/replaceable/">Replaceable</a></li>
        </ul>
      </div>

      <div class="block">
        <h6><a href="/legal/">Legal</a></h6>
        <ul>
          <li><a href="refund-policy/">Refund Policy</a></li>
          <li><a href="/data-privacy/">Data Privacy</a></li>
          <li><a href="/terms-of-service/">Terms of Service</a></li>
        </ul>
      </div>

      <div class="block">
        <div>
          <h6 style="font-size: 20px; font-weight: normal;">Follow us</h6>
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

    <div class="copyright">
      Copyright © 2023 BiLumix.ru Designed and built by SK
    </div>
  </footer>
  <Modal :name="'QuestionModal'"
         :show="feedbackStore.isOpened"
         :close-callback="() => { feedbackStore.close }">
    <div class="feedback">
			dsds
    </div>
  </Modal>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import Modal from "@/components/Modal.vue";
import {mapStores} from "pinia";
import {feedbackStore} from "@/store/feedback/feedback";

export default defineComponent({
  computed: {
    ...mapStores(feedbackStore)
  },
  components: {Modal},
  data() {
    return {
      showQuestionModal: {}
    }
  },
  emits: ['show-feedback-form'],
  methods: {
    feedbackStore,
    openedForm(): boolean{
      return this.feedbackStore.isOpened
    },
  },
  mounted () {
  },
  created() {
  },
  watch:{
    'feedbackStore.isOpened': {
      handler(newVal,oldValue){
        this.showQuestionModal = newVal
        console.log(this.showQuestionModal)
      }
    }
  }
})
</script>

<style scoped>
footer {
  position: relative;
  background-color: #151515;
  color: hsla(0,0%,100%,.8);
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
  padding: 6rem 4rem 5rem;
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
  font-size: medium;
  text-transform: uppercase;
  line-height: 40px;
  margin-bottom: 10px;
  padding-top: 0;
  margin-top: 0;
}
footer ul{
  padding: 0;
  list-style: none;
}

footer .block{
  padding: 10px;
}

footer .block ul li{
  font-size: 14px;
  line-height: 30px;
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
  font-size: 1.5rem;
}

.copyright{
  text-align: center;
  font-size: 13px;
  color: #8c8080;
  bottom: 10px;
  left: 0;
  right: 0;
}

.feedback {
  background: #ffffff;
  padding: 40px 40px;
  border-radius: 19px;
}

</style>