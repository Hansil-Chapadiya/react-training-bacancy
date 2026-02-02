/*

Promise.all Failure

*/


// Promise.all : Give all fullfilled promises, even though single promise fail it will give error 
Promise.all([
    Promise.resolve("Success 1"), 
    Promise.reject("Error 1"), // Code breaks here and go into catch block because promise is rejected 
    Promise.resolve("Success 2") // unreachable code
])
.then(res => console.log("Result:", res)) // Unreachable code 
.catch(err => console.log("Caught:", err)); // And here it print Error Message + Caught = > Caught : Error 1

// Output:
// Caught : Error1
