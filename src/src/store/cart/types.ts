export interface CartItem{
    url: string,
    cnt: number
}

export interface CartState {
    show: boolean,
    list: CartItem[],
    address: string
}