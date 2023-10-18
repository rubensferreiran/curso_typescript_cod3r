interface Humano {
  nome: string;
  idade?: number;
  [props: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Antonia";
}

const pessoa: Humano = {
  nome: "Rubens",
  idade: 33,
  saudar(sobrenome: string) {
    console.log("Meu nome é " + this.nome + " " + sobrenome);
  },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Arthur", idade: 16, altura: 1.51 });
pessoa.saudar("Ferreira");

//usando classes
class Cliente implements Humano {
  nome: string = "";
  saudar(sobrenome: string): void {
    console.log(`Meu nome é ${this.nome} ${sobrenome}`);
  }
  ultimaCompra: Date = new Date();
}
const meuCliente = new Cliente();
meuCliente.nome = "Amália";
saudarComOla(meuCliente);
meuCliente.saudar("Nogueira");
console.log(meuCliente.ultimaCompra);

//Interface Funcão

interface FuncaoCalcular {
  (a: number, b: number): number;
}
let potencia: FuncaoCalcular;
potencia = function (base: number, exp: number): number {
  // return base ** exp;
  // return Math.pow(base, exp);
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};
console.log(potencia(2, 8));

//Herança
interface A {
  a(): void;
}
interface B {
  b(): void;
}
interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealB implements B {
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstractABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

interface Object {
  log(): void;
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
