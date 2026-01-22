/*

Predict the result of the following execution.

*/

function SmartPhone(brand) {
  this.brand = brand; //apple
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple"); 

/*

SmartPhone return new object :
so myPhone point new object reference 
so it becomes:

myPhone =  {
    brand : Generic,
    os: Android
}

and now myPhone doesn't have getBrand() method

*/

console.log(myPhone.brand);    // Generic
console.log(myPhone.getBrand); // undefined

