/*

Create abstract class Service<T> with abstract method execute() .
Extend it with UserService .

*/

abstract class Service<T> {
    abstract execute(): void;
}

interface User {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

class UserService extends Service<User>{
    execute(): void {
        console.log("Implement method in UserService");
    }
}

const u1 = new UserService();
u1.execute();