// ### Code Block 3: Multiple Microtasks


// javascript
console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");



/* Your Prediction (order):
```
// Write the order you expect :  A, G, B, D, C, E, F
``` */


/* Actual Output:
```
// Run and write the actual order : A, G, B, D, E, C, F
``` */


/* Explanation:
```
// Explain the execution order

According to the event loop excution : 
Synchronous task excutes first which is  start and end
then Microtask -> Promises are stored in microqueue and its priority is higher then macroqueue
then Macrotask -> SetTimeout and variou other web API store in Macro queue and its priority is low

But here , i just did mistake in retrieve in promises , Microqueue is queue which follow FIFO
so nested promise call after, outer second promise will execute 
```
 */