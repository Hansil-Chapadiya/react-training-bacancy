/*

Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
Use it to log "2 seconds passed" after 2000 ms.


*/

function wait(ms) {
    /* setTimeout(() => {

        return Promise.resolve().then(() => console.log("Promise Resloved"));

    }, ms); */

    return new Promise((res, rej) => {

        res(setTimeout(() => {
            console.log("Promise Resolved");
        }, 1000));

    });
}


wait(2000).then()