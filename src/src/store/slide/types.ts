
export interface SlideState {
    list: Slide[]
}

export interface Slide {
    ind: number,
    group: string,
    path: string,
    loaded: boolean
}