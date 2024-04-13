const mongoose=require("mongoose");
require("dotenv").config()
exports.dbConnect=()=>{
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(()=>{
            console.log("Connection Sucessfull")
        })
        .catch((error)=>{
            console.log(error)
        })
}