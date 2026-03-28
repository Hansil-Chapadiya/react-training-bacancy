
/*

Create an interface for a Product
Create a variable that follows this interface

*/

interface Product{

    name: string,
    price : number,
    stock : number

}


const obj1 : Product = {

    name : "Keyboard",
    price : 100,
    stock : 2

}

console.dir(obj1);