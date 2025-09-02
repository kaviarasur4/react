import React from 'react'

export default function Fotter() {
    return (
        <div>
            <div>
                <div className="bg-[url('assets/images/bg02.png')] w-full h-[680px] bg-no-repeat">
                    <div className='grid grid-cols-4 gap-10 py-40 max-w-[1000px] mx-auto'>
                        <div>
                            <img src="/assets/images/logo.webp" alt="logo" className='' />
                        </div>
                        <div>
                            <p className='text-white josefin-sans text-[18px] text-center mb-5'>Navigation</p>
                            <div className='text-gray-500 flex flex-col poppins-medium'>
                                <button className='mb-3 cursor-pointer'>Home</button>
                                <button className='mb-3 cursor-pointer'>Events</button>
                                <button className='mb-3 cursor-pointer'>Testimonial</button>
                                <button className='mb-3 cursor-pointer'>Categories</button>
                                <button className='mb-3 cursor-pointer'>Contacts</button>
                            </div>
                        </div>
                        <div>
                            <p className='text-white josefin-sans text-[18px] text-center mb-5'>Useful Links</p>
                            <div className='text-gray-500 flex flex-col poppins-medium'>
                                <button className='mb-3 cursor-pointer'>Registration</button>
                                <button className='mb-3 cursor-pointer'>Login</button>
                                <button className='mb-3 cursor-pointer'>Policy</button>
                                <button className='mb-3 cursor-pointer'>Terms & Conditions</button>
                            </div>
                        </div>
                        <div>
                            <p className='text-white josefin-sans text-[18px] text-center bg-gray-600 w-fit'>Instagram Feed</p>
                            <div className='flex flex-row'>
                                <img src="/assets/images/instagram1.png.webp" alt="cook" className='h-[130px] w-[130px] p-2' />
                                <img src="/assets/images/instagram2.png.webp" alt="cook" className='h-[130px] w-[130px] p-2' />
                                <img src="/assets/images/instagram3.png.webp" alt="cook" className='h-[130px] w-[130px] p-2' />
                            </div>
                            <div className='flex flex-row'>
                                <img src="/assets/images/instagram4.png.webp" alt="cook" className='h-[130px] w-[130px] p-2' />
                                <img src="/assets/images/instagram5.png.webp" alt="cook" className='h-[130px] w-[130px] p-2' />
                                <img src="/assets/images/instagram6.png.webp" alt="cook" className='h-[130px] w-[130px] p-2' />
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-600 poppins-medium flex justify-evenly text-[18px]' >
                        <div className='flex'>
                            <p>Copyright ©2025 All rights reserved | This template is made with  by</p>
                            <p className='text-[#ff5600] ml-5 cursor-pointer'>Colorlib</p>
                        </div>
                        <div className='flex'>
                            <p className='pr-4'>Follow Us ---</p>
                            <img src="/assets/images/instagrama.png" alt="gdg" className='w-[30px] h-[30px] bg-gray-700 p-0.5 rounded cursor-pointer' />
                            <img src="/assets/images/twitter.png" alt="gdg" className='w-[30px] h-[30px] bg-gray-700 p-0.5 rounded cursor-pointer' />
                            <img src="/assets/images/globe.png" alt="gdg" className='w-[30px] h-[30px] bg-gray-700 p-0.5 rounded cursor-pointer' />
                            <img src="/assets/images/facebook.png" alt="gdg" className='w-[30px] h-[30px] bg-gray-700 p-0.5 rounded cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
