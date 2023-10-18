function echo(nome: any) {
  return nome;
}
console.log(echo("João").length);
console.log(echo(33).length);
console.log(echo({ nome: "João", idade: 33 }));

//usando generics
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}
console.log(echoMelhorado("João").length);
console.log(echoMelhorado(33));
console.log(echoMelhorado({ nome: "João", idade: 33 }));

//Generics disponíveis na API
const avaliacoes: Array<number> = [4, 5.5, 6.3, 2];
avaliacoes.push(7.8);
// avaliacoes.push("5.5");
console.log(avaliacoes);

//Arrays
function imprimir<T>(array: T[]) {
  array.forEach((elemsnt) => {
    console.log(elemsnt);
  });
}

type Aluno = {
  nome: string;
  idade: number;
};
imprimir([1, 2, 3, 4]);
imprimir<string>(["Rubens", "Antonia", "Amália", "Arthur"]);
imprimir<Aluno>([
  { nome: "Rubens", idade: 33 },
  { nome: "Antonia", idade: 36 },
]);

//Tipo Genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Acionando"));

//Class com Generics
class OperacaoBinaria {
  constructor(public operador1: any, public operador2: any) {}

  executar() {
    return this.operador1 + this.operador2;
  }
}
console.log(new OperacaoBinaria("Bom", "dia").executar());
console.log(new OperacaoBinaria(5, 3).executar());
console.log(new OperacaoBinaria("Bom", 41).executar());
console.log(new OperacaoBinaria({}, {}).executar());

abstract class OperacaoBinaria1<T, R> {
  constructor(public operador1: T, public operador2: T) {}

  abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria1<number, number> {
  executar(): number {
    return this.operador1 + this.operador2;
  }
}
console.log(new SomaBinaria(3, 7).executar());
console.log(new SomaBinaria(5, 6).executar());

//Challenge
class DiferencaDatas extends OperacaoBinaria1<MyDate, string> {
  getTime(data: MyDate): number {
    let { day, month, year } = data;
    return new Date(`${month}/${day}/${year}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operador1);
    const t2 = this.getTime(this.operador2);
    const diferenca = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24;
    return `${Math.ceil(diferenca / dia)} dia(s)`;
  }
}
const d1 = new MyDate(5, 2, 1987);
const d2 = new MyDate(16, 10, 1990);
console.log(new DiferencaDatas(d1, d2).executar());

class Fila<T extends number | string> {
  private fila: Array<T>;
  constructor(...args: T[]) {
    this.fila = args;
  }

  entrada(elemento: T) {
    this.fila.push(elemento);
  }

  proximo(): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      console.log(primeiro);
      return primeiro;
    } else {
      console.log(null);
      return null;
    }
  }

  imprimir() {
    console.log(this.fila);
  }
}
const fila = new Fila<string>("Rubens", "Antonia", "Arthur");
fila.imprimir();
fila.entrada("Amalia");
fila.imprimir();
fila.proximo();
fila.imprimir();

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
  itens: Array<Par<C, V>> = new Array<Par<C, V>>();

  obter(chave: C): Par<C, V> | null {
    const resultado = this.itens.filter((i) => i.chave === chave);
    return resultado ? resultado[0] : null;
  }

  colocar(par: Par<C, V>) {
    const encontrado = this.obter(par.chave);
    if (encontrado) {
      encontrado.valor = par.valor;
    } else {
      this.itens.push(par);
    }
  }

  limpar() {
    this.itens = new Array<Par<C, V>>();
  }

  imprimir() {
    console.log(this.itens);
  }
}

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
