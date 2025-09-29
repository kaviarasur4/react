import React, { useEffect, useState } from 'react'
import Loading from './Loading';

export default function Home() {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }


    return (
        <div>
            <div className="bg-[url('/assets/images/h1.png')] h-screen w-full bg-no-repeat bg-center">
                <div className='flex justify-center h-full flex-col items-start max-w-[1400px] mx-auto px-3'>
                    <div className='space-y-6'>
                        <p className='text-[#ff5600] poppins-medium'>Discover your taste</p>
                        <p className='lg:text-[100px] md:text-[70px] text-[35px] josefin-sans-bold tracking-tight'>We belive good food <br />offer great smile</p>
                        <p className='poppins-regular lg:text-lg md:text-base leading-relaxed'>Immerse yourself in an elegant and contemporary setting where each dish is thoughtfully <br />
                            crafted and every detail is designed to create a refined and memorable dining experience.</p>
                        <button className='poppins-medium bg-[#ff5600] rounded border-1 w-fit p-5 text-white hover:bg-white hover:text-[#ff5600] cursor-pointer duration-300'>Resurvation</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center h-full flex-col items-center px-3 lg:py-8 py-4'>
                    <div className='grid  lg:grid-cols-2 gap-8 place-items-center'>
                        <div className='space-y-4 mr-4'>
                            <p className='text-[#ff5600]'>A Journey of Taste</p>
                            <p className='text-[40px] josefin-sans tracking-tight'>Bringing Families Together with Taste</p>
                            <p className='josefin-sans text-[20px]'>We serve wholesome and delicious meals crafted <br /> with care to bring families together in a warm <br />
                                and welcoming atmosphere where every bite <br /> feels like home.</p>
                            <div className='flex md:flex-row flex-col gap-6'>
                                <div className='flex items-center gap-5'>
                                    <img src="/assets/images/cooking.png" alt="cook" className='w-10 h-10' />
                                    <p className='poppins-medium'>Chefs craft the each <br />dish with care.</p>
                                </div>

                                <div className='flex items-center gap-5'>
                                    <img src="/assets/images/dish.png" alt="cook" className='w-10 h-10' />
                                    <p className='poppins-medium' >Every plate delights <br /> the eyes beautifully.</p>
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col gap-6'>
                                <div className='flex items-center gap-5'>
                                    <img src="/assets/images/chef-hat.png" alt="cook" className='w-10 h-10' />
                                    <p className='poppins-medium'>Flavors warm hearts <br />& bring families.</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <img src="/assets/images/cooking.png" alt="cook" className='w-10 h-10' />
                                    <p className='poppins-medium'>Guests enjoy a memorable <br /> dining experience.</p>
                                </div>

                            </div>
                        </div>
                        <div className='lg:py-20'><img src="/assets/images/about.png" alt="about" /></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-[url('/assets/images/section.png')] lg:h-100 h-60 w-full bg-no-repeat bg-center flex justify-center">
                    <div className='lg:mt-20 mt-10'>
                        <p className='text-[#ff5600] text-center lg:text-[25px] text-[15px] lg:mb-5'>Our Offerd Menu</p>
                        <p className='lg:text-[45px] text-[25px] josefin-medium text-center'>Some Trendy And Popular <br /> Courses Offerd</p>
                        <div className='flex justify-center mt-5'>
                            <div className='poppins-medium lg:text-[20px] text-[15px] flex lg:gap-20 gap-5 items-center lg:flex-row flex-'>
                                <p className='bg-[#ff5600] px-4 py-2 text-white'>Special</p>
                                <p className=''>Breakfast</p>
                                <p className=''>Lunch</p>
                                <p className=''>Dinner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-5 grid-cols-1 '>
                <div className='bg-[url("/assets/images/gallery2.png")] bg-no-repeat bg-cover bg-center w-[full] h-[720px] col-span-2'>
                    <div className='flex justify-center items-center flex-col h-full group hover:bg-black/50 duration-300 '>
                        <div className='group-hover:opacity-100 opacity-0 duration-300 group-hover:-translate-y-12'>
                            <p className='text-[#ff5600] lg:text-[30px] text-[15px] '>$ 100</p>
                            <p className='text-white poppins-medium lg:text-[50px] text-[20px]'>Royal Feast</p>
                            <p className='text-white josfin-medium mb-10'>Opulent banquet with brexquisite <br /> dishes and delicacies.</p>
                            <button className='p-3 bg-[#ff5600] text-white hover:text-gray-400 cursor-pointer duration-300 rounded'>Order now</button>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('/assets/images/gallery21.png')] bg-no-repeat bg-cover bg-center w-full h-[720px] col-span-2">
                    <div className='flex justify-center items-center flex-col h-full group hover:bg-black/50 duration-300'>
                        <div className='group-hover:opacity-100 opacity-0 duration-300 group-hover:-translate-y-12'>
                            <p className='text-[#ff5600] lg:text-[30px] text-[15px]'>$ 75</p>
                            <p className='text-white poppins-medium lg:text-[50px] text-[20px]'>Roasted beetroot</p>
                            <p className='text-white josfin-medium mb-10'>Enjoy a tasty and delicious meal.</p>
                            <button className='p-3 bg-[#ff5600] text-white hover:text-gray-400 cursor-pointer duration-300 rounded'>Order now</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='bg-[url("/assets/images/gallery3.png")] bg-no-repeat bg-cover bg-center w-full h-[360px] '>
                        <div className='flex justify-center items-center flex-col h-full group hover:bg-black/50 duration-300'>
                            <div className='group-hover:opacity-100 opacity-0 duration-300 -translate-y-12'>
                                <p className='text-[#ff5600] lg:text-[30px] text-[15px]'>$ 50</p>
                                <p className='text-white poppins-medium lg:text-[30px] text-[20px]'>Fish and Avocado</p>
                                <p className='text-white josfin-medium mb-10'>Creamy dressing and fresh herbs.</p>
                                <button className='p-3 bg-[#ff5600] text-white hover:text-gray-400 cursor-pointer duration-300 rounded'>Order now</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[url("/assets/images/gallery4.png")] bg-no-repeat bg-cover bg-center w-full h-[360px] '>
                        <div className='flex justify-center items-center flex-col h-full group hover:bg-black/50 duration-300 lg:p-5 p-3'>
                            <div className='group-hover:opacity-100 opacity-0 duration-300 -translate-y-12'>
                                <p className='text-[#ff5600] lg:text-[30px] text-[15px]'>$ 25</p>
                                <p className='text-white poppins-medium lg:text-[30px] text-[20px]'>Roasted Red Pepper</p>
                                <p className='text-white josfin-medium mb-10'>spinach and sliced tomatoes. </p>
                                <button className='p-3 bg-[#ff5600] text-white hover:text-gray-400 cursor-pointer duration-300 rounded'>Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid  lg:my-40 my-10 lg:grid-cols-2 max-w-[80rem] mx-auto'>
                <div className='mx-2 lg:px-3'>
                    <img src="/assets/images/about2.png" alt="cook" className='w-[570px] h-[630px]' />
                </div>
                <div className='mx-2 lg:px-10 px-5'>
                    <p className='text-[#ff5600] poppins-medium mt-[22px] mb-10'>About Our Restaurant</p>
                    <p className='lg:text-[49px] md:text-[35px] text-[25px] josefin-sans mb-[14px]'>Delicious Moments For Your Family!</p>
                    <p className='mb-[25px] text-[18px] poppins-light'>We provide good food for your family, crafted with fresh and high-quality ingredients.
                        Every dish is prepared with care, combining flavors that delight every palate</p>
                    <p className='mb-[35px] text-[18px] poppins-light'>The warm and inviting atmosphere makes every visit special.
                        Come and experience food made with love, perfect for sharing with those you cherish.</p>
                    <button className='bg-white text-gray-500 hover:bg-[#ff5600] hover:text-white border-1 border-[#ff5600] p-4 rounded text-[15px] cursor-pointer'>Learn More</button>
                </div>
            </div>
            <div className='bg-[url("/assets/images/section2.png")] bg-no-repeat w-full py-30  bg-center'>
                <div className='lg:flex md:flex justify-center  '>
                    <div>
                        <p className='text-[#ff5600] lg:text-[20px] text-[20px] mb-10 text-center'>About Our Restaurant</ p>
                        <p className='lg:text-[49px] md:text-[40px] text-[30px] josefin-sans mb-[14px] text-center'>Book A Table</p>
                        <div>
                            <div className='bg-[#ffffff] lg:p-15 p-4 rounded'>
                                <form className='flex flex-col gap-10 md:flex-row poppins-regular'>
                                    <div className='flex items-center bg-gray-100 px-4 gap-3'>
                                        <img src="assets/images/user.png" alt="user" className='h-4 w-4 ' />
                                        <select className=' rounded w-full outline-none px-4 py-5  text-[15px] poppins-regular text-gray-500' type="text"  >
                                            <option value="" className='poppins-regular  text-[15px] bg-[F6F6F6] hover:bg-gray-100 w-full'>Person</option>
                                            <option value="" className='poppins-regular  text-[15px] bg-gray-100 hover:bg-gray-100 w-full'>Person 2</option>
                                            <option value="" className='poppins-regular  text-[15px] bg-gray-100 hover:bg-gray-100 w-full'>Person 3</option>
                                            <option value="" className='poppins-regular  text-[15px] bg-gray-100 hover:bg-gray-100 w-full'>Person 4</option>
                                        </select>
                                    </div>
                                    <div className='flex items-center bg-gray-100 px-4  gap-3'>
                                        <img src="assets/images/date.png" alt="date" className='h-4 w-4' />
                                        <input className='bg-gray-100 px-4 py-5 rounded outline-none  text-[15px] ' type="text" placeholder='Date' />
                                    </div>
                                    <div className='flex items-center bg-gray-100 px-4  gap-3'>
                                        <img src="assets/images/time.png" alt="time" className='h-4 w-4' />
                                        <input className='bg-gray-100 px-4 py-5 rounded outline-none  text-[15px]' type="tel" placeholder='Time' />
                                    </div>
                                    <button className='bg-[#ff5600] text-white font-medium px-20 py-5 rounded cursor-pointer text-[15px] '>Book Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center lg:my-40'>
                <p className='text-[#ff5600] mb-4 text-[16px] poppins-medium '>Services We Offer</p>
                <p className='text-[49px] josefin-sans mb-[14px] '>Our Best Services</p>
            </div>
            <div className='grid lg:grid-cols-3 max-w-[1400px] mx-auto lg:mb-25 lg:gap-10 gap-5'>
                <div className='flex flex-col justify-center items-center lg:space-y-2 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] duration-300 py-20'>
                    <img src="/assets/images/cooking.png" alt="cook" className='w-30 h-30' />
                    <p className='josefin-sans text-[25px]'>Best Chef</p>
                    <p className='poppins-medium text-gray-500 lg:text-[18px] text-center '>Our expert chefs craft every dish with <br />passion and a touch of culinary artistry.</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 shadow-[0_0_10px_rgba(0,0,0,0.15)] py-20'>
                    <img src="/assets/images/dish.png" alt="cook" className='w-30 h-30' />
                    <p className='josefin-sans text-[25px]'>Quality Food</p>
                    <p className='poppins-medium text-gray-500 lg:text-[18px] text-center'>We serve only the highest quality food, <br />prepared with fresh ingredients.</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] duration-300 py-20'>
                    <img src="/assets/images/cooking.png" alt="cook" className='w-30 h-30' />
                    <p className='josefin-sans text-[25px]'>Perfect Cook</p>
                    <p className='poppins-medium text-gray-500 lg:text-[18px] text-center'>Our perfect cook turns the finest ingredients unforgettable flavors with every dish.</p>
                </div>
            </div>
            <div className='bg-[url("assets/images/section4.png")] w-full h-[600px] '>
                <div className='lg:max-w-[1000px] max-w-[500px] mx-auto lg:py-50 py-30 lg:ml-200 ml-3 mr-3'>
                    <div className='flex justify-end flex-col lg:items-center text-start'>
                        <div className="">
                            <p className='poppins-medium text-[#ff5600] lg:mx-2 lg:text-start mb-3'>The Heart of Our Kitchen</p>
                            <p className='lg:text-[45px] text-[25px] lg:mx-2 josefin-sans mb-[14px] '>Flavors Your Family Will Love</p>
                            <p className='poppins-medium text-[16px]  text-gray-700 pb-5 lg:mx-2 '>At the heart of our kitchen, every dish is crafted with passion and fresh ingredients. 
                                <br />Our chefs blend skill and creativity to bring unforgettable flavors to your table..</p>
                            <div className='lg:mb-2 lg:mx-2 flex md:flex-row flex-col'>
                                <input type="text" placeholder='Your Email' className='bg-[#ffffff] lg:px-5 px-7 py-[20px] md:w-[400px] focus:outline-none text-[20px] lg:mb-0  mb-2' />
                                <button className='bg-[#ff5600] lg:py-[17px] py-[20px] text-[20px] josefin-sans lg:px-5 px-7  text-white cursor-pointer '>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-25 text-center'>
                <p className='poppins-medium text-[#ff5600] lg:py-5 py-1'>Our New Blog News</p>
                <p className='lg:text-[45px] text-[25px] josefin-sans mb-[50px]'>Our Recent News</p>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center lg:px-8 px-2'>
                    <div className='relative lg:mb-30 mb-15'>
                        <img src="/assets/images/blog1.png" alt="cook" className='rounderd w-full' />
                        <div className="bg-gray-100 rounded lg:p-8 p-10 lg:ml-5  absolute -bottom-8 right-0 text-black hover:bg-[#ff5600]  duration-300 cursor-pointer group">
                            <p className="poppins-medium group-hover:text-white group-hover:">23 Dec,2020</p>
                            <p className="josefin-sans lg:text-[20px] text-[18px] group-hover:text-white">
                                Irresistible Flavors on Your Plate
                            </p>
                        </div>
                    </div>
                    <div className='relative  lg:mb-30 mb-15'>
                        <img src="/assets/images/blog2.png" alt="cook" className='rounderd w-full' />
                        <div className="bg-gray-100 rounded lg:p-8 p-10 lg:ml-5  absolute -bottom-8 right-0 text-black hover:bg-[#ff5600]  duration-300 cursor-pointer group">
                            <p className="poppins-medium group-hover:text-white group-hover:">02 May,2022</p>
                            <p className="josefin-sans lg:text-[20px] text-[18px] group-hover:text-white">
                                Bites That Keep You Coming Back
                            </p>
                        </div>
                    </div>
                    <div className='relative  lg:mb-30 mb-15'>
                        <img src="/assets/images/blog3.png" alt="cook" className='rounderd w-full' />
                        <div className="bg-gray-100 rounded lg:p-8 p-10 lg:ml-5  absolute -bottom-8 right-0 text-black hover:bg-[#ff5600]  duration-300 cursor-pointer group">
                            <p className="poppins-medium group-hover:text-white group-hover:">06 Sept,2024</p>
                            <p className="josefin-sans lg:text-[20px] text-[18px] group-hover:text-white">
                               When Hunger Meets Happiness
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}