// 1 - importação de arquivos
import importGreet from "./gree";

importGreet()

// 2 - importando de variavel
import { x } from "./varible";

console.log(x)

// 3 - Multiplas importações
import { a, b, myFunction } from "./multiplesExports";

console.log(a)
console.log(b)
myFunction()

// 4 - alias de importação
import { someName as name } from "./changename";

console.log(name)

// 5 - importudo tudo de um arquivo
import * as mynumbers from './numbers'

console.log(mynumbers)
console.log(mynumbers.n1)

// 6 - importando tipos ou interface
import { Human } from "./mytype";
class User implements Human {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new User('João', 27)
console.log(joao)