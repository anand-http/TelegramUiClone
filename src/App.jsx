import ChatRoom from './components/chatRoom'
import Header from './components/header'
import ChatsContainer from './container/chatsContainer'
import { applySavedTheme } from './darkTheme'
import { useContext, useEffect } from 'react'
import { MyContext } from './myContext'

import { useState } from 'react'

function App() {

  const { selectedId } = useContext(MyContext);
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
  }, [])

  return (
    <>
      <div className='flex min-h-screen overflow-hidden'>

        <div className={`${chatExpanded ? 'hidden sm:block' : 'block'} w-full sm:w-1/3 border dark:border-blue-900 border-r-gray-100 h-auto max-h-screen overflow-y-auto overflow-hidden dark:bg-blue-950`}>
          <Header />
          <ChatsContainer onChatClick={toggleChatExpansion} />
        </div>

        <div className={`${chatExpanded ? 'block' : 'hidden sm:block'} w-full sm:w-2/3 h-auto max-h-screen overflow-y-auto overflow-hidden sm:block`}>
          <ChatRoom onChatClick={toggleChatExpansion} />
        </div>

      </div>
    </>
  )
}

export default App
