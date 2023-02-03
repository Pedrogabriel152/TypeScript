"use strict";
// 1 - Campos em classe
class User {
}
const pedro = new User();
pedro.name = "Pedro";
pedro.age = 20;
console.log(pedro);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jonh = new NewUser('Jonh', 12);
console.log(jonh);
// 3 - Campo readyonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const car = new Car('Fusca');
console.log(car);
// 4 - herença e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const ;
