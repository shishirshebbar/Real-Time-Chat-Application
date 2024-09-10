import User from "../model/usermodel.js"


export const getusers = async(req,res)=>{
    try{
        const loggedinuser = req.user._id;

        const filtereduser= await User.find({_id:{$ne:loggedinuser}});//do not want see selfuser on the sidebar and the user does not want to send message to himself

        res.status(200).json(filtereduser);

    }catch(error){
        console.error("Error in getUsers controller: ", error.message);
        res.status(500).json({ message: "Server Error" });
    }
}