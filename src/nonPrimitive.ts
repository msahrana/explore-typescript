/**Non-Primitive data type -> array, object, tuples, function */

// 1. array
const score1: number[] = [40, 50, 60, 70, 80]; // Best
// console.log(score1)
const score2: Array<number> = [4, 5, 6, 7, 8]; // Best
// console.log(score2)
const score3: [number, number, number] = [40, 50, 60]; //Not bad
// console.log(score3)
const score4: any[] = [40, 50, 60]; //Not recommended
// console.log(score4)
const friends: string[] = ['arefin', 'siddik', 'manik'];
// console.log(friends)

// 2. object
const user: {
    id: number;
    name: string;
    address: string;
} = {
    id: 111,
    name: 'Rana',
    address: 'Kereni Para',
};
// console.log(user.id);

// 3. tuples type
const arr1: [string, number, boolean] = ['Rana', 44, true]; // Good
// console.log(arr1)
const arr2: (string | number | boolean)[] = ['Rana', 44, 'true']; // Best
// console.log(arr2)
const arr3: any[] = ['Rana', 44, 'true']; // Not recommended
// console.log(arr3)
// console.log(arr3[2])

// 4. unknown
const value: unknown = 'world';
if (typeof value === 'string') {
    // console.log(value.toUpperCase())
}

// 5. function
const func1 = (num1: number, num2: number): number => {
    return num1 + num2;
};
func1(5, 7);
// console.log(func1(5,7))

const func2 = (value1: string, value2: string): string => {
    return `${value1} ${value2}`;
};
// console.log(func2('Loved',  'Bangladesh'))

const func3 = (name: string): string => {
    // return value1 + value2
    return `Hello ${name}`;
};
// console.log(func3('Bangladesh'))

// 6. void (Does not return)
const logMessage = (): void => {
    console.log('Logged Massage');
};

const student = {
    name: 'Rana',
    age: 44,
};
const printUser = (user: { name: string; age: number }) => {
    // console.log(`${user.name} is ${user.age} years old.`)
};
printUser(student);

// 7. null & undefined
let numbers: undefined = undefined;
// console.log(numbers)
let name: null = null;
// console.log(name)

// 8.type alias
type Student = {
    id: number;
    userName: string;
    age: number;
    isMarried: boolean;
    course: string[];
    score: number[];
    info: [string, number, boolean];
    extra?: {
        userId: number;
        email: string;
        password?: boolean;
    };
};
const student1: Student = {
    id: 123,
    userName: 'rana12',
    age: 44,
    isMarried: true,
    course: ['next.js', 'typescript'],
    score: [2, 5, 8],
    info: ['rara', 121, false],
    extra: {
        userId: 1111,
        email: 'jjauuaaa@gmai.com',
        password: false,
    },
};
// console.log(student1)

const student2: Student = {
    id: 123,
    userName: 'xyz12',
    age: 4,
    isMarried: false,
    course: ['next.js', 'typescript'],
    score: [2, 5, 8],
    info: ['rara', 121, false],
    extra: {
        userId: 1111,
        email: 'jjauuaaa@gmai.com',
    },
};
// console.log(student2)

type User = {
    name: string;
    age: number;
};
const userInfo: User = { name: 'Rana', age: 44 };
const showUser = (us: User) => {
    // console.log(us)
};
showUser(userInfo);

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    warranty?: boolean;
};
const item1: Product = {
    id: 111,
    name: 'Laptop',
    price: 1250,
    description: 'It is good product.',
    warranty: true,
};
// console.log(item1)

// 9.interface => [type and interface are same but interface will be duplicate]
interface UserInfo {
    name: string;
    age: number;
}
interface Person {
    name: string;
    age: number;
}
interface Person {
    id: boolean;
}
const p: Person = { id: true, name: 'Anower', age: 44 };
// console.log(p)
// console.log(p.age)

/**When use type or interface:
 * 1. Design public Api: use interface
 * 2. For simple object: use both
 * 3. Union & Intersection: use type
 * 4. Primitive or function: use type
 * 5. Flexibility: use interface (for extends) and type (Union & Intersection)
 */
