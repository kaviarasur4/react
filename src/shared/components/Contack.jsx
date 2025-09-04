import React from 'react'

export default function Contack() {
    return (
        <div>
            <div className="bg-[url('/assets/images/h1.png')] h-130 w-full bg-no-repeat bg-center  lg:mt-20 mt-5">
                <div className='max-w-[1400px] h-full mx-auto flex justify-start items-center'>
                    <h2 className='josefin-sans text-[50px]'>Contact Us</h2>
                </div>
            </div>
            <div className='flex justify-center mx auto'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16076.677845941937!2d79.48958173791524!3d11.852657764963384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756983155325!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
            <div className='max-w-[1400px] h-full mx-auto flex justify-start '>
                <div>
                    <p className='josefin-sans text-[25px] py-5'>Get in Touch</p>
                    <div className='flex'>
                        <form className='pb-5'>
                            <div>
                                <textarea className=' border-gray-200 border-1 focus:outline-0 pb-30 pr-150 p-3' placeholder='Enter Message'></textarea>
                                <div className='flex'>
                                    <div className='mr-4 mb-2'>
                                        <input type="text" className=' border-gray-200 border-1 focus:outline-0  pr-46 p-3 ' required placeholder='Enter Your Name' />
                                    </div>
                                    <div>
                                        <input type="text" className=' border-gray-200 border-1 focus:outline-0  pr-46 p-3' placeholder='Enter Gmail Address' />
                                    </div>
                                </div>
                                <input type="text" className=' border-gray-200 border-1 focus:outline-0m p-3 pr-145 mb-2' placeholder='Enter Subject' />
                            </div>
                            <button type='submit' className='josefin-medium border-1 px-10 py-5 mb-30 text-[14px] hover:bg-[#ff5600] hover:text-white cursor-pointer duration-300 text-[#ff5600]'>SEND</button>
                        </form>
                        <div className='ml-50'>
                            <div>
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
