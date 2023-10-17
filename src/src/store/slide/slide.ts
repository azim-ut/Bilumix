import {defineStore} from "pinia";
import type {Slide, SlideState} from "./types"


export const slideStore = defineStore('slide', {
    state: (): SlideState => ({
        list: []
    }),
    getters: {
        getUnloadedSlides: (state: SlideState) => (group: string): Slide[] => {
            return state.list.filter(slide => slide.group === group && !slide.loaded)
        },
        getAllSlides: (state: SlideState) => (): Slide[] => {
            return state.list
        },
        getSlides: (state: SlideState) => (group: string): Slide[] => {
            return state.list.filter(slide => slide.group === group)
        },
        getSlide: (state: SlideState) => (ind: number, group: string): Slide|undefined => {
            return state.list.find((slide: Slide) => slide.group === group && slide.ind === ind)
        },
        getLoadedSlide: (state: SlideState) => (ind: number, group: string): Slide|undefined => {
            return state.list.find((slide: Slide) => slide.group === group && slide.loaded && slide.ind === ind)
        },
        isLoaded: (state: SlideState) => (ind: number, group: string): boolean => {
            const el = state.list.find((slide: Slide) => slide.group === group && slide.ind === ind)
            if (el){
                return el.loaded
            }
            return false
        },
    },
    actions: {
        addSlide(slide: Slide){
            let exists = this.$state.list.find((row: Slide) => row.ind === slide.ind && row.path === slide.path)
            if(!exists){
                this.$state.list.push(slide)
            }
        },
        loaded(slide: Slide): void {
            this?.$state.list
                .filter((row: Slide) => row.group === slide.group && row.ind === slide.ind)
                .forEach((row: Slide) => {
                    row.loaded = true
                })

            const loaded = this?.$state.list
                .filter((row: Slide) => row.group === slide.group && row.loaded).length
            console.log(slide.group, ": ", loaded)
		}
    }
})