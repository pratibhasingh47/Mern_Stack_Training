console.log("Day-7 -> Starting JS.")

var Array_1 = [1, 5.105, "A", true, undefined, [], [1, 2, 3], { A: 1, B: 2 }]
console.log(Array_1)
console.log(typeof Array_1)


let a = 10;
console.log(a);
a = 20;
a++;
console.log(a);

const b = 30;
console.log(b);

console.log("a + b = ", a + b);

console.log(typeof a);

const x = "Hi";
console.log(typeof x);

const name = "Johan Libert";
const age = 23;

console.log("Name " + name + " & age " + age);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0, 5));
console.log(name.substring(0, 5).toUpperCase());
console.log(name.split(" "));

const list = "Name, Age, E-mail, Github";
console.log(list.split(", "));

//! comments

const array = ["apple", "name", 10, 40.04];
console.log(array);
console.log(array[3]);

array[4] = true;
console.log(array);

array.push(false); //! add element in array
console.log(array);

array.unshift(false); //! add element to 0 index
console.log(array);

array.pop(); //! remove last element of array
console.log(array);

console.log(array.indexOf("name"));

//! object literals

const person = {
    Name: "VS Code",
    Age: 2,
    address: {
        path: "C:\\ program file\\ nodejs",
        more: "JavaScript is Fun...!",
    },
    arr: ["Hello", "Bye", "Hi"],
};

console.log(person);
console.log(person.Age, person.address);
console.log(person.arr[1]);
console.log(person.address.more);

const {
    Name,
    Age,
    address: { path },
} = person;

console.log(Name + " " + Age + " " + path);

person.email = "vscode@google.com";
console.log(person);

const todo = [
    {
        id: 1,
        text: "1st todo",
        completed: true,
    },
    {
        id: 2,
        text: "2nd todo",
        completed: false,
    },
    {
        id: 3,
        text: "3rd todo",
        completed: true,
    },
];

console.log(todo);
console.log("3 = " + todo[2].text);

console.log(todo[1].text.split(" "));

const todoJSON = JSON.stringify(todo); //! to  send data to server in json
console.log(todoJSON);

let num1 = 50;
let num2 = "50";
console.log("\n5+'5' : ", 5 + '5', " Type:", typeof (5 + '5'))
console.log("num1 == num2   :", num1 == num2)
console.log("num1 === num2  :", num1 === num2)
console.log("num1 === +num2 :", num1 === +num2) //! type coersion
console.log("Hell" && 'A' || 20) //! Short-Circuit Evaluation