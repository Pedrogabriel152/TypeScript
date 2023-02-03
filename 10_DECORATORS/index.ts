//  1 - exemplo decorator
function myDecorator() {
    
    console.log('iniciando Decorator')

    return function(target: any, propertKey: string, description: PropertyDescriptor) {

        console.log("Executando decorator")
        console.log(target)
        console.log(propertKey)
        console.log(description)

        console.log('Fim do Decorator')

    }

}

class myClass {
    @myDecorator()
    testing() {
        console.log("Terminado execução do metodo")
    }
}

const myobj = new myClass()
myobj.testing()

// 2 - Multiplos decorators
function a() {
    return function(
        target: any, 
        propertKey: string, 
        description: PropertyDescriptor
    ) {
        console.log('Executou a')
    }
}

function b() {
    return function(
        target: any, 
        propertKey: string, 
        description: PropertyDescriptor
    ) {
        console.log('Executou b')
    }
}

function c() {
    return function(
        target: any, 
        propertKey: string, 
        description: PropertyDescriptor
    ) {
        console.log('Executou c')
    }
}

class MultipleDecorators {
    @c()
    @a()
    @b()
    testing(){
        console.log("Terminando execução")
    }
}

const Multiplos = new MultipleDecorators()
Multiplos.testing()

// 3 - decorator de classe
function classDecorator(constructor: Function){
    console.log(constructor.name)

    if(constructor.name === "User"){
        console.log("Criando usuário")
    }
}

@classDecorator
class User{
    name

    constructor(name: string){
        this.name = name
    }
}

const user = new User('Pedro')

console.log(user)

// 4 - Decorator de método
function enumerable(value: boolean) {
    return function(
        target: any, 
        propertKey: string, 
        description: PropertyDescriptor
    ) {
        description.enumerable = value
    }
}

class Machine {
    name

    constructor(name:string) {
        this.name = name
    }

    @enumerable(true)
    showName(): string {
        console.log(this)
        return `O nome da maquina é: ${this.name}`
    }
}

const trator = new Machine('trator')

console.log(trator)
console.log(trator.showName())

// 5 - Accessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    public get showName() : string {
        return `Nome do monstro: ${this.name}`
    }
    
    @enumerable(false)
    public get showAge() : string {
        return `Nome do monstro: ${this.age}`
    }
}

const monster = new Monster('Chamander', 10)

console.log(monster)

// 6 - Porperty decorator
function formatNumber(): Function {
    return function(target: Object, propertKey: string) {

        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target,propertKey, {
            set: setter,
            get: getter
        })

    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID('1')

console.log(newItem)

// 7 - Exemplo real de Class Decorator
function createdate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdate
class Pen {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)
const newPen = new Pen(55)
console.log(newBook)
console.log(newPen.createdAt)

// 8 - Exemplo real de Method Decorator
function checkIfUserPosted(): Function {
    
    return function(
        target:  Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor
    ){

        const childFunction = descriptor.value
        // console.log(childFunction)
        descriptor.value= function(...args: any[]) {
            if(args[1] === true) {
                console.log("Usuário já postou")
                return null
            } else {
                return childFunction.apply(this,args)
            }
        }

    }

}

class Post{
    alreadyPosted: boolean = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()

newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu primeiro post!", newPost.alreadyPosted)

// 9 - Exemplo real de Property Decorator
function Max(limit: number): Function {

    return function(
        target: Object,
        propertKey: string
    ) {
        let value: string

        const getter = () => value

        const setter = (newVal:string) => {
            if(newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos`)
                return
            }

            value = newVal
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }

}

class Admin {
    @Max(10)
    username

    constructor(username: string){
        this.username = username
    }
}

const pedro = new Admin('Pedro1234567')
const lee = new Admin('lee')
console.log(lee)
