// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvalible: true
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu  preço é R$${product.price}`)
    if(product.isAvalible) {
        console.log(`O produto está disponível`)
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvalible: true
}

showProductDetails(shirt)

// 2 - proprieda opcional em ibnterface
interface User {
    email: string
    role?: string
}

function showUserdetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

showUserdetails({email:'pedro@gmail.com', role:'admin'})
showUserdetails({email:'pedro@gmail.com'})

// 3 - readyonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: 'VW',
    wheels: 4
}

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// 5 - Extends interface
interface Human {
    name: string
    age: number
}

interface superHuman extends Human {
    superpoderes: string[]
}

const matheus: Human = {
    name:'Matheus',
    age: 30
}

console.log(matheus)

const goku:superHuman ={
    name: "Goku",
    age: 50,
    superpoderes: [
        'voar',
        'super-força'
    ]
}
console.log(goku)

// 6 - intercectiuon tyupes
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWhitGun = Character & Gun

const arnold: HumanWhitGun = {
    name: 'arnold',
    type: 'shortgun',
    caliber: 12
}

console.log(arnold)

// 7 - ReadOnlyArray
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[3] = "Mamão"

myArray.forEach(item => console.log(`Fruta: ${item}`))

myArray = myArray.map(item => `Fruta ${item}`)

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1,2,3,4,5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const user = ['Pedro', 20]

console.log(user)

// 9 - tuplas com readyonly
function showNumbers(...numbers:readonly [number, number]): void{
    // numbers[0] = 12
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers(3,88665)