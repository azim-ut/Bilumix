import {defineStore} from "pinia";
import type {Cart, CartItem, CartState} from "./types"

const CART_STORE_NAME = "CART_STORE"

export const cartStore = defineStore('cart', {
    state: (): CartState => ({
        show: false,
        list: [],
        address: ""
    }),
    getters: {
        getCart: (state: CartState) => ():Cart => state.cart,
        getCartItem: (state: CartState) => (link: string | null): CartItem => {
        	let out = state.list.find(row => row.url === link)
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
            this.$state.show = !this.$state.show
        },
        show(): void {
            this.$state.show = true
        },
        hide(): void {
            this.$state.show = false
        },
        fetchCart(){
            const value = localStorage.getItem(CART_STORE_NAME)
            if(value){
                let obj = JSON.parse(value)
                this.$state.list = obj.list
                this.$state.address = obj.address
            }
        },
        saveCart() {
            localStorage.setItem(CART_STORE_NAME, JSON.stringify(this.$state.cart))
        },
        countItems() {
            let out = 0
            this.$state.list.forEach(row => {
                out += row.cnt
            })
            return out
        },
        setCount(link: string, count: number): void {
            let record = this.$state.list.find(row => row.url === link)
            if(count>0){
                if(record){
                    record.cnt = count
                }else{
                    this.toCart(link)
                }
            }else{
                if(record){
                    let ind = this.$state.list.indexOf(record)
                    this.$state.list.splice(ind, 1)
                }
            }
            this.saveCart()
        },

        toCart(link: string) {
            let record = this.$state.list.find(row => row.url === link);
            if(!record){
                record = {
                    url: link,
                    cnt: 0
                } as CartItem
                this.$state.list.push(record)
            }
            record.cnt += 1
            this.saveCart()
        },
        outOfCart: (state: CartState) => (link: String) => {
            let record = state.list.find(row => row.url === link);
            if(record){
                let ind = state.list.indexOf(record)
                state.list.splice(ind, 1)
            }
            this.saveCart()
        }
    }
})