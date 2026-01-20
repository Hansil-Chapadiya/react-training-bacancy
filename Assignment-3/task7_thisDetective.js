/*

Part 4: Objects & References
Goal: Understanding this and Immutability.
Exercise 7: The "this" Detective
Scenario: The code below is broken (it logs undefined).
Explain why it fails.
Fix it so it logs "Hello, Alex".
JavaScript
const user = {
    name: "Alex",
    greet: () => {
        console.log("Hello, " + this.name);
    }
};
user.greet();
*/

// Solution: Because this refers to the window lexical environment and arrow function can;t acces that just like normal function
// so that name is in user object so it can't access name 

// new version

const user = {

    name: "Alex",
    greetmsg: function () {
        greet = () => {
            console.log("Hello, " + this.name);
        }
        greet();
    }
}

user.greetmsg();