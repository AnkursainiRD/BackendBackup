import mongoose from "mongoose";
const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specializedIn:[{
        type:String
    }]
},{timestamps:true})

module.exports=mongoose.model("Hospital",hospitalSchema)