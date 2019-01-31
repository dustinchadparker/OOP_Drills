let person1 = {
    name: "Charlie",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let person2 = {
    name: "Charlie2",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let person3 = {
    name: "Charlie3",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let person4 = {
    name: "Charlie4",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let person5 = {
    name: "Charlie5",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();


function WhoYou(name, city, age) {

    this.name = name;
    this.city = city;
    this.age = age;

}

WhoYou.prototype.details = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`);
}

let person1x = new WhoYou("Marky", "the attic", 30);
person1x.details();
let person2x = new WhoYou("Ricky", "the ham", 22);
person2x.details();
let person3x = new WhoYou("Danny", "the basement", 77);
person3x.details();
let person4x = new WhoYou("Terry", "the garage", 44);
person4x.details();
let person5x = new WhoYou("Mikey", "the shed", 66);
person5x.details();



class WhoYouES6 {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    getDetails() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`);
    }
}

let person1ES6 = new WhoYouES6("Marky", "the attic", 30);
person1ES6.getDetails();
let person2ES6 = new WhoYouES6("Ricky", "the ham", 22);
person2ES6.getDetails();
let person3ES6 = new WhoYouES6("Danny", "the basement", 77);
person3ES6.getDetails();
let person4ES6 = new WhoYouES6("Terry", "the garage", 44);
person4ES6.getDetails();
let person5ES6 = new WhoYouES6("Mikey", "the shed", 66);
person5ES6.getDetails();

class Vehicle {
    constructor(type, manuf, numWheels) {
        this.type = type;
        this.manuf = manuf;
        this.numWheels = numWheels;
    }

    aboutVehicle() {
        console.log(`This is a ${this.type} made by ${this.manuf} with ${this.numWheels} wheels.`);
    }
}


class Truck extends Vehicle {
    constructor(type, manuf, numWheels, numDoors, truckBed) {
        super(type, manuf, numWheels);
        this.numDoors = numDoors;
        this.truckBed = truckBed;
    }
    aboutVehicle() {
        console.log(`This is a ${this.type} made by ${this.manuf} with ${this.numWheels} wheels and ${this.numDoors} doors and ${this.truckBed} truckbeds.`);
    }
}

class Sedan extends Vehicle {
    constructor(type, manuf, numWheels, size, mpg) {
        super(type, manuf, numWheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This is a ${this.size} ${this.type} made by ${this.manuf} with ${this.numWheels} wheels and gets ${this.mpg} mpg.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manuf, numWheels, handlebars, noDoors) {
        super(type, manuf, numWheels);
        this.handlebars = handlebars;
        this.noDoors = noDoors;

    }

    

    aboutVehicle() {
        console.log(`This is a ${this.type} with ${this.handlebars} handlebars, ${this.noDoors} doors, made by ${this.manuf} with ${this.numWheels} wheels.`);
    }
}



v1 = new Sedan("Sedan", "Honda", "fifty", "small", 22);
v1.aboutVehicle();

v2 = new Truck("Truck", "Ford", "4", 4 , 1);
v2.aboutVehicle();

v3 = new Motorcycle("Motorcycle", "Honda", "2", 1 , 0);
v3.aboutVehicle();