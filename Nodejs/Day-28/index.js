/* 
    GET - Read
    POST - Create
    PUT - Update
    DELETE - Delete
*/

// middleware of node is req and res
const express = require("express");
const userRoutes = require("./router/user");
const productRoutes = require("./router/product");
// const middleware = require("./middleware/middleware");
// const users = require("./user");

const app = express();

app.use(express.json());
// app.use(middleware);

app.use("/api", userRoutes);
app.use("/product", productRoutes);

// MVC -- Model, View, Controller

app.listen(3000, ()=>{
    console.log("Server is running on 3000");
});