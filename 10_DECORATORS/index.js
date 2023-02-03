"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  1 - exemplo decorator
function myDecorator() {
    console.log('iniciando Decorator');
    return function (target, propertKey, description) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(description);
        console.log('Fim do Decorator');
    };
}
class myClass {
    testing() {
        console.log("Terminado execução do metodo");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myobj = new myClass();
myobj.testing();
// 2 - Multiplos decorators
function a() {
    return function (target, propertKey, description) {
        console.log('Executou a');
    };
}
function b() {
    return function (target, propertKey, description) {
        console.log('Executou b');
    };
}
function c() {
    return function (target, propertKey, description) {
        console.log('Executou c');
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const Multiplos = new MultipleDecorators();
Multiplos.testing();
// 3 - decorator de classe
function classDecorator(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const user = new User('Pedro');
console.log(user);
// 4 - Decorator de método
function enumerable(value) {
    return function (target, propertKey, description) {
        description.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da maquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machine.prototype, "showName", null);
const trator = new Machine('trator');
console.log(trator);
console.log(trator.showName());
// 5 - Accessor decorator
