
<template>
  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="grid grid161 force" style="padding-top: 20px;" v-if="product">
      <div>&nbsp;</div>
      <div class="grid grid2">
        <div>
          <div class="photoSlider">
            <div class="display">
              <div :class="{'slide': true, 'active': row.on}"
                   v-for="row in product.images"
                   :style="{'background-image': 'url(' + row.url + ')'}"
              ></div>
            </div>
            <div class="controlWrap" v-if="product.images.length>1">
              <div class="control grid grid4">
                <div :class="{'slideBtn pointer':true}"
                     v-for="(row) in product.images">
                  <div :class="{'image':true, 'active': row.on}"
                       @click="slidesUpdate(row)"
                       :style="{'background-image': 'url(' + row.url + ')'}"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text">
          <h1>{{product.title}}</h1>
          <div class="price">{{getPriceTarget(product)}}</div>
          <div class="tools">
            <div class="grid grid2 force">
              <div class="qtyWrap">
                <div class="counter" @click="setFocus()">
                  <div class="counterBody">
                    <div class="ttl">
                      <div class="ttlTxt">{{ shopTextBundles.QTY_SHORT }}</div>
                    </div>
                    <input type="number" ref="cnt"
                           v-model="form.count"/>
                  </div>
                </div>
              </div>
              <div class="toCart">
                <button @click="addToCart(product, form.count)" class="emphasized-button">{{shopTextBundles.ADD_TO_CART_SHORT}}</button>
              </div>
            </div>
            <div v-if="form.cart>0" class="small">
              In cart: {{form.cart}}
            </div>
          </div>
          <div v-if="product.need && product.need.length" style="margin: 50px 0 0px; padding: 0 10px;">
            <div v-for="need in product.need" class="p-0-0-20-0">
              <div v-if="need.check">
                <div class="check pointer" @click="need.check.val = !need.check.val">
                  <span class="icon">
                    <font-awesome-icon :icon="['far', 'square']" v-if="!need.check.val" />
                    <font-awesome-icon :icon="['far', 'square-check']" v-if="need.check.val" />
                  </span>&nbsp;
                  <p v-html="need.check.html"></p>
                </div>
              </div>
              <div v-if="!need.check || need.check.val">
                <p v-html="need.html" class="p-0-0-20-0"></p>
                <Slider v-if="need.val >= 0"
                        :min="need.min"
                        :max="need.max"
                        v-model="need.val"></Slider>
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
      <div>&nbsp;</div>
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
import TheaterMainWheel from "@/components/TheaterMainWheel.vue";
import Slider from "@vueform/slider";
import shopTextBundles from "@local/shop_text.json";
import {bubbleStore} from "../store/bubble/bubble";
import {convertTargetPrice} from "../service/PriceService";

export default defineComponent({
  components: {
    TheaterMainWheel,
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox, Slider},
  computed: {
    ...mapStores(shopStore, cartStore)
  },
  data() {
    return {
      shopTextBundles: shopTextBundles,
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
    getPriceTarget: convertTargetPrice,
    bubbleStore,
    hideAllSlides(){
      this.product?.images.forEach((row: Image) => {
        row.on = false
      })
    },
    slidesUpdate(image: Image){
      let before = image.on
      this.hideAllSlides()
      image.on = !before
    },
    setFocus(){
      this.$refs.cnt.focus()
    },
    addToCart(product: Product){
      if(this.form.count===0){
        this.form.count = 1
      }
      this.cartStore.toCart(product.link, this.form.count, product.need)
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
    window.scroll(0,0)
    this.product = this.shopStore.getItem(this.$route.params.link)
    this.currentImage = this.product?.images[0];
    this.form.cart = this.cartState().cnt
  }
})
</script>

<style scoped>
.contentWrap{
  margin-top: 50px;
  margin-bottom: 50px;
}
.check {
  display: flex;
}
.check .icon{
  font-size: 20px;
  float: left;
}
.check p{
  margin: 0 0 0 10px;
}
.qtyWrap{
  display: flex;
  vertical-align: middle;
  align-items: center;
  margin-right: 10px;
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
  border-radius: 50px;
  border: none;
}

@media (max-width: 950px) {
}
@media (max-width: 600px) {
  h1{
    letter-spacing: normal;
    line-height: normal;
    font-weight: 500;
  }
  .counterBody input{
    max-width: 50px;
  }
}
</style>