import {defineStore} from "pinia";
import type {Cart, CartItem, CartState} from "@/store/cart/types";

const CART_STORE_NAME = "CART_STORE"

export const cartStore = defineStore('cart', {
    state: (): CartState => ({
        cart: {
            show: false,
            list: [],
            address: ""
        }
    }),
    getters: {
        isShow: (state: CartState): boolean => state.cart.show,
        getCart: (state: CartState): Cart => state.cart,
        getCartItem: (state: CartState) => (link: string | null): CartItem => {
        	let out = state.cart.list.find(row => row.url === link)
            if(!out){
                out = {
                    url: link??"",
                    cnt: 0
                }
            }
            return out
        }
    },
    actions: {
        toggle(): void {
            this.$state.cart.show = !this.$state.cart.show
        },
        open(): void {
            this.$state.cart.show = true
        },
        close(): void {
            this.$state.cart.show = false
        },
        fetchCart(){
            const value = localStorage.getItem(CART_STORE_NAME)
            if(value && value != "undefined"){
                let obj = JSON.parse(value)
                this.$state.cart.list = obj.list
                this.$state.cart.address = obj.address
            }
        },
        saveCart() {
            localStorage.setItem(CART_STORE_NAME, JSON.stringify(this.$state.cart))
        },
        countItems(): number {
            let out = 0
            this.$state.cart?.list?.forEach(row => {
                out += row.cnt
            })
            return out
        },
        setCount(link: string, count: number): void {
            let record = this.$state.cart.list.find(row => row.url === link)
            if(count>0){
                if(record){
                    record.cnt = count
                }else{
                    this.toCart(link, count)
                }
            }else{
                if(record){
                    let ind = this.$state.cart.list.indexOf(record)
                    this.$state.cart.list.splice(ind, 1)
                }
            }
            this.saveCart()
        },

        toCart(link: string, count: number) {
            let record = this.$state.cart.list.find(row => row.url === link);
            if(!record){
                record = {
                    url: link,
                    cnt: 0
                } as CartItem
                this.$state.cart.list.push(record)
            }
            record.cnt += count
            this.saveCart()
        },

        clearCart() {
            this.$state.cart.list = []
            this.saveCart()
        }
    }
})