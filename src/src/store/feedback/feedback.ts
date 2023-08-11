import {defineStore} from "pinia";
import type {FeedbackRecord, FeedbackState } from "./types"


export const feedbackStore = defineStore('feedback', {
    state: (): FeedbackState => ({
        opened: false,
        draft: {
            email: "",
            name: "",
            summary: "",
            description: ""
        }
    }),
    getters: {
        isOpened(): boolean{
            return this.opened
        },
        getDraft(): FeedbackRecord {return this.draft}
    },
    actions: {
        toggle(): void {
            this.opened = !this.opened
		},
        open(): void {
            this.opened = true
		},
        close(): void {
            this.opened = false
		},
        setDraft(val: FeedbackRecord): void{
            this.draft = val
        }
    }
})