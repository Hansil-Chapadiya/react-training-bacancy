/*

Part 3: Reduce
Exercise 6: The Shopping Cart
Scenario: Calculate the total cost of the items in a cart.
Input: [100, 200, 50]
Task: Use .reduce() to sum the values starting from 0.
Expected Output: 350

*/

const cost = [100, 200, 50];

console.log(cost.reduce((acc, val) => {

    acc += val;
    return acc;
}, 0));