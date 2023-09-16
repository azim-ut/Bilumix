export interface CartItem {
    url: string,
    cnt: number,
    target: any
}

export interface Cart {
    subject: string,
    email: string,
    name: string,
    show: boolean,
    list: CartItem[],
    address: string,
    note: string
}

export interface CartState {
    cart: Cart
}