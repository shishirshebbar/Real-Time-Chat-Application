import React from 'react';
import { useAuthContext } from '../../context-api/AuthContext';
import useConversation from '../../zustand/useConversation';
import {time} from "../../utilities/time";



function Message({message}) {
  const{authorizeduser}=useAuthContext();
  const {selectedconversation} = useConversation();
  const check_if_message_from_me = message.senderId===authorizeduser._id;
  const profilepic= check_if_message_from_me?authorizeduser.profilepic:selectedconversation?.profilepic;
  const background_color = check_if_message_from_me?"bg-blue-500" : "";
  const chatclassname= check_if_message_from_me?"chat-end":"chat-start";
  const timeformat= time(message.createdAt);

  return (
    <div className={`chat ${chatclassname}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'> 
        
          <img alt='user avatar' src={profilepic} />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 pb-2 ${background_color}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{timeformat}</div>
    </div>
  );
}

export default Message;
