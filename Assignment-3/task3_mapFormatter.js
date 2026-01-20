/*

Exercise 3: The Price Formatter
Scenario: You have a list of raw number prices. You need to format them for the UI.
Input: [10, 20, 30]
Task: Use .map() to add a "$" sign to the front of every number.
Expected Output: ["$10", "$20", "$30"]


*/

const readLine = require('readline');

const r = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

});

let prices = [];
let index = 0;

function ask() {

    if (index < 3) {
        r.question(`Enter value - ${index + 1}: `, (value) => {
            prices.push(Number(value));
            index += 1;
            ask();
        });
    } else {
        const formattedPrice = prices.map(x => `\$${x}`);
        console.log(formattedPrice);
        r.close();
    }
}

ask();