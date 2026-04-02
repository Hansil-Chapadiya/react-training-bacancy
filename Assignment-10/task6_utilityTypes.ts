/*

Create a type UserPublicProfile without email and isActive .
Create a Record that maps user IDs (string) to User objects.

*/

interface User {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

type UserPublicProfile = Omit<User, "email" | "isActive">
const user: UserPublicProfile = {
    id: "1",
    name: "Hansil",
    role: "ADMIN"
}
console.log(user)


type UserRecord = Record<User["id"], User>

const users: UserRecord = {
    "1": {
        id: "1",
        name: "Hansil",
        email: "hansil@mail.com",
        role: "ADMIN",
        isActive: true
    },
    "2": {
        id: "2",
        name: "Anna",
        email: "anna@mail.com",
        role: "CUSTOMER",
        isActive: false
    }
}

console.log(users);