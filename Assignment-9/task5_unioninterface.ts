/*

Create another union using two interfaces
Write a function that accepts the union and narrows the type safely

*/

interface Admin {
    role: 'admin',
    permissions: string[];
};

interface Customer {

    role: 'customer',
    purchasehistory: string[];
};

type User = Admin | Customer

function logUser(u: User) {
    if (u.role === 'admin') {
        console.log(u.permissions);
    }
    else if (u.role === 'customer') {
        console.log(u.purchasehistory);
    }
    // else if(u.role === 'hello' ){ // Property 'role' does not exist on type 'never'.}
}


const user1: User = { role: "admin", permissions: ["all"] };
// const user2: User = { role: "guest" , permissions} // Object literal may only specify known properties, and 'permissions' does not exist in type 'Guest'
const user2: User = { role: "customer", purchasehistory: ["Doodh", "Dahi"] };

logUser(user1);
logUser(user2);