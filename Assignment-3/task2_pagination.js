/*

Exercise 2: Pagination Logic
Scenario: You have a list of 10 items. You need to simulate "Page 2" of a table, displaying only items 4, 5, and 6.
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Task: Use .slice() to extract the items at indices 3, 4, and 5.
Expected Output: [4, 5, 6]

*/

// Syantax : arrayOrString.slice(startIndex, endIndex);


const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const answer = pages.slice(3,6);

console.log(answer);