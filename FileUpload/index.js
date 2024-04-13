const express=require("express");
const app=express();
const upload=require("./routes/fileUpload")
const fileUpload=require("express-fileupload")
const cloudinary=require("./config/cloudinary")

require("dotenv").config()
require("./config/databse").dbConnect()
const PORT=process.env.PORT ||  4000
cloudinary.cloudinaryConnect();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use("/api/v1",upload);


app.get("/",(req,res)=>{
    res.render("Working")
})

app.listen(PORT,()=>{
    console.log("Server Started")
})