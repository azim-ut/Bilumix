import {defineStore} from "pinia";
import type {ManualRecord, ManualState} from "./types"


export const manualStore = defineStore('manual', {
    state: (): ManualState => ({
        list: [
            {
                link: "adjusting-size",
                title: "Adjusting the size",
                image: "/images/static/manual-adjusting-size.jpg",
                video: "/images/video/1-adjusting-size.mp4",
                text: "This video instruction describes how to properly adjust the size of your BiLumix to fit your head."
            },
            {
                link: "adjusting-size",
                title: "Adjusting the size",
                image: "/images/static/manual-adjusting-size.jpg",
                video: "/images/video/1-adjusting-size.mp4",
                text: "This video instruction describes how to properly adjust the size of your BiLumix to fit your head."
            },
            {
                link: "adjusting-size",
                title: "Adjusting the size",
                image: "/images/static/manual-adjusting-size.jpg",
                video: "/images/video/1-adjusting-size.mp4",
                text: "This video instruction describes how to properly adjust the size of your BiLumix to fit your head."
            },
            {
                link: "adjusting-size",
                title: "Adjusting the size",
                image: "/images/static/manual-adjusting-size.jpg",
                video: "/images/video/1-adjusting-size.mp4",
                text: "This video instruction describes how to properly adjust the size of your BiLumix to fit your head."
            },
            {
                link: "adjusting-size",
                title: "Adjusting the size",
                image: "/images/static/manual-adjusting-size.jpg",
                video: "/images/video/1-adjusting-size.mp4",
                text: "This video instruction describes how to properly adjust the size of your BiLumix to fit your head."
            },
            {
                link: "adjusting-size",
                title: "Adjusting the size",
                image: "/images/static/manual-adjusting-size.jpg",
                video: "/images/video/1-adjusting-size.mp4",
                text: "This video instruction describes how to properly adjust the size of your BiLumix to fit your head."
            },
            {
                link: "adjusting-size",
                title: "Adjusting the size",
                image: "/images/static/manual-adjusting-size.jpg",
                video: "/images/video/1-adjusting-size.mp4",
                text: "This video instruction describes how to properly adjust the size of your BiLumix to fit your head."
            },
            {
                link: "adjusting-size",
                title: "Adjusting the size",
                image: "/images/static/manual-adjusting-size.jpg",
                video: "/images/video/1-adjusting-size.mp4",
                text: "This video instruction describes how to properly adjust the size of your BiLumix to fit your head."
            }
        ]
    }),
    getters: {
        getList: (state: ManualState): ManualRecord[] => state.list
    },
    actions: {

    }
})