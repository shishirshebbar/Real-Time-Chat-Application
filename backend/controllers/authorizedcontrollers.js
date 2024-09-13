import User from "../model/usermodel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utilities/webtokengenerator.js";

export const signup = async(req,res)=>{
    try{
        const {fullname,username,password,confirmpassword,gender}=req.body;
        if(password!==confirmpassword){
            return res.status(400).json({error:"The entered  and the confirm password didn't match."})
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"User alreay exists.Try with another username"});
        }
        const pass = await bcrypt.genSalt(10);// A salt is a random value added to the password before hashing to ensure that identical passwords produce different hashes, enhancing security by defending against rainbow table attacks.
        const hashedpassword=await bcrypt.hash(password,pass);

        const img1 =`${req.protocol}://${req.get('host')}/assets/image1.jpg`;
        const img2 =`${req.protocol}://${req.get('host')}/assets/image2.jpg`;
        const newuser= new User({
            fullname,
            username,
            password:hashedpassword,
            gender,
            profilepic:gender==="male"?img1:img2
        })
        if(newuser){
        generateToken(newuser._id,res);
        await newuser.save();
        res.status(201).json({
            _id:newuser._id,
            fullname:newuser.fullname,
            username:newuser.username,
            profilepic:newuser.profilepic
        });}
        else{
            res.status(400).json({error:"Ivalid user data"})

        }

    }catch(error){
        console.log("error",err.message);
        res.status(500).json({error:"Internal server error"})
        


    }
}


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        const checkPassword = await bcrypt.compare(password,  user.password|| "");

        // Check if user exists and password matches
        if (!user|| !checkPassword) {
            return res.status(400).json({ error: "Wrong username or password" });
        }
       
        // Generate token and send response
        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilepic
        });

    } catch (err) {
        console.log("Error", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});//deleing the cookie
        res.status(200).json({message:"Logged out successfully!!"});

    }catch(error){
        console.log("Error", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
}