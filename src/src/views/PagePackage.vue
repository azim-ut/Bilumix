
<template>
  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="contentBody mainProduct grid grid181">
      <div>&nbsp;</div>
      <div class="grid grid2" v-for="product in products()">
        <div>
          <div class="photoSlider">
            <div class="display">
              <div class="slide active" v-show="product && product.images.findIndex(row => row.on) < 0">
                <TheaterMainWheel
                    class="video1"
                    :name="'main'"
                    :test="true"
                    :bg-mode="'cover'"
                    :style="{}"
                    :scroll-event="scroll.event"
                    :height="500">
                </TheaterMainWheel>
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

        <div style="padding: 0 15px;">
          <div v-if="product && product.price && summary.amount > 1">
            <div>
              <h1>{{product.title}}</h1>
              <div class="price">From {{ targetPrice(product) }}</div>
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
                <h3>{{bundles.IPD}}</h3>
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
                  <p>{{bundles.WARE_PROGRESSIVE_GLASS_YEARS}}</p>
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
                <input class="packageQuantity" @change="updateSummary()" @keyup="updateKeyDown($event)" v-model="summary.quantity">
              </div>
            </div>

            <hr/>

            <div class="formBlock">
              <h3>{{bundles.SUMMARY}}</h3>
              <div class="summaryData">
                <div>BiLumix Package</div>
              </div>
              <div class="grid grid2 force summaryData">
                <div>{{ summary.loopsTitle }}</div> <div class="right bold">{{ sumAndCurrencyPrice(summary.amount, product.currency) }}</div>
              </div>
              <div class="grid grid2 force summaryData" v-for="row in summary.filters">
                <div>{{ row.title }}</div>
                <div class="right bold" v-if="summary.quantity>1">{{ summary.quantity }} x
                  {{ targetPrice(row) }} =
                  {{ sumAndCurrencyPrice(row.price * summary.quantity, row.currency) }}</div>
                <div class="right bold" v-if="summary.quantity<=1">{{ targetPrice(row) }}</div>
              </div>
              <div class="grid grid2 force summaryData">
                <div>{{ bundles.SUBTOTAL }}</div> <div class="right bold">{{ sumAndCurrencyPrice(summary.amount, product.currency) }}</div>
              </div>
              <div class="grid grid2 force summaryData">
                <div>{{ bundles.TOTAL }}</div> <div class="right bold">{{ sumAndCurrencyPrice(summary.amount, product.currency) }}</div>
              </div>
            </div>

            <div class="formBlock" @click="submitSummary()" style="margin: 2em 0;">
              <button class="btn bigGray">{{bundles.ADD_TO_CART}}</button>
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
import type {Image, MainProduct, NamePrice, Product} from "@/store/shop/types";
import {cartStore} from "@/store/cart/cart";
import TheaterMainWheel from "@/components/TheaterMainWheel.vue";
import TheaterWheelVideo1 from "@/components/TheaterWheelVideo1.vue";
import shopTextBundles from "@local/shop_text.json";
import Slider from '@vueform/slider'
import {getPriceAndCurrency, getPriceTarget} from "@/service/PriceService";

const LOCAL_STORE_SUMMARY_NAME = "summary"
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
      summary: {
        amount: 0,
        filtersAmount: [],
        loopsTitle: "",
        quantity: 1 as number,
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
          let product = this.shopStore.getItem(link)
          this.cartStore.toCart(product.link, this.summary.quantity, null)
        })
        this.product.ipd = this.summary.ipd
        this.product.glassYear = 0
        if(this.summary.wear_glass){
          this.product.glassYear = this.summary.glass_year
        }
        this.cartStore.toCart(this.product.link, this.summary.quantity, this.product)
      }

      localStorage.removeItem(LOCAL_STORE_SUMMARY_NAME)
      location.reload()
    },
    updateSummary(): void {
      this.summary.loopsTitle = this.getSummaryWithLopes()
      this.summary.amount = this.getSummarySum() * this.summary.quantity
      this.summary.filtersAmount = this.getFiltersSum() * this.summary.quantity
      this.summary.hasLoops = false
      this.lopes().forEach((row: Product) => {
        if(!this.summary.hasLoops && this.hasProduct(row)){
          this.summary.hasLoops = true
        }
      })
      console.log(this.summary.ipd, this.summary.glass_year)
      localStorage.setItem(LOCAL_STORE_SUMMARY_NAME, JSON.stringify(this.summary))
    },
    hasProduct(row: Product): boolean {
      if(this.product) {
        return (this.summary.products.includes(row.link) || this.product.free.includes(row.link))
      }
      return false
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
              title: row.short,
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
          res = this.bundles.WITH + " " + parts.join(" + ") + " " + this.bundles.LOUPE;
        }
        if(parts.length > 1){
          res = this.bundles.WITH + " " + parts.join(" + ") + " " + this.bundles.LOUPES;
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
      return getPriceTarget(target)
    },
    sumAndCurrencyPrice(price: number, currency: string): string{
      return getPriceAndCurrency(price, currency)
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
    console.log(this.$route.params.link)
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
  font-size: x-large;
  width: -webkit-fill-available;
}
.summaryData{
  font-size: large;
}
@media (max-width: 950px) {
  .contentBody{
    margin: 57px 0 10%;
  }
}
</style>