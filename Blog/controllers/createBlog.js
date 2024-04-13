const Blog=require("../models/blogModel");

exports.createBlog=async(req,res)=>{
    try {
        const {title,body}=req.body;
        const response=await Blog.create({title,body})
        res.status(200).json({
            success:true,
            data:response,
            message:"Data Saved Succcesfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}

exports.fetchBlog=async(req,res)=>{
    try {
            const response=await Blog.find().populate("comments").populate("likes").exec()
            res.status(200).json({
                success:true,
                response,
                message:"Data fetched"
            })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}