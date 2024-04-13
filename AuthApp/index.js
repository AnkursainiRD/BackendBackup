const express=require("express");
const app=express();
const User=require("./routes/User")
require("./config/database").dbConnnect();
require("dotenv").config()
const cookieParser=require("cookie-parser")

const PORT=process.env.PORT || 4000

app.use(cookieParser())
app.set('view engine', 'ejs');
app.use(express.json())
app.use("/api/v1",User)
app.get("/",function(req,res){
    res.render("ui")
})

app.listen(PORT,()=>{
    console.log("Server Working")
})
