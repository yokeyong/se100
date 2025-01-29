const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

let totalClosingPrice = 0;
// Write your code below
for (let array of msftData) {
	totalClosingPrice += array[3]
}

let averageClosingPrice = (totalClosingPrice/msftData.length).toFixed(2);

console.log("Average closing price of MSFT is " + averageClosingPrice);