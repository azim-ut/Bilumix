import type {NamePrice} from "@/store/shop/types";

import lazy_rates from "@/store/shop/lazy_rates.json"
import numbers from "@/i18n/rules/numbers";

export let rates: Rate[] = [];



function getCurrencyPrice(val: number, currency: string, coverage: number = 0): number{
        if(!rates || rates.length === 0){
            let jsonString = localStorage.getItem("RATES")
            rates = JSON.parse(jsonString)
            if(!rates){
                rates = lazy_rates
            }
        }
        if(rates){
            let valRub = 0
            if(!["USD", "RUB"].includes(currency)){
                rates.filter((row: Rate) => row.currency === 'USD')
                    .forEach((row: Rate) => {
                        valRub = val * (row.rate/row.nominal)
                    })
                console.log("rate", val, valRub)
                val = valRub
            }
            rates.filter((row: Rate) => row.currency === currency)
                .forEach((row: Rate) => {
                    if(row.currency === "AMD"){
                        console.log("rate before: ", val)
                    }
                    let realRate = row.rate
                    if(row.nominal>1){
                        realRate = row.nominal/row.rate
                    }
                    val = Math.round((val) * (realRate))

                    val += Math.round(((val) / (realRate)) * coverage)
                    val = Math.round((val/10)) * 10
                    const afterDot = val%100
                    let temp = (afterDot > 25 && afterDot < 50)?50:0
                    if(afterDot>50){
                        temp = 0
                    }
                    // console.log(val, afterDot, temp)
                    val = Math.round(val/100) * 100 + temp
                })
            return val
        }
        return 0
}


export function getRatedPrice(price: number, currency: string, cover: number): number{
    return getCurrencyPrice(price, currency, cover)
}

export function convertTargetPrice(target: NamePrice): string {
    if(target.currency === "RUB"){
        return printRub(target.price)
    }
    if(target.currency === "AMD"){
        return printAmd(target.price)
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
function printAmd(price: number){
    if(price === 0){
        return "-"
    }
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "AMD",
    }).format(price).replace(/AMD\s/, "") + " " + "֏"
}

interface Rate{
    currency: string,
    rate: number,
    nominal: number,
    interes: number
}