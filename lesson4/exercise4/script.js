const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
// Write your code below

let result = 0;
let i = MSFTStockClosingPrices.length;
while (i > 0) {
    i--;
    let week = MSFTStockClosingPrices[i];
    result += week["Monday"] + week["Tuesday"] + week["Wednesday"] + week["Thursday"] + week["Friday"];
}

console.log("The total sum of closing prices of MSFT is " + result);