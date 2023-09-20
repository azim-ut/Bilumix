import type {NamePrice} from "@/store/shop/types";

export function getPriceTarget(target: NamePrice): string {
    if(target.currency === "RUB"){
        return printRub(target.price)
    }
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: target.currency,
    }).format(target.price)
}
export function getPriceAndCurrency(price: number, currency: string): string {
    if(currency === "RUB"){
        return printRub(price)
    }
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(price)
}

function printRub(price: number){
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "RUB",
    }).format(price).replace(/RUB\s/, "") + " " + "₽"
}