/*

Write a function with required and optional parameters
Define return types explicitly
Create a small utility function that would exist in a real project
Write a function with one required and one optional parameter
Call it with and without the optional argument
How does TypeScript enforce correctness here?

*/


function getMessage(id: number, value?: string) {

    console.log("ID = ", id);
    console.log("Value = ", value);

}

getMessage(1);
getMessage(1, "Hello ! Good Morning");


/**
 * The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness.
 */