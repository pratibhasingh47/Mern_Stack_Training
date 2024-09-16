// const EventEimtter = require("events");
const http = require("http");
// const event = new EventEimtter();

// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         res.end("Homepage");
//         event.emit("Home");
//     }
//     else if(req.url == "/about"){
//         res.end("About ROute");
//         event.emit("About")
//     }
//     else{
//         res.end("Unknown Route");
//         event.emit("unknownRoute")
//     }
// });



let storedData;

const server = http.createServer((req, res) => {
    let body = "";
    if (req.method === "POST") {
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            console.log(typeof body);
            storedData = JSON.parse(body);
            console.log(storedData);
            res.end(JSON.stringify(storedData));
        })
    }
    // if(req.url == "/"){
    //     res.end("Home Page");
    //     // event.emit("homePageAccessed")
    // }else if(req.url == "/about"){
    //     res.end("About Route");
    //     // event.emit("aboutPageAccessed");
    // }else{
    //     res.end("Unknown route");
    //     // event.emit("unknownRouteAccessed",req.url);
    // }
});


// let storedData = "";

// const server = http.createServer((res, req) => {
//     let body = "";
//     if (req.method === "POST") {
//         req.on("data", (chunk) => {
//             body += chunk.toString();
//         });

//         req.on("end", () => {
//             storedData = JSON.parse(body);
//             console.log(storedData);
//             res.end("Post Api called");
//         })
//     }
//     if (req.url == "/") {
//         res.end("Homepage");
//     }
// })


// server.on("request",(req,res)=>{
//     if( req.url != "/favicon.ico"){
//         console.log("Request Event",req.url);
//     }
// });

// server.on("close",()=>{
//     console.log("Server closed");
// })

// setTimeout(()=>{
//     server.close();
// },5000);

// server.on("connection", (socket) => {
//     console.log("connection");
// })

// event.on("myName",(name,age)=>{
//     console.log("Name is Pratibha");
//     console.log(`My name is ${name} and age is ${age} first emit`);
// })

// event.on("myName",(name,age)=>{
//     console.log("Name is Pratibha");
//     console.log(`My name is ${name} and age is ${age} second emit`);
// })
// event.on("myName",(name,age)=>{
//     console.log("Name is Pratibha");
//     console.log(`My name is ${name} and age is ${age} third emit`);
// })
// event.on("myName",(name,age)=>{
//     console.log("Name is Pratibha");
//     console.log(`My name is ${name} and age is ${age}`);
// })

// event.emit("myName","Pratibha",20);

// event.on("Home",()=>{
//     console.log("Home Page accessed");
// })
// event.on("About",()=>{
//     console.log("About Page accessed");
// })
// event.on("unknownRoute",(url)=>{
//     if( url != "/favicon.ico"){
//         console.log("Unknown route");
//     }
// })

server.listen(3000, "127.0.0.1", () => {
    console.log("sever is running on http://127.0.0.1:3000");
})
// new connection on every runInContext,any change in device



