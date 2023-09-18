<template>
  	<div class="cartContent" v-if="isShow()">
      <div class="cartHead">
        <div class="grid grid121">
          <div class="col1">
            <button class="btn" @click="close()">X</button>
            <div>Cart</div>
          </div>
          <div class="col2">
            <div v-if="checkoutSum>0">
              {{ shopText.CHECKOUT_SUM }}: <span class="nowrap">{{sumAndCurrencyPrice(checkoutSum)}}</span>
            </div>
          </div>
          <div class="col3 buttons">
            <button class="btn" @click="clear()">{{ shopText.CART_CLEAR }}</button>
            <button class="btn" @click="checkout()">{{ shopText.CART_CHECKOUT }}</button>
          </div>
        </div>
      </div>
      <div class="grid grid2" v-if="!result.done && checkoutSum>0">
        <div>
          <div class="cartList" v-if="hasItems()">
            <div class="product grid grid121" v-for="row in cart().list">

              <div class="short" v-if="row.target && row.target.images">
                <div class="img" :style="{'background-image' : 'url('+row.target.images[0].url+')'}"></div>
                <div class="cnt">
                  <span>{{row.cnt}}</span>
                </div>
              </div>
              <div class="title" v-if="row.target && row.target.title">
                <div>
                  <h4>{{row.target.title}}</h4>
                  <div class="small" v-for="n in row.need">
                    {{n.title}}: {{n.val}}
                  </div>
                  <div class="cntTool">
                    <input type="number" @change="setItemCount(row.url, row.cnt)" v-model="row.cnt" />
                  </div>
                  <div><small>{{row.cnt}} x <span class="nowrap">{{targetPrice(row.target)}}</span> = <span class="nowrap">{{sumAndCurrencyPrice(row.cnt * row.target.price)}}</span></small></div>
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
          <div class="field">
            <div class="title">{{ shopText.CHECKOUT_NAME }}</div>
            <input type="text" v-model="name" @keydown="setName" @change="setName" />
          </div>
          <div class="field">
            <div class="title">{{ shopText.CHECKOUT_PHONE }}</div>
            <input type="tel" v-model="phone" @keydown="setPhone" @change="setPhone" />
          </div>
          <div class="field">
            <div class="title">Email</div>
            <input type="email" v-model="email" @keydown="setEmail" @change="setEmail" />
          </div>
          <br/>
          <div class="textAreaWrap">
            <div class="title">{{ shopText.CHECKOUT_NOTE }}</div>
            <textarea rows="10" @keydown="setNote" @change="setNote" v-model="note"></textarea>
          </div>
        </div>
      </div>
      <div class="bottomRow" v-if="!result.done && checkoutSum>0">
        <button class="btn" @click="clear()">{{ shopText.CART_CLEAR }}</button>
        <button class="btn" @click="checkout()">{{ shopText.CART_CHECKOUT }}</button>
      </div>
      <div class="centered center" style="min-height: 50vh;" v-if="!result.done && !checkoutSum">
        <div>
          <h3 class="thin-text"
              style="font-size: 180%;">{{ shopText.CART_EMPTY }}</h3>
          <button class="btn"
                  style="font-size: 150%; text-transform: uppercase;"
                  @click="toShop()">{{ shopText.CART_GOTO_SHOP }}</button>
        </div>
      </div>
      <div :class="{'centered center resultMsg': true, 'error': !result.ok}" style="min-height: 50vh;" v-if="result.done">

          <div v-if="result.ok" style="margin: auto;">
            <h3 class="thin-text"
                style="font-size: 180%;">{{ shopText.CHECKOUT_OK }}</h3>
            <div class="text">{{shopText.CHECKOUT_OK_MORE}}</div>
            <button class="btn"
                    style="font-size: 150%; text-transform: uppercase;"
                    @click="toShop()">{{ shopText.CART_BACKTO_SHOP }}</button>
          </div>
          <div v-if="!result.ok" style="margin: auto;">
            <h3 class="thin-text"
                style="font-size: 180%;">{{ shopText.CHECKOUT_ERROR }}</h3>
            <div class="text">{{shopText.CHECKOUT_ERROR_MORE}}</div>
            <button class="btn"
                    style="font-size: 150%; text-transform: uppercase;"
                    @click="toFeedback()">{{ shopText.CHECKOUT_FEEDBACK }}</button>
          </div>
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
import shopText from "@local/shop_text.json";
import {feedbackStore} from "@/store/feedback/feedback";

export default defineComponent({
  computed: {
    ...mapStores(cartStore, shopStore, bubbleStore, feedbackStore)
  },
  components: {Modal},
  data() {
    return {
      result: {
        done: false,
        ok: true
      },
      shopText: shopText,
      showCart: false,
      checkoutSum: 0,
      email: "",
      phone: "",
      name: "",
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
      this.name = this.cartStore.getCart.name
      this.phone = this.cartStore.getCart.phone
      this.email = this.cartStore.getCart.email
      this.cartStore.saveCart()
    },
    checkout(){
      axios.post("/ru/php/mail.php", this.cartStore.getCartToCheckout).then(response => {
        this.bubbleStore.setText = response.data
        this.bubbleStore.show()
        this.result.ok = false
        if(response.data === "ok"){
          this.clear()
          this.result.ok = true
        }
        this.result.done = true
        // this.close()
      })
    },
    cart(): Cart{
      return this.cartStore.getCart
    },
    toShop(): void{
      this.close()
      this.$router.push({name: "shop"})
    },
    toFeedback(): void{
      this.feedbackStore.toggle()
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
    async setEmail() {
      this.cartStore.email(this.email)
      await this.updateItemsList()
    },
    async setName() {
      this.cartStore.name(this.name)
      await this.updateItemsList()
    },
    async setPhone() {
      this.cartStore.phone(this.phone)
      await this.updateItemsList()
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
          this.updateItemsList()
        }
      },
      immediate: true
    }
  }
})
</script>

<style scoped>
h4{
  font-weight: 400;
  margin: 5px 0;
}
.field{
  border-radius: 8px;
  border: #404040 1px solid;
  margin: 10px 10px 20px;
  position: relative;
  padding: 6px 5px;
}

.field .title{
  background: #fff;
  position: absolute;
  left: 10px;
  top: -10px;
  font-size: small;
  padding: 0 10px;
}

.field input{
  width: -webkit-fill-available;
  border: none;
  font-size: 120%;
}
.bottomRow .btn{
  padding: 10px 10px;
}

.resultMsg {}
.resultMsg div:first-child { max-width: 50%;}
.resultMsg h3 {color: #199ddc; }
.resultMsg.error h3 {color: #ff0000; }
.resultMsg .text { margin: 0 auto 30px;}

@media (max-width: 600px) {
  .cartHead .buttons .btn{
    font-size: 14px;
    padding: 0 2px;
    margin: 0 2px;
  }
  h4{
    width: min-content;
  }
  .cartHead .grid121 .col1 div {
    display: none;
  }
  .cntTool input{
    width: 50px;
  }
  .cartList .grid121{
    grid-template-columns: 1fr 1fr !important;
  }
  .cartContent .tool{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: -40px;
    z-index: 1;
  }
  .cartContent .tool button{
    background: #ccc;
  }
  .cartContent .title div{
    width: min-content;
  }
}
</style>