const Blog=require("../models/blogModel")
const Like=require("../models/likeModel");

exports.createLike=async(req,res)=>{
    try {
        const {post,user}=req.body;
        const like=new Like({
            post,user
        });
        const saveLike=await like.save();
        const updatedBlog=await Blog.findByIdAndUpdate(post,{$push: {likes:saveLike}}, {new:true})
        .populate("likes")
        .exec()
        console.log(updatedBlog)
        res.json({
            success:true,
            post:updatedBlog
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Error while creating like"
        })
    }
}

exports.removeLike=async(req,res)=>{
    try{
    const {post,like}=req.body;
    const unlike=await Like.findByIdAndDelete({post:post,_id:like});
    const updatedBlog=await Blog.findByIdAndUpdate(post,{$pull:{likes: unlike._id}},{new:true})
    res.json({
        post:updatedBlog
    })
    }catch(error){
        return res.status(500).json({
            success:false,
            error:"Error while unlike"
        })
    }
}
