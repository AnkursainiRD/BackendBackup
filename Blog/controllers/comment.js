const blog=require("../models/blogModel");
const Comment=require("../models/commentModel");

exports.createComment=async(req,res)=>{
    try {
        const {post,user,body}=req.body;
        const comment=new Comment({
            post,user,body
        });
        const saveComment=await comment.save();
        
        const updatedBlog=await blog.findByIdAndUpdate(post,{$push:{comments: saveComment._id}}, {new:true})
        .populate("comments")
        .exec()
        res.json({
            success:true,
            post:updatedBlog
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Error while creating comment"
        })
    }
}