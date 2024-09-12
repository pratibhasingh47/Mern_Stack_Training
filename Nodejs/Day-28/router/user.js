const express = require("express");

const router = express.Router();
const users = require("../user");
// const fs = require("fs");
const { getUser, createUser, updateUser, deleteUser } = require("../controller/user");
const middleware = require("../middleware/middleware");

router.get("/users", middleware, getUser);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;

// Model, view, controller

// index.js >> router >> controller >> Model