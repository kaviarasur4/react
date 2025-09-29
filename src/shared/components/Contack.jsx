import React, { useEffect, useState } from 'react'
import Loading from './Loading';

export default function Contack() {

    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        message: '',
        name: '',
        email: '',
        subject: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { message, name, email, subject } = formData;
        const phoneNumber = '+919345263517';
        const whatsappMessage = `** Contact Request **
* Name: ${name}
* Email: ${email}
* Subject: ${subject}
* Message: ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl);
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <div>

            <div className="bg-[url('/assets/images/h1.png')] h-130 w-full bg-no-repeat bg-center  lg:my-10 my-10 ">
                <div className="max-width-[1400px] flex items-center justify-start h-full lg:mx-40 mx-10">
                    <div className="space-y-6">
                        <p className='text-[#ff5600] poppins-medium'>Book a Table</p>
                        <p className="poppins-regular lg:text-lg md:text-base leading-relaxed">Whether it’s a table reservation, <br />catering request, or a simple question, our team is here to help. <br />Reach out to us by phone, email, or drop by the restaurant—we’re always ready to serve you with a smile.</p>
                        <button className='poppins-medium bg-[#ff5600] rounded border-1 w-fit p-5 text-white hover:bg-white hover:text-[#ff5600] cursor-pointer duration-300'>Order Online</button>
                    </div>
                </div>
            </div>
            <div className='mb-9'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31228.71075686604!2d79.47890899498661!3d11.933675900821617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5356c0727b6b77%3A0x2c8815a4b312e5f3!2sViluppuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756999352980!5m2!1sen!2sin" className='lg:w-full w-[380px] h-70' />
            </div>
            <div className='max-w-[1400px] h-full mx-auto flex justify-start '>
                <div>
                    <p className='josefin-sans lg:text-[25px] text-2xl lg:py-5 px-3'>Get in Touch</p>
                    <div className='flex lg:flex-row flex-col lg:gap-20'>
                        <form className='pb-5 flex flex-col lg:w-[900px] mx-3' onSubmit={handleSubmit}>
                            <div>
                                <div className='flex w-full'>
                                    <div className='mr-4 mb-2 w-full'>
                                        <input type="text" className=' border-gray-200 border-1 focus:outline-0  w-full p-3 ' required placeholder='Enter Your Name' onChange={handleChange} value={formData.name} id='name' />
                                    </div>
                                    <div className='w-full'>
                                        <input type="text" className=' border-gray-200 border-1 focus:outline-0  w-full p-3' placeholder='Enter Gmail Address' onChange={handleChange} value={formData.email} id='email' />
                                    </div>
                                </div>
                                <input type="text" className=' border-gray-200 border-1 focus:outline-0 p-3 w-full mb-2' placeholder='Enter Subject' onChange={handleChange} value={formData.subject} id='subject' />
                                <textarea className='border-gray-200 border-1 focus:outline-0 pb-30 w-full p-3' placeholder='Enter Message' onChange={handleChange} value={formData.message} id='message'></textarea>
                            </div>
                            <button type='submit' className='josefin-medium border-1 px-10 py-5 text-[14px] hover:bg-[#ff5600] hover:text-white cursor-pointer duration-300 text-[#ff5600]'>SEND</button>
                        </form>
                        <div className='my-3'>
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
