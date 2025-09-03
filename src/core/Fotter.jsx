import React from 'react'

export default function Fotter() {
    return (
        <div>
            <div>
                <div className="bg-[url('assets/images/bg02.png')] w-full bg-cover bg-no-repeat">
                    <div className='grid lg:grid-cols-5 grid-cols-1 gap-10 py-40  mx-2 lg:px-50'>
                        <div className='flex lg:items-start justify-start'>
                            <img src="/assets/images/logo.webp" alt="logo" />
                        </div>
                        <div className='text-left'>
                            <p className='text-white josefin-sans text-[18px]  mb-5'>Navigation</p>
                            <ul className='text-gray-500 poppins-medium'>
                                <li className='mb-3 cursor-pointer'>Home</li>
                                <li className='mb-3 cursor-pointer'>Events</li>
                                <li className='mb-3 cursor-pointer'>Testimonial</li>
                                <li className='mb-3 cursor-pointer'>Categories</li>
                                <li className='mb-3 cursor-pointer'>Contacts</li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-white josefin-sans text-[18px]  mb-5'>Useful Links</p>
                            <ul className='text-gray-500 flex flex-col poppins-medium'>
                                <li className='mb-3 cursor-pointer'>Registration</li>
                                <li className='mb-3 cursor-pointer'>Login</li>
                                <li className='mb-3 cursor-pointer'>Policy</li>
                                <li className='mb-3 cursor-pointer'>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <p className='text-white josefin-sans text-[18px]  bg-gray-600 w-fit mb-5 text-center'>Instagram Feed</p>
                            </div>
                            <div className='flex flex-row'>
                                <img src="/assets/images/instagram1.png.webp" alt="cook" className='h-[95px] w-[95px] p-1' />
                                <img src="/assets/images/instagram2.png.webp" alt="cook" className='h-[95px] w-[95px] p-1' />
                                <img src="/assets/images/instagram3.png.webp" alt="cook" className='h-[95px] w-[95px] p-1' />
                            </div>
                            <div className='flex flex-row'>
                                <img src="/assets/images/instagram4.png.webp" alt="cook" className='h-[95px] w-[95px] p-1' />
                                <img src="/assets/images/instagram5.png.webp" alt="cook" className='h-[95px] w-[95px] p-1' />
                                <img src="/assets/images/instagram6.png.webp" alt="cook" className='h-[95px] w-[95px] p-1' />
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-600 poppins-medium flex justify-evenly text-[18px]' >
                        <div className='flex lg:flex-row flex-col lg:mx-1 mx-3'>
                            <div className='flex'>
                                <div>
                                    <p className='mr-10 mb-10'>Copyright ©2025 All rights reserved | This template is made with by <span className='text-[#ff5600] cursor-pointer'>Color Lib</span></p>
                                </div>
                            </div>
                            <div className='flex mb-30'>
                                <p className='pr-4 text-white'>Follow Us ----</p>
                                <img src="/assets/images/instagrama.png" alt="gdg" className='w-[30px] h-[30px] bg-gray-700 p-0.5 rounded cursor-pointer' />
                                <img src="/assets/images/twitter.png" alt="gdg" className='w-[30px] h-[30px] bg-gray-700 p-0.5 rounded cursor-pointer' />
                                <img src="/assets/images/globe.png" alt="gdg" className='w-[30px] h-[30px] bg-gray-700 p-0.5 rounded cursor-pointer' />
                                <img src="/assets/images/facebook.png" alt="gdg" className='w-[30px] h-[30px] bg-gray-700 p-0.5 rounded cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
