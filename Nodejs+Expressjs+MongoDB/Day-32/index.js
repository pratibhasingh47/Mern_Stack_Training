const express = require("express");
const userRoutes = require("./router/user");
const productRoutes = require("./router/product");
const connectDb = require("./config/db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

connectDb();

app.use("/api",userRoutes);
app.use("/product",productRoutes);

//MVC -- model , view , controller

app.listen(3000,()=>{
    console.log("Server is running on 3000");
});