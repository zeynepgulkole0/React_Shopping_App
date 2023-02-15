const moneyFormat = (money) => {
    // return money.toLocaleString()
    return money.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

}

export {moneyFormat}