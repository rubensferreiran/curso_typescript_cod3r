//String
const firstName: string = "Rubens";
console.log(firstName);

//Number
const age: number = 33;
console.log(age);

//Boolean
const isMan: boolean = true;
console.log(isMan);

//Array value any
const typeArray: any[] = [firstName, age, isMan];
console.log(typeArray);

//Array value defined
const tuplaArray: [string, number, boolean] = [firstName, age, isMan];
console.log(tuplaArray);

//Enums
enum Color {
  Green = "GREEN",
  Blue = 100,
  Red = "red",
}
const myColor: Color = Color.Green;
console.log(myColor);

//Any
let car: any = "BMW";
console.log(car);
car = {
  marca: "BMW",
  ano: 1990,
};
console.log(car);

//Function
function returnName(): string {
  return firstName;
}
console.log(returnName());
//return void
function hey(): void {
  console.log("Hey!");
}
hey();
//return number
function some(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(some(12, 23));

//Type Function
let calculation: (x: number, y: number) => number;
calculation = some;
console.log(calculation(2, 3));

//Object
let user: { name: string; age: number } = {
  name: firstName,
  age: age,
};
console.log(user);

//Union types
let note: number | string = 10;
console.log(`My's note ${note}!`);
note = "ten";
console.log(`My's note ${note}!`);

//Checkinh type
let number = 20;
if (typeof number === "number") {
  console.log("Is number!");
} else {
  console.log(typeof number);
}

//Never
function failure(msg: string): never {
  throw new Error(msg);
}
let product = {
  name: "Car",
  price: 2000,
  validateProduct() {
    if (!this.name || this.name.trim().length === 0) {
      failure("Need a name!");
    }
    if (this.price <= 0) {
      failure("Price is invalid!");
    }
  },
};
product.validateProduct();

//Type null
let option: null | number = 10;
console.log(option);
type Contact = {
  name: string;
  phone1: string;
  phone2: null | string;
};
let contact: Contact = {
  name: "Rubens",
  phone1: "99999-9999",
  phone2: null,
};
console.log(contact);

//Callback
function esperar3s(callback: (dados: string) => void) {
  setTimeout(() => {
    callback("Depois de 3s...");
  }, 3000);
}
esperar3s((resultado: string) => {
  console.log(resultado);
});

//Promisses
function esperar3sPromise() {
  return new Promise((resolved: any) => {
    setTimeout(() => {
      resolved("Depois de 3s promise...");
    }, 3000);
  });
}
esperar3sPromise().then((dados) => {
  console.log(dados);
});

fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((personagem) => personagem.films)
  .then((resFilme) => fetch(resFilme[0]))
  .then((filme) => filme.json())
  .then((filmes) => filmes.planets)
  .then((planets) => fetch(planets[0]))
  .then((resPlanet) => resPlanet.json())
  .then((planet) => console.log(planet));
