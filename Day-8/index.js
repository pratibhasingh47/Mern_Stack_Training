// let userName = prompt("Enter your name");
// console.log(userName);

// let password = +prompt("Enter Password");
// console.log(password);

// if(userName === "admin" && password === 123){
//     alert("Authentication Successful");
// }
// else{
//     alert("Authentication Failed");
// }

// (userName === "admin" && password === 123) ? alert("Authentication Successful") : alert("Authentication Failed");
// // In ternary it is mandatory to include else condition


// let daynumber = 3;
// let dayName;

// switch(dayName){
//     case 1 :
//         dayName = "Monday";
//         break;
//     case 2 :
//         dayName = "Tuesday";
//         break;
//     case 3 :
//         dayName = "Wednesday";
//         break;
//     case 4 :
//         dayName = "Thursday";
//         break;
//     case 5 :
//         dayName = "Friday";
//         break;
//     case 6 :
//         dayName = "Saturday";
//         break;
//     case 7 :
//         dayName = "Sunday";
//         break;
//     default :
//         dayName = "Invalid Day";
//         break;
// }

// console.log(dayName);


// const sum = () =>{
//     console.log("This is arrow function");
// }

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(10,20));

// const add = (a,b)=>a+b;

//Arrays,Object
let nestedArr = [10,20,30,[1,2,3,4],[20,30,40,["aaa" , "bbb",[true,false]]]]

// console.log(nested.indexOf("true"));
// console.log(nested.lastIndexOf());

let newArr = nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1][nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1].length-1][0];
console.log(newArr);