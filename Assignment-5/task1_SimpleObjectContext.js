/*

Simple Object Context

*/


// Object Creation 
const laptop = {

    // Declaring Field
    brand: "Dell",

    // Function Expression
    getBrand: function() {

        // curren brand returning
        return this.brand;
    }
};

// Creating variable that hold the reference of laptop object reference
// laptop object bind getBrand(); function 
// this will print Dell because we call function using reference of laptop object
const myBrand = laptop.getBrand();

// output : Dell
console.log(myBrand)
