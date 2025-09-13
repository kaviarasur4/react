import React, { useEffect, useState } from "react";
import Loading from "./Loading";

export default function About() {
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
      <div className="bg-[url('/assets/images/hero2.png')] h-130 w-full bg-no-repeat">
        <div className="max-width-[1300px] flex items-center justify-start h-full lg:ml-50 ml-10">
          <h2 className="text-[50px] josefin-sans">About US</h2>
        </div>
      </div>
      <div>
        <div className="flex justify-center h-full flex-col items-center px-3 lg:py-8 py-4">
          <div className="grid  lg:grid-cols-2 gap-8 place-items-center">
            <div className="space-y-4 mr-4">
              <p className="text-[#ff5600]">Explore The Delicious</p>
              <p className="text-[40px] josefin-sans tracking-tight">
                Where Every Meal Feels Special
              </p>
              <p className="josefin-sans text-[20px]">
                Every dish is crafted with care to bring joy and flavor to your <br />table.
                We create moments that turn simple dining into a special <br />experience for you and your family.
              </p>
              <div className="flex md:flex-row flex-col gap-6 lg:mt-10 mt-5">
                <div className="flex items-center gap-5">
                  <img
                    src="/assets/images/cooking.png"
                    alt="cook"
                    className="w-10 h-10"
                  />
                  <p className="poppins-medium">
                    Every dish is prepare a with <br /> care and passion.
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <img
                    src="/assets/images/dish.png"
                    alt="cook"
                    className="w-10 h-10"
                  />
                  <p className="poppins-medium">
                    Fresh ingredients bring out <br />rich and authentic flavors.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-6">
                <div className="flex items-center gap-5">
                  <img
                    src="/assets/images/chef-hat.png"
                    alt="cook"
                    className="w-10 h-10"
                  />
                  <p className="poppins-medium">
                    Our warm ambiance Table  <br />truly memorable.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <img
                    src="/assets/images/cooking.png"
                    alt="cook"
                    className="w-10 h-10"
                  />
                  <p className="poppins-medium">
                    Experience food that turns <br />every meal into a celebration.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:py-20">
              <img src="/assets/images/about.png" alt="about" />
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div className="grid  lg:my-40 lg:grid-cols-2 max-w-[80rem] mx-auto">
        <div className="mx-2 lg:px-3">
          <img
            src="/assets/images/about2.png"
            alt="cook"
            className="w-[570px] h-[630px]"
          />
        </div>
        <div className="mx-2 lg:px-10 px-5">
          <p className="text-[#ff5600] poppins-medium mt-[22px] mb-10">
            A Place to Taste Together
          </p>
          <p className="lg:text-[49px] md:text-[35px] text-[25px] josefin-sans mb-[14px]">
            Delicious Food for Your Family!
          </p>
          <p className="mb-[25px] lg:text-[18px] poppins-light">
            We prepare every dish with care, using fresh and high-quality ingredients to bring out authentic flavors your family will love.
            Our chefs blend passion and creativity to serve meals that feel both comforting and exciting.
          </p>
          <p className="mb-[35px] lg:text-[18px] poppins-light">
            With a warm and welcoming atmosphere, we make every dining experience special.
            Enjoy moments of joy, laughter, and togetherness over food made with love.
          </p>
          <button className='bg-white text-gray-500 hover:bg-[#ff5600] hover:text-white border-1 border-[#ff5600] p-4 rounded text-[15px] cursor-pointer'>Learn More</button>
        </div>
      </div>
      <div className='bg-[url("/assets/images/section2.png")] bg-no-repeat w-full py-30  bg-center'>
        <div className="lg:flex md:flex justify-center  ">
          <div>
            <p className="text-[#ff5600] lg:text-[20px] text-[20px] mb-10 text-center">
             Made with Love for Every Family
            </p>
            <p className="lg:text-[49px] md:text-[40px] text-[30px] josefin-sans mb-[14px] text-center">
              Book A Table
            </p>
            <div>
              <div className="bg-[#ffffff] p-15 rounded">
                <form className="flex flex-col gap-10 md:flex-row text-gray-500 ">
                  <input
                    className="bg-gray-200 lg:px-20 px-20 lg:py-5 py-5 rounded  cursor-pointer text-[20px]"
                    type="text"
                    placeholder="name"
                  />
                  <input
                    className="bg-gray-200 px-20 py-5 rounded cursor-pointer text-[20px]"
                    type="text"
                    placeholder="date"
                  />
                  <input
                    className="bg-gray-200 px-20 py-5 rounded cursor-pointer text-[20px]"
                    type="tel"
                    placeholder="time"
                  />
                  <button className="bg-[#ff5600] text-white font-medium px-20 py-5 rounded cursor-pointer text-[20px]">
                    Summit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center lg:my-30  my-10">
        <p className="text-[#ff5600] mb-4 text-[16px] poppins-medium ">
          The Way We Serve You
        </p>
        <p className="text-[49px] josefin-sans mb-[14px] ">Dedicated to Serving You</p>
      </div>
      <div className="grid lg:grid-cols-3 max-w-[1400px] mx-auto lg:mb-25 lg:gap-10 gap-5">
        <div className="flex flex-col justify-center items-center lg:space-y-2 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] duration-300 py-20">
          <img
            src="/assets/images/cooking.png"
            alt="cook"
            className="w-30 h-30"
          />
          <p className="josefin-sans text-[25px]">Best Chef</p>
          <p className="poppins-medium text-gray-500 lg:text-[18px] text-center ">
            Our expert chefs craft every dish with <br />passion and touch of culinary artistry.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 shadow-[0_0_10px_rgba(0,0,0,0.15)] py-20">
          <img src="/assets/images/dish.png" alt="cook" className="w-30 h-30" />
          <p className="josefin-sans text-[25px]">Quality Food</p>
          <p className="poppins-medium text-gray-500 lg:text-[18px] text-center">
            We serve only the highest quality food, <br />prepared with fresh ingredients.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] duration-300 py-20">
          <img
            src="/assets/images/cooking.png"
            alt="cook"
            className="w-30 h-30"
          />
          <p className="josefin-sans text-[25px]">Perfect Cook</p>
          <p className="poppins-medium text-gray-500 lg:text-[18px] text-center">
           Our perfect cook turns the finest ingredients unforgettable flavors with every dish.
          </p>
        </div>
      </div>
      <div className='bg-[url("assets/images/section4.png")] w-full h-[700px] '>
        <div className="lg:max-w-[1000px] max-w-[500px] mx-auto lg:py-50 py-30 lg:ml-200 ml-3 mr-3">
          <div className="flex justify-end flex-col lg:items-center text-start">
            <div className="">
              <p className="poppins-medium text-[#ff5600] lg:mx-2 lg:text-start mb-3">
               What Makes Us Special
              </p>
              <p className="lg:text-[45px] text-[25px] lg:mx-2 josefin-sans mb-[14px] ">
               Flavors Your Family Will Cherish
              </p>
              <p className="poppins-medium text-[16px]  text-gray-700 pb-5 lg:mx-2 ">
                We create an inviting atmosphere where families can gather, laugh,
                and celebrate over delicious meals. <br />Whether it’s a simple dinner or a special occasion,
                we make every moment memorable.
              </p>
              <div className="lg:mb-2 lg:mx-2 flex md:flex-row flex-col">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-[#ffffff] lg:px-5 px-7 py-[20px] md:w-[400px] focus:outline-none text-[20px] lg:mb-0  mb-2"
                />
                <button className="bg-[#ff5600] lg:py-[17px] py-[20px] text-[20px] josefin-sans lg:px-5 px-7  text-white ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-25 text-center">
        <p className="poppins-medium text-[#ff5600] lg:py-5 py-1">
         Fresh News & Insights
        </p>
        <p className="lg:text-[45px] text-[25px] josefin-sans mb-[50px]">
          Latest Happenings
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-8 justify-center lg:px-8 px-2">
          <div className="relative lg:mb-30 mb-15">
            <img
              src="/assets/images/blog1.png"
              alt="cook"
              className="rounderd w-full"
            />
            <div className="bg-gray-100 rounded lg:p-10 p-15 lg:ml-5  absolute -bottom-8 right-0 text-black hover:bg-[#ff5600]  duration-300 cursor-pointer group">
              <p className="poppins-medium group-hover:text-white group-hover:">23 Dec,2020</p>
              <p className="josefin-sans lg:text-[18px] text-[18px] group-hover:text-white">
               Plates That Spark Cravings
              </p>
            </div>
          </div>
          <div className="relative  lg:mb-30 mb-15">
            <img
              src="/assets/images/blog2.png"
              alt="cook"
              className="rounderd w-full"
            />
            <div className="bg-gray-100 rounded lg:p-10 p-15 lg:ml-5  absolute -bottom-8 right-0 text-black hover:bg-[#ff5600]  duration-300 cursor-pointer group">
              <p className="poppins-medium group-hover:text-white group-hover:">26 mar,2024</p>
              <p className="josefin-sans lg:text-[18px] text-[18px] group-hover:text-white">
                Cravings Served on a Plate
              </p>
            </div>
          </div>
          <div className="relative  lg:mb-30 mb-15">
            <img
              src="/assets/images/blog3.png"
              alt="cook"
              className="rounderd w-full"
            />
            <div className="bg-gray-100 rounded lg:p-10 p-15 lg:ml-5  absolute -bottom-8 right-0 text-black hover:bg-[#ff5600]  duration-300 cursor-pointer group">
              <p className="poppins-medium group-hover:text-white group-hover:">31 Dec,2026</p>
              <p className="josefin-sans lg:text-[18px] text-[18px] group-hover:text-white">
               Where Every Bite Hooks You
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
