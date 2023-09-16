import {defineStore} from "pinia";
import type {BubbleState } from "./types"


export const bubbleStore = defineStore('bubble', {
    state: (): BubbleState => ({
        show: false,
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
            this.show = !this.show
		},
        show(): void {
            this.show = true
		},
        hide(): void {
            this.show = false
		},
        setText(val: string): void{
            this.text = val
        }
    }
})