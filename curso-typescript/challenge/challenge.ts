//My
let listSupervisor: string[] = ["Rubens", "Antonia"];
function registerKnock(hour: number): any {
  let messege = "";
  if (hour > 8) {
    messege = "Outside of schedule!";
    console.log(messege);
  } else if (hour <= 8) {
    messege = "Point normal!";
    console.log(messege);
  }
  return messege;
}

const employee: { supervisor: string[]; knock: (hour: number) => string } = {
  supervisor: listSupervisor,
  knock: registerKnock(8),
};
console.log(employee);

//c0d3r
//Alias => apelido para o tipo
type Employee = { supervisor: string[]; knock: (hour: number) => string };

const employeeTwo: Employee = {
  supervisor: ["Rubens", "Antonia"],
  knock(hour: number): string {
    if (hour > 8) {
      return "Outside of schedule!";
    } else {
      return "Point normal!";
    }
  },
};
console.log(employeeTwo);
console.log(employeeTwo.knock(9));
console.log(employeeTwo.knock(8));
console.log(employeeTwo.supervisor);

//My
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};
let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};
let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);

//My
let dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

let dizerOla = (nome: string = "Pessoa"): void => {
  console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");

let nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums));
let array: number[] = [55, 20, ...nums];
console.log(array.sort());

let notas: number[] = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

let cientista = { primeiroNome: "Will", experiencia: 12 };
let { primeiroNome: pn, experiencia: exp } = cientista;
console.log(pn, exp);

// Exercício 1 - Classe
class Moto {
  constructor(public nome: string, public velocidade: number = 0) {}
  buzinar(buzina: string = "Tooooot"): string {
    console.log(buzina);
    return buzina;
  }
  acelerar(delta: number): number {
    if (delta > 0) {
      this.velocidade = +delta;
    } else {
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
abstract class Object2D {
  constructor(public base: number = 0, public altura: number = 0) {}

  abstract area(): number;
}

class Retangulo extends Object2D {
  area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 3);
console.log(retangulo.area());

// // Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = "";

  get name(): string {
    return this._primeiroNome;
  }

  set name(nome: string) {
    if (nome.length >= 3) {
      this._primeiroNome = nome;
    } else {
      this._primeiroNome = "";
    }
  }
}
const estagiario = new Estagiario();
estagiario.name = "Ru";
console.log(estagiario.name);
estagiario.name = "Rubens";
console.log(estagiario.name);
