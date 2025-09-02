import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='fixed py-5 bg-white w-full z-20'>
                <div className='flex justify-between max-w-[1700px] mx-auto items-center '>
                    <img src="/assets/images/logo.webp" alt="logo" className='w-25' />
                    <div className='text-[17px] josefin-sans flex items-center gap-10'>
                        <p className='hover:text-[#ff5600] cursor-pointer'>Home</p>
                        <p className='hover:text-[#ff5600] cursor-pointer'>About</p>
                        <p className='hover:text-[#ff5600] cursor-pointer'>Menu</p>
                        <p className='hover:text-[#ff5600] cursor-pointer'>Blog</p>
                        <p className='hover:text-[#ff5600] cursor-pointer'>Contack</p>
                        <button className='border-1 border-[#ff5600] rounded-lg p-3 cursor-pointer text-gray-400 text-[17px]'>Order Online</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
