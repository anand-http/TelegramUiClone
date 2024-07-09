import React, { useState, useEffect, useRef } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import MenuWindow from './menuWindow';
import "../assets/menuWindowAnimation.css"


const Header = () => {
    const [menu, setMenu] = useState(false)

    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (

        <div className='flex items-center bg-white justify-between  p-3 relative sticky top-0 z-20 dark:bg-blue-950'>


            <div className='flex items-center w-full'>

                <div className='ml-3' onClick={() => setMenu(!menu)}>
                    <GiHamburgerMenu color='gray' />
                </div>

                <div className='ml-3 mr-2 w-80'>
                <input className='rounded-xl px-5 py-1 w-full bg-gray-100 dark:bg-blue-900 text-sm outline-none dark:text-white' type="text" placeholder='Search' />   
                </div>

                <div className='w-8'>
                    <img className='rounded-full' width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku8_NMJHPR56xur3VJWN1MA1FbFE9p3wj_g&s" alt="Logo" />
                </div>

                {menu && (
                    <div
                        className='fixed inset-0 bg-black bg-opacity-65'
                        onClick={() => setMenu(false)}
                    ></div>
                )}

                {menu && <div ref={menuRef} className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg ${menu ? 'slide-in' : 'slide-out'
                    }`}><MenuWindow /></div>}
            </div>




        </div>
    )
}

export default Header