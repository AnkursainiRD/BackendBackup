const mongoose=require("mongoose");
const nodemailer=require("nodemailer")
const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }
})

fileSchema.post("save",async function(doc){
    try {
        let transpoter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASSWORD
            }
        })

        let info=await transpoter.sendMail({
            from:"Ankur Saini",
            to:doc.email,
            subject:"Check",
            html:`<h1>File uploaded</h1><a href="${doc.imageUrl}">${doc.imageUrl}</a>`
        })

        console.log(info);

    } catch (error) {
        console.log("HERE");
        console.log(error);
    }
})

module.exports=mongoose.model("File",fileSchema)