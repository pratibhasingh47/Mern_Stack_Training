const test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
    "mouseenter",
    (event) => {
        // highlight the mouseenter target
        event.target.style.color = "purple";

        // reset the color after a short delay
        setTimeout(() => {
            event.target.style.color = "";
        }, 500);
    },
    false,
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
    "mouseover",
    (event) => {
        // highlight the mouseover target
        event.target.style.color = "orange";

        // reset the color after a short delay
        setTimeout(() => {
            event.target.style.color = "";
        }, 500);
    },
    false,
);

// Javascript working (Event loop or Call Stack)
// call Stack - general execution contact GEC
// Variable environment VE
// Execution environment EE
// Hoisting - excess var before declaring / call stack -values stored with undefined  / if variable exist in variable environment

// TDZ(Temporal Dead Zone) -we cannot excess them until value is  assigned

// console.log(a);
// console.log("Hello Techno")
// sum();
// let newDiv = document.createElement("div");
// newDiv.innerHTML = "Hello Techno";
// newDiv.style.backgroundColor =  "yellow";

// // document.body.appendChild(newDiv);

// let myDiv = document.getElementById("container");
// let parentDiv = document.getElementById("box1");
// parentDiv.insertBefore(newDiv , myDiv);

// Events

// document.getElementById("button").onclick = function(){
//     let newDiv = document.createElement("div");
//     newDiv.style.width = "200px";
//     newDiv.style.height = "200px";
// newDiv.style.backgroundColor =  "yellow";
// newDiv.style.border = "2px solid black";
// newDiv.style.margin = "10px";
// document.body.appendChild(newDiv);
// }

// document.getElementById("button").addEventListener("click",function(){
//         let newDiv = document.createElement("div");
//         newDiv.style.width = "200px";
//         newDiv.style.height = "200px";
//     newDiv.style.backgroundColor =  "yellow";
//     newDiv.style.border = "2px solid black";
//     newDiv.style.margin = "10px";
//     document.body.appendChild(newDiv);
//     })

// document.getElementById("box").addEventListener("mouseenter",function(){
//     document.getElementById("box").style.backgroundColor = "yellow";
// });

// document.getElementById("name").addEventListener("change",function(event){
//     console.log(event);
// //    let fieldValue = document.getElementById("name").value;
// //    console.log(fieldValue);
// })

let obj = {};

// function getValue(e){
//     // console.log(e.target.name);
//     // console.log(e.target.value);
//     obj[e.target.name] = e.target.value;
//     console.log(obj);
// }

// document.getElementById("field1").addEventListener("change",function(event){
//     getValue(event);
// })
// document.getElementById("field2").addEventListener("change",function(event){
//     getValue(event);
// })

// Hoisting 
// // Temporal Dead Zone(TDZ)
// var a = 20;

// function sum(){
//     console.log("Inside Sum");
// }
// // console.log(a);
// sum();

// variable declerad with var supports hoisting
// variable declerad with let ,const doesn't supports hoisting



// Async Js

// Timer Functions

let interval = setInterval(()=>{
    console.log(Math.random());
},2000);

let timeOut = setTimeout(()=>{
    console.log("Hello Techno");
},5000);

document.getElementById("button").addEventListener("click",function(){
    console.log("Stop Button");

    clearInterval(interval);
    clearTimeout(timeOut);
})




