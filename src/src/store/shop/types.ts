import loupesList from "@/store/shop/loupes.json";
import accessoriesList from "@/store/shop/accessories.json";
import partsList from "@/store/shop/parts.json";
import repairList from "@/store/shop/repair.json";

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
    loupes: Product[],
    accessories: Product[],
    parts: Product[],
    repair: Product[]
}