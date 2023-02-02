// 1 - Arrays
let numbers: number[] = [1,2,3]
numbers.push(4)

console.log(numbers[2])

// numbers = "teste";

//  2 - tipo any 

let w: any = 12

w = "ola";

// 3 - tipo de parâmetro

function somar(n1:number, n2: number) {
    console.log(n1+n2)
}

// 4 - tipo de retorno

function somarRetorno(n1:number, n2: number): number {
    return n1+n2
}

// 5 - Função anoniumas
setTimeout(function () {
    
    const sallary: number = 1200

    // console.log(parseFloat(sallary))

}, 2000);

//  6 - Tipos de objetos
const pessoa: {nome: string, idade: number} = {
    nome: "Pedro",
    idade: 20
}

// 7 - Propiedades opcionais
const pessoa1: {nome: string, sobrenome?: string, idade: number} = {
    nome: "Pedro",
    idade: 20
}

// 8 - Validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string): any {

    if(!lastName) {
        console.log(`Olá, ${firstName}`)
        return
    }

    console.log(`Olá, ${firstName} ${lastName}`)

}

advancedGreeting("Pedro");
advancedGreeting("Lucas", "Gabriel")

// 9 - Union types
function showBalance(balance: string | number) {
    console.log(`O seu saldo é de ${balance}`)
}

showBalance(1000)
showBalance("2000")

// 10 - Avançando em union types
function showUserRoler(role: string | boolean) {
    
    if(typeof role === "boolean") {
        return "Usuário não aprovado"
    }

    return `A função do usuário é: ${role}`

}

console.log(showUserRoler("Programador"))
console.log(showUserRoler(false))

// 11 - type Alias
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId("2300")

// 12 - Interfaces
interface Point {
    x: number,
    y: number,
    z: number
}

function showCoords(objs: Point) {

    console.log(`X: ${objs.x} Y: ${objs.y} Z: ${objs.z}`)

}

const coordObj: Point ={
    x:1,
    y: 45,
    z: 76
}

showCoords(coordObj)

// 13 - Inbterface X type alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {
    name: "Pedro",
    age: 29
}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 14 - literal types
let test: "testando";

test = "testando"

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("right")

// 15 - Non-null Assertion Operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

// 16 - bigint
let n: bigint

// n = 1
n = 1000n

// 17 - Symbol
const symbolA: symbol = Symbol("A")
const symbolB: symbol = Symbol("A")

console.log(symbolA)
console.log(symbolB)
console.log(symbolA == symbolB)
console.log(symbolA === symbolB)