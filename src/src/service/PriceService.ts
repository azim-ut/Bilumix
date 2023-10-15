import type {NamePrice} from "@/store/shop/types";

export let rates: Rate[] = [];



function getCurrencyPrice(val: number, currency: string, coverage: number = 0): number{
    if(!rates || rates.length === 0){
        let jsonString = localStorage.getItem("RATES")
        rates = JSON.parse(jsonString)
        if(!rates){
            location.reload()
        }
        console.log(rates, JSON.parse(jsonString))
    }
    if(rates){
        rates.filter((row: Rate) => row.currency === currency)
            .forEach((row: Rate) => {
                val = Math.floor(val * row.rate / 100) * 100
                val += val/100 * coverage
            })
        return val
    }
    return 0
}

export function getPriceTarget(target: NamePrice): string {
    target.price = getCurrencyPrice(target.price, target.currency)
    if(target.currency === "RUB"){
        return printRub(target.price)
    }
    if(target.price === 0){
        return "-"
    }
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: target.currency,
    }).format(target.price)
}
export function getPriceAndCurrency(price: number, currency: string): string {
    price = getCurrencyPrice(price, currency)
    if(currency === "RUB"){
        return printRub(price)
    }
    if(price === 0){
        return "-"
    }
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(price)
}

function printRub(price: number){
    price = getCurrencyPrice(price, "USD", 10)
    if(price === 0){
        return "-"
    }
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "RUB",
    }).format(price).replace(/RUB\s/, "") + " " + "₽"
}

interface Rate{
    currency: string,
    rate: number,
    nominal: number,
    interes: number
}