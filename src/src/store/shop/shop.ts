import {defineStore} from "pinia";


import type {AdditionalProduct, MainProduct, Product, ShopState} from "./types"
import mainList from '@local/goods/main.json'
import loupesList from '@local/goods/loupes.json'
import accessoriesList from "@local/goods/accessories.json"
import partsList from "@local/goods/parts.json"
import repairList from "@local/goods/repair.json"
import generationList from "@local/goods/generation.json"
export const shopStore = defineStore('shop', {
    state: (): ShopState => ({
        main: mainList,
        loupes: loupesList,
        accessories: accessoriesList,
        parts: partsList,
        repair: repairList,
        generation: generationList
    }),
    getters: {
        getMain: (state: ShopState): MainProduct[] => state.main,
        getLoupes: (state: ShopState): Product[] => state.loupes,
        getAccessories: (state: ShopState): Product[] => state.accessories,
        getParts: (state: ShopState): Product[] => state.parts,
        getGeneration: (state: ShopState): Product[] => state.generation,
        getRepair: (state: ShopState): Product[] => state.repair,
        getAll: (state: ShopState): Product[] => state.loupes.concat(state.accessories, state.parts, state.repair, state.generation),
        getMainByLink: (state: ShopState) => (link: any): MainProduct => {
            let out = state.main.find(row => row.link === link)
            if (!out) {
                out = {
                    link: "",
                    short: "",
                    title: "",
                    text: "",
                    links: [],
                    images: [],
                    products: [],
                    warranty: 0,
                    filters: [],
                    battery: [],
                    price: 0,
                    expandText: false,
                    on: false
                }
            }
            return out
        },
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
            if(!out){
                out = state.generation.find(row => row.link === link)
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