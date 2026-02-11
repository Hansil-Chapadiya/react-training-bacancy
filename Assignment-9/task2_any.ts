/*

Create one variable using any

*/

function func(value: any){
    const result = "Hello" + value;
    const answer = 10 + value;
    const target = 14 * value;

    return [result, answer, target];
}

/*
The any type should be used with caution and only in specific situations where you have no other options: 
*/

console.log(func(12)); 

/* 
Output
[ 'Hello12', 22, 168 ]
*/

console.log(func("World"));

/*

Output:
[ 'HelloWorld', '10World', NaN ]
*/