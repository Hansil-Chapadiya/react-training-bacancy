/*

Create an Order using intersection ( & )
Create the same model using interfaces and extends
Remove one required property and observe the compiler error
Decide which approach feels clearer and why
Create two small object types and combine them using intersection ( & )
Create the same structure using interfaces and extends
Try removing a required property and observe the compiler error
Identify when intersection is better than union

*/


/* type OrderBase = {
    orderId: number;
    amount: number;
};
type Auditable = {
    createdAt: Date;
    createdBy: string;
};
type Order = OrderBase & Auditable; */

interface BaseOrder {
    orderId: number;
    amount: number;
}
interface AuditedOrder extends BaseOrder {
    createdAt: Date;
    createdBy: string;
}

const Order: AuditedOrder = {

    orderId: 1,
    amount: 100,
    createdAt: new Date(),
    createdBy: "User1"
    // if not write Property 'createdBy' is missing in type '{ orderId: number; amount: number; createdAt: Date; }' but required in type 'AuditedOrder'.

}

console.log(Order);


/*

type intersection and interface is both useful according to requiremens

interface
Performance
Class / Object type data 
Declaration Merging


Intersection:
Complex Typing 
Intersestion of Object


*/


type obj1 = {

    enroll: number,
    college: string

}

type obj2 = {

    name: string;

}

type Student = obj1 & obj2;

const stud1: Student = {
    enroll: 10,
    college: "LDCE",
    name: "Hansil"
}

console.log(stud1);


/*

Because:

interface → for object design & extension

type → for type computation & transformations

Does intersection use declaration merging internally?

Answer:

No. Intersection creates a new type by intersecting property types.
Declaration merging literally combines interface declarations.


*/