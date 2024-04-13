const Todo=require("../models/todo.models")

exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            messege:"Data fetched"
        })
    }catch(error){
        res.status(500)
        .json({
            success:false,
            error:error.messege,    
            message:"Failed"
        })
    }
}
