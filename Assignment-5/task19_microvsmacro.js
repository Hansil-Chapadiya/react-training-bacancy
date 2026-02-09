/*

Microtask vs Macrotask Interleaving

*/

// Timeout i.e Macrotask 
setTimeout(() => console.log("T1"), 0);

// Promises i.e Microtask
Promise.resolve().then(() => {

    // Syncronous task
    console.log("P1");

    // Timeout i.e. Microtask
    setTimeout(() => console.log("T2"), 0);
});

// Promises i.e Microtask
Promise.resolve().then(() => console.log("P2"));

// Syncronous task
console.log("End");


// So According to js event loop and Execution context
// Output
/*

End -> P1 -> P2 -> T1 -> T2

*/
