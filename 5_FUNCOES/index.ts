// 1 - Tipo void
function semRetorno(): void {
    console.log("Está função não retorna nada") 
}

semRetorno()

// 2 - callback como argumento
function greeting(name: string) {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {

    console.log("Preparando a função!")

    const greet = f(userName)

    console.log(greet)

}

preGreeting(greeting, "Pedro")

// 3 - Generic functions
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1,2,3,4]))
console.log(firstElement(['qs',1,2,'a']))

function mergeObject<U, T>(objs: U, objs2: T){

    return {
        ...objs,
        ...objs2
    }

}

const objt = mergeObject({name: 'Pedro'}, {age: 20, job: "Programador"})

console.log(objt)

// 4 - Constraints
function biggestNumber<T extends number | string>(a: T, b: T): T{
    let biggest: T

    if(+a > +b) {
        biggest = a
        return biggest
    }

    biggest = b 
    return biggest
}

console.log(biggestNumber("3","1"))

// 5 - definindo tipos de parametros
function mergeArray<T>(arr1: T[], arr2: T[]):T[] {
    return arr1.concat(arr2)
}

console.log(mergeArray([1,2,3,4,5], [1,5,6]))

console.log(mergeArray<number | string>([1,2,3,4,5], ['teste','iua',2]))

// 6 - parametros opcionais
function modernGreeting(name: string, greet?: string){
    if(greet){
        console.log(`Olá ${greet} ${name}, tudo bem?`)
        return
    }

    console.log(`Olá ${name}, tudo bem?`)
}

modernGreeting("Pedro")
modernGreeting("Sir", "João")

// 7 - parametro default
function somaDefault(n: number, m = 10) {
    console.log(n+m)
}

somaDefault(10)
somaDefault(45,87)

// 8 - tipo unknown
function doSomething(x: unknown) {
    if(Array.isArray(x)){
        console.log(x[0])
    }
}

// 9 - never
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

// showErrorMessage("Error")

// 10 - Rest operator
function sumAll(...n: number[]): void {
    console.log(n.reduce((number, sum) => sum + number))
}

sumAll(12,1,1,23,4,5,6,32)

// 11 - destructuring como parametro
function showProdtctDetails({name, price}: {name: string, price: number}):string {
    return `O nopme do produto é ${name} e ele custa R$${price}`
}

console.log(showProdtctDetails({name:"Camisa", price:14}))
