import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
	const [messageList, setMessageList] = useState([]);
	const [messageListSearch, setMessageListSearch] = useState([]);
	const [selectedId, setSelectedId] = useState(null);
	const [selectedName, setSelectedName] = useState(null);
	const [fetchData, setFetchedData] = useState();
	const [chatUrl, setChatUrl] = useState("page1");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(
					"https://devapi.beyondchats.com/api/get_all_chats?" +
						chatUrl.split("e").join("e=")
				);

				const data = await result.data;
				const finalResult = data.data.data;
				setMessageList(finalResult);
				setMessageListSearch(finalResult);
				console.log(finalResult);
			} catch (error) {
				console.log("error while fetch ", error);
			}
		};

		fetchData();
	}, [chatUrl]);

	useEffect(() => {
		const fetchMessage = async () => {
			try {
				if (!selectedId) {
					return;
				}
				const result = await axios.get(
					`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${selectedId}`
				);

				const data = result.data.data;
				console.log(data);
				setFetchedData(data);
			} catch (error) {
				console.log("error while fetch ", error);
			}
		};
		fetchMessage();
	}, [selectedId]);

	return (
		<MyContext.Provider
			value={{
				messageList,
				selectedId,
				setSelectedId,
				setSelectedName,
				setChatUrl,
				messageListSearch,
				setMessageListSearch,
				chatUrl,
				selectedName,
				fetchData,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};
