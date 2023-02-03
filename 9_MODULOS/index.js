"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
const gree_1 = __importDefault(require("./gree"));
(0, gree_1.default)();
// 2 - importando de variavel
const varible_1 = require("./varible");
console.log(varible_1.x);
// 3 - Multiplas importações
const multiplesExports_1 = require("./multiplesExports");
console.log(multiplesExports_1.a);
console.log(multiplesExports_1.b);
(0, multiplesExports_1.myFunction)();
// 4 - alias de importação
const changename_1 = require("./changename");
console.log(changename_1.someName);
// 5 - importudo tudo de um arquivo
const mynumbers = __importStar(require("./numbers"));
console.log(mynumbers);
console.log(mynumbers.n1);
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new User('João', 27);
console.log(joao);
