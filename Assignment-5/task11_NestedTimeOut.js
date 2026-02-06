/*

The Nested Timeout

*/

// Synchronous task
console.log('A');

// Timeout i.e Macro task
setTimeout(() => {
    console.log('B');
}, 0);

// Promise i.e. Micro task
Promise.resolve().then(() => {
    console.log('C');

    // Nested Promise i.e Microtask
    Promise.resolve().then(() => console.log('D'));
});

// Synchronous Task
console.log('E');

// So According to Event loop and js Excution Context

// Output
/*

A -> E -> C -> D -> B

*/