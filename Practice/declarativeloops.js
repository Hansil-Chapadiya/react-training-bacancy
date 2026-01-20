// Imperative (how)
arr = [1, 2, 3];
let array1 = [];
for (let i of arr) array1.push(i * 2);

console.log(array1);

// Declarative (what)
// Map
// map takes an array and returns a new array after transforming each element.(Transform)
// Synatax : Array.prototype.map(callback, thisArg?)
/**
 * 
    ✔ does not mutate original
    ✔ length stays same
    ✔ transform only
    ✔ must return something for each iteration
    ✔ skip holes but preserve length (important edge case)
 * 
 */
let array2 = arr.map(x => x * 2);
console.log(array2);


// Filter
// filter returns a new array containing elements for which callback returns truthy.
// Syntax :  Array.prototype.filter(callback, thisArgs?)
/**
✔ does not mutate original
✔ returned array length ≤ original
✔ boolean test determines output
✔ skips holes (but does not preserve them)
✔ callback must return truthy/falsy
 */

let arr3 = [3, 3];
console.log(arr3.filter(x => x == 4));


// Reduce (accumulate)
// reduce lowers array to a single value.
// ex. total , object count,  
/*
✔ can return ANY type:

number

object

array

function

promise

✔ mutation-free or mutable (your choice)
✔ extremely expressive

*/
