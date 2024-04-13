const express=require("express");
const app=express();
require("dotenv").config({path:"./config/.env"})

app.use(express.json())
app.set("view engine", "ejs")

app.get("/",function(req,res){
    res.render("ui")
})

app.listen(process.env.PORT,()=>{
    console.log("Server is started at",process.env.PORT);
})