/*

Create a constructor type for UserRepository .
Create a callable type that formats User name.

*/

interface User {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

type UserRepository<T> = new (...args: any) => T;

function createRepository<T>(repo: UserRepository<T>): T {
    return new repo();
}

class UserRepo implements User {
    public id = "GREAT"
    public name = "Hansil"
    public email = "h@gmail.com"
    public role: "ADMIN" | "CUSTOMER" = "ADMIN"
    public isActive = true
}

const u1 = createRepository(UserRepo);

console.log(u1);


type formate = {
    (value: string): string
    value : number
}

const username: formate = Object.assign((id:string) => id.toLowerCase());
username.value = 12;

console.log(username(u1.id));
console.log(username.value);