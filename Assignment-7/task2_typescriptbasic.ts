/*


Assignment : TypeScript Basics
Create a variable prices as an array of numbers
Write a function calculateTotal that:
Accepts a number array
Returns the total sum
Write another function that:
Accepts two numbers
Returns a string if the result is greater than 100

*/

const prices: number[] = [12, 34, 12, 12];

function calculateTotal(prices: number[]): number {

    return prices.reduce((acc: number, total: number) => {

        acc += total

        return acc
    }, 0);

}

function checkTwoNum(num1: number, num2: number): string {

    const sum: number = num1 + num2;

    if (sum > 100) {
        return "Result is greater than 100";
    }
    else {
        return "Result is less than 100";
    }


}

console.log("Total sum = " + calculateTotal(prices));
console.log(checkTwoNum(12, 12));


/*

What happen if we pass String:

Type 'string' is not assignable to type 'number'.

What err caught before running code:

-> compile time errors 
->  such Type 'string' is not assignable to type 'number'.

*/