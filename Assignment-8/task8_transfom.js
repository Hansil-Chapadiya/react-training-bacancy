// transform value

/*

Create a Promise that resolves with the number 5.
Chain .then() to double the number, then another .then() to add 20, and finally log the result.


*/
Promise.resolve(5).then((res) => res * 2).then((res) => res + 10).then((res) => console.log(res));