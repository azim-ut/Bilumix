export interface ManualRecord{
    link: string,
    title: string,
    video: string,
    text: string,
    image: string
}

export interface ManualState {
    list: ManualRecord[]
}