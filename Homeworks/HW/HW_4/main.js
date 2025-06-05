function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let i = 0; i < currencyValues.length; i++){
        if (currencyValues[i][`currency`] === exchangeCurrency){
            return sumUAH / currencyValues[i][`value`];
        }
    }
}

sum = +prompt(`Input the sum in UAH you want to convert`, `10000`)
currency_convert = prompt(`Input the currency you want to convert to`, `USD`)
value_convert = exchange(sum, [{currency:`USD`,value:25},{currency:`EUR`,value:42}], currency_convert)
document.write(`<h2 style = "font-weight: normal">${sum} UAH - ${value_convert} ${currency_convert}</h2>`)
