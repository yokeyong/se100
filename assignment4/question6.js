// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

let data = amdPrices.sort(function(a, b) {
    return a - b;
});

let answer = [];
for (let i=0; i < 3; i++) {
    answer.push(data[i])
}

console.log("The three lowest prices are " + answer[0] + ", " + answer[1] + ", and " + answer[2])