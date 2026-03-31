/*

Variable Hoisting & Promises


*/


console.log(a); // undefined : var as hoisted as undefined in Memory Context

var a = 5; // Now a has function scoped value 5

Promise.resolve().then(() => {
    console.log(a); // here a will be 10 because Arrow function has parent lexical scope but here window has 10 after Synchronous task a = 10;
});

a = 10; // overriding a value

//Output:
// undefined
// 10
