import React, { useState } from 'react'
import { BsFillSendFill } from "react-icons/bs";
import SendMessagehooks from '../../hooks/SendMessagehooks';

function MessageInput() {
	const [message,setmessage]= useState("");
	const {loading,sendmessage}= SendMessagehooks();
	const handlesubmit=async(e)=>{
		e.preventDefault();
		if(!message) return;
		await sendmessage(message);
		setmessage("");
	}
	return (
		<form className='px-4 my-3' onSubmit={handlesubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e)=>setmessage(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {loading ? <div className='loading loading-spinner'></div> : <BsFillSendFill />}
				</button>
			</div>
		</form>
	);
};

export default MessageInput