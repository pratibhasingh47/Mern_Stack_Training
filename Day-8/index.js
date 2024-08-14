let userName = prompt("Enter your name");
console.log(userName);

let password = +prompt("Enter Password");
console.log(password);

if(userName === "admin" && password === 123){
    alert("Authentication Successful");
}
else{
    alert("Authentication Failed");
}

(userName === "admin" && password === 123) ? alert("Authentication Successful") : alert("Authentication Failed");
// In ternary it is mandatory to include else condition


