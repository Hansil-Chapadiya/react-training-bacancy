/*

Create a type ReadOnlyUser where all properties are readonly.
Create a type StringifiedUser where all properties become string.
Create a type OptionalAndNullableUser where all properties are optional and nullable.

*/

interface User {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
} 

type ReadOnlyUser = {
    readonly [K in keyof User] : User[K] 
}

type StringifiedUser = {
    [K in keyof User] : string
}

type OptionalAndNullableUser = {
    [K in keyof User]? : User[K] | null
}