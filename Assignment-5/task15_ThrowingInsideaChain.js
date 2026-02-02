/*

Throwing Inside a Chain

*/


// Promise resolve and passing value  1 to then 
Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid"); // it will throw an error Invalid
    })
    .catch(err => {
        console.log("Caught Error"); // Error caught here and print : Caught Error 
        return 10; // Returning 10 from catch which is valid js script
    })
    .then(x => console.log(x)); //  and at the end it will print 10

// Output:
// Caught Error
// 10