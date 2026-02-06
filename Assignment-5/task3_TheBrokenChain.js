/*

 The Broken Chain

*/

// Here promise rejected
Promise.reject("Error Occurred")
    .then(() => console.log("Success")) // it will not print becuase it excute only if promise fullfilled or resolved. 
    .catch((err) => console.log(err)); // it will print because after rejection of promise it will catch the error.

// Ouput: In our case -> Error Occurred Print because promise has been rejected.
