const express=require("express");
const router=express.Router();
const {createTodo,TodoUi}=require("../controllers/createTodo.js")
const {getTodo}=require("../controllers/getTodo.js")
const {fetchTodo}=require("../controllers/fetchTodo.js")
const {deleteTodo}=require("../controllers/deleteTodo.js")
const {updateTodo}=require("../controllers/updateTodo.js")



router.get("/createTodo",TodoUi);

router.get("/getTodo", getTodo )
router.get("/fetchTodo/:id", fetchTodo)
router.post("/createTodo", createTodo)
router.put("/updateTodo/:id", updateTodo)
router.delete("/deleteTodo/:id", deleteTodo)


module.exports=router;