const fs = require("fs"); //same as-> input fs from "fs";

fs.writeFileSync("read.txt","Welcome to the first file");

// let data = fs.readFileSync("read.txt");
// console.log(data.toString());
// console.log(data);
console.log("After Sync Request");

fs.appendFileSync("read.txt"," _Hello subahKaSitara");
data = fs.readFileSync("read.txt");

fs.renameSync("read.txt","read_write.txt");

// fs.writeFile("read.txt","This is secoond file");
fs.writeFile("read.txt","This is secoond file",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("File Created");
    }
});