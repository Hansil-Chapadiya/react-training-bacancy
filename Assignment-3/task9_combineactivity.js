/*

Exercise 9
Combine everything you learned into one function.
Scenario: You have an inventory list.
Filter out items that are out of stock (stock: 0).
Map the remaining items to calculate their total value (price * stock).
Reduce to find the total value of the entire inventory.
Data:
JavaScript
const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];


*/


const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

// const availitems = inventory.filter(x=> x.stock > 0);
// console.log("Available item => " + availitems);

// const addTotals = availitems.map((x)=>{
//     return {...x , totalPrice : x.price * x.stock }
// });
// console.log('Totalvalue =>  ', addTotals);

// const totalInventory = addTotals.reduce((acc, total) => {

//     acc += total.totalPrice;
//     return acc;
// },0);
// console.log(totalInventory);


const totalInventory = inventory.filter(x => x.stock > 0)
    .map((x) => {
        return { ...x, totalPrice: x.price * x.stock }
    })
    .reduce((acc, total) => {
        acc += total.totalPrice;
        return acc
    }, 0);

console.log(totalInventory);