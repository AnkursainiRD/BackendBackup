const mongoose=require("mongoose")
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
        maxLength:20
    },
    description:{
        type:String,
        require:true,
        maxLength:50
    },
    ceatedAt:{
        type:Date,
        require:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        require:true,
        default:Date.now()
    },
})

module.exports= mongoose.model("todo",todoSchema);