import React from 'react'
import { HiEmojiHappy } from "react-icons/hi";
function Conversation() {
	return (
		<>
			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
			<div className="avatar online">
			<div className="avatar-group -space-x-6 rtl:space-x-reverse">
			<div className="avatar">
				<div className="w-12">
				<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
				</div>
			</div>
			</div>
			</div>
			

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>James</p>
						<span className='text-xl'><HiEmojiHappy /></span>
					</div>
				</div>
			</div>

			<div className='divider my-0 py-0 h-1' />
		</>
	);
};
export default Conversation;