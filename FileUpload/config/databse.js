require("dotenv").config();
const mongoose=require("mongoose");
exports.dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Connection Done")
    })
    .catch((error)=>{
        console.log(error)
    })
}