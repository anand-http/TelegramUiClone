import React, { useContext } from 'react'
import Chats from '../components/chats'
import { MyContext } from '../myContext.jsx'

const ChatsContainer = ({onChatClick}) => {
    const { messageList } = useContext(MyContext);
    const { setSelectedId, setSelectedName } = useContext(MyContext);


    const handleChatId = (chatId, name) => {
        setSelectedId(chatId)
        setSelectedName(name)
        onChatClick();

    }
    return (
        <div>

            {
                messageList.length > 0 &&
                messageList && messageList.map((item) => (
                    <div>
                        <Chats key={item.id} id={item.id} name={item.creator?.name ? item.creator.name : "Anand"} onClick={() => (handleChatId(item.id, item.creator?.name))}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default ChatsContainer