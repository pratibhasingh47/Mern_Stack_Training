let myDiv = document.getElementById("main");
console.log(myDiv);
myDiv.id = "Container";
console.log(myDiv);
console.log(myDiv.className);
// console.log(myDiv.class); Wrong syntax

console.log(myDiv.getAttribute("class"));
console.log(myDiv.getAttribute("id"));

myDiv.setAttribute("class" , "tail");

// myDiv.innerHTML
// myDiv.innerText
// myDiv.textContent

// prototyple inheritance --- prototype is different
// Array.from
