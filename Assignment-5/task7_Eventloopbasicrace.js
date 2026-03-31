/*

Event loop Basic Race

*/

// Synchronous task
console.log("Start");

// Macro task 
setTimeout(() => console.log("Timeout"), 0);

// Micro task
Promise.resolve().then(() => console.log("Promise"));

// Synchronous task
console.log("End");

// As we know priority order of Event loop

/*

1) Synchronous task
2) Micro task 
3) Macro task 

so output is -> Start -> End -> Promise -> Timeout

*/