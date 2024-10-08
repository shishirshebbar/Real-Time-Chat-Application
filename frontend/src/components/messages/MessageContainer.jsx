import React, { useEffect , useState} from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context-api/AuthContext';

function MessageContainer() {
	const{selectedconversation,setselectedconversation}=useConversation();
	
	useEffect(()=>{
		//unmount
		return()=>setselectedconversation(null);
	},[setselectedconversation])
	   
  
  return (
    <div className='md:min-w-[450px] flex flex-col'>
		{!selectedconversation?(<NoChat />):(
        <>
 				
 				{/* Header */}
				<div className="bg-gray-100 px-6 py-4 mb-4 flex items-center space-x-3 w-full rounded-lg shadow-md">
				<span className="text-gray-600 text-lg font-medium">To:</span>
				<span className="text-black font-bold text-lg">{selectedconversation.fullname}</span>
				</div>


 				<Messages />
				<MessageInput />
 			</>
			)}
        </div>
  )
}

export default MessageContainer

const NoChat=()=>{
	const {authorizeduser} = useAuthContext();
	return(
		<div className='flex items-center w-full h-full justify-center'>
			<div className='px-4 text-center sm:text-lg m:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>

				<p>Welcome {authorizeduser.fullname}</p>
				<p>Select a chat to start messaging</p>
				<LuMessagesSquare className='text-3xl md:text-6xl text-center'/>

			</div>

		</div>
	)
}