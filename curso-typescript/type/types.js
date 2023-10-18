"use strict";
//String
const firstName = "Rubens";
console.log(firstName);
//Number
const age = 33;
console.log(age);
//Boolean
const isMan = true;
console.log(isMan);
//Array value any
const typeArray = [firstName, age, isMan];
console.log(typeArray);
//Array value defined
const tuplaArray = [firstName, age, isMan];
console.log(tuplaArray);
//Enums
var Color;
(function (Color) {
    Color["Green"] = "GREEN";
    Color[Color["Blue"] = 100] = "Blue";
    Color["Red"] = "red";
})(Color || (Color = {}));
const myColor = Color.Green;
console.log(myColor);
//Any
let car = "BMW";
console.log(car);
car = {
    marca: "BMW",
    ano: 1990,
};
console.log(car);
//Function
function returnName() {
    return firstName;
}
console.log(returnName());
//return void
function hey() {
    console.log("Hey!");
}
hey();
//return number
function some(num1, num2) {
    return num1 + num2;
}
console.log(some(12, 23));
//Type Function
let calculation;
calculation = some;
console.log(calculation(2, 3));
//Object
let user = {
    name: firstName,
    age: age,
};
console.log(user);
//Union types
let note = 10;
console.log(`My's note ${note}!`);
note = "ten";
console.log(`My's note ${note}!`);
//Checkinh type
let number = 20;
if (typeof number === "number") {
    console.log("Is number!");
}
else {
    console.log(typeof number);
}
//Never
function failure(msg) {
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
let option = 10;
console.log(option);
let contact = {
    name: "Rubens",
    phone1: "99999-9999",
    phone2: null,
};
console.log(contact);
//Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback("Depois de 3s...");
    }, 3000);
}
esperar3s((resultado) => {
    console.log(resultado);
});
//Promisses
function esperar3sPromise() {
    return new Promise((resolved) => {
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
//# sourceMappingURL=types.js.map