"use strict";
// 1 - Arrays
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]);
// numbers = "teste";
//  2 - tipo any 
let w = 12;
w = "ola";
// 3 - tipo de parâmetro
function somar(n1, n2) {
    console.log(n1 + n2);
}
// 4 - tipo de retorno
function somarRetorno(n1, n2) {
    return n1 + n2;
}
// 5 - Função anoniumas
setTimeout(function () {
    const sallary = 1200;
    // console.log(parseFloat(sallary))
}, 2000);
//  6 - Tipos de objetos
const pessoa = {
    nome: "Pedro",
    idade: 20
};
// 7 - Propiedades opcionais
const pessoa1 = {
    nome: "Pedro",
    idade: 20
};
// 8 - Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (!lastName) {
        console.log(`Olá, ${firstName}`);
        return;
    }
    console.log(`Olá, ${firstName} ${lastName}`);
}
advancedGreeting("Pedro");
advancedGreeting("Lucas", "Gabriel");
// 9 - Union types
function showBalance(balance) {
    console.log(`O seu saldo é de ${balance}`);
}
showBalance(1000);
showBalance("2000");
// 10 - Avançando em union types
function showUserRoler(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRoler("Programador"));
console.log(showUserRoler(false));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId("2300");
function showCoords(objs) {
    console.log(`X: ${objs.x} Y: ${objs.y} Z: ${objs.z}`);
}
const coordObj = {
    x: 1,
    y: 45,
    z: 76
};
showCoords(coordObj);
const somePerson = {
    name: "Pedro",
    age: 29
};
console.log(somePerson);
// type personType = {
//     age: number
// }
// 14 - literal types
let test;
test = "testando";
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("right");
// 15 - Non-null Assertion Operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// 16 - bigint
let n;
// n = 1
n = 1000n;
// 17 - Symbol
const symbolA = Symbol("A");
const symbolB = Symbol("A");
console.log(symbolA);
console.log(symbolB);
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
