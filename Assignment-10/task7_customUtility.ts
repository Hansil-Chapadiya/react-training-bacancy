/*

Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
Create a utility NonNullableFields<T> that removes null and undefined from all properties.
Apply both to User and test different scenarios.

*/

interface User {
    id: string | null
    name: string | undefined
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}


type ReadonlyByKeys<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

type NonNullableFields<T> = {
    [K in keyof T]: Exclude<T[K], null | undefined>
}

type UserWithReadOnly = ReadonlyByKeys<User, "email">
type UserNonNullable = NonNullableFields<User>

const user1: UserWithReadOnly = {
    id: '1',
    name: 'Hansil',
    email: 'hansil@mail.com',
    role: 'ADMIN',
    isActive: true
}

console.log(user1);
// user.email = "A@gmail.com" // Cannot assign to 'email' because it is a read-only property.

const user2: UserNonNullable = {
    id: '1',
    name: 'Hansil',
    email: 'hansil@mail.com',
    role: 'ADMIN',
    isActive: true
}

console.log(user2);

