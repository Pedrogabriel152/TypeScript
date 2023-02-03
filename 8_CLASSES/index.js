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
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const trator = new Machine('Trator');
const destoy = new KillerMachine("Destroy", 50);
console.log(trator);
console.log(destoy);
// 5 - Metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger");
    }
}
const jimy = new Dwarf("Jimy");
console.log(jimy.name);
jimy.greeting();
console.log(jimy);
// 6 - O this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do medelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck('Volvo', 400);
const scania = new Truck('Scania', 500);
volvo.showDetails();
scania.showDetails();
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fulName() {
        return `${this.name} ${this.surname}`;
    }
}
const pedroG = new Person("Pedro", "Gabriel");
console.log(pedroG.fulName);
// 8 - Setters
class Coords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get X() {
        return `O valor de x é: ${this.x}`;
    }
    set fillX(x) {
        this.x = x;
        console.log(`O valor de x é: ${this.x}`);
    }
    get Y() {
        return `O valor de y é: ${this.y}`;
    }
    set fillY(y) {
        this.y = y;
        console.log(`O valor de x é: ${this.y}`);
    }
}
const coords = new Coords(2, 15);
console.log(coords.X);
console.log(coords.Y);
coords.fillX = 15;
coords.fillX = 123;
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    intemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new BlogPost("Hello World");
console.log(myPost.intemTitle());
// 10 - Override de Método
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testanto outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - Public
class C {
    constructor() {
        this.x = 10;
    }
}
class Y extends C {
}
const CInstance = new C();
const YInstance = new Y();
console.log(CInstance.x);
console.log(YInstance.x);
// 12 - Protected
class J {
    constructor() {
        this.y = 10;
    }
    get Y() {
        return `${this.y}`;
    }
}
class U extends J {
}
const JInstance = new J();
const UInstance = new U();
console.log(JInstance.Y);
console.log(UInstance.Y);
// 13 - Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    get showName() {
        return this.name;
    }
}
const privateVariable = new PrivateClass();
console.log(privateVariable.showName);
// 14 - Generic Class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return this.first;
    }
}
const newItem = new Item("Caixa", "Surpresa");
console.log(newItem.showFirst);
// 15 - Parameters properties
class ParametersProprities {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return this.qty;
    }
    get showPrice() {
        return this.price;
    }
}
const newShirty = new ParametersProprities("Camisa", 5, 19.99);
console.log(newShirty.name);
// console.log(newShirty.qty)
// 16 - Class Expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jorge");
console.log(pessoa);
// 17 - Abstract class
class AbstractClass {
}
class Pessoa extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`Olá user ${this.name}`);
    }
}
const user = new Pessoa("João");
user.showName();
// 18 - relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
