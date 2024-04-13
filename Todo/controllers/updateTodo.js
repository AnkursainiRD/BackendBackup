const Todo=require("../models/todo.models");

exports.updateTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        const {title,description}=req.body;
        const todo=await Todo.findByIdAndUpdate(
            {_id: id},
            {title,description, updatedAt:Date.now()},
        ) 
        res.status(200).json({
        success:true,
        data:todo,
        message:"Data Update succesfully"
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