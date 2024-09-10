const express = require("express");
const users = require("../user");
const router = express.Router();

router.get("/users",(req,res)=>{ // http:localhost:3000/api/users
    res.send({message : "user fetched" , data : users});
})

router.post("/users",(req,res)=>{ // http:localhost:3000/api/createUser
    const data = req.body;
    const modifiedData = {id : users.length+1,...data}
    users.push(modifiedData);
    res.send({message : "User created",data : data})
})

router.put("/users/:id",(req,res)=>{ // http:localhost:3000/api/updateUser
    // const id = req.params.id;
    const {id} = req.params;
    const user = users.find(item=>item.id === +id);
    if(!user){
        res.send({message:"user not found"});
    }
    user = {...user,...req,body}
    res.send({message : "User Updated"});
})

router.delete("/deleteUser",(req,res)=>{ // http:localhost:3000/api/deleteUser

})

module.exports = router;