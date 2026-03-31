/*

Basic Promise Flow

*/

// Synchronous task -> 1(go to call satck)
// Microtask Queue -> Promise(lo(2))
// Macrotask Queue -> 
// Call stack -> 1(pop) -> render
// Call Stack -> Promise (Microtask queue())(pop)
// Call Stack -> 3(pop) -> render
// Call stack -> empty
// Call stack -> run all microtask (promiseresolve)
// Call Stack -> log(2) 
// Call Stack -> 2(Pop) -> render


console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

// output
// 1 -> 3 -> 2