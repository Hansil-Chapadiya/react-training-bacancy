/*

Finally Gotcha

*/

// Here , Promise resolving and passing "Done"
Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup"); // Here Cleanup will print 
        return "Modified?"; // Finally return statement will not pass in then. it will ignored by js
    })
    .then(res => console.log(res)); // it will print "Done" passed by Promise.resolve("Done")

// Output:

// Cleanup
// Done
