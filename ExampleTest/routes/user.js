const express=require("express");
const rourter=express.Router();
const {myUser}=require("../controller/userControler")

rourter.get("/user", myUser)

module.exports =rourter;