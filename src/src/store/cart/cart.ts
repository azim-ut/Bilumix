import {defineStore} from "pinia";
import type {Cart, CartItem, CartState} from "@/store/cart/types";

const CART_STORE_NAME = "CART_STORE"

export const cartStore = defineStore('cart', {
    state: (): CartState => ({
        cart: {
            subject: "Order from Bilumix.ru",
            email: "",
            phone: "",
            name: "",
            show: false,
            list: [],
            note: ""
        }
    }),
    getters: {
        isShow: (state: CartState): boolean => state.cart.show,
        getCart: (state: CartState): Cart => state.cart,
        getCartToCheckout: (state: CartState): any => {
            let cart = JSON.parse(JSON.stringify(state.cart))
            cart.list.map((row : any) => {
                row.url = "https://bilumix.ru/shop/" + row.url
            })
            return {
                name: cart.name,
                phone: cart.phone,
                email: cart.email,
                note: cart.note,
                list: cart.list
            }
        },
            getCartItem: (state: CartState) => (link: string | null): CartItem => {
        	let out = state.cart.list.find(row => row.url === link)
            if(!out){
                return {
                    url: link?("https://bilumix.ru/shop/" + link):"",
                    need: [],
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
        email(str: string): void {
            this.$state.cart.email = str
        },
        phone(str: string): void {
            this.$state.cart.phone = str
        },
        name(str: string): void {
            this.$state.cart.name = str
        },
        note(str: string): void {
            this.$state.cart.note = str
        },
        fetchCart(){
            const value = localStorage.getItem(CART_STORE_NAME)
            if(value && value != "undefined"){
                let obj = JSON.parse(value)
                obj.show = false
                this.$state.cart = obj
            }
        },
        saveCart() {
            localStorage.setItem(CART_STORE_NAME, JSON.stringify(this.$state.cart))
        },
        countItems(): number {
            let cnt = 0
            this.$state.cart.list.forEach((row: CartItem) => {
                cnt += row.cnt
            })
            return cnt
        },
        setCount(link: string, count: number): void {
            let record = this.$state.cart.list.find(row => row.url === link)
            if(count>0){
                if(record){
                    record.cnt = count
                }else{
                    this.toCart(link, count, [])
                }
            }else{
                if(record){
                    let ind = this.$state.cart.list.indexOf(record)
                    this.$state.cart.list.splice(ind, 1)
                }
            }
            this.saveCart()
        },

        toCart(link: string, count: number, need: any[]) {
            let record = this.$state.cart.list.find(row => row.url === link);
            if(!record){
                record = {
                    url: (link),
                    cnt: 0,
                    need: need
                } as CartItem
                this.$state.cart.list.push(record)
            }
            record.cnt += (<number>count) * 1
            this.saveCart()
        },

        clearCart() {
            this.$state.cart.list = []
            this.saveCart()
        }
    }
})