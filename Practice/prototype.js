

/***************************************
 * STEP 1: Constructor Function (Parent)
 ***************************************/

// Functions have a `prototype` property
function Person(name) {
  // this = newly created object
  this.name = name;
}

/*
Person.prototype is an OBJECT created by JS automatically.

Initially:
Person.prototype = {
  constructor: Person
}
*/

// Add method to prototype (shared by all instances)
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

/***************************************
 * STEP 2: Create Object using `new`
 ***************************************/

let p1 = new Person("Hansil");

/*
What `new Person()` does internally:

1. Create empty object: {}
2. Set prototype:
   p1.__proto__ = Person.prototype
3. Bind `this` to p1
4. Execute constructor body
5. Return p1
*/

/***************************************
 * STEP 3: Proof of Prototype Link
 ***************************************/

console.log(p1.__proto__ === Person.prototype); // true ✅
console.log(Person.prototype.constructor === Person); // true ✅

/***************************************
 * STEP 4: Property Access (Prototype Chain)
 ***************************************/

// `name` exists directly on p1
console.log(p1.name); // Hansil

// `sayHello` NOT on p1, so JS looks up the chain
p1.sayHello(); // Hello, my name is Hansil

/*
Internal lookup for p1.sayHello():

1️⃣ p1 → does not have sayHello
2️⃣ p1.__proto__ (Person.prototype) → FOUND ✅
*/

/***************************************
 * STEP 5: Show Object Structure
 ***************************************/

console.log(p1);
/*
p1 = {
  name: "Hansil",
  __proto__: Person.prototype
}
*/

console.log(Person.prototype);
/*
Person.prototype = {
  sayHello: function,
  constructor: Person,
  __proto__: Object.prototype
}
*/

/***************************************
 * STEP 6: Full Prototype Chain
 ***************************************/

console.log(p1.__proto__ === Person.prototype);              // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null);             // true

/*
Prototype chain:

p1
 ↓ __proto__
Person.prototype
 ↓ __proto__
Object.prototype
 ↓ __proto__
null
*/

/***************************************
 * STEP 7: IMPORTANT WRONG THING (DON'T DO)
 ***************************************/

console.log(p1.prototype); // undefined ❌
console.log(Person.__proto__)
// Objects do NOT have `prototype`

/***************************************
 * STEP 8: Correct Mental Model
 ***************************************/

/*
prototype → exists on FUNCTIONS
__proto__  → exists on OBJECTS

prototype = what will be inherited
__proto__  = where inheritance comes from
*/
