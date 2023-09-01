
<template>
  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="promo">
      <div class="promoContent">
        <h1>Shop BiLumix</h1>
        <div>
          <button class="emphasized-button" @click="toPackagePage()">{{ bundles.BUILD_YOUR_PACKAGE }}</button>
        </div>
        <div class="scndblk">
          <h3 class="textmlty">{{ bundles.ORDER_NOW }}</h3>
        </div>
      </div>
    </div>

    <div class="">
        <div class="grid grid141 center">
          <div></div>
          <div class="textContent">
            <a id="loupes"><h2>{{bundles.LOUPES}}</h2></a>
            <p>{{bundles.LOUPES_TEXT}}</p>
          </div>
          <div></div>
        </div>
      <div class="shopList grid grid3">
        <div v-for="product in shopStore.loupes"
             class="product"
             :id="product.link+'ID'"
        >
          <div class="productBody">
            <div class="title">{{product.short}} Loupe</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
                 @mousemove="transforms($event, product.link+'ID')"
                 @mouseout="clearTransform($event, product.link+'ID')"
            ></div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">{{ bundles.DETAILS }}</button>
              <button class="emphasized-button" @click="toCart(product.link)">{{ bundles.ADD_TO_CART_SHORT }}</button>
            </div>
            <div class="price">${{product.price}}</div>
          </div>
        </div>
      </div>


      <div class="grid grid141 center">
        <div></div>
        <div class="textContent">
          <a id="accessories"><h2>{{bundles.ACCESSORIES}}</h2></a>
          <p>{{bundles.LOUPES_TEXT}}</p>
        </div>
        <div></div>
      </div>
      <div class=" shopList grid grid3">
        <div v-for="product in shopStore.accessories"
             :id="product.link+'ID'"
             class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
                 @mousemove="transforms($event, product.link+'ID')"
                 @mouseout="clearTransform($event, product.link+'ID')"
            ></div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">{{ bundles.DETAILS }}</button>
            </div>
            <div class="price">${{product.price}}</div>
          </div>
        </div>
      </div>

      <div class="grid grid141 center">
        <div></div>
        <div class="textContent">
          <a id="parts"><h2>{{bundles.REP_PARTS}}</h2></a>
          <p>{{ bundles.REP_PARTS_TEXT }}</p>
        </div>
        <div></div>
      </div>
      <div class=" shopList grid grid3">
        <div v-for="product in shopStore.parts"
             :id="product.link+'ID'"
             class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
                 @mousemove="transforms($event, product.link+'ID')"
                 @mouseout="clearTransform($event, product.link+'ID')"
            ></div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">{{ bundles.DETAILS }}</button>
            </div>
            <div class="price">${{product.price}}</div>
          </div>
        </div>
      </div>

      <div class="grid grid141 center">
        <div></div>
        <div class="textContent">
          <a id="repair"><h2>{{ bundles.REPAIR_TITLE }}</h2></a>
        </div>
        <div></div>
      </div>
      <div class="shopList grid grid3">
        <div v-for="product in shopStore.repair"
             :id="product.link+'ID'"
             class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
            ></div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">Details</button>
            </div>
            <div class="price">${{product.price}}</div>
          </div>
        </div>
    	</div>

      <div class="grid grid141 center">
        <div></div>
        <div class="textContent">
          <a id="repair"><h2>{{bundles.GENERATION_TITLE}}</h2></a>
        </div>
        <div></div>
      </div>
      <div class="shopList grid grid3">
        <div v-for="product in getGeneration()"
             :id="product.link+'ID'"
             class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="imageWrap">
              <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
              ></div>
            </div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">{{bundles.DETAILS}}</button>
            </div>
            <div class="price">${{product.price}}</div>
          </div>
        </div>
    	</div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">

import {defineComponent} from "vue"
import RoundedBlackBox from "@/components/RoundedBlackBox.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/components/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";
import {mapStores} from "pinia";
import {cartStore} from "@/store/cart/cart";
import {shopStore} from "@/store/shop/shop";
import type {Product} from "@/store/shop/types";
import shopTextBundles from "@local/shop_text.json";

export default defineComponent({
  computed:{
    ...mapStores(cartStore, shopStore)
  },
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, RoundedBlackBox},
  data() {
    return {
      bundles: shopTextBundles,
      constraint: 150
    }
  },
  methods: {
    toPackagePage(){
      this.$router.push({name: "package", params: {link: "headlamp"}})
    },
    toCart(link:string){
      this.cartStore.toCart(link, 1, null)
    },
    getGeneration():Product[]{
      return this.shopStore.getGeneration
    },
    transforms(event: any, id:string): void {
      let target = document.getElementById(id)
      let rotateX = this.calcRotateX(target, event.clientX);
      let rotateY = this.calcRotateY(target, event.clientY);

      if(target){
        let ttl = <HTMLElement> target.getElementsByClassName("title")[0]
        let img = <HTMLElement> target.getElementsByClassName("image")[0]
        let tools = <HTMLElement> target.getElementsByClassName("tools")[0]
        let price = <HTMLElement> target.getElementsByClassName("price")[0]
        if(ttl){
          let ttlRotateX = rotateX/2
          let ttlRotateY = rotateY/2
          ttl.style.transform = "perspective(10px) "
              + "rotateX("+ ttlRotateX +"deg) "
              + "rotateY("+ -ttlRotateY +"deg) ";
        }
        if(img){
          let imgRotateX = rotateX/2
          let imgRotateY = rotateY/2
          img.style.transform = "perspective(10px) "
              + "rotateX("+ imgRotateX +"deg) "
              + "rotateY("+ imgRotateY +"deg) ";
        }
        if(tools){
          let toolsRotateX = rotateX
          let toolsRotateY = rotateY/2
          tools.style.transform = "perspective(10px) "
              + "rotateX("+ toolsRotateX +"deg) "
              + "rotateY("+ -toolsRotateY +"deg) ";
        }
        if(price){
          let priceRotateX = rotateX/2
          let priceRotateY = rotateY/2
          price.style.transform = "perspective(10px) "
              + "rotateX("+ priceRotateX +"deg) "
              + "rotateY("+ priceRotateY +"deg) ";
        }
      }
    },
    clearTransform(event: any, id:string): void {
      let target = document.getElementById(id)
      if(target){
        let ttl = <HTMLElement> target.getElementsByClassName("title")[0]
        let img = <HTMLElement> target.getElementsByClassName("image")[0]
        let tools = <HTMLElement> target.getElementsByClassName("tools")[0]
        let price = <HTMLElement> target.getElementsByClassName("price")[0]
        if(ttl){
          ttl.style.transform = "perspective(10px) rotateX(0deg) rotateY(0deg)";
        }
        if(img){
          img.style.transform = "perspective(10px) rotateX(0deg) rotateY(0deg)";
        }
        if(tools){
          tools.style.transform = "perspective(10px) rotateX(0deg) rotateY(0deg)";
        }
        if(price){
          price.style.transform = "perspective(10px) rotateX(0deg) rotateY(0deg)";
        }
      }
    },
    calcRotateX(target: any, x: number){
      let rect = target.getBoundingClientRect()
      return (x - rect.x - (rect.width / 2)) / this.constraint
    },
    calcRotateY(target: any, y: number){
      let rect = target.getBoundingClientRect()
      return (y - rect.y - (rect.height / 2)) / this.constraint
    },
    toDetails(link: string){
      this.$router.push({name: "shopItem", params: {link: link}})
    }
  },
  unmounted () {
  },
  mounted(){
  }
})
</script>

<style scoped>
.contentWrap{
  background: #f5f5f7;
  padding-bottom: 150px;
}

.contentWrap .promo{
  min-height: 100vh;
  margin-bottom: 50px;
  display: flex;
  vertical-align: middle;
  align-items: center;
  background: #171717 no-repeat center center;
  position: relative;
}

.contentWrap .textContent{
  margin-top: 20px;
}

.contentWrap .promo::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: .1;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  background: #171717 url(/images/static/top-light-on-1024-819.png) no-repeat calc(50% + 200px) calc(50% + 200px)/cover;
}

.contentWrap .promo .promoContent{
  margin: auto;
  text-align: center;
}

.contentWrap .promo .promoContent h1{
  letter-spacing: normal;
  margin: 40px auto 20px;
  color: #fff;
}

.contentWrap .promo .promoContent h3{
  text-transform: uppercase;
  font-size: large;
}

.contentWrap .promo button{
  font-size: large;
  padding: 30px 20px;
  background: #d1d1d1;
  cursor: pointer;
  color: #404040;
  text-transform: uppercase;
  z-index: 2;
}
.contentWrap .promo button:hover{
  background: #fff;
}
.contentWrap .promo .scndblk{
  max-width: unset;
  width: 100%;
  background: linear-gradient(90deg,#2ee8dc 0,#05b4ff 50%,#2d66eb);
  background: -webkit-gradient(linear,left top,right top,from(#2ee8dc),color-stop(50%,#05b4ff),to(#2d66eb));
  -webkit-background-clip: text;
  justify-content: center;
  font-size: 36px;
  font-weight: 400;
  margin: 0;

}
.contentWrap .promo .textmlty{
  text-shadow: none!important;
  font-family: Rubik,sans-serif;
}

.contentWrap .promo h3{
  font-size: 35px;
  font-weight: 600;
  max-width: 600px;
  background: #2ee8dc;
  background: -moz-linear-gradient(to right,#2ee8dc 0,#05b4ff 50%,#2d66eb 100%);
  background: -webkit-gradient(linear,left top,right top,from(#2ee8dc),color-stop(50%,#05b4ff),to(#2d66eb));
  background: -moz-linear-gradient(left,#2ee8dc 0,#05b4ff 50%,#2d66eb 100%);
  background: linear-gradient(90deg,#2ee8dc 0,#05b4ff 50%,#2d66eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: .8rem;
  letter-spacing: 2px;
  margin: auto;
}

h2{
  letter-spacing:normal;
}
.shopList .product{
  display: flex;
  vertical-align: middle;
  transition: .2s;
}
.shopList .product .productBody{
  margin: 30px auto 0;
  position: relative;
  background: transparent;
  transition: .2s;
}
.shopList .product .productBody .title{
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: -14px;
  font-size: large;
  transition: .2s;
  z-index: 100;
}
.shopList .product .productBody .price{
  margin-top: 20px;
  text-align: center;
  transition: .2s;
}
.shopList .product .tools{
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
}
.shopList .product .productBody .image{
  width: 320px;
  height: 280px;
  background: #fff no-repeat center center/cover;
  border-radius: 40px;
  transition: .2s;
}

.productBody:hover {
  transform: translateZ(-80px);
}
.emphasized-button{
  margin: 0 10px 0;
  border: none;
  height: 30px;
  position: relative;
  font-size: 15px;
  line-height: 0;
  width: auto;
  top: -20px;
  bottom: 30px;
}
</style>