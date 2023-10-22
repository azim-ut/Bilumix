import {defineStore} from "pinia";
import type {VideoState} from './types';
import {state} from "vue-tsc/out/shared";


export const videoStore = defineStore('video', {
    state: (): VideoState => ({
        show: false,
        src: ""
    }),
    getters: {
        isOpened: (state: VideoState): boolean => state.show,
        getSrc: (state: VideoState): string => state.src
    },
    actions: {
        toggle(): void {
            this.$state.show = !this.show
		},
        showVideo(): void {
            this.$state.show = true
		},
        hideVideo(): void {
            this.$state.show = false
		},
        setVideo(val: string): void{
            this.$state.src = val
            console.log(this.$state.show)
        }
    }
})