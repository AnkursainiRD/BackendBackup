const Todo=require("../models/todo.models")
exports.fetchTodo=async (req,res)=>{
    try{
         const id=req.params.id;
        const todo=await Todo.findById({_id:id})
        res.status(200).json({
            success:true,
            data:todo,
            message:"Data fetched succesfully"
        })
        if(!todo){
            res.status(404).json({
                success:false,
                message:"No data found"
            })

           
        }
    }catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}