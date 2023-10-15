import type {NamePrice} from "@/store/shop/types";

export let rates: Rate[] = [];



function getCurrencyPrice(val: number, currency: string, coverage: number = 0): number{
    if(currency === "USD"){
        return val
    }
    if(!rates || rates.length === 0){
        let jsonString = localStorage.getItem("RATES")
        rates = JSON.parse(jsonString)
        if(!rates){
            location.reload()
            return 0
        }
    }
    if(rates){
        rates.filter((row: Rate) => row.currency === currency)
            .forEach((row: Rate) => {
                val = Math.floor(val * row.rate)
                val += Math.floor((val/row.rate) * coverage)
                val = Math.round((val/10)) * 10
                console.log(row.currency, val, row.rate)
            })
        return val
    }
    return 0
}


export function getRatedPrice(price: number, toCurrency: string): number{
    let cover = 0;
    let fromCurrency = "USD"

    if(toCurrency === "RUB"){
        cover = 10
    }
    let res = getCurrencyPrice(price, fromCurrency, cover)
    return res
}

export function convertTargetPrice(target: NamePrice): string {
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
export function convertAndPrintPrice(price: number, currency: string): string {
    return printPrice(price, currency)
}
export function printPrice(price: number, currency: string): string {
    if(price === 0){
        return "-"
    }
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    }).format(price)
}

function printRub(price: number){
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