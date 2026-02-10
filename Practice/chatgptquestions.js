/*

console.log(..."😭😅"); // run smoothly
console.log("😅😭".split("")); // broken unicode character

console.log(10 === 10); // True -> Type is matched

if(10) // Truthy value
{
  console.log(1);
}

+function(){ // unary operator seperate IIFE function expression to its decalaration
  console.log("Hello");
}();

function *generator() // Generator functions
{
  yield "Hello";
  yield "new";
  return 1;
}

const s = generator(); 

internally
s = {
  [[GeneratorState]]: "suspendedStart",
  [[GeneratorContext]]: function memory,
  next: function
}



console.log(s.next());
console.log(s.next());
console.log(s.next());

*/

/* const obj = {
  name: "JS",
  greet() {
    setTimeout(()=>{
        console.log(this.name);
    },0);
    // setTimeout(this.greet.bind(this,console.log(this.name)), 0);
  }
};

obj.greet();
 */


/* function runInOrder() {
    console.log("start");

    Promise.resolve().then(() => {
        console.log("Micro");

        setTimeout(() => {
            console.log("Macro");
            console.log("end");
        }, 0);
    })

}

runInOrder(); */


/* const arr = [1, 2, 3, 4];

const result = arr.reduce((acc, x) => {
    if (x % 2 === 0) acc.push(x * 2);
    return acc;
}, []);

console.log(result); */


/*
Using only array methods (map, filter, reduce — no loops), implement a function that:

takes an array of numbers

returns an object with sum of evens and sum of odds

// { even: 12, odd: 9 }
*/

const arr = [1, 2, 3, 4, 5, 6];
console.log(function () {
    return arr.reduce((acc, val) => {

        if (val % 2 == 0) { acc.even += val }
        else { acc.odd += val; }

        return acc

    }, {
        odd: 0,
        even: 0
    })
}());  

/* const obj1 = {

    carname: "farari",
    speed : 20,
    unit : "km/hr"

}


// const obj2 = JSON.parse(JSON.stringify(obj1));
const obj2 = structuredClone(obj1);
console.log(obj2); */


/* class User{

    #region; 
    _reg1;

    constructor(){
           this.#region = 1;    
           this._reg1=12; 
    }

    get region(){
        return this.#region;
    }
}

const user = new User();
console.log(user.region); */


/* class BankAccount {
    #balance; // Declares a private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    // Public method to access balance safely
    get getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(typeof account.getBalance); // Output: 150

// console.log(account.#balance); // Syntax error: Private field '#balance' must be declared in an enclosing class
 */

/* function num(){
    let age = 19;

    return function innerHeight(){
        console.log(age, "5");
    }

} */

/* const age = num;
console.log(age()());


console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;
 */