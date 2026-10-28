import React from 'react'

const Menu = ({ icon, title, onClick }) => {
    return (
        <div className='flex items-center mb-5 mt-2 cursor-pointer' onClick={onClick}>
            <div className='w-10'>
                {icon}
            </div>
            <div >
                <h3 className='font-semibold'>{title}</h3>
            </div>
        </div>
    )
}

export default Menu