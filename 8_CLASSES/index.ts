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

const 