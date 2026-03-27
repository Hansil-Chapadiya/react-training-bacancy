/*


Assignment : TypeScript Basics
Create a variable prices as an array of numbers
Write a function calculateTotal that:
Accepts a number array
Returns the total sum
Write another function that:
Accepts two numbers
Returns a string if the result is greater than 100

*/
var prices = [12, 34, 12, 12];
function calculateTotal(prices) {
    return prices.reduce(function (acc, total) {
        acc += total;
        return acc;
    }, 0);
}
function checkTwoNum(num1, num2) {
    var sum = num1 + num2;
    if (sum > 100) {
        return "Result is greater than 100";
    }
    else {
        return "Result is less than 100";
    }
}
console.log("Total sum = " + calculateTotal(prices));
console.log(checkTwoNum(12, 12));
