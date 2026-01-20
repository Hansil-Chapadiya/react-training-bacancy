/*
Exercise 4: The Clean-Up Crew
Scenario: You have a list of user ages. Some data is corrupted (negative numbers or zero).
Input: [25, -5, 18, 0, 40]
Task: Use .filter() to keep only valid ages (positive numbers > 0).
Expected Output: [25, 18, 40]
*/


const data = [25, -5, 18, 0, 40];
let cleaneddata = data.filter(x => x > 0);
console.log(cleaneddata);