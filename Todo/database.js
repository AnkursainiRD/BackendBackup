const mongoose=require("mongoose")

require("dotenv").config()
const db=process.env.DATABASE_URL

const dbConnect=()=>{
    mongoose.connect(db)
    .then(()=>{
        console.log("Connection Sucessfull")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports= dbConnect;