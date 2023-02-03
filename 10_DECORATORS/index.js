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
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Nome do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const monster = new Monster('Chamander', 10);
console.log(monster);
// 6 - Porperty decorator
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
console.log(newItem);
// 7 - Exemplo real de Class Decorator
function createdate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(55);
console.log(newBook);
console.log(newPen.createdAt);
// 8 - Exemplo real de Method Decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction)
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
// 9 - Exemplo real de Property Decorator
function Max(limit) {
    return function (target, propertKey) {
        let value;
        const getter = () => value;
        const setter = (newVal) => {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos`);
                return;
            }
            value = newVal;
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const pedro = new Admin('Pedro1234567');
const lee = new Admin('lee');
console.log(lee);
