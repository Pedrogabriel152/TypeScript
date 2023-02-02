// 1 - type guard

function sum(a: number | string, b: number | string) {
    
    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a)+parseFloat(b))
    }else if(typeof a === "number" && typeof b === "string") {
        console.log(a+parseFloat(b))
    }else if(typeof a === "string" && typeof b === "number") {
        console.log(b+parseFloat(a))
    }else if(typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    }

}

sum("1", "55.09")
sum(12,1)

// 2 - checando se o valor existe
function operation(arr: number[], operation?: string | undefined) {
    
    let resul = 0

    if(!operation){
        return console.log("Defina a operação por favor")
    }

    if(operation === "soma") {
        resul = arr.reduce((i, total) => i + total)
        console.log(resul)
    }

    if(operation === "mitiplicacao") {
        resul = arr.reduce((i, total) => i * total)
        console.log(resul)
    }

}

operation([1,2,3], "soma")
operation([1,2,3,4,5,6,7], "mitiplicacao")

// 3 - instance of
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const Pedro = new User("Pedro")
const Jonas = new SuperUser("Jonas")

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name} deseja ver od dados do sistema`)
    } else if(user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(Pedro)
userGreeting(Jonas)

// 4 - operador in
class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog) {

    if('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log(`O cachorro é da raça Vira-lata`)
    }
}

showDogDetails(turca)
showDogDetails(bob)