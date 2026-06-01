/**union and intersection */
// 1. union type: [(|) union means অথবা]
type ProductId = string | number;
function getProduct(id: ProductId) {
    // console.log(`Fetching product with ID: ${id}`);
}
getProduct(123);

// 2. intersection type: [(&) intersection means এবং >> দুটো মানই ব্যবহার করতে হবে।]
type User = {
    id: number;
    name: string;
};
type Admin = {
    isAdmin: boolean;
};
type AdminUser = User & Admin;
const user1: AdminUser = {
    id: 121,
    name: 'rana',
    isAdmin: true,
};
// console.log(user1);
// console.log(user1.name);

// 3. literal type:
type Action = 'start' | 'pause' | 'stop' | 'submit' | 'reset';
function handleAction(action: Action) {
    // console.log(`Action: ${action}`);
}
handleAction('submit');
handleAction('reset');

// 4. type narrow:
function processInput(value: string | number) {
    if (typeof value === 'string') {
        // console.log(value.toUpperCase())
    } else {
        // console.log(value.toFixed())
    }
}
processInput('Rana');
processInput(222);

// 5. typeof type guards:
function display(value: string | number) {
    if (typeof value === 'string') {
        // console.log('It`s a String: ', value.toUpperCase());
    } else {
        // console.log('It`s a Number:', value.toFixed(2));
    }
}
display('sayed');
display(45.12544);

// 6. in operator type guard
type Car = {
    drive: () => void;
};
type Boat = {
    sail: () => void;
};
function moved(vehicle: Car | Boat) {
    if ('drive' in vehicle) {
        vehicle.drive();
    } else {
        vehicle.sail();
    }
}
const car: Car = {
    drive: () => {
        // console.log('Car is driving ...!');
    },
};
const boat: Boat = {
    sail: () => {
        // console.log('Boat is sailing ...!');
    },
};
moved(car);
moved(boat);

// 7. instanceof type guard
class Dog {
    bark() {
        console.log(' Ghew Ghew');
    }
}
class Cat {
    meow() {
        console.log(' Meow Meow');
    }
}
function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}
const dog = new Dog();
const cat = new Cat();
// makeSound(dog)
// makeSound(cat)

// 8. custom type guard
type Fish = {
    swim: () => void;
};
type Bird = {
    fly: () => void;
};
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}
const myFish: Fish = {
    swim() {
        console.log('My fish is swim in pond ...!');
    },
};
move(myFish);
