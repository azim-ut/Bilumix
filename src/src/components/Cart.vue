<template>
  	<div class="cartContent" v-if="isShow()">
      <div class="cartHead">
        <div class="grid grid121">
          <div class="col1">
            <button class="btn" @click="close()">X</button>
            <div>Cart</div>
          </div>
          <div class="col2">
            <div v-if="checkoutSum">
              Checkout sum: {{sumAndCurrencyPrice(checkoutSum)}}
            </div>
          </div>
          <div class="col3">
            <button class="btn" @click="clear()">Clear</button>
            <button class="btn" @click="checkout()">Checkout</button>
          </div>
        </div>
      </div>
      <div class="grid grid2">
        <div>
          <div class="cartList" v-if="hasItems()">
            <div class="product grid grid121" v-for="row in cart().list">

              <div class="short" v-if="row.target.images">
                <div class="img" :style="{'background-image' : 'url('+row.target.images[0].url+')'}"></div>
                <div class="cnt">
                  <span>{{row.cnt}}</span>
                </div>
              </div>
              <div class="title" v-if="row.target.title">
                <div>
                  <div>{{row.target.title}}</div>
                  <div class="cntTool">
                    <input type="number" @change="setItemCount(row.url, row.cnt)" v-model="row.cnt" />
                  </div>
                  <div><small>{{row.cnt}} x {{targetPrice(row.target)}} = {{sumAndCurrencyPrice(row.cnt * row.target.price)}}</small></div>
                </div>
              </div>
              <div class="tool" v-if="row.url">
                <div>
                  <button class="btn" @click="removeItem(row.url)">
                    <font-awesome-icon icon="fa-solid fa-trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br/>
          <div class="textAreaWrap">
            <div class="title">Note</div>
            <textarea rows="10" @keydown="setNote" @change="setNote" v-model="note"></textarea>
          </div>
        </div>
      </div>
      <div class="bottomRow">
        <button class="btn" @click="clear()">Clear</button>
        <button class="btn" @click="checkout()">Checkout</button>
      </div>
    </div>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {mapStores} from "pinia"
import {shopStore} from "@/store/shop/shop"
import {cartStore} from "@/store/cart/cart"
import Modal from "@/components/Modal.vue";
import type {Product} from "@/store/shop/types";
import axios from "axios";
import type {NamePrice} from "@/store/shop/types";
import {getPriceAndCurrency, getPriceTarget} from "@/service/PriceService";
import type {Cart} from "@/store/cart/types";
import {bubbleStore} from "@/store/bubble/bubble";

export default defineComponent({
  computed: {
    ...mapStores(cartStore, shopStore, bubbleStore)
  },
  components: {Modal},
  data() {
    return {
      showCart: false,
      checkoutSum: 0,
      list: [] as any[],
      note: "",
      currency: "USD"
    }
  },
  methods: {
    updateItemsList(): void{
      let out: any[] = []
      let catalog = this.shopStore.getAll
      this.checkoutSum = 0
      this.cartStore.getCart.list.forEach((row:any) => {
        let target = row.target
        if(!target){
          catalog.forEach((cat: Product) => {
            if(cat.link === row.url){
              target = cat
            }
          })
        }
        row.target = target
        this.checkoutSum += row.cnt * target.price
        out.push(row)
      })
      this.list = out
      this.note = this.cartStore.getCart.note
      this.cartStore.saveCart()
    },
    checkout(){
      axios.post("/ru/php/mail.php", this.cartStore.getCart).then(response => {
        this.bubbleStore.setText = response.data
        this.bubbleStore.show()
        // this.close()
      })
    },
    cart(): Cart{
      return this.cartStore.getCart
    },
    async clear(){
      await this.cartStore.clearCart()
      this.updateItemsList()
      this.close()
    },
    close(){
      this.updateItemsList()
      return this.cartStore.close()
    },
    hasItems():boolean{
      return this.cartStore.getCart.list.length>0
    },
    removeItem(link: string):void{
      this.cartStore.setCount(link, 0)
      this.updateItemsList()
    },
    setNote():void{
      this.cartStore.note(this.note)
      this.updateItemsList()
    },
    setItemCount(link: string, cnt: number):void{
      this.cartStore.setCount(link, cnt)
      this.updateItemsList()
    },
    targetPrice(target: NamePrice): string{
      return getPriceTarget(target)
    },
    sumAndCurrencyPrice(price: number): string{
      return getPriceAndCurrency(price, this.currency)
    },
    isShow(): boolean {
      return this.cartStore.isShow
    }
  },
  async mounted() {
    this.close()
    this.currency = this.shopStore.getMain[0].currency
    await this.cartStore.fetchCart()
    this.updateItemsList()
  },
  unmounted() {
  },
  watch:{
    'cartStore.isShow': {
      handler(newVal,oldValue){
        if(newVal != oldValue){
          this.showCart = newVal
          // this.updateItemsList()
        }
      },
      immediate: true
    }
  }
})
</script>

<style scoped>
</style>