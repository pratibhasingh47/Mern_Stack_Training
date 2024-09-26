const express = require("express");
const { getAllProduct, createProduct } = require("../controller/product");
const router = express.Router();

router.get("/product" ,getAllProduct);
router.post("/product", createProduct);

module.exports = router;