import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import ChatMessage from './chatMessage';
import { MyContext } from '../myContext';
import { IoMdArrowRoundBack } from "react-icons/io";
import pic from '../assets/profile-pic (4).png'


const ChatRoom = ({ onChatClick }) => {
    const { selectedName, fetchData } = useContext(MyContext);


    return (
        <div className='bg-green-300 min-h-screen dark:bg-blue-950'>
            {/* header */}
            {
                fetchData ?
                    <div className='sticky top-0 z-20 dark:border-r-0 dark:border-t-0 dark:border-l-0 flex items-center bg-white justify-between px-4 py-2 border dark:border-b-blue-900 border-b-gray-200 dark:bg-blue-950'>
                        <div className='flex justify-start items-center'>
                            <IoMdArrowRoundBack className='dark:text-white sm:hidden text-xl mr-3' onClick={onChatClick} />
                            <div className='w-10 rounded-full'>
                                <img width={"100%"} className='rounded-full' src={pic} alt="dp" />
                            </div>
                            <div className='ml-3'>
                                <h1 className='font-semibold dark:text-white'>{selectedName?.length > 0 ? selectedName : "Anand"}</h1>
                                <p className='text-xs text-gray-400'>last seen recently</p>
                            </div>
                        </div>

                        <div className='flex items-center dark:text-white '>
                            <CiSearch className='text-2xl mr-2' />
                            <IoIosCall className='text-2xl mr-2' />
                            <BiWalletAlt className='text-2xl mr-2' />
                            <BsThreeDotsVertical className='text-2xl mr-2' />
                        </div>


                    </div> : ""
            }



            {/* chat body */}
            <div className='px-20 py-6 '>
                {
                    fetchData ? fetchData.map((item) => (
                        <div>
                            <ChatMessage message={item.message} sender={item.sender_id} />
                        </div>
                    )) : <div className='flex items-center justify-center min-h-screen'>
                        <p className='font-semibold dark:text-white'>Select a chat to start messaging</p>
                    </div>
                }
            </div>

        </div>
    )
}

export default ChatRoom