/*

Create Admin and Customer interfaces using a common base
Extend the base interface to add role-specific properties
Write a function that accepts BaseUser
Pass both Admin and Customer objects to the function

*/

interface BaseUser {
    id: number;
    email: string;
}

interface Customer extends BaseUser {
    role: 'customer';
    purchaseHistory: number[];
}

interface Admin extends BaseUser {
    role: 'admin';
    permissions: string[];
}


function accepts(buser: BaseUser) {

    console.log(buser.email);
    console.log(buser.id);
    // console.log(buser.role); // Property 'role' does not exist on type 'BaseUser'.ts

}

const user1: Admin = {

    role: "admin",
    id: 1,
    email: "hansil@gmail.com",
    permissions: ["all"]

}

const user2: Customer = {

    role: "customer",
    id: 2,
    email: "hansil2@gmail.com",
    purchaseHistory: [1,2]

}

accepts(user1);
accepts(user2);