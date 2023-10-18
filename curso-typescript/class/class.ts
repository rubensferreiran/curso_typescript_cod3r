class MyDate {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const bithday = new MyDate(16, 10, 1990);
console.log(bithday);

class ToDay {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970
  ) {}
}
const toDay = new ToDay();
console.log(toDay);

//Chanllenge
class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0
  ) {}
  //Method
  result(): string {
    return `${this.name} custon $${this.price} (off ${this.discount * 100}%)`;
  }

  priceDiscount(): number {
    let value: number = this.price * (1 - this.discount);
    // let value: number = this.price / (this.discount * 100);
    // value = this.price - value;
    return value;
  }

  resultDiscount(): string {
    return `Price is discount off $${this.priceDiscount()}`;
  }
}
const product1 = new Product("Smartphone", 299.0, 0.1);
console.log(product1.result());
// console.log(product1.priceDiscount());
console.log(product1.resultDiscount());

class Car {
  private currentSpeed: number = 0;

  constructor(
    public brand: string,
    public model: string,
    public maxSpeed: number = 200
  ) {}

  protected changeSpeed(delta: number): number {
    const newSpeed = this.currentSpeed + delta;
    const validateSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;
    if (validateSpeed) {
      this.currentSpeed = newSpeed;
    } else {
      this.currentSpeed = delta > 0 ? this.currentSpeed : 0;
    }

    return this.currentSpeed;
  }

  speedUp(): number {
    return this.changeSpeed(5);
  }
  // speedUp(value: number): number {
  //   return this.changeSpeed(value);
  // }

  break(): number {
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
  constructor(model: string, maxSpeed: number) {
    super("Ferrari", model, maxSpeed);
  }
  speedUp(): number {
    return this.changeSpeed(20);
  }
  break(): number {
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
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
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
  static PI: number = 3.1416;

  static areaCircle(rain: number): number {
    return this.PI * rain * rain;
  }
}
console.log(Mathematics.areaCircle(5));

//Class Abstract
abstract class Calculation {
  protected result: number = 0;

  abstract execute(...numbrers: number[]): void;

  getResult(): number {
    return this.result;
  }
}

class Some extends Calculation {
  execute(...numbrers: number[]): void {
    this.result = numbrers.reduce((t, a) => t + a);
  }
}

class Multiplication extends Calculation {
  execute(...numbrers: number[]): void {
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
  private static istance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return Unico.istance;
  }

  agora() {
    return new Date();
  }
}
// const errado = new Unico();
console.log(Unico.getInstance().agora());

class Aviao {
  //readonly - somente leitura
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}
const turboHelice = new Aviao("DC-8", "PT-342");
// turboHelice.modelo = "DC-90";
console.log(turboHelice);
