function Vehicle(name) {
    this.name = name
}

Vehicle.prototype.startEngine = function () {
    console.log("Vehicle Started");
}

function Car(name, price) {
    Vehicle.call(this, name);
    this.price = price;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;

Car.prototype.kmrun = function (km) {
    console.log("Name : " + this.name);
    console.log("Price : " + this.price);
    console.log(km + " Passed");
}


const c1 = new Car("Farari", 10000);
c1.kmrun(90);

if (c1.__proto__ === Car.prototype) {
    console.log('True');

    if (Car.prototype.__proto__ === Vehicle.prototype) {

        console.log('True 1');

        if (Vehicle.prototype.__proto__ === Object.prototype) {

            console.log('True 2');

            if (Object.prototype.__proto__ === null) {

                console.log('True 3');

            }

        }
    }


};



