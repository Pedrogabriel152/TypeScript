"use strict";
// 1 - Tipo void
function semRetorno() {
    console.log("Está função não retorna nada");
}
semRetorno();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Pedro");
// 3 - Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(['qs', 1, 2, 'a']));
function mergeObject(objs, objs2) {
    return {
        ...objs,
        ...objs2
    };
}
const objt = mergeObject({ name: 'Pedro' }, { age: 20, job: "Programador" });
console.log(objt);
// 4 - Constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
        return biggest;
    }
    biggest = b;
    return biggest;
}
console.log(biggestNumber("3", "1"));
// 5 - definindo tipos de parametros
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3, 4, 5], [1, 5, 6]));
console.log(mergeArray([1, 2, 3, 4, 5], ['teste', 'iua', 2]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}, tudo bem?`);
        return;
    }
    console.log(`Olá ${name}, tudo bem?`);
}
modernGreeting("Pedro");
modernGreeting("Sir", "João");
// 7 - parametro default
function somaDefault(n, m = 10) {
    console.log(n + m);
}
somaDefault(10);
somaDefault(45, 87);
// 8 - tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
