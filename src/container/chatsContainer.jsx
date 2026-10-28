import React, { useContext } from "react";
import Chats from "../components/chats";
import { MyContext } from "../myContext.jsx";

const ChatsContainer = ({ onChatClick }) => {
	const { messageListSearch } = useContext(MyContext);
	const { setSelectedId, setSelectedName } = useContext(MyContext);

	const handleChatId = (chatId, name) => {
		setSelectedId(chatId);
		setSelectedName(name);
		onChatClick();
	};
	return (
		<div>
			{messageListSearch.length > 0 &&
				messageListSearch &&
				messageListSearch.map((item) => (
					<div key={item.id}>
						<Chats
							key={item.id}
							id={item.id}
							name={
								item.creator?.name
									? item.creator.name
									: "Aaditya"
							}
							count={item.msg_count}
							updated={item.creator?.updated_at}
							onClick={() =>
								handleChatId(
									item.id,
									item.creator?.name || "Aaditya"
								)
							}
						/>
					</div>
				))}
		</div>
	);
};

export default ChatsContainer;
