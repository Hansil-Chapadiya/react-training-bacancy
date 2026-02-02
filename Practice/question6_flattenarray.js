/*

-> Convert Sub Array into Flatten Array

*/

// Declaration
const array = [3,7,3,[8,9],6]

// Resultant Array
const newarray = array.reduce((acc, curr) => {

    // Check Whether curr = SubArray 
    if(Array.isArray(curr)){
        console.log(...curr);
        acc.push(...curr) //  Spread operator [8,9] -> 4, 5
    }
    // Otherwise push into accumulator
    else{
        acc.push(curr)
    }

    // Return Accumulator
    return acc
}, []);

// print resultant array
console.log(newarray)


// Why we can't use split instead of Spread

/*

-> Split() works only on String and it is not unicode-safe 
-> ... works on Iterables (array, string , objects) -> it is unicode safe 

example 

console.log(..."😭😅"); // run smoothly
console.log("😅😭".split("")); // broken unicode character

Output:

😭 😅
[ '\ud83d', '\ude05', '\ud83d', '\ude2d' ]


*/