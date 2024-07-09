import React, { useState } from 'react'
import Menu from './menu'
import { FaUserFriends } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { toggleDarkMode } from '../darkTheme';

import pic from '../assets/profile-pic (4).png'
const MenuWindow = () => {


    return (
        <div className=' bg-white  px-4 py-4 dark:bg-blue-950 min-h-screen dark:text-white'>
            <div className='w-9 mb-3'>
                <img width="`100%" height="100%" className='rounded-full' src={pic} alt="profile" />
            </div>
            <h2 className='font-semibold'>Anand</h2>
            <h2 className='mb-2 text-sm'>+91 9695680505</h2>

            <hr />

            <Menu icon={<FaUserFriends />} title={"New Group"} />
            <Menu icon={<FaUserFriends />} title={"New Channel"} />
            <Menu icon={<CiWallet />} title={"Wallet"} />
            <Menu icon={<IoIosContact />} title={"Contacts"} />
            <Menu icon={<IoCallSharp />} title={"Calls"} />
            <Menu icon={<FaRegMessage />} title={"Saved Messages"} />
            <Menu icon={<IoSettingsOutline />} title={"Settings"} />


            <Menu icon={(<div><FaRegMoon className='dark:hidden' /> <CiLight className='hidden dark:block text-xl' /></div>)} title={"Night Mode"} onClick={toggleDarkMode} />




        </div>
    )
}

export default MenuWindow