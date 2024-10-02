var greeting = "Hello, World";
console.log(greeting);
var age = 20;
var isActive = true;
var a = null;
var b = undefined;
var arr = [];
// let persom : [string , number];
// person = ["Prats" ,47 ];
var x = "abc";
var someValue = "this is a string";
var add = function (x, y) {
    return x + y;
};
console.log(add(14, 57));
// let person:Person = {
//     firstName : "shubham",
//     lastName : "Jain",
// }
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (number) {
        console.log("".concat(this.name, " moved ").concat(number, " meter"));
    };
    return Animal;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "getAge", {
        // public getAge(){
        //     console.log(this.age);
        // }
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setAge", {
        set: function (number) {
            this.age = number;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person1 = new Person("Pratibha", 20);
console.log(person1.getAge);
person1.setAge = 21;
