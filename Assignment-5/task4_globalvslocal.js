/*

 Global vs. Local Scope

*/

// Declaration of status variable using var keyword
var status = "Offline";

// Server object creation 
const server = {

    // create key - value pair
    status: "Online",

    // function expression
    getStatus: function() {

        // return current status 
        // it depends how it call and where it call 
        // not where igt is written
        return this.status;
    }
};

// Output : it will print Online 
// why?
// Because function call is binded within a object
console.log(server.getStatus());
