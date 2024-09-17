import { useEffect, useRef } from "react";
import GetMessagehooks from "../../hooks/GetMessagehooks";
import Messageskelton from "../skeleton/Messageskelton";
import Message from "./Message";

const Messages = () => {
	const {messages,loading}= GetMessagehooks();
	console.log("messages:",messages)
	const lastmessage = useRef();
	useEffect(()=>{
		setTimeout(()=>{
		lastmessage.current?.scrollIntoView({behaviour:"smooth"});
		},100);
	},[messages])
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading&& messages.length>0 &&messages.map((message)=>(
				
				
				
				<div key={message._id} ref={lastmessage}>
				<Message message={message}/>
				</div>
			))}

			
			{loading&&[...Array(3)].map((_,index)=><Messageskelton key={index}/>)}
		{!loading&&messages.length===0 &&(
			<p className='text-center'>Send a message to start the converstaion</p>
		)}
		
		
		</div>

	);
};
export default Messages;