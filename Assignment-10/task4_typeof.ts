/*

Create a constant adminUser .
Create a type from it using typeof .
Add a new property and observe how the type changes automatically.

*/


const adminUser: {

    id: number,
    role: string,
    name: string,
    email: string,
    isActive: boolean,
    age: number


} = {

    id: 1,
    role: "ADMIN",
    name: "Alice",
    email: "a@gmail.com",
    isActive: true,
    age : 13
   
};

type admin = typeof adminUser


/*
'adminU2' is declared but its value is never read.ts(6133)
Property 'age' is missing in type
*/
const adminU2: admin = {
    id: 2,
    role: "ADMIN",
    name: "BOB",
    email: "b@gmail.com",
    isActive: true,
    age : 12
}

console.log(adminUser);
console.log(adminU2);