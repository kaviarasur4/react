import React from "react";

export default function About() {
  return (
    <div>
      <div className="bg-[url('/assets/images/hero2.png')] h-130 w-full bg-no-repeat">
        <div className="max-width-[1300px] flex items-center justify-start h-full ml-12">
          <h2 className="text-[50px] josefin-sans">About US</h2>
        </div>
      </div>
      <div>
        <div className="flex justify-center h-full flex-col items-center px-3 lg:py-8 py-4">
          <div className="grid  lg:grid-cols-2 gap-8 place-items-center">
            <div className="space-y-4 mr-4">
              <p className="text-[#ff5600]">Discover your text</p>
              <p className="text-[40px] josefin-sans tracking-tight">
                We provide good food <br /> for your family!
              </p>
              <p className="josefin-sans text-[20px]">
                Ut enim acgsd minim veniam, quxcis nostrud exercitation <br />
                ullamco laboris nisi ufsit aliquip ex ea commodo consequat is{" "}
                <br />
                aute irure m, quis nostrud exer.
              </p>
              <div className="flex md:flex-row flex-col gap-6">
                <div className="flex items-center gap-5">
                  <img
                    src="/assets/images/cooking.png"
                    alt="cook"
                    className="w-10 h-10"
                  />
                  <p className="poppins-medium">
                    Ut enim ad minim veniam,
                    <br /> quis nostrud exer.
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <img
                    src="/assets/images/dish.png"
                    alt="cook"
                    className="w-10 h-10"
                  />
                  <p className="poppins-medium">
                    Ut enim ad minim veniam,
                    <br />
                    quis nostrud exer.
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
                    Ut enim ad minim veniam, <br />
                    quis nostrud exer.
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <img
                    src="/assets/images/cooking.png"
                    alt="cook"
                    className="w-10 h-10"
                  />
                  <p className="poppins-medium">
                    Ut enim ad minim veniam,
                    <br /> quis nostrud exer.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-20">
              <img src="/assets/images/about.png" alt="about" />
            </div>
          </div>
        </div>
      </div>
      <div>
  
      </div>
      <div className="grid  my-40 lg:grid-cols-2 max-w-[80rem] mx-auto">
        <div className="mx-2 lg:px-3">
          <img
            src="/assets/images/about2.png"
            alt="cook"
            className="w-[570px] h-[630px]"
          />
        </div>
        <div className="mx-2 lg:px-10 px-5">
          <p className="text-[#ff5600] poppins-medium mt-[22px] mb-10">
            About Our Restaurant
          </p>
          <p className="lg:text-[49px] md:text-[35px] text-[25px] josefin-sans mb-[14px]">
            We Provide Good Food For Your Family!
          </p>
          <p className="mb-[25px] text-[18px]">
            Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
            laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m,
            quis nostrud exer{" "}
          </p>
          <p className="mb-[35px] text-[18px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected our,
            or randomised words which don't look even slightly believab If you
            are going to use a passage.
          </p>
          <button className="bg-white text-gray-800 border-2 border-[#ff5600] p-4 rounded text-[20px]">
            Learn more
          </button>
        </div>
      </div>
      <div className='bg-[url("/assets/images/section2.png")] bg-no-repeat w-full py-30  bg-center'>
        <div className="lg:flex md:flex justify-center  ">
          <div>
            <p className="text-[#ff5600] lg:text-[20px] text-[20px] mb-10 text-center">
              About Our Restaurant
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
      <div className="text-center my-40">
        <p className="text-[#ff5600] mb-4 text-[16px] poppins-medium ">
          Services We Offer
        </p>
        <p className="text-[49px] josefin-sans mb-[14px] ">Our Best Services</p>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2 shadow-[0_0_10px_rgba(0,0,0,0.15)] py-20">
          <img src="/assets/images/dish.png" alt="cook" className="w-30 h-30" />
          <p className="josefin-sans text-[25px]">Quality Food</p>
          <p className="poppins-medium text-gray-500 lg:text-[18px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>
      <div className='bg-[url("assets/images/section4.png")] w-full h-[700px] '>
        <div className="lg:max-w-[1000px] max-w-[500px] mx-auto lg:py-50 py-30 lg:ml-200 ml-3 mr-3">
          <div className="flex justify-end flex-col lg:items-center text-start">
            <div className="">
              <p className="poppins-medium text-[#ff5600] lg:mx-2 lg:text-start mb-3">
                About Our Restaurant
              </p>
              <p className="lg:text-[45px] text-[25px] lg:mx-2 josefin-sans mb-[14px] ">
                We Provide Good Food For Your Family!
              </p>
              <p className="poppins-medium text-[16px]  text-gray-700 pb-5 lg:mx-2 ">
                Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
                laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
                m, quis nostrud exer.
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
          Our New Blog News
        </p>
        <p className="lg:text-[45px] text-[25px] josefin-sans mb-[50px]">
          Our Recent News
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-8 justify-center lg:px-8 px-2">
          <div className="relative lg:mb-30 mb-15">
            <img
              src="/assets/images/blog1.png"
              alt="cook"
              className="rounderd w-full"
            />
            <div className="bg-gray-100 rounded lg:p-8 p-15 lg:ml-5 absolute -bottom-8 right-0 text-black hover:bg-[#ff5600] hover:text-white duration-300 cursor-pointer">
              <p className="poppins-medium text-gray-500">23 Dec,2020</p>
              <p className="josefin-sans lg:text-[20px] text-[18px]">
                Addiction When Food Plate Becomes
              </p>
            </div>
          </div>
          <div className="relative  lg:mb-30 mb-15">
            <img
              src="/assets/images/blog2.png"
              alt="cook"
              className="rounderd w-full"
            />
            <div className="bg-gray-100 rounded lg:p-8 p-15 lg:ml-5 absolute -bottom-8 right-0 text-black hover:bg-[#ff5600] hover:text-white duration-300 cursor-pointer">
              <p className="poppins-medium text-gray-500">23 Dec,2020</p>
              <p className="josefin-sans lg:text-[20px] text-[18px]">
                Addiction When Food Plate Becomes
              </p>
            </div>
          </div>
          <div className="relative  lg:mb-30 mb-15">
            <img
              src="/assets/images/blog3.png"
              alt="cook"
              className="rounderd w-full"
            />
            <div className="bg-gray-100 rounded lg:p-8 p-15 lg:ml-5  absolute -bottom-8 right-0 text-black hover:bg-[#ff5600] hover:text-white duration-300 cursor-pointer">
              <p className="poppins-medium text-gray-500">23 Dec,2020</p>
              <p className="josefin-sans lg:text-[20px] text-[18px]">
                Addiction When Food Plate Becomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
