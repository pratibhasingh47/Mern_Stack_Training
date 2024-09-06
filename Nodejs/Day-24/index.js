const EventEimtter = require("events");
const http = require("http");
const event = new EventEimtter();

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Homepage");
        event.emit("Home");
    }
    else if(req.url == "/about"){
        res.end("About ROute");
        event.emit("About")
    }
    else{
        res.end("Unknown Route");
        event.emit("unknownRoute")
    }
})


server.on("request",(req,res)=>{
    if( req.url != "/favicon.ico"){
        console.log("Request Event",req.url);
    }
});

server.on("close",()=>{
    console.log("Server closed");
})

setTimeout(()=>{
    server.close();
},5000);

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

server.listen(300,"127.0.0.1",()=>{
    console.log("sever is running on http://127.0.0.1:300");
})