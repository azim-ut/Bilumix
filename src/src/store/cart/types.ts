export interface CartItem {
    url: string,
    cnt: number,
    need: any[]
}

export interface Cart {
    subject: string,
    email: string,
    phone: string,
    name: string,
    show: boolean,
    list: CartItem[],
    note: string
}

export interface CartState {
    cart: Cart
}