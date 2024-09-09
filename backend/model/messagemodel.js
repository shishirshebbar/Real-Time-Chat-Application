import mongoose from "mongoose";

const messageschema=new mongoose.Schema({
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    recieverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});
const Message = mongoose.model("Message",messageschema);
export default Message;