"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu  preço é R$${product.price}`);
    if (product.isAvalible) {
        console.log(`O produto está disponível`);
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvalible: true
};
showProductDetails(shirt);
function showUserdetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
showUserdetails({ email: 'pedro@gmail.com', role: 'admin' });
showUserdetails({ email: 'pedro@gmail.com' });
const fusca = {
    brand: 'VW',
    wheels: 4
};
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: 'Matheus',
    age: 30
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpoderes: [
        'voar',
        'super-força'
    ]
};
console.log(goku);
const arnold = {
    name: 'arnold',
    type: 'shortgun',
    caliber: 12
};
console.log(arnold);
// 7 - ReadOnlyArray
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão"
myArray.forEach(item => console.log(`Fruta: ${item}`));
myArray = myArray.map(item => `Fruta ${item}`);
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const user = ['Pedro', 20];
console.log(user);
