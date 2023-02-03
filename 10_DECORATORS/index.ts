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
