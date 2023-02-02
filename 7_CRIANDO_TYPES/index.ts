// 1 - Generics
function showData<T>(arg: T):string {
    return `O dado é ${arg}`
}

console.log(showData(5))
console.log(showData("testando o generic"))

// 2 - Constraint em Generics
function showProductName<T extends {name: string}>(obj: T): string {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name:"Porta", cor:"Branca"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObj = {price: 19.99, category:"Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj))

// 3 - Generics com Interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "Rosa"
}

const myPen: Pen = {
    name:"Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul"
}

console.log(myCar)
console.log(myPen)

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(objs: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${objs[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server,'ram'))

// 5 - Keyof Type Operator
type character = {name: string, age: number, hasDriveLicence: boolean}

type C = keyof character

function showCharName(obj: character, name: C): string {
    return `${obj[name]}`
}

const myChar: character = {
    name: "Pedro",
    age: 20,
    hasDriveLicence: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
console.log(showCharName(myChar, 'hasDriveLicence'))

// 6 - typeof type Operator
const username: string =  "Pedro"

const username2: typeof username = 'João'

// const username3: typeof username = 86532

type x = typeof username

// 7 - indexed Access types
type Truck = {
    Km: number,
    kg: number,
    description: string
}

type Km = Truck['Km']

const newTruck: Truck = {
    Km: 100000,
    kg: 5000,
    description: 'Caminhão para pouca carga' 
}

function showKm(km: Km) {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.Km)
showKm(newTruck.kg)

// 8 - Conditional Expressions Type
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 12

type myType2 = Teste extends {showName(): string} ? string : boolean

// const teste: myType2 = true

//  9 - templete literals types
type TestA = 'texte'

type CustomType = `some ${TestA}`

const testing: CustomType = "some texte"