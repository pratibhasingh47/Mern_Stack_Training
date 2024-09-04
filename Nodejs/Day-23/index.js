// const fs = require("fs"); //same as-> input fs from "fs";
const os = require("os");
const path = require("path");
const http = require("http");

// fs.writeFileSync("read.txt","Welcome to the first file");

// // let data = fs.readFileSync("read.txt");
// // console.log(data.toString());
// // console.log(data);
// console.log("After Sync Request");

// fs.appendFileSync("read.txt"," _Hello subahKaSitara");
// data = fs.readFileSync("read.txt");

// fs.renameSync("read.txt","read_write.txt");

// // fs.writeFile("read.txt","This is secoond file");
// fs.writeFile("read.txt","This is second file",(error)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File Created");
//     }
// });

// fs.appendFile("read.txt"," This is appended", (err)=>{
//     console.log("File Updated");
// })

// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(data);
// })

// UTF-8 "File encoding"

// fs.unlink("read.txt",(err)=>{
//     console.log("File deleted");    
// })

// fs.mkdir("Directory_1",(err)=>{
//     console.log("Directory created");
// })

// fs.writeFile("./Directory_1/File_1.txt","File1",()=>{});

// fs.unlink("./Directory_1/File_1.txt",(e)=>{
//     console.log("File Deleted");
// })

// fs.rmdir("Directory_1",(e)=>{
//     console.log("Directory removed");
// })

console.log(os.arch());
console.log(os.platform());
console.log(os.totalmem() / 1024 / 1024 / 1024);
console.log(os.freemem() / 1024 / 1024 / 1024);
console.log(os.hostname());

console.log(path.dirname("/home/pratibhasingh/Documents/Programming/Mern_Stack_Training/Nodejs/Day-23/index.js"));
let filepath = "/home/pratibhasingh/Documents/Programming/Mern_Stack_Training/Nodejs/Day-23/index.js";
console.log(path.dirname("index.js"));
console.log(path.extname(filepath));
console.log(path.extname("index.js"));
console.log(path.parse(filepath));

console.log(path.join("usr", "ref", "folder", "bin"));
console.log(path.resolve("usr", "ref", "folder", "bin"));

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url == "/") {
        res.end("Welcome to http server")
    } else if (req.url == "/about") {
        res.end("About us page")
    }
    else {
        res.end("Unknown Page")
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Sever is running on 3000 port");
    console.log("http://127.0.0.1:3000/");
});

