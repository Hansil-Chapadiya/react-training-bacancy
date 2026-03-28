/*

Create another variable using unknown
Try calling methods directly on both
Which one forces you to write safer code?

*/

function func(value: unknown) {

    if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "string") {
        return value + 10;
    }
    else {
        return true;
    }

}

let num: number = 10;
let str: string = "Number";
let bool: boolean = false;

console.log(func(num));
console.log(func(str));
console.log(func(bool));


// In any : No compiler error occurred because internally it is works same as dynamic typing 
// In unknown : Compile time safety , and need type guard to handle compile time error 


const var1 : any = 10;
const var2 : unknown = 20;

var1.toUpperCase(); // it will not give compile time error and not force to do safe code but give runtime error  
// var2.toUpperCase(); // it will give compile time error and force to do safe code   