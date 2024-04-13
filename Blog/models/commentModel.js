const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    },
    body:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model("comments",commentSchema);