let greeting: string = "Hello, World";
console.log(greeting);

let age:number = 20;
let isActive:boolean  = true;
let a:null = null;
let b:undefined = undefined;

let arr:string[] = []

// let persom : [string , number];
// person = ["Prats" ,47 ];

let x :string | number = "abc";

let someValue:any = "this is a string";

const add= (x:number,y:number): number=>{
    return x+y;
}

console.log(add(14,57));

interface Person {
    firstName : string,
    lastName :  string
}

// let person:Person = {
//     firstName : "shubham",
//     lastName : "Jain",
// }

class Animal{
    name : string

    constructor(name:string){
        this.name = name
    }

    move(number:number){
        console.log(`${this.name} moved ${number} meter`)
    }
}

class Person{
    public name :string;
    private age : number

    constructor(name:string , age:number){
        this.name = name;
        this.age = age
    }
    // public getAge(){
    //     console.log(this.age);
    // }
    get getAge(){
        return this.age
    }
    set setAge(number:number){
        this.age = number
    }
}

const person1 = new Person("Pratibha" , 20);

console.log(person1.getAge);
person1.setAge = 21