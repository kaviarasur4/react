import React from 'react'

export default function Contack() {
    return (
        <div>
            <div className="bg-[url('/assets/images/h1.png')] h-130 w-full bg-no-repeat bg-center  lg:mt-20 mt-5">
                <div className='max-w-[1800px] h-full mx-auto flex justify-start items-center'>
                    <h2 className='josefin-sans text-[50px] mx-3'>Contact Us</h2>
                </div>
            </div>
            <div className='ml-2 mb-9 mx-3'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31228.71075686604!2d79.47890899498661!3d11.933675900821617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5356c0727b6b77%3A0x2c8815a4b312e5f3!2sViluppuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756999352980!5m2!1sen!2sin" className='w-full h-70'/>
            </div>
            <div className='max-w-[1400px] h-full mx-auto flex justify-start '>
                <div>
                    <p className='josefin-sans lg:text-[25px] text-2xl lg:py-5 px-3'>Get in Touch</p>
                    <div className='flex lg:flex-row flex-col lg:gap-20'>
                        <form className='pb-5 flex flex-col   lg:w-[900px] mx-3 '>
                            <div>
                                <textarea className='border-gray-200 border-1 focus:outline-0 pb-30 w-full p-3' placeholder='Enter Message'></textarea>
                                <div className='flex w-full'>
                                    <div className='mr-4 mb-2 w-full'>
                                        <input type="text" className=' border-gray-200 border-1 focus:outline-0  w-full p-3 ' required placeholder='Enter Your Name' />
                                    </div>
                                    <div className='w-full'>
                                        <input type="text" className=' border-gray-200 border-1 focus:outline-0  w-full p-3' placeholder='Enter Gmail Address' />
                                    </div>
                                </div>
                                <input type="text" className=' border-gray-200 border-1 focus:outline-0 p-3 w-full mb-2' placeholder='Enter Subject' />
                            </div>
                            <button type='submit' className='josefin-medium border-1 px-10 py-5 mb-30 text-[14px] hover:bg-[#ff5600] hover:text-white cursor-pointer duration-300 text-[#ff5600]'>SEND</button>
                        </form>
                        <div className=''>
                            <div className='mx-3'>
                                <div className='flex'>
                                    <img src="assets/images/home.png" alt="home" className='h-10 w-10' />
                                    <div className='ml-5'>
                                        <p className='josefin-sans mb-1'>Buttonwood, California.</p>
                                        <p className='poppins-medium text-gray-500'>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <div className='flex'>
                                        <img src="assets/images/tablet.png" alt="home" className='h-10 w-10' />
                                        <div className='ml-5'>
                                            <p className='josefin-sans mb-1'>+1 253 565 2365</p>
                                            <p className='poppins-medium text-gray-500'>Mon to Fri 9am to 6pm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <div className='flex'>
                                        <img src="assets/images/mail .png" alt="home" className='h-10 w-10' />
                                        <div className='ml-5'>
                                            <p className='josefin-sans mb-1'>support@colorlib.com</p>
                                            <p className='poppins-medium text-gray-500'>Send us your query <br /> anytime!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
