import {defineStore} from "pinia";
import type {ManualRecord, ManualState} from "./types"
import manualList from "./data.json"


export const manualStore = defineStore('manual', {
    state: (): ManualState => ({
        list: manualList
    }),
    getters: {
        getList: (state: ManualState): ManualRecord[] => state.list,
        getItem: (state: ManualState) => (link: any): ManualRecord => {
            let out = state.list.find(row => row.link === link)
            if (!out) out = {
                title: "-",
                text: "",
                image: "",
                video: "",
                link: link
            }
            return out
        }
    },
    actions: {
    }
})