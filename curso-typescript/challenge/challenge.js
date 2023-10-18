"use strict";
//My
let listSupervisor = ["Rubens", "Antonia"];
function registerKnock(hour) {
    let messege = "";
    if (hour > 8) {
        messege = "Outside of schedule!";
        console.log(messege);
    }
    else if (hour <= 8) {
        messege = "Point normal!";
        console.log(messege);
    }
    return messege;
}
const employee = {
    supervisor: listSupervisor,
    knock: registerKnock(8),
};
console.log(employee);
const employeeTwo = {
    supervisor: ["Rubens", "Antonia"],
    knock(hour) {
        if (hour > 8) {
            return "Outside of schedule!";
        }
        else {
            return "Point normal!";
        }
    },
};
console.log(employeeTwo);
console.log(employeeTwo.knock(9));
console.log(employeeTwo.knock(8));
console.log(employeeTwo.supervisor);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//My
let dobro = (valor) => valor * 2;
console.log(dobro(10));
let dizerOla = (nome = "Pessoa") => {
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
let nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
let array = [55, 20, ...nums];
console.log(array.sort());
let notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
let cientista = { primeiroNome: "Will", experiencia: 12 };
let { primeiroNome: pn, experiencia: exp } = cientista;
console.log(pn, exp);
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar(buzina = "Tooooot") {
        console.log(buzina);
        return buzina;
    }
    acelerar(delta) {
        if (delta > 0) {
            this.velocidade = +delta;
        }
        else {
            this.velocidade = this.velocidade;
        }
        return delta;
    }
}
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Object2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Object2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 3);
console.log(retangulo.area());
// // Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get name() {
        return this._primeiroNome;
    }
    set name(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiario = new Estagiario();
estagiario.name = "Ru";
console.log(estagiario.name);
estagiario.name = "Rubens";
console.log(estagiario.name);
//# sourceMappingURL=challenge.js.map