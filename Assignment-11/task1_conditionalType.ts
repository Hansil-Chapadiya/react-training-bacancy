/*
Create a type IsNumber<T> .
Create a type ExtractEmail<T> that extracts email type if present.
*/


interface User {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

type IsNumber<T> = T extends number ? true : false;

type numberType = IsNumber<number>; // true
type nonNumberType = IsNumber<string>; // false

const n1: numberType = true; // can assign only true
const n2: nonNumberType = false; // can assign only true

console.log(n1);
console.log(n2);


// Extract Email

type ExtractEmail<T> = T extends {email : infer E} ? E : never;

type emailType = ExtractEmail<User>; // string

const check : emailType = ""; // so we can assign here only string

console.log(typeof check);