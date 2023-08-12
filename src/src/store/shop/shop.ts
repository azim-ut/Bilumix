import {defineStore} from "pinia";
import type {Product, ShopState} from "./types"
import loupesList from "./loupes.json"
import accessoriesList from "./accessories.json"
import partsList from "./parts.json"
import repairList from "./repair.json"

export const shopStore = defineStore('shop', {
    state: (): ShopState => ({
        loupes: loupesList,
        accessories: accessoriesList,
        parts: partsList,
        repair: repairList
    }),
    getters: {
        getLoupes: (state: ShopState): Product[] => state.loupes,
        getAccessories: (state: ShopState): Product[] => state.accessories,
        getParts: (state: ShopState): Product[] => state.parts,
        getRepair: (state: ShopState): Product[] => state.repair,
        getItem: (state: ShopState) => (link: any): Product => {
            let out = state.loupes.find(row => row.link === link)
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