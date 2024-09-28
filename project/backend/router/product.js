const express = require("express");
const { getAllProduct , createProduct , updateProduct , updateProductWithImage } = require("../controller/product")
const upload = require("../middleware/multer");
const router = express.Router();

router.get("/product",getAllProduct);
router.post("/product",upload.single("productImage"),createProduct);
router.put("/product/:id",updateProduct);
router.put("/productWithImage/:id",upload.single("productImage"),updateProductWithImage);

module.exports =  router;