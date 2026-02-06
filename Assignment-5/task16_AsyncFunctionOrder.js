/*

Async Function Order

*/

// Decalration of Async function
async function foo() {

    // Synchronous task
    console.log("A");

    // Promise i.e. Microtask
    await Promise.resolve();

    // Synchronous task but because of Promise , excution on hold
    console.log("B");
}

// Synchronous task
console.log("C");

// Function Call
foo();

// Synchronous task
console.log("D");

// So According to js event loop and Execution context
// Output
/*


C -> A ->  D -> B

*/
