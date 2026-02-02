/*

Chaining Result

*/

Promise.resolve(5) // Promise is resolving or fullfilling here 
    .then((val) => { // 5 is returning here after resolvement 
        console.log(val); // it will print 5 here
        return val + 5; // and return 5 after adding more 5 in that 
    })
    .then((val) => console.log(val)); // Output : after adding 5 => 10 will print here


// Output:
// 5 -> 10