import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="bg-[url('/assets/images/h1.png')] h-screen w-full bg-no-repeat bg-center">
                <div className='flex justify-center h-full flex-col items-start max-w-[1400px] mx-auto px-3'>
                    <div className='space-y-6'>
                        <p className='text-[#ff5600] poppins-medium'>Discover your taste</p>
                        <p className='lg:text-[90px] md:text-[70px] text-[35px] josefin-sans tracking-tight'>We belive good food <br />offer great smile</p>
                        <p className='poppins-medium lg:text-lg md:text-base text-base text-gray-500 '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
                            aliquip ex ea commodo consequat is aute irure.</p>
                        <p className='poppins-medium bg-[#ff5600] rounded border-1 w-fit p-5 text-white'>Resurvation</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center h-full flex-col items-center px-3'>
                    <div className='grid  lg:grid-cols-2 gap-8 place-items-center'>
                        <div className='space-y-4 mr-4'>
                            <p className='text-[#ff5600]'>Discover your text</p>
                            <p className='text-[40px] josefin-sans tracking-tight'>We provide good food <br /> for your family!</p>
                            <p className='josefin-sans text-[20px]'>Ut enim acgsd minim veniam, quxcis nostrud exercitation <br />
                                ullamco laboris nisi ufsit aliquip ex ea commodo consequat is <br />
                                aute irure m, quis nostrud exer.</p>
                            <div className='flex md:flex-row flex-col gap-6'>
                                <div className='flex items-center gap-5'>
                                    <img src="/assets/images/cooking.png" alt="cook" className='w-10 h-10' />
                                    <p className='poppins-medium'>Ut enim ad minim veniam,<br /> quis nostrud exer.</p>
                                </div>

                                <div className='flex items-center gap-5'>
                                    <img src="/assets/images/dish.png" alt="cook" className='w-10 h-10' />
                                    <p className='poppins-medium' >Ut enim ad minim veniam,<br />quis nostrud exer.</p>
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col gap-6'>
                                <div className='flex items-center gap-5'>
                                    <img src="/assets/images/chef-hat.png" alt="cook" className='w-10 h-10' />
                                    <p className='poppins-medium'>Ut enim ad minim veniam, <br />quis nostrud exer.</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <img src="/assets/images/cooking.png" alt="cook" className='w-10 h-10' />
                                    <p className='poppins-medium'>Ut enim ad minim veniam,<br /> quis nostrud exer.</p>
                                </div>

                            </div>
                        </div>
                        <div className='py-20'><img src="/assets/images/about.png" alt="about" /></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-[url('/assets/images/section.png')] h-100 w-full bg-no-repeat bg-center flex justify-center">
                    <div className='mt-20'>
                        <p className='text-[#ff5600] text-center text-[30px] '>Our Offerd Menu</p>
                        <p className='lg:text-[45px] text-[30px] josefin-medium text-center'>Some trendy and popular <br /> courses offerd</p>
                        <div className='flex justify-center mt-5'>
                            <div className='poppins-medium lg:text-[20px] text-[15px] flex gap-20 items-center'>
                                <p className='bg-[#ff5600] px-4 py-2 text-white'>special</p>
                                <p className=''>lunch</p>
                                <p className=''>breakfirst</p>
                                <p className=''>dinner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-5 grid-cols-1'>

                <div className='bg-[url("/assets/images/gallery2.png")] bg-no-repeat bg-cover bg-center w-[full] h-[720px] col-span-2'></div>
                <div className="bg-[url('/assets/images/gallery21.png')] bg-no-repeat bg-cover bg-center w-full h-[720px] col-span-2"></div>

                <div className='col-span-1'>
                    <div className='bg-[url("/assets/images/gallery3.png")] bg-no-repeat bg-cover bg-center w-full h-[360px] '></div>
                    <div className='bg-[url("/assets/images/gallery4.png")] bg-no-repeat bg-cover bg-center w-full h-[360px] '></div>
                </div>
            </div>
            <div className='lg:flex md:flex my-40 justify-center'>
                <div className='mx-2 lg:px-3'>
                    <img src="/assets/images/about2.png" alt="cook" className='w-[570px] h-[630px]' />
                </div>
                <div className='mx-2 lg:px-10 px-5'>
                    <p className='text-[#ff5600] poppins-medium mt-[22px]  '>About Our Restaurant</p>
                    <p className='lg:text-[49px] md:text-[35px] text-[25px] josefin-sans mb-[14px]'>We Provide Good Food <br /> For Your Family!</p>
                    <p className='mb-[25px] text-[18px]'>Ut enim acgsd minim veniam, quxcis nostrud exercitation <br />
                        ullamco laboris nisi ufsit aliquip ex ea commodo consequat is <br />
                        aute irure m, quis nostrud exer </p>
                    <p className='mb-[65px] text-[18px]'>There are many variations of passages of Lorem Ipsum available,<br />
                        but the majority have suffered alteration in some form, by <br />
                        injected our, or randomised words which don't look even slightly <br />
                        believab If you are going to use a passage.</p>
                    <button className='bg-white text-gray-800 border-2 border-[#ff5600] p-4 rounded text-[20px]'>Learn more</button>
                </div>
            </div>
            <div className='bg-[url("/assets/images/section2.png")] bg-no-repeat w-full h-[500px] bg-center'>
                <div className='flex justify-center py-20'>
                    <div>
                        <p className='text-[#ff5600] text-[20px] mb-10 text-center'>About Our Restaurant</ p>
                        <p className='text-[49px] josefin-sans mb-[14px] text-center'>Book A Table</p>
                        <div>
                            <div className='bg-[#ffffff] p-10 rounded'>
                                <div className='flex gap-10 text-gray-500 '>
                                    <p className='bg-gray-200 px-20 py-5 rounded  cursor-pointer'>Person</p>
                                    <p className='bg-gray-200 px-20 py-5 rounded cursor-pointer'>Date</p>
                                    <p className='bg-gray-200 px-20 py-5 rounded cursor-pointer'>Time</p>
                                    <p className='bg-[#ff5600] text-white font-medium px-20 py-5 rounded cursor-pointer'>Book Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-40'>
                <p className='text-[#ff5600] mb-4 text-[16px] poppins-medium '>Services We Offer</p>
                <p className='text-[49px] josefin-sans mb-[14px] '>Our Best Services</p>
            </div>
            <div className='grid grid-cols-3 max-w-[1400px] mx-auto mb-25 gap-10'>
                <div className='flex flex-col justify-center items-center space-y-3 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] duration-300 py-20'>
                    <img src="/assets/images/cooking.png" alt="cook" className='w-30 h-30' />
                    <p className='josefin-sans text-[25px]'>Best Chef</p>
                    <p className='poppins-medium text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipisicing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore.</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3 shadow-[0_0_10px_rgba(0,0,0,0.15)] py-20'>
                    <img src="/assets/images/dish.png" alt="cook" className='w-30 h-30' />
                    <p className='josefin-sans text-[25px]'>Quality Food</p>
                    <p className='poppins-medium text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipisicing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore.</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] duration-300 py-20'>
                    <img src="/assets/images/cooking.png" alt="cook" className='w-30 h-30' />
                    <p className='josefin-sans text-[25px]'>Perfect Cook</p>
                    <p className='poppins-medium text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br />
                        adipisicing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore.</p>
                </div>
            </div>
            <div className='bg-[url("assets/images/section4.png")] w-full h-[700px] '>
                <div className='max-w-[1000px] mx-auto py-50'>
                    <div className='flex justify-end flex-col items-end'>
                        <div className="">
                            <p className='poppins-medium text-[#ff5600] py-5'>About Our Restaurant</p>
                            <p className='text-[45px] josefin-sans mb-[14px] '>We Provide Good Food <br />For Your Family!</p>
                            <p className='poppins-medium text-[16px]  text-gray-700 pb-5'>Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco <br />
                                laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis <br />
                                nostrud exer.</p>
                            <div className='mb-2 flex'>
                                <input type="text" placeholder='Your Email' className='bg-[#ffffff] px-5 py-[16px]  w-[400px] focus:outline-none text-[20px]' />
                                <button className='bg-[#ff5600] py-[16px] text-[20px] josefin-sans px-5 text-white '>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-25 text-center'>
                <p className='poppins-medium text-[#ff5600] py-5'>Our New Blog News</p>
                <p className='text-[45px] josefin-sans mb-[50px]'>Our Recent News</p>
                <div className='flex flex-row-3 gap-8 justify-center'>
                    <div className='relative'>
                        <img src="/assets/images/blog1.png" alt="cook" className='rounderd ' />
                        <div className='bg-gray-100 rounded p-8 absolute -bottom-7 right-0 text-black hover:bg-[#ff5600] hover:text-white duration-300 cursor-pointer'>
                            <p className='poppins-medium text-gray-500'>23 Dec,2020</p>
                            <p className='josefin-sans text-[20px]'>Addiction When Food Plate <br /> Becomes</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/assets/images/blog2.png" alt="cook" className='rounderd ' />
                        <div className='bg-gray-100 rounded p-8 absolute -bottom-8 right-0 text-black hover:bg-[#ff5600] hover:text-white duration-300 cursor-pointer'>
                            <p className='poppins-medium text-gray-500'>23 Dec,2020</p>
                            <p className='josefin-sans text-[20px]'>Addiction When Food Plate <br /> Becomes</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/assets/images/blog3.png" alt="cook" className='rounderd ' />
                        <div className='bg-gray-100 rounded p-8 absolute -bottom-8 right-0 text-black hover:bg-[#ff5600] hover:text-white duration-300 cursor-pointer'>
                            <p className='poppins-medium text-gray-500' >23 Dec,2020</p>
                            <p className='josefin-sans text-[20px]'>Addiction When Food Plate <br /> Becomes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}