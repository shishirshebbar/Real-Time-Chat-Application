import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";
function MessageContainer() {
	const ifnochatisSelcted = false;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
		{ifnochatisSelcted?(<NoChat />):(
        <>
 				{/* Header */}
 				<div className='bg-gray-400 px-4 py-2 mb-2 flex items-start w-full'>
				 <span className='label-text text-slate-500 text-lg'>To:</span>
				<span className='text-black  font-bold text-lg'> Josh</span>

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
	return(
		<div className='flex items-center w-full h-full justify-center'>
			<div className='px-4 text-center sm:text-lg m:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>

				<p>Welcome John</p>
				<p>Select a chat to start messaging</p>
				<LuMessagesSquare className='text-3xl md:text-6xl text-center'/>

			</div>

		</div>
	)
}