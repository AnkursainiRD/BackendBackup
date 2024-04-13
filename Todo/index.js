const express=require("express");
const dbConnect=require("./database")
const app=express();
const Todos=require("./routes/Todos")
require("dotenv").config();
const mp=process.env.PORT|| 4000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("view engine", "ejs")
app.use("/api/v1", Todos)

app.listen(mp,()=>{
    console.log("Server is working")
})
dbConnect()

app.get("/",function(req,res){
    res.send("Home Page")
})
