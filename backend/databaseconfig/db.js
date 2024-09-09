import mongoose from "mongoose";

const connecttoMongo=async()=>{
    try{
        await mongoose.connect(process.env.URL);
        console.log("Connected to MONGODB")
    }catch(error){
        console.log("error",error.message);
    }
};
export default connecttoMongo;