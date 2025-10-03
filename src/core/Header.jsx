// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Header() {
//     return (
//         <div>
//             <div className='fixed top-0 py-5 px-5 bg-white w-full z-20'>
//                 <div className='flex justify-between max-w-[1700px] mx-auto items-center '>
//                     <img src="/assets/images/logo.webp" alt="logo" className='w-25' />
//                     <div>
//                         <img src="/assets/images/menu.png" alt="menu" className='lg:hidden block w-10' />
//                     </div>
//                     <div className='lg:block hidden'>
//                         <div className='text-[17px] josefin-sans flex items-center gap-10 '>
//                             <Link to='/' className='hover:text-[#ff5600] cursor-pointer'>Home</Link>
//                             <Link to='/about' className='hover:text-[#ff5600] cursor-pointer'>About</Link>                      
//                             <Link to='/contack' className='hover:text-[#ff5600] cursor-pointer'>Contact</Link>
//                             <button className='border-1 border-[#ff5600] rounded-lg p-3 cursor-pointer text-gray-400 text-[17px]'>Order Online</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='sticky top-0 py-5 px-5 bg-white w-full z-20 shadow-2xl'>
            <div className="flex justify-between max-w-[1700px] mx-auto items-center">
                <img src="/assets/images/logo.webp" alt="logo" className="w-25" />
                <button
                    className='lg:hidden block w-10'
                    onClick={() => setIsOpen(!isOpen)}>
                    <img src="/assets/images/menu.png" alt="menu" />
                </button>
                <div className='hidden lg:block'>
                    <nav className=" lg:flex text-[17px] josefin-sans items-center gap-10">
                        <Link to="/" className="hover:text-[#ff5600] cursor-pointer">
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-[#ff5600] cursor-pointer">
                            About
                        </Link>
                        <Link to="/contack" className="hover:text-[#ff5600] cursor-pointer">
                            Contact
                        </Link>
                        <Link to="/Order_Online" className="border-1 border-[#ff5600] rounded-2xl px-4 py-2 text-[17px] hover:bg-white hover:text-[#ff5600] cursor-pointer duration-300">
                            Order Online
                        </Link>
                        {/* <Link to="/RestaurantWebsite" className="border border-[#ff5600] rounded-lg p-3 cursor-pointer text-gray-400 text-[17px] hover:text-[#ff5600]">
                            RestaurantWebsite
                        </Link> */}
                    
                    </nav>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden block bg-white shadow-md absolute top-[100px] left-0 w-full z-10">
                    <nav className="flex flex-col items-start gap-5 p-5 text-[17px] josefin-sans">
                        <Link to="/" className="hover:text-[#ff5600]" onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-[#ff5600]" onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link to="/contack" className="hover:text-[#ff5600]" onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link to="/Order_Online" className="border-1 border-[#ff5600] rounded-lg px-4 py-2 text-[17px] hover:bg-white hover:text-[#ff5600] cursor-pointer duration-300 " onClick={() => setIsOpen(false)}>
                            Order Online
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
