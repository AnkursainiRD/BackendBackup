const Todo= require("../models/todo.models")

  exports.createTodo=async(req,res)=>{

    try{
        
        console.log("working");
    const {title,description}=req.body;
    // const =req.body.description;
    console.log(req.body);
    const response=await Todo.create({title,description});
    res.status(200).json({
        success:true,
        data:response,
        message:"Data Saved"
    });
}
catch(err){
    console.log(err);
    res.status(500).json({
        success:false,
        data:"sever error",
        message:err.message
    })
}
}


/* UI testing*/


exports.TodoUi =async(req,res)=>{
    res.render("todoUi")
}
