"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @logarClasse
// @decorator({ a: "abc", b: 123 })
// @logarClasseSe(false)
// class Eletro {
//   constructor() {
//     console.log("Novo...");
//   }
// }
function logarClasse(constructor) {
    console.log(constructor);
}
// new Eletro();
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj);
    };
}
function logarObj(constructor) {
    console.log("Carregando...");
    return class extends constructor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
// @imprimivel
// class Eletro2 {
//   constructor() {
//     console.log("Novo...");
//   }
// }
function imprimivel(constructor) {
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
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
};
MudancaAdministrativa = __decorate([
    logarAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function logarAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão");
            }
        }
    };
}
// ---------------------------------->>><<<----------------------------
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
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
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
function naoNegativo(alvo, nomeMetodo) {
    delete alvo[nomeMetodo];
    Object.defineProperty(alvo, nomeMetodo, {
        get: function () {
            return alvo["_" + nomeMetodo];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo Inválido");
            }
            else {
                alvo["_" + nomeMetodo] = valor;
            }
        },
    });
}
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Nome metódo: ${nomeMetodo}`);
    console.log(`Índice Parametro: ${indiceParam}`);
}
// ---------------------------------->>><<<----------------------------
//# sourceMappingURL=decorators.js.map