/*

 Identify why the following code throws an error and fix it without using the class keyword.

*/

// Function have prototype property
function Animal(name) {
    // this = newly created object 
    // In browser it will refer to window so you need to set 'use strict' and Animal.call(obj, "name")
    // call method : using different obj or this
    this.name = name;
}

Animal.prototype.eat = function () {
    // Add method to prototype:  that shared by all instances
    console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
    // this: depends on HOW Dog is called, not where it is written.

    /*
        In normal inheritance usage (the intended case):
        let d = new Dog("Tommy", "Labrador");

        -> this refers to the newly created Dog object, NOT window.

    */

    /*
    
    Internally: 
    1. Create empty object {}
    2. Set object.__proto__ = Dog.prototype
    3. Bind `this` inside Dog to that object
    4. Execute Dog function
    5. Return the object


    */
    Animal.call(this, name);
    this.breed = breed;
}

// Intent: Dog should inherit from Animal
// Assingning Animal's prototype to Dog
// This is wrong in code 
// We can't assign directly , it will not give error but prototype chain is broken and inheritance violates its property.

/*  Dog.prototype = Animal.prototype; */


/*

Dog have : name, eat(), breed
Animal have : name, eat(), breed

// Why? 

Because they have same reference

So Dog doesn't have their own contructor so it will point Animal construtor and we assigned it.

*/


// Correct version 

Dog.prototype = Object.create(Animal.prototype);

// Restore Dog Constructor which was overwrite by Animal
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
    console.log("Woof!");
};

/**
 * 
 * Now Dog and Animal both have bark() method
 * 
 */

// Calling using constructor method Dog()
const myDog = new Dog("Buddy", "Golden");

// Calling using Constructor method Animal()
const genericAnimal = new Animal("Generic");

// After correction this will give type error 
genericAnimal.bark(); 

/**
 * Because we earlier assign Dog and Animal have same reference that's why Animal can access Dog protype methods
 */

console.log(myDog.constructor.name); 

/**
 * Same we earlier assign Dog and Animal have same reference that's why Dog can access Animal protype Constructor.
 */


