/*

Create reusable aliases for union and intersection types
Refactor earlier assignments to use these aliases
Observe how readability improves
Create a type alias for string | number
Use it in two variables
How does this improve readability?

*/



interface Admin {
    role: 'admin',
    permissions: string[];
};

interface Customer {

    role: 'customer',
    purchasehistory: string[];
};

type User = Admin | Customer // Type Alias

const user1: User = {

    role: "admin",
    permissions: ["Granted"]

}

console.log(user1);

let alias: number | string; //  We can easily read that type can either number or string

alias = 10;
alias = "Hello"; // it is override 

console.log(alias);