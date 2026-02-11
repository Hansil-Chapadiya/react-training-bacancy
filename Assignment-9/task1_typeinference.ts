/*


Declare variables using let and const with initial values and observe inferred types
Try reassigning incompatible values and note the compiler errors
Write a function without a return type and inspect what TypeScript infers

*/

let var1 = 10;
const var2 = "ADMIN";

console.log("Type of var1 = ", typeof var1);
console.log("Type of var2 = " + typeof var2);


// var1 = "10"; // Compile error: Type 'string' is not assignable to type 'number'.

function func() { // Here function didn;t return anything so it return type will be Void 

    console.log("Inside function 1");

}
console.log(func());

console.log((() => { // Here also return type void 

    console.log("Inside function 2");

})())
