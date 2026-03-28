/*
Create an enum for payment states (INITIATED, SUCCESS, FAILED)
Write a function that accepts only this enum
Try passing an invalid value and observe the error
Why enums are better than magic strings?
*/

enum paymentState {
    INITIATED = "initiated",
    SUCCESS = "success",
    FAILED = "failed"
}

function accepts(state: paymentState){
    console.log("PAYMENT STATE = " + state);
}


accepts(paymentState.SUCCESS);  
// accepts(paymentState.START) // Property 'START' does not exist on type 'typeof paymentState'. 

/*

Enums provide type safety, autocomplete, easier refactoring, and prevent invalid values, whereas magic strings are error-prone and hard to maintain.

*/
