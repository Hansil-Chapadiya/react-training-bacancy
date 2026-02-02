// Creating masterClone method
// its takes obj as parameter
function masterClone(obj){

    // Checking for primitive data types (Number, Double)
    if (obj == null || typeof obj != 'object'){
        return obj;
    }

    // Check whether it is object or array
    const deepcopy = Array.isArray(obj) ? [] : {};

    // Assign value to Array or object based on type 
    for(let i in obj){
        deepcopy[i] = masterClone(obj[i]);
    }

    // returning statement
    return deepcopy;
}

// Object creation
const obj = {
    
    // Simple Key/value
    property1: "p1",

    // nested object
    property2: {
        prop2 : "This is nested object"
    },

    // nested array
    property3: [
        1 ,3, 4, 5
    ],

    // array of object
    property4: [
        {
            obj1 : "obj1"
        },
        {
            obj2 : "obj2"
        }
    ],
}

// Deep Copy
console.log(masterClone(obj));

// Check whether both  are same or not
console.log(masterClone(obj) === obj);
