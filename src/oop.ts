// Defining class: (without para mitre)
class Person {
    name: string;
    age: number;

    constructor() {
        ((this.name = ''), (this.age = 0)); //
    }
    // class er mage function thakle take method bole.
    // class ke kaje lagate hole 'new' key word use kore class use korte hoy. Eta ke instance bole.
    // It is a blue print.
    greet() {
        console.log(`Hello ${this.name}. Your age is ${this.age}`);
    }
}

const user1 = new Person();
user1.name = 'Sayed Rana';
user1.age = 44;
user1.greet();
const user2 = new Person();
user2.name = 'Tara Mony';
user2.age = 32;
user2.greet();

// Defining class: (with para mitre)
class Person1 {
    name: string;
    age: number;

    constructor(myName: string, myAge: number) {
        ((this.name = myName), (this.age = myAge)); //
    }
    greet() {
        console.log(`Hello ${this.name}. Your age is ${this.age}`);
    }
}

const user3 = new Person1('Rana', 45);
user3.greet();
const user4 = new Person1('Mony', 33);
user4.greet();
console.log(user4.name);

// Modifier: (public, private, protected)
// 1. public: access anywhere
// 2. private: access only class
// 3. protected: access class & sub class
class BankAccount {
    public accountName: string;
    private accountBalance: number;
    protected accountType: string;

    constructor(name: string, amount: number) {
        ((this.accountName = name), (this.accountBalance = amount));
        this.accountType = 'Savings';
    }

    public showBalance() {
        console.log(`Your balance is ${this.accountBalance}`);
    }
}
const account1 = new BankAccount('Rana', 10000);
account1.showBalance();

// inheritance:
// 1. parent class (Animal is parent class)
// 2. child class (Dog & Cat is child/sub class)
class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    move() {
        console.log(`The ${this.name} is moving...!`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Ghew Ghew');
    }
}
const myDog = new Dog('Tommy');
myDog.move();
myDog.bark();

class Cat extends Animal {
    shout() {
        console.log(`Meu Meu`);
    }
}
const myCat = new Cat('Mini');
myCat.move();
myCat.shout();

// implements keyword: [start & stop 2 tai use korte hobe. jodi ekta bad deya hoy tobe kaj hobe na]
interface DriveAble {
    start: () => void;
    stop: () => void;
}
class Car implements DriveAble {
    start() {
        console.log(`Car is started ...`);
    }
    stop() {
        console.log(`Car is stopped ...`);
    }
}
const myCar = new Car();
myCar.start();
myCar.stop();

//** project: */
// step-1: create an interface
interface IVehicle {
    brand: string;
    speed: number;
    move: () => void;
    // move(): void; // [move: ()=> void Or move(): void]
}
// step-2: create a parent class
class MyCar implements IVehicle {
    public brand: string;
    public speed: number;
    protected year: number =2025

    constructor(myBrand: string, carSpeed: number) {
        this.brand = myBrand;
        this.speed = carSpeed;
    }

    move() {
        console.log(`The ${this.brand} car is moving at ${this.speed} km/h.`);
    }
}
// step-3: create a child class:
class ElectricCar extends MyCar {
    charge() {
        console.log(`${this.brand} is charging ...! & it is invented at ${this.year}.`);
    }
}
// step-4: create an object
const teslaCar = new ElectricCar('Tesla M-3',120)
teslaCar.move()
teslaCar.charge()