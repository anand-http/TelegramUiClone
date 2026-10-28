import React from "react";

const Chats = ({ name, id, onClick, updated, count }) => {
	return (
		<div
			key={id}
			className="flex items-center px-4 mb-5 mt-1"
			onClick={onClick}
		>
			<div className="w-10">
				<img
					width={"100%"}
					height={"100%"}
					className="rounded-full"
					src={
						"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
					}
					alt="chats"
				/>
			</div>
			<div className="ml-4 w-full relative">
				<h3 className="font-semibold dark:text-white text-sm">
					{name}
				</h3>
				<div className="w-full flex justify-between">
					<p className="text-gray-400 text-xs line-clamp-1">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Illum dolorem facere voluptates, suscipit sunt,
						molestiae et officiis, mollitia iste dolorum cumque
						soluta eius. Nostrum velit, eveniet adipisci nulla
						voluptas deserunt!
					</p>
					<p className="line-clamp-1 text-gray-400 text-xs min-w-fit">
						{new Date(updated)
							.toDateString()
							.split(" ")
							.slice(0, 3)
							.reverse()
							.join("-")}
					</p>
				</div>
				<div className="absolute right-0 -top-1 text-xs border rounded-full h-6 justify-center w-6 flex items-center bg-blue-600/80 text-white">
					{count}
				</div>
			</div>
		</div>
	);
};

export default Chats;
