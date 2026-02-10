// Explain the execution order



// ### Code Block 2: Nested Async

//javascript

console.log("Start");


setTimeout(function () {
    console.log("Timeout 1");
    Promise.resolve().then(function () {
        console.log("Promise 1");
    });
}, 0);


Promise.resolve().then(function () {
    console.log("Promise 2");
    setTimeout(function () {
        console.log("Timeout 2");
    }, 0);
});


console.log("End");



// Your Prediction (order):
/* ```
// Write the order you expect : Start, End , Promise 2 , Timeout 1, Promise 1 , Timeout 2
``` */


// Actual Output:
/* ```
// Run and write the actual order : Start, End , Promise 2 , Timeout 1, Promise 1 , Timeout 2
``` */


// Explanation:
/* ```
// Explain the execution order

According to the event loop excution : 
Synchronous task excutes first which is  start and end
then Microtask -> Promises are stored in microqueue and its priority is higher then macroqueue
then Macrotask -> SetTimeout and variou other web API store in Macro queue and its priority is low

But here at the time of excuting setTimeout we will see new Promise then we will excute and then next Macrotask will
excute 

``` */

