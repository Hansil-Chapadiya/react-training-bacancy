/*

Create FirstArgument<T> to extract first parameter type.
Test it with a function that takes (id: string, active: boolean) .

*/


type FirstArgument<T> = T extends (args1 : infer E, ...args: any[]) => any? E : never; // Accept function type 

function testUser(id: string, active : boolean): void{
    console.log(id);
}

type FirstUserType = FirstArgument<typeof testUser>;

const testValue1 : FirstUserType = "1";
// const testValue2 : FirstUserType = 2; // 'testValue2' is declared but its value is never read. and not assignable to String