
<template>
  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="mainProduct grid grid181">
      <div>&nbsp;</div>
      <div v-if="!result.done" class="grid grid2" v-for="product in products()">
        <div>
          <div class="photoSlider">
            <div class="display">
              <div class="slide active" v-show="product && product.images.findIndex(row => row.on) < 0">
                <TheaterMainAuto
                    class="video1"
                    :name="'main'"
                    :test="true"
                    :bg-mode="'cover'"
                    :style="{}"
                    :scroll-event="scroll.event"
                    :height="'500px'">
                </TheaterMainAuto>
              </div>
              <div :class="{'slide': true, 'active': row.on}"
                   v-for="row in product.images"
                   :style="{'background-image': 'url(' + row.url + ')'}"
              ></div>
            </div>
            <div class="controlWrap">
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

        <div style="padding: 0 15px; max-width: 600px;">
          <div v-if="product && product.price">
            <div>
              <h1>{{product.title}}</h1>
              <div class="price">{{ bundles.FROM }} {{ targetPrice(product) }}</div>
              <div>
              <span class="pointer" @click="product.expandText = !product.expandText">
                {{bundles.DETAILS}}
                <font-awesome-icon v-if="!product.expandText" :icon="['fas', 'arrow-right']" />
                <font-awesome-icon v-if="product.expandText" :icon="['fas', 'arrow-down']" />
              </span>
                <div v-if="product.expandText" v-html="product.text"></div>
              </div>
            </div>

            <hr/>

            <div class="formBlock">
              <h2>{{bundles.LOUPES}}:</h2>
              <div>
                <div v-for="row in lopes()"
                     @click="toggleProduct(row)"
                     :class="{'grid grid2 force pointer additional': true, 'active': hasProduct(row)}">
                  <div>{{row.short}}</div>
                  <div class="right">+{{ targetPrice(row) }}</div>
                </div>
              </div>
            </div>

            <hr/>

            <div v-if="summary.hasLoops">
              <div class="formBlock">
                <h3 style="margin-bottom: 40px;">{{bundles.IPD}}</h3>
                <Slider :min="ipd.min"
                        :max="ipd.max"
                        @update="updateSummary"
                        v-model="summary.ipd"></Slider>
              </div>

              <hr/>

              <div class="formBlock">
                <h3>
                  <label for="subscribeNews">{{bundles.WARE_PROGRESSIVE_GLASS}}
                    <input type="checkbox" @change="updateSummary" v-model="summary.wear_glass" id="subscribeNews"/></label>
                </h3>
                <div v-if="summary.wear_glass">
                  <p style="margin-bottom: 40px;">{{bundles.WARE_PROGRESSIVE_GLASS_YEARS}}</p>
                  <Slider :min="glass_wear.min"
                          :max="glass_wear.max"
                          @update="updateSummary"
                          v-model="summary.glass_year"></Slider>
                </div>
              </div>

              <hr/>
            </div>

            <div class="formBlock">
              <h3>{{bundles.LIGHT_FILTERS}}</h3>
              <div>
                <div v-for="row in filters()"
                     @click="toggleProduct(row)"
                     :class="{'grid grid21 force pointer additional': true, 'active': hasProduct(row)}">
                  <div>{{row.title}}</div>
                  <div class="right">
                    <span v-if="!product.free.includes(row.link)">+{{ targetPrice(row) }}</span>
                    <span v-if="product.free.includes(row.link)" class="included">{{bundles.INCLUDED}}</span>
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
                <input class="packageQuantity"
                       type="number"
                       min="1"
                       max="10000"
                       @wheel="updateSummary()"
                       @change="updateSummary()"
                       @keyup="updateKeyDown($event)" v-model="summary.quantity">
              </div>
            </div>

            <hr/>

            <div class="formBlock">
              <h3>{{bundles.SUMMARY}}</h3>
              <div class="grid grid2 force summaryData">
                <div>{{bundles.PACKAGE}}</div>
                <div class="right sum" v-if="summary.quantity>1">
                  {{ summary.quantity }} x {{ sumAndCurrencyPrice(product.price, product.currency) }}
                </div>
                <div class="right sum" v-if="summary.quantity<=1">{{ sumAndCurrencyPrice(product.price, product.currency) }}</div>
              </div>
              <div class="grid grid2 force summaryData">
                <div>{{ summary.loopsTitle }}</div>
                <div class="right sum" v-if="summary.loopsAmount && summary.quantity>1">
                  {{ summary.quantity }} x {{ sumAndCurrencyPrice(summary.loopsAmount, product.currency) }}
                </div>
                <div class="right sum" v-if="summary.loopsAmount && summary.quantity<=1">
                  {{ sumAndCurrencyPrice(summary.loopsAmount, product.currency) }}
                </div>
              </div>

              <div class="grid grid2 force summaryData" v-for="row in summary.filters">
                <div>{{ row.title }}</div>
                <div class="right sum" v-if="summary.quantity>1">{{ summary.quantity }} x
                  {{ targetPrice(row) }}
                </div>
                <div class="right sum" v-if="summary.quantity<=1">{{ targetPrice(row) }}</div>
              </div>
              <div class="grid grid2 force summaryData" v-if="false">
                <div>{{ bundles.SUBTOTAL }}</div> <div class="right sum">{{
                  sumAndCurrencyPrice(summary.total, product.currency)
                }}</div>
              </div>
              <div class="grid grid2 force summaryData">
                <div>{{ bundles.TOTAL }}</div> <div class="right sum">{{
                  sumAndCurrencyPrice(summary.total, product.currency)
                }}</div>
              </div>
            </div>

            <div class="formBlock" @click="submitSummary()" style="margin: 2em 0;">
              <button class="btn bigGray">{{bundles.ADD_TO_CART}}</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="result.done">
        <div class="doneBlock centered">
          <div class="content center">
              <p>{{bundles.CART_GOTO_CART_DESCR}}</p>
              <button class="btn" @click="openCart()">{{bundles.CART_GOTO_CART}}</button>
              <br/>
              <p>{{bundles.OR}}</p>
              <button class="btn nowrap" @click="newPackage()">{{bundles.NEW_PACKAGE}}</button>
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
import type {Image, MainProduct, NamePrice, Product} from "@/store/shop/types";
import {cartStore} from "@/store/cart/cart";
import TheaterMainAuto from "@/components/TheaterMainAuto.vue";
import shopTextBundles from "@local/shop_text.json";
import Slider from '@vueform/slider'
import {convertAndPrintPrice, convertTargetPrice} from "@/service/PriceService";
import Modal from "@/components/Modal.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";

const LOCAL_STORE_SUMMARY_NAME = "summary"
export default defineComponent({
  components: {
    FeedbackForm, Modal,
    Slider,
    TheaterMainAuto,
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
      ipd:{
        min: 55,
        max: 72,
        def: 65
      },
      glass_wear: {
        min: 1,
        max: 25,
        def: 15
      },
      result: {
        done: false,
        msg: ""
      },
      summary: {
        total: 0,
        billumixAmount: 0,
        loopsAmount: 0,
        filtersAmount: 0,
        loopsTitle: "",
        quantity: 1,
        hasLoops: false,
        filters: [] as NamePrice[],
        products: [] as string[],
        ipd: 0,
        glass_year: 0,
        wear_glass: false
      }
    }
  },
  methods: {
    newPackage(){
      window.scrollTo(0,10)
      this.result.done = false
    },
    openCart(){
      window.scrollTo(0,10)
      this.cartStore.open()
    },
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
    updateKeyDown(event: any): void {
      if(this.summary.quantity && this.summary.quantity>0){
        this.updateSummary()
      }
    },
    submitSummary(): void {
      if(this.product){
        this.summary.products.forEach((link: string) => {
          let productAdditional = this.shopStore.getItem(link)
          if(productAdditional.need && productAdditional.need.length>0){
            productAdditional.need.forEach(need => {
              if(need.name === "ipd"){
                need.val = this.summary.ipd
              }
              if(need.name === "glass"){
                need.val = this.summary.glass_year
              }
            })
          }
          this.cartStore.toCart(productAdditional.link, this.summary.quantity, productAdditional.need)
        })
        this.product.ipd = this.summary.ipd
        this.product.glassYear = 0
        if(this.summary.wear_glass){
          this.product.glassYear = this.summary.glass_year
        }
        this.cartStore.toCart(this.product.link, this.summary.quantity, this.product)
        localStorage.removeItem(LOCAL_STORE_SUMMARY_NAME)
        this.result.done = true
        window.scroll(0,0)
        // location.reload()
      }
    },
    updateSummary(): void {
      this.result.done = false
      if(this.product && this.summary.quantity >= 0){
        this.summary.loopsTitle = this.getSummaryWithLopes()
        this.summary.billumixAmount = this.product.price
        this.summary.loopsAmount = this.getLoopsSum()
        this.summary.filtersAmount = this.getFiltersSum()
        this.summary.hasLoops = false
        this.summary.total = (this.summary.billumixAmount + this.summary.loopsAmount + this.summary.filtersAmount) * this.summary.quantity
        this.lopes().forEach((row: Product) => {
          if(!this.summary.hasLoops && this.hasProduct(row)){
            this.summary.hasLoops = true
          }
        })
        localStorage.setItem(LOCAL_STORE_SUMMARY_NAME, JSON.stringify(this.summary))
      }
    },
    hasProduct(row: Product): boolean {
      if(this.product) {
        return (this.summary.products.includes(row.link) || this.product.free.includes(row.link))
      }
      return false
    },
    getLoopsSum(): number {
      let res = 0;
      this.lopes().forEach((row: Product) => {
        if(this.hasProduct(row)){
          res += row.price
        }
      })
      return res
    },
    getSummarySum(): number {
      let res = 0;

      if(this.product && this.product.price){
        res += this.product.price
        this.summary.products.forEach((link: string) => {
          let found = this.shopStore.getItem(link)
          if(found && found.price>0){
            res += found.price
          }
        })
      }
      return res;
    },
    getFiltersSum(): number {
      let res = 0;
      this.summary.filters = []
      if(this.product && this.product.price){
        this.filters().forEach((row: Product) => {
          if(this.summary?.products.includes(row.link)){
            this.summary.filters.push({
              title: row.title,
              price: row.price,
              currency: row.currency
            })
            res += row.price
          }
        })
      }
      return res;
    },
    getSummaryWithLopes(): string {
      let res = this.bundles.WITHOUT_LOOPS;
      if(this.product && this.summary.products && this.summary.products.length > 0){
        let parts = [] as string[]
        this.lopes().forEach((row:Product) => {
          if(this.summary.products.includes(row.link)){
            parts.push(row.short)
          }
        })
        if(parts.length === 1){
          res = this.bundles.WITH + " " + this.bundles.LOUPE + " (" +parts.join(", ") + ")";
        }
        if(parts.length > 1){
          res = this.bundles.WITH + " " + this.bundles.LOUPES + " (" +parts.join(", ") + ")";
        }
      }
      return res;
    },
    products(): MainProduct[] {
      return this.shopStore.getMain
    },
    lopes(): Product[] {
      return this.shopStore.getLoupes
    },
    filters(): Product[] {
      return this.shopStore.getFilters
    },
    toggleProduct(row: Product): void{
      if(this.product?.free.includes(row.link)){
        return;
      }
      let ind = this.summary?.products.indexOf(row.link)??-1
      if (ind >= 0){
        this.summary?.products.splice(ind, 1)
      }else{
        this.summary?.products.push(row.link)
      }
      this.updateSummary()
    },
    targetPrice(target: NamePrice): string{
      return convertTargetPrice(target)
    },
    sumAndCurrencyPrice(price: number, currency: string): string{
      return convertAndPrintPrice(price, currency)
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
    window.scroll(0,0)
    this.product = this.shopStore.getMainByLink(this.$route.params.link)
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousewheel', this.handleScroll);
    this.currentImage = this.product.images[0];

    let summaryJSON = localStorage.getItem(LOCAL_STORE_SUMMARY_NAME)
    if(summaryJSON && summaryJSON.length > 10){
      let temp = JSON.parse(summaryJSON)
      if(temp.quantity){
        this.summary = temp
      }
    }
    this.updateSummary()
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
}
.mainProduct h1{
  letter-spacing: normal;
}
.mainProduct h3{
  letter-spacing: normal;
  text-transform: uppercase;
}
.mainProduct .included{

  text-transform: uppercase;
}
.price{
  margin: 0;
  font-family: Rubik, sans-serif;
  font-weight: 700;
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

.additional{
  border-radius: 20px;
  border: #d4d4d4 1px solid;
  margin-bottom: 10px;
  text-transform: uppercase;
  transition: .25s;
}
.additional:hover{
  background: #f5f5f5;
  border-color: #d4d4d4;
}

.additional.active{
  background: #ededed;
  border-color: #8e8e8e;
}

.additional div{
  display: flex;
  justify-content: left;
  vertical-align: middle;
  align-items: center;
  padding: 20px 10px;
  text-align: left;
}
.additional div:last-child{
  display: flex;
  justify-content: right;
  vertical-align: middle;
  text-align: right;
}
.packageQuantity{
  padding: 10px 20px;
  border: #ccc 1px solid;
  border-radius: 7px;
  width: -webkit-fill-available;
}
.sum{
  font-weight: 500;
}
.summaryData{
  margin-bottom: 25px;
}

.doneBlock{
  min-height: 80vh;
}

.doneBlock .close{
  position: absolute;left: 0;
}
.doneBlock .content{
  background-color: white;
  height: 250px;
  width: 250px;
  margin: auto;
  border-radius: 50%;
}
@media (max-width: 450px) {
  .doneBlock .content {
    width: 100%;
    padding: 0 5%;
  }
}
</style>