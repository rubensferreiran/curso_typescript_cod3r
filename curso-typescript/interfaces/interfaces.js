"use strict";
function saudarComOla(pessoa) {
    console.log("Olá " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Antonia";
}
const pessoa = {
    nome: "Rubens",
    idade: 33,
    saudar(sobrenome) {
        console.log("Meu nome é " + this.nome + " " + sobrenome);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Arthur", idade: 16, altura: 1.51 });
pessoa.saudar("Ferreira");
//usando classes
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log(`Meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Amália";
saudarComOla(meuCliente);
meuCliente.saudar("Nogueira");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // return base ** exp;
    // return Math.pow(base, exp);
    return Array(exp)
        .fill(base)
        .reduce((t, a) => t * a);
};
console.log(potencia(2, 8));
class RealA {
    a() { }
}
class RealB {
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 1;
const y = 2;
const z = 3;
x.log();
y.log();
z.log();
const cli = {
    nome: "Rainmunda",
    toString() {
        return this.nome;
    },
};
cli.log();
//# sourceMappingURL=interfaces.js.map