"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("testando o generic"));
// 2 - Constraint em Generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "Rosa"
};
const myPen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul"
};
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(objs, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${objs[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Pedro",
    age: 20,
    hasDriveLicence: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicence'));
// 6 - typeof type Operator
const username = "Pedro";
const username2 = 'João';
const newTruck = {
    Km: 100000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.Km);
showKm(newTruck.kg);
const someVar = 12;
const testing = "some texte";
