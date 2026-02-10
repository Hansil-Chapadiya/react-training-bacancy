/*

Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
Part A: Run three tasks sequentially using async/await.
Part B: Run three tasks simultaneously using Promise.all().
Compare the total time taken for Part A vs Part B.


*/

// Simulate task
async function simulatetask(name, delay) {
    return new Promise((res, rej) => {

        setTimeout(() => {

            res(name);

        }, delay);

    });
}


// using async
async function func() {


    const t1 = await simulatetask("Hansil", 1000);
    const t2 = await simulatetask("Alice", 2000);
    const t3 = await simulatetask("Bob", 1000);


}

// func()

// using promise.all
Promise.all(

    [simulatetask("Hansil", 1000), simulatetask("Alice", 1000), simulatetask("Bob", 1000)]

).then(arr => arr.forEach((element) => { console.log(element) }));