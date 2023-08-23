
<template>
  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="contentBody">
      <div class="grid grid2" v-for="product in products()">
        <div>
          &nbsp;
        </div>
        <div>
          <h1>{{product.title}}</h1>
          <div class="price">From {{pricePrint(product.price)}}</div>
          <div>
            <span class="pointer" @click="product.expandText = !product.expandText">
              Details
              <font-awesome-icon v-if="!product.expandText" :icon="['fas', 'arrow-right']" />
              <font-awesome-icon v-if="product.expandText" :icon="['fas', 'arrow-down']" />
            </span>
            <div v-if="product.expandText" v-html="product.text"></div>
          </div>
        </div>
        <h1>LOUPES:</h1>
        <div>
          <div v-for="row in loops()"
               @click="row.on = !row.on"
               :class="{'grid grid2 force pointer additional': true, 'active': row.on}">
            <div>{{row.short}}</div>
            <div class="right">+{{pricePrint(row.price)}}</div>
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
      currentImage: undefined as Image|undefined,
      form: {
        cart: 0,
        count: 1,
        link: undefined as string|undefined
      }
    }
  },
  methods: {
    products(): Product[] {
      return this.shopStore.getMain
    },
    loops(): Product[] {
      return this.shopStore.getLoupes
    },
    pricePrint(val: number): string{
      return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(val)
    },
    addToCart(product: Product){
      if(this.form.count === 0){
        this.form.count = 1
      }
      this.cartStore.toCart(product.link, this.form.count)
    }
  },
  unmounted () {
  },
  mounted(){
    this.product = this.shopStore.getItem(this.$route.params.link)
    this.currentImage = this.product?.images[0];
    this.form.cart = cartStore.cnt
  }
})
</script>

<style>
#app{
  background: #fff !important;
}
</style>
<style scoped>
.price{
  margin: 0;
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

.additional{
  border-radius: 20px;
  border: #8c8080 1px solid;
  margin-bottom: 10px;
}
.additional:hover{
  background: #f5f5f5;
}

.additional.active{
  background: #ededed;
}

.additional div{
  display: flex;
  text-align: right;
  justify-content: left;
  vertical-align: center;
  align-items: center;
  padding: 20px;
}
.additional div:last-child{
  display: flex;
  justify-content: right;
  vertical-align: middle;
  text-align: right;
}

@media (max-width: 950px) {
  .contentBody{
    margin: 120px 10% 10% 10%;
  }
}
</style>