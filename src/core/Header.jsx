import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div className='fixed py-5 px-5 bg-white w-full z-20'>
                <div className='flex justify-between max-w-[1700px] mx-auto items-center '>
                    <img src="/assets/images/logo.webp" alt="logo" className='w-25' />
                    <div>
                        <img src="/assets/images/menu.png" alt="menu" className='lg:hidden block w-10' />
                    </div>
                    <div className='lg:block hidden'>
                        <div className='text-[17px] josefin-sans flex items-center gap-10 '>
                            <Link to='/' className='hover:text-[#ff5600] cursor-pointer'>Home</Link>
                            <Link to='about' className='hover:text-[#ff5600] cursor-pointer'>About</Link>
                            <p className='hover:text-[#ff5600] cursor-pointer'>Menu</p>
                            <p className='hover:text-[#ff5600] cursor-pointer'>Blog</p>
                            <p className='hover:text-[#ff5600] cursor-pointer'>Contack</p>
                            <button className='border-1 border-[#ff5600] rounded-lg p-3 cursor-pointer text-gray-400 text-[17px]'>Order Online</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
