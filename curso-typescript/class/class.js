"use strict";
class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const bithday = new MyDate(16, 10, 1990);
console.log(bithday);
class ToDay {
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const toDay = new ToDay();
console.log(toDay);
//Chanllenge
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    //Method
    result() {
        return `${this.name} custon $${this.price} (off ${this.discount * 100}%)`;
    }
    priceDiscount() {
        let value = this.price * (1 - this.discount);
        // let value: number = this.price / (this.discount * 100);
        // value = this.price - value;
        return value;
    }
    resultDiscount() {
        return `Price is discount off $${this.priceDiscount()}`;
    }
}
const product1 = new Product("Smartphone", 299.0, 0.1);
console.log(product1.result());
// console.log(product1.priceDiscount());
console.log(product1.resultDiscount());
class Car {
    constructor(brand, model, maxSpeed = 200) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
    }
    changeSpeed(delta) {
        const newSpeed = this.currentSpeed + delta;
        const validateSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;
        if (validateSpeed) {
            this.currentSpeed = newSpeed;
        }
        else {
            this.currentSpeed = delta > 0 ? this.currentSpeed : 0;
        }
        return this.currentSpeed;
    }
    speedUp() {
        return this.changeSpeed(5);
    }
    // speedUp(value: number): number {
    //   return this.changeSpeed(value);
    // }
    break() {
        return this.changeSpeed(-5);
    }
}
const car1 = new Car("Ford", "Ká", 165);
console.log(car1);
// Array(50)
//   .fill(0)
//   .forEach(() => {
//     console.log(car1.speedUp(5));
//   });
Array(50)
    .fill(0)
    .forEach(() => car1.speedUp());
console.log(car1.speedUp());
Array(20)
    .fill(0)
    .forEach(() => car1.break());
console.log(car1.break());
class Ferrari extends Car {
    constructor(model, maxSpeed) {
        super("Ferrari", model, maxSpeed);
    }
    speedUp() {
        return this.changeSpeed(20);
    }
    break() {
        return this.changeSpeed(-15);
    }
}
const car2 = new Ferrari("F-40", 365);
console.log(car2);
console.log(car2.speedUp());
console.log(car2.break());
//Pillars POO => Encapsulation, Heritage, Polymorphism, Abstraction
//Getrs and Seters
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120) {
            this._age = value;
        }
    }
}
const persona = new Person();
persona.age = 20;
console.log(persona);
//Attributes and Static Methods
class Mathematics {
    static areaCircle(rain) {
        return this.PI * rain * rain;
    }
}
Mathematics.PI = 3.1416;
console.log(Mathematics.areaCircle(5));
//Class Abstract
class Calculation {
    constructor() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
}
class Some extends Calculation {
    execute(...numbrers) {
        this.result = numbrers.reduce((t, a) => t + a);
    }
}
class Multiplication extends Calculation {
    execute(...numbrers) {
        this.result = numbrers.reduce((t, a) => t * a);
    }
}
let some1 = new Some();
some1.execute(1, 3, 4, 7);
console.log(some1.getResult());
some1 = new Multiplication();
some1.execute(1, 3, 4, 7);
console.log(some1.getResult());
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.istance;
    }
    agora() {
        return new Date();
    }
}
Unico.istance = new Unico();
// const errado = new Unico();
console.log(Unico.getInstance().agora());
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("DC-8", "PT-342");
// turboHelice.modelo = "DC-90";
console.log(turboHelice);
//# sourceMappingURL=class.js.map