// Creating class Counter
class Counter {
  static count = 0;
  count = 10;

  // Constructor
  constructor() {
    Counter.count++;
  }

  // Getter method for instance 
  getCount() {
    return this.count;
  }

  // Static method which shared by all instances
  // Get Class Variable
  static getStaticCount() {
    return this.count;
  }
}

// Creating Object 
const c1 = new Counter(); // increament Class/static variable by one
const c2 = new Counter(); // increament Class/static variable by one

console.log(c1.getCount());        // 10
console.log(Counter.getStaticCount()); // 2
// console.log(c1.getStaticCount());  //  Reference error
console.log(typeof Counter) // Give type of Counter which is function
console.log(typeof c1); // Give type of c1 which is object

