<script setup lang="ts">
import {shopStore, shopStore as sStore} from '@/store/shop/shop'
import {cartStore} from "@/store/cart/cart";

const shopStore = sStore()
</script>

<template>
  <HeadMenu :key="$route.path" />
  <div class="contentWrap">
    <div class="contentBody">
      <div class="textContent">
        <a id="loupes"><h1>Loupes</h1></a>
        <p>loupes can be easily mounted on BiLumix headlamp, Find the right working distance to maintain a correct posture.</p>
      </div>
      <div class="shopList grid grid3">
        <div v-for="product in shopStore.loupes"
             class="product"
             :id="product.link+'ID'"
        >
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
                 @mousemove="transforms($event, product.link+'ID')"
            ></div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">Details</button>
              <button class="emphasized-button" @click="toCart(product.link)">Add to cart</button>
            </div>
            <div class="price">${{product.price}}</div>
          </div>
        </div>
      </div>


      <div class="textContent">
        <a id="accessories"><h1>Accessories</h1></a>
      </div>
      <div class="contentBody shopList grid grid3">
        <div v-for="product in shopStore.accessories"
             :id="product.link+'ID'"
             class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
                 @mousemove="transforms($event, product.link+'ID')"
            ></div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">Details</button>
            </div>
            <div class="price">${{product.price}}</div>
          </div>
        </div>
      </div>

      <div class="textContent">
        <a id="parts"><h1>Replaceable Parts</h1></a>
        <p>When you need extra parts, we got them ready.</p>
      </div>
      <div class="contentBody shopList grid grid3">
        <div v-for="product in shopStore.parts"
             :id="product.link+'ID'"
             class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
                 @mousemove="transforms($event, product.link+'ID')"
            ></div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">Details</button>
            </div>
            <div class="price">${{product.price}}</div>
          </div>
        </div>
      </div>

      <div class="textContent">
        <a id="repair"><h1>Repair Service</h1></a>
      </div>
      <div class="contentBody shopList grid grid3">
        <div v-for="product in shopStore.repair"
             :id="product.link+'ID'"
             class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"
                 @mousemove="transforms($event, product.link+'ID')"
            ></div>
            <div class="tools">
              <button class="emphasized-button" @click="toDetails(product.link)">Details</button>
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
import IntroSection1 from "@/components/IntroSection1.vue";
import ScrollDownIndicator from "@/components/ScrollDownIndicator.vue";
import Footer from "@/components/Footer.vue";
import {RouterView} from "vue-router";
import IntroFrame1 from "@/views/IntroFrame1.vue";
import TheaterWheel from "@/components/TheaterWheel.vue";
import HeadMenu from "@/components/HeadMenu.vue";
import {mapStores} from "pinia";
import {cartStore} from "@/store/cart/cart";

export default defineComponent({
  computed:{
    ...mapStores(cartStore)
  },
  components: {
    HeadMenu,
    TheaterWheel,
    IntroFrame1, RouterView, Footer, ScrollDownIndicator, IntroSection1, RoundedBlackBox},
  data() {
    return {
      constraint: 200
    }
  },
  methods: {
    toCart(link:string){
      this.cartStore.toCart(link, 1)
    },
    transforms(event: any, id:string): string {
      let target = document.getElementById(id)
      let rotateX = this.calcRotateX(target, event.clientX);
      let rotateY = this.calcRotateY(target, event.clientY);

      if(target){
        let ttl = target.getElementsByClassName("title")[0]
        let img = target.getElementsByClassName("image")[0]
        let tools = target.getElementsByClassName("tools")[0]
        let price = target.getElementsByClassName("price")[0]
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
          // console.log("toolsX: ", toolsRotateX)
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
    calcRotateX(target: any, x: number){
      let rect = target.getBoundingClientRect()
      // console.log(x, rect.x, (rect.width / 2), (x - rect.x - (rect.width / 2)))
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
.contentBody{
	margin: 90px auto 0;
  text-align: center;
}
.shopList{

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
.shopList .product .productBody .image{
  width: 340px;
  height: 340px;
  background: transparent no-repeat center center/cover;
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