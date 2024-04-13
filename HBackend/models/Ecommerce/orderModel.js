import mongoose, { model } from "mongoose";

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    qunatity:{
        type:Number,
        required:true
    }
})


const orderSchema=new mongoose.Schema({
        orderPrice:{
            type:Number,
            required:true
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        orderItems:{
            type:[orderItemSchema]
        },
        address:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:["Pending","Cancelled","Delivered"],
            default:"Pending"
        }
},{timestamps:true})

module.exports=mongoose.model("Order",orderSchema);