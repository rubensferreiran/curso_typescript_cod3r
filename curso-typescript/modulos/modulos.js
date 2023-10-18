"use strict";
// import { areaCircunferencia } from "./circunferencia";
// import { areaRetangulo } from "./retangulo";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('Modulo carergado');
// console.log(areaCircunferencia(4));
// console.log(areaRetangulo(2, 5));
const circunferencia_1 = require("./circunferencia");
const retangulo_1 = __importDefault(require("./retangulo"));
console.log("Modulo carergado");
console.log(circunferencia_1.areaCircunferencia(4));
console.log(retangulo_1.default(2, 5));
const { digaOi } = require("./novo");
console.log(digaOi("Rubens"));
//# sourceMappingURL=modulos.js.map