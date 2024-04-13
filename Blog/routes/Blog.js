const express=require("express");
const router=express.Router()
const {createBlog,fetchBlog}=require("../controllers/createBlog.js")
const {createComment}=require("../controllers/comment.js")
const {createLike,removeLike}=require("../controllers/like.js")
// const {myProfile}=require("../controllers/profile.js")


// router.get("/profile",myProfile)
router.get("/fetchBlog",fetchBlog)
router.post("/createBlog",createBlog)
router.post("/removeLike",removeLike)
router.post("/createComment",createComment)
router.post("/createLike",createLike)

module.exports=router;