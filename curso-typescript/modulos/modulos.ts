// import { areaCircunferencia } from "./circunferencia";
// import { areaRetangulo } from "./retangulo";

// console.log('Modulo carergado');

// console.log(areaCircunferencia(4));
// console.log(areaRetangulo(2, 5));
import { areaCircunferencia as circ } from "./circunferencia";
import retangulo from "./retangulo";

console.log("Modulo carergado");

console.log(circ(4));
console.log(retangulo(2, 5));

const { digaOi } = require("./novo");
console.log(digaOi("Rubens"));
