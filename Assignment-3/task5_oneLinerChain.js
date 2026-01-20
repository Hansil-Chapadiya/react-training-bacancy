/*

Exercise 5: The "One-Liner" Chain
Scenario: Combine both methods.
Input: [-10, 20, 50, -5]
Task:
Filter out negative numbers.
Map the remaining numbers to double them (x * 2).
Expected Output: [40, 100]

*/

const values = [-10, 20, 50, -5];

const doubled = values.filter(x => x > 0).map(x => x * 2);

console.log(doubled);