const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
console.log((parseFloat(disneyData["open"]) - parseFloat(disneyData["high"]) + parseFloat(disneyData["low"]) - parseFloat(disneyData["close"])).toFixed(2));