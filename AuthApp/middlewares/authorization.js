const jwt=require("jsonwebtoken");
require("dotenv").config();

exports.auth=(req,res,next)=>{
    try {
        const token=req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");
        // console.log("body se",token)
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token missing"
            })
        }

        try {
            const payload=jwt.verify(token,process.env.JWT_SECRET)
            req.user=payload
            // console.log(payload)
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token invalid"
            })
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Something went wrong"
        })
    
    }
}

exports.isStudent=(req,res,next)=>{
    try {
        if(req.user.role!="student"){
            return res.status(401).json({
                success:false,
                message:"Unauthorized action"
            })
        
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role not matched"
        })
    
    }
}

exports.isAdmin=(req,res,next)=>{
    try {
        console.log(req.user.role);
        if(req.user.role!=="admin"){
            return res.status(401).json({
                success:false,
                message:"Unauthorized action"
            })
        
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User role not matched"
        })
    
    }
}