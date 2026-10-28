import ChatRoom from "./components/chatRoom";
import Header from "./components/header";
import ChatsContainer from "./container/chatsContainer";
import { applySavedTheme } from "./darkTheme";
import { useContext, useEffect } from "react";
import { MyContext } from "./myContext";

import { useState } from "react";

function App() {
	const { selectedId, setChatUrl, chatUrl } = useContext(MyContext);
	const [chatExpanded, setChatExpanded] = useState(false);

	useEffect(() => {
		// Automatically expand chat if a chat is selected
		if (selectedId) {
			setChatExpanded(true);
		}
	}, [selectedId]);

	const toggleChatExpansion = () => {
		setChatExpanded(!chatExpanded);
	};

	useEffect(() => {
		applySavedTheme();
	}, []);

	return (
		<>
			<div className="flex min-h-screen overflow-hidden">
				<div
					className={`${
						chatExpanded ? "hidden sm:block" : "block"
					} w-full sm:w-1/3 border dark:border-blue-900 border-r-gray-100 h-auto max-h-screen overflow-y-auto overflow-hidden dark:bg-blue-950`}
				>
					<Header />
					<div className="w-full flex gap-1 overflow-auto scroll-style-x px-2 pb-1">
						<div
							onClick={() => {
								setChatUrl("page1");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page1" && "bg-green-300"
							}`}
						>
							All
						</div>
						<div
							onClick={() => {
								setChatUrl("page2");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page2" && "bg-green-300"
							}`}
						>
							Personal
						</div>
						<div
							onClick={() => {
								setChatUrl("page3");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page3" && "bg-green-300"
							}`}
						>
							Study
						</div>
						<div
							onClick={() => {
								setChatUrl("page4");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page4" && "bg-green-300"
							}`}
						>
							Intern
						</div>
						<div
							onClick={() => {
								setChatUrl("page5");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page5" && "bg-green-300"
							}`}
						>
							Shoping
						</div>
						<div
							onClick={() => {
								setChatUrl("page6");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page6" && "bg-green-300"
							}`}
						>
							Self
						</div>
						<div
							onClick={() => {
								setChatUrl("page7");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page7" && "bg-green-300"
							}`}
						>
							community
						</div>
						<div
							onClick={() => {
								setChatUrl("page8");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page8" && "bg-green-300"
							}`}
						>
							Tech
						</div>
						<div
							onClick={() => {
								setChatUrl("page9");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page9" && "bg-green-300"
							}`}
						>
							Channel
						</div>
						<div
							onClick={() => {
								setChatUrl("page10");
							}}
							className={`border px-2 py-px text-sm rounded-md border-green-200 cursor-pointer ${
								chatUrl === "page10" && "bg-green-300"
							}`}
						>
							General
						</div>
					</div>
					<ChatsContainer onChatClick={toggleChatExpansion} />
				</div>

				<div
					className={`${
						chatExpanded ? "block" : "hidden sm:block"
					} w-full sm:w-2/3 h-auto max-h-screen overflow-y-auto overflow-hidden sm:block`}
				>
					<ChatRoom onChatClick={toggleChatExpansion} />
				</div>
			</div>
		</>
	);
}

export default App;
