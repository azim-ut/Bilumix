
<template>
  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="contentBody" v-if="product">
      <div class="grid grid2">
        <div class="images" v-if="currentImage">
          <div class="imagesContent">
            <div class="current" :style="{'background-image': 'url(' + currentImage.url + ')'}"></div>
            <div class="preList">
              <div class="pre"
                   v-for="image in product.images"
                   :style="{'background-image': 'url(' + image.url + ')'}">
              </div>
            </div>
          </div>
        </div>
        <div class="text" style="padding-right: 40px;">
          <h1>{{product.title}}</h1>
          <div class="price">${{product.price}}</div>
          <div class="tools">
            <div class="grid grid2 force">
              <div>
                <div class="counter" @click="setFocus()">
                  <div class="counterBody">
                    <div class="ttl">
                      <div class="ttlTxt">Qty</div>
                    </div>
                    <input type="number" ref="cnt"
                           v-model="form.count"/>
                  </div>
                </div>
                <div v-if="form.cart>0">
                  In cart: {{form.cart}}
                </div>
              </div>
              <div class="toCart" >
                <button @click="addToCart(product, form.count)" class="emphasized-button">Add to cart</button>
              </div>
            </div>
          </div>
          <hr />
          <div class="text" v-html="product.text"></div>
          <div class="links">
              <a v-for="link in product.links" :href="link.url">{{link.title}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue"
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue"
import Footer from "@/components/Footer.vue"
import {RouterView} from "vue-router"
import IntroFrame1 from "@/components/IntroFrame1.vue"
import TheaterWheel from "@/components/TheaterWheel.vue"
import HeadMenu from "@/components/HeadMenu.vue"
import {mapStores} from "pinia"
import {shopStore} from "@/store/shop/shop"
import type {Image, Product} from "@/store/shop/types";
import {cartStore} from "@/store/cart/cart";

export default defineComponent({
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
  computed: {
    ...mapStores(shopStore, cartStore)
  },
  data() {
    return {
      product: undefined as Product|undefined,
      currentImage: undefined as Image|undefined,
      form: {
        cart: 0,
        count: 1,
        link: undefined as string|undefined
      }
    }
  },
  methods: {
    setFocus(){
      this.$refs.cnt.focus()
    },
    addToCart(product: Product){
      if(this.form.count===0){
        this.form.count = 1
      }
      this.cartStore.toCart(product.link, this.form.count)
      this.form.cart = this.cartState().cnt
    },
    cartState(){
      if(this.product){
        return this.cartStore.getCartItem(this.product.link)
      }
    }
  },
  unmounted () {
  },
  mounted(){
    this.product = this.shopStore.getItem(this.$route.params.link)
    this.currentImage = this.product?.images[0];
    this.form.cart = this.cartState().cnt
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
.contentBody{
  margin-bottom: 10%;
}

@media (max-width: 950px) {
  .contentBody{
    margin: 120px 10% 10% 10%;
  }
}
</style>