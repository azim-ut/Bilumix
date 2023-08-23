import {defineStore} from "pinia";
import type {Product, ShopState} from "./types"
import mainList from "@/data/goods/main.json"
import loupesList from "@/data/goods/loupes.json"
import accessoriesList from "@/data/goods/accessories.json"
import partsList from "@/data/goods/parts.json"
import repairList from "@/data/goods/repair.json"

export const shopStore = defineStore('shop', {
    state: (): ShopState => ({
        main: mainList,
        loupes: loupesList,
        accessories: accessoriesList,
        parts: partsList,
        repair: repairList
    }),
    getters: {
        getMain: (state: ShopState): Product[] => state.main,
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
                }
            }
            return out
        }
    },
    actions: {
    }
})