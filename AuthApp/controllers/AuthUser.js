const User=require("../models/userModel")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { options } = require("../routes/User");
require("dotenv").config()
exports.signUp=async(req,res)=>{
    try {
        const {name,email,password,role}=req.body;
        const checkUser=await User.findOne({email})
        console.log(checkUser);
        if(checkUser){
            return res.status(400).json({
                message:"User Already Exist"
            })
        }
        let hashPassword;
        try {
            hashPassword=await bcrypt.hash(password,10);

        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error while password hashing"
            })
        }
        const user=await User.create({
            name,email,password:hashPassword,role
        })
        res.status(200).json({
            success:true,
            message:"User registered successfuly"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}


exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the fields"
            })
        }
        const checkUser=await User.findOne({email})
        if(!checkUser){
            res.status(401).json({
                success:false,
                message:"User Doesn't Exsist"
            })
        }
        const option={
            // expires: new Date( Date.now()+ 3*24*60*60*1000),
            expires: new Date( Date.now()+ 10000),
            httpOnly:true
        }
        const payload={
            email:checkUser.email,
            id:checkUser.id,
            role:checkUser.role
        }
        if(await bcrypt.compare(password,checkUser.password))
        {
            let token=jwt.sign(payload,
                               process.env.JWT_SECRET,
                               {
                                expiresIn:"2h"
                               });
            const myUser=checkUser.toObject()
            myUser.token=token,
            myUser.password=undefined
            
            res.cookie("token",token,option).status(200).json({
                success:true,
                token,
                myUser,
                message:"Login Succesfull"
            });
            // res.status(200).json({
            //     success:true,
            //     token,
            //     myUser,
            //     message:"Login Succesfull"
            // });


        }else{
            return res.status(403).json({
                success:false,
                message:"Invalid Password"
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Login failed"
        })
        
    }
}