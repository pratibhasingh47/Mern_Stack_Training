// let arr = [1,2,3,4,5,]

// let filteredarr = arr.filter(item=>item>2);
// console.log(filteredarr);

// let a2 = [10,20,30,40,50,60]

// let sum = a2.reduce((acc,curr)=>acc+curr);
// let sum2 = a2.reduce((acc,curr)=>acc+curr,1000);
// console.log(sum);
// console.log(sum2);

// let foundItem = arr.find((item)=>item < 30);
// console.log(foundItem);

// let foundItem2 = arr.findIndex((item)=>item ===30);
// console.log(foundItem2);

let obj = {
    firstname : "ABC",
    lastname : "XYZ"
}

let keys = Object.keys(obj);
console.log(obj);
console.log(keys);

let values = Object.values(obj);
console.log(values);

let entries = Object.entries(obj);
console.log(entries);

Object.freeze(obj);

obj.firstname ="Vinay";
console.log(obj);

// hasownProperty - true/false

