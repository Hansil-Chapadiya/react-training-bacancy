/*

 Arrow Function Pitfall

*/

// object creation
const group = {

    // object properties
    title: "Developers",

    // function expression
    getTitle: () => {

        // return this title depending on how they call
        console.log(this.title);
    }
};

// Output:
// It will print undefined 
// Cause arrow function check title in its parent lexical scope
// But object doesn;t have their own lexical environment
// That's why Arrow function point to global object which is window and in node it is {} object.
group.getTitle();
