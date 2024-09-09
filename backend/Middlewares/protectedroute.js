import jwt from "jsonwebtoken";
import User from "../model/usermodel.js";

const protectedRoute =async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized access- no token is provided"})
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"Invalid token "})
        }
        const user = await User.findById(decoded.userId).select("-password");//remove password
        if(!user){
            return res.status(404).json({error:"User not found"})
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in middleware: ", error.message);
        res.status(500).json({error:"Internanl server error"})
        
    }
}

export default protectedRoute;