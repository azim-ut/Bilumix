export interface Product{
    link: string,
    title: string,
    short: string,
    text: string,
    links: Link[],
    images: Image[],
    price: number,

    on: boolean,
    expandText: boolean
}

export interface MainProduct extends Product{
    products: string[],
    warranty: number,
    filters: AdditionalProduct[],
    battery: AdditionalProduct[]
}

export interface AdditionalProduct {
    title: string,
    included: boolean,
    edit: boolean,
    price: number,

    on: boolean,
    expandText: boolean
}
export interface Link{
    title: string,
    url: string
}
export interface Image{
    url: string
}

export interface ShopState {
    main: MainProduct[],
    loupes: Product[],
    accessories: Product[],
    parts: Product[],
    repair: Product[],
    generation: Product[]
}