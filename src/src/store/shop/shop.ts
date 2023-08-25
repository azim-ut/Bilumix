import {defineStore} from "pinia";


import type {MainProduct, Product, ShopState} from "./types"
import mainList from '@local/goods/main.json'
import loupesList from '@local/goods/loupes.json'
import accessoriesList from "@local/goods/accessories.json"
import partsList from "@local/goods/parts.json"
import repairList from "@local/goods/repair.json"
export const shopStore = defineStore('shop', {
    state: (): ShopState => ({
        main: mainList,
        loupes: loupesList,
        accessories: accessoriesList,
        parts: partsList,
        repair: repairList
    }),
    getters: {
        getMain: (state: ShopState): MainProduct[] => state.main,
        getLoupes: (state: ShopState): Product[] => state.loupes,
        getAccessories: (state: ShopState): Product[] => state.accessories,
        getParts: (state: ShopState): Product[] => state.parts,
        getRepair: (state: ShopState): Product[] => state.repair,
        getAll: (state: ShopState): Product[] => state.loupes.concat(state.accessories, state.parts, state.repair),
        getItem: (state: ShopState) => (link: any): Product => {
            let out = state.loupes.find(row => row.link === link)
            if(!out){
                out = state.main.find(row => row.link === link)
            }
            if(!out){
                out = state.accessories.find(row => row.link === link)
            }
            if(!out){
                out = state.parts.find(row => row.link === link)
            }
            if(!out){
                out = state.repair.find(row => row.link === link)
            }
            if (!out) {
                out = {
                    link: "",
                    short: "",
                    title: "",
                    text: "",
                    links: [],
                    images: [],
                    price: 0,
                    expandText: false,
                    on: false
                }
            }
            return out
        }
    },
    actions: {
    }
})