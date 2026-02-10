/*

Create a function tossCoin() that returns a Promise.
Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
Consume the promise using .then() and .catch().


*/
// Cointoss 
function tossCoin() {

    return new Promise((res, rej) => {

        // random number range (0 - 1)
        const result = Math.random();

        if (result > 0.5)
            res("Head")
        else
            rej("Tail")
    });

}

tossCoin().then((res) => console.log(res)).catch((res) => console.log(res));