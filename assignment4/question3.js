const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let totalPrice = 0;
for (let value of amdPrices) {
    totalPrice += value;
}

let SMA = (totalPrice/7).toFixed(2);

let count = 0;
for (let value of amdPrices) {
    if (value > SMA) {
        count += 1;
    }
}

console.log("Number of days AMD was above the 7-day SMA is: " + count);