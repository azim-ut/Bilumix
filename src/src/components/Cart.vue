<template>
  <div>
    <Modal :name="'QuestionModal'"
           :show="feedbackStore.isOpened"
           :close-callback="() => { getCart.close }">
      <div class="feedback">
        dsds
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "./RoundedBlackBox.vue"
import IntroSection1 from "./IntroSection1.vue"
import ScrollDownIndicator from "./ScrollDownIndicator.vue"
import Footer from "./Footer.vue"
import {RouterView} from "vue-router"
import IntroFrame1 from "../views/IntroFrame1.vue"
import TheaterWheel from "./TheaterWheel.vue"
import HeadMenu from "./HeadMenu.vue"
import {mapStores} from "pinia"
import {shopStore} from "@/store/shop/shop"
import type {Cart} from "@/store/shop/types"
import Modal from "@/components/Modal.vue";

export default defineComponent({
  components: {
    Modal,
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  computed: {
    ...mapStores(shopStore)
  },
  data() {
    return {
    }
  },
  methods: {
    getCart(): Cart {
      return this.shopStore.getCart()
    }
  },
  unmounted () {
  },
  mounted(){
    this.shopStore.fetchCart()
  }
})
</script>

<style scoped>
.images{
  display: flex;
  position: relative;
}
.images .imagesContent{
  width: 80%;
  margin: auto;
}
.images .current{
  width: 100%;
  height: 340px;
  background: transparent no-repeat center center/cover;
  border-radius: 23px;
}
.images .preList{
  display: flex;
}
.images .preList .pre{
  background: transparent no-repeat center center/contain;
  width: 90px; height: 100px;
  margin: 10px;
}
.links{
  margin-top: 20px;
}
.price{
  margin: 0px;
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  text-align: right;
}
.toCart button{
  background: #404040;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 20px;
  border-radius: 50px;
  border: none;
}
</style>