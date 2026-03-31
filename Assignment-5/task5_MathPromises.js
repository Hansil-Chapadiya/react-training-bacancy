/*

Math with Promises

*/

// Here We are resolving promises and pass 10
Promise.resolve(10)

    // after getting 10 we will multiply it by 2
    .then((num) => num * 2)

    // after getting result we will log it on console
    .then((result) => console.log(result));

// Output
// it will print 20