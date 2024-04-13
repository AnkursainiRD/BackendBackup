const express=require("express");
const app=express();
const {dbConnect}=require("./config/database.js")
const Blog=require("./routes/Blog.js")
require("dotenv").config()
const PORT=process.env.PORT || 4000


app.use(express.json());
app.use("/api",Blog)

app.get("/",function(req,res){
    res.send("Home")
})
dbConnect();
app.listen(PORT,()=>{
    console.log("Server Working")
})