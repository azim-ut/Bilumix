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
        <div v-for="product in shopStore.loupes" class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"></div>
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
        <div v-for="product in shopStore.accessories" class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"></div>
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
        <div v-for="product in shopStore.parts" class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"></div>
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
        <div v-for="product in shopStore.repair" class="product">
          <div class="productBody">
            <div class="title">{{product.short}}</div>
            <div class="image" :style="{'background-image': 'url(' + product.images[0].url + ')'}"></div>
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
    }
  },
  methods: {
    toCart(link:string){
      this.cartStore.toCart(link, 1)
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
}
.shopList .product .productBody{
  margin: 30px auto 0;
  position: relative;
  background: transparent;
  transition: .5s;
}
.shopList .product .productBody .title{
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: -14px;
  font-size: large;
}
.shopList .product .productBody .price{
  margin-top: 20px;
  text-align: center;
}
.shopList .product .productBody .image{
  width: 340px;
  height: 340px;
  background: transparent no-repeat center center/cover;
  border-radius: 40px;
}

.productBody:hover {
  transform: translateZ(-80px);
}
.emphasized-button{
  margin: 0px 10px 0;
  border: none;
  height: 30px;
  position: relative;
  font-size: 15px;
  line-height: 0px;
  width: 150px;
  top: -20px;
  bottom: 30px;
}
</style>