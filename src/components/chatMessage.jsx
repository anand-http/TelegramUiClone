import React from "react";

const ChatMessage = ({ time, message, sender }) => {
	const isSender = sender === 1;
	const SimpleTime = (time) => {
		const date = new Date(time);
		let hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12;
		const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
		const strTime = `${hours}:${minutesStr} ${ampm}`;
		return strTime;
	};

	return (
		<div
			className={`flex ${
				isSender ? "justify-end" : "justify-start"
			} mb-4`}
		>
			<div
				className={`max-w-xs rounded-lg p-3 ${
					isSender ? "bg-lime-100 text-black" : "bg-white"
				}`}
			>
				<p className="text-sm">{message}</p>
				<div className="w-full flex justify-end mt-1">
					<p className="text-gray-500 text-xs">{SimpleTime(time)}</p>
				</div>
			</div>
		</div>
	);
};

export default ChatMessage;
