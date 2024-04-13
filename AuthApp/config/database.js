const mongoose=require("mongoose")
require("dotenv").config();

exports.dbConnnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Connection Succresful")
    })
    .catch((error)=>{
        console.log(error)
    })
}