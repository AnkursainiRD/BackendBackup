import mongoose, { model } from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
    
},{timestamps:true})

module.exports=mongoose.model("User",userSchema);