// @logarClasse
// @decorator({ a: "abc", b: 123 })
// @logarClasseSe(false)
// class Eletro {
//   constructor() {
//     console.log("Novo...");
//   }
// }
function logarClasse(constructor: Function) {
  console.log(constructor);
}
// new Eletro();
function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string; b?: number }) {
  return function (_: Function) {
    console.log(obj);
  };
}
// ---------------------------------->>><<<----------------------------

// @logarObj
// class Eletro1 {
//   constructor() {
//     console.log("Novo obj...");
//   }
// }

type Constructor = { new (...args: any[]): {} };
function logarObj(constructor: Constructor) {
  console.log("Carregando...");
  return class extends constructor {
    constructor(...args: any[]) {
      console.log("Antes...");
      super(...args);
      console.log("Depois...");
    }
  };
}
// new Eletro1();
// ---------------------------------->>><<<----------------------------

interface Eletro2 {
  imprimir?(): void;
}

// @imprimivel
// class Eletro2 {
//   constructor() {
//     console.log("Novo...");
//   }
// }

function imprimivel(constructor: Function) {
  constructor.prototype.imprimir = function () {
    console.log(this);
  };
}
// const eletro = new Eletro2();
// eletro.imprimir && eletro.imprimir();
// ---------------------------------->>><<<----------------------------

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: true,
};
@logarAdmin
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

new MudancaAdministrativa().critico();

function logarAdmin<T extends Constructor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error("Sem permissão");
      }
    }
  };
}
// ---------------------------------->>><<<----------------------------

class ContaCorrente {
  @naoNegativo
  private saldo: number;
  constructor(saldo: number) {
    this.saldo = saldo;
  }
  @congelar
  sacar(@paramInfo valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }
  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(12543.43);
cc.sacar(6000);
cc.sacar(6543.43);
cc.sacar(0.1);
console.log(cc.getSaldo());
// cc.getSaldo = function () {
//   return this["saldo"] + 7000;
// };
console.log(cc.getSaldo());

//Object.freeze()
function congelar(
  alvo: any,
  nomeMetodo: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomeMetodo);
  descritor.writable = false;
}

function naoNegativo(alvo: any, nomeMetodo: string) {
  delete alvo[nomeMetodo];
  Object.defineProperty(alvo, nomeMetodo, {
    get: function (): any {
      return alvo["_" + nomeMetodo];
    },
    set: function (valor: any): void {
      if (valor < 0) {
        throw new Error("Saldo Inválido");
      } else {
        alvo["_" + nomeMetodo] = valor;
      }
    },
  });
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo: ${alvo}`);
  console.log(`Nome metódo: ${nomeMetodo}`);
  console.log(`Índice Parametro: ${indiceParam}`);
}
// ---------------------------------->>><<<----------------------------
