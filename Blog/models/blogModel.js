const mongoose=require("mongoose");

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"likes"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments"
    }]
})

module.exports=mongoose.model("blog",blogSchema)