import React from 'react'
import { HiEmojiHappy } from "react-icons/hi";
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context-api/SocketContext';


function Conversation({conversation,lastindex,emoji}) {
	const {selectedconversation,setselectedconversation}= useConversation();
	const ifselected = selectedconversation && selectedconversation._id === conversation._id;//update background color
	const {onlineusers} = useSocketContext();
	const ifonline = onlineusers.includes(conversation._id);
	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${ifselected ? "bg-sky-500" : ""}
			`}
			onClick={()=>setselectedconversation(conversation)}
			>
			<div className={`avatar ${ifonline ? "online":""}`}>
			
				<div className="w-12 rounded-full">
				{console.log(conversation.profilepic)}
				<img src={conversation.profilepic} alt ='user avatar' />
				</div>
			</div>
			
			

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullname}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastindex&&<div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;