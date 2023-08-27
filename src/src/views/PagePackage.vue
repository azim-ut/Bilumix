
<template>
  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="contentBody mainProduct">
      <div>&nbsp;</div>
      <div class="grid grid2" v-for="product in products()">
        <div>
          <TheaterMainWheel
              class="video1"
              :name="'main'"
              :test="true"
              :bg-mode="'cover'"
              :style="{}"
              :scroll-event="scroll.event"
              :height="500">
          </TheaterMainWheel>
          &nbsp;
        </div>
        <div v-if="product && product.price && getSummarySum()>1">
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

          <hr/>

          <div class="formBlock">
            <h2>LOUPES:</h2>
            <div>
              <div v-for="row in loops()"
                   @click="toggleLoops(row)"
                   :class="{'grid grid2 force pointer additional': true, 'active': row.on}">
                <div>{{row.short}}</div>
                <div class="right">+{{pricePrint(row.price)}}</div>
              </div>
            </div>
          </div>

          <hr/>

          <div v-if="form.hasLoops">
            <div class="formBlock">
              <h3>{{bundles.IPD}}</h3>
              <Slider :min="form.ipd.min" :max="form.ipd.max" v-model="form.ipd.val"></Slider>
            </div>

            <hr/>

            <div class="formBlock">
              <h3>
                <label for="subscribeNews">{{bundles.WARE_PROGRESSIVE_GLASS}} <input type="checkbox" v-model="form.progressive_glass.yes" id="subscribeNews"/></label>
              </h3>
              <div v-if="form.progressive_glass.yes">
                <p>{{bundles.WARE_PROGRESSIVE_GLASS_YEARS}}</p>
                <Slider :min="form.progressive_glass.min" :max="form.progressive_glass.max" v-model="form.progressive_glass.val"></Slider>
              </div>
            </div>

            <hr/>
          </div>

          <div class="formBlock">
            <h3>{{bundles.LIGHT_FILTERS}}</h3>
            <div>
              <div v-for="row in product.filters"
                   @click="toggleAdditionalProduct(row)"
                   :class="{'grid grid21 force pointer additional': true, 'active': row.included}">
                <div>{{row.title}}</div>
                <div class="right">
                  <span v-if="row.price">+{{pricePrint(row.price)}}</span>
                  <span v-if="!row.price" class="included">{{bundles.INCLUDED}}</span>
                </div>
              </div>
            </div>
          </div>

          <hr/>

          <div class="formBlock">
            <h3>{{bundles.WARRANTY}}</h3>
            <div>
              <div :class="{'grid grid21 force pointer additional': true, 'active': (product.warranty == 1)}">
                <div>{{bundles.WARRANTY_1YEAR}}</div>
                <div class="right included">{{bundles.INCLUDED}}</div>
              </div>
            </div>
          </div>

          <hr/>

          <div class="formBlock">
            <h3>{{bundles.QUANTITY}}</h3>
            <div>
              <input v-model="form.quantity">
            </div>
          </div>

          <hr/>

          <div class="formBlock">
            <h3>{{bundles.SUMMARY}}</h3>
            <div>
              $ {{getSummarySum()}}
            </div>
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
import type {AdditionalProduct, Image, MainProduct, Product} from "@/store/shop/types";
import {cartStore} from "@/store/cart/cart";
import TheaterMainWheel from "@/components/TheaterMainWheel.vue";
import TheaterWheelVideo1 from "@/components/TheaterWheelVideo1.vue";
import shopTextBundles from "@local/shop_text.json";
import Slider from '@vueform/slider'

export default defineComponent({
  components: {
    Slider,
    TheaterWheelVideo1,
    TheaterMainWheel,
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
  computed: {
    ...mapStores(shopStore, cartStore)
  },
  data() {
    return {
      scroll: {
        event: undefined
      },
      bundles: shopTextBundles,
      product: null as MainProduct | null,
      currentImage: undefined as Image|undefined,
      form: {
        quantity: 1,
        hasLoops: false,
        ipd:{
          min: 55,
          max: 72,
          val: 63
        },
        cart: 0,
        count: 1,
        filters: [],
        progressive_glass: {
          min: 1,
          max: 25,
          yes: false,
          val: 5
        },
        link: undefined as string|undefined
      }
    }
  },
  methods: {
    getSummarySum(): number {
      let res = 0;
      if(this.product && this.product.price){
        res += this.product.price * this.form.quantity
        this.product.battery.forEach(row => {
          if(row.price && row.included){
            res += row.price
          }
        })
        this.product.filters.forEach(row => {
          if(row.price && row.included){
            res += row.price
          }
        })
        this.product.products.forEach(link => {
          let found = this.shopStore.getItem(link)
          if(found && found.price>0){
            res += found.price
          }
        })
      }
      return res;
    },
    toggleLoops(row: Product): void {
      if(this.product){
        let ind = this.product.products.indexOf(row.link)
        if(ind >= 0){
          this.product.products.splice(ind, 1)
        }else{
          this.product.products.push(row.link)
        }
        row.on = this.product?.products.includes(row.link)
        this.form.hasLoops = this.product?.products.length>0
      }
    },
    products(): MainProduct[] {
      return this.shopStore.getMain
    },
    loops(): Product[] {
      return this.shopStore.getLoupes
    },
    toggleAdditionalProduct(row: AdditionalProduct): void{
      if(row.edit){
        row.included = !row.included
      }
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
    },
    handleScroll(event: any){
      this.scroll.event = event
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousewheel', this.handleScroll);
  },
  mounted(){
    this.product = this.shopStore.getMainByLink(this.$route.params.link)
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousewheel', this.handleScroll);
    this.currentImage = this.product.images[0];
  }
})
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
#app{
  background: #fff !important;
}
</style>
<style scoped>
hr{
  margin: 40px 0px;
  flex-shrink: 0;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
}
.mainProduct {
  margin: 100px 50px;
}
.mainProduct h1{
  letter-spacing: normal;
  font-size: xxx-large;
}
.mainProduct h3{
  letter-spacing: normal;
  font-size: x-large;
  text-transform: uppercase;
}
.mainProduct .included{

  text-transform: uppercase;
}
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
  text-transform: uppercase;
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