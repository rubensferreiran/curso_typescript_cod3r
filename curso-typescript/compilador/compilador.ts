let canal: string = "Brazil JS";
let inscritos: number = 610451;
// canal = inscritos;
console.log(`Canal - ${canal}`);

//Quando a uma variavel declarada dentro do mesmo escopo, o complidaro emite um error.
// let name: string = "Antonia";

let qualquerCoisa;
qualquerCoisa = "Coisa qualquer";
qualquerCoisa = 123;

function saudar(isManha: boolean, horas: number): string {
  let a: number;
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom dia!";
  } else {
    saudacao = "Boa vida!";
  }
  return saudacao;
}
