let arr1 = [10,20,30]
// let arr2 = [10,20,30]
let arr2 = arr1;

arr2.push(10000);
console.log(arr1);
console.log(arr2);
console.log(arr1===arr2);

// equal ke left side - Rest operator ...
// equal ke right side  - spread operator ...