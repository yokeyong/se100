const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let totalPrice = 0;
for (let value of amdPrices) {
    totalPrice += value;
}

console.log("The 7-day SMA of AMD is " + (totalPrice/7).toFixed(2));