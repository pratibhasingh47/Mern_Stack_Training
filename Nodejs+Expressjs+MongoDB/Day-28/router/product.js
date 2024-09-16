const express = require("express");

const router = express.Router();

router.get("/products", (req, res) => {            //http://localhost:3000/product/Products
    
});

router.post("/createProduct", (req, res) => {      //http://localhost:3000/product/createProduct

});

router.put("/updateProduct", (req, res) => {       //http://localhost:3000/product/updateProduct

});

router.delete("/deleteProduct", (req, res) => {    //http://localhost:3000/product/deleteProduct

});

module.exports = router;