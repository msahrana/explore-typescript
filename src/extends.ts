// 1. create an interface for an animal
interface Animal {
    name: string
}
// 2.1. create an interface for a dog and extends the animal interface
interface Dog extends Animal{
    breed: string
}
// 2.2. create an interface for a cat and extends the animal interface
interface Cat extends Animal{
    breed: string
}

const myDog :Dog = {
    name: 'Tom',
    breed: 'Black'
}
// console.log(myDog)
// console.log(myDog.name)

/** Create a user profile info: */
// 1. step-1: Create an user interface
interface User{
    id: number;
    username: string;
    email:string
}
// 2. step-2: create an author interface & extends to user interface
interface Author extends User {
    bio: string;
    posts: string[]
}
// 3. step-3: define user status using type because it is primitive data type (basic data type)
type Status = 'active' | 'inactive' | 'banned'
// 4. step-4: create an author object
const author1 : Author ={
    id:1,
    username:'rana',
    email: 'rana123',
    bio: 'admin',
    posts: ['post1', 'post2', 'post3', 'post4']
}
// 5. step-5: make account status 
const accountStatus : Status = 'active'