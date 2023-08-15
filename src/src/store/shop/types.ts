export interface Product{
    link: string,
    title: string,
    short: string,
    text: string,
    links: Link[],
    images: Image[],
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
    main: Product[],
    loupes: Product[],
    accessories: Product[],
    parts: Product[],
    repair: Product[]
}