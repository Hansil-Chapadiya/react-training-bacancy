/* ## Task 1: Predict Output of Async Code


### Objective
Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.


### Requirements
1. Predict the output order for each code block
2. Run the code and compare with your prediction
3. Explain the execution order based on the event loop */


// ### Code Block 1: Basic Async


//javascript

console.log("1");


setTimeout(function () {
    console.log("2");
}, 0);


Promise.resolve().then(function () {
    console.log("3");
});


console.log("4");


//Your Prediction (order):
/* ```
// Write the order you expect: 1, 4, 3, 2
``` */


//Actual Output:
/* ```
// Run and write the actual order : 1, 4, 3, 2
``` */


//Explanation:
/*

According to the event loop excution : 
Synchronous task excutes first which is  1 and 4
then Microtask -> Promises are stored in microqueue and its priority is higher then macroqueue
then Macrotask -> SetTimeout and variou other web API store in Macro queue and its priority is low

*/

