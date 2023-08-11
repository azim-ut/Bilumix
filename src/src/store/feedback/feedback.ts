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
        setOpened(val: boolean): void {
            this.opened = val
		},
        setDraft(val: FeedbackRecord): void{
            this.draft = val
        }
    }
})