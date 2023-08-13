<template>
  	<div class="cartContent" v-if="isShow()">
      <div class="cartHead">
        <div class="grid grid121">
          <div class="col1">
            <button class="btn" @click="close()">X</button>
            <div>Cart</div>
          </div>
          <div class="col2">
            <div>
              Checkout sum: ${{checkoutSum}}
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
            <div class="product grid grid121" v-for="row in getItemsList()">
              <div class="short">
                <div class="img" :style="{'background-image' : 'url('+row.target.images[0].url+')'}"></div>
                <div class="cnt">
                  <span>{{row.cnt}}</span>
                </div>
              </div>
              <div class="title">
                <div>
                  <div>{{row.target.title}}</div>
                  <div class="cntTool">
                    <input type="number" @change="setItemCount(row.url, row.cnt)" v-model="row.cnt" />
                  </div>
                  <div><small>{{row.cnt}} x ${{row.target.price}} = ${{row.cnt * row.target.price}}</small></div>
                </div>
              </div>
              <div class="tool">
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
            <textarea rows="10"></textarea>
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
import type {Cart, CartItem} from "@/store/cart/types";

export default defineComponent({
  computed: {
    ...mapStores(cartStore, shopStore)
  },
  components: {Modal},
  data() {
    return {
      checkoutSum: 0
    }
  },
  methods: {
    getCart(): Cart {
      return this.cartStore.getCart
    },
    getItemsList(): CartItem[]{
      let out = []
      this.checkoutSum = 0
      this.cartStore.getCartItems()?.forEach((row:any) => {
        row.target = this.shopStore.getItem(row.url)
        this.checkoutSum += row.cnt * row.target.price
        out.push(row)
      })
      return out
    },
    checkout(){},
    clear(){
      this.cartStore.clearCart()
      this.close()
    },
    close(){
      return this.cartStore.close()
    },
    hasItems():boolean{
      return this.cartStore.countItems()>0
    },
    removeItem(link: string):void{
      this.cartStore.setCount(link, 0)
    },
    setItemCount(link: string, cnt: number):void{
      this.cartStore.setCount(link, cnt)
    },
    isShow(): boolean {
      return this.cartStore.isShow
    }
  },
  mounted() {
    this.cartStore.fetchCart()
  },
  unmounted() {
  },
  watch: {
    'cartStore.isShow': {
      handler(newVal, oldValue) {
        // console.log(oldValue, '->', newVal, this.showQuestionModal)
      }
    }
  }
})
</script>

<style scoped>
</style>