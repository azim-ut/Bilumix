export interface Product extends NamePrice{
    link: string,
    short: string,
    text: string,
    links: Link[],
    images: Image[],
    need: any[],
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
export interface NamePrice {
    title: string,
    price: number,
    currency: string
}
export interface Link{
    title: string,
    url: string
}
export interface Image{
    url: string,
    on: boolean
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