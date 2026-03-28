/*

Add one more role (e.g. Guest ) to the User union
Write a function that accepts User
Use the role field to safely narrow the type
Observe how TypeScript prevents invalid property access
Create a union type for two different user roles using type

*/

type Admin = {
    role: 'admin',
    permissions: string[];
};

type Customer = {
    role: 'customer',
    purchasehistory: number[];
};

type Guest = {
    role: 'guest',
}

type User = Admin | Customer | Guest;

function logUser(u: User) {
    if (u.role === 'admin') {
        console.log(u.permissions);
    }
    else if (u.role === 'customer') {
        console.log(u.purchasehistory);
    }
    else if (u.role === 'guest') {
        console.log("Register First");
    }
    // else if(u.role === 'hello' ){ // Property 'role' does not exist on type 'never'.}
}


const user1: User = { role: "admin", permissions: ["all"] };
// const user2: User = { role: "guest" , permissions} // Object literal may only specify known properties, and 'permissions' does not exist in type 'Guest'
const user2: User = { role: "guest" };

logUser(user1);
logUser(user2);