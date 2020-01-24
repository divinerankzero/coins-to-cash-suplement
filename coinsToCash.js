let dollarAmount = 0;

const toCashPiggyBank = {
    quarters: 4,
    nickels: 90,
    dimes: 10,
    pennies: 342,
}

const coinsToCash = (bank) => {
    const dollarsInQuarters = bank.quarters / 4;
    const dollarsInNickels = bank.nickels / 20;
    const dollarsInDimes = bank.dimes / 10;
    const dollarsInPennies = bank.pennies / 100;

    console.log("Dollars in Quarters:", dollarsInQuarters);
    console.log("Dollars in Nickels:", dollarsInNickels);
    console.log("Dollars in Dimes:", dollarsInDimes);
    console.log("Dollars in Pennies:", dollarsInPennies);

    let total = dollarsInQuarters + 
        dollarsInNickels + 
        dollarsInDimes + 
        dollarsInPennies;

    return "$" + total
}

dollarAmount = coinsToCash(toCashPiggyBank)

console.log(dollarAmount);


