/*

 Object Method Assigned to Class

*/


// Definig Class(Blue print) Manager 
class Manager {

    // Constructor assigning default value
    constructor(name) {
        this.name = name;
    }

    // Arrow function to return  current name 
    // As we discussed Arrow function can acces its Parent lexical Scope 
    // So it will return this instance name 
    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah"); // this.name = Sarah
const p = m.print; // Arrow function hold reference 
p(); // Sarah

// Output
// Sarah


/*

Arrow methods:

One function per instance (memory cost)

Not on prototype

Cannot be overridden via prototype

*/