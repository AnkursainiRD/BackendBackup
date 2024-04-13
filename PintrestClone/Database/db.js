const mongoose=require("mongoose");
require("dotenv").config();
const db=process.env.DATABASE_URL
try{
    exports.dbConnection=async()=>{
        mongoose.connect(db);
        console.log("Connection Done");
    }
}catch(error){
    console.log(error)
    throw error
}