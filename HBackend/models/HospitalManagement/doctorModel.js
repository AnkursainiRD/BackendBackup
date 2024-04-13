import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceYear:{
        type:Number,
        default:0
    },
    workIn:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ]
},{timestamps:true})
    
module.exports=mongoose.model("Doctor",doctorSchema)