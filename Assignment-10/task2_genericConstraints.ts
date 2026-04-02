/*

Create a function activateUser that accepts only objects having isActive: boolean .

*/

function activateUser<T extends { isActive: boolean }>(t: T): T {
    return t;
}

const user1 = {
    username: "Hansil",
    isActive: true
}

console.log(activateUser(user1));
/*
Try passing invalid objects and observe TypeScript errors.
if we not pass isActive
Argument of type '{ username: string; }' is not assignable to parameter of type '{ isActive: boolean; }'.
  Property 'isActive' is missing in type '{ username: string; }' but required in type '{ isActive: boolean; }'
*/



/*
Create another function that requires both id and email.
*/

function requiredValue<T extends { id: number, email: string }>(t: T): T {
    return t;
}

const user2: { id: number, name: string, email: string } = {
    id: 1, 
    name: "Hansil", 
    email: "h@gmail.com"
}

console.log(user2);

