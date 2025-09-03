import React from 'react'

export default function About() {
  return (
    <div className=''>
     <div>
                <div className="bg-[url('/assets/images/section.png')] h-100 w-full bg-no-repeat bg-center flex justify-center">
                    <div className='mt-20'>
                        <p className='text-[#ff5600] text-center lg:text-[30px] text-[20px]'>Our Offerd Menu</p>
                        <p className='lg:text-[45px] text-[25px] josefin-medium text-center'>Some trendy and popular <br /> courses offerd</p>
                        <div className='flex justify-center mt-5'>
                            <div className='poppins-medium lg:text-[20px] text-[15px] flex lg:gap-20 gap-5 items-center lg:flex-row flex-'>
                                <p className='bg-[#ff5600] px-4 py-2 text-white'>special</p>
                                <p className=''>lunch</p>
                                <p className=''>breakfirst</p>
                                <p className=''>dinner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
