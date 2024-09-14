import React from 'react'
import Conversation from './Conversation';
import GetConversationhooks from '../../hooks/GetConversationhooks';
import { getemoji } from '../../utilities/emojis';
function Conversations() {
	const {loading,conversations}=GetConversationhooks();
	console.log("CONVERATIONS:",conversations);
	return (
		
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation,index)=>(
				<Conversation
				key={conversation._id}
				conversation={conversation}
				emoji = {getemoji()}
				lastindex= {index===conversations.length-1}
				/>
			))}
			{loading?<span className="loading loading-spinner loading-lg mx-auto"></span>:null}
			{/* <Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation /> */}
		</div>
	);
};

export default Conversations