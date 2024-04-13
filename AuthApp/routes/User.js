const express=require("express");
const router=express.Router();
const {signUp,login}=require("../controllers/AuthUser")
const {auth,isAdmin,isStudent}=require("../middlewares/authorization")
const User=require("../models/userModel");
const userModel = require("../models/userModel");

router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Student page"
       })
})
router.get("/guest",auth,(req,res)=>{
    // res.render("Guest Data Here")
    res.json({
     success:true,
     message:"Welcome to the Guest page"
    })
})
router.get("/admin",auth,isAdmin,(req,res)=>{
    // res.render("Admin Data Here")
    res.json({
     success:true,
     message:"Welcome to the Admin page"
    })
})
router.get("/getEmail",auth,async function(req,res){
    try {
        const id=req.user.id;
        const user=await User.findById(id);
        res.status(200).json({
            success:true,
            user:user,
            message:"got your email"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message,
            message:"server error"
        })
    }
    
  
})
router.post("/signUp",signUp)
router.post("/login",login)

module.exports=router;