const File=require("../models/fileModel")
const Coludinary=require("cloudinary").v2

exports.localFileUpload=async(req,res)=>{
    try {
        const file=req.files.file;
        console.log(file);

        let path=__dirname +"/files/"+ Date.now()+ `.${file.name.split(".")[1]}`;
        console.log(path);

        file.mv(path, (error)=>{
            console.log(error);
        });
        res.json({
            success:true,
            message:"Local file uploaded succesfully"
        })
    } catch (error) {
        console.log(error);
    }
}





function checkFileTypeSuppported(type,supportedType){
    return supportedType.includes(type)
}

async function uploadCloudinary(file,folder,quality){
    const option={folder};
    option.resource_type="auto"
    if(quality){
        option.quality=quality
    }
    return await Coludinary.uploader.upload(file.tempFilePath,option)
}





exports.imageUpload=async(req,res)=>{
    try {
        const {name ,tags,email}=req.body;
        console.log(name,tags,email);

        const file =req.files.imageFile;
        console.log(file);

        const supportedType=["jpg","jpeg","png"]
        const fileType=file.name.split(".")[1].toLowerCase();
        console.log("here",fileType);

        if(!checkFileTypeSuppported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"Unsupported File Type"
            })
        }

        const responce=await uploadCloudinary(file,"Ankur Saini",)
    
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:responce.secure_url,
        })
        res.json({
            success:true,
            imageUrl:responce.secure_url,
            message:"Image Uploded Succesfully"
        })
         console.log("responce here",responce);

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"server error"
        })
    }
}


exports.videoUpload=async(req,res)=>{
    try {
        const {name,email,tags}=req.body;
        const file=req.files.videoFile;;
        const supportedType=["mp4","mov"]
        const fileType=file.name.split(".")[1].toLowerCase()
        if(!checkFileTypeSuppported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"Unsupported Format"
            });
        }
        const responce=await uploadCloudinary(file,"Ankur Saini")
        console.log(responce);
        
        const fileData=await File.create({
            name,
            tags,
            email,
            video:responce.secure_url,
        })
        res.json({
            success:true,
            message:"Video upload succesfully"
        })
    } catch (error) {
        console.log(error);
     res.status(400).json({
        success:false,
        message:"server error"
     })   
    }
}



exports.imageReducerUpload=async(req,res)=>{
    try {
        const {name ,tags,email}=req.body;
        console.log(name,tags,email);

        const file =req.files.reduceFile;
        console.log(file);

        const supportedType=["jpg","jpeg","png"]
        const fileType=file.name.split(".")[1].toLowerCase();
        console.log("here",fileType);

        if(!checkFileTypeSuppported(fileType,supportedType)){
            return res.status(400).json({
                success:false,
                message:"Unsupported File Type"
            })
        }

        const responce=await uploadCloudinary(file,"Ankur Saini",90)
    
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:responce.secure_url,
        })
        res.json({
            success:true,
            imageUrl:responce.secure_url,
            message:"Image Uploded Succesfully after redusing"
        })
         console.log("responce here",responce);

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"server error"
        })
    }
}