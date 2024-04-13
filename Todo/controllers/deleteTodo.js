const Todo=require("../models/todo.models")

exports.deleteTodo=async(req,res)=>{
    try{
    const id=req.params.id;
    const todo=await Todo.findByIdAndDelete(id)
    res.status(200).json({
        success:true,
        data:todo,
        message:"Data succesfully"
    })    
    }
    catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}