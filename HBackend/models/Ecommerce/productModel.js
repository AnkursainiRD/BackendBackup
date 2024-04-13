import mongoose, { model } from "mongoose";
const productSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
},{timestamps:true})

module.exports=mongoose.model("Product",productSchema);