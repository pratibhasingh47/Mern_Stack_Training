// "use strict"
// loops ,  strict mode , console type, array methods

// while , do-while,for

// let count = 1;

// while(Count <= 10){
//     console.log(count);
//     count++;
// }

// do{
//     console.log(count);
//     count++;
// }while(count <10); 

let arr = ['A','B','C','D','E'];
for(let i = 0; i < arr.length ; i++){
    console.log(arr[i]);
}

for(let element of arr){
    console.log(element);
}

for(let index in arr){
    console.log(index);
}

let a = 20;
b = 30;
console.log(a);
console.log(b);