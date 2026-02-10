// ### Code Block 5: Async/Await


// javascript
console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");



/* Your Prediction (order):
```
// Write the order you expect : Start , Async 1, End , Async 2 , Promise 1, Timeout
``` */


/* Actual Output:
```
// Run and write the actual order : Start , Async 1, End , Async 2 , Promise 1, Timeout
``` */


/* Explanation:
```
// Explain the execution order

Synchronous task : Start , Asyncone, End
MicroQueue :  await Promise.resolve()  PR(1)
MacroQueue :  ST(T)
Call Stack :  Start 
Call Stack :  asyncFunc()
Call Stack :  Asyncone
Call Satck :  End
Call Stack :  AsyncTwo 
Call Stack :  Promise 1
Call Stack :  Timeout

 */