import Conversation from "../model/conversationmodel.js"; // Adjust the path if necessary
import Message from "../model/messagemodel.js";


export const sendmessage = async (req, res) => {
    try {
      const { message } = req.body;
      const { id: receiverId } = req.params;  // Extract receiverId from request parameters
      const senderId = req.user._id; // Get senderId from authenticated user
  
      console.log("Sender ID: ", senderId);
      console.log("Receiver ID: ", receiverId);
      console.log("Message: ", message);
  
      // Find the conversation between the two users
      let conversation = await Conversation.findOne({ 
        participants: { $all: [senderId, receiverId] } 
      });
  
      //If no conversation exists, create a new one
      if (!conversation) {
        console.log("No existing conversation found, creating a new one.");
        conversation = new Conversation({
          participants: [senderId, receiverId],
          messages: []
        });
        await conversation.save();
      }
  
      // Create the new message
      const newMessage = new Message({
        senderId,
        receiverId,
        message
      });
  
      //  Save the new message
      await newMessage.save();
  
      // Push the message ID into the conversation's messages array
      conversation.messages.push(newMessage._id);
      await conversation.save();
  
      console.log("New message saved: ", newMessage);
      
      // Return the newly created message
      res.status(201).json(newMessage);
      
    } catch (error) {
      console.log("Error in sendMessage controller: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
export const getmessages = async (req, res) => {
    try {
      const { id: userToChatId } = req.params; // Get receiver ID from request parameters
      const senderId = req.user._id; // Get sender ID from authenticated user
  
      // Find a conversation with both participants (sender and receiver)
      const conversation = await Conversation.findOne({
        participants: { $all: [senderId, userToChatId] }
      }).populate("messages"); // Populate actual messages
  
      // Log the conversation to see if it's found
      console.log("Conversation found:", conversation);
  
      if (!conversation) {
        console.log("No conversation found");
        return res.status(200).json([]); // Return an empty array if no conversation is found
      }
  
      // Log the messages to see if they are populated
      console.log("Messages in the conversation:", conversation.messages);
  
      // Return the messages
      res.status(200).json(conversation.messages);
    } catch (error) {
      console.log("Error in getMessages controller: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  