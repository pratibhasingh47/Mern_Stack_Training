const fs = require("fs"); //same as-> input fs from "fs";
const os = require("os");

fs.writeFileSync("read.txt","Welcome to the first file");

// let data = fs.readFileSync("read.txt");
// console.log(data.toString());
// console.log(data);
console.log("After Sync Request");

fs.appendFileSync("read.txt"," _Hello subahKaSitara");
data = fs.readFileSync("read.txt");

fs.renameSync("read.txt","read_write.txt");

// fs.writeFile("read.txt","This is secoond file");
fs.writeFile("read.txt","This is second file",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("File Created");
    }
});

fs.appendFile("read.txt"," This is appended", (err)=>{
    console.log("File Updated");
})

fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data);
})

// UTF-8 "File encoding"

fs.unlink("read.txt",(err)=>{
    console.log("File deleted");    
})

fs.mkdir("Directory_1",(err)=>{
    console.log("Directory created");
})

fs.writeFile("./Directory_1/File_1.txt","File1",()=>{});

fs.unlink("./Directory_1/File_1.txt",(e)=>{
    console.log("File Deleted");
})

fs.rmdir("Directory_1",(e)=>{
    console.log("Directory removed");
})