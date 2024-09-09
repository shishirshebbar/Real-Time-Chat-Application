import Conversation from "../model/conversationmodel.js"; // Adjust the path if necessary
import Message from "../model/messagemodel.js";


export const sendmessage = async(req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;  // Make sure this is spelled correctly
        const senderId = req.user._id;

        console.log("Sender ID: ", senderId);
        console.log("Receiver ID: ", receiverId);
        console.log("Message: ", message);

        let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } });

        if (!conversation) {
            console.log("No existing conversation found, creating a new one.");
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newmessage = new Message({
            senderId,
            receiverId,
            message
        });

        // If conversation.save() relies on newMessage.save()
        // if (newmessage) {
        //     conversation.messages.push(newmessage._id);
        //     await conversation.save();
        // }
        // await newmessage.save();

        // If conversation.save() and newMessage.save() are independent:
        await Promise.all([conversation.save(), newmessage.save()]);

        console.log("New message saved: ", newmessage);
        res.status(201).json(newmessage);
    } catch (error) {
        console.log("Error in sendmessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
