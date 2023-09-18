import {defineStore} from "pinia";
import type {BubbleState} from "./types"


export const bubbleStore = defineStore('bubble', {
    state: (): BubbleState => ({
        show: true,
        text: "Hi"
    }),
    getters: {
        isOpened(): boolean{
            return this.show
        },
        getText(): string {return this.text}
    },
    actions: {
        toggle(): void {
            this.$state.show = !this.show
		},
        show(): void {
            this.$state.show = true
		},
        hide(): void {
            this.$state.show = false
		},
        setText(val: string): void{
            this.$state.text = val
        }
    }
})