const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below
function getBetween(priceList) {
	// Write your code below

    let count = 0;
    for (let value of priceList) {
        if (value >= 254 && value <= 257) {
            count++;
        }
    }
    console.log("Number of closing prices between 254 and 257: " + count);
}

getBetween(MSFTStockClosingPrices);
getBetween(AAPLStockClosingPrices);