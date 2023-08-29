export interface Product{
    link: string,
    title: string,
    short: string,
    text: string,
    links: Link[],
    images: Image[],
    price: number,
    sale: number,

    on: boolean,
    expandText: boolean
}

export interface MainProduct extends Product{
    products: string[],
    warranty: number,
    ipd: number,
    free: string[],
    glassYear: number
}

export interface AdditionalProduct {
    title: string,
    short: string,
    included: boolean,
    edit: boolean,
    price: number,

    on: boolean,
    expandText: boolean
}
export interface NamePrice {
    title: string,
    price: number
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
    filters: Product[],
    repair: Product[],
    generation: Product[]
}