const dollarsInCoins = 10.52

const coins = {
    quarter: 0.25,
    dime: 0.10,
    nickel: 0.05,
    penny: 0.01
}

const cashtoCoins = (dollarAmount) => {
    let remains = dollarsInCoins;

    const bank = {
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0,
    }

    for (coin in coins) {
        // Value of the coin
        const value = coins[coin];
        // console.log(`${coin} is worth ${value}`);

        bank[`${coin}`] = Math.floor(remains / value);
        // console.log("There are", bank[`${coin}`], `${coin} in the $${remains} remaining`);
        // console.log(`${bank.coin} * ${value} = `, bank.coin * value)
        // console.log(`${remains} - ${bank.coin * value} =`, Number.parseFloat(remains - bank.coin * value).toFixed(2));
        remains -= bank[`${coin}`] * value;

        // After much experimentation, Number.parseFloat().toFixed(2)
        // Ended up being needed to get rid of weird trailing digit distortion happening
        remains = Number.parseFloat(remains).toFixed(2);
        // console.log("Remaining = $", remains)
    }

    return bank;
}

console.log(cashtoCoins(dollarsInCoins));