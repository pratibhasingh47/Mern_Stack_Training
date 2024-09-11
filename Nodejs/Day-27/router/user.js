// const express = require("express");
// const users = require("../user");
// const router = express.Router();

// router.get("/users", (req, res) => { // http:localhost:3000/api/users
//     res.send({ message: "user fetched", data: users });
// })

// router.post("/users", (req, res) => { // http:localhost:3000/api/createUser
//     const data = req.body;
//     const modifiedData = { id: users.length + 1, ...data }
//     users.push(modifiedData);
//     res.send({ message: "User created", data: data })
// })

// router.put("/users/:id", (req, res) => { // http:localhost:3000/api/updateUser
//     // const id = req.params.id;
//     const { id } = req.params;
//     const user = users.find(item => item.id === +id);
//     if (!user) {
//         res.send({ message: "user not found" });
//     }
//     user = { ...user, ...req, body }
//     res.send({ message: "User Updated" });
// })

// router.delete("/deleteUser", (req, res) => { // http:localhost:3000/api/deleteUser

// })

// module.exports = router;





const express = require("express");

const router = express.Router();
const users = require("../user");
const fs = require("fs");


router.get("/users", (req, res) => {            //http://localhost:3000/api/users
    res.send({message : "User Fetched", data : users});
});

router.post("/users", (req, res) => {      //http://localhost:3000/api/createUser
    const data = req.body;
    const modifiedData = {id : users.length+1, ...data};
    users.push(modifiedData);
    res.send({message : "User Created", data : data});
});

router.put("/users/:id", (req, res) => {       //http://localhost:3000/api/updateUser
    // console.log(req.params);
    const { id } = req.params;
    let user = users.find(item=>item.id===+id);
    if(!user){
        return res.send({message : "User not found!"});
    }
    user.contactDetails = req.body.contactDetails;
    // user = {...user, ...req, body};
    res.send({message : "User Updated"});
});

router.delete("/users/:id", (req, res) => {    //http://localhost:3000/api/deleteUser
    const { id } = req.params;
    let user = users.find(item=>item.id===+id);
    if(!user){
        return res.send({message : "User not found!"});
    }
    users.splice(user, 1);
    res.send({message : "User deleted"});
});

module.exports = router;