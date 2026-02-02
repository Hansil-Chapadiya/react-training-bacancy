const obj1 = {
    name: null,
    age: 0,
    id : 0
}

const obj2 = {
    name : null,
    age : 0, 
    id : 0
}


function setProperty(name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
}


setProperty.call(obj1, "Hansil", 21, 1);
setProperty.apply(obj2, ["Alice", 21, 2]);

console.log(obj1);
console.log(obj2);
