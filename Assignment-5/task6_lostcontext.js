/*

The Lost Context

*/

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

// Ouptut
const print = user.printName; // it will store context of function but not call using binding with object 
print(); // this didn't know which name should be call because it is an independand call 

// if we call using user.printName() i.e with context of object , it will print name reffering to object 

