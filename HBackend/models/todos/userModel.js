const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        unique:true
        },
    email:{
        type:String,
        required:true,
        trim:true
        },
    password:{
        type:String,
        required:[true,"Password must be required"],
        }        
},{timestamps:true})

module.exports=mongoose.model("User",userSchema);