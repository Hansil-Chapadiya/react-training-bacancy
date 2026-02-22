/*

Create a function updateField that takes:
object
key
value
Ensure the value type matches the key type.
Try assigning wrong type and observe the error.

*/

function updateField<T, K extends keyof T>(t : T, k : K): T[K]{
    return t[k];
}

const obj : {id: number , name: string}  = {
    id: 1,
    name : "Hansil"
} 

console.log(updateField(obj, "name"));

// Argument of type '"name1"' is not assignable to parameter of type '"id" | "name"'
// console.log(updateField(obj, "name1"));