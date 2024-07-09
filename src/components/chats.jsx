import React from 'react'
import pic from '../assets/profile-pic (4).png'


const Chats = ({ name, id,onClick }) => {
  return (
    <div className='flex items-center px-4 mb-5 mt-1' onClick={onClick}>
      <div className='w-10'>
        <img width={"100%"} height={"100%"} className='rounded-full' src={pic} alt="chats" />
      </div>
      <div className='ml-4'>
        <h3 className='font-semibold dark:text-white text-sm'>{name}</h3>
        <p className="line-clamp-1 text-gray-400 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quasi!</p>
      </div>
    </div>
  )
}

export default Chats