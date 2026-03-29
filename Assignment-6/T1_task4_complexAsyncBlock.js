

// ### Code Block 4: Complex Async Chain


//javascript
console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");


/* Your Prediction (order):
```
// Write the order you expect : 1, 7, 3, 4, 5, 2, 6
```
 */

/* Actual Output:
```
// Run and write the actual order : 1, 7, 3, 4, 5, 2, 6
``` */


/* Explanation:

Synchronous task -> 
MicroQueue -> Q(3) PR(4) Q(5)
MacroQueue -> ST(2) ST(6)
Call Stack -> 1
Call Stack -> 7
Call Stack -> Q(3) -> 3
Call Stack -> PR(4) -> 4
Call Stack -> Q(5) -> 5
Call Stack -> ST(2) -> 2
Call Stack -> ST(6) -> 6
```
 */