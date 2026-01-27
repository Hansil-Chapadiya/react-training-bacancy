/* const arr = ["AA","aa","Aa","aA"]

const freqMap = arr.reduce((ac, str)=>{

    const charArray = str.split("");

    const charArray1 = charArray.reduce((acc, char)=>{

        if(acc[char]){
            acc[char]++;
        }
        else{
            acc[char] = 1;
        }

        return acc;

    },ac);

    // ac.push(charArray1);

    return ac;
}, [])

console.log(freqMap); */


/*

array:  ["AA","aa","Aa","aA"]
output : {a:8}

*/
/* 
const arr = ["AA", "aa", "Aa", "aA"]

const answer = arr
    .join("")
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {

        if (acc[char]) {
            acc[char] += 1;
        }
        else {
            acc[char] = 1;
        }

        return acc;

    }, {})

console.log(answer);

*/

/*

["apple","banana","apple","orange","banana","apple"]

output : { apple: 3, banana: 2, orange: 1 }

*/

/* const arr = ["apple", "banana", "apple", "orange", "banana", "apple"]

answer = arr.reduce((acc, str) => {
    if (acc[str]) {
        acc[str] += 1;
    }
    else {
        acc[str] = 1;
    }
    return acc;
}, {})
console.log(answer);
*/

/* const arr = [1, 2, 2, 3, 4, 4, 5]
const answer = arr.reduce((acc, num) => {

    const element = acc.find(x => x == num);
    if (element === undefined) {
        acc.push(num);
    }
    return acc;

}, [])
console.log(answer); */

// const arr = ["cat", "dog", "elephant", "ant", "tiger"]
// const answer = arr.reduce((acc, str) => {

//     if (acc[str.length]) {
//         acc[str.length].push(str);
//     }
//     else {
//         acc[str.length] = [str];
//     }

//     return acc;

// }, {})

// console.log(answer);


// const arr = [[1, 2], [3, 4], [5, [6, 7]]]
// function ans(arr) {
//     return arr.reduce((acc, ar) => {

//         if (Array.isArray(ar)) {
//             acc.push(...ans(ar));
//         }
//         else{
//             acc.push(ar);
//         }

//         return acc;

//     }, []);
// }
// console.log(ans(arr));

// const obj = [
//     { name: "A", salary: 1000 },
//     { name: "B", salary: 2000 },
//     { name: "C", salary: 3000 }
// ];

// console.log(obj.reduce((acc, obj) => {
//     acc += obj.salary;
//     return acc;
// }, 0));

// const obj = [
//     { name: "A", dept: "IT" },
//     { name: "B", dept: "HR" },
//     { name: "C", dept: "IT" }
// ]

// console.log(obj.reduce((acc, obj) => {

//     if (acc[obj.dept])
//         acc[obj.dept].push(obj.name);

//     else {
//         acc[obj.dept] = [obj.name];
//     }
//     return acc;

// }, {}));

let str = "JS is great";

// console.log(str.split(" ").join("").toLowerCase().split("").reduce((acc,char)=>{
//     if(acc[char])
//     {
//         acc[char] += 1
//     }
// }));
// console.log(str
//     .split(" ")
//     .join("")
//     .toLowerCase()
//     .split("")
//     .reduce((acc, char) => {

//         if (acc[char]) {
//             acc[char] += 1;
//         }
//         else {
//             acc[char] = 1;
//         }

//         return acc;
//     },{}));


const arr = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
]

console.log(arr.reduce((acc, obj) => {

    acc[obj.id] = obj;

    return acc

}, {}))

