// 1 - Campos em classe
class User {
    name!: string
    age!: number
}

const pedro = new User()

pedro.name = "Pedro"
pedro.age = 20

console.log(pedro)

// 2 - constructor
class NewUser {
    name: string
    age: number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
}

const jonh = new NewUser('Jonh', 12)

console.log(jonh)

// 3 - Campo readyonly
class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const car = new Car('Fusca')

console.log(car)

// 4 - herença e super
class Machine{
    name

    constructor(name: string){
        this.name = name
    }
}

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }

}

const trator: Machine = new Machine('Trator')
const destoy: KillerMachine = new KillerMachine("Destroy", 50)

console.log(trator)
console.log(destoy)

// 5 - Metodos
class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger")
    }
}

const jimy = new Dwarf("Jimy")
console.log(jimy.name)
jimy.greeting()
console.log(jimy)

// 6 - O this
class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do medelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo: Truck = new Truck('Volvo', 400)
const scania: Truck = new Truck('Scania', 500)

volvo.showDetails()
scania.showDetails()

// 7 - Getters
class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    
    public get fulName() : string {
        return `${this.name} ${this.surname}`
    }
    
}

const pedroG: Person = new Person("Pedro", "Gabriel")
console.log(pedroG.fulName)

// 8 - Setters
class Coords {

    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    
    public get X() : string {
        return `O valor de x é: ${this.x}`
    }
    

    public set fillX(x:number){
        this.x = x

        console.log(`O valor de x é: ${this.x}`)
    }

    public get Y() : string {
        return `O valor de y é: ${this.y}`
    }
    

    public set fillY(y:number){
        this.y = y

        console.log(`O valor de x é: ${this.y}`)
    }

}

const coords: Coords = new Coords(2,15)
console.log(coords.X)
console.log(coords.Y)
coords.fillX = 15
coords.fillX = 123

// 9 - Herança de interface
interface showTitle {
    intemTitle(): string 
}

class BlogPost implements showTitle {
    
    title

    constructor(title: string) {
        this.title = title
    }
    
    intemTitle(): string {
        return `O título do post é: ${this.title}`
    }
}

const myPost = new BlogPost("Hello World")

console.log(myPost.intemTitle())

// 10 - Override de Método
class Base {
    someMethod() {
        console.log("Alguma coisa")
    }
}

class Nova extends Base {
    someMethod(): void {
        console.log("Testanto outra coisa")
    }
}

const myObject = new Nova()
myObject.someMethod()

// 11 - Public
class C {
    x = 10
}

class Y extends C{

}

const CInstance = new C()
const YInstance = new Y()
console.log(CInstance.x)
console.log(YInstance.x)

// 12 - Protected

class J {
    protected y = 10

    
    public get Y() : string {
        return `${this.y}`
    }
    
}

class U extends J {

}

const JInstance: J = new J()
const UInstance: U = new U()
console.log(JInstance.Y)
console.log(UInstance.Y)

// 13 - Private
class PrivateClass {
    private name = "Private"

    
    public get showName() : string {
        return this.name
    }
    
}

const privateVariable = new PrivateClass()
console.log(privateVariable.showName)

// 14 - Generic Class
class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }
    
    public get showFirst(): T {
        return this.first
    }
}

const newItem = new Item("Caixa", "Surpresa")
console.log(newItem.showFirst)

// 15 - Parameters properties
class ParametersProprities {
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    public get showQty(): number {
        return this.qty
    }

    public get showPrice(): number {
        return this.price
    }
}

const newShirty = new ParametersProprities("Camisa", 5, 19.99)
console.log(newShirty.name)
// console.log(newShirty.qty)

// 16 - Class Expressions
const myClass = class <T> {
    name

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass("Jorge")
console.log(pessoa)

// 17 - Abstract class
abstract class AbstractClass {
    abstract showName(): void
}

class Pessoa extends AbstractClass {
    name: string

    constructor(name: string){
        super()
        this.name = name
    }

    showName(): void {
    console.log(`Olá user ${this.name}`)
    }
}

const user = new Pessoa("João")
user.showName()

// 18 - relações entre classes
class Dog {
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()
console.log(doguinho)
